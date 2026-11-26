import type { LabCorrections } from '../../content/types';

export const corrections: LabCorrections = {
  "labId": "custody-log-lab",
  "questions": {
    "custlab-q1": {
      "type": "short",
      "accepted": [
        "3",
        "trois"
      ],
      "explanation": "Trois anomalies : l’entrée 5 n’a aucun responsable et suit un trou de près de 29 heures (deux anomalies sur la même entrée), et l’entrée 6 a une empreinte différente de la précédente."
    },
    "custlab-q2": {
      "type": "single",
      "correct": "a",
      "explanation": "Un changement d’empreinte signifie que le contenu du disque a été modifié (ou qu’une autre pièce a été examinée) : l’intégrité n’est plus démontrée. Les autres éléments sont normaux.",
      "whyWrong": {
        "b": "Le laboratoire est le lieu normal de l’analyse.",
        "c": "Un même responsable peut légitimement intervenir plusieurs fois.",
        "d": "Une armoire sécurisée est le stockage attendu."
      }
    },
    "custlab-q3": {
      "type": "single",
      "correct": "a",
      "explanation": "Une analyse sans responsable identifié, précédée d’un long trou, laisse supposer un accès non tracé : on ne peut pas affirmer qui a manipulé la preuve ni dans quelles conditions.",
      "whyWrong": {
        "b": "Une chaîne conforme nomme un responsable pour chaque manipulation.",
        "c": "Une copie serait enregistrée comme telle, avec une empreinte de copie.",
        "d": "L’absence de responsable est précisément ce qui fragilise la preuve devant un tribunal ou un conseil."
      }
    },
    "custlab-q4": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Modifier un registre après coup détruit sa valeur : on ne « complète » pas un registre, on y ajoute une mention datée qui explique l’écart (avec son auteur). La traçabilité repose sur des enregistrements faits au moment des faits."
    },
    "custlab-q5": {
      "type": "single",
      "correct": "a",
      "explanation": "On signale les écarts, on cherche les explications contemporaines des faits (agendas, journaux d’accès, témoignages) et on mesure ce qu’il reste de la preuve. Falsifier ou dissimuler constituerait une faute grave et peut être une infraction.",
      "whyWrong": {
        "b": "Effacer une ligne est une falsification.",
        "c": "Reconstituer avec de nouvelles dates est un faux.",
        "d": "Dissimuler une anomalie expose à une sanction bien plus lourde que l’anomalie elle-même."
      }
    }
  },
  "debrief": [
    {
      "t": "h",
      "text": "Lecture du registre"
    },
    {
      "t": "table",
      "head": [
        "Entrée",
        "Constat",
        "Conséquence"
      ],
      "rows": [
        [
          "1 à 4",
          "Responsables nommés, empreinte constante, lieux cohérents",
          "Chaîne continue et conforme"
        ],
        [
          "5",
          "Aucun responsable, après 28,8 heures sans entrée",
          "**Accès non tracé possible**"
        ],
        [
          "6",
          "Empreinte différente de l’entrée précédente",
          "**Intégrité non démontrée**"
        ],
        [
          "7",
          "Stockage correct, mais de la nouvelle empreinte",
          "Ne répare pas l’écart"
        ]
      ]
    },
    {
      "t": "list",
      "items": [
        "**Qui, quand, où, dans quel état** : quatre questions auxquelles chaque ligne doit répondre.",
        "**Empreinte** : constante sur l’original ; toute variation est à expliquer.",
        "**Honnêteté** : on documente l’écart, on ne le dissimule pas."
      ]
    },
    {
      "t": "callout",
      "kind": "key",
      "title": "À retenir",
      "text": "La chaîne de conservation se construit au moment des faits. Une preuve techniquement intacte peut perdre sa valeur si l’on ne peut pas démontrer qui l’a manipulée et dans quel état."
    }
  ]
};
