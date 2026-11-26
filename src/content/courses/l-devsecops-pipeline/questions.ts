// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "dso-q1",
    "prompt": "Quel contrôle analyse les dépendances tierces pour détecter des vulnérabilités connues ?",
    "skills": [
      "l-dso-pipeline"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "SCA"
      },
      {
        "id": "b",
        "text": "SAST"
      },
      {
        "id": "c",
        "text": "DAST"
      },
      {
        "id": "d",
        "text": "Un pare-feu applicatif"
      }
    ]
  },
  {
    "id": "dso-q2",
    "prompt": "Le DAST teste l’application en fonctionnement, alors que le SAST analyse le code sans l’exécuter.",
    "skills": [
      "l-dso-pipeline"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "dso-q3",
    "prompt": "Quels contrôles peuvent détecter un problème avant tout déploiement ?",
    "skills": [
      "l-dso-pipeline"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Analyse de l’IaC (Terraform)"
      },
      {
        "id": "b",
        "text": "Supervision des journaux de production"
      },
      {
        "id": "c",
        "text": "SAST"
      },
      {
        "id": "d",
        "text": "Analyse des secrets"
      }
    ]
  },
  {
    "id": "dso-q13",
    "prompt": "Un analyseur Terraform signale `cidr_blocks = [\"0.0.0.0/0\"]` sur le port 22. Quelle est la bonne réaction ?",
    "skills": [
      "l-dso-pipeline",
      "l-dso-ci"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Désactiver l’analyseur"
      },
      {
        "id": "b",
        "text": "Corriger dans le code puis redéployer"
      },
      {
        "id": "c",
        "text": "Corriger à la main dans la console cloud"
      },
      {
        "id": "d",
        "text": "Ignorer : le serveur a un mot de passe"
      }
    ]
  },
  {
    "id": "dso-q15",
    "prompt": "Proposez l’ordre d’introduction des contrôles de sécurité dans le pipeline d’une équipe qui n’en a aucun, en précisant le mode bloquant ou informatif de chacun.",
    "skills": [
      "l-dso-pipeline",
      "l-dso-supply"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "dso-q16",
    "prompt": "Où les secrets détectés dans un dépôt doivent-ils être recherchés ?",
    "skills": [
      "l-dso-pipeline",
      "l-dso-ci"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Nulle part, les forges les masquent"
      },
      {
        "id": "b",
        "text": "Uniquement dans les fichiers .env"
      },
      {
        "id": "c",
        "text": "Dans le code et dans tout l’historique Git"
      },
      {
        "id": "d",
        "text": "Uniquement dans la dernière version des fichiers"
      }
    ]
  },
  {
    "id": "dso-q31",
    "prompt": "Que signifie le principe du « shift left » en sécurité logicielle ?",
    "skills": [
      "l-dso-pipeline"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Contrôler uniquement une fois en production"
      },
      {
        "id": "b",
        "text": "Supprimer les tests automatiques du pipeline"
      },
      {
        "id": "c",
        "text": "Reporter les déploiements en fin de mois"
      },
      {
        "id": "d",
        "text": "Détecter les défauts plus tôt"
      }
    ]
  },
  {
    "id": "dso-q32",
    "prompt": "Quand génère-t-on idéalement le SBOM d’une application ?",
    "skills": [
      "l-dso-pipeline"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Jamais, les analyses suffisent"
      },
      {
        "id": "b",
        "text": "À chaque build"
      },
      {
        "id": "c",
        "text": "Une fois par an, lors de l’audit"
      },
      {
        "id": "d",
        "text": "Seulement après un incident de sécurité"
      }
    ]
  },
  {
    "id": "dso-q33",
    "prompt": "Un analyseur de secrets doit examiner aussi l’historique des commits, pas seulement la dernière version.",
    "skills": [
      "l-dso-pipeline"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "dso-q4",
    "prompt": "Quel sigle désigne l’inventaire normalisé des composants d’un logiciel ?",
    "skills": [
      "l-dso-supply"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "sigle"
  },
  {
    "id": "dso-q5",
    "prompt": "Un attaquant publie sur le registre public un paquet portant le nom d’une bibliothèque interne de l’entreprise. Comment s’appelle cette attaque ?",
    "skills": [
      "l-dso-supply"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Confusion de dépendances"
      },
      {
        "id": "b",
        "text": "Injection SQL dans une base"
      },
      {
        "id": "c",
        "text": "Hameçonnage par courriel"
      },
      {
        "id": "d",
        "text": "Typosquatting par faute de frappe"
      }
    ]
  },
  {
    "id": "dso-q6",
    "prompt": "Avec un fichier de verrouillage et `npm ci`, une nouvelle version publiée d’une dépendance est automatiquement intégrée au prochain build.",
    "skills": [
      "l-dso-supply"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "dso-q7",
    "prompt": "Quelles mesures réduisent le risque de compromission par une dépendance ?",
    "skills": [
      "l-dso-supply"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Accepter automatiquement toute mise à jour majeure"
      },
      {
        "id": "b",
        "text": "Versions figées par un fichier de verrouillage"
      },
      {
        "id": "c",
        "text": "Registre interne ou miroir approuvé"
      },
      {
        "id": "d",
        "text": "Revue des nouvelles dépendances"
      }
    ]
  },
  {
    "id": "dso-q8",
    "prompt": "Quel cadre définit des niveaux d’exigence de provenance pour les artefacts logiciels ? (sigle)",
    "skills": [
      "l-dso-supply"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "sigle"
  },
  {
    "id": "dso-q34",
    "prompt": "Qu’est-ce qu’une dépendance transitive ?",
    "skills": [
      "l-dso-supply"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Une dépendance supprimée du projet"
      },
      {
        "id": "b",
        "text": "Une dépendance développée en interne"
      },
      {
        "id": "c",
        "text": "Une dépendance utilisée seulement pour les tests"
      },
      {
        "id": "d",
        "text": "Une dépendance de dépendance"
      }
    ]
  },
  {
    "id": "dso-q35",
    "prompt": "Pourquoi vérifier l’empreinte d’intégrité d’un paquet téléchargé ?",
    "skills": [
      "l-dso-supply"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Pour accélérer le téléchargement du paquet"
      },
      {
        "id": "b",
        "text": "Pour réduire la taille du paquet installé"
      },
      {
        "id": "c",
        "text": "Détecter une altération"
      },
      {
        "id": "d",
        "text": "Pour supprimer les dépendances inutiles"
      }
    ]
  },
  {
    "id": "dso-q14",
    "prompt": "Analysez le workflow `pull_request_target` avec `write-all`, une action épinglée sur `@main` et une clé AWS en variable d’environnement : risques, scénario d’attaque et correction.",
    "skills": [
      "l-dso-ci",
      "l-dso-supply"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "dso-q37",
    "prompt": "Une dépendance très populaire ne peut pas être compromise.",
    "skills": [
      "l-dso-supply"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "dso-q9",
    "prompt": "Pourquoi épingler une action tierce par empreinte de commit plutôt que par étiquette `@v4` ?",
    "skills": [
      "l-dso-ci"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Une étiquette peut être déplacée"
      },
      {
        "id": "b",
        "text": "Pour réduire la taille du dépôt Git"
      },
      {
        "id": "c",
        "text": "Pour accélérer le build de l’action"
      },
      {
        "id": "d",
        "text": "Parce que les étiquettes sont interdites par Git"
      }
    ]
  },
  {
    "id": "dso-q10",
    "prompt": "Un secret a été poussé par erreur sur la branche principale d’un dépôt distant. Le supprimer dans un nouveau commit, quelques minutes plus tard, suffit à le protéger.",
    "skills": [
      "l-dso-ci"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "dso-q11",
    "prompt": "Quelles pratiques durcissent un workflow de CI ?",
    "skills": [
      "l-dso-ci"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "`permissions: write-all` pour éviter les erreurs"
      },
      {
        "id": "b",
        "text": "Environnement protégé avec approbation pour la production"
      },
      {
        "id": "c",
        "text": "Permissions `contents: read` par défaut"
      },
      {
        "id": "d",
        "text": "Fédération OIDC vers le cloud"
      }
    ]
  },
  {
    "id": "dso-q12",
    "prompt": "Quelle commande npm installe les dépendances en respectant strictement le fichier de verrouillage ?",
    "skills": [
      "l-dso-ci"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "commande"
  },
  {
    "id": "dso-q36",
    "prompt": "À quoi sert un environnement protégé pour la production dans une CI ?",
    "skills": [
      "l-dso-ci"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Accélérer l’exécution des tests"
      },
      {
        "id": "b",
        "text": "Rendre le dépôt accessible au public"
      },
      {
        "id": "c",
        "text": "Supprimer les journaux de build"
      },
      {
        "id": "d",
        "text": "Approbation et secrets isolés"
      }
    ]
  },
  {
    "id": "dso-q38",
    "prompt": "Pourquoi préférer le déclencheur `pull_request` à `pull_request_target` pour des contributions externes ?",
    "skills": [
      "l-dso-ci"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Il s’exécute plus rapidement que l’autre"
      },
      {
        "id": "b",
        "text": "Aucun secret exposé au code externe"
      },
      {
        "id": "c",
        "text": "Il donne davantage de droits au jeton"
      },
      {
        "id": "d",
        "text": "Il supprime les tests de la contribution"
      }
    ]
  },
  {
    "id": "dso-q39",
    "prompt": "Pourquoi le masquage automatique des secrets dans les journaux de CI ne suffit-il pas ?",
    "skills": [
      "l-dso-ci"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le masquage les supprime du dépôt Git"
      },
      {
        "id": "b",
        "text": "Les secrets deviennent alors inutiles"
      },
      {
        "id": "c",
        "text": "Un script peut les exfiltrer"
      },
      {
        "id": "d",
        "text": "Les journaux sont toujours chiffrés"
      }
    ]
  },
  {
    "id": "dso-q40",
    "prompt": "Quelles pratiques réduisent l’impact d’un runner de CI compromis ?",
    "skills": [
      "l-dso-ci"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Runners éphémères"
      },
      {
        "id": "b",
        "text": "Protection des branches et revue obligatoire"
      },
      {
        "id": "c",
        "text": "Jetons à moindre privilège"
      },
      {
        "id": "d",
        "text": "Secrets de longue durée dans les variables du dépôt"
      }
    ]
  },
  {
    "id": "dso-q17",
    "prompt": "Que mesure le score CVSS d’une vulnérabilité ?",
    "skills": [
      "l-dso-gouv"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le coût de sa correction"
      },
      {
        "id": "b",
        "text": "Sa probabilité d’être exploitée demain"
      },
      {
        "id": "c",
        "text": "Sa gravité théorique"
      },
      {
        "id": "d",
        "text": "Le nombre de serveurs concernés"
      }
    ]
  },
  {
    "id": "dso-q18",
    "prompt": "Pourquoi ne pas prioriser les corrections uniquement avec le score CVSS ?",
    "skills": [
      "l-dso-gouv"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le CVSS est un score confidentiel"
      },
      {
        "id": "b",
        "text": "Exploitation et exposition comptent"
      },
      {
        "id": "c",
        "text": "Le CVSS ne change jamais dans le temps"
      },
      {
        "id": "d",
        "text": "Le CVSS est toujours erroné"
      }
    ]
  },
  {
    "id": "dso-q19",
    "prompt": "Une vulnérabilité listée dans un catalogue d’exploitation connue (KEV) doit être traitée en priorité.",
    "skills": [
      "l-dso-gouv"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "dso-q20",
    "prompt": "Quels critères servent à prioriser la correction d’une vulnérabilité ?",
    "skills": [
      "l-dso-gouv"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "La criticité de l’application concernée"
      },
      {
        "id": "b",
        "text": "L’exposition à Internet du composant"
      },
      {
        "id": "c",
        "text": "L’ancienneté du paquet seule"
      },
      {
        "id": "d",
        "text": "L’exploitation connue ou active"
      }
    ]
  },
  {
    "id": "dso-q21",
    "prompt": "Quel catalogue de la CISA recense les vulnérabilités dont l’exploitation est avérée ? (sigle)",
    "skills": [
      "l-dso-gouv"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "sigle"
  },
  {
    "id": "dso-q22",
    "prompt": "Que doit contenir une exception de sécurité acceptée sur une vulnérabilité ?",
    "skills": [
      "l-dso-gouv"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Une durée illimitée sans revue"
      },
      {
        "id": "b",
        "text": "Seulement un accord oral du responsable"
      },
      {
        "id": "c",
        "text": "Une suppression de l’alerte sans aucune trace"
      },
      {
        "id": "d",
        "text": "Justification, responsable, échéance"
      }
    ]
  },
  {
    "id": "dso-q23",
    "prompt": "À quoi sert une déclaration VEX associée à un SBOM ?",
    "skills": [
      "l-dso-gouv"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Dire si le produit est affecté"
      },
      {
        "id": "b",
        "text": "Remplacer l’analyse SCA du pipeline"
      },
      {
        "id": "c",
        "text": "Publier le code source complet"
      },
      {
        "id": "d",
        "text": "Chiffrer le contenu du SBOM"
      }
    ]
  },
  {
    "id": "dso-q24",
    "prompt": "Un secret apparaît dans les journaux d’un pipeline. Quelle est la première action ?",
    "skills": [
      "l-dso-incident"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Supprimer le journal seulement"
      },
      {
        "id": "b",
        "text": "Le révoquer et le remplacer"
      },
      {
        "id": "c",
        "text": "Le masquer dans l’interface"
      },
      {
        "id": "d",
        "text": "Attendre la fin de la semaine"
      }
    ]
  },
  {
    "id": "dso-q25",
    "prompt": "Une bibliothèque utilisée par vos applications est annoncée compromise. Que permet le SBOM ?",
    "skills": [
      "l-dso-incident"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Identifier les applications concernées"
      },
      {
        "id": "b",
        "text": "Se dispenser de toute enquête"
      },
      {
        "id": "c",
        "text": "Supprimer la bibliothèque automatiquement"
      },
      {
        "id": "d",
        "text": "Mettre à jour tous les serveurs d’un coup"
      }
    ]
  },
  {
    "id": "dso-q26",
    "prompt": "Après la compromission d’un runner de CI, reconstruire sur ce même runner suffit à garantir des artefacts sains.",
    "skills": [
      "l-dso-incident"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "dso-q27",
    "prompt": "Quelles actions suivent la découverte d’une compromission de la CI ?",
    "skills": [
      "l-dso-incident"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Auditer les builds de la période concernée"
      },
      {
        "id": "b",
        "text": "Révoquer les secrets accessibles au pipeline"
      },
      {
        "id": "c",
        "text": "Effacer les journaux de build"
      },
      {
        "id": "d",
        "text": "Reconstruire sur un environnement sain"
      }
    ]
  },
  {
    "id": "dso-q28",
    "prompt": "Pourquoi conserver les journaux de build et les attestations de provenance ?",
    "skills": [
      "l-dso-incident"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Pour accélérer l’exécution des tests"
      },
      {
        "id": "b",
        "text": "Pour supprimer automatiquement les secrets"
      },
      {
        "id": "c",
        "text": "Reconstituer qui a construit quoi"
      },
      {
        "id": "d",
        "text": "Pour augmenter la taille du dépôt"
      }
    ]
  },
  {
    "id": "dso-q29",
    "prompt": "Comment qualifie-t-on un runner de CI créé pour un seul job puis détruit ?",
    "skills": [
      "l-dso-incident"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "un adjectif"
  },
  {
    "id": "dso-q30",
    "prompt": "Un artefact livré aux clients a été construit pendant la compromission. Que faut-il leur communiquer ?",
    "skills": [
      "l-dso-incident"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Rien, pour ne pas les inquiéter"
      },
      {
        "id": "b",
        "text": "Uniquement le nom du pipeline concerné"
      },
      {
        "id": "c",
        "text": "Un nouvel artefact sans aucune explication"
      },
      {
        "id": "d",
        "text": "Versions touchées et mesures à prendre"
      }
    ]
  },
  {
    "id": "dso-q41",
    "prompt": "Pourquoi référence-t-on une action tierce par son empreinte de commit plutôt que par `@v3` ?",
    "skills": [
      "l-dso-ci"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Les étiquettes sont interdites par la plateforme"
      },
      {
        "id": "b",
        "text": "L’empreinte accélère l’exécution du pipeline"
      },
      {
        "id": "c",
        "text": "L’empreinte chiffre automatiquement le code de l’action"
      },
      {
        "id": "d",
        "text": "Une étiquette peut être déplacée vers un code malveillant"
      }
    ]
  },
  {
    "id": "dso-q42",
    "prompt": "Que limite la ligne `permissions: contents: read` dans un workflow ?",
    "skills": [
      "l-dso-ci"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "La liste des secrets disponibles"
      },
      {
        "id": "b",
        "text": "Les droits du jeton du pipeline à la seule lecture du dépôt"
      },
      {
        "id": "c",
        "text": "La durée maximale d’exécution des étapes"
      },
      {
        "id": "d",
        "text": "Le nombre d’exécutions simultanées du workflow"
      }
    ]
  },
  {
    "id": "dso-q43",
    "prompt": "Quel sigle désigne l’inventaire des composants logiciels d’un produit (trois lettres) ?",
    "skills": [
      "l-dso-supply"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "sigle"
  }
];
