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
  },
};
