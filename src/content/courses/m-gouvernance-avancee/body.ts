import type { CourseBody } from '../../types';
import { questions } from './questions';

export const body: CourseBody = {
  courseId: 'm-gouvernance-avancee',
  lesson: {
    intro:
      'À ce niveau, la sécurité n’est plus une liste de mesures mais un **dialogue avec la direction** : combien de risque l’organisation accepte-t-elle, que coûte-t-il de le réduire, comment le prouver à une autorité ou à un auditeur, et que se passe-t-il quand un fournisseur critique ou un scénario extrême se réalise ? Ce cours présente les outils de cette gouvernance avancée : la quantification, la mutualisation de la conformité, la maîtrise des tiers, l’audit par la preuve, le compte rendu aux dirigeants et les tests de résilience.',
    sections: [
      {
        id: 'quantification',
        title: 'Quantifier les risques pour décider',
        blocks: [
          { t: 'p', text: 'Une cotation « élevée / moyenne / faible » ne permet pas de comparer un rançongiciel à une fuite de données ni de justifier 300 k€. La **quantification** exprime les risques en euros, avec leurs hypothèses, pour arbitrer.' },
          {
            t: 'table',
            head: ['Élément', 'Définition', 'Exemple'],
            rows: [
              ['**Fréquence**', 'Nombre d’événements attendus par an', '0,2 (un tous les cinq ans)'],
              ['**Perte par événement**', 'Coût direct et indirect d’un événement', '1,2 M€ (arrêt, reprise, notification, image)'],
              ['**Espérance de perte annuelle (ALE)**', 'Fréquence × perte par événement', '0,2 × 1,2 M€ = 240 k€ par an'],
              ['**Fourchette**', 'Minimum, plus probable, maximum', 'Perte entre 0,5 et 3 M€'],
              ['**Appétit pour le risque**', 'Niveau de risque que la direction accepte de supporter', 'Perte annuelle espérée inférieure à 500 k€'],
            ],
          },
          { t: 'def', term: 'Espérance de perte annuelle', text: 'Produit de la fréquence annuelle d’un scénario par la perte moyenne qu’il cause. Elle permet de comparer des scénarios et de mesurer le gain d’une mesure : perte espérée avant moins perte espérée après.' },
          {
            t: 'example',
            title: 'Justifier une mesure',
            blocks: [
              { t: 'p', text: 'Un scénario de rançongiciel a une perte espérée de 240 k€ par an. Des sauvegardes immuables et un cloisonnement réduisent l’impact de moitié et la fréquence d’un tiers : la perte espérée tombe à 80 k€. Le gain annuel est de 160 k€, à comparer au coût annualisé de la mesure. Les hypothèses sont explicitées et testées avec une fourchette.' },
            ],
          },
          { t: 'list', items: ['**Sourcer** les estimations : historique interne, rapports sectoriels, avis d’experts calibrés.', '**Exprimer l’incertitude** par des fourchettes plutôt que par des valeurs uniques.', '**Documenter** les hypothèses et les revoir régulièrement.'] },
          { t: 'callout', kind: 'warn', text: 'Une quantification précise en apparence peut être trompeuse. Elle sert à structurer la discussion et à comparer, pas à prétendre prédire l’avenir.' },
        ],
      },
      {
        id: 'conformite',
        title: 'Conformité multi-textes et contrôles communs',
        blocks: [
          { t: 'p', text: 'Une même organisation peut relever de plusieurs textes : RGPD, NIS2, DORA, normes sectorielles, exigences clients. Les traiter séparément multiplie les contrôles et les audits. La stratégie consiste à définir un ensemble de **contrôles communs**, prouvés une fois, et à les rattacher à chaque exigence.' },
          {
            t: 'table',
            head: ['Contrôle commun', 'ISO 27001', 'NIS2', 'DORA', 'RGPD'],
            rows: [
              ['Analyse de risques et gouvernance', 'Clauses 4 à 6', 'Gestion des risques, responsabilité de la direction', 'Cadre de gestion du risque TIC', 'Mesures adaptées au risque'],
              ['Gestion des incidents', 'Annexe A', 'Notification (alerte en 24 h)', 'Classification et notification', 'Notification sous 72 h'],
              ['Maîtrise des fournisseurs', 'Annexe A', 'Chaîne d’approvisionnement', 'Prestataires TIC, registre', 'Sous-traitants (article 28)'],
              ['Continuité et tests', 'Annexe A', 'Continuité, gestion de crise', 'Tests de résilience', 'Disponibilité des données'],
            ],
          },
          { t: 'def', term: 'Cartographie des exigences', text: 'Table qui relie chaque exigence (texte, article) à un contrôle interne, son propriétaire et la preuve associée. Elle montre les recouvrements, identifie les exigences non couvertes et évite de prouver deux fois la même chose.' },
          { t: 'def', term: 'Proportionnalité', text: 'Principe qui adapte la profondeur des mesures à la taille, à l’exposition et à l’impact de l’entité, sans la dispenser des exigences de base.' },
          { t: 'callout', kind: 'legal', text: 'Une cartographie ne vaut pas conformité : chaque texte a son périmètre, ses délais et ses autorités. Une certification ISO 27001 aide mais ne couvre pas, à elle seule, NIS2 ou DORA.' },
        ],
      },
      {
        id: 'tiers',
        title: 'Tiers critiques et risque de concentration',
        blocks: [
          { t: 'p', text: 'Plus une organisation externalise, plus sa sécurité dépend de celle de ses prestataires, et des prestataires de ses prestataires. Le risque ne se limite pas à la fuite de données : il inclut l’**indisponibilité** d’un service critique et la **concentration** sur un seul acteur.' },
          {
            t: 'table',
            head: ['Risque', 'Description', 'Mesure'],
            rows: [
              ['**Concentration**', 'Un fournisseur unique porte plusieurs services critiques', 'Cartographier les dépendances, prévoir des alternatives'],
              ['**Chaîne de sous-traitance**', 'Le fournisseur sous-traite à son tour', 'Clauses d’accord préalable, cartographie du rang 2'],
              ['**Verrouillage**', 'Sortie impossible ou très coûteuse', 'Réversibilité, formats ouverts, stratégie de sortie testée'],
              ['**Défaillance**', 'Incident, faillite, litige', 'Plans de continuité, hébergement de secours'],
              ['**Visibilité**', 'On ignore ce qui est externalisé', 'Registre des prestataires et des accords'],
            ],
          },
          { t: 'def', term: 'Stratégie de sortie', text: 'Plan décrivant comment poursuivre l’activité si un prestataire critique défaille ou si le contrat est rompu : reprise en interne ou changement de prestataire, récupération des données, délais et responsabilités.' },
          { t: 'list', items: ['**Classer** les fournisseurs par criticité et par accès.', '**Suivre** les signaux : incident public, changement de propriétaire, extension d’accès.', '**Tester** la stratégie de sortie pour les prestataires critiques.'] },
          { t: 'callout', kind: 'legal', text: 'DORA impose au secteur financier de tenir un registre d’informations sur ses accords avec les prestataires TIC et de maîtriser leur chaîne de sous-traitance. NIS2 demande de prendre en compte la sécurité de la chaîne d’approvisionnement.' },
        ],
      },
      {
        id: 'preuve',
        title: 'Audit et pilotage par la preuve',
        blocks: [
          { t: 'p', text: 'Un contrôle qui n’est pas prouvé n’existe pas aux yeux d’un auditeur ni d’une autorité. Le pilotage par la preuve consiste à produire, en continu et à la source, les éléments qui démontrent que les contrôles fonctionnent.' },
          {
            t: 'table',
            head: ['Principe', 'Contenu'],
            rows: [
              ['**Surveillance continue**', 'Mesures automatiques de l’efficacité des contrôles (taux de postes corrigés, comptes sans second facteur)'],
              ['**Preuves fiables**', 'Datées, issues du système source, traçables et reproductibles'],
              ['**Échantillonnage**', 'Choisi par l’auditeur selon une méthode, pour refléter la population'],
              ['**Classement des écarts**', 'Majeur (le système ne répond pas à l’exigence), mineur, observation'],
              ['**Indépendance**', 'L’auditeur ne juge pas sa propre activité'],
            ],
          },
          { t: 'def', term: 'Écart (non-conformité)', text: 'Manquement constaté par rapport à une exigence. Il est classé, assorti d’un plan d’action avec responsable et échéance, et suivi jusqu’à sa clôture vérifiée.' },
          { t: 'list', items: ['**Trois lignes** : le métier applique les contrôles, la fonction de maîtrise des risques les supervise, l’audit interne apporte une assurance indépendante.', '**Cycle de preuve** : définir la preuve attendue, la collecter automatiquement, la conserver, la présenter.', '**Constats utiles** : un constat vaut par sa cause racine et son plan d’action, pas par sa gravité apparente.'] },
          { t: 'callout', kind: 'key', text: 'Une capture d’écran prise la veille de l’audit prouve un état. Des preuves régulières sur une année prouvent un **fonctionnement**.' },
        ],
      },
      {
        id: 'direction',
        title: 'Rendre compte à la direction et décider',
        blocks: [
          { t: 'p', text: 'Les dirigeants ne décident pas à partir de détails techniques. Ils ont besoin de savoir où se situe l’organisation par rapport au niveau de risque qu’elle accepte, ce qui change, et quelles décisions on attend d’eux.' },
          {
            t: 'table',
            head: ['Élément', 'Contenu', 'Exemple'],
            rows: [
              ['**Appétit pour le risque**', 'Seuils fixés par la direction', 'Perte espérée annuelle inférieure à 500 k€'],
              ['**Indicateurs clés de risque (KRI)**', 'Peu d’indicateurs, avec cible et tendance', 'Délai de correction des vulnérabilités critiques : 6 jours (cible 7)'],
              ['**Note de décision**', 'Risque, options avec coûts, recommandation', 'Trois scénarios de financement, une recommandation'],
              ['**Responsabilité**', 'Approbation, supervision, formation des dirigeants', 'Exigences de NIS2 et de DORA'],
            ],
          },
          { t: 'def', term: 'KRI', text: 'Indicateur clé de risque : mesure qui signale l’évolution d’un risque et déclenche une décision lorsqu’un seuil, relié à l’appétit pour le risque, est franchi.' },
          { t: 'list', items: ['**Peu d’indicateurs**, lisibles, avec un commentaire et la décision attendue.', '**Pas de détail technique** dans le corps du document : il reste en annexe.', '**Écarts assumés** : un risque au-dessus du seuil est traité, ou accepté formellement.'] },
          { t: 'callout', kind: 'warn', text: 'Un tableau de bord transmis sans commentaire est mal lu. L’analyse, l’écart à l’appétit et la décision attendue font partie du livrable.' },
        ],
      },
      {
        id: 'resilience',
        title: 'Éprouver la résilience',
        blocks: [
          { t: 'p', text: 'La résilience ne se déclare pas, elle se **démontre**. Elle repose sur des plans, mais surtout sur des tests réalistes qui révèlent les dépendances oubliées avant la vraie crise.' },
          {
            t: 'table',
            head: ['Type de test', 'Objectif', 'Exemple'],
            rows: [
              ['**Exercice sur table**', 'Tester décisions, rôles et communication', 'Cellule de crise face à un scénario de rançongiciel'],
              ['**Test de reprise**', 'Vérifier la restauration dans les délais', 'Restauration chronométrée sur un environnement indépendant du site principal'],
              ['**Scénario sévère mais plausible**', 'Éprouver au-delà des incidents courants', 'Perte d’un prestataire critique, cyberattaque majeure'],
              ['**Red team (cadre autorisé)**', 'Tester détection et réponse face à un adversaire réaliste', 'Exercice convenu avec périmètre et règles définis'],
            ],
          },
          { t: 'def', term: 'Tolérance à l’impact', text: 'Niveau maximal d’interruption qu’une activité critique peut subir avant un préjudice inacceptable pour l’organisation ou ses clients. Elle guide les objectifs de reprise et les scénarios de test.' },
          { t: 'list', items: ['**Vérifier les dépendances** : annuaire d’identités, réseau, résolution de noms, accès des opérateurs.', '**Tester hors du site principal** : un plan qui dépend du site sinistré échoue.', '**Suivre les actions** : chaque écart d’exercice reçoit un responsable, une échéance et une vérification.'] },
          { t: 'callout', kind: 'tip', text: 'Les tests d’intrusion et les exercices de red team se mènent toujours dans un cadre écrit, avec autorisation, périmètre et règles d’engagement.' },
        ],
      },
    ],
    useCases: [
      'Construire l’argumentaire financier d’un programme de sécurité devant un comité de direction.',
      'Mutualiser les preuves d’une certification ISO 27001, d’une analyse NIS2 et d’un audit client.',
      'Préparer la présentation annuelle de la sécurité à un conseil d’administration.',
    ],
    commonMistakes: [
      'Présenter une quantification comme une prévision précise, sans fourchette ni hypothèses.',
      'Considérer qu’une certification dispense d’analyser chaque texte applicable.',
      'Ignorer les sous-traitants de rang 2 et la concentration chez un fournisseur unique.',
      'Collecter les preuves la veille de l’audit.',
      'Transmettre à la direction un tableau de bord sans analyse ni décision demandée.',
    ],
    bestPractices: [
      'Quantifier avec des fourchettes, sourcer et documenter les hypothèses.',
      'Maintenir une cartographie exigences, contrôles, propriétaires et preuves.',
      'Cartographier les tiers critiques, leurs sous-traitants et tester la sortie.',
      'Produire les preuves en continu, à la source, avec classement des écarts.',
      'Relier les indicateurs à l’appétit pour le risque ; tester la résilience par des scénarios sévères mais plausibles.',
    ],
    keyPoints: [
      'Quantifier permet de comparer et de justifier, à condition d’exprimer l’incertitude.',
      'Des contrôles communs prouvés une fois répondent à plusieurs textes ; la cartographie ne vaut pas conformité.',
      'La concentration et la chaîne de sous-traitance sont des risques majeurs pour les tiers critiques.',
      'La preuve est datée, issue du système source et produite en continu.',
      'La direction décide à partir de peu d’indicateurs reliés à son appétit pour le risque.',
    ],
  },
  practice: [
    {
      id: 'budget-rancongiciel',
      kind: 'guided',
      title: 'Justifier un budget par la quantification',
      context: [{ t: 'p', text: 'Une entreprise de 800 personnes estime qu’un rançongiciel majeur arrive en moyenne tous les cinq ans, avec une perte entre 0,6 et 3 M€ (plus probable : 1,5 M€). Un programme de 300 k€ (sauvegardes immuables, authentification renforcée, segmentation) réduirait la fréquence d’un tiers et la perte probable de 40 %. L’appétit de la direction est de 250 k€ de perte espérée annuelle.' }],
      steps: ['Calculer la perte espérée annuelle avant et après le programme avec la valeur la plus probable.', 'Comparer le gain au coût du programme sur trois ans et discuter l’incertitude.', 'Situer le résultat par rapport à l’appétit pour le risque et formuler la décision à demander.'],
    },
    {
      id: 'tiers-critique',
      kind: 'case',
      title: 'Cas pratique : une dépendance à un hébergeur unique',
      context: [{ t: 'p', text: 'Un assureur confie à un seul hébergeur ses applications de gestion des sinistres, de facturation et de relation client. L’hébergeur fait appel à un sous-traitant pour la sauvegarde et la supervision. Le contrat ne prévoit ni notification d’incident à délai fixé, ni stratégie de sortie.' }],
      steps: ['Identifier les risques de concentration et de chaîne de sous-traitance.', 'Proposer les clauses et mesures à mettre en place.', 'Décrire comment tester la stratégie de sortie.'],
    },
    {
      id: 'plan-audit-preuve',
      kind: 'case',
      title: 'Cas pratique : préparer un audit par la preuve',
      context: [{ t: 'p', text: 'Une entité soumise à NIS2 et certifiée ISO 27001 doit démontrer, dans six mois, l’efficacité de dix contrôles clés (revue des accès, correctifs, sauvegardes, détection, formation, gestion des fournisseurs, journalisation, authentification, gestion des incidents, continuité). Les preuves sont aujourd’hui éparpillées et produites à la demande.' }],
      steps: ['Proposer une organisation de collecte continue des preuves.', 'Définir pour deux contrôles la preuve attendue, sa source et sa fréquence.', 'Décrire comment classer et suivre les écarts constatés.'],
    },
  ],
  questions,
  resources: [
    { title: 'NIST Cybersecurity Framework 2.0', source: 'NIST', url: 'https://www.nist.gov/cyberframework' },
    { title: 'Règlement (UE) 2022/2554 (DORA)', source: 'EUR-Lex', url: 'https://eur-lex.europa.eu/eli/reg/2022/2554/oj' },
    { title: 'Directive (UE) 2022/2555 (NIS2)', source: 'EUR-Lex', url: 'https://eur-lex.europa.eu/eli/dir/2022/2555/oj' },
    { title: 'EBIOS Risk Manager', source: 'ANSSI', url: 'https://cyber.gouv.fr/la-methode-ebios-risk-manager' },
    { title: 'FAIR Institute — Factor Analysis of Information Risk', source: 'FAIR Institute', url: 'https://www.fairinstitute.org/' },
  ],
};
