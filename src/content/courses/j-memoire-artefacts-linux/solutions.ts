import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'j-memoire-artefacts-linux',
  practice: {
    'memoire-poste': {
      blocks: [
        {
          t: 'table',
          head: ['Observation', 'Interprétation'],
          rows: [
            ['`rundll32.exe` (PID 7216) enfant d’Outlook', 'Un client de messagerie n’a pas de raison de lancer rundll32 : évoque l’ouverture d’une pièce jointe piégée'],
            ['Présent dans `psscan`, absent de `pslist`, sans heure de fin', 'Pas terminé : probablement délié de la liste du noyau pour se cacher'],
            ['Connexion établie vers 198.51.100.23:443', 'Canal de commande et contrôle possible'],
            ['Région RWX avec en-tête « MZ »', 'Exécutable chargé directement en mémoire (injection ou chargement réflexif)'],
          ],
        },
        { t: 'p', text: 'Conclusion prudente : forte présomption d’exécution malveillante à partir d’un courriel, avec dissimulation et communication externe. Elle serait renforcée par l’analyse de la région extraite, la réputation et l’historique de 198.51.100.23 (journaux du proxy, de Zeek) et la présence du courriel d’origine dans la boîte de l’utilisateur.' },
        { t: 'list', items: ['Extraire la région signalée (`windows.malfind --dump --pid 7216`) et l’exécutable du processus (`windows.psscan --dump --pid 7216`, puisque `pslist` ne le voit pas), puis calculer les empreintes.', 'Lister les DLL et les handles du processus (`windows.dlllist`, `windows.handles`).', 'Récupérer la pièce jointe dans le stockage d’Outlook sur l’image disque.'] },
      ],
    },
    'serveur-linux': {
      blocks: [
        {
          t: 'table',
          head: ['Heure (UTC)', 'Fait', 'Source'],
          rows: [
            ['22:40:55 – 22:41:05', '1 312 échecs de mot de passe pour `deploy` depuis 203.0.113.50 : attaque par force brute', '`auth.log`'],
            ['22:41:07', 'Connexion réussie par mot de passe : **point d’entrée**', '`auth.log`'],
            ['22:00 – 23:30', 'Aucune entrée `wtmp` alors qu’une session a eu lieu : **effacement** probable', '`wtmp`'],
            ['22:43:10', 'Historique redirigé vers `/dev/null` : **dissimulation**', '`ctime` du lien'],
            ['22:44:31', 'Tâche cron root toutes les 5 minutes qui télécharge et exécute un script : **persistance**', '`crtime` du fichier'],
            ['22:45:02', 'Bibliothèque système modifiée puis antidatée (mtime 2021) : **porte dérobée** probable', '`ctime` vs `mtime`'],
          ],
        },
        { t: 'p', text: 'La tâche cron s’exécute en root alors que l’accès initial était un compte `deploy` : une élévation de privilèges a eu lieu entre 22:41 et 22:44 ; à rechercher (sudo dans `auth.log`, vulnérabilité locale).' },
        { t: 'list', items: ['Vérifier l’intégrité des paquets (`debsums -c`) et comparer la bibliothèque à celle du paquet officiel.', 'Récupérer `u.sh` si possible (journaux du proxy, cache) et l’analyser.', 'Remédiation : reconstruire le serveur à partir d’une image saine plutôt que le nettoyer ; désactiver l’authentification SSH par mot de passe ; changer tous les secrets présents sur le serveur ; bloquer 203.0.113.50 et rechercher cette adresse sur les autres systèmes.'] },
      ],
    },
    'conteneur-compromis': {
      blocks: [
        {
          t: 'table',
          head: ['Heure', 'Fait', 'Lecture'],
          rows: [
            ['03:12:08', '`POST /upload` accepté', '**Point d’entrée probable** : envoi d’un fichier via une fonctionnalité de téléversement non contrôlée'],
            ['03:12:41', 'Requête vers `/uploads/x.php` avec paramètre', 'Exécution d’un script déposé (porte dérobée web) : `docker diff` confirme la création de `x.php`'],
            ['Après 03:12', '`/tmp/.cache/agent` créé', 'Implant déposé dans un répertoire caché'],
            ['03:20:15', 'Nouveau conteneur `agent-sync` sur le réseau de l’hôte', '**Élévation** : le conteneur `web-api` est privilégié et monte la socket Docker, ce qui permet de créer des conteneurs sur l’hôte'],
            ['03:27', 'Clé du compte `ci-deploy` utilisée depuis une adresse inconnue', '**Extension** vers le cloud : une clé a probablement été lue depuis l’hôte ou le conteneur (variables, fichiers)'],
          ],
        },
        { t: 'p', text: 'La **persistance** est assurée par le conteneur `agent-sync` (créé sur l’hôte, hors de la vue de l’application) et par la porte dérobée web. Le conteneur privilégié avec la socket montée est la cause structurelle de l’élévation.' },
        { t: 'list', items: ['**Préserver d’abord** : `docker inspect`, `docker logs --timestamps`, `docker top`, `docker diff` et `docker export` des deux conteneurs, mémoire de l’hôte si possible, puis un instantané du volume de l’hôte ; empreintes de tout, consignées avec les heures.', '**Collecter** : journaux du moteur et de l’hôte (`auth.log`, journald), journaux du proxy et du pare-feu, journal d’audit cloud pour la clé `ci-deploy`.'] },
        { t: 'list', items: ['**Confinement** : isoler l’hôte par les règles réseau (sans l’éteindre), révoquer la clé `ci-deploy` et vérifier ses autres usages, bloquer l’adresse inconnue.', '**Éradication** : reconstruire l’hôte à partir d’une image saine, redéployer l’application depuis une image vérifiée, rechercher des conteneurs ou clés semblables sur le parc.', '**Durcissement** : supprimer `privileged` et le montage de la socket, limiter les droits du conteneur, contrôler le type et l’exécution des fichiers téléversés, stocker les secrets dans un coffre et non dans l’environnement, centraliser les journaux hors de l’hôte.'] },
      ],
    },
  },
};
