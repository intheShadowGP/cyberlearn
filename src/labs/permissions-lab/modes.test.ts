import { describe, expect, it } from 'vitest';
import { LISTING, isWorldWritable, octalToSymbolic, symbolicToOctal } from './modes';
import { corrections } from './corrections';

describe('laboratoire des permissions', () => {
  it('convertit octal vers symbolique, bits spéciaux compris', () => {
    expect(octalToSymbolic('644')).toBe('rw-r--r--');
    expect(octalToSymbolic('750')).toBe('rwxr-x---');
    expect(octalToSymbolic('4755')).toBe('rwsr-xr-x');
    expect(octalToSymbolic('1777')).toBe('rwxrwxrwt');
    expect(octalToSymbolic('4644')).toBe('rwSr--r--');
    expect(octalToSymbolic('999')).toBeNull();
    expect(octalToSymbolic('7')).toBeNull();
  });

  it('convertit symbolique vers octal, avec ou sans le caractère de type', () => {
    expect(symbolicToOctal('rw-r--r--')).toBe('644');
    expect(symbolicToOctal('-rw-r--r--')).toBe('644');
    expect(symbolicToOctal('-rwsr-xr-x')).toBe('4755');
    expect(symbolicToOctal('drwxrwxrwt')).toBe('1777');
    expect(symbolicToOctal('abc')).toBeNull();
  });

  it('les deux conversions sont inverses sur les valeurs du listing', () => {
    for (const e of LISTING) {
      const oct = symbolicToOctal(e.mode)!;
      expect(octalToSymbolic(oct)).toBe(e.mode.slice(1));
    }
  });

  it('config.php est le seul fichier modifiable par tous (hors dossier avec sticky)', () => {
    const w = LISTING.filter((e) => isWorldWritable(e.mode)).map((e) => e.name);
    expect(w).toEqual(['tmp', 'config.php']);
  });

  it('les réponses attendues sont cohérentes avec le calcul', () => {
    const q1 = corrections.questions['permlab-q1'];
    const q2 = corrections.questions['permlab-q2'];
    expect(q1 && 'accepted' in q1 ? q1.accepted : []).toContain(symbolicToOctal('rw-r--r--'));
    expect(q2 && 'accepted' in q2 ? q2.accepted : []).toContain(octalToSymbolic('750'));
  });
});
