import type { CourseBody } from '../../types';
import { questions } from './questions';

export const body: CourseBody = {
  courseId: 'r-preparation-pratique',
  lesson: {
    intro:
      'Les certifications à épreuve pratique ne testent pas ce que l’on sait réciter, mais ce que l’on sait faire, en temps limité, avec méthode et en rendant compte. Ce cours donne la démarche : un cadre de test rigoureux, des notes exploitables, une gestion du temps réaliste, un rapport utile, un entraînement légal et le respect de l’éthique et des règles d’examen. Il ne contient aucune technique d’attaque : il s’agit de la méthode de travail et de la posture professionnelle.',
    sections: [
      {
        id: 'methodo',
        title: 'Méthodologie d’un test encadré',
        blocks: [
          { t: 'p', text: 'Un test d’intrusion professionnel suit un déroulé précis. Il commence par un cadre et finit par un rapport : l’exploitation n’en est qu’une étape, menée avec retenue.' },
          {
            t: 'table',
            head: ['Phase', 'Objectif', 'Trace à conserver'],
            rows: [
              ['**Cadrage**', 'Périmètre, règles, autorisation, calendrier', 'Autorisation écrite et règles d’engagement'],
              ['**Énumération**', 'Connaître la surface : machines, services, versions', 'Liste des cibles et des services'],
              ['**Analyse**', 'Repérer les faiblesses plausibles', 'Hypothèses classées par vraisemblance'],
              ['**Validation maîtrisée**', 'Confirmer une faiblesse avec la preuve minimale', 'Preuve minimale horodatée'],
              ['**Compte rendu**', 'Restituer constats et recommandations', 'Rapport reproductible'],
            ],
          },
          { t: 'def', term: 'Règles d’engagement', text: 'Document qui fixe le périmètre, les méthodes autorisées et interdites, le calendrier et les contacts d’un test. Rien n’est entrepris en dehors de ce cadre.' },
          { t: 'def', term: 'Preuve minimale', text: 'Le plus petit élément qui démontre une faiblesse sans causer de dommage ni exposer de données : une capture, un extrait de sortie, une version identifiée. On ne va pas plus loin que nécessaire.' },
          { t: 'list', items: ['**Énumérer avant d’agir** : une surface bien connue évite des essais au hasard.', '**Valider sans nuire** : éviter toute action destructrice ou perturbante.', '**S’arrêter** à la limite du périmètre et en informer le commanditaire.', '**Tout consigner** pour pouvoir reproduire.'] },
          { t: 'callout', kind: 'key', text: 'La qualité d’un test se juge à la rigueur du cadre, à la fiabilité des constats et à l’utilité du rapport, pas au spectaculaire de l’exploitation.' },
        ],
      },
      {
        id: 'notes',
        title: 'Notes, temps et priorités sur une épreuve longue',
        blocks: [
          { t: 'p', text: 'Sur une épreuve de plusieurs heures, la fatigue et la dispersion coûtent plus cher que les lacunes techniques. Des notes soignées et un plan de temps protègent contre les deux.' },
          {
            t: 'table',
            head: ['Pratique', 'Pourquoi', 'Comment'],
            rows: [
              ['**Notes structurées**', 'Retrouver et reproduire ses actions', 'Commande, résultat, horodatage, capture'],
              ['**Timeboxing**', 'Ne pas s’enliser sur une piste', 'Limite de temps fixée avant de commencer'],
              ['**Priorisation**', 'Traiter d’abord le plus rentable', 'Pistes classées par vraisemblance et coût'],
              ['**Pauses et sommeil**', 'Garder un jugement clair', 'Pauses planifiées, repos réel'],
            ],
          },
          { t: 'def', term: 'Timeboxing', text: 'Technique qui consiste à fixer à l’avance le temps maximum consacré à une tâche ou une piste, puis à passer à autre chose si elle n’a pas abouti, en notant ce qui reste à essayer.' },
          {
            t: 'example',
            title: 'Organiser une épreuve de vingt-quatre heures',
            blocks: [
              { t: 'p', text: 'Première heure : lecture des consignes, périmètre et règles, mise en place des notes et du plan. Ensuite, énumération de toutes les cibles avant d’en approfondir une. Chaque piste reçoit une limite d’une heure ; au-delà, on note l’état et on passe à la suivante. Des pauses régulières et une vraie nuit de repos. Les dernières heures sont réservées à la vérification des preuves et à la rédaction du rapport.' },
            ],
          },
          { t: 'list', items: ['**Noter** même les échecs : ils évitent de refaire les mêmes essais.', '**Limiter** le temps par piste.', '**Réserver** du temps pour le rapport.'] },
          { t: 'callout', kind: 'tip', text: 'Prévoyez le rapport dès le début : la meilleure preuve est celle que l’on a capturée au moment où elle est apparue.' },
        ],
      },
      {
        id: 'rapport',
        title: 'Rédiger un rapport de test exploitable',
        blocks: [
          { t: 'p', text: 'Le rapport est le livrable : il doit être compris par la direction et exploité par l’équipe technique.' },
          {
            t: 'table',
            head: ['Partie', 'Contenu', 'Lecteur'],
            rows: [
              ['**Résumé exécutif**', 'Constats essentiels et impact, sans jargon', 'Direction'],
              ['**Périmètre et méthode**', 'Ce qui a été testé, comment, quand', 'Tous'],
              ['**Constats**', 'Classés par gravité, avec preuve et étapes de reproduction', 'Équipe technique'],
              ['**Recommandations**', 'Actions de correction concrètes et priorisées', 'Équipe technique et direction'],
            ],
          },
          { t: 'def', term: 'Constat', text: 'Faiblesse démontrée, décrite par son contexte, sa preuve, son impact et sa gravité. Il doit être reproductible : un lecteur compétent peut le vérifier en suivant les étapes.' },
          { t: 'def', term: 'Résumé exécutif', text: 'Partie courte et non technique qui présente les constats les plus importants, leur impact sur l’organisation et les décisions à prendre.' },
          { t: 'list', items: ['**Classer** les constats par gravité (par exemple avec le CVSS) et par contexte.', '**Décrire** chaque constat de façon reproductible.', '**Recommander** une correction précise, pas seulement « mettre à jour ».', '**Protéger** les données du rapport : pas de mot de passe en clair ni de données personnelles inutiles.'] },
          { t: 'callout', kind: 'warn', text: 'Un rapport illisible ou incomplet annule la valeur d’un bon travail technique : à l’examen comme en mission, on évalue la restitution.' },
        ],
      },
      {
        id: 'labo',
        title: 'S’entraîner légalement en laboratoire isolé',
        blocks: [
          { t: 'p', text: 'On progresse en pratiquant, mais uniquement sur des systèmes que l’on a le droit de tester : un laboratoire personnel ou une plateforme d’entraînement qui l’autorise.' },
          {
            t: 'table',
            head: ['Moyen', 'Intérêt', 'Précaution'],
            rows: [
              ['**Laboratoire personnel**', 'Contrôle total, reproductible', 'Réseau isolé du reste de l’environnement'],
              ['**Plateformes d’entraînement autorisées**', 'Scénarios variés et progressifs', 'Respecter leurs règles d’usage'],
              ['**CTF**', 'Défis chronométrés, entraînement en équipe', 'Rester dans les cibles prévues'],
              ['**Corrigés (write-ups)**', 'Apprendre d’autres approches', 'Les lire après avoir essayé'],
            ],
          },
          { t: 'def', term: 'Laboratoire isolé', text: 'Environnement d’entraînement (machines virtuelles) séparé du réseau réel, où l’on peut manipuler et casser sans conséquence. Les instantanés permettent de revenir à un état connu.' },
          { t: 'list', items: ['**Se fixer** des objectifs précis par séance.', '**Documenter** chaque défi réussi comme pour un rapport.', '**Refaire seul** ce que l’on a compris, sans aide.', '**Alterner** niveaux faciles et difficiles.'] },
          { t: 'callout', kind: 'legal', text: 'Tenter une intrusion sur un système sans autorisation est une infraction, même « pour s’entraîner ». Le laboratoire existe précisément pour éviter cela.' },
        ],
      },
      {
        id: 'ethique',
        title: 'Éthique, droit et règles d’examen',
        blocks: [
          { t: 'p', text: 'La compétence technique ne vaut que si elle s’exerce dans un cadre. L’éthique du testeur et les règles d’examen sont les deux faces de la même exigence.' },
          {
            t: 'table',
            head: ['Règle', 'Contenu', 'Si l’on y manque'],
            rows: [
              ['**Autorisation écrite**', 'Accord du propriétaire avant tout test', 'Poursuites possibles'],
              ['**Périmètre**', 'Ne tester que ce qui est autorisé', 'Rupture de contrat, responsabilité'],
              ['**Données rencontrées**', 'Ne pas copier ni exposer de données de tiers', 'Atteinte à la vie privée'],
              ['**Règles d’examen**', 'Outils, assistance et confidentialité fixés par l’organisme', 'Échec, annulation, sanctions'],
            ],
          },
          { t: 'def', term: 'Autorisation écrite', text: 'Accord formel du propriétaire du système, précisant le périmètre, la période et les méthodes. Il distingue un test professionnel d’une intrusion illégale.' },
          { t: 'list', items: ['**Rester** dans le périmètre autorisé.', '**Protéger** toute donnée rencontrée.', '**Signaler** au commanditaire une faille découverte hors périmètre.', '**Respecter** les restrictions d’outils et d’assistance de l’épreuve.', '**Ne pas divulguer** le contenu de l’examen après coup.'] },
          { t: 'callout', kind: 'key', text: 'La confiance est la monnaie du métier : un testeur qui franchit une seule fois la limite perd la confiance de ses clients et celle de l’organisme.' },
        ],
      },
      {
        id: 'trame-premieres-heures',
        title: "Une trame de travail pour les premières heures",
        blocks: [
          { t: 'p', text: "Sur une épreuve pratique longue, les premières heures décident du reste. Sans trame, on se disperse sur la première piste rencontrée. Une trame simple impose de dresser l’inventaire avant d’agir : ce que l’on a, ce que l’on sait et ce qui reste à découvrir. Elle ne remplace pas la réflexion, elle évite l’improvisation désordonnée." },
          {
            t: 'table',
            caption: "Trame de départ (à adapter à l’épreuve et à son règlement)",
            head: ["Étape", "Question à se poser", "Trace à conserver"],
            rows: [
              ["Lire le règlement et le périmètre", "Qu’ai-je le droit de tester, avec quels outils ?", "Liste des cibles et des interdits recopiée dans les notes"],
              ["Inventorier", "Quels hôtes, services et comptes sont accessibles ?", "Tableau hôtes / services / informations obtenues"],
              ["Hiérarchiser", "Quelle piste est la plus probable et la moins coûteuse ?", "Liste ordonnée avec un temps maximal par piste"],
              ["Exploiter et vérifier", "Le résultat est-il reproductible ?", "Commandes exactes, résultats, captures horodatées"],
              ["Prendre du recul", "Ai-je épuisé les pistes simples avant les complexes ?", "Note « bloqué depuis X minutes », changement de piste"],
            ],
          },
          { t: 'callout', kind: 'key', text: "Fixez une **limite de temps par piste** (par exemple quarante-cinq minutes). Au-delà, on consigne l’état, on passe à autre chose et on revient si le temps le permet : s’obstiner sur une impasse est l’erreur la plus fréquente." },
        ],
      },
      {
        id: 'debriefer-epreuve',
        title: "Débriefer une épreuve : ce qu’il faut consigner",
        blocks: [
          { t: 'p', text: "Que l’on ait réussi ou non, le débriefing transforme une épreuve en progrès. Il doit être écrit à chaud, dans les jours qui suivent, tant que les détails sont frais. On y consigne les faits, pas des jugements : ce qui a été tenté, dans quel ordre, avec quel résultat, et le temps passé. L’objectif est de repérer des **schémas** (toujours la même difficulté, toujours le même retard) plutôt qu’un événement isolé." },
          { t: 'list', items: ["**Chronologie** : quelles pistes, dans quel ordre, combien de temps chacune ; où le temps a-t-il été perdu ?", "**Décisions** : à quel moment a-t-on changé de piste, et était-ce trop tôt ou trop tard ?", "**Lacunes techniques** : quels outils ou notions ont manqué ? Chacune devient un exercice de laboratoire ciblé.", "**Notes et preuves** : les notes étaient-elles assez précises pour rédiger le rapport sans refaire les manipulations ?", "**Ce qui a bien fonctionné** : à conserver tel quel pour la prochaine épreuve."] },
          { t: 'callout', kind: 'tip', text: "Respectez les règles de confidentialité de l’épreuve : le débriefing personnel porte sur votre **méthode**, pas sur la diffusion du contenu des sujets, qui est en général interdite par le règlement." },
        ],
      },
      {
        id: 'outils-notes',
        title: "Préparer son environnement de notes et d’outils",
        blocks: [
          { t: 'p', text: "Sur une épreuve longue, le temps perdu à chercher une commande ou à retrouver une information se paie cher. Il faut donc préparer en amont un environnement stable, que l’on connaît par cœur, en respectant les outils et la documentation autorisés par le règlement. Rien ne doit être découvert le jour de l’épreuve." },
          { t: 'list', items: ["**Un modèle de notes** prêt à remplir : sections par hôte, tableau des identifiants trouvés, liste des commandes qui ont fonctionné.", "**Un aide-mémoire de commandes** classé par tâche (énumération, transfert de fichiers, analyse), construit pendant l’entraînement en laboratoire.", "**Des captures d’écran horodatées**, prises au fil de l’eau, avec un nom de fichier explicite.", "**Une sauvegarde** régulière des notes, pour qu’un incident technique ne détruise pas des heures de travail.", "**Un essai à blanc** de tout l’environnement la veille, sur un laboratoire d’entraînement."] },
          { t: 'callout', kind: 'warn', text: "Vérifiez dans le règlement ce qui est **autorisé** (outils, notes, documentation). Un outil interdit utilisé par habitude peut entraîner l’invalidation de l’épreuve." },
        ],
      },
    ],
    useCases: [
      'Planifier la préparation d’une épreuve pratique de plusieurs heures.',
      'Tenir des notes qui servent directement à la rédaction du rapport.',
      'Rédiger un rapport de test avec résumé exécutif et recommandations.',
      'Construire un laboratoire d’entraînement isolé et progressif.',
    ],
    commonMistakes: [
      'Se lancer dans l’exploitation sans avoir énuméré la surface.',
      'S’enliser sur une piste sans limite de temps.',
      'Ne pas noter les échecs et refaire les mêmes essais.',
      'Réserver trop peu de temps au rapport.',
      'S’entraîner sur des systèmes que l’on n’a pas le droit de tester.',
    ],
    bestPractices: [
      'Cadrage écrit avant toute action.',
      'Énumérer, prioriser, valider avec la preuve minimale.',
      'Notes structurées, timeboxing, pauses planifiées.',
      'Rapport reproductible, constats classés, recommandations concrètes.',
      'Laboratoire isolé et respect strict des règles d’examen.',
    ],
    keyPoints: [
      'Le cadre et la preuve minimale distinguent un test professionnel d’une intrusion.',
      'Des notes soignées et un plan de temps protègent contre la fatigue et la dispersion.',
      'Le rapport est le livrable : clair, classé et reproductible.',
      'On s’entraîne uniquement sur des systèmes autorisés, en laboratoire isolé.',
      'Éthique et règles d’examen sont une même exigence de confiance.',
    ],
  },
  practice: [
    {
      id: 'plan-epreuve',
      kind: 'guided',
      title: 'Planifier une épreuve pratique de vingt-quatre heures',
      context: [
        { t: 'p', text: 'Vous passez une épreuve pratique de 24 heures sur un réseau de laboratoire fourni, suivie de la remise d’un rapport. Les règles précisent les outils autorisés, interdisent toute assistance extérieure et exigent des preuves reproductibles.' },
      ],
      steps: ['Décrivez le plan des premières heures (lecture des règles, notes, énumération).', 'Fixez une règle de timeboxing et de priorisation des pistes.', 'Répartissez pauses, repos et temps réservé au rapport.'],
    },
    {
      id: 'relire-rapport',
      kind: 'analysis',
      title: 'Analyse : un constat de rapport à améliorer',
      context: [
        { t: 'p', text: 'Extrait d’un rapport : « Le serveur web est vulnérable. J’ai pris le contrôle de la machine et j’ai trouvé des mots de passe, que voici : … Corriger. »' },
      ],
      steps: ['Listez les défauts de cet extrait.', 'Réécrivez le constat avec contexte, preuve minimale, impact, gravité et étapes de reproduction.', 'Proposez une recommandation précise.'],
    },
    {
      id: 'cadrage-mission',
      kind: 'case',
      title: 'Cas : un système hors périmètre apparaît pendant le test',
      context: [
        { t: 'p', text: 'Pendant une mission autorisée sur le serveur web d’un client, vous constatez qu’un second serveur, absent du périmètre, répond sur le même réseau avec un service visiblement mal configuré.' },
      ],
      steps: ['Indiquez ce que vous faites et ne faites pas.', 'Décrivez comment en informer le commanditaire.', 'Précisez ce que vous consignez dans le rapport.'],
    },
  ],
  questions,
  resources: [
    { title: 'Web Security Testing Guide', source: 'OWASP', url: 'https://owasp.org/www-project-web-security-testing-guide/' },
    { title: 'Guide pratique du test d’intrusion', source: 'ANSSI', url: 'https://cyber.gouv.fr/' },
    { title: 'Common Vulnerability Scoring System', source: 'FIRST', url: 'https://www.first.org/cvss/' },
  ],
};
