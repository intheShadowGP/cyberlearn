// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "code-q1",
    "prompt": "En TypeScript, déclarer `req.body` avec une interface suffit à garantir que les données reçues respectent ce type à l’exécution.",
    "skills": [
      "g-entrees"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "code-q2",
    "prompt": "Quelle approche de validation des entrées est recommandée ?",
    "skills": [
      "g-entrees"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Aucune validation, car le framework s’en charge toujours seul"
      },
      {
        "id": "b",
        "text": "Une liste d’autorisation de ce qui est accepté"
      },
      {
        "id": "c",
        "text": "Une liste de refus énumérant les caractères réputés dangereux"
      },
      {
        "id": "d",
        "text": "Une validation uniquement côté client, dans le navigateur"
      }
    ]
  },
  {
    "id": "code-q3",
    "prompt": "Quelles sources de données franchissent une frontière de confiance et doivent être validées ?",
    "skills": [
      "g-entrees"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Une constante définie dans le code source"
      },
      {
        "id": "b",
        "text": "Un fichier téléversé par un utilisateur"
      },
      {
        "id": "c",
        "text": "La réponse d’une API tierce"
      },
      {
        "id": "d",
        "text": "Le corps d’une requête HTTP"
      }
    ]
  },
  {
    "id": "code-q4",
    "prompt": "Quelle bibliothèque Python, courante avec FastAPI, valide des données par modèles typés ?",
    "skills": [
      "g-entrees"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "nom"
  },
  {
    "id": "code-q5",
    "prompt": "Quelle forme d’appel Python évite l’injection de commandes ?",
    "skills": [
      "g-commandes"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`os.system(\"ping -c 1 \" + hote)`"
      },
      {
        "id": "b",
        "text": "`subprocess.run(f\"ping -c 1 {hote}\", shell=True)`"
      },
      {
        "id": "c",
        "text": "`subprocess.run([\"ping\", \"-c\", \"1\", hote])`"
      },
      {
        "id": "d",
        "text": "`eval(\"ping \" + hote)`"
      }
    ]
  },
  {
    "id": "code-q6",
    "prompt": "Lesquelles de ces fonctions exécutent du code à partir d’une chaîne et sont dangereuses avec une donnée externe ?",
    "skills": [
      "g-commandes"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "`Invoke-Expression` en PowerShell"
      },
      {
        "id": "b",
        "text": "`eval` en JavaScript"
      },
      {
        "id": "c",
        "text": "`exec` en Python"
      },
      {
        "id": "d",
        "text": "`JSON.parse` en JavaScript"
      }
    ]
  },
  {
    "id": "code-q7",
    "prompt": "En Bash, mettre les variables entre guillemets (`\"$fichier\"`) évite qu’un nom contenant des espaces ou des caractères spéciaux soit découpé en plusieurs arguments.",
    "skills": [
      "g-commandes"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "code-q8",
    "prompt": "Une fonction Node.js appelle `exec(`nslookup ${domaine}`)` avec un domaine saisi par l’utilisateur. Expliquez le risque et proposez une correction complète.",
    "skills": [
      "g-commandes",
      "g-entrees"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "code-q9",
    "prompt": "Pourquoi ne faut-il jamais appliquer `pickle.loads` à des données reçues d’un utilisateur ?",
    "skills": [
      "g-serialisation"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le format pickle est trop lent pour traiter des données volumineuses"
      },
      {
        "id": "b",
        "text": "Le format pickle ne gère pas correctement les caractères Unicode"
      },
      {
        "id": "c",
        "text": "Le format pickle chiffre les données et les rend illisibles"
      },
      {
        "id": "d",
        "text": "Le format peut construire des objets arbitraires et exécuter du code"
      }
    ]
  },
  {
    "id": "code-q10",
    "prompt": "Quelle fonction de PyYAML faut-il utiliser pour charger un document YAML non fiable ?",
    "skills": [
      "g-serialisation"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "yaml.…"
  },
  {
    "id": "code-q11",
    "prompt": "Quelles mesures empêchent la pollution de prototype en JavaScript ?",
    "skills": [
      "g-serialisation"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Minifier le code JavaScript avant sa mise en production"
      },
      {
        "id": "b",
        "text": "Valider le JSON reçu par un schéma n’acceptant que les clés prévues"
      },
      {
        "id": "c",
        "text": "Utiliser `Map` ou `Object.create(null)` pour les dictionnaires de clés externes"
      },
      {
        "id": "d",
        "text": "Ignorer les clés `__proto__`, `constructor` et `prototype` lors des fusions"
      }
    ]
  },
  {
    "id": "code-q12",
    "prompt": "En Java, désérialiser avec `ObjectInputStream` un flux reçu du réseau est sûr tant que la classe attendue est vérifiée après lecture.",
    "skills": [
      "g-serialisation"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "code-q13",
    "prompt": "Pourquoi l’expression régulière `^(a+)+$` est-elle dangereuse ?",
    "skills": [
      "g-robustesse"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Ses quantificateurs imbriqués causent un retour arrière exponentiel"
      },
      {
        "id": "b",
        "text": "Elle ne fonctionne qu’avec le moteur d’expressions de Python"
      },
      {
        "id": "c",
        "text": "Elle est trop courte pour valider correctement une entrée complexe"
      },
      {
        "id": "d",
        "text": "Elle accepte les lettres majuscules en plus des lettres minuscules"
      }
    ]
  },
  {
    "id": "code-q14",
    "prompt": "Quel module Python faut-il utiliser pour générer un jeton de réinitialisation de mot de passe ?",
    "skills": [
      "g-robustesse"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`math`"
      },
      {
        "id": "b",
        "text": "`secrets`"
      },
      {
        "id": "c",
        "text": "`random`"
      },
      {
        "id": "d",
        "text": "`datetime`"
      }
    ]
  },
  {
    "id": "code-q15",
    "prompt": "Une API accepte des documents JSON de configuration. Quelles limites imposer pour qu’un document hostile ne puisse pas épuiser les ressources du serveur ? Justifiez chacune.",
    "skills": [
      "g-robustesse",
      "g-entrees"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "code-q16",
    "prompt": "Comparer un jeton secret avec l’opérateur `==` peut divulguer de l’information par le temps de réponse.",
    "skills": [
      "g-robustesse"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "code-q17",
    "prompt": "Qu’apporte une validation par schéma par rapport à de simples annotations de type ?",
    "skills": [
      "g-entrees"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Elle vérifie réellement les données et rejette les invalides"
      },
      {
        "id": "b",
        "text": "Elle remplace entièrement le besoin d’écrire des tests automatisés"
      },
      {
        "id": "c",
        "text": "Elle accélère l’exécution du programme en supprimant des vérifications"
      },
      {
        "id": "d",
        "text": "Elle chiffre les données reçues avant leur traitement par le programme"
      }
    ]
  },
  {
    "id": "code-q18",
    "prompt": "Quelle bibliothèque JavaScript et TypeScript, citée dans ce cours, valide à l’exécution des données selon un schéma ?",
    "skills": [
      "g-entrees"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "nom"
  },
  {
    "id": "code-q19",
    "prompt": "Une donnée validée à l’entrée peut ensuite être concaténée sans précaution dans une requête SQL ou une commande.",
    "skills": [
      "g-entrees"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "code-q20",
    "prompt": "Pourquoi un argument commençant par `-` peut-il rester dangereux même sans shell ?",
    "skills": [
      "g-commandes"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le tiret est toujours supprimé avant l’appel au programme"
      },
      {
        "id": "b",
        "text": "Le tiret désactive la liste d’arguments du programme appelé"
      },
      {
        "id": "c",
        "text": "Le système d’exploitation le convertit automatiquement en commande"
      },
      {
        "id": "d",
        "text": "Le programme appelé peut l’interpréter comme une option"
      }
    ]
  },
  {
    "id": "code-q21",
    "prompt": "Quelle forme Node.js appelle un programme sans passer par un shell ?",
    "skills": [
      "g-commandes"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`exec(\"ping -c 1 \" + hote)`"
      },
      {
        "id": "b",
        "text": "`eval(\"ping \" + hote)`"
      },
      {
        "id": "c",
        "text": "`execFile(\"ping\", [\"-c\", \"1\", hote])`"
      },
      {
        "id": "d",
        "text": "`spawn(\"ping -c 1 \" + hote, { shell: true })`"
      }
    ]
  },
  {
    "id": "code-q22",
    "prompt": "Quelle fonction Python lit en sécurité une valeur littérale (nombre, liste, dictionnaire) provenant d’un fichier, à la place de `eval` ?",
    "skills": [
      "g-commandes"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`exec` sur la chaîne lue"
      },
      {
        "id": "b",
        "text": "`ast.literal_eval`"
      },
      {
        "id": "c",
        "text": "`os.system` avec la valeur"
      },
      {
        "id": "d",
        "text": "`pickle.loads` sur le contenu"
      }
    ]
  },
  {
    "id": "code-q23",
    "prompt": "Quel mécanisme Java (JEP 290) permet de n’autoriser que certaines classes lors d’une désérialisation ? (deux mots)",
    "skills": [
      "g-serialisation"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "deux mots"
  },
  {
    "id": "code-q24",
    "prompt": "Pourquoi valider un JSON par schéma aide-t-il contre la pollution de prototype ?",
    "skills": [
      "g-serialisation"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le schéma supprime tous les objets du prototype du langage"
      },
      {
        "id": "b",
        "text": "Le schéma chiffre les clés des objets avant leur fusion"
      },
      {
        "id": "c",
        "text": "Le schéma remplace le moteur JavaScript par une version sûre"
      },
      {
        "id": "d",
        "text": "Le schéma rejette les clés inattendues comme `__proto__`"
      }
    ]
  },
  {
    "id": "code-q25",
    "prompt": "Quelle mesure limite d’abord le risque d’un ReDoS sur une entrée de longueur libre ?",
    "skills": [
      "g-robustesse"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Limiter la longueur de l’entrée avant d’appliquer l’expression"
      },
      {
        "id": "b",
        "text": "Appliquer plusieurs fois la même expression pour être certain"
      },
      {
        "id": "c",
        "text": "Mettre l’expression régulière en majuscules avant son utilisation"
      },
      {
        "id": "d",
        "text": "Écrire l’expression avec davantage de groupes imbriqués"
      }
    ]
  },
  {
    "id": "code-q26",
    "prompt": "Quel moteur d’expressions régulières, développé par Google, garantit un temps d’exécution linéaire ? (nom)",
    "skills": [
      "g-robustesse"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "nom"
  },
  {
    "id": "code-q27",
    "prompt": "Quelles limites réduisent le risque de déni de service par un document JSON hostile ?",
    "skills": [
      "g-robustesse"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Une profondeur d’imbrication maximale"
      },
      {
        "id": "b",
        "text": "Une taille de document illimitée pour ne rien perdre"
      },
      {
        "id": "c",
        "text": "Une validation reportée après le traitement complet"
      },
      {
        "id": "d",
        "text": "Une taille maximale du corps de la requête"
      }
    ]
  },
  {
    "id": "code-q28",
    "prompt": "Que doit faire un contrôle de sécurité lorsqu’il rencontre une erreur inattendue ?",
    "skills": [
      "g-erreurs-logs"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Ignorer l’erreur et poursuivre le traitement normal"
      },
      {
        "id": "b",
        "text": "Redémarrer le service pour effacer l’état courant"
      },
      {
        "id": "c",
        "text": "Refuser l’accès par défaut et journaliser l’erreur"
      },
      {
        "id": "d",
        "text": "Accorder l’accès pour ne pas bloquer les utilisateurs"
      }
    ]
  },
  {
    "id": "code-q29",
    "prompt": "Que faut-il afficher à l’utilisateur lors d’une erreur interne de l’application ?",
    "skills": [
      "g-erreurs-logs"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "La trace d’appels complète pour aider à signaler le problème"
      },
      {
        "id": "b",
        "text": "Le chemin du fichier de configuration concerné par l’erreur"
      },
      {
        "id": "c",
        "text": "Le texte de la requête SQL qui a échoué et son message d’erreur"
      },
      {
        "id": "d",
        "text": "Un message générique avec un identifiant, détail en journaux"
      }
    ]
  },
  {
    "id": "code-q30",
    "prompt": "Journaliser les mots de passe saisis lors des échecs de connexion est acceptable, car cela aide au diagnostic.",
    "skills": [
      "g-erreurs-logs"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "code-q31",
    "prompt": "Qu’est-ce que l’injection dans les journaux (log forging) ?",
    "skills": [
      "g-erreurs-logs"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Saturer le disque en provoquant une journalisation excessive"
      },
      {
        "id": "b",
        "text": "Chiffrer les journaux avec une clé choisie par l’attaquant"
      },
      {
        "id": "c",
        "text": "Insérer de fausses entrées par retours à la ligne"
      },
      {
        "id": "d",
        "text": "Supprimer les journaux d’un serveur après une intrusion réussie"
      }
    ]
  },
  {
    "id": "code-q32",
    "prompt": "Où peut-on conserver un secret d’application de façon acceptable ?",
    "skills": [
      "g-erreurs-logs"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Dans un fichier hors du dépôt, aux droits restreints"
      },
      {
        "id": "b",
        "text": "Dans le fichier de configuration versionné avec le code"
      },
      {
        "id": "c",
        "text": "Dans un gestionnaire de secrets"
      },
      {
        "id": "d",
        "text": "Dans une variable d’environnement injectée au déploiement"
      }
    ]
  },
  {
    "id": "code-q33",
    "prompt": "Que faire d’une clé d’API commitée par erreur dans un dépôt ?",
    "skills": [
      "g-erreurs-logs"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "La laisser en place si le dépôt est accessible uniquement en interne"
      },
      {
        "id": "b",
        "text": "La révoquer et la remplacer, puis nettoyer l’historique"
      },
      {
        "id": "c",
        "text": "La renommer dans le fichier pour qu’elle ne soit plus reconnue"
      },
      {
        "id": "d",
        "text": "La supprimer du dernier commit et considérer le problème réglé"
      }
    ]
  },
  {
    "id": "code-q34",
    "prompt": "Quel type d’outil détecte les secrets présents dans le code ou l’historique d’un dépôt ? (deux ou trois mots)",
    "skills": [
      "g-erreurs-logs"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "deux ou trois mots"
  },
  {
    "id": "code-q35",
    "prompt": "Comment s’assurer qu’un chemin construit à partir d’un nom externe reste dans le répertoire autorisé ?",
    "skills": [
      "g-fichiers"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Résoudre le chemin réel puis vérifier son préfixe"
      },
      {
        "id": "b",
        "text": "Interdire uniquement le caractère `/` dans le nom reçu"
      },
      {
        "id": "c",
        "text": "Supprimer les occurrences de `../` dans le nom avant de l’utiliser"
      },
      {
        "id": "d",
        "text": "Vérifier seulement que le nom ne dépasse pas une longueur donnée"
      }
    ]
  },
  {
    "id": "code-q36",
    "prompt": "Créer un fichier temporaire au nom prévisible dans un répertoire partagé peut permettre une attaque par lien symbolique.",
    "skills": [
      "g-fichiers"
    ],
    "difficulty": 3,
    "type": "truefalse"
  },
  {
    "id": "code-q37",
    "prompt": "En quoi consiste la faille Zip Slip ?",
    "skills": [
      "g-fichiers"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Une archive se décompresse en une taille démesurée et épuise la mémoire"
      },
      {
        "id": "b",
        "text": "Une archive contient plusieurs fois le même fichier sous des noms différents"
      },
      {
        "id": "c",
        "text": "Une archive est chiffrée avec un mot de passe trop faible pour être sûre"
      },
      {
        "id": "d",
        "text": "Une archive aux chemins relatifs qui écrivent hors du dossier"
      }
    ]
  },
  {
    "id": "code-q38",
    "prompt": "Pourquoi tester l’existence d’un fichier puis l’ouvrir est-il risqué ?",
    "skills": [
      "g-fichiers"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "L’ouverture échoue toujours si le fichier a déjà été testé"
      },
      {
        "id": "b",
        "text": "Le système d’exploitation interdit les deux opérations successives"
      },
      {
        "id": "c",
        "text": "Entre les deux, le fichier peut être remplacé"
      },
      {
        "id": "d",
        "text": "La vérification d’existence modifie les droits du fichier concerné"
      }
    ]
  },
  {
    "id": "code-q39",
    "prompt": "Quelles pratiques sécurisent l’usage de fichiers temporaires ?",
    "skills": [
      "g-fichiers"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Utiliser les fonctions dédiées (`mkstemp`, `NamedTemporaryFile`)"
      },
      {
        "id": "b",
        "text": "Choisir un nom fixe et facile à retrouver dans `/tmp`"
      },
      {
        "id": "c",
        "text": "Créer le fichier avec des droits restreints (`0600`)"
      },
      {
        "id": "d",
        "text": "Supprimer le fichier dès qu’il n’est plus utile"
      }
    ]
  },
  {
    "id": "code-q40",
    "prompt": "Un service extrait des archives téléversées par les utilisateurs. Décrivez les risques et les contrôles à mettre en œuvre.",
    "skills": [
      "g-fichiers",
      "g-robustesse"
    ],
    "difficulty": 3,
    "type": "open"
  }
];
