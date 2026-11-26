// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "lnx-q1",
    "prompt": "Quelle est la valeur octale de la permission `rwxr-x---` ?",
    "skills": [
      "c-perm-read"
    ],
    "difficulty": 1,
    "type": "short",
    "placeholder": "ex. 644"
  },
  {
    "id": "lnx-q2",
    "prompt": "Que signifie la permission `x` sur un répertoire ?",
    "skills": [
      "c-perm-read"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le traverser et accéder aux fichiers qu’il contient"
      },
      {
        "id": "b",
        "text": "Exécuter automatiquement tous les scripts qui s’y trouvent"
      },
      {
        "id": "c",
        "text": "Afficher la liste des noms des fichiers qu’il contient"
      },
      {
        "id": "d",
        "text": "Supprimer le répertoire ainsi que tout son contenu"
      }
    ]
  },
  {
    "id": "lnx-q3",
    "prompt": "Sans aucun droit sur un fichier, un utilisateur ne peut jamais le supprimer, même s’il a le droit d’écriture sur le répertoire qui le contient.",
    "skills": [
      "c-perm-read"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "lnx-q4",
    "prompt": "Quelle permission octale donne lecture et écriture au propriétaire, lecture au groupe et rien aux autres ?",
    "skills": [
      "c-perm-read"
    ],
    "difficulty": 1,
    "type": "short"
  },
  {
    "id": "lnx-q5",
    "prompt": "Le fichier `/usr/bin/find` est en `-rwsr-xr-x root root`. Quel est le risque ?",
    "skills": [
      "c-perm-special"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le programme devient plus lent car il revérifie les droits à chaque fichier lu"
      },
      {
        "id": "b",
        "text": "Seul root peut désormais lancer ce programme, ce qui bloque les autres comptes"
      },
      {
        "id": "c",
        "text": "`-exec` lance des commandes avec les droits root : élévation de privilèges"
      },
      {
        "id": "d",
        "text": "Aucun risque, puisque find ne fait que parcourir et lire le disque sans rien modifier"
      }
    ]
  },
  {
    "id": "lnx-q6",
    "prompt": "Quelles affirmations sur les bits spéciaux sont exactes ?",
    "skills": [
      "c-perm-special"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Le SUID n’a aucun effet quand le propriétaire du binaire est root."
      },
      {
        "id": "b",
        "text": "Un binaire SUID s’exécute avec les droits de son propriétaire."
      },
      {
        "id": "c",
        "text": "Un `+` après les permissions dans `ls -l` signale la présence d’ACL."
      },
      {
        "id": "d",
        "text": "Le sticky bit sur /tmp empêche un utilisateur de supprimer les fichiers des autres."
      }
    ]
  },
  {
    "id": "lnx-q7",
    "prompt": "Quelle règle sudoers respecte le mieux le moindre privilège pour un opérateur qui doit redémarrer nginx ?",
    "skills": [
      "c-users-sudo"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`op ALL=(root) NOPASSWD: /usr/bin/systemctl`"
      },
      {
        "id": "b",
        "text": "`op ALL=(ALL) NOPASSWD: ALL`"
      },
      {
        "id": "c",
        "text": "`op ALL=(root) /usr/bin/vim /etc/nginx/nginx.conf`"
      },
      {
        "id": "d",
        "text": "`op ALL=(root) /usr/bin/systemctl restart nginx`"
      }
    ]
  },
  {
    "id": "lnx-q8",
    "prompt": "Autoriser un utilisateur à lancer `less` en root via sudo peut lui donner un shell root.",
    "skills": [
      "c-users-sudo"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "lnx-q9",
    "prompt": "Lesquels de ces constats sont des indicateurs de compromission ou de grave mauvaise configuration ?",
    "skills": [
      "c-users-sudo",
      "c-perm-read"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Un second compte avec l’UID 0 dans /etc/passwd"
      },
      {
        "id": "b",
        "text": "/etc/shadow en permissions 666"
      },
      {
        "id": "c",
        "text": "Une règle `ALL=(ALL) NOPASSWD: ALL` pour un compte de stagiaire"
      },
      {
        "id": "d",
        "text": "/etc/passwd en permissions 644"
      }
    ]
  },
  {
    "id": "lnx-q10",
    "prompt": "Quelle commande faut-il utiliser pour modifier /etc/sudoers en toute sécurité ?",
    "skills": [
      "c-users-sudo"
    ],
    "difficulty": 1,
    "type": "short"
  },
  {
    "id": "lnx-q11",
    "prompt": "Quelle directive sshd_config interdit l’authentification par mot de passe ?",
    "skills": [
      "c-hardening"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`PermitEmptyPasswords no`"
      },
      {
        "id": "b",
        "text": "`PasswordAuthentication no`"
      },
      {
        "id": "c",
        "text": "`PubkeyAuthentication no`"
      },
      {
        "id": "d",
        "text": "`PermitRootLogin prohibit-password`"
      }
    ]
  },
  {
    "id": "lnx-q12",
    "prompt": "Changer le port SSH de 22 à 2222 suffit à sécuriser un serveur exposé à Internet.",
    "skills": [
      "c-hardening"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "lnx-q13",
    "prompt": "Un script `/opt/scripts/backup.sh` est exécuté chaque nuit par cron en root. Le répertoire `/opt/scripts` est en `drwxrwxrwx`. Décrivez le scénario d’attaque et les corrections.",
    "skills": [
      "c-hardening",
      "c-perm-special"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "lnx-q14",
    "prompt": "Quelles mesures réduisent efficacement le risque d’attaque par force brute sur SSH ?",
    "skills": [
      "c-hardening"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Limiter les tentatives (MaxAuthTries, fail2ban)"
      },
      {
        "id": "b",
        "text": "Afficher une bannière d’avertissement"
      },
      {
        "id": "c",
        "text": "Restreindre l’accès à SSH depuis un VPN ou un bastion"
      },
      {
        "id": "d",
        "text": "Authentification par clé uniquement"
      }
    ]
  },
  {
    "id": "lnx-q15",
    "prompt": "Expliquez à un administrateur junior pourquoi `chmod 777` n’est jamais une bonne solution à un problème d’accès, et ce qu’il doit faire à la place.",
    "skills": [
      "c-perm-special",
      "c-users-sudo"
    ],
    "difficulty": 2,
    "type": "open"
  },
  {
    "id": "lnx-q16",
    "prompt": "Quelle commande liste les fichiers SUID du système de fichiers racine ?",
    "skills": [
      "c-perm-special",
      "c-perm-read"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`find / -xdev -perm 777 -type f`"
      },
      {
        "id": "b",
        "text": "`grep -r suid /etc/passwd /etc/shadow`"
      },
      {
        "id": "c",
        "text": "`chmod -R u-s /`"
      },
      {
        "id": "d",
        "text": "`find / -xdev -perm -4000 -type f`"
      }
    ]
  },
  {
    "id": "lnx-q17",
    "prompt": "Quelle commande affiche les permissions de chaque répertoire du chemin qui mène à un fichier, pour comprendre un refus d’accès ?",
    "skills": [
      "c-acces-diag"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`namei -l /srv/app/conf/app.yml`"
      },
      {
        "id": "b",
        "text": "`which /srv/app/conf/app.yml`"
      },
      {
        "id": "c",
        "text": "`stat -f /srv/app/conf/app.yml`"
      },
      {
        "id": "d",
        "text": "`ls -a /srv/app/conf/app.yml`"
      }
    ]
  },
  {
    "id": "lnx-q18",
    "prompt": "Quelle commande affiche l’UID, le GID et la liste des groupes de l’utilisateur courant ?",
    "skills": [
      "c-acces-diag"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`hostname`"
      },
      {
        "id": "b",
        "text": "`id`"
      },
      {
        "id": "c",
        "text": "`whoami`"
      },
      {
        "id": "d",
        "text": "`uname -a`"
      }
    ]
  },
  {
    "id": "lnx-q19",
    "prompt": "Un utilisateur obtient « Permission denied » en lisant `/srv/app/conf/app.yml`, pourtant en `-rw-r--r--`. Quelle cause est la plus probable ?",
    "skills": [
      "c-acces-diag",
      "c-perm-read"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "L’umask de l’utilisateur masque le droit de lecture du fichier existant"
      },
      {
        "id": "b",
        "text": "Le groupe du fichier n’a pas le droit `w`, donc personne ne peut y accéder"
      },
      {
        "id": "c",
        "text": "Un répertoire du chemin, comme `/srv/app`, n’a pas le droit `x` pour lui"
      },
      {
        "id": "d",
        "text": "Le sticky bit est positionné sur le fichier, ce qui interdit sa lecture"
      }
    ]
  },
  {
    "id": "lnx-q20",
    "prompt": "La commande `sudo -l` liste les commandes que l’utilisateur courant est autorisé à lancer avec sudo.",
    "skills": [
      "c-acces-diag",
      "c-users-sudo"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "lnx-q21",
    "prompt": "Quelle commande affiche les ACL POSIX d’un fichier ?",
    "skills": [
      "c-acces-diag",
      "c-perm-special"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "commande"
  },
  {
    "id": "lnx-q22",
    "prompt": "Quelles commandes aident à diagnostiquer un refus d’accès à un fichier, sans rien modifier ?",
    "skills": [
      "c-acces-diag"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "`id` pour lister les groupes du compte concerné"
      },
      {
        "id": "b",
        "text": "`getfacl` sur le fichier et ses répertoires"
      },
      {
        "id": "c",
        "text": "`chmod -R 777` sur le chemin pour « tester »"
      },
      {
        "id": "d",
        "text": "`namei -l` sur le chemin complet"
      }
    ]
  },
  {
    "id": "lnx-q23",
    "prompt": "L’utilisateur `bob`, qui n’est ni root ni membre du groupe `app`, tente de lire `/srv/app/conf/app.yml`. Quel est le résultat ?",
    "skills": [
      "c-acces-diag",
      "c-perm-read"
    ],
    "difficulty": 3,
    "context": {
      "lang": "text",
      "code": "$ ls -ld /srv/app /srv/app/conf /srv/app/conf/app.yml\ndrwxr-x--- 5 root app   4096 /srv/app\ndrwxr-xr-x 2 root root  4096 /srv/app/conf\n-rw-r--r-- 1 root root   812 /srv/app/conf/app.yml"
    },
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Refus : il ne peut pas traverser `/srv/app` (aucun droit pour les autres)"
      },
      {
        "id": "b",
        "text": "Succès : le fichier est lisible par tous, les répertoires parents importent peu"
      },
      {
        "id": "c",
        "text": "Succès : le droit `x` du groupe `app` suffit à ouvrir le chemin à tous"
      },
      {
        "id": "d",
        "text": "Refus : le fichier appartient à root, seul son propriétaire peut le lire"
      }
    ]
  },
  {
    "id": "lnx-q24",
    "prompt": "Après une mise à jour, un service web exécuté sous le compte `www-data` n’arrive plus à écrire dans `/var/www/uploads`. Décrivez votre démarche de diagnostic, avec les commandes, avant toute correction.",
    "skills": [
      "c-acces-diag",
      "c-perm-read"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "lnx-q25",
    "prompt": "Que produit `chmod 640 rapport.txt` ?",
    "skills": [
      "c-perm-read"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Lecture et écriture pour tous, avec exécution refusée à chacun"
      },
      {
        "id": "b",
        "text": "`r--` pour le propriétaire, `rw-` pour le groupe, rien pour les autres"
      },
      {
        "id": "c",
        "text": "`rw-` pour le propriétaire, `r--` pour le groupe, rien pour les autres"
      },
      {
        "id": "d",
        "text": "Lecture seule pour tous, écriture refusée même à son propriétaire"
      }
    ]
  },
  {
    "id": "lnx-q26",
    "prompt": "Avec `umask 027`, quelles permissions reçoit un nouveau fichier ordinaire, créé par un programme qui demande 666 ?",
    "skills": [
      "c-perm-read"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`rw-rw-rw-` (666) : l’umask ne s’applique qu’aux répertoires"
      },
      {
        "id": "b",
        "text": "`-----w-rwx` (027) : l’umask s’applique tel quel"
      },
      {
        "id": "c",
        "text": "`rwxr-x---` (750)"
      },
      {
        "id": "d",
        "text": "`rw-r-----` (640)"
      }
    ]
  },
  {
    "id": "lnx-q27",
    "prompt": "Le droit `r` sur un répertoire suffit pour lire le contenu des fichiers qu’il contient, même sans le droit `x`.",
    "skills": [
      "c-perm-read"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "lnx-q28",
    "prompt": "Quelle permission octale correspond à `rwxr-x--x` ?",
    "skills": [
      "c-perm-read"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "ex. 644"
  },
  {
    "id": "lnx-q29",
    "prompt": "Quel affichage de `ls -ld` correspond à un répertoire partagé avec le sticky bit, comme `/tmp` ?",
    "skills": [
      "c-perm-special"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`-rwxrwxrwt`"
      },
      {
        "id": "b",
        "text": "`drwxrwxrwt`"
      },
      {
        "id": "c",
        "text": "`drwsrwxrwx`"
      },
      {
        "id": "d",
        "text": "`drwxrwsrwx`"
      }
    ]
  },
  {
    "id": "lnx-q30",
    "prompt": "Sous Linux, le bit SUID est ignoré sur un script interprété (commençant par `#!`), mais pas sur un interpréteur compilé comme `python` ou `perl`.",
    "skills": [
      "c-perm-special"
    ],
    "difficulty": 3,
    "type": "truefalse"
  },
  {
    "id": "lnx-q31",
    "prompt": "Un programme doit seulement écouter sur le port 443 sans tourner en root. Quelle approche réduit le plus le risque ?",
    "skills": [
      "c-perm-special",
      "c-hardening"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Lui donner la capacité ciblée `cap_net_bind_service` avec `setcap`"
      },
      {
        "id": "b",
        "text": "Le placer en SUID root avec un propriétaire strictement contrôlé"
      },
      {
        "id": "c",
        "text": "Passer son répertoire en 777 pour que tout compte puisse le lancer"
      },
      {
        "id": "d",
        "text": "Poser le sticky bit sur le répertoire qui contient le programme"
      }
    ]
  },
  {
    "id": "lnx-q32",
    "prompt": "Quelles affirmations sur le bit SGID sont exactes ?",
    "skills": [
      "c-perm-special"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Il s’affiche par un `s` à la place du `x` du groupe."
      },
      {
        "id": "b",
        "text": "Sur un exécutable, le processus prend le groupe du fichier comme groupe effectif."
      },
      {
        "id": "c",
        "text": "Sur un répertoire, les nouveaux fichiers héritent du groupe du répertoire."
      },
      {
        "id": "d",
        "text": "Il fait exécuter le programme avec les droits de son propriétaire."
      }
    ]
  },
  {
    "id": "lnx-q33",
    "prompt": "Quel avantage principal `sudo` offre-t-il par rapport au partage du mot de passe root entre administrateurs ?",
    "skills": [
      "c-users-sudo"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Il chiffre les fichiers que modifie l’administrateur"
      },
      {
        "id": "b",
        "text": "Chaque action est journalisée au nom du compte"
      },
      {
        "id": "c",
        "text": "Il empêche root de se connecter sur la console locale"
      },
      {
        "id": "d",
        "text": "Il supprime le besoin d’authentifier l’administrateur"
      }
    ]
  },
  {
    "id": "lnx-q34",
    "prompt": "Où ajouter proprement une règle sudo propre à une application, sans toucher au fichier principal ?",
    "skills": [
      "c-users-sudo"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Dans `/etc/passwd`, en ajoutant les commandes au compte concerné"
      },
      {
        "id": "b",
        "text": "Directement dans `/etc/sudoers`, avec l’éditeur de texte habituel"
      },
      {
        "id": "c",
        "text": "Dans le `~/.bashrc` de l’utilisateur concerné, sous forme d’alias"
      },
      {
        "id": "d",
        "text": "Dans un fichier de `/etc/sudoers.d/`, édité avec `visudo -f`"
      }
    ]
  },
  {
    "id": "lnx-q35",
    "prompt": "Avec la règle `op ALL=(root) /usr/bin/systemctl restart nginx`, l’utilisateur `op` ne peut pas lancer `sudo systemctl restart sshd`.",
    "skills": [
      "c-users-sudo"
    ],
    "difficulty": 3,
    "type": "truefalse"
  },
  {
    "id": "lnx-q36",
    "prompt": "Quel UID porte le compte root ?",
    "skills": [
      "c-users-sudo",
      "c-perm-read"
    ],
    "difficulty": 1,
    "type": "short",
    "placeholder": "nombre"
  },
  {
    "id": "lnx-q37",
    "prompt": "Pourquoi interdire la connexion SSH directe de root au profit d’un compte nominatif suivi de `sudo` ?",
    "skills": [
      "c-hardening",
      "c-users-sudo"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Pour désactiver le compte root et libérer son UID 0"
      },
      {
        "id": "b",
        "text": "Pour accélérer la connexion en évitant de vérifier les clés"
      },
      {
        "id": "c",
        "text": "Pour attribuer chaque action à une personne identifiable"
      },
      {
        "id": "d",
        "text": "Pour que root ne puisse plus exécuter la moindre commande"
      }
    ]
  },
  {
    "id": "lnx-q38",
    "prompt": "Vous devez durcir SSH sur un serveur distant que vous administrez uniquement par SSH. Comment procédez-vous pour ne pas vous enfermer dehors ?",
    "skills": [
      "c-hardening"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "lnx-q39",
    "prompt": "Où doit être stockée la clé privée SSH d’un administrateur ?",
    "skills": [
      "c-hardening"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Dans `/etc/ssh/` du serveur, lisible par tous les comptes"
      },
      {
        "id": "b",
        "text": "Sur son poste, protégée par une phrase secrète"
      },
      {
        "id": "c",
        "text": "Dans `~/.ssh/authorized_keys` du serveur, avec la clé publique"
      },
      {
        "id": "d",
        "text": "Dans un dépôt Git d’équipe, pour pouvoir la sauvegarder"
      }
    ]
  },
  {
    "id": "lnx-q40",
    "prompt": "Quel contrôle détecte le mieux une modification discrète de `/etc/passwd` ou de `/etc/sudoers` ?",
    "skills": [
      "c-hardening",
      "c-perm-read"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un message de connexion qui rappelle la politique de sécurité"
      },
      {
        "id": "b",
        "text": "Une bannière SSH qui avertit des sanctions prévues en cas d’abus"
      },
      {
        "id": "c",
        "text": "Un `chmod 444` posé une fois pour toutes, jamais revérifié ensuite"
      },
      {
        "id": "d",
        "text": "Un contrôle d’intégrité (AIDE) ou des règles auditd sur ces fichiers"
      }
    ]
  },
  {
    "id": "lnx-q41",
    "prompt": "Avec un umask `027`, quelles permissions reçoit un fichier créé ?",
    "skills": [
      "c-perm-read"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "640 (rw-r-----)"
      },
      {
        "id": "b",
        "text": "644 (rw-r--r--)"
      },
      {
        "id": "c",
        "text": "600 (rw-------)"
      },
      {
        "id": "d",
        "text": "750 (rwxr-x---)"
      }
    ]
  },
  {
    "id": "lnx-q42",
    "prompt": "Que recherche la commande `find / -xdev -type f -perm -4000` ?",
    "skills": [
      "c-perm-special"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Les fichiers sans propriétaire connu"
      },
      {
        "id": "b",
        "text": "Les fichiers modifiables par tout le monde"
      },
      {
        "id": "c",
        "text": "Les fichiers dont le bit SUID est positionné"
      },
      {
        "id": "d",
        "text": "Les fichiers exécutables par leur seul propriétaire"
      }
    ]
  },
  {
    "id": "lnx-q43",
    "prompt": "Quelle option de `find` limite la recherche au système de fichiers de départ ?",
    "skills": [
      "c-perm-special"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "option"
  },
  {
    "id": "lnx-q44",
    "prompt": "Une tâche planifiée crée un fichier de clés avec un umask `022`. Quel est le risque principal ?",
    "skills": [
      "c-hardening"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le fichier est supprimé à la fermeture de session"
      },
      {
        "id": "b",
        "text": "Le fichier devient exécutable pour tout le monde"
      },
      {
        "id": "c",
        "text": "Le fichier est chiffré par le système"
      },
      {
        "id": "d",
        "text": "Le fichier est lisible par tous les utilisateurs"
      }
    ]
  }
];
