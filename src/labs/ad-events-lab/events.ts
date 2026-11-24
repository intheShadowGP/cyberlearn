/** Journal fictif du contrôleur de domaine DC01 (domaine CORP), généré de façon déterministe. */
import { currentLabTexts, fill, type LabTexts } from '../i18n';

export interface WinEvent {
  id: number;
  time: string;
  eventId: number;
  account: string;
  source: string;
  detail: string;
}

const fr = {
  tgtOk: 'TGT accordé, pré-authentification OK, AES256 (0x12)',
  logon3Kerb: 'Ouverture de session type 3 (réseau), Kerberos',
  badPwd2: 'Échec : mauvais mot de passe (0xC000006A), type 2',
  logon2Kerb: 'Ouverture de session type 2 (interactive), Kerberos',
  badPwdNtlm: 'Échec : mauvais mot de passe (0xC000006A), NTLM, type 3',
  logon3Ntlm: 'Ouverture de session type 3 (réseau), NTLM',
  stRc4: 'Ticket de service demandé : {s}, chiffrement 0x17 (RC4-HMAC)',
  stAes: 'Ticket de service demandé : CIFS/fs02, chiffrement 0x12 (AES256)',
  groupAdd: 'Membre ajouté au groupe global « Admins du domaine » : m.petit',
  locked: 'Compte verrouillé (appelant : PC-ACCUEIL)',
  labels: {
    4624: 'Ouverture de session réussie',
    4625: 'Échec d’ouverture de session',
    4728: 'Ajout à un groupe global de sécurité',
    4740: 'Verrouillage de compte',
    4768: 'Demande de TGT Kerberos',
    4769: 'Demande de ticket de service Kerberos',
  } as Record<number, string>,
};
const en: typeof fr = {
  tgtOk: 'TGT granted, pre-authentication OK, AES256 (0x12)',
  logon3Kerb: 'Logon type 3 (network), Kerberos',
  badPwd2: 'Failure: bad password (0xC000006A), type 2',
  logon2Kerb: 'Logon type 2 (interactive), Kerberos',
  badPwdNtlm: 'Failure: bad password (0xC000006A), NTLM, type 3',
  logon3Ntlm: 'Logon type 3 (network), NTLM',
  stRc4: 'Service ticket requested: {s}, encryption 0x17 (RC4-HMAC)',
  stAes: 'Service ticket requested: CIFS/fs02, encryption 0x12 (AES256)',
  groupAdd: 'Member added to the global group “Domain Admins”: m.petit',
  locked: 'Account locked out (caller: PC-ACCUEIL)',
  labels: {
    4624: 'Successful logon',
    4625: 'Failed logon',
    4728: 'Member added to a security-enabled global group',
    4740: 'Account lockout',
    4768: 'Kerberos TGT request',
    4769: 'Kerberos service ticket request',
  },
};
const TEXTS: LabTexts<typeof fr> = { fr, en };

const users = [
  'a.bernard', 'c.durand', 'e.faure', 'g.henry', 'i.jacob', 'k.lambert', 'm.petit', 'n.roux', 'o.simon', 'p.thomas',
  'r.vincent', 's.weber', 't.adam', 'u.blanc', 'v.colin', 'w.david', 'x.emile', 'y.fabre', 'z.garnier', 'b.hugo',
];
const services = ['MSSQLSvc/sql01', 'HTTP/intranet', 'svc_backup', 'MSSQLSvc/sql02', 'HTTP/gitlab', 'svc_scan', 'CIFS/fs02', 'svc_print'];

function t(h: number, m: number, s: number): string {
  return `2026-03-12 ${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

export function buildEvents(): WinEvent[] {
  const T = currentLabTexts(TEXTS);
  const ev: Omit<WinEvent, 'id'>[] = [];
  // Activité normale du matin
  ['n.roux', 'o.simon', 'p.thomas', 's.weber'].forEach((u, i) => {
    ev.push({ time: t(7, 52 + i, 10), eventId: 4768, account: u, source: `10.0.4.${20 + i}`, detail: T.tgtOk });
    ev.push({ time: t(7, 52 + i, 12), eventId: 4624, account: u, source: `10.0.4.${20 + i}`, detail: T.logon3Kerb });
  });
  ev.push({ time: t(7, 58, 1), eventId: 4625, account: 'r.vincent', source: '10.0.4.31', detail: T.badPwd2 });
  ev.push({ time: t(7, 58, 20), eventId: 4624, account: 'r.vincent', source: '10.0.4.31', detail: T.logon2Kerb });
  // Pulvérisation depuis 10.0.8.44
  users.forEach((u, i) => {
    if (u === 'm.petit') return;
    ev.push({ time: t(8, 1, i * 3), eventId: 4625, account: u, source: '10.0.8.44', detail: T.badPwdNtlm });
  });
  ev.push({ time: t(8, 2, 5), eventId: 4624, account: 'm.petit', source: '10.0.8.44', detail: T.logon3Ntlm });
  // Kerberoasting depuis le compte compromis
  services.forEach((s, i) => {
    ev.push({ time: t(8, 14, 2 + i * 4), eventId: 4769, account: 'm.petit', source: '10.0.8.44', detail: fill(T.stRc4, { s }) });
  });
  // Activité de service normale
  ev.push({ time: t(8, 20, 0), eventId: 4769, account: 'n.roux', source: '10.0.4.20', detail: T.stAes });
  // Ajout à un groupe privilégié plus tard
  ev.push({ time: t(9, 41, 7), eventId: 4624, account: 'svc_backup', source: '10.0.8.44', detail: T.logon3Ntlm });
  ev.push({ time: t(9, 43, 30), eventId: 4728, account: 'svc_backup', source: 'DC01', detail: T.groupAdd });
  ev.push({ time: t(9, 50, 0), eventId: 4740, account: 'k.lambert', source: 'DC01', detail: T.locked });
  return ev
    .sort((a, b) => a.time.localeCompare(b.time))
    .map((e, i) => ({ ...e, id: i + 1 }));
}

/** Libellé d'un identifiant d'événement dans la langue active. */
export function eventLabel(eventId: number): string {
  return currentLabTexts(TEXTS).labels[eventId] ?? '';
}

export const EVENT_LABELS: Record<number, string> = fr.labels;
