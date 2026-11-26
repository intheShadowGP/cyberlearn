import type { CourseBody } from '../../types';
import { questions } from './questions';

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
          { t: 'diagram', id: 'risk-matrix', caption: 'On positionne chaque risque selon sa vraisemblance et son impact ; la couleur donne la priorité de traitement (le produit vraisemblance × impact n’est qu’une aide à la lecture).', alt: 'Matrice des risques 4 sur 4 croisant vraisemblance et impact, les cases les plus à risque (vraisemblance et impact élevés) étant en rouge et les plus faibles en vert.' },
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
      {
        id: 'pilotage',
        title: 'Politique, rôles et pilotage du système de management',
        blocks: [
          { t: 'p', text: 'Une analyse de risques et des mesures ne tiennent que si elles sont **portées** : une politique approuvée par la direction, des rôles clairs, des indicateurs suivis et une revue régulière. C’est ce qui transforme des actions isolées en système de management.' },
          {
            t: 'table',
            head: ['Élément', 'Contenu', 'Responsable'],
            rows: [
              ['**Politique de sécurité**', 'Objectifs, périmètre, principes, obligations de chacun', 'Approuvée par la direction'],
              ['**Rôles et responsabilités**', 'RSSI, propriétaires d’actifs, délégué à la protection des données, correspondants métiers', 'Direction, RSSI'],
              ['**Indicateurs**', 'Mesures reliées à des objectifs : délai de correction, taux de formation, écarts d’audit', 'RSSI'],
              ['**Audit interne**', 'Vérification de conformité avant l’audit externe', 'Auditeurs indépendants de l’audité'],
              ['**Revue de direction**', 'Examen des résultats, décisions d’amélioration et de ressources', 'Direction'],
            ],
          },
          { t: 'def', term: 'RSSI', text: 'Responsable de la sécurité des systèmes d’information : il définit et fait appliquer la politique, suit les risques et les indicateurs, et **rend compte à la direction**. Il ne remplace ni les équipes techniques ni le juridique.' },
          { t: 'def', term: 'PDCA', text: 'Cycle d’amélioration continue : **planifier** (politique, risques, objectifs), **déployer** (mesures), **contrôler** (indicateurs, audits), **améliorer** (actions correctives). Il structure le fonctionnement de l’ISO 27001.' },
          { t: 'list', items: ['**Mesurable** : un indicateur sans cible ne guide aucune décision.', '**Utile** : on mesure ce qui sert à décider (délai de correction), pas ce qui est facile à compter.', '**Revu** : la politique est revue au moins une fois par an et à chaque changement majeur.'] },
          { t: 'callout', kind: 'key', text: 'La sécurité d’une organisation dépend moins de la sophistication de ses outils que de la **clarté des responsabilités** et de la régularité du pilotage.' },
        ],
      },
      {
        id: 'continuite',
        title: 'Continuité d’activité et gestion de crise',
        blocks: [
          { t: 'p', text: 'Malgré les mesures préventives, un incident majeur peut survenir : rançongiciel, incendie, panne d’un prestataire. La **continuité** prépare l’organisation à maintenir l’essentiel de son activité, à reprendre rapidement et à communiquer pendant la crise.' },
          {
            t: 'table',
            head: ['Notion', 'Rôle', 'Exemple'],
            rows: [
              ['**BIA** (bilan d’impact)', 'Fixer pour chaque processus la durée d’interruption (RTO) et la perte de données (RPO) admissibles', 'Facturation : RTO 24 h, RPO 4 h'],
              ['**PCA** (continuité)', 'Maintenir les activités essentielles, souvent en mode dégradé', 'Procédures manuelles de secours'],
              ['**PRA** (reprise)', 'Rétablir les systèmes après un sinistre', 'Restauration sur un site de secours'],
              ['**Gestion de crise**', 'Décider, coordonner et communiquer', 'Cellule de crise, communication aux clients et aux autorités'],
              ['**Exercices**', 'Vérifier que les plans fonctionnent', 'Exercice sur table, test de restauration'],
            ],
          },
          { t: 'def', term: 'RPO et RTO', text: 'Le **RTO** (Recovery Time Objective) est la durée maximale d’interruption admissible ; le **RPO** (Recovery Point Objective) est l’ancienneté maximale des données restaurées, donc la fréquence minimale de sauvegarde.' },
          {
            t: 'example',
            title: 'De l’objectif à la solution',
            blocks: [
              { t: 'p', text: 'Le BIA indique que la facturation doit reprendre en 24 heures avec au plus 4 heures de données perdues. Cela impose une sauvegarde au moins toutes les 4 heures, une restauration testée en moins de 24 heures et une copie hors ligne : le coût de la solution découle directement de l’objectif fixé avec les métiers.' },
            ],
          },
          { t: 'list', ordered: true, items: ['**Détecter et qualifier** l’incident, activer la cellule de crise.', '**Contenir** et préserver les preuves.', '**Communiquer** : direction, clients, autorités selon les obligations (CNIL, autorité NIS2).', '**Reprendre** selon les priorités du BIA.', '**Tirer les enseignements** et mettre à jour les plans.'] },
          { t: 'callout', kind: 'warn', text: 'Un plan jamais testé donne une fausse assurance. Les sauvegardes doivent être **hors ligne ou immuables** et leur restauration éprouvée.' },
        ],
      },
      {
        id: 'declaration-applicabilite',
        title: "La déclaration d’applicabilité : un exemple",
        blocks: [
          { t: 'p', text: "Dans ISO 27001, la **déclaration d’applicabilité** (SoA) est le document qui relie l’analyse de risques aux mesures de sécurité. Pour chaque mesure du référentiel (annexe A), elle indique si la mesure est **applicable**, **mise en œuvre** ou non, et **pourquoi**. Un auditeur la lit en premier." },
          {
            t: 'table',
            caption: "Extrait fictif (numérotation de l’édition 2022 de l’annexe A, à confronter à la norme)",
            head: ["Mesure", "Applicable ?", "État", "Justification"],
            rows: [
              ["5.15 Contrôle d’accès", "Oui", "Mise en œuvre", "Réduit le risque d’accès non autorisé aux dossiers clients (risque R3)"],
              ["8.13 Sauvegarde des informations", "Oui", "Partielle : test de restauration à planifier", "Réduit le risque de perte par rançongiciel (risque R1)"],
              ["8.15 Journalisation", "Oui", "Mise en œuvre", "Permet l’investigation après incident"],
              ["Mesure liée à un développement logiciel interne", "Non", "—", "L’organisation n’a aucun développement interne ; exclusion validée par la direction"],
            ],
          },
          { t: 'callout', kind: 'key', text: "Une exclusion doit toujours être **justifiée par le contexte** (« non applicable car… »), pas par l’effort que la mesure demanderait. Chaque ligne renvoie à un risque ou à une exigence." },
        ],
      },
      {
        id: 'exigence-preuve',
        title: "De l’exigence à la preuve : tenir une matrice de conformité",
        blocks: [
          { t: 'p', text: "La conformité se démontre par des **preuves**, pas par des déclarations. Une matrice simple relie chaque exigence à une mesure, à une preuve vérifiable et à un responsable." },
          {
            t: 'table',
            head: ["Exigence", "Mesure", "Preuve", "Responsable"],
            rows: [
              ["Limiter l’accès aux données personnelles", "Droits par rôle, revue semestrielle", "Compte rendu de la dernière revue, export des droits", "Responsable des systèmes"],
              ["Pouvoir notifier une violation dans les délais", "Procédure d’incident et astreinte", "Procédure datée, exercice de simulation consigné", "Responsable de la sécurité"],
              ["Sauvegarder et restaurer les données", "Sauvegarde hors ligne, test annuel", "Rapport du dernier test de restauration", "Responsable d’exploitation"],
            ],
          },
          { t: 'callout', kind: 'tip', text: "Une organisation peut être **conforme sans être sécurisée** (exigences remplies sur le papier) ou sécurisée sans pouvoir le prouver. La bonne démarche part des risques réels, puis produit les preuves qui montrent leur traitement." },
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
      "Exclure une mesure de la déclaration d’applicabilité sans justification liée au contexte.",
      "Confondre être conforme et être protégé.",
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
      "Déclaration d’applicabilité : mesure, applicabilité, état, justification ; conformité = preuves vérifiables.",
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
      labId: 'risk-matrix-lab',
      title: 'Construire une matrice de risques',
      context: [{ t: 'p', text: 'PME de logistique de 120 personnes. Scénarios identifiés : R1 rançongiciel via le VPN non mis à jour ; R2 fraude au faux virement par usurpation du dirigeant ; R3 incendie de la salle serveur ; R4 fuite du fichier clients par un salarié partant.' }],
      steps: ['Coter chaque scénario en vraisemblance (1 à 4) et gravité (1 à 4) en justifiant.', 'Placer les scénarios dans une matrice et définir les priorités.', 'Proposer un traitement et une mesure principale pour chacun.'],
    },
    {
      id: 'nis2-ecart',
      kind: 'case',
      labId: 'breach-deadline-lab',
      title: 'Cas pratique : première analyse d’écart NIS2',
      context: [{ t: 'p', text: 'Un fabricant de dispositifs médicaux de 400 salariés pense être concerné par NIS2. Il n’a ni analyse de risques formalisée, ni procédure de notification d’incident, ni inventaire de ses fournisseurs critiques.' }],
      steps: ['Indiquer comment vérifier s’il est concerné.', 'Lister les chantiers prioritaires.', 'Préciser le rôle attendu de la direction.'],
    },
    {
      id: 'bia-reprise',
      kind: 'case',
      title: 'Cas pratique : du bilan d’impact au plan de reprise',
      context: [
        { t: 'p', text: 'Une PME de distribution de 120 personnes a identifié ses trois processus principaux :' },
        {
          t: 'table',
          head: ['Processus', 'Interruption admissible', 'Perte de données admissible', 'Sauvegarde actuelle'],
          rows: [
            ['Prise de commandes en ligne', '4 heures', '15 minutes', 'Quotidienne, sur un disque branché en permanence'],
            ['Facturation', '24 heures', '4 heures', 'Quotidienne, sur le même disque'],
            ['Paie', '5 jours', '1 jour', 'Hebdomadaire, sur le même disque'],
          ],
        },
      ],
      steps: ['Indiquer ce qui ne satisfait pas les objectifs et pourquoi.', 'Proposer l’ordre de redémarrage et les mesures de sauvegarde adaptées.', 'Décrire un exercice permettant de vérifier le plan.'],
    },
  ],
  questions,
  resources: [
    { title: 'Guide EBIOS Risk Manager', source: 'ANSSI', url: 'https://cyber.gouv.fr/la-methode-ebios-risk-manager' },
    { title: 'NIST Cybersecurity Framework 2.0', source: 'NIST', url: 'https://www.nist.gov/cyberframework' },
    { title: 'Directive (UE) 2022/2555 (NIS2)', source: 'EUR-Lex', url: 'https://eur-lex.europa.eu/eli/dir/2022/2555/oj' },
    { title: 'Violations de données personnelles', source: 'CNIL', url: 'https://www.cnil.fr/fr/notifier-une-violation-de-donnees-personnelles' },
  ],
};
