import type { LabCorrections } from '../../content/types';

export const corrections: LabCorrections = {
  "labId": "findings-prioritization-lab",
  "questions": {
    "findlab-q1": {
      "type": "short",
      "accepted": [
        "8",
        "constat 8",
        "n° 8"
      ],
      "explanation": "Le constat n° 8 (clé d’API publiée dans un dépôt public) cumule exposition Internet, actif critique et exploitation connue : sa priorité atteint le plafond de 10. Il se traite immédiatement en révoquant la clé."
    },
    "findlab-q2": {
      "type": "single",
      "correct": "a",
      "explanation": "La note brute ne tient pas compte du contexte : le n° 5 touche un actif de criticité moyenne uniquement accessible en interne, alors que le n° 3 concerne un serveur de fichiers critique avec exploitation connue. Les deux restent à traiter, mais pas dans l’ordre des notes.",
      "whyWrong": {
        "b": "C’est l’inverse : le n° 5 a 9,8 et le n° 3 a 8,1.",
        "c": "Un mot de passe par défaut est une faille sérieuse ; ici il passe seulement après un constat plus exposé.",
        "d": "Le n° 5 est interne : c’est justement ce qui réduit sa priorité."
      }
    },
    "findlab-q3": {
      "type": "truefalse",
      "correct": false,
      "explanation": "La note CVSS décrit la gravité technique ; le risque réel dépend de l’exposition, de la valeur de l’actif et du contexte d’exploitation. Ici, trois constats changent de rang quand on contextualise."
    },
    "findlab-q4": {
      "type": "single",
      "correct": "b",
      "explanation": "Une clé publiée doit être considérée comme compromise : on la révoque, on la remplace et on consulte les journaux d’utilisation. Supprimer le fichier ne retire pas la clé de l’historique ni des copies déjà faites.",
      "whyWrong": {
        "a": "Attendre prolonge l’exposition d’une clé exploitable.",
        "c": "Le secret reste dans l’historique et dans les clones.",
        "d": "Renommer ne protège rien."
      }
    },
    "findlab-q5": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "L’exposition, la criticité de l’actif et l’exploitation connue sont les trois facteurs utilisés dans ce laboratoire pour passer de la gravité technique au risque. La longueur du titre n’a aucun lien avec le risque.",
      "whyWrong": {
        "d": "Un titre plus long ou plus court ne change pas le risque."
      }
    }
  },
  "debrief": [
    {
      "t": "h",
      "text": "Classement contextualisé"
    },
    {
      "t": "table",
      "head": [
        "Rang",
        "N°",
        "Constat",
        "CVSS",
        "Priorité"
      ],
      "rows": [
        [
          "1",
          "8",
          "Clé d’API publiée dans un dépôt public",
          "9,1",
          "10,00"
        ],
        [
          "2",
          "1",
          "Injection SQL sur le portail client",
          "9,8",
          "9,80"
        ],
        [
          "3",
          "3",
          "Vulnérabilité SMB sur un serveur de fichiers",
          "8,1",
          "6,80"
        ],
        [
          "4",
          "5",
          "Mot de passe par défaut sur la sonde",
          "9,8",
          "6,59"
        ],
        [
          "5",
          "2",
          "Telnet sur une imprimante",
          "7,5",
          "3,78"
        ],
        [
          "6",
          "4",
          "TLS 1.0 sur le site vitrine",
          "5,9",
          "3,54"
        ],
        [
          "7",
          "7",
          "XSS stocké sur l’intranet RH",
          "6,1",
          "3,42"
        ],
        [
          "8",
          "6",
          "En-tête de sécurité manquant",
          "3,1",
          "2,48"
        ]
      ]
    },
    {
      "t": "list",
      "items": [
        "**Contexte** : exposition, criticité et exploitation connue modifient l’ordre des notes brutes.",
        "**Cette quinzaine** : constats 8, 1, 3 et 5 ; les autres peuvent être planifiés.",
        "**Communication** : présenter à la direction le classement ET sa justification, pas seulement des notes."
      ]
    },
    {
      "t": "callout",
      "kind": "key",
      "title": "À retenir",
      "text": "CVSS dit à quel point une faille est grave en soi ; la priorité dépend de ce qu’elle met en danger chez vous et de la facilité avec laquelle on peut l’exploiter."
    }
  ]
};
