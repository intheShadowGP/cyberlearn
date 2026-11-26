import type { CourseBody } from '../../types';
import { questions } from './questions';

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
          { t: 'code', lang: 'bash', caption: 'Connaître une identité et changer la propriété', code: 'id alice\n# uid=1001(alice) gid=1001(alice) groups=1001(alice),27(sudo)\n\nsudo chown root:app /srv/app/conf/app.yml   # propriétaire root, groupe app\nsudo chmod 640 /srv/app/conf/app.yml        # rw- pour root, r-- pour le groupe app' },
        ],
      },
      {
        id: 'permissions',
        title: 'Lire et calculer les permissions',
        blocks: [
          { t: 'code', lang: 'text', code: '-rwxr-x---  1 alice devs  4096 mars 3 10:12 deploy.sh\n│└┬┘└┬┘└┬┘\n│ │  │  └ autres (o) : aucun droit\n│ │  └ groupe (g) devs : lecture + exécution\n│ └ propriétaire (u) alice : lecture + écriture + exécution\n└ type : - fichier, d répertoire, l lien symbolique' },
          { t: 'table', caption: 'Valeurs octales', head: ['Droit', 'Fichier', 'Répertoire', 'Valeur'], rows: [['r', 'lire le contenu', 'lister les noms', '4'], ['w', 'modifier', 'créer, supprimer, renommer des entrées', '2'], ['x', 'exécuter', 'traverser (`cd`, accéder aux fichiers)', '1']] },
          { t: 'diagram', id: 'unix-perms', caption: 'Chaque groupe (propriétaire, groupe, autres) additionne les droits actifs : rwx = 7, r-x = 5, --- = 0, soit la permission octale 750.', alt: 'Schéma des permissions rwxr-x--- décomposées en trois groupes propriétaire, groupe et autres, chaque droit valant r égale 4, w égale 2, x égale 1, donnant 7, 5 et 0.' },
          {
            t: 'example',
            title: 'Calcul de rwxr-x---',
            blocks: [
              { t: 'p', text: 'Propriétaire `rwx` = 4+2+1 = **7** ; groupe `r-x` = 4+0+1 = **5** ; autres `---` = **0**. Permission octale : **750**, appliquée avec `chmod 750 deploy.sh`.' },
            ],
          },
          { t: 'callout', kind: 'warn', title: 'Piège des répertoires', text: "Le droit `w` sur un **répertoire** permet de supprimer ou remplacer n'importe quel fichier qu'il contient, **même sans droit sur le fichier lui-même**. Un répertoire de scripts modifiable par tous est donc aussi dangereux qu'un script modifiable par tous." },
          { t: 'def', term: 'umask', text: "Masque appliqué aux permissions par défaut des fichiers créés. Un `umask 027` produit des fichiers `640` et des répertoires `750` : rien pour les « autres »." },
          {
            t: 'example',
            title: 'Effet d’un umask 027',
            blocks: [
              { t: 'p', text: 'Un programme demande `666` pour un fichier et `777` pour un répertoire. Avec `umask 027`, on retire `027` : le fichier reçoit **640** (`rw-r-----`), le répertoire **750** (`rwxr-x---`). Un fichier ordinaire ne reçoit jamais le droit `x` à sa création.' },
            ],
          },
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
          { t: 'p', text: "Le noyau Linux **ignore** SUID et SGID sur les scripts commençant par `#!` : le danger vient des binaires compilés et des interpréteurs placés en SUID. Le **SGID sur un répertoire** fait hériter les nouveaux fichiers du groupe du répertoire, ce qui facilite le partage au sein d'une équipe." },
          { t: 'def', term: 'Capacités Linux', text: "Découpage des privilèges de root en droits unitaires. `setcap cap_net_bind_service+ep /usr/local/bin/app` permet à un programme d'ouvrir un port inférieur à 1024 **sans** être root ni SUID : c'est l'alternative à préférer à un SUID root." },
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
          { t: 'code', lang: 'bash', caption: 'Auditer et gérer les règles sudo', code: 'sudo -l                                  # règles de l’utilisateur courant\nsudo visudo -f /etc/sudoers.d/webops     # règle propre à une application (droits 440)\nsudoedit /etc/nginx/nginx.conf           # modifie une copie, sans lancer l’éditeur en root' },
          { t: 'p', text: "Quand une règle précise des arguments, seule cette ligne de commande exacte est autorisée : `systemctl restart nginx` n'autorise pas `systemctl restart sshd`. Un caractère générique (`*`) élargit la règle et se justifie rarement." },
        ],
      },
      {
        id: 'ssh',
        title: 'Durcir SSH et le serveur',
        blocks: [
          { t: 'code', lang: 'text', caption: 'Extrait de /etc/ssh/sshd_config durci', code: 'PermitRootLogin no\nPasswordAuthentication no\nKbdInteractiveAuthentication no\nPubkeyAuthentication yes\nAllowGroups ssh-users\nMaxAuthTries 3\nX11Forwarding no\nAllowTcpForwarding no' },
          { t: 'list', items: ["Authentification **par clé uniquement** : supprime le risque de force brute sur les mots de passe.", "Interdire la connexion directe de root : on se connecte avec un compte nominatif, puis `sudo` (traçabilité).", 'Restreindre les comptes autorisés (`AllowGroups`).', 'Limiter l’exposition : SSH accessible uniquement depuis un bastion ou un VPN d’administration.', 'Mises à jour automatiques de sécurité, services inutiles désactivés, pare-feu local (`nftables`).', 'La clé **privée** reste sur le poste de l’administrateur, protégée par une phrase secrète ; le serveur ne reçoit que la clé publique (`authorized_keys`).', 'Avant de recharger : `sshd -t` valide la syntaxe, et l’on garde une session ouverte jusqu’à avoir réussi une nouvelle connexion.'] },
          { t: 'callout', kind: 'tip', text: "Le guide ANSSI « Recommandations de configuration d'un système GNU/Linux » classe ces mesures par niveau (minimal, intermédiaire, renforcé, élevé) : une excellente base pour un audit." },
        ],
      },
      {
        id: 'diagnostic',
        title: 'Diagnostiquer un refus d’accès',
        blocks: [
          { t: 'p', text: "Face à un « Permission denied », la tentation est d'ouvrir les droits jusqu'à ce que ça fonctionne. Il faut au contraire **observer** : qui est l'utilisateur réel du processus, quels droits impose **chaque répertoire du chemin**, existe-t-il une ACL, un montage en lecture seule ou un confinement ?" },
          {
            t: 'table',
            caption: 'Les outils du diagnostic',
            head: ['Commande', 'Ce qu’elle montre'],
            rows: [
              ['`id`, `id compte`', 'UID, GID et groupes du compte (à comparer au propriétaire et au groupe du fichier)'],
              ['`namei -l /chemin/complet`', 'Type, permissions, propriétaire et groupe de **chaque composant** du chemin'],
              ['`ls -ld répertoire`', 'Les droits du répertoire lui-même (et non de son contenu)'],
              ['`getfacl fichier`', 'Les ACL qui complètent les permissions classiques'],
              ['`sudo -l -U compte`', 'Les règles sudo accordées à un compte'],
              ['`findmnt -T chemin`', 'Le montage qui porte le chemin (option `ro`, `noexec`…)'],
            ],
          },
          { t: 'code', lang: 'text', caption: 'Un fichier lisible, mais un chemin fermé', code: '$ namei -l /srv/app/conf/app.yml\nf: /srv/app/conf/app.yml\ndrwxr-xr-x root root /\ndrwxr-xr-x root root srv\ndrwxr-x--- root app  app          <- les « autres » n’ont aucun droit ici\ndrwxr-xr-x root root conf\n-rw-r--r-- root root app.yml' },
          { t: 'callout', kind: 'key', text: "Pour accéder à un fichier, il faut le droit `x` sur **chaque répertoire** du chemin, puis le droit voulu sur le fichier. Un fichier en `644` reste inaccessible si un répertoire parent est fermé à l'utilisateur." },
          { t: 'list', ordered: true, items: ['Lire le message d’erreur exact et reproduire le problème avec le compte concerné (`sudo -u compte …`).', 'Vérifier l’identité réelle du processus : un service peut tourner sous un autre compte ou groupe après une mise à jour.', 'Examiner tout le chemin avec `namei -l`, puis les ACL avec `getfacl`.', 'Écarter un montage en lecture seule, un disque plein ou un confinement (SELinux, AppArmor, options de l’unité systemd).', 'Corriger au plus juste (propriétaire, groupe, ACL ciblée), jamais par `chmod 777`.'] },
        ],
      },
      {
        id: 'umask',
        title: "Permissions par défaut : le rôle de l’umask",
        blocks: [
          { t: 'p', text: "Quand un programme crée un fichier, ses permissions ne sont pas choisies au hasard : le système part d’une base (666 pour un fichier, 777 pour un répertoire) puis **retire** les bits indiqués par l’**umask** du processus." },
          {
            t: 'table',
            head: ["umask", "Fichier créé", "Répertoire créé", "Effet"],
            rows: [
              ["`022`", "`644` (rw-r--r--)", "`755` (rwxr-xr-x)", "Lecture ouverte aux autres : valeur courante des distributions"],
              ["`027`", "`640` (rw-r-----)", "`750` (rwxr-x---)", "Aucun accès pour les « autres »"],
              ["`077`", "`600` (rw-------)", "`700` (rwx------)", "Accès réservé au propriétaire"],
            ],
          },
          { t: 'code', lang: "bash", caption: "Constater l’effet de l’umask", code: "umask               # affiche la valeur actuelle, par exemple 0022\numask 077           # valable pour ce shell seulement\ntouch secret.txt && mkdir dossier\nls -ld secret.txt dossier   # -rw------- et drwx------" },
          { t: 'callout', kind: 'tip', text: "Un fichier de clés ou de mots de passe créé avec un umask permissif (par exemple par un script lancé en tâche planifiée) peut être lisible par tout le monde. Fixez l’umask **explicitement** dans les scripts qui manipulent des secrets." },
        ],
      },
      {
        id: 'audit-find',
        title: "Auditer les permissions avec find",
        blocks: [
          { t: 'p', text: "Un audit de base consiste à chercher les fichiers dont les permissions sortent de l’ordinaire. La commande `find` sait le faire à partir des **bits de permission** eux-mêmes." },
          { t: 'code', lang: "bash", caption: "Quatre recherches d’audit (à lancer en lecture seule)", code: "# Fichiers SUID (s’exécutent avec les droits de leur propriétaire)\nfind / -xdev -type f -perm -4000 2>/dev/null\n\n# Fichiers SGID\nfind / -xdev -type f -perm -2000 2>/dev/null\n\n# Fichiers modifiables par tout le monde\nfind / -xdev -type f -perm -0002 2>/dev/null\n\n# Fichiers sans propriétaire ou sans groupe (compte supprimé ?)\nfind / -xdev \\( -nouser -o -nogroup \\) 2>/dev/null" },
          {
            t: 'table',
            head: ["Élément de la commande", "Signification"],
            rows: [
              ["`-xdev`", "Reste sur le système de fichiers de départ (évite `/proc` et les montages réseau)"],
              ["`-perm -4000`", "Le bit SUID est positionné (le tiret signifie « tous ces bits au moins »)"],
              ["`2>/dev/null`", "Masque les erreurs « Permission non accordée »"],
            ],
          },
          { t: 'p', text: "Le résultat n’est pas une liste de fautes : `passwd` et `sudo` sont légitimement SUID. Ce qui compte, c’est l’**écart avec une liste de référence** de la distribution. Un interpréteur, un éditeur ou une copie de `find` en SUID root est une anomalie à traiter immédiatement." },
        ],
      },
    ],
    useCases: [
      "Audit de serveur : rechercher les binaires SUID inattendus, les fichiers modifiables par tous et les règles sudo trop larges.",
      'Test d’intrusion autorisé : vérifier si un accès utilisateur peut mener à root via une mauvaise configuration.',
      "Mise en production : appliquer une configuration SSH durcie et un umask restrictif avant d'exposer un serveur.",
      'Dépannage : comprendre pourquoi un service ou un utilisateur n’a plus accès à un fichier après une mise à jour.',
    ],
    commonMistakes: [
      "Corriger un problème d’accès avec `chmod 777` au lieu de comprendre le propriétaire, le groupe et l’umask.",
      "Créer un fichier de secrets sans fixer l’umask, puis découvrir qu’il est lisible par tous.",
      '« Corriger » un problème d’accès avec `chmod 777` : n’importe quel utilisateur peut alors modifier ou remplacer le fichier.',
      'Autoriser via sudo des programmes capables de lancer un shell (vim, less, find, python, tar…).',
      'Laisser `PasswordAuthentication yes` sur un serveur exposé à Internet.',
      'Oublier que le droit d’écriture sur un répertoire permet de remplacer les fichiers qu’il contient.',
      'Modifier `/etc/sudoers` sans `visudo` : une erreur de syntaxe peut bloquer toute administration.',
      'Chercher la cause d’un refus d’accès uniquement sur le fichier, sans examiner le droit `x` des répertoires du chemin.',
    ],
    bestPractices: [
      'Appliquer un umask restrictif (027) et des permissions minimales sur les configurations sensibles.',
      'Maintenir une liste de référence des binaires SUID et alerter sur tout écart.',
      'Rédiger des règles sudo par commande précise, avec arguments, et sans NOPASSWD sauf justification.',
      'SSH : clés uniquement, pas de root, accès via bastion, journalisation centralisée.',
      'Surveiller `/etc/passwd`, `/etc/shadow` et `/etc/sudoers` avec un contrôle d’intégrité (AIDE, auditd).',
      'Diagnostiquer d’abord (`id`, `namei -l`, `getfacl`), puis corriger au plus juste.',
    ],
    keyPoints: [
      "Permissions de création = base (666 ou 777) moins l’umask.",
      "Audit : find sur les bits SUID, SGID et « écriture pour tous », comparé à une référence.",
      'Permissions : r=4, w=2, x=1 pour propriétaire, groupe, autres.',
      'SUID root + programme détournable = élévation de privilèges.',
      'Une règle sudo qui autorise un programme ouvrant un shell équivaut à root.',
      'SSH durci : clés uniquement, pas de root, accès restreint.',
      'Un accès exige le droit `x` sur chaque répertoire du chemin : `namei -l` le montre.',
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
    {
      id: 'diagnostic-acces',
      kind: 'analysis',
      title: 'Diagnostic : un service ne lit plus sa configuration',
      context: [
        { t: 'p', text: 'Après une mise à jour, le service `webapp`, exécuté sous le compte `webapp` (groupe principal `webapp`), échoue au démarrage avec « Permission denied » sur `/srv/webapp/conf/app.yml`. Relevés :' },
        { t: 'code', lang: 'text', code: '$ id webapp\nuid=998(webapp) gid=998(webapp) groups=998(webapp)\n\n$ namei -l /srv/webapp/conf/app.yml\ndrwxr-xr-x root root /\ndrwxr-xr-x root root srv\ndrwxr-x--- root app  webapp\ndrwxr-xr-x root root conf\n-rw-r--r-- root root app.yml' },
      ],
      steps: ['Expliquer pourquoi le fichier, pourtant lisible par tous, reste inaccessible au service.', 'Proposer la correction la plus restreinte, en justifiant le choix de la solution.', 'Citer deux autres vérifications à faire si la correction ne suffit pas.'],
    },
  ],
  questions,
  resources: [
    { title: 'Recommandations de configuration d’un système GNU/Linux', source: 'ANSSI', url: 'https://cyber.gouv.fr/publications/recommandations-de-securite-relatives-un-systeme-gnulinux' },
    { title: 'Recommandations pour un usage sécurisé d’(Open)SSH', source: 'ANSSI', url: 'https://cyber.gouv.fr/publications/openssh-secure-use-recommendations' },
    { title: 'GTFOBins — binaires Unix détournables', source: 'Projet communautaire', url: 'https://gtfobins.github.io/' },
    { title: 'CIS Benchmarks for Linux', source: 'Center for Internet Security', url: 'https://www.cisecurity.org/cis-benchmarks' },
  ],
};
