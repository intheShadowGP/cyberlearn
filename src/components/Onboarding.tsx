import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { setDeclaredLevel, type DeclaredLevel, type Onboarding } from '../lib/progress';
import { useSnapshot } from '../lib/useSnapshot';

export const DECLARED_LABEL: Record<DeclaredLevel, string> = { debutant: 'Débutant', initie: 'Initié' };

/**
 * Écran de bienvenue (première connexion) : l'utilisateur déclare son niveau.
 * « Débutant » démarre le parcours sans test ; « Initié » lance le test de positionnement.
 * Un utilisateur déjà présent (progression antérieure, sans onboarding) voit une variante
 * de transition : sa progression est conservée et il n'obtient aucun « initié validé » d'office.
 */
export function OnboardingWelcome() {
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
          <p className="eyebrow">Bienvenue sur CyberAcadémie</p>
          <h1 id="ob-title">Par où souhaitez-vous commencer ?</h1>
          {legacy ? (
            <p className="lead">
              Nous avons ajouté un positionnement à l’entrée du parcours. <strong>Toute votre progression est conservée.</strong>{' '}
              Indiquez simplement votre point de départ : votre niveau validé dépendra, lui, du test — rien n’est acquis d’office.
            </p>
          ) : (
            <p className="lead">
              Deux entrées possibles. Vous pourrez changer d’avis à tout moment : le niveau que vous déclarez ici n’est pas le
              niveau que la plateforme validera.
            </p>
          )}
        </div>
      </section>

      <ul className="choice-grid" aria-label="Choix du niveau de départ">
        <li className="choice-card">
          <h2>Je débute en cybersécurité</h2>
          <p className="muted">
            Vous partez des fondamentaux, dans l’ordre conseillé, sans test préalable. Les cours se déverrouillent au fur et à
            mesure de vos réussites.
          </p>
          <button type="button" className="btn btn-primary" disabled={busy !== null} onClick={() => void choose('debutant')}>
            {busy === 'debutant' ? 'Un instant…' : 'Démarrer en débutant'}
          </button>
        </li>
        <li className="choice-card">
          <h2>J’ai déjà des connaissances</h2>
          <p className="muted">
            Passez un test de positionnement de 20 questions. À partir de 14/20 (70 %), votre niveau est validé et le mode libre
            s’active : vous accédez aux cours sans suivre l’ordre des prérequis.
          </p>
          <button type="button" className="btn btn-primary" disabled={busy !== null} onClick={() => void choose('initie')}>
            {busy === 'initie' ? 'Un instant…' : 'Passer le test de positionnement'}
          </button>
        </li>
      </ul>
      <p className="muted">
        Le mode libre ne s’active que par la réussite du test : il n’existe pas de bouton pour l’activer manuellement.
      </p>
    </div>
  );
}

/** Panneau de statut du positionnement, affiché dans Profil et Compétences. */
export function OnboardingStatus({ onboarding }: { onboarding: Onboarding | undefined }) {
  if (!onboarding) {
    return (
      <section className="panel" aria-labelledby="pos-h">
        <h2 id="pos-h">Positionnement</h2>
        <p className="muted">
          Vous n’avez pas encore choisi votre point de départ.{' '}
          <Link to="/bienvenue">Choisir mon niveau ou passer le test</Link>.
        </p>
      </section>
    );
  }
  const r = onboarding.lastResult;
  return (
    <section className="panel" aria-labelledby="pos-h">
      <h2 id="pos-h">Positionnement</h2>
      <ul className="facts">
        <li>Niveau déclaré : <strong>{DECLARED_LABEL[onboarding.declaredLevel]}</strong></li>
        <li>
          Niveau validé :{' '}
          {onboarding.validated ? (
            <strong className="ok">Initié — test réussi</strong>
          ) : (
            <strong>Non validé par le test</strong>
          )}
        </li>
        <li>Mode libre : <strong>{onboarding.freeMode ? 'activé' : 'désactivé'}</strong> {onboarding.freeMode ? '(obtenu par le test)' : '(s’obtient en réussissant le test)'}</li>
        {r && (
          <li>
            Dernier test : <strong>{r.correct}/{r.total}</strong> ({r.percent} %) le {new Date(r.date).toLocaleDateString('fr-FR')} · {onboarding.attempts} tentative{onboarding.attempts > 1 ? 's' : ''}
          </li>
        )}
      </ul>
      <p className="muted">Le niveau <em>déclaré</em> est votre choix de départ ; le niveau <em>validé</em> dépend uniquement du test.</p>
      <Link className="btn" to="/positionnement">{onboarding.attempts > 0 ? 'Repasser le test de positionnement' : 'Passer le test de positionnement'}</Link>
    </section>
  );
}
