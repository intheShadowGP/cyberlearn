import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'j-forensique-initiation',
  practice: {
    'premiers-gestes': {
      blocks: [
        { t: 'list', items: ['**À faire faire** : ne plus utiliser l’ordinateur, ne rien fermer ni supprimer, couper le Wi-Fi ou débrancher le câble réseau, ne pas éteindre.', '**À ne pas faire** : ne pas redémarrer, ne pas lancer d’antivirus de sa propre initiative, ne pas essayer de « réparer », ne pas brancher de clé USB, ne pas supprimer les fenêtres suspectes.'] },
        { t: 'list', items: ['**À noter** : l’heure de l’appel, le nom de la collègue, la machine, ce qui s’affiche (photo de l’écran), les actions déjà faites, les documents concernés.'] },
        { t: 'p', text: '**Prévenir** le responsable de la sécurité (ou le SOC) et attendre ses consignes. On n’éteint pas tout de suite parce que la **mémoire vive** contient des traces (processus, connexions) qui disparaissent à l’extinction ; on isole du réseau pour arrêter une éventuelle copie de données tout en gardant l’état de la machine.' },
      ],
    },
    'lire-metadonnees': {
      blocks: [
        {
          t: 'table',
          head: ['Fichier', 'Lecture'],
          rows: [
            ['`budget-2026.xlsx`', 'Créé en mars, modifié le 20 mars, consulté le 12 avril : cycle de vie normal pour un document de travail de `s.durand`'],
            ['`notes-reunion.docx`', 'Créé, modifié et consulté dans la même demi-heure : un compte rendu rédigé en une fois'],
            ['`export-clients.csv`', '**À examiner** : créé à 23:52 par un compte `admin-temp`, un fichier d’export de clients, hors des heures de travail'],
          ],
        },
        { t: 'p', text: 'La troisième ligne mérite le plus d’attention : un compte d’aspect temporaire, une heure tardive et un contenu sensible (clients). Cela évoque une copie de données, mais ne le prouve pas.' },
        { t: 'list', items: ['**Qui est `admin-temp`** : compte légitime ? qui l’a créé et quand ?', '**Journaux** : connexion du compte à 23:5x, depuis où ? autres actions autour de 23:52 ?', '**Sortie** : le fichier a-t-il été envoyé ou copié (messagerie, clé USB, transfert réseau) ?', '**Ne pas conclure** sans recouper plusieurs sources ; la date d’accès seule est peu fiable.'] },
      ],
    },
    'mini-chrono': {
      blocks: [
        {
          t: 'table',
          head: ['Heure UTC', 'Source', 'Événement'],
          rows: [
            ['08:14:20', 'Pare-feu', 'Connexion entrante depuis 203.0.113.50'],
            ['08:15:02', 'Serveur (09:15:02 Paris − 1 h)', 'Connexion réussie du compte « compta »'],
            ['08:16:45', 'EDR', 'Lancement d’un programme inconnu'],
            ['08:18:30', 'Messagerie (09:18:30 Paris − 1 h)', 'Règle de transfert créée sur la boîte « compta »'],
          ],
        },
        { t: 'p', text: 'Récit : une connexion entrante est vue par le pare-feu, 42 secondes plus tard le compte « compta » se connecte au serveur, puis un programme inconnu est lancé, enfin une règle de transfert est créée sur la messagerie (technique classique pour capter des courriels). Sans conversion, la lecture serait fausse d’une heure.' },
        { t: 'list', items: ['Vérifier si la connexion de 08:15 vient de la même adresse que celle du pare-feu.', 'Identifier le programme lancé à 08:16 (emplacement, signature, empreinte).', 'Examiner la règle de transfert (destination) et la supprimer après préservation.', 'Contrôler la dérive des horloges des trois sources.'] },
      ],
    },
  },
};
