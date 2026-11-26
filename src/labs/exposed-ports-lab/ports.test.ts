import { describe, expect, it } from 'vitest';
import { PORTS, countByVerdict } from './ports';
import { corrections } from './corrections';

describe('laboratoire des ports exposés', () => {
  it('sept ports : deux à fermer, trois à restreindre, deux acceptables', () => {
    expect(PORTS).toHaveLength(7);
    expect(countByVerdict('close')).toBe(2);
    expect(countByVerdict('restrict')).toBe(3);
    expect(countByVerdict('ok')).toBe(2);
  });

  it('les ports à fermer sont Telnet (23) et SMB (445)', () => {
    expect(PORTS.filter((p) => p.verdict === 'close').map((p) => p.port)).toEqual([23, 445]);
  });

  it('les réponses attendues concordent avec le calcul', () => {
    const q1 = corrections.questions['portlab-q1'];
    expect(q1 && 'accepted' in q1 ? q1.accepted : []).toContain(String(countByVerdict('close')));
  });
});
