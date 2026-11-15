/** Décodage de trames Modbus TCP (fonctions courantes) pour le laboratoire. */

export const FUNCTIONS: Record<number, { name: string; write: boolean }> = {
  0x01: { name: 'Lire des bobines', write: false },
  0x02: { name: 'Lire des entrées discrètes', write: false },
  0x03: { name: 'Lire des registres de maintien', write: false },
  0x04: { name: 'Lire des registres d’entrée', write: false },
  0x05: { name: 'Écrire une bobine', write: true },
  0x06: { name: 'Écrire un registre', write: true },
  0x0f: { name: 'Écrire plusieurs bobines', write: true },
  0x10: { name: 'Écrire plusieurs registres', write: true },
};

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
  const base: Decoded = { transaction: 0, protocol: 0, length: 0, unit: 0, fn: 0, fnName: '', write: false, address: null, value: null, error: null };
  if (bytes.length < 8) return { ...base, error: 'Trame trop courte (8 octets minimum : en-tête MBAP + code fonction)' };
  const d: Decoded = { ...base, transaction: u16(bytes, 0), protocol: u16(bytes, 2), length: u16(bytes, 4), unit: bytes[6] as number, fn: bytes[7] as number };
  if (d.protocol !== 0) return { ...d, error: 'Identifiant de protocole non nul : ce n’est pas du Modbus' };
  if (d.length !== bytes.length - 6) return { ...d, error: `Longueur annoncée (${d.length}) incohérente avec la trame (${bytes.length - 6})` };
  const f = FUNCTIONS[d.fn];
  d.fnName = f ? f.name : d.fn >= 0x80 ? 'Réponse d’exception' : 'Fonction non prise en charge par ce décodeur';
  d.write = f?.write ?? false;
  if (bytes.length >= 10) d.address = u16(bytes, 8);
  if (d.fn === 0x05 && bytes.length >= 12) {
    const v = u16(bytes, 10);
    d.value = v === 0xff00 ? 'ON (0xFF00)' : v === 0 ? 'OFF (0x0000)' : `invalide (0x${v.toString(16)})`;
  } else if (d.fn === 0x06 && bytes.length >= 12) {
    d.value = String(u16(bytes, 10));
  } else if ((d.fn === 0x01 || d.fn === 0x03 || d.fn === 0x04 || d.fn === 0x02) && bytes.length >= 12) {
    d.value = `quantité : ${u16(bytes, 10)}`;
  } else if (d.fn === 0x10 && bytes.length >= 13) {
    const qty = u16(bytes, 10);
    const vals: number[] = [];
    for (let i = 0; i < qty && 13 + i * 2 + 1 < bytes.length + 1; i++) vals.push(u16(bytes, 13 + i * 2));
    d.value = `${qty} registre(s) : ${vals.join(', ')}`;
  }
  return d;
}
