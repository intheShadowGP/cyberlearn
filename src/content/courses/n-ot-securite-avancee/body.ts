import type { CourseBody } from '../../types';
import { questions } from './questions';

export const body: CourseBody = {
  courseId: 'n-ot-securite-avancee',
  lesson: {
    intro:
      'Sécuriser un site industriel est un travail d’architecte, d’exploitant et de responsable des risques à la fois. Il ne s’agit plus seulement de connaître Modbus ou de séparer deux réseaux : il faut démontrer un niveau de protection adapté aux conséquences physiques possibles, encadrer des intégrateurs et des fournisseurs, détecter ce qui s’écarte du fonctionnement normal et préparer la reprise. Ce cours présente la démarche IEC 62443 en pratique et les outils d’une sécurité OT mature. Il reste strictement défensif.',
    sections: [
      {
        id: 'iec62443',
        title: 'IEC 62443 en pratique',
        blocks: [
          { t: 'p', text: 'La série **ISA/IEC 62443** est le référentiel de la cybersécurité des systèmes d’automatisation et de contrôle industriels. Elle s’adresse à trois rôles : le **propriétaire de l’actif** (exploitant), l’**intégrateur** et le **fabricant**.' },
          {
            t: 'table',
            head: ['Partie', 'Objet', 'Public'],
            rows: [
              ['**62443-2-1**', 'Programme de sécurité de l’exploitant (gouvernance, risques, processus)', 'Exploitant'],
              ['**62443-3-2**', 'Évaluation des risques et conception en zones et conduits', 'Exploitant, intégrateur'],
              ['**62443-3-3**', 'Exigences techniques du système et niveaux de sécurité', 'Intégrateur'],
              ['**62443-4-1**', 'Cycle de développement sécurisé des produits', 'Fabricant'],
              ['**62443-4-2**', 'Exigences techniques des composants', 'Fabricant'],
            ],
          },
          { t: 'def', term: 'Niveaux de sécurité (SL)', text: 'Échelle de 1 à 4 selon la capacité de résistance exigée face à des attaquants de plus en plus capables. **SL-T** est le niveau visé pour une zone, **SL-A** le niveau effectivement atteint, **SL-C** la capacité des composants. L’écart entre SL-T et SL-A guide les mesures complémentaires.' },
          {
            t: 'example',
            title: 'Fixer un niveau cible',
            blocks: [
              { t: 'p', text: 'Dans une usine chimique, la zone du système instrumenté de sécurité (SIS) reçoit un SL-T de 4 : une compromission pourrait neutraliser la dernière barrière et provoquer un accident grave. La zone de bureautique reçoit un SL-T de 2. Si l’analyse montre que le SIS n’atteint aujourd’hui qu’un SL-A de 2, l’écart appelle des mesures : isolement dédié, accès restreint, écriture verrouillée.' },
            ],
          },
          { t: 'list', ordered: true, items: ['**Inventorier** les actifs et cartographier les flux.', '**Définir les zones et conduits** selon les fonctions et les conséquences.', '**Analyser les risques** par zone et fixer le SL-T.', '**Comparer** SL-T, SL-A et SL-C et traiter les écarts.', '**Gérer en continu** : surveillance, correctifs, revues.'] },
          { t: 'callout', kind: 'key', text: 'La norme décrit une **démarche** et des exigences, pas un catalogue de produits : chaque niveau cible se justifie par une analyse de risques.' },
        ],
      },
      {
        id: 'architecture',
        title: 'Architecture OT défendable',
        blocks: [
          { t: 'p', text: 'Une architecture défendable limite ce qu’un attaquant peut atteindre à partir de n’importe quel point d’entrée. Elle combine plusieurs briques.' },
          {
            t: 'table',
            head: ['Brique', 'Rôle', 'Remarque'],
            rows: [
              ['**Zones et conduits**', 'Découper le système et contrôler les flux', 'Chaque conduit a des flux précis et un pare-feu'],
              ['**DMZ industrielle**', 'Zone intermédiaire entre IT et OT', 'Historique répliqué, serveur de rebond, mises à jour relayées'],
              ['**Diode de données**', 'Flux strictement unidirectionnel de l’OT vers l’IT', 'Aucune commande ne peut remonter'],
              ['**Bastion / serveur de rebond**', 'Point unique d’accès distant', 'Authentification forte, accès à la demande, enregistrement'],
              ['**Micro-segmentation**', 'Isoler finement lignes ou équipements', 'Limite la propagation latérale'],
            ],
          },
          { t: 'def', term: 'Diode de données', text: 'Passerelle matérielle (ou logicielle) qui ne laisse passer l’information que dans un sens. Utilisée de l’OT vers l’IT, elle permet de remonter des données sans qu’aucune commande puisse revenir.' },
          { t: 'list', items: ['**Pas de réseau à plat** : une compromission se propagerait librement.', '**Flux explicites** : chaque conduit liste ses protocoles, sources et destinations.', '**Administration séparée** : comptes, postes et réseau d’administration distincts de la bureautique.'] },
          { t: 'callout', kind: 'tip', text: 'Les échanges entre le niveau 3 et le niveau 4 du modèle de Purdue existent toujours : on ne les interdit pas, on les **maîtrise** par la DMZ et des conduits filtrés.' },
        ],
      },
      {
        id: 'risque-ot',
        title: 'Analyse de risques OT',
        blocks: [
          { t: 'p', text: 'En OT, l’analyse de risques part de ce qui peut mal tourner dans le **procédé** : atteinte aux personnes, à l’environnement, aux équipements, à la production. La **conséquence maximale crédible** oriente le niveau de protection.' },
          {
            t: 'table',
            head: ['Étape', 'Contenu'],
            rows: [
              ['**Conséquences**', 'Partir des scénarios d’accident ou d’arrêt (étude de dangers, HAZOP)'],
              ['**Scénarios cyber**', 'Quelles manipulations (consigne, programme, système de sûreté) pourraient les provoquer'],
              ['**Chemins d’attaque**', 'Depuis l’IT, les accès distants, les supports amovibles, les fournisseurs'],
              ['**Vraisemblance**', 'Selon l’exposition, les capacités des attaquants et les mesures existantes'],
              ['**Traitement**', 'Mesures, niveau de sécurité cible, risque résiduel accepté par la direction'],
            ],
          },
          { t: 'def', term: 'Conséquence maximale crédible', text: 'Pire conséquence raisonnablement envisageable d’un scénario. Une conséquence pouvant blesser ou provoquer un accident majeur justifie un niveau de protection élevé même si le scénario est peu probable.' },
          { t: 'list', items: ['**MITRE ATT&CK pour les ICS** : base de techniques observées pour construire des scénarios réalistes et vérifier la couverture de détection.', '**Croiser** sûreté et cybersécurité : une manipulation cyber peut neutraliser une barrière de sûreté.', '**Systèmes instrumentés de sécurité** : traités avec le plus haut niveau de protection.'] },
          { t: 'callout', kind: 'warn', text: 'Une analyse de risques qui ignore la sûreté de fonctionnement sous-estime les scénarios les plus graves.' },
        ],
      },
      {
        id: 'detection-ot',
        title: 'Détection OT avancée',
        blocks: [
          { t: 'p', text: 'Le trafic industriel est **régulier** : mêmes équipements, mêmes cycles, mêmes commandes. Cette régularité est un atout : on peut définir un profil normal et repérer les écarts.' },
          {
            t: 'table',
            head: ['Technique', 'Principe', 'Limite'],
            rows: [
              ['**Ligne de base**', 'Profil normal des flux, équipements et commandes', 'À remettre à jour lors des changements'],
              ['**Détection d’anomalies**', 'Alerte sur l’écart par rapport au profil', 'Réglages pour limiter les fausses alertes'],
              ['**Règles sur les commandes**', 'Écriture hors SCADA, téléchargement de programme, nouvel équipement', 'Couvre les cas connus'],
              ['**Corrélation IT/OT**', 'Suivre une attaque qui passe de l’IT à l’OT', 'Demande des équipes qui collaborent'],
            ],
          },
          { t: 'def', term: 'Ligne de base OT', text: 'Description du comportement normal du réseau industriel : équipements présents, flux, protocoles, codes fonction, plages de valeurs. Elle sert de référence pour détecter les écarts.' },
          { t: 'list', items: ['**Passive d’abord** : sondes sur ports miroirs, aucune émission sur le réseau de contrôle.', '**Qualification conjointe** avec l’exploitation avant tout confinement.', '**Sources multiples** : trafic réseau, journaux de la supervision, journaux des accès distants.'] },
          { t: 'callout', kind: 'key', text: 'Une alerte sans contexte procédé est difficile à juger : la détection OT est un travail commun de la sécurité et de l’exploitation.' },
        ],
      },
      {
        id: 'fournisseurs-ot',
        title: 'Fournisseurs, intégrateurs et chaîne d’approvisionnement OT',
        blocks: [
          { t: 'p', text: 'Un site industriel dépend de fabricants, d’intégrateurs et de mainteneurs pour des équipements qui durent des décennies. La sécurité se construit aussi **par contrat** et **par la recette**.' },
          {
            t: 'table',
            head: ['Exigence', 'Contenu'],
            rows: [
              ['**Livraison durcie**', 'Comptes nominatifs, mots de passe changés, services inutiles désactivés, journalisation'],
              ['**Recette de sécurité**', 'Revue de configuration, tests, absence de comptes par défaut'],
              ['**Accès distants**', 'Par le bastion de l’exploitant, à la demande, enregistrés'],
              ['**Vulnérabilités**', 'SBOM, délais de correction, notification des incidents'],
              ['**Droit d’audit**', 'Contrôle des produits et des pratiques'],
            ],
          },
          { t: 'def', term: 'Correctif virtuel', text: 'Règle de filtrage (pare-feu industriel, système de prévention) qui bloque l’exploitation d’une faille connue quand le correctif ne peut pas être appliqué. C’est une mesure compensatoire.' },
          { t: 'list', items: ['**Cycle de développement sécurisé** du fabricant (IEC 62443-4-1).', '**Nomenclature logicielle (SBOM)** pour identifier rapidement les produits touchés par une faille.', '**Réversibilité** : récupérer sauvegardes et accès d’administration en fin de contrat.'] },
          { t: 'callout', kind: 'legal', text: 'NIS2 et la réglementation sur les opérateurs d’importance vitale demandent de prendre en compte la sécurité de la chaîne d’approvisionnement. Les exigences contractuelles en sont un moyen.' },
        ],
      },
      {
        id: 'resilience-ot',
        title: 'Résilience : reprise, fonctionnement manuel et exercices',
        blocks: [
          { t: 'p', text: 'En OT, la résilience signifie garder le procédé **sûr** et reprendre rapidement. Elle repose sur la préparation : sauvegardes, procédures, pièces et exercices.' },
          {
            t: 'table',
            head: ['Besoin', 'Mesure', 'Pourquoi'],
            rows: [
              ['Restaurer un automate', 'Sauvegardes de programmes et configurations, **hors du réseau de production**', 'Un attaquant ne peut pas les altérer'],
              ['Valider la reprise', 'Tests de restauration chronométrés', 'Version, procédure et délai éprouvés'],
              ['Continuer sans supervision', 'Procédures de fonctionnement manuel et de repli', 'Opérateurs capables de piloter en sécurité'],
              ['Remplacer un équipement', 'Matériel de rechange, contacts fournisseurs', 'Réduire le délai de reprise'],
              ['Coordonner la réponse', 'Exercices de crise sécurité, exploitation, direction', 'Contacts, décisions et dépendances vérifiés'],
            ],
          },
          { t: 'def', term: 'Système instrumenté de sécurité (SIS)', text: 'Système qui surveille des paramètres critiques et ramène le procédé à un état sûr en cas d’anomalie. C’est la dernière barrière de protection : sa neutralisation est un scénario majeur.' },
          { t: 'list', ordered: true, items: ['**Garder la sûreté** : basculer en mode manuel ou sûr si nécessaire.', '**Contenir** avec l’exploitation, sans aveugler les opérateurs.', '**Préserver** : captures, journaux, copie des programmes.', '**Rétablir** : restaurer depuis les sauvegardes validées.', '**Apprendre** : retour d’expérience, mise à jour des procédures.'] },
          { t: 'callout', kind: 'tip', text: 'Les exercices de crise se préparent avec l’exploitation et se mènent hors production ou en simulation.' },
        ],
      },
    ],
    useCases: [
      'Construire la démarche IEC 62443 d’un site de production : zones, niveaux cibles, plan d’action.',
      'Concevoir la DMZ, les accès distants et la remontée de données d’une station d’épuration.',
      'Rédiger le cahier des charges de sécurité d’un intégrateur et conduire la recette.',
    ],
    commonMistakes: [
      'Fixer un niveau de sécurité sans analyse de risques ni prise en compte de la sûreté.',
      'Garder un réseau à plat « parce que cela fonctionne ».',
      'Laisser un intégrateur livrer un système avec les comptes par défaut.',
      'Conserver les sauvegardes de programmes sur le réseau de production.',
      'Réagir à une alerte sans qualifier avec l’exploitation.',
    ],
    bestPractices: [
      'Une démarche en zones et conduits, avec niveaux cibles justifiés par les risques.',
      'DMZ industrielle, diode de données si pertinent, bastion pour tout accès distant.',
      'Analyse de risques fondée sur la conséquence maximale crédible et les scénarios cyber croisés avec la sûreté.',
      'Détection par ligne de base, qualifiée avec l’exploitation.',
      'Exigences contractuelles, recette de sécurité, sauvegardes testées et exercices réguliers.',
    ],
    keyPoints: [
      'IEC 62443 : rôles (exploitant, intégrateur, fabricant), zones, conduits, niveaux SL-T, SL-A, SL-C.',
      'Une architecture défendable combine DMZ, diode de données, bastion et micro-segmentation.',
      'En OT, le risque part du procédé et de la conséquence maximale crédible.',
      'La régularité du trafic OT permet une détection par ligne de base.',
      'La résilience se prépare : sauvegardes hors production, fonctionnement manuel, exercices.',
    ],
  },
  practice: [
    {
      id: 'concevoir-zones',
      kind: 'case',
      title: 'Cas pratique : concevoir zones et niveaux de sécurité',
      context: [{ t: 'p', text: 'Une usine de produits chimiques de 300 personnes comprend : un réseau de bureau, un serveur d’historique, une supervision, trois lignes de production pilotées par des automates, un système instrumenté de sécurité (SIS) et un poste de maintenance utilisé par un intégrateur. Aujourd’hui, tout est sur un réseau unique, et l’intégrateur dispose d’un accès distant permanent.' }],
      steps: ['Proposer les zones et conduits.', 'Fixer un niveau de sécurité cible par zone, avec justification.', 'Décrire l’accès distant et la remontée des données vers la gestion.'],
    },
    {
      id: 'analyse-chemin-ot',
      kind: 'analysis',
      title: 'Analyse : un chemin d’attaque vers une zone critique',
      context: [
        { t: 'code', lang: 'text', code: 'Observations d’une revue d’architecture :\n1. Le poste de maintenance de l’intégrateur est joignable depuis Internet par un logiciel de prise en main permanent.\n2. Ce poste est dans le même réseau que les automates des trois lignes.\n3. Le SIS partage son réseau avec les automates et accepte les téléchargements de programme depuis n’importe quel poste de ce réseau.\n4. Aucune sonde de supervision, aucune sauvegarde récente des programmes.\n5. Les journaux d’accès distants ne sont pas conservés.' },
      ],
      steps: ['Décrire le chemin d’attaque le plus grave et sa conséquence physique.', 'Proposer les mesures de prévention, dans l’ordre.', 'Proposer les mesures de détection et de reprise.'],
    },
    {
      id: 'exigences-integrateur',
      kind: 'case',
      title: 'Cas pratique : cadrer un intégrateur',
      context: [{ t: 'p', text: 'Un exploitant d’une station d’épuration lance l’appel d’offres du remplacement de sa supervision. Il veut que la sécurité soit un livrable vérifiable et non une promesse.' }],
      steps: ['Lister les exigences contractuelles de sécurité.', 'Décrire la recette de sécurité avant la mise en service.', 'Prévoir la fin de contrat et la maintenance.'],
    },
  ],
  questions,
  resources: [
    { title: 'ISA/IEC 62443 series of standards', source: 'ISA', url: 'https://www.isa.org/standards-and-publications/isa-standards/isa-iec-62443-series-of-standards' },
    { title: 'La cybersécurité des systèmes industriels', source: 'ANSSI', url: 'https://cyber.gouv.fr/publications/la-cybersecurite-des-systemes-industriels' },
    { title: 'NIST SP 800-82 Rev. 3 — Guide to OT Security', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/82/r3/final' },
    { title: 'MITRE ATT&CK for ICS', source: 'MITRE', url: 'https://attack.mitre.org/matrices/ics/' },
  ],
};
