// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "pva-q1",
    "prompt": "Que remplace l’exécution symbolique dans l’analyse d’un programme ?",
    "skills": [
      "p-av-symbolique"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Les fonctions par des commentaires du code"
      },
      {
        "id": "b",
        "text": "Les tests par des journaux d’exécution"
      },
      {
        "id": "c",
        "text": "Les entrées concrètes par des symboles"
      },
      {
        "id": "d",
        "text": "Les variables par des constantes fixes"
      }
    ]
  },
  {
    "id": "pva-q2",
    "prompt": "Que collecte l’exécution symbolique le long d’un chemin du programme ?",
    "skills": [
      "p-av-symbolique"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Les mots de passe des utilisateurs du système"
      },
      {
        "id": "b",
        "text": "Les contraintes sur les symboles d’entrée"
      },
      {
        "id": "c",
        "text": "Les noms des développeurs de chaque fonction"
      },
      {
        "id": "d",
        "text": "Les adresses réseau des machines voisines"
      }
    ]
  },
  {
    "id": "pva-q3",
    "prompt": "À quoi sert le solveur SMT dans une analyse symbolique ?",
    "skills": [
      "p-av-symbolique"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "À trouver une entrée satisfaisant les contraintes"
      },
      {
        "id": "b",
        "text": "À compiler plus vite le programme analysé"
      },
      {
        "id": "c",
        "text": "À chiffrer les contraintes collectées"
      },
      {
        "id": "d",
        "text": "À supprimer les branches du programme"
      }
    ]
  },
  {
    "id": "pva-q4",
    "prompt": "Pourquoi l’exécution symbolique passe-t-elle mal à l’échelle sur de gros programmes ?",
    "skills": [
      "p-av-symbolique"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Les solveurs refusent les programmes en C"
      },
      {
        "id": "b",
        "text": "Les compilateurs bloquent l’analyse"
      },
      {
        "id": "c",
        "text": "Les symboles ne peuvent pas être comparés"
      },
      {
        "id": "d",
        "text": "Le nombre de chemins croît avec les branches"
      }
    ]
  },
  {
    "id": "pva-q5",
    "prompt": "L’exécution concolique alterne exécution concrète et raisonnement symbolique.",
    "skills": [
      "p-av-symbolique"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "pva-q6",
    "prompt": "L’exécution symbolique explore toujours tous les chemins d’un programme en un temps raisonnable.",
    "skills": [
      "p-av-symbolique"
    ],
    "difficulty": 3,
    "type": "truefalse"
  },
  {
    "id": "pva-q7",
    "prompt": "Quel moteur d’exécution symbolique open source, fondé sur LLVM, analyse des programmes C ? (un mot)",
    "skills": [
      "p-av-symbolique"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "un mot"
  },
  {
    "id": "pva-q8",
    "prompt": "Quels usages défensifs a l’exécution symbolique ?",
    "skills": [
      "p-av-symbolique"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Remplacer toute la revue de code"
      },
      {
        "id": "b",
        "text": "Chercher une entrée qui viole une assertion"
      },
      {
        "id": "c",
        "text": "Comprendre une condition de plantage"
      },
      {
        "id": "d",
        "text": "Générer des tests qui atteignent des chemins précis"
      }
    ]
  },
  {
    "id": "pva-q9",
    "prompt": "Que prouve une vérification formelle réussie ?",
    "skills": [
      "p-av-formel"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "La rapidité d’exécution du programme analysé"
      },
      {
        "id": "b",
        "text": "L’absence de tout défaut possible, quelle que soit la spécification"
      },
      {
        "id": "c",
        "text": "Le respect d’une spécification pour toutes les entrées"
      },
      {
        "id": "d",
        "text": "La qualité du matériel qui l’exécute"
      }
    ]
  },
  {
    "id": "pva-q10",
    "prompt": "Que fait le model checking ?",
    "skills": [
      "p-av-formel"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Remplacer un compilateur par un interpréteur"
      },
      {
        "id": "b",
        "text": "Explorer les états d’un modèle"
      },
      {
        "id": "c",
        "text": "Chiffrer l’ensemble des états d’un système"
      },
      {
        "id": "d",
        "text": "Mesurer la vitesse de réponse d’un serveur"
      }
    ]
  },
  {
    "id": "pva-q11",
    "prompt": "Pourquoi une preuve formelle reste-t-elle relative ?",
    "skills": [
      "p-av-formel"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Elle porte sur une spécification et un modèle donnés"
      },
      {
        "id": "b",
        "text": "Elle est toujours remise en cause par le compilateur"
      },
      {
        "id": "c",
        "text": "Elle dépend uniquement de la vitesse du processeur"
      },
      {
        "id": "d",
        "text": "Elle ne s’applique jamais à du code réel"
      }
    ]
  },
  {
    "id": "pva-q12",
    "prompt": "Quel système a bénéficié d’une vérification formelle de son noyau ?",
    "skills": [
      "p-av-formel"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un traitement de texte courant"
      },
      {
        "id": "b",
        "text": "Un jeu vidéo grand public"
      },
      {
        "id": "c",
        "text": "Un navigateur web grand public"
      },
      {
        "id": "d",
        "text": "Le micronoyau seL4"
      }
    ]
  },
  {
    "id": "pva-q13",
    "prompt": "Un langage à gestion mémoire sûre élimine des classes entières de défauts.",
    "skills": [
      "p-av-formel"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "pva-q14",
    "prompt": "Quel assistant de preuve, aussi appelé Rocq, a servi à vérifier le compilateur CompCert ? (un mot)",
    "skills": [
      "p-av-formel"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "un mot"
  },
  {
    "id": "pva-q15",
    "prompt": "Quelles limites s’appliquent à la vérification formelle ?",
    "skills": [
      "p-av-formel"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Elle dépend de la qualité de la spécification"
      },
      {
        "id": "b",
        "text": "Elle coûte cher en expertise et en temps"
      },
      {
        "id": "c",
        "text": "Elle repose sur des hypothèses sur l’environnement"
      },
      {
        "id": "d",
        "text": "Elle supprime tout besoin de test"
      }
    ]
  },
  {
    "id": "pva-q16",
    "prompt": "Une équipe hésite entre fuzzing, exécution symbolique et vérification formelle pour un analyseur de protocole critique. Comment les combiner ?",
    "skills": [
      "p-av-formel",
      "p-av-symbolique"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "pva-q17",
    "prompt": "Qu’est-ce qu’un modèle d’attaquant ?",
    "skills": [
      "p-av-protocoles"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un schéma du réseau interne de l’entreprise"
      },
      {
        "id": "b",
        "text": "Un logiciel qui simule le trafic des utilisateurs"
      },
      {
        "id": "c",
        "text": "Une liste des clients autorisés du protocole"
      },
      {
        "id": "d",
        "text": "La description de ce que peut faire un adversaire"
      }
    ]
  },
  {
    "id": "pva-q18",
    "prompt": "Que signifie l’authentification mutuelle dans un protocole ?",
    "skills": [
      "p-av-protocoles"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Chaque partie vérifie l’identité de l’autre"
      },
      {
        "id": "b",
        "text": "Les deux parties partagent un même mot de passe public"
      },
      {
        "id": "c",
        "text": "Aucune partie ne prouve son identité"
      },
      {
        "id": "d",
        "text": "Seul le client prouve son identité au serveur"
      }
    ]
  },
  {
    "id": "pva-q19",
    "prompt": "Quel risque une négociation de version permissive introduit-elle ?",
    "skills": [
      "p-av-protocoles"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Une meilleure compatibilité sans conséquence"
      },
      {
        "id": "b",
        "text": "Une accélération des échanges réseau"
      },
      {
        "id": "c",
        "text": "Un repli forcé vers une version affaiblie"
      },
      {
        "id": "d",
        "text": "Un chiffrement plus fort que prévu"
      }
    ]
  },
  {
    "id": "pva-q20",
    "prompt": "Pourquoi un protocole analysé formellement peut-il rester vulnérable en pratique ?",
    "skills": [
      "p-av-protocoles"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le modèle d’attaquant n’est jamais utile"
      },
      {
        "id": "b",
        "text": "L’implémentation peut s’écarter du modèle analysé"
      },
      {
        "id": "c",
        "text": "Les preuves sont toujours fausses en pratique"
      },
      {
        "id": "d",
        "text": "Les protocoles ne peuvent jamais être implémentés"
      }
    ]
  },
  {
    "id": "pva-q21",
    "prompt": "TLS 1.3 a été analysé avec des outils formels pendant sa conception.",
    "skills": [
      "p-av-protocoles"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "pva-q22",
    "prompt": "Un protocole prouvé sûr dans un modèle l’est face à tout attaquant possible.",
    "skills": [
      "p-av-protocoles"
    ],
    "difficulty": 3,
    "type": "truefalse"
  },
  {
    "id": "pva-q23",
    "prompt": "Comment s’appelle l’outil symbolique d’analyse de protocoles dont le nom commence par Tam… (un mot)",
    "skills": [
      "p-av-protocoles"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "un mot"
  },
  {
    "id": "pva-q24",
    "prompt": "Quelles propriétés étudie-t-on dans l’analyse d’un protocole cryptographique ?",
    "skills": [
      "p-av-protocoles"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "La résistance au rejeu"
      },
      {
        "id": "b",
        "text": "L’authentification des participants"
      },
      {
        "id": "c",
        "text": "La couleur de l’interface des clients"
      },
      {
        "id": "d",
        "text": "La confidentialité des données échangées"
      }
    ]
  },
  {
    "id": "pva-q25",
    "prompt": "Quel est le rôle d’un démarrage vérifié ?",
    "skills": [
      "p-av-firmware"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Contrôler chaque étape avant de lui passer la main"
      },
      {
        "id": "b",
        "text": "Chiffrer les fichiers de l’utilisateur au démarrage"
      },
      {
        "id": "c",
        "text": "Accélérer le démarrage en sautant des étapes"
      },
      {
        "id": "d",
        "text": "Afficher la version du système au démarrage"
      }
    ]
  },
  {
    "id": "pva-q26",
    "prompt": "Qu’est-ce qu’une racine de confiance matérielle au démarrage ?",
    "skills": [
      "p-av-firmware"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un mot de passe stocké dans le chargeur"
      },
      {
        "id": "b",
        "text": "Le dernier programme chargé après le système"
      },
      {
        "id": "c",
        "text": "Une sauvegarde de l’image du système"
      },
      {
        "id": "d",
        "text": "Un premier élément difficile à modifier"
      }
    ]
  },
  {
    "id": "pva-q27",
    "prompt": "Pourquoi examiner l’image d’un micrologiciel est-il utile à la défense ?",
    "skills": [
      "p-av-firmware"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Pour mesurer la consommation électrique"
      },
      {
        "id": "b",
        "text": "Pour modifier librement le produit après achat"
      },
      {
        "id": "c",
        "text": "Pour repérer secrets et composants vulnérables"
      },
      {
        "id": "d",
        "text": "Pour supprimer la garantie du fournisseur"
      }
    ]
  },
  {
    "id": "pva-q28",
    "prompt": "Quel défaut de conception expose toute une flotte d’appareils à une compromission durable ?",
    "skills": [
      "p-av-firmware"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un démarrage vérifié depuis une racine matérielle"
      },
      {
        "id": "b",
        "text": "Un compte de maintenance commun à tous"
      },
      {
        "id": "c",
        "text": "Un numéro de série unique pour chaque appareil"
      },
      {
        "id": "d",
        "text": "Une mise à jour signée par le fabricant"
      }
    ]
  },
  {
    "id": "pva-q29",
    "prompt": "Un secret codé en dur dans un micrologiciel diffusé à des milliers d’exemplaires est un risque majeur.",
    "skills": [
      "p-av-firmware"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "pva-q30",
    "prompt": "Quel sigle de quatre lettres désigne l’interface matérielle de débogage souvent présente sur les cartes électroniques ?",
    "skills": [
      "p-av-firmware"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "quatre lettres"
  },
  {
    "id": "pva-q31",
    "prompt": "Quelles mesures durcissent un appareil embarqué ?",
    "skills": [
      "p-av-firmware"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Désactiver les interfaces de débogage en production"
      },
      {
        "id": "b",
        "text": "Vérifier la signature des mises à jour"
      },
      {
        "id": "c",
        "text": "Garder un mot de passe unique pour toute la flotte"
      },
      {
        "id": "d",
        "text": "Supprimer les comptes de maintenance par défaut"
      }
    ]
  },
  {
    "id": "pva-q32",
    "prompt": "Vous devez évaluer la sécurité d’un nouvel appareil connecté avant son achat. Quels points du micrologiciel et du démarrage examinez-vous ?",
    "skills": [
      "p-av-firmware"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "pva-q33",
    "prompt": "En quoi consiste le consensus dans un système réparti ?",
    "skills": [
      "p-av-distribue"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Une copie unique des données sur un seul nœud"
      },
      {
        "id": "b",
        "text": "Un partage égal de la charge de calcul"
      },
      {
        "id": "c",
        "text": "Un chiffrement des échanges par un tiers"
      },
      {
        "id": "d",
        "text": "Un accord entre nœuds sur une même valeur"
      }
    ]
  },
  {
    "id": "pva-q34",
    "prompt": "Qu’est-ce qu’un nœud byzantin ?",
    "skills": [
      "p-av-distribue"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un nœud qui n’est jamais connecté au réseau"
      },
      {
        "id": "b",
        "text": "Un nœud qui possède le plus de données"
      },
      {
        "id": "c",
        "text": "Un nœud qui peut se comporter de façon arbitraire"
      },
      {
        "id": "d",
        "text": "Un nœud qui s’arrête simplement de répondre"
      }
    ]
  },
  {
    "id": "pva-q35",
    "prompt": "Combien de nœuds fautifs un protocole byzantin classique tolère-t-il parmi n nœuds ?",
    "skills": [
      "p-av-distribue"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Moins du tiers des nœuds"
      },
      {
        "id": "b",
        "text": "Tous les nœuds sauf un seul"
      },
      {
        "id": "c",
        "text": "Moins de la moitié des nœuds"
      },
      {
        "id": "d",
        "text": "Aucun nœud fautif au total"
      }
    ]
  },
  {
    "id": "pva-q36",
    "prompt": "Pourquoi répliquer des données sur plusieurs nœuds ?",
    "skills": [
      "p-av-distribue"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Pour supprimer le besoin de sauvegarde"
      },
      {
        "id": "b",
        "text": "Pour résister à la panne d’un nœud"
      },
      {
        "id": "c",
        "text": "Pour éviter toute vérification d’intégrité"
      },
      {
        "id": "d",
        "text": "Pour réduire le coût du stockage"
      }
    ]
  },
  {
    "id": "pva-q37",
    "prompt": "Dans un système réparti, on peut toujours considérer que tous les nœuds sont honnêtes.",
    "skills": [
      "p-av-distribue"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "pva-q38",
    "prompt": "Quelles menaces concernent un système réparti ?",
    "skills": [
      "p-av-distribue"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Des partitions du réseau"
      },
      {
        "id": "b",
        "text": "Un réseau parfaitement fiable sans panne"
      },
      {
        "id": "c",
        "text": "Des messages retardés, perdus ou dupliqués"
      },
      {
        "id": "d",
        "text": "Des nœuds défaillants ou malveillants"
      }
    ]
  },
  {
    "id": "pva-q39",
    "prompt": "Quelles mesures renforcent l’intégrité de données répliquées ?",
    "skills": [
      "p-av-distribue"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Chaîner un journal d’empreintes"
      },
      {
        "id": "b",
        "text": "Laisser un seul nœud décider sans contrôle"
      },
      {
        "id": "c",
        "text": "Valider les décisions par quorum"
      },
      {
        "id": "d",
        "text": "Signer les écritures"
      }
    ]
  },
  {
    "id": "pva-q40",
    "prompt": "Comment appelle-t-on la situation où le réseau se coupe en groupes de nœuds qui ne communiquent plus entre eux ? (un mot)",
    "skills": [
      "p-av-distribue"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "un mot"
  }
];
