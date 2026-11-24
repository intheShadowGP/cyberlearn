// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "csh-q1",
    "prompt": "Quelle est la différence entre le noyau et l’espace utilisateur ?",
    "skills": [
      "c-architecture"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Il n’y a aucune différence : les deux désignent le même ensemble de programmes"
      },
      {
        "id": "b",
        "text": "Le noyau contient les documents de l’utilisateur, l’espace utilisateur les programmes qu’il lance"
      },
      {
        "id": "c",
        "text": "L’espace utilisateur remplace le noyau au démarrage pour accélérer la machine"
      },
      {
        "id": "d",
        "text": "Le noyau gère matériel, mémoire, processus et droits ; l’espace utilisateur le sollicite"
      }
    ]
  },
  {
    "id": "csh-q2",
    "prompt": "Quel gestionnaire de paquets est associé aux distributions de la famille Debian ?",
    "skills": [
      "c-architecture"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`dnf` / `rpm` / `yum`"
      },
      {
        "id": "b",
        "text": "`apt` / `dpkg`"
      },
      {
        "id": "c",
        "text": "`zypper` / `rpm`"
      },
      {
        "id": "d",
        "text": "`pacman` / `makepkg`"
      }
    ]
  },
  {
    "id": "csh-q3",
    "prompt": "Dans l’arborescence Linux, quel répertoire contient par convention les fichiers de configuration du système ?",
    "skills": [
      "c-architecture"
    ],
    "difficulty": 1,
    "type": "short",
    "placeholder": "/…"
  },
  {
    "id": "csh-q4",
    "prompt": "Que fait l’opérateur `|` (tube) entre deux commandes ?",
    "skills": [
      "c-shell"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Il redirige les messages d’erreur de la première commande vers un fichier"
      },
      {
        "id": "b",
        "text": "Il transforme le reste de la ligne en commentaire ignoré par le shell"
      },
      {
        "id": "c",
        "text": "Il envoie la sortie standard de la première dans l’entrée de la seconde"
      },
      {
        "id": "d",
        "text": "Il exécute les deux commandes en parallèle, sans aucun lien entre elles"
      }
    ]
  },
  {
    "id": "csh-q5",
    "prompt": "Dans un script, entourer une variable de guillemets (`\"$fichier\"`) évite qu’un nom contenant une espace soit découpé en plusieurs arguments.",
    "skills": [
      "c-shell"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "csh-q6",
    "prompt": "Que fait `set -euo pipefail` en tête d’un script ?",
    "skills": [
      "c-shell"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Il arrête le script à la première erreur, variable non définie ou échec de tube"
      },
      {
        "id": "b",
        "text": "Il exécute le script avec les droits de root, quel que soit l’utilisateur"
      },
      {
        "id": "c",
        "text": "Il supprime les fichiers temporaires créés par le script à la fin de celui-ci"
      },
      {
        "id": "d",
        "text": "Il accélère l’exécution du script en désactivant les vérifications habituelles du shell"
      }
    ]
  },
  {
    "id": "csh-q7",
    "prompt": "Quel analyseur statique signale les erreurs fréquentes des scripts shell (variables non quotées, etc.) ?",
    "skills": [
      "c-shell"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "nom"
  },
  {
    "id": "csh-q8",
    "prompt": "Un script exécuté par cron en root fait `cd /data/$1` puis agit sur `*`. Expliquez ce qui peut mal tourner et comment rendre ce script sûr.",
    "skills": [
      "c-shell",
      "c-automatisation"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "csh-q9",
    "prompt": "Pourquoi préférer un dépôt de paquets signé à un script d’installation « curl | sudo bash » de provenance quelconque ?",
    "skills": [
      "c-paquets"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Il n’y a aucune différence de sécurité entre un dépôt signé et un script d’installation"
      },
      {
        "id": "b",
        "text": "Le script d’installation est toujours plus lent à s’exécuter que le gestionnaire de paquets"
      },
      {
        "id": "c",
        "text": "Le dépôt signé n’a jamais besoin de mises à jour une fois que les paquets sont installés"
      },
      {
        "id": "d",
        "text": "Le dépôt signé vérifie l’authenticité des paquets, le script exécute du code non vérifié"
      }
    ]
  },
  {
    "id": "csh-q10",
    "prompt": "Les mises à jour de sécurité devraient être appliquées rapidement, idéalement de façon automatique.",
    "skills": [
      "c-paquets"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "csh-q11",
    "prompt": "Quelles pratiques sécurisent la gestion des logiciels ?",
    "skills": [
      "c-paquets"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Automatiser les mises à jour de sécurité"
      },
      {
        "id": "b",
        "text": "N’installer que depuis les dépôts officiels signés"
      },
      {
        "id": "c",
        "text": "Désactiver toute mise à jour pour ne rien casser"
      },
      {
        "id": "d",
        "text": "Ajouter la clé d’un dépôt par un canal sûr"
      }
    ]
  },
  {
    "id": "csh-q12",
    "prompt": "Quels mécanismes permettent de planifier l’exécution d’une tâche sous Linux ?",
    "skills": [
      "c-automatisation"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Les minuteurs systemd (`.timer`)"
      },
      {
        "id": "b",
        "text": "grep"
      },
      {
        "id": "c",
        "text": "cron"
      },
      {
        "id": "d",
        "text": "apt"
      }
    ]
  },
  {
    "id": "csh-q13",
    "prompt": "Une tâche planifiée exécutée en root mais pointant vers un script modifiable par un utilisateur est un risque d’élévation de privilèges.",
    "skills": [
      "c-automatisation"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "csh-q14",
    "prompt": "Dans un jeu de règles iptables de filtrage local, que signifie `iptables -P INPUT DROP` ?",
    "skills": [
      "c-automatisation"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "La politique par défaut de la chaîne d’entrée rejette ce qui n’est pas permis"
      },
      {
        "id": "b",
        "text": "Le pare-feu est désactivé et ne filtre plus aucun paquet, entrant ou sortant"
      },
      {
        "id": "c",
        "text": "Toutes les connexions entrantes sont autorisées sans aucune restriction de port"
      },
      {
        "id": "d",
        "text": "Le trafic sortant est bloqué, alors que le trafic entrant est conservé"
      }
    ]
  },
  {
    "id": "csh-q15",
    "prompt": "Comment appelle-t-on la propriété d’une automatisation qui donne le même résultat qu’on l’applique une ou plusieurs fois ?",
    "skills": [
      "c-automatisation"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "un mot"
  },
  {
    "id": "csh-q16",
    "prompt": "Vous préparez un nouveau serveur Debian avant sa mise en ligne. Décrivez les premières actions de base concernant les mises à jour, l’installation de logiciels et le filtrage local.",
    "skills": [
      "c-paquets",
      "c-automatisation"
    ],
    "difficulty": 2,
    "type": "open"
  },
  {
    "id": "csh-q17",
    "prompt": "Que signifie, sous Unix et Linux, « tout est fichier » ?",
    "skills": [
      "c-architecture"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Toutes les données sont stockées dans un seul fichier géré par le noyau"
      },
      {
        "id": "b",
        "text": "Périphériques, tubes et sockets sont accessibles comme des fichiers"
      },
      {
        "id": "c",
        "text": "Les fichiers ne peuvent contenir que du texte lisible par l’utilisateur"
      },
      {
        "id": "d",
        "text": "Les programmes sont des documents texte que l’on interprète à la lecture"
      }
    ]
  },
  {
    "id": "csh-q18",
    "prompt": "Que contient le répertoire `/proc` ?",
    "skills": [
      "c-architecture"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Les fichiers de configuration des services lancés au démarrage du système"
      },
      {
        "id": "b",
        "text": "Les programmes essentiels nécessaires au démarrage en mode de secours"
      },
      {
        "id": "c",
        "text": "Un système de fichiers virtuel exposant l’état du noyau et des processus"
      },
      {
        "id": "d",
        "text": "Les journaux d’événements écrits par les services et par le noyau"
      }
    ]
  },
  {
    "id": "csh-q19",
    "prompt": "Un utilisateur qui lance une commande avec `sudo` reste root pour toutes les commandes suivantes de sa session.",
    "skills": [
      "c-architecture",
      "c-shell"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "csh-q20",
    "prompt": "Quel est le rôle du processus de PID 1 sur un système Linux moderne ?",
    "skills": [
      "c-architecture"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Processus de l’utilisateur root qui s’exécute à chaque ouverture de session"
      },
      {
        "id": "b",
        "text": "Processus du noyau qui gère l’ordonnancement des autres processus"
      },
      {
        "id": "c",
        "text": "Premier processus de l’espace utilisateur, il supervise les services"
      },
      {
        "id": "d",
        "text": "Processus qui arrête le système lorsqu’aucun utilisateur n’est connecté"
      }
    ]
  },
  {
    "id": "csh-q21",
    "prompt": "Quelle commande affiche le répertoire dans lequel se trouve le shell ?",
    "skills": [
      "c-shell"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`pwd`"
      },
      {
        "id": "b",
        "text": "`ls`"
      },
      {
        "id": "c",
        "text": "`cat`"
      },
      {
        "id": "d",
        "text": "`cd`"
      }
    ]
  },
  {
    "id": "csh-q22",
    "prompt": "Que fait `commande1 && commande2` dans le shell ?",
    "skills": [
      "c-shell"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Il envoie la sortie de commande1 vers l’entrée de commande2"
      },
      {
        "id": "b",
        "text": "Il lance commande2 seulement si commande1 réussit"
      },
      {
        "id": "c",
        "text": "Il lance les deux commandes en même temps, sans attendre"
      },
      {
        "id": "d",
        "text": "Il lance commande2 seulement si commande1 échoue"
      }
    ]
  },
  {
    "id": "csh-q23",
    "prompt": "Quelle variable spéciale du shell contient le code de retour de la dernière commande exécutée ? (symboles)",
    "skills": [
      "c-shell"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "$…"
  },
  {
    "id": "csh-q24",
    "prompt": "Pourquoi un `PATH` contenant `.` ou un répertoire modifiable par tous, placé en tête, est-il dangereux ?",
    "skills": [
      "c-shell",
      "c-automatisation"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Les commandes deviennent beaucoup plus lentes à cause de la recherche"
      },
      {
        "id": "b",
        "text": "Le shell ne trouve plus aucune commande système, ce qui bloque la session"
      },
      {
        "id": "c",
        "text": "Les variables d’environnement sont alors effacées à chaque commande lancée"
      },
      {
        "id": "d",
        "text": "Un attaquant peut y déposer un faux programme portant un nom courant"
      }
    ]
  },
  {
    "id": "csh-q25",
    "prompt": "Quelles pratiques protègent un script qui manipule des noms de fichiers ou des saisies non fiables ?",
    "skills": [
      "c-shell"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Éviter `eval` sur des données venant de l’extérieur"
      },
      {
        "id": "b",
        "text": "Entourer chaque variable de guillemets"
      },
      {
        "id": "c",
        "text": "Assembler la commande avec les saisies puis l’exécuter par `eval`"
      },
      {
        "id": "d",
        "text": "Placer `--` avant les noms de fichiers passés aux commandes"
      }
    ]
  },
  {
    "id": "csh-q26",
    "prompt": "Qu’implique l’ajout d’un dépôt tiers (par exemple un PPA) à un système ?",
    "skills": [
      "c-paquets"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Les paquets du dépôt sont vérifiés par l’éditeur de la distribution avant diffusion"
      },
      {
        "id": "b",
        "text": "Le dépôt n’a aucune incidence sur la sécurité tant que les paquets sont signés"
      },
      {
        "id": "c",
        "text": "Les paquets de la distribution ne peuvent plus être mis à jour sur le système"
      },
      {
        "id": "d",
        "text": "On fait confiance à son mainteneur, qui peut fournir et remplacer des paquets"
      }
    ]
  },
  {
    "id": "csh-q27",
    "prompt": "Les paquets du dépôt public de Python (PyPI) sont tous vérifiés par des mainteneurs avant leur publication.",
    "skills": [
      "c-paquets"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "csh-q28",
    "prompt": "Que permet la commande `rpm -Va` ?",
    "skills": [
      "c-paquets"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Afficher la liste des paquets installés avec leur date d’installation"
      },
      {
        "id": "b",
        "text": "Comparer les fichiers installés aux paquets et lister les écarts"
      },
      {
        "id": "c",
        "text": "Installer toutes les mises à jour de sécurité disponibles dans les dépôts"
      },
      {
        "id": "d",
        "text": "Vérifier la signature des paquets avant de les télécharger depuis un dépôt"
      }
    ]
  },
  {
    "id": "csh-q29",
    "prompt": "Quelle commande Debian supprime les paquets installés comme dépendances et devenus inutiles, pour réduire la surface d’attaque ?",
    "skills": [
      "c-paquets"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "commande"
  },
  {
    "id": "csh-q30",
    "prompt": "Pourquoi un script lancé par cron doit-il utiliser des chemins absolus ?",
    "skills": [
      "c-automatisation"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Cron s’exécute toujours depuis le répertoire personnel de root"
      },
      {
        "id": "b",
        "text": "Cron refuse d’exécuter un script qui contient un chemin relatif"
      },
      {
        "id": "c",
        "text": "Cron fournit un environnement minimal, avec un PATH réduit"
      },
      {
        "id": "d",
        "text": "Les chemins absolus rendent le script plus rapide à exécuter"
      }
    ]
  },
  {
    "id": "csh-q31",
    "prompt": "À quoi sert `flock` dans une tâche planifiée ?",
    "skills": [
      "c-automatisation"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "À empêcher deux exécutions simultanées de la même tâche"
      },
      {
        "id": "b",
        "text": "À chiffrer le contenu du script avant son exécution par cron"
      },
      {
        "id": "c",
        "text": "À relancer automatiquement la tâche quand elle échoue"
      },
      {
        "id": "d",
        "text": "À restreindre les utilisateurs autorisés à modifier la planification"
      }
    ]
  },
  {
    "id": "csh-q32",
    "prompt": "Un minuteur systemd ne laisse aucune trace consultable de ses exécutions.",
    "skills": [
      "c-automatisation",
      "c-inspection"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "csh-q33",
    "prompt": "Lesquelles de ces opérations sont idempotentes ?",
    "skills": [
      "c-automatisation"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "`mkdir -p /srv/app`"
      },
      {
        "id": "b",
        "text": "`grep -q motif fichier || echo motif >> fichier`"
      },
      {
        "id": "c",
        "text": "`echo motif >> fichier`"
      },
      {
        "id": "d",
        "text": "`systemctl enable --now service`"
      }
    ]
  },
  {
    "id": "csh-q34",
    "prompt": "Une tâche cron de rotation des archives échoue en silence depuis un mois, sans que personne ne le sache. Expliquez les causes probables et comment la rendre observable.",
    "skills": [
      "c-automatisation",
      "c-inspection"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "csh-q35",
    "prompt": "Quelle commande liste les processus en cours d’exécution sur le système ?",
    "skills": [
      "c-inspection"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`ps -ef`"
      },
      {
        "id": "b",
        "text": "`mount`"
      },
      {
        "id": "c",
        "text": "`df -h`"
      },
      {
        "id": "d",
        "text": "`uname -a`"
      }
    ]
  },
  {
    "id": "csh-q36",
    "prompt": "Quelle commande liste les ports en écoute et les processus qui les ouvrent ?",
    "skills": [
      "c-inspection"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`ps -tlnp`"
      },
      {
        "id": "b",
        "text": "`ss -tlnp`"
      },
      {
        "id": "c",
        "text": "`df -tlnp`"
      },
      {
        "id": "d",
        "text": "`ls -tlnp`"
      }
    ]
  },
  {
    "id": "csh-q37",
    "prompt": "Un disque est plein. Quelle commande aide à trouver le sous-répertoire qui occupe le plus de place ?",
    "skills": [
      "c-inspection"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`df -h /var /home`"
      },
      {
        "id": "b",
        "text": "`free -h --total`"
      },
      {
        "id": "c",
        "text": "`du -sh /var/*`"
      },
      {
        "id": "d",
        "text": "`ls -l /var /home`"
      }
    ]
  },
  {
    "id": "csh-q38",
    "prompt": "Un mot de passe passé en argument d’une commande reste invisible aux autres utilisateurs de la machine.",
    "skills": [
      "c-inspection",
      "c-shell"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "csh-q39",
    "prompt": "Quelle commande affiche l’utilisation de la mémoire du système ? (nom de la commande)",
    "skills": [
      "c-inspection"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "commande"
  },
  {
    "id": "csh-q40",
    "prompt": "Un serveur répond lentement. Quelles vérifications immédiates sont pertinentes ?",
    "skills": [
      "c-inspection"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Redémarrer la machine avant de rien consulter"
      },
      {
        "id": "b",
        "text": "`top` pour repérer les processus qui consomment du processeur"
      },
      {
        "id": "c",
        "text": "`df -h` pour vérifier que les disques ne sont pas pleins"
      },
      {
        "id": "d",
        "text": "`free -h` pour contrôler l’état de la mémoire"
      }
    ]
  }
];
