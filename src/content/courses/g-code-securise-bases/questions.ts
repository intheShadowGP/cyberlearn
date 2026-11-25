// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "cbs-q1",
    "prompt": "Quelle est la différence entre un bogue et une vulnérabilité ?",
    "skills": [
      "g-base-pourquoi"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Les deux désignent exactement le même type de défaut"
      },
      {
        "id": "b",
        "text": "Un défaut qu’un attaquant peut exploiter"
      },
      {
        "id": "c",
        "text": "Une vulnérabilité ne concerne que les programmes en C"
      },
      {
        "id": "d",
        "text": "Un bogue est toujours plus grave qu’une vulnérabilité"
      }
    ]
  },
  {
    "id": "cbs-q2",
    "prompt": "Pourquoi corriger une faille tôt dans le développement coûte-t-il moins cher ?",
    "skills": [
      "g-base-pourquoi"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Les outils de correction sont gratuits pendant la conception"
      },
      {
        "id": "b",
        "text": "Les utilisateurs acceptent mieux les failles corrigées tard"
      },
      {
        "id": "c",
        "text": "Il y a moins de code à modifier et aucune donnée exposée"
      },
      {
        "id": "d",
        "text": "Les failles se corrigent toutes seules avec le temps qui passe"
      }
    ]
  },
  {
    "id": "cbs-q3",
    "prompt": "Intégrer la sécurité dès la conception est plus efficace que de l’ajouter à la fin du projet.",
    "skills": [
      "g-base-pourquoi"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "cbs-q4",
    "prompt": "Comment appelle-t-on l’idée de déplacer les contrôles de sécurité vers les premières étapes du développement ? (deux mots)",
    "skills": [
      "g-base-pourquoi"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "deux mots"
  },
  {
    "id": "cbs-q5",
    "prompt": "Quel principe consiste à ne donner à un programme que les droits dont il a besoin ?",
    "skills": [
      "g-base-pourquoi"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le moindre privilège"
      },
      {
        "id": "b",
        "text": "Le chiffrement systématique"
      },
      {
        "id": "c",
        "text": "La défense par l’obscurité"
      },
      {
        "id": "d",
        "text": "La journalisation complète"
      }
    ]
  },
  {
    "id": "cbs-q6",
    "prompt": "À quelles étapes d’un projet peut-on intégrer des contrôles de sécurité ?",
    "skills": [
      "g-base-pourquoi"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Seulement l’exploitation, une fois en production"
      },
      {
        "id": "b",
        "text": "L’écriture du code"
      },
      {
        "id": "c",
        "text": "Les tests"
      },
      {
        "id": "d",
        "text": "La conception"
      }
    ]
  },
  {
    "id": "cbs-q7",
    "prompt": "Un programme qui fonctionne correctement lors des tests est forcément sûr.",
    "skills": [
      "g-base-pourquoi"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "cbs-q8",
    "prompt": "Que signifie valider une entrée ?",
    "skills": [
      "g-base-entrees"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "La recopier telle quelle dans le fichier de journal"
      },
      {
        "id": "b",
        "text": "La chiffrer pour qu’elle ne soit pas lue en chemin"
      },
      {
        "id": "c",
        "text": "La convertir en majuscules avant tout traitement"
      },
      {
        "id": "d",
        "text": "Vérifier type, format et limites avant usage"
      }
    ]
  },
  {
    "id": "cbs-q9",
    "prompt": "Quelle approche de validation est recommandée ?",
    "skills": [
      "g-base-entrees"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Une liste d’autorisation de ce qui est accepté"
      },
      {
        "id": "b",
        "text": "Une confiance totale dans les formulaires du site"
      },
      {
        "id": "c",
        "text": "Une liste de refus des mots dangereux connus"
      },
      {
        "id": "d",
        "text": "Une vérification seulement lors du premier usage"
      }
    ]
  },
  {
    "id": "cbs-q10",
    "prompt": "Il suffit de valider un formulaire dans le navigateur de l’utilisateur pour être protégé.",
    "skills": [
      "g-base-entrees"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "cbs-q11",
    "prompt": "Comment éviter une injection SQL dans un programme Python ?",
    "skills": [
      "g-base-entrees"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Construire la requête avec une f-string puis la tester"
      },
      {
        "id": "b",
        "text": "Remplacer les apostrophes de la saisie par des espaces"
      },
      {
        "id": "c",
        "text": "Convertir la saisie en majuscules avant de l’insérer"
      },
      {
        "id": "d",
        "text": "Transmettre les valeurs comme paramètres de la requête"
      }
    ]
  },
  {
    "id": "cbs-q12",
    "prompt": "Quelle fonction Python convertit une saisie en entier et lève une erreur si elle n’est pas un nombre ?",
    "skills": [
      "g-base-entrees"
    ],
    "difficulty": 1,
    "type": "short",
    "placeholder": "nom"
  },
  {
    "id": "cbs-q13",
    "prompt": "Que vérifier sur une saisie d’âge dans un formulaire ?",
    "skills": [
      "g-base-entrees"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Qu’elle est bien un nombre entier"
      },
      {
        "id": "b",
        "text": "Qu’elle contient au moins un caractère spécial"
      },
      {
        "id": "c",
        "text": "Qu’elle n’est pas vide"
      },
      {
        "id": "d",
        "text": "Qu’elle est dans une plage raisonnable"
      }
    ]
  },
  {
    "id": "cbs-q14",
    "prompt": "Que faire avant d’afficher dans une page web un texte saisi par un utilisateur ?",
    "skills": [
      "g-base-entrees"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le convertir en nombre pour éviter toute ambiguïté"
      },
      {
        "id": "b",
        "text": "Le copier dans un fichier pour le conserver tel quel"
      },
      {
        "id": "c",
        "text": "Encoder les caractères spéciaux à l’affichage"
      },
      {
        "id": "d",
        "text": "Le transmettre au navigateur sans aucune transformation"
      }
    ]
  },
  {
    "id": "cbs-q15",
    "prompt": "Où ne faut-il jamais écrire le mot de passe d’une base de données ?",
    "skills": [
      "g-base-secrets"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Dans un fichier local ignoré par Git"
      },
      {
        "id": "b",
        "text": "En clair dans le code source versionné"
      },
      {
        "id": "c",
        "text": "Dans un gestionnaire de secrets dédié"
      },
      {
        "id": "d",
        "text": "Dans une variable d’environnement du serveur"
      }
    ]
  },
  {
    "id": "cbs-q16",
    "prompt": "Supprimer un mot de passe du dernier commit suffit à le protéger, même s’il figurait dans les commits précédents.",
    "skills": [
      "g-base-secrets"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "cbs-q17",
    "prompt": "Quelle bonne pratique permet de fournir un secret à un programme ?",
    "skills": [
      "g-base-secrets"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un argument visible dans la commande du programme"
      },
      {
        "id": "b",
        "text": "Un message envoyé par courriel à toute l’équipe"
      },
      {
        "id": "c",
        "text": "Un commentaire explicatif en tête du fichier de code"
      },
      {
        "id": "d",
        "text": "Une variable d’environnement ou un coffre de secrets"
      }
    ]
  },
  {
    "id": "cbs-q18",
    "prompt": "Quel fichier liste ce que Git doit ignorer, par exemple un fichier local de secrets ? (nom)",
    "skills": [
      "g-base-secrets"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "nom du fichier"
  },
  {
    "id": "cbs-q19",
    "prompt": "Que doit afficher une application en cas d’erreur interne ?",
    "skills": [
      "g-base-secrets"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un message général, avec le détail dans les journaux"
      },
      {
        "id": "b",
        "text": "Le mot de passe utilisé lors de la connexion"
      },
      {
        "id": "c",
        "text": "Le texte de la requête SQL qui a échoué"
      },
      {
        "id": "d",
        "text": "La trace complète de l’erreur pour aider au signalement"
      }
    ]
  },
  {
    "id": "cbs-q20",
    "prompt": "Qu’est-ce qui ne doit jamais être écrit dans les journaux d’une application ?",
    "skills": [
      "g-base-secrets"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Les jetons de session"
      },
      {
        "id": "b",
        "text": "Les mots de passe"
      },
      {
        "id": "c",
        "text": "L’heure à laquelle l’événement s’est produit"
      },
      {
        "id": "d",
        "text": "Les numéros de carte bancaire"
      }
    ]
  },
  {
    "id": "cbs-q21",
    "prompt": "Comment stocker les mots de passe des utilisateurs d’un site ?",
    "skills": [
      "g-base-secrets"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Chiffrés avec une clé conservée dans la même base"
      },
      {
        "id": "b",
        "text": "Encodés en Base64 dans la base de données du site"
      },
      {
        "id": "c",
        "text": "Sous forme d’empreintes lentes et salées"
      },
      {
        "id": "d",
        "text": "En clair, pour pouvoir les renvoyer en cas d’oubli"
      }
    ]
  },
  {
    "id": "cbs-q22",
    "prompt": "Qu’est-ce qu’une dépendance logicielle ?",
    "skills": [
      "g-base-dependances"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un programme qui ne peut pas démarrer sans connexion Internet"
      },
      {
        "id": "b",
        "text": "Une bibliothèque tierce nécessaire au programme"
      },
      {
        "id": "c",
        "text": "Un utilisateur qui dépend du programme pour son travail"
      },
      {
        "id": "d",
        "text": "Un fichier de configuration lu au lancement du programme"
      }
    ]
  },
  {
    "id": "cbs-q23",
    "prompt": "Une bibliothèque tierce peut contenir des vulnérabilités qui affectent l’application qui l’utilise.",
    "skills": [
      "g-base-dependances"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "cbs-q24",
    "prompt": "Pourquoi appliquer régulièrement les mises à jour de sécurité des dépendances ?",
    "skills": [
      "g-base-dependances"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Pour que le programme démarre plus vite"
      },
      {
        "id": "b",
        "text": "Pour corriger des failles connues"
      },
      {
        "id": "c",
        "text": "Pour éviter d’écrire des tests automatisés"
      },
      {
        "id": "d",
        "text": "Pour réduire la taille des fichiers du projet"
      }
    ]
  },
  {
    "id": "cbs-q25",
    "prompt": "À quoi sert un fichier de verrouillage des versions (lockfile) ?",
    "skills": [
      "g-base-dependances"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "À chiffrer les bibliothèques installées sur le poste"
      },
      {
        "id": "b",
        "text": "À empêcher toute mise à jour future des bibliothèques"
      },
      {
        "id": "c",
        "text": "À fixer les versions exactes installées"
      },
      {
        "id": "d",
        "text": "À supprimer les dépendances que personne ne regarde"
      }
    ]
  },
  {
    "id": "cbs-q26",
    "prompt": "Quel sigle désigne l’analyse des composants tiers d’un projet pour y repérer les failles connues ? (sigle)",
    "skills": [
      "g-base-dependances"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "sigle"
  },
  {
    "id": "cbs-q27",
    "prompt": "Avant d’ajouter une bibliothèque à un projet, que vérifier ?",
    "skills": [
      "g-base-dependances"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Son éditeur et sa réputation"
      },
      {
        "id": "b",
        "text": "Son entretien récent et ses mises à jour"
      },
      {
        "id": "c",
        "text": "Sa popularité seule, sans autre vérification"
      },
      {
        "id": "d",
        "text": "Le nom exact du paquet à installer"
      }
    ]
  },
  {
    "id": "cbs-q28",
    "prompt": "Que risque-t-on en installant `reqeusts` à la place de `requests` ?",
    "skills": [
      "g-base-dependances"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Installer un paquet malveillant au nom presque identique"
      },
      {
        "id": "b",
        "text": "Obtenir une version plus récente de la même bibliothèque"
      },
      {
        "id": "c",
        "text": "Perdre toutes les autres bibliothèques déjà installées"
      },
      {
        "id": "d",
        "text": "Rien, car Python corrige automatiquement les fautes"
      }
    ]
  },
  {
    "id": "cbs-q29",
    "prompt": "À quoi sert une revue de code ?",
    "skills": [
      "g-base-revue"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "À supprimer automatiquement le code que personne n’utilise"
      },
      {
        "id": "b",
        "text": "À traduire le code d’un langage vers un autre langage"
      },
      {
        "id": "c",
        "text": "À mesurer le nombre de lignes écrites par chaque développeur"
      },
      {
        "id": "d",
        "text": "À faire relire le code par une autre personne"
      }
    ]
  },
  {
    "id": "cbs-q30",
    "prompt": "Les tests unitaires n’ont pas à vérifier le comportement du code face à des entrées invalides.",
    "skills": [
      "g-base-revue"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "cbs-q31",
    "prompt": "Que fait un outil d’analyse statique de code ?",
    "skills": [
      "g-base-revue"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Il exécute le programme en simulant des milliers d’utilisateurs"
      },
      {
        "id": "b",
        "text": "Il surveille le trafic réseau du programme en production"
      },
      {
        "id": "c",
        "text": "Il examine le code sans l’exécuter"
      },
      {
        "id": "d",
        "text": "Il corrige tout seul chacune des erreurs qu’il découvre"
      }
    ]
  },
  {
    "id": "cbs-q32",
    "prompt": "Quel outil analyse du code Python à la recherche de problèmes de sécurité courants ? (nom)",
    "skills": [
      "g-base-revue"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "nom"
  },
  {
    "id": "cbs-q33",
    "prompt": "Quels contrôles est-il utile d’exécuter à chaque modification du code ?",
    "skills": [
      "g-base-revue"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Une revue par une autre personne"
      },
      {
        "id": "b",
        "text": "Une mise en production sans aucun contrôle"
      },
      {
        "id": "c",
        "text": "Les tests automatisés"
      },
      {
        "id": "d",
        "text": "L’analyse statique"
      }
    ]
  },
  {
    "id": "cbs-q34",
    "prompt": "Pourquoi utiliser un système de gestion de versions comme Git ?",
    "skills": [
      "g-base-revue"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Pour garder l’historique et revenir en arrière"
      },
      {
        "id": "b",
        "text": "Pour remplacer les tests automatisés du projet"
      },
      {
        "id": "c",
        "text": "Pour rendre le code illisible par les personnes extérieures"
      },
      {
        "id": "d",
        "text": "Pour accélérer l’exécution du programme sur les serveurs"
      }
    ]
  },
  {
    "id": "cbs-q35",
    "prompt": "Pourquoi ne faut-il pas inventer son propre algorithme de chiffrement ?",
    "skills": [
      "g-base-habitudes"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Les algorithmes personnels sont interdits par la loi dans tous les pays"
      },
      {
        "id": "b",
        "text": "Les algorithmes éprouvés ont été attaqués des années"
      },
      {
        "id": "c",
        "text": "Les algorithmes éprouvés sont toujours plus rapides qu’un algorithme maison"
      },
      {
        "id": "d",
        "text": "Les langages de programmation refusent les algorithmes personnels"
      }
    ]
  },
  {
    "id": "cbs-q36",
    "prompt": "Un code simple est plus facile à relire et à sécuriser qu’un code compliqué.",
    "skills": [
      "g-base-habitudes"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "cbs-q37",
    "prompt": "Où se renseigner sur les erreurs de sécurité les plus courantes en développement ?",
    "skills": [
      "g-base-habitudes"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Dans les journaux d’erreurs du serveur de production"
      },
      {
        "id": "b",
        "text": "Dans les commentaires laissés par les autres développeurs du projet"
      },
      {
        "id": "c",
        "text": "Dans les messages de commit les plus récents du dépôt"
      },
      {
        "id": "d",
        "text": "Dans le Top 10 de l’OWASP et les guides de bonnes pratiques"
      }
    ]
  },
  {
    "id": "cbs-q38",
    "prompt": "Lesquelles de ces pratiques sont responsables ?",
    "skills": [
      "g-base-habitudes"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Tester son code sur son propre ordinateur ou une application d’entraînement"
      },
      {
        "id": "b",
        "text": "Tester le site d’un tiers sans demander l’autorisation"
      },
      {
        "id": "c",
        "text": "Copier sans la lire une solution trouvée sur Internet"
      },
      {
        "id": "d",
        "text": "Signaler au responsable une faille trouvée par hasard"
      }
    ]
  },
  {
    "id": "cbs-q39",
    "prompt": "Vous écrivez un petit script Python qui lit un nom saisi par l’utilisateur et interroge une base de données. Quelles bonnes pratiques de sécurité appliquez-vous, et pourquoi ?",
    "skills": [
      "g-base-habitudes",
      "g-base-entrees"
    ],
    "difficulty": 2,
    "type": "open"
  },
  {
    "id": "cbs-q40",
    "prompt": "Expliquez à une personne qui débute pourquoi il ne faut pas copier-coller du code trouvé sur Internet sans le comprendre, et comment procéder en sécurité.",
    "skills": [
      "g-base-habitudes",
      "g-base-dependances"
    ],
    "difficulty": 3,
    "type": "open"
  }
];
