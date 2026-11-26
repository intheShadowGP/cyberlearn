/**
 * Métriques de qualité du contenu (audit 9.2) : docs/QUALITY_METRICS.md est GÉNÉRÉ.
 * Régénération : npm run metrics
 * Ce fichier mesure ; il ne juge pas. Les seuils de non-régression sont en bas de fichier.
 */
import { describe, expect, it } from 'vitest';
import { readFileSync, writeFileSync } from 'node:fs';
import { COURSES } from './registry';
import type { Block, CourseBody, Inline } from './types';
import type { BankItem } from './bank';

const bodiesFr = import.meta.glob<{ body: CourseBody }>('./courses/*/body.ts', { eager: true });
const bodiesEn = import.meta.glob<{ body: CourseBody }>('./courses/*/body.en.ts', { eager: true });
const banksFr = import.meta.glob<{ bank: BankItem[] }>('./courses/*/bank.ts', { eager: true });

const words = (s: string) => (s.match(/[\p{L}\p{N}]+/gu) ?? []).length;
const inl = (xs: readonly Inline[]) => xs.reduce((n, x) => n + words(x), 0);

function blockWords(bs: readonly Block[]): number {
  let n = 0;
  for (const b of bs) {
    switch (b.t) {
      case 'p': case 'callout': case 'def': n += words(b.text); break;
      case 'h': n += words(b.text); break;
      case 'list': n += inl(b.items); break;
      case 'table': n += b.rows.reduce((a, r) => a + inl(r), 0); break;
      case 'example': n += blockWords(b.blocks); break;
      default: break; // code et schémas : non comptés comme prose
    }
  }
  return n;
}

function lessonWords(body: CourseBody): number {
  const l = body.lesson;
  return words(l.intro) + l.sections.reduce((n, s) => n + blockWords(s.blocks), 0)
    + inl(l.useCases) + inl(l.commonMistakes) + inl(l.bestPractices) + inl(l.keyPoints);
}

const bodyOf = (id: string, lang: 'fr' | 'en') =>
  (lang === 'fr' ? bodiesFr : bodiesEn)[`./courses/${id}/body${lang === 'en' ? '.en' : ''}.ts`]!.body;

/** Similarité de Jaccard sur les trigrammes de mots d'un énoncé. */
function shingles(s: string): Set<string> {
  const w = (s.toLowerCase().match(/[\p{L}\p{N}]+/gu) ?? []).filter((x) => x.length > 2);
  const out = new Set<string>();
  for (let i = 0; i + 2 < w.length; i++) out.add(`${w[i]} ${w[i + 1]} ${w[i + 2]}`);
  return out;
}
function jaccard(a: Set<string>, b: Set<string>): number {
  if (!a.size || !b.size) return 0;
  let inter = 0;
  for (const x of a) if (b.has(x)) inter++;
  return inter / (a.size + b.size - inter);
}

/** Explications de mauvaises réponses (FR) : total et part des formules de 5 mots ou moins (« Sans rapport. »). */
function wrongAnswerExplanations(): { total: number; short: number } {
  let total = 0;
  let short = 0;
  for (const m of Object.values(banksFr)) {
    for (const q of m.bank) {
      if (!('o' in q) || !q.w) continue;
      for (const text of Object.values(q.w)) {
        total++;
        if (String(text).trim().split(/\s+/).length <= 5) short++;
      }
    }
  }
  return { total, short };
}

const TYPE_CODE: Record<string, string> = { single: 'U', multi: 'M', truefalse: 'VF', short: 'C', open: 'O' };

interface Row {
  id: string; module: string; level: number; sections: number; wordsFr: number; wordsEn: number;
  practice: number; labs: number; resources: number; https: number; questions: number; types: string;
  whyWrongRate: number; openRate: number; ctxRate: number; skills: number;
}

function rows(): Row[] {
  return COURSES.map((c) => {
    const fr = bodyOf(c.id, 'fr');
    const en = bodyOf(c.id, 'en');
    const bank = banksFr[`./courses/${c.id}/bank.ts`]?.bank ?? [];
    const mc = bank.filter((q): q is Extract<BankItem, { o: string[] }> => 'o' in q);
    const mix: Record<string, number> = {};
    for (const q of bank) mix[q.t] = (mix[q.t] ?? 0) + 1;
    return {
      id: c.id, module: c.module, level: c.level, sections: fr.lesson.sections.length,
      wordsFr: lessonWords(fr), wordsEn: lessonWords(en), practice: fr.practice.length,
      labs: fr.practice.filter((p) => p.labId).length, resources: fr.resources.length,
      https: fr.resources.filter((r) => r.url?.startsWith('https://')).length,
      questions: fr.questions.length,
      types: Object.entries(mix).map(([k, v]) => `${TYPE_CODE[k] ?? k}${v}`).join(' '),
      whyWrongRate: mc.length ? mc.filter((q) => q.w && Object.keys(q.w).length > 0).length / mc.length : 0,
      openRate: bank.filter((q) => q.t === 'open').length / (bank.length || 1),
      ctxRate: bank.filter((q) => q.ctx).length / (bank.length || 1),
      skills: new Set(bank.flatMap((q) => q.s)).size,
    };
  });
}

