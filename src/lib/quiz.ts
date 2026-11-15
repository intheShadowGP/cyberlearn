import type { Answer, Correction, Question } from '../content/types';

/** Normalise une réponse courte : casse, accents, espaces superflus. */
export function normalizeShort(s: string): string {
  return s
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .trim()
    .toLowerCase()
    .replace(/\s+/g, ' ');
}

export type Verdict = 'correct' | 'partial' | 'incorrect' | 'ungraded';

export interface QuestionResult {
  questionId: string;
  verdict: Verdict;
  /** Points obtenus entre 0 et 1. */
  points: number;
  /** La question est-elle comptée dans le score ? (les questions ouvertes non auto-évaluées ne le sont pas) */
  graded: boolean;
  skills: string[];
}

export function emptyAnswer(q: Question): Answer {
  switch (q.type) {
    case 'single':
      return { type: 'single', value: null };
    case 'multi':
      return { type: 'multi', value: [] };
    case 'truefalse':
      return { type: 'truefalse', value: null };
    case 'short':
      return { type: 'short', value: '' };
    case 'open':
      return { type: 'open', value: '' };
  }
}

export function isAnswered(a: Answer): boolean {
  switch (a.type) {
    case 'single':
      return a.value !== null;
    case 'multi':
      return a.value.length > 0;
    case 'truefalse':
      return a.value !== null;
    case 'short':
    case 'open':
      return a.value.trim().length > 0;
  }
}

/**
 * Note une question.
 * Choix multiples : notation stricte avec crédit partiel
 * (bonnes cochées − mauvaises cochées) / nombre de bonnes, borné à [0, 1].
 * Une réponse n'est « correcte » que si elle est exactement juste.
 */
export function gradeQuestion(q: Question, a: Answer, c: Correction): QuestionResult {
  const base = { questionId: q.id, skills: q.skills };
  if (a.type !== q.type || c.type !== q.type) {
    return { ...base, verdict: 'incorrect', points: 0, graded: true };
  }
  switch (c.type) {
    case 'single': {
      const ok = a.type === 'single' && a.value === c.correct;
      return { ...base, verdict: ok ? 'correct' : 'incorrect', points: ok ? 1 : 0, graded: true };
    }
    case 'truefalse': {
      const ok = a.type === 'truefalse' && a.value === c.correct;
      return { ...base, verdict: ok ? 'correct' : 'incorrect', points: ok ? 1 : 0, graded: true };
    }
    case 'multi': {
      if (a.type !== 'multi') return { ...base, verdict: 'incorrect', points: 0, graded: true };
      const good = new Set(c.correct);
      const chosen = new Set(a.value);
      let hits = 0;
      let misses = 0;
      for (const v of chosen) {
        if (good.has(v)) hits++;
        else misses++;
      }
      const exact = hits === good.size && misses === 0;
      const points = exact ? 1 : Math.max(0, (hits - misses) / good.size);
      const verdict: Verdict = exact ? 'correct' : points > 0 ? 'partial' : 'incorrect';
      return { ...base, verdict, points, graded: true };
    }
    case 'short': {
      if (a.type !== 'short') return { ...base, verdict: 'incorrect', points: 0, graded: true };
      const v = normalizeShort(a.value);
      const ok = c.accepted.some((acc) => normalizeShort(acc) === v);
      return { ...base, verdict: ok ? 'correct' : 'incorrect', points: ok ? 1 : 0, graded: true };
    }
    case 'open': {
      if (a.type !== 'open' || a.selfGrade === undefined) {
        return { ...base, verdict: 'ungraded', points: 0, graded: false };
      }
      return {
        ...base,
        verdict: a.selfGrade ? 'correct' : 'incorrect',
        points: a.selfGrade ? 1 : 0,
        graded: true,
      };
    }
  }
}

export interface QuizScore {
  score: number;
  max: number;
  percent: number;
  results: QuestionResult[];
  /** Taux de réussite par compétence (0–1) sur ce questionnaire. */
  bySkill: Record<string, { points: number; total: number }>;
}

export function scoreQuiz(results: QuestionResult[]): QuizScore {
  let score = 0;
  let max = 0;
  const bySkill: QuizScore['bySkill'] = {};
  for (const r of results) {
    if (!r.graded) continue;
    score += r.points;
    max += 1;
    for (const s of r.skills) {
      const e = (bySkill[s] ??= { points: 0, total: 0 });
      e.points += r.points;
      e.total += 1;
    }
  }
  const percent = max === 0 ? 0 : Math.round((score / max) * 100);
  return { score: Math.round(score * 100) / 100, max, percent, results, bySkill };
}

/** Mélange de Fisher–Yates avec source d'aléa cryptographique. */
export function shuffle<T>(items: readonly T[], rand: () => number = cryptoRandom): T[] {
  const a = items.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [a[i], a[j]] = [a[j] as T, a[i] as T];
  }
  return a;
}

export function cryptoRandom(): number {
  const buf = new Uint32Array(1);
  crypto.getRandomValues(buf);
  return (buf[0] as number) / 2 ** 32;
}

/**
 * Tire `n` questions en équilibrant les difficultés et en garantissant
 * la variété des types quand la banque le permet.
 */
export function drawQuestions(bank: readonly Question[], n: number, rand: () => number = cryptoRandom): Question[] {
  if (n >= bank.length) return shuffle(bank, rand);
  const pool = shuffle(bank, rand);
  const picked: Question[] = [];
  const types = new Set<string>();
  // 1er passage : un représentant par type.
  for (const q of pool) {
    if (picked.length >= n) break;
    if (!types.has(q.type)) {
      types.add(q.type);
      picked.push(q);
    }
  }
  for (const q of pool) {
    if (picked.length >= n) break;
    if (!picked.includes(q)) picked.push(q);
  }
  // Ordre de présentation : difficulté croissante.
  return picked.sort((x, y) => x.difficulty - y.difficulty);
}

export const PASS_THRESHOLD = 70;
