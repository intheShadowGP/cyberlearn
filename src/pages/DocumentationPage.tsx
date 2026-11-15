import { Link } from 'react-router-dom';
import { MODULES } from '../content/catalog';
import { COURSES, LABS, coursesOfModule } from '../content/registry';
import { PATHS } from '../content/paths';
import { MASTERY, MIN_EVIDENCE, LEVEL_COVERAGE } from '../lib/levels';
import { PASS_THRESHOLD } from '../lib/quiz';
import { LEITNER_DAYS } from '../lib/progress';
import { XP_RULES } from '../lib/gamification';
import { usePageTitle } from '../lib/usePageTitle';

const REFERENTIALS: [string, string][] = [
  ['ANSSI / CERT-FR', 'Guides de configuration, recommandations Active Directory, EBIOS Risk Manager, qualifications PASSI et SecNumCloud'],
  ['OWASP', 'Top 10, ASVS, Testing Guide, cheat sheets, Top 10 LLM et CI/CD'],
  ['NIST', 'CSF 2.0, SP 800-61, 800-86, 800-115, 800-207, 800-218 (SSDF), IR 8259'],
  ['MITRE', 'ATT&CK (entreprise et ICS), ATLAS'],
  ['IETF', 'RFC des protocoles étudiés (TCP, CIDR, HMAC, Argon2, OAuth BCP, security.txt…)'],
  ['ISO / IEC', '27001, 27002, 27005, 62443'],
  ['CIS', 'Benchmarks (Linux, cloud, Kubernetes), CIS Controls'],
  ['CISA, ENISA, ETSI, Union européenne', 'Catalogue KEV, feuilles de route « memory safe », EN 303 645, RGPD, NIS2, DORA, Cyber Resilience Act'],
];