function nearDuplicates(threshold: number): { a: string; b: string; sim: number }[] {
  const items: { key: string; mod: string; sh: Set<string> }[] = [];
  for (const [p, m] of Object.entries(banksFr)) {
    const course = p.split('/').at(-2)!;
    const mod = COURSES.find((c) => c.id === course)?.module ?? '?';
    for (const q of m.bank) items.push({ key: `${course}/${q.id}`, mod, sh: shingles(q.p) });
  }
  const out: { a: string; b: string; sim: number }[] = [];
  for (let i = 0; i < items.length; i++) {
    if (items[i]!.sh.size < 3) continue;
    for (let j = i + 1; j < items.length; j++) {
      const sim = jaccard(items[i]!.sh, items[j]!.sh);
      if (sim >= threshold) out.push({ a: items[i]!.key, b: items[j]!.key, sim });
    }
  }
  return out.sort((x, y) => y.sim - x.sim);
}

const pct = (x: number) => `${Math.round(x * 100)} %`;
const median = (xs: number[]) => [...xs].sort((a, b) => a - b)[Math.floor(xs.length / 2)] ?? 0;

function render(): string {
  const rs = rows();
  const dups = nearDuplicates(0.5);
  const L = [
    '# Métriques de qualité du contenu',
    '',
    '> Fichier généré par `npm run metrics` ; un test vérifie qu’il est à jour. Les métriques **mesurent** (mots, structure, similarité) ; elles ne remplacent pas une relecture pédagogique par un praticien.',
    '> Mots : prose de la leçon (introduction, sections, cas d’usage, erreurs, bonnes pratiques, points clés) ; code et schémas exclus.',
    '',
    '## Synthèse',
    '',
    '| Mesure | Valeur |',
    '| --- | --- |',
    `| Cours | ${rs.length} |`,
    `| Mots de leçon, médiane (FR) | ${median(rs.map((r) => r.wordsFr))} |`,
    `| Mots de leçon, minimum / maximum (FR) | ${Math.min(...rs.map((r) => r.wordsFr))} / ${Math.max(...rs.map((r) => r.wordsFr))} |`,
    `| Cours de moins de 1 500 mots (FR) | ${rs.filter((r) => r.wordsFr < 1500).length} |`,
    `| Rapport mots EN / FR, minimum – maximum | ${Math.min(...rs.map((r) => r.wordsEn / r.wordsFr)).toFixed(2)} – ${Math.max(...rs.map((r) => r.wordsEn / r.wordsFr)).toFixed(2)} |`,
    `| Cours avec au moins un exercice lié à un laboratoire | ${rs.filter((r) => r.labs > 0).length} |`,
    `| Cours sans aucune ressource externe HTTPS | ${rs.filter((r) => r.https === 0).length} |`,
    `| Questions à choix avec « pourquoi c’est faux » (moyenne des cours) | ${pct(rs.reduce((n, r) => n + r.whyWrongRate, 0) / rs.length)} |`,
    `| Explications de mauvaises réponses de 5 mots ou moins, sur le total (FR) | ${wrongAnswerExplanations().short} sur ${wrongAnswerExplanations().total} |`,
    `| Paires de questions quasi identiques entre cours (similarité ≥ 0,5) | ${dups.length} |`,
    '',
    '## Par cours',
    '',
    '| Cours | Mod. | Niv. | Sections | Mots FR | Mots EN | Exercices | dont labo | Ress. | HTTPS | Questions | Types (U unique, M multiple, VF, C courte, O ouverte) | Pourquoi faux | Compétences |',
    '| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |',
    ...rs.map((r) => `| \`${r.id}\` | ${r.module} | ${r.level} | ${r.sections} | ${r.wordsFr} | ${r.wordsEn} | ${r.practice} | ${r.labs} | ${r.resources} | ${r.https} | ${r.questions} | ${r.types} | ${pct(r.whyWrongRate)} | ${r.skills} |`),
    '',
    '## Questions quasi identiques entre cours (similarité ≥ 0,5)',
    '',
    dups.length ? '| Similarité | Question A | Question B |\n| --- | --- | --- |' : 'Aucune.',
    ...dups.slice(0, 60).map((d) => `| ${d.sim.toFixed(2)} | \`${d.a}\` | \`${d.b}\` |`),
    dups.length > 60 ? `\n… ${dups.length - 60} autres paires.` : '',
    '',
  ];
  return L.join('\n');
}

describe('métriques de contenu', () => {
  it('docs/QUALITY_METRICS.md est à jour', () => {
    const expected = render();
    if (process.env.UPDATE_METRICS === '1') writeFileSync('docs/QUALITY_METRICS.md', expected);
    expect(readFileSync('docs/QUALITY_METRICS.md', 'utf8').replace(/\r\n/g, '\n')).toBe(expected);
  });

  it('aucun cours ne passe sous le plancher de profondeur et la version anglaise ne s’en écarte pas', () => {
    const bad: string[] = [];
    for (const r of rows()) {
      if (r.wordsFr < 1000) bad.push(`${r.id} : ${r.wordsFr} mots (FR)`);
      const ratio = r.wordsEn / r.wordsFr;
      if (ratio < 0.75 || ratio > 1.4) bad.push(`${r.id} : rapport EN/FR ${ratio.toFixed(2)}`);
    }
    expect(bad, bad.join('\n')).toEqual([]);
  });
});
