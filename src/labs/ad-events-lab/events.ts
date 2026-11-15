/** Journal fictif du contrôleur de domaine DC01 (domaine CORP), généré de façon déterministe. */

export interface WinEvent {
  id: number;
  time: string;
  eventId: number;
  account: string;
  source: string;
  detail: string;
}

const users = [
  'a.bernard', 'c.durand', 'e.faure', 'g.henry', 'i.jacob', 'k.lambert', 'm.petit', 'n.roux', 'o.simon', 'p.thomas',
  'r.vincent', 's.weber', 't.adam', 'u.blanc', 'v.colin', 'w.david', 'x.emile', 'y.fabre', 'z.garnier', 'b.hugo',
];
const services = ['MSSQLSvc/sql01', 'HTTP/intranet', 'svc_backup', 'MSSQLSvc/sql02', 'HTTP/gitlab', 'svc_scan', 'CIFS/fs02', 'svc_print'];

function t(h: number, m: number, s: number): string {
  return `2026-03-12 ${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

export function buildEvents(): WinEvent[] {
  const ev: Omit<WinEvent, 'id'>[] = [];
  // Activité normale du matin
  ['n.roux', 'o.simon', 'p.thomas', 's.weber'].forEach((u, i) => {
    ev.push({ time: t(7, 52 + i, 10), eventId: 4768, account: u, source: `10.0.4.${20 + i}`, detail: 'TGT accordé, pré-authentification OK, AES256 (0x12)' });
    ev.push({ time: t(7, 52 + i, 12), eventId: 4624, account: u, source: `10.0.4.${20 + i}`, detail: 'Ouverture de session type 3 (réseau), Kerberos' });
  });
  ev.push({ time: t(7, 58, 1), eventId: 4625, account: 'r.vincent', source: '10.0.4.31', detail: 'Échec : mauvais mot de passe (0xC000006A), type 2' });
  ev.push({ time: t(7, 58, 20), eventId: 4624, account: 'r.vincent', source: '10.0.4.31', detail: 'Ouverture de session type 2 (interactive), Kerberos' });
  // Pulvérisation depuis 10.0.8.44
  users.forEach((u, i) => {
    if (u === 'm.petit') return;
    ev.push({ time: t(8, 1, i * 3), eventId: 4625, account: u, source: '10.0.8.44', detail: 'Échec : mauvais mot de passe (0xC000006A), NTLM, type 3' });
  });
  ev.push({ time: t(8, 2, 5), eventId: 4624, account: 'm.petit', source: '10.0.8.44', detail: 'Ouverture de session type 3 (réseau), NTLM' });
  // Kerberoasting depuis le compte compromis
  services.forEach((s, i) => {
    ev.push({ time: t(8, 14, 2 + i * 4), eventId: 4769, account: 'm.petit', source: '10.0.8.44', detail: `Ticket de service demandé : ${s}, chiffrement 0x17 (RC4-HMAC)` });
  });
  // Activité de service normale
  ev.push({ time: t(8, 20, 0), eventId: 4769, account: 'n.roux', source: '10.0.4.20', detail: 'Ticket de service demandé : CIFS/fs02, chiffrement 0x12 (AES256)' });
  // Ajout à un groupe privilégié plus tard
  ev.push({ time: t(9, 41, 7), eventId: 4624, account: 'svc_backup', source: '10.0.8.44', detail: 'Ouverture de session type 3 (réseau), NTLM' });
  ev.push({ time: t(9, 43, 30), eventId: 4728, account: 'svc_backup', source: 'DC01', detail: 'Membre ajouté au groupe global « Admins du domaine » : m.petit' });
  ev.push({ time: t(9, 50, 0), eventId: 4740, account: 'k.lambert', source: 'DC01', detail: 'Compte verrouillé (appelant : PC-ACCUEIL)' });
  return ev
    .sort((a, b) => a.time.localeCompare(b.time))
    .map((e, i) => ({ ...e, id: i + 1 }));
}

export const EVENT_LABELS: Record<number, string> = {
  4624: 'Ouverture de session réussie',
  4625: 'Échec d’ouverture de session',
  4728: 'Ajout à un groupe global de sécurité',
  4740: 'Verrouillage de compte',
  4768: 'Demande de TGT Kerberos',
  4769: 'Demande de ticket de service Kerberos',
};
