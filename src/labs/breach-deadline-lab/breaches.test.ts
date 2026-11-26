import { describe, expect, it } from 'vitest';
import { INCIDENTS, deadline, formatUtc, mustInformPeople, mustNotifyAuthority, weekdayUtc } from './breaches';
import { corrections } from './corrections';

describe('laboratoire du délai de notification d’une violation de données', () => {
  it('l’échéance est 72 heures calendaires après la prise de connaissance, week-end compris', () => {
    const ransom = INCIDENTS.find((i) => i.key === 'ransom')!;
    expect(formatUtc(deadline(ransom))).toBe('2026-03-09 17:45 UTC');
    expect(weekdayUtc(new Date(ransom.discovered))).toBe(5);
    expect(weekdayUtc(deadline(ransom))).toBe(1);
  });

  it('deux incidents sur quatre sont à notifier à l’autorité, un seul aux personnes', () => {
    expect(INCIDENTS.filter(mustNotifyAuthority)).toHaveLength(2);
    expect(INCIDENTS.filter(mustInformPeople).map((i) => i.key)).toEqual(['ransom']);
    const c = corrections.questions['brlab-q2'];
    expect(c && 'accepted' in c ? c.accepted : []).toContain('2');
  });

  it('les incidents sans risque restent à consigner mais pas à notifier', () => {
    const none = INCIDENTS.filter((i) => i.risk === 'none');
    expect(none.map((i) => i.key)).toEqual(['laptop', 'payslip']);
    expect(none.some(mustNotifyAuthority)).toBe(false);
  });
});
