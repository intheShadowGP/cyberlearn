// Moteur pur (testé) du laboratoire de mauvaises configurations cloud.
// L'apprenant inspecte une configuration et corrige les écarts jusqu'à une posture saine.

export interface CloudConfig {
  bucketPublic: boolean; // stockage objet accessible publiquement
  bucketEncryption: boolean; // chiffrement au repos activé
  sgSshWorld: boolean; // groupe de sécurité : SSH ouvert à 0.0.0.0/0
  roleWildcard: boolean; // rôle avec permissions *:* (administrateur)
  flowLogs: boolean; // journalisation réseau activée
  mfaRoot: boolean; // MFA sur le compte racine / administrateur global
}

export interface Finding {
  code: string;
  severity: 'haute' | 'moyenne' | 'faible';
  message: string;
}

export function analyzeCloud(cfg: CloudConfig): Finding[] {
  const f: Finding[] = [];
  if (cfg.bucketPublic) f.push({ code: 'bucket-public', severity: 'haute', message: 'Stockage objet accessible publiquement : fuite de données probable.' });
  if (cfg.sgSshWorld) f.push({ code: 'sg-ssh-world', severity: 'haute', message: 'Groupe de sécurité : port 22 (SSH) ouvert à 0.0.0.0/0 — exposé à Internet entier.' });
  if (cfg.roleWildcard) f.push({ code: 'role-wildcard', severity: 'haute', message: 'Rôle avec permissions *:* : droits d’administration disproportionnés (viole le moindre privilège).' });
  if (!cfg.mfaRoot) f.push({ code: 'no-mfa-root', severity: 'haute', message: 'Pas de MFA sur le compte à privilèges les plus élevés.' });
  if (!cfg.bucketEncryption) f.push({ code: 'no-encryption', severity: 'moyenne', message: 'Chiffrement au repos du stockage désactivé.' });
  if (!cfg.flowLogs) f.push({ code: 'no-flow-logs', severity: 'faible', message: 'Journalisation des flux réseau désactivée : moins de visibilité en cas d’incident.' });
  const order = { haute: 0, moyenne: 1, faible: 2 };
  return f.sort((a, b) => order[a.severity] - order[b.severity]);
}

export function isSecure(cfg: CloudConfig): boolean {
  return analyzeCloud(cfg).length === 0;
}

export const PRESETS: readonly { id: string; label: string; cfg: CloudConfig }[] = [
  { id: 'durci', label: 'Compte durci (référence)', cfg: { bucketPublic: false, bucketEncryption: true, sgSshWorld: false, roleWildcard: false, flowLogs: true, mfaRoot: true } },
  { id: 'expose', label: 'Données exposées', cfg: { bucketPublic: true, bucketEncryption: false, sgSshWorld: true, roleWildcard: false, flowLogs: true, mfaRoot: true } },
  { id: 'privileges', label: 'Privilèges excessifs', cfg: { bucketPublic: false, bucketEncryption: true, sgSshWorld: false, roleWildcard: true, flowLogs: false, mfaRoot: false } },
  { id: 'defaut', label: 'Compte par défaut non durci', cfg: { bucketPublic: true, bucketEncryption: false, sgSshWorld: true, roleWildcard: true, flowLogs: false, mfaRoot: false } },
];
