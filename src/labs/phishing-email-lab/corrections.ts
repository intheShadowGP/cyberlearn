import type { LabCorrections } from '../../content/types';

export const corrections: LabCorrections = {
  "labId": "phishing-email-lab",
  "questions": {
    "phishlab-q1": {
      "type": "short",
      "accepted": [
        "4",
        "quatre"
      ],
      "explanation": "Quatre courriels sont dangereux : le n° 2 (faux site de banque), le n° 3 (fraude au président), le n° 4 (exécutable déguisé) et le n° 6 (faux portail d’authentification). Les n° 1 et 5 sont légitimes."
    },
    "phishlab-q2": {
      "type": "single",
      "correct": "c",
      "explanation": "Le n° 3 prétend venir du dirigeant, exige un virement urgent et confidentiel, et ne contient aucun lien ni pièce jointe : seule la manipulation compte. L’adresse n’appartient pas à l’organisation et aucune authentification n’est établie.",
      "whyWrong": {
        "a": "Le service paie écrit depuis le domaine de l’organisation, avec contrôles réussis.",
        "b": "La banque est un cas d’hameçonnage par faux site, pas de fraude à l’identité d’un dirigeant.",
        "d": "Le fournisseur est un expéditeur connu avec des contrôles réussis."
      }
    },
    "phishlab-q3": {
      "type": "single",
      "correct": "c",
      "explanation": "Le domaine qui compte est la fin du nom d’hôte : `reset-portal.example`. Tout ce qui précède (`societe.example.com.`) est un sous-domaine choisi par l’attaquant pour ressembler au site légitime.",
      "whyWrong": {
        "a": "C’est un sous-domaine du domaine de l’attaquant.",
        "b": "Cette partie est également un préfixe : elle n’est pas la fin du nom.",
        "d": "Ce domaine n’apparaît que comme élément intermédiaire."
      }
    },
    "phishlab-q4": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Le courriel n° 6 réussit les contrôles et reste un hameçonnage : l’attaquant a enregistré un domaine proche du vôtre et l’authentifie normalement. L’authentification prouve l’origine technique, pas la bonne foi."
    },
    "phishlab-q5": {
      "type": "single",
      "correct": "c",
      "explanation": "La double extension cache un exécutable. On ne l’ouvre pas, on signale le message au canal prévu (ou à l’équipe sécurité) et on laisse les spécialistes l’examiner dans un environnement isolé.",
      "whyWrong": {
        "a": "Ouvrir un exécutable déguisé le lance.",
        "b": "Transférer propage le risque.",
        "d": "Renommer n’en change pas le contenu : il reste un exécutable."
      }
    },
    "phishlab-q6": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Un lien trompeur, une urgence sur une demande inhabituelle et une double extension sont des indices classiques. La casse de l’objet n’en est pas un.",
      "whyWrong": {
        "d": "Les minuscules ne prouvent rien : légitimes comme malveillants peuvent en utiliser."
      }
    }
  },
  "debrief": [
    {
      "t": "h",
      "text": "Analyse des six courriels"
    },
    {
      "t": "table",
      "head": [
        "N°",
        "Expéditeur",
        "Indice décisif",
        "Verdict"
      ],
      "rows": [
        [
          "1",
          "Service paie",
          "Domaine de l’organisation, lien interne, contrôles réussis",
          "Légitime"
        ],
        [
          "2",
          "Banque",
          "Lien affiché ≠ domaine réel (`banque-verif.example`), contrôles échoués, urgence",
          "**Hameçonnage**"
        ],
        [
          "3",
          "« PDG »",
          "Adresse extérieure, demande de virement urgent et confidentiel",
          "**Fraude au président**"
        ],
        [
          "4",
          "Colis",
          "Pièce jointe `.pdf.exe`, contrôles échoués",
          "**Programme malveillant**"
        ],
        [
          "5",
          "Fournisseur",
          "Expéditeur connu, lien sur son propre domaine, contrôles réussis",
          "Légitime"
        ],
        [
          "6",
          "Support IT",
          "Domaine réel `reset-portal.example` caché derrière un sous-domaine, bien que les contrôles réussissent",
          "**Hameçonnage**"
        ]
      ]
    },
    {
      "t": "callout",
      "kind": "key",
      "title": "Réflexe",
      "text": "Ne vous fiez pas à l’apparence : regardez le domaine réel du lien, la nature de la demande et la pièce jointe. En cas de doute, ne cliquez pas, signalez, et vérifiez par un autre canal."
    }
  ]
};
