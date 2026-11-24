import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { setDeclaredLevel, type DeclaredLevel, type Onboarding } from '../lib/progress';
import { useSnapshot } from '../lib/useSnapshot';
import { useI18n } from '../i18n';
import { Inline } from './Inline';

/**
 * Écran de bienvenue (première connexion) : l'utilisateur déclare son niveau.
 * « Débutant » démarre le parcours sans test ; « Initié » lance le test de positionnement.
 * Un utilisateur déjà présent (progression antérieure, sans onboarding) voit une variante
 * de transition : sa progression est conservée et il n'obtient aucun « initié validé » d'office.
 */
export function OnboardingWelcome() {
  const { t } = useI18n();
  const { data, ready } = useSnapshot();
  const nav = useNavigate();
  const [busy, setBusy] = useState<DeclaredLevel | null>(null);
  const legacy = ready && (data.progress.length > 0 || data.attempts.length > 0 || data.activity.length > 0);

  async function choose(level: DeclaredLevel) {
    setBusy(level);
    try {
      await setDeclaredLevel(level);
      nav(level === 'initie' ? '/positionnement' : '/parcours');
    } finally {
      setBusy(null);
    }
  }

  return (
    <div className="onboarding">
      <section className="hero" aria-labelledby="ob-title">
        <div className="hero-text">
          <p className="eyebrow">{t('ob.eyebrow')}</p>
          <h1 id="ob-title">{t('ob.title')}</h1>
          {legacy ? (
            <p className="lead"><Inline text={t('ob.legacyLead')} /></p>
          ) : (
            <p className="lead">{t('ob.lead')}</p>
          )}
        </div>
      </section>

      <ul className="choice-grid" aria-label={t('ob.choices.aria')}>
        <li className="choice-card">
          <h2>{t('ob.beginner.title')}</h2>
          <p className="muted">{t('ob.beginner.text')}</p>
          <button type="button" className="btn btn-primary" disabled={busy !== null} onClick={() => void choose('debutant')}>
            {busy === 'debutant' ? t('ob.busy') : t('ob.beginner.btn')}
          </button>
        </li>
        <li className="choice-card">
          <h2>{t('ob.initiate.title')}</h2>
          <p className="muted">{t('ob.initiate.text')}</p>
          <button type="button" className="btn btn-primary" disabled={busy !== null} onClick={() => void choose('initie')}>
            {busy === 'initie' ? t('ob.busy') : t('ob.initiate.btn')}
          </button>
        </li>
      </ul>
      <p className="muted">{t('ob.freeNote')}</p>
    </div>
  );
}

/** Panneau de statut du positionnement, affiché dans Profil et Compétences. */
export function OnboardingStatus({ onboarding }: { onboarding: Onboarding | undefined }) {
  const { t, tp, date } = useI18n();
  if (!onboarding) {
    return (
      <section className="panel" aria-labelledby="pos-h">
        <h2 id="pos-h">{t('pos.title')}</h2>
        <p className="muted">
          {t('pos.none')} <Link to="/bienvenue">{t('pos.noneLink')}</Link>.
        </p>
      </section>
    );
  }
  const r = onboarding.lastResult;
  return (
    <section className="panel" aria-labelledby="pos-h">
      <h2 id="pos-h">{t('pos.title')}</h2>
      <ul className="facts">
        <li>{t('pos.declared')} <strong>{t(onboarding.declaredLevel === 'initie' ? 'pos.level.initie' : 'pos.level.debutant')}</strong></li>
        <li>
          {t('pos.validated')}{' '}
          {onboarding.validated ? (
            <strong className="ok">{t('pos.validated.yes')}</strong>
          ) : (
            <strong>{t('pos.validated.no')}</strong>
          )}
        </li>
        <li>{t('pos.free')} <strong>{onboarding.freeMode ? t('pos.free.on') : t('pos.free.off')}</strong> {onboarding.freeMode ? t('pos.free.onNote') : t('pos.free.offNote')}</li>
        {r && (
          <li>
            {t('pos.last', { score: `${r.correct}/${r.total}`, pct: r.percent, date: date(r.date) })} · {tp('pos.attempts', onboarding.attempts)}
          </li>
        )}
      </ul>
      <p className="muted"><Inline text={t('pos.note')} /></p>
      <Link className="btn" to="/positionnement">{onboarding.attempts > 0 ? t('pos.retake') : t('pos.take')}</Link>
    </section>
  );
}
