// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "fz-q1",
    "prompt": "Qu’est-ce qui distingue un fuzzer guidé par la couverture d’un fuzzer purement aléatoire ?",
    "skills": [
      "p-fuzz"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Il exige une preuve formelle avant chaque exécution"
      },
      {
        "id": "b",
        "text": "Il n’exécute jamais le programme pendant la campagne"
      },
      {
        "id": "c",
        "text": "Il garde et mute les entrées qui ouvrent de nouveaux chemins"
      },
      {
        "id": "d",
        "text": "Il ne fonctionne que sur des programmes accessibles en réseau"
      }
    ]
  },
  {
    "id": "fz-q2",
    "prompt": "Sans sanitizer, de nombreuses corruptions mémoire déclenchées par le fuzzer passent inaperçues car elles ne provoquent pas de plantage immédiat.",
    "skills": [
      "p-fuzz"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "fz-q3",
    "prompt": "Quel est le nom de la fonction point d’entrée qu’un harnais libFuzzer doit définir ?",
    "skills": [
      "p-fuzz"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "nom de la fonction"
  },
  {
    "id": "fz-q4",
    "prompt": "Quelles caractéristiques rendent un harnais efficace ?",
    "skills": [
      "p-fuzz",
      "p-triage"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Ciblage de la fonction qui traite les octets non fiables"
      },
      {
        "id": "b",
        "text": "Déterminisme : même entrée, même comportement"
      },
      {
        "id": "c",
        "text": "Exécution rapide, sans accès disque ni réseau"
      },
      {
        "id": "d",
        "text": "Un état global qui s’accumule entre les exécutions"
      }
    ]
  },
  {
    "id": "fz-q5",
    "prompt": "Pourquoi fournir un dictionnaire au fuzzer ?",
    "skills": [
      "p-fuzz"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Pour réduire volontairement la couverture obtenue"
      },
      {
        "id": "b",
        "text": "Pour lui donner les mots-clés et constantes du format"
      },
      {
        "id": "c",
        "text": "Pour chiffrer le corpus avant chaque exécution"
      },
      {
        "id": "d",
        "text": "Pour traduire en français les messages d’erreur du programme"
      }
    ]
  },
  {
    "id": "fz-q6",
    "prompt": "Lequel de ces défauts est en général le plus grave à traiter en priorité ?",
    "skills": [
      "p-triage"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un dépassement de délai sur une entrée de 10 Mo"
      },
      {
        "id": "b",
        "text": "Un déréférencement de pointeur nul en lecture"
      },
      {
        "id": "c",
        "text": "Un avertissement de compilation sans effet"
      },
      {
        "id": "d",
        "text": "Une écriture après libération sur le tas"
      }
    ]
  },
  {
    "id": "fz-q7",
    "prompt": "Quelles étapes font partie du triage de plantages ?",
    "skills": [
      "p-triage"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Publication immédiate de toutes les entrées"
      },
      {
        "id": "b",
        "text": "Minimisation de l’entrée"
      },
      {
        "id": "c",
        "text": "Déduplication par pile d’appels"
      },
      {
        "id": "d",
        "text": "Reproduction sous sanitizer"
      }
    ]
  },
  {
    "id": "fz-q8",
    "prompt": "Une campagne de fuzzing de plusieurs semaines sans aucun plantage prouve l’absence de vulnérabilités.",
    "skills": [
      "p-triage",
      "p-formal"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "fz-q9",
    "prompt": "Dans un rapport ASan, quel type d’erreur est indiqué par « WRITE of size 8 … 0 bytes to the right of 8-byte region » sur une zone allouée par malloc ? (terme anglais d’ASan)",
    "skills": [
      "p-triage"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "terme anglais"
  },
  {
    "id": "fz-q10",
    "prompt": "Quel est le principal obstacle de l’exécution symbolique sur les gros programmes ?",
    "skills": [
      "p-formal"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "L’explosion du nombre de chemins"
      },
      {
        "id": "b",
        "text": "Le chiffrement systématique des binaires"
      },
      {
        "id": "c",
        "text": "L’absence de compilateur pour le langage"
      },
      {
        "id": "d",
        "text": "La taille de l’écran de l’analyste"
      }
    ]
  },
  {
    "id": "fz-q11",
    "prompt": "Une preuve formelle garantit la sécurité d’un système quelles que soient la spécification et les hypothèses retenues.",
    "skills": [
      "p-formal"
    ],
    "difficulty": 3,
    "type": "truefalse"
  },
  {
    "id": "fz-q12",
    "prompt": "Citez un outil d’analyse formelle de protocoles cryptographiques utilisé notamment pour TLS 1.3.",
    "skills": [
      "p-formal"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "nom de l’outil"
  },
  {
    "id": "fz-q13",
    "prompt": "Quelles pratiques relèvent de la divulgation coordonnée ?",
    "skills": [
      "p-disclosure"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Signaler par le canal officiel de l’éditeur"
      },
      {
        "id": "b",
        "text": "Laisser un délai raisonnable avant publication"
      },
      {
        "id": "c",
        "text": "Fournir une preuve minimale reproductible"
      },
      {
        "id": "d",
        "text": "Vendre la vulnérabilité au plus offrant sans prévenir l’éditeur"
      }
    ]
  },
  {
    "id": "fz-q14",
    "prompt": "Écrivez (ou décrivez précisément) un harnais libFuzzer pour `img_decode(const uint8_t *buf, size_t len, struct image *out)`, et expliquez pourquoi vous ne ciblez pas `img_load`.",
    "skills": [
      "p-fuzz",
      "p-triage"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "fz-q15",
    "prompt": "Pour le lot de 2 300 plantages (2 100 SEGV adresse nulle, 180 lectures hors limites, 20 use-after-free en écriture), proposez la priorisation, la démarche d’analyse et la communication à l’éditeur.",
    "skills": [
      "p-triage",
      "p-disclosure"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "fz-q16",
    "prompt": "Quel fichier standardisé publié par un site indique comment lui signaler une vulnérabilité ?",
    "skills": [
      "p-disclosure"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "humans.txt, à la racine du site"
      },
      {
        "id": "b",
        "text": "sitemap.xml, à la racine du site"
      },
      {
        "id": "c",
        "text": "robots.txt, à la racine du site"
      },
      {
        "id": "d",
        "text": "security.txt, dans /.well-known/"
      }
    ]
  },
  {
    "id": "fz-q17",
    "prompt": "Une campagne de fuzzing de 72 h sous AddressSanitizer ne produit aucun plantage. Que peut-on en conclure ?",
    "skills": [
      "p-triage"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Qu’il ne contient aucun débordement de tampon exploitable"
      },
      {
        "id": "b",
        "text": "Que le programme est désormais prouvé sûr"
      },
      {
        "id": "c",
        "text": "Rien sur l’absence de vulnérabilité en général"
      },
      {
        "id": "d",
        "text": "Qu’il faut désactiver ASan pour trouver des bugs"
      }
    ]
  },
  {
    "id": "fz-q18",
    "prompt": "Pourquoi intégrer le fuzzing à la chaîne de livraison plutôt que de mener une seule campagne ?",
    "skills": [
      "p-ci"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Pour détecter aussi les régressions futures"
      },
      {
        "id": "b",
        "text": "Pour supprimer le besoin de tests unitaires"
      },
      {
        "id": "c",
        "text": "Pour remplacer toute la revue de code des équipes"
      },
      {
        "id": "d",
        "text": "Pour éviter de corriger les défauts trouvés"
      }
    ]
  },
  {
    "id": "fz-q19",
    "prompt": "Que contient un corpus de régression ?",
    "skills": [
      "p-ci"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Les mots de passe des développeurs du projet"
      },
      {
        "id": "b",
        "text": "Des entrées utiles et d’anciens plantages corrigés"
      },
      {
        "id": "c",
        "text": "Uniquement les entrées qui échouent encore aujourd’hui"
      },
      {
        "id": "d",
        "text": "Le code source complet du programme testé"
      }
    ]
  },
  {
    "id": "fz-q20",
    "prompt": "Que faire d’un plantage trouvé par la validation d’un changement ?",
    "skills": [
      "p-ci"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le dédupliquer, le minimiser, l’attribuer"
      },
      {
        "id": "b",
        "text": "Attendre la prochaine version majeure"
      },
      {
        "id": "c",
        "text": "Le supprimer du rapport pour garder la validation verte"
      },
      {
        "id": "d",
        "text": "Le publier sans prévenir les mainteneurs"
      }
    ]
  },
  {
    "id": "fz-q21",
    "prompt": "Une entrée qui avait provoqué un plantage corrigé doit être ajoutée au corpus de régression.",
    "skills": [
      "p-ci"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "fz-q22",
    "prompt": "Pourquoi minimiser le corpus partagé entre les campagnes ?",
    "skills": [
      "p-ci"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Pour empêcher le fuzzer de muter les entrées"
      },
      {
        "id": "b",
        "text": "Pour chiffrer les graines avant leur stockage"
      },
      {
        "id": "c",
        "text": "Un gros corpus ralentit sans ajouter de couverture"
      },
      {
        "id": "d",
        "text": "Pour effacer les entrées qui provoquent des plantages"
      }
    ]
  },
  {
    "id": "fz-q23",
    "prompt": "Quels éléments font partie d’un fuzzing continu bien conduit ?",
    "skills": [
      "p-ci"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Désactivation des sanitizers pour gagner du temps"
      },
      {
        "id": "b",
        "text": "Rejeu du corpus de régression à chaque changement"
      },
      {
        "id": "c",
        "text": "Signalements dédupliqués rattachés à un propriétaire"
      },
      {
        "id": "d",
        "text": "Suivi de la couverture dans le temps"
      }
    ]
  },
  {
    "id": "fz-q24",
    "prompt": "Quelle infrastructure de Google propose le fuzzing continu des projets libres ? (un nom)",
    "skills": [
      "p-ci"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "un nom"
  },
  {
    "id": "fz-q25",
    "prompt": "Quel indicateur révèle des zones de code jamais explorées par les harnais ?",
    "skills": [
      "p-ci"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le nombre total de plantages"
      },
      {
        "id": "b",
        "text": "La taille du binaire compilé"
      },
      {
        "id": "c",
        "text": "La durée totale de la campagne"
      },
      {
        "id": "d",
        "text": "Le rapport de couverture"
      }
    ]
  },
  {
    "id": "fz-q26",
    "prompt": "Pourquoi les mutations d’octets seules sont-elles peu efficaces sur un format très structuré ?",
    "skills": [
      "p-structure"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le format interdit toute entrée de plus de dix octets"
      },
      {
        "id": "b",
        "text": "La plupart des entrées sont rejetées au premier contrôle"
      },
      {
        "id": "c",
        "text": "Les mutations sont toujours détectées comme malveillantes"
      },
      {
        "id": "d",
        "text": "Les formats structurés ne sont jamais analysés"
      }
    ]
  },
  {
    "id": "fz-q27",
    "prompt": "En quoi consiste le fuzzing différentiel ?",
    "skills": [
      "p-structure"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Fuzzer uniquement les différences de versions du code"
      },
      {
        "id": "b",
        "text": "Comparer plusieurs implémentations sur la même entrée"
      },
      {
        "id": "c",
        "text": "Mesurer la différence de poids entre deux binaires"
      },
      {
        "id": "d",
        "text": "Remplacer les sanitizers par des tests manuels"
      }
    ]
  },
  {
    "id": "fz-q28",
    "prompt": "Quel type de défaut le fuzzing différentiel détecte-t-il particulièrement bien ?",
    "skills": [
      "p-structure"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Des erreurs de compilation du projet"
      },
      {
        "id": "b",
        "text": "Des défauts de mise en page de l’interface"
      },
      {
        "id": "c",
        "text": "Des divergences d’interprétation sans plantage"
      },
      {
        "id": "d",
        "text": "Des plantages propres à une seule bibliothèque"
      }
    ]
  },
  {
    "id": "fz-q29",
    "prompt": "Toute divergence détectée entre deux analyseurs est une vulnérabilité.",
    "skills": [
      "p-structure"
    ],
    "difficulty": 3,
    "type": "truefalse"
  },
  {
    "id": "fz-q30",
    "prompt": "Que faire pour garder la reproductibilité d’un fuzzing de protocole à état ?",
    "skills": [
      "p-structure"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Restaurer un état connu entre deux séquences"
      },
      {
        "id": "b",
        "text": "Désactiver la journalisation des échanges"
      },
      {
        "id": "c",
        "text": "Conserver l’état de la première séquence pour toutes"
      },
      {
        "id": "d",
        "text": "Ignorer l’ordre des messages envoyés"
      }
    ]
  },
  {
    "id": "fz-q31",
    "prompt": "Quelles techniques adaptent le fuzzing à un format complexe ?",
    "skills": [
      "p-structure"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Harnais séparés par couche"
      },
      {
        "id": "b",
        "text": "Mutation sur l’arbre ou le message typé"
      },
      {
        "id": "c",
        "text": "Remplacement du corpus par un fichier vide"
      },
      {
        "id": "d",
        "text": "Dictionnaire des mots-clés du format"
      }
    ]
  },
  {
    "id": "fz-q32",
    "prompt": "Comment appelle-t-on la mutation qui opère sur les champs ou l’arbre syntaxique plutôt que sur les octets ? (deux mots)",
    "skills": [
      "p-structure"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "deux mots"
  },
  {
    "id": "fz-q33",
    "prompt": "Quel outil permet de muter de façon structurée des messages Protocol Buffers ?",
    "skills": [
      "p-structure"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Wireshark (analyse de trafic)"
      },
      {
        "id": "b",
        "text": "tcpdump (capture de paquets)"
      },
      {
        "id": "c",
        "text": "strace (suivi des appels système)"
      },
      {
        "id": "d",
        "text": "libprotobuf-mutator"
      }
    ]
  },
  {
    "id": "fz-q34",
    "prompt": "Quelle approche combine fuzzing et exécution symbolique ?",
    "skills": [
      "p-formal"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "La réécriture du compilateur du projet"
      },
      {
        "id": "b",
        "text": "L’obfuscation du harnais de test"
      },
      {
        "id": "c",
        "text": "L’exécution concolique, dite hybride"
      },
      {
        "id": "d",
        "text": "La compression du corpus de départ"
      }
    ]
  },
  {
    "id": "fz-q35",
    "prompt": "Un solveur SMT peut calculer une entrée concrète qui atteint un chemin précis d’un programme.",
    "skills": [
      "p-formal"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "fz-q36",
    "prompt": "Quel délai avant publication est une pratique courante de divulgation coordonnée ?",
    "skills": [
      "p-disclosure"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Environ quatre-vingt-dix jours"
      },
      {
        "id": "b",
        "text": "Une dizaine d’années"
      },
      {
        "id": "c",
        "text": "Aucun délai, publication immédiate du rapport"
      },
      {
        "id": "d",
        "text": "Quelques heures seulement après le signalement"
      }
    ]
  },
  {
    "id": "fz-q37",
    "prompt": "Rechercher des vulnérabilités sur le service en ligne d’un tiers sans autorisation expose à des poursuites.",
    "skills": [
      "p-disclosure"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "fz-q38",
    "prompt": "Que détecte un sanitizer compilé dans le programme pendant le fuzzing ?",
    "skills": [
      "p-fuzz"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le nombre de développeurs de l’équipe projet"
      },
      {
        "id": "b",
        "text": "Des erreurs mémoire et comportements indéfinis"
      },
      {
        "id": "c",
        "text": "La vitesse de connexion du réseau local"
      },
      {
        "id": "d",
        "text": "La qualité de la documentation du projet logiciel"
      }
    ]
  },
  {
    "id": "fz-q39",
    "prompt": "Pourquoi un harnais ne doit-il pas conserver d’état global entre deux exécutions ?",
    "skills": [
      "p-fuzz"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le programme ne pourrait plus lire d’entrée"
      },
      {
        "id": "b",
        "text": "Le fuzzer cesserait de mesurer la couverture"
      },
      {
        "id": "c",
        "text": "Le compilateur refuserait de le compiler"
      },
      {
        "id": "d",
        "text": "Les plantages seraient non reproductibles"
      }
    ]
  },
  {
    "id": "fz-q40",
    "prompt": "Quelles informations contient un bon signalement de plantage à un éditeur ?",
    "skills": [
      "p-triage",
      "p-disclosure"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Un code d’exploitation complet publié avant la correction"
      },
      {
        "id": "b",
        "text": "Les versions concernées"
      },
      {
        "id": "c",
        "text": "La trace du sanitizer"
      },
      {
        "id": "d",
        "text": "L’entrée minimisée qui reproduit le défaut"
      }
    ]
  }
];
