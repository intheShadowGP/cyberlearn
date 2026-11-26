import type { CourseBody } from '../../types';
import { questions } from './questions';

export const body: CourseBody = {
  courseId: 'r-preparation-fondamentaux',
  lesson: {
    intro:
      'Une certification se prépare comme un projet : on commence par lire précisément ce que l’examen évalue, on mesure son niveau, on construit un plan, on s’entraîne dans des conditions proches de l’épreuve et on respecte les règles de l’organisme. CyberAcadémie ne délivre aucune certification officielle : elle aide à acquérir les compétences que ces examens évaluent. Ce cours donne la méthode pour les certifications fondamentales et défensives.',
    sections: [
      {
        id: 'domaines',
        title: 'Lire un plan d’examen',
        blocks: [
          { t: 'p', text: 'Chaque organisme publie pour chaque examen un **plan** (ou guide des objectifs) : c’est le document de référence, bien plus fiable que les forums ou les résumés de tiers.' },
          {
            t: 'table',
            head: ['Élément', 'Ce qu’il indique', 'Usage dans la préparation'],
            rows: [
              ['**Domaines**', 'Les grands thèmes évalués', 'Structurer le plan d’étude'],
              ['**Pondération**', 'Le poids relatif de chaque domaine', 'Répartir le temps de révision'],
              ['**Objectifs**', 'Les compétences et notions listées', 'Cocher ce qui est acquis'],
              ['**Version et date**', 'L’édition du plan en vigueur', 'Éviter de réviser un programme dépassé'],
            ],
          },
          { t: 'def', term: 'Plan d’examen', text: 'Document officiel d’un organisme certificateur qui liste les domaines, leur pondération et les objectifs évalués pour un examen donné. Il évolue : on vérifie toujours la version en vigueur.' },
          { t: 'def', term: 'Pondération', text: 'Poids relatif d’un domaine dans l’examen (par exemple une part du nombre de questions). Elle guide la répartition du temps de révision, sans dispenser de couvrir tous les domaines.' },
          { t: 'list', items: ['**Télécharger** le plan officiel de la version visée.', '**Lister** les objectifs et s’auto-évaluer sur chacun.', '**Prioriser** selon pondération et niveau actuel.', '**Vérifier** à nouveau la version avant de réserver l’examen.'] },
          { t: 'callout', kind: 'warn', text: 'Les plans changent régulièrement : une préparation fondée sur un ancien programme fait perdre du temps. Seul le site de l’organisme fait foi.' },
        ],
      },
      {
        id: 'correspondance',
        title: 'Relier les domaines aux modules de la plateforme',
        blocks: [
          { t: 'p', text: 'Les domaines d’examen recoupent les modules de CyberAcadémie. Cette correspondance sert à retrouver où réviser chaque notion et à repérer ce qui doit être complété ailleurs.' },
          {
            t: 'table',
            head: ['Thème d’examen (exemples)', 'Modules associés', 'À compléter si besoin'],
            rows: [
              ['**Concepts généraux, menaces et vulnérabilités**', 'A, F, K', 'Guide officiel, terminologie de l’organisme'],
              ['**Réseau et architecture**', 'B, C, D, L', 'Laboratoires de configuration'],
              ['**Opérations de sécurité et réponse aux incidents**', 'I, J', 'Exercices de détection et de réponse'],
              ['**Cryptographie et identité**', 'E, O', 'Fiches de synthèse, calculs de base'],
              ['**Gouvernance, risque et conformité**', 'M', 'Textes de référence cités par l’examen'],
            ],
          },
          { t: 'def', term: 'Lacune de couverture', text: 'Notion présente dans le plan d’examen mais absente ou peu traitée dans les supports d’étude utilisés. On la repère en comparant les objectifs aux cours et on la comble par une ressource officielle ou un laboratoire.' },
          { t: 'list', items: ['**Cartographier** chaque objectif vers un module ou une ressource.', '**Repérer** les objectifs sans support et les traiter à part.', '**Pratiquer** avec les laboratoires pour les gestes techniques.'] },
          { t: 'callout', kind: 'key', text: 'La plateforme prépare aux compétences évaluées ; elle ne remplace pas le guide officiel et ne délivre aucune certification.' },
        ],
      },
      {
        id: 'methode',
        title: 'Méthode d’étude : diagnostic, pratique et répétition espacée',
        blocks: [
          { t: 'p', text: 'Un bon plan d’étude s’appuie sur le niveau réel plutôt que sur l’impression. On mesure, on cible, on pratique, puis on revient régulièrement sur ce qui s’oublie.' },
          {
            t: 'table',
            head: ['Étape', 'Action', 'Résultat'],
            rows: [
              ['**Diagnostic**', 'Questions d’entraînement par domaine, sans préparation', 'Carte des points forts et faibles'],
              ['**Planification**', 'Séances courtes et régulières, domaines faibles en priorité', 'Calendrier réaliste'],
              ['**Pratique**', 'Laboratoires, mises en situation, rédaction', 'Compétences durables'],
              ['**Répétition espacée**', 'Revoir les notions à intervalles croissants', 'Mémorisation à long terme'],
              ['**Examens blancs**', 'Épreuve complète en conditions réelles', 'Gestion du temps et du stress mesurée'],
            ],
          },
          { t: 'def', term: 'Répétition espacée', text: 'Technique qui consiste à revoir une notion à intervalles de plus en plus espacés, juste avant de l’oublier. Elle fixe la mémoire plus durablement qu’une lecture répétée en une fois.' },
          {
            t: 'example',
            title: 'Un plan sur douze semaines',
            blocks: [
              { t: 'p', text: 'Semaine 1 : lecture du plan et diagnostic. Semaines 2 à 9 : un domaine par semaine, en commençant par les plus pondérés et les plus faibles, avec laboratoires et fiches. Chaque semaine : dix minutes de révision espacée des domaines déjà vus. Semaines 10 et 11 : examens blancs chronométrés et analyse des erreurs. Semaine 12 : révision ciblée et repos avant l’épreuve.' },
            ],
          },
          { t: 'list', items: ['**Tenir un journal des erreurs** : notion, cause, correction.', '**Alterner** lecture, pratique et questions.', '**Dormir et se reposer** : la mémorisation en dépend.'] },
          { t: 'callout', kind: 'tip', text: 'Les erreurs sont la meilleure source de progrès : une question ratée, comprise et revue deux fois, vaut dix questions réussies par hasard.' },
        ],
      },
      {
        id: 'examen',
        title: 'Technique d’examen et gestion du temps',
        blocks: [
          { t: 'p', text: 'Savoir ne suffit pas : il faut aussi lire correctement les questions et gérer le temps. Les formats varient selon les examens.' },
          {
            t: 'table',
            head: ['Format', 'Principe', 'Conseil'],
            rows: [
              ['**QCM à réponse unique**', 'Une seule bonne réponse', 'Éliminer les mauvaises options d’abord'],
              ['**Réponses multiples**', 'Plusieurs bonnes réponses', 'Évaluer chaque option indépendamment'],
              ['**Mise en situation**', 'Scénario et choix de la meilleure action', 'Repérer les mots « le plus », « d’abord », « meilleur »'],
              ['**Tâches pratiques simulées (performance-based)**', 'Configurer ou analyser dans un environnement simulé', 'S’entraîner sur des laboratoires, gérer son temps'],
            ],
          },
          { t: 'def', term: 'Question de mise en situation', text: 'Question qui décrit un contexte (un incident, une architecture) et demande de choisir la meilleure action ou la prochaine étape. Plusieurs options sont plausibles : il faut raisonner en priorités.' },
          { t: 'list', items: ['**Lire l’énoncé en entier** avant les propositions.', '**Éliminer** d’abord les réponses clairement fausses.', '**Marquer et revenir** sur les questions difficiles plutôt que s’y enliser.', '**Garder du temps** pour une relecture finale.'] },
          { t: 'callout', kind: 'warn', text: 'Ne restez pas bloqué sur une question : le temps perdu sur une seule peut coûter plusieurs questions faciles.' },
        ],
      },
      {
        id: 'integrite',
        title: 'Intégrité et maintien de la certification',
        blocks: [
          { t: 'p', text: 'La valeur d’une certification repose sur la confiance que lui accordent les employeurs. Les organismes protègent leurs examens et sanctionnent la fraude.' },
          {
            t: 'table',
            head: ['Pratique', 'Statut', 'Conséquence possible'],
            rows: [
              ['Étudier avec le plan officiel et des supports légitimes', '**Autorisée**', 'Compétences réelles'],
              ['Utiliser des questions réelles diffusées illégalement (dumps)', '**Interdite**', 'Annulation du résultat, interdiction de repasser'],
              ['Divulguer le contenu de l’examen après l’avoir passé', '**Interdite**', 'Sanctions de l’organisme, retrait du titre'],
              ['Déclarer honnêtement son expérience', '**Attendue**', 'Titre valide et reconnu'],
            ],
          },
          { t: 'def', term: 'Accord de confidentialité de l’examen', text: 'Engagement accepté avant l’épreuve : le candidat ne divulgue ni les questions ni les réponses. Le violer expose à l’annulation de la certification.' },
          { t: 'list', items: ['**Refuser** les questions volées, même proposées par un collègue.', '**Comprendre** plutôt que mémoriser des réponses.', '**Maintenir** son titre par la formation continue.', '**Respecter** le code de conduite de l’organisme.'] },
          { t: 'callout', kind: 'key', text: 'Une certification obtenue par mémorisation de questions fuitées ne prouve rien : elle fait perdre la confiance des employeurs et peut mettre fin à une carrière.' },
        ],
      },
      {
        id: 'carnet-erreurs',
        title: "Tenir un carnet d’erreurs",
        blocks: [
          { t: 'p', text: "Le carnet d’erreurs est l’outil le plus rentable d’une préparation. Pour chaque question manquée ou devinée, on note quatre éléments : l’énoncé en une ligne, la bonne réponse, **la raison de l’erreur** et la règle à retenir. Le but n’est pas de recopier la leçon, mais de capturer ce qui vous a piégé personnellement. Relu régulièrement, ce carnet remplace avantageusement des heures de relecture passive." },
          {
            t: 'table',
            caption: "Un exemple de ligne de carnet",
            head: ["Question", "Bonne réponse", "Cause de l’erreur", "Règle à retenir"],
            rows: [
              ["Quelle couche gère les adresses MAC ?", "Liaison (couche 2)", "Confusion avec la couche réseau", "MAC = liaison, IP = réseau : « le MAC reste sur le lien local »"],
              ["Que fait un hachage ?", "Produit une empreinte à sens unique", "J’ai confondu avec le chiffrement", "Hachage : pas de clé, pas de retour ; chiffrement : clé, réversible"],
            ],
          },
          { t: 'callout', kind: 'key', text: "Relisez le carnet **à intervalles croissants** (le lendemain, une semaine, un mois). Une erreur qui revient trois fois mérite une fiche de synthèse à part." },
        ],
      },
      {
        id: 'lire-enonce',
        title: "Lire un énoncé de QCM : les pièges classiques",
        blocks: [
          { t: 'p', text: "Beaucoup d’erreurs viennent de la lecture, pas de la connaissance. Une méthode simple consiste à lire l’énoncé complet, à formuler mentalement la réponse **avant** de regarder les options, puis à éliminer les options fausses plutôt que de chercher la bonne. Cette habitude réduit l’influence des distracteurs bien rédigés." },
          { t: 'list', items: ["**Les mots qui inversent le sens** : « sauf », « n’est pas », « le moins », « avant de ». Soulignez-les.", "**Les absolus** : « toujours », « jamais », « seulement ». Une option qui en contient une est souvent fausse, car la sécurité est rarement absolue.", "**Les options qui se ressemblent** : deux options presque identiques signalent souvent que la bonne réponse est l’une des deux ; cherchez la différence qui compte.", "**La question réellement posée** : « quelle est la **première** action ? » n’attend pas la même réponse que « quelle est la **meilleure** mesure à long terme ? ».", "**Les options vraies mais hors sujet** : une affirmation exacte peut ne pas répondre à la question posée."] },
          { t: 'callout', kind: 'warn', text: "Ne changez de réponse que si vous avez une **raison précise** (un mot relu, un fait rappelé), pas par simple doute : les premières intuitions sont souvent bonnes quand les révisions ont été sérieuses." },
        ],
      },
      {
        id: 'fiche-synthese',
        title: "Faire une fiche de synthèse utile",
        blocks: [
          { t: 'p', text: "Une fiche de synthèse n’est pas un résumé recopié : c’est un outil de rappel actif. Elle tient sur une page, se construit **de mémoire** puis se corrige avec la leçon, et ne contient que ce qui reste difficile à retenir. Plus la fiche est compacte, plus elle oblige à hiérarchiser, ce qui est déjà une forme d’apprentissage." },
          { t: 'list', items: ["**Un titre et une question** en tête : « à quoi sert ce mécanisme, et contre quelle menace ? ».", "**Un schéma ou un tableau** plutôt que des phrases : les comparaisons (par exemple deux protocoles) se retiennent mieux en tableau.", "**Trois à cinq points clés** que l’on peut énoncer sans regarder.", "**Un exemple concret** : une situation réelle ou une commande, pour ancrer la notion.", "**Un piège classique** : l’erreur la plus fréquente sur ce sujet, tirée de votre carnet d’erreurs."] },
          { t: 'callout', kind: 'tip', text: "Testez la fiche : cachez-la et reformulez-la à voix haute. Ce que vous ne savez pas redire est ce qu’il faut revoir." },
        ],
      },
    ],
    useCases: [
      'Transformer un plan d’examen en plan d’étude personnel avec priorités.',
      'Repérer les objectifs d’un examen qui ne sont couverts par aucun support.',
      'Organiser des examens blancs chronométrés et exploiter un journal des erreurs.',
      'Réagir à une proposition de « fuite » de questions d’examen.',
    ],
    commonMistakes: [
      'Réviser un programme dépassé sans vérifier la version du plan.',
      'Étudier au hasard sans diagnostic ni priorités.',
      'Ne lire que du texte, sans pratique ni répétition espacée.',
      'Rester bloqué sur une question au détriment du temps total.',
      'Utiliser des questions réelles fuitées (dumps).',
    ],
    bestPractices: [
      'Partir du plan officiel à jour.',
      'Diagnostiquer, prioriser selon pondération et niveau.',
      'Alterner pratique, lecture et répétition espacée.',
      'S’entraîner en conditions réelles et analyser les erreurs.',
      'Respecter les règles d’intégrité de l’organisme.',
    ],
    keyPoints: [
      'Le plan officiel à jour est la référence de la préparation.',
      'La correspondance avec les modules révèle les lacunes de couverture.',
      'Diagnostic, pratique et répétition espacée structurent l’étude.',
      'Lire l’énoncé, éliminer, marquer et gérer son temps.',
      'Les questions fuitées sont interdites et sans valeur pédagogique.',
    ],
  },
  practice: [
    {
      id: 'plan-etude',
      kind: 'guided',
      labId: 'revision-plan-lab',
      title: 'Construire un plan d’étude à partir d’un diagnostic',
      context: [
        { t: 'p', text: 'Vous préparez une certification fondamentale dans douze semaines, à raison de cinq heures par semaine. Le plan officiel compte cinq domaines. Le diagnostic donne vos résultats par domaine : A (30 %) 70 %, B (20 %) 40 %, C (20 %) 55 %, D (15 %) 80 %, E (15 %) 30 %.' },
      ],
      steps: ['Classez les domaines par priorité en croisant poids et niveau.', 'Répartissez les douze semaines (étude, pratique, examens blancs).', 'Prévoyez la répétition espacée et un indicateur de progression.'],
    },
    {
      id: 'lecture-plan',
      kind: 'analysis',
      title: 'Analyse : repérer les lacunes de couverture',
      context: [
        {
          t: 'table',
          head: ['Objectif d’examen', 'Support disponible'],
          rows: [
            ['Expliquer les modèles de contrôle d’accès', 'Cours du module O'],
            ['Comparer les protocoles de routage courants', 'Cours du module B'],
            ['Appliquer le cadre de gestion des risques cité par l’examen', 'Aucun support identifié'],
            ['Interpréter la sortie d’un outil de capture de paquets', 'Laboratoire du module B'],
          ],
        },
      ],
      steps: ['Repérez les objectifs non couverts.', 'Proposez une ressource ou une action pour chacun.', 'Indiquez comment vérifier que la lacune est comblée.'],
    },
    {
      id: 'dilemme-fuite',
      kind: 'case',
      title: 'Cas : un collègue propose des questions réelles',
      context: [
        { t: 'p', text: 'À une semaine de l’examen, un collègue vous propose un document contenant, dit-il, « les vraies questions de la dernière session », avec les réponses. Vous êtes en retard dans votre préparation.' },
      ],
      steps: ['Indiquez votre décision et justifiez-la.', 'Décrivez les risques pour vous et pour votre collègue.', 'Proposez un plan alternatif pour la dernière semaine.'],
    },
  ],
  questions,
  resources: [
    { title: 'Plans d’examen et conditions de certification', source: 'ISC2', url: 'https://www.isc2.org/certifications' },
    { title: 'Objectifs d’examen des certifications', source: 'CompTIA', url: 'https://www.comptia.org/certifications' },
    { title: 'Certifications et parcours d’apprentissage', source: 'Cisco', url: 'https://www.cisco.com/c/en/us/training-events/training-certifications/certifications.html' },
  ],
};
