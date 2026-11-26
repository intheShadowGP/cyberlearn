// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "c-systemd-journaux-confinement",
  questions: {
    "lsys-q1": {
      "type": "single",
      "correct": "d",
      "explanation": "`ss -tulpn` : `t` TCP, `u` UDP, `l` sockets en écoute, `p` processus associé, `n` adresses numériques. Il remplace `netstat -tulpn` sur les distributions récentes.",
      "whyWrong": {
        "b": "`ps -ef` liste les processus, mais pas les ports sur lesquels ils écoutent.",
        "a": "`journalctl -f` suit les journaux en direct ; il n’inventorie pas les sockets.",
        "c": "`ip route show` affiche la table de routage, pas les ports en écoute."
      }
    },
    "lsys-q2": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Tant que le processus tourne, le noyau garde le fichier ouvert : `cp /proc/<pid>/exe binaire.bin` récupère le contenu même si l’entrée du répertoire a été supprimée. C’est pour cela qu’on copie le binaire avant de tuer le processus."
    },
    "lsys-q3": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "`NoNewPrivileges` empêche tout gain de droits, `ProtectSystem=strict` rend le système de fichiers en lecture seule, un `CapabilityBoundingSet` vide retire toutes les capacités Linux.",
      "whyWrong": {
        "c": "`Restart=always` relance le service s’il s’arrête : c’est de la disponibilité, pas du confinement."
      }
    },
    "lsys-q4": {
      "type": "short",
      "accepted": [
        "systemd-analyze security",
        "sudo systemd-analyze security"
      ],
      "explanation": "`systemd-analyze security <unité>` évalue les directives de confinement présentes et attribue une note d’exposition de 0 (très confiné) à 10 (aucune restriction)."
    },
    "lsys-q5": {
      "type": "single",
      "correct": "b",
      "explanation": "`-p err` filtre par priorité (err, crit, alert, emerg) et `-b` limite au démarrage en cours.",
      "whyWrong": {
        "c": "`-u` filtre par unité systemd : il n’existe pas d’unité nommée « err ».",
        "a": "`dmesg --clear` efface le tampon du noyau : à proscrire en investigation.",
        "d": "`ausearch` interroge les événements d’audit selon une clé, pas les niveaux du journal système."
      }
    },
    "lsys-q6": {
      "type": "short",
      "accepted": [
        "ausearch -k identite",
        "ausearch -k identite -i",
        "ausearch -i -k identite",
        "sudo ausearch -k identite"
      ],
      "explanation": "`ausearch -k identite` retrouve les événements produits par les règles portant cette clé ; `-i` traduit les UID et appels système en noms lisibles."
    },
    "lsys-q7": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Un attaquant qui obtient root sur le serveur peut justement effacer ou modifier ses journaux. Seule une copie exportée en continu vers un serveur où il n’a pas de droits garantit la traçabilité."
    },
    "lsys-q8": {
      "type": "open",
      "model": "Poser une règle auditd persistante : `-w /root/.ssh/authorized_keys -p wa -k cles_ssh` (et sur les `authorized_keys` des comptes d’administration), dans `/etc/audit/rules.d/`, puis recharger avec `augenrules --load`. Exporter les journaux d’audit vers le SIEM (audisp-plugins, agent). Consultation : `ausearch -k cles_ssh -i`, qui montre l’utilisateur d’origine (auid, conservé même après sudo), le processus et l’heure. Créer une alerte dans le SIEM sur cette clé, et compléter par un contrôle d’intégrité (AIDE).",
      "criteria": [
        "Une règle auditd avec surveillance en écriture du fichier est proposée.",
        "Une clé de recherche et la commande de consultation sont données.",
        "L’export vers un système central ou une alerte est prévu.",
        "L’identification de l’utilisateur réel (auid) ou de l’horodatage est mentionnée."
      ],
      "explanation": "L’ajout d’une clé SSH est une technique de persistance courante (MITRE ATT&CK T1098.004) : la tracer de bout en bout est un classique de la détection Linux."
    },
    "lsys-q9": {
      "type": "single",
      "correct": "c",
      "explanation": "AppArmor associe à chaque programme un profil listant les chemins accessibles. SELinux attache un contexte à chaque objet et processus et autorise ou non les interactions entre types.",
      "whyWrong": {
        "b": "Les deux disposent des modes d’application et de journalisation seule (`enforce`/`complain`, `enforcing`/`permissive`).",
        "d": "Les deux s’ajoutent aux permissions Unix : un accès doit être autorisé par les deux mécanismes.",
        "a": "Ce sont deux modules de sécurité distincts, aux modèles différents."
      }
    },
    "lsys-q10": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "La démarche : comprendre le refus (`audit2why`), puis corriger l’étiquette du répertoire ou activer le booléen prévu pour ce besoin. Le service reste confiné.",
      "whyWrong": {
        "a": "Désactiver l’application de la politique pour tout le système supprime la protection de tous les services, pas seulement celui-ci."
      }
    },
    "lsys-q11": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Le mode permissif sert à mettre au point une politique : les refus apparaissent dans les journaux (AVC) sans être appliqués. Laissé en production, il ne protège plus rien."
    },
    "lsys-q12": {
      "type": "open",
      "model": "Le contrôle d’accès obligatoire est évalué par le noyau indépendamment de l’identité Unix : le processus web reste dans son domaine (par exemple `httpd_t`) ou son profil. Même si l’attaquant exécute du code dans ce processus, il ne peut lire que les fichiers étiquetés pour le web, ne peut pas écrire dans les binaires système, lancer un shell non autorisé, ouvrir des connexions sortantes interdites ou lire `/etc/shadow`. L’exécution de code ne se transforme donc pas directement en contrôle de la machine ; l’attaquant doit trouver une seconde vulnérabilité pour sortir du confinement.",
      "criteria": [
        "La politique MAC est décrite comme indépendante des droits Unix ou du compte.",
        "Des exemples concrets d’actions bloquées sont donnés.",
        "L’idée de limitation du rayon d’impact (nécessité d’une seconde faille) est exprimée."
      ],
      "explanation": "C’est le principe de défense en profondeur : on suppose que le service sera un jour compromis et on limite ce que la compromission permet."
    },
    "lsys-q13": {
      "type": "single",
      "correct": "a",
      "explanation": "Avec `policy drop`, les paquets de réponse (par exemple la réponse d’un serveur DNS ou d’un dépôt de paquets) sont rejetés s’ils ne sont pas explicitement acceptés. La règle de suivi de connexion les autorise.",
      "whyWrong": {
        "d": "Le suivi de connexion existe, mais il faut une règle qui l’utilise pour accepter les paquets.",
        "b": "La politique s’applique à tous les paquets de la chaîne ; la famille `inet` couvre IPv4 et IPv6.",
        "c": "Il n’existe aucun basculement automatique : la politique reste celle que l’on a écrite."
      }
    },
    "lsys-q14": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "`inet` couvre IPv4 et IPv6, `policy drop` rejette ce qui n’est pas accepté, et un port non autorisé reste donc injoignable.",
      "whyWrong": {
        "a": "Le crochet `input` ne voit que le trafic destiné à la machine. Le trafic sortant passe par une chaîne sur le crochet `output`."
      }
    },
    "lsys-q15": {
      "type": "short",
      "accepted": [
        "drop",
        "policy drop"
      ],
      "explanation": "`policy drop;` dans la déclaration de chaîne : tout paquet qui atteint la fin de la chaîne sans être accepté est rejeté silencieusement."
    },
    "lsys-q16": {
      "type": "single",
      "correct": "c",
      "explanation": "Un pare-feu en refus par défaut n’ouvre que les ports prévus : la porte dérobée écoute, mais personne ne peut s’y connecter depuis le réseau. Le filtrage de sortie aurait en plus gêné une connexion inverse.",
      "whyWrong": {
        "b": "L’umask agit sur les permissions des fichiers créés, pas sur le réseau.",
        "d": "Le port SSH n’a aucun rapport avec un port ouvert par un autre processus.",
        "a": "Plus de journaux aident l’enquête, mais n’empêchent aucune connexion."
      }
    },
    "lsys-q17": {
      "type": "single",
      "correct": "d",
      "explanation": "`systemctl status <unité>` affiche l’état (actif, en échec), le processus principal, le cgroup et les dernières lignes de journal. C’est le premier réflexe quand un service se comporte mal.",
      "whyWrong": {
        "b": "`mask` rend une unité impossible à démarrer : c’est une action, pas un affichage d’état.",
        "c": "`daemon-reload` relit les fichiers d’unités ; il n’affiche rien sur un service.",
        "a": "`list-sockets` liste les unités de socket, pas l’état d’un service."
      }
    },
    "lsys-q18": {
      "type": "single",
      "correct": "a",
      "explanation": "`ProtectHome=yes` masque les répertoires personnels pour le service : un service compromis ne peut pas y lire de clés SSH ni de documents.",
      "whyWrong": {
        "c": "`PrivateTmp=yes` isole `/tmp` et `/var/tmp`, pas les répertoires personnels.",
        "b": "`ProtectSystem=full` met `/usr`, `/boot` et `/etc` en lecture seule, mais laisse `/home` visible.",
        "d": "`NoNewPrivileges=yes` empêche les gains de droits ; il ne masque aucun répertoire."
      }
    },
    "lsys-q19": {
      "type": "truefalse",
      "correct": true,
      "explanation": "`systemctl edit` écrit un fichier `override.conf` dans `/etc/systemd/system/nom.service.d/`. L’unité d’origine reste intacte, ce qui évite de perdre les réglages à la prochaine mise à jour du paquet. `systemctl cat` montre l’unité avec ses surcharges."
    },
    "lsys-q20": {
      "type": "open",
      "model": "Compte dédié (`User=api`), puis : `NoNewPrivileges=yes`, `ProtectSystem=strict` avec `ReadWritePaths=/var/lib/api` et `ReadOnlyPaths=/etc/api`, `ProtectHome=yes`, `PrivateTmp=yes`, `PrivateDevices=yes`, `CapabilityBoundingSet=` vide (le port 8443 est supérieur à 1024, aucune capacité n’est nécessaire), `RestrictAddressFamilies=AF_INET AF_INET6` et `SystemCallFilter=@system-service`. Vérification : `systemctl daemon-reload` et redémarrage, test fonctionnel de l’API, lecture de `journalctl -u api` pour repérer les refus, puis `systemd-analyze security api.service` pour mesurer la baisse de l’exposition. On ne relâche une directive que si un refus précis le justifie.",
      "criteria": [
        "Un compte dédié non privilégié et `NoNewPrivileges` sont posés.",
        "Le système de fichiers est restreint (`ProtectSystem`, chemins en écriture limités).",
        "Les capacités, familles d’adresses ou appels système sont limités.",
        "Une vérification fonctionnelle et la mesure `systemd-analyze security` sont prévues."
      ],
      "explanation": "Le confinement se construit par retrait : on part de tout interdire, on teste, et on rouvre uniquement ce qu’un refus journalisé justifie."
    },
    "lsys-q21": {
      "type": "single",
      "correct": "b",
      "explanation": "`AmbientCapabilities=CAP_NET_BIND_SERVICE` donne au processus la seule capacité d’ouvrir un port inférieur à 1024, sans le rendre root. Elle doit rester autorisée dans `CapabilityBoundingSet`.",
      "whyWrong": {
        "a": "Un ensemble vide retire toutes les capacités, y compris celle nécessaire : l’ouverture du port 443 échouerait.",
        "d": "Un service en root dispose de tous les pouvoirs : on cherche précisément à l’éviter.",
        "c": "`PrivateNetwork=yes` coupe le service du réseau : il ne pourrait plus servir personne."
      }
    },
    "lsys-q22": {
      "type": "single",
      "correct": "c",
      "explanation": "`authorized_keys` liste les clés publiques acceptées pour le compte. Y ajouter une clé donne un accès durable sans mot de passe : c’est une technique de persistance classique à contrôler lors d’une investigation.",
      "whyWrong": {
        "a": "`known_hosts` mémorise les serveurs que le compte a déjà contactés.",
        "d": "C’est la clé privée du compte, utilisée pour se connecter ailleurs.",
        "b": "C’est la clé privée d’hôte du serveur, qui prouve son identité aux clients."
      }
    },
    "lsys-q23": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Les attaquants se maintiennent par cron, par des unités ou minuteurs systemd et par des clés SSH ajoutées. On y ajoute les profils shell et `/etc/ld.so.preload`.",
      "whyWrong": {
        "c": "Les pages de manuel sont de la documentation : elles ne s’exécutent pas et ne donnent aucun accès."
      }
    },
    "lsys-q24": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Les bibliothèques listées dans `/etc/ld.so.preload` sont chargées dans chaque programme dynamique : c’est un moyen classique de dissimuler des processus ou des fichiers (rootkit en espace utilisateur). Ce fichier est normalement absent ou vide."
    },
    "lsys-q25": {
      "type": "single",
      "correct": "a",
      "explanation": "`systemctl list-timers` affiche les minuteurs, leur dernière et prochaine exécution et l’unité qu’ils déclenchent. Un minuteur inconnu est un indice de persistance, au même titre qu’une tâche cron.",
      "whyWrong": {
        "c": "`crontab -r` supprime la crontab de l’utilisateur : à ne jamais lancer en investigation.",
        "d": "`at -l` liste les tâches `at` en attente, pas les minuteurs systemd.",
        "b": "`journalctl --list-boots` liste les démarrages enregistrés."
      }
    },
    "lsys-q26": {
      "type": "short",
      "accepted": [
        "crontab -l",
        "sudo crontab -l"
      ],
      "explanation": "`crontab -l` affiche les tâches planifiées de l’utilisateur ; `sudo crontab -l -u compte` celles d’un autre compte. Attention : `crontab -r` supprime la crontab sans confirmation."
    },
    "lsys-q27": {
      "type": "single",
      "correct": "b",
      "explanation": "Un service légitime lance un binaire installé par un paquet (`/usr/bin`, `/usr/sbin`, `/opt`). Un exécutable caché dans `/var/tmp`, répertoire inscriptible par tous, est l’indice décisif. Les autres éléments sont banals.",
      "whyWrong": {
        "a": "`Restart=always` est une directive courante, utilisée par de nombreux services légitimes.",
        "c": "`multi-user.target` est la cible normale des services démarrés au boot.",
        "d": "Le nom ne prouve rien : un nom banal ne prouve ni la bonne foi ni la compromission."
      }
    },
    "lsys-q28": {
      "type": "open",
      "model": "Avant toute modification : isoler la machine si possible, copier les journaux et noter l’état (processus, connexions). Inventorier en lecture seule : crontabs de tous les comptes et `/etc/cron.*`, `systemctl list-unit-files --state=enabled` et `list-timers`, unités récentes (`find /etc/systemd /usr/lib/systemd -newer …`), `authorized_keys` de chaque compte, `/etc/ld.so.preload`, profils shell (`~/.bashrc`, `/etc/profile.d`), comptes en UID 0 ou nouveaux, binaires SUID. Dater les éléments (`stat`, `ausearch`, journaux) pour reconstituer la chronologie. Puis retirer chaque mécanisme, renouveler les secrets exposés (clés SSH, mots de passe, jetons), corriger la faille d’entrée. Vérification : surveillance renforcée (règles auditd sur les emplacements de persistance, alertes SIEM), nouvelle recherche après quelques jours, et idéalement reconstruction à partir d’une image saine.",
      "criteria": [
        "Une démarche de préservation avant modification est annoncée.",
        "Au moins trois emplacements de persistance sont cités (cron, systemd, clés SSH, ld.so.preload, profils…).",
        "La datation des éléments ou la chronologie sont évoquées.",
        "Le renouvellement des secrets ou la reconstruction et une surveillance de contrôle sont prévus."
      ],
      "explanation": "Retirer une seule porte dérobée ne suffit presque jamais : l’attaquant en laisse plusieurs. Une éviction réussie se prouve par la surveillance, pas par l’absence de symptômes."
    },
    "lsys-q29": {
      "type": "truefalse",
      "correct": false,
      "explanation": "L’attaquant peut avoir laissé d’autres accès (cron, unité systemd, compte supplémentaire, `ld.so.preload`) et peut avoir volé des secrets. Il faut rechercher toutes les persistances, renouveler les secrets, corriger la faille initiale et surveiller."
    },
    "lsys-q30": {
      "type": "single",
      "correct": "d",
      "explanation": "Avec `Storage=persistent`, journald écrit dans `/var/log/journal` et conserve l’historique après un redémarrage. En mode volatile, il vit en mémoire dans `/run/log/journal` et disparaît à l’arrêt.",
      "whyWrong": {
        "b": "Le mode volatile garde les journaux en mémoire : ils sont perdus au redémarrage.",
        "c": "La compression ne change pas la durée de conservation.",
        "a": "Cette option duplique les messages sur la console ; elle ne les enregistre pas."
      }
    },
    "lsys-q31": {
      "type": "single",
      "correct": "a",
      "explanation": "`auid` (audit user id) est fixé à la connexion et ne change pas avec `su` ou `sudo` : il permet d’attribuer une action de root à la personne qui s’est réellement connectée.",
      "whyWrong": {
        "b": "L’UID effectif est un autre champ (`euid`) et vaut 0 après un `sudo`.",
        "c": "La règle est identifiée par sa clé (`key`), pas par l’`auid`.",
        "d": "Le fichier est décrit par son chemin et son inode, pas par l’`auid`."
      }
    },
    "lsys-q32": {
      "type": "short",
      "accepted": [
        "augenrules --load",
        "sudo augenrules --load"
      ],
      "explanation": "`augenrules --load` assemble les fichiers de `/etc/audit/rules.d/` en `audit.rules` et les charge. Une règle ajoutée avec `auditctl` seul disparaît au redémarrage."
    },
    "lsys-q34": {
      "type": "truefalse",
      "correct": false,
      "explanation": "journald collecte les messages des services et du noyau, mais ne surveille pas les accès aux fichiers. Savoir qui a modifié un fichier précis exige une règle d’audit (`-w /etc/sudoers -p wa`), qui enregistre aussi l’`auid`."
    },
    "lsys-q35": {
      "type": "single",
      "correct": "d",
      "explanation": "`getenforce` affiche le mode courant ; `sestatus` donne un résumé plus détaillé. Le mode au démarrage se règle dans `/etc/selinux/config`.",
      "whyWrong": {
        "b": "`aa-status` décrit l’état d’AppArmor, pas celui de SELinux.",
        "a": "`semodule -l` liste les modules de politique chargés, pas le mode.",
        "c": "`setsebool` modifie un booléen de la politique : ce n’est pas une commande de consultation du mode."
      }
    },
    "lsys-q36": {
      "type": "single",
      "correct": "b",
      "explanation": "Le mode `complain` est l’équivalent du mode permissif de SELinux : les accès hors profil sont enregistrés, ce qui permet d’affiner le profil. Pour appliquer le profil, on le passe en mode `enforce`.",
      "whyWrong": {
        "c": "C’est le mode `enforce` qui bloque les violations.",
        "a": "En `complain`, le programme démarre normalement, profil chargé.",
        "d": "Au contraire : c’est la journalisation des violations qui est l’objet du mode."
      }
    },
    "lsys-q37": {
      "type": "short",
      "accepted": [
        "restorecon"
      ],
      "explanation": "`restorecon -Rv /chemin` réapplique le contexte prévu par la politique (par exemple `httpd_sys_content_t` pour un contenu web). `semanage fcontext` définit au préalable la règle d’étiquetage d’un nouveau chemin."
    },
    "lsys-q38": {
      "type": "single",
      "correct": "c",
      "explanation": "Les refus SELinux sont des événements d’audit de type AVC, écrits dans `/var/log/audit/audit.log` et lisibles avec `ausearch -m AVC` puis `audit2why`.",
      "whyWrong": {
        "d": "`lastlog` enregistre la dernière connexion de chaque compte.",
        "a": "`wtmp` conserve l’historique des connexions et déconnexions.",
        "b": "`/etc/selinux/config` est un fichier de configuration, pas un journal."
      }
    },
    "lsys-q33": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "La validation préalable détecte les erreurs de syntaxe, le retour arrière automatique évite de perdre l’accès, et une journalisation limitée en débit révèle les scans sans saturer le journal.",
      "whyWrong": {
        "a": "Ouvrir SSH à tout Internet augmente la surface d’attaque : on restreint l’accès au réseau d’administration et on sécurise le déploiement autrement."
      }
    },
    "lsys-q39": {
      "type": "single",
      "correct": "c",
      "explanation": "`nft list ruleset` affiche toutes les tables, chaînes et règles chargées dans le noyau, sans rien modifier. C’est la référence pour vérifier ce qui est réellement appliqué.",
      "whyWrong": {
        "a": "`flush ruleset` efface toutes les règles : le serveur se retrouve sans filtrage.",
        "d": "`iptables -F` vide les chaînes iptables, ce qui est une action de modification et non d’affichage.",
        "b": "`ufw reset` réinitialise la configuration d’un autre outil de pare-feu."
      }
    },
    "lsys-q40": {
      "type": "single",
      "correct": "b",
      "explanation": "L’option `-c` (check) analyse le fichier sans modifier le jeu de règles en place. Sur un serveur distant, elle évite d’appliquer une règle erronée et de se couper l’accès.",
      "whyWrong": {
        "a": "Sans `-c`, le fichier est appliqué immédiatement.",
        "c": "`reload` applique le fichier du service : ce n’est pas une simple vérification.",
        "d": "`list tables` affiche les tables chargées, il ne lit pas le fichier."
      }
    },
    "lsys-q41": {
      "type": "single",
      "correct": "a",
      "explanation": "Cette option bloque l’élévation de privilèges par `execve` (binaires setuid, capacités de fichier) : un service compromis ne peut pas s’en servir pour monter en droits.",
      "whyWrong": {
        "b": "Elle n’a aucun effet sur la vitesse de démarrage.",
        "c": "Elle ne concerne pas l’écriture dans les journaux.",
        "d": "Elle fait l’inverse : elle limite les privilèges."
      }
    },
    "lsys-q42": {
      "type": "single",
      "correct": "d",
      "explanation": "Sans stockage persistant ou avec une taille maximale basse, journald perd les anciennes entrées. D’où l’intérêt d’un stockage persistant et d’une copie vers un serveur de journaux.",
      "whyWrong": {
        "b": "L’absence de trace ne prouve pas l’absence d’événement.",
        "c": "journalctl peut afficher bien plus ancien si les données existent.",
        "a": "Rien n’indique une copie ; ce n’est pas le comportement par défaut."
      }
    },
    "lsys-q43": {
      "type": "single",
      "correct": "c",
      "explanation": "Une unité créée récemment qui lance un programme depuis un répertoire temporaire inscriptible est un schéma classique de persistance : on compare avec les dates et on remonte à l’origine.",
      "whyWrong": {
        "b": "Un service ancien et attendu n’est pas un indice en soi.",
        "a": "La rotation des journaux fait partie de la distribution.",
        "d": "Un paquet officiel n’est pas anormal."
      }
    }
  },
};
