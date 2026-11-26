/** Début (48 octets) de quatre fichiers FICTIFS, pour s'entraîner à lire un dump hexadécimal. */

export interface SampleFile {
  id: number;
  name: string;
  bytes: number[];
}

const ascii = (s: string): number[] => [...s].map((c) => c.charCodeAt(0));

function pad(bytes: number[], length = 48): number[] {
  return [...bytes, ...Array<number>(Math.max(0, length - bytes.length)).fill(0)].slice(0, length);
}

export const FILES: SampleFile[] = [
  {
    id: 1,
    name: 'rapport.pdf',
    bytes: pad([0x4d, 0x5a, 0x90, 0x00, 0x03, 0x00, 0x00, 0x00, 0x04, 0x00, 0x00, 0x00, 0xff, 0xff, 0x00, 0x00, 0xb8, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x40]),
  },
  {
    id: 2,
    name: 'photo.txt',
    bytes: pad([0xff, 0xd8, 0xff, 0xe0, 0x00, 0x10, ...ascii('JFIF'), 0x00, 0x01, 0x01, 0x00, 0x00, 0x01, 0x00, 0x01, 0x00, 0x00, 0xff, 0xdb, 0x00, 0x43]),
  },
  {
    id: 3,
    name: 'budget.xlsx',
    bytes: pad([0x50, 0x4b, 0x03, 0x04, 0x14, 0x00, 0x06, 0x00, 0x08, 0x00, 0x00, 0x00, 0x21, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x13, 0x00, 0x00, 0x00, ...ascii('[Content_Types].xml')]),
  },
  {
    id: 4,
    name: 'notes.pdf',
    bytes: pad([...ascii('%PDF-1.7\n%'), 0xe2, 0xe3, 0xcf, 0xd3, 0x0a, ...ascii('1 0 obj\n<< /Type /Catalog >>\nendobj')]),
  },
];

export interface DumpLine {
  offset: string;
  hex: string;
  text: string;
}

export function hexDump(bytes: readonly number[], width = 16): DumpLine[] {
  const out: DumpLine[] = [];
  for (let i = 0; i < bytes.length; i += width) {
    const chunk = bytes.slice(i, i + width);
    out.push({
      offset: i.toString(16).padStart(8, '0'),
      hex: chunk.map((b) => b.toString(16).padStart(2, '0')).join(' '),
      text: chunk.map((b) => (b >= 0x20 && b < 0x7f ? String.fromCharCode(b) : '.')).join(''),
    });
  }
  return out;
}

/** Analyse une saisie hexadécimale (« C0 A8 01 0A », « 0xC0A8 », « c0a8010a »). Retourne null si elle est invalide. */
export function parseHexBytes(input: string): number[] | null {
  const cleaned = input.replace(/0x/gi, ' ').replace(/[\s,:-]+/g, ' ').trim();
  if (!cleaned) return null;
  const parts = cleaned.split(' ');
  const out: number[] = [];
  for (const p of parts) {
    if (!/^[0-9a-f]+$/i.test(p)) return null;
    const even = p.length % 2 === 0 ? p : `0${p}`;
    for (let i = 0; i < even.length; i += 2) out.push(parseInt(even.slice(i, i + 2), 16));
  }
  return out;
}

export function dottedQuad(bytes: readonly number[]): string | null {
  return bytes.length === 4 ? bytes.join('.') : null;
}

export function printable(bytes: readonly number[]): string {
  return bytes.map((b) => (b >= 0x20 && b < 0x7f ? String.fromCharCode(b) : '.')).join('');
}
