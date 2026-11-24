// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "c-shell-paquets-automatisation",
  questions: {
    "csh-q1": {
      "type": "single",
      "correct": "d",
      "explanation": "Le noyau arbitre l’accès au matériel et aux ressources et applique les droits ; les programmes de l’espace utilisateur passent par des appels système pour lui demander un service. Cette séparation protège le système des erreurs et des abus des programmes.",
      "whyWrong": {
        "b": "Les documents de l’utilisateur sont des fichiers, stockés par le système de fichiers.",
        "a": "Les deux niveaux sont distincts et se protègent mutuellement."
      }
    },
    "csh-q2": {
      "type": "single",
      "correct": "b",
      "explanation": "La famille Debian (Debian, Ubuntu) utilise `apt` au-dessus de `dpkg` et des paquets `.deb`. La famille Red Hat utilise `dnf`/`rpm`.",
      "whyWrong": {
        "a": "dnf et rpm appartiennent à la famille Red Hat.",
        "d": "pacman est celui d’Arch.",
        "c": "zypper est celui de SUSE."
      }
    },
    "csh-q3": {
      "type": "short",
      "accepted": [
        "/etc",
        "etc",
        "/etc/"
      ],
      "explanation": "Par convention (FHS), /etc contient la configuration du système. /var héberge les données variables (journaux), /home les utilisateurs, /usr les programmes."
    },
    "csh-q4": {
      "type": "single",
      "correct": "c",
      "explanation": "Le tube connecte la sortie standard d’une commande à l’entrée standard de la suivante, ce qui permet de composer des traitements (`ps -ef | grep nginx | wc -l`).",
      "whyWrong": {
        "d": "Les deux commandes sont liées par les données qui circulent entre elles.",
        "a": "La redirection des erreurs utilise 2> et non le tube."
      }
    },
    "csh-q5": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Sans guillemets, le shell découpe la valeur selon les espaces et développe les caractères génériques. Les guillemets conservent la valeur comme un seul argument."
    },
    "csh-q6": {
      "type": "single",
      "correct": "a",
      "explanation": "`-e` arrête à la première erreur, `-u` traite comme erreur toute variable non définie, `pipefail` fait échouer un tube si l’un de ses éléments échoue. Le script ne continue plus sur des données fausses.",
      "whyWrong": {
        "d": "Ces options ajoutent des contrôles ; elles n’accélèrent rien.",
        "b": "Elles ne changent pas l’utilisateur qui exécute le script."
      }
    },
    "csh-q7": {
      "type": "short",
      "accepted": [
        "ShellCheck",
        "shellcheck"
      ],
      "explanation": "ShellCheck analyse les scripts shell et signale les erreurs fréquentes (variables non quotées, variables non définies, usages dangereux). On l’intègre à l’éditeur et au pipeline."
    },
    "csh-q8": {
      "type": "open",
      "model": "Problèmes : `$1` n’est pas entre guillemets (un argument avec une espace ou un caractère générique casse ou détourne la commande) et n’est pas validé ; `cd /data/$1` peut échouer sans que le script s’arrête, et la suite s’exécute alors dans le mauvais répertoire ; `tar czf ... *` dépend du répertoire courant ; `rm -rf /tmp/travail/*` détruit sans vérification ; `#!/bin/sh` n’est pas forcément Bash. Correction : `#!/usr/bin/env bash` et `set -euo pipefail` ; valider l’argument (`rep=\"${1:?usage}\"`, vérifier que le répertoire existe) ; mettre les variables entre guillemets et utiliser `--` ; ne pas dépendre d’un `cd` implicite (chemins complets) ; vérifier les codes de retour. Permissions : le script et `/data`, `/backups` concernés doivent appartenir à root et n’être modifiables que par lui, puisqu’il tourne en root via cron.",
      "criteria": [
        "Le risque lié à `$1` non quoté et non validé est expliqué.",
        "Le danger d’un `cd` qui échoue sans arrêt du script est relevé.",
        "Une réécriture sûre (shebang bash, mode strict, quotage, validation) est proposée.",
        "Les permissions du script et des répertoires sont mentionnées."
      ],
      "explanation": "Un script root planifié amplifie toute faiblesse : quotage et validation y sont des mesures de sécurité, pas seulement de robustesse."
    },
    "csh-q9": {
      "type": "single",
      "correct": "d",
      "explanation": "Le gestionnaire de paquets vérifie la signature des paquets d’un dépôt de confiance avant de les installer. Un `curl | sudo bash` exécute en root un script non vérifié, dont le contenu peut changer à tout moment côté serveur.",
      "whyWrong": {
        "c": "Les paquets installés restent à mettre à jour, quelle que soit leur source."
      }
    },
    "csh-q10": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Les vulnérabilités corrigées sont publiques dès la sortie du correctif : plus on tarde, plus la fenêtre d’exploitation est grande. L’automatisation des mises à jour de sécurité réduit ce délai."
    },
    "csh-q11": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Dépôts officiels signés, ajout des clés par un canal sûr et automatisation des correctifs de sécurité sont les bonnes pratiques.",
      "whyWrong": {
        "c": "Désactiver les mises à jour laisse des vulnérabilités connues ouvertes : c’est l’inverse d’une bonne pratique."
      }
    },
    "csh-q12": {
      "type": "multi",
      "correct": [
        "a",
        "c"
      ],
      "explanation": "cron (historique) et les minuteurs systemd (`.timer`) planifient l’exécution de tâches.",
      "whyWrong": {
        "d": "apt installe et met à jour des paquets ; il ne planifie pas de tâches.",
        "b": "grep recherche du texte ; il ne planifie rien."
      }
    },
    "csh-q13": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Si un utilisateur peut modifier le script, il peut y insérer ses commandes, qui seront exécutées en root à la prochaine planification : c’est une élévation de privilèges classique."
    },
    "csh-q14": {
      "type": "single",
      "correct": "a",
      "explanation": "`-P INPUT DROP` fixe la politique par défaut de la chaîne d’entrée à « rejeter » : tout paquet entrant non accepté par une règle explicite est abandonné. On autorise ensuite le strict nécessaire.",
      "whyWrong": {
        "c": "C’est l’effet inverse : tout ce qui n’est pas autorisé est rejeté.",
        "d": "La chaîne INPUT concerne le trafic entrant, pas le trafic sortant."
      }
    },
    "csh-q15": {
      "type": "short",
      "accepted": [
        "idempotence",
        "idempotent",
        "idempotente"
      ],
      "explanation": "L’idempotence garantit qu’appliquer une automatisation une ou plusieurs fois donne le même état final. Les outils de gestion de configuration la recherchent pour pouvoir réappliquer sans risque."
    },
    "csh-q16": {
      "type": "open",
      "model": "Mises à jour : `sudo apt update && sudo apt upgrade` pour partir d’un système à jour. Installation : n’installer que depuis les dépôts officiels signés le serveur web et ses dépendances ; pour un dépôt tiers nécessaire, ajouter sa clé par un canal sûr. Automatisation des correctifs de sécurité : activer `unattended-upgrades` (au moins pour la sécurité). Filtrage local : politique d’entrée en refus par défaut, autoriser la boucle locale, les connexions établies, SSH depuis le réseau d’administration et les ports du service web (80/443). Ajouter éventuellement une tâche planifiée utile (sauvegarde, vérification d’intégrité), avec un script appartenant à root. Puis appliquer le durcissement des permissions et de SSH (cours dédiés).",
      "criteria": [
        "Une mise à jour initiale est proposée.",
        "L’installation depuis des sources signées est mentionnée.",
        "L’automatisation des mises à jour de sécurité est proposée.",
        "Un filtrage local en refus par défaut avec ouverture des ports nécessaires est décrit."
      ],
      "explanation": "Ces gestes de base réduisent déjà fortement la surface d’attaque avant même la configuration fine du service."
    },
    "csh-q17": {
      "type": "single",
      "correct": "b",
      "explanation": "Le noyau expose beaucoup de ressources (disques, terminaux, tubes, sockets, état du système) comme des fichiers, que l’on ouvre, lit et écrit avec les mêmes outils. Les droits d’accès s’appliquent donc de façon uniforme.",
      "whyWrong": {
        "a": "Le système de fichiers est une arborescence, pas un fichier unique.",
        "c": "Un fichier peut contenir n’importe quelles données binaires."
      }
    },
    "csh-q18": {
      "type": "single",
      "correct": "c",
      "explanation": "/proc n’existe qu’en mémoire : chaque processus y a un répertoire (/proc/<PID>) avec sa ligne de commande, ses fichiers ouverts et sa mémoire. On y lit aussi des informations sur le noyau et le matériel. Il sert à l’inspection d’un système.",
      "whyWrong": {
        "a": "La configuration se trouve dans /etc.",
        "d": "Les journaux se trouvent sous /var/log."
      }
    },
    "csh-q19": {
      "type": "truefalse",
      "correct": false,
      "explanation": "sudo accorde l’élévation pour la commande lancée, selon la politique du fichier sudoers, et journalise l’action. Ouvrir un shell root (`sudo -i`) est un choix explicite à éviter quand une commande ponctuelle suffit."
    },
    "csh-q20": {
      "type": "single",
      "correct": "c",
      "explanation": "Le noyau lance le PID 1 (en général systemd) une fois démarré. Il démarre les services, adopte les processus orphelins et supervise l’ensemble. Son arrêt provoque celui du système.",
      "whyWrong": {
        "b": "L’ordonnancement est assuré par le noyau lui-même, sans processus dédié visible.",
        "d": "Le PID 1 ne sert pas à éteindre la machine selon les connexions."
      }
    },
    "csh-q21": {
      "type": "single",
      "correct": "a",
      "explanation": "`pwd` (print working directory) affiche le répertoire courant. `ls` liste le contenu d’un répertoire, `cd` change de répertoire et `cat` affiche le contenu d’un fichier.",
      "whyWrong": {
        "b": "ls liste les fichiers, sans indiquer à elle seule l’emplacement courant.",
        "d": "cd change de répertoire.",
        "c": "cat affiche un fichier."
      }
    },
    "csh-q22": {
      "type": "single",
      "correct": "b",
      "explanation": "Chaque commande renvoie un code de retour : 0 signifie le succès. `&&` enchaîne sur le succès, `||` sur l’échec, `;` sans condition. Le tube `|` est autre chose : il relie les flux.",
      "whyWrong": {
        "d": "C’est le rôle de `||`.",
        "a": "Le chaînage en parallèle utilise `&`."
      }
    },
    "csh-q23": {
      "type": "short",
      "accepted": [
        "$?",
        "?"
      ],
      "explanation": "`$?` contient le code de retour de la dernière commande : 0 pour un succès, autre valeur pour une erreur. Les scripts s’en servent pour décider de la suite, ou s’appuient sur `set -e` pour s’arrêter à la première erreur."
    },
    "csh-q24": {
      "type": "single",
      "correct": "d",
      "explanation": "Le shell cherche les commandes dans l’ordre du PATH. Si un répertoire modifiable par un attaquant arrive en premier, un faux `ls` ou `sudo` placé là est exécuté à la place du vrai, avec les droits de celui qui le lance. Les scripts planifiés utilisent des chemins absolus.",
      "whyWrong": {
        "b": "Le shell trouvera toujours les commandes : le risque est qu’il en trouve une fausse.",
        "c": "Le PATH ne vide pas les autres variables."
      }
    },
    "csh-q25": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Guillemets et `--` empêchent le découpage, le développement des caractères génériques et la confusion entre nom de fichier et option. `eval` sur des données extérieures permet d’injecter des commandes : on s’en passe.",
      "whyWrong": {
        "c": "Assembler une commande à partir de saisies puis l’exécuter est une injection de commandes."
      }
    },
    "csh-q26": {
      "type": "single",
      "correct": "d",
      "explanation": "Un dépôt tiers donne à son mainteneur le pouvoir de livrer du code exécuté en root à chaque mise à jour, y compris en remplaçant des paquets de la distribution. On n’en ajoute que pour des raisons précises, depuis des sources de confiance.",
      "whyWrong": {
        "a": "La distribution ne contrôle pas le contenu d’un dépôt tiers.",
        "b": "Une signature prouve l’origine, pas la bonne foi du mainteneur."
      }
    },
    "csh-q27": {
      "type": "truefalse",
      "correct": false,
      "explanation": "N’importe qui peut publier sur PyPI, npm ou des dépôts similaires, et un paquet peut exécuter du code à l’installation. Les attaques par noms trompeurs (typosquatting) ou par compromission d’un compte existent : on épingle les versions, on vérifie les noms et on audite les dépendances."
    },
    "csh-q28": {
      "type": "single",
      "correct": "b",
      "explanation": "`rpm -Va` compare chaque fichier installé aux métadonnées du paquet (taille, somme de contrôle, droits, propriétaire) et signale les différences. Un binaire système modifié apparaît : c’est un contrôle d’intégrité utile en investigation.",
      "whyWrong": {
        "c": "Les mises à jour s’installent avec dnf.",
        "d": "La vérification de signature concerne l’origine du paquet, pas l’état des fichiers installés."
      }
    },
    "csh-q29": {
      "type": "short",
      "accepted": [
        "apt autoremove",
        "autoremove",
        "apt-get autoremove",
        "sudo apt autoremove"
      ],
      "explanation": "`apt autoremove` retire les dépendances qui n’ont plus de paquet demandeur. Moins de logiciels installés, c’est moins de code à tenir à jour et moins de vulnérabilités exploitables."
    },
    "csh-q30": {
      "type": "single",
      "correct": "c",
      "explanation": "Une tâche cron ne reprend pas l’environnement de la session : PATH restreint, répertoire courant imprévu. Les chemins absolus garantissent que la bonne commande est lancée, et évitent qu’un programme placé ailleurs soit pris à sa place.",
      "whyWrong": {
        "b": "Cron exécute le script ; c’est son environnement qui diffère.",
        "a": "Le répertoire courant n’est pas garanti."
      }
    },
    "csh-q31": {
      "type": "single",
      "correct": "a",
      "explanation": "Si une exécution dure plus longtemps que l’intervalle, la suivante démarre pendant la première et peut corrompre des données. `flock` prend un verrou : la seconde instance attend ou abandonne. C’est un élément de robustesse d’une automatisation.",
      "whyWrong": {
        "b": "flock ne chiffre rien : il pose un verrou sur un fichier.",
        "c": "Il ne relance pas : il empêche l’exécution en double."
      }
    },
    "csh-q32": {
      "type": "truefalse",
      "correct": false,
      "explanation": "L’exécution d’un minuteur déclenche un service dont la sortie est journalisée : `journalctl -u sauvegarde.service` montre quand il a tourné et s’il a réussi, et `systemctl list-timers` donne les prochaines échéances. C’est un avantage sur cron, plus discret."
    },
    "csh-q33": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Ces trois commandes produisent le même état qu’on les lance une ou plusieurs fois. En revanche, `echo motif >> fichier` ajoute une ligne à chaque exécution : le fichier change à chaque fois.",
      "whyWrong": {
        "c": "Elle ajoute la ligne à chaque exécution : l’état final dépend du nombre de lancements."
      }
    },
    "csh-q34": {
      "type": "open",
      "model": "Causes probables : l’environnement minimal de cron (PATH réduit, commande introuvable, chemin relatif), un droit ou un montage disparu, un disque plein, une erreur non détectée parce que le script ne s’arrête pas à la première erreur (pas de `set -euo pipefail`) ou qu’il renvoie toujours 0, des messages d’erreur envoyés vers un courrier local que personne ne lit. Pour la rendre observable : chemins absolus et mode strict ; journaliser la sortie et les erreurs (`logger` ou redirection vers un fichier) ; faire échouer le script avec un code non nul ; passer à un minuteur systemd dont le service est visible dans `journalctl` et `systemctl list-timers` ; ajouter une supervision, par exemple une alerte quand le dernier succès date de trop longtemps ou un fichier témoin à date contrôlée.",
      "criteria": [
        "Cite des causes plausibles (environnement cron, absence de mode strict, code de retour, courrier ignoré).",
        "Propose une journalisation des sorties et des erreurs.",
        "Propose un échec explicite (code de retour non nul) ou un minuteur systemd journalisé.",
        "Propose une supervision du dernier succès."
      ],
      "explanation": "Une automatisation qui échoue sans bruit est pire que pas d’automatisation : on croit être protégé. Elle doit signaler aussi bien ses réussites que ses échecs."
    },
    "csh-q35": {
      "type": "single",
      "correct": "a",
      "explanation": "`ps -ef` affiche tous les processus avec leur utilisateur, leur PID et leur commande ; `top` ou `htop` les présentent en continu. `df` concerne l’espace disque, `mount` les systèmes de fichiers montés et `uname` la version du noyau.",
      "whyWrong": {
        "c": "df affiche l’occupation des disques.",
        "b": "mount liste les systèmes de fichiers montés.",
        "d": "uname indique le noyau."
      }
    },
    "csh-q36": {
      "type": "single",
      "correct": "b",
      "explanation": "`ss -tlnp` liste les sockets TCP en écoute (`-t`, `-l`), avec les numéros de port (`-n`) et les processus (`-p`, avec les droits suffisants). C’est le moyen de vérifier qu’un service n’écoute que là où on l’attend.",
      "whyWrong": {
        "a": "ps liste les processus sans montrer leurs sockets avec ces options.",
        "d": "ls liste des fichiers.",
        "c": "df ne concerne que l’espace disque."
      }
    },
    "csh-q37": {
      "type": "single",
      "correct": "c",
      "explanation": "`df` donne l’occupation par système de fichiers ; `du` mesure ce qui est occupé par chaque répertoire, ce qui désigne le coupable (souvent `/var/log`). `free` concerne la mémoire.",
      "whyWrong": {
        "a": "df montre que le disque est plein, pas qui l’occupe.",
        "b": "free concerne la mémoire.",
        "d": "ls n’indique pas la taille cumulée des sous-répertoires."
      }
    },
    "csh-q38": {
      "type": "truefalse",
      "correct": false,
      "explanation": "La ligne de commande de chaque processus est lisible par les autres utilisateurs (`ps -ef`, `/proc/<PID>/cmdline`). Un secret passé en argument s’y affiche : on le transmet par un fichier protégé, une variable d’environnement limitée ou l’entrée standard."
    },
    "csh-q39": {
      "type": "short",
      "accepted": [
        "free",
        "free -h",
        "free -m"
      ],
      "explanation": "`free -h` affiche la mémoire totale, utilisée, libre et le cache, en unités lisibles. Un système qui épuise sa mémoire ralentit puis termine des processus : on le repère avec cette commande ou avec `top`."
    },
    "csh-q40": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Charge du processeur, espace disque et mémoire sont les trois premiers suspects. Redémarrer sans observer efface les indices (processus fautif, journaux en mémoire) et la cause revient.",
      "whyWrong": {
        "a": "Un redémarrage immédiat détruit les éléments qui auraient permis de comprendre."
      }
    }
  },
};
