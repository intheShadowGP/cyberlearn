import type { CourseBody } from '../../types';
import { questions } from './questions';

export const body: CourseBody = {
  courseId: 'a-compilation-memoire-execution',
  lesson: {
    intro:
      "Un programme n'est pas un objet magique : c'est du texte transformé par une chaîne d'outils en un fichier binaire, que le système charge en mémoire pour en faire un processus. Chaque étape de ce parcours a ses propres risques : un binaire dont on ne connaît pas l'origine, une bibliothèque chargée au mauvais endroit, un tampon qui déborde, une adresse prévisible. Ce cours suit un programme du code source à son exécution, pour comprendre d'où viennent les vulnérabilités mémoire, quelles protections existent, et comment observer un binaire inconnu sans prendre de risque. Il prépare les modules sur le code (G) et l'analyse de maliciels (K).",
    sections: [
      {
        id: 'chaine',
        title: 'La chaîne de compilation',
        blocks: [
          { t: 'p', text: "Un programme en C passe par quatre étapes avant de pouvoir s'exécuter. Chaque outil prend en entrée la sortie du précédent." },
          { t: 'list', ordered: true, items: ['Le **préprocesseur** traite les directives (`#include`, `#define`) et produit un source complet.', 'Le **compilateur** traduit ce source en **assembleur**, la forme lisible des instructions du processeur.', "L'**assembleur** transforme ce texte en instructions machine : c'est le **fichier objet**, encore incomplet.", "L'**éditeur de liens** relie les fichiers objets et les bibliothèques pour produire l'**exécutable**."] },
          { t: 'def', term: 'Assembleur', text: "Écriture lisible des instructions machine (`mov`, `add`, `call`…). Il dépend de l'architecture du processeur (x86-64, ARM) et sert de langage commun pour le désassemblage et l'analyse des binaires." },
          {
            t: 'table',
            caption: 'Édition de liens statique et dynamique',
            head: ['Mode', 'Principe', 'Avantage', 'Inconvénient'],
            rows: [
              ['Statique', 'Les bibliothèques sont copiées dans l’exécutable', 'Autonome, simple à déployer', 'Plus gros ; corriger une bibliothèque impose de recompiler'],
              ['Dynamique', 'Les bibliothèques (`.so`, `.dll`) sont chargées à l’exécution', 'Partagées, corrigibles sans recompiler', 'Dépend de ce qui est chargé et d’où'],
            ],
          },
          { t: 'def', term: 'Symboles de débogage', text: "Informations (noms de fonctions, de variables, numéros de ligne) conservées dans le binaire pour faciliter le débogage. Les retirer (`strip`) allège le fichier et complique l'analyse, sans changer le comportement." },
          { t: 'callout', kind: 'info', text: "Le code source n'est pas dans l'exécutable. À partir d'un binaire, on ne retrouve que des instructions : le désassemblage les rend lisibles, la décompilation tente de reconstituer un code de haut niveau, sans les noms ni les commentaires d'origine." },
        ],
      },
      {
        id: 'format',
        title: 'Le format des exécutables',
        blocks: [
          { t: 'p', text: "Un exécutable n'est pas un bloc brut d'instructions : c'est un fichier structuré, que le système sait lire. Chaque famille de systèmes a son format." },
          {
            t: 'table',
            head: ['Format', 'Système', 'Signature de début'],
            rows: [
              ['ELF', 'Linux, la plupart des Unix', '`7F 45 4C 46` (« .ELF »)'],
              ['PE', 'Windows (`.exe`, `.dll`)', '`4D 5A` (« MZ »)'],
              ['Mach-O', 'macOS, iOS', '`CF FA ED FE` (variante 64 bits)'],
            ],
          },
          {
            t: 'table',
            caption: 'Sections usuelles d’un exécutable',
            head: ['Section', 'Contenu', 'Droits habituels'],
            rows: [
              ['.text', 'Le code (instructions)', 'Lecture, exécution'],
              ['.rodata', 'Constantes, chaînes de caractères', 'Lecture seule'],
              ['.data', 'Variables globales initialisées', 'Lecture, écriture'],
              ['.bss', 'Variables globales non initialisées', 'Lecture, écriture'],
            ],
          },
          {
            t: 'example',
            title: 'Reconnaître un binaire ELF',
            blocks: [
              { t: 'code', lang: 'text', code: '00000000  7f 45 4c 46 02 01 01 00  00 00 00 00 00 00 00 00  |.ELF............|\n00000010  03 00 3e 00 01 00 00 00  ...' },
              { t: 'p', text: "Les quatre premiers octets sont la signature : `7F` puis les codes ASCII de `E`, `L`, `F`. L'octet suivant (`02`) indique un format 64 bits, et `3e` plus loin désigne l'architecture x86-64. Un fichier nommé `rapport.pdf` qui commencerait ainsi serait un exécutable déguisé." },
            ],
          },
          { t: 'def', term: 'Table des imports', text: "Liste des fonctions de bibliothèques qu'un programme utilise (fichiers, réseau, chiffrement, processus). Elle donne un premier aperçu des capacités d'un binaire inconnu, sans l'exécuter." },
        ],
      },
      {
        id: 'chargement',
        title: 'Du fichier au processus : le chargement',
        blocks: [
          { t: 'p', text: "Quand on lance un programme, le noyau (appel système `execve` sous Linux, `CreateProcess` sous Windows) crée un processus puis le **chargeur** prépare son exécution." },
          { t: 'list', ordered: true, items: ["Le noyau lit l'en-tête de l'exécutable et vérifie son format.", "Il crée l'espace d'adressage et y **mappe** les segments (code, données) avec leurs droits.", 'Le chargeur dynamique charge les bibliothèques demandées et **résout** les symboles.', "L'exécution commence au **point d'entrée** du programme."] },
          {
            t: 'table',
            caption: 'Où se cache le risque au chargement',
            head: ['Mécanisme', 'Système', 'Risque'],
            rows: [
              ['`LD_PRELOAD`, chemins de bibliothèques', 'Linux', 'Forcer le chargement d’une bibliothèque contrôlée avant les autres'],
              ['Ordre de recherche des DLL', 'Windows', 'DLL du dossier du programme chargée à la place de la vraie (détournement de DLL)'],
              ['Variable `PATH`', 'Les deux', 'Lancer un programme du même nom placé dans un dossier prioritaire'],
            ],
          },
          { t: 'def', term: 'Détournement de DLL (DLL hijacking)', text: "Technique qui exploite l'ordre dans lequel Windows cherche les bibliothèques : une DLL malveillante placée au bon endroit est chargée par un programme légitime, qui exécute alors le code de l'attaquant avec ses propres droits." },
          { t: 'callout', kind: 'warn', text: "Un programme légitime, signé, peut servir de véhicule à du code malveillant s'il charge une bibliothèque qu'on lui impose. Maîtriser les droits des dossiers d'installation et surveiller les chargements anormaux fait partie de la défense." },
        ],
      },
      {
        id: 'memoire',
        title: 'Pile, tas et erreurs de gestion mémoire',
        blocks: [
          { t: 'p', text: "Pendant l'exécution, un programme utilise surtout deux zones. La **pile** (stack) contient, pour chaque appel de fonction, les variables locales, les paramètres et l'**adresse de retour** : l'endroit où reprendre quand la fonction se termine. Le **tas** (heap) contient les données dont la taille ou la durée de vie ne sont connues qu'à l'exécution." },
          { t: 'def', term: 'Débordement de tampon', text: "Écriture de plus de données que la zone réservée, qui écrase ce qui la suit en mémoire. Sur la pile, cela peut modifier l'adresse de retour et détourner l'exécution." },
          { t: 'def', term: 'Utilisation après libération (use-after-free)', text: "Utilisation d'une zone du tas après qu'elle a été rendue au système. La zone peut avoir été réattribuée : le programme lit ou écrit des données qui ne sont plus les siennes." },
          {
            t: 'example',
            title: 'Une copie sans contrôle de taille',
            blocks: [
              { t: 'code', lang: 'c', code: 'void saluer(const char *saisie) {\n    char nom[16];\n    strcpy(nom, saisie);        /* aucune vérification de taille */\n    printf("Bonjour %s\\n", nom);\n}' },
              { t: 'p', text: "Le tableau `nom` réserve 16 octets, mais `strcpy` copie tout ce qu'elle reçoit. Une saisie de 40 caractères écrase les octets voisins sur la pile, jusqu'à l'adresse de retour. La correction consiste à utiliser une copie bornée et à vérifier les tailles avant toute copie." },
            ],
          },
          { t: 'callout', kind: 'key', text: "Ces erreurs sont surtout fréquentes dans les langages où le programmeur gère lui-même la mémoire, comme C et C++. Une part importante des vulnérabilités graves publiées par les grands éditeurs relève de la sécurité mémoire." },
        ],
      },
      {
        id: 'execution',
        title: 'Protections d’exécution et langages sûrs',
        blocks: [
          { t: 'p', text: "Comme les erreurs mémoire sont difficiles à éradiquer, les compilateurs et les systèmes ajoutent des protections qui rendent leur exploitation plus coûteuse. Aucune n'est absolue ; leur combinaison compte." },
          {
            t: 'table',
            head: ['Protection', 'Principe', 'Limite'],
            rows: [
              ['Canari de pile', 'Une valeur secrète placée avant l’adresse de retour, vérifiée à la sortie de la fonction', 'Peut être contournée si la valeur fuit'],
              ['NX / DEP', 'Les pages de données ne sont pas exécutables', 'Contournée par la réutilisation de code existant (ROP)'],
              ['ASLR et PIE', 'Les adresses changent à chaque lancement', 'Affaiblie par les fuites d’adresses'],
              ['Protection du flot de contrôle', 'Vérifie que les sauts et retours visent des cibles légitimes', 'Dépend du matériel et du compilateur'],
            ],
          },
          { t: 'def', term: 'ROP (return-oriented programming)', text: "Technique qui enchaîne de petits fragments de code déjà présents en mémoire, chacun terminé par un retour, pour réaliser des actions sans injecter de code nouveau. Elle contourne NX." },
          { t: 'def', term: 'Langage à mémoire sûre', text: "Langage qui empêche par conception les accès hors bornes et les usages après libération : par vérification à l'exécution (Java, C#, Go) ou par des règles vérifiées à la compilation (Rust, hors blocs `unsafe`)." },
          { t: 'callout', kind: 'info', text: "Un langage à mémoire sûre supprime une famille de failles, mais pas les erreurs de logique, d'authentification, les injections ou les dépendances vulnérables. C'est un gain majeur, pas une garantie." },
        ],
      },
      {
        id: 'observation',
        title: 'Observer un binaire inconnu',
        blocks: [
          { t: 'p', text: "Face à un exécutable dont on ignore l'origine, on procède du plus sûr au plus informatif : d'abord sans l'exécuter, puis, seulement dans un environnement isolé, en l'exécutant." },
          {
            t: 'table',
            head: ['Étape', 'Objectif', 'Outils usuels'],
            rows: [
              ['Statique', 'Identifier le type réel, l’empreinte, les chaînes, les imports, les sections', '`file`, hash, `strings`, `readelf`, lecteurs de PE'],
              ['Dynamique', 'Observer les actions : fichiers, registre, réseau, processus, appels système', '`strace`, Process Monitor, capture réseau, débogueur'],
            ],
          },
          { t: 'def', term: 'Entropie', text: "Mesure du désordre des octets d'un fichier. Un binaire compressé ou chiffré (packé) a une entropie proche du maximum et peu de texte lisible, ce qui signale souvent une tentative de masquer son contenu." },
          { t: 'list', items: ["Travailler dans une **machine virtuelle jetable**, sans accès au réseau de production, avec un instantané avant l'exécution.", 'Contrôler ou couper le réseau ; ne jamais utiliser un compte aux droits élevés.', 'Noter les empreintes et les indicateurs observés pour les partager.', "Ne jamais exécuter un échantillon sur son poste habituel."] },
          { t: 'callout', kind: 'tip', text: "Cette méthode est celle de l'analyse de maliciels (module K) : on va du simple vers l'invasif, et l'on s'arrête dès que l'on a de quoi décider." },
        ],
      },
    ],
    useCases: [
      "Lire l'en-tête d'un fichier pour déterminer son vrai format (ELF, PE) avant de décider de l'ouvrir.",
      "Auditer un code C ou C++ pour repérer des copies de tampon sans contrôle de taille.",
      "Analyser un binaire suspect en deux temps : examen statique, puis exécution dans une machine virtuelle jetable.",
    ],
    commonMistakes: [
      'Penser que le code source se retrouve dans le binaire, ou qu’un binaire est illisible pour un analyste.',
      'Faire confiance à l’extension d’un fichier plutôt qu’à sa signature.',
      'Utiliser des fonctions de copie non bornées (`strcpy`, `gets`).',
      'Croire qu’une protection comme NX ou l’ASLR rend une faille mémoire inexploitable.',
      'Exécuter un échantillon inconnu sur son poste de travail ou avec un compte à droits élevés.',
      'Installer un programme dans un dossier modifiable par les utilisateurs, ouvrant la voie au détournement de bibliothèques.',
    ],
    bestPractices: [
      'Activer les protections du compilateur (canari, PIE, NX) et utiliser des fonctions bornées.',
      'Tester avec des assainisseurs mémoire et des tests de fuzzing sur les entrées.',
      'Choisir un langage à mémoire sûre pour les nouveaux composants exposés.',
      'Restreindre les droits des dossiers d’installation et surveiller les chargements de bibliothèques anormaux.',
      'Analyser un binaire inconnu en commençant par le statique, puis en environnement isolé et restaurable.',
    ],
    keyPoints: [
      'La chaîne de compilation transforme le code source en fichier objet, puis en exécutable ; le source n’y est pas.',
      'ELF et PE structurent les exécutables en sections ; la signature révèle le vrai format.',
      'Le chargeur crée le processus ; l’ordre de chargement des bibliothèques est une surface d’attaque.',
      'Débordement de tampon et utilisation après libération sont les erreurs mémoire classiques.',
      'Canari, NX, ASLR rendent l’exploitation plus difficile sans la supprimer ; les langages sûrs réduisent le problème à la source.',
      'On observe un binaire inconnu du plus sûr au plus informatif, en isolation.',
    ],
  },
  practice: [
    {
      id: 'lire-entete',
      kind: 'analysis',
      title: 'Identifier un fichier à partir de ses premiers octets',
      context: [
        { t: 'p', text: 'Trois fichiers reçus par courrier portent des noms de documents. Voici les premiers octets de chacun :' },
        { t: 'code', lang: 'text', code: 'rapport.pdf     25 50 44 46 2D 31 2E 37 ...\nfacture.pdf     4D 5A 90 00 03 00 00 00 ...\nphoto.jpg       7F 45 4C 46 02 01 01 00 ...' },
      ],
      steps: ['Identifier le vrai format de chacun des trois fichiers.', 'Dire lesquels sont cohérents avec leur nom et lesquels sont suspects.', 'Décrire la conduite à tenir pour les fichiers suspects.'],
    },
    {
      id: 'corriger-debordement',
      kind: 'case',
      title: 'Cas pratique : réduire un risque de débordement',
      context: [
        { t: 'p', text: 'Un service réseau écrit en C copie le nom d’utilisateur reçu dans un tableau de 32 octets avec `strcpy`. Il tourne en administrateur sur un serveur exposé.' },
      ],
      steps: ['Expliquer pourquoi cette copie est dangereuse et ce qu’un attaquant peut espérer.', 'Proposer une correction du code et deux protections de compilation ou d’exécution.', 'Proposer une mesure qui limite l’impact si une faille subsiste.'],
    },
  ],
  questions,
  resources: [
    { title: 'elf(5) — Executable and Linkable Format', source: 'man7.org', url: 'https://man7.org/linux/man-pages/man5/elf.5.html' },
    { title: 'PE Format', source: 'Microsoft Learn', url: 'https://learn.microsoft.com/en-us/windows/win32/debug/pe-format' },
    { title: 'CWE-121 : Stack-based Buffer Overflow', source: 'MITRE (CWE)', url: 'https://cwe.mitre.org/data/definitions/121.html' },
    { title: 'CWE-416 : Use After Free', source: 'MITRE (CWE)', url: 'https://cwe.mitre.org/data/definitions/416.html' },
  ],
};
