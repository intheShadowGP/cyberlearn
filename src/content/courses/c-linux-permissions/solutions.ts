import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'c-linux-permissions',
  practice: {
    'audit-ls': {
      blocks: [
        {
          t: 'table',
          head: ['Élément', 'Verdict', 'Correction'],
          rows: [
            ['/etc/passwd 644', 'Normal', '—'],
            ['/etc/shadow 666', '**Critique** : empreintes lisibles et remplaçables par tous', '`chmod 640 /etc/shadow`, puis enquêter (qui l’a modifié ?), forcer le changement des mots de passe'],
            ['/usr/bin/passwd SUID', 'Normal (nécessaire)', '—'],
            ['/usr/bin/find SUID', '**Critique** : shell root via -exec', '`chmod u-s /usr/bin/find`, rechercher l’origine de la modification'],
            ['/opt/scripts 777', '**Critique** : remplacement de backup.sh exécuté en root', '`chmod 755 /opt/scripts` (propriétaire root)'],
            ['backup.sh 755', 'Acceptable, mais 700 préférable', '`chmod 700`'],
          ],
        },
        { t: 'callout', kind: 'warn', text: 'Trois anomalies critiques sur un même serveur évoquent une compromission plutôt qu’une simple négligence : traitez-le comme un incident.' },
      ],
    },
    'sshd-durcir': {
      blocks: [
        { t: 'code', lang: 'text', code: 'PermitRootLogin no\nPasswordAuthentication no\nKbdInteractiveAuthentication no\nAllowGroups ssh-users\nMaxAuthTries 3' },
        { t: 'list', ordered: true, items: ['Créer un compte nominatif, l’ajouter à `ssh-users` et au groupe sudo.', 'Copier la clé publique (`ssh-copy-id`) et **tester une connexion par clé dans une seconde session** avant de recharger sshd.', 'Valider la configuration (`sshd -t`), puis `systemctl reload sshd` en gardant la session ouverte.', 'Mesure réseau : n’autoriser TCP/22 que depuis l’adresse du VPN ou du bastion ; à défaut, ajouter fail2ban.'] },
      ],
    },
    'diagnostic-acces': {
      blocks: [
        { t: 'p', text: 'Le fichier est en `644` et son répertoire `conf` en `755`, mais `/srv/webapp` est en `rwxr-x---` pour `root:app`. Le compte `webapp` n’est ni root ni membre du groupe `app` : il relève des « autres », qui n’ont **aucun droit `x`** sur ce répertoire. Il ne peut donc pas le traverser, et les droits plus larges plus bas dans le chemin ne servent à rien.' },
        {
          t: 'table',
          head: ['Option', 'Effet', 'Remarque'],
          rows: [
            ['`setfacl -m u:webapp:x /srv/webapp`', 'Autorise uniquement la traversée pour ce compte', 'La plus restreinte : pas de listage du répertoire, aucun autre compte concerné'],
            ['`usermod -aG app webapp` puis redémarrage du service', 'Donne au compte les droits du groupe `app` (lecture et traversée)', 'Valable si `app` est bien le groupe prévu pour l’application ; un groupe n’est relu qu’au redémarrage'],
            ['`chmod 755 /srv/webapp`', 'Ouvre le répertoire à tous les comptes', 'À éviter : élargit l’accès bien au-delà du besoin'],
          ],
        },
        { t: 'list', items: ['Vérifier l’identité réelle du processus (`ps -o user,group -C webapp`) et chercher ce que la mise à jour a changé (groupe ou mode du répertoire).', 'Contrôler un montage en lecture seule (`findmnt -T /srv/webapp`) et un confinement éventuel (SELinux, AppArmor, directives de l’unité systemd).'] },
        { t: 'callout', kind: 'tip', text: 'Le diagnostic a porté sur le chemin entier (`namei -l`), pas seulement sur le fichier : la cause se trouvait deux niveaux au-dessus.' },
      ],
    },
  },
};
