import type { CourseBody } from '../../types';
import { questions } from './questions';

export const body: CourseBody = {
  courseId: 'r-certifications-preparation',
  lesson: {
    intro:
      "Les certifications structurent l'apprentissage et rassurent les recruteurs, mais elles ne remplacent ni l'expérience ni la pratique. Choisir la bonne certification au bon moment fait gagner des mois ; en accumuler sans objectif en fait perdre. **CyberAcadémie ne délivre aucune certification officielle** et n'est affiliée à aucun organisme : ce cours aide à s'orienter et à se préparer. Les modalités d'examen évoluent : vérifiez toujours les informations à jour sur le site de l'organisme certificateur.",
    sections: [
      {
        id: 'panorama',
        title: 'Panorama par domaine',
        blocks: [
          {
            t: 'table',
            head: ['Domaine', 'Certifications (organisme)', 'Profil visé', 'Modules associés'],
            rows: [
              ['Fondamentaux', 'ISC2 CC (ISC2), Security+ et Network+ (CompTIA)', 'Débutant, reconversion, support', 'A, B, E, O'],
              ['Réseau', 'CCNA (Cisco), Network+ (CompTIA)', 'Administrateur réseau', 'B'],
              ['Défense / SOC', 'CySA+ (CompTIA), CyberOps Associate (Cisco), certifications GIAC (GCIH, GCIA…)', 'Analyste SOC, réponse à incident', 'I, J, K'],
              ['Offensif', 'eJPT (INE), PNPT (TCM Security), PenTest+ (CompTIA), OSCP (OffSec), CEH (EC-Council)', 'Pentesteur', 'H, F, C, D, G'],
              ['Gouvernance', 'ISO 27001 Lead Implementer / Lead Auditor, CISSP (ISC2), CISM (ISACA)', 'RSSI, auditeur, consultant GRC', 'M, O, L'],
            ],
          },
          { t: 'def', term: 'Examen pratique', text: "Épreuve dans laquelle le candidat doit réellement compromettre ou analyser un environnement en temps limité (par exemple l'OSCP, la PNPT), puis rédiger un rapport. Il valide des compétences opérationnelles." },
          { t: 'def', term: 'Examen à choix multiples', text: "Questionnaire (parfois complété de questions de mise en situation) qui valide l'étendue des connaissances. CompTIA Security+, CISSP et ISC2 CC en sont des exemples." },
        ],
      },
      {
        id: 'choisir',
        title: 'Choisir selon son objectif',
        blocks: [
          { t: 'list', items: ['**Reconversion ou premier poste** : une certification fondamentale (ISC2 CC, Security+) pour structurer les bases et passer les filtres de recrutement.', '**Analyste SOC** : bases réseau et systèmes solides, puis CySA+ ou une certification GIAC orientée défense.', '**Pentesteur** : progression pratique, d’une certification d’entrée (eJPT) vers un examen exigeant (OSCP), en multipliant les machines d’entraînement légales.', '**Gouvernance et audit** : ISO 27001 Lead Implementer (mise en œuvre) ou Lead Auditor (audit) ; CISSP pour des profils expérimentés.', '**Expérience requise** : certaines certifications exigent une expérience professionnelle pour être pleinement délivrées (le CISSP demande cinq ans d’expérience dans au moins deux de ses huit domaines, réductible d’un an par un diplôme ou une certification reconnue ; sinon le candidat obtient le statut « Associate of ISC2 »).'] },
          {
            t: 'example',
            title: 'Deux parcours types',
            blocks: [
              { t: 'p', text: "**Camille**, technicienne support, vise un poste d'analyste SOC en 18 mois : modules A, B, C, D puis I, J ; certification Security+ à 6 mois, CySA+ à 15 mois ; laboratoires de la plateforme et participation à des exercices de détection." },
              { t: 'p', text: "**Yanis**, développeur, vise le pentest applicatif : modules F, G, H ; eJPT à 4 mois ; entraînement régulier sur plateformes légales ; OSCP à 12 mois ; publication de comptes rendus de CTF pour valoriser ses compétences." },
            ],
          },
          { t: 'callout', kind: 'tip', text: "Les recruteurs regardent aussi les preuves concrètes : comptes rendus de laboratoires, dépôts de code, participations à des CTF, contributions à des outils libres. Une certification + un portfolio pèsent plus qu'une certification seule." },
        ],
      },
      {
        id: 'valeur',
        title: 'Juger la valeur et le maintien d’une certification',
        blocks: [
          { t: 'p', text: 'Toutes les certifications ne se valent pas pour un même objectif. Avant de s’engager (temps, argent), on vérifie **ce que l’examen évalue réellement**, **qui le reconnaît** dans le métier visé et **comment le titre se maintient**.' },
          { t: 'def', term: 'Certification neutre vis-à-vis des éditeurs', text: 'Certification qui valide des connaissances applicables quel que soit le produit ou le constructeur (par exemple CompTIA Security+ ou ISC2 CC). À l’inverse, une certification d’éditeur ou de constructeur, comme la Cisco CCNA, valide la maîtrise d’un écosystème précis.' },
          { t: 'def', term: 'Formation continue', text: 'Exigence de renouvellement : le titulaire doit justifier d’activités (formations, conférences, publications, nouvelle certification) sur la durée de validité pour que le titre reste actif. Les certifications CompTIA, par exemple, sont valables trois ans.' },
          { t: 'def', term: 'ISO/IEC 17024', text: 'Norme internationale qui fixe les exigences applicables aux organismes qui certifient des personnes (impartialité, évaluation, maintien de la certification). Elle ne doit pas être confondue avec l’ISO/IEC 27001, qui spécifie un système de management de la sécurité de l’information, ni avec l’ISO 19011, qui guide l’audit des systèmes de management.' },
          {
            t: 'table',
            head: ['Critère', 'Question à se poser', 'Exemple'],
            rows: [
              ['Contenu évalué', 'L’examen valide-t-il des connaissances ou des gestes opérationnels ?', 'OSCP (pratique) et CISSP (QCM)'],
              ['Reconnaissance', 'Les employeurs visés la demandent-ils ?', 'Offres d’emploi du métier ciblé'],
              ['Prérequis', 'Faut-il de l’expérience pour la recevoir pleinement ?', 'CISSP : cinq ans, sinon « Associate of ISC2 »'],
              ['Maintien', 'Quelle formation continue pour la conserver ?', 'CompTIA : validité de trois ans'],
              ['Coût total', 'Examen, formation, renouvellement, temps de préparation ?', 'À comparer à l’objectif professionnel'],
            ],
            caption: 'Grille de décision avant de choisir une certification',
          },
          { t: 'callout', kind: 'key', text: 'Une certification atteste de connaissances ou de compétences à un instant donné : elle ne prouve pas à elle seule une expérience professionnelle. Le portfolio (comptes rendus de laboratoires, code, CTF) apporte les preuves complémentaires.' },
        ],
      },
      {
        id: 'preparer',
        title: 'Se préparer efficacement',
        blocks: [
          { t: 'list', ordered: true, items: ['Lire le **référentiel officiel** (objectifs de l’examen) et cartographier ses lacunes.', 'Planifier sur la durée : 5 à 8 heures par semaine valent mieux que des sessions marathon irrégulières.', '**Pratiquer** : chaque notion doit être manipulée (laboratoires, machines virtuelles).', '**Rappel actif** : se tester (questions, explications à voix haute) plutôt que relire.', '**Répétition espacée** : revoir une notion à intervalles croissants (1 jour, 3 jours, 1 semaine, 1 mois).', 'Examens blancs en conditions réelles, puis analyse fine des erreurs.'] },
          { t: 'def', term: 'Répétition espacée', text: "Technique d'apprentissage qui consiste à revoir une information juste avant de l'oublier, à des intervalles qui s'allongent. Elle améliore fortement la mémorisation à long terme par rapport aux révisions groupées." },
          { t: 'callout', kind: 'warn', title: 'Éthique', text: "Les « dumps » (copies de questions d'examen réelles) violent les accords de confidentialité des examens et peuvent entraîner la révocation de la certification. Les questions de cette plateforme sont toutes originales." },
          { t: 'callout', kind: 'info', text: "Sur CyberAcadémie, les examens blancs tirent les questions de tous les cours publiés, et le tableau de bord indique les compétences fragiles à retravailler : un bon support de répétition espacée." },
        ],
      },
      {
        id: 'plan-semaines',
        title: "Construire un plan de préparation sur huit semaines",
        blocks: [
          { t: 'p', text: "Un plan réaliste part de la date de l’examen et remonte vers aujourd’hui. Il fixe un volume hebdomadaire que l’on peut tenir (la régularité compte plus que l’intensité), répartit les domaines selon leur poids dans le plan d’examen et réserve les dernières semaines à l’entraînement en conditions réelles. Le plan est un outil de pilotage : on le révise chaque semaine à partir de ce que l’on a réellement acquis, pas à partir de ce que l’on avait prévu." },
          {
            t: 'table',
            caption: "Exemple de répartition sur huit semaines (à adapter à l’examen visé)",
            head: ["Semaines", "Objectif", "Activités principales"],
            rows: [
              ["1", "Diagnostic", "Examen blanc court pour mesurer le point de départ ; lecture du plan d’examen ; liste des domaines faibles"],
              ["2 à 5", "Acquisition", "Un domaine par semaine : leçon, schémas, exercices, laboratoire ; fiches de synthèse"],
              ["6", "Consolidation", "Reprise des domaines faibles ; questions classées par thème ; répétition espacée des fiches"],
              ["7", "Simulation", "Un examen blanc complet en conditions réelles (durée, pas de documentation) puis analyse détaillée des erreurs"],
              ["8", "Affûtage", "Corrections ciblées, repos, relecture légère ; vérification de la logistique le jour de l’épreuve"],
            ],
          },
          { t: 'callout', kind: 'key', text: "Gardez une **marge** : une semaine de retard est normale. Un plan sans marge s’effondre au premier imprévu, et l’abandon est la première cause d’échec." },
        ],
      },
      {
        id: 'analyse-erreurs',
        title: "Tirer parti d’un examen blanc : classer ses erreurs",
        blocks: [
          { t: 'p', text: "Un score ne dit pas quoi réviser. La valeur d’un examen blanc vient de l’analyse de chaque erreur, y compris des bonnes réponses données par hasard ou avec hésitation. On classe chaque question manquée dans une catégorie, car la parade n’est pas la même selon la cause." },
          {
            t: 'table',
            head: ["Cause de l’erreur", "Signe", "Parade"],
            rows: [
              ["Lacune de connaissance", "Vous ne connaissiez pas la notion", "Retour à la leçon, fiche de synthèse, nouvelles questions sur le sujet"],
              ["Confusion entre notions voisines", "Vous avez choisi un terme proche (par exemple deux protocoles)", "Tableau comparatif, exemples contrastés"],
              ["Lecture trop rapide", "Un mot (« sauf », « le plus », « avant ») a changé le sens", "Souligner les mots-clés ; relire l’énoncé avant de répondre"],
              ["Gestion du temps", "Vous avez bâclé la fin de l’épreuve", "Entraînement chronométré, passage rapide sur les questions longues"],
              ["Hésitation ou chance", "Bonne réponse mais incertitude", "À traiter comme une lacune : refaire la question une semaine plus tard"],
            ],
          },
          { t: 'p', text: "Après classement, regroupez les erreurs par domaine : un domaine où se concentrent les lacunes devient la priorité de la semaine suivante. Refaire le même examen n’a pas d’intérêt, car on mesure alors sa mémoire des réponses ; mieux vaut de nouvelles questions sur les mêmes notions." },
        ],
      },
      {
        id: 'promesses-trompeuses',
        title: "Repérer les promesses trompeuses d’une formation",
        blocks: [
          { t: 'p', text: "Le marché de la préparation aux certifications est concurrentiel, et certaines offres promettent plus qu’elles ne peuvent tenir. Quelques réflexes permettent de garder l’esprit critique avant d’engager du temps et de l’argent. Une formation sérieuse présente son programme, son volume horaire, la part de pratique et les prérequis ; elle ne garantit pas la réussite, car celle-ci dépend du travail du candidat." },
          { t: 'list', items: ["**Une réussite « garantie » à 100 %** : aucune formation ne peut s’engager sur le résultat d’un examen dont elle n’est pas l’organisme.", "**Des « questions réelles de l’examen »** : leur diffusion est généralement interdite par les règlements des organismes certificateurs, et elles exposent à des sanctions.", "**Un programme sans référence au plan d’examen officiel** : on ne peut pas vérifier que les domaines et leur poids sont couverts.", "**Aucune pratique** : pour un examen pratique, une formation uniquement théorique ne prépare pas au format.", "**Des avis invérifiables** : privilégiez des retours de pairs identifiables et des essais gratuits."] },
          { t: 'callout', kind: 'warn', text: "Avant de payer, comparez le programme au **plan d’examen publié par l’organisme certificateur** : c’est la seule référence qui fait foi." },
        ],
      },
    ],
    useCases: [
      'Construire un plan de reconversion vers un poste d’analyste SOC.',
      'Choisir la certification financée par l’employeur la plus utile pour son poste.',
      'Préparer un examen pratique de pentest par un entraînement régulier et documenté.',
    ],
    commonMistakes: [
      'Viser d’emblée une certification avancée sans les bases réseau et système.',
      'Préparer uniquement en relisant, sans pratique ni auto-évaluation.',
      'Utiliser des « dumps » de questions d’examen.',
      'Ignorer les conditions de renouvellement et la valeur du titre pour le métier visé.',
      'Accumuler des certifications sans projet professionnel ni pratique.',
      'Ne pas vérifier la validité et les conditions de renouvellement (formation continue).',
    ],
    bestPractices: [
      'Choisir à partir du métier visé, puis vérifier les prérequis officiels.',
      'Planifier un rythme régulier et réaliste.',
      'Pratiquer chaque notion en laboratoire légal.',
      'Utiliser le rappel actif et la répétition espacée.',
      'Constituer un portfolio de réalisations.',
      'Vérifier ce que l’examen évalue, sa reconnaissance et son renouvellement avant de s’inscrire.',
    ],
    keyPoints: [
      'Fondamentaux : ISC2 CC, Security+ ; SOC : CySA+, GIAC ; offensif : eJPT, OSCP ; gouvernance : ISO 27001, CISSP.',
      'Examens pratiques et à choix multiples valident des compétences différentes.',
      'Pratique, rappel actif et répétition espacée sont plus efficaces que la relecture.',
      'La valeur d’une certification se juge sur ce qu’elle évalue, sa reconnaissance et son maintien (formation continue, ISO/IEC 17024 pour les organismes).',
      'CyberAcadémie prépare aux connaissances, mais ne délivre aucune certification officielle.',
    ],
  },
  practice: [
    {
      id: 'plan-perso',
      kind: 'guided',
      title: 'Construire son plan de préparation',
      context: [{ t: 'p', text: 'Choisissez un métier cible et une certification, puis construisez votre plan.' }],
      steps: ['Lister les domaines du référentiel officiel et évaluer votre niveau (0 à 3) dans chacun.', 'Associer chaque domaine faible à des modules et laboratoires de la plateforme.', 'Planifier semaine par semaine, avec examens blancs réguliers.', 'Fixer un objectif personnel daté dans votre tableau de bord.'],
    },
    {
      id: 'orientation',
      kind: 'case',
      title: 'Cas pratique : conseiller trois profils',
      context: [{ t: 'p', text: 'A) Une juriste qui veut rejoindre une équipe conformité ; B) un administrateur systèmes de 6 ans d’expérience qui vise un poste de RSSI ; C) un étudiant passionné de CTF qui veut devenir pentesteur.' }],
      steps: ['Proposer une certification de départ pour chacun.', 'Proposer les modules prioritaires de la plateforme.', 'Justifier vos choix.'],
    },
  ],
  questions,
  resources: [
    { title: 'ISC2 Certifications', source: 'ISC2', url: 'https://www.isc2.org/certifications' },
    { title: 'CompTIA Certifications', source: 'CompTIA', url: 'https://www.comptia.org/certifications' },
    { title: 'OffSec Certifications', source: 'OffSec', url: 'https://www.offsec.com/courses-and-certifications/' },
    { title: 'Panorama des métiers de la cybersécurité', source: 'ANSSI', url: 'https://cyber.gouv.fr/publications/panorama-des-metiers-de-la-cybersecurite' },
  ],
};
