import { useState } from 'react';
import { Inline } from './Inline';
import { useI18n } from '../i18n';

/**
 * Indices progressifs : révélés un par un à la demande, pour aider l'investigation
 * sans donner la solution. L'apprenant choisit d'en afficher ou non.
 */
export function Hints({ hints }: { hints: string[] }) {
  const { t } = useI18n();
  const [shown, setShown] = useState(0);
  if (!hints.length) return null;
  return (
    <section className="panel hints" aria-labelledby="hints-h">
      <h2 id="hints-h" className="h3">{t('hints.title')}</h2>
      <p className="muted">{t('hints.help')}</p>
      <ol className="hint-list" aria-live="polite">
        {hints.slice(0, shown).map((h, i) => (
          <li key={i}>
            <Inline text={h} />
          </li>
        ))}
      </ol>
      {shown < hints.length ? (
        <button type="button" className="btn btn-ghost" onClick={() => setShown((n) => n + 1)}>
          {shown === 0 ? t('hints.first') : t('hints.next', { n: shown, total: hints.length })}
        </button>
      ) : (
        <p className="muted">{t('hints.all', { n: hints.length })}</p>
      )}
    </section>
  );
}
