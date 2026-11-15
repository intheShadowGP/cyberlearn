import type { CourseBody } from '../../types';

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
            head: ['Domaine', 'Certifications', 'Profil visé', 'Modules associés'],
            rows: [
              ['Fondamentaux', 'ISC2 CC, CompTIA Security+, CompTIA Network+', 'Débutant, reconversion, support', 'A, B, E, O'],
              ['Réseau', 'Cisco CCNA, Network+', 'Administrateur réseau', 'B'],
              ['Défense / SOC', 'CompTIA CySA+, Cisco CyberOps Associate, certifications GIAC (GCIH, GCIA…)', 'Analyste SOC, réponse à incident', 'I, J, K'],
              ['Offensif', 'eJPT, PNPT, CompTIA PenTest+, OSCP, CEH', 'Pentesteur', 'H, F, C, D, G'],
              ['Gouvernance', 'ISO 27001 Lead Implementer / Lead Auditor, CISSP, CISM', 'RSSI, auditeur, consultant GRC', 'M, O, L'],
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
        id: 'preparer',
        title: 'Se préparer efficacement',
        blocks: [
          { t: 'list', ordered: true, items: ['Lire le **référentiel officiel** (objectifs de l’examen) et cartographier ses lacunes.', 'Planifier sur la durée : 5 à 8 heures par semaine valent mieux que des sessions marathon irrégulières.', '**Pratiquer** : chaque notion doit être manipulée (laboratoires, machines virtuelles).', '**Rappel actif** : se tester (questions, explications à voix haute) plutôt que relire.', '**Répétition espacée** : revoir une notion à intervalles croissants (1 jour, 3 jours, 1 semaine, 1 mois).', 'Examens blancs en conditions réelles, puis analyse fine des erreurs.'] },
          { t: 'def', term: 'Répétition espacée', text: "Technique d'apprentissage qui consiste à revoir une information juste avant de l'oublier, à des intervalles qui s'allongent. Elle améliore fortement la mémorisation à long terme par rapport aux révisions groupées." },
          { t: 'callout', kind: 'warn', title: 'Éthique', text: "Les « dumps » (copies de questions d'examen réelles) violent les accords de confidentialité des examens et peuvent entraîner la révocation de la certification. Les questions de cette plateforme sont toutes originales." },
          { t: 'callout', kind: 'info', text: "Sur CyberAcadémie, les examens blancs tirent les questions de tous les cours publiés, et le tableau de bord indique les compétences fragiles à retravailler : un bon support de répétition espacée." },
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
      'Accumuler des certifications sans projet professionnel ni pratique.',
      'Ne pas vérifier la validité et les conditions de renouvellement (formation continue).',
    ],
    bestPractices: [
      'Choisir à partir du métier visé, puis vérifier les prérequis officiels.',
      'Planifier un rythme régulier et réaliste.',
      'Pratiquer chaque notion en laboratoire légal.',
      'Utiliser le rappel actif et la répétition espacée.',
      'Constituer un portfolio de réalisations.',
    ],
    keyPoints: [
      'Fondamentaux : ISC2 CC, Security+ ; SOC : CySA+, GIAC ; offensif : eJPT, OSCP ; gouvernance : ISO 27001, CISSP.',
      'Examens pratiques et à choix multiples valident des compétences différentes.',
      'Pratique, rappel actif et répétition espacée sont plus efficaces que la relecture.',
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
  questions: [
    { id: 'cert-q1', type: 'single', difficulty: 1, skills: ['r-panorama'], prompt: 'Laquelle de ces certifications est la plus adaptée à un grand débutant en cybersécurité ?', options: [{ id: 'a', text: 'ISC2 CC (Certified in Cybersecurity)' }, { id: 'b', text: 'OSCP' }, { id: 'c', text: 'CISSP' }, { id: 'd', text: 'ISO 27001 Lead Auditor' }] },
    { id: 'cert-q2', type: 'truefalse', difficulty: 1, skills: ['r-panorama'], prompt: 'L’OSCP repose principalement sur un examen pratique en environnement réel, suivi d’un rapport.' },
    { id: 'cert-q3', type: 'multi', difficulty: 1, skills: ['r-panorama'], prompt: 'Quelles certifications relèvent principalement du domaine offensif (test d’intrusion) ?', options: [{ id: 'a', text: 'eJPT' }, { id: 'b', text: 'PNPT' }, { id: 'c', text: 'ISO 27001 Lead Implementer' }, { id: 'd', text: 'CompTIA PenTest+' }] },
    { id: 'cert-q4', type: 'short', difficulty: 1, skills: ['r-panorama'], prompt: 'Quel éditeur propose les certifications Security+, Network+ et CySA+ ?' },
    { id: 'cert-q5', type: 'single', difficulty: 2, skills: ['r-choix'], prompt: 'Une consultante veut mener des audits de SMSI pour des organismes de certification. Quelle certification vise-t-elle en priorité ?', options: [{ id: 'a', text: 'ISO 27001 Lead Auditor' }, { id: 'b', text: 'CCNA' }, { id: 'c', text: 'eJPT' }, { id: 'd', text: 'CySA+' }] },
    { id: 'cert-q6', type: 'truefalse', difficulty: 2, skills: ['r-choix'], prompt: 'Le CISSP exige, pour être pleinement délivré, une expérience professionnelle dans plusieurs de ses domaines.' },
    { id: 'cert-q7', type: 'single', difficulty: 2, skills: ['r-choix'], prompt: 'Un analyste SOC débutant souhaite une certification orientée détection et analyse. Quel choix est le plus cohérent ?', options: [{ id: 'a', text: 'CompTIA CySA+' }, { id: 'b', text: 'ISO 27001 Lead Implementer' }, { id: 'c', text: 'OSCP' }, { id: 'd', text: 'Aucune, seules les certifications offensives comptent' }] },
    { id: 'cert-q8', type: 'multi', difficulty: 2, skills: ['r-choix'], prompt: 'Quels éléments renforcent une candidature en plus d’une certification ?', options: [{ id: 'a', text: 'Comptes rendus de laboratoires ou de CTF' }, { id: 'b', text: 'Contributions à des projets libres' }, { id: 'c', text: 'Un fichier de questions d’examen copiées' }, { id: 'd', text: 'Des projets personnels documentés' }] },
    { id: 'cert-q9', type: 'short', difficulty: 2, skills: ['r-choix'], prompt: 'Quel statut ISC2 obtient un candidat qui réussit l’examen CISSP sans avoir encore l’expérience requise ? (« Associate of … »)' },
    { id: 'cert-q10', type: 'single', difficulty: 1, skills: ['r-prepa'], prompt: 'Quelle méthode améliore le plus la mémorisation à long terme ?', options: [{ id: 'a', text: 'Relire ses notes la veille de l’examen' }, { id: 'b', text: 'Se tester régulièrement à intervalles croissants (rappel actif et répétition espacée)' }, { id: 'c', text: 'Surligner le manuel' }, { id: 'd', text: 'Regarder des vidéos en accéléré' }] },
    { id: 'cert-q11', type: 'truefalse', difficulty: 1, skills: ['r-prepa'], prompt: 'Utiliser des « dumps » de questions d’examen réelles est une méthode de préparation acceptable si l’on comprend les réponses.' },
    { id: 'cert-q12', type: 'multi', difficulty: 2, skills: ['r-prepa'], prompt: 'Quelles pratiques font partie d’une bonne préparation ?', options: [{ id: 'a', text: 'Partir du référentiel officiel de l’examen' }, { id: 'b', text: 'Pratiquer en laboratoire chaque notion' }, { id: 'c', text: 'Passer des examens blancs et analyser ses erreurs' }, { id: 'd', text: 'Étudier uniquement la veille de l’examen' }] },
    { id: 'cert-q13', type: 'short', difficulty: 1, skills: ['r-prepa'], prompt: 'Comment appelle-t-on la technique qui consiste à revoir une notion à des intervalles de plus en plus longs ? (deux mots)' },
    { id: 'cert-q14', type: 'open', difficulty: 2, skills: ['r-choix', 'r-panorama'], prompt: 'Conseillez les trois profils (juriste vers la conformité, administrateur systèmes vers RSSI, étudiant passionné de CTF vers le pentest) : certification de départ et modules prioritaires.' },
    { id: 'cert-q15', type: 'open', difficulty: 2, skills: ['r-prepa'], prompt: 'Proposez un plan de préparation de 16 semaines pour une certification fondamentale, avec un rythme de 6 heures par semaine.' },
    { id: 'cert-q16', type: 'truefalse', difficulty: 1, skills: ['r-panorama', 'r-prepa'], prompt: 'Valider tous les cours de CyberAcadémie donne droit à une certification officielle reconnue.' },
  ],
  resources: [
    { title: 'ISC2 Certifications', source: 'ISC2', url: 'https://www.isc2.org/certifications' },
    { title: 'CompTIA Certifications', source: 'CompTIA', url: 'https://www.comptia.org/certifications' },
    { title: 'OffSec Certifications', source: 'OffSec', url: 'https://www.offsec.com/courses-and-certifications/' },
    { title: 'Panorama des métiers de la cybersécurité', source: 'ANSSI', url: 'https://cyber.gouv.fr/publications/panorama-des-metiers-de-la-cybersecurite' },
  ],
};
