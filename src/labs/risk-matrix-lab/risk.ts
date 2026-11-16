// Moteur pur (testé) du laboratoire de gouvernance : appréciation et traitement des risques.

export type Treatment = 'reduire' | 'transferer' | 'eviter' | 'accepter';
export type Level = 'faible' | 'moyen' | 'eleve';

export interface Risk {
  id: string;
  label: string;
  likelihood: number; // vraisemblance 1 à 4
  impact: number; // gravité 1 à 4
}

/** Scénarios de risque d'une organisation fictive (PME). */
export const RISKS: readonly Risk[] = [
  { id: 'rancongiciel', label: 'Rançongiciel via une pièce jointe, sauvegardes en ligne', likelihood: 4, impact: 4 },
  { id: 'vpn', label: 'Passerelle VPN exposée, non corrigée', likelihood: 3, impact: 4 },
  { id: 'fuite-stockage', label: 'Stockage cloud mal configuré (données clients)', likelihood: 3, impact: 3 },
  { id: 'phishing-paie', label: 'Fraude au virement (usurpation de la direction)', likelihood: 2, impact: 3 },
  { id: 'perte-portable', label: 'Perte d’un ordinateur portable chiffré', likelihood: 3, impact: 1 },
  { id: 'panne-clim', label: 'Panne de climatisation de la salle serveurs', likelihood: 1, impact: 2 },
];

export function score(r: Pick<Risk, 'likelihood' | 'impact'>): number {
  return r.likelihood * r.impact;
}

export function riskLevel(r: Pick<Risk, 'likelihood' | 'impact'>): Level {
  const s = score(r);
  if (s <= 3) return 'faible';
  if (s <= 8) return 'moyen';
  return 'eleve';
}

export const LEVEL_LABELS: Record<Level, string> = { faible: 'Faible', moyen: 'Moyen', eleve: 'Élevé' };
export const TREATMENT_LABELS: Record<Treatment, string> = {
  reduire: 'Réduire (appliquer des mesures)',
  transferer: 'Transférer (assurance, sous-traitance)',
  eviter: 'Éviter (renoncer à l’activité)',
  accepter: 'Accepter (décision documentée)',
};

/** Risques triés par priorité décroissante (score, puis impact). */
export function prioritize(risks: readonly Risk[] = RISKS): Risk[] {
  return [...risks].sort((a, b) => score(b) - score(a) || b.impact - a.impact);
}

/**
 * Un choix de traitement est-il défendable pour ce niveau ?
 * « Accepter » n'est défendable que pour un risque faible ; les niveaux moyen et élevé
 * appellent une mesure (réduire, transférer ou éviter), pas une simple acceptation.
 */
export function treatmentDefensible(level: Level, t: Treatment): boolean {
  if (t === 'accepter') return level === 'faible';
  return true;
}
