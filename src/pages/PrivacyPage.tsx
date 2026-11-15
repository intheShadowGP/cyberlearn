import { Link } from 'react-router-dom';
import { DB_NAME, STORES } from '../lib/db';
import { usePageTitle } from '../lib/usePageTitle';

const STORE_PURPOSE: Record<string, string> = {
  progress: 'Progression par cours : sections lues, exercices faits, meilleur score, temps d’étude mesuré',
  labProgress: 'Progression par laboratoire',
  attempts: 'Résultats de chaque évaluation (scores, compétences évaluées, durée)',
  skills: 'Historique des taux de réussite par compétence',
  goals: 'Objectifs personnels saisis',
  meta: 'Dernier cours consulté',
  profile: 'Pseudonyme facultatif et parcours suivis',
  activity: 'Journal daté des activités (séries, défis, historique)',
  reviews: 'Programme de révision (boîtes de Leitner, échéances)',
};

export default function PrivacyPage() {
  usePageTitle('Confidentialité');
  return (
    <div className="prose">
      <h1>Politique de confidentialité</h1>
      <p className="lead">
        CyberAcadémie fonctionne sans compte et sans serveur applicatif. Cette page décrit exactement ce qui est stocké, où, et
        dans quel but. Les affirmations marquées « vérifié » sont contrôlées par des tests automatisés du projet.
      </p>

      <h2>Absence de compte</h2>
      <p>
        Il n’existe ni inscription, ni connexion, ni mot de passe, ni authentification par courriel ou par un service tiers. Le
        profil est créé localement à la première utilisation. Seul un pseudonyme facultatif peut être saisi.
      </p>

      <h2>Données stockées et emplacement</h2>
      <p>
        Toutes les données de progression sont enregistrées dans la base IndexedDB « {DB_NAME} » de votre navigateur, sur votre
        appareil :
      </p>
      <div className="table-wrap">
        <table>
          <thead><tr><th scope="col">Magasin</th><th scope="col">Contenu et finalité</th></tr></thead>
          <tbody>
            {Object.keys(STORES).map((k) => <tr key={k}><td className="mono">{k}</td><td>{STORE_PURPOSE[k] ?? '—'}</td></tr>)}
          </tbody>
        </table>
      </div>
      <p>
        Les préférences d’affichage (thème, taille du texte, animations, mode libre) sont stockées dans <code>localStorage</code>{' '}
        sous la clé <code>cyberacademie.prefs.v1</code>. Le service worker conserve dans le cache du navigateur les fichiers du site
        (cours, corrections, images) pour le fonctionnement hors ligne ; ce cache ne contient aucune donnée personnelle.
      </p>
      <p>Finalité unique : afficher votre progression, vos résultats et vos révisions sur cet appareil.</p>

      <h2>Aucune transmission</h2>
      <ul>
        <li>Aucune donnée de progression n’est envoyée à GitHub Pages ni à une API externe (vérifié : une session complète ne produit aucune requête vers une autre origine que celle du site).</li>
        <li>Aucun cookie n’est déposé (vérifié par test).</li>
        <li>Aucune mesure d’audience, aucun traceur, aucune publicité, aucun script, police ou image tiers (la politique de sécurité du contenu n’autorise que l’origine du site).</li>
        <li>Aucune synchronisation entre appareils : pour changer d’appareil, utilisez l’export puis l’import d’une sauvegarde.</li>
      </ul>

      <h2>Hébergement</h2>
      <p>
        Le site est servi par GitHub Pages. Comme tout hébergeur, GitHub reçoit techniquement l’adresse IP et les en-têtes de
        votre navigateur lorsqu’il télécharge les fichiers du site ; ces journaux relèvent de la politique de confidentialité de
        GitHub, sur laquelle CyberAcadémie n’a pas de contrôle. Ils ne contiennent aucune donnée de progression, celle-ci
        n’étant jamais transmise.
      </p>

      <h2>Liens externes</h2>
      <p>
        Les ressources complémentaires des cours renvoient vers des sites tiers (ANSSI, OWASP, NIST…). Ils ne sont contactés que si
        vous cliquez sur un lien ; ils s’ouvrent alors dans un nouvel onglet, sans transmission de l’adresse de la page d’origine
        (<code>noreferrer</code>).
      </p>

      <h2>Fonctionnement hors ligne</h2>
      <p>Après une première visite, le site et tous ses contenus fonctionnent sans connexion. Vos données restent identiques en ligne et hors ligne.</p>

      <h2>Limites du stockage navigateur</h2>
      <ul>
        <li>Effacer les données du site dans le navigateur, utiliser la navigation privée ou désinstaller le navigateur supprime la progression.</li>
        <li>Sans stockage « persistant » accordé, le navigateur peut évincer les données en cas de manque d’espace.</li>
        <li>Les données ne sont pas chiffrées par CyberAcadémie : toute personne ou tout logiciel ayant accès à votre session de navigateur peut les lire.</li>
        <li>Le fichier d’export est un JSON lisible : conservez-le comme un document personnel.</li>
      </ul>

      <h2>Vos droits et votre contrôle</h2>
      <p>
        Les données étant uniquement sur votre appareil, vous les maîtrisez entièrement : consultation, export, import,
        réinitialisation et suppression complète depuis la page <Link to="/parametres">Paramètres et données</Link>.
      </p>
    </div>
  );
}
