/**
 * Garde-fou qualité : le contenu publié (cours, laboratoires, épreuves) ne doit
 * contenir aucun texte de remplissage (TODO, FIXME, lorem ipsum, « à rédiger »…).
 * Le test parcourt les valeurs de chaîne réelles des modules de contenu, pas leur
 * code source, pour éviter les faux positifs sur les noms de champs.
 */
import { describe, expect, it } from 'vitest';

const sources: Record<string, unknown> = {
  ...import.meta.glob('./courses/*/meta.ts', { eager: true }),
  ...import.meta.glob('./courses/*/body.ts', { eager: true }),
  ...import.meta.glob('./courses/*/corrections.ts', { eager: true }),
  ...import.meta.glob('./courses/*/solutions.ts', { eager: true }),
  ...import.meta.glob('../labs/*/meta.ts', { eager: true }),
  ...import.meta.glob('../labs/*/body.ts', { eager: true }),
  ...import.meta.glob('../labs/*/corrections.ts', { eager: true }),
  ...import.meta.glob('./scenarios/*/meta.ts', { eager: true }),
  ...import.meta.glob('./scenarios/*/body.ts', { eager: true }),
  ...import.meta.glob('./scenarios/*/corrections.ts', { eager: true }),
};

// Marqueurs de remplissage non ambigus (n'apparaissent pas dans une prose légitime).
const PLACEHOLDER = /\b(TODO|FIXME|TBD|XXX|WIP)\b|lorem ipsum|bouche-?trou/i;

function collectStrings(v: unknown, out: string[]): void {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) for (const x of v) collectStrings(x, out);
  else if (v && typeof v === 'object') for (const x of Object.values(v)) collectStrings(x, out);
}

describe('qualité du contenu', () => {
  it('aucun texte de remplissage dans le contenu publié', () => {
    const hits: string[] = [];
    for (const [path, mod] of Object.entries(sources)) {
      const strings: string[] = [];
      collectStrings(mod, strings);
      for (const s of strings) if (PLACEHOLDER.test(s)) hits.push(`${path} : « ${s.slice(0, 90)} »`);
    }
    expect(hits, hits.join('\n')).toEqual([]);
  });
});
