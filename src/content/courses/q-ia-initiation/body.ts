import type { CourseBody } from '../../types';
import { questions } from './questions';

export const body: CourseBody = {
  courseId: 'q-ia-initiation',
  lesson: {
    intro:
      'Les assistants d’intelligence artificielle sont entrés dans le quotidien : rédiger, résumer, chercher, programmer. Ils aident aussi la défense, mais ils se trompent, ils retiennent ce qu’on leur confie et ils servent aussi les attaquants. Ce cours, sans prérequis, donne les repères pour s’en servir avec discernement : ce qu’est une IA, à quoi elle sert en cybersécurité, quelles sont ses limites, comment protéger ses données et quelles menaces nouvelles reconnaître.',
    sections: [
      {
        id: 'notions',
        title: 'Qu’est-ce qu’une IA ?',
        blocks: [
          { t: 'p', text: 'L’**intelligence artificielle** regroupe des systèmes qui accomplissent des tâches que l’on associe à l’intelligence humaine : reconnaître, classer, prédire, écrire. Aujourd’hui, la plupart reposent sur l’**apprentissage automatique**.' },
          {
            t: 'table',
            head: ['Notion', 'En une phrase', 'Exemple'],
            rows: [
              ['**IA**', 'Système qui accomplit une tâche « intelligente »', 'Assistant, reconnaissance d’image'],
              ['**Apprentissage automatique**', 'Le système apprend à partir d’exemples plutôt que de règles écrites à la main', 'Filtre anti-spam'],
              ['**Modèle**', 'Le résultat de l’apprentissage : il produit une réponse à partir d’une entrée', 'Détecteur de fichiers malveillants'],
              ['**Grand modèle de langage (LLM)**', 'Modèle qui produit du texte plausible à partir d’un texte donné', 'Assistant de rédaction'],
            ],
          },
          { t: 'def', term: 'Données d’entraînement', text: 'Exemples à partir desquels le modèle apprend. La qualité de ces données détermine la qualité du modèle : des exemples faux ou déséquilibrés donnent un modèle faux ou biaisé.' },
          { t: 'def', term: 'Hallucination', text: 'Réponse fausse mais plausible produite par un modèle de langage : un fait inventé, une référence qui n’existe pas, présentés avec assurance.' },
          { t: 'list', items: ['**Une IA calcule la suite la plus plausible**, elle ne « sait » pas au sens humain.', '**Sa qualité dépend des données** qui l’ont entraînée.', '**Elle peut se tromper** avec aplomb.'] },
          { t: 'callout', kind: 'key', text: 'Une IA est un outil puissant et faillible : on s’en sert pour gagner du temps, jamais pour se dispenser de vérifier.' },
        ],
      },
      {
        id: 'usages',
        title: 'À quoi sert l’IA en cybersécurité ?',
        blocks: [
          { t: 'p', text: 'L’IA est déjà présente dans de nombreux outils de défense. Elle brille sur les tâches répétitives et volumineuses, où elle fait gagner du temps aux analystes.' },
          {
            t: 'table',
            head: ['Usage', 'Ce que fait l’IA', 'Rôle de l’humain'],
            rows: [
              ['**Filtrage**', 'Repère le courrier indésirable et les messages suspects', 'Examine les cas douteux'],
              ['**Détection d’anomalies**', 'Signale ce qui s’écarte du comportement habituel', 'Vérifie si l’écart est un incident'],
              ['**Tri des alertes**', 'Regroupe et résume des alertes liées', 'Décide de la suite'],
              ['**Aide à la rédaction**', 'Propose un résumé ou une requête de recherche', 'Relit et corrige'],
            ],
          },
          { t: 'def', term: 'Humain dans la boucle', text: 'Principe selon lequel une personne valide les décisions importantes proposées par l’IA, avec les éléments qui les justifient.' },
          { t: 'list', items: ['**L’IA propose, l’humain décide** pour les actions à fort impact (isoler un poste, supprimer un compte).', '**Les éléments de preuve** accompagnent chaque suggestion.', '**Les actions réversibles et peu risquées** peuvent être automatisées, avec surveillance.'] },
          { t: 'callout', kind: 'tip', text: 'Plus une décision est difficile à annuler, plus la validation humaine est indispensable.' },
        ],
      },
      {
        id: 'limites',
        title: 'Les limites : erreurs, inventions et biais',
        blocks: [
          { t: 'p', text: 'Une réponse bien rédigée n’est pas une réponse exacte. Connaître les limites d’une IA évite les erreurs coûteuses.' },
          {
            t: 'table',
            head: ['Limite', 'Ce qui se passe', 'Réflexe'],
            rows: [
              ['**Hallucination**', 'Fait, chiffre ou référence inventés', 'Vérifier dans une source fiable'],
              ['**Biais**', 'Le modèle reproduit les déséquilibres de ses données', 'Se méfier des réponses généralisées'],
              ['**Dérive**', 'Les performances baissent quand la réalité change', 'Réévaluer régulièrement'],
              ['**Excès de confiance**', 'On accepte la réponse sans contrôle', 'Relire, recouper, demander les sources'],
            ],
          },
          {
            t: 'example',
            title: 'Une vulnérabilité qui n’existe pas',
            blocks: [
              { t: 'p', text: 'Un assistant cite, pour justifier une mise à jour urgente, un identifiant de vulnérabilité d’apparence crédible et un numéro de version précis. Une recherche dans la base officielle ne trouve aucune trace de cet identifiant. La réponse était inventée : il faut toujours retrouver la source.' },
            ],
          },
          { t: 'list', items: ['**Vérifier** les faits, les chiffres et les références.', '**Ne pas copier** une réponse telle quelle dans un rapport.', '**Signaler** les erreurs pour que l’outil soit réévalué.'] },
          { t: 'callout', kind: 'warn', text: 'Plus une réponse est précise et sûre d’elle, plus la tentation de la croire est forte : c’est justement là qu’il faut vérifier.' },
        ],
      },
      {
        id: 'donnees',
        title: 'Protéger ses données avec les outils d’IA',
        blocks: [
          { t: 'p', text: 'Ce que l’on écrit dans un assistant en ligne est transmis à un fournisseur. Selon ses conditions, il peut le conserver, l’analyser ou le réutiliser.' },
          {
            t: 'table',
            head: ['Donnée', 'Peut-on la saisir dans un outil public ?', 'Pourquoi'],
            rows: [
              ['Mot de passe, clé d’accès', '**Jamais**', 'Un secret saisi est un secret exposé'],
              ['Données personnelles de clients', '**Non**, sauf outil validé', 'Le RGPD s’applique'],
              ['Document confidentiel', '**Non**, sauf outil validé', 'Risque de fuite'],
              ['Question générale sur un protocole', '**Oui**', 'Aucune donnée sensible'],
            ],
          },
          { t: 'def', term: 'Minimisation', text: 'Principe qui consiste à n’utiliser que les données strictement nécessaires à un but précis. Moins on en saisit, moins il y a à protéger.' },
          { t: 'list', items: ['**Retirer** les noms, adresses et identifiants avant de soumettre un texte.', '**Utiliser** uniquement les outils autorisés par l’organisation.', '**Ne jamais saisir** de secret ni de donnée confidentielle dans un outil public.'] },
          { t: 'callout', kind: 'legal', text: 'Les données personnelles saisies dans un service d’IA restent soumises au RGPD : l’organisation reste responsable de ce qu’elle y envoie.' },
        ],
      },
      {
        id: 'menaces',
        title: 'Les menaces amplifiées par l’IA',
        blocks: [
          { t: 'p', text: 'Les attaquants utilisent aussi l’IA : messages mieux rédigés, voix et visages imités, personnalisation à grande échelle. Les bons réflexes restent les mêmes, mais les signes d’alerte changent.' },
          {
            t: 'table',
            head: ['Menace', 'Ce que l’IA change', 'Réflexe'],
            rows: [
              ['**Hameçonnage**', 'Messages sans faute, personnalisés, dans toutes les langues', 'Vérifier l’expéditeur, ne pas cliquer sous pression'],
              ['**Hypertrucage (deepfake)**', 'Voix ou vidéo imitant une personne', 'Confirmer par un second canal connu'],
              ['**Fraude au président**', 'Demande urgente de virement avec voix imitée', 'Procédure de validation, rappel sur un numéro connu'],
              ['**Injection de prompt**', 'Texte glissé pour détourner un assistant', 'Ne pas donner à l’assistant des droits qu’il n’a pas à avoir'],
            ],
          },
          { t: 'def', term: 'Hypertrucage', text: 'Contenu audio ou vidéo falsifié par intelligence artificielle pour faire dire ou faire quelque chose à une personne. Il est de plus en plus convaincant.' },
          { t: 'list', items: ['**Urgence, secret, contournement d’une procédure** : trois signaux d’alerte, quelle que soit la qualité du message.', '**Second canal** : rappeler la personne sur un numéro connu avant d’agir.', '**Procédures** : toute demande de paiement suit un circuit de validation.'] },
          { t: 'callout', kind: 'key', text: 'Un message impeccable n’est plus un gage de sérieux : on se fie au contexte et à la procédure, pas à la forme.' },
        ],
      },
      {
        id: 'verifier',
        title: "Une méthode pour vérifier une réponse d’IA",
        blocks: [
          { t: 'p', text: "Un assistant d’IA produit un texte **plausible**, pas un texte **garanti exact**. Face à une réponse technique (commande, configuration, explication d’une alerte), appliquez toujours la même routine avant de l’utiliser." },
          { t: 'list', ordered: true, items: ["**Relire** : la réponse répond-elle bien à la question posée, avec le bon produit et la bonne version ?", "**Recouper** : confronter les points importants à une source officielle (documentation de l’éditeur, ANSSI, NIST, OWASP).", "**Tester sans risque** : exécuter une commande ou un script d’abord dans un environnement isolé, jamais directement en production.", "**Comprendre** : si vous ne savez pas expliquer ce que fait une commande, ne la lancez pas.", "**Consigner** : noter ce qui a été vérifié, par qui et quand, avant de diffuser le résultat."] },
          {
            t: 'table',
            caption: "Usages raisonnables et précautions",
            head: ["Tâche", "Usage raisonnable", "Précaution indispensable"],
            rows: [
              ["Comprendre un concept", "Demander une explication ou un exemple", "Recouper les définitions avec une source officielle"],
              ["Résumer un long rapport", "Obtenir un premier résumé à relire", "Ne pas déposer de document confidentiel dans un service non approuvé"],
              ["Écrire une commande ou un script", "Obtenir un brouillon", "Le tester en environnement isolé et le relire ligne par ligne"],
              ["Interpréter une alerte", "Formuler des hypothèses", "Ne jamais conclure sans les journaux et les preuves"],
            ],
          },
          { t: 'callout', kind: 'warn', text: "Une IA peut citer des références, des options de commande ou des numéros de vulnérabilité **qui n’existent pas**. Vérifiez chaque référence dans la source d’origine avant de la reprendre." },
        ],
      },
      {
        id: 'cadre-usage',
        title: "Cadre d’usage : règles à connaître dans une organisation",
        blocks: [
          { t: 'p', text: "Utiliser l’IA au travail n’est pas qu’une question de technique : c’est aussi une question de **données**, de **responsabilité** et de **règles internes**." },
          {
            t: 'table',
            head: ["Sujet", "Question à se poser", "Réflexe"],
            rows: [
              ["Données", "Ce que je saisis est-il personnel, confidentiel ou stratégique ?", "Ne saisir aucune donnée sensible dans un outil non approuvé ; anonymiser quand c’est possible"],
              ["Outils", "L’outil est-il approuvé par mon organisation ?", "Utiliser les services validés ; éviter les usages « cachés » (shadow AI)"],
              ["Responsabilité", "Qui répond d’une erreur commise à cause d’une réponse d’IA ?", "La personne qui utilise la réponse en reste responsable : relire et valider"],
              ["Droit", "Quelles règles s’appliquent ?", "Le RGPD pour les données personnelles ; le règlement européen sur l’IA (règlement (UE) 2024/1689, en application progressive) pour les systèmes d’IA"],
              ["Traçabilité", "Pourrai-je expliquer d’où vient ce résultat ?", "Conserver la demande, la réponse et la vérification effectuée"],
            ],
          },
          { t: 'callout', kind: 'tip', text: "En cas de doute sur une donnée, la règle la plus sûre est simple : **si vous ne la publieriez pas sur un site public, ne la saisissez pas dans un outil d’IA non approuvé**." },
        ],
      },
    ],
    useCases: [
      'Utiliser un assistant autorisé pour résumer un texte public, puis relire le résultat.',
      'Reconnaître une demande urgente de virement et la vérifier par un second canal.',
      'Retirer les données personnelles d’un texte avant de le soumettre à un assistant validé.',
    ],
    commonMistakes: [
      "Coller dans un assistant public un extrait de journal, un contrat ou une liste de clients.",
      "Exécuter une commande proposée par une IA sans la comprendre ni la tester.",
      'Copier une réponse d’IA dans un rapport sans la vérifier.',
      'Saisir un mot de passe ou un document confidentiel dans un outil public.',
      'Croire qu’un message sans faute est forcément légitime.',
      'Laisser une IA prendre seule une décision irréversible.',
      'Se fier à une voix ou à une vidéo sans confirmation.',
    ],
    bestPractices: [
      'Vérifier faits, chiffres et références.',
      'Ne saisir que des données non sensibles dans les outils publics.',
      'Utiliser les outils validés par l’organisation.',
      'Garder l’humain dans la boucle pour les décisions importantes.',
      'Confirmer toute demande inhabituelle par un second canal.',
    ],
    keyPoints: [
      "Une réponse d’IA est plausible, pas garantie : relire, recouper, tester, consigner.",
      'Une IA apprend à partir d’exemples et peut se tromper avec aplomb.',
      'L’IA assiste les analystes ; l’humain décide.',
      'Les secrets et données confidentielles n’ont pas leur place dans un outil public.',
      'L’IA améliore l’hameçonnage et les contenus falsifiés : on vérifie par un second canal.',
      'Vérifier avant de croire, minimiser avant de saisir.',
    ],
  },
  practice: [
    {
      id: 'classer-usages',
      kind: 'guided',
      title: 'Classer des usages de l’IA',
      context: [
        { t: 'p', text: 'Quatre propositions : (a) résumer un long journal d’événements pour l’analyste ; (b) laisser l’IA supprimer seule les comptes jugés suspects ; (c) demander à l’IA de proposer une requête de recherche que l’analyste relira ; (d) coller dans un assistant public un export de clients avec leurs coordonnées pour le faire trier.' },
      ],
      steps: ['Indiquez pour chaque proposition si elle est raisonnable, à encadrer ou à éviter.', 'Justifiez chaque réponse en une phrase.', 'Proposez une règle simple pour décider qui valide une action de l’IA.'],
    },
    {
      id: 'donnees-prompt',
      kind: 'analysis',
      title: 'Analyse : que peut-on envoyer à un assistant public ?',
      context: [
        {
          t: 'table',
          head: ['Demande', 'Contenu'],
          rows: [
            ['1', 'Explique-moi le fonctionnement du protocole DNS'],
            ['2', 'Voici le mot de passe de l’administrateur, vérifie qu’il est solide : …'],
            ['3', 'Résume ce contrat client (texte complet avec noms et adresses)'],
            ['4', 'Donne-moi une liste de bonnes pratiques pour choisir un mot de passe'],
          ],
        },
      ],
      steps: ['Classez chaque demande (autorisée, à modifier, interdite).', 'Réécrivez les demandes à modifier pour retirer les données sensibles.', 'Indiquez la règle générale à retenir.'],
    },
    {
      id: 'verifier-reponse',
      kind: 'case',
      title: 'Cas : une réponse d’IA à vérifier',
      context: [
        { t: 'p', text: 'Pour préparer une note à la direction, un assistant vous répond : « La vulnérabilité XYZ-2024-9999 touche tous les routeurs de la marque Delta, version 7.2. Appliquez immédiatement la mise à jour 7.2.9. » Vous ne connaissez pas cet identifiant.' },
      ],
      steps: ['Indiquez ce que vous vérifiez avant d’agir.', 'Décrivez où chercher et ce qui prouve que l’information est fiable.', 'Précisez ce que vous écrivez dans la note si vous ne trouvez pas la source.'],
    },
  ],
  questions,
  resources: [
    { title: 'Recommandations de sécurité pour un système d’IA générative', source: 'ANSSI', url: 'https://cyber.gouv.fr/publications/recommandations-de-securite-pour-un-systeme-dia-generative' },
    { title: 'Intelligence artificielle : les conseils de la CNIL', source: 'CNIL', url: 'https://www.cnil.fr/fr/intelligence-artificielle' },
    { title: 'Hameçonnage : que faire ?', source: 'Cybermalveillance.gouv.fr', url: 'https://www.cybermalveillance.gouv.fr/' },
  ],
};
