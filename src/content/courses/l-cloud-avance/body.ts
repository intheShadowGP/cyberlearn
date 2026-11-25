import type { CourseBody } from '../../types';
import { questions } from './questions';

export const body: CourseBody = {
  courseId: 'l-cloud-avance',
  lesson: {
    intro:
      'Une organisation qui exploite plusieurs dizaines d’équipes dans le cloud ne peut pas contrôler chaque ressource à la main. Elle doit **concevoir** son environnement pour que la sécurité soit la configuration de départ : une structure de comptes qui limite l’impact d’une erreur, des règles exprimées en code, des identités analysées comme un graphe de droits, des clés et des secrets maîtrisés, des détections testées et un plan pour survivre à la compromission d’un compte. Ce cours est strictement défensif : il décrit les risques pour mieux les empêcher, les détecter et y répondre.',
    sections: [
      {
        id: 'landing-zone',
        title: 'Zone d’atterrissage et gouvernance multi-comptes',
        blocks: [
          { t: 'p', text: 'Un **compte** (abonnement, projet) est la frontière d’isolation la plus forte du cloud. Une **zone d’atterrissage** (landing zone) est l’architecture de départ qui organise ces comptes, y applique des règles communes et automatise la création de nouveaux environnements conformes.' },
          {
            t: 'table',
            head: ['Élément', 'Rôle', 'Exemple'],
            rows: [
              ['**Structure de comptes**', 'Séparer les environnements et les fonctions pour limiter le rayon d’explosion', 'Production, hors production, journalisation, sécurité, réseau partagé'],
              ['**Garde-fous préventifs**', 'Interdire des actions, même à un administrateur de compte', 'Interdire de désactiver la journalisation, de quitter les régions autorisées'],
              ['**Garde-fous détectifs**', 'Signaler les écarts après coup', 'Règles de conformité continues avec alerte'],
              ['**Création de comptes automatisée**', 'Chaque nouveau compte naît avec la configuration de base', 'Journalisation, détection, rôles, alertes de budget'],
              ['**Compte de secours (break-glass)**', 'Accès d’urgence très surveillé', 'Identifiants conservés hors ligne, usage alerté'],
            ],
          },
          { t: 'def', term: 'Rayon d’explosion (blast radius)', text: 'Étendue maximale de ce qu’une compromission ou une erreur peut atteindre. On le réduit en cloisonnant par comptes, en limitant les droits et en segmentant le réseau.' },
          { t: 'def', term: 'Garde-fou préventif', text: 'Règle posée au niveau de l’organisation qui définit un plafond de ce qui est permis dans les comptes membres. Elle n’accorde aucun droit, mais bloque l’action interdite, quel que soit le rôle de l’utilisateur.' },
          {
            t: 'example',
            title: 'Protéger la journalisation',
            blocks: [
              { t: 'p', text: 'Une règle d’organisation interdit « désactiver ou modifier la journalisation » dans tous les comptes de charge de travail. Si un attaquant obtient un rôle d’administrateur dans l’un d’eux, il ne peut pas couper les traces. Les journaux sont de plus écrits dans un compte dédié, en écriture seule, qu’il ne contrôle pas.' },
            ],
          },
          { t: 'callout', kind: 'key', text: 'Dans un environnement bien conçu, la sécurité ne dépend pas de la vigilance de chaque équipe : elle est **héritée** de la structure.' },
        ],
      },
      {
        id: 'policy-as-code',
        title: 'Politiques en code et conformité continue',
        blocks: [
          { t: 'p', text: 'Une règle écrite dans un document n’est pas appliquée. Une **politique en code** exprime la règle (« aucun stockage public », « chiffrement obligatoire ») dans un fichier versionné, relu, testé, puis appliquée automatiquement à chaque changement et en continu sur l’environnement.' },
          {
            t: 'table',
            head: ['Moment', 'Contrôle', 'Outils typiques'],
            rows: [
              ['**Avant le déploiement**', 'Vérifier le plan de changement dans la CI', 'Open Policy Agent (Rego), Sentinel, Checkov'],
              ['**À la création**', 'Refuser la ressource non conforme', 'Politiques d’organisation, Azure Policy en mode refus, admission Kubernetes'],
              ['**En continu**', 'Détecter dérive et modifications manuelles', 'Règles de conformité, posture (CSPM)'],
              ['**En cas d’écart**', 'Corriger automatiquement ou alerter', 'Remédiation automatique, tickets'],
            ],
          },
          { t: 'def', term: 'Dérive de configuration', text: 'Écart entre l’infrastructure réelle et son code, dû en général à une modification manuelle. Elle est détectée par comparaison régulière et corrigée dans le code, pas dans la console.' },
          { t: 'list', items: ['**Tester** chaque règle sur des cas conformes et non conformes, avant de la rendre bloquante.', '**Mesurer** les faux positifs : une règle qui bloque à tort est contournée.', '**Versionner et relire** les politiques comme du code applicatif.', '**Dater les exceptions** : propriétaire, justification, mesure compensatoire, expiration.'] },
          { t: 'callout', kind: 'warn', text: 'Un contrôle uniquement détectif n’empêche rien : le stockage public existe jusqu’à ce qu’on le corrige. Les règles critiques doivent aussi être préventives.' },
        ],
      },
      {
        id: 'identite-avancee',
        title: 'Identités : analyser les chemins d’escalade',
        blocks: [
          { t: 'p', text: 'Dans un grand environnement, ce qui compte n’est pas seulement ce qu’une identité peut faire, mais ce qu’elle peut **devenir** : une chaîne de permissions apparemment modestes peut mener à l’administration. On analyse l’environnement comme un **graphe** : qui peut assumer quel rôle, qui peut modifier quelle politique.' },
          {
            t: 'table',
            head: ['Permission sensible', 'Pourquoi', 'Mesure'],
            rows: [
              ['Créer ou modifier des politiques IAM', 'On peut s’accorder des droits', 'Réserver aux administrateurs d’identité, plafond de permissions'],
              ['Associer un rôle à un service ou une fonction', 'Exécuter du code avec les droits de ce rôle', 'Limiter les rôles qu’on peut associer'],
              ['Modifier la politique de confiance d’un rôle', 'Se rendre autorisé à l’assumer', 'Contrôle et alerte sur ces changements'],
              ['Créer des clés d’accès pour autrui', 'Créer un identifiant durable', 'Interdire par garde-fou, fédération à la place'],
              ['Rôles inter-comptes sans condition', 'Un tiers peut être trompé (député confus)', 'Identifiant externe, conditions strictes'],
            ],
          },
          { t: 'def', term: 'Limite de permissions (permission boundary)', text: 'Plafond de droits qu’une identité ne peut dépasser, quelles que soient les politiques qui lui sont attachées. Elle permet de déléguer la création de rôles sans risque d’escalade.' },
          { t: 'def', term: 'Identifiant temporaire', text: 'Jeton délivré par fédération ou par assomption de rôle, qui expire en minutes ou en heures. Un vol offre une fenêtre d’action courte, contrairement à une clé statique.' },
          { t: 'list', items: ['**Cartographier** régulièrement les droits effectifs avec un outil d’analyse de chemins.', '**Préférer** l’accès temporaire et juste-à-temps aux droits permanents.', '**Alerter** sur toute modification de politique de confiance ou création de clé.'] },
        ],
      },
      {
        id: 'donnees-cles',
        title: 'Clés de chiffrement et secrets à grande échelle',
        blocks: [
          { t: 'p', text: 'À grande échelle, on ne chiffre pas chaque donnée avec la même clé. On construit une **hiérarchie de clés** et on sépare les rôles.' },
          {
            t: 'table',
            head: ['Mécanisme', 'Principe', 'Bénéfice'],
            rows: [
              ['**Chiffrement en enveloppe**', 'Données chiffrées par une clé de données, elle-même chiffrée par une clé maîtresse', 'Rotation rapide : on rechiffre seulement les clés de données'],
              ['**Séparation des tâches**', 'Administrateurs de clés distincts des utilisateurs de clés', 'Personne ne maîtrise à la fois clé et données'],
              ['**HSM**', 'Clés générées et conservées dans un module matériel certifié', 'Les clés ne sortent pas en clair'],
              ['**Secrets dynamiques**', 'Identifiants générés à la demande, courte durée', 'Une fuite expire vite'],
              ['**Journalisation de l’usage**', 'Chaque usage de clé est tracé', 'Détection d’abus et preuves'],
            ],
          },
          { t: 'def', term: 'Chiffrement en enveloppe', text: 'Méthode où une clé de données chiffre les données et une clé maîtresse, conservée dans un service de clés, chiffre la clé de données. La clé maîtresse ne manipule jamais directement de gros volumes.' },
          { t: 'callout', kind: 'tip', text: 'Une clé gérée par le fournisseur n’empêche pas ce dernier d’y accéder techniquement. Pour une exigence de souveraineté, on combine clé du client hors infrastructure, engagements contractuels et qualification du fournisseur.' },
        ],
      },
      {
        id: 'detection-avancee',
        title: 'Ingénierie de détection cloud',
        blocks: [
          { t: 'p', text: 'Détecter, c’est écrire des **règles** à partir de comportements d’attaque, les **tester** et les **mesurer**. On s’appuie sur la matrice **ATT&CK pour le cloud** pour savoir quelles techniques sont couvertes.' },
          {
            t: 'table',
            head: ['Comportement', 'Source', 'Critère', 'Réponse'],
            rows: [
              ['Clé utilisée hors de son périmètre habituel', 'Journaux de gestion', 'Adresse ou pays inconnus, énumération de ressources', 'Désactiver la clé, vérifier'],
              ['Désactivation de la journalisation', 'Journaux de gestion', 'Arrêt ou modification de la destination', 'Alerte critique, rétablir, enquêter'],
              ['Élévation de droits', 'Journaux de gestion', 'Nouvelle politique d’administration, ajout à un groupe privilégié', 'Vérifier la demande, révoquer'],
              ['Sortie de données massive', 'Flux réseau, accès aux données', 'Volume inhabituel vers l’extérieur', 'Limiter l’accès, analyser'],
              ['Usage d’un identifiant piège', 'Honeytoken', 'Toute utilisation', 'Alerte à faible faux positif'],
            ],
          },
          { t: 'def', term: 'Honeytoken', text: 'Faux identifiant (clé, compte) sans usage légitime, déposé pour déclencher une alerte dès qu’un attaquant l’utilise. Le taux de faux positifs est très faible.' },
          { t: 'list', items: ['**Tester** chaque détection dans un environnement autorisé et documenté, par un scénario rejoué.', '**Mesurer** la précision, le délai de détection (MTTD) et la couverture ATT&CK.', '**Ajuster** les seuils : une règle bruyante est ignorée.', '**Associer** chaque alerte à une réponse écrite.'] },
          { t: 'callout', kind: 'key', text: 'Une détection utile est une règle, un test et une réponse : sans les deux derniers, elle ne protège pas.' },
        ],
      },
      {
        id: 'resilience',
        title: 'Résilience et réponse à la compromission d’un compte',
        blocks: [
          { t: 'p', text: 'Malgré les mesures préventives, un compte peut être compromis. La **résilience** consiste à limiter les dégâts, à pouvoir reprendre et à comprendre ce qui s’est passé.' },
          {
            t: 'table',
            head: ['Besoin', 'Mesure', 'Pourquoi'],
            rows: [
              ['Survivre à un rançongiciel ou à une suppression', 'Sauvegardes **immuables** dans un compte distinct', 'L’attaquant du compte principal ne peut pas les effacer'],
              ['Isoler sans détruire', 'Règle de **quarantaine** au niveau de l’organisation', 'Bloque les actions, conserve preuves et ressources'],
              ['Repérer un abus de calcul', 'Alertes de budget, restriction des régions', 'Le minage de cryptomonnaie produit un coût visible'],
              ['Reprendre l’activité', 'Plans de reprise testés, multi-régions', 'La reprise se prépare avant l’incident'],
              ['Mesurer et progresser', 'Indicateurs : MTTD, MTTR', 'Réduire le temps de l’attaquant'],
            ],
          },
          { t: 'list', ordered: true, items: ['**Isoler** : quarantaine du compte par règle d’organisation, sans suppression.', '**Révoquer** : sessions, clés, jetons ; rotation des secrets accessibles.', '**Préserver** : journaux, instantanés, empreintes.', '**Chercher la persistance** : utilisateurs, clés, rôles, règles réseau, fonctions créés par l’attaquant.', '**Reconstruire** depuis le code et les sauvegardes saines, puis vérifier.', '**Apprendre** : corriger la cause, enrichir les détections, planifier un exercice.'] },
          { t: 'callout', kind: 'warn', text: 'Ne supprimez jamais les journaux ni le compte avant d’avoir préservé les preuves : on perdrait la possibilité de comprendre et de prouver.' },
        ],
      },
    ],
    useCases: [
      'Concevoir la structure de comptes et les garde-fous d’une organisation de plusieurs dizaines d’équipes.',
      'Mettre en place la vérification des plans Terraform par des politiques en code dans la CI, avec détection de dérive.',
      'Cartographier les chemins d’escalade de privilèges d’un environnement et poser des plafonds de permissions.',
    ],
    commonMistakes: [
      'Placer toutes les charges de travail dans un seul compte, avec un rayon d’explosion maximal.',
      'Se contenter de contrôles détectifs pour des règles qui devraient être préventives.',
      'Laisser des exceptions sans propriétaire ni date d’expiration.',
      'Ne vérifier que les droits directs, sans analyser ce qu’une identité peut devenir.',
      'Stocker les sauvegardes dans le même compte que les données, modifiables par un attaquant.',
    ],
    bestPractices: [
      'Structure multi-comptes, garde-fous d’organisation et journalisation centralisée en écriture seule.',
      'Politiques en code testées, versionnées, avec exceptions datées et détection de dérive.',
      'Identifiants temporaires, plafonds de permissions et alertes sur les changements de confiance.',
      'Chiffrement en enveloppe, séparation des tâches et secrets dynamiques.',
      'Détections testées, mesurées et reliées à une réponse ; sauvegardes immuables isolées.',
    ],
    keyPoints: [
      'La sécurité s’hérite de la structure : comptes séparés et garde-fous d’organisation.',
      'Une règle qui doit empêcher doit être préventive ; le détectif complète.',
      'Les chemins d’escalade de privilèges s’analysent comme un graphe de droits.',
      'Chiffrement en enveloppe et séparation des tâches rendent la gestion des clés évolutive.',
      'Une détection se teste et se mesure ; la résilience repose sur des sauvegardes immuables et un compte isolable.',
    ],
  },
  practice: [
    {
      id: 'concevoir-landing-zone',
      kind: 'case',
      title: 'Cas pratique : concevoir la zone d’atterrissage d’une organisation',
      context: [{ t: 'p', text: 'Une organisation de 40 équipes migre vers le cloud. Aujourd’hui, tout est dans un seul compte partagé, les développeurs ont des droits d’administration, la journalisation est activée par certaines équipes seulement et les créations de comptes se font à la main.' }],
      steps: ['Proposer une structure de comptes et justifier chaque séparation.', 'Définir les garde-fous préventifs et détectifs.', 'Décrire comment automatiser la création de comptes conformes et la journalisation centralisée.'],
    },
    {
      id: 'chemin-escalade',
      kind: 'analysis',
      title: 'Analyse : repérer un chemin d’escalade de privilèges',
      context: [
        { t: 'p', text: 'Extrait d’un audit des droits d’identités de développement (environnement de test) :' },
        {
          t: 'table',
          head: ['Identité', 'Permission', 'Détail'],
          rows: [
            ['dev-pipeline', 'Associer des rôles à des fonctions', 'Peut associer n’importe quel rôle du compte'],
            ['dev-pipeline', 'Créer et lancer des fonctions', 'Sans restriction'],
            ['rôle « admin-test »', 'Droits d’administration du compte de test', 'Politique de confiance : « tout rôle du compte »'],
            ['dev-lecteur', 'Modifier la politique de confiance de rôles', 'Sur les rôles du compte de test'],
          ],
        },
      ],
      steps: ['Décrire les chemins par lesquels une identité peut obtenir les droits d’administration.', 'Proposer des corrections (plafonds, restrictions, garde-fous).', 'Indiquer les détections à mettre en place sur ces changements.'],
    },
    {
      id: 'scenario-compromission',
      kind: 'case',
      title: 'Cas pratique : plan de réponse à la compromission d’un compte',
      context: [{ t: 'p', text: 'Une alerte de budget signale, en pleine nuit, la création de nombreuses machines coûteuses dans des régions jamais utilisées. Les journaux de gestion montrent des appels d’une clé d’accès d’un compte de service depuis une adresse inconnue.' }],
      steps: ['Décrire les actions d’isolement et de préservation, dans l’ordre.', 'Indiquer comment chercher la persistance laissée par l’attaquant.', 'Proposer les mesures de prévention, de détection et de résilience à mettre en place ensuite.'],
    },
  ],
  questions,
  resources: [
    { title: 'AWS Well-Architected Framework — Security Pillar', source: 'AWS', url: 'https://docs.aws.amazon.com/wellarchitected/latest/security-pillar/welcome.html' },
    { title: 'Microsoft Cloud Adoption Framework — Landing zones', source: 'Microsoft Learn', url: 'https://learn.microsoft.com/azure/cloud-adoption-framework/ready/landing-zone/' },
    { title: 'Open Policy Agent — Policy Language (Rego)', source: 'Open Policy Agent', url: 'https://www.openpolicyagent.org/docs/latest/policy-language/' },
    { title: 'MITRE ATT&CK — Cloud Matrix', source: 'MITRE', url: 'https://attack.mitre.org/matrices/enterprise/cloud/' },
    { title: 'CIS Benchmarks (AWS, Azure, GCP)', source: 'Center for Internet Security', url: 'https://www.cisecurity.org/cis-benchmarks' },
  ],
};
