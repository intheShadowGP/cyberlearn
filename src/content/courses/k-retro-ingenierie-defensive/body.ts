import type { CourseBody } from '../../types';
import { questions } from './questions';

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
      {
        id: 'obfuscation',
        title: 'Obfuscation et analyse du code dépaqueté',
        blocks: [
          { t: 'p', text: 'Un auteur de maliciel cherche à gêner l’analyste : il **brouille** son code pour qu’il soit difficile à lire et à détecter. Connaître ces protections permet de savoir **où chercher** quand l’analyse statique de base ne montre presque rien. Le cadre reste défensif : on décrit les protections pour les contourner à des fins d’analyse, jamais pour les appliquer.' },
          {
            t: 'table',
            head: ['Protection', 'Effet sur l’analyse', 'Réponse de l’analyste'],
            rows: [
              ['**Chiffrement des chaînes**', 'Aucune adresse ni nom de fichier lisible dans le binaire', 'Repérer la routine de déchiffrement ; observer la mémoire après exécution'],
              ['**Résolution dynamique des fonctions**', 'Table d’imports presque vide', 'Examiner le code qui retrouve les fonctions ; lire les appels au débogueur'],
              ['**Flot de contrôle compliqué**', 'Désassemblage difficile à suivre', 'Partir des points d’intérêt (imports, chaînes) plutôt que lire en séquence'],
              ['**Empaquetage**', 'Le vrai code n’existe qu’en mémoire', 'Instantané de la mémoire après le dépaquetage, puis analyse statique de ce code'],
              ['**Anti-débogage et détection d’environnement**', 'Le programme se comporte autrement ou s’arrête s’il est observé', 'Étudier la routine de détection, observer autrement (traces système, mémoire), prolonger l’observation'],
            ],
          },
          { t: 'def', term: 'Code dépaqueté', text: 'Code réel d’un exécutable empaqueté, une fois déchiffré ou décompressé en mémoire à l’exécution. On le récupère par une copie de la région mémoire (en environnement isolé) et on l’analyse comme un binaire ordinaire.' },
          { t: 'list', items: ['**Partir des indices** : une routine qui boucle sur un tampon et applique une opération simple est souvent un déchiffrement ; on la repère à partir des chaînes absentes ou des constantes.', '**Extraire plutôt qu’exécuter** : lorsque c’est possible, on reconstitue la configuration en lisant la mémoire plutôt qu’en laissant le programme joindre son serveur.', '**Garder l’isolement** : un échantillon qui détecte l’analyse peut ne rien faire ou déclencher une action dangereuse ; la machine d’analyse reste coupée du réseau de production.'] },
          { t: 'callout', kind: 'warn', text: 'Une absence de comportement sous débogueur n’est pas une preuve d’innocuité : le programme peut avoir détecté l’observation.' },
        ],
      },
      {
        id: 'rapport',
        title: 'Du binaire à la détection : configuration, règles et rapport',
        blocks: [
          { t: 'p', text: 'La rétro-ingénierie défensive se termine toujours par un **produit utilisable** : des indicateurs fiables, des règles de détection et un rapport qu’une autre équipe peut réutiliser.' },
          {
            t: 'table',
            head: ['Produit', 'Origine', 'Usage'],
            rows: [
              ['**Configuration extraite**', 'Domaines, clés, identifiant de campagne, intervalle de balise lus dans le code dépaqueté', 'Indicateurs réseau durables, regroupement de campagnes'],
              ['**Capacités**', 'Imports résolus, fonctions identifiées (persistance, injection, communication)', 'Rattachement à ATT&CK, lacunes de détection'],
              ['**Règles de détection**', 'Routine de déchiffrement, structure de configuration, constantes', 'YARA sur disque et en mémoire, règles EDR'],
              ['**Rapport**', 'Méthode, constats, indicateurs datés, niveau de confiance, limites', 'SOC, réponse à incident, partenaires (TLP)'],
            ],
          },
          { t: 'list', items: ['**Cibler le stable** : une routine ou une structure de configuration persiste d’une variante à l’autre ; une chaîne claire change à chaque campagne.', '**Deux règles** : une pour le fichier empaqueté sur disque, une pour le code dépaqueté en mémoire.', '**Tester** : sur des variantes (doit correspondre) et sur un corpus sain (ne doit pas correspondre).', '**Limites assumées** : parties non analysées, comportements non déclenchés, hypothèses.'] },
          { t: 'callout', kind: 'legal', title: 'Cadre légal', text: 'L’analyse d’un échantillon est légitime dans une mission défensive documentée (incident, formation, recherche encadrée), avec un stockage protégé et des accès tracés. Fabriquer, diffuser ou utiliser un maliciel est une infraction, comme tester sur le système d’un tiers. Le partage de résultats se limite à des indicateurs et des règles, pas à l’échantillon armé en clair.' },
          { t: 'callout', kind: 'key', text: 'La valeur défensive vient de ce que l’on peut **détecter** et **prévenir** grâce à l’analyse, jamais de la reproduction de la menace.' },
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
    {
      id: 'routine-dechiffrement',
      kind: 'analysis',
      title: 'Analyse : lire une routine de déchiffrement dans un code décompilé',
      context: [
        { t: 'p', text: 'Extrait de pseudo-code (décompilation, en environnement isolé) d’un échantillon dépaqueté. Les valeurs sont fictives :' },
        { t: 'code', lang: 'text', code: 'fonction decoder(tampon, longueur):\n    pour i de 0 à longueur - 1:\n        tampon[i] = tampon[i] XOR 0x37\n    retourner tampon\n\nfonction principale():\n    config = decoder(donnees_chiffrees, 41)\n    domaine = lire(config, "domaine")\n    identifiant = lire(config, "campagne")\n    creer_mutex("Local\\\\SyncHelper_" + identifiant)\n    boucle: attendre(60 secondes); envoyer(domaine, "/gate.php?id=" + identifiant)' },
        { t: 'p', text: 'Après exécution de `decoder` en mémoire, la configuration contient : domaine `upd.cdn-sync-helper.example`, campagne `93`.' },
      ],
      steps: ['Expliquer ce que fait `decoder` et pourquoi on ne voyait aucune chaîne lisible.', 'Lister la configuration et les indicateurs à produire, avec leur qualification.', 'Proposer deux règles de détection (disque et mémoire) et la façon de les tester.'],
    },
  ],
  questions,
  resources: [
    { title: 'Ghidra', source: 'National Security Agency', url: 'https://ghidra-sre.org/' },
    { title: 'PE Format', source: 'Microsoft Learn', url: 'https://learn.microsoft.com/windows/win32/debug/pe-format' },
    { title: 'ELF (Tool Interface Standard)', source: 'Linux Foundation / refspecs', url: 'https://refspecs.linuxfoundation.org/elf/elf.pdf' },
    { title: 'Guide to Malware Incident Prevention and Handling (SP 800-83)', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/83/r1/final' },
    { title: 'Secure the Windows boot process', source: 'Microsoft Learn', url: 'https://learn.microsoft.com/windows/security/operating-system-security/system-security/secure-the-windows-10-boot-process' },
  ],
};
