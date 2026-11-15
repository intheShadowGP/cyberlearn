import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: 'c-linux-permissions',
  questions: {
    'lnx-q1': { type: 'short', accepted: ['750', '0750'], explanation: 'rwx = 4+2+1 = 7 ; r-x = 4+1 = 5 ; --- = 0. La permission octale est 750.' },
    'lnx-q2': { type: 'single', correct: 'b', explanation: 'Sur un répertoire, `x` autorise la traversée : y entrer (`cd`) et accéder aux fichiers dont on connaît le nom. Lister les noms nécessite `r`.', whyWrong: { c: 'Lister les noms est le droit `r` sur un répertoire.', a: 'L’exécution d’un script dépend du droit `x` sur le script lui-même.' } },
    'lnx-q3': { type: 'truefalse', correct: false, explanation: 'Supprimer un fichier modifie le répertoire (on retire une entrée), pas le fichier. Le droit `w` sur le répertoire suffit, sauf si le sticky bit est positionné. C’est pourquoi un répertoire modifiable par tous est dangereux.' },
    'lnx-q4': { type: 'short', accepted: ['640', '0640'], explanation: 'rw- = 6, r-- = 4, --- = 0 : 640. C’est la permission typique de `/etc/shadow` (propriétaire root, groupe shadow).' },
    'lnx-q5': { type: 'single', correct: 'b', explanation: '`find` peut exécuter des commandes via `-exec`. En SUID root, `find . -exec /bin/sh -p \\;` donne un shell avec l’UID effectif root. C’est une élévation de privilèges triviale, référencée dans GTFOBins.' },
    'lnx-q6': { type: 'multi', correct: ['a', 'b', 'd'], explanation: 'Le sticky bit protège les fichiers des autres dans un répertoire partagé ; le SUID exécute avec les droits du propriétaire ; le `+` signale des ACL étendues.', whyWrong: { c: 'C’est l’inverse : SUID avec un propriétaire root est précisément le cas le plus dangereux.' } },
    'lnx-q7': { type: 'single', correct: 'b', explanation: 'La règle b autorise une seule commande avec un argument précis. La c autorise toutes les actions de systemctl (y compris lancer d’autres services) ; la d permet d’ouvrir un shell depuis vim ; la a donne root complet.', whyWrong: { d: 'Depuis vim, `:!sh` ouvre un shell root : cette règle équivaut à donner root.', c: 'Sans argument, systemctl permet d’arrêter ou de lancer n’importe quel service.' } },
    'lnx-q8': { type: 'truefalse', correct: true, explanation: 'Depuis `less`, la commande `!sh` lance un shell qui hérite des droits root. Il en va de même pour `more`, `man`, `vim`, `awk`, `find`… Si une lecture privilégiée est nécessaire, on préfère `sudoedit` ou des droits de groupe.' },
    'lnx-q9': { type: 'multi', correct: ['a', 'b', 'd'], explanation: 'Un second UID 0 est une porte dérobée classique ; /etc/shadow lisible et modifiable par tous expose et permet de remplacer les empreintes ; un NOPASSWD ALL donne root sans contrôle.', whyWrong: { c: '644 est la permission normale de /etc/passwd : il ne contient plus d’empreintes de mots de passe.' } },
    'lnx-q10': { type: 'short', accepted: ['visudo', 'sudo visudo'], explanation: '`visudo` verrouille le fichier et vérifie la syntaxe avant d’enregistrer. Une erreur de syntaxe dans sudoers peut sinon rendre sudo inutilisable et bloquer l’administration.' },
    'lnx-q11': { type: 'single', correct: 'b', explanation: '`PasswordAuthentication no` (avec `KbdInteractiveAuthentication no`) impose l’authentification par clé. `PermitRootLogin no` concerne uniquement le compte root.' },
    'lnx-q12': { type: 'truefalse', correct: false, explanation: 'Changer de port réduit le bruit des robots, mais un scan trouve le nouveau port en quelques secondes. La sécurité repose sur l’authentification par clé, l’interdiction de root et la restriction réseau.' },
    'lnx-q13': {
      type: 'open',
      model: 'Le répertoire étant modifiable par tous, n’importe quel utilisateur local peut supprimer backup.sh et le remplacer par son propre script (le droit w sur le répertoire suffit). À la prochaine exécution, cron lance le script piégé en root : l’attaquant obtient par exemple un shell root ou ajoute sa clé SSH. Corrections : `chown root:root /opt/scripts && chmod 755 /opt/scripts` (ou 750), `chmod 700 /opt/scripts/backup.sh` ; vérifier l’intégrité du script actuel ; rechercher d’autres tâches cron pointant vers des chemins modifiables ; surveiller ces fichiers (auditd, AIDE).',
      criteria: ['Le remplacement du script grâce au droit d’écriture sur le répertoire est expliqué.', 'L’exécution par cron en root comme vecteur d’élévation est identifiée.', 'Des permissions correctes sont proposées pour le répertoire et le script.', 'Une mesure de vérification ou de surveillance est ajoutée.'],
      explanation: 'Les tâches planifiées exécutant des fichiers modifiables par un utilisateur sont l’une des élévations de privilèges les plus fréquentes en test d’intrusion Linux.',
    },
    'lnx-q14': { type: 'multi', correct: ['a', 'b', 'd'], explanation: 'Sans mot de passe à deviner, la force brute devient inopérante ; restreindre l’exposition réseau supprime l’essentiel des tentatives ; la limitation du nombre d’essais ralentit les attaques restantes.', whyWrong: { c: 'Une bannière a une utilité juridique (avertissement), mais n’arrête aucune tentative.' } },
    'lnx-q15': {
      type: 'open',
      model: '777 donne lecture, écriture et exécution à tout utilisateur de la machine, y compris les comptes de service compromis (par exemple www-data via une faille web). Un fichier 777 peut être modifié pour y insérer du code ; un répertoire 777 permet de remplacer ses fichiers. À la place : identifier précisément quel compte a besoin de quel accès (`id`, `ls -l`, `namei -l`), puis ajuster le propriétaire ou le groupe (`chown`, `chgrp`), accorder le droit minimal à ce groupe, ou utiliser une ACL ciblée (`setfacl -m u:compte:r fichier`).',
      criteria: ['Le risque pour tous les comptes, y compris de service, est expliqué.', 'La différence entre fichier et répertoire 777 est mentionnée ou implicite.', 'Une démarche de diagnostic et une alternative ciblée (groupe, ACL) sont proposées.'],
      explanation: 'Le diagnostic précis d’un problème d’accès prend quelques minutes ; un 777 laissé en production peut rester exploitable pendant des années.',
    },
    'lnx-q16': { type: 'single', correct: 'a', explanation: '`-perm -4000` sélectionne les fichiers dont le bit SUID est positionné ; `-xdev` évite de parcourir les autres systèmes de fichiers (/proc, montages réseau). On compare ensuite le résultat à une liste de référence.', whyWrong: { c: 'Cette commande retirerait le SUID de tous les fichiers, y compris `passwd` ou `sudo`, et casserait le système.' } },
  },
};
