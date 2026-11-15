import { MODULES } from '../content/catalog';
import { COURSES, LABS } from '../content/registry';
import { usePageTitle } from '../lib/usePageTitle';

export default function AboutPage() {
  usePageTitle('À propos');
  const covered = new Set(COURSES.flatMap((c) => c.topics)).size;
  const total = MODULES.reduce((n, m) => n + m.topics.length, 0);
  const questions = COURSES.reduce((n, c) => n + c.questionCount, 0);

  return (
    <div className="prose">
      <h1>À propos de CyberAcadémie</h1>
      <p className="lead">
        Une plateforme d’apprentissage de la cybersécurité, statique, utilisable hors ligne, sans compte et sans traçage.
      </p>

      <h2>État du contenu</h2>
      <p>
        Version actuelle : <strong>{COURSES.length} cours complets</strong>, <strong>{LABS.length} laboratoires interactifs</strong>{' '}
        et <strong>{questions} questions corrigées</strong>. La cartographie compte {total} sujets répartis en {MODULES.length}{' '}
        disciplines ; {covered} sont abordés dans au moins un cours publié (un même cours peut aborder plusieurs sujets, plus ou moins en profondeur). Les autres sont affichés comme « à venir » et ne sont jamais
        présentés comme des cours.
      </p>

      <h2>Éthique et cadre légal</h2>
      <p>
        Les contenus offensifs ont une finalité exclusivement pédagogique et défensive. Les laboratoires s’exécutent sur des
        données fictives, dans votre navigateur, et n’envoient aucune requête vers un système tiers. Accéder ou se maintenir
        frauduleusement dans un système de traitement automatisé de données est puni par les articles 323-1 et suivants du Code
        pénal. Tout test d’intrusion réel requiert une autorisation écrite et un périmètre défini.
      </p>

      <h2>Certifications</h2>
      <p>
        CyberAcadémie ne délivre aucune certification officielle et n’est affiliée à aucun organisme certificateur. Les
        correspondances avec les référentiels (CompTIA, ISC2, ISO, etc.) visent uniquement à orienter la préparation. Toutes les
        questions sont originales ; aucune question d’examen propriétaire n’est reproduite.
      </p>

      <h2>Confidentialité</h2>
      <ul>
        <li>Aucun cookie, aucune mesure d’audience, aucun script tiers, aucune police externe.</li>
        <li>La progression est stockée dans IndexedDB ; les préférences d’affichage dans localStorage.</li>
        <li>Les données ne quittent votre appareil que si vous les exportez vous-même.</li>
      </ul>

      <h2>Sécurité de la plateforme</h2>
      <ul>
        <li>Politique de sécurité du contenu (CSP) stricte : scripts et styles servis uniquement depuis l’origine du site, aucun script inline.</li>
        <li>Aucun rendu de HTML brut : tout le contenu pédagogique est structuré et affiché sous forme de texte.</li>
        <li>Les fichiers importés sont validés champ par champ, avec taille plafonnée et protection contre la pollution de prototype.</li>
        <li>
          Les bonnes réponses ne sont pas présentes dans l’interface avant validation : elles résident dans des fichiers distincts,
          chargés uniquement au moment de la correction. Il s’agit d’une mesure pédagogique contre la consultation accidentelle,
          pas d’un secret : sur un site statique, un utilisateur déterminé peut toujours lire les fichiers publiés.
        </li>
      </ul>
    </div>
  );
}
