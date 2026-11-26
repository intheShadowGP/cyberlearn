/**
 * Qualité des banques de questions et parité FR/EN.
 * S'applique à chaque cours qui possède un fichier `bank.ts` (banque migrée).
 * La couverture globale (tous les cours migrés) est exigée par `PHASE5_COMPLETE`.
 */
import { describe, expect, it } from 'vitest';
import { buildBank, renderCorrectionsModule, renderQuestionsModule, type BankItem } from './bank';
import { BANK_MAX, BANK_MIN, PHASE5_COMPLETE } from './migration';
import { normalizeShort } from '../lib/quiz';
import type { Block, CourseBody, CourseMeta, CourseMetaText, CourseSolutions } from './types';

const banksFr = import.meta.glob<{ bank: BankItem[] }>('./courses/*/bank.ts', { eager: true });
const banksEn = import.meta.glob<{ bank: BankItem[] }>('./courses/*/bank.en.ts', { eager: true });
const rawGenerated = import.meta.glob<string>('./courses/*/{questions,corrections}{,.en}.ts', { eager: true, query: '?raw', import: 'default' });
const metas = import.meta.glob<{ meta: CourseMeta }>('./courses/*/meta.ts', { eager: true });
const metasEn = import.meta.glob<{ metaText: CourseMetaText }>('./courses/*/meta.en.ts', { eager: true });
const bodiesFr = import.meta.glob<{ body: CourseBody }>('./courses/*/body.ts', { eager: true });
const bodiesEn = import.meta.glob<{ body: CourseBody }>('./courses/*/body.en.ts', { eager: true });
const solsFr = import.meta.glob<{ solutions: CourseSolutions }>('./courses/*/solutions.ts', { eager: true });
const solsEn = import.meta.glob<{ solutions: CourseSolutions }>('./courses/*/solutions.en.ts', { eager: true });

const dirOf = (p: string) => p.split('/').at(-2) ?? '';
const courseIds = Object.keys(metas).map(dirOf);
const moduleOf = (id: string) => metas[`./courses/${id}/meta.ts`]!.meta.module;

const LETTER_REFS = /ci-dessus|ci-dessous|toutes les r[ée]ponses|aucune des r[ée]ponses|all of the above|none of the above|both a and b|\ba et b\b|\ba, b\b/i;

function banks(lang: 'fr' | 'en'): [string, BankItem[]][] {
  const src = lang === 'fr' ? banksFr : banksEn;
  return Object.entries(src).map(([p, m]) => [dirOf(p), m.bank]);
}

