import type { CourseBody } from '../../types';

export const body: CourseBody = {
  courseId: 'm-risques-conformite',
  lesson: {
    intro:
      "Aucune organisation n'a les moyens de tout protéger au maximum. La gouvernance de la sécurité consiste à décider, de façon argumentée et documentée, où investir, quels risques réduire et lesquels accepter, puis à vérifier dans la durée que ces décisions sont appliquées. Cette discipline relie la technique aux décisions de direction et aux obligations légales.",
    sections: [
      {
        id: 'risque',
        title: 'Le vocabulaire du risque',
        blocks: [
          { t: 'def', term: 'Risque', text: "Effet de l'incertitude sur les objectifs. En sécurité, on l'estime par la combinaison de la **vraisemblance** d'un scénario et de la **gravité** de son impact." },
          {
            t: 'table',
            head: ['Notion', 'Définition', 'Exemple'],
            rows: [
              ['Actif (bien support / valeur métier)', 'Ce qui a de la valeur', 'Base clients, chaîne de production, réputation'],
              ['Menace / source de risque', 'Cause potentielle d’un incident', 'Groupe criminel spécialisé dans le rançongiciel'],
              ['Vulnérabilité', 'Faiblesse exploitable', 'VPN non mis à jour, sauvegardes en ligne'],
              ['Impact', 'Conséquence pour l’organisation', 'Arrêt de facturation pendant 3 semaines'],
              ['Mesure de sécurité', 'Moyen de réduire vraisemblance ou impact', 'MFA, sauvegardes hors ligne, PRA'],
            ],
          },
          { t: 'list', items: ['**Réduire** : appliquer des mesures (le cas le plus courant).', '**Transférer** : assurance cyber, sous-traitance contractuellement engagée (la responsabilité ne se transfère pas entièrement).', '**Éviter** : renoncer à l’activité ou au projet risqué.', '**Accepter** : décision explicite et documentée de la direction, pour un risque résiduel jugé tolérable.'] },
          { t: 'callout', kind: 'key', text: "Le **risque résiduel** est celui qui subsiste après traitement. Il doit être formellement **accepté par la direction**, pas par l'équipe technique : c'est elle qui porte la responsabilité." },
        ],
      },
      {
        id: 'iso',
        title: 'ISO 27001 et le système de management',
        blocks: [
          { t: 'def', term: 'SMSI', text: "Système de management de la sécurité de l'information : ensemble de politiques, processus, rôles et contrôles pilotés selon le cycle **PDCA** (planifier, déployer, contrôler, améliorer). L'ISO/IEC 27001 en fixe les exigences ; elle est certifiable." },
          {
            t: 'table',
            head: ['Norme', 'Rôle'],
            rows: [['ISO/IEC 27001:2022', 'Exigences du SMSI (certifiable) et annexe A de 93 mesures'], ['ISO/IEC 27002:2022', 'Guide de mise en œuvre des mesures, en 4 thèmes (organisationnel, humain, physique, technologique)'], ['ISO/IEC 27005', 'Gestion des risques liés à la sécurité de l’information'], ['NIST CSF 2.0', 'Cadre en 6 fonctions : Gouverner, Identifier, Protéger, Détecter, Répondre, Rétablir'], ['CIS Controls v8', '18 contrôles techniques priorisés']],
          },
          { t: 'def', term: 'Déclaration d’applicabilité (DdA / SoA)', text: "Document qui liste les mesures de l'annexe A, indique pour chacune si elle est appliquée ou exclue, et **justifie** ce choix au regard de l'analyse de risques. C'est une pièce centrale de l'audit de certification." },
          { t: 'callout', kind: 'warn', text: "Une certification ISO 27001 atteste qu'un système de management fonctionne sur un **périmètre** donné, pas que l'organisation est invulnérable. Vérifiez toujours le périmètre du certificat d'un fournisseur." },
        ],
      },
      {
        id: 'ebios',
        title: 'EBIOS Risk Manager',
        blocks: [
          { t: 'p', text: "EBIOS Risk Manager est la méthode d'analyse de risques publiée par l'ANSSI. Elle part des **valeurs métier** et des **attaquants** réalistes, et combine une approche par conformité (socle de sécurité) et une approche par scénarios." },
          {
            t: 'table',
            head: ['Atelier', 'Objet'],
            rows: [['1 — Cadrage et socle de sécurité', 'Périmètre, valeurs métier, événements redoutés, écarts au socle (référentiels applicables)'], ['2 — Sources de risque', 'Qui pourrait attaquer et avec quels objectifs visés'], ['3 — Scénarios stratégiques', 'Chemins d’attaque au niveau de l’écosystème (fournisseurs, partenaires)'], ['4 — Scénarios opérationnels', 'Modes opératoires techniques et vraisemblance'], ['5 — Traitement du risque', 'Stratégie, mesures, risques résiduels, cadre de suivi']],
          },
          {
            t: 'example',
            title: 'Scénario stratégique',
            blocks: [{ t: 'p', text: "Source de risque : groupe cybercriminel à but lucratif. Objectif visé : extorsion. Chemin : compromission du prestataire d'infogérance qui dispose d'un accès d'administration permanent, puis déploiement d'un rançongiciel sur les serveurs de production. Événement redouté : indisponibilité de la production pendant plus de 72 heures. Gravité : critique." }],
          },
          { t: 'def', term: 'BIA', text: "Business Impact Analysis : bilan d'impact sur l'activité, qui détermine pour chaque processus la **durée maximale d'interruption admissible** (DMIA / RTO) et la **perte de données maximale admissible** (PDMA / RPO). Il dimensionne le **PCA** (continuité) et le **PRA** (reprise)." },
        ],
      },
      {
        id: 'reglementation',
        title: 'Panorama réglementaire européen',
        blocks: [
          {
            t: 'table',
            head: ['Texte', 'Qui ?', 'Points clés'],
            rows: [
              ['**RGPD** (2018)', 'Tout organisme traitant des données personnelles', 'Sécurité adaptée au risque, notification des violations à la CNIL sous 72 h, information des personnes si risque élevé'],
              ['**NIS2** (directive 2022, transposée en droit national)', 'Entités essentielles et importantes de 18 secteurs', 'Mesures de gestion des risques, notification des incidents importants (alerte précoce en 24 h), responsabilité de la direction'],
              ['**DORA** (règlement, applicable depuis janvier 2025)', 'Secteur financier et ses prestataires TIC critiques', 'Gestion du risque TIC, tests de résilience, gestion des prestataires, notification des incidents'],
              ['**Cyber Resilience Act** (règlement 2024)', 'Fabricants de produits comportant des éléments numériques', 'Sécurité dès la conception, gestion des vulnérabilités pendant la durée de support, signalement des vulnérabilités activement exploitées'],
            ],
          },
          { t: 'callout', kind: 'legal', text: "Ces textes engagent la responsabilité des dirigeants (NIS2 prévoit leur formation et des sanctions). Les montants et délais exacts évoluent avec les transpositions et actes délégués : se référer aux textes officiels et aux autorités (ANSSI, CNIL, ACPR)." },
        ],
      },
    ],
    useCases: [
      'RSSI : présenter à la direction une cartographie des risques et obtenir l’arbitrage budgétaire.',
      'Chef de projet : conduire une analyse EBIOS RM pour un nouveau service en ligne.',
      'Entreprise soumise à NIS2 : établir l’écart entre son niveau actuel et les obligations.',
      'Responsable de la continuité : réaliser le BIA puis tester le PRA.',
    ],
    commonMistakes: [
      'Faire accepter les risques résiduels par l’équipe technique au lieu de la direction.',
      'Confondre certification ISO 27001 et absence de risque, ou ignorer le périmètre certifié.',
      'Réaliser une analyse de risques une fois, sans la mettre à jour.',
      'Croire que souscrire une assurance cyber dispense de mesures de sécurité.',
      'Rédiger un PRA jamais testé.',
    ],
    bestPractices: [
      'Partir des valeurs métier et des scénarios réalistes, pas d’une liste d’outils.',
      'Documenter chaque décision de traitement et son responsable.',
      'Revoir l’analyse de risques à chaque changement majeur et au moins une fois par an.',
      'Tester régulièrement PCA et PRA par des exercices.',
      'Cartographier les obligations réglementaires applicables et désigner les responsables.',
    ],
    keyPoints: [
      'Risque = vraisemblance × gravité ; traitement : réduire, transférer, éviter, accepter.',
      'ISO 27001 : SMSI certifiable, PDCA, déclaration d’applicabilité.',
      'EBIOS RM : 5 ateliers, des valeurs métier aux scénarios opérationnels.',
      'RGPD (72 h), NIS2, DORA, CRA : la direction est responsable.',
    ],
  },
  practice: [
    {
      id: 'matrice',
      kind: 'guided',
      title: 'Construire une matrice de risques',
      context: [{ t: 'p', text: 'PME de logistique de 120 personnes. Scénarios identifiés : R1 rançongiciel via le VPN non mis à jour ; R2 fraude au faux virement par usurpation du dirigeant ; R3 incendie de la salle serveur ; R4 fuite du fichier clients par un salarié partant.' }],
      steps: ['Coter chaque scénario en vraisemblance (1 à 4) et gravité (1 à 4) en justifiant.', 'Placer les scénarios dans une matrice et définir les priorités.', 'Proposer un traitement et une mesure principale pour chacun.'],
    },
    {
      id: 'nis2-ecart',
      kind: 'case',
      title: 'Cas pratique : première analyse d’écart NIS2',
      context: [{ t: 'p', text: 'Un fabricant de dispositifs médicaux de 400 salariés pense être concerné par NIS2. Il n’a ni analyse de risques formalisée, ni procédure de notification d’incident, ni inventaire de ses fournisseurs critiques.' }],
      steps: ['Indiquer comment vérifier s’il est concerné.', 'Lister les chantiers prioritaires.', 'Préciser le rôle attendu de la direction.'],
    },
  ],
  questions: [
    { id: 'gov-q1', type: 'single', difficulty: 1, skills: ['m-risk'], prompt: 'Comment estime-t-on généralement un risque ?', options: [{ id: 'a', text: 'Par le nombre de vulnérabilités détectées' }, { id: 'b', text: 'Par la combinaison de la vraisemblance et de la gravité' }, { id: 'c', text: 'Par le budget sécurité' }, { id: 'd', text: 'Par le nombre de salariés' }] },
    { id: 'gov-q2', type: 'multi', difficulty: 1, skills: ['m-risk'], prompt: 'Quelles options de traitement du risque existent ?', options: [{ id: 'a', text: 'Réduire' }, { id: 'b', text: 'Transférer' }, { id: 'c', text: 'Ignorer sans décision' }, { id: 'd', text: 'Accepter formellement' }, { id: 'e', text: 'Éviter' }] },
    { id: 'gov-q3', type: 'truefalse', difficulty: 2, skills: ['m-risk'], prompt: 'Souscrire une assurance cyber transfère entièrement la responsabilité d’un incident à l’assureur.' },
    { id: 'gov-q4', type: 'short', difficulty: 2, skills: ['m-risk'], prompt: 'Comment appelle-t-on le risque qui subsiste après l’application des mesures de traitement ? (deux mots)' },
    { id: 'gov-q5', type: 'single', difficulty: 2, skills: ['m-smsi'], prompt: 'Quelle norme est certifiable et définit les exigences d’un SMSI ?', options: [{ id: 'a', text: 'ISO/IEC 27001' }, { id: 'b', text: 'ISO/IEC 27002' }, { id: 'c', text: 'ISO/IEC 27005' }, { id: 'd', text: 'NIST CSF' }] },
    { id: 'gov-q6', type: 'short', difficulty: 2, skills: ['m-smsi'], prompt: 'Quel document ISO 27001 liste les mesures de l’annexe A en justifiant leur inclusion ou leur exclusion ? (trois mots)' },
    { id: 'gov-q7', type: 'truefalse', difficulty: 2, skills: ['m-smsi'], prompt: 'Un fournisseur certifié ISO 27001 garantit que tous ses services et sites sont couverts par la certification.' },
    { id: 'gov-q8', type: 'single', difficulty: 2, skills: ['m-smsi'], prompt: 'Quelle fonction a été ajoutée dans la version 2.0 du NIST Cybersecurity Framework ?', options: [{ id: 'a', text: 'Gouverner (Govern)' }, { id: 'b', text: 'Détecter (Detect)' }, { id: 'c', text: 'Protéger (Protect)' }, { id: 'd', text: 'Rétablir (Recover)' }] },
    { id: 'gov-q9', type: 'single', difficulty: 2, skills: ['m-ebios'], prompt: 'Quel organisme publie la méthode EBIOS Risk Manager ?', options: [{ id: 'a', text: 'La CNIL' }, { id: 'b', text: 'L’ANSSI' }, { id: 'c', text: 'L’ISO' }, { id: 'd', text: 'L’ENISA' }] },
    { id: 'gov-q10', type: 'multi', difficulty: 2, skills: ['m-ebios'], prompt: 'Quels éléments sont étudiés dans les ateliers d’EBIOS RM ?', options: [{ id: 'a', text: 'Les valeurs métier et événements redoutés' }, { id: 'b', text: 'Les sources de risque et leurs objectifs visés' }, { id: 'c', text: 'Les chemins d’attaque passant par l’écosystème' }, { id: 'd', text: 'Le choix de la marque des pare-feu' }] },
    { id: 'gov-q11', type: 'short', difficulty: 2, skills: ['m-ebios'], prompt: 'Quel sigle anglais désigne la durée maximale d’interruption admissible d’un processus ?' },
    { id: 'gov-q12', type: 'single', difficulty: 2, skills: ['m-regl'], prompt: 'Sous quel délai une violation de données personnelles doit-elle, en principe, être notifiée à la CNIL ?', options: [{ id: 'a', text: '24 heures' }, { id: 'b', text: '72 heures' }, { id: 'c', text: '15 jours' }, { id: 'd', text: '1 mois' }] },
    { id: 'gov-q13', type: 'multi', difficulty: 2, skills: ['m-regl'], prompt: 'Associez correctement : quelles affirmations sont exactes ?', options: [{ id: 'a', text: 'DORA concerne principalement le secteur financier' }, { id: 'b', text: 'Le Cyber Resilience Act vise les fabricants de produits comportant des éléments numériques' }, { id: 'c', text: 'NIS2 ne s’applique qu’aux entreprises de plus de 10 000 salariés' }, { id: 'd', text: 'NIS2 engage la responsabilité des organes de direction' }] },
    { id: 'gov-q14', type: 'open', difficulty: 3, skills: ['m-risk', 'm-ebios'], prompt: 'Cotez et traitez le scénario « fraude au faux virement par usurpation du dirigeant » pour une PME de 120 personnes, en justifiant vraisemblance, gravité et mesures.' },
    { id: 'gov-q15', type: 'open', difficulty: 3, skills: ['m-regl', 'm-smsi'], prompt: 'Une entreprise vous demande si la certification ISO 27001 suffit à démontrer sa conformité à NIS2. Que répondez-vous ?' },
    { id: 'gov-q16', type: 'truefalse', difficulty: 1, skills: ['m-ebios', 'm-risk'], prompt: 'Un plan de reprise d’activité qui n’a jamais été testé donne une assurance limitée sur la capacité réelle de reprise.' },
  ],
  resources: [
    { title: 'Guide EBIOS Risk Manager', source: 'ANSSI', url: 'https://cyber.gouv.fr/la-methode-ebios-risk-manager' },
    { title: 'NIST Cybersecurity Framework 2.0', source: 'NIST', url: 'https://www.nist.gov/cyberframework' },
    { title: 'Directive (UE) 2022/2555 (NIS2)', source: 'EUR-Lex', url: 'https://eur-lex.europa.eu/eli/dir/2022/2555/oj' },
    { title: 'Violations de données personnelles', source: 'CNIL', url: 'https://www.cnil.fr/fr/notifier-une-violation-de-donnees-personnelles' },
  ],
};
