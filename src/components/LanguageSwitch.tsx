import { LANGS, useI18n, type Lang } from '../i18n';
import { setPrefs } from '../lib/prefs';

/** Sélecteur de langue FR / EN : groupe de boutons à bascule, état annoncé aux lecteurs d'écran. */
export function LanguageSwitch() {
  const { lang, t } = useI18n();
  return (
    <div className="lang-switch" role="group" aria-label={t('lang.group')}>
      {LANGS.map((l: Lang) => {
        const name = l === 'fr' ? t('lang.fr') : t('lang.en');
        return (
          <button
            key={l}
            type="button"
            lang={l}
            className="lang-btn"
            aria-pressed={lang === l}
            aria-label={name}
            title={name}
            data-testid={`lang-${l}`}
            onClick={() => setPrefs({ lang: l })}
          >
            {l.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