describe.each([['fr'], ['en']] as const)('banques de questions (%s)', (lang) => {
  const list = banks(lang);

  it('les fichiers générés sont à jour (npm run banks)', () => {
    const suffix = lang === 'fr' ? '' : '.en';
    const stale: string[] = [];
    for (const [id, bank] of list) {
      const built = buildBank(id, bank);
      const q = rawGenerated[`./courses/${id}/questions${suffix}.ts`]?.replace(/\r\n/g, '\n');
      const c = rawGenerated[`./courses/${id}/corrections${suffix}.ts`]?.replace(/\r\n/g, '\n');
      if (q !== renderQuestionsModule(id, built.questions, suffix)) stale.push(`${id}/questions${suffix}.ts`);
      if (c !== renderCorrectionsModule(id, built.corrections, suffix)) stale.push(`${id}/corrections${suffix}.ts`);
    }
    expect(stale, stale.join('\n')).toEqual([]);
  });

  it('chaque banque respecte la taille, la variété et l’absence d’indices', () => {
    const errors: string[] = [];
    for (const [id, bank] of list) {
      const at = (q: string) => `${id}/${q}`;
      if (bank.length < BANK_MIN || bank.length > BANK_MAX) errors.push(`${id} : ${bank.length} questions (attendu ${BANK_MIN}–${BANK_MAX})`);
      const ids = new Set<string>();
      for (const q of bank) {
        if (ids.has(q.id)) errors.push(`${at(q.id)} : identifiant dupliqué`);
        ids.add(q.id);
        if (LETTER_REFS.test(q.p) || ('o' in q && q.o.some((o) => LETTER_REFS.test(o)))) errors.push(`${at(q.id)} : renvoi à l’ordre des réponses interdit`);
        if (q.t === 'multi' && (q.k < 2 || q.k >= q.o.length || q.o.length < 4 || q.o.length > 6)) errors.push(`${at(q.id)} : QCM multiple mal formé (k=${q.k}, ${q.o.length} options)`);
        if (q.t === 'single' && (q.o.length < 4 || q.o.length > 5)) errors.push(`${at(q.id)} : un QCM à réponse unique doit avoir 4 ou 5 options`);
        if (q.t === 'single' && Object.keys(q.w ?? {}).length === 0) errors.push(`${at(q.id)} : au moins une mauvaise réponse doit être expliquée (« pourquoi c’est faux »)`);
        if (q.t === 'multi' && Object.keys(q.w ?? {}).length === 0) errors.push(`${at(q.id)} : au moins une mauvaise réponse doit être expliquée`);
        if ('o' in q && new Set(q.o.map((o) => normalizeShort(o))).size !== q.o.length) errors.push(`${at(q.id)} : options dupliquées`);
        if (q.t === 'short' && q.a.length === 0) errors.push(`${at(q.id)} : aucune réponse acceptée`);
      }
      if (new Set(bank.map((q) => q.t)).size < 4) errors.push(`${id} : au moins 4 types de questions attendus`);
      if (new Set(bank.map((q) => q.d)).size < 3) errors.push(`${id} : les trois niveaux de difficulté doivent être représentés`);

      const singles = bank.filter((q): q is Extract<BankItem, { t: 'single' }> => q.t === 'single');
      if (singles.length >= 12) {
        // La position des bonnes réponses est générée : on vérifie la répartition réellement obtenue.
        const built = buildBank(id, bank);
        const counts: Record<string, number> = {};
        for (const q of singles) {
          const c = built.corrections[q.id];
          if (c?.type === 'single') counts[c.correct] = (counts[c.correct] ?? 0) + 1;
        }
        for (const [pos, n] of Object.entries(counts)) if (n / singles.length > 0.4) errors.push(`${id} : la position « ${pos} » porte ${n}/${singles.length} bonnes réponses`);
        if (Object.keys(counts).length < 4) errors.push(`${id} : les bonnes réponses n’occupent que ${Object.keys(counts).length} positions`);
        // Longueur : la bonne réponse ne doit pas se détacher.
        const longest = singles.filter((q) => q.o.slice(1).every((o) => o.length < q.o[0]!.length)).length;
        if (longest / singles.length > 0.4) errors.push(`${id} : la bonne réponse est la plus longue dans ${longest}/${singles.length} QCM`);
        const ratio = singles.reduce((s, q) => s + q.o[0]!.length / (q.o.slice(1).reduce((a, o) => a + o.length, 0) / (q.o.length - 1)), 0) / singles.length;
        if (ratio > 1.15) errors.push(`${id} : la bonne réponse est en moyenne ${(ratio * 100 - 100).toFixed(0)} % plus longue que les distracteurs`);
      }
      const tf = bank.filter((q) => q.t === 'truefalse');
      if (tf.length >= 6) {
        const yes = tf.filter((q) => q.t === 'truefalse' && q.v).length / tf.length;
        if (yes < 0.3 || yes > 0.7) errors.push(`${id} : ${(yes * 100).toFixed(0)} % de réponses « vrai » (attendu 30–70 %)`);
      }
    }
    expect(errors, errors.join('\n')).toEqual([]);
  });

  it('aucun doublon d’énoncé dans un même module', () => {
    const seen = new Map<string, string>();
    const dups: string[] = [];
    for (const [id, bank] of list) {
      for (const q of bank) {
        const key = `${moduleOf(id)}|${normalizeShort(q.p)}`;
        const prev = seen.get(key);
        if (prev) dups.push(`${id}/${q.id} = ${prev}`);
        seen.set(key, `${id}/${q.id}`);
      }
    }
    expect(dups, dups.join('\n')).toEqual([]);
  });
});

/* ---------- Parité FR / EN ---------- */

function sig(blocks: readonly Block[]): string[] {
  return blocks.map((b) => {
    switch (b.t) {
      case 'list': return `list${b.ordered ? 'o' : ''}:${b.items.length}`;
      case 'table': return `table:${b.head.length}x${b.rows.length}`;
      case 'callout': return `callout:${b.kind}`;
      case 'code': return `code:${b.lang}`;
      case 'diagram': return `diagram:${b.id}`;
      case 'example': return `example[${sig(b.blocks).join(',')}]`;
      default: return b.t;
    }
  });
}

