import type { CourseBody } from '../../types';

export const body: CourseBody = {
  courseId: 'k-retro-ingenierie-defensive',
  lesson: {
    intro:
      'Le premier cours du module K a présenté la typologie des maliciels et l’analyse statique et dynamique. Pour aller plus loin — comprendre précisément ce qu’un échantillon fait quand les chaînes et le comportement observé ne suffisent pas — on recourt à la rétro-ingénierie. Ce cours en donne les bases **défensives** : lire la structure d’un binaire, comprendre le désassemblage et le débogage, connaître les outils de référence, et saisir le fonctionnement de deux familles réputées furtives (bootkits, keyloggers) dans le seul but de les détecter et de s’en protéger. Rien ici ne vise à produire un maliciel ; tout se fait en environnement isolé, sur des échantillons d’incident ou de formation.',
    sections: [
      {
        id: 'binaires',
        title: 'Lire un binaire : PE et ELF',
        blocks: [
          { t: 'p', text: 'Un programme compilé est un **fichier binaire** structuré selon un format : **PE** (Portable Executable) sous Windows, **ELF** (Executable and Linkable Format) sous Linux. En lire la structure, sans l’exécuter, révèle déjà beaucoup.' },
          {
            t: 'table',
            head: ['Élément', 'Ce qu’il indique'],
            rows: [
              ['En-tête et point d’entrée', 'Où commence l’exécution ; un point d’entrée atypique peut trahir un empaquetage'],
              ['Sections (code, données, ressources)', 'Organisation du fichier ; une section exécutable et inscriptible est suspecte'],
              ['Table des imports', 'Les fonctions externes appelées : réseau, chiffrement, manipulation de processus, persistance'],
              ['Table des exports', 'Les fonctions exposées (utile pour les bibliothèques et certains maliciels modulaires)'],
              ['Ressources et métadonnées', 'Icônes, chaînes, horodatage de compilation'],
            ],
          },
          { t: 'def', term: 'Imports', text: 'Fonctions fournies par le système ou des bibliothèques, que le programme appelle. Leur liste suggère les capacités du binaire : des imports réseau et de création de processus, par exemple, sont cohérents avec un code qui télécharge et exécute. Un empaquetage peut cependant masquer les vrais imports jusqu’à l’exécution.' },
          {
            t: 'example',
            title: 'Ce que la structure révèle avant toute exécution',
            blocks: [
              { t: 'p', text: 'Un exécutable dont le point d’entrée est dans une section inscriptible **et** exécutable, avec une section à forte entropie (contenu d’apparence aléatoire) et presque aucun import ni chaîne lisible : ces signes, lus sans exécuter le fichier, indiquent un binaire empaqueté dont le vrai code est caché.' },
              { t: 'p', text: 'On en déduit que l’analyse statique ne suffira pas et qu’il faudra observer le dépaquetage au débogueur, en environnement isolé.' },
            ],
          },
          { t: 'callout', kind: 'key', text: 'L’analyse de la structure d’un binaire fait partie de l’analyse statique : elle ne nécessite pas d’exécuter le fichier et oriente la suite. C’est la première étape de la rétro-ingénierie, la plus sûre.' },
        ],
      },
      {
        id: 'desassemblage',
        title: 'Désassemblage : du code machine à l’assembleur',
        blocks: [
          { t: 'p', text: 'Le processeur exécute du **code machine** (des octets). Le **désassemblage** traduit ces octets en **assembleur**, une représentation lisible des instructions (déplacer une valeur, comparer, sauter, appeler une fonction). C’est l’inverse de l’assemblage, pas de la compilation : on ne retrouve pas le code source d’origine, seulement les instructions.' },
          {
            t: 'table',
            head: ['Notion d’assembleur', 'Rôle (vue d’ensemble)'],
            rows: [
              ['Registres', 'Petites zones de travail du processeur'],
              ['Instructions de transfert et de calcul', 'Déplacer et transformer des valeurs'],
              ['Comparaisons et sauts', 'Implémentent les conditions et les boucles'],
              ['Appels de fonction', 'Enchaînent les sous-programmes, via la pile'],
            ],
          },
          { t: 'def', term: 'Décompilation', text: 'Étape au-dessus du désassemblage : certains outils reconstruisent une approximation en pseudo-code proche d’un langage de haut niveau, plus lisible que l’assembleur. Ce n’est qu’une reconstruction, parfois imparfaite, mais précieuse pour comprendre la logique.' },
          { t: 'callout', kind: 'info', text: 'On ne lit pas tout un binaire ligne par ligne : on part des éléments repérés à l’étape précédente (imports intéressants, chaînes) pour aller directement aux fonctions pertinentes, par exemple celle qui construit une adresse réseau ou déchiffre une charge.' },
        ],
      },
      {
        id: 'debogage',
        title: 'Débogage encadré',
        blocks: [
          { t: 'p', text: 'Le **débogage** consiste à exécuter un programme pas à pas, à poser des points d’arrêt et à observer la mémoire et les registres à chaque étape. Pour un maliciel, il complète le désassemblage statique : il permet de voir ce que le code produit réellement, notamment quand il est empaqueté ou obfusqué.' },
          { t: 'list', items: ['Observer le code **après dépaquetage** : le vrai code n’apparaît souvent qu’une fois le binaire déchiffré en mémoire, à l’exécution.', 'Suivre la construction d’éléments dynamiques (adresses contactées, noms de fichiers) que l’analyse statique ne montre pas en clair.', 'Confirmer une hypothèse tirée du désassemblage.'] },
          { t: 'callout', kind: 'warn', text: 'Déboguer un maliciel, c’est l’exécuter : cela se fait exclusivement dans l’environnement isolé décrit au module J (machine virtuelle jetable, réseau coupé ou simulé, instantanés), jamais sur un poste de travail. Certains maliciels détectent le débogueur et changent de comportement.' },
          { t: 'def', term: 'Point d’arrêt', text: 'Marqueur posé sur une instruction : l’exécution s’interrompt quand elle l’atteint, ce qui permet d’examiner l’état du programme à ce moment précis. On le place par exemple juste avant un appel réseau pour lire l’adresse qui va être contactée.' },
        ],
      },
      {
        id: 'outils',
        title: 'Les outils de rétro-ingénierie',
        blocks: [
          { t: 'p', text: 'Trois outils reviennent constamment dans l’analyse de maliciels. Les connaître aide à lire des rapports d’analyse et à choisir le bon instrument.' },
          {
            t: 'table',
            head: ['Outil', 'Type', 'Usage'],
            rows: [
              ['**Ghidra**', 'Désassembleur et décompilateur (libre, NSA)', 'Analyse statique approfondie, décompilation en pseudo-code ; gratuit et très utilisé en formation'],
              ['**IDA**', 'Désassembleur et décompilateur (commercial)', 'Référence historique de l’analyse statique, nombreuses extensions'],
              ['**x64dbg**', 'Débogueur (libre, Windows)', 'Analyse dynamique pas à pas de binaires Windows, utile pour le dépaquetage'],
            ],
          },
          { t: 'def', term: 'Analyse statique et dynamique combinées', text: 'La rétro-ingénierie alterne les deux : le désassembleur/décompilateur (Ghidra, IDA) donne la structure et la logique sans exécution ; le débogueur (x64dbg) montre le comportement réel et révèle le code dépaqueté. Chacun comble les angles morts de l’autre.' },
          { t: 'callout', kind: 'tip', text: 'Ces outils sont neutres : ce sont des instruments d’analyse, utilisés aussi bien par les éditeurs de sécurité que par les chercheurs. L’important est le cadre : environnement isolé, échantillons d’incident ou de formation, objectif de détection et de défense.' },
        ],
      },
      {
        id: 'familles',
        title: 'Deux familles furtives : bootkits et keyloggers',
        blocks: [
          { t: 'p', text: 'Comprendre comment certaines familles se cachent est indispensable pour les détecter. On les présente ici sous l’angle **fonctionnement, détection et prévention**, conformément à l’objectif défensif.' },
          {
            t: 'table',
            head: ['Famille', 'Principe (haut niveau)', 'Détection et prévention'],
            rows: [
              ['**Bootkit**', 'Maliciel qui s’installe très tôt dans la chaîne de démarrage pour s’exécuter avant le système et se dissimuler', 'Secure Boot et démarrage mesuré (TPM), attestation d’intégrité, contrôle du micrologiciel'],
              ['**Keylogger**', 'Composant qui enregistre les frappes clavier pour capter des identifiants', 'EDR (détection des accès clavier et de la persistance), MFA qui limite la valeur d’un mot de passe volé, surveillance des processus'],
            ],
          },
          { t: 'def', term: 'Pourquoi le bootkit est difficile à détecter', text: 'En s’exécutant avant le système d’exploitation, un bootkit peut masquer sa présence aux outils qui tournent ensuite. La parade repose sur une racine de confiance matérielle (Secure Boot, TPM, vue au module P) qui vérifie l’intégrité de la chaîne de démarrage **avant** que le code malveillant ne prenne la main.' },
          { t: 'callout', kind: 'key', text: 'Face à ces familles, la défense ne consiste pas à les reproduire mais à réduire ce qu’elles rapportent (MFA contre le vol de mot de passe), à ancrer la confiance dans le matériel (contre les bootkits) et à surveiller les comportements (EDR, persistance), puis à analyser tout échantillon capturé pour produire des indicateurs.' },
        ],
      },
    ],
    useCases: [
      'Analyse approfondie d’un échantillon d’incident quand l’analyse statique et dynamique de base ne suffit pas.',
      'Compréhension d’un rapport de rétro-ingénierie publié par un éditeur ou un CERT.',
      'Renforcement de la détection d’un bootkit ou d’un keylogger par les mesures matérielles et l’EDR.',
    ],
    commonMistakes: [
      'Déboguer un maliciel ailleurs que dans un environnement isolé.',
      'Croire que le désassemblage redonne le code source d’origine.',
      'Se fier aux imports visibles d’un binaire empaqueté sans tenir compte du dépaquetage à l’exécution.',
      'Chercher à reproduire un bootkit ou un keylogger au lieu d’étudier sa détection.',
      'Oublier que certains maliciels détectent le débogueur ou l’environnement d’analyse.',
    ],
    bestPractices: [
      'Commencer par l’analyse statique de la structure du binaire (sections, imports) sans exécuter.',
      'Alterner désassembleur/décompilateur (Ghidra, IDA) et débogueur (x64dbg), toujours en environnement isolé.',
      'Partir des indices (imports, chaînes) pour cibler les fonctions à analyser, sans tout lire.',
      'Traiter bootkits et keyloggers par la détection et la prévention (Secure Boot/TPM, EDR, MFA, surveillance).',
      'Produire des indicateurs et des règles de détection à partir de l’analyse (voir les cours J et K précédents).',
    ],
    keyPoints: [
      'PE/ELF : lire sections, imports et exports révèle les capacités d’un binaire sans l’exécuter.',
      'Le désassemblage donne l’assembleur (pas le code source) ; la décompilation en reconstruit une approximation.',
      'Le débogage exécute pas à pas : il révèle le code dépaqueté, uniquement en environnement isolé.',
      'Ghidra, IDA (statique/décompilation) et x64dbg (dynamique) sont les outils de référence.',
      'Bootkits et keyloggers : on les étudie pour les détecter (Secure Boot/TPM, EDR, MFA), pas pour les reproduire.',
    ],
  },
  practice: [
    {
      id: 'triage-binaire',
      kind: 'analysis',
      title: 'Orienter l’analyse à partir de la structure d’un binaire',
      context: [
        { t: 'p', text: 'Analyse statique (sans exécution) d’un exécutable Windows (PE) :' },
        { t: 'code', lang: 'text', code: 'Point d’entrée  : dans une section inhabituelle, inscriptible et exécutable\nSections        : une section au contenu à forte entropie (apparence aléatoire)\nImports visibles: très peu de fonctions (seulement de quoi charger d’autres fonctions)\nChaînes         : presque aucune chaîne lisible' },
      ],
      steps: ['Dire ce que ces signes suggèrent sur le binaire.', 'Expliquer pourquoi les imports visibles sont pauvres et ce que cela implique pour l’analyse.', 'Indiquer l’étape suivante et la précaution associée.'],
    },
    {
      id: 'detecter-familles',
      kind: 'case',
      title: 'Cas pratique : se protéger des bootkits et des keyloggers',
      context: [{ t: 'p', text: 'Un responsable vous demande comment réduire le risque lié aux bootkits et aux keyloggers sur un parc, sans entrer dans la technique offensive.' }],
      steps: ['Donner les mesures contre les bootkits et expliquer pourquoi elles agissent.', 'Donner les mesures contre les keyloggers.', 'Expliquer le rôle de l’analyse d’un échantillon capturé dans cette défense.'],
    },
  ],
  questions: [
    { id: 'rid-q1', type: 'single', difficulty: 2, skills: ['k-binaires'], prompt: 'Quels formats de binaires exécutables correspondent respectivement à Windows et à Linux ?', options: [{ id: 'a', text: 'PE (Windows) et ELF (Linux)' }, { id: 'b', text: 'ELF (Windows) et PE (Linux)' }, { id: 'c', text: 'ZIP (Windows) et TAR (Linux)' }, { id: 'd', text: 'PDF (Windows) et DOC (Linux)' }] },
    { id: 'rid-q2', type: 'single', difficulty: 2, skills: ['k-binaires'], prompt: 'Qu’indique la table des imports d’un binaire ?', options: [{ id: 'a', text: 'Les fonctions externes qu’il appelle, ce qui suggère ses capacités (réseau, chiffrement, processus)' }, { id: 'b', text: 'La liste des utilisateurs du système' }, { id: 'c', text: 'Le mot de passe du fichier' }, { id: 'd', text: 'La vitesse du processeur' }] },
    { id: 'rid-q3', type: 'truefalse', difficulty: 2, skills: ['k-binaires'], prompt: 'Lire la structure d’un binaire (sections, imports) fait partie de l’analyse statique et ne nécessite pas de l’exécuter.' },
    { id: 'rid-q4', type: 'multi', difficulty: 3, skills: ['k-binaires'], prompt: 'Quels éléments de structure d’un binaire sont des signaux à examiner ?', options: [{ id: 'a', text: 'Un point d’entrée dans une section inhabituelle' }, { id: 'b', text: 'Une section à la fois inscriptible et exécutable' }, { id: 'c', text: 'Un contenu à très forte entropie (apparence aléatoire)' }, { id: 'd', text: 'La présence d’un en-tête standard conforme au format' }] },
    { id: 'rid-q5', type: 'single', difficulty: 2, skills: ['k-desassemblage-debogage'], prompt: 'Que produit le désassemblage ?', options: [{ id: 'a', text: 'Une représentation en assembleur des instructions, à partir du code machine' }, { id: 'b', text: 'Le code source d’origine exact' }, { id: 'c', text: 'Une image du programme' }, { id: 'd', text: 'Un fichier chiffré' }] },
    { id: 'rid-q6', type: 'truefalse', difficulty: 2, skills: ['k-desassemblage-debogage'], prompt: 'Le désassemblage permet de retrouver exactement le code source d’origine du programme.' },
    { id: 'rid-q7', type: 'single', difficulty: 3, skills: ['k-desassemblage-debogage'], prompt: 'Pourquoi le débogage complète-t-il souvent le désassemblage pour un maliciel empaqueté ?', options: [{ id: 'a', text: 'Le vrai code n’apparaît souvent qu’une fois le binaire déchiffré en mémoire, à l’exécution' }, { id: 'b', text: 'Le débogage accélère le maliciel' }, { id: 'c', text: 'Le débogage supprime le maliciel' }, { id: 'd', text: 'Le désassemblage est interdit' }] },
    { id: 'rid-q8', type: 'truefalse', difficulty: 2, skills: ['k-desassemblage-debogage'], prompt: 'Déboguer un maliciel revient à l’exécuter : cela ne se fait que dans un environnement isolé, jamais sur un poste de travail.' },
    { id: 'rid-q9', type: 'short', difficulty: 2, skills: ['k-outils-re'], prompt: 'Citez un débogueur libre couramment utilisé pour l’analyse dynamique de binaires Windows.', placeholder: 'nom de l’outil' },
    { id: 'rid-q10', type: 'multi', difficulty: 2, skills: ['k-outils-re'], prompt: 'Quelles affirmations sur les outils de rétro-ingénierie sont exactes ?', options: [{ id: 'a', text: 'Ghidra est un désassembleur/décompilateur libre' }, { id: 'b', text: 'IDA est une référence (commerciale) de l’analyse statique' }, { id: 'c', text: 'x64dbg sert à l’analyse dynamique pas à pas' }, { id: 'd', text: 'Ces outils sont par nature malveillants et interdits' }] },
    { id: 'rid-q11', type: 'short', difficulty: 2, skills: ['k-outils-re'], prompt: 'Comment appelle-t-on l’étape, au-dessus du désassemblage, qui reconstruit une approximation en pseudo-code de haut niveau ?', placeholder: 'déc…' },
    { id: 'rid-q12', type: 'single', difficulty: 3, skills: ['k-familles'], prompt: 'Pourquoi un bootkit est-il difficile à détecter par les outils classiques ?', options: [{ id: 'a', text: 'Il s’exécute avant le système d’exploitation et peut masquer sa présence aux outils qui tournent ensuite' }, { id: 'b', text: 'Il est écrit dans un langage secret' }, { id: 'c', text: 'Il est trop volumineux' }, { id: 'd', text: 'Il ne s’exécute jamais' }] },
    { id: 'rid-q13', type: 'single', difficulty: 2, skills: ['k-familles'], prompt: 'Quelle mesure matérielle aide le plus à contrer un bootkit ?', options: [{ id: 'a', text: 'Secure Boot et le démarrage mesuré (TPM), qui vérifient l’intégrité avant que le code ne prenne la main' }, { id: 'b', text: 'Un mot de passe de session plus long' }, { id: 'c', text: 'Un écran plus grand' }, { id: 'd', text: 'La désactivation du pare-feu' }] },
    { id: 'rid-q14', type: 'multi', difficulty: 2, skills: ['k-familles'], prompt: 'Quelles mesures réduisent le risque lié aux keyloggers ?', options: [{ id: 'a', text: 'Un EDR qui détecte l’accès au clavier et la persistance' }, { id: 'b', text: 'La MFA, qui limite la valeur d’un mot de passe volé' }, { id: 'c', text: 'La surveillance des processus' }, { id: 'd', text: 'Partager son mot de passe avec un collègue' }] },
    { id: 'rid-q15', type: 'open', difficulty: 3, skills: ['k-familles', 'k-binaires'], prompt: 'Expliquez pourquoi, pour se défendre d’un bootkit ou d’un keylogger, on étudie leur fonctionnement et on analyse les échantillons capturés, plutôt que de chercher à les reproduire.' },
    { id: 'rid-q16', type: 'open', difficulty: 3, skills: ['k-desassemblage-debogage', 'k-outils-re'], prompt: 'Décrivez une démarche d’analyse d’un échantillon empaqueté combinant analyse statique et dynamique, en précisant les outils et les précautions.' },
  ],
  resources: [
    { title: 'Ghidra', source: 'National Security Agency', url: 'https://ghidra-sre.org/' },
    { title: 'PE Format', source: 'Microsoft Learn', url: 'https://learn.microsoft.com/windows/win32/debug/pe-format' },
    { title: 'ELF (Tool Interface Standard)', source: 'Linux Foundation / refspecs', url: 'https://refspecs.linuxfoundation.org/elf/elf.pdf' },
    { title: 'Guide to Malware Incident Prevention and Handling (SP 800-83)', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/83/r1/final' },
    { title: 'Secure the Windows boot process', source: 'Microsoft Learn', url: 'https://learn.microsoft.com/windows/security/operating-system-security/system-security/secure-the-windows-10-boot-process' },
  ],
};
