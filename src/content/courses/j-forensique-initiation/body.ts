import type { CourseBody } from '../../types';
import { questions } from './questions';

export const body: CourseBody = {
  courseId: 'j-forensique-initiation',
  lesson: {
    intro:
      'Quand un incident survient (fraude, intrusion, fuite), il faut comprendre **ce qui s’est passé**, **quand**, **comment** et parfois **qui** en est responsable. C’est le rôle de l’investigation numérique, ou **forensique**. Ses conclusions peuvent être lues par un employeur, un assureur ou un juge : elles reposent donc sur des preuves collectées sans altération et sur une méthode documentée. Ce cours d’initiation présente les idées de base, sans outil complexe.',
    sections: [
      {
        id: 'role',
        title: 'À quoi sert la forensique ?',
        blocks: [
          { t: 'p', text: 'La **forensique numérique** est l’ensemble des méthodes qui permettent de **retrouver, préserver et interpréter** des traces laissées sur des systèmes informatiques pour établir des faits.' },
          {
            t: 'table',
            head: ['Situation', 'Question posée'],
            rows: [
              ['Intrusion ou rançongiciel', 'Par où l’attaquant est-il entré ? Quelles machines sont touchées ?'],
              ['Fuite de données', 'Quelles données ont été copiées, quand, par quel compte ?'],
              ['Fraude interne', 'Quelles actions un compte a-t-il réalisées et à quel moment ?'],
              ['Litige', 'Un document existait-il à telle date ? A-t-il été modifié ?'],
            ],
          },
          { t: 'list', items: ['**Comprendre** : établir les faits (quoi, quand, comment).', '**Contenir et corriger** : savoir où agir pour arrêter et éviter la répétition.', '**Prouver** : produire des éléments qu’un tiers peut vérifier.'] },
          { t: 'callout', kind: 'key', text: 'La rigueur de la méthode compte autant que la technique : une conclusion juste mais obtenue en modifiant la preuve peut être rejetée.' },
        ],
      },
      {
        id: 'preuve',
        title: 'Les preuves numériques',
        blocks: [
          { t: 'def', term: 'Preuve numérique', text: 'Donnée stockée ou transmise par un système informatique (fichier, journal, contenu de la mémoire, message) qui permet d’établir un fait. Elle est fragile : elle se copie facilement, mais aussi se modifie ou disparaît sans bruit.' },
          {
            t: 'table',
            head: ['Type de donnée', 'Durée de vie', 'Exemple'],
            rows: [
              ['**Très volatile**', 'Disparaît à l’extinction', 'Mémoire vive : processus en cours, connexions ouvertes'],
              ['**Volatile**', 'Change vite', 'État du réseau, fichiers temporaires'],
              ['**Durable**', 'Reste jusqu’à effacement', 'Disque, journaux conservés'],
              ['**Très durable**', 'Conservé durablement', 'Sauvegardes, archives'],
            ],
          },
          { t: 'def', term: 'Ordre de volatilité', text: 'On collecte d’abord ce qui disparaît le plus vite (mémoire vive), puis le disque, puis les archives. Éteindre une machine trop tôt peut faire perdre des preuves.' },
          { t: 'list', items: ['**Travailler sur une copie** : on réalise une **image** (copie exacte bit à bit) du support ; l’original est scellé et conservé.', '**Ne pas modifier** : ouvrir un fichier ou brancher un disque sur un poste ordinaire peut changer des dates et des données.', '**Tout noter** : chaque action, avec l’heure, pour qu’elle puisse être comprise et reproduite.'] },
        ],
      },
      {
        id: 'integrite',
        title: 'Intégrité et chaîne de conservation',
        blocks: [
          { t: 'p', text: 'Pour montrer qu’une preuve n’a pas changé entre sa collecte et son examen, on calcule son **empreinte** (hachage).' },
          { t: 'def', term: 'Empreinte (hash)', text: 'Valeur courte calculée à partir du contenu d’un fichier ou d’une image (par exemple SHA-256). Si un seul bit change, l’empreinte change complètement. On la calcule à la collecte, puis on la recalcule à chaque utilisation : si elle diffère, la preuve est altérée.' },
          { t: 'def', term: 'Chaîne de conservation', text: 'Registre qui retrace pour chaque scellé : qui l’a collecté, quand, où, comment, qui l’a eu en garde ensuite et pour quelle raison. Une rupture dans la chaîne permet de contester la preuve.' },
          { t: 'def', term: 'Bloqueur d’écriture', text: 'Dispositif qui permet de lire un support sans jamais y écrire. Sans lui, un système d’exploitation peut modifier des données du support dès qu’on le branche.' },
          {
            t: 'example',
            title: 'Fiche de scellé (extrait)',
            blocks: [
              { t: 'table', head: ['Champ', 'Valeur'], rows: [['Scellé', 'INC-2026-021 / S-01'], ['Description', 'Clé USB 64 Go, marque inconnue'], ['Collecte', '04/05/2026 10:20, bureau 3.07, par L. Faure, en présence de M. Dubois'], ['Empreinte SHA-256', '`b41f…09c7` (calculée à 10:32)'], ['Mouvements', '04/05 11:00 remis à N. Prieur ; 05/05 09:00 retour en coffre']] },
            ],
          },
        ],
      },
      {
        id: 'traces',
        title: 'Reconnaître les traces courantes',
        blocks: [
          { t: 'p', text: 'Chaque action d’un utilisateur ou d’un programme laisse des traces. Savoir où regarder est la moitié du travail.' },
          {
            t: 'table',
            head: ['Trace', 'Ce qu’elle apprend'],
            rows: [
              ['**Journaux d’authentification**', 'Qui s’est connecté, quand, d’où, avec quel résultat'],
              ['**Historique du navigateur**', 'Pages visitées, téléchargements'],
              ['**Fichiers récents, corbeille**', 'Documents ouverts ou supprimés'],
              ['**Métadonnées**', 'Dates de création et de modification, auteur, appareil'],
              ['**Prefetch (Windows)**', 'Un programme a été exécuté'],
              ['**Historique des commandes (Linux)**', 'Commandes saisies par un compte (`.bash_history`)'],
            ],
          },
          { t: 'list', items: ['**Fichier supprimé** : il est souvent seulement marqué comme libre ; ses données peuvent rester récupérables jusqu’à réutilisation.', '**Date d’accès** : peu fiable, car elle n’est pas toujours mise à jour.', '**Absence de trace** : un journal vide ou un trou dans une série est aussi une information, à expliquer.'] },
          { t: 'callout', kind: 'info', text: 'Une trace seule ne prouve presque jamais rien : on recoupe plusieurs sources indépendantes avant d’affirmer un fait.' },
        ],
      },
      {
        id: 'chrono',
        title: 'Une chronologie simple',
        blocks: [
          { t: 'p', text: 'Une **chronologie** (timeline) range les événements dans l’ordre du temps. Elle fait apparaître les causes et les conséquences. Chaque source a son propre format d’heure : il faut donc tout ramener à une référence commune.' },
          { t: 'def', term: 'UTC', text: 'Temps universel coordonné : une référence horaire sans changement d’heure d’été. On normalise tous les horodatages en UTC avant de les comparer.' },
          {
            t: 'example',
            title: 'Deux heures pour un même événement',
            blocks: [
              { t: 'p', text: 'Un journal du serveur (heure de Paris, hiver) indique `14:00`. Un journal du pare-feu (UTC) indique `13:00:05`. Paris est en UTC+1 en hiver : `14:00` à Paris correspond à `13:00` UTC. Les deux journaux décrivent donc le même instant, à cinq secondes près.' },
            ],
          },
          { t: 'list', items: ['**Convertir** chaque heure en UTC et noter le fuseau d’origine.', '**Vérifier la dérive** : une horloge en retard ou en avance de quelques minutes décale tout.', '**Trier** puis lire comme un récit : chaque étape doit être cohérente avec la précédente.', '**Horodatage Unix** : nombre de secondes écoulées depuis le 1er janvier 1970 à 00:00:00 UTC (« epoch »).'] },
        ],
      },
      {
        id: 'cadre',
        title: 'Cadre légal, éthique et premiers réflexes',
        blocks: [
          { t: 'p', text: 'Examiner un ordinateur, c’est accéder à la vie privée de personnes. Cela se fait dans un cadre précis.' },
          {
            t: 'table',
            head: ['Principe', 'Application'],
            rows: [
              ['**Autorisation**', 'On n’examine un système que si l’on y est autorisé par une personne habilitée'],
              ['**Proportionnalité**', 'On ne regarde que ce qui est nécessaire à la mission'],
              ['**Confidentialité**', 'Ce qu’on découvre n’est communiqué qu’aux personnes concernées'],
              ['**Honnêteté**', 'On rapporte les faits, y compris ses propres actions et erreurs'],
            ],
          },
          { t: 'callout', kind: 'legal', text: 'Examiner la messagerie ou le poste d’un salarié exige un cadre (charte informatique, information préalable, finalité légitime, proportionnalité). En cas de doute, on consulte le service juridique avant d’agir.' },
          { t: 'list', items: ['**Ne pas toucher** : ne pas utiliser, ne pas « nettoyer », ne pas redémarrer la machine suspecte.', '**Isoler** du réseau si nécessaire, sans éteindre.', '**Noter** ce qui est vu : heure, message affiché, qui a fait quoi.', '**Prévenir** la personne responsable de la sécurité et attendre ses consignes.'] },
        ],
      },
    ],
    useCases: [
      'Comprendre comment un poste a été compromis avant de le remettre en service.',
      'Documenter une suspicion de fraude interne de façon recevable.',
      'Savoir quoi faire (et ne pas faire) quand on découvre un poste suspect.',
    ],
    commonMistakes: [
      'Travailler directement sur le disque original.',
      'Éteindre une machine allumée sans avoir réfléchi à la mémoire vive.',
      'Mélanger des heures de fuseaux différents sans les convertir.',
      'Ne pas noter ses propres actions.',
      'Examiner des données personnelles sans cadre ni autorisation.',
    ],
    bestPractices: [
      'Faire une copie, calculer l’empreinte, sceller l’original.',
      'Tenir une chaîne de conservation sans trou.',
      'Convertir tous les horodatages en UTC.',
      'Recouper au moins deux sources avant d’affirmer.',
      'Rester dans le cadre autorisé et proportionné.',
    ],
    keyPoints: [
      'La forensique établit des faits à partir de traces, avec une méthode défendable.',
      'On collecte du plus volatile (mémoire) au plus durable (archives).',
      'Une empreinte et une chaîne de conservation prouvent l’intégrité.',
      'Journaux, historiques et métadonnées sont les traces de base.',
      'Une chronologie se construit en UTC.',
    ],
  },
  practice: [
    {
      id: 'premiers-gestes',
      kind: 'scenario',
      title: 'Scénario : un poste suspect dans un bureau',
      context: [{ t: 'p', text: 'Une collègue vous prévient : son ordinateur portable ouvre des fenêtres inconnues et un dossier de documents financiers semble avoir été copié. L’ordinateur est allumé et la session est ouverte.' }],
      steps: ['Dire ce que vous lui demandez de faire et de ne pas faire.', 'Lister ce que vous notez à ce stade.', 'Indiquer qui vous prévenez et pourquoi on n’éteint pas la machine tout de suite.'],
    },
    {
      id: 'lire-metadonnees',
      kind: 'analysis',
      title: 'Analyse : lire les métadonnées de trois fichiers',
      context: [
        { t: 'code', lang: 'text', code: 'Fichier              Créé              Modifié           Dernier accès     Auteur\nbudget-2026.xlsx     2026-03-02 09:10  2026-03-20 17:45  2026-04-12 08:02  s.durand\nnotes-reunion.docx   2026-03-18 14:30  2026-03-18 14:55  2026-03-18 14:55  s.durand\nexport-clients.csv   2026-04-10 23:52  2026-04-10 23:52  2026-04-10 23:59  admin-temp' },
      ],
      steps: ['Décrire ce que chaque ligne indique.', 'Dire quelle ligne mérite le plus d’attention et pourquoi.', 'Lister les vérifications à faire avant de conclure.'],
    },
    {
      id: 'mini-chrono',
      kind: 'analysis',
      title: 'Analyse : une mini-chronologie en UTC',
      context: [
        { t: 'code', lang: 'text', code: 'Source        Fuseau                  Heure    Événement\nPare-feu      UTC                     08:14:20 Connexion entrante depuis 203.0.113.50\nServeur       Paris (UTC+1, hiver)    09:15:02 Connexion réussie du compte « compta »\nEDR           UTC                     08:16:45 Lancement d’un programme inconnu\nMessagerie    Paris (UTC+1, hiver)    09:18:30 Règle de transfert créée sur la boîte « compta »' },
      ],
      steps: ['Convertir toutes les heures en UTC.', 'Ordonner les événements et décrire le récit.', 'Indiquer les vérifications complémentaires.'],
    },
  ],
  questions,
  resources: [
    { title: 'RFC 3227 — Guidelines for Evidence Collection and Archiving', source: 'IETF', url: 'https://www.rfc-editor.org/rfc/rfc3227' },
    { title: 'NIST SP 800-86 — Integrating Forensic Techniques into Incident Response', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/86/final' },
    { title: 'Guide d’hygiène informatique', source: 'ANSSI', url: 'https://cyber.gouv.fr/publications/guide-dhygiene-informatique' },
    { title: 'Assistance et prévention du risque numérique', source: 'cybermalveillance.gouv.fr', url: 'https://www.cybermalveillance.gouv.fr/' },
  ],
};
