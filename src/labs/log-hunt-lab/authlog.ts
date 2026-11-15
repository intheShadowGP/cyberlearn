/** Journal auth.log fictif d'un serveur exposé (généré de façon déterministe). */

export interface AuthLine {
  id: number;
  time: string;
  source: string;
  user: string;
  result: 'échec' | 'succès' | 'info';
  raw: string;
}

const BRUTE = '198.51.100.23';
const NOISE = ['203.0.113.77', '192.0.2.140', '198.51.100.201'];
const DICT = ['root', 'admin', 'ubuntu', 'test', 'oracle', 'postgres', 'deploy', 'git', 'user', 'pi'];

function ts(minute: number, second: number): string {
  const h = 2 + Math.floor(minute / 60);
  const m = minute % 60;
  return `Mar 12 ${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(second).padStart(2, '0')}`;
}

export function buildAuthLog(): AuthLine[] {
  const out: Omit<AuthLine, 'id'>[] = [];
  const push = (time: string, source: string, user: string, result: AuthLine['result'], raw: string) =>
    out.push({ time, source, user, result, raw: `${time} srv-pub01 ${raw}` });

  // Légitime
  push(ts(0, 5), '10.0.0.5', 'alice', 'succès', 'sshd[1021]: Accepted publickey for alice from 10.0.0.5 port 52144 ssh2: ED25519 SHA256:q3L…');
  // Bruit de fond : robots Internet
  NOISE.forEach((ip, k) => {
    for (let i = 0; i < 4; i++) {
      const u = DICT[(i + k * 3) % DICT.length] as string;
      push(ts(3 + k * 7 + i, 11 + i), ip, u, 'échec', `sshd[${1300 + k * 10 + i}]: Invalid user ${u} from ${ip} port ${40000 + i * 7}`);
    }
  });
  // Force brute ciblée
  let pid = 2000;
  for (let i = 0; i < 60; i++) {
    const u = DICT[i % DICT.length] as string;
    const exists = ['root', 'deploy', 'git'].includes(u);
    push(
      ts(20 + Math.floor(i / 6), (i * 9) % 60),
      BRUTE,
      u,
      'échec',
      exists
        ? `sshd[${pid++}]: Failed password for ${u} from ${BRUTE} port ${50000 + i} ssh2`
        : `sshd[${pid++}]: Failed password for invalid user ${u} from ${BRUTE} port ${50000 + i} ssh2`,
    );
  }
  // Succès de l'attaquant
  push(ts(31, 2), BRUTE, 'deploy', 'succès', `sshd[2101]: Accepted password for deploy from ${BRUTE} port 50777 ssh2`);
  push(ts(31, 3), BRUTE, 'deploy', 'info', 'sshd[2101]: pam_unix(sshd:session): session opened for user deploy(uid=1003) by (uid=0)');
  push(ts(33, 40), BRUTE, 'deploy', 'info', 'sudo:   deploy : TTY=pts/1 ; PWD=/home/deploy ; USER=root ; COMMAND=/usr/bin/apt install -y ncat');
  push(ts(35, 12), BRUTE, 'deploy', 'info', 'useradd[2240]: new user: name=sysupd, UID=0, GID=0, home=/var/lib/sysupd, shell=/bin/bash');
  push(ts(36, 1), BRUTE, 'deploy', 'info', 'sudo:   deploy : TTY=pts/1 ; PWD=/tmp ; USER=root ; COMMAND=/usr/bin/crontab -e');
  // Activité légitime ultérieure
  push(ts(50, 30), '10.0.0.5', 'alice', 'succès', 'sshd[2550]: Accepted publickey for alice from 10.0.0.5 port 52990 ssh2: ED25519 SHA256:q3L…');
  return out.sort((a, b) => a.time.localeCompare(b.time)).map((l, i) => ({ ...l, id: i + 1 }));
}
