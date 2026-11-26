/** Rapport de triage statique d'un échantillon FICTIF (aucun code réel : uniquement des données descriptives). */

export type StringKind = 'url' | 'registre' | 'commande' | 'chemin' | 'systeme' | 'autre';

export interface SampleString {
  id: number;
  offset: string;
  kind: StringKind;
  text: string;
}

export const C2_DOMAIN = 'update-check.example.net';

export const FILE_INFO = {
  name: 'facture_2026.pdf.exe',
  size: 482304,
  type: 'PE32 executable (GUI) Intel 80386, for MS Windows',
  sha256: '3f9c1a7be04d52c8a1e6d97b0c4f8e2a5d7013b96c8e4fa2d1b05c7e93a8f6d4',
  compiled: '2026-03-02 08:41:17 UTC',
} as const;

export interface SectionInfo {
  name: string;
  size: number;
  entropy: number;
}

export const SECTIONS: SectionInfo[] = [
  { name: '.text', size: 98304, entropy: 6.21 },
  { name: '.rdata', size: 32768, entropy: 4.87 },
  { name: '.data', size: 16384, entropy: 3.02 },
  { name: '.rsrc', size: 301056, entropy: 7.94 },
];

export const IMPORTS: Record<string, string[]> = {
  'KERNEL32.dll': ['CreateFileW', 'GetSystemTime', 'CloseHandle', 'VirtualAllocEx', 'WriteProcessMemory', 'CreateRemoteThread'],
  'WININET.dll': ['InternetOpenA', 'InternetOpenUrlA', 'InternetReadFile'],
  'ADVAPI32.dll': ['RegOpenKeyExA', 'RegSetValueExA'],
};

const RAW: [string, StringKind, string][] = [
  ['0x0040', 'systeme', '!This program cannot be run in DOS mode.'],
  ['0x0210', 'systeme', 'kernel32.dll'],
  ['0x0224', 'systeme', 'GetProcAddress'],
  ['0x0234', 'systeme', 'LoadLibraryA'],
  ['0x1a40', 'autre', 'Microsoft Visual C++ Runtime Library'],
  ['0x1a78', 'autre', 'R6002 - floating point support not loaded'],
  ['0x1ab4', 'autre', 'bad allocation'],
  ['0x2c10', 'chemin', '%APPDATA%\\svcupdate\\svc.exe'],
  ['0x2c38', 'registre', 'Software\\Microsoft\\Windows\\CurrentVersion\\Run'],
  ['0x2c70', 'autre', 'SvcUpdate'],
  ['0x2c90', 'url', `http://${C2_DOMAIN}/gate.php`],
  ['0x2cc0', 'autre', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'],
  ['0x2d00', 'autre', 'Global\\{7B2E-91AF}'],
  ['0x2d20', 'commande', 'cmd.exe /c ping 127.0.0.1 -n 5 > nul & del "%s"'],
  ['0x2d60', 'autre', 'facture_2026.pdf'],
  ['0x3010', 'autre', 'Invalid parameter passed to C runtime function.'],
  ['0x3050', 'systeme', 'ntdll.dll'],
  ['0x3064', 'autre', 'runtime error'],
];

export function buildStrings(): SampleString[] {
  return RAW.map(([offset, kind, text], i) => ({ id: i + 1, offset, kind, text }));
}

export function stringsDataset(): string {
  return buildStrings().map((s) => s.text).join('\n') + '\n';
}
