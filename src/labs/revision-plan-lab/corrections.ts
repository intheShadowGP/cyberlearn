import type { LabCorrections } from '../../content/types';

export const corrections: LabCorrections = {
  "labId": "revision-plan-lab",
  "questions": {
    "revlab-q1": {
      "type": "short",
      "accepted": [
        "sécurité des systèmes",
        "securite des systemes",
        "systèmes",
        "systemes"
      ],
      "explanation": "La sécurité des systèmes pèse 25 % de l’examen et votre score est de 50 % : 25 × (80 − 50) / 100 = 7,5 points à gagner, le plus gros potentiel du plan."
    },
    "revlab-q2": {
      "type": "short",
      "accepted": [
        "18,5",
        "18.5"
      ],
      "explanation": "On additionne les gains par domaine : 3,0 + 0 + 7,5 + 1,5 + 4,0 + 0,5 + 2,0 = 18,5 points."
    },
    "revlab-q3": {
      "type": "short",
      "accepted": [
        "8"
      ],
      "explanation": "20 × 7,5 / 18,5 ≈ 8,1 heures : environ 8 heures, soit 40 % du temps pour le domaine qui rapporte le plus."
    },
    "revlab-q4": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Un domaine déjà maîtrisé offre peu de marge. Les points se gagnent là où l’écart à la cible est grand et où le poids à l’examen est élevé."
    },
    "revlab-q5": {
      "type": "single",
      "correct": "a",
      "explanation": "Une préparation honnête s’appuie sur des ressources légitimes et se mesure par un nouveau diagnostic. Les questions volées ou la fraude contreviennent à l’accord de confidentialité des certifications et peuvent coûter la certification obtenue.",
      "whyWrong": {
        "b": "Les questions réelles diffusées violent la confidentialité de l’examen.",
        "c": "Mémoriser des contenus obtenus illégitimement est de la fraude et ne prouve aucune compétence.",
        "d": "Se faire remplacer est une fraude caractérisée."
      }
    }
  },
  "debrief": [
    {
      "t": "h",
      "text": "Plan proposé pour vingt heures"
    },
    {
      "t": "table",
      "head": [
        "Domaine",
        "Poids",
        "Score",
        "Gain",
        "Heures"
      ],
      "rows": [
        [
          "Sécurité des systèmes",
          "25",
          "50",
          "7,5",
          "8,1"
        ],
        [
          "Réponse à incident",
          "10",
          "40",
          "4,0",
          "4,3"
        ],
        [
          "Réseaux",
          "20",
          "65",
          "3,0",
          "3,2"
        ],
        [
          "Cloud",
          "10",
          "60",
          "2,0",
          "2,2"
        ],
        [
          "Gestion des risques",
          "15",
          "70",
          "1,5",
          "1,6"
        ],
        [
          "Développement sécurisé",
          "10",
          "75",
          "0,5",
          "0,5"
        ],
        [
          "Cryptographie",
          "10",
          "80",
          "0",
          "0"
        ]
      ]
    },
    {
      "t": "list",
      "items": [
        "**Priorité 1** : sécurité des systèmes (poids élevé, score le plus bas parmi les gros domaines).",
        "**Priorité 2** : réponse à incident (petit poids, mais score très bas).",
        "**Aucune révision ciblée** pour la cryptographie, déjà à la cible."
      ]
    },
    {
      "t": "callout",
      "kind": "key",
      "title": "Méthode",
      "text": "Diagnostiquer, calculer le gain par domaine, répartir le temps en proportion, pratiquer, puis refaire un diagnostic pour ajuster. Un plan de révision est un modèle que l’on corrige avec les nouvelles mesures."
    }
  ]
};
