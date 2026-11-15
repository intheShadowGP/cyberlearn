import type { CourseBody } from '../../types';

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
            ],
          },
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
        ],
      },
    ],
    useCases: [
      'Investigation : identifier un processus inconnu, son binaire et sa connexion sortante avant d’isoler la machine.',
      'Mise en production d’une API : unité systemd confinée, profil AppArmor, pare-feu limité aux ports publiés.',
      'Conformité : prouver qui a modifié `/etc/sudoers` grâce à une règle auditd et à l’export des journaux vers le SIEM.',
    ],
    commonMistakes: [
      'Désactiver SELinux ou AppArmor dès le premier refus au lieu de lire le journal.',
      'Tuer un processus suspect avant d’avoir copié son binaire et relevé ses connexions.',
      'Écrire un pare-feu IPv4 uniquement alors que le serveur a une adresse IPv6.',
      'Oublier la règle `established,related` et se couper l’accès.',
      'Laisser les journaux uniquement sur la machine, où un attaquant root peut les effacer.',
    ],
    bestPractices: [
      'Confiner chaque service exposé avec systemd (`NoNewPrivileges`, `ProtectSystem`, capacités minimales) et vérifier avec `systemd-analyze security`.',
      'Garder AppArmor ou SELinux en mode d’application et traiter les refus un par un.',
      'Poser des règles auditd ciblées (fichiers d’identité, sudoers, clés SSH) avec des clés explicites.',
      'Exporter les journaux en continu vers un serveur central protégé.',
      'Pare-feu local en refus par défaut, IPv4 et IPv6, avec filtrage de sortie sur les serveurs sensibles.',
    ],
    keyPoints: [
      '`ss -tulpn` et `/proc/<pid>/exe` révèlent ce qui écoute et ce qui tourne réellement.',
      'systemd peut confiner un service sans le modifier : lecture seule, /tmp privé, aucune capacité.',
      'auditd répond à « qui a modifié quoi » ; les journaux doivent quitter la machine.',
      'Le MAC limite même un service root compromis : on le règle, on ne le désactive pas.',
      'nftables : `policy drop`, `established,related`, famille `inet` pour IPv4 et IPv6.',
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
  ],
  questions: [
    { id: 'lsys-q1', type: 'single', difficulty: 1, skills: ['c-sys-services'], prompt: 'Quelle commande affiche les ports TCP et UDP en écoute avec le processus associé ?', options: [{ id: 'a', text: '`ss -tulpn`' }, { id: 'b', text: '`ps -ef`' }, { id: 'c', text: '`journalctl -f`' }, { id: 'd', text: '`chmod -R 755 /`' }] },
    { id: 'lsys-q2', type: 'truefalse', difficulty: 2, skills: ['c-sys-services'], prompt: 'Le lien `/proc/<pid>/exe` d’un processus suffit pour récupérer une copie de son binaire, même si le fichier a été supprimé du disque.' },
    { id: 'lsys-q3', type: 'multi', difficulty: 2, skills: ['c-sys-services'], prompt: 'Quelles directives systemd réduisent ce qu’un service compromis peut faire ?', options: [{ id: 'a', text: '`NoNewPrivileges=yes`' }, { id: 'b', text: '`ProtectSystem=strict`' }, { id: 'c', text: '`Restart=always`' }, { id: 'd', text: '`CapabilityBoundingSet=` (vide)' }] },
    { id: 'lsys-q4', type: 'short', difficulty: 2, skills: ['c-sys-services'], prompt: 'Quelle commande systemd attribue une note d’exposition à une unité et liste les directives de confinement manquantes ? (donnez la commande sans le nom de l’unité)', placeholder: 'commande sous-commande' },
    { id: 'lsys-q5', type: 'single', difficulty: 2, skills: ['c-sys-logs'], prompt: 'Quelle commande affiche les messages de niveau erreur et plus grave depuis le dernier démarrage ?', options: [{ id: 'a', text: '`journalctl -p err -b`' }, { id: 'b', text: '`journalctl -u err`' }, { id: 'c', text: '`dmesg --clear`' }, { id: 'd', text: '`ausearch -k err`' }] },
    { id: 'lsys-q6', type: 'short', difficulty: 2, skills: ['c-sys-logs'], prompt: 'Avec la règle auditd `-w /etc/shadow -p wa -k identite`, quelle commande liste les événements correspondants ? (avec l’option de clé)', placeholder: 'ausearch …' },
    { id: 'lsys-q7', type: 'truefalse', difficulty: 1, skills: ['c-sys-logs'], prompt: 'Conserver les journaux uniquement sur le serveur qui les produit suffit, puisque seul root peut les modifier.' },
    { id: 'lsys-q8', type: 'open', difficulty: 3, skills: ['c-sys-logs', 'c-sys-services'], prompt: 'Un administrateur vous demande comment savoir, la prochaine fois, qui a ajouté une clé dans `/root/.ssh/authorized_keys`. Proposez un dispositif complet, de la règle à la consultation.' },
    { id: 'lsys-q9', type: 'single', difficulty: 2, skills: ['c-sys-mac'], prompt: 'Quelle est la différence fondamentale entre AppArmor et SELinux ?', options: [{ id: 'a', text: 'AppArmor raisonne sur les chemins des fichiers, SELinux sur des étiquettes de type attachées aux fichiers et processus' }, { id: 'b', text: 'AppArmor ne fonctionne qu’en mode permissif' }, { id: 'c', text: 'SELinux remplace les permissions Unix, qui ne sont plus évaluées' }, { id: 'd', text: 'Il n’y en a pas : ce sont deux noms du même module' }] },
    { id: 'lsys-q10', type: 'multi', difficulty: 3, skills: ['c-sys-mac'], prompt: 'Un serveur web RHEL renvoie « 403 » sur un nouveau répertoire alors que les permissions Unix sont correctes, et `ausearch -m AVC` montre un refus. Quelles réactions sont appropriées ?', options: [{ id: 'a', text: 'Lire le refus avec `audit2why` pour en comprendre la cause' }, { id: 'b', text: 'Corriger le contexte du répertoire (`semanage fcontext` puis `restorecon`)' }, { id: 'c', text: 'Passer définitivement en `setenforce 0`' }, { id: 'd', text: 'Activer un booléen prévu si le besoin correspond (`setsebool`)' }] },
    { id: 'lsys-q11', type: 'truefalse', difficulty: 2, skills: ['c-sys-mac'], prompt: 'En mode permissif, SELinux journalise les accès qu’il aurait refusés mais ne les bloque pas.' },
    { id: 'lsys-q12', type: 'open', difficulty: 3, skills: ['c-sys-mac', 'c-sys-services'], prompt: 'Expliquez pourquoi un service web confiné par SELinux ou AppArmor limite les dégâts d’une exécution de code à distance, même si le service tourne avec un compte privilégié.' },
    { id: 'lsys-q13', type: 'single', difficulty: 2, skills: ['c-sys-firewall'], prompt: 'Dans une chaîne nftables `policy drop`, que se passe-t-il si l’on oublie la règle `ct state established,related accept` ?', options: [{ id: 'a', text: 'Les réponses aux connexions sortantes du serveur sont bloquées et la plupart des services cessent de fonctionner' }, { id: 'b', text: 'Rien : nftables suit automatiquement les connexions' }, { id: 'c', text: 'Seul IPv6 est bloqué' }, { id: 'd', text: 'La politique passe automatiquement en `accept`' }] },
    { id: 'lsys-q14', type: 'multi', difficulty: 2, skills: ['c-sys-firewall'], prompt: 'Quelles affirmations sur ce pare-feu nftables sont exactes : `table inet filtre { chain entree { type filter hook input priority 0; policy drop; ... } }` ?', options: [{ id: 'a', text: 'La famille `inet` s’applique à IPv4 et à IPv6' }, { id: 'b', text: 'Tout paquet entrant non accepté par une règle est rejeté' }, { id: 'c', text: 'Cette chaîne filtre aussi le trafic sortant du serveur' }, { id: 'd', text: 'Un service démarré par erreur sur un port non autorisé reste injoignable depuis le réseau' }] },
    { id: 'lsys-q15', type: 'short', difficulty: 1, skills: ['c-sys-firewall'], prompt: 'Quel mot-clé de politique nftables rejette par défaut tout paquet non accepté ?' },
    { id: 'lsys-q16', type: 'single', difficulty: 3, skills: ['c-sys-firewall', 'c-sys-services'], prompt: 'Un processus lancé par `www-data` écoute sur le port 31337. Quelle mesure, prise à l’avance, l’aurait rendu injoignable depuis l’extérieur ?', options: [{ id: 'a', text: 'Un pare-feu local en refus par défaut n’autorisant que les ports 80 et 443 en entrée' }, { id: 'b', text: 'Un umask plus restrictif' }, { id: 'c', text: 'Changer le port SSH' }, { id: 'd', text: 'Augmenter la taille des journaux journald' }] },
  ],
  resources: [
    { title: 'Recommandations de configuration d’un système GNU/Linux', source: 'ANSSI', url: 'https://cyber.gouv.fr/publications/recommandations-de-securite-relatives-un-systeme-gnulinux' },
    { title: 'systemd.exec — options d’exécution et de confinement', source: 'Projet systemd', url: 'https://www.freedesktop.org/software/systemd/man/latest/systemd.exec.html' },
    { title: 'nftables wiki', source: 'Projet netfilter', url: 'https://wiki.nftables.org/' },
    { title: 'Using SELinux (RHEL 9)', source: 'Red Hat', url: 'https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/9/html/using_selinux/index' },
    { title: 'AppArmor', source: 'Documentation Ubuntu Server', url: 'https://documentation.ubuntu.com/server/how-to/security/apparmor/' },
  ],
};
