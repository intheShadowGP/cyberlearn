import type { CourseBody } from '../../types';

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
          { t: 'def', term: 'Variable et substitution', text: 'Le shell remplace `$VAR` par sa valeur et `$(commande)` par la sortie de la commande. Ces substitutions sont pratiques mais sensibles : une valeur mal maîtrisée, insérée sans guillemets, peut changer le sens d’une commande.' },
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
          { t: 'def', term: 'Idempotence', text: 'Propriété d’une automatisation qui produit le même résultat qu’on la lance une ou plusieurs fois. Les outils de gestion de configuration (Ansible, etc.) la recherchent : appliquer deux fois la configuration ne doit pas casser l’état obtenu.' },
        ],
      },
    ],
    useCases: [
      'Prise en main d’un serveur Linux : se repérer dans l’arborescence, lire les journaux, installer et mettre à jour les paquets.',
      'Écriture d’un script de sauvegarde planifié, robuste et vérifié par ShellCheck.',
      'Durcissement de base : mises à jour de sécurité automatiques et pare-feu local en refus par défaut.',
    ],
    commonMistakes: [
      'Oublier les guillemets autour des variables dans un script, d’où des comportements imprévisibles.',
      'Lancer un script d’installation « curl | sudo bash » sans en vérifier la source ni le contenu.',
      'Installer des logiciels hors des dépôts signés et ne plus pouvoir les mettre à jour.',
      'Planifier un script exécuté en root mais modifiable par un utilisateur.',
      'Négliger les mises à jour de sécurité faute de les avoir automatisées.',
    ],
    bestPractices: [
      'Scripts avec `set -euo pipefail`, variables entre guillemets, `--` avant les arguments, vérifiés par ShellCheck.',
      'Logiciels installés depuis les dépôts officiels signés ; mises à jour de sécurité appliquées rapidement, idéalement automatiques.',
      'Tâches planifiées exécutant des scripts appartenant à root et non modifiables par les utilisateurs.',
      'Filtrage local en refus par défaut (iptables ou nftables), ouverture des seuls services nécessaires.',
      'Distribution stable à support long pour les serveurs.',
    ],
    keyPoints: [
      'Linux = noyau + espace utilisateur ; les distributions diffèrent surtout par leurs outils et leurs mises à jour.',
      'Bash : redirections, tubes, variables ; toujours entourer les variables de guillemets.',
      'Script sûr : shebang, `set -euo pipefail`, quotage, ShellCheck.',
      'Installer depuis des dépôts signés ; automatiser les mises à jour de sécurité.',
      'Automatisation (cron, minuteur systemd) et filtrage local en refus par défaut.',
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
  ],
  questions: [
    { id: 'csh-q1', type: 'single', difficulty: 1, skills: ['c-architecture'], prompt: 'Quelle est la différence entre le noyau et l’espace utilisateur ?', options: [{ id: 'a', text: 'Le noyau gère le matériel, la mémoire, les processus et les droits ; l’espace utilisateur contient les programmes qui lui demandent des services' }, { id: 'b', text: 'Le noyau contient les documents de l’utilisateur' }, { id: 'c', text: 'L’espace utilisateur remplace le noyau au démarrage' }, { id: 'd', text: 'Il n’y a aucune différence' }] },
    { id: 'csh-q2', type: 'single', difficulty: 1, skills: ['c-architecture'], prompt: 'Quel gestionnaire de paquets est associé aux distributions de la famille Debian ?', options: [{ id: 'a', text: '`apt` / `dpkg`' }, { id: 'b', text: '`dnf` / `rpm`' }, { id: 'c', text: '`pacman`' }, { id: 'd', text: '`zypper`' }] },
    { id: 'csh-q3', type: 'short', difficulty: 1, skills: ['c-architecture'], prompt: 'Dans l’arborescence Linux, quel répertoire contient par convention les fichiers de configuration du système ?', placeholder: '/…' },
    { id: 'csh-q4', type: 'single', difficulty: 2, skills: ['c-shell'], prompt: 'Que fait l’opérateur `|` (tube) entre deux commandes ?', options: [{ id: 'a', text: 'Il envoie la sortie standard de la première commande dans l’entrée standard de la seconde' }, { id: 'b', text: 'Il exécute les deux commandes en parallèle sans lien' }, { id: 'c', text: 'Il redirige les erreurs vers un fichier' }, { id: 'd', text: 'Il commente la ligne' }] },
    { id: 'csh-q5', type: 'truefalse', difficulty: 2, skills: ['c-shell'], prompt: 'Dans un script, entourer une variable de guillemets (`"$fichier"`) évite qu’un nom contenant une espace soit découpé en plusieurs arguments.' },
    { id: 'csh-q6', type: 'single', difficulty: 2, skills: ['c-shell'], prompt: 'Que fait `set -euo pipefail` en tête d’un script ?', options: [{ id: 'a', text: 'Il arrête le script à la première erreur, sur variable non définie et sur échec dans un tube' }, { id: 'b', text: 'Il accélère l’exécution' }, { id: 'c', text: 'Il exécute le script en tant que root' }, { id: 'd', text: 'Il supprime les fichiers temporaires' }] },
    { id: 'csh-q7', type: 'short', difficulty: 2, skills: ['c-shell'], prompt: 'Quel analyseur statique signale les erreurs fréquentes des scripts shell (variables non quotées, etc.) ?' },
    { id: 'csh-q8', type: 'open', difficulty: 3, skills: ['c-shell', 'c-automatisation'], prompt: 'Un script exécuté par cron en root fait `cd /data/$1` puis agit sur `*`. Expliquez ce qui peut mal tourner et comment rendre ce script sûr.' },
    { id: 'csh-q9', type: 'single', difficulty: 2, skills: ['c-paquets'], prompt: 'Pourquoi préférer un dépôt de paquets signé à un script d’installation « curl | sudo bash » de provenance quelconque ?', options: [{ id: 'a', text: 'Le dépôt signé vérifie l’authenticité des paquets, alors que le script exécute du code arbitraire en root sans vérification' }, { id: 'b', text: 'Le script est toujours plus lent' }, { id: 'c', text: 'Le dépôt signé ne nécessite jamais de mise à jour' }, { id: 'd', text: 'Il n’y a aucune différence de sécurité' }] },
    { id: 'csh-q10', type: 'truefalse', difficulty: 1, skills: ['c-paquets'], prompt: 'Les mises à jour de sécurité devraient être appliquées rapidement, idéalement de façon automatique.' },
    { id: 'csh-q11', type: 'multi', difficulty: 2, skills: ['c-paquets'], prompt: 'Quelles pratiques sécurisent la gestion des logiciels ?', options: [{ id: 'a', text: 'N’installer que depuis les dépôts officiels signés' }, { id: 'b', text: 'Ajouter la clé d’un dépôt par un canal sûr' }, { id: 'c', text: 'Automatiser les mises à jour de sécurité' }, { id: 'd', text: 'Désactiver toute mise à jour pour ne rien casser' }] },
    { id: 'csh-q12', type: 'multi', difficulty: 2, skills: ['c-automatisation'], prompt: 'Quels mécanismes permettent de planifier l’exécution d’une tâche sous Linux ?', options: [{ id: 'a', text: 'cron' }, { id: 'b', text: 'Les minuteurs systemd (`.timer`)' }, { id: 'c', text: 'apt' }, { id: 'd', text: 'grep' }] },
    { id: 'csh-q13', type: 'truefalse', difficulty: 2, skills: ['c-automatisation'], prompt: 'Une tâche planifiée exécutée en root mais pointant vers un script modifiable par un utilisateur est un risque d’élévation de privilèges.' },
    { id: 'csh-q14', type: 'single', difficulty: 2, skills: ['c-automatisation'], prompt: 'Dans un jeu de règles iptables de filtrage local, que signifie `iptables -P INPUT DROP` ?', options: [{ id: 'a', text: 'La politique par défaut de la chaîne d’entrée rejette tout ce qui n’est pas explicitement autorisé' }, { id: 'b', text: 'Toutes les connexions entrantes sont autorisées' }, { id: 'c', text: 'Le pare-feu est désactivé' }, { id: 'd', text: 'Le trafic sortant est bloqué' }] },
    { id: 'csh-q15', type: 'short', difficulty: 3, skills: ['c-automatisation'], prompt: 'Comment appelle-t-on la propriété d’une automatisation qui donne le même résultat qu’on l’applique une ou plusieurs fois ?', placeholder: 'un mot' },
    { id: 'csh-q16', type: 'open', difficulty: 2, skills: ['c-paquets', 'c-automatisation'], prompt: 'Vous préparez un nouveau serveur Debian avant sa mise en ligne. Décrivez les premières actions de base concernant les mises à jour, l’installation de logiciels et le filtrage local.' },
  ],
  resources: [
    { title: 'Bash Reference Manual', source: 'GNU', url: 'https://www.gnu.org/software/bash/manual/bash.html' },
    { title: 'ShellCheck', source: 'ShellCheck', url: 'https://www.shellcheck.net/' },
    { title: 'Filesystem Hierarchy Standard', source: 'Linux Foundation', url: 'https://refspecs.linuxfoundation.org/fhs.shtml' },
    { title: 'Recommandations de configuration d’un système GNU/Linux', source: 'ANSSI', url: 'https://cyber.gouv.fr/publications/recommandations-de-securite-relatives-un-systeme-gnulinux' },
    { title: 'netfilter/iptables documentation', source: 'Projet netfilter', url: 'https://www.netfilter.org/documentation/' },
  ],
};
