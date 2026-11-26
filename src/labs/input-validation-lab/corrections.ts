import type { LabCorrections } from '../../content/types';

export const corrections: LabCorrections = {
  "labId": "input-validation-lab",
  "questions": {
    "validlab-q1": {
      "type": "short",
      "accepted": [
        "4",
        "quatre"
      ],
      "explanation": "Quatre sur six : la balise `<ScRiPt>` en casse mixte, la balise `<img onerror>`, l’injection SQL par `OR` (sans motif interdit) et la traversée de répertoire. La liste noire ne reconnaît que les motifs exacts qu’elle connaît."
    },
    "validlab-q2": {
      "type": "single",
      "correct": "a",
      "explanation": "En décrivant le format attendu (3 à 16 caractères alphanumériques ou tiret bas), la liste blanche refuse par défaut tout ce qui n’y entre pas, y compris les variantes d’attaque que personne n’a prévues.",
      "whyWrong": {
        "b": "La longueur d’écriture n’est pas un critère de robustesse.",
        "c": "Une validation ne chiffre rien.",
        "d": "Toute règle de validation se teste, avec des cas valides et invalides."
      }
    },
    "validlab-q3": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Il y a toujours une variante non prévue (casse, encodage, commentaire, balise différente). Les défenses fiables sont l’encodage à la sortie, les requêtes paramétrées et la validation par liste blanche, combinés."
    },
    "validlab-q4": {
      "type": "single",
      "correct": "a",
      "explanation": "Quand le format ne peut pas être strictement décrit, la sécurité repose sur l’encodage à l’affichage, les requêtes paramétrées et les limites de taille. Les contrôles faits dans le navigateur peuvent être contournés par un attaquant.",
      "whyWrong": {
        "b": "Interdire tout caractère spécial gênerait les utilisateurs légitimes sans résoudre les cas limites.",
        "c": "La validation côté navigateur se contourne en envoyant la requête directement.",
        "d": "Supprimer le champ n’est pas une réponse proportionnée."
      }
    },
    "validlab-q5": {
      "type": "single",
      "correct": "a",
      "explanation": "Le serveur est le seul endroit que l’attaquant ne contrôle pas : toute validation faite dans le navigateur est un confort pour l’utilisateur, pas une protection.",
      "whyWrong": {
        "b": "Le navigateur est contrôlé par l’utilisateur, donc par un attaquant éventuel.",
        "c": "Les attaques viennent aussi de l’intérieur et des comptes compromis.",
        "d": "La base ne connaît pas le format attendu par l’application."
      }
    }
  },
  "debrief": [
    {
      "t": "h",
      "text": "Verdicts des deux validateurs"
    },
    {
      "t": "table",
      "head": [
        "Entrée",
        "Liste noire",
        "Liste blanche"
      ],
      "rows": [
        [
          "`alice_01` (légitime)",
          "acceptée",
          "acceptée"
        ],
        [
          "`<script>alert(1)</script>`",
          "refusée",
          "refusée"
        ],
        [
          "`<ScRiPt>alert(1)</ScRiPt>`",
          "**acceptée à tort**",
          "refusée"
        ],
        [
          "`<img src=x onerror=alert(1)>`",
          "**acceptée à tort**",
          "refusée"
        ],
        [
          "`x' OR '1'='1`",
          "**acceptée à tort**",
          "refusée"
        ],
        [
          "`x'; drop table users`",
          "refusée",
          "refusée"
        ],
        [
          "`../../etc/passwd`",
          "**acceptée à tort**",
          "refusée"
        ],
        [
          "`bob` (légitime)",
          "acceptée",
          "acceptée"
        ]
      ]
    },
    {
      "t": "list",
      "items": [
        "**Liste noire** : bloque ce qu’on a prévu, laisse passer le reste.",
        "**Liste blanche** : n’accepte que ce qui est décrit.",
        "**Défense en profondeur** : validation + encodage de sortie + requêtes paramétrées."
      ]
    },
    {
      "t": "callout",
      "kind": "key",
      "title": "À retenir",
      "text": "Décrivez ce qui est permis plutôt que d’énumérer ce qui est interdit, validez côté serveur, et n’oubliez pas que la validation ne remplace pas l’encodage ni les requêtes paramétrées."
    }
  ]
};
