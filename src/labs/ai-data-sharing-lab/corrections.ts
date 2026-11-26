import type { LabCorrections } from '../../content/types';

export const corrections: LabCorrections = {
  "labId": "ai-data-sharing-lab",
  "questions": {
    "aishlab-q1": {
      "type": "short",
      "accepted": [
        "2",
        "deux"
      ],
      "explanation": "Deux : la question générale sur TLS et l’article de blog déjà publié, qui sont publics. Tout le reste, même « interne », reste hors d’un outil non approuvé."
    },
    "aishlab-q2": {
      "type": "single",
      "correct": "b",
      "explanation": "Un secret ne se saisit dans aucun outil : on fournit un exemple factice du même format. Si la clé a déjà été collée quelque part, elle est considérée comme compromise et révoquée.",
      "whyWrong": {
        "a": "Même un outil approuvé journalise ce qu’on lui envoie.",
        "c": "Masquer le début ne protège pas la clé entière.",
        "d": "Une clé modifiée ne servira plus, mais l’habitude de saisir des secrets reste dangereuse."
      }
    },
    "aishlab-q3": {
      "type": "single",
      "correct": "b",
      "explanation": "Les données personnelles relèvent du RGPD : l’approbation générale d’un outil ne dispense pas de justifier la finalité, la base légale et la minimisation. On anonymise ou on obtient la validation du responsable de la protection des données.",
      "whyWrong": {
        "a": "L’approbation de l’outil ne vaut pas autorisation pour toutes les données.",
        "c": "Retirer les prénoms ne rend pas des données anonymes.",
        "d": "Traduire ne change rien à la nature des données."
      }
    },
    "aishlab-q4": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Les noms de serveurs et adresses internes décrivent votre architecture et aident un attaquant. Dans un outil non approuvé, on n’envoie aucune information interne ; on utilise l’assistant approuvé ou on anonymise."
    },
    "aishlab-q5": {
      "type": "single",
      "correct": "b",
      "explanation": "Un outil approuvé protège les données, il ne garantit pas l’exactitude des réponses. Les assistants peuvent se tromper : la personne qui utilise la réponse en reste responsable et la vérifie.",
      "whyWrong": {
        "a": "L’approbation concerne la sécurité des données, pas la justesse.",
        "c": "Transmettre sans relecture engage la responsabilité de l’organisation.",
        "d": "Supprimer l’original détruit une pièce nécessaire."
      }
    }
  },
  "debrief": [
    {
      "t": "h",
      "text": "Règle appliquée aux huit informations"
    },
    {
      "t": "table",
      "head": [
        "N°",
        "Information",
        "Classification",
        "Public",
        "Approuvé"
      ],
      "rows": [
        [
          "1",
          "Question générale sur TLS",
          "Publique",
          "Autorisé",
          "Autorisé"
        ],
        [
          "2",
          "Article de blog publié",
          "Publique",
          "Autorisé",
          "Autorisé"
        ],
        [
          "3",
          "Compte rendu de réunion",
          "Interne",
          "Interdit",
          "Autorisé"
        ],
        [
          "4",
          "Journal avec noms de serveurs",
          "Interne",
          "Interdit",
          "Autorisé"
        ],
        [
          "5",
          "Liste de clients",
          "Données personnelles",
          "Interdit",
          "Interdit sans validation"
        ],
        [
          "6",
          "Contrat fournisseur",
          "Confidentielle",
          "Interdit",
          "Interdit sans validation"
        ],
        [
          "7",
          "Clé d’API",
          "Secret",
          "Interdit",
          "**Interdit**"
        ],
        [
          "8",
          "Dossier médical",
          "Données personnelles",
          "Interdit",
          "Interdit sans validation"
        ]
      ]
    },
    {
      "t": "callout",
      "kind": "key",
      "title": "Réflexe",
      "text": "Avant de coller quoi que ce soit : de quel type d’information s’agit-il, et à quel outil ? En cas de doute, ne saisissez rien et demandez. Un secret ne se saisit jamais."
    }
  ]
};
