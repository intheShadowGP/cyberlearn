import type { CourseBody } from '../../types';
import { questions } from './questions';

export const body: CourseBody = {
  courseId: 'c-linux-securite-avancee',
  lesson: {
    intro:
      'Les cours précédents du module ont appris à administrer, confiner et surveiller un serveur Linux. Ce cours prend le point de vue du spécialiste qui suppose qu’une compromission finira par arriver : que reste-t-il à l’attaquant une fois sur la machine, comment lui retirer des leviers (noyau, privilèges, paquets), comment prouver que le système n’a pas été modifié, comment détecter son comportement à l’exécution et comment l’étudier sans détruire les preuves.',
    sections: [
      {
        id: 'noyau',
        title: 'Durcir le noyau et réduire la surface d’attaque',
        blocks: [
          { t: 'p', text: 'Le noyau est le programme le plus privilégié de la machine : une faille du noyau contourne tous les contrôles des programmes qu’il supervise. Durcir, c’est **retirer à un processus local ce dont il n’a pas besoin** (interfaces, modules, informations) et **rendre l’exploitation plus coûteuse**. Beaucoup de réglages passent par `sysctl`.' },
          {
            t: 'table',
            caption: 'Paramètres sysctl de durcissement courants',
            head: ['Paramètre', 'Valeur', 'Effet'],
            rows: [
              ['`kernel.kptr_restrict`', '`2`', 'Masque les adresses du noyau dans `/proc` (elles aident l’exploitation)'],
              ['`kernel.dmesg_restrict`', '`1`', 'Réserve la lecture du tampon du noyau aux comptes privilégiés'],
              ['`kernel.yama.ptrace_scope`', '`1`', 'Un processus ne peut attacher `ptrace` qu’à ses descendants : limite l’extraction de secrets en mémoire'],
              ['`kernel.unprivileged_bpf_disabled`', '`1`', 'Interdit le chargement de programmes eBPF aux comptes non privilégiés'],
              ['`fs.protected_symlinks` / `fs.protected_hardlinks`', '`1`', 'Bloque des attaques par liens dans les répertoires partagés comme `/tmp`'],
              ['`fs.suid_dumpable`', '`0`', 'Pas de vidage mémoire (core dump) des programmes SUID : il pourrait contenir des secrets'],
              ['`net.ipv4.conf.all.rp_filter`', '`1`', 'Rejette les paquets dont la source est incohérente avec la route de retour'],
            ],
          },
          { t: 'code', lang: 'bash', caption: 'Rendre les réglages durables et les vérifier', code: '# /etc/sysctl.d/99-durcissement.conf\nkernel.kptr_restrict = 2\nkernel.dmesg_restrict = 1\nkernel.yama.ptrace_scope = 1\nkernel.unprivileged_bpf_disabled = 1\n\nsudo sysctl --system            # recharge tous les fichiers sysctl.d\nsysctl kernel.kptr_restrict     # relit la valeur effectivement active' },
          { t: 'def', term: 'Surface d’attaque du noyau', text: 'Ensemble des interfaces qu’un programme local peut atteindre : appels système, pilotes et **modules chargeables**, systèmes de fichiers, protocoles réseau. Chaque module inutile chargé est du code supplémentaire à exploiter ; on bloque les modules rares (`blacklist`, `install … /bin/false` dans `/etc/modprobe.d/`) et, sur un serveur figé, `kernel.modules_disabled=1` interdit tout nouveau chargement jusqu’au prochain redémarrage.' },
          { t: 'def', term: 'Kernel lockdown', text: 'Mode du noyau qui limite ce que **root lui-même** peut faire au noyau : écrire dans `/dev/mem`, charger un module non signé, modifier le matériel. Il est souvent activé avec le démarrage sécurisé (Secure Boot) et se lit dans `/sys/kernel/security/lockdown`.' },
          { t: 'p', text: 'Les options de montage ajoutent une couche simple : `nosuid,nodev,noexec` sur `/tmp`, `/var/tmp` et `/dev/shm` empêchent d’y exécuter un binaire déposé ou d’y faire valoir un bit SUID, et `hidepid=2` sur `/proc` masque aux utilisateurs les processus des autres.' },
          { t: 'callout', kind: 'warn', text: 'Le durcissement ne remplace jamais la **mise à jour** : la plupart des élévations de privilèges réussies exploitent une faille déjà corrigée. Suivre les avis de sécurité du noyau, planifier les redémarrages (ou recourir au correctif à chaud quand l’éditeur le propose) et tester chaque réglage : `ptrace_scope` ou `modules_disabled` peuvent casser des outils de diagnostic ou du matériel.' },
        ],
      },
      {
        id: 'elevation',
        title: 'Élévation locale de privilèges : auditer et détecter',
        blocks: [
          { t: 'p', text: 'Un attaquant qui obtient l’exécution de code sous un compte de service, par exemple via une faille web, cherche ensuite à devenir root. Le défenseur connaît ces chemins : il les **inventorie avant lui**, les ferme, et surveille ceux qu’il ne peut pas fermer.' },
          {
            t: 'table',
            head: ['Vecteur', 'Pourquoi c’est dangereux', 'Audit'],
            rows: [
              ['Binaires SUID/SGID', 'Un binaire détournable en SUID root donne root', '`find / -xdev -perm -4000 -type f`, comparaison à une référence'],
              ['Capacités de fichier', 'Une capacité comme `cap_setuid` sur un interpréteur équivaut à root', '`getcap -r / 2>/dev/null`'],
              ['Règles sudo', 'Un programme autorisé qui ouvre un shell donne root', '`sudo -l` pour chaque compte'],
              ['Groupes puissants', 'Un membre du groupe `docker` peut monter la racine de l’hôte dans un conteneur ; `disk` lit les disques bruts', '`id`, `getent group docker disk lxd`'],
              ['Chemins modifiables exécutés par root', 'Script de cron, unité systemd ou bibliothèque remplaçable', '`find /etc/cron* /etc/systemd -writable`, droits des répertoires parents'],
              ['Noyau et paquets vulnérables', 'Exploits publics sans interaction du propriétaire', '`uname -r` comparé aux avis, mises à jour en attente'],
            ],
          },
          { t: 'def', term: 'Capacité de fichier', text: 'Privilège Linux attaché à un exécutable avec `setcap`, à la manière d’un SUID mais plus fin. `setcap cap_net_bind_service+ep` est légitime pour un serveur web ; `cap_setuid+ep` sur `python` permet de devenir n’importe quel utilisateur, root compris.' },
          { t: 'code', lang: 'bash', caption: 'Inventaire en lecture seule des chemins d’élévation', code: 'find / -xdev -perm -4000 -type f 2>/dev/null     # SUID\ngetcap -r / 2>/dev/null                          # capacités de fichier\nsudo -l                                          # règles sudo du compte courant\nid; getent group docker disk lxd                 # groupes puissants\nuname -r                                         # version du noyau\nsudo lynis audit system                          # audit global (outil de défense)' },
          {
            t: 'example',
            title: 'Des exploits connus, une même parade',
            blocks: [
              { t: 'p', text: 'Des failles publiques comme **Dirty COW** (CVE-2016-5195), **Dirty Pipe** (CVE-2022-0847), **PwnKit** (CVE-2021-4034, dans `pkexec`) ou **Baron Samedit** (CVE-2021-3156, dans `sudo`) ont permis à un utilisateur local de devenir root sur d’innombrables systèmes. Le point commun : le correctif existait déjà au moment des attaques courantes. Les parades sont la **mise à jour rapide**, la réduction des binaires SUID présents et la limitation des espaces de noms utilisateur non privilégiés.' },
            ],
          },
          { t: 'code', lang: 'text', caption: 'Règle auditd : exécution où l’UID diffère de l’UID effectif', code: '-a always,exit -F arch=b64 -S execve -C uid!=euid -F euid=0 -k escalade\n\n# Puis : ausearch -k escalade -i' },
          { t: 'callout', kind: 'tip', text: 'Un SUID légitime (`passwd`, `sudo`) déclenche cette règle : le signal utile est un **nouveau** binaire ou un **nouvel** utilisateur dans les résultats. Établissez d’abord la base habituelle, puis alertez sur l’écart.' },
        ],
      },
      {
        id: 'integrite',
        title: 'Intégrité du système : référence, mesure et signature',
        blocks: [
          { t: 'p', text: 'Après une compromission, la question est : **quels fichiers ont changé ?** Sans référence fiable, on ne peut que deviner. Plusieurs mécanismes se complètent, du plus simple (empreintes de fichiers) au plus profond (mesure par le noyau et le matériel).' },
          {
            t: 'table',
            head: ['Mécanisme', 'Ce qu’il garantit', 'Limite'],
            rows: [
              ['Vérification des paquets (`debsums`, `rpm -Va`)', 'Les fichiers installés par un paquet correspondent aux empreintes du paquet', 'Ne couvre ni les fichiers hors paquet ni les empreintes elles-mêmes si elles sont altérées'],
              ['**AIDE** (base d’empreintes)', 'Détecte tout fichier surveillé modifié, ajouté ou supprimé depuis la référence', 'La base doit être hors de portée de l’attaquant, sinon il la met à jour'],
              ['**IMA / EVM** (noyau)', 'Mesure ou évalue chaque fichier à l’exécution ; EVM protège les attributs étendus', 'Politique à écrire avec soin, nécessite des signatures ou une chaîne de confiance'],
              ['**dm-verity**', 'Un volume en lecture seule est vérifié bloc par bloc par un arbre de hachage dont la racine est signée', 'Pour des volumes figés (système d’appareil, image immuable), pas pour des données qui changent'],
              ['Signature des modules', 'Le noyau refuse un module non signé', 'Efficace avec Secure Boot et lockdown, sinon contournable par root'],
            ],
          },
          { t: 'code', lang: 'bash', caption: 'Référence et contrôle avec AIDE', code: 'sudo aide --init                        # construit la base de référence\n# copier la base sur un support en lecture seule ou un serveur distinct\nsudo aide --check                       # compare l’état actuel à la référence\n\ndebsums -c                              # fichiers de paquets Debian modifiés\nrpm -Va                                 # idem pour les paquets RPM' },
          { t: 'def', term: 'IMA (Integrity Measurement Architecture)', text: 'Sous-système du noyau qui **mesure** les fichiers à l’ouverture ou à l’exécution, enregistre ces mesures dans une liste dont l’empreinte peut être étendue dans un registre du TPM, et peut **refuser** l’exécution d’un fichier sans signature valide. La liste se lit dans `/sys/kernel/security/ima/ascii_runtime_measurements`.' },
          { t: 'callout', kind: 'key', text: 'Une référence d’intégrité n’a de valeur que si elle est **hors de portée de l’attaquant** : base AIDE copiée sur un support en lecture seule, mesures IMA envoyées à un vérificateur distant. Un attaquant root qui peut réécrire la base fait passer ses modifications pour la normale.' },
          { t: 'p', text: 'Les écarts attendus (configuration modifiée, mise à jour) sont traités par une procédure : on met à jour la référence **après** chaque changement validé, jamais en réponse à une alerte non expliquée.' },
        ],
      },
      {
        id: 'paquets',
        title: 'Chaîne d’approvisionnement des paquets',
        blocks: [
          { t: 'p', text: 'Un serveur exécute ce qu’on lui a installé. Chaque paquet est du code qui s’exécute souvent en root dès l’installation : sa provenance fait partie de la sécurité du système. La **chaîne d’approvisionnement** va du développeur amont au dépôt, au miroir, puis à la machine.' },
          { t: 'list', items: ['**Signatures** : les métadonnées du dépôt (`InRelease` pour apt, `repo_gpgcheck` pour dnf) et les paquets (`gpgcheck=1`) sont signés ; ne jamais désactiver la vérification pour « faire passer » une installation.', '**Une clé par dépôt** : un dépôt tiers reçoit sa propre clé, rattachée à sa source (`signed-by=` dans la définition du dépôt apt), et non une confiance globale accordée à tous les dépôts.', '**Épinglage** (pinning) : fixer la priorité des dépôts et des versions pour qu’un dépôt tiers ne remplace pas un paquet du système.', '**Miroir interne** avec instantanés datés : les machines installent depuis un état validé, reproductible, plutôt que depuis Internet à la volée.', '**SBOM** (nomenclature logicielle) : inventaire des composants d’une machine ou d’une image, croisé avec les bases de vulnérabilités pour savoir vite si l’on est touché.'] },
          { t: 'code', lang: 'text', caption: 'Dépôt tiers lié à sa propre clé (apt)', code: '# /etc/apt/sources.list.d/outil.sources\nTypes: deb\nURIs: https://depot.exemple.org/debian\nSuites: stable\nComponents: main\nSigned-By: /etc/apt/keyrings/outil.gpg\n\n# Vérifier l’empreinte de la clé auprès d’un second canal avant de l’installer\ngpg --show-keys --fingerprint /etc/apt/keyrings/outil.gpg' },
          {
            t: 'example',
            title: 'xz : la porte dérobée venue de l’amont (CVE-2024-3094)',
            blocks: [
              { t: 'p', text: 'En mars 2024, une porte dérobée a été découverte dans les archives de publication des versions **5.6.0 et 5.6.1** de la bibliothèque de compression `xz`. Un compte devenu co-mainteneur du projet l’avait introduite après des années de contributions : le code qui l’activait figurait dans les archives de publication plutôt que dans le dépôt de sources. Sur certaines distributions, elle visait `sshd` par l’intermédiaire de `systemd` et de `liblzma`. Elle a été repérée avant de se répandre dans les versions stables, parce qu’un développeur a remarqué des connexions SSH anormalement lentes.' },
              { t: 'p', text: 'Leçons : la confiance accordée à un mainteneur est un risque ; un paquet est jugé sur son **comportement** autant que sur sa signature ; réduire les dépendances de `sshd` et surveiller son comportement est une défense réelle.' },
            ],
          },
          { t: 'callout', kind: 'warn', text: 'Les installations `curl … | sudo bash`, les paquets `pip`/`npm` installés globalement en root et les dépôts ajoutés sans vérifier l’empreinte de leur clé contournent toute cette chaîne. Une signature valide prouve **qui** a publié le paquet, pas que son contenu est sain.' },
        ],
      },
      {
        id: 'ebpf',
        title: 'eBPF et détection à l’exécution',
        blocks: [
          { t: 'p', text: 'Les journaux disent ce que les programmes ont choisi d’écrire. La détection **à l’exécution** observe ce qu’ils font réellement : quel programme est lancé, quel fichier est ouvert, quelle connexion est établie. **eBPF** est la technique qui rend cette observation possible dans le noyau sans le modifier ni charger de module.' },
          { t: 'def', term: 'eBPF', text: 'Mécanisme du noyau qui exécute de petits programmes vérifiés (par un **vérificateur** qui refuse tout code dangereux) sur des événements : appel système, paquet réseau, fonction du noyau. Il sert à l’observabilité, au filtrage réseau et à la sécurité. Des outils comme **Falco**, **Tetragon** ou **Tracee** s’appuient dessus pour détecter des comportements.' },
          { t: 'code', lang: 'yaml', caption: 'Règle de détection de type Falco (à adapter)', code: '- rule: Shell lancé par un serveur web\n  desc: Un serveur web ne lance normalement pas de shell interactif\n  condition: spawned_process and proc.name in (sh, bash, dash) and proc.pname in (nginx, apache2, httpd)\n  output: "Shell lancé par %proc.pname (utilisateur=%user.name commande=%proc.cmdline)"\n  priority: WARNING' },
          {
            t: 'table',
            head: ['Apport', 'Risque associé'],
            rows: [
              ['Visibilité fine : exécutions, fichiers, connexions, sans modifier les applications', 'Charger un programme eBPF demande des privilèges élevés (`CAP_BPF`, `CAP_SYS_ADMIN`) : un attaquant root peut aussi en charger'],
              ['Faible surcoût, vérifié avant exécution', 'Des rootkits exploitent eBPF pour masquer des activités ; un bogue du vérificateur est une faille du noyau'],
              ['Détection par comportement, indépendante des journaux applicatifs', 'Des règles trop larges produisent des faux positifs : il faut une base de comportement normal'],
            ],
          },
          { t: 'code', lang: 'bash', caption: 'Surveiller eBPF lui-même', code: 'sudo bpftool prog list                    # programmes eBPF actuellement chargés\nsudo sysctl kernel.unprivileged_bpf_disabled   # 1 ou 2 : chargement réservé aux privilégiés\n\n# auditd : tracer tout appel système bpf()\n-a always,exit -F arch=b64 -S bpf -k ebpf' },
          { t: 'callout', kind: 'tip', text: 'Une règle de détection se valide comme un test : on **déclenche** volontairement le comportement (un shell lancé depuis le service de test) pour vérifier qu’elle alerte, puis on mesure le bruit en production avant de transformer l’alerte en blocage. Les alertes vont au SIEM.' },
          { t: 'p', text: 'Le filtrage d’appels système `seccomp` (utilisé par `SystemCallFilter=` de systemd) partage la même base technique : il **réduit** ce que le processus peut demander au noyau, alors qu’une sonde eBPF **observe** ce qu’il demande.' },
        ],
      },
      {
        id: 'investigation',
        title: 'Investigation en direct et rootkits',
        blocks: [
          { t: 'p', text: 'Sur une machine possiblement compromise, chaque commande modifie un peu l’état et peut effacer des preuves. La règle : **collecter dans l’ordre de volatilité**, du plus éphémère au plus durable, avec des outils de confiance et un support externe.' },
          { t: 'list', ordered: true, items: ['**Mémoire et état vif** : date, processus (`ps auxwwf`), connexions (`ss -tanp`), fichiers ouverts (`lsof -nP +L1` repère les fichiers supprimés encore ouverts), modules chargés (`lsmod`), et si possible une acquisition de mémoire (LiME).', '**Fichiers temporaires et traces** : `/tmp`, `/var/tmp`, `/dev/shm`, `/proc/<pid>/` des processus suspects (copie de `exe`, `cmdline`, `environ`).', '**Disque** : image complète ou, à défaut, copie ciblée avec empreintes.', '**Journaux** : locaux et, surtout, ceux déjà exportés hors de la machine.'] },
          { t: 'callout', kind: 'key', text: 'Redémarrer ou éteindre la machine **détruit** la mémoire et les processus : ne le faites qu’après la collecte. À l’inverse, laisser un attaquant actif sans isoler le réseau est un autre risque : isolez la machine (réseau) sans l’éteindre.' },
          { t: 'def', term: 'Vue croisée', text: 'Technique de détection de rootkit : comparer deux sources censées donner la même information. Un rootkit qui falsifie `ps` ou `ss` ne falsifie pas forcément tout : on compare la liste de `ps` à celle de `/proc`, les ports de `ss` à `/proc/net/tcp` et à un scan réseau fait **depuis une autre machine**, les modules de `lsmod` à `/sys/module`.' },
          {
            t: 'table',
            head: ['Type de rootkit', 'Comment il se cache', 'Piste de détection'],
            rows: [
              ['Espace utilisateur (`ld.so.preload`, binaires remplacés)', 'Bibliothèque préchargée ou `ps`/`ls` trojanisés', 'Vérification des paquets (`rpm -Va`, `debsums`), `/etc/ld.so.preload`, outils statiques de confiance'],
              ['Module du noyau (LKM)', 'S’inscrit dans le noyau et filtre les listes de processus, fichiers et modules', 'Vue croisée, analyse de la mémoire, scan réseau externe, `lockdown` et signature des modules en prévention'],
              ['eBPF', 'Programme chargé masquant des activités', '`bpftool prog list`, règle auditd sur `bpf()`'],
            ],
          },
          { t: 'code', lang: 'bash', caption: 'Quelques vérifications croisées (depuis un support de confiance)', code: '# Processus visibles dans /proc mais absents de ps ?\nls /proc | grep -E "^[0-9]+$" | sort -n > /tmp/pid_proc.txt\nps -e -o pid= | tr -d " " | sort -n > /tmp/pid_ps.txt\ndiff /tmp/pid_proc.txt /tmp/pid_ps.txt\n\n# Fichiers supprimés mais encore ouverts\nlsof -nP +L1\nls -l /proc/*/exe 2>/dev/null | grep deleted' },
          { t: 'p', text: 'La **chronologie** (dates des fichiers avec `stat` et `find -newermt`, journaux, événements auditd) reconstitue ce qui s’est passé et dans quel ordre. Elle sert à décider : si l’attaquant a eu **root**, on ne peut plus se fier au système lui-même.' },
          { t: 'callout', kind: 'warn', title: 'Nettoyer ou reconstruire ?', text: 'Après une compromission root, la règle prudente est de **reconstruire** à partir d’une image saine et de restaurer uniquement les données vérifiées, en renouvelant tous les secrets. Un « nettoyage » ne se justifie que si l’on peut prouver l’étendue complète de l’intrusion, ce qui est rare.' },
        ],
      },
    ],
    useCases: [
      'Référentiel de durcissement : appliquer un jeu de paramètres noyau et de montages à toutes les machines, et le tester avant déploiement.',
      'Audit de sécurité : inventorier les chemins d’élévation locale d’un serveur et proposer des correctifs priorisés.',
      'Intégration d’un dépôt tiers : l’ajouter avec sa propre clé vérifiée, l’épingler et le tester sur un instantané.',
      'Réponse à incident : collecter l’état d’une machine suspecte dans l’ordre de volatilité, repérer un rootkit, décider de reconstruire.',
    ],
    commonMistakes: [
      'Appliquer des paramètres de durcissement copiés sans les tester : `ptrace_scope` ou `modules_disabled` peuvent casser des outils ou du matériel.',
      'Garder la base AIDE sur la machine surveillée : l’attaquant la met à jour et fait passer ses modifications pour normales.',
      'Désactiver la vérification des signatures (`--allow-unauthenticated`, `gpgcheck=0`) pour faire passer une installation.',
      'Faire confiance à `ps`, `ss` ou `ls` d’une machine compromise sans vue croisée ni outils de confiance.',
      'Éteindre ou redémarrer une machine suspecte avant d’avoir collecté la mémoire et l’état des processus.',
      'Considérer une machine compromise en root comme « nettoyée » après avoir supprimé le fichier malveillant trouvé.',
    ],
    bestPractices: [
      'Mettre à jour le noyau et les paquets rapidement ; durcir en complément, jamais à la place.',
      'Stocker les références d’intégrité (AIDE, mesures IMA) hors de portée de la machine surveillée.',
      'Ajouter chaque dépôt tiers avec sa clé propre, vérifier son empreinte par un second canal et épingler ses priorités.',
      'Construire les machines depuis un miroir à instantanés datés et tenir un SBOM à jour.',
      'Valider chaque règle de détection par un déclenchement volontaire, puis mesurer le bruit avant d’automatiser un blocage.',
      'Collecter dans l’ordre de volatilité, depuis un support de confiance, et reconstruire après une compromission root.',
    ],
    keyPoints: [
      'Durcir le noyau, c’est retirer des leviers (informations, modules, interfaces) ; la mise à jour reste la mesure la plus efficace.',
      'Les chemins d’élévation locale (SUID, capacités, sudo, groupes puissants, chemins modifiables, noyau) s’inventorient en lecture seule.',
      'Une référence d’intégrité n’a de valeur que si elle est hors de portée de l’attaquant.',
      'Une signature prouve qui a publié un paquet, pas que son contenu est sain : la chaîne d’approvisionnement se surveille.',
      'eBPF observe à l’exécution et peut aussi être détourné : on surveille son chargement.',
      'Sur une machine suspecte : isoler sans éteindre, collecter dans l’ordre de volatilité, recouper les vues, reconstruire si root est compromis.',
    ],
  },
  practice: [
    {
      id: 'durcir-noyau',
      kind: 'case',
      title: 'Cas pratique : durcir le noyau d’un serveur d’applications',
      context: [
        { t: 'p', text: 'Un serveur d’applications Debian expose un service web et héberge des comptes d’exploitation. Relevé de quelques paramètres actifs :' },
        { t: 'code', lang: 'text', code: '$ sysctl kernel.kptr_restrict kernel.dmesg_restrict kernel.yama.ptrace_scope kernel.unprivileged_bpf_disabled\nkernel.kptr_restrict = 0\nkernel.dmesg_restrict = 0\nkernel.yama.ptrace_scope = 0\nkernel.unprivileged_bpf_disabled = 0\n\n$ findmnt -no TARGET,OPTIONS /tmp /dev/shm\n/tmp      rw,relatime\n/dev/shm  rw,nosuid,nodev' },
      ],
      steps: ['Proposer le fichier `/etc/sysctl.d/` à poser, en justifiant chaque valeur par ce qu’elle retire à un attaquant local.', 'Proposer les options de montage à ajouter et expliquer leur effet sur un binaire déposé dans `/tmp`.', 'Décrire comment déployer ces changements sans casser le service (test, effets de bord possibles, retour arrière).'],
    },
    {
      id: 'audit-elevation',
      kind: 'analysis',
      title: 'Audit des chemins d’élévation sur un serveur',
      context: [
        { t: 'p', text: 'Relevés en lecture seule sur un serveur utilisé par une équipe de développement :' },
        { t: 'code', lang: 'text', code: '$ getcap -r / 2>/dev/null\n/usr/bin/python3.11 cap_setuid=ep\n/usr/bin/ping cap_net_raw=ep\n\n$ id dev1\nuid=1002(dev1) gid=1002(dev1) groups=1002(dev1),998(docker),1010(devs)\n\n$ ls -ld /opt/jobs /opt/jobs/nightly.sh\ndrwxrwxr-x 2 root devs 4096 /opt/jobs\n-rwxr-xr-x 1 root root  412 /opt/jobs/nightly.sh   (exécuté chaque nuit par cron en root)' },
      ],
      steps: ['Pour chaque constat, dire s’il est normal ou dangereux et pourquoi (sans produire d’exploit).', 'Classer les trois risques par gravité et proposer la correction la plus restreinte pour chacun.', 'Proposer des règles de surveillance qui détecteraient une exploitation de ces chemins.'],
      labId: 'linux-audit-lab',
    },
    {
      id: 'depot-tiers',
      kind: 'case',
      title: 'Cas pratique : ajouter un dépôt tiers sans affaiblir la chaîne',
      context: [{ t: 'p', text: 'Une équipe veut installer un outil de supervision qui n’existe que dans le dépôt de son éditeur. La documentation de l’éditeur propose : `curl -s https://exemple.org/install.sh | sudo bash`. Les serveurs concernés sont des machines de production Debian.' }],
      steps: ['Expliquer ce que ce one-liner contourne et les risques qu’il fait courir.', 'Décrire une procédure sûre : obtention et vérification de la clé, rattachement au dépôt, épinglage, test.', 'Décrire comment garder la maîtrise ensuite (miroir ou instantané, mises à jour, inventaire, retrait).'],
    },
  ],
  questions,
  resources: [
    { title: 'Recommandations de configuration d’un système GNU/Linux', source: 'ANSSI', url: 'https://cyber.gouv.fr/publications/recommandations-de-securite-relatives-un-systeme-gnulinux' },
    { title: 'Documentation de sysctl : paramètres du noyau (kernel.*)', source: 'Documentation du noyau Linux', url: 'https://docs.kernel.org/admin-guide/sysctl/kernel.html' },
    { title: 'kernel_lockdown (7)', source: 'Pages de manuel Linux', url: 'https://man7.org/linux/man-pages/man7/kernel_lockdown.7.html' },
    { title: 'dm-verity : vérification d’intégrité d’un volume', source: 'Documentation du noyau Linux', url: 'https://docs.kernel.org/admin-guide/device-mapper/verity.html' },
    { title: 'AIDE — Advanced Intrusion Detection Environment', source: 'Projet AIDE', url: 'https://aide.github.io/' },
    { title: 'Falco — détection des menaces à l’exécution', source: 'Projet Falco (CNCF)', url: 'https://falco.org/docs/' },
    { title: 'Divulgation de la porte dérobée xz (CVE-2024-3094)', source: 'oss-security', url: 'https://www.openwall.com/lists/oss-security/2024/03/29/4' },
  ],
};
