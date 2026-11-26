import { describe, expect, it } from 'vitest';
import { C2_DOMAIN, IMPORTS, SECTIONS, buildStrings, stringsDataset } from './sample';
import { corrections } from './corrections';

describe('laboratoire de triage statique : cohérence des données et des corrections', () => {
  it('le domaine attendu figure dans les chaînes lisibles', () => {
    expect(buildStrings().some((s) => s.kind === 'url' && s.text.includes(C2_DOMAIN))).toBe(true);
    expect(stringsDataset()).toContain(C2_DOMAIN);
  });

  it('une seule section a une entropie supérieure à 7 : .rsrc', () => {
    const high = SECTIONS.filter((s) => s.entropy > 7);
    expect(high.map((s) => s.name)).toEqual(['.rsrc']);
  });

  it('les trois imports d’injection sont présents, GetSystemTime est un leurre', () => {
    const all = Object.values(IMPORTS).flat();
    for (const fn of ['VirtualAllocEx', 'WriteProcessMemory', 'CreateRemoteThread', 'GetSystemTime']) expect(all).toContain(fn);
  });

  it('la clé Run et la valeur SvcUpdate sont dans les chaînes', () => {
    const text = buildStrings().map((s) => s.text).join('\n');
    expect(text).toContain('CurrentVersion\\Run');
    expect(text).toContain('SvcUpdate');
  });

  it('les réponses acceptées incluent le domaine', () => {
    const c = corrections.questions['stlab-q1'];
    expect(c && 'accepted' in c ? c.accepted : []).toContain(C2_DOMAIN);
  });
});
