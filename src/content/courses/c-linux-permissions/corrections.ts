// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "c-linux-permissions",
  questions: {
    "lnx-q1": {
      "type": "short",
      "accepted": [
        "750",
        "0750"
      ],
      "explanation": "rwx = 4+2+1 = 7 ; r-x = 4+1 = 5 ; --- = 0. La permission octale est 750."
    },
    "lnx-q2": {
      "type": "single",
      "correct": "a",
      "explanation": "Sur un répertoire, `x` autorise la traversée : y entrer (`cd`) et accéder aux fichiers dont on connaît le nom. Lister les noms nécessite `r`.",
      "whyWrong": {
        "b": "L’exécution d’un script dépend du droit `x` sur le script lui-même.",
        "c": "Lister les noms est le droit `r` sur un répertoire.",
        "d": "Supprimer un répertoire dépend du droit `w` sur son parent, pas du droit `x`."
      }
    },
    "lnx-q3": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Supprimer un fichier modifie le répertoire (on retire une entrée), pas le fichier. Le droit `w` sur le répertoire suffit, sauf si le sticky bit est positionné. C’est pourquoi un répertoire modifiable par tous est dangereux."
    },
    "lnx-q4": {
      "type": "short",
      "accepted": [
        "640",
        "0640"
      ],
      "explanation": "rw- = 6, r-- = 4, --- = 0 : 640. C’est la permission typique de `/etc/shadow` (propriétaire root, groupe shadow)."
    },
    "lnx-q5": {
      "type": "single",
      "correct": "c",
      "explanation": "`find` peut exécuter des commandes via `-exec`. En SUID root, `find . -exec /bin/sh -p \\;` donne un shell avec l’UID effectif root. C’est une élévation de privilèges triviale, référencée dans GTFOBins.",
      "whyWrong": {
        "d": "find n’est pas en lecture seule : `-exec` et `-delete` agissent sur le système.",
        "a": "Le SUID ne ralentit pas le programme.",
        "b": "Le SUID ne restreint pas l’usage : tout utilisateur qui peut exécuter le binaire le lance avec les droits du propriétaire."
      }
    },
    "lnx-q6": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Le sticky bit protège les fichiers des autres dans un répertoire partagé ; le SUID exécute avec les droits du propriétaire ; le `+` signale des ACL étendues.",
      "whyWrong": {
        "a": "C’est l’inverse : SUID avec un propriétaire root est précisément le cas le plus dangereux."
      }
    },
    "lnx-q7": {
      "type": "single",
      "correct": "d",
      "explanation": "La première règle autorise une seule commande avec un argument précis. Celle qui autorise `systemctl` sans argument permet d’arrêter ou de lancer n’importe quel service ; celle de vim permet d’ouvrir un shell ; `ALL` donne root complet.",
      "whyWrong": {
        "b": "ALL sans mot de passe donne root complet : aucun moindre privilège.",
        "a": "Sans argument, systemctl permet d’arrêter ou de lancer n’importe quel service.",
        "c": "Depuis vim, `:!sh` ouvre un shell root : cette règle équivaut à donner root."
      }
    },
    "lnx-q8": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Depuis `less`, la commande `!sh` lance un shell qui hérite des droits root. Il en va de même pour `more`, `man`, `vim`, `awk`, `find`… Si une lecture privilégiée est nécessaire, on préfère `sudoedit` ou des droits de groupe."
    },
    "lnx-q9": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Un second UID 0 est une porte dérobée classique ; /etc/shadow lisible et modifiable par tous expose et permet de remplacer les empreintes ; un NOPASSWD ALL donne root sans contrôle.",
      "whyWrong": {
        "d": "644 est la permission normale de /etc/passwd : il ne contient plus d’empreintes de mots de passe."
      }
    },
    "lnx-q10": {
      "type": "short",
      "accepted": [
        "visudo",
        "sudo visudo"
      ],
      "explanation": "`visudo` verrouille le fichier et vérifie la syntaxe avant d’enregistrer. Une erreur de syntaxe dans sudoers peut sinon rendre sudo inutilisable et bloquer l’administration."
    },
    "lnx-q11": {
      "type": "single",
      "correct": "b",
      "explanation": "`PasswordAuthentication no` (avec `KbdInteractiveAuthentication no`) impose l’authentification par clé. `PermitRootLogin` ne concerne que le compte root.",
      "whyWrong": {
        "d": "Cette directive ne concerne que le compte root : les autres comptes peuvent encore utiliser un mot de passe.",
        "c": "Elle désactiverait l’authentification par clé : l’inverse de l’objectif.",
        "a": "Elle interdit seulement les mots de passe vides ; les mots de passe ordinaires restent acceptés."
      }
    },
    "lnx-q12": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Changer de port réduit le bruit des robots, mais un scan trouve le nouveau port en quelques secondes. La sécurité repose sur l’authentification par clé, l’interdiction de root et la restriction réseau."
    },
    "lnx-q13": {
      "type": "open",
      "model": "Le répertoire étant modifiable par tous, n’importe quel utilisateur local peut supprimer backup.sh et le remplacer par son propre script (le droit w sur le répertoire suffit). À la prochaine exécution, cron lance le script piégé en root : l’attaquant obtient par exemple un shell root ou ajoute sa clé SSH. Corrections : `chown root:root /opt/scripts && chmod 755 /opt/scripts` (ou 750), `chmod 700 /opt/scripts/backup.sh` ; vérifier l’intégrité du script actuel ; rechercher d’autres tâches cron pointant vers des chemins modifiables ; surveiller ces fichiers (auditd, AIDE).",
      "criteria": [
        "Le remplacement du script grâce au droit d’écriture sur le répertoire est expliqué.",
        "L’exécution par cron en root comme vecteur d’élévation est identifiée.",
        "Des permissions correctes sont proposées pour le répertoire et le script.",
        "Une mesure de vérification ou de surveillance est ajoutée."
      ],
      "explanation": "Les tâches planifiées exécutant des fichiers modifiables par un utilisateur sont l’une des élévations de privilèges les plus fréquentes en test d’intrusion Linux."
    },
    "lnx-q14": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Sans mot de passe à deviner, la force brute devient inopérante ; restreindre l’exposition réseau supprime l’essentiel des tentatives ; la limitation du nombre d’essais ralentit les attaques restantes.",
      "whyWrong": {
        "b": "Une bannière a une utilité juridique (avertissement), mais n’arrête aucune tentative."
      }
    },
    "lnx-q15": {
      "type": "open",
      "model": "777 donne lecture, écriture et exécution à tout utilisateur de la machine, y compris les comptes de service compromis (par exemple www-data via une faille web). Un fichier 777 peut être modifié pour y insérer du code ; un répertoire 777 permet de remplacer ses fichiers. À la place : identifier précisément quel compte a besoin de quel accès (`id`, `ls -l`, `namei -l`), puis ajuster le propriétaire ou le groupe (`chown`, `chgrp`), accorder le droit minimal à ce groupe, ou utiliser une ACL ciblée (`setfacl -m u:compte:r fichier`).",
      "criteria": [
        "Le risque pour tous les comptes, y compris de service, est expliqué.",
        "La différence entre fichier et répertoire 777 est mentionnée ou implicite.",
        "Une démarche de diagnostic et une alternative ciblée (groupe, ACL) sont proposées."
      ],
      "explanation": "Le diagnostic précis d’un problème d’accès prend quelques minutes ; un 777 laissé en production peut rester exploitable pendant des années."
    },
    "lnx-q16": {
      "type": "single",
      "correct": "d",
      "explanation": "`-perm -4000` sélectionne les fichiers dont le bit SUID est positionné ; `-xdev` évite de parcourir les autres systèmes de fichiers (/proc, montages réseau). On compare ensuite le résultat à une liste de référence.",
      "whyWrong": {
        "a": "`-perm 777` sélectionne les fichiers dont les permissions valent exactement 777 : cela n’a aucun rapport avec le SUID.",
        "c": "Cette commande retirerait le SUID de tous les fichiers, y compris `passwd` ou `sudo`, et casserait le système.",
        "b": "Le bit SUID est une permission du fichier, pas un texte présent dans les fichiers de comptes."
      }
    },
    "lnx-q17": {
      "type": "single",
      "correct": "a",
      "explanation": "`namei -l` décompose le chemin et affiche, pour chaque composant, le type, les permissions, le propriétaire et le groupe. On repère ainsi le répertoire intermédiaire qui bloque la traversée.",
      "whyWrong": {
        "d": "`ls -a` n’affiche que le dernier élément : il ne décrit pas les répertoires parents.",
        "c": "`stat -f` décrit le système de fichiers (taille, inodes), pas les droits du chemin.",
        "b": "`which` cherche des exécutables dans le PATH ; il n’examine pas des permissions."
      }
    },
    "lnx-q18": {
      "type": "single",
      "correct": "b",
      "explanation": "`id` affiche l’UID, le GID principal et tous les groupes (`id alice` pour un autre compte). Pour un refus d’accès, c’est le premier réflexe : on compare ces groupes au propriétaire et au groupe du fichier.",
      "whyWrong": {
        "c": "`whoami` n’affiche que le nom de l’utilisateur, sans UID ni groupes.",
        "d": "`uname -a` décrit le noyau et la machine, pas le compte.",
        "a": "`hostname` affiche le nom de la machine."
      }
    },
    "lnx-q19": {
      "type": "single",
      "correct": "c",
      "explanation": "Pour accéder à un fichier, il faut le droit `x` sur chaque répertoire du chemin. Un fichier lisible par tous reste inaccessible si un répertoire parent interdit la traversée à l’utilisateur.",
      "whyWrong": {
        "d": "Le sticky bit n’a pas d’effet de lecture ; il ne concerne que la suppression dans un répertoire.",
        "b": "Le droit `w` du groupe n’intervient pas dans la lecture par un autre utilisateur.",
        "a": "L’umask n’agit qu’à la création d’un fichier et ne modifie pas un fichier existant."
      }
    },
    "lnx-q20": {
      "type": "truefalse",
      "correct": true,
      "explanation": "`sudo -l` affiche les règles qui s’appliquent à l’utilisateur courant (commandes, comptes cibles, `NOPASSWD`). C’est l’outil de base pour auditer, ou pour vérifier ce qu’un compte compromis pourrait obtenir."
    },
    "lnx-q21": {
      "type": "short",
      "accepted": [
        "getfacl",
        "getfacl fichier"
      ],
      "explanation": "`getfacl fichier` affiche les entrées d’ACL (utilisateurs et groupes supplémentaires, masque). `setfacl` les modifie. Un `+` après les permissions de `ls -l` signale leur présence."
    },
    "lnx-q22": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Examiner le chemin, les groupes du compte et les ACL permet d’identifier la cause précise sans changer l’état du système. Ouvrir tous les droits pour « tester » masque la cause et crée une faille.",
      "whyWrong": {
        "c": "Cette commande modifie les droits de tout le chemin : ce n’est pas un diagnostic, c’est une faille qui reste en place si on l’oublie."
      }
    },
    "lnx-q23": {
      "type": "single",
      "correct": "a",
      "explanation": "`/srv/app` est en `rwxr-x---` : les « autres » n’ont aucun droit, donc pas de `x`. `bob` ne peut pas traverser ce répertoire, et les permissions plus permissives du fichier ne changent rien. Il faut examiner chaque composant du chemin.",
      "whyWrong": {
        "b": "Les droits du fichier ne servent à rien si un répertoire parent interdit la traversée.",
        "d": "Le fichier est en `r--` pour les autres : le problème n’est pas là.",
        "c": "Seuls les membres du groupe `app` bénéficient des droits de groupe ; `bob` relève de la catégorie « autres »."
      }
    },
    "lnx-q24": {
      "type": "open",
      "model": "Observer avant de corriger. 1) Reproduire et lire le message d’erreur exact (journal du service, `journalctl -u`). 2) Vérifier l’identité réelle du processus (`ps -o user,group -C nginx`, `id www-data`) : un changement de compte ou de groupe après la mise à jour est fréquent. 3) Examiner le chemin complet avec `namei -l /var/www/uploads` : propriétaire, groupe, droit `x` sur chaque répertoire, `w` sur le dernier. 4) Chercher une ACL (`getfacl`, présence d’un `+`) et un montage en lecture seule (`findmnt -T /var/www/uploads`). 5) Si les droits classiques sont corrects, penser au confinement (SELinux, AppArmor, `ReadWritePaths` de l’unité systemd). Correction minimale : redonner à `www-data` (ou à un groupe dédié) le droit d’écriture sur ce seul répertoire, jamais `chmod 777`, puis documenter le changement.",
      "criteria": [
        "Une démarche d’observation avant correction est annoncée (message d’erreur, identité du processus).",
        "Le chemin complet est examiné avec `namei -l`, `ls -ld` ou équivalent.",
        "Les ACL, les montages en lecture seule ou le confinement (SELinux, AppArmor, systemd) sont envisagés.",
        "Une correction minimale ciblée est proposée, sans `chmod 777`."
      ],
      "explanation": "Un refus d’accès se diagnostique par élimination : identité du processus, droits sur tout le chemin, ACL, montage, confinement. Corriger sans diagnostiquer conduit presque toujours à des droits trop larges."
    },
    "lnx-q25": {
      "type": "single",
      "correct": "c",
      "explanation": "Chaque chiffre est la somme des droits : 6 = 4+2 (lecture et écriture) pour le propriétaire, 4 (lecture) pour le groupe, 0 pour les autres.",
      "whyWrong": {
        "d": "Ce serait 444 : le 6 donne au propriétaire la lecture et l’écriture.",
        "a": "Ce serait 666 : les « autres » reçoivent 0 avec 640.",
        "b": "Les chiffres sont dans l’ordre propriétaire, groupe, autres : le propriétaire est celui qui écrit."
      }
    },
    "lnx-q26": {
      "type": "single",
      "correct": "d",
      "explanation": "L’umask retire des droits aux permissions demandées : 666 moins 027 donne 640 (sans bit `x`, qui n’est pas demandé pour un fichier ordinaire). Un répertoire créé avec 777 donne 750.",
      "whyWrong": {
        "c": "750 est le résultat pour un répertoire (demande 777) : un fichier ordinaire ne reçoit pas le droit `x`.",
        "a": "L’umask s’applique à tout ce qui est créé, fichiers comme répertoires.",
        "b": "L’umask est un masque de ce qu’on retire ; il n’est pas la permission résultante."
      }
    },
    "lnx-q27": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Le droit `r` permet seulement de lister les noms. Pour ouvrir un fichier (ou lire ses métadonnées), il faut aussi traverser le répertoire, donc posséder `x`. Sans `x`, `ls` affiche des noms mais chaque accès échoue."
    },
    "lnx-q28": {
      "type": "short",
      "accepted": [
        "751",
        "0751"
      ],
      "explanation": "rwx = 7 ; r-x = 4+1 = 5 ; --x = 1. La permission octale est 751 : les « autres » peuvent traverser un répertoire ou exécuter un programme, sans le lire ni le modifier."
    },
    "lnx-q29": {
      "type": "single",
      "correct": "b",
      "explanation": "Le sticky bit s’affiche par un `t` à la place du `x` des « autres », sur un répertoire (`d`). Un `s` en première position indiquerait un SUID, en deuxième position un SGID.",
      "whyWrong": {
        "c": "Un `s` côté propriétaire est un SUID, qui n’a pas d’effet sur les répertoires sous Linux.",
        "d": "Un `s` côté groupe est un SGID, qui fait hériter du groupe du répertoire.",
        "a": "Le `-` initial désigne un fichier ordinaire : le sticky bit n’a d’intérêt que sur un répertoire."
      }
    },
    "lnx-q30": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Le noyau Linux ignore SUID et SGID sur les scripts à shebang, faute de pouvoir les exécuter sans situation de concurrence. En revanche un interpréteur lui-même en SUID root permet d’exécuter n’importe quel code avec les droits root : c’est le cas à traquer."
    },
    "lnx-q31": {
      "type": "single",
      "correct": "a",
      "explanation": "Les capacités Linux découpent les privilèges de root. `cap_net_bind_service` autorise seulement l’ouverture de ports inférieurs à 1024, sans donner les autres pouvoirs de root, contrairement à un SUID root.",
      "whyWrong": {
        "b": "Un SUID root donne tous les droits de root au programme : tout défaut dans le programme devient une élévation de privilèges.",
        "c": "Rendre le répertoire modifiable par tous permet de remplacer le programme.",
        "d": "Le sticky bit ne protège que les suppressions dans un répertoire ; il n’accorde aucun privilège réseau."
      }
    },
    "lnx-q32": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Le SGID agit sur le groupe : héritage du groupe pour les fichiers créés dans un répertoire partagé, groupe effectif pour un exécutable. C’est le SUID qui agit sur le propriétaire.",
      "whyWrong": {
        "d": "C’est la définition du SUID, pas du SGID."
      }
    },
    "lnx-q33": {
      "type": "single",
      "correct": "b",
      "explanation": "Avec sudo, chaque administrateur s’authentifie avec son propre compte et chaque commande est journalisée à son nom. Les droits peuvent aussi être limités à des commandes précises, ce qu’un mot de passe root partagé ne permet pas.",
      "whyWrong": {
        "a": "sudo ne chiffre rien : il délègue des droits et trace leur usage.",
        "d": "sudo demande par défaut le mot de passe de l’utilisateur ; supprimer l’authentification est un choix (NOPASSWD) à éviter.",
        "c": "Le compte root reste utilisable ; sudo ne le verrouille pas."
      }
    },
    "lnx-q34": {
      "type": "single",
      "correct": "d",
      "explanation": "Un fichier dédié dans `/etc/sudoers.d/` isole la règle et se retire facilement ; `visudo -f` vérifie la syntaxe avant d’enregistrer. Les droits de ce fichier doivent rester 440.",
      "whyWrong": {
        "b": "Une erreur de syntaxe peut rendre sudo inutilisable ; on passe toujours par visudo.",
        "a": "`/etc/passwd` décrit les comptes, pas les droits sudo.",
        "c": "Un alias dans un fichier modifiable par l’utilisateur ne donne aucun droit : sudo lit sa propre configuration."
      }
    },
    "lnx-q35": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Quand une règle sudoers précise des arguments, seule cette ligne de commande exacte est autorisée. Les arguments sont donc une limite de sécurité, à condition de ne pas ajouter de caractère générique."
    },
    "lnx-q36": {
      "type": "short",
      "accepted": [
        "0"
      ],
      "explanation": "Le compte root porte l’UID 0. Le noyau raisonne en numéros : tout compte en UID 0 a les pleins pouvoirs, quel que soit son nom, d’où l’alerte sur un second compte à UID 0."
    },
    "lnx-q37": {
      "type": "single",
      "correct": "c",
      "explanation": "Avec un compte nominatif, les connexions et les commandes `sudo` sont attribuées à une personne. Un accès root direct supprime cette traçabilité et expose la cible la plus connue des attaquants.",
      "whyWrong": {
        "d": "Root reste utilisable via sudo ; seule la connexion directe est interdite.",
        "a": "Le compte root existe toujours ; seule la connexion SSH est bloquée.",
        "b": "La vérification des clés reste inchangée et n’est pas une question de rapidité."
      }
    },
    "lnx-q38": {
      "type": "open",
      "model": "Créer d’abord un compte nominatif, l’ajouter au groupe autorisé et à sudo, installer sa clé publique (`ssh-copy-id`) et **tester une connexion par clé dans une seconde session** avant toute coupure du mot de passe. Modifier ensuite `sshd_config` (`PermitRootLogin no`, `PasswordAuthentication no`, `AllowGroups`), valider la syntaxe avec `sshd -t`, puis recharger (`systemctl reload sshd`) et non redémarrer, en gardant la première session ouverte. Ne la fermer qu’après avoir réussi une nouvelle connexion avec la configuration appliquée. Prévoir un accès de secours (console du fournisseur) et ne pas modifier la règle réseau en même temps.",
      "criteria": [
        "Un compte nominatif et une clé sont préparés avant la coupure du mot de passe.",
        "Une seconde session de test est conservée avant de fermer la première.",
        "La syntaxe est validée (`sshd -t`) avant le rechargement.",
        "Un accès de secours est mentionné."
      ],
      "explanation": "Un durcissement qui verrouille son administrateur est un incident de plus. La méthode (tester en parallèle, valider, recharger, garder une porte de secours) compte autant que les directives."
    },
    "lnx-q39": {
      "type": "single",
      "correct": "b",
      "explanation": "La clé privée ne quitte jamais le poste de l’administrateur et se protège par une phrase secrète. Le serveur ne reçoit que la clé publique, dans `authorized_keys`.",
      "whyWrong": {
        "c": "`authorized_keys` reçoit la clé publique, pas la clé privée.",
        "d": "Un dépôt partagé expose la clé à toute personne qui y a accès et conserve son historique.",
        "a": "Une clé privée lisible par tous les comptes du serveur est compromise d’emblée."
      }
    },
    "lnx-q40": {
      "type": "single",
      "correct": "d",
      "explanation": "Un contrôle d’intégrité compare les fichiers sensibles à une référence, et auditd journalise chaque écriture. Les deux détectent une modification discrète ; une permission posée une fois ou un message d’avertissement ne détectent rien.",
      "whyWrong": {
        "c": "Root peut changer les droits et écrire malgré 444 ; sans contrôle régulier, rien n’est détecté.",
        "a": "Un message n’observe aucun fichier.",
        "b": "Une bannière a une valeur juridique mais ne détecte aucune modification."
      }
    },
    "lnx-q41": {
      "type": "single",
      "correct": "a",
      "explanation": "Un fichier part de 666 ; l’umask 027 retire 0 au propriétaire, 2 (écriture) au groupe et 7 (tout) aux autres, ce qui donne 640.",
      "whyWrong": {
        "b": "C’est le résultat d’un umask 022, pas 027.",
        "c": "C’est le résultat d’un umask 077.",
        "d": "Un fichier ordinaire ne reçoit pas le bit d’exécution à la création ; 750 est le résultat pour un répertoire."
      }
    },
    "lnx-q42": {
      "type": "single",
      "correct": "c",
      "explanation": "`-perm -4000` sélectionne les fichiers où le bit SUID est positionné. `-xdev` limite la recherche au système de fichiers de départ. Les résultats se comparent à une liste de référence.",
      "whyWrong": {
        "b": "Ce serait `-perm -0002`.",
        "a": "Ce serait `-nouser` ou `-nogroup`.",
        "d": "Le bit SUID n’a rien à voir avec une exécution réservée au propriétaire."
      }
    },
    "lnx-q43": {
      "type": "short",
      "accepted": [
        "-xdev"
      ],
      "explanation": "`-xdev` évite de descendre dans les autres systèmes de fichiers montés (`/proc`, partages réseau), ce qui accélère l’audit et évite les faux résultats."
    },
    "lnx-q44": {
      "type": "single",
      "correct": "d",
      "explanation": "Avec 022, un fichier créé en 666 devient 644 : lisible par tous. Un fichier de secrets doit être créé avec un umask restrictif (par exemple 077) fixé explicitement dans le script.",
      "whyWrong": {
        "b": "Un fichier ordinaire n’est pas créé exécutable.",
        "c": "Le système ne chiffre pas les fichiers à la création.",
        "a": "L’umask n’a aucun lien avec la suppression de fichiers."
      }
    }
  },
};
