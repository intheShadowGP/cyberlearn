import type { CourseBody } from '../../types';

export const body: CourseBody = {
  courseId: 'a-fichiers-programmes-ligne-commande',
  lesson: {
    intro:
      'Pour sécuriser un système, il faut d’abord comprendre de quoi il est fait. Le premier cours du module A a présenté la machine, le système d’exploitation et les processus. Celui-ci complète le socle : comment les données sont rangées en fichiers, comment un programme passe du texte écrit par un développeur à quelque chose que la machine exécute, comment une application est découpée en composants, et comment dialoguer avec un système par une interface en ligne de commande. Ces notions reviennent dans toutes les disciplines qui suivent.',
    sections: [
      {
        id: 'fichiers',
        title: 'Le système de fichiers',
        blocks: [
          { t: 'p', text: 'Un **système de fichiers** organise le stockage en fichiers et en répertoires (dossiers). Pour chaque fichier, il conserve trois choses distinctes : le **nom** (rangé dans un répertoire), les **métadonnées** (taille, propriétaire, droits, dates) et le **contenu** (les données, réparties en blocs sur le support).' },
          { t: 'def', term: 'Chemin', text: 'Suite de répertoires menant à un fichier. Un chemin **absolu** part de la racine (`/etc/hosts`, `C:\\Windows`) ; un chemin **relatif** part du répertoire courant (`../rapport.txt` remonte d’un niveau). Bien distinguer les deux évite beaucoup d’erreurs, et explique certaines failles liées aux chemins fournis par un utilisateur.' },
          {
            t: 'table',
            head: ['Élément', 'Exemple', 'Rôle'],
            rows: [
              ['Nom et extension', '`rapport.pdf`', 'Identifie le fichier ; l’extension suggère le type, sans le garantir'],
              ['Métadonnées', 'propriétaire, droits, dates', 'Qui peut faire quoi, quand il a été modifié'],
              ['Contenu', 'les octets du document', 'La donnée elle-même'],
            ],
          },
          {
            t: 'example',
            title: 'Le nom ne fait pas le contenu',
            blocks: [
              { t: 'p', text: 'On renomme `photo.jpg` en `photo.txt` : le nom et l’extension changent, mais les octets du contenu restent ceux d’une image. Un programme qui l’ouvre vraiment verra une image, pas du texte.' },
              { t: 'p', text: 'À l’inverse, un fichier `facture.pdf.exe` affiche une icône et une extension trompeuses alors que son contenu est un programme exécutable. D’où la règle, en sécurité, de vérifier le type réel et pas le nom.' },
            ],
          },
          { t: 'callout', kind: 'info', text: 'L’extension d’un fichier n’est qu’une indication : un fichier peut être renommé sans changer son contenu réel. C’est pourquoi, en sécurité, on vérifie le **type réel** d’un fichier et pas seulement son nom.' },
        ],
      },
      {
        id: 'compilation',
        title: 'Du code source au programme exécuté',
        blocks: [
          { t: 'p', text: 'Un programme est d’abord écrit par un développeur sous forme de **code source** : du texte, lisible par un humain, dans un langage de programmation. La machine, elle, n’exécute que des instructions dans son propre langage. Deux grandes voies permettent de passer de l’un à l’autre.' },
          {
            t: 'table',
            head: ['Approche', 'Principe', 'Exemples de langages'],
            rows: [
              ['**Compilation**', 'Un compilateur traduit tout le code source en code exécutable une fois pour toutes', 'C, C++, Go, Rust'],
              ['**Interprétation**', 'Un interpréteur lit et exécute le code au fur et à mesure, à chaque lancement', 'Python, JavaScript (souvent), Ruby'],
              ['**Intermédiaire**', 'Le code est compilé en un format intermédiaire, exécuté par une machine virtuelle', 'Java, C#'],
            ],
          },
          { t: 'def', term: 'Dépendances', text: 'Bibliothèques externes qu’un programme réutilise au lieu de tout réécrire. Elles font partie du logiciel livré : une bibliothèque vulnérable rend l’application vulnérable, d’où l’importance d’en tenir l’inventaire et de les mettre à jour.' },
          { t: 'callout', kind: 'info', text: 'Comprendre cette chaîne éclaire plusieurs sujets de sécurité : vérifier l’intégrité d’un exécutable, se méfier d’un binaire d’origine inconnue, ou surveiller les dépendances qui composent une application.' },
        ],
      },
      {
        id: 'architecture',
        title: 'Architecture logicielle',
        blocks: [
          { t: 'p', text: 'Une application un peu complexe n’est pas un bloc unique : elle est découpée en **composants** aux responsabilités distinctes, qui communiquent entre eux. Cette organisation aide à comprendre où circulent les données et où se situent les contrôles de sécurité.' },
          {
            t: 'table',
            head: ['Modèle', 'Description'],
            rows: [
              ['En couches', 'Présentation (interface), logique métier, accès aux données : chaque couche ne parle qu’à la voisine'],
              ['Client-serveur', 'Un client (navigateur, application) envoie des requêtes à un serveur qui traite et répond'],
              ['Services', 'L’application est découpée en services qui communiquent par le réseau (API)'],
            ],
          },
          { t: 'def', term: 'Frontière de confiance', text: 'Limite entre une zone maîtrisée et une zone qui ne l’est pas, par exemple entre le navigateur de l’utilisateur (non fiable) et le serveur. Les données qui franchissent cette frontière doivent être vérifiées côté serveur : c’est un principe que l’on retrouve dans toute la sécurité applicative.' },
          { t: 'callout', kind: 'key', text: 'Règle qui traverse toutes les disciplines : **ne jamais faire confiance à ce qui vient du client**. Le code qui s’exécute sur la machine de l’utilisateur peut être modifié ; les contrôles qui comptent se font du côté que l’on maîtrise.' },
        ],
      },
      {
        id: 'programmation',
        title: 'Lire un programme simple',
        blocks: [
          { t: 'p', text: 'Pas besoin d’être développeur pour lire un petit programme. Quelques notions suffisent à suivre ce qu’il fait, ce qui est précieux pour analyser un script ou comprendre une vulnérabilité.' },
          {
            t: 'table',
            head: ['Notion', 'Rôle'],
            rows: [
              ['Variable', 'Une valeur nommée que l’on peut lire et modifier'],
              ['Condition (`si … alors`)', 'Exécuter des instructions seulement si une condition est vraie'],
              ['Boucle (`pour`, `tant que`)', 'Répéter des instructions'],
              ['Fonction', 'Un bloc d’instructions réutilisable, qui reçoit des paramètres et rend un résultat'],
              ['Structure de données', 'Organiser des valeurs : liste (suite ordonnée), dictionnaire (clé → valeur)'],
            ],
          },
          { t: 'code', lang: 'text', caption: 'Un petit programme en pseudo-code', code: 'fonction est_majeur(age):\n    si age >= 18 alors\n        rendre vrai\n    sinon\n        rendre faux\n\npour chaque personne dans liste_personnes:\n    si est_majeur(personne.age):\n        afficher personne.nom' },
          { t: 'callout', kind: 'tip', text: 'Savoir repérer où un programme utilise une donnée venue de l’extérieur (une saisie, un fichier, une requête) sans la vérifier est déjà un réflexe de sécurité : c’est souvent là que naissent les vulnérabilités.' },
        ],
      },
      {
        id: 'cli',
        title: 'La ligne de commande',
        blocks: [
          { t: 'p', text: 'L’**interface en ligne de commande** permet de dialoguer avec un système en tapant des commandes, plutôt qu’en cliquant. Elle est centrale en administration et en sécurité : précise, automatisable, et souvent le seul moyen d’agir sur un serveur distant.' },
          {
            t: 'table',
            head: ['Besoin', 'Idée de commande (illustratif)'],
            rows: [
              ['Savoir où l’on se trouve', 'Afficher le répertoire courant'],
              ['Lister le contenu d’un dossier', 'Lister les fichiers et leurs droits'],
              ['Lire un fichier', 'Afficher le contenu d’un fichier texte'],
              ['Chercher', 'Rechercher un mot dans des fichiers'],
            ],
          },
          { t: 'def', term: 'Shell', text: 'Programme qui interprète les commandes tapées (par exemple Bash sous Linux et macOS, PowerShell sous Windows). Il enchaîne des commandes et automatise des tâches ; sa maîtrise est approfondie dans les cours des modules C (Linux) et D (Windows).' },
          { t: 'callout', kind: 'tip', text: 'La ligne de commande fait peur au début, mais elle rend les actions explicites et reproductibles : on voit exactement ce qui est demandé, ce qui est précieux quand on analyse ou quand on documente une opération.' },
        ],
      },
    ],
    useCases: [
      'Débuter en sécurité : lire une sortie de liste de fichiers, suivre un petit script, comprendre un schéma d’application.',
      'Préparer les modules suivants : les cours Linux, Windows, Web et code s’appuient tous sur ces notions.',
      'Analyser un incident simple : repérer un fichier au type suspect, suivre le chemin d’une donnée dans une application.',
    ],
    commonMistakes: [
      'Se fier à l’extension d’un fichier plutôt qu’à son type réel.',
      'Confondre chemin absolu et chemin relatif.',
      'Croire qu’un contrôle fait côté client (navigateur) protège, alors qu’il peut être contourné.',
      'Oublier que les dépendances d’un logiciel font partie de sa surface de sécurité.',
      'Éviter la ligne de commande par principe, en se privant d’actions précises et reproductibles.',
    ],
    bestPractices: [
      'Distinguer nom, métadonnées et contenu d’un fichier ; vérifier le type réel en sécurité.',
      'Savoir si un langage est compilé ou interprété, et tenir l’inventaire des dépendances.',
      'Raisonner en composants et en frontières de confiance ; vérifier côté serveur.',
      'Lire un programme simple pour repérer les données non vérifiées.',
      'Se familiariser avec la ligne de commande, explicite et automatisable.',
    ],
    keyPoints: [
      'Un fichier = un nom, des métadonnées et un contenu ; l’extension n’est qu’une indication.',
      'Compilation (traduction préalable) ou interprétation (à l’exécution) ; les dépendances font partie du logiciel.',
      'Les applications sont découpées en composants séparés par des frontières de confiance.',
      'Variables, conditions, boucles, fonctions, structures de données suffisent à lire un petit programme.',
      'La ligne de commande rend les actions précises, reproductibles et automatisables.',
    ],
  },
  practice: [
    {
      id: 'lire-pseudocode',
      kind: 'analysis',
      title: 'Suivre un petit programme',
      context: [
        { t: 'p', text: 'Pseudo-code d’une fonction :' },
        { t: 'code', lang: 'text', code: 'fonction remise(prix, est_adherent):\n    r = 0\n    si prix > 100 alors\n        r = 10\n    si est_adherent alors\n        r = r + 5\n    rendre prix - (prix * r / 100)' },
      ],
      steps: ['Donner le résultat pour un non-adhérent avec un prix de 80, puis pour un adhérent avec un prix de 200.', 'Décrire en une phrase ce que fait la fonction.', 'Indiquer ce qu’il faudrait vérifier si `prix` venait d’une saisie utilisateur.'],
    },
    {
      id: 'classer-notions',
      kind: 'case',
      title: 'Relier les notions à la sécurité',
      context: [{ t: 'p', text: 'Vous expliquez à un nouveau collègue pourquoi ces notions de base comptent en sécurité.' }],
      steps: ['Donner un exemple de problème de sécurité lié au type réel d’un fichier.', 'Donner un exemple lié à une dépendance.', 'Expliquer avec vos mots la règle « ne pas faire confiance au client ».'],
    },
  ],
  questions: [
    { id: 'fpc-q1', type: 'single', difficulty: 1, skills: ['a-fs'], prompt: 'Quelles sont les trois choses distinctes qu’un système de fichiers conserve pour chaque fichier ?', options: [{ id: 'a', text: 'Le nom, les métadonnées et le contenu' }, { id: 'b', text: 'La couleur, la taille et le poids' }, { id: 'c', text: 'L’adresse IP, le port et le protocole' }, { id: 'd', text: 'Le processeur, la mémoire et le disque' }] },
    { id: 'fpc-q2', type: 'single', difficulty: 1, skills: ['a-fs'], prompt: 'Qu’est-ce qu’un chemin absolu ?', options: [{ id: 'a', text: 'Un chemin qui part de la racine du système de fichiers' }, { id: 'b', text: 'Un chemin qui part du répertoire courant' }, { id: 'c', text: 'Un chemin qui ne contient que des chiffres' }, { id: 'd', text: 'Un chemin vers Internet' }] },
    { id: 'fpc-q3', type: 'truefalse', difficulty: 1, skills: ['a-fs'], prompt: 'L’extension d’un fichier garantit toujours son type réel.' },
    { id: 'fpc-q4', type: 'short', difficulty: 2, skills: ['a-fs'], prompt: 'Comment appelle-t-on un chemin qui part du répertoire courant (par exemple `../rapport.txt`) ?', placeholder: 'chemin …' },
    { id: 'fpc-q5', type: 'single', difficulty: 2, skills: ['a-build'], prompt: 'Quelle est la différence entre compilation et interprétation ?', options: [{ id: 'a', text: 'La compilation traduit tout le code en exécutable une fois ; l’interprétation lit et exécute le code au fur et à mesure' }, { id: 'b', text: 'La compilation est toujours plus lente à l’exécution' }, { id: 'c', text: 'L’interprétation ne fonctionne qu’en réseau' }, { id: 'd', text: 'Il n’y a aucune différence' }] },
    { id: 'fpc-q6', type: 'multi', difficulty: 2, skills: ['a-build'], prompt: 'Quelles affirmations sur les dépendances d’un logiciel sont exactes ?', options: [{ id: 'a', text: 'Ce sont des bibliothèques externes réutilisées par le programme' }, { id: 'b', text: 'Une dépendance vulnérable peut rendre l’application vulnérable' }, { id: 'c', text: 'Il faut en tenir l’inventaire et les mettre à jour' }, { id: 'd', text: 'Elles ne font pas partie du logiciel livré' }] },
    { id: 'fpc-q7', type: 'single', difficulty: 1, skills: ['a-build'], prompt: 'Qu’est-ce que le code source ?', options: [{ id: 'a', text: 'Le texte, lisible par un humain, écrit par le développeur dans un langage de programmation' }, { id: 'b', text: 'Le courant électrique du processeur' }, { id: 'c', text: 'Le câble réseau' }, { id: 'd', text: 'Le disque dur' }] },
    { id: 'fpc-q8', type: 'single', difficulty: 2, skills: ['a-archi-log'], prompt: 'Dans le modèle client-serveur, qui traite les requêtes et renvoie les réponses ?', options: [{ id: 'a', text: 'Le serveur' }, { id: 'b', text: 'Le client' }, { id: 'c', text: 'Le câble' }, { id: 'd', text: 'L’utilisateur lui-même' }] },
    { id: 'fpc-q9', type: 'truefalse', difficulty: 2, skills: ['a-archi-log'], prompt: 'Un contrôle de sécurité effectué uniquement côté client (dans le navigateur) suffit à se protéger.' },
    { id: 'fpc-q10', type: 'short', difficulty: 2, skills: ['a-archi-log'], prompt: 'Comment appelle-t-on la limite entre une zone maîtrisée et une zone non fiable, par exemple entre le navigateur et le serveur ? (trois mots)', placeholder: 'frontière de …' },
    { id: 'fpc-q11', type: 'open', difficulty: 3, skills: ['a-archi-log', 'a-build'], prompt: 'Expliquez avec vos mots pourquoi « ne pas faire confiance à ce qui vient du client » est une règle centrale, et donnez un exemple.' },
    { id: 'fpc-q12', type: 'single', difficulty: 1, skills: ['a-prog'], prompt: 'À quoi sert une boucle dans un programme ?', options: [{ id: 'a', text: 'À répéter des instructions' }, { id: 'b', text: 'À stocker une seule valeur' }, { id: 'c', text: 'À éteindre la machine' }, { id: 'd', text: 'À chiffrer un fichier' }] },
    { id: 'fpc-q13', type: 'multi', difficulty: 2, skills: ['a-prog'], prompt: 'Quelles affirmations sur les notions de programmation sont exactes ?', options: [{ id: 'a', text: 'Une liste est une suite ordonnée de valeurs' }, { id: 'b', text: 'Un dictionnaire associe une clé à une valeur' }, { id: 'c', text: 'Une variable est une valeur nommée que l’on peut lire et modifier' }, { id: 'd', text: 'Une boucle sert à chiffrer un fichier' }] },
    { id: 'fpc-q14', type: 'truefalse', difficulty: 1, skills: ['a-prog'], prompt: 'La ligne de commande permet d’effectuer des actions de façon précise et reproductible.' },
    { id: 'fpc-q15', type: 'short', difficulty: 1, skills: ['a-prog'], prompt: 'Comment appelle-t-on le programme qui interprète les commandes tapées (Bash, PowerShell) ? (un mot)', placeholder: 'un mot' },
    { id: 'fpc-q16', type: 'open', difficulty: 2, skills: ['a-prog', 'a-fs'], prompt: 'Un nouveau collègue évite la ligne de commande. Donnez deux raisons pour lesquelles elle est utile en administration et en sécurité.' },
  ],
  resources: [
    { title: 'Filesystem Hierarchy Standard', source: 'Linux Foundation', url: 'https://refspecs.linuxfoundation.org/fhs.shtml' },
    { title: 'Compiled versus interpreted languages', source: 'MDN Web Docs', url: 'https://developer.mozilla.org/en-US/docs/Glossary/Compile' },
    { title: 'Client-Server overview', source: 'MDN Web Docs', url: 'https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Client-Server_overview' },
    { title: 'Command line crash course', source: 'MDN Web Docs', url: 'https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line' },
  ],
};