describe('parité FR / EN des contenus migrés', () => {
  const en = banks('en');

  it('chaque banque anglaise reflète exactement la banque française', () => {
    const errors: string[] = [];
    for (const [id, bankEn] of en) {
      const fr = banksFr[`./courses/${id}/bank.ts`]?.bank;
      if (!fr) { errors.push(`${id} : bank.en.ts sans bank.ts`); continue; }
      if (fr.length !== bankEn.length) { errors.push(`${id} : ${fr.length} questions en français, ${bankEn.length} en anglais`); continue; }
      fr.forEach((q, i) => {
        const e = bankEn[i]!;
        const at = `${id}/${q.id}`;
        if (e.id !== q.id || e.t !== q.t || e.d !== q.d || JSON.stringify(e.s) !== JSON.stringify(q.s)) errors.push(`${at} : id, type, difficulté ou compétences différents`);
        if (q.t === 'single' || q.t === 'multi') {
          const eo = e as typeof q;
          if (eo.o.length !== q.o.length) errors.push(`${at} : nombre d’options différent`);
          if (q.t === 'multi' && (eo as typeof q).k !== q.k) errors.push(`${at} : nombre de bonnes réponses différent`);
          if (JSON.stringify(Object.keys(eo.w ?? {})) !== JSON.stringify(Object.keys(q.w ?? {}))) errors.push(`${at} : explications des distracteurs différentes`);
        }
        if (q.t === 'truefalse' && (e as typeof q).v !== q.v) errors.push(`${at} : réponse vrai/faux différente`);
        if (q.t === 'open' && (e as typeof q).c.length !== q.c.length) errors.push(`${at} : critères différents`);
        if (q.t === 'short' && (e as typeof q).a.length === 0) errors.push(`${at} : réponses acceptées manquantes`);
      });
    }
    expect(errors, errors.join('\n')).toEqual([]);
  });

  it('les fichiers meta/body/solutions anglais ont la même structure que les français', () => {
    const errors: string[] = [];
    for (const id of courseIds) {
      const hasAny = metasEn[`./courses/${id}/meta.en.ts`] || bodiesEn[`./courses/${id}/body.en.ts`] || solsEn[`./courses/${id}/solutions.en.ts`];
      if (!hasAny) continue;
      const m = metas[`./courses/${id}/meta.ts`]!.meta;
      const mt = metasEn[`./courses/${id}/meta.en.ts`]?.metaText;
      const b = bodiesFr[`./courses/${id}/body.ts`]!.body;
      const be = bodiesEn[`./courses/${id}/body.en.ts`]?.body;
      const s = solsFr[`./courses/${id}/solutions.ts`]!.solutions;
      const se = solsEn[`./courses/${id}/solutions.en.ts`]?.solutions;
      if (!mt || !be || !se) { errors.push(`${id} : traduction incomplète (meta.en / body.en / solutions.en)`); continue; }
      if (JSON.stringify(Object.keys(mt.skills).sort()) !== JSON.stringify(m.skills.map((x) => x.id).sort())) errors.push(`${id} : compétences de meta.en différentes`);
      if (mt.objectives.length !== m.objectives.length) errors.push(`${id} : nombre d’objectifs différent`);
      if (mt.prerequisiteKnowledge.length !== m.prerequisiteKnowledge.length) errors.push(`${id} : prérequis (texte) différents`);
      if (be.courseId !== id || se.courseId !== id) errors.push(`${id} : courseId incohérent`);
      const L = b.lesson, Le = be.lesson;
      if (L.sections.length !== Le.sections.length) errors.push(`${id} : nombre de sections différent`);
      L.sections.forEach((sec, i) => {
        const e = Le.sections[i];
        if (!e || e.id !== sec.id) { errors.push(`${id} : section ${sec.id} absente ou dans un autre ordre`); return; }
        if (sig(sec.blocks).join('|') !== sig(e.blocks).join('|')) errors.push(`${id} : blocs de la section ${sec.id} différents`);
      });
      for (const k of ['useCases', 'commonMistakes', 'bestPractices', 'keyPoints'] as const) if (L[k].length !== Le[k].length) errors.push(`${id} : ${k} (${L[k].length} ≠ ${Le[k].length})`);
      const psig = (x: CourseBody) => x.practice.map((p) => `${p.id}:${p.kind}:${p.steps.length}:${p.labId ?? ''}`).join('|');
      if (psig(b) !== psig(be)) errors.push(`${id} : exercices différents`);
      if (b.resources.length !== be.resources.length || b.resources.some((r, i) => r.url !== be.resources[i]?.url)) errors.push(`${id} : ressources différentes`);
      if (b.questions.length !== be.questions.length) errors.push(`${id} : nombre de questions différent`);
      if (JSON.stringify(Object.keys(s.practice)) !== JSON.stringify(Object.keys(se.practice))) errors.push(`${id} : corrigés d’exercices différents`);
      for (const k of Object.keys(s.practice)) if (sig(s.practice[k]!.blocks).join('|') !== sig(se.practice[k]?.blocks ?? []).join('|')) errors.push(`${id} : corrigé ${k} de structure différente`);
    }
    expect(errors, errors.join('\n')).toEqual([]);
  });
});

/* ---------- Couverture globale (obligatoire quand la migration est terminée) ---------- */

describe.runIf(PHASE5_COMPLETE)('couverture globale de la Phase 5', () => {
  it('tous les cours ont une banque et une version anglaise complète', () => {
    const missing = courseIds.filter((id) => !banksFr[`./courses/${id}/bank.ts`] || !banksEn[`./courses/${id}/bank.en.ts`] || !metasEn[`./courses/${id}/meta.en.ts`] || !bodiesEn[`./courses/${id}/body.en.ts`] || !solsEn[`./courses/${id}/solutions.en.ts`]);
    expect(missing).toEqual([]);
  });

  it('chaque module propose au moins les quatre niveaux', () => {
    const levels = new Map<string, Set<number>>();
    for (const id of courseIds) {
      const m = metas[`./courses/${id}/meta.ts`]!.meta;
      (levels.get(m.module) ?? levels.set(m.module, new Set()).get(m.module)!).add(m.level);
    }
    const gaps = [...levels].filter(([, s]) => s.size < 4).map(([k, s]) => `${k} : niveaux ${[...s].sort().join(',')}`);
    expect(gaps).toEqual([]);
  });
});
