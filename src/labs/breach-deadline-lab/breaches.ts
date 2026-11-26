/** Quatre incidents FICTIFS touchant des données personnelles, et calcul du délai de notification à l'autorité (72 heures). */

export type Risk = 'none' | 'risk' | 'high';

export interface Incident {
  id: number;
  key: 'laptop' | 'mailing' | 'ransom' | 'payslip';
  /** Date de prise de connaissance, en UTC (ISO 8601). */
  discovered: string;
  people: number;
  risk: Risk;
}

export const INCIDENTS: Incident[] = [
  { id: 1, key: 'laptop', discovered: '2026-03-04T09:10:00Z', people: 1200, risk: 'none' },
  { id: 2, key: 'mailing', discovered: '2026-03-05T14:20:00Z', people: 300, risk: 'risk' },
  { id: 3, key: 'ransom', discovered: '2026-03-06T17:45:00Z', people: 2000, risk: 'high' },
  { id: 4, key: 'payslip', discovered: '2026-03-09T08:30:00Z', people: 1, risk: 'none' },
];

/** Échéance de notification : 72 heures calendaires après la prise de connaissance (week-ends compris). */
export function deadline(i: Incident): Date {
  return new Date(new Date(i.discovered).getTime() + 72 * 3600 * 1000);
}

export function mustNotifyAuthority(i: Incident): boolean {
  return i.risk !== 'none';
}

export function mustInformPeople(i: Incident): boolean {
  return i.risk === 'high';
}

export function formatUtc(d: Date): string {
  const p = (n: number) => String(n).padStart(2, '0');
  return `${d.getUTCFullYear()}-${p(d.getUTCMonth() + 1)}-${p(d.getUTCDate())} ${p(d.getUTCHours())}:${p(d.getUTCMinutes())} UTC`;
}

export function weekdayUtc(d: Date): number {
  return d.getUTCDay();
}
