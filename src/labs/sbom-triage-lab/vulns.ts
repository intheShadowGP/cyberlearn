/** Vulnérabilités FICTIVES (identifiants CVE-2099-xxxx) relevées dans l'inventaire des composants d'une application. */

export type Reach = 'yes' | 'no' | 'unknown';

export interface Vuln {
  id: number;
  cve: string;
  component: string;
  version: string;
  cvss: number;
  runtime: boolean;
  reach: Reach;
  exploitKnown: boolean;
  fix: string;
}

export const VULNS: Vuln[] = [
  { id: 1, cve: 'CVE-2099-0001', component: 'web-framework', version: '4.2.1', cvss: 9.8, runtime: true, reach: 'yes', exploitKnown: true, fix: '4.2.5' },
  { id: 2, cve: 'CVE-2099-0002', component: 'xml-parser', version: '2.0.3', cvss: 7.5, runtime: true, reach: 'yes', exploitKnown: false, fix: '2.0.7' },
  { id: 3, cve: 'CVE-2099-0003', component: 'image-lib', version: '1.9.0', cvss: 8.8, runtime: true, reach: 'no', exploitKnown: false, fix: '1.9.4' },
  { id: 4, cve: 'CVE-2099-0004', component: 'test-runner', version: '7.1.0', cvss: 9.1, runtime: false, reach: 'no', exploitKnown: false, fix: '7.1.2' },
  { id: 5, cve: 'CVE-2099-0005', component: 'crypto-utils', version: '3.4.0', cvss: 7.4, runtime: true, reach: 'unknown', exploitKnown: false, fix: '3.4.6' },
  { id: 6, cve: 'CVE-2099-0006', component: 'log-formatter', version: '1.2.8', cvss: 5.3, runtime: true, reach: 'yes', exploitKnown: false, fix: '1.2.9' },
  { id: 7, cve: 'CVE-2099-0007', component: 'auth-client', version: '5.0.2', cvss: 9.0, runtime: true, reach: 'unknown', exploitKnown: true, fix: '5.0.4' },
  { id: 8, cve: 'CVE-2099-0008', component: 'build-plugin', version: '0.9.1', cvss: 6.5, runtime: false, reach: 'unknown', exploitKnown: false, fix: '0.9.3' },
];

export type Action = 'fix48h' | 'fix30d' | 'analyze' | 'vex';

export interface Triage {
  action: Action;
  rule: 'T1' | 'T2' | 'T3' | 'T4' | 'T5';
}

/** T1 composant absent du produit livré, T2 code vulnérable non atteignable → déclaration VEX « non affecté » ;
 *  T3 atteignable avec exploitation connue ou CVSS ≥ 9 → correction sous 48 h ; T4 atteignable → 30 jours ; T5 atteignabilité inconnue → à analyser. */
export function triage(v: Vuln): Triage {
  if (!v.runtime) return { action: 'vex', rule: 'T1' };
  if (v.reach === 'no') return { action: 'vex', rule: 'T2' };
  if (v.reach === 'yes') return v.exploitKnown || v.cvss >= 9 ? { action: 'fix48h', rule: 'T3' } : { action: 'fix30d', rule: 'T4' };
  return { action: 'analyze', rule: 'T5' };
}
