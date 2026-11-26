import type { LabCorrections } from '../../content/types';

export const corrections: LabCorrections = {
  "labId": "zero-trust-policy-lab",
  "questions": {
    "ztlab-q1": {
      "type": "short",
      "accepted": [
        "2",
        "deux"
      ],
      "explanation": "Deux demandes seulement obtiennent l’accès plein : la n° 1 (ressource à faible sensibilité, MFA et appareil conformes) et la n° 3 (ressource sensible avec clé de sécurité sur appareil conforme)."
    },
    "ztlab-q2": {
      "type": "single",
      "correct": "b",
      "explanation": "L’appareil est sain et la clé de sécurité satisfait R3, mais R2 s’applique avant : le pays est hors de la liste autorisée et la ressource est sensible. La règle de refus est évaluée avant les règles d’authentification.",
      "whyWrong": {
        "a": "Le risque de l’appareil est faible dans cette demande.",
        "c": "R3 n’est jamais atteinte : R2 refuse avant.",
        "d": "R5 n’est atteinte que si aucune règle précédente ne s’applique."
      }
    },
    "ztlab-q3": {
      "type": "single",
      "correct": "a",
      "explanation": "R3 exige une clé de sécurité, qu’un processus automatique ne peut pas présenter : la sauvegarde sera bloquée, ou, pire, quelqu’un créera une exception large pour la débloquer. Les charges de travail doivent avoir leur propre mécanisme d’identité (identité de charge de travail, certificat, jeton à durée courte) et une règle dédiée.",
      "whyWrong": {
        "b": "Le pays n’est pas en cause : il est dans la liste autorisée.",
        "c": "R1 ne concerne que le risque de l’appareil.",
        "d": "Une charge de travail a justement besoin d’une identité propre, forte et traçable."
      }
    },
    "ztlab-q4": {
      "type": "truefalse",
      "correct": false,
      "explanation": "La première règle qui s’applique décide. Si R4 passait avant R1, une demande d’appareil à risque pourrait être renvoyée vers une simple demande de MFA au lieu d’être refusée. Les règles de refus se placent avant les règles de conditions à satisfaire."
    },
    "ztlab-q5": {
      "type": "single",
      "correct": "a",
      "explanation": "Un accès limité à une ressource de sensibilité moyenne depuis un appareil non géré peut encore exposer des données personnelles. Réserver l’accès limité aux ressources de faible sensibilité réduit l’exposition sans gêner les appareils conformes.",
      "whyWrong": {
        "b": "La MFA ne garantit pas la santé de l’appareil.",
        "c": "Supprimer le contrôle supprime la protection.",
        "d": "Un appareil personnel est par nature moins maîtrisé."
      }
    }
  },
  "debrief": [
    {
      "t": "h",
      "text": "Décisions de la politique"
    },
    {
      "t": "table",
      "head": [
        "N°",
        "Identité",
        "Décision",
        "Règle"
      ],
      "rows": [
        [
          "1",
          "alice",
          "Accès",
          "R5"
        ],
        [
          "2",
          "bob",
          "Authentification renforcée (pas de clé de sécurité)",
          "R3"
        ],
        [
          "3",
          "carol",
          "Accès",
          "R5"
        ],
        [
          "4",
          "dave",
          "Accès limité (appareil non conforme)",
          "R5"
        ],
        [
          "5",
          "erin",
          "Refus (pays hors liste, ressource sensible)",
          "R2"
        ],
        [
          "6",
          "frank",
          "Refus (appareil à risque élevé)",
          "R1"
        ],
        [
          "7",
          "gina",
          "Authentification multifacteur exigée",
          "R4"
        ],
        [
          "8",
          "svc-backup",
          "Authentification renforcée exigée **qu’un service ne peut pas fournir**",
          "R3"
        ]
      ]
    },
    {
      "t": "list",
      "items": [
        "**Ordre** : les refus passent avant les exigences d’authentification.",
        "**Angle mort** : les charges de travail ne sont pas prévues ; il faut une règle et un mécanisme d’identité dédiés.",
        "**Accès limité** : à réserver aux ressources de faible sensibilité."
      ]
    },
    {
      "t": "callout",
      "kind": "key",
      "title": "Principe",
      "text": "Une politique Zero Trust se teste comme du code : on prévoit la décision de cas types, on cherche les cas non prévus (comptes de service, urgences) et on journalise toutes les décisions."
    }
  ]
};
