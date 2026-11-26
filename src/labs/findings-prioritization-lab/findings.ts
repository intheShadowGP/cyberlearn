/** Huit constats FICTIFS d'un test d'intrusion autorisé et calcul d'une priorité contextualisée. */

export interface Finding {
  id: number;
  key: 'sqli' | 'telnet' | 'smb' | 'tls' | 'defaultpwd' | 'headers' | 'xss' | 'apikey';
  cvss: number;
  exposure: 'internet' | 'internal';
  criticality: 1 | 2 | 3;
  exploitKnown: boolean;
}

export const FINDINGS: Finding[] = [
  { id: 1, key: 'sqli', cvss: 9.8, exposure: 'internet', criticality: 3, exploitKnown: false },
  { id: 2, key: 'telnet', cvss: 7.5, exposure: 'internal', criticality: 1, exploitKnown: true },
  { id: 3, key: 'smb', cvss: 8.1, exposure: 'internal', criticality: 3, exploitKnown: true },
  { id: 4, key: 'tls', cvss: 5.9, exposure: 'internet', criticality: 1, exploitKnown: false },
  { id: 5, key: 'defaultpwd', cvss: 9.8, exposure: 'internal', criticality: 2, exploitKnown: true },
  { id: 6, key: 'headers', cvss: 3.1, exposure: 'internet', criticality: 2, exploitKnown: false },
  { id: 7, key: 'xss', cvss: 6.1, exposure: 'internal', criticality: 2, exploitKnown: false },
  { id: 8, key: 'apikey', cvss: 9.1, exposure: 'internet', criticality: 3, exploitKnown: true },
];

const EXPOSURE = { internet: 1, internal: 0.7 } as const;
const CRITICALITY = { 1: 0.6, 2: 0.8, 3: 1 } as const;

/** Priorité = CVSS × exposition × criticité × 1,2 si une exploitation est connue, plafonnée à 10. */
export function priority(f: Finding): number {
  const raw = f.cvss * EXPOSURE[f.exposure] * CRITICALITY[f.criticality] * (f.exploitKnown ? 1.2 : 1);
  return Math.min(10, Math.round(raw * 100) / 100);
}

export function rankedFindings(findings: readonly Finding[] = FINDINGS): Finding[] {
  return [...findings].sort((a, b) => priority(b) - priority(a));
}

export function rankOf(id: number, findings: readonly Finding[] = FINDINGS): number {
  return rankedFindings(findings).findIndex((f) => f.id === id) + 1;
}
