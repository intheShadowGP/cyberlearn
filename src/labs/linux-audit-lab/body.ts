import type { LabBody } from '../../content/types';

export const body: LabBody = {
  labId: 'linux-audit-lab',
  questions: [
    { id: 'lxlab-q1', type: 'short', difficulty: 1, skills: ['c-users-sudo'], prompt: 'Quel compte, autre que root, possède l’UID 0 sur srv-web01 ?', placeholder: 'nom du compte' },
    { id: 'lxlab-q2', type: 'single', difficulty: 2, skills: ['c-perm-special'], prompt: 'Quel binaire SUID est anormal sur ce serveur ?', options: [{ id: 'a', text: '`/usr/bin/passwd`' }, { id: 'b', text: '`/usr/bin/sudo`' }, { id: 'c', text: '`/usr/local/bin/python3.11`' }, { id: 'd', text: '`/usr/bin/mount`' }] },
    { id: 'lxlab-q3', type: 'multi', difficulty: 3, skills: ['c-perm-special', 'c-users-sudo'], prompt: 'Quels éléments permettent à alice de devenir root ?', options: [{ id: 'a', text: 'La règle sudo `NOPASSWD: /usr/bin/tar`' }, { id: 'b', text: 'Le script `/opt/scripts/rotate.sh` modifiable par tous et exécuté par cron en root' }, { id: 'c', text: 'Le binaire SUID `python3.11`' }, { id: 'd', text: 'Le fichier `/etc/passwd` lisible par tous (644)' }] },
    { id: 'lxlab-q4', type: 'truefalse', difficulty: 2, skills: ['c-hardening'], prompt: 'La configuration SSH observée (`PermitRootLogin yes`, `PasswordAuthentication yes`) est conforme aux recommandations de durcissement.' },
    { id: 'lxlab-q5', type: 'single', difficulty: 2, skills: ['c-perm-read', 'c-hardening'], prompt: 'Quelle est la meilleure correction immédiate pour `rotate.sh` ?', options: [{ id: 'a', text: '`chmod 777 /opt/scripts/rotate.sh`' }, { id: 'b', text: 'Vérifier son contenu puis `chown root:root` et `chmod 700`' }, { id: 'c', text: 'Supprimer la tâche cron sans vérifier le script' }, { id: 'd', text: 'Le renommer en rotate.sh.bak' }] },
    { id: 'lxlab-q6', type: 'open', difficulty: 3, skills: ['c-hardening', 'c-users-sudo'], prompt: 'Rédigez en quelques lignes la synthèse de votre audit pour le responsable : constats, gravité, actions prioritaires.' },
  ],
};
