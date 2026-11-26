import type { LabCorrections } from '../../content/types';

export const corrections: LabCorrections = {
  "labId": "windows-baseline-lab",
  "questions": {
    "winlab-q1": {
      "type": "short",
      "accepted": [
        "4",
        "quatre"
      ],
      "explanation": "Quatre écarts : disque non chiffré, SMBv1 activé, bureau à distance activé et utilisateur administrateur local. Les quatre autres réglages sont conformes."
    },
    "winlab-q2": {
      "type": "single",
      "correct": "a",
      "explanation": "Un utilisateur membre des administrateurs locaux exécute ses programmes avec des droits élevés : un fichier piégé ouvert par erreur peut alors modifier le système, désactiver des protections et s’installer durablement. Le moindre privilège limite cet impact.",
      "whyWrong": {
        "b": "Les droits d’administration n’empêchent pas d’ouvrir des documents.",
        "c": "Le pare-feu continue de fonctionner, mais un administrateur peut le désactiver.",
        "d": "Les droits n’ont pas d’effet direct sur la vitesse."
      }
    },
    "winlab-q3": {
      "type": "single",
      "correct": "a",
      "explanation": "Sans chiffrement, une personne qui retire le disque ou démarre sur un autre système peut lire les fichiers, quel que soit le mot de passe de session. Le chiffrement du disque protège les données au repos.",
      "whyWrong": {
        "b": "L’absence de chiffrement n’empêche pas le démarrage.",
        "c": "Le pare-feu n’est pas lié au chiffrement du disque.",
        "d": "Le mot de passe de session reste en place mais ne protège pas le disque lu hors du système."
      }
    },
    "winlab-q4": {
      "type": "truefalse",
      "correct": false,
      "explanation": "La base attend justement que l’exécution automatique soit désactivée : la valeur relevée correspond à la valeur attendue, donc le réglage est conforme. Il ne faut pas confondre « réglage désactivé » et « écart »."
    },
    "winlab-q5": {
      "type": "single",
      "correct": "a",
      "explanation": "On traite d’abord les écarts qui exposent le plus (gravité 3). Un score de 42 % n’est pas « correct » : il masque des écarts majeurs. Le bureau à distance (gravité 2) suit.",
      "whyWrong": {
        "b": "L’écart de gravité 1 est conforme ici, et ne serait de toute façon pas le premier.",
        "c": "Un score global ne dispense pas de traiter les écarts majeurs.",
        "d": "L’ordre de la liste n’est pas un critère de priorité."
      }
    }
  },
  "debrief": [
    {
      "t": "h",
      "text": "Écarts relevés, par gravité"
    },
    {
      "t": "table",
      "head": [
        "Gravité",
        "Réglage",
        "Attendu",
        "Relevé",
        "Mesure"
      ],
      "rows": [
        [
          "3",
          "Chiffrement du disque",
          "Activé",
          "Désactivé",
          "Activer BitLocker avec sauvegarde de la clé de récupération"
        ],
        [
          "3",
          "SMBv1",
          "Désactivé",
          "Activé",
          "Désactiver le protocole"
        ],
        [
          "3",
          "Administrateur local",
          "Non",
          "Oui",
          "Retirer l’utilisateur du groupe, élévation ponctuelle si besoin"
        ],
        [
          "2",
          "Bureau à distance",
          "Désactivé",
          "Activé",
          "Désactiver ou limiter via une passerelle"
        ]
      ]
    },
    {
      "t": "list",
      "items": [
        "**Score pondéré** : 42 % de conformité, malgré quatre réglages sur huit conformes.",
        "**Priorité** : gravité d’abord, pas ordre du relevé.",
        "**Prévention** : appliquer la base par stratégie de groupe ou outil de gestion, et recontrôler régulièrement."
      ]
    },
    {
      "t": "callout",
      "kind": "key",
      "title": "À retenir",
      "text": "Une base de sécurité transforme une impression (« le poste est bien configuré ») en mesure vérifiable. Les écarts se traitent par gravité, pas par ordre d’apparition."
    }
  ]
};
