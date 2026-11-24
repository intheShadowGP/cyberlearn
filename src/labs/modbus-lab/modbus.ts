/** Décodage de trames Modbus TCP (fonctions courantes) pour le laboratoire. */
import { currentLabTexts, fill, type LabTexts } from '../i18n';

const fr = {
  fns: {
    0x01: 'Lire des bobines',
    0x02: 'Lire des entrées discrètes',
    0x03: 'Lire des registres de maintien',
    0x04: 'Lire des registres d’entrée',
    0x05: 'Écrire une bobine',
    0x06: 'Écrire un registre',
    0x0f: 'Écrire plusieurs bobines',
    0x10: 'Écrire plusieurs registres',
  } as Record<number, string>,
  tooShort: 'Trame trop courte (8 octets minimum : en-tête MBAP + code fonction)',
  notModbus: 'Identifiant de protocole non nul : ce n’est pas du Modbus',
  badLength: 'Longueur annoncée ({a}) incohérente avec la trame ({b})',
  exception: 'Réponse d’exception',
  unsupported: 'Fonction non prise en charge par ce décodeur',
  invalid: 'invalide (0x{v})',
  quantity: 'quantité : {n}',
  registers: '{n} registre(s) : {list}',
};
const en: typeof fr = {
  fns: {
    0x01: 'Read coils',
    0x02: 'Read discrete inputs',
    0x03: 'Read holding registers',
    0x04: 'Read input registers',
    0x05: 'Write single coil',
    0x06: 'Write single register',
    0x0f: 'Write multiple coils',
    0x10: 'Write multiple registers',
  },
  tooShort: 'Frame too short (8 bytes minimum: MBAP header + function code)',
  notModbus: 'Non-zero protocol identifier: this is not Modbus',
  badLength: 'Announced length ({a}) inconsistent with the frame ({b})',
  exception: 'Exception response',
  unsupported: 'Function not supported by this decoder',
  invalid: 'invalid (0x{v})',
  quantity: 'quantity: {n}',
  registers: '{n} register(s): {list}',
};
const TEXTS: LabTexts<typeof fr> = { fr, en };

/** Fonctions courantes : l'indicateur d'écriture est indépendant de la langue. */
const WRITE_FNS = new Set([0x05, 0x06, 0x0f, 0x10]);

export const FUNCTIONS: Record<number, { name: string; write: boolean }> = Object.fromEntries(
  Object.entries(fr.fns).map(([k, name]) => [Number(k), { name, write: WRITE_FNS.has(Number(k)) }]),
);

export interface Decoded {
  transaction: number;
  protocol: number;
  length: number;
  unit: number;
  fn: number;
  fnName: string;
  write: boolean;
  address: number | null;
  value: string | null;
  error: string | null;
}

export function parseHex(hex: string): number[] | null {
  const clean = hex.replace(/[\s:]/g, '');
  if (!/^([0-9a-fA-F]{2})+$/.test(clean) || clean.length > 520) return null;
  const out: number[] = [];
  for (let i = 0; i < clean.length; i += 2) out.push(parseInt(clean.slice(i, i + 2), 16));
  return out;
}

const u16 = (b: number[], i: number) => ((b[i] ?? 0) << 8) | (b[i + 1] ?? 0);

export function decode(bytes: number[]): Decoded {
  const T = currentLabTexts(TEXTS);
  const base: Decoded = { transaction: 0, protocol: 0, length: 0, unit: 0, fn: 0, fnName: '', write: false, address: null, value: null, error: null };
  if (bytes.length < 8) return { ...base, error: T.tooShort };
  const d: Decoded = { ...base, transaction: u16(bytes, 0), protocol: u16(bytes, 2), length: u16(bytes, 4), unit: bytes[6] as number, fn: bytes[7] as number };
  if (d.protocol !== 0) return { ...d, error: T.notModbus };
  if (d.length !== bytes.length - 6) return { ...d, error: fill(T.badLength, { a: d.length, b: bytes.length - 6 }) };
  const name = T.fns[d.fn];
  d.fnName = name ?? (d.fn >= 0x80 ? T.exception : T.unsupported);
  d.write = WRITE_FNS.has(d.fn) && name !== undefined;
  if (bytes.length >= 10) d.address = u16(bytes, 8);
  if (d.fn === 0x05 && bytes.length >= 12) {
    const v = u16(bytes, 10);
    d.value = v === 0xff00 ? 'ON (0xFF00)' : v === 0 ? 'OFF (0x0000)' : fill(T.invalid, { v: v.toString(16) });
  } else if (d.fn === 0x06 && bytes.length >= 12) {
    d.value = String(u16(bytes, 10));
  } else if ((d.fn === 0x01 || d.fn === 0x03 || d.fn === 0x04 || d.fn === 0x02) && bytes.length >= 12) {
    d.value = fill(T.quantity, { n: u16(bytes, 10) });
  } else if (d.fn === 0x10 && bytes.length >= 13) {
    const qty = u16(bytes, 10);
    const vals: number[] = [];
    for (let i = 0; i < qty && 13 + i * 2 + 1 < bytes.length + 1; i++) vals.push(u16(bytes, 13 + i * 2));
    d.value = fill(T.registers, { n: qty, list: vals.join(', ') });
  }
  return d;
}
