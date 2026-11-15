import { describe, expect, it } from 'vitest';
import { validateContent, findForbiddenFields, type ContentSet } from './validate';
import type { CourseBody, CourseCorrections, CourseMeta, CourseSolutions, LabBody, LabCorrections, LabMeta } from './types';
import { MODULES } from './catalog';
import { DIAGRAMS } from '../components/diagrams';
import { PATHS } from './paths';
import { EXAM_BY_ID } from './exams';

const metas = import.meta.glob<{ meta: CourseMeta }>('./courses/*/meta.ts', { eager: true });
const bodies = import.meta.glob<{ body: CourseBody }>('./courses/*/body.ts', { eager: true });
const corrs = import.meta.glob<{ corrections: CourseCorrections }>('./courses/*/corrections.ts', { eager: true });
const sols = import.meta.glob<{ solutions: CourseSolutions }>('./courses/*/solutions.ts', { eager: true });
const labMetas = import.meta.glob<{ meta: LabMeta }>('../labs/*/meta.ts', { eager: true });
const labBodies = import.meta.glob<{ body: LabBody }>('../labs/*/body.ts', { eager: true });
const labCorrs = import.meta.glob<{ corrections: LabCorrections }>('../labs/*/corrections.ts', { eager: true });
const labComponents = import.meta.glob('../labs/*/Lab.tsx');

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

describe('findForbiddenFields', () => {
  it('détecte un champ de réponse imbriqué', () => {
    expect(findForbiddenFields({ a: [{ b: { correct: 'x' } }] })).toEqual(['$.a[0].b.correct']);
  });
  it('accepte un objet propre', () => {
    expect(findForbiddenFields({ id: 'q', options: [{ id: 'a', text: 'b' }] })).toEqual([]);
  });
});
