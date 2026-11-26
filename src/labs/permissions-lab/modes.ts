/** Conversion entre notation octale et notation symbolique des permissions Unix, et jeu de données fictif. */

const BITS = ['---', '--x', '-w-', '-wx', 'r--', 'r-x', 'rw-', 'rwx'];

/** « 754 » ou « 4755 » → « rwxr-xr-- » ou « rwsr-xr-x ». Retourne null si la valeur est invalide. */
export function octalToSymbolic(octal: string): string | null {
  const v = octal.trim();
  if (!/^[0-7]{3,4}$/.test(v)) return null;
  const digits = v.padStart(4, '0').split('').map(Number);
  const [special, u, g, o] = digits as [number, number, number, number];
  const parts = [BITS[u]!.split(''), BITS[g]!.split(''), BITS[o]!.split('')];
  if (special & 4) parts[0]![2] = parts[0]![2] === 'x' ? 's' : 'S';
  if (special & 2) parts[1]![2] = parts[1]![2] === 'x' ? 's' : 'S';
  if (special & 1) parts[2]![2] = parts[2]![2] === 'x' ? 't' : 'T';
  return parts.map((p) => p.join('')).join('');
}

/** « rw-r--r-- » → « 644 » (avec quatrième chiffre si bits spéciaux). Retourne null si la valeur est invalide. */
export function symbolicToOctal(sym: string): string | null {
  const t = sym.trim();
  const s = t.length === 10 ? t.slice(1) : t;
  if (!/^[r-][w-][xsS-][r-][w-][xsS-][r-][w-][xtT-]$/.test(s)) return null;
  const val = (t: string) => (t[0] === 'r' ? 4 : 0) + (t[1] === 'w' ? 2 : 0) + ('xst'.includes(t[2]!) ? 1 : 0);
  const u = val(s.slice(0, 3));
  const g = val(s.slice(3, 6));
  const o = val(s.slice(6, 9));
  const special = ('sS'.includes(s[2]!) ? 4 : 0) + ('sS'.includes(s[5]!) ? 2 : 0) + ('tT'.includes(s[8]!) ? 1 : 0);
  return `${special ? special : ''}${u}${g}${o}`;
}

export interface LsEntry {
  id: number;
  mode: string;
  owner: string;
  group: string;
  name: string;
}

export const LISTING: LsEntry[] = [
  { id: 1, mode: '-rw-r--r--', owner: 'alice', group: 'staff', name: 'report.txt' },
  { id: 2, mode: '-rwxr-x---', owner: 'root', group: 'ops', name: 'backup.sh' },
  { id: 3, mode: '-rw-------', owner: 'alice', group: 'alice', name: 'id_rsa' },
  { id: 4, mode: '-rwsr-xr-x', owner: 'root', group: 'root', name: 'passwd-helper' },
  { id: 5, mode: 'drwxrwxrwt', owner: 'root', group: 'root', name: 'tmp' },
  { id: 6, mode: '-rw-rw-rw-', owner: 'www-data', group: 'www-data', name: 'config.php' },
];

export function isWorldWritable(mode: string): boolean {
  return mode[8] === 'w';
}
