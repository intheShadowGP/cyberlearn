import type { CourseBody } from '../../types';
import { questions } from './questions';

export const body: CourseBody = {
  courseId: 'm-ebios-pratique',
  lesson: {
    intro:
      'EBIOS Risk Manager (EBIOS RM) est la méthode d’analyse de risques publiée par l’ANSSI. Elle part de ce qui compte pour l’organisation (ses **valeurs métier**), s’intéresse à des attaquants **réalistes**, passe par l’**écosystème** (fournisseurs, partenaires) puis descend au niveau technique. Ce cours suit les cinq ateliers de la méthode pas à pas, sur un fil rouge, et montre comment les piloter dans une organisation réelle.',
    sections: [
      {
        id: 'atelier1',
        title: 'Atelier 1 : cadrer l’étude et fixer le socle de sécurité',
        blocks: [
          { t: 'p', text: 'L’atelier 1 répond à la question : « que veut-on protéger, et que craint-on de perdre ? ». On délimite le **périmètre**, on identifie les **valeurs métier**, les **biens supports**, les **événements redoutés**, et on évalue la **gravité** de chacun avec les métiers.' },
          {
            t: 'table',
            head: ['Notion', 'Définition', 'Exemple (clinique privée)'],
            rows: [
              ['**Valeur métier**', 'Processus ou information essentiels', 'Prise en charge des patients, dossiers médicaux'],
              ['**Bien support**', 'Composant sur lequel repose une valeur métier', 'Dossier patient informatisé, serveurs, personnel, réseau'],
              ['**Événement redouté**', 'Atteinte d’une valeur métier et ses conséquences', 'Indisponibilité du dossier patient pendant 48 h'],
              ['**Gravité**', 'Niveau d’impact sur une échelle à 4 niveaux', 'Critique (risque pour la vie des patients)'],
              ['**Socle de sécurité**', 'Règles applicables et écarts constatés', 'Guide d’hygiène, exigences sectorielles, écarts relevés'],
            ],
          },
          { t: 'def', term: 'Événement redouté', text: 'Atteinte de la disponibilité, de l’intégrité ou de la confidentialité d’une valeur métier, avec ses conséquences. Sa **gravité** se fixe d’abord, avec les métiers, indépendamment de la façon dont il se produirait.' },
          { t: 'def', term: 'Socle de sécurité', text: 'Ensemble des règles et référentiels applicables à l’étude (politique, normes, réglementations) et des écarts par rapport à eux. Il distingue ce qui relève de la simple mise en conformité de ce qui appelle une analyse de scénarios.' },
          { t: 'list', items: ['**Échelle de gravité** : mineure, significative, grave, critique, définie en termes métier (arrêt, pertes, atteinte aux personnes).', '**Participants** : métiers, sécurité, informatique, direction.', '**Livrables** : périmètre, valeurs métier et biens supports, événements redoutés cotés, écarts au socle.'] },
          { t: 'callout', kind: 'tip', text: 'Fixez la gravité en équipe et avec des exemples concrets : une gravité cotée trop vite par un seul acteur biaise toute l’analyse.' },
        ],
      },
      {
        id: 'atelier2',
        title: 'Atelier 2 : sources de risque et objectifs visés',
        blocks: [
          { t: 'p', text: 'L’atelier 2 répond à : « qui pourrait nous attaquer, et pour quoi faire ? ». On caractérise les **sources de risque** (SR) et leurs **objectifs visés** (OV), puis on retient les **couples SR/OV** les plus pertinents.' },
          {
            t: 'table',
            head: ['Source de risque', 'Objectifs visés fréquents', 'Critères de pertinence'],
            rows: [
              ['Groupe cybercriminel', 'Extorsion, fraude, revente de données', 'Motivation, ressources, activité observée contre le secteur'],
              ['Acteur étatique', 'Espionnage, sabotage, influence', 'Intérêt stratégique de l’organisation'],
              ['Concurrent', 'Vol de savoir-faire', 'Valeur de l’information pour le marché'],
              ['Initié (salarié, prestataire)', 'Vengeance, gain, erreur', 'Accès déjà détenus, climat social'],
              ['Hacktiviste', 'Atteinte à l’image, revendication', 'Exposition médiatique'],
            ],
          },
          { t: 'def', term: 'Couple SR/OV', text: 'Association d’une source de risque et d’un objectif visé, retenue lorsqu’elle est jugée **pertinente** au regard de la motivation, des ressources et de l’activité de la source.' },
          {
            t: 'example',
            title: 'Couples retenus pour une clinique privée',
            blocks: [
              { t: 'p', text: 'Groupe cybercriminel / extorsion par indisponibilité du système d’information ; groupe cybercriminel / vol de données de santé ; initié / consultation indue de dossiers. Un acteur étatique visant l’espionnage industriel est écarté : la motivation est jugée faible, ce qui est justifié dans l’étude.' },
            ],
          },
          { t: 'callout', kind: 'warn', text: 'N’oubliez pas les initiés : leurs accès sont déjà en place, ce qui rend leurs scénarios souvent plus simples que ceux d’un attaquant extérieur.' },
        ],
      },
      {
        id: 'atelier3',
        title: 'Atelier 3 : scénarios stratégiques et écosystème',
        blocks: [
          { t: 'p', text: 'L’atelier 3 répond à : « par où l’attaquant passera-t-il ? ». Une organisation n’est pas isolée : ses clients, prestataires et partenaires forment son **écosystème**, et chacun peut devenir un **chemin d’attaque**.' },
          {
            t: 'table',
            head: ['Critère', 'Effet sur le niveau de menace d’une partie prenante'],
            rows: [
              ['**Dépendance** (à ce tiers)', 'Plus elle est forte, plus la menace est élevée'],
              ['**Pénétration** (dans nos systèmes)', 'Plus elle est forte, plus la menace est élevée'],
              ['**Maturité cyber** du tiers', 'Plus elle est élevée, plus la menace est faible'],
              ['**Confiance** justifiée', 'Plus elle est élevée, plus la menace est faible'],
            ],
          },
          { t: 'def', term: 'Niveau de menace d’une partie prenante', text: 'Il croît avec la dépendance et la pénétration, et décroît avec la maturité cyber et la confiance : menace ≈ (dépendance × pénétration) / (maturité × confiance). Il sert à repérer les tiers par lesquels l’attaque est la plus plausible.' },
          { t: 'def', term: 'Chemin d’attaque stratégique', text: 'Parcours par lequel une source de risque atteint une valeur métier en passant par une ou plusieurs parties prenantes, avec sa gravité.' },
          { t: 'list', items: ['**Mesures de l’écosystème** : exigences contractuelles, limitation et surveillance des accès, audits, redondance.', '**Scénario stratégique type** : prestataire d’infogérance compromis, puis rançongiciel déployé sur les serveurs de production.', '**Gravité** : celle de l’événement redouté atteint par le chemin.'] },
          { t: 'callout', kind: 'key', text: 'Un prestataire à accès d’administration permanent combine dépendance et pénétration maximales : c’est presque toujours le tiers le plus dangereux.' },
        ],
      },
      {
        id: 'atelier4',
        title: 'Atelier 4 : scénarios opérationnels',
        blocks: [
          { t: 'p', text: 'L’atelier 4 répond à : « comment, techniquement, l’attaque se déroule-t-elle ? ». On détaille les chemins retenus en **scénarios opérationnels** et on estime leur **vraisemblance**.' },
          {
            t: 'table',
            head: ['Séquence', 'Objectif de l’attaquant', 'Exemple'],
            rows: [
              ['**Connaître**', 'Reconnaître la cible', 'Collecte d’informations publiques sur le prestataire'],
              ['**Rentrer**', 'Pénétrer le système', 'Hameçonnage d’un administrateur du prestataire'],
              ['**Trouver**', 'Découvrir les cibles', 'Exploration des serveurs, repérage des sauvegardes'],
              ['**Exploiter**', 'Atteindre l’objectif', 'Chiffrement des serveurs et suppression des sauvegardes'],
            ],
          },
          { t: 'def', term: 'Vraisemblance', text: 'Estimation, sur une échelle à quatre niveaux, de la facilité avec laquelle un scénario aboutit, au vu des ressources de la source de risque, des vulnérabilités exploitables et des mesures existantes.' },
          { t: 'list', items: ['**Bases de connaissances** : MITRE ATT&CK et CAPEC aident à décrire des modes opératoires réalistes et à vérifier la couverture de détection.', '**Cotation justifiée** : chaque niveau de vraisemblance s’appuie sur des éléments (failles, mesures, ressources).', '**Niveau de risque** : combinaison de la gravité (atelier 1) et de la vraisemblance.'] },
          { t: 'callout', kind: 'tip', text: 'Les scénarios restent à un niveau de description défensif : ils servent à choisir des mesures, pas à écrire un mode d’emploi d’attaque.' },
        ],
      },
      {
        id: 'atelier5',
        title: 'Atelier 5 : traiter le risque et définir le suivi',
        blocks: [
          { t: 'p', text: 'L’atelier 5 répond à : « que décide-t-on ? ». On synthétise les risques, on choisit la stratégie (réduire, transférer, éviter, accepter), on construit le **plan de traitement** et on évalue les **risques résiduels**.' },
          {
            t: 'table',
            head: ['Livrable', 'Contenu'],
            rows: [
              ['**Synthèse des scénarios de risque**', 'Niveau initial de chaque scénario (gravité × vraisemblance)'],
              ['**Stratégie de traitement**', 'Réduire, transférer, éviter ou accepter, par scénario'],
              ['**Plan de traitement**', 'Mesures, responsables, échéances, coûts'],
              ['**Risques résiduels**', 'Niveau après mesures, à faire accepter par la direction'],
              ['**Cadre de suivi**', 'Indicateurs, revues planifiées, événements déclencheurs de révision'],
            ],
          },
          { t: 'def', term: 'Risque résiduel', text: 'Niveau de risque qui subsiste après l’application du plan de traitement. Il est évalué par une nouvelle cotation de la vraisemblance et de la gravité, puis soumis à l’acceptation formelle de la direction.' },
          {
            t: 'example',
            title: 'Traiter un scénario via le prestataire',
            blocks: [
              { t: 'p', text: 'Scénario : rançongiciel via l’infogérant. Mesures : accès du prestataire par un bastion journalisé avec authentification multifacteur et durée limitée ; segmentation entre administration et production ; sauvegardes immuables testées ; exigences contractuelles et notification d’incident. La vraisemblance baisse (le chemin est plus difficile), la gravité aussi (la reprise est possible) : le risque résiduel est présenté à la direction.' },
            ],
          },
          { t: 'callout', kind: 'warn', text: 'Un plan de traitement sans responsable ni échéance n’est qu’une liste de souhaits. Le cadre de suivi garde l’analyse vivante.' },
        ],
      },
      {
        id: 'pilotage',
        title: 'Piloter une analyse EBIOS RM',
        blocks: [
          { t: 'p', text: 'La méthode ne vaut que par la façon dont elle est conduite : bons participants, bonne durée, bonne documentation, suivi dans le temps.' },
          {
            t: 'table',
            head: ['Aspect', 'Bonne pratique', 'Piège'],
            rows: [
              ['**Participants**', 'Métiers, sécurité, informatique, direction', 'Analyse faite par une seule équipe'],
              ['**Périmètre**', 'Délimité et argumenté', 'Périmètre trop large, jamais terminé'],
              ['**Scénarios**', 'Spécifiques à l’organisation', 'Scénarios génériques copiés'],
              ['**Cotation**', 'Justifiée par des hypothèses écrites', 'Chiffres sans explication'],
              ['**Validation**', 'Décision de la direction sur les risques résiduels', 'Acceptation implicite par l’équipe technique'],
              ['**Mise à jour**', 'Revue périodique et à chaque changement majeur', 'Analyse figée après la première version'],
            ],
          },
          { t: 'def', term: 'Compatibilité avec ISO 27005', text: 'EBIOS RM peut servir de démarche d’appréciation des risques d’un SMSI ISO 27001 : elle fournit les scénarios, cotations, plan de traitement et acceptation des risques résiduels attendus.' },
          { t: 'list', items: ['**Documenter** les hypothèses, les échelles et les décisions.', '**Relier** les mesures du plan à la déclaration d’applicabilité d’un SMSI.', '**Planifier** les mises à jour et les indicateurs de suivi.'] },
          { t: 'callout', kind: 'key', text: 'Une analyse de risques est un **outil de décision partagé**, pas un document de conformité rangé dans un tiroir.' },
        ],
      },
    ],
    useCases: [
      'Conduire l’analyse de risques d’un nouveau service numérique avant sa mise en production.',
      'Alimenter l’appréciation des risques d’un SMSI ISO 27001 avec des scénarios réalistes.',
      'Présenter à la direction les risques résiduels majeurs et obtenir leur acceptation formelle.',
    ],
    commonMistakes: [
      'Coter la gravité seul, sans les métiers.',
      'Oublier les initiés et se concentrer sur des attaquants extérieurs.',
      'Ignorer les parties prenantes à accès privilégié dans l’écosystème.',
      'Copier des scénarios génériques sans lien avec l’organisation.',
      'Ne jamais mettre à jour l’analyse après la première version.',
    ],
    bestPractices: [
      'Fixer la gravité avec les métiers, sur des exemples concrets.',
      'Retenir et justifier les couples source / objectif les plus pertinents.',
      'Évaluer la menace des tiers par dépendance, pénétration, maturité et confiance.',
      'Justifier chaque vraisemblance par des éléments vérifiables.',
      'Faire accepter formellement les risques résiduels par la direction et suivre le plan.',
    ],
    keyPoints: [
      'Atelier 1 : valeurs métier, événements redoutés, gravité, socle.',
      'Atelier 2 : sources de risque, objectifs visés, couples pertinents.',
      'Atelier 3 : écosystème, niveau de menace des tiers, chemins d’attaque stratégiques.',
      'Atelier 4 : scénarios opérationnels et vraisemblance.',
      'Atelier 5 : plan de traitement, risque résiduel accepté, cadre de suivi.',
    ],
  },
  practice: [
    {
      id: 'cadrage-clinique',
      kind: 'guided',
      title: 'Cadrer l’analyse d’une clinique privée',
      context: [{ t: 'p', text: 'Une clinique privée de 300 lits veut analyser les risques de son système d’information. Elle dispose d’un dossier patient informatisé, d’une facturation, d’un réseau d’imagerie médicale connecté et d’un prestataire d’infogérance avec un accès permanent. Le directeur et le médecin responsable de l’information médicale participent aux ateliers.' }],
      steps: ['Identifier les valeurs métier, leurs biens supports et trois événements redoutés.', 'Coter la gravité de chaque événement redouté avec une justification.', 'Citer des éléments du socle de sécurité à vérifier.'],
    },
    {
      id: 'ecosysteme',
      kind: 'analysis',
      title: 'Analyse : cartographier la menace de l’écosystème',
      context: [
        { t: 'p', text: 'Évaluation des parties prenantes (échelle de 1 à 4) :' },
        {
          t: 'table',
          head: ['Partie prenante', 'Dépendance', 'Pénétration', 'Maturité cyber', 'Confiance'],
          rows: [
            ['Infogérant (accès administrateur permanent)', '4', '4', '2', '2'],
            ['Éditeur du dossier patient (maintenance à distance ponctuelle)', '4', '2', '3', '3'],
            ['Laboratoire d’analyses (échanges de résultats)', '2', '2', '3', '3'],
            ['Prestataire de nettoyage', '1', '1', '1', '2'],
          ],
        },
      ],
      steps: ['Calculer le niveau de menace relatif de chaque partie prenante.', 'Classer les parties prenantes et identifier le chemin d’attaque le plus plausible.', 'Proposer des mesures pour le tiers le plus menaçant.'],
    },
    {
      id: 'plan-traitement',
      kind: 'case',
      title: 'Cas pratique : construire le plan de traitement',
      context: [{ t: 'p', text: 'Le scénario retenu est le suivant : un groupe cybercriminel compromet l’infogérant, accède au réseau de la clinique, localise les sauvegardes puis chiffre les serveurs du dossier patient. Gravité : critique. Vraisemblance estimée : forte.' }],
      steps: ['Proposer une stratégie de traitement et cinq mesures avec responsables et échéances.', 'Évaluer la gravité et la vraisemblance résiduelles après mesures.', 'Définir le cadre de suivi et ce qu’on demande à la direction.'],
    },
  ],
  questions,
  resources: [
    { title: 'La méthode EBIOS Risk Manager', source: 'ANSSI', url: 'https://cyber.gouv.fr/la-methode-ebios-risk-manager' },
    { title: 'MITRE ATT&CK', source: 'MITRE', url: 'https://attack.mitre.org/' },
    { title: 'CAPEC — Common Attack Pattern Enumeration and Classification', source: 'MITRE', url: 'https://capec.mitre.org/' },
    { title: 'ISO/IEC 27005 — Gestion des risques liés à la sécurité de l’information', source: 'ISO', url: 'https://www.iso.org/standard/80585.html' },
  ],
};
