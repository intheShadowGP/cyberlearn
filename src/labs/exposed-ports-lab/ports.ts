/** Résultat FICTIF d'un balayage de ports autorisé sur un serveur exposé à Internet. */

export type Verdict = 'ok' | 'restrict' | 'close';

export interface OpenPort {
  id: number;
  port: number;
  service: string;
  banner: string;
  verdict: Verdict;
}

export const PORTS: OpenPort[] = [
  { id: 1, port: 22, service: 'ssh', banner: 'OpenSSH 9.x, authentification par mot de passe activée', verdict: 'restrict' },
  { id: 2, port: 23, service: 'telnet', banner: 'Telnet, identifiants transmis en clair', verdict: 'close' },
  { id: 3, port: 80, service: 'http', banner: 'Redirige vers https', verdict: 'ok' },
  { id: 4, port: 443, service: 'https', banner: 'Application web, TLS 1.2 et 1.3', verdict: 'ok' },
  { id: 5, port: 445, service: 'smb', banner: 'Partages de fichiers Windows', verdict: 'close' },
  { id: 6, port: 3306, service: 'mysql', banner: 'Base de données accessible depuis Internet', verdict: 'restrict' },
  { id: 7, port: 3389, service: 'rdp', banner: 'Bureau à distance, authentification simple', verdict: 'restrict' },
];

export function countByVerdict(v: Verdict, ports: readonly OpenPort[] = PORTS): number {
  return ports.filter((p) => p.verdict === v).length;
}
