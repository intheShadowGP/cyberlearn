/** Données FICTIVES d'un diagnostic de préparation à un examen de sécurité et calcul d'un plan de révision. */

export interface Domain {
  id: number;
  key: 'reseaux' | 'crypto' | 'systemes' | 'risques' | 'incident' | 'dev' | 'cloud';
  weight: number;
  score: number;
}

export const TARGET = 80;
export const HOURS = 20;

export const DOMAINS: Domain[] = [
  { id: 1, key: 'reseaux', weight: 20, score: 65 },
  { id: 2, key: 'crypto', weight: 10, score: 80 },
  { id: 3, key: 'systemes', weight: 25, score: 50 },
  { id: 4, key: 'risques', weight: 15, score: 70 },
  { id: 5, key: 'incident', weight: 10, score: 40 },
  { id: 6, key: 'dev', weight: 10, score: 75 },
  { id: 7, key: 'cloud', weight: 10, score: 60 },
];

/** Points d'examen gagnables en amenant le domaine à la cible : poids × écart / 100. */
export function gain(d: Domain, target = TARGET): number {
  return (d.weight * Math.max(0, target - d.score)) / 100;
}

export function totalGain(domains: readonly Domain[] = DOMAINS, target = TARGET): number {
  return domains.reduce((n, d) => n + gain(d, target), 0);
}

/** Répartition des heures proportionnelle au gain potentiel. */
export function hoursFor(d: Domain, domains: readonly Domain[] = DOMAINS, hours = HOURS, target = TARGET): number {
  const total = totalGain(domains, target);
  return total === 0 ? 0 : (gain(d, target) / total) * hours;
}

export function ranked(domains: readonly Domain[] = DOMAINS): Domain[] {
  return [...domains].sort((a, b) => gain(b) - gain(a));
}
