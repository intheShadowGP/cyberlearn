/** Zone DNS FICTIVE (domaine exemple.org, adresses de documentation) et audit de ses enregistrements. */

export type RType = 'A' | 'CNAME' | 'MX' | 'TXT';

export interface Record_ {
  id: number;
  name: string;
  type: RType;
  value: string;
  /** Pour un CNAME : la cible existe-t-elle encore chez le fournisseur ? */
  targetExists?: boolean;
}

export const ZONE: Record_[] = [
  { id: 1, name: '@', type: 'A', value: '203.0.113.10' },
  { id: 2, name: 'www', type: 'CNAME', value: 'exemple.org.', targetExists: true },
  { id: 3, name: 'mail', type: 'A', value: '203.0.113.25' },
  { id: 4, name: '@', type: 'MX', value: '10 mail.exemple.org.' },
  { id: 5, name: '@', type: 'TXT', value: 'v=spf1 +all' },
  { id: 6, name: 'ancienne-boutique', type: 'CNAME', value: 'boutique-fermee.hebergeur.example.', targetExists: false },
  { id: 7, name: 'intranet', type: 'A', value: '10.0.4.12' },
  { id: 8, name: 'vpn', type: 'A', value: '203.0.113.40' },
];

export type IssueCode = 'spf-open' | 'dangling-cname' | 'private-ip' | 'no-dmarc';

export interface Issue {
  code: IssueCode;
  recordId?: number;
}

export function isPrivateIpv4(ip: string): boolean {
  const m = /^(\d+)\.(\d+)\.\d+\.\d+$/.exec(ip);
  if (!m) return false;
  const a = Number(m[1]);
  const b = Number(m[2]);
  return a === 10 || (a === 172 && b >= 16 && b <= 31) || (a === 192 && b === 168);
}

export function audit(zone: readonly Record_[] = ZONE): Issue[] {
  const out: Issue[] = [];
  for (const r of zone) {
    if (r.type === 'TXT' && /^v=spf1\b/.test(r.value) && /(^|\s)[+]?all\b/.test(r.value) && !/[-~?]all\b/.test(r.value)) out.push({ code: 'spf-open', recordId: r.id });
    if (r.type === 'CNAME' && r.targetExists === false) out.push({ code: 'dangling-cname', recordId: r.id });
    if (r.type === 'A' && isPrivateIpv4(r.value)) out.push({ code: 'private-ip', recordId: r.id });
  }
  if (!zone.some((r) => r.type === 'TXT' && r.name === '_dmarc')) out.push({ code: 'no-dmarc' });
  return out;
}

export function render(zone: readonly Record_[] = ZONE): string {
  return zone.map((r) => `${r.name.padEnd(18)} IN ${r.type.padEnd(6)} ${r.type === 'TXT' ? `"${r.value}"` : r.value}`).join('\n');
}
