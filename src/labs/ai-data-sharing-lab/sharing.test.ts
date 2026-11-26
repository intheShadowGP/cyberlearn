import { describe, expect, it } from 'vitest';
import { ITEMS, allowed, countAllowed } from './sharing';
import { corrections } from './corrections';

describe('laboratoire du partage de données avec un assistant d’IA', () => {
  it('deux informations seulement vont dans un outil public, quatre dans un outil approuvé', () => {
    expect(countAllowed('public')).toBe(2);
    expect(countAllowed('approuve')).toBe(4);
    const q1 = corrections.questions['aishlab-q1'];
    expect(q1 && 'accepted' in q1 ? q1.accepted : []).toContain('2');
  });

  it('la clé d’API n’est autorisée dans aucun outil', () => {
    const key = ITEMS.find((i) => i.key === 'apikey')!;
    expect(allowed('public', key.cls)).toBe(false);
    expect(allowed('approuve', key.cls)).toBe(false);
  });

  it('un outil approuvé n’élargit pas aux données personnelles ni confidentielles', () => {
    expect(allowed('approuve', 'personnel')).toBe(false);
    expect(allowed('approuve', 'confidentiel')).toBe(false);
    expect(allowed('approuve', 'interne')).toBe(true);
  });
});
