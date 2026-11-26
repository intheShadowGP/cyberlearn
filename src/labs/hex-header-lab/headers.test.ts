import { describe, expect, it } from 'vitest';
import { FILES, dottedQuad, hexDump, parseHexBytes, printable } from './headers';
import { corrections } from './corrections';

describe('laboratoire de lecture hexadécimale', () => {
  it('chaque fichier fait 48 octets et commence par sa signature', () => {
    for (const f of FILES) expect(f.bytes).toHaveLength(48);
    expect(FILES[0]!.bytes.slice(0, 2)).toEqual([0x4d, 0x5a]);
    expect(FILES[1]!.bytes.slice(0, 3)).toEqual([0xff, 0xd8, 0xff]);
    expect(FILES[2]!.bytes.slice(0, 2)).toEqual([0x50, 0x4b]);
    expect(printable(FILES[3]!.bytes.slice(0, 4))).toBe('%PDF');
  });

  it('le dump a des lignes de 16 octets, avec décalage et colonne texte', () => {
    const d = hexDump(FILES[0]!.bytes);
    expect(d).toHaveLength(3);
    expect(d[0]!.offset).toBe('00000000');
    expect(d[0]!.text.startsWith('MZ')).toBe(true);
    expect(d[1]!.offset).toBe('00000010');
  });

  it('parseHexBytes accepte plusieurs écritures et refuse les saisies invalides', () => {
    expect(parseHexBytes('C0 A8 01 0A')).toEqual([192, 168, 1, 10]);
    expect(parseHexBytes('0xC8')).toEqual([200]);
    expect(parseHexBytes('c0a8010a')).toEqual([192, 168, 1, 10]);
    expect(parseHexBytes('zz')).toBeNull();
    expect(parseHexBytes('')).toBeNull();
  });

  it('les octets C0 A8 01 0A forment 192.168.1.10', () => {
    expect(dottedQuad(parseHexBytes('C0 A8 01 0A')!)).toBe('192.168.1.10');
    expect(dottedQuad([1, 2, 3])).toBeNull();
  });

  it('les corrections acceptent le fichier déguisé et la valeur 200', () => {
    const q1 = corrections.questions['hexlab-q1'];
    const q4 = corrections.questions['hexlab-q4'];
    expect(q1 && 'accepted' in q1 ? q1.accepted : []).toContain('rapport.pdf');
    expect(q4 && 'accepted' in q4 ? q4.accepted : []).toContain('200');
  });
});
