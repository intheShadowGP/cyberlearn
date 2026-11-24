import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'c-systemd-journaux-confinement',
  practice: {
    'triage-processus': {
      blocks: [
        {
          t: 'table',
          head: ['Constat', 'Ce qu’il indique'],
          rows: [
            ['Port 31337 en écoute par « kworker »', 'Un vrai fil noyau n’ouvre pas de socket : nom choisi pour se fondre dans la liste'],
            ['Processus enfant de nginx (PPID 812) sous www-data', 'Exécution de code via le service web (faille applicative ou module compromis)'],
            ['Binaire dans `/tmp/.x/`, supprimé', 'Répertoire caché dans un emplacement inscriptible, effacement des traces'],
          ],
        },
        { t: 'list', ordered: true, items: ['Copier le binaire : `cp /proc/4242/exe /media/preuves/kworker.bin`, puis calculer son empreinte.', 'Relever `/proc/4242/cmdline`, `environ`, `fd/` et `ss -tnp` (connexions établies).', 'Si possible, acquérir la mémoire (voir le module J) avant tout arrêt.', 'Isoler la machine du réseau, puis seulement arrêter le processus ; rechercher la persistance (cron, unités systemd, clés SSH).'] },
        { t: 'p', text: 'Mesures préventives : unité nginx avec `NoNewPrivileges=yes`, `ProtectSystem=strict`, `PrivateTmp=yes` et `RestrictAddressFamilies` ; pare-feu en refus par défaut n’ouvrant que 443 et 22 (depuis l’administration), et filtrage de sortie.' },
      ],
    },
    'unite-confinee': {
      blocks: [
        { t: 'code', lang: 'ini', code: '[Service]\nUser=rapports\nGroup=rapports\nNoNewPrivileges=yes\nProtectSystem=strict\nReadOnlyPaths=/opt/rapports/modeles\nReadWritePaths=/var/lib/rapports\nProtectHome=yes\nPrivateTmp=yes\nPrivateDevices=yes\nProtectKernelTunables=yes\nProtectKernelModules=yes\nProtectControlGroups=yes\nCapabilityBoundingSet=\nRestrictAddressFamilies=AF_INET AF_UNIX\nSystemCallFilter=@system-service\nSystemCallArchitectures=native' },
        { t: 'list', ordered: true, items: ['Créer le compte de service `rapports` et lui donner la propriété de `/var/lib/rapports`.', '`systemctl daemon-reload && systemctl restart rapports`, puis générer un rapport de test et lire `journalctl -u rapports` pour repérer les refus.', 'Relancer `systemd-analyze security rapports.service` : la note doit nettement baisser ; relâcher une directive uniquement si un refus précis le justifie.'] },
      ],
    },
    'chasse-persistance': {
      blocks: [
        {
          t: 'table',
          head: ['Constat', 'Verdict', 'Pourquoi'],
          rows: [
            ['Crontab de `www-data` : `/tmp/.x/kworker` toutes les 10 minutes', '**Suspect**', 'Un compte de service web n’a aucune raison de planifier un binaire caché dans `/tmp` : c’est le binaire du triage, relancé s’il est tué'],
            ['`/etc/ld.so.preload` contient `libsystem-cache.so`', '**Suspect**', 'Le fichier est normalement absent ou vide ; la bibliothèque est chargée dans tous les processus et peut masquer des fichiers ou des processus'],
            ['Clé `deploy@poste-admin`', 'À confirmer', 'Plausible, mais à rapprocher de l’inventaire des clés de l’équipe et de la date d’ajout'],
            ['Clé `maintenance@vps-inconnu`', '**Suspect**', 'Commentaire sans lien avec l’organisation, absente de l’inventaire : probablement ajoutée par l’attaquant'],
          ],
        },
        { t: 'list', ordered: true, items: ['Préserver : copier la crontab, `/etc/ld.so.preload`, la bibliothèque et le binaire, relever leurs dates (`stat`) et les journaux (`journalctl`, `ausearch`) pour fixer la chronologie.', 'Retirer ensuite chaque mécanisme (entrée cron, `ld.so.preload`, clé SSH), sachant que la bibliothèque préchargée peut fausser l’affichage : relire depuis un support fiable.', 'Renouveler les secrets exposés (clés SSH, mots de passe, jetons) et corriger la faille d’entrée.', 'Surveiller : règles auditd sur `/etc/ld.so.preload`, `/etc/cron.d`, `/etc/systemd/system` et les `authorized_keys`, alertes dans le SIEM, nouvelle recherche après quelques jours ; reconstruire à partir d’une image saine si le doute persiste.'] },
        { t: 'callout', kind: 'warn', text: 'Une bibliothèque préchargée peut masquer ce que montrent `ls` et `ps` : confirmez ces constats avec des outils fiables ou depuis un système de secours.' },
      ],
    },
  },
};
