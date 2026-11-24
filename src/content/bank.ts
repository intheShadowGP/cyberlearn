/**
 * Banque de questions : format d'écriture compact et construction déterministe.
 *
 * Une banque s'écrit dans `courses/<id>/bank.ts` (français) et `bank.en.ts` (anglais), avec les
 * MÊMES identifiants, types, nombres d'options et clés de réponse. Le script `npm run banks`
 * génère ensuite, pour chaque langue :
 *   - `questions[.en].ts`   : énoncés et options, SANS réponses (chunk du cours) ;
 *   - `corrections[.en].ts` : réponses, explications, « pourquoi c'est faux » (chunk chargé à la validation).
 * Les fichiers `bank*.ts` ne sont importés par aucun module de l'application : les réponses ne
 * quittent donc jamais le chunk de corrections.
 *
 * Conventions d'écriture (pour éviter tout biais de position) :
 *   - QCM à réponse unique : `o[0]` est la bonne réponse ; les autres sont les distracteurs.
 *   - QCM à réponses multiples : `o[0..k-1]` sont les bonnes réponses (k ≥ 2).
 *   - Le générateur répartit ensuite la position de la bonne réponse de façon équilibrée et
 *     reproductible (identique en français et en anglais), puis réétiquette les options a, b, c…
 *   - Ne jamais écrire « toutes les réponses ci-dessus », « a et b »… : l'ordre n'est pas celui de l'écriture.
 *
 * Ce module est volontairement sans dépendance d'exécution (il est exécuté par Node et par Vitest).
 */
import type { Correction, Question } from './types';

interface BankBase {
  id: string;
  /** Énoncé. */
  p: string;
  /** Compétences évaluées (ids de `meta.skills`). */
  s: string[];
  /** Difficulté : 1 facile, 2 moyenne, 3 difficile. */
  d: 1 | 2 | 3;
  /** Explication pédagogique de la correction. */
  e: string;
  /** Contexte facultatif (extrait de journal, configuration, scénario…). */
  ctx?: { lang: string; code: string };
}

export type BankItem =
  | (BankBase & { t: 'single'; o: string[]; w?: Record<number, string> })
  | (BankBase & { t: 'multi'; o: string[]; k: number; w?: Record<number, string> })
  | (BankBase & { t: 'truefalse'; v: boolean })
  | (BankBase & { t: 'short'; a: string[]; ph?: string })
  | (BankBase & { t: 'open'; m: string; c: string[] });

export interface BuiltBank {
  questions: Question[];
  corrections: Record<string, Correction>;
}

const LETTERS = 'abcdefgh';

/** Hachage de chaîne (FNV-1a 32 bits) et générateur pseudo-aléatoire mulberry32 : reproductibles. */
function hash(s: string): number {
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return h >>> 0;
}

function rng(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffled<T>(arr: readonly T[], r: () => number): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(r() * (i + 1));
    [a[i], a[j]] = [a[j]!, a[i]!];
  }
  return a;
}

/**
 * Position cible de la bonne réponse d'un QCM unique : blocs de 4 positions tirées sans remise,
 * donc répartition quasi uniforme sur la banque entière. Ne dépend que de l'identifiant du cours,
 * du rang de la question et du nombre d'options (identiques dans les deux langues).
 */
function targetPosition(courseId: string, rank: number, n: number): number {
  const block = Math.floor(rank / 4);
  const perm = shuffled([0, 1, 2, 3], rng(hash(`${courseId}#pos#${block}`)));
  return (perm[rank % 4] ?? 0) % n;
}

export function buildBank(courseId: string, items: readonly BankItem[]): BuiltBank {
  const questions: Question[] = [];
  const corrections: Record<string, Correction> = {};
  let singleRank = 0;

  for (const it of items) {
    const base = { id: it.id, prompt: it.p, skills: it.s, difficulty: it.d, ...(it.ctx ? { context: it.ctx } : {}) };
    switch (it.t) {
      case 'single': {
        const n = it.o.length;
        const pos = targetPosition(courseId, singleRank++, n);
        const rest = shuffled(it.o.slice(1).map((_, i) => i + 1), rng(hash(`${courseId}#${it.id}`)));
        // order[k] = indice d'écriture de l'option affichée à la position k.
        const order: number[] = [];
        let r = 0;
        for (let k = 0; k < n; k++) order.push(k === pos ? 0 : rest[r++]!);
        questions.push({ ...base, type: 'single', options: order.map((src, k) => ({ id: LETTERS[k]!, text: it.o[src]! })) });
        corrections[it.id] = {
          type: 'single',
          correct: LETTERS[pos]!,
          explanation: it.e,
          ...whyWrong(it.w, order),
        };
        break;
      }
      case 'multi': {
        const order = shuffled(it.o.map((_, i) => i), rng(hash(`${courseId}#${it.id}`)));
        questions.push({ ...base, type: 'multi', options: order.map((src, k) => ({ id: LETTERS[k]!, text: it.o[src]! })) });
        corrections[it.id] = {
          type: 'multi',
          correct: order.flatMap((src, k) => (src < it.k ? [LETTERS[k]!] : [])),
          explanation: it.e,
          ...whyWrong(it.w, order),
        };
        break;
      }
      case 'truefalse':
        questions.push({ ...base, type: 'truefalse' });
        corrections[it.id] = { type: 'truefalse', correct: it.v, explanation: it.e };
        break;
      case 'short':
        questions.push({ ...base, type: 'short', ...(it.ph ? { placeholder: it.ph } : {}) });
        corrections[it.id] = { type: 'short', accepted: it.a, explanation: it.e };
        break;
      case 'open':
        questions.push({ ...base, type: 'open' });
        corrections[it.id] = { type: 'open', model: it.m, criteria: it.c, explanation: it.e };
        break;
    }
  }
  return { questions, corrections };
}

function whyWrong(w: Record<number, string> | undefined, order: number[]): { whyWrong?: Record<string, string> } {
  if (!w) return {};
  const out: Record<string, string> = {};
  for (const [src, text] of Object.entries(w)) {
    const k = order.indexOf(Number(src));
    if (k >= 0) out[LETTERS[k]!] = text;
  }
  return Object.keys(out).length ? { whyWrong: out } : {};
}

/** Source TypeScript d'un module généré (formatage stable : le test de synchronisation compare le texte). */
export function renderQuestionsModule(_courseId: string, qs: Question[], suffix: '' | '.en'): string {
  return `// Fichier GÉNÉRÉ par \`npm run banks\` à partir de bank${suffix}.ts — ne pas modifier à la main.\n// Aucune réponse ici : les corrections sont dans corrections${suffix}.ts (chunk séparé).\nimport type { Question } from '../../types';\n\nexport const questions: Question[] = ${JSON.stringify(qs, null, 2)};\n`;
}

export function renderCorrectionsModule(courseId: string, c: Record<string, Correction>, suffix: '' | '.en'): string {
  return `// Fichier GÉNÉRÉ par \`npm run banks\` à partir de bank${suffix}.ts — ne pas modifier à la main.\nimport type { CourseCorrections } from '../../types';\n\nexport const corrections: CourseCorrections = {\n  courseId: ${JSON.stringify(courseId)},\n  questions: ${JSON.stringify(c, null, 2).replace(/\n/g, '\n  ')},\n};\n`;
}
