// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "fpc-q1",
    "prompt": "Quelles sont les trois choses distinctes qu’un système de fichiers conserve pour chaque fichier ?",
    "skills": [
      "a-fs"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le contenu, la couleur et la taille"
      },
      {
        "id": "b",
        "text": "Le nom, les métadonnées et le contenu"
      },
      {
        "id": "c",
        "text": "Le nom, le processeur et la mémoire"
      },
      {
        "id": "d",
        "text": "Le nom, l’adresse IP et le contenu"
      }
    ]
  },
  {
    "id": "fpc-q2",
    "prompt": "Qu’est-ce qu’un chemin absolu ?",
    "skills": [
      "a-fs"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un chemin qui part de la racine du système de fichiers"
      },
      {
        "id": "b",
        "text": "Un chemin qui part du répertoire courant de l’utilisateur"
      },
      {
        "id": "c",
        "text": "Un chemin qui ne contient que des chiffres et des points"
      },
      {
        "id": "d",
        "text": "Un chemin qui désigne un fichier situé sur un site distant"
      }
    ]
  },
  {
    "id": "fpc-q3",
    "prompt": "L’extension d’un fichier garantit toujours son type réel.",
    "skills": [
      "a-fs"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "fpc-q4",
    "prompt": "Comment appelle-t-on un chemin qui part du répertoire courant, par exemple `../rapport.txt` ? (deux mots)",
    "skills": [
      "a-fs"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "chemin …"
  },
  {
    "id": "fpc-q17",
    "prompt": "Un site enregistre les fichiers téléversés dans `/var/www/uploads/` en ajoutant le nom fourni par l’utilisateur. Quel nom permet de sortir de ce dossier ?",
    "skills": [
      "a-fs",
      "a-prog"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "photo-vacances.jpg"
      },
      {
        "id": "b",
        "text": "sous-dossier/notes.txt"
      },
      {
        "id": "c",
        "text": "rapport-annuel-2024.pdf"
      },
      {
        "id": "d",
        "text": "../../etc/passwd"
      }
    ]
  },
  {
    "id": "fpc-q18",
    "prompt": "Qu’est-ce qu’un lien symbolique ?",
    "skills": [
      "a-fs"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un raccourci qui fonctionne uniquement dans le navigateur"
      },
      {
        "id": "b",
        "text": "Un fichier compressé avec un mot de passe"
      },
      {
        "id": "c",
        "text": "Un fichier qui contient le chemin d’un autre fichier"
      },
      {
        "id": "d",
        "text": "Une copie complète d’un fichier dans un autre dossier"
      }
    ]
  },
  {
    "id": "fpc-q19",
    "prompt": "Quels éléments font partie des métadonnées d’un fichier ?",
    "skills": [
      "a-fs"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Les dates de création et de modification"
      },
      {
        "id": "b",
        "text": "Les droits d’accès"
      },
      {
        "id": "c",
        "text": "Les octets qui composent une image"
      },
      {
        "id": "d",
        "text": "Le texte contenu dans le document"
      },
      {
        "id": "e",
        "text": "Le propriétaire du fichier"
      }
    ]
  },
  {
    "id": "fpc-q20",
    "prompt": "Renommer un fichier ne modifie pas son contenu.",
    "skills": [
      "a-fs"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "fpc-q21",
    "prompt": "Un collègue a reçu un fichier « facture.pdf.exe » et hésite à l’ouvrir. Expliquez ce que vous lui dites, et comment vous vérifieriez de quoi il s’agit.",
    "skills": [
      "a-fs",
      "a-build"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "fpc-q7",
    "prompt": "Qu’est-ce que le code source ?",
    "skills": [
      "a-build"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le câble qui relie l’ordinateur au réseau local de l’entreprise"
      },
      {
        "id": "b",
        "text": "Le fichier binaire que le processeur exécute directement"
      },
      {
        "id": "c",
        "text": "Le courant électrique qui alimente le processeur de la machine"
      },
      {
        "id": "d",
        "text": "Le texte lisible par un humain, écrit dans un langage de programmation"
      }
    ]
  },
  {
    "id": "fpc-q5",
    "prompt": "Quelle est la différence entre compilation et interprétation ?",
    "skills": [
      "a-build"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "La compilation traduit tout le code une fois, l’interprétation lit le code à chaque lancement"
      },
      {
        "id": "b",
        "text": "La compilation s’exécute toujours sur un serveur distant, l’interprétation sur le poste"
      },
      {
        "id": "c",
        "text": "Il n’y a aucune différence, les deux mots désignent la même opération"
      },
      {
        "id": "d",
        "text": "La compilation concerne les textes, l’interprétation concerne les images et les vidéos"
      }
    ]
  },
  {
    "id": "fpc-q22",
    "prompt": "Lequel de ces langages est habituellement compilé en code machine ?",
    "skills": [
      "a-build"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "PHP"
      },
      {
        "id": "b",
        "text": "Ruby"
      },
      {
        "id": "c",
        "text": "Rust"
      },
      {
        "id": "d",
        "text": "Python"
      }
    ]
  },
  {
    "id": "fpc-q6",
    "prompt": "Quelles affirmations sur les dépendances d’un logiciel sont exactes ?",
    "skills": [
      "a-build"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Elles n’existent que dans les langages compilés"
      },
      {
        "id": "b",
        "text": "Elles ne font pas partie du logiciel livré"
      },
      {
        "id": "c",
        "text": "Ce sont des bibliothèques externes réutilisées par le programme"
      },
      {
        "id": "d",
        "text": "Une dépendance vulnérable peut rendre l’application vulnérable"
      },
      {
        "id": "e",
        "text": "Il faut en tenir l’inventaire et les mettre à jour"
      }
    ]
  },
  {
    "id": "fpc-q23",
    "prompt": "Un programme Java est compilé en bytecode puis exécuté par une machine virtuelle. De quelle approche s’agit-il ?",
    "skills": [
      "a-build"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Une pure interprétation sans aucune compilation préalable"
      },
      {
        "id": "b",
        "text": "Une approche intermédiaire qui combine compilation et exécution gérée"
      },
      {
        "id": "c",
        "text": "Une exécution réalisée uniquement par le noyau du système"
      },
      {
        "id": "d",
        "text": "Une compilation directe en code machine, sans machine virtuelle"
      }
    ]
  },
  {
    "id": "fpc-q24",
    "prompt": "Les dépendances d’un logiciel ne font pas partie de sa surface de sécurité.",
    "skills": [
      "a-build"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "fpc-q25",
    "prompt": "Pourquoi un éditeur publie-t-il l’empreinte (hash) de son logiciel à côté du téléchargement ?",
    "skills": [
      "a-build"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Pour chiffrer le fichier et le rendre illisible aux tiers"
      },
      {
        "id": "b",
        "text": "Pour permettre de vérifier que le fichier n’a pas été altéré"
      },
      {
        "id": "c",
        "text": "Pour indiquer la version du langage utilisé pour le programme"
      },
      {
        "id": "d",
        "text": "Pour accélérer le téléchargement du fichier sur les connexions lentes"
      }
    ]
  },
  {
    "id": "fpc-q26",
    "prompt": "Comment appelle-t-on les bibliothèques externes qu’un programme réutilise au lieu de tout réécrire ? (un mot)",
    "skills": [
      "a-build"
    ],
    "difficulty": 2,
    "type": "short"
  },
  {
    "id": "fpc-q27",
    "prompt": "Un attaquant publie une version piégée d’une bibliothèque très utilisée, qui est installée par des milliers d’applications. Quelle notion décrit cette attaque ?",
    "skills": [
      "a-build",
      "a-archi-log"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Une attaque sur la chaîne d’approvisionnement logicielle"
      },
      {
        "id": "b",
        "text": "Un hameçonnage ciblé par courrier"
      },
      {
        "id": "c",
        "text": "Une attaque par force brute sur un mot de passe"
      },
      {
        "id": "d",
        "text": "Un déni de service distribué sur un site"
      }
    ]
  },
  {
    "id": "fpc-q8",
    "prompt": "Dans le modèle client-serveur, qui traite les requêtes et renvoie les réponses ?",
    "skills": [
      "a-archi-log"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le câble réseau"
      },
      {
        "id": "b",
        "text": "L’utilisateur lui-même"
      },
      {
        "id": "c",
        "text": "Le client"
      },
      {
        "id": "d",
        "text": "Le serveur"
      }
    ]
  },
  {
    "id": "fpc-q9",
    "prompt": "Un contrôle de sécurité effectué uniquement côté client (dans le navigateur) suffit à se protéger.",
    "skills": [
      "a-archi-log"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "fpc-q10",
    "prompt": "Comment appelle-t-on la limite entre une zone maîtrisée et une zone non fiable, par exemple entre le navigateur et le serveur ? (trois mots)",
    "skills": [
      "a-archi-log"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "frontière de …"
  },
  {
    "id": "fpc-q28",
    "prompt": "Dans une application en trois couches (présentation, logique métier, accès aux données), quelle couche dialogue avec la base de données ?",
    "skills": [
      "a-archi-log"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le navigateur de l’utilisateur"
      },
      {
        "id": "b",
        "text": "Le réseau local de l’entreprise"
      },
      {
        "id": "c",
        "text": "La couche d’accès aux données"
      },
      {
        "id": "d",
        "text": "La couche de présentation"
      }
    ]
  },
  {
    "id": "fpc-q29",
    "prompt": "Le navigateur envoie au serveur un panier avec le prix « 1 € » au lieu de « 100 € » (valeur modifiée avant l’envoi). Que doit faire le serveur ?",
    "skills": [
      "a-archi-log",
      "a-prog"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Demander au navigateur de recalculer le prix lui-même"
      },
      {
        "id": "b",
        "text": "Faire confiance au prix envoyé par le navigateur du client"
      },
      {
        "id": "c",
        "text": "Recalculer le prix à partir de sa propre base de données"
      },
      {
        "id": "d",
        "text": "Masquer le prix dans le formulaire HTML de la page"
      }
    ]
  },
  {
    "id": "fpc-q30",
    "prompt": "Qu’est-ce qu’une API ?",
    "skills": [
      "a-archi-log"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un type de virus qui se propage par les pièces jointes"
      },
      {
        "id": "b",
        "text": "Une interface par laquelle un composant offre ses fonctions à d’autres"
      },
      {
        "id": "c",
        "text": "Un langage de programmation réservé aux navigateurs web"
      },
      {
        "id": "d",
        "text": "Un composant matériel qui accélère les calculs graphiques"
      }
    ]
  },
  {
    "id": "fpc-q31",
    "prompt": "Quels éléments font partie de la surface d’attaque d’une application web ?",
    "skills": [
      "a-archi-log"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Le fond d’écran du poste du développeur"
      },
      {
        "id": "b",
        "text": "Une API accessible depuis l’extérieur"
      },
      {
        "id": "c",
        "text": "Un formulaire de connexion exposé sur Internet"
      },
      {
        "id": "d",
        "text": "La couleur de la barre de navigation"
      },
      {
        "id": "e",
        "text": "Un port ouvert sur le serveur"
      }
    ]
  },
  {
    "id": "fpc-q11",
    "prompt": "Expliquez avec vos mots pourquoi « ne pas faire confiance à ce qui vient du client » est une règle centrale, et donnez un exemple.",
    "skills": [
      "a-archi-log",
      "a-build"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "fpc-q32",
    "prompt": "Dans une architecture en services, les échanges entre services passent par le réseau, ce qui ajoute des points d’échange à protéger.",
    "skills": [
      "a-archi-log"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "fpc-q12",
    "prompt": "À quoi sert une boucle dans un programme ?",
    "skills": [
      "a-prog"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "À répéter des instructions"
      },
      {
        "id": "b",
        "text": "À chiffrer le contenu d’un fichier"
      },
      {
        "id": "c",
        "text": "À éteindre proprement la machine"
      },
      {
        "id": "d",
        "text": "À stocker une seule valeur nommée"
      }
    ]
  },
  {
    "id": "fpc-q13",
    "prompt": "Quelles affirmations sur les notions de programmation sont exactes ?",
    "skills": [
      "a-prog"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Une condition répète indéfiniment un bloc d’instructions"
      },
      {
        "id": "b",
        "text": "Un dictionnaire associe une clé à une valeur"
      },
      {
        "id": "c",
        "text": "Une liste est une suite ordonnée de valeurs"
      },
      {
        "id": "d",
        "text": "Une boucle sert à chiffrer un fichier"
      },
      {
        "id": "e",
        "text": "Une variable est une valeur nommée que l’on peut lire et modifier"
      }
    ]
  },
  {
    "id": "fpc-q33",
    "prompt": "Avec la fonction fournie avec la question, quel prix paie un adhérent pour un article à 200 ?",
    "skills": [
      "a-prog"
    ],
    "difficulty": 2,
    "context": {
      "lang": "text",
      "code": "fonction remise(prix, est_adherent):\n    r = 0\n    si prix > 100 alors\n        r = 10\n    si est_adherent alors\n        r = r + 5\n    rendre prix - (prix * r / 100)"
    },
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "190"
      },
      {
        "id": "b",
        "text": "180"
      },
      {
        "id": "c",
        "text": "200"
      },
      {
        "id": "d",
        "text": "170"
      }
    ]
  },
  {
    "id": "fpc-q34",
    "prompt": "Quelle structure de données associe une clé à une valeur ?",
    "skills": [
      "a-prog"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Une boucle"
      },
      {
        "id": "b",
        "text": "Une condition"
      },
      {
        "id": "c",
        "text": "Une liste"
      },
      {
        "id": "d",
        "text": "Un dictionnaire"
      }
    ]
  },
  {
    "id": "fpc-q35",
    "prompt": "Une saisie utilisateur insérée telle quelle dans une commande peut permettre à un attaquant d’exécuter d’autres commandes.",
    "skills": [
      "a-prog"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "fpc-q36",
    "prompt": "Si l’utilisateur saisit « exemple.org ; cat /etc/passwd » dans le programme fourni avec la question, quel est le risque ?",
    "skills": [
      "a-prog"
    ],
    "difficulty": 2,
    "context": {
      "lang": "text",
      "code": "nom = lire_saisie()\nexecuter(\"ping \" + nom)"
    },
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un dépassement de quota disque"
      },
      {
        "id": "b",
        "text": "Une injection de commandes"
      },
      {
        "id": "c",
        "text": "Un débordement de la pile mémoire"
      },
      {
        "id": "d",
        "text": "Une perte de paquets réseau"
      }
    ]
  },
  {
    "id": "fpc-q37",
    "prompt": "Comment appelle-t-on un bloc d’instructions réutilisable qui reçoit des paramètres et rend un résultat ? (un mot)",
    "skills": [
      "a-prog"
    ],
    "difficulty": 2,
    "type": "short"
  },
  {
    "id": "fpc-q38",
    "prompt": "Dans le programme fourni avec la question, repérez la donnée non fiable, expliquez le risque et proposez un correctif.",
    "skills": [
      "a-prog",
      "a-archi-log"
    ],
    "difficulty": 3,
    "context": {
      "lang": "text",
      "code": "nom_fichier = requete.parametre(\"fichier\")\nchemin = \"/var/www/docs/\" + nom_fichier\nafficher(lire(chemin))"
    },
    "type": "open"
  },
  {
    "id": "fpc-q39",
    "prompt": "Quel est le rôle d’un shell ?",
    "skills": [
      "a-cli"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Afficher les pages web demandées par le navigateur"
      },
      {
        "id": "b",
        "text": "Gérer l’alimentation et la veille de la machine"
      },
      {
        "id": "c",
        "text": "Interpréter les commandes saisies et les exécuter"
      },
      {
        "id": "d",
        "text": "Chiffrer l’ensemble des fichiers du disque"
      }
    ]
  },
  {
    "id": "fpc-q14",
    "prompt": "La ligne de commande permet d’effectuer des actions de façon précise et reproductible.",
    "skills": [
      "a-cli"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "fpc-q15",
    "prompt": "Comment appelle-t-on le programme qui interprète les commandes tapées, comme Bash ou PowerShell ? (un mot)",
    "skills": [
      "a-cli"
    ],
    "difficulty": 1,
    "type": "short"
  },
  {
    "id": "fpc-q40",
    "prompt": "Que fait la commande `cat journal.log | grep \"Failed\" | wc -l` ?",
    "skills": [
      "a-cli"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Elle compte les lignes du journal qui contiennent « Failed »"
      },
      {
        "id": "b",
        "text": "Elle copie le journal dans un fichier nommé « Failed »"
      },
      {
        "id": "c",
        "text": "Elle affiche la taille du fichier journal en octets"
      },
      {
        "id": "d",
        "text": "Elle supprime du journal toutes les lignes contenant « Failed »"
      }
    ]
  },
  {
    "id": "fpc-q41",
    "prompt": "Quels avantages la ligne de commande offre-t-elle en administration ?",
    "skills": [
      "a-cli",
      "a-fs"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Les actions sont explicites et reproductibles"
      },
      {
        "id": "b",
        "text": "On peut les automatiser par des scripts"
      },
      {
        "id": "c",
        "text": "Elle empêche toute erreur de manipulation"
      },
      {
        "id": "d",
        "text": "Elle fonctionne uniquement sur un poste local"
      }
    ]
  }
];
