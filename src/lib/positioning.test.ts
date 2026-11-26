import { describe, expect, it } from 'vitest';
import {
  POSITIONING_BANK,
  DOMAIN_DRAW,
  TEST_SIZE,
  POSITIONING_PASS,
  buildPositioningTest,
  scorePositioning,
  type PositioningDomain,
  type PositioningQuestion,
} from './positioning';
import { POSITIONING_EN } from './positioning.en';

/** Générateur pseudo-aléatoire déterministe pour des tirages reproductibles. */
function seeded(seed: number): () => number {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 0x100000000;
  };
}

describe('banque de positionnement', () => {
  it('le total de la répartition vaut exactement 20, seuil 14', () => {
    const total = Object.values(DOMAIN_DRAW).reduce((a, b) => a + b, 0);
    expect(total).toBe(TEST_SIZE);
    expect(TEST_SIZE).toBe(20);
    expect(POSITIONING_PASS).toBe(14);
  });

  it('chaque domaine contient au moins le double du tirage (tentatives disjointes possibles)', () => {
    for (const domain of Object.keys(DOMAIN_DRAW) as PositioningDomain[]) {
      const count = POSITIONING_BANK.filter((q) => q.domain === domain).length;
      expect(count, domain).toBeGreaterThanOrEqual(DOMAIN_DRAW[domain] * 2);
    }
  });

  it('chaque question est bien formée (4 options, réponse correcte existante, id unique)', () => {
    const ids = new Set<string>();
    for (const q of POSITIONING_BANK) {
      expect(q.options).toHaveLength(4);
      expect(q.options.some((opt) => opt.id === q.correct)).toBe(true);
      expect(ids.has(q.id)).toBe(false);
      ids.add(q.id);
    }
  });

  it('la longueur des options ne trahit pas la bonne réponse (FR et EN)', () => {
    const langs: [string, (q: PositioningQuestion) => string[]][] = [
      ['fr', (q) => q.options.map((opt) => opt.text)],
      ['en', (q) => [...POSITIONING_EN[q.id]!.options]],
    ];
    for (const [lang, get] of langs) {
      let longest = 0;
      let shortest = 0;
      let ratio = 0;
      for (const q of POSITIONING_BANK) {
        // La bonne réponse est stockée en première position (id « a »), avant mélange.
        const texts = get(q);
        const good = texts[0]!.length;
        const others = texts.slice(1).map((t) => t.length);
        if (good > Math.max(...others)) longest++;
        if (good < Math.min(...others)) shortest++;
        ratio += good / (others.reduce((a, b) => a + b, 0) / others.length);
      }
      const n = POSITIONING_BANK.length;
      expect(longest / n, lang + ' : bonne réponse la plus longue').toBeLessThanOrEqual(0.4);
      expect(shortest / n, lang + ' : bonne réponse la plus courte').toBeLessThanOrEqual(0.4);
      expect(ratio / n, lang + ' : longueur relative moyenne').toBeGreaterThan(0.9);
      expect(ratio / n, lang + ' : longueur relative moyenne').toBeLessThan(1.15);
    }
  });
});

describe('buildPositioningTest', () => {
  it('tire exactement 20 questions avec la bonne répartition par domaine', () => {
    const test = buildPositioningTest(seeded(42));
    expect(test).toHaveLength(TEST_SIZE);
    for (const domain of Object.keys(DOMAIN_DRAW) as PositioningDomain[]) {
      const n = test.filter((q) => q.domain === domain).length;
      expect(n, domain).toBe(DOMAIN_DRAW[domain]);
    }
  });

  it('ne tire jamais deux fois la même question', () => {
    const test = buildPositioningTest(seeded(7));
    const ids = test.map((q) => q.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('mélange les options : la bonne réponse n’est pas toujours « a »', () => {
    const test = buildPositioningTest(seeded(123));
    const letters = new Set(test.map((q) => q.correct));
    // Sur 20 questions, plusieurs positions correctes différentes doivent apparaître.
    expect(letters.size).toBeGreaterThan(1);
    // Les options restent étiquetées a–d par position.
    for (const q of test) expect(q.options.map((o) => o.id)).toEqual(['a', 'b', 'c', 'd']);
  });

  it('une nouvelle tentative ne réutilise aucune question de la précédente', () => {
    const first = buildPositioningTest(seeded(1));
    const second = buildPositioningTest(seeded(999), first.map((q) => q.id));
    const overlap = second.filter((q) => first.some((f) => f.id === q.id));
    expect(overlap).toHaveLength(0);
  });
});

describe('scorePositioning', () => {
  const allCorrect = (qs: PositioningQuestion[]): Record<string, string> =>
    Object.fromEntries(qs.map((q) => [q.id, q.correct]));

  it('14 bonnes réponses valident (seuil 70 %)', () => {
    const qs = buildPositioningTest(seeded(3));
    const answers = allCorrect(qs);
    for (const q of qs.slice(0, 6)) answers[q.id] = 'z'; // 6 fausses → 14/20
    const r = scorePositioning(qs, answers);
    expect(r.correct).toBe(14);
    expect(r.percent).toBe(70);
    expect(r.validated).toBe(true);
    expect(r.questionIds).toHaveLength(20);
  });

  it('13 bonnes réponses ne valident pas', () => {
    const qs = buildPositioningTest(seeded(4));
    const answers = allCorrect(qs);
    for (const q of qs.slice(0, 7)) answers[q.id] = 'z';
    const r = scorePositioning(qs, answers);
    expect(r.correct).toBe(13);
    expect(r.validated).toBe(false);
  });

  it('un sans-faute vaut 20/20 et valide', () => {
    const qs = buildPositioningTest(seeded(5));
    const r = scorePositioning(qs, allCorrect(qs));
    expect(r.correct).toBe(20);
    expect(r.percent).toBe(100);
    expect(r.validated).toBe(true);
  });

  it('un test tronqué (≠ 20 questions) ne peut pas valider', () => {
    const qs = buildPositioningTest(seeded(6)).slice(0, 14);
    const r = scorePositioning(qs, allCorrect(qs));
    expect(r.correct).toBe(14);
    expect(r.validated).toBe(false);
  });
});
