/** Écart entre la configuration FICTIVE d'un poste Windows et une base de sécurité de référence. */

export interface Setting {
  id: number;
  key: 'uac' | 'firewall' | 'bitlocker' | 'smb1' | 'rdp' | 'defender' | 'localadmin' | 'autorun';
  /** Valeur attendue par la base de sécurité. */
  expected: boolean;
  /** Valeur relevée sur le poste. */
  actual: boolean;
  weight: 1 | 2 | 3;
}

export const SETTINGS: Setting[] = [
  { id: 1, key: 'uac', expected: true, actual: true, weight: 2 },
  { id: 2, key: 'firewall', expected: true, actual: true, weight: 2 },
  { id: 3, key: 'bitlocker', expected: true, actual: false, weight: 3 },
  { id: 4, key: 'smb1', expected: false, actual: true, weight: 3 },
  { id: 5, key: 'rdp', expected: false, actual: true, weight: 2 },
  { id: 6, key: 'defender', expected: true, actual: true, weight: 3 },
  { id: 7, key: 'localadmin', expected: false, actual: true, weight: 3 },
  { id: 8, key: 'autorun', expected: false, actual: false, weight: 1 },
];

export function deviations(settings: readonly Setting[] = SETTINGS): Setting[] {
  return settings.filter((s) => s.expected !== s.actual);
}

/** Part de conformité pondérée par la gravité de chaque réglage, de 0 à 100. */
export function complianceScore(settings: readonly Setting[] = SETTINGS): number {
  const total = settings.reduce((n, s) => n + s.weight, 0);
  const ok = settings.filter((s) => s.expected === s.actual).reduce((n, s) => n + s.weight, 0);
  return Math.round((ok / total) * 100);
}

/** Écarts triés du plus grave au moins grave (poids décroissant, puis ordre d'origine). */
export function prioritized(settings: readonly Setting[] = SETTINGS): Setting[] {
  return deviations(settings).sort((a, b) => b.weight - a.weight || a.id - b.id);
}
