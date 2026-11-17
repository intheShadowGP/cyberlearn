import { useState } from 'react';
import { Inline } from './Inline';

/**
 * Indices progressifs : révélés un par un à la demande, pour aider l'investigation
 * sans donner la solution. L'apprenant choisit d'en afficher ou non.
 */
export function Hints({ hints }: { hints: string[] }) {
  const [shown, setShown] = useState(0);
  if (!hints.length) return null;
  return (
    <section className="panel hints" aria-labelledby="hints-h">
      <h2 id="hints-h" className="h3">Besoin d’aide ? Indices</h2>
      <p className="muted">À utiliser seulement si vous bloquez : les indices guident sans donner la réponse.</p>
      <ol className="hint-list" aria-live="polite">
        {hints.slice(0, shown).map((h, i) => (
          <li key={i}>
            <Inline text={h} />
          </li>
        ))}
      </ol>
      {shown < hints.length ? (
        <button type="button" className="btn btn-ghost" onClick={() => setShown((n) => n + 1)}>
          {shown === 0 ? 'Afficher un premier indice' : `Afficher l’indice suivant (${shown}/${hints.length})`}
        </button>
      ) : (
        <p className="muted">Tous les indices sont affichés ({hints.length}/{hints.length}). À vous de conclure.</p>
      )}
    </section>
  );
}