export default function DocumentationPage() {
  usePageTitle('Documentation');
  const questions = COURSES.reduce((n, c) => n + c.questionCount, 0);
  return (
    <div className="prose">
      <h1>Documentation</h1>
      <nav aria-label="Sommaire de la documentation">
        <ol>
          {['fonctionnement', 'methodologie', 'disciplines', 'sources', 'referentiels', 'stockage', 'confidentialite', 'limites'].map((s) => (
            <li key={s}><a href={`#doc-${s}`} onClick={(e) => { e.preventDefault(); document.getElementById(`doc-${s}`)?.scrollIntoView(); }}>{{ fonctionnement: 'Fonctionnement', methodologie: 'Méthodologie pédagogique', disciplines: 'Disciplines couvertes', sources: 'Sources', referentiels: 'Référentiels', stockage: 'Stockage local', confidentialite: 'Confidentialité', limites: 'Limites techniques' }[s]}</a></li>
          ))}
        </ol>
      </nav>

      <h2 id="doc-fonctionnement">Fonctionnement de la plateforme</h2>
      <p>
        CyberAcadémie est une application web statique : tout s’exécute dans votre navigateur. Elle propose {COURSES.length} cours,
        {' '}{LABS.length} laboratoires simulés, {PATHS.length} parcours, des évaluations transversales, des examens blancs, un
        glossaire, une recherche interne et un système de révision. Après une première visite, elle fonctionne hors ligne et peut
        être installée comme une application.
      </p>

      <h2 id="doc-methodologie">Méthodologie pédagogique</h2>
      <ul>
        <li><strong>Structure de chaque cours</strong> : présentation (objectifs, prérequis, compétences), leçon, mise en pratique avec corrigés, questions, correction expliquée, évaluation par compétence, validation. La leçon précède toujours les questions.</li>
        <li><strong>Évaluation</strong> : questions tirées au hasard dans une banque au moins deux fois plus grande que le questionnaire ; cinq types (choix unique, multiple, vrai/faux, réponse courte, question ouverte auto-évaluée). Validation d’un cours à {PASS_THRESHOLD} %.</li>
        <li><strong>Compétences</strong> : acquises à {Math.round(MASTERY * 100)} % de réussite sur au moins {MIN_EVIDENCE} questions ; un niveau de discipline exige {Math.round(LEVEL_COVERAGE * 100)} % des compétences publiées de ce niveau et des niveaux inférieurs.</li>
        <li><strong>Quatre états distincts</strong> par cours : contenu consulté, leçon terminée, évaluation réussie, compétences maîtrisées.</li>
        <li><strong>Révision espacée</strong> : boîtes de Leitner avec intervalles de {Object.values(LEITNER_DAYS).join(', ')} jours.</li>
        <li><strong>Expérience (XP)</strong> : calculée à partir d’activités réelles (section lue : {XP_RULES.section} XP, cours validé : {XP_RULES.courseValidated} XP, laboratoire réussi : {XP_RULES.labCompleted} XP…). Elle donne un rang mais ne débloque jamais de contenu ni de compétence.</li>
        <li><strong>Laboratoires</strong> : simulations sur données fictives, sans requête vers des systèmes tiers, toujours conclues par un débriefing défensif.</li>
      </ul>

      <h2 id="doc-disciplines">Disciplines couvertes</h2>
      <p>
        {MODULES.length} disciplines sont cartographiées ; le nombre de cours effectivement publiés est indiqué pour chacune. Une
        discipline cartographiée n’est pas une discipline enseignée en profondeur : voir l’inventaire détaillé du dépôt
        (docs/CURRICULUM.md). Total : {questions} questions de cours.
      </p>
      <div className="table-wrap">
        <table>
          <thead><tr><th scope="col">Discipline</th><th scope="col">Cours publiés</th><th scope="col">Sujets cartographiés</th></tr></thead>
          <tbody>
            {MODULES.map((m) => <tr key={m.id}><th scope="row"><Link to={`/module/${m.id}`}>{m.id}. {m.title}</Link></th><td>{coursesOfModule(m.id).length}</td><td>{m.topics.length}</td></tr>)}
          </tbody>
        </table>
      </div>

      <h2 id="doc-sources">Sources utilisées</h2>
      <p>
        Chaque cours se termine par ses références documentaires, en priorité officielles. Les liens ont été vérifiés
        automatiquement (réponse du serveur et titre de la page) ; leur contenu peut évoluer. Les notions susceptibles
        d’évoluer (versions de normes, réglementations en cours de déploiement, paramètres recommandés) sont signalées dans
        les leçons. Aucune question ne reproduit un examen de certification.
      </p>

      <h2 id="doc-referentiels">Référentiels</h2>
      <div className="table-wrap">
        <table>
          <thead><tr><th scope="col">Organisme</th><th scope="col">Documents utilisés</th></tr></thead>
          <tbody>{REFERENTIALS.map(([o, d]) => <tr key={o}><th scope="row">{o}</th><td>{d}</td></tr>)}</tbody>
        </table>
      </div>
      <p>Le <Link to="/glossaire">glossaire</Link> rassemble les définitions de toutes les leçons.</p>

      <h2 id="doc-stockage">Fonctionnement du stockage local</h2>
      <p>
        La progression est enregistrée dans IndexedDB, en transactions atomiques, avec un schéma versionné et migré
        automatiquement. Les préférences simples sont dans localStorage. L’export produit un fichier JSON versionné avec une
        empreinte SHA-256 ; l’import vérifie la version, le schéma de chaque enregistrement, la taille et l’empreinte, puis
        demande confirmation avant de remplacer les données. Détails et contrôle dans <Link to="/parametres">Paramètres et données</Link>.
      </p>

      <h2 id="doc-confidentialite">Confidentialité</h2>
      <p>Aucune donnée ne quitte l’appareil. Voir la <Link to="/confidentialite">politique de confidentialité</Link>.</p>

      <h2 id="doc-limites">Limites techniques</h2>
      <ul>
        <li>Les fichiers de corrections, chargés seulement à la validation, restent téléchargeables : la séparation évite la consultation accidentelle, ce n’est pas un secret.</li>
        <li>GitHub Pages ne permet pas d’en-têtes HTTP personnalisés : la politique de sécurité du contenu est une balise meta, sans <code>frame-ancestors</code>.</li>
        <li>Pas de synchronisation entre appareils ; les données disparaissent si le navigateur efface le stockage du site.</li>
        <li>L’empreinte d’un export détecte une corruption accidentelle mais ne prouve pas son origine.</li>
        <li>Les laboratoires sont des simulations : ils n’exercent pas les outils réels (Nmap, Burp, Volatility…).</li>
        <li>La plateforme ne délivre aucune certification officielle.</li>
      </ul>
    </div>
  );
}
