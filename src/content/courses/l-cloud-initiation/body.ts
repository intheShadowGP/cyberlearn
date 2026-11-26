import type { CourseBody } from '../../types';
import { questions } from './questions';

export const body: CourseBody = {
  courseId: 'l-cloud-initiation',
  lesson: {
    intro:
      'Messagerie, documents partagés, visioconférence, sauvegarde de photos : vous utilisez déjà le **cloud** tous les jours, souvent sans y penser. Les entreprises y placent aussi leurs sites, leurs applications et leurs données. Le cloud est pratique et solide, mais il ne protège pas automatiquement ce que vous y mettez. Ce cours explique en termes simples ce qu’est le cloud, qui est responsable de quoi, et comment éviter les erreurs qui provoquent la majorité des incidents.',
    sections: [
      {
        id: 'notions',
        title: 'Le cloud, c’est quoi ?',
        blocks: [
          { t: 'p', text: 'Le **cloud** (informatique en nuage) consiste à utiliser, via Internet, des ressources informatiques — puissance de calcul, stockage, logiciels — hébergées dans les centres de données d’un fournisseur et **facturées selon l’usage**. Au lieu d’acheter et d’entretenir ses propres serveurs, on les loue.' },
          {
            t: 'table',
            head: ['Notion', 'Ce que cela signifie', 'Exemple'],
            rows: [
              ['**Cloud public**', 'Infrastructure mutualisée entre de nombreux clients, isolés les uns des autres', 'Les grands fournisseurs du marché'],
              ['**Cloud privé**', 'Infrastructure dédiée à une seule organisation', 'Un cloud hébergé dans ses propres locaux'],
              ['**Cloud hybride**', 'Combinaison de ressources internes et de cloud public', 'Données sensibles en interne, site web dans le cloud'],
              ['**Région**', 'Zone géographique regroupant des centres de données', '« Paris », « Francfort »'],
              ['**Élasticité**', 'Ajuster les ressources en quelques minutes selon le besoin', 'Plus de serveurs pendant les soldes'],
            ],
          },
          { t: 'def', term: 'Cloud', text: 'Utilisation à distance de ressources informatiques louées à un fournisseur, accessibles par Internet, que l’on peut augmenter ou réduire selon le besoin et que l’on paie à l’usage.' },
          { t: 'def', term: 'Région', text: 'Zone géographique où un fournisseur regroupe des centres de données. Le choix de la région influence la rapidité d’accès, la continuité de service et le lieu où se trouvent les données, donc le droit applicable.' },
          { t: 'callout', kind: 'info', text: 'Le cloud n’est pas « le nuage » de quelqu’un d’autre sans règles : ce sont de vrais ordinateurs dans de vrais bâtiments. Savoir où sont les données et qui y accède reste essentiel.' },
        ],
      },
      {
        id: 'modeles',
        title: 'IaaS, PaaS, SaaS : qui est responsable de quoi ?',
        blocks: [
          { t: 'p', text: 'Le cloud se propose sous trois grandes formes, selon ce que le fournisseur gère à votre place. Plus le service est « prêt à l’emploi », moins vous administrez de choses, mais vous restez **toujours responsable de vos accès et de vos données**.' },
          {
            t: 'table',
            head: ['Modèle', 'Le fournisseur fournit', 'Vous gérez surtout', 'Exemple'],
            rows: [
              ['**IaaS** (infrastructure)', 'Machines virtuelles, réseau, stockage', 'Système, correctifs, pare-feu, applications, comptes, données', 'Louer un serveur virtuel'],
              ['**PaaS** (plateforme)', 'Environnement prêt pour exécuter du code', 'Votre application, vos comptes, vos données', 'Héberger un site sans gérer le système'],
              ['**SaaS** (logiciel)', 'Application complète', 'Vos comptes, droits, partages, données', 'Messagerie, bureautique en ligne'],
            ],
          },
          { t: 'def', term: 'Responsabilité partagée', text: 'Principe selon lequel le fournisseur sécurise le **socle** (bâtiments, serveurs, réseau de base) et le client sécurise ce qu’il configure : **accès, identités, données**. La frontière se déplace selon le modèle, mais ne disparaît jamais.' },
          {
            t: 'example',
            title: 'Qui doit faire quoi ?',
            blocks: [
              { t: 'p', text: 'Une entreprise loue un serveur virtuel (IaaS) et utilise une messagerie en ligne (SaaS). Pour le **serveur**, elle doit installer les correctifs, régler le pare-feu et gérer les comptes. Pour la **messagerie**, elle n’a pas de système à mettre à jour, mais elle doit activer l’authentification forte, limiter les droits et contrôler les partages. Dans les deux cas, la protection de ses données lui incombe.' },
            ],
          },
          { t: 'callout', kind: 'key', text: 'Le fournisseur protège l’infrastructure ; **vous protégez ce que vous y mettez et qui peut y accéder**.' },
        ],
      },
      {
        id: 'comptes',
        title: 'Comptes et authentification',
        blocks: [
          { t: 'p', text: 'Dans le cloud, tout passe par des **comptes** : celui qui obtient vos identifiants agit en votre nom, depuis n’importe où. Protéger les comptes est donc la première mesure de sécurité.' },
          {
            t: 'table',
            head: ['Bonne pratique', 'Pourquoi'],
            rows: [
              ['Protéger le **compte racine** et ne pas l’utiliser au quotidien', 'Il peut tout faire, y compris supprimer le compte entier'],
              ['Activer l’**authentification multifacteur (MFA)**', 'Un mot de passe volé ne suffit plus pour se connecter'],
              ['Créer des **comptes individuels**', 'On sait qui a fait quoi, on retire l’accès d’une personne seule'],
              ['Appliquer le **moindre privilège**', 'Un compte piraté ou une erreur ont moins de conséquences'],
              ['Limiter et faire tourner les **clés d’accès**', 'Une clé est un mot de passe de longue durée pour les programmes'],
            ],
          },
          { t: 'def', term: 'Authentification multifacteur (MFA)', text: 'Connexion qui demande, en plus du mot de passe, un second élément : code d’une application, clé de sécurité, notification sur le téléphone. Elle bloque la plupart des vols de compte.' },
          { t: 'def', term: 'Moindre privilège', text: 'Principe qui consiste à n’accorder à chaque compte que les droits nécessaires à sa tâche, et pour le temps nécessaire.' },
          { t: 'callout', kind: 'warn', text: 'Une clé d’accès publiée par erreur (dépôt de code public, capture d’écran) est exploitée en quelques minutes par des robots. Elle doit être désactivée immédiatement puis remplacée.' },
        ],
      },
      {
        id: 'stockage',
        title: 'Stockage et protection des données',
        blocks: [
          { t: 'p', text: 'Les fichiers sont souvent placés dans des **conteneurs de stockage** (« buckets », dossiers partagés). Leur confidentialité dépend surtout de leurs **réglages d’accès** : qui peut lire, écrire, partager.' },
          {
            t: 'table',
            head: ['Mesure', 'Ce qu’elle apporte', 'Point de vigilance'],
            rows: [
              ['**Droits d’accès limités**', 'Seules les personnes concernées accèdent aux fichiers', 'Vérifier régulièrement les partages'],
              ['**Liens de partage nominatifs et limités dans le temps**', 'On évite l’accès par n’importe qui', 'Un lien public est lisible par toute personne qui le possède'],
              ['**Chiffrement**', 'Protège contre le vol d’un support ou d’une copie', 'Ne protège pas contre un compte autorisé piraté'],
              ['**Sauvegardes**', 'Permettent de restaurer après perte ou rançongiciel', 'À tester et à garder hors de portée du compte principal'],
            ],
          },
          { t: 'def', term: 'Sauvegarde', text: 'Copie des données qui permet de les restaurer après une suppression, une panne ou une attaque. Une sauvegarde n’a de valeur que si on a **testé la restauration** et si elle ne peut pas être effacée avec le compte compromis.' },
          { t: 'callout', kind: 'tip', text: 'Posez-vous deux questions pour chaque dossier partagé : « qui peut le lire ? » et « puis-je le restaurer si quelqu’un le supprime ? ».' },
        ],
      },
      {
        id: 'erreurs',
        title: 'Les erreurs de configuration les plus courantes',
        blocks: [
          { t: 'p', text: 'La plupart des incidents cloud ne viennent pas d’une faille du fournisseur, mais d’une **erreur de configuration** du client. Elles sont simples et fréquentes.' },
          {
            t: 'table',
            head: ['Erreur', 'Conséquence', 'Remède'],
            rows: [
              ['Stockage ouvert à tout Internet', 'Fuite de données', 'Accès privé par défaut, contrôle automatique des réglages'],
              ['Port d’administration ouvert à tous', 'Attaques permanentes', 'Accès limité à des adresses connues ou via un accès sécurisé'],
              ['Clé ou mot de passe dans le code', 'Vol de l’accès', 'Coffre de secrets, désactivation et remplacement en cas de fuite'],
              ['Administrateur sans second facteur', 'Prise de contrôle du compte', 'MFA obligatoire'],
              ['Journaux désactivés', 'Incident invisible et impossible à reconstituer', 'Journalisation activée et conservée'],
              ['Ressources oubliées', 'Coûts, failles non corrigées', 'Inventaire et nettoyage réguliers'],
            ],
          },
          { t: 'list', items: ['**Vérifier** régulièrement les réglages, idéalement avec un outil qui compare votre configuration aux bonnes pratiques.', '**Automatiser** les corrections simples et les alertes sur les expositions publiques.', '**Documenter** qui est propriétaire de chaque ressource.'] },
          { t: 'callout', kind: 'key', text: 'Le plus souvent, un incident cloud est une **erreur évitable**, pas une attaque sophistiquée.' },
        ],
      },
      {
        id: 'reflexes',
        title: 'Bons réflexes et signalement',
        blocks: [
          { t: 'p', text: 'Face à un doute, la rapidité compte. Un incident signalé tôt se corrige souvent en quelques minutes ; un incident caché peut durer des semaines.' },
          { t: 'list', ordered: true, items: ['**Ne pas répondre** à un message qui demande un mot de passe, même s’il semble venir de votre fournisseur.', '**Désactiver ou retirer** ce qui est exposé : clé publiée, partage trop large.', '**Prévenir** le responsable ou l’équipe de sécurité, en décrivant ce qui s’est passé sans minimiser.', '**Ne pas supprimer** les traces (journaux, messages) : elles servent à comprendre.', '**Changer** les mots de passe concernés et vérifier l’activité récente du compte.'] },
          { t: 'def', term: 'Shadow IT', text: 'Usage de services en ligne non validés par l’organisation (stockage personnel, messagerie, outils gratuits) pour des données professionnelles. Ces données échappent aux règles et aux contrôles.' },
          { t: 'callout', kind: 'warn', text: 'Si des **données personnelles** de clients ou de collègues sont concernées, prévenez aussi la personne chargée de la protection des données : une déclaration à l’autorité peut être obligatoire dans un délai court.' },
        ],
      },
      {
        id: 'scenario-stockage-public',
        title: "Mise en situation : un stockage devenu public par erreur",
        blocks: [
          { t: 'p', text: "Une équipe crée un espace de stockage en ligne pour partager un rapport avec un client. Pour que le client puisse l’ouvrir sans compte, quelqu’un règle l’accès sur « public ». Trois semaines plus tard, le rapport, qui contient des données de facturation, apparaît dans un moteur de recherche." },
          {
            t: 'table',
            head: ["Question", "Réponse"],
            rows: [
              ["Qui est responsable ?", "Le **client du cloud** : le fournisseur sécurise l’infrastructure, mais la configuration d’accès est de la responsabilité de celui qui crée l’espace"],
              ["Qu’est-ce qui a rendu la fuite possible ?", "Un réglage de partage trop large, et l’absence de contrôle automatique qui l’aurait détecté"],
              ["Que faire en premier ?", "Retirer l’accès public, puis déterminer **qui a accédé aux données** grâce aux journaux d’accès, si la journalisation était activée"],
              ["Que faut-il se demander ensuite ?", "Les données concernées étaient-elles personnelles ? Si oui, la procédure de violation de données s’applique"],
            ],
          },
          { t: 'list', items: ["**Bloquer par défaut** l’accès public au niveau du compte, et n’autoriser que des exceptions justifiées.", "**Partager autrement** : lien temporaire à durée limitée, ou invitation nominative.", "**Activer la journalisation** des accès avant d’y stocker des données.", "**Alerter** automatiquement sur tout espace de stockage devenu public."] },
          { t: 'callout', kind: 'key', text: "L’erreur la plus courante n’est pas une attaque sophistiquée : c’est un réglage de partage mal compris. Le bon réflexe est de se demander, avant de partager, **« qui pourra accéder à ceci, sans compte, depuis n’importe où ? »**." },
        ],
      },
      {
        id: 'liste-demarrage',
        title: "Les cinq premiers réglages d’un compte cloud",
        blocks: [
          {
            t: 'table',
            head: ["Réglage", "Pourquoi"],
            rows: [
              ["Protéger le compte propriétaire (« root ») par MFA et ne plus l’utiliser au quotidien", "Ce compte a tous les droits et ne peut pas être restreint"],
              ["Créer des comptes nominatifs avec des droits limités", "Chacun fait ce dont il a besoin, et ses actions sont attribuables"],
              ["Activer la journalisation des actions d’administration", "Sans journal, impossible d’enquêter après un incident"],
              ["Bloquer l’accès public aux espaces de stockage par défaut", "Évite l’exposition accidentelle de données"],
              ["Définir une alerte de dépense", "Une dépense soudaine est souvent le premier signe d’un compte détourné (minage de cryptomonnaie)"],
            ],
          },
          { t: 'p', text: "Ces cinq réglages ne constituent pas une architecture sécurisée, mais ils éliminent les erreurs les plus fréquentes pour quelques minutes de travail." },
        ],
      },
    ],
    useCases: [
      'Reconnaître, dans l’organisation, quels services relèvent de l’IaaS, du PaaS ou du SaaS et ce qu’il faut y configurer.',
      'Vérifier les partages d’un dossier professionnel et activer l’authentification renforcée sur ses comptes.',
      'Réagir correctement après la publication d’une clé ou le partage d’un fichier par erreur.',
    ],
    commonMistakes: [
      "Régler un partage sur « public » pour éviter de gérer des comptes.",
      "Utiliser le compte propriétaire pour les tâches courantes.",
      'Penser que le fournisseur est responsable de la sécurité de tout ce qu’on met chez lui.',
      'Utiliser le compte racine ou un compte partagé pour le travail courant.',
      'Partager un fichier sensible par un lien accessible à tous.',
      'Placer des clés d’accès ou des mots de passe dans du code ou dans un message.',
      'Cacher une erreur au lieu de la signaler immédiatement.',
    ],
    bestPractices: [
      'Authentification multifacteur sur tous les comptes, surtout les comptes d’administration.',
      'Comptes individuels aux droits limités ; compte racine réservé aux rares opérations qui l’exigent.',
      'Stockage privé par défaut, partages nominatifs et limités dans le temps.',
      'Sauvegardes testées, conservées hors de portée du compte principal.',
      'Signalement rapide de tout doute, sans effacer les traces.',
    ],
    keyPoints: [
      "La configuration d’accès relève du client du cloud ; partager, c’est décider qui peut accéder sans compte.",
      'Le cloud, c’est des ressources louées à distance, facturées à l’usage.',
      'IaaS, PaaS, SaaS : plus le service est complet, moins vous administrez, mais vous gardez la responsabilité de vos accès et de vos données.',
      'La plupart des incidents cloud viennent d’erreurs de configuration du client.',
      'MFA, moindre privilège, stockage privé et sauvegardes testées couvrent l’essentiel.',
    ],
  },
  practice: [
    {
      id: 'classer-services',
      kind: 'analysis',
      title: 'Classer des services et répartir les responsabilités',
      context: [
        { t: 'p', text: 'Une petite entreprise utilise les services suivants :' },
        {
          t: 'table',
          head: ['#', 'Service'],
          rows: [
            ['1', 'Un serveur virtuel loué, sur lequel un technicien installe un logiciel de gestion'],
            ['2', 'Une messagerie et des documents partagés accessibles dans un navigateur'],
            ['3', 'Une plateforme sur laquelle un développeur dépose le code de son site, sans gérer de serveur'],
          ],
        },
      ],
      steps: ['Indiquer pour chaque service s’il s’agit d’IaaS, de PaaS ou de SaaS.', 'Lister ce que l’entreprise doit sécuriser dans chaque cas.', 'Citer une responsabilité qui reste à l’entreprise dans les trois cas.'],
    },
    {
      id: 'verifier-partage',
      kind: 'case',
      title: 'Cas pratique : vérifier le partage d’un dossier',
      context: [{ t: 'p', text: 'Un dossier « Contrats clients » est partagé par un lien accessible à toute personne qui le possède, sans date de fin. Trois anciens collaborateurs y ont toujours accès et le dossier est stocké dans le compte personnel d’un employé.' }],
      steps: ['Lister les problèmes de sécurité.', 'Proposer la configuration cible du partage.', 'Indiquer comment vérifier régulièrement que le partage reste correct.'],
    },
    {
      id: 'cle-publiee',
      kind: 'case',
      title: 'Cas pratique : une clé d’accès publiée par erreur',
      context: [{ t: 'p', text: 'Un développeur remarque qu’il a publié, dans un dépôt de code public, un fichier de configuration contenant la clé d’accès du compte cloud de l’entreprise. Il l’a retiré du dépôt dix minutes plus tard.' }],
      steps: ['Expliquer pourquoi retirer le fichier ne suffit pas.', 'Lister les actions à mener, dans l’ordre.', 'Proposer des mesures pour éviter que cela se reproduise.'],
    },
  ],
  questions,
  resources: [
    { title: 'Sécuriser l’usage du cloud : guides et référentiel SecNumCloud', source: 'ANSSI', url: 'https://cyber.gouv.fr/secnumcloud-pour-les-fournisseurs-de-services-cloud' },
    { title: 'Cloud Security Best Practices (responsabilité partagée)', source: 'Cloud Security Alliance', url: 'https://cloudsecurityalliance.org/' },
    { title: 'Cybermalveillance.gouv.fr — assistance et prévention', source: 'Cybermalveillance.gouv.fr', url: 'https://www.cybermalveillance.gouv.fr/' },
  ],
};
