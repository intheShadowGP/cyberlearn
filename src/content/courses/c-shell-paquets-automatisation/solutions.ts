import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'c-shell-paquets-automatisation',
  practice: {
    'corriger-script': {
      blocks: [
        {
          t: 'table',
          head: ['Problème', 'Conséquence'],
          rows: [
            ['`#!/bin/sh`', 'Pas forcément Bash : comportements variables selon le système'],
            ['`$1` non quoté et non validé', 'Un argument avec espace ou `*` casse ou détourne la commande'],
            ['`cd /data/$1` sans contrôle d’échec', 'Si le `cd` échoue, la suite s’exécute dans le mauvais répertoire'],
            ['`tar czf ... *`', 'Dépend du répertoire courant et du développement de `*`'],
            ['`rm -rf /tmp/travail/*`', 'Suppression sans vérification ; dangereux si une variable était vide'],
          ],
        },
        { t: 'code', lang: 'bash', caption: 'Version corrigée', code: '#!/usr/bin/env bash\nset -euo pipefail\n\nnom="${1:?usage: sauvegarde.sh <nom>}"\nsource="/data/$nom"\n\n[[ -d "$source" ]] || { echo "introuvable : $source" >&2; exit 1; }\n\ntar -czf "/backups/${nom}.tar.gz" -C "$source" -- .\nrm -rf -- "/tmp/travail/${nom:?}"' },
        { t: 'p', text: 'Permissions : le script (`/usr/local/bin/sauvegarde.sh`), `/data` et `/backups` appartiennent à root, en mode 700/755 sans écriture pour les autres, puisque cron l’exécute en root.' },
      ],
    },
    'diagnostic-disque': {
      blocks: [
        { t: 'p', text: 'La racine est pleine à 100 % : l’application ne peut plus écrire, d’où la lenteur puis le refus. `du` désigne `/var/log`, et le fichier `app.log` (29 Go) occupe presque tout : un journal sans rotation a fini par saturer le disque.' },
        { t: 'list', items: ['Immédiat : libérer de la place sans détruire l’information utile. Copier ou compresser `app.log` vers un autre volume, puis le **vider** (`: > app.log`, ou `truncate -s 0`) plutôt que le supprimer si l’application le garde ouvert ; sinon l’espace n’est pas rendu tant que le processus tient le fichier.', 'Vérifier ensuite que l’application écrit de nouveau et relire les erreurs qui expliquent la croissance anormale du journal.'] },
        { t: 'list', items: ['Durable : configurer `logrotate` (rotation, compression, nombre de fichiers conservés) pour ce journal ; corriger le niveau de verbosité de l’application.', 'Supervision : alerte sur l’occupation du disque (par exemple à 80 %), séparation du volume des journaux de celui du système, et revue de la tâche de rotation si elle existait mais échouait en silence.'] },
        { t: 'callout', kind: 'info', text: 'On a procédé de l’observation à la cause : `df` (le disque est plein), `du` (qui l’occupe), `ls` (quel fichier). Redémarrer le serveur n’aurait rien réglé.' },
      ],
    },
    'durcir-base': {
      blocks: [
        { t: 'list', ordered: true, items: ['`sudo apt update && sudo apt upgrade` pour partir d’un système à jour ; installer le serveur web depuis les dépôts officiels signés.', 'Activer les mises à jour de sécurité automatiques : `sudo apt install unattended-upgrades` puis l’activer.', 'Filtrage local (nftables ou iptables) en refus par défaut : boucle locale, connexions établies, SSH depuis l’administration, 80/443 pour le web.', 'Planifier une sauvegarde (minuteur systemd) avec un script appartenant à root ; prévoir la rotation des journaux.'] },
        { t: 'callout', kind: 'tip', text: 'Ces étapes posent le socle ; le durcissement fin (SSH, permissions, confinement des services, SELinux/AppArmor) est traité dans les cours C de niveaux 2 et 3.' },
      ],
    },
  },
};
