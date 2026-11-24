import { afterEach, describe, expect, it } from 'vitest';
import { cleanup, render } from '@testing-library/react';
import { DIAGRAMS } from '.';
import { setPrefs } from '../../lib/prefs';

/** Texte visible d'un schéma (éléments <text>). */
function texts(Diagram: () => React.ReactElement): string[] {
  const { container } = render(<Diagram />);
  return [...container.querySelectorAll('text')].map((t) => (t.textContent ?? '').trim()).filter(Boolean);
}

const FRENCH = /[àâçéèêëîïôùûœÀÉ]|\b(le|la|les|du|des|une|est|pour|avec|dans|sur|ou|et|de|d’|l’)\b/;
/** Exceptions : sigles, noms propres et exemples techniques qui ne se traduisent pas. */
const ALLOWED = /exemple\.fr/;

afterEach(() => {
  cleanup();
  setPrefs({ lang: 'fr' });
});

describe('schémas bilingues', () => {
  it('en anglais, aucun libellé français ne subsiste', () => {
    setPrefs({ lang: 'en' });
    const leaks: string[] = [];
    for (const [id, D] of Object.entries(DIAGRAMS)) {
      for (const t of texts(D)) if (FRENCH.test(t.replace(ALLOWED, ''))) leaks.push(`${id} : « ${t} »`);
      cleanup();
    }
    expect(leaks, leaks.join('\n')).toEqual([]);
  });

  it('en français, les libellés sont inchangés', () => {
    setPrefs({ lang: 'fr' });
    const all = Object.values(DIAGRAMS).flatMap((D) => { const t = texts(D); cleanup(); return t; });
    expect(all).toContain('Connexion établie : échange de données');
    expect(all).toContain('Défense en profondeur : chaque étape de la chaîne a une parade');
  });
});
