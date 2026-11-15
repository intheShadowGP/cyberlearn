import type { LabCorrections } from '../../content/types';

export const corrections: LabCorrections = {
  labId: 'linux-audit-lab',
  questions: {
    'lxlab-q1': { type: 'short', accepted: ['svc_maint'], explanation: 'La ligne `svc_maint:x:0:0:…` donne l’UID 0 à ce compte : il dispose de tous les droits de root. Un tel compte n’a aucune raison légitime d’exister ; c’est très probablement une porte dérobée laissée par un attaquant.' },
    'lxlab-q2': { type: 'single', correct: 'c', explanation: 'passwd, sudo et mount sont légitimement SUID. Un interpréteur Python en SUID root permet d’obtenir un shell root en une ligne (`os.setuid(0)` puis lancement d’un shell). Sa présence dans /usr/local/bin, hors gestionnaire de paquets, renforce la suspicion de compromission.' },
    'lxlab-q3': { type: 'multi', correct: ['a', 'b', 'c'], explanation: 'tar peut exécuter une commande via `--checkpoint-action=exec=…` : en sudo, c’est root. rotate.sh, modifiable par tous et lancé toutes les 5 minutes en root, peut être réécrit. Python SUID donne directement root. Trois chemins indépendants : le serveur doit être considéré comme compromis.', whyWrong: { d: '644 est la permission normale de /etc/passwd : il ne contient pas d’empreintes de mots de passe (stockées dans /etc/shadow, ici correctement protégé en 640).' } },
    'lxlab-q4': { type: 'truefalse', correct: false, explanation: 'Les recommandations (ANSSI, CIS) imposent `PermitRootLogin no` et l’authentification par clé (`PasswordAuthentication no`). La configuration actuelle expose root à la force brute sur Internet.' },
    'lxlab-q5': { type: 'single', correct: 'b', explanation: 'Il faut d’abord vérifier si le script a déjà été modifié (preuve de compromission à conserver), puis restreindre propriétaire et permissions. Supprimer ou renommer sans analyse détruit des éléments de preuve.' },
    'lxlab-q6': {
      type: 'open',
      model: 'Constats : 1) compte svc_maint avec UID 0 (porte dérobée probable) ; 2) Python SUID root dans /usr/local/bin ; 3) script cron root modifiable par tous ; 4) sudo tar sans mot de passe pour alice ; 5) SSH avec connexion root et mots de passe ; 6) fichier caché /tmp/.x appartenant à www-data. Gravité : critique, le serveur doit être traité comme compromis. Actions : isoler le serveur, préserver les preuves (copie disque et mémoire), puis reconstruire à partir d’une image saine plutôt que de « nettoyer » ; réinitialiser tous les secrets ; corriger les configurations sur l’image de référence ; rechercher le vecteur d’entrée initial (application web exécutée par www-data).',
      criteria: ['Au moins quatre constats sont listés.', 'Le serveur est qualifié de compromis, pas seulement « mal configuré ».', 'L’isolement et la préservation des preuves précèdent la remédiation.', 'La reconstruction et la réinitialisation des secrets sont recommandées.'],
      explanation: 'Plusieurs portes dérobées indépendantes signent une compromission. Sur un système compromis, on reconstruit : on ne peut pas prouver qu’on a tout retiré.',
    },
  },
  debrief: [
    { t: 'h', text: 'Chemins d’élévation identifiés' },
    { t: 'list', items: ['**Compte UID 0** `svc_maint` : persistance de l’attaquant.', '**Python SUID root** : élévation immédiate.', '**Cron + script modifiable par tous** : élévation différée (5 minutes au plus).', '**sudo tar** sans mot de passe : élévation via l’option d’exécution de checkpoint.', '**SSH** : connexion root par mot de passe autorisée.'] },
    { t: 'callout', kind: 'key', title: 'Mesures défensives', text: 'Contrôle d’intégrité sur /etc/passwd, /etc/sudoers et les binaires SUID (AIDE, auditd) ; liste de référence des SUID ; revue des règles sudo à l’aide de GTFOBins ; SSH par clé uniquement ; scripts planifiés appartenant à root en 700 ; journaux centralisés pour détecter la création de comptes UID 0.' },
    { t: 'p', text: 'Indice d’entrée initiale : le fichier caché `/tmp/.x` appartient à **www-data**, le compte du serveur web. L’application web est le premier suspect.' },
  ],
};
