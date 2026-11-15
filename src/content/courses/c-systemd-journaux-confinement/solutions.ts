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
  },
};
