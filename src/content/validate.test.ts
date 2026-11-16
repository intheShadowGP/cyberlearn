import { describe, expect, it } from 'vitest';
import { validateContent, findForbiddenFields, type ContentSet } from './validate';
import type { Answer, CourseBody, CourseCorrections, CourseMeta, CourseSolutions, LabBody, LabCorrections, LabMeta } from './types';
import { gradeQuestion } from '../lib/quiz';
import { MODULES } from './catalog';
import { DIAGRAMS } from '../components/diagrams';
import { PATHS } from './paths';
import { EXAM_BY_ID } from './exams';
import type { ScenarioMeta, ScenarioBody, ScenarioCorrections } from './scenarios';
import { VERIFICATION } from './verification';

const metas = import.meta.glob<{ meta: CourseMeta }>('./courses/*/meta.ts', { eager: true });
const bodies = import.meta.glob<{ body: CourseBody }>('./courses/*/body.ts', { eager: true });
const corrs = import.meta.glob<{ corrections: CourseCorrections }>('./courses/*/corrections.ts', { eager: true });
const sols = import.meta.glob<{ solutions: CourseSolutions }>('./courses/*/solutions.ts', { eager: true });
const labMetas = import.meta.glob<{ meta: LabMeta }>('../labs/*/meta.ts', { eager: true });
const labBodies = import.meta.glob<{ body: LabBody }>('../labs/*/body.ts', { eager: true });
const labCorrs = import.meta.glob<{ corrections: LabCorrections }>('../labs/*/corrections.ts', { eager: true });
const labComponents = import.meta.glob('../labs/*/Lab.tsx');
const scMetas = import.meta.glob<{ meta: ScenarioMeta }>('./scenarios/*/meta.ts', { eager: true });
const scBodies = import.meta.glob<{ body: ScenarioBody }>('./scenarios/*/body.ts', { eager: true });
const scCorrs = import.meta.glob<{ corrections: ScenarioCorrections }>('./scenarios/*/corrections.ts', { eager: true });

const dir = (p: string) => p.split('/').at(-2) ?? '';

function buildSet(): ContentSet {
  const courses = Object.entries(metas).map(([p, m]) => {
    const d = dir(p);
    const body = bodies[`./courses/${d}/body.ts`]?.body;
    const corrections = corrs[`./courses/${d}/corrections.ts`]?.corrections;
    const solutions = sols[`./courses/${d}/solutions.ts`]?.solutions;
    if (!body || !corrections || !solutions) throw new Error(`Cours ${d} incomplet (body.ts / corrections.ts / solutions.ts)`);
    return { dir: d, meta: m.meta, body, corrections, solutions };
  });
  const labs = Object.entries(labMetas).map(([p, m]) => {
    const d = dir(p);
    const body = labBodies[`../labs/${d}/body.ts`]?.body;
    const corrections = labCorrs[`../labs/${d}/corrections.ts`]?.corrections;
    if (!body || !corrections) throw new Error(`Labo ${d} incomplet`);
    return { dir: d, meta: m.meta, body, corrections, hasComponent: `../labs/${d}/Lab.tsx` in labComponents };
  });
  return { courses, labs, diagramIds: new Set(Object.keys(DIAGRAMS)) };
}

