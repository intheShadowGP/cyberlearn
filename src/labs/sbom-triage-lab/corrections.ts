import type { LabCorrections } from '../../content/types';

export const corrections: LabCorrections = {
  "labId": "sbom-triage-lab",
  "questions": {
    "sbomlab-q1": {
      "type": "short",
      "accepted": [
        "1",
        "une",
        "un"
      ],
      "explanation": "Une seule : la n° 1 (framework web, code atteignable, exploitation connue, CVSS 9,8). La n° 7 (CVSS 9,0, exploitation connue) a une atteignabilité inconnue : elle exige d’abord une analyse, qui doit être rapide vu l’exploitation connue."
    },
    "sbomlab-q2": {
      "type": "single",
      "correct": "a",
      "explanation": "Le test-runner n’est pas embarqué dans le produit livré : sa vulnérabilité n’expose pas les utilisateurs. On l’enregistre par une déclaration VEX « non affecté » (composant non présent) et on met à jour l’outil lors de la maintenance normale, en gardant à l’esprit que la chaîne de build peut elle aussi être attaquée.",
      "whyWrong": {
        "b": "9,1 est une note critique ; ce n’est pas la note qui est en cause.",
        "c": "Les outils de développement ont aussi des vulnérabilités.",
        "d": "Rien n’indique qu’elle soit déjà corrigée : la version est celle d’avant le correctif."
      }
    },
    "sbomlab-q3": {
      "type": "single",
      "correct": "a",
      "explanation": "Une déclaration VEX affirme un statut (« non affecté ») et en donne la justification vérifiable, ici le code vulnérable non atteignable. Sans justification, la déclaration n’est pas exploitable par les utilisateurs du produit ni par un auditeur.",
      "whyWrong": {
        "b": "Une simple mention n’est pas vérifiable.",
        "c": "Le numéro seul ne dit ni le statut ni la raison.",
        "d": "La déclaration concerne votre produit, pas la base publique."
      }
    },
    "sbomlab-q4": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Tant que l’atteignabilité n’est pas établie, on ne peut pas affirmer que le produit n’est pas affecté. On analyse (rapidement, surtout en cas d’exploitation connue), et on traite la vulnérabilité comme potentiellement exploitable entre-temps."
    },
    "sbomlab-q5": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Un inventaire à jour, des déclarations justifiées et rouvertes quand le code évolue, et un indicateur de délai de correction font du tri un processus vérifiable. Ne jamais mettre à jour accumule de la dette de sécurité.",
      "whyWrong": {
        "d": "Une dépendance qui fonctionne peut contenir une faille connue : l’absence de mise à jour est un risque."
      }
    }
  },
  "debrief": [
    {
      "t": "h",
      "text": "Décisions de la grille"
    },
    {
      "t": "table",
      "head": [
        "N°",
        "Composant",
        "CVSS",
        "Décision",
        "Règle"
      ],
      "rows": [
        [
          "1",
          "web-framework",
          "9,8",
          "**Corriger sous 48 h**",
          "T3"
        ],
        [
          "2",
          "xml-parser",
          "7,5",
          "Corriger sous 30 jours",
          "T4"
        ],
        [
          "3",
          "image-lib",
          "8,8",
          "VEX « non affecté » (code non atteignable)",
          "T2"
        ],
        [
          "4",
          "test-runner",
          "9,1",
          "VEX « non affecté » (hors produit livré)",
          "T1"
        ],
        [
          "5",
          "crypto-utils",
          "7,4",
          "Analyser l’atteignabilité",
          "T5"
        ],
        [
          "6",
          "log-formatter",
          "5,3",
          "Corriger sous 30 jours",
          "T4"
        ],
        [
          "7",
          "auth-client",
          "9,0",
          "**Analyser en urgence** (exploitation connue)",
          "T5"
        ],
        [
          "8",
          "build-plugin",
          "6,5",
          "VEX « non affecté » (hors produit livré)",
          "T1"
        ]
      ]
    },
    {
      "t": "list",
      "items": [
        "**Présence ≠ exposition** : trois vulnérabilités sur huit se documentent sans correction immédiate.",
        "**Cas à surveiller** : n° 7, note élevée et exploitation connue, mais atteignabilité inconnue.",
        "**Traçabilité** : chaque déclaration VEX porte une justification et peut être rouverte."
      ]
    },
    {
      "t": "callout",
      "kind": "key",
      "title": "À retenir",
      "text": "Le but du tri n’est pas de réduire le nombre de lignes du rapport, mais de concentrer l’effort sur ce qui peut réellement être exploité dans le produit livré, et de pouvoir le démontrer."
    }
  ]
};
