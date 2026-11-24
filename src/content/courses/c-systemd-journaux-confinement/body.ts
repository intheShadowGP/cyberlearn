import type { CourseBody } from '../../types';
import { questions } from './questions';

export const body: CourseBody = {
  courseId: 'c-systemd-journaux-confinement',
  lesson: {
    intro:
      'Un serveur Linux bien configuré au niveau des fichiers peut rester vulnérable par ce qu’il exécute : un service exposé qui tourne avec trop de droits, un processus inconnu qui écoute sur un port, des journaux que personne ne consulte. Ce cours passe des permissions statiques au comportement du système : ce qui tourne, ce qui est tracé, ce qui est confiné et ce qui peut sortir ou entrer sur le réseau.',
    sections: [
      {
        id: 'processus',
        title: 'Processus et ports : savoir ce qui tourne',
        blocks: [
          { t: 'p', text: 'La première question d’un audit ou d’une investigation est simple : **quels programmes tournent, sous quel compte, et lesquels écoutent sur le réseau ?** Trois outils y répondent.' },
          { t: 'code', lang: 'bash', caption: 'Inventaire rapide', code: '# Arborescence des processus avec utilisateur et ligne de commande\nps -eo pid,ppid,user,cmd --forest\n\n# Ports en écoute (TCP et UDP) avec le processus associé\nss -tulpn\n\n# Binaire réellement exécuté par le processus 4242\nls -l /proc/4242/exe' },
          { t: 'def', term: '/proc', text: 'Système de fichiers virtuel exposé par le noyau. `/proc/<pid>/` décrit chaque processus : `exe` (lien vers le binaire), `cmdline`, `environ`, `fd/` (fichiers ouverts), `maps` (mémoire).' },
          {
            t: 'example',
            title: 'Un binaire supprimé qui tourne encore',
            blocks: [
              { t: 'code', lang: 'text', code: '$ ls -l /proc/4242/exe\nlrwxrwxrwx 1 www-data www-data 0 /proc/4242/exe -> /tmp/.x/kworker (deleted)' },
              { t: 'p', text: 'Trois signaux convergent : un nom qui imite un fil noyau (`kworker`) mais lancé par `www-data`, un binaire dans `/tmp`, et un fichier **supprimé** après lancement. On copie d’abord le binaire depuis `/proc/4242/exe` pour l’analyse, **avant** de tuer le processus.' },
            ],
          },
          { t: 'callout', kind: 'warn', text: 'Sur une machine compromise, `ps` ou `ss` peuvent avoir été remplacés par un rootkit. Les résultats d’un système suspect se confirment avec des outils fiables (binaires statiques sur support externe) ou depuis l’extérieur (scan réseau, analyse mémoire).' },
        ],
      },
      {
        id: 'systemd',
        title: 'systemd : services et confinement',
        blocks: [
          { t: 'p', text: 'systemd démarre et supervise les services décrits par des **unités** (`.service`, `.timer`, `.socket`). Une unité peut aussi **restreindre** ce que le service a le droit de faire, sans modifier le programme.' },
          { t: 'code', lang: 'ini', caption: 'Extrait d’unité durcie (/etc/systemd/system/api.service)', code: '[Service]\nUser=api\nNoNewPrivileges=yes\nProtectSystem=strict\nReadWritePaths=/var/lib/api\nProtectHome=yes\nPrivateTmp=yes\nPrivateDevices=yes\nCapabilityBoundingSet=\nRestrictAddressFamilies=AF_INET AF_INET6\nSystemCallFilter=@system-service' },
          {
            t: 'table',
            head: ['Directive', 'Effet'],
            rows: [
              ['`NoNewPrivileges=yes`', 'Le service et ses enfants ne peuvent plus gagner de droits (SUID, capacités de fichier ignorés)'],
              ['`ProtectSystem=strict`', 'Tout le système de fichiers est en lecture seule, sauf les chemins listés dans `ReadWritePaths`'],
              ['`PrivateTmp=yes`', '`/tmp` privé : le service ne voit pas les fichiers temporaires des autres'],
              ['`CapabilityBoundingSet=`', 'Aucune capacité Linux (vide = toutes retirées)'],
              ['`SystemCallFilter=`', 'Liste d’appels système autorisés (seccomp)'],
              ['`AmbientCapabilities=`', 'Accorde à un compte non privilégié une capacité précise (par exemple `CAP_NET_BIND_SERVICE`)'],
            ],
          },
          { t: 'code', lang: 'bash', caption: 'Inspecter et surcharger une unité', code: 'systemctl status api.service      # état, processus principal, dernières lignes de journal\nsystemctl cat api.service         # unité et surcharges effectivement lues\nsystemctl edit api.service        # crée /etc/systemd/system/api.service.d/override.conf\nsystemctl daemon-reload && systemctl restart api.service' },
          { t: 'def', term: 'Capacités Linux', text: 'Découpage des pouvoirs de root en privilèges distincts (`CAP_NET_BIND_SERVICE` pour écouter sous le port 1024, `CAP_SYS_ADMIN`, `CAP_DAC_OVERRIDE`…). Un service n’a besoin que d’une poignée d’entre elles, voire d’aucune.' },
          { t: 'callout', kind: 'tip', text: '`systemd-analyze security api.service` attribue une note d’exposition à l’unité et liste les directives de confinement manquantes : un bon point de départ, à ajuster selon ce dont le service a réellement besoin.' },
        ],
      },
      {
        id: 'journaux',
        title: 'Journaux et audit : journald et auditd',
        blocks: [
          { t: 'p', text: '**journald** collecte les journaux des services, du noyau et des connexions. **auditd** enregistre, selon des règles précises, les accès aux fichiers et les appels système : il répond à « qui a modifié ce fichier, et quand ? ».' },
          { t: 'code', lang: 'bash', caption: 'Requêtes journalctl utiles', code: '# Journaux d’un service depuis ce matin\njournalctl -u ssh --since today\n\n# Uniquement les erreurs et plus grave, depuis le démarrage\njournalctl -p err -b\n\n# Suivre en direct\njournalctl -f' },
          { t: 'code', lang: 'text', caption: 'Règles auditd (/etc/audit/rules.d/identite.rules)', code: '# Écriture ou changement d’attribut sur les fichiers d’identité\n-w /etc/passwd -p wa -k identite\n-w /etc/shadow -p wa -k identite\n-w /etc/sudoers -p wa -k sudoers\n\n# Puis : ausearch -k identite -i' },
          { t: 'def', term: 'Clé auditd (-k)', text: 'Étiquette attachée à une règle. Elle permet de retrouver tous les événements produits par cette règle avec `ausearch -k <clé>`, et de les filtrer dans le SIEM.' },
          { t: 'def', term: 'auid', text: 'Identifiant de connexion d’origine d’un événement d’audit. Il est fixé à l’ouverture de session et **ne change pas** avec `su` ou `sudo` : une action faite en root reste attribuable à la personne qui s’est connectée.' },
          { t: 'code', lang: 'bash', caption: 'Conserver les journaux et recharger les règles', code: '# /etc/systemd/journald.conf : journaux conservés après un redémarrage\n[Journal]\nStorage=persistent\n\n# Charger les règles de /etc/audit/rules.d/ (elles survivent au redémarrage)\nsudo augenrules --load' },
          { t: 'callout', kind: 'key', text: 'Un journal qui reste sur la machine peut être effacé par l’attaquant qui l’a compromise. Les journaux doivent être **exportés en continu** vers un serveur central (rsyslog, agent du SIEM) où l’administrateur local n’a pas de droit de suppression.' },
        ],
      },
      {
        id: 'mac',
        title: 'Contrôle d’accès obligatoire : AppArmor et SELinux',
        blocks: [
          { t: 'p', text: 'Les permissions Unix sont **discrétionnaires** : le propriétaire d’un fichier décide. Le contrôle d’accès **obligatoire** (MAC) ajoute une politique imposée par le système, que même un service compromis tournant en root ne peut pas contourner.' },
          {
            t: 'table',
            head: ['', 'AppArmor', 'SELinux'],
            rows: [
              ['Principe', 'Profils par programme, fondés sur les **chemins**', 'Étiquettes (contextes) sur chaque fichier et processus, règles entre **types**'],
              ['Présent par défaut', 'Debian, Ubuntu, SUSE', 'RHEL, Fedora, Rocky, Alma'],
              ['Modes', '`enforce` / `complain`', '`enforcing` / `permissive` / `disabled`'],
              ['État', '`aa-status`', '`getenforce`, `sestatus`'],
              ['Diagnostic d’un refus', 'Journaux `apparmor="DENIED"`', '`ausearch -m AVC`, `audit2why`'],
            ],
          },
          { t: 'code', lang: 'text', caption: 'Contexte SELinux d’un processus web', code: '$ ps -eZ | grep httpd\nsystem_u:system_r:httpd_t:s0   1234 ?  00:00:01 httpd\n#   utilisateur : rôle : TYPE : niveau\n# Le type httpd_t ne peut lire que les fichiers de types autorisés (httpd_sys_content_t…)' },
          { t: 'def', term: 'Mode permissif', text: 'La politique est évaluée et les refus sont **journalisés**, mais pas appliqués. Utile pour mettre au point un profil, dangereux s’il est laissé en production.' },
          { t: 'p', text: 'Sous AppArmor, le mode **complain** joue ce rôle : les violations du profil sont enregistrées sans être bloquées. Sous SELinux, les refus sont des événements d’audit de type AVC, écrits dans `/var/log/audit/audit.log`, et `restorecon` rétablit le contexte par défaut d’un chemin.' },
          { t: 'callout', kind: 'warn', title: 'Le réflexe à proscrire', text: '`setenforce 0` ou la désactivation d’AppArmor « pour que ça marche » supprime une couche de défense entière. La bonne démarche : lire le refus, puis corriger l’étiquette (`restorecon`, `semanage fcontext`), activer un booléen prévu (`setsebool`) ou ajuster le profil.' },
        ],
      },
      {
        id: 'nftables',
        title: 'Pare-feu local avec nftables',
        blocks: [
          { t: 'p', text: '**nftables** remplace iptables sur les distributions récentes. Un pare-feu local en **refus par défaut** n’autorise que ce qui est explicitement prévu, et limite l’exposition même si un service est démarré par erreur.' },
          { t: 'code', lang: 'text', caption: '/etc/nftables.conf : refus par défaut en entrée', code: 'table inet filtre {\n  chain entree {\n    type filter hook input priority 0; policy drop;\n    ct state established,related accept\n    iif "lo" accept\n    ct state invalid drop\n    ip saddr 10.20.0.0/24 tcp dport 22 accept   # SSH depuis le réseau d’administration\n    tcp dport { 80, 443 } accept                # service web public\n    icmp type echo-request limit rate 5/second accept\n  }\n}' },
          { t: 'list', items: ['`policy drop` : tout paquet non accepté par une règle est rejeté.', '`ct state established,related accept` : les réponses aux connexions déjà acceptées passent ; sans cette règle, plus rien ne fonctionne.', 'La famille `inet` couvre IPv4 **et** IPv6 : un pare-feu limité à IPv4 laisse souvent IPv6 grand ouvert.', 'Le filtrage en **sortie** limite l’exfiltration et les connexions vers un serveur de commande.'] },
          { t: 'callout', kind: 'tip', text: 'Sur un serveur distant, appliquez un nouveau jeu de règles avec une sécurité de retour arrière (tâche planifiée qui restaure l’ancien jeu au bout de quelques minutes) : une erreur sur la règle SSH coupe l’accès.' },
          { t: 'code', lang: 'bash', caption: 'Valider, appliquer et inspecter', code: 'nft -c -f /etc/nftables.conf   # vérifie la syntaxe sans rien appliquer\nnft -f /etc/nftables.conf      # applique le fichier\nnft list ruleset               # affiche ce qui est réellement chargé' },
          { t: 'p', text: 'Journaliser les paquets rejetés avec une **limite de débit** (`limit rate 5/minute log prefix "rejet: "`) fait apparaître les scans dans le journal sans le saturer.' },
        ],
      },
      {
        id: 'persistance',
        title: 'Persistance et chronologie : où un attaquant s’installe',
        blocks: [
          { t: 'p', text: 'Une fois entré, un attaquant cherche à **rester** : survivre à un redémarrage, au changement d’un mot de passe, à la fermeture de la faille initiale. Il laisse presque toujours plusieurs mécanismes. Les trouver tous est la condition d’une éviction réelle.' },
          {
            t: 'table',
            caption: 'Où chercher la persistance sur un serveur Linux',
            head: ['Emplacement', 'Mécanisme', 'Vérification (lecture seule)'],
            rows: [
              ['Tâches planifiées', 'cron, `at`', '`crontab -l` (chaque compte), `/etc/cron.d`, `/etc/cron.*`'],
              ['Unités et minuteurs systemd', 'service ou minuteur activé au démarrage', '`systemctl list-unit-files --state=enabled`, `systemctl list-timers`, `/etc/systemd/system`'],
              ['Clés SSH', 'accès durable sans mot de passe', '`authorized_keys` de **chaque** compte, y compris root'],
              ['Chargement de bibliothèques', 'code injecté dans tous les processus', '`/etc/ld.so.preload` (normalement absent ou vide)'],
              ['Profils shell', 'commande lancée à chaque connexion', '`~/.bashrc`, `~/.profile`, `/etc/profile.d/`'],
              ['Comptes', 'compte supplémentaire ou UID 0 en double', '`/etc/passwd`, `/etc/sudoers.d/`'],
            ],
          },
          { t: 'code', lang: 'text', caption: 'Un service qui ne ressemble pas à un service', code: '$ systemctl cat update-helper.service\n[Service]\nExecStart=/var/tmp/.cache/helper      <- binaire caché, dans un répertoire inscriptible par tous\nRestart=always\n[Install]\nWantedBy=multi-user.target' },
          { t: 'callout', kind: 'key', text: 'Un service légitime lance un binaire installé par un **paquet** (`/usr/bin`, `/usr/sbin`, `/opt`). Un exécutable caché dans `/tmp`, `/var/tmp` ou `/dev/shm` est un indice fort, quel que soit le nom de l’unité.' },
          { t: 'list', ordered: true, items: ['**Préserver** : isoler la machine si possible, copier les journaux, relever processus et connexions, sans rien modifier.', '**Inventorier** les emplacements du tableau en lecture seule et **dater** chaque élément (`stat`, `ausearch`, journaux) pour reconstituer la chronologie.', '**Retirer** chaque mécanisme, renouveler les secrets exposés (clés SSH, mots de passe, jetons) et corriger la faille d’entrée.', '**Vérifier l’éviction** : règles auditd sur ces emplacements, alertes dans le SIEM, nouvelle recherche quelques jours plus tard ; au besoin, reconstruire à partir d’une image saine.'] },
        ],
      },
    ],
    useCases: [
      'Investigation : identifier un processus inconnu, son binaire et sa connexion sortante avant d’isoler la machine.',
      'Mise en production d’une API : unité systemd confinée, profil AppArmor, pare-feu limité aux ports publiés.',
      'Conformité : prouver qui a modifié `/etc/sudoers` grâce à une règle auditd et à l’export des journaux vers le SIEM.',
      'Réponse à incident : inventorier les mécanismes de persistance d’un serveur compromis avant de le remettre en service.',
    ],
    commonMistakes: [
      'Désactiver SELinux ou AppArmor dès le premier refus au lieu de lire le journal.',
      'Tuer un processus suspect avant d’avoir copié son binaire et relevé ses connexions.',
      'Écrire un pare-feu IPv4 uniquement alors que le serveur a une adresse IPv6.',
      'Oublier la règle `established,related` et se couper l’accès.',
      'Laisser les journaux uniquement sur la machine, où un attaquant root peut les effacer.',
      'Retirer la seule clé SSH malveillante trouvée et déclarer l’incident clos, sans chercher les autres persistances.',
    ],
    bestPractices: [
      'Confiner chaque service exposé avec systemd (`NoNewPrivileges`, `ProtectSystem`, capacités minimales) et vérifier avec `systemd-analyze security`.',
      'Garder AppArmor ou SELinux en mode d’application et traiter les refus un par un.',
      'Poser des règles auditd ciblées (fichiers d’identité, sudoers, clés SSH) avec des clés explicites.',
      'Exporter les journaux en continu vers un serveur central protégé.',
      'Pare-feu local en refus par défaut, IPv4 et IPv6, avec filtrage de sortie sur les serveurs sensibles.',
      'Après un incident : préserver, inventorier et dater les persistances, puis renouveler les secrets et surveiller.',
    ],
    keyPoints: [
      '`ss -tulpn` et `/proc/<pid>/exe` révèlent ce qui écoute et ce qui tourne réellement.',
      'systemd peut confiner un service sans le modifier : lecture seule, /tmp privé, aucune capacité.',
      'auditd répond à « qui a modifié quoi » ; les journaux doivent quitter la machine.',
      'Le MAC limite même un service root compromis : on le règle, on ne le désactive pas.',
      'nftables : `policy drop`, `established,related`, famille `inet` pour IPv4 et IPv6.',
      'Un attaquant laisse plusieurs persistances (cron, systemd, clés SSH, `ld.so.preload`) : on les cherche toutes, en lecture seule d’abord.',
    ],
  },
  practice: [
    {
      id: 'triage-processus',
      kind: 'analysis',
      title: 'Triage d’un serveur web suspect',
      context: [
        { t: 'p', text: 'Extraits relevés sur un serveur web Debian après une alerte de trafic sortant inhabituel :' },
        { t: 'code', lang: 'text', code: '$ ss -tulpn\ntcp LISTEN 0 511  0.0.0.0:443   users:(("nginx",pid=812))\ntcp LISTEN 0 128  0.0.0.0:22    users:(("sshd",pid=640))\ntcp LISTEN 0 5    0.0.0.0:31337 users:(("kworker",pid=4242))\n\n$ ps -o user,ppid,cmd -p 4242\nUSER      PPID CMD\nwww-data   812 kworker\n\n$ ls -l /proc/4242/exe\n... -> /tmp/.x/kworker (deleted)' },
      ],
      steps: ['Lister les éléments anormaux et ce que chacun indique.', 'Proposer l’ordre des actions de préservation avant toute suppression.', 'Proposer deux mesures qui auraient limité l’impact (systemd, pare-feu).'],
    },
    {
      id: 'unite-confinee',
      kind: 'case',
      title: 'Cas pratique : confiner une unité systemd',
      context: [
        { t: 'p', text: 'Un service de génération de rapports tourne en root, lit ses modèles dans `/opt/rapports/modeles`, écrit dans `/var/lib/rapports` et n’a besoin que du réseau local en IPv4. `systemd-analyze security rapports.service` indique une exposition de 9,6 (« UNSAFE »).' },
      ],
      steps: ['Rédiger la section `[Service]` confinée.', 'Expliquer comment vérifier que le service fonctionne encore et que l’exposition a baissé.'],
    },
    {
      id: 'chasse-persistance',
      kind: 'analysis',
      title: 'Chasse à la persistance sur un serveur compromis',
      context: [
        { t: 'p', text: 'Le serveur du cas précédent a été isolé. Relevés en lecture seule sur les mécanismes de démarrage et de connexion :' },
        { t: 'code', lang: 'text', code: '$ sudo crontab -l -u www-data\n*/10 * * * * /tmp/.x/kworker --quiet\n\n$ cat /etc/ld.so.preload\n/usr/lib/libsystem-cache.so\n\n$ for u in root deploy www-data; do echo "== $u"; sudo cat /home/$u/.ssh/authorized_keys 2>/dev/null; done\n== deploy\nssh-ed25519 AAAAC3...Nzk deploy@poste-admin\nssh-ed25519 AAAAC3...x9Q maintenance@vps-inconnu' },
      ],
      steps: ['Classer chaque constat (légitime, suspect, à confirmer) en justifiant.', 'Indiquer l’ordre des actions : ce qu’on préserve et date avant de retirer.', 'Proposer la vérification de l’éviction et les règles de surveillance à poser ensuite.'],
    },
  ],
  questions,
  resources: [
    { title: 'Recommandations de configuration d’un système GNU/Linux', source: 'ANSSI', url: 'https://cyber.gouv.fr/publications/recommandations-de-securite-relatives-un-systeme-gnulinux' },
    { title: 'systemd.exec — options d’exécution et de confinement', source: 'Projet systemd', url: 'https://www.freedesktop.org/software/systemd/man/latest/systemd.exec.html' },
    { title: 'nftables wiki', source: 'Projet netfilter', url: 'https://wiki.nftables.org/' },
    { title: 'Using SELinux (RHEL 9)', source: 'Red Hat', url: 'https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/9/html/using_selinux/index' },
    { title: 'AppArmor', source: 'Documentation Ubuntu Server', url: 'https://documentation.ubuntu.com/server/how-to/security/apparmor/' },
  ],
};
