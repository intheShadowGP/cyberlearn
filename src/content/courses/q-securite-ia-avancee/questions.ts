// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "qia-q1",
    "prompt": "Pourquoi vérifier la provenance d’un modèle téléchargé depuis un dépôt public ?",
    "skills": [
      "q-adv-chaine"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Il peut avoir été altéré ou piégé"
      },
      {
        "id": "b",
        "text": "Il ne fonctionne qu’avec un seul matériel"
      },
      {
        "id": "c",
        "text": "Il est toujours plus lent que les autres"
      },
      {
        "id": "d",
        "text": "Il est automatiquement chiffré par le dépôt"
      }
    ]
  },
  {
    "id": "qia-q2",
    "prompt": "Quel type de format est préférable pour un modèle d’origine externe ?",
    "skills": [
      "q-adv-chaine"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un format propriétaire non documenté"
      },
      {
        "id": "b",
        "text": "Un format qui peut exécuter du code au chargement"
      },
      {
        "id": "c",
        "text": "Un format de poids seul, sans code exécutable"
      },
      {
        "id": "d",
        "text": "Un format compressé sans aucune vérification"
      }
    ]
  },
  {
    "id": "qia-q3",
    "prompt": "Que décrit une nomenclature IA (AIBOM) ?",
    "skills": [
      "q-adv-chaine"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Les noms des utilisateurs du système"
      },
      {
        "id": "b",
        "text": "Les mots de passe des équipes de data science"
      },
      {
        "id": "c",
        "text": "Le budget annuel du projet d’IA"
      },
      {
        "id": "d",
        "text": "Les composants d’IA et leurs versions"
      }
    ]
  },
  {
    "id": "qia-q4",
    "prompt": "Pourquoi charger un modèle externe dans un environnement isolé ?",
    "skills": [
      "q-adv-chaine"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Augmenter la précision de ses prédictions"
      },
      {
        "id": "b",
        "text": "Limiter l’impact d’un contenu malveillant"
      },
      {
        "id": "c",
        "text": "Rendre le modèle plus facile à copier"
      },
      {
        "id": "d",
        "text": "Réduire la consommation d’énergie du modèle"
      }
    ]
  },
  {
    "id": "qia-q5",
    "prompt": "Un jeu de données collecté sur Internet peut contenir des exemples piégés.",
    "skills": [
      "q-adv-chaine"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "qia-q6",
    "prompt": "Un modèle très populaire sur un dépôt public est forcément sûr.",
    "skills": [
      "q-adv-chaine"
    ],
    "difficulty": 3,
    "type": "truefalse"
  },
  {
    "id": "qia-q7",
    "prompt": "Quel format de sérialisation Python, capable d’exécuter du code au chargement, est déconseillé pour les modèles externes ? (un mot)",
    "skills": [
      "q-adv-chaine"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "un mot"
  },
  {
    "id": "qia-q8",
    "prompt": "Quelles vérifications s’appliquent avant d’adopter un modèle externe ?",
    "skills": [
      "q-adv-chaine"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Analyser le format de sérialisation"
      },
      {
        "id": "b",
        "text": "Évaluer le modèle sur ses propres cas de test"
      },
      {
        "id": "c",
        "text": "Le déployer directement en production"
      },
      {
        "id": "d",
        "text": "Contrôler la provenance et la signature"
      }
    ]
  },
  {
    "id": "qia-q9",
    "prompt": "Quelle combinaison rend un agent particulièrement exposé à l’exfiltration de données ?",
    "skills": [
      "q-adv-agents"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Données privées, contenu non fiable et canal de sortie"
      },
      {
        "id": "b",
        "text": "Un modèle de petite taille sans contexte ni outil"
      },
      {
        "id": "c",
        "text": "Aucune donnée et aucun outil disponible pour l’agent"
      },
      {
        "id": "d",
        "text": "Un seul outil en lecture seule et sans accès à des données"
      }
    ]
  },
  {
    "id": "qia-q10",
    "prompt": "Comment casser la combinaison à risque d’un agent ?",
    "skills": [
      "q-adv-agents"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Allonger le prompt système de l’agent"
      },
      {
        "id": "b",
        "text": "Ajouter un second modèle à chaque requête"
      },
      {
        "id": "c",
        "text": "Augmenter la température du modèle"
      },
      {
        "id": "d",
        "text": "Retirer au moins l’un des trois éléments"
      }
    ]
  },
  {
    "id": "qia-q11",
    "prompt": "Pourquoi donner à un agent une identité propre aux droits limités ?",
    "skills": [
      "q-adv-agents"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Lui permettre d’agir au nom de tous"
      },
      {
        "id": "b",
        "text": "Tracer ses actions et borner ses droits"
      },
      {
        "id": "c",
        "text": "Éviter toute journalisation de ses actions"
      },
      {
        "id": "d",
        "text": "Lui donner un accès administrateur par défaut"
      }
    ]
  },
  {
    "id": "qia-q12",
    "prompt": "Quel intérêt présente la séparation entre l’agent qui planifie et le composant qui exécute ?",
    "skills": [
      "q-adv-agents"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Doubler la vitesse de traitement des requêtes"
      },
      {
        "id": "b",
        "text": "Supprimer tout besoin de journalisation"
      },
      {
        "id": "c",
        "text": "Contrôler chaque action avant son exécution"
      },
      {
        "id": "d",
        "text": "Éviter l’usage d’un modèle de langage"
      }
    ]
  },
  {
    "id": "qia-q13",
    "prompt": "Les descriptions d’outils fournies par un serveur tiers doivent être revues comme du code.",
    "skills": [
      "q-adv-agents"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "qia-q14",
    "prompt": "Complétez : l’environnement isolé où l’on exécute du code généré par un modèle s’appelle un bac à … (un mot)",
    "skills": [
      "q-adv-agents"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "un mot"
  },
  {
    "id": "qia-q15",
    "prompt": "Quelles mesures encadrent un agent doté d’outils ?",
    "skills": [
      "q-adv-agents"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Une confirmation pour les actions irréversibles"
      },
      {
        "id": "b",
        "text": "Un accès administrateur par défaut"
      },
      {
        "id": "c",
        "text": "Un budget et des limites de débit"
      },
      {
        "id": "d",
        "text": "Une autorisation par outil et par action"
      }
    ]
  },
  {
    "id": "qia-q16",
    "prompt": "Concevez les contrôles d’un agent qui lit les courriels, accède à un CRM et peut envoyer des messages.",
    "skills": [
      "q-adv-agents"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "qia-q17",
    "prompt": "Qu’est-ce qu’une porte dérobée dans un modèle d’IA ?",
    "skills": [
      "q-adv-robustesse"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un comportement caché déclenché par un motif"
      },
      {
        "id": "b",
        "text": "Une interface de configuration du modèle"
      },
      {
        "id": "c",
        "text": "Une fonction de sauvegarde automatique des poids"
      },
      {
        "id": "d",
        "text": "Une panne du matériel qui exécute le modèle"
      }
    ]
  },
  {
    "id": "qia-q18",
    "prompt": "En quoi consiste l’entraînement adverse ?",
    "skills": [
      "q-adv-robustesse"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Entraîner sans aucune donnée d’origine"
      },
      {
        "id": "b",
        "text": "Entraîner avec des exemples modifiés"
      },
      {
        "id": "c",
        "text": "Entraîner plus rapidement avec moins de matériel"
      },
      {
        "id": "d",
        "text": "Entraîner uniquement sur des données publiques"
      }
    ]
  },
  {
    "id": "qia-q19",
    "prompt": "Pourquoi évaluer une défense avec des attaques adaptatives ?",
    "skills": [
      "q-adv-robustesse"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Elles coûtent moins cher que les autres"
      },
      {
        "id": "b",
        "text": "Elles sont plus faciles à automatiser"
      },
      {
        "id": "c",
        "text": "Un attaquant s’adapte à la défense"
      },
      {
        "id": "d",
        "text": "Elles donnent toujours de meilleurs scores"
      }
    ]
  },
  {
    "id": "qia-q20",
    "prompt": "Quelle défense limite l’impact du contournement d’un détecteur ?",
    "skills": [
      "q-adv-robustesse"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Utiliser un seul détecteur très précis et rapide"
      },
      {
        "id": "b",
        "text": "Cacher l’existence du détecteur"
      },
      {
        "id": "c",
        "text": "Désactiver la journalisation des alertes"
      },
      {
        "id": "d",
        "text": "Combiner plusieurs détecteurs indépendants"
      }
    ]
  },
  {
    "id": "qia-q21",
    "prompt": "Aucune défense ne garantit l’absence d’évasion face à un attaquant adaptatif.",
    "skills": [
      "q-adv-robustesse"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "qia-q22",
    "prompt": "Une défense jamais attaquée pendant les tests est une défense démontrée.",
    "skills": [
      "q-adv-robustesse"
    ],
    "difficulty": 3,
    "type": "truefalse"
  },
  {
    "id": "qia-q23",
    "prompt": "Comment appelle-t-on l’attaque qui altère une entrée pour tromper un modèle déjà entraîné ? (un mot)",
    "skills": [
      "q-adv-robustesse"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "un mot"
  },
  {
    "id": "qia-q24",
    "prompt": "Quelles mesures détectent ou limitent un empoisonnement des données ?",
    "skills": [
      "q-adv-robustesse"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Accepter toutes les contributions sans contrôle"
      },
      {
        "id": "b",
        "text": "Détecter les exemples aberrants"
      },
      {
        "id": "c",
        "text": "Tracer la provenance des données"
      },
      {
        "id": "d",
        "text": "Comparer chaque nouveau modèle au précédent"
      }
    ]
  },
  {
    "id": "qia-q25",
    "prompt": "À quoi sert MITRE ATLAS dans une analyse de risque d’IA ?",
    "skills": [
      "q-adv-risque"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Calculer le prix total d’un projet d’IA"
      },
      {
        "id": "b",
        "text": "Mesurer la vitesse d’un modèle en production"
      },
      {
        "id": "c",
        "text": "Décrire des techniques d’attaque contre l’IA"
      },
      {
        "id": "d",
        "text": "Chiffrer tous les modèles avant déploiement"
      }
    ]
  },
  {
    "id": "qia-q26",
    "prompt": "Quel référentiel liste les principaux risques applicatifs des systèmes à base de LLM ?",
    "skills": [
      "q-adv-risque"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "La grille salariale des équipes de sécurité"
      },
      {
        "id": "b",
        "text": "L’OWASP Top 10 for LLM Applications"
      },
      {
        "id": "c",
        "text": "Le calendrier des sauvegardes du service"
      },
      {
        "id": "d",
        "text": "La norme de câblage des salles serveurs"
      }
    ]
  },
  {
    "id": "qia-q27",
    "prompt": "Que cartographie-t-on d’abord dans l’analyse de risque d’un système d’IA ?",
    "skills": [
      "q-adv-risque"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Les horaires des équipes de développement"
      },
      {
        "id": "b",
        "text": "Les marques des ordinateurs utilisés"
      },
      {
        "id": "c",
        "text": "Les couleurs de l’interface des utilisateurs"
      },
      {
        "id": "d",
        "text": "Les actifs : données, modèle, outils"
      }
    ]
  },
  {
    "id": "qia-q28",
    "prompt": "Pourquoi l’impact d’un détournement dépend-il des outils de l’agent ?",
    "skills": [
      "q-adv-risque"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le risque dépend de ce que l’agent peut faire"
      },
      {
        "id": "b",
        "text": "Les outils n’ont aucune influence sur le risque"
      },
      {
        "id": "c",
        "text": "Les outils réduisent toujours la gravité"
      },
      {
        "id": "d",
        "text": "Les outils rendent le modèle plus bavard"
      }
    ]
  },
  {
    "id": "qia-q29",
    "prompt": "Une analyse de risque d’un système d’IA doit être révisée à chaque changement de modèle ou d’outil.",
    "skills": [
      "q-adv-risque"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "qia-q30",
    "prompt": "Quel cadre du NIST organise la gestion des risques liés à l’IA ? (sigle)",
    "skills": [
      "q-adv-risque"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "sigle"
  },
  {
    "id": "qia-q31",
    "prompt": "Quels éléments un scénario de risque IA comporte-t-il ?",
    "skills": [
      "q-adv-risque"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "La source de menace"
      },
      {
        "id": "b",
        "text": "Le prix de l’abonnement du fournisseur"
      },
      {
        "id": "c",
        "text": "Les mesures déjà en place"
      },
      {
        "id": "d",
        "text": "L’actif visé"
      }
    ]
  },
  {
    "id": "qia-q32",
    "prompt": "Décrivez les grandes lignes de l’analyse de risque d’un assistant interne qui lit un partage de documents et crée des tickets.",
    "skills": [
      "q-adv-risque"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "qia-q33",
    "prompt": "En quoi consiste l’extraction d’un modèle ?",
    "skills": [
      "q-adv-confidentialite"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Supprimer un modèle du serveur qui l’héberge"
      },
      {
        "id": "b",
        "text": "Compresser un modèle pour gagner de la place"
      },
      {
        "id": "c",
        "text": "Reproduire un modèle via ses réponses"
      },
      {
        "id": "d",
        "text": "Traduire un modèle dans un autre langage"
      }
    ]
  },
  {
    "id": "qia-q34",
    "prompt": "Qu’est-ce que l’inférence d’appartenance ?",
    "skills": [
      "q-adv-confidentialite"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Reproduire le code source complet du modèle"
      },
      {
        "id": "b",
        "text": "Savoir si un enregistrement a servi"
      },
      {
        "id": "c",
        "text": "Classer les utilisateurs par niveau de droits"
      },
      {
        "id": "d",
        "text": "Estimer la vitesse de réponse du modèle"
      }
    ]
  },
  {
    "id": "qia-q35",
    "prompt": "Pourquoi la mémorisation des données d’entraînement est-elle un risque ?",
    "skills": [
      "q-adv-confidentialite"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le modèle peut restituer des secrets"
      },
      {
        "id": "b",
        "text": "Le modèle supprime ses propres poids"
      },
      {
        "id": "c",
        "text": "Le modèle refuse toute nouvelle donnée"
      },
      {
        "id": "d",
        "text": "Le modèle devient plus lent à chaque requête"
      }
    ]
  },
  {
    "id": "qia-q36",
    "prompt": "Quelle mesure limite l’extraction d’un modèle exposé par une API ?",
    "skills": [
      "q-adv-confidentialite"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un accès public sans authentification"
      },
      {
        "id": "b",
        "text": "Un affichage des scores très détaillés"
      },
      {
        "id": "c",
        "text": "La suppression de toute journalisation"
      },
      {
        "id": "d",
        "text": "Une limitation de débit surveillée"
      }
    ]
  },
  {
    "id": "qia-q37",
    "prompt": "Renvoyer des scores détaillés à tous les demandeurs ne facilite jamais l’extraction du modèle.",
    "skills": [
      "q-adv-confidentialite"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "qia-q38",
    "prompt": "Quelles mesures protègent la confidentialité d’un modèle entraîné sur des données sensibles ?",
    "skills": [
      "q-adv-confidentialite"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Le contrôle des accès à l’API"
      },
      {
        "id": "b",
        "text": "Le filtrage des sorties"
      },
      {
        "id": "c",
        "text": "La confidentialité différentielle"
      },
      {
        "id": "d",
        "text": "La publication des données d’entraînement"
      }
    ]
  },
  {
    "id": "qia-q39",
    "prompt": "Quels tests de fuite peut-on mener sur un assistant avant sa mise en production ?",
    "skills": [
      "q-adv-confidentialite"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Vérifier la restitution de données du contexte"
      },
      {
        "id": "b",
        "text": "Publier les résultats avant toute correction"
      },
      {
        "id": "c",
        "text": "Tester la divulgation du prompt système"
      },
      {
        "id": "d",
        "text": "Demander des documents que l’utilisateur ne doit pas voir"
      }
    ]
  },
  {
    "id": "qia-q41",
    "prompt": "Pourquoi répéter chaque essai d’une évaluation adverse plusieurs fois ?",
    "skills": [
      "q-adv-risque"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Pour augmenter artificiellement le nombre de constats présentés dans le rapport final"
      },
      {
        "id": "b",
        "text": "Le comportement varie d’un essai à l’autre : on mesure un taux de réussite, pas un résultat unique"
      },
      {
        "id": "c",
        "text": "Pour épuiser le quota de requêtes dont dispose l’équipe chargée de la défense"
      },
      {
        "id": "d",
        "text": "Parce que le modèle devient plus facile à tromper à chaque essai identique répété"
      }
    ]
  }
];
