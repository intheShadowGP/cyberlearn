import type { CourseBody } from '../../types';

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
          { t: 'callout', kind: 'key', text: "Un SIEM ne détecte que ce qu'il reçoit. La première question face à une menace est toujours : **avons-nous les journaux qui la rendraient visible ?** C'est la notion de couverture de détection." },
        ],
      },
      {
        id: 'triage',
        title: 'Trier une alerte',
        blocks: [
          {
            t: 'table',
            caption: 'Matrice de qualification',
            head: ['', 'Activité réellement malveillante', 'Activité légitime'],
            rows: [['**Alerte levée**', 'Vrai positif', 'Faux positif (bruit, à régler)'], ['**Pas d’alerte**', '**Faux négatif** (le plus dangereux)', 'Vrai négatif']],
          },
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
  ],
  questions: [
    { id: 'soc-q1', type: 'single', difficulty: 1, skills: ['i-soc-tools'], prompt: 'Quel outil collecte et corrèle les journaux de multiples sources pour générer des alertes ?', options: [{ id: 'a', text: 'Le SIEM' }, { id: 'b', text: 'Le pare-feu' }, { id: 'c', text: 'Le gestionnaire de mots de passe' }, { id: 'd', text: 'Le serveur DNS' }] },
    { id: 'soc-q2', type: 'multi', difficulty: 2, skills: ['i-soc-tools'], prompt: 'Quelles capacités offre typiquement un EDR ?', options: [{ id: 'a', text: 'Télémétrie des processus et des connexions sur le poste' }, { id: 'b', text: 'Isolement réseau d’un poste à distance' }, { id: 'c', text: 'Routage BGP' }, { id: 'd', text: 'Détection comportementale' }] },
    { id: 'soc-q3', type: 'short', difficulty: 1, skills: ['i-soc-tools'], prompt: 'Quel sigle désigne les plateformes qui automatisent les actions de réponse à l’aide de playbooks ?' },
    { id: 'soc-q4', type: 'single', difficulty: 1, skills: ['i-triage'], prompt: 'Une attaque réelle qui ne déclenche aucune alerte est :', options: [{ id: 'a', text: 'Un faux positif' }, { id: 'b', text: 'Un vrai négatif' }, { id: 'c', text: 'Un faux négatif' }, { id: 'd', text: 'Un vrai positif' }] },
    { id: 'soc-q5', type: 'truefalse', difficulty: 2, skills: ['i-triage'], prompt: 'Une validation MFA acceptée suffit à prouver qu’une connexion est légitime.' },
    { id: 'soc-q6', type: 'single', difficulty: 2, skills: ['i-triage'], prompt: 'Deux connexions d’un même compte, depuis Lyon puis Singapour, à 40 minutes d’intervalle. Comment s’appelle cette anomalie ?', options: [{ id: 'a', text: 'Déplacement impossible (impossible travel)' }, { id: 'b', text: 'Pulvérisation de mots de passe' }, { id: 'c', text: 'Déni de service' }, { id: 'd', text: 'Mouvement latéral' }] },
    { id: 'soc-q7', type: 'single', difficulty: 2, skills: ['i-attack'], prompt: 'Selon la pyramide de la douleur, quel indicateur est le plus coûteux à changer pour un attaquant ?', options: [{ id: 'a', text: 'L’empreinte d’un fichier' }, { id: 'b', text: 'Une adresse IP' }, { id: 'c', text: 'Un nom de domaine' }, { id: 'd', text: 'Ses techniques (TTP)' }] },
    { id: 'soc-q8', type: 'truefalse', difficulty: 1, skills: ['i-attack'], prompt: 'MITRE ATT&CK classe les techniques d’attaque par tactiques, c’est-à-dire par objectif de l’attaquant.' },
    { id: 'soc-q9', type: 'short', difficulty: 2, skills: ['i-attack'], prompt: 'Comment s’appelle le format générique et portable de règles de détection, convertible vers de nombreux SIEM ?' },
    { id: 'soc-q10', type: 'multi', difficulty: 2, skills: ['i-attack'], prompt: 'Lesquels sont des IOC ?', options: [{ id: 'a', text: 'L’empreinte SHA-256 d’un exécutable malveillant' }, { id: 'b', text: 'Le domaine de commande et contrôle `update-check.example`' }, { id: 'c', text: 'La technique « vol d’identifiants dans LSASS »' }, { id: 'd', text: 'Une clé de registre de persistance précise' }] },
    { id: 'soc-q11', type: 'single', difficulty: 2, skills: ['i-ir'], prompt: 'Dans quelle phase isole-t-on les machines compromises du réseau ?', options: [{ id: 'a', text: 'Préparation' }, { id: 'b', text: 'Confinement' }, { id: 'c', text: 'Retour d’expérience' }, { id: 'd', text: 'Rétablissement' }] },
    { id: 'soc-q12', type: 'truefalse', difficulty: 2, skills: ['i-ir'], prompt: 'En cas de violation de données personnelles, le RGPD prévoit une notification à l’autorité de contrôle dans un délai de 72 heures après en avoir pris connaissance, sauf risque improbable pour les personnes.' },
    { id: 'soc-q13', type: 'open', difficulty: 3, skills: ['i-ir', 'i-triage'], prompt: 'Un vendredi à 17 h, l’EDR signale le chiffrement de fichiers sur un serveur de fichiers. Décrivez vos dix premières minutes d’actions, dans l’ordre, en justifiant.' },
    { id: 'soc-q14', type: 'multi', difficulty: 2, skills: ['i-ir'], prompt: 'Quelles actions relèvent de la phase de préparation ?', options: [{ id: 'a', text: 'Rédiger et tester des playbooks' }, { id: 'b', text: 'Disposer de sauvegardes hors ligne testées' }, { id: 'c', text: 'Supprimer la persistance de l’attaquant' }, { id: 'd', text: 'Prévoir un canal de communication hors bande' }] },
    { id: 'soc-q15', type: 'open', difficulty: 2, skills: ['i-attack', 'i-soc-tools'], prompt: 'Votre SIEM reçoit uniquement les journaux du pare-feu. Expliquez quelles attaques resteront invisibles et quelles sources vous ajouteriez en priorité.' },
    { id: 'soc-q16', type: 'single', difficulty: 2, skills: ['i-triage', 'i-attack'], prompt: 'Que doit contenir la clôture d’une alerte qualifiée de faux positif ?', options: [{ id: 'a', text: 'Rien, il suffit de la fermer' }, { id: 'b', text: 'Les éléments vérifiés et la justification de la conclusion' }, { id: 'c', text: 'La suppression de la règle qui l’a générée' }, { id: 'd', text: 'Un message à l’utilisateur concerné uniquement' }] },
  ],
  resources: [
    { title: 'MITRE ATT&CK', source: 'MITRE', url: 'https://attack.mitre.org/' },
    { title: 'Sigma — règles de détection génériques', source: 'SigmaHQ', url: 'https://github.com/SigmaHQ/sigma' },
    { title: 'NIST SP 800-61 Rev. 3 — Incident Response', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/61/r3/final' },
    { title: 'Guide « Anticiper et gérer une crise d’origine cyber »', source: 'ANSSI', url: 'https://cyber.gouv.fr/publications/crise-dorigine-cyber-les-cles-dune-gestion-operationnelle-et-strategique' },
  ],
};
