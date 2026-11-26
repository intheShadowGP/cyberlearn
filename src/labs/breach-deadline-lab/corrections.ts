import type { LabCorrections } from '../../content/types';

export const corrections: LabCorrections = {
  "labId": "breach-deadline-lab",
  "questions": {
    "brlab-q1": {
      "type": "single",
      "correct": "a",
      "explanation": "72 heures calendaires après le vendredi 17 h 45, soit lundi 9 mars à 17 h 45 UTC. Le week-end compte : il n’y a pas de report au lundi suivant. En pratique, on démarre la notification dès les premières heures.",
      "whyWrong": {
        "b": "Rien ne reporte l’échéance au prochain jour ouvré.",
        "c": "Cela correspond à sept jours, pas à trois.",
        "d": "Cela ne représenterait que 24 heures."
      }
    },
    "brlab-q2": {
      "type": "short",
      "accepted": [
        "2",
        "deux"
      ],
      "explanation": "Deux : l’envoi avec adresses visibles (n° 2, risque présent) et le rançongiciel (n° 3, risque élevé). L’ordinateur chiffré (n° 1) et le bulletin supprimé (n° 4) ne présentent pas de risque, mais restent à consigner."
    },
    "brlab-q3": {
      "type": "single",
      "correct": "c",
      "explanation": "Le n° 3 expose des données de santé de 2 000 personnes à un attaquant : le risque est élevé, les personnes doivent être informées pour pouvoir se protéger. Les autres incidents ne présentent pas de risque élevé.",
      "whyWrong": {
        "a": "Le disque chiffré avec une clé robuste rend les données inexploitables.",
        "b": "Le risque existe, mais n’est pas élevé : l’autorité est notifiée, sans obligation d’informer chaque personne.",
        "d": "Le message a été supprimé par le destinataire, qui l’a confirmé."
      }
    },
    "brlab-q4": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Toute violation est consignée dans un registre interne, avec ses effets et les mesures prises, même lorsqu’elle n’est pas notifiée. L’autorité peut demander ce registre."
    },
    "brlab-q5": {
      "type": "single",
      "correct": "a",
      "explanation": "Le délai court dès que l’organisation a connaissance de l’incident : l’alerte immédiate donne au responsable le temps d’évaluer le risque. La décision de notifier revient à la personne désignée, pas à celle qui découvre.",
      "whyWrong": {
        "b": "Attendre consomme le délai de 72 heures.",
        "c": "Supprimer des traces détruit les preuves et aggrave la situation.",
        "d": "L’information des personnes se décide après l’évaluation du risque, par le responsable."
      }
    }
  },
  "debrief": [
    {
      "t": "h",
      "text": "Décision pour chaque incident"
    },
    {
      "t": "table",
      "head": [
        "N°",
        "Incident",
        "Risque",
        "Autorité",
        "Personnes",
        "Échéance (UTC)"
      ],
      "rows": [
        [
          "1",
          "Ordinateur chiffré perdu",
          "Aucun",
          "Non, à consigner",
          "Non",
          "—"
        ],
        [
          "2",
          "Adresses visibles",
          "Présent",
          "**Oui**",
          "Non",
          "08/03 14:20"
        ],
        [
          "3",
          "Rançongiciel, données de santé",
          "Élevé",
          "**Oui**",
          "**Oui**",
          "09/03 17:45"
        ],
        [
          "4",
          "Bulletin supprimé",
          "Aucun",
          "Non, à consigner",
          "Non",
          "—"
        ]
      ]
    },
    {
      "t": "list",
      "items": [
        "**72 heures calendaires** : le week-end ne suspend pas le délai.",
        "**Risque** : pas de risque (chiffrement robuste, message rattrapé) = pas de notification, mais consignation.",
        "**Information des personnes** : exigée quand le risque est élevé."
      ]
    },
    {
      "t": "callout",
      "kind": "key",
      "title": "Réflexe",
      "text": "Alerter tout de suite, décrire les faits (quelles données, combien de personnes, quand), contenir, et laisser la personne désignée décider de la notification dans le délai."
    }
  ]
};
