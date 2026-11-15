/**
 * Système de fichiers et commandes simulés du laboratoire « Audit d'un serveur Linux ».
 * Interpréteur volontairement minimal : aucune commande réelle n'est exécutée,
 * l'entrée est analysée comme du texte et comparée à une table de réponses.
 */

const FILES: Record<string, string> = {
  '/etc/passwd': `root:x:0:0:root:/root:/bin/bash
daemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin
www-data:x:33:33:www-data:/var/www:/usr/sbin/nologin
alice:x:1001:1001:Alice Martin:/home/alice:/bin/bash
svc_maint:x:0:0:maintenance:/var/lib/maint:/bin/bash
backup:x:1002:1002::/home/backup:/bin/bash`,
  '/etc/crontab': `SHELL=/bin/sh
PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
# m h dom mon dow user  command
17 *  * * *   root  cd / && run-parts --report /etc/cron.hourly
*/5 * * * *   root  /opt/scripts/rotate.sh
30 2  * * *   backup /home/backup/save.sh`,
  '/opt/scripts/rotate.sh': `#!/bin/bash
# Rotation des journaux applicatifs
find /var/log/app -name "*.log" -mtime +7 -delete`,
  '/etc/ssh/sshd_config': `Port 22
PermitRootLogin yes
PasswordAuthentication yes
PubkeyAuthentication yes
X11Forwarding yes`,
};

const LS: Record<string, string> = {
  '/etc/passwd': '-rw-r--r-- 1 root root 1342 mars  2 09:14 /etc/passwd',
  '/etc/shadow': '-rw-r----- 1 root shadow 1104 mars  2 09:14 /etc/shadow',
  '/etc/crontab': '-rw-r--r-- 1 root root  1042 janv. 8 11:02 /etc/crontab',
  '/etc/ssh/sshd_config': '-rw-r--r-- 1 root root 3287 janv. 8 11:02 /etc/ssh/sshd_config',
  '/opt/scripts': `total 4
-rwxrwxrw- 1 root root 96 févr. 27 16:40 rotate.sh`,
  '/opt/scripts/rotate.sh': '-rwxrwxrw- 1 root root 96 févr. 27 16:40 /opt/scripts/rotate.sh',
  '/tmp': `total 8
-rw-r--r-- 1 www-data www-data  211 mars  3 02:11 .x
-rw-r--r-- 1 alice    alice    1840 mars  3 08:55 rapport.txt`,
  '/home/alice': `total 12
-rw------- 1 alice alice  220 janv. 8 11:00 .bash_logout
-rw------- 1 alice alice 3771 janv. 8 11:00 .bashrc
drwx------ 2 alice alice 4096 mars  1 14:20 .ssh`,
};

const FIND_SUID = `/usr/bin/passwd
/usr/bin/sudo
/usr/bin/mount
/usr/bin/umount
/usr/bin/su
/usr/bin/chsh
/usr/local/bin/python3.11`;

const FIND_WORLD_WRITABLE = `/opt/scripts/rotate.sh
/tmp/.x`;

const SUDO_L = `L'utilisateur alice peut exécuter les commandes suivantes sur srv-web01 :
    (root) NOPASSWD: /usr/bin/tar`;

const HELP = `Commandes disponibles (simulation) :
  id                         identité de l'utilisateur courant
  cat <fichier>              afficher un fichier
  ls -l <chemin>             permissions d'un fichier ou d'un répertoire
  find / -perm -4000         lister les binaires SUID
  find / -perm -0002         lister les fichiers modifiables par tous
  sudo -l                    règles sudo de l'utilisateur courant
  clear                      effacer l'écran
Aucune commande n'est réellement exécutée : la machine srv-web01 est fictive.`;

export const PROMPT = 'alice@srv-web01:~$';

/** Interprète une ligne de commande simulée. Ne fait que de la correspondance de texte. */
export function runCommand(input: string): string | 'CLEAR' {
  const line = input.trim().replace(/\s+/g, ' ');
  if (!line) return '';
  if (line === 'help' || line === 'aide') return HELP;
  if (line === 'clear') return 'CLEAR';
  if (line === 'id') return 'uid=1001(alice) gid=1001(alice) groupes=1001(alice),27(sudo)';
  if (line === 'whoami') return 'alice';
  if (line === 'hostname') return 'srv-web01';
  if (line === 'sudo -l') return SUDO_L;

  const find = /^find \/ (?:-xdev )?(?:-type f )?-perm (-4000|-u=s|\/4000|-0002|-o=w|\/0002)(?: -type f)?(?: 2>\/dev\/null)?$/.exec(line);
  if (find) return ['-4000', '-u=s', '/4000'].includes(find[1] as string) ? FIND_SUID : FIND_WORLD_WRITABLE;
  if (line.startsWith('find')) return 'find : syntaxe non prise en charge par la simulation. Essayez « find / -perm -4000 » ou « find / -perm -0002 ».';

  const cat = /^cat (\S+)$/.exec(line);
  if (cat) {
    const p = cat[1] as string;
    if (p === '/etc/shadow') return 'cat: /etc/shadow: Permission non accordée';
    return FILES[p] ?? `cat: ${p}: Aucun fichier ou dossier de ce type`;
  }

  const ls = /^ls -l[a-z]* (\S+)$/.exec(line);
  if (ls) {
    const p = (ls[1] as string).replace(/\/$/, '') || '/';
    return LS[p] ?? `ls: impossible d'accéder à '${p}': Aucun fichier ou dossier de ce type`;
  }
  if (line === 'ls' || line === 'ls -l' || line === 'ls -la') return LS['/home/alice'] as string;

  if (/^(rm|chmod|chown|sudo (?!-l)|python|tar|vi|vim|nano|bash|sh)\b/.test(line)) {
    return 'Simulation en lecture seule : cet audit consiste à observer, pas à modifier ni à exploiter.';
  }
  return `${line.split(' ')[0]} : commande introuvable (tapez « help »)`;
}
