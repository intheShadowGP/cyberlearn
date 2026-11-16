// Moteur pur (testé) du laboratoire expert d'ingénierie de détection.
// L'apprenant compose une règle en activant des conditions ; le moteur mesure
// sa qualité (vrais/faux positifs, précision, rappel) sur une télémétrie fixe.

export interface Event {
  id: number;
  time: string;
  parent: string;
  image: string;
  cmdline: string;
  user: string;
  /** Vérité terrain pédagogique : l'événement est-il malveillant ? */
  malicious: boolean;
  note: string;
}

/** Télémétrie de création de processus (fictive, inspirée de cas réels). */
export const EVENTS: readonly Event[] = [
  { id: 1, time: '09:02', parent: 'explorer.exe', image: 'chrome.exe', cmdline: 'chrome.exe', user: 'léa', malicious: false, note: 'navigation normale' },
  { id: 2, time: '09:05', parent: 'services.exe', image: 'svchost.exe', cmdline: 'svchost.exe -k netsvcs', user: 'SYSTEM', malicious: false, note: 'service Windows' },
  { id: 3, time: '09:10', parent: 'ccmexec.exe', image: 'powershell.exe', cmdline: 'powershell.exe -File C:\\Scripts\\inventaire.ps1', user: 'SYSTEM', malicious: false, note: 'script d’inventaire légitime (déploiement)' },
  { id: 4, time: '09:14', parent: 'WINWORD.EXE', image: 'powershell.exe', cmdline: 'powershell.exe -nop -w hidden -enc SQBFAFgA...', user: 'léa', malicious: true, note: 'macro : Office lance PowerShell encodé' },
  { id: 5, time: '09:21', parent: 'OUTLOOK.EXE', image: 'powershell.exe', cmdline: 'powershell.exe -nop -w hidden -enc JABjAGwA...', user: 'omar', malicious: true, note: 'pièce jointe : Outlook lance PowerShell caché' },
  { id: 6, time: '09:33', parent: 'w3wp.exe', image: 'cmd.exe', cmdline: 'cmd.exe /c whoami', user: 'iis_apppool', malicious: true, note: 'webshell : le serveur IIS lance un interpréteur' },
  { id: 7, time: '09:40', parent: 'explorer.exe', image: 'powershell_ise.exe', cmdline: 'powershell_ise.exe', user: 'admin', malicious: false, note: 'administrateur qui ouvre l’éditeur PowerShell' },
  { id: 8, time: '09:52', parent: 'cmd.exe', image: 'ping.exe', cmdline: 'ping.exe 10.0.0.1', user: 'léa', malicious: false, note: 'diagnostic réseau' },
];

export interface Detection {
  key: string;
  label: string;
  test: (e: Event) => boolean;
}

const OFFICE = ['winword.exe', 'outlook.exe', 'excel.exe', 'powerpnt.exe'];
const SHELLS = ['powershell.exe', 'cmd.exe', 'wscript.exe', 'cscript.exe'];

/** Conditions candidates que l'apprenant peut activer pour composer sa règle. */
export const DETECTIONS: readonly Detection[] = [
  { key: 'office-shell', label: 'Un processus Office lance un interpréteur (parent Office ET image = PowerShell/cmd)', test: (e) => OFFICE.includes(e.parent.toLowerCase()) && SHELLS.includes(e.image.toLowerCase()) },
  { key: 'web-shell', label: 'Un service web (w3wp.exe) lance un interpréteur (webshell)', test: (e) => e.parent.toLowerCase() === 'w3wp.exe' && SHELLS.includes(e.image.toLowerCase()) },
  { key: 'any-powershell', label: 'Tout lancement de powershell.exe', test: (e) => e.image.toLowerCase() === 'powershell.exe' },
  { key: 'enc', label: 'Ligne de commande contenant « -enc » (commande encodée)', test: (e) => /-enc\b/i.test(e.cmdline) },
  { key: 'hidden', label: 'Ligne de commande contenant « hidden » (fenêtre cachée)', test: (e) => /hidden/i.test(e.cmdline) },
];

export interface Metrics {
  matched: number[];
  truePositives: number;
  falsePositives: number;
  falseNegatives: number;
  precision: number; // part des alertes qui sont réellement malveillantes
  recall: number; // part des malveillants détectés
  perfect: boolean; // rappel 1 et précision 1
}

/** Une règle alerte si AU MOINS une condition activée correspond (OU logique). */
export function runDetections(selectedKeys: readonly string[], events: readonly Event[] = EVENTS): Metrics {
  const selected = DETECTIONS.filter((d) => selectedKeys.includes(d.key));
  const totalMalicious = events.filter((e) => e.malicious).length;
  const matchedEvents = events.filter((e) => selected.some((d) => d.test(e)));
  const matched = matchedEvents.map((e) => e.id);
  const tp = matchedEvents.filter((e) => e.malicious).length;
  const fp = matchedEvents.filter((e) => !e.malicious).length;
  const fn = totalMalicious - tp;
  const precision = matchedEvents.length ? tp / matchedEvents.length : 0;
  const recall = totalMalicious ? tp / totalMalicious : 0;
  return { matched, truePositives: tp, falsePositives: fp, falseNegatives: fn, precision, recall, perfect: recall === 1 && precision === 1 };
}
