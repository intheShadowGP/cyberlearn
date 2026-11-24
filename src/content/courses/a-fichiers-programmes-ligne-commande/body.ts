import type { CourseBody } from '../../types';
import { questions } from './questions';

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
          { t: 'def', term: 'Droits d’accès', text: 'Métadonnées qui indiquent qui peut lire, écrire ou exécuter un fichier : propriétaire, groupe et autres (`rwx` sous Linux), ou listes de contrôle d’accès (Windows). Ils s’appliquent au fichier lui-même, pas à son nom.' },
          { t: 'def', term: 'Lien symbolique', text: 'Fichier spécial qui contient le chemin d’un autre fichier : l’ouvrir revient à ouvrir sa cible. Un lien mal contrôlé peut rediriger un programme privilégié vers un fichier sensible.' },
          { t: 'def', term: 'Traversée de répertoires (path traversal)', text: 'Attaque où une entrée du type `../../etc/passwd` remonte dans l’arborescence pour sortir du dossier prévu. Le programme doit normaliser le chemin et vérifier qu’il reste dans le dossier autorisé.' },
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
          { t: 'def', term: 'Exécutable (binaire)', text: 'Fichier contenant des instructions machine directement exécutables par le processeur, produit par la compilation. Il n’est pas lisible par un humain, ce qui rend son analyse plus difficile que celle d’un script.' },
          { t: 'def', term: 'Dépendances', text: 'Bibliothèques externes qu’un programme réutilise au lieu de tout réécrire. Elles font partie du logiciel livré : une bibliothèque vulnérable rend l’application vulnérable, d’où l’importance d’en tenir l’inventaire et de les mettre à jour.' },
          { t: 'def', term: 'Empreinte (hash)', text: 'Valeur courte calculée à partir du contenu d’un fichier, qui change dès qu’un seul octet change. Publiée par l’éditeur, elle permet de vérifier qu’un exécutable téléchargé n’a pas été altéré.' },
          { t: 'def', term: 'Chaîne d’approvisionnement logicielle', text: 'Ensemble des composants, outils et dépendances qui servent à produire un logiciel. Compromettre un maillon (une dépendance, un outil de construction) permet d’atteindre tous les utilisateurs du logiciel.' },
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
          { t: 'def', term: 'API', text: 'Interface par laquelle un composant offre ses fonctions à d’autres, souvent par le réseau (requêtes HTTP). Chaque point d’accès exposé est une porte d’entrée à protéger.' },
          { t: 'def', term: 'Surface d’attaque', text: 'Ensemble des points par lesquels un attaquant peut interagir avec un système : formulaires, API, ports ouverts, comptes. Réduire la surface d’attaque, c’est supprimer ce qui n’a pas besoin d’être exposé.' },
          {
            t: 'example',
            title: 'Le prix modifié dans le navigateur',
            blocks: [
              { t: 'p', text: 'Un site affiche un panier à 100 € et renvoie ce prix au serveur dans la requête de commande. Un utilisateur modifie la valeur à 1 € avant l’envoi. Si le serveur fait confiance au prix reçu au lieu de le relire dans sa propre base, la commande est acceptée à 1 € : le contrôle devait se faire côté serveur.' },
            ],
          },
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
          { t: 'def', term: 'Type de données', text: 'Nature d’une valeur : nombre entier, texte, booléen (vrai ou faux). Confondre les types, ou ne pas vérifier celui d’une entrée, est une source classique d’erreurs et de failles.' },
          { t: 'def', term: 'Entrée non fiable', text: 'Toute donnée qui vient de l’extérieur du programme : saisie, fichier, requête réseau, paramètre. Elle doit être validée avant d’être utilisée, car l’attaquant en contrôle le contenu.' },
          {
            t: 'example',
            title: 'Une commande construite avec une saisie',
            blocks: [
              { t: 'code', lang: 'text', code: 'nom = lire_saisie()\nexecuter("ping " + nom)' },
              { t: 'p', text: 'Si l’utilisateur saisit `exemple.org ; cat /etc/passwd`, l’interpréteur exécute deux commandes : le `ping` attendu, puis l’affichage d’un fichier sensible. C’est une **injection de commandes**. La parade consiste à valider la saisie (liste de caractères autorisés) ou à ne pas passer par un interpréteur de commandes.' },
            ],
          },
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
            caption: 'Quelques commandes équivalentes',
            head: ['Besoin', 'Linux / macOS (Bash)', 'Windows (PowerShell)'],
            rows: [
              ['Afficher le répertoire courant', '`pwd`', '`Get-Location`'],
              ['Lister le contenu d’un dossier', '`ls -l`', '`Get-ChildItem`'],
              ['Lire un fichier texte', '`cat fichier`', '`Get-Content fichier`'],
              ['Chercher un mot dans un fichier', '`grep mot fichier`', '`Select-String mot fichier`'],
            ],
          },
          { t: 'def', term: 'Shell', text: 'Programme qui interprète les commandes tapées (par exemple Bash sous Linux et macOS, PowerShell sous Windows). Il enchaîne des commandes et automatise des tâches ; sa maîtrise est approfondie dans les cours des modules C (Linux) et D (Windows).' },
          { t: 'def', term: 'Tube et redirection', text: 'Le tube `|` envoie la sortie d’une commande à l’entrée d’une autre ; la redirection `>` écrit la sortie dans un fichier. On compose ainsi des chaînes d’outils simples pour filtrer et compter.' },
          { t: 'def', term: 'Arguments et options', text: 'Ce qui suit le nom d’une commande : les **arguments** désignent les cibles (un fichier), les **options** modifient le comportement (`-l` pour un affichage détaillé).' },
          {
            t: 'example',
            title: 'Compter les échecs de connexion dans un journal',
            blocks: [
              { t: 'code', lang: 'bash', code: 'cat journal.log | grep "Failed password" | wc -l' },
              { t: 'p', text: '`cat` lit le fichier, `grep` ne garde que les lignes qui contiennent « Failed password », `wc -l` compte les lignes restantes. Trois outils simples, un résultat : le nombre d’échecs de connexion.' },
            ],
          },
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
      'Insérer une saisie utilisateur dans une commande ou un chemin sans la valider.',
      'Éviter la ligne de commande par principe, en se privant d’actions précises et reproductibles.',
    ],
    bestPractices: [
      'Distinguer nom, métadonnées et contenu d’un fichier ; vérifier le type réel en sécurité.',
      'Savoir si un langage est compilé ou interprété, et tenir l’inventaire des dépendances.',
      'Vérifier l’empreinte d’un logiciel téléchargé quand l’éditeur la publie.',
      'Raisonner en composants et en frontières de confiance ; vérifier côté serveur.',
      'Lire un programme simple pour repérer les données non vérifiées.',
      'Se familiariser avec la ligne de commande, explicite et automatisable.',
    ],
    keyPoints: [
      'Un fichier = un nom, des métadonnées et un contenu ; l’extension n’est qu’une indication.',
      'Compilation (traduction préalable) ou interprétation (à l’exécution) ; les dépendances font partie du logiciel.',
      'Les applications sont découpées en composants séparés par des frontières de confiance.',
      'Variables, conditions, boucles, fonctions, structures de données suffisent à lire un petit programme.',
      'Toute entrée externe est non fiable tant qu’elle n’est pas validée.',
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
    {
      id: 'lire-commande',
      kind: 'analysis',
      title: 'Décomposer une chaîne de commandes',
      context: [
        { t: 'p', text: 'Un administrateur lance la commande suivante sur un serveur Linux :' },
        { t: 'code', lang: 'bash', code: 'cat /var/log/auth.log | grep "Failed password" | wc -l' },
      ],
      steps: ['Décrire ce que fait chacune des trois commandes et le rôle des deux tubes.', 'Dire ce que renvoie le résultat final et à quoi il peut servir.', 'Proposer comment adapter l’idée à un poste Windows avec PowerShell.'],
    },
  ],
  questions,
  resources: [
    { title: 'Filesystem Hierarchy Standard', source: 'Linux Foundation', url: 'https://refspecs.linuxfoundation.org/fhs.shtml' },
    { title: 'Compiled versus interpreted languages', source: 'MDN Web Docs', url: 'https://developer.mozilla.org/en-US/docs/Glossary/Compile' },
    { title: 'Client-Server overview', source: 'MDN Web Docs', url: 'https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Client-Server_overview' },
    { title: 'Command line crash course', source: 'MDN Web Docs', url: 'https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line' },
  ],
};
