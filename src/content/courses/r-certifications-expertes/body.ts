import type { CourseBody } from '../../types';
import { questions } from './questions';

export const body: CourseBody = {
  courseId: 'r-certifications-expertes',
  lesson: {
    intro:
      'Les certifications de niveau expert évaluent moins des gestes que du jugement : savoir hiérarchiser, arbitrer entre risque et coût, auditer, décider. Elles s’adressent à des professionnels qui ont déjà de l’expérience. Ce cours présente trois familles (management, système de management ISO/IEC 27001, spécialités techniques), la façon de construire un parcours d’expert et le raisonnement de décideur qu’elles attendent. CyberAcadémie ne délivre aucune certification officielle.',
    sections: [
      {
        id: 'cissp',
        title: 'Les certifications de management de la sécurité',
        blocks: [
          { t: 'p', text: 'Les certifications de management, dont le **CISSP** d’ISC2 est l’exemple le plus connu, couvrent un large éventail de domaines (gestion des risques, sécurité des actifs, architecture, réseaux, identités, évaluation, opérations, développement). Elles visent des praticiens expérimentés.' },
          {
            t: 'table',
            head: ['Caractéristique', 'Ce que cela signifie', 'Conséquence pour la préparation'],
            rows: [
              ['**Large couverture**', 'Beaucoup de domaines, sans grande profondeur technique', 'Cartographier ses lacunes domaine par domaine'],
              ['**Expérience requise**', 'Plusieurs années d’expérience, sinon un statut intermédiaire', 'Vérifier les conditions avant de réserver'],
              ['**Questions de jugement**', 'Plusieurs réponses plausibles, une meilleure', 'S’entraîner à raisonner en priorités'],
              ['**Code d’éthique**', 'Engagement professionnel à respecter', 'Le lire et le comprendre'],
            ],
          },
          { t: 'def', term: 'Raisonnement de décideur', text: 'Manière de répondre qui privilégie l’option alignée sur les objectifs de l’organisation et la gestion du risque, plutôt que la solution la plus technique. On pèse l’impact, le coût et les obligations avant d’agir.' },
          { t: 'def', term: 'Statut intermédiaire', text: 'Titre accordé à un candidat qui réussit l’examen mais n’a pas encore l’expérience professionnelle requise ; il se transforme en certification complète une fois l’expérience acquise.' },
          { t: 'list', items: ['**Cartographier** les domaines et relier chacun à ses propres connaissances et à celles de la plateforme (modules M, E, O, A…).', '**Lire** chaque question en se demandant quel est l’objectif de l’organisation.', '**Éliminer** les options qui contournent la gouvernance ou la loi.', '**Garder** l’éthique professionnelle comme critère.'] },
          { t: 'callout', kind: 'tip', text: 'À ce niveau, la réponse la plus technique n’est pas toujours la meilleure : on cherche la plus appropriée au contexte, aux risques et aux responsabilités.' },
        ],
      },
      {
        id: 'iso',
        title: 'ISO/IEC 27001 : mise en œuvre et audit',
        blocks: [
          { t: 'p', text: 'La norme **ISO/IEC 27001** décrit un **système de management de la sécurité de l’information** (SMSI). Les certifications **Lead Implementer** et **Lead Auditor** valident respectivement la capacité à mettre en place un SMSI et à l’auditer.' },
          {
            t: 'table',
            head: ['Rôle', 'Mission', 'Livrables typiques'],
            rows: [
              ['**Lead Implementer**', 'Construire et faire vivre le SMSI', 'Périmètre, analyse de risque, déclaration d’applicabilité, plan de traitement'],
              ['**Lead Auditor**', 'Évaluer la conformité du SMSI', 'Plan d’audit, constats, rapport d’audit'],
              ['**Direction**', 'Engagement, ressources, revue', 'Politique, objectifs, revue de direction'],
            ],
          },
          { t: 'def', term: 'Système de management de la sécurité de l’information (SMSI)', text: 'Ensemble de politiques, de processus et de responsabilités qui organisent la gestion de la sécurité de l’information selon un cycle d’amélioration continue : planifier, mettre en œuvre, vérifier, améliorer.' },
          { t: 'def', term: 'Déclaration d’applicabilité', text: 'Document qui liste les mesures de sécurité de la norme, indique celles qui sont retenues ou écartées et justifie chaque choix à partir de l’analyse de risque.' },
          {
            t: 'example',
            title: 'Qualifier un constat d’audit',
            blocks: [
              { t: 'p', text: 'Un auditeur interne observe que la revue annuelle des accès privilégiés prévue par la politique n’a pas été réalisée cette année, ni consignée. Preuves : politique, calendrier, absence de compte rendu, entretiens avec le responsable des accès. Il qualifie un écart par rapport à une exigence du SMSI, indique la mesure concernée, la preuve et l’impact, et recommande de réaliser la revue, de désigner un responsable et de suivre l’action.' },
            ],
          },
          { t: 'list', items: ['**Fonder** chaque constat sur des preuves : documents, enregistrements, entretiens, observations.', '**Distinguer** conformité, écart et opportunité d’amélioration.', '**Relier** les mesures retenues à l’analyse de risque.', '**Suivre** les actions correctives jusqu’à la clôture.'] },
          { t: 'callout', kind: 'key', text: 'Un SMSI n’est pas un projet ponctuel : l’amélioration continue et la revue de direction le maintiennent vivant entre deux audits.' },
        ],
      },
      {
        id: 'giac',
        title: 'Certifications de spécialité techniques',
        blocks: [
          { t: 'p', text: 'À côté du management, des organismes comme **GIAC** proposent des certifications de spécialité (détection et réponse, analyse forensique, tests d’intrusion, etc.) qui valident des compétences techniques dans un domaine précis.' },
          {
            t: 'table',
            head: ['Caractéristique', 'Ce que cela signifie', 'Conséquence'],
            rows: [
              ['**Spécialisation**', 'Un domaine technique ciblé', 'Reconnaissance auprès d’équipes spécialisées'],
              ['**Formation associée**', 'Cursus lié à l’examen, souvent coûteux', 'Évaluer le coût et le bénéfice'],
              ['**Documents autorisés**', 'Examens où l’on peut consulter ses notes', 'Préparer un index personnel'],
              ['**Questions d’application**', 'Interpréter, appliquer, choisir', 'S’entraîner par la pratique'],
            ],
          },
          { t: 'def', term: 'Index personnel', text: 'Table de correspondance construite par le candidat entre notions et références de ses supports, pour retrouver rapidement l’information utile pendant un examen à documents autorisés. Il aide à chercher, pas à comprendre.' },
          { t: 'list', items: ['**Pratiquer** les gestes dans des laboratoires du domaine.', '**Construire** l’index en étudiant, pas la veille.', '**Passer** des examens blancs chronométrés avec ses supports.', '**Comprendre** les notions : l’index ne suffit pas.'] },
          { t: 'callout', kind: 'warn', text: 'Un index bien fait ne dispense pas de comprendre : les questions demandent d’appliquer une notion, pas seulement de la retrouver.' },
        ],
      },
      {
        id: 'carriere',
        title: 'Construire un parcours d’expert',
        blocks: [
          { t: 'p', text: 'Un titre de plus ne fait pas un expert. Le parcours combine spécialisation, réalisations concrètes et formation continue.' },
          {
            t: 'table',
            head: ['Élément', 'Rôle', 'Exemple'],
            rows: [
              ['**Certification ciblée**', 'Valider un niveau reconnu', 'Choisie selon le poste visé'],
              ['**Réalisations**', 'Prouver la compétence', 'Rapports, outils, projets, contributions'],
              ['**Veille**', 'Rester à jour', 'Publications, conférences, avis de sécurité'],
              ['**Maintien du titre**', 'Garder la certification valide', 'Formation continue et renouvellement'],
            ],
          },
          { t: 'def', term: 'Durée de validité', text: 'Période pendant laquelle une certification reste active avant renouvellement. Elle impose souvent de justifier de la formation continue sur la période.' },
          { t: 'list', items: ['**Choisir** une certification selon le poste visé, pas selon la mode.', '**Valoriser** ses réalisations par un portfolio.', '**Planifier** les renouvellements et la formation continue.', '**Se spécialiser** après avoir consolidé les bases.'] },
          { t: 'callout', kind: 'tip', text: 'Les recruteurs et les équipes regardent ce que l’on sait faire : une certification ciblée appuyée par des réalisations pèse plus qu’une liste de titres.' },
        ],
      },
      {
        id: 'raisonnement',
        title: 'Raisonner en décideur : risque, coût et proportionnalité',
        blocks: [
          { t: 'p', text: 'Les questions d’expert décrivent un contexte et demandent la meilleure décision. On raisonne en priorités, on pèse risque, coût et contraintes, et on respecte le cadre légal et l’éthique.' },
          {
            t: 'table',
            head: ['Option de traitement', 'Principe', 'Exemple'],
            rows: [
              ['**Réduire**', 'Appliquer une mesure qui diminue le risque', 'Authentification forte'],
              ['**Transférer**', 'Faire porter une partie du risque par un tiers', 'Assurance, sous-traitance'],
              ['**Éviter**', 'Supprimer l’activité qui crée le risque', 'Arrêter un service non essentiel'],
              ['**Accepter**', 'Assumer le risque résiduel par une décision de la direction', 'Risque faible et coût de traitement disproportionné'],
            ],
          },
          { t: 'def', term: 'Proportionnalité', text: 'Principe selon lequel une mesure de sécurité est adaptée au risque qu’elle réduit et à son coût : ni excès de contraintes, ni protection insuffisante.' },
          { t: 'def', term: 'Risque résiduel', text: 'Risque qui subsiste après l’application des mesures de traitement. Il est documenté et accepté explicitement par la personne qui a autorité pour le faire, généralement la direction.' },
          { t: 'list', items: ['**Priorité** à la sécurité des personnes et au respect de la loi.', '**Évaluer** le risque réduit avant une mesure coûteuse.', '**Documenter** les décisions et les risques acceptés.', '**Faire valider** l’acceptation d’un risque par la direction.'] },
          { t: 'callout', kind: 'key', text: 'Le responsable sécurité éclaire et recommande ; la direction décide d’accepter le risque résiduel.' },
        ],
      },
      {
        id: 'argumenter-direction',
        title: "Argumenter une décision de sécurité auprès de la direction",
        blocks: [
          { t: 'p', text: "Les certifications de management valident la capacité à décider, mais aussi à convaincre. Une direction ne tranche pas sur des détails techniques : elle compare un risque, un coût et un bénéfice pour l’activité. Un bon dossier de décision tient en une page et répond à quatre questions dans cet ordre : quel est le risque, que se passe-t-il s’il se réalise, que propose-t-on et à quel coût, que se passe-t-il si l’on ne fait rien." },
          {
            t: 'table',
            caption: "Structure d’une note de décision",
            head: ["Rubrique", "Contenu attendu", "Piège à éviter"],
            rows: [
              ["Contexte et enjeu", "Le service ou l’activité concernés, exprimés en termes métier", "Un vocabulaire technique que la direction ne peut pas arbitrer"],
              ["Risque", "Scénario, probabilité et impact estimés, avec les hypothèses", "Une peur vague (« on peut tout perdre ») sans chiffre ni scénario"],
              ["Options", "Au moins deux solutions, dont « ne rien faire » et une option proportionnée", "Présenter une seule solution comme inévitable"],
              ["Coût et délai", "Coût de mise en œuvre et d’exploitation, délai, charge pour les équipes", "Oublier le coût récurrent et la charge d’exploitation"],
              ["Recommandation et risque résiduel", "Choix argumenté, et ce qui reste exposé après la mesure", "Promettre un risque nul"],
            ],
          },
          { t: 'callout', kind: 'key', text: "Un **risque résiduel** assumé par écrit protège autant la direction que le responsable sécurité : la décision est tracée, datée et réexaminée." },
        ],
      },
      {
        id: 'veille-competences',
        title: "Entretenir ses compétences sans courir après chaque nouveauté",
        blocks: [
          { t: 'p', text: "Une certification expert se maintient, et surtout se mérite dans la durée par l’entretien des compétences. Le piège est de confondre veille et dispersion : suivre dix sources sans en approfondir aucune. Une veille efficace est **bornée et régulière** : quelques sources fiables, un créneau fixe dans la semaine et une sortie concrète (une fiche, un test en laboratoire, une note à l’équipe)." },
          { t: 'list', items: ["**Choisir peu de sources** : un bulletin d’alertes d’un organisme officiel, un blog technique de référence, une communauté de pairs.", "**Trier selon l’impact** : cette information concerne-t-elle un produit que nous utilisons ? Si non, elle peut attendre.", "**Transformer en action** : une alerte sur une vulnérabilité devient une vérification de nos systèmes, pas seulement une lecture.", "**Pratiquer** : reproduire en laboratoire isolé ce que l’on a lu, afin de le comprendre.", "**Capitaliser** : tenir une base de notes personnelle, utile pour les crédits de formation continue et pour l’évolution de carrière."] },
          { t: 'callout', kind: 'tip', text: "Les crédits de formation continue valorisent aussi la **transmission** : présenter un retour d’expérience en interne, rédiger un guide ou encadrer un débutant fait progresser autant que suivre une formation." },
        ],
      },
      {
        id: 'cout-total',
        title: "Estimer le coût total d’une certification",
        blocks: [
          { t: 'p', text: "Le prix de l’examen n’est qu’une partie du coût. Pour décider en connaissance de cause, notamment lorsqu’un employeur finance la démarche, il faut estimer le coût total sur la durée de validité de la certification. Les montants changent : on les relève sur les sites officiels au moment de la décision." },
          {
            t: 'table',
            head: ["Poste de coût", "À vérifier", "Souvent oublié"],
            rows: [
              ["Préparation", "Formation, manuels, plateformes de laboratoires, examens blancs", "Le temps de travail personnel, qui a une valeur"],
              ["Examen", "Frais d’inscription, frais de nouvelle tentative si échec", "Le coût d’un second passage éventuel"],
              ["Maintien", "Cotisation annuelle, crédits de formation continue à justifier", "La cotisation récurrente sur toute la durée de validité"],
              ["Déplacement", "Centre d’examen ou surveillance à distance, équipement requis", "Le matériel et la connexion exigés pour un examen surveillé"],
              ["Opportunité", "Heures détournées d’autres projets ou de la vie personnelle", "L’impact sur la charge de travail courante"],
            ],
          },
          { t: 'callout', kind: 'key', text: "Comparez ce coût à l’**apport attendu** : compétence réellement acquise, reconnaissance par les employeurs visés et exigences des appels d’offres de votre secteur." },
        ],
      },
    ],
    useCases: [
      'Choisir entre une certification de management, d’audit ou de spécialité selon un projet professionnel.',
      'Préparer un examen de jugement en s’entraînant à raisonner en priorités.',
      'Qualifier un constat d’audit ISO/IEC 27001 avec preuves et recommandation.',
      'Planifier un parcours d’expert sur trois ans avec maintien des titres.',
    ],
    commonMistakes: [
      'Répondre à une question de management par la solution la plus technique.',
      'Collectionner les titres sans lien avec un objectif professionnel.',
      'Compter sur un index pour remplacer la compréhension des notions.',
      'Qualifier un constat d’audit sans preuve.',
      'Accepter un risque sans validation de la direction.',
    ],
    bestPractices: [
      'Raisonner en priorités : personnes, loi, risque, coût, contexte.',
      'Fonder les constats d’audit sur des preuves vérifiables.',
      'Construire un index tout au long de l’étude et pratiquer en laboratoire.',
      'Valoriser ses réalisations autant que ses titres.',
      'Planifier le maintien des certifications et la formation continue.',
    ],
    keyPoints: [
      'Les examens experts évaluent le jugement et le raisonnement de décideur.',
      'ISO/IEC 27001 organise un SMSI en amélioration continue, mis en œuvre et audité.',
      'Un constat d’audit repose sur des preuves et une exigence précise.',
      'Une certification de spécialité se prépare par la pratique, l’index n’est qu’un outil.',
      'Le risque résiduel est accepté explicitement par la direction.',
    ],
  },
  practice: [
    {
      id: 'choisir-parcours',
      kind: 'guided',
      title: 'Construire un parcours d’expert sur trois ans',
      context: [
        { t: 'p', text: 'Vous avez cinq ans d’expérience en analyse SOC et vous visez un poste de responsable de la sécurité des systèmes d’information. Vous avez déjà une certification fondamentale. Votre employeur finance une formation par an.' },
      ],
      steps: ['Choisissez les certifications ou formations à viser et justifiez l’ordre.', 'Planifiez les compétences de gouvernance et de management à acquérir.', 'Prévoyez les réalisations et le maintien des titres.'],
    },
    {
      id: 'constat-audit',
      kind: 'analysis',
      title: 'Analyse : qualifier des constats d’audit',
      context: [
        {
          t: 'table',
          head: ['Observation', 'Preuves recueillies'],
          rows: [
            ['La politique de gestion des accès existe, est approuvée et diffusée', 'Document daté et signé, accusés de lecture'],
            ['La revue annuelle des comptes privilégiés n’a pas été réalisée', 'Aucun compte rendu, calendrier non respecté, entretien avec le responsable'],
            ['Les sauvegardes sont testées chaque trimestre mais les résultats ne sont conservés que de façon informelle', 'Messages de messagerie, pas de procès-verbal'],
          ],
        },
      ],
      steps: ['Qualifiez chaque observation (conforme, écart, amélioration possible).', 'Précisez pour chacune la preuve et l’exigence concernée.', 'Proposez les actions correctives.'],
    },
    {
      id: 'decision-risque',
      kind: 'case',
      title: 'Cas : décider face à un risque et un budget',
      context: [
        { t: 'p', text: 'Un applicatif ancien traite des données peu sensibles pour quelques utilisateurs internes. Il ne peut plus être mis à jour et sa migration coûterait l’équivalent de deux ans de budget sécurité. Il est isolé sur un segment dédié et sera retiré dans dix-huit mois.' },
      ],
      steps: ['Listez les options de traitement du risque.', 'Recommandez une décision proportionnée et les mesures compensatoires.', 'Précisez qui doit accepter le risque résiduel et comment le documenter.'],
    },
  ],
  questions,
  resources: [
    { title: 'Certifications ISC2 (CISSP) et conditions', source: 'ISC2', url: 'https://www.isc2.org/certifications' },
    { title: 'ISO/IEC 27001 — Management de la sécurité de l’information', source: 'ISO', url: 'https://www.iso.org/standard/27001' },
    { title: 'Certifications de spécialité en cybersécurité', source: 'GIAC', url: 'https://www.giac.org/' },
  ],
};
