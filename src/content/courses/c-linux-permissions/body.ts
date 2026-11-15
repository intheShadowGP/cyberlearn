import type { CourseBody } from '../../types';

export const body: CourseBody = {
  courseId: 'c-linux-permissions',
  lesson: {
    intro:
      "Sous Linux, presque tout est fichier : documents, configurations, périphériques, et même certaines informations du noyau. Le contrôle d'accès repose donc en grande partie sur les permissions de fichiers. Une permission trop large sur le mauvais fichier suffit souvent à transformer un accès limité en contrôle total de la machine : c'est le terrain de jeu favori des élévations de privilèges.",
    sections: [
      {
        id: 'utilisateurs',
        title: 'Utilisateurs, groupes et identifiants',
        blocks: [
          { t: 'p', text: "Chaque utilisateur possède un **UID** (identifiant numérique) et appartient à un groupe principal (**GID**) et éventuellement à des groupes secondaires. Le noyau ne raisonne qu'en numéros ; les noms sont une traduction pour les humains." },
          {
            t: 'table',
            head: ['Fichier', 'Contenu', 'Permissions attendues'],
            rows: [
              ['`/etc/passwd`', 'Comptes : nom, UID, GID, répertoire, shell', '`644` (lisible par tous, sans mot de passe)'],
              ['`/etc/shadow`', 'Empreintes des mots de passe', '`640` ou `600`, propriétaire root'],
              ['`/etc/group`', 'Groupes et membres', '`644`'],
              ['`/etc/sudoers`', 'Règles d’élévation via sudo', '`440`, à modifier uniquement avec `visudo`'],
            ],
          },
          { t: 'code', lang: 'text', caption: 'Une ligne de /etc/passwd', code: 'alice:x:1001:1001:Alice Martin:/home/alice:/bin/bash\n│     │ │    │    │            │           └ shell de connexion\n│     │ │    │    │            └ répertoire personnel\n│     │ │    │    └ commentaire\n│     │ │    └ GID principal\n│     │ └ UID\n│     └ « x » : empreinte stockée dans /etc/shadow\n└ nom' },
          { t: 'def', term: 'UID 0', text: "Tout compte avec l'UID 0 est **root**, quel que soit son nom. Un second compte en UID 0 dans `/etc/passwd` est un indicateur de compromission classique." },
        ],
      },
      {
        id: 'permissions',
        title: 'Lire et calculer les permissions',
        blocks: [
          { t: 'code', lang: 'text', code: '-rwxr-x---  1 alice devs  4096 mars 3 10:12 deploy.sh\n│└┬┘└┬┘└┬┘\n│ │  │  └ autres (o) : aucun droit\n│ │  └ groupe (g) devs : lecture + exécution\n│ └ propriétaire (u) alice : lecture + écriture + exécution\n└ type : - fichier, d répertoire, l lien symbolique' },
          { t: 'table', caption: 'Valeurs octales', head: ['Droit', 'Fichier', 'Répertoire', 'Valeur'], rows: [['r', 'lire le contenu', 'lister les noms', '4'], ['w', 'modifier', 'créer, supprimer, renommer des entrées', '2'], ['x', 'exécuter', 'traverser (`cd`, accéder aux fichiers)', '1']] },
          {
            t: 'example',
            title: 'Calcul de rwxr-x---',
            blocks: [
              { t: 'p', text: 'Propriétaire `rwx` = 4+2+1 = **7** ; groupe `r-x` = 4+0+1 = **5** ; autres `---` = **0**. Permission octale : **750**, appliquée avec `chmod 750 deploy.sh`.' },
            ],
          },
          { t: 'callout', kind: 'warn', title: 'Piège des répertoires', text: "Le droit `w` sur un **répertoire** permet de supprimer ou remplacer n'importe quel fichier qu'il contient, **même sans droit sur le fichier lui-même**. Un répertoire de scripts modifiable par tous est donc aussi dangereux qu'un script modifiable par tous." },
          { t: 'def', term: 'umask', text: "Masque appliqué aux permissions par défaut des fichiers créés. Un `umask 027` produit des fichiers `640` et des répertoires `750` : rien pour les « autres »." },
        ],
      },
      {
        id: 'speciaux',
        title: 'Bits spéciaux et ACL',
        blocks: [
          {
            t: 'table',
            head: ['Bit', 'Affichage', 'Effet', 'Risque'],
            rows: [
              ['**SUID** (4000)', '`-rwsr-xr-x`', 'Le programme s’exécute avec les droits de son **propriétaire** (souvent root)', 'Un binaire SUID root vulnérable ou détournable = élévation vers root'],
              ['**SGID** (2000)', '`-rwxr-sr-x`', 'Exécution avec les droits du groupe ; sur un répertoire, héritage du groupe', 'Accès aux fichiers du groupe'],
              ['**Sticky** (1000)', '`drwxrwxrwt`', 'Dans un répertoire, seul le propriétaire d’un fichier peut le supprimer', 'Son absence sur `/tmp` permet de supprimer les fichiers des autres'],
            ],
          },
          { t: 'code', lang: 'bash', caption: 'Lister les binaires SUID et les fichiers modifiables par tous', code: '# Binaires SUID (à comparer avec une liste de référence)\nfind / -xdev -perm -4000 -type f 2>/dev/null\n\n# Fichiers modifiables par tous, hors /proc\nfind / -xdev -type f -perm -0002 2>/dev/null' },
          { t: 'p', text: "`passwd` est légitimement SUID root (il doit écrire dans `/etc/shadow`). En revanche, un éditeur, un interpréteur (`python`, `find`, `vim`) ou un script maison en SUID root permet d'obtenir un shell root : la base de données publique GTFOBins recense ces détournements." },
          { t: 'def', term: 'ACL POSIX', text: "Listes de contrôle d'accès étendues (`getfacl`, `setfacl`) qui accordent des droits à des utilisateurs ou groupes supplémentaires. Un `+` à la fin des permissions (`-rw-r-----+`) signale leur présence : à vérifier lors d'un audit." },
        ],
      },
      {
        id: 'sudo',
        title: 'sudo : déléguer sans donner root',
        blocks: [
          { t: 'p', text: "`sudo` permet à un utilisateur d'exécuter des commandes précises avec d'autres droits, en journalisant chaque usage. Une règle trop large annule tout le bénéfice." },
          { t: 'code', lang: 'text', caption: 'Règles sudoers commentées', code: '# Correct : uniquement le redémarrage du service web\nwebops ALL=(root) /usr/bin/systemctl restart nginx\n\n# Dangereux : root complet sans mot de passe\nstagiaire ALL=(ALL) NOPASSWD: ALL\n\n# Piège : vim permet d\'ouvrir un shell (:!sh) → root\nbackup ALL=(root) /usr/bin/vim /etc/backup.conf' },
          { t: 'callout', kind: 'key', text: "Avant d'autoriser une commande via sudo, se demander : **ce programme permet-il de lancer un shell, d'écrire un fichier arbitraire ou d'exécuter un autre programme ?** Si oui, la règle équivaut à donner root." },
        ],
      },
      {
        id: 'ssh',
        title: 'Durcir SSH et le serveur',
        blocks: [
          { t: 'code', lang: 'text', caption: 'Extrait de /etc/ssh/sshd_config durci', code: 'PermitRootLogin no\nPasswordAuthentication no\nKbdInteractiveAuthentication no\nPubkeyAuthentication yes\nAllowGroups ssh-users\nMaxAuthTries 3\nX11Forwarding no\nAllowTcpForwarding no' },
          { t: 'list', items: ["Authentification **par clé uniquement** : supprime le risque de force brute sur les mots de passe.", "Interdire la connexion directe de root : on se connecte avec un compte nominatif, puis `sudo` (traçabilité).", 'Restreindre les comptes autorisés (`AllowGroups`).', 'Limiter l’exposition : SSH accessible uniquement depuis un bastion ou un VPN d’administration.', 'Mises à jour automatiques de sécurité, services inutiles désactivés, pare-feu local (`nftables`).'] },
          { t: 'callout', kind: 'tip', text: "Le guide ANSSI « Recommandations de configuration d'un système GNU/Linux » classe ces mesures par niveau (minimal, intermédiaire, renforcé, élevé) : une excellente base pour un audit." },
        ],
      },
    ],
    useCases: [
      "Audit de serveur : rechercher les binaires SUID inattendus, les fichiers modifiables par tous et les règles sudo trop larges.",
      'Test d’intrusion autorisé : vérifier si un accès utilisateur peut mener à root via une mauvaise configuration.',
      "Mise en production : appliquer une configuration SSH durcie et un umask restrictif avant d'exposer un serveur.",
    ],
    commonMistakes: [
      '« Corriger » un problème d’accès avec `chmod 777` : n’importe quel utilisateur peut alors modifier ou remplacer le fichier.',
      'Autoriser via sudo des programmes capables de lancer un shell (vim, less, find, python, tar…).',
      'Laisser `PasswordAuthentication yes` sur un serveur exposé à Internet.',
      'Oublier que le droit d’écriture sur un répertoire permet de remplacer les fichiers qu’il contient.',
      'Modifier `/etc/sudoers` sans `visudo` : une erreur de syntaxe peut bloquer toute administration.',
    ],
    bestPractices: [
      'Appliquer un umask restrictif (027) et des permissions minimales sur les configurations sensibles.',
      'Maintenir une liste de référence des binaires SUID et alerter sur tout écart.',
      'Rédiger des règles sudo par commande précise, avec arguments, et sans NOPASSWD sauf justification.',
      'SSH : clés uniquement, pas de root, accès via bastion, journalisation centralisée.',
      'Surveiller `/etc/passwd`, `/etc/shadow` et `/etc/sudoers` avec un contrôle d’intégrité (AIDE, auditd).',
    ],
    keyPoints: [
      'Permissions : r=4, w=2, x=1 pour propriétaire, groupe, autres.',
      'SUID root + programme détournable = élévation de privilèges.',
      'Une règle sudo qui autorise un programme ouvrant un shell équivaut à root.',
      'SSH durci : clés uniquement, pas de root, accès restreint.',
    ],
  },
  practice: [
    {
      id: 'audit-ls',
      kind: 'analysis',
      title: 'Audit d’une sortie ls -l',
      context: [
        { t: 'p', text: 'Sortie relevée sur un serveur web :' },
        { t: 'code', lang: 'text', code: '-rw-r--r-- 1 root root   2843 /etc/passwd\n-rw-rw-rw- 1 root shadow 1290 /etc/shadow\n-rwsr-xr-x 1 root root  68208 /usr/bin/passwd\n-rwsr-xr-x 1 root root 315904 /usr/bin/find\ndrwxrwxrwx 2 root root   4096 /opt/scripts\n-rwxr-xr-x 1 root root    512 /opt/scripts/backup.sh   (exécuté par cron en root)' },
      ],
      steps: ['Pour chaque ligne, dire si la permission est normale.', 'Classer les anomalies par gravité.', 'Donner la commande de correction pour chacune.'],
      labId: 'linux-audit-lab',
    },
    {
      id: 'sshd-durcir',
      kind: 'case',
      title: 'Cas pratique : durcir un serveur SSH exposé',
      context: [{ t: 'p', text: 'Un VPS exposé sur Internet reçoit des milliers de tentatives de connexion SSH par jour. Configuration actuelle : `PermitRootLogin yes`, `PasswordAuthentication yes`, port 22 ouvert à tous.' }],
      steps: ['Proposer les directives `sshd_config` à modifier.', 'Décrire comment déployer la clé de l’administrateur sans perdre l’accès.', 'Proposer une mesure réseau complémentaire.'],
    },
  ],
  questions: [
    { id: 'lnx-q1', type: 'short', difficulty: 1, skills: ['c-perm-read'], prompt: 'Quelle est la valeur octale de la permission `rwxr-x---` ?', placeholder: 'ex. 644' },
    { id: 'lnx-q2', type: 'single', difficulty: 1, skills: ['c-perm-read'], prompt: 'Que signifie la permission `x` sur un répertoire ?', options: [{ id: 'a', text: 'Exécuter tous les scripts qu’il contient' }, { id: 'b', text: 'Le traverser et accéder aux fichiers qu’il contient' }, { id: 'c', text: 'Lister les noms des fichiers' }, { id: 'd', text: 'Le supprimer' }] },
    { id: 'lnx-q3', type: 'truefalse', difficulty: 2, skills: ['c-perm-read'], prompt: 'Sans aucun droit sur un fichier, un utilisateur ne peut jamais le supprimer, même s’il a le droit d’écriture sur le répertoire qui le contient.' },
    { id: 'lnx-q4', type: 'short', difficulty: 1, skills: ['c-perm-read'], prompt: 'Quelle permission octale donne lecture et écriture au propriétaire, lecture au groupe et rien aux autres ?' },
    { id: 'lnx-q5', type: 'single', difficulty: 2, skills: ['c-perm-special'], prompt: 'Le fichier `/usr/bin/find` est en `-rwsr-xr-x root root`. Quel est le risque ?', options: [{ id: 'a', text: 'Aucun, find ne modifie rien' }, { id: 'b', text: 'find peut exécuter des commandes (-exec) avec les droits root : élévation de privilèges' }, { id: 'c', text: 'find devient plus lent' }, { id: 'd', text: 'Seul root peut désormais l’utiliser' }] },
    { id: 'lnx-q6', type: 'multi', difficulty: 2, skills: ['c-perm-special'], prompt: 'Quelles affirmations sur les bits spéciaux sont exactes ?', options: [{ id: 'a', text: 'Le sticky bit sur /tmp empêche un utilisateur de supprimer les fichiers des autres.' }, { id: 'b', text: 'Un binaire SUID s’exécute avec les droits de son propriétaire.' }, { id: 'c', text: 'Le SUID n’a aucun effet si le propriétaire est root.' }, { id: 'd', text: 'Un `+` après les permissions dans `ls -l` signale la présence d’ACL.' }] },
    { id: 'lnx-q7', type: 'single', difficulty: 2, skills: ['c-users-sudo'], prompt: 'Quelle règle sudoers respecte le mieux le moindre privilège pour un opérateur qui doit redémarrer nginx ?', options: [{ id: 'a', text: '`op ALL=(ALL) NOPASSWD: ALL`' }, { id: 'b', text: '`op ALL=(root) /usr/bin/systemctl restart nginx`' }, { id: 'c', text: '`op ALL=(root) /usr/bin/systemctl`' }, { id: 'd', text: '`op ALL=(root) /usr/bin/vim /etc/nginx/nginx.conf`' }] },
    { id: 'lnx-q8', type: 'truefalse', difficulty: 2, skills: ['c-users-sudo'], prompt: 'Autoriser un utilisateur à lancer `less` en root via sudo peut lui donner un shell root.' },
    { id: 'lnx-q9', type: 'multi', difficulty: 2, skills: ['c-users-sudo', 'c-perm-read'], prompt: 'Lesquels de ces constats sont des indicateurs de compromission ou de grave mauvaise configuration ?', options: [{ id: 'a', text: 'Un second compte avec l’UID 0 dans /etc/passwd' }, { id: 'b', text: '/etc/shadow en permissions 666' }, { id: 'c', text: '/etc/passwd en permissions 644' }, { id: 'd', text: 'Une règle `ALL=(ALL) NOPASSWD: ALL` pour un compte de stagiaire' }] },
    { id: 'lnx-q10', type: 'short', difficulty: 1, skills: ['c-users-sudo'], prompt: 'Quelle commande faut-il utiliser pour modifier /etc/sudoers en toute sécurité ?' },
    { id: 'lnx-q11', type: 'single', difficulty: 2, skills: ['c-hardening'], prompt: 'Quelle directive sshd_config interdit l’authentification par mot de passe ?', options: [{ id: 'a', text: '`PermitRootLogin no`' }, { id: 'b', text: '`PasswordAuthentication no`' }, { id: 'c', text: '`PubkeyAuthentication no`' }, { id: 'd', text: '`MaxAuthTries 0`' }] },
    { id: 'lnx-q12', type: 'truefalse', difficulty: 1, skills: ['c-hardening'], prompt: 'Changer le port SSH de 22 à 2222 suffit à sécuriser un serveur exposé à Internet.' },
    { id: 'lnx-q13', type: 'open', difficulty: 3, skills: ['c-hardening', 'c-perm-special'], prompt: 'Un script `/opt/scripts/backup.sh` est exécuté chaque nuit par cron en root. Le répertoire `/opt/scripts` est en `drwxrwxrwx`. Décrivez le scénario d’attaque et les corrections.' },
    { id: 'lnx-q14', type: 'multi', difficulty: 2, skills: ['c-hardening'], prompt: 'Quelles mesures réduisent efficacement le risque d’attaque par force brute sur SSH ?', options: [{ id: 'a', text: 'Authentification par clé uniquement' }, { id: 'b', text: 'Restreindre l’accès à SSH depuis un VPN ou un bastion' }, { id: 'c', text: 'Afficher une bannière d’avertissement' }, { id: 'd', text: 'Limiter les tentatives (MaxAuthTries, fail2ban)' }] },
    { id: 'lnx-q15', type: 'open', difficulty: 2, skills: ['c-perm-special', 'c-users-sudo'], prompt: 'Expliquez à un administrateur junior pourquoi `chmod 777` n’est jamais une bonne solution à un problème d’accès, et ce qu’il doit faire à la place.' },
    { id: 'lnx-q16', type: 'single', difficulty: 2, skills: ['c-perm-special', 'c-perm-read'], prompt: 'Quelle commande liste les fichiers SUID du système de fichiers racine ?', options: [{ id: 'a', text: '`find / -xdev -perm -4000 -type f`' }, { id: 'b', text: '`ls -suid /`' }, { id: 'c', text: '`chmod -R u-s /`' }, { id: 'd', text: '`grep suid /etc/passwd`' }] },
  ],
  resources: [
    { title: 'Recommandations de configuration d’un système GNU/Linux', source: 'ANSSI', url: 'https://cyber.gouv.fr/publications/recommandations-de-securite-relatives-un-systeme-gnulinux' },
    { title: 'Recommandations pour un usage sécurisé d’(Open)SSH', source: 'ANSSI', url: 'https://cyber.gouv.fr/publications/openssh-secure-use-recommendations' },
    { title: 'GTFOBins — binaires Unix détournables', source: 'Projet communautaire', url: 'https://gtfobins.github.io/' },
    { title: 'CIS Benchmarks for Linux', source: 'Center for Internet Security', url: 'https://www.cisecurity.org/cis-benchmarks' },
  ],
};
