import type { CourseBody } from '../../types';
import { questions } from './questions';

export const body: CourseBody = {
  courseId: 'c-shell-paquets-automatisation',
  lesson: {
    intro:
      'Les autres cours Linux supposent qu’on sait déjà se déplacer dans un terminal, installer un paquet et écrire un petit script. Ce cours pose ces bases : comment un système Linux est organisé, comment dialoguer avec lui par le shell Bash, comment écrire des scripts qui ne se retournent pas contre soi, comment installer et mettre à jour des logiciels sans compromettre la machine, et comment automatiser des tâches. C’est le socle pratique de l’administration et de la sécurité sous Linux.',
    sections: [
      {
        id: 'architecture',
        title: 'Architecture et distributions',
        blocks: [
          { t: 'p', text: 'Un système Linux se compose du **noyau** (qui gère le matériel, la mémoire, les processus et les droits) et de l’**espace utilisateur** (les programmes, dont le shell). Entre les deux, les **appels système** permettent aux programmes de demander un service au noyau de façon contrôlée.' },
          { t: 'def', term: 'Distribution', text: 'Assemblage cohérent d’un noyau Linux, d’outils système, d’un gestionnaire de paquets et d’une sélection de logiciels. Le noyau est commun ; ce qui change, ce sont les outils, les versions et la politique de mises à jour.' },
          {
            t: 'table',
            head: ['Famille', 'Exemples', 'Gestionnaire de paquets'],
            rows: [
              ['Debian', 'Debian, Ubuntu', '`apt` / `dpkg` (paquets `.deb`)'],
              ['Red Hat', 'RHEL, Fedora, Rocky, Alma', '`dnf` / `rpm` (paquets `.rpm`)'],
              ['Arch', 'Arch, Manjaro', '`pacman`'],
              ['SUSE', 'openSUSE, SLES', '`zypper`'],
            ],
          },
          { t: 'p', text: 'L’arborescence suit une norme (FHS) : `/etc` pour la configuration, `/var` pour les données variables (dont les journaux), `/home` pour les utilisateurs, `/usr` pour les programmes, `/bin` et `/sbin` pour les commandes essentielles.' },
          { t: 'def', term: 'Tout est fichier', text: 'Linux expose beaucoup de ressources par une interface de type fichier : disques et terminaux (`/dev`), état du noyau et des processus (`/proc`), tubes et sockets. Les mêmes outils et les mêmes droits d’accès s’appliquent donc partout.' },
          { t: 'def', term: 'PID 1 et processus', text: 'Chaque processus a un identifiant (PID). Le premier de l’espace utilisateur, de PID 1 (en général **systemd**), démarre les services et adopte les processus orphelins. Les autres descendent de lui.' },
          { t: 'p', text: 'Un compte ordinaire élève ses droits pour une commande avec `sudo`, selon la politique du fichier `sudoers`, et l’action est journalisée. On préfère `sudo commande` à l’ouverture d’un shell root, qui n’a plus de limite ni de trace fine.' },
          { t: 'callout', kind: 'tip', text: 'Le choix d’une distribution engage surtout sa **politique de mises à jour** et sa durée de support : un serveur privilégie une distribution stable à support long (LTS), pas la dernière version expérimentale.' },
        ],
      },
      {
        id: 'shell',
        title: 'Le shell Bash : se repérer et agir',
        blocks: [
          { t: 'p', text: 'Le **shell** interprète les commandes. Chaque commande reçoit des arguments et dispose de trois flux : l’entrée standard, la sortie standard et la sortie d’erreur, que l’on peut rediriger et enchaîner.' },
          { t: 'code', lang: 'bash', caption: 'Redirections et tubes', code: '# Rediriger la sortie vers un fichier (> écrase, >> ajoute)\njournalctl -u ssh > ssh.log\n\n# Enchaîner des commandes avec un tube (|)\nps -ef | grep nginx | wc -l\n\n# Rediriger la sortie d’erreur\ncommande 2> erreurs.txt' },
          {
            t: 'table',
            head: ['Besoin', 'Commande'],
            rows: [
              ['Où suis-je / lister', '`pwd`, `ls -la`'],
              ['Se déplacer', '`cd`, chemins absolus (`/etc`) ou relatifs (`../`)'],
              ['Lire un fichier', '`cat`, `less`, `head`, `tail -f`'],
              ['Chercher', '`grep motif fichier`, `find /chemin -name "*.log"`'],
              ['Droits', '`chmod`, `chown` (voir le cours sur les permissions)'],
            ],
          },
          {
            t: 'table',
            head: ['Opérateur', 'Effet'],
            rows: [
              ['`cmd1 && cmd2`', 'Lance cmd2 seulement si cmd1 réussit (code de retour 0)'],
              ['`cmd1 || cmd2`', 'Lance cmd2 seulement si cmd1 échoue'],
              ['`cmd1 ; cmd2`', 'Lance cmd2 dans tous les cas, après cmd1'],
              ['`cmd1 | cmd2`', 'Relie la sortie de cmd1 à l’entrée de cmd2'],
              ['`cmd &`', 'Lance cmd en arrière-plan'],
            ],
          },
          { t: 'def', term: 'Code de retour', text: 'Chaque commande termine avec un code : **0** pour le succès, une autre valeur pour une erreur. `$?` donne celui de la dernière commande. Les scripts s’en servent pour décider de la suite ; `set -e` les arrête à la première erreur.' },
          { t: 'def', term: 'Variable et substitution', text: 'Le shell remplace `$VAR` par sa valeur et `$(commande)` par la sortie de la commande. Ces substitutions sont pratiques mais sensibles : une valeur mal maîtrisée, insérée sans guillemets, peut changer le sens d’une commande.' },
          { t: 'def', term: 'PATH', text: 'Variable listant, dans l’ordre, les répertoires où le shell cherche les commandes. Un répertoire modifiable par un attaquant (ou `.`) placé en tête lui permet de déposer un faux `ls` ou `sudo` exécuté à la place du vrai. Les scripts planifiés utilisent donc des chemins absolus.' },
          { t: 'callout', kind: 'warn', text: 'Toujours entourer les variables de guillemets (`"$fichier"`). Sans eux, un nom contenant une espace est découpé en plusieurs arguments et un caractère générique (`*`) est développé, ce qui peut agir sur les mauvais fichiers.' },
        ],
      },
      {
        id: 'scripts',
        title: 'Écrire des scripts Bash robustes',
        blocks: [
          { t: 'p', text: 'Un script automatise une suite de commandes. Quelques réflexes évitent qu’il échoue silencieusement ou agisse sur les mauvaises données.' },
          { t: 'code', lang: 'bash', caption: 'Modèle de script sûr', code: '#!/usr/bin/env bash\nset -euo pipefail          # arrêt sur erreur, variable non définie, échec dans un tube\nIFS=$\'\\n\\t\'\n\nrepertoire="${1:?usage: sauvegarde.sh <repertoire>}"\n\nif [[ ! -d "$repertoire" ]]; then\n  echo "répertoire introuvable : $repertoire" >&2\n  exit 1\nfi\n\ntar -czf "/var/backups/$(date +%F).tar.gz" -- "$repertoire"' },
          {
            t: 'table',
            head: ['Réflexe', 'Pourquoi'],
            rows: [
              ['`#!/usr/bin/env bash`', 'Désigne l’interpréteur sans dépendre de son chemin exact'],
              ['`set -euo pipefail`', 'Le script s’arrête à la première erreur au lieu de continuer sur des données fausses'],
              ['Guillemets autour des variables', 'Évite le découpage et l’expansion involontaires'],
              ['`--` avant les arguments', 'Empêche qu’une valeur commençant par `-` soit prise pour une option'],
              ['Messages d’erreur vers `>&2`, code de sortie ≠ 0', 'Permet à l’appelant de détecter l’échec'],
            ],
          },
          { t: 'def', term: 'Données non fiables et eval', text: 'Un nom de fichier, un argument ou une saisie peut contenir des espaces, des caractères génériques ou des symboles du shell. Assembler une commande avec ces valeurs puis l’exécuter par `eval` permet d’**injecter des commandes**. On manipule les valeurs entre guillemets, on place `--` avant les noms de fichiers et on évite `eval`.' },
          { t: 'code', lang: 'bash', caption: 'Fichier temporaire et nettoyage garanti', code: 'tmp="$(mktemp -d)"                 # nom imprévisible, droits 700\ntrap \'rm -rf -- "$tmp"\' EXIT     # supprimé même en cas d’erreur\ncp -- "$source" "$tmp/"' },
          { t: 'def', term: 'ShellCheck', text: 'Analyseur statique de scripts shell qui signale les erreurs fréquentes : variables non entre guillemets, variables non définies, usages dangereux. À intégrer à l’édition et au pipeline.' },
          { t: 'callout', kind: 'key', text: 'Un script d’administration s’exécute souvent avec des privilèges élevés ou par une tâche planifiée : une erreur de quotage ou un chemin non contrôlé peut y causer des dégâts bien plus larges que dans une commande tapée à la main.' },
        ],
      },
      {
        id: 'paquets',
        title: 'Gestion des paquets et mises à jour',
        blocks: [
          { t: 'p', text: 'Le **gestionnaire de paquets** installe, met à jour et supprime les logiciels, en résolvant leurs dépendances, à partir de **dépôts** (sources de paquets). C’est le moyen sûr d’installer un logiciel : il vérifie la signature des paquets et facilite les mises à jour de sécurité.' },
          { t: 'code', lang: 'bash', caption: 'Opérations courantes (Debian/Ubuntu et RHEL/Fedora)', code: '# Mettre à jour l’index puis les paquets\nsudo apt update && sudo apt upgrade\nsudo dnf upgrade\n\n# Installer / supprimer\nsudo apt install nginx\nsudo dnf remove nginx\n\n# Savoir quel paquet fournit un fichier, lister les paquets installés\ndpkg -S /usr/sbin/nginx   ;   rpm -qf /usr/sbin/nginx' },
          { t: 'def', term: 'Dépôt signé', text: 'Source de paquets dont le contenu est signé cryptographiquement. Le gestionnaire vérifie la signature avant d’installer : on ne fait confiance qu’aux dépôts officiels de la distribution et de l’éditeur, et on ajoute leur clé par un canal sûr.' },
          {
            t: 'example',
            title: 'Retrouver l’origine d’un fichier et l’état d’un paquet',
            blocks: [
              { t: 'code', lang: 'bash', code: '# Quel paquet a installé /usr/sbin/nginx ?\ndpkg -S /usr/sbin/nginx      # → nginx-core: /usr/sbin/nginx\n\n# Les fichiers du paquet ont-ils été modifiés ? (intégrité)\ndebsums -c nginx-core        # Debian\nrpm -Va nginx                # RHEL : liste les écarts' },
              { t: 'p', text: 'Savoir rattacher un fichier à son paquet aide à comprendre une machine, et vérifier l’intégrité des fichiers installés permet de repérer un binaire système modifié par un attaquant.' },
            ],
          },
          {
            t: 'table',
            head: ['Source', 'Garantie', 'Risque à maîtriser'],
            rows: [
              ['Dépôt officiel de la distribution', 'Paquets signés, correctifs de sécurité suivis', 'Versions parfois anciennes'],
              ['Dépôt tiers signé (éditeur, PPA)', 'Signature de l’éditeur', 'On fait confiance à son mainteneur, qui peut remplacer des paquets'],
              ['Paquets de langage (pip, npm)', 'Aucune vérification éditoriale', 'Noms trompeurs, code exécuté à l’installation, dépendances compromises'],
              ['Script « curl | sudo bash »', 'Aucune', 'Code arbitraire exécuté en root'],
            ],
          },
          { t: 'callout', kind: 'warn', text: 'Installer un logiciel par un script « curl | sudo bash » venu d’une source quelconque exécute du code arbitraire en root, sans vérification de signature. On privilégie les dépôts signés, et à défaut on lit le script avant de l’exécuter.' },
          { t: 'p', text: 'Les **mises à jour de sécurité** doivent être appliquées rapidement ; les mises à jour automatiques (par exemple `unattended-upgrades` sur Debian) sont recommandées au moins pour les correctifs de sécurité.' },
        ],
      },
      {
        id: 'automatisation',
        title: 'Automatiser : tâches planifiées et filtrage local',
        blocks: [
          { t: 'p', text: 'Automatiser, c’est exécuter des tâches sans intervention : sauvegardes, rotation des journaux, vérifications. Deux mécanismes coexistent : **cron** (historique) et les **minuteurs systemd** (intégrés à la gestion des services).' },
          { t: 'code', lang: 'text', caption: 'Entrée cron et minuteur systemd', code: '# cron : sauvegarde chaque jour à 2 h 30\n30 2 * * *  /usr/local/bin/sauvegarde.sh\n\n# systemd : sauvegarde.timer\n[Timer]\nOnCalendar=*-*-* 02:30:00\nPersistent=true' },
          { t: 'callout', kind: 'warn', text: 'Une tâche planifiée qui exécute un script modifiable par un utilisateur, ou situé dans un répertoire modifiable par tous, permet une élévation de privilèges : le script et son répertoire doivent appartenir à root et n’être modifiables que par lui (voir le cours sur les permissions).' },
          { t: 'p', text: 'Pour le **filtrage local**, deux outils : **iptables**, historique et encore très répandu, et **nftables**, son successeur (détaillé dans le cours sur les services et le confinement). Le principe reste le même : une politique par défaut de refus en entrée, et l’autorisation explicite des seuls services nécessaires.' },
          { t: 'code', lang: 'bash', caption: 'iptables : refus par défaut en entrée, SSH autorisé', code: 'iptables -P INPUT DROP\niptables -A INPUT -i lo -j ACCEPT\niptables -A INPUT -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT\niptables -A INPUT -p tcp --dport 22 -s 10.20.0.0/24 -j ACCEPT' },
          { t: 'def', term: 'Environnement d’une tâche planifiée', text: 'Cron ne reprend pas l’environnement de la session : `PATH` réduit, répertoire courant imprévu, pas de terminal. Un script planifié utilise des **chemins absolus**, déclare ses variables et écrit ses messages dans un journal.' },
          { t: 'def', term: 'Verrou (flock)', text: 'Si une exécution dure plus longtemps que l’intervalle, la suivante démarre en même temps et peut corrompre des données. `flock` pose un verrou sur un fichier : la seconde instance attend ou abandonne.' },
          { t: 'callout', kind: 'warn', title: 'Un échec silencieux', text: 'Une tâche planifiée qui échoue sans que personne le sache donne une fausse impression de protection. Elle doit renvoyer un code non nul en cas d’erreur, journaliser (`logger`, `journalctl -u`) et être supervisée, par exemple par une alerte quand le dernier succès est trop ancien. Les minuteurs systemd laissent une trace consultable (`systemctl list-timers`).' },
          { t: 'def', term: 'Idempotence', text: 'Propriété d’une automatisation qui produit le même résultat qu’on la lance une ou plusieurs fois. Les outils de gestion de configuration (Ansible, etc.) la recherchent : appliquer deux fois la configuration ne doit pas casser l’état obtenu.' },
        ],
      },
      {
        id: 'inspection',
        title: 'Inspecter un système : processus, réseau, disque',
        blocks: [
          { t: 'p', text: 'Avant de corriger une panne ou d’enquêter sur une anomalie, il faut **observer**. Quelques commandes répondent aux questions de base : que tourne-t-il, qui écoute, de quoi manque-t-on, que dit le journal ?' },
          {
            t: 'table',
            head: ['Question', 'Commande', 'Ce qu’elle montre'],
            rows: [
              ['Quels processus ?', '`ps -ef`, `top`', 'Utilisateur, PID, commande, consommation de processeur et de mémoire'],
              ['Qui écoute sur le réseau ?', '`ss -tlnp`', 'Ports TCP en écoute et processus associés'],
              ['Quel fichier est ouvert par qui ?', '`lsof`', 'Fichiers et sockets ouverts par chaque processus'],
              ['Disque plein ?', '`df -h`, `du -sh /var/*`', 'Occupation par système de fichiers, puis par répertoire'],
              ['Mémoire ?', '`free -h`', 'Mémoire totale, utilisée, libre, cache'],
              ['Que dit le journal ?', '`journalctl -u ssh`, `tail -f /var/log/syslog`', 'Événements récents d’un service ou du système'],
            ],
          },
          { t: 'code', lang: 'bash', caption: 'Un premier tour d’horizon', code: 'uptime                    # charge moyenne et durée de fonctionnement\nss -tlnp                  # services à l’écoute (doivent être attendus)\ndf -h                     # espaces disque\nfree -h                   # mémoire\nps -eo pid,user,%cpu,%mem,cmd --sort=-%cpu | head' },
          { t: 'def', term: '/proc', text: 'Système de fichiers virtuel qui n’existe qu’en mémoire : chaque processus y a un répertoire `/proc/<PID>` avec sa ligne de commande, ses fichiers ouverts et son environnement. Les outils comme `ps` y lisent leurs données ; on peut aussi y chercher directement.' },
          {
            t: 'example',
            title: 'Un serveur qui ralentit',
            blocks: [
              { t: 'p', text: '`uptime` montre une charge élevée ; `df -h` révèle que la racine est à 100 % ; `du -sh /var/*` désigne `/var/log`, où un fichier de journal a grossi sans rotation. On vide proprement le fichier, on configure la rotation (`logrotate`) et on ajoute une alerte sur l’occupation du disque : la cause est traitée, pas seulement le symptôme.' },
            ],
          },
          { t: 'callout', kind: 'warn', text: 'La ligne de commande de chaque processus est lisible par les autres utilisateurs. Un mot de passe passé en argument s’y affiche : on le transmet par un fichier protégé, l’entrée standard ou une variable d’environnement limitée.' },
        ],
      },
    ],
    useCases: [
      'Prise en main d’un serveur Linux : se repérer dans l’arborescence, lire les journaux, installer et mettre à jour les paquets.',
      'Écriture d’un script de sauvegarde planifié, robuste et vérifié par ShellCheck.',
      'Durcissement de base : mises à jour de sécurité automatiques et pare-feu local en refus par défaut.',
      'Premier diagnostic d’un serveur lent ou suspect : charge, disque, mémoire, ports en écoute, journaux.',
    ],
    commonMistakes: [
      'Oublier les guillemets autour des variables dans un script, d’où des comportements imprévisibles.',
      'Lancer un script d’installation « curl | sudo bash » sans en vérifier la source ni le contenu.',
      'Installer des logiciels hors des dépôts signés et ne plus pouvoir les mettre à jour.',
      'Planifier un script exécuté en root mais modifiable par un utilisateur.',
      'Négliger les mises à jour de sécurité faute de les avoir automatisées.',
      'Laisser un répertoire modifiable par un attaquant dans le `PATH`, ou lancer un script cron sans chemins absolus.',
      'Passer un mot de passe en argument d’une commande, lisible par les autres utilisateurs de la machine.',
      'Laisser une tâche planifiée échouer en silence, sans journal ni supervision.',
    ],
    bestPractices: [
      'Scripts avec `set -euo pipefail`, variables entre guillemets, `--` avant les arguments, vérifiés par ShellCheck.',
      'Logiciels installés depuis les dépôts officiels signés ; mises à jour de sécurité appliquées rapidement, idéalement automatiques.',
      'Tâches planifiées exécutant des scripts appartenant à root et non modifiables par les utilisateurs.',
      'Filtrage local en refus par défaut (iptables ou nftables), ouverture des seuls services nécessaires.',
      'Distribution stable à support long pour les serveurs.',
      'Un diagnostic méthodique avant toute correction : observer charge, disque, mémoire, ports et journaux.',
      'Tâches planifiées avec chemins absolus, verrou contre les exécutions simultanées, journalisation et supervision.',
    ],
    keyPoints: [
      'Linux = noyau + espace utilisateur ; les distributions diffèrent surtout par leurs outils et leurs mises à jour.',
      'Bash : redirections, tubes, variables ; toujours entourer les variables de guillemets.',
      'Script sûr : shebang, `set -euo pipefail`, quotage, ShellCheck.',
      'Installer depuis des dépôts signés ; automatiser les mises à jour de sécurité.',
      'Automatisation (cron, minuteur systemd) et filtrage local en refus par défaut.',
      'Observer avant d’agir : `ps`, `ss`, `df`, `free`, `journalctl` donnent l’état du système.',
    ],
  },
  practice: [
    {
      id: 'corriger-script',
      kind: 'analysis',
      title: 'Corriger un script de sauvegarde fragile',
      context: [
        { t: 'p', text: 'Script trouvé sur un serveur, exécuté chaque nuit par cron en root :' },
        { t: 'code', lang: 'bash', code: '#!/bin/sh\ncd /data/$1\ntar czf /backups/$1.tar.gz *\nrm -rf /tmp/travail/*' },
      ],
      steps: ['Lister les problèmes de robustesse et de sécurité.', 'Réécrire le script de façon sûre.', 'Indiquer les précautions sur les permissions du script et de son répertoire.'],
    },
    {
      id: 'durcir-base',
      kind: 'case',
      title: 'Durcissement de base d’un nouveau serveur',
      context: [{ t: 'p', text: 'Vous venez d’installer un serveur Debian qui hébergera un service web. Avant la mise en ligne, vous préparez les bases : mises à jour, logiciels, automatisation et filtrage.' }],
      steps: ['Lister les premières actions de mise à jour et d’installation depuis des sources sûres.', 'Proposer une automatisation des mises à jour de sécurité.', 'Proposer un filtrage local initial et une tâche planifiée utile.'],
    },
    {
      id: 'diagnostic-disque',
      kind: 'analysis',
      title: 'Diagnostiquer un serveur qui ralentit',
      context: [
        { t: 'p', text: 'Un serveur applicatif devient lent, puis l’application refuse d’écrire. Relevés effectués :' },
        { t: 'code', lang: 'text', code: '$ df -h /\n/dev/sda1   40G   40G   0   100% /\n$ du -sh /var/* | sort -h | tail -3\n1,2G /var/cache\n3,5G /var/lib\n31G  /var/log\n$ ls -lh /var/log | sort -k5 -h | tail -1\n-rw-r----- 1 root adm 29G  app.log' },
      ],
      steps: ['Interpréter les relevés et énoncer la cause du symptôme.', 'Proposer la correction immédiate sans perdre d’information utile.', 'Proposer les mesures durables qui évitent la récidive.'],
    },
  ],
  questions,
  resources: [
    { title: 'Bash Reference Manual', source: 'GNU', url: 'https://www.gnu.org/software/bash/manual/bash.html' },
    { title: 'ShellCheck', source: 'ShellCheck', url: 'https://www.shellcheck.net/' },
    { title: 'Filesystem Hierarchy Standard', source: 'Linux Foundation', url: 'https://refspecs.linuxfoundation.org/fhs.shtml' },
    { title: 'Recommandations de configuration d’un système GNU/Linux', source: 'ANSSI', url: 'https://cyber.gouv.fr/publications/recommandations-de-securite-relatives-un-systeme-gnulinux' },
    { title: 'netfilter/iptables documentation', source: 'Projet netfilter', url: 'https://www.netfilter.org/documentation/' },
  ],
};
