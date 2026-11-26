/** Registre FICTIF de chaîne de conservation d'un disque saisi, et vérification de sa cohérence. */

export interface Entry {
  id: number;
  time: string;
  action: 'saisie' | 'transfert' | 'copie' | 'analyse' | 'stockage';
  handler: string;
  hash: string;
  location: string;
}

export const HASH_A = '9f2c41ab07de';
export const HASH_B = '5d83e0c61a94';

export const ENTRIES: Entry[] = [
  { id: 1, time: '2026-03-02T09:00:00Z', action: 'saisie', handler: 'Capitaine Roux', hash: HASH_A, location: 'Bureau 12' },
  { id: 2, time: '2026-03-02T10:15:00Z', action: 'transfert', handler: 'Capitaine Roux', hash: HASH_A, location: 'Laboratoire' },
  { id: 3, time: '2026-03-02T11:00:00Z', action: 'copie', handler: 'Analyste Morel', hash: HASH_A, location: 'Laboratoire' },
  { id: 4, time: '2026-03-02T11:40:00Z', action: 'stockage', handler: 'Analyste Morel', hash: HASH_A, location: 'Armoire sécurisée' },
  { id: 5, time: '2026-03-03T16:30:00Z', action: 'analyse', handler: '', hash: HASH_A, location: 'Laboratoire' },
  { id: 6, time: '2026-03-03T17:05:00Z', action: 'analyse', handler: 'Analyste Morel', hash: HASH_B, location: 'Laboratoire' },
  { id: 7, time: '2026-03-03T17:50:00Z', action: 'stockage', handler: 'Analyste Morel', hash: HASH_B, location: 'Armoire sécurisée' },
];

export type Anomaly =
  | { kind: 'missing-handler'; id: number }
  | { kind: 'hash-changed'; id: number }
  | { kind: 'gap'; id: number; hours: number };

export const MAX_GAP_HOURS = 12;

/** Détecte les anomalies : responsable absent, empreinte modifiée entre deux entrées, trou de plus de 12 heures non expliqué. */
export function verify(entries: readonly Entry[] = ENTRIES): Anomaly[] {
  const out: Anomaly[] = [];
  entries.forEach((e, i) => {
    if (!e.handler.trim()) out.push({ kind: 'missing-handler', id: e.id });
    const prev = entries[i - 1];
    if (!prev) return;
    if (e.hash !== prev.hash) out.push({ kind: 'hash-changed', id: e.id });
    const hours = (new Date(e.time).getTime() - new Date(prev.time).getTime()) / 3600000;
    if (hours > MAX_GAP_HOURS) out.push({ kind: 'gap', id: e.id, hours: Math.round(hours * 10) / 10 });
  });
  return out;
}
