import type { CourseBody } from '../../types';
import { questions } from './questions';

export const body: CourseBody = {
  courseId: 'i-soc-detection',
  lesson: {
    intro:
      "Aucune organisation n'empêche toutes les intrusions. Ce qui distingue un incident maîtrisé d'une catastrophe, c'est le délai entre l'intrusion et sa détection, puis la qualité de la réponse. Le Security Operations Center (SOC) existe pour réduire ce délai : collecter les traces, détecter les comportements anormaux, qualifier les alertes et coordonner la réaction.",
    sections: [
      {
        id: 'soc',
        title: 'Le SOC et ses outils',
        blocks: [
          { t: 'def', term: 'SOC', text: "Équipe et dispositif chargés de surveiller en continu le système d'information, de détecter les incidents de sécurité et d'y répondre. Les analystes sont souvent organisés en niveaux : N1 (triage), N2 (investigation), N3 (expertise, chasse aux menaces)." },
          {
            t: 'table',
            head: ['Outil', 'Rôle', 'Exemples de données'],
            rows: [
              ['**SIEM**', 'Collecte, normalise, stocke et corrèle les journaux ; génère des alertes', 'Pare-feu, AD, proxy, VPN, applications'],
              ['**EDR**', 'Agent sur les postes et serveurs : télémétrie fine, détection comportementale, isolement à distance', 'Processus, fichiers, registre, connexions'],
              ['**NDR / IDS**', 'Analyse du trafic réseau', 'Flux, métadonnées, signatures'],
              ['**SOAR**', 'Automatise les actions répétitives (enrichissement, blocage) via des playbooks', 'Tickets, API des outils'],
            ],
          },
          { t: 'callout', kind: 'key', text: "Un SIEM ne détecte que ce qu'il reçoit. La première question face à une menace est toujours : **avons-nous les journaux qui la rendraient visible ?** C'est la couverture de détection. Corollaire : **l'absence d'alerte — ou de journal — ne prouve pas l'absence d'activité** ; la source peut ne pas être collectée, la règle peut manquer, ou l'attaquant peut avoir désactivé ou effacé les traces." },
        ],
      },
      {
        id: 'triage',
        title: 'Trier une alerte',
        blocks: [
          { t: 'def', term: 'Événement, alerte, incident, compromission', text: "Quatre niveaux à ne pas confondre. Un **événement** est une entrée de journal brute (une connexion, la création d’un processus). Une **alerte** est un événement — ou une corrélation d’événements — qu’une règle juge digne d’attention. Un **incident** est une alerte **qualifiée** qui nécessite une réponse. Une **compromission confirmée** est un incident où l’on a la **preuve** qu’un attaquant a réussi. Une alerte n’est donc pas un incident, et un incident n’est pas forcément une compromission." },
          {
            t: 'table',
            caption: 'Matrice de qualification',
            head: ['', 'Activité réellement malveillante', 'Activité légitime'],
            rows: [['**Alerte levée**', 'Vrai positif', 'Faux positif (bruit, à régler)'], ['**Pas d’alerte**', '**Faux négatif** (le plus dangereux)', 'Vrai négatif']],
          },
          { t: 'def', term: 'Précision et rappel', text: "Deux mesures de la qualité d’une détection. La **précision** = vrais positifs / (vrais positifs + faux positifs) : quelle part des alertes est justifiée. Le **rappel** (sensibilité) = vrais positifs / (vrais positifs + faux négatifs) : quelle part des attaques réelles est effectivement détectée. Les deux évoluent souvent à l’inverse l’une de l’autre : une règle très sensible (rappel élevé) produit plus de faux positifs (précision basse), et inversement. Régler une règle, c’est chercher ce compromis." },
          { t: 'list', ordered: true, items: ['**Comprendre** la règle qui a déclenché l’alerte et ce qu’elle cherche.', '**Enrichir** : qui est l’utilisateur, quel est le rôle de la machine, l’adresse est-elle connue (réputation, géolocalisation, inventaire) ?', '**Contextualiser** : que s’est-il passé juste avant et juste après sur cet hôte et ce compte ?', '**Qualifier** : vrai ou faux positif, gravité (impact × probabilité), périmètre.', '**Décider** : clore avec justification, escalader, ou déclencher la réponse à incident.'] },
          {
            t: 'example',
            title: 'Alerte « connexion VPN depuis un pays inhabituel »',
            blocks: [
              { t: 'p', text: "Compte `l.moreau`, connexion VPN réussie depuis une adresse au Brésil à 03:12, alors que la même personne s'est connectée depuis Lyon à 18:40 la veille. Enrichissement : MFA validée par notification « push » acceptée ; aucun déplacement déclaré." },
              { t: 'p', text: "Lecture : déplacement impossible en 8 h et validation MFA nocturne. Hypothèse forte : identifiants volés et **fatigue MFA** (l'utilisateur a accepté une notification sans réfléchir). Qualification : vrai positif probable, gravité élevée. Action : révoquer les sessions, réinitialiser le mot de passe, contacter l'utilisateur, examiner l'activité de la session." },
            ],
          },
        ],
      },
      {
        id: 'attack',
        title: 'IOC, TTP, MITRE ATT&CK et Sigma',
        blocks: [
          { t: 'def', term: 'IOC (indicateur de compromission)', text: "Artefact technique observable : empreinte de fichier, adresse IP, nom de domaine, clé de registre. Facile à partager, mais **facile à changer** pour l'attaquant." },
          { t: 'def', term: 'TTP', text: "Tactiques, techniques et procédures : la **manière d'opérer** de l'attaquant (par exemple « vol d'identifiants dans la mémoire de LSASS »). Bien plus coûteuses à changer : détecter des TTP est plus durable." },
          { t: 'p', text: "La « pyramide de la douleur » (David Bianco) classe les indicateurs : changer une empreinte ne coûte rien à l'attaquant ; changer ses techniques lui coûte beaucoup." },
          { t: 'p', text: "**MITRE ATT&CK** est une base de connaissances publique des tactiques (le *pourquoi* : accès initial, persistance, élévation de privilèges, mouvement latéral, exfiltration…) et des techniques (le *comment*, par exemple T1059.001 PowerShell). Elle sert de langage commun pour décrire une attaque et mesurer sa couverture de détection." },
          { t: 'code', lang: 'yaml', caption: 'Règle Sigma : PowerShell lancé par une application Office', code: "title: PowerShell lancé par une application Office\nstatus: stable\nlogsource:\n  product: windows\n  category: process_creation\ndetection:\n  selection:\n    ParentImage|endswith:\n      - '\\\\winword.exe'\n      - '\\\\excel.exe'\n      - '\\\\outlook.exe'\n    Image|endswith: '\\\\powershell.exe'\n  condition: selection\nlevel: high\ntags:\n  - attack.execution\n  - attack.t1059.001" },
          { t: 'p', text: "**Sigma** est un format générique de règles de détection, convertible vers la plupart des SIEM. Écrire ses règles en Sigma les rend portables et partageables." },
        ],
      },
      {
        id: 'ir',
        title: 'La réponse à incident',
        blocks: [
          { t: 'diagram', id: 'ir-lifecycle', caption: 'Phases de la gestion d’incident', alt: 'Préparation, détection et analyse, confinement, éradication, rétablissement, retour d’expérience, puis retour à la préparation.' },
          {
            t: 'table',
            head: ['Phase', 'Objectif', 'Exemples d’actions'],
            rows: [
              ['Préparation', 'Être prêt avant l’incident', 'Playbooks, contacts, journaux, sauvegardes hors ligne, exercices'],
              ['Détection et analyse', 'Confirmer et comprendre', 'Qualification, périmètre, chronologie, collecte de preuves'],
              ['Confinement', 'Arrêter la propagation', 'Isoler des machines, désactiver des comptes, bloquer des flux'],
              ['Éradication', 'Retirer la menace', 'Supprimer la persistance, corriger la vulnérabilité exploitée'],
              ['Rétablissement', 'Revenir au fonctionnement normal', 'Restauration, surveillance renforcée'],
              ['Retour d’expérience', 'Apprendre', 'Causes racines, nouvelles règles de détection, plan d’action'],
            ],
          },
          { t: 'callout', kind: 'warn', text: "Agir trop vite peut détruire des preuves ou alerter l'attaquant, qui accélère alors. Agir trop lentement laisse l'attaque progresser. Le confinement se décide en connaissant le périmètre, sauf urgence (chiffrement en cours)." },
          { t: 'callout', kind: 'legal', title: 'Obligations', text: "Selon le contexte : notification à la CNIL sous 72 h en cas de violation de données personnelles (RGPD, art. 33), notification des incidents importants par les entités soumises à NIS2, dépôt de plainte. En France, le CERT-FR et le dispositif cybermalveillance.gouv.fr peuvent être sollicités." },
        ],
      },
      {
        id: 'sources',
        title: 'Sources de journaux et couverture de détection',
        blocks: [
          { t: 'p', text: 'Une règle de détection ne vaut que par la **donnée** qu’elle exploite : si la source n’est pas collectée, si les horloges divergent ou si les journaux sont incomplets, la meilleure règle ne se déclenchera jamais. Construire une détection, c’est d’abord choisir les bonnes sources.' },
          {
            t: 'table',
            head: ['Source', 'Ce qu’elle apporte', 'Exemples d’événements'],
            rows: [
              ['**Journal Sécurité Windows**', 'Authentifications, comptes, groupes, processus', '4624 (ouverture de session), 4625 (échec), 4688 (création de processus), 4720 (création de compte), 4732 (ajout à un groupe local)'],
              ['**Sysmon / EDR**', 'Processus et leur parenté, connexions réseau, fichiers créés', 'Création de processus, connexion sortante, chargement d’image'],
              ['**DNS et proxy web**', 'Destinations contactées par les postes', 'Domaines rares ou récents, téléchargements, volumes anormaux'],
              ['**Identité cloud et messagerie**', 'Connexions, consentements, règles de transfert', 'Connexion à risque, nouvelle règle de transfert, accord d’une application'],
              ['**Pare-feu et VPN**', 'Flux et accès distants', 'Refus répétés, connexion depuis un pays inhabituel'],
            ],
          },
          { t: 'def', term: 'Normalisation', text: 'Transformation de journaux de formats différents en **champs communs** (utilisateur, hôte, adresse source, action). Elle permet d’écrire une règle indépendante de la source et de corréler des événements venus de systèmes variés.' },
          { t: 'list', items: ['**Horodatage** : horloges synchronisées (NTP) et fuseau cohérent (de préférence UTC), sans quoi la chronologie est fausse.', '**Complétude** : une source qui devient silencieuse est elle-même un signal (collecteur arrêté, journalisation désactivée).', '**Intégrité** : journaux envoyés hors de la machine, droits restreints, pour qu’un attaquant ne puisse pas les effacer.', '**Rétention** : durée suffisante pour enquêter rétroactivement (souvent plusieurs mois) et répondre aux obligations.', '**Coût** : on ne collecte pas « tout » ; on choisit les sources selon les techniques à couvrir.'] },
          {
            t: 'example',
            title: 'Cartographier une technique, sa source et sa règle',
            blocks: [
              { t: 'p', text: 'Technique visée : création d’un compte local (T1136.001, persistance). Source nécessaire : journal Sécurité des postes (événement 4720). Règle : Sigma sur 4720 puis 4732. État de la couverture : **couverte** si la source est collectée et la règle testée ; **non couverte** si le journal des postes n’est pas envoyé au SIEM, même si la règle existe.' },
              { t: 'p', text: 'Cette cartographie « technique → source → règle → état » se tient à jour : elle indique où investir (nouvelle source, nouvelle règle) et sert à rendre compte de la couverture de détection.' },
            ],
          },
          { t: 'callout', kind: 'key', text: 'Une détection manquante vient souvent d’une **donnée manquante**, pas d’une règle mal écrite. Surveillez la santé de la collecte comme vous surveillez les menaces.' },
        ],
      },
      {
        id: 'ingenierie',
        title: 'Ingénierie de détection et indicateurs du SOC',
        blocks: [
          { t: 'p', text: 'Une règle est un petit produit logiciel : elle se conçoit, se teste, se déploie, se règle et se retire. Cette discipline s’appelle l’**ingénierie de détection**. Elle évite à la fois les angles morts et la fatigue d’alerte.' },
          { t: 'list', ordered: true, items: ['**Hypothèse** : quelle technique, quelle trace attendue, dans quelle source.', '**Données** : la source existe-t-elle, avec les champs nécessaires ?', '**Écriture** : règle en Sigma, rattachée à une technique ATT&CK et à un niveau de gravité.', '**Test** : rejouer l’activité visée en laboratoire, puis appliquer la règle à des données historiques pour estimer le bruit.', '**Déploiement progressif** : mode observation avant l’alerte réelle, puis notification aux analystes.', '**Revue** : mesurer la précision, ajuster, retirer les règles obsolètes.'] },
          {
            t: 'table',
            head: ['Indicateur', 'Définition', 'Lecture'],
            rows: [
              ['**MTTD** (délai moyen de détection)', 'Temps entre le début d’une activité malveillante et sa détection', 'Mesure la capacité à voir vite une attaque'],
              ['**MTTR** (délai moyen de réponse)', 'Temps entre la détection et la réponse (confinement, résolution selon la définition retenue)', 'Mesure la capacité à agir vite'],
              ['**Précision d’une règle**', 'Part des alertes qui sont des vrais positifs', 'Une précision basse alimente la fatigue d’alerte'],
              ['**Couverture ATT&CK**', 'Part des techniques prioritaires couvertes par une source et une règle testées', 'Oriente les investissements'],
              ['**Charge par analyste**', 'Alertes traitées par personne et par poste de travail', 'Un volume trop élevé dégrade la qualité du triage'],
            ],
          },
          { t: 'def', term: 'Fatigue d’alerte', text: 'Désensibilisation des analystes face à un flux d’alertes trop bruyant : les vraies alertes finissent par être ignorées. Elle se traite en réglant les règles (exclusions documentées), en regroupant les alertes liées et en automatisant l’enrichissement.' },
          { t: 'list', items: ['**Exclusions documentées** : chaque exception est justifiée, datée et réexaminée.', '**SOAR et playbooks** : automatiser l’enrichissement et les actions peu risquées ; garder une décision humaine pour les actions à fort impact (isoler un serveur critique).', '**Relève** : un journal de passation entre équipes évite de perdre le fil des enquêtes en cours.'] },
          { t: 'callout', kind: 'warn', text: 'Une exclusion trop large crée un **angle mort** qu’un attaquant peut exploiter. Plus une exception est vaste, plus elle doit être justifiée et surveillée.' },
        ],
      },
    ],
    useCases: [
      'Analyste N1 : qualifier en quelques minutes une alerte de connexion anormale grâce à l’enrichissement.',
      'Ingénieur détection : écrire des règles Sigma alignées sur les techniques ATT&CK prioritaires.',
      'Responsable d’incident : piloter les phases de confinement et de rétablissement après un rançongiciel.',
      'RSSI : mesurer la couverture de détection face aux techniques des groupes qui ciblent son secteur.',
    ],
    commonMistakes: [
      'Clore une alerte comme faux positif sans justification écrite.',
      'Bloquer uniquement l’adresse IP de l’attaquant (IOC) sans rechercher sa technique (TTP).',
      'Éteindre ou réinstaller immédiatement une machine compromise, détruisant les preuves.',
      'Ne pas régler les règles bruyantes : la fatigue d’alerte fait manquer les vraies.',
      'Communiquer sur l’incident via une messagerie que l’attaquant contrôle peut-être.',
    ],
    bestPractices: [
      'Documenter chaque qualification : éléments vérifiés, conclusion, décision.',
      'Prioriser la détection des TTP courantes (ATT&CK) plutôt que de collectionner des IOC.',
      'Maintenir des playbooks testés par des exercices réguliers.',
      'Prévoir un canal de communication hors bande pour la gestion de crise.',
      'Transformer chaque incident en nouvelles règles de détection.',
    ],
    keyPoints: [
      'SIEM : collecte et corrélation ; EDR : télémétrie et action sur les postes ; SOAR : automatisation.',
      'Le faux négatif est le cas le plus dangereux : il faut mesurer sa couverture.',
      'Les TTP sont plus durables à détecter que les IOC.',
      'Préparation, détection, confinement, éradication, rétablissement, retour d’expérience.',
    ],
  },
  practice: [
    {
      id: 'chasse-ssh',
      kind: 'simulation',
      title: 'Laboratoire : chasse dans les journaux d’authentification SSH',
      context: [{ t: 'p', text: 'Un serveur exposé produit un journal `auth.log` fictif de plusieurs centaines de lignes. Filtrez, comptez et identifiez l’attaque réussie.' }],
      steps: ['Repérer les adresses générant le plus d’échecs.', 'Identifier un succès suspect.', 'Proposer des actions de confinement.'],
      labId: 'log-hunt-lab',
    },
    {
      id: 'sigma-ecrire',
      kind: 'guided',
      title: 'Écrire une règle Sigma',
      context: [{ t: 'p', text: 'Vous voulez détecter la création d’un compte local suivie de son ajout au groupe Administrateurs (événements Windows 4720 puis 4732).' }],
      steps: ['Choisir la source de journaux (logsource).', 'Écrire la sélection sur l’événement 4732 pour le groupe Administrateurs.', 'Associer la technique ATT&CK correspondante et un niveau.'],
    },
    {
      id: 'couverture-detection',
      kind: 'analysis',
      title: 'Analyse : mesurer la couverture de détection d’un SOC',
      context: [
        { t: 'code', lang: 'text', code: 'Sources collectées : pare-feu, VPN, journal Sécurité des contrôleurs de domaine\nSources absentes : postes de travail (journal Sécurité, Sysmon), DNS, proxy web, messagerie\nTechniques à couvrir :\n A. Hameçonnage avec pièce jointe\n B. PowerShell lancé par une application Office\n C. Création d’un compte local sur un poste\n D. Vol d’identifiants dans la mémoire de LSASS\n E. Mouvement latéral par partage administratif\n F. Exfiltration vers un service de stockage en ligne' },
      ],
      steps: ['Indiquer, pour chaque technique, si elle est couverte, partiellement couverte ou non couverte, avec la source de journaux nécessaire.', 'Classer les sources à ajouter par priorité et justifier.', 'Proposer deux indicateurs pour suivre l’amélioration de la couverture.'],
    },
  ],
  questions,
  resources: [
    { title: 'MITRE ATT&CK', source: 'MITRE', url: 'https://attack.mitre.org/' },
    { title: 'Sigma — règles de détection génériques', source: 'SigmaHQ', url: 'https://github.com/SigmaHQ/sigma' },
    { title: 'NIST SP 800-61 Rev. 3 — Incident Response', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/61/r3/final' },
    { title: 'Guide « Anticiper et gérer une crise d’origine cyber »', source: 'ANSSI', url: 'https://cyber.gouv.fr/publications/crise-dorigine-cyber-les-cles-dune-gestion-operationnelle-et-strategique' },
  ],
};