describe('contenu pédagogique', () => {
  const set = buildSet();

  it('contient au moins un cours et un laboratoire', () => {
    expect(set.courses.length).toBeGreaterThan(0);
    expect(set.labs.length).toBeGreaterThan(0);
  });

  it('respecte la structure pédagogique obligatoire et la séparation des réponses', () => {
    const errors = validateContent(set);
    expect(errors, errors.join('\n')).toEqual([]);
  });

  it('chaque parcours a un projet final complet (mission, livrables, critères)', () => {
    const errors: string[] = [];
    for (const p of PATHS) {
      const fp = p.finalProject;
      if (!fp) { errors.push(`${p.id} : projet final manquant`); continue; }
      if (fp.mission.trim().length < 40) errors.push(`${p.id} : mission du projet final trop courte`);
      if (fp.deliverables.length < 2) errors.push(`${p.id} : au moins 2 livrables attendus`);
      if (fp.criteria.length < 2) errors.push(`${p.id} : au moins 2 critères de réussite`);
    }
    expect(errors, errors.join('\n')).toEqual([]);
  });

  it('chaque fichier de cours a ses trois parties', () => {
    for (const p of Object.keys(bodies)) expect(metas[p.replace('body.ts', 'meta.ts')]).toBeDefined();
    for (const p of Object.keys(corrs)) expect(metas[p.replace('corrections.ts', 'meta.ts')]).toBeDefined();
  });

  it('les parcours et examens ne référencent que du contenu publié', () => {
    const courseIds = new Set(set.courses.map((c) => c.meta.id));
    const labIds = new Set(set.labs.map((l) => l.meta.id));
    for (const p of PATHS) {
      expect(p.steps.length).toBeGreaterThan(2);
      const seen = new Set<string>();
      for (const s of p.steps) {
        expect(s.kind === 'course' ? courseIds.has(s.id) : labIds.has(s.id), `${p.id} → ${s.id}`).toBe(true);
        if (s.kind === 'course') {
          const meta = set.courses.find((c) => c.meta.id === s.id)!.meta;
          for (const pre of meta.prerequisites) expect(seen.has(pre), `parcours ${p.id} : ${s.id} exige ${pre} plus tôt dans le parcours`).toBe(true);
          seen.add(s.id);
        }
      }
    }
  });

  it('parcours : contenu suffisant, laboratoires, disciplines centrales, examen final', () => {
    expect(PATHS.length).toBeGreaterThanOrEqual(11);
    for (const p of PATHS) {
      const courseIds = p.steps.filter((s) => s.kind === 'course').map((s) => s.id);
      const metas = courseIds.map((id) => set.courses.find((c) => c.meta.id === id)!.meta);
      expect(courseIds.length, `${p.id} : au moins 4 cours`).toBeGreaterThanOrEqual(4);
      expect(p.steps.some((s) => s.kind === 'lab'), `${p.id} : au moins un laboratoire`).toBe(true);
      expect(p.objectives.length, `${p.id} : objectifs`).toBeGreaterThanOrEqual(3);
      expect(p.prerequisites.length, `${p.id} : prérequis`).toBeGreaterThanOrEqual(1);
      const core = metas.filter((m) => p.coreModules.includes(m.module)).length;
      expect(core, `${p.id} : au moins 2 cours dans les disciplines centrales`).toBeGreaterThanOrEqual(2);
      const exam = EXAM_BY_ID.get(`parcours-${p.id}`);
      expect(exam, `${p.id} : examen final`).toBeDefined();
      const graded = courseIds.reduce((n, id) => n + set.courses.find((c) => c.meta.id === id)!.body.questions.filter((q) => q.type !== 'open').length, 0);
      expect(graded, `${p.id} : banque de l’examen final ≥ 2 × taille`).toBeGreaterThanOrEqual(exam!.size * 2);
      expect(new Set(p.steps.map((s) => s.id)).size, `${p.id} : étapes uniques`).toBe(p.steps.length);
    }
  });

  it('aucune question n’est répétée à l’identique entre cours et laboratoires', () => {
    const norm = (s: string) => s.toLowerCase().normalize('NFD').replace(/[^a-z0-9]+/g, ' ').trim();
    const prompts = [...set.courses.flatMap((c) => c.body.questions), ...set.labs.flatMap((l) => l.body.questions)].map((q) => norm(q.prompt));
    const dup = prompts.filter((p, i) => prompts.indexOf(p) !== i);
    expect(dup).toEqual([]);
  });

  it('chaque cours a une fiche de vérification', () => {
    for (const c of set.courses) {
      const v = VERIFICATION[c.meta.id];
      expect(v, c.meta.id).toBeDefined();
      expect(v!.versions.length, c.meta.id).toBeGreaterThan(0);
      expect(v!.revisedOn).toMatch(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/);
    }
  });

  it('les sujets de la cartographie ont des identifiants uniques', () => {
    const ids = MODULES.flatMap((m) => m.topics.map((t) => t.id));
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('affiche la couverture actuelle', () => {
    const covered = new Set(set.courses.flatMap((c) => c.meta.topics));
    const total = MODULES.reduce((n, m) => n + m.topics.length, 0);
    const questions = set.courses.reduce((n, c) => n + c.body.questions.length, 0);
    console.info(
      `Couverture : ${set.courses.length} cours, ${set.labs.length} laboratoires, ${questions} questions, ` +
        `${covered.size}/${total} sujets de la cartographie abordés.`,
    );
    expect(covered.size).toBeGreaterThan(0);
  });
});

describe('épreuves de démarche (scénarios)', () => {
  const courseSkillIds = new Map<string, Set<string>>();
  for (const { meta: m } of Object.values(metas)) {
    courseSkillIds.set(m.id, new Set(m.skills.map((s) => s.id)));
  }
  const courseIds = new Set(Object.values(metas).map((m) => m.meta.id));

  const scenarios = Object.entries(scMetas).map(([p, m]) => {
    const d = dir(p);
    const body = scBodies[`./scenarios/${d}/body.ts`]?.body;
    const corrections = scCorrs[`./scenarios/${d}/corrections.ts`]?.corrections;
    if (!body || !corrections) throw new Error(`Scénario ${d} incomplet (body.ts / corrections.ts)`);
    return { dir: d, meta: m.meta, body, corrections };
  });

  it('au moins une épreuve, identifiants uniques et cohérents', () => {
    expect(scenarios.length).toBeGreaterThan(0);
    const ids = scenarios.map((s) => s.meta.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const s of scenarios) {
      expect(s.meta.id, s.dir).toBe(s.dir);
      expect(s.body.scenarioId, s.dir).toBe(s.meta.id);
      expect(s.corrections.scenarioId, s.dir).toBe(s.meta.id);
      expect(/^[a-z0-9-]{1,64}$/.test(s.meta.id), s.meta.id).toBe(true);
    }
  });

  it('dossier multi-sources, questions notées, corrections complètes, compétences valides, réponses séparées', () => {
    const errors: string[] = [];
    for (const { meta, body, corrections } of scenarios) {
      for (const c of meta.relatedCourses) if (!courseIds.has(c)) errors.push(`${meta.id} : cours lié inconnu ${c}`);
      if (meta.relatedCourses.length < 1) errors.push(`${meta.id} : au moins un cours lié attendu`);
      const validSkills = new Set(meta.relatedCourses.flatMap((c) => [...(courseSkillIds.get(c) ?? [])]));

      const sources = body.dossier.filter((b) => b.t === 'code' || b.t === 'table').length;
      if (sources < 2) errors.push(`${meta.id} : le dossier doit comporter au moins 2 sources (bloc code ou table)`);

      if (body.questions.length !== meta.questionCount) errors.push(`${meta.id} : questionCount (${meta.questionCount}) ≠ ${body.questions.length} questions`);
      if (body.questions.length < 5) errors.push(`${meta.id} : au moins 5 questions attendues`);

      const qids = new Set<string>();
      for (const q of body.questions) {
        if (qids.has(q.id)) errors.push(`${meta.id} : question dupliquée ${q.id}`);
        qids.add(q.id);
        if (q.type === 'open') errors.push(`${meta.id}/${q.id} : question ouverte interdite (non notée, viderait le seuil de 70 %)`);
        if (![1, 2, 3].includes(q.difficulty)) errors.push(`${meta.id}/${q.id} : difficulté invalide`);
        if (q.skills.length === 0) errors.push(`${meta.id}/${q.id} : aucune compétence`);
        for (const sk of q.skills) if (!validSkills.has(sk)) errors.push(`${meta.id}/${q.id} : compétence ${sk} absente des cours liés`);

        const optIds = q.type === 'single' || q.type === 'multi' ? new Set(q.options.map((o) => o.id)) : new Set<string>();
        if ((q.type === 'single' || q.type === 'multi') && (q.options.length < 2 || optIds.size !== q.options.length)) {
          errors.push(`${meta.id}/${q.id} : au moins 2 options aux identifiants uniques`);
        }

        const c = corrections.questions[q.id];
        if (!c) { errors.push(`${meta.id}/${q.id} : correction manquante`); continue; }
        if (c.type !== q.type) errors.push(`${meta.id}/${q.id} : type de correction (${c.type}) ≠ type de question (${q.type})`);
        if (!c.explanation || c.explanation.trim().length < 10) errors.push(`${meta.id}/${q.id} : explication trop courte`);
        if (c.type === 'single' && !optIds.has(c.correct)) errors.push(`${meta.id}/${q.id} : réponse correcte hors options`);
        if (c.type === 'multi') {
          if (c.correct.length === 0) errors.push(`${meta.id}/${q.id} : correction multi vide`);
          for (const id of c.correct) if (!optIds.has(id)) errors.push(`${meta.id}/${q.id} : option correcte ${id} hors options`);
        }
      }
      for (const qid of Object.keys(corrections.questions)) if (!qids.has(qid)) errors.push(`${meta.id} : correction orpheline ${qid}`);
      if (!corrections.debrief || corrections.debrief.length === 0) errors.push(`${meta.id} : débriefing vide`);

      const forbidden = findForbiddenFields(body as unknown);
      if (forbidden.length) errors.push(`${meta.id} : champ de réponse présent dans body (${forbidden.join(', ')})`);
    }
    expect(errors, errors.join('\n')).toEqual([]);
  });

  it('la réponse déclarée correcte de chaque question est bien notée « correct »', () => {
    const errors: string[] = [];
    for (const { meta, body, corrections } of scenarios) {
      for (const q of body.questions) {
        const c = corrections.questions[q.id];
        if (!c) continue;
        let a: Answer;
        switch (c.type) {
          case 'single': a = { type: 'single', value: c.correct }; break;
          case 'multi': a = { type: 'multi', value: [...c.correct] }; break;
          case 'truefalse': a = { type: 'truefalse', value: c.correct }; break;
          case 'short': a = { type: 'short', value: c.accepted[0] ?? '' }; break;
          default: continue;
        }
        const r = gradeQuestion(q, a, c);
        if (r.verdict !== 'correct') errors.push(`${meta.id}/${q.id} : réponse correcte déclarée notée « ${r.verdict} »`);
      }
    }
    expect(errors, errors.join('\n')).toEqual([]);
  });
});

describe('findForbiddenFields', () => {
  it('détecte un champ de réponse imbriqué', () => {
    expect(findForbiddenFields({ a: [{ b: { correct: 'x' } }] })).toEqual(['$.a[0].b.correct']);
  });
  it('accepte un objet propre', () => {
    expect(findForbiddenFields({ id: 'q', options: [{ id: 'a', text: 'b' }] })).toEqual([]);
  });
});
