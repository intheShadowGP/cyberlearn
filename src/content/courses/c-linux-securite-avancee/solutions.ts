import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'c-linux-securite-avancee',
  practice: {
    'durcir-noyau': {
      blocks: [
        {
          t: 'table',
          head: ['Réglage', 'Ce qu’il retire à un attaquant local'],
          rows: [
            ['`kernel.kptr_restrict = 2`', 'Les adresses du noyau dans `/proc`, utiles pour écrire un exploit fiable'],
            ['`kernel.dmesg_restrict = 1`', 'La lecture du tampon du noyau, qui révèle adresses et détails du matériel'],
            ['`kernel.yama.ptrace_scope = 1`', 'La possibilité d’attacher `ptrace` à un processus voisin pour lire ses secrets en mémoire'],
            ['`kernel.unprivileged_bpf_disabled = 1`', 'Le chargement de programmes eBPF par un compte non privilégié, surface d’exploitation du noyau'],
          ],
        },
        { t: 'code', lang: 'text', caption: '/etc/sysctl.d/99-durcissement.conf et montages', code: 'kernel.kptr_restrict = 2\nkernel.dmesg_restrict = 1\nkernel.yama.ptrace_scope = 1\nkernel.unprivileged_bpf_disabled = 1\n\n# /etc/fstab : /tmp sans exécution ni SUID ni périphériques\ntmpfs  /tmp  tmpfs  defaults,nosuid,nodev,noexec  0 0' },
        { t: 'p', text: 'Avec `nosuid,nodev,noexec` sur `/tmp`, un binaire déposé par un attaquant ne peut plus s’y exécuter directement et un bit SUID n’y a pas d’effet. `/dev/shm` a déjà `nosuid,nodev` : on y ajoute `noexec`.' },
        { t: 'list', ordered: true, items: ['Tester d’abord sur une machine de préproduction identique : `sysctl --system` puis vérifier chaque valeur avec `sysctl <paramètre>`.', 'Chercher les effets de bord : `ptrace_scope` gêne `gdb` ou `strace -p` sur un processus existant ; `noexec` sur `/tmp` peut casser certains installateurs ou scripts qui s’y exécutent.', 'Déployer par étapes (une machine, puis un lot), surveiller les journaux du service et les alertes.', 'Retour arrière : retirer le fichier et recharger (`sysctl -w` ou redémarrage), remonter `/tmp` avec les anciennes options.'] },
        { t: 'callout', kind: 'tip', text: 'Ces réglages réduisent l’exploitation ; la mesure la plus efficace reste de **mettre à jour** le noyau et les paquets.' },
      ],
    },
    'audit-elevation': {
      blocks: [
        {
          t: 'table',
          head: ['Constat', 'Verdict', 'Correction la plus restreinte'],
          rows: [
            ['`python3.11` avec `cap_setuid=ep`', '**Critique** : tout utilisateur qui lance cet interpréteur peut changer son UID en 0 et obtenir un shell root', '`sudo setcap -r /usr/bin/python3.11`, rechercher qui l’a posée et quand'],
            ['`dev1` dans le groupe `docker`', '**Critique** : équivaut à root, car il peut monter la racine de l’hôte dans un conteneur', 'Retirer `dev1` du groupe ; passer à Docker sans privilèges ou Podman ; accès par sudo ciblé et journalisé'],
            ['`/opt/jobs` modifiable par `devs`, `nightly.sh` exécuté par cron en root', '**Critique** : `dev1` (membre de `devs`) peut remplacer le script, exécuté ensuite en root', '`chown root:root /opt/jobs && chmod 755 /opt/jobs`, `chmod 700 nightly.sh`'],
            ['`ping` avec `cap_net_raw=ep`', 'Normal', '—'],
          ],
        },
        { t: 'list', items: ['Règle auditd sur les chemins de persistance : `-w /opt/jobs -p wa -k jobs`.', 'Règle sur la socket du moteur de conteneurs : `-w /var/run/docker.sock -p rwxa -k docker`.', 'Règle sur l’outil `setcap` : `-w /usr/sbin/setcap -p x -k setcap`, et sur les exécutions où `uid` diffère de `euid` : `-a always,exit -F arch=b64 -S execve -C uid!=euid -F euid=0 -k escalade`.', 'Alerte au SIEM sur toute apparition d’une nouvelle capacité de fichier ou d’un nouveau membre du groupe `docker`.'] },
        { t: 'callout', kind: 'warn', text: 'Trois chemins critiques sur un même serveur : traitez-le comme potentiellement déjà exploité. Recherchez des traces avant de corriger (qui a posé la capacité, qui a modifié le script).' },
      ],
    },
    'depot-tiers': {
      blocks: [
        { t: 'p', text: 'Le one-liner `curl … | sudo bash` télécharge un script **sans le relire ni vérifier son origine ni son contenu** et l’exécute en root. Le script peut changer d’un jour à l’autre, ajouter un dépôt et une clé avec une confiance globale, et son effet n’est ni reproductible ni inventorié.' },
        { t: 'list', ordered: true, items: ['Télécharger séparément la clé publique et le script ; **relire** le script ; vérifier l’**empreinte** de la clé (`gpg --show-keys --fingerprint`) par un second canal (site de l’éditeur, annonce signée).', 'Installer la clé dans `/etc/apt/keyrings/` et la rattacher au seul dépôt avec `Signed-By:` dans le fichier `.sources`.', 'Épingler le dépôt (`/etc/apt/preferences.d/`) pour qu’il ne remplace aucun paquet du système.', 'Tester sur une machine d’essai ou un instantané : examiner le contenu (`dpkg -c`) et les scripts du paquet (`dpkg -e`) avant l’installation en production.'] },
        { t: 'list', items: ['Continuer à installer depuis un **miroir interne** ou un instantané daté, pour des versions reproductibles.', 'Inventorier le paquet dans le SBOM et surveiller ses avis de sécurité ; planifier les mises à jour.', 'Prévoir le retrait (désinstallation, suppression du dépôt et de la clé) si l’éditeur ou son dépôt devient douteux.'] },
        { t: 'callout', kind: 'key', text: 'Une signature valide prouve **qui** a publié le paquet, pas que son contenu est sain : la confiance reste un risque à encadrer par l’épinglage, le test et la surveillance du comportement.' },
      ],
    },
  },
};
