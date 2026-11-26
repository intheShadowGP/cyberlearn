// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "mzt-q1",
    "prompt": "Quelle est l’idée centrale d’une architecture Zero Trust ?",
    "skills": [
      "p-zero-trust"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Ne se fier à aucun réseau par défaut et vérifier chaque accès"
      },
      {
        "id": "b",
        "text": "Faire confiance à tout ce qui se trouve à l’intérieur du réseau interne"
      },
      {
        "id": "c",
        "text": "Supprimer toute authentification afin de simplifier les accès"
      },
      {
        "id": "d",
        "text": "Chiffrer uniquement les données au repos sur les serveurs"
      }
    ]
  },
  {
    "id": "mzt-q2",
    "prompt": "Quels principes relèvent de Zero Trust ?",
    "skills": [
      "p-zero-trust"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Appliquer le moindre privilège et le juste-à-temps"
      },
      {
        "id": "b",
        "text": "Accorder des droits permanents larges pour éviter les frictions"
      },
      {
        "id": "c",
        "text": "Supposer la compromission et micro-segmenter"
      },
      {
        "id": "d",
        "text": "Vérifier explicitement l’utilisateur et l’appareil"
      }
    ]
  },
  {
    "id": "mzt-q3",
    "prompt": "Zero Trust est un produit unique que l’on installe, plutôt qu’une architecture à concevoir.",
    "skills": [
      "p-zero-trust"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "mzt-q4",
    "prompt": "Comment appelle-t-on le découpage fin des accès jusqu’à la charge de travail, qui limite les déplacements latéraux ? (un mot)",
    "skills": [
      "p-zero-trust"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "micro-…"
  },
  {
    "id": "mzt-q5",
    "prompt": "Quel composant mesure la chaîne de démarrage et ne libère un secret que si l’état mesuré est intègre ?",
    "skills": [
      "p-racine"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le routeur de l’agence"
      },
      {
        "id": "b",
        "text": "Le TPM de la machine"
      },
      {
        "id": "c",
        "text": "Le pare-feu du réseau"
      },
      {
        "id": "d",
        "text": "Le proxy de l’entreprise"
      }
    ]
  },
  {
    "id": "mzt-q6",
    "prompt": "Que garantit Secure Boot ?",
    "skills": [
      "p-racine"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le démarrage de la machine devient nettement plus rapide"
      },
      {
        "id": "b",
        "text": "Les adresses IP sont attribuées automatiquement au poste"
      },
      {
        "id": "c",
        "text": "Chaque étape du démarrage est signée et vérifiée"
      },
      {
        "id": "d",
        "text": "Le trafic réseau est chiffré entre le poste et le serveur"
      }
    ]
  },
  {
    "id": "mzt-q7",
    "prompt": "Qu’est-ce que l’informatique confidentielle vise à protéger ?",
    "skills": [
      "p-racine"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Les câbles réseau contre les coupures physiques"
      },
      {
        "id": "b",
        "text": "Uniquement les données en transit sur le réseau"
      },
      {
        "id": "c",
        "text": "Uniquement les données au repos sur les disques"
      },
      {
        "id": "d",
        "text": "Les données en cours de traitement en mémoire"
      }
    ]
  },
  {
    "id": "mzt-q8",
    "prompt": "Concernant les enclaves (TEE) et l’attestation, quelles affirmations sont exactes ?",
    "skills": [
      "p-racine"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Une enclave réduit la surface de confiance sans l’annuler"
      },
      {
        "id": "b",
        "text": "Le contenu d’une enclave est protégé même du système d’exploitation"
      },
      {
        "id": "c",
        "text": "Les enclaves suppriment tout risque, y compris les canaux auxiliaires"
      },
      {
        "id": "d",
        "text": "L’attestation prouve à distance quel code s’exécute dans l’enclave"
      }
    ]
  },
  {
    "id": "mzt-q9",
    "prompt": "Qu’est-ce qu’une attaque par canal auxiliaire ?",
    "skills": [
      "p-menaces-hw"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Déduire un secret d’une fuite physique indirecte"
      },
      {
        "id": "b",
        "text": "Deviner un mot de passe par force brute sur le service"
      },
      {
        "id": "c",
        "text": "Injecter une requête SQL dans un formulaire web"
      },
      {
        "id": "d",
        "text": "Envoyer un courriel d’hameçonnage à un employé"
      }
    ]
  },
  {
    "id": "mzt-q10",
    "prompt": "Expliquez, à des fins défensives, le principe d’une fuite par canal auxiliaire temporel lors d’une comparaison de secret, et la contre-mesure.",
    "skills": [
      "p-menaces-hw"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "mzt-q11",
    "prompt": "Quelles contre-mesures sont associées aux attaques matérielles ?",
    "skills": [
      "p-menaces-hw"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Redondance et capteurs contre l’injection de fautes"
      },
      {
        "id": "b",
        "text": "Désactiver la journalisation des événements du système"
      },
      {
        "id": "c",
        "text": "Mémoire à correction d’erreurs contre Rowhammer"
      },
      {
        "id": "d",
        "text": "Implémentations à temps constant contre les canaux auxiliaires"
      }
    ]
  },
  {
    "id": "mzt-q12",
    "prompt": "Comprendre le principe d’une attaque matérielle pour s’en défendre revient au même que disposer d’un mode opératoire d’attaque prêt à l’emploi.",
    "skills": [
      "p-menaces-hw"
    ],
    "difficulty": 3,
    "type": "truefalse"
  },
  {
    "id": "mzt-q13",
    "prompt": "Qu’est-ce que la tolérance aux fautes byzantines dans un système distribué ?",
    "skills": [
      "p-horizons"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Accélérer le réseau entre les différents sites distants"
      },
      {
        "id": "b",
        "text": "Résister aux coupures de courant sur les serveurs uniquement"
      },
      {
        "id": "c",
        "text": "Chiffrer les disques de tous les nœuds du système"
      },
      {
        "id": "d",
        "text": "Rester correct malgré des participants malveillants"
      }
    ]
  },
  {
    "id": "mzt-q14",
    "prompt": "Que permet le chiffrement homomorphe ?",
    "skills": [
      "p-horizons"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Supprimer complètement le besoin de gérer des clés"
      },
      {
        "id": "b",
        "text": "Chiffrer les données beaucoup plus vite qu’avant"
      },
      {
        "id": "c",
        "text": "Calculer sur des données chiffrées sans les déchiffrer"
      },
      {
        "id": "d",
        "text": "Compresser les données avant de les envoyer"
      }
    ]
  },
  {
    "id": "mzt-q15",
    "prompt": "Comment appelle-t-on un protocole qui prouve une affirmation sans révéler le secret sous-jacent ? (expression : preuve à …)",
    "skills": [
      "p-horizons"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "preuve à …"
  },
  {
    "id": "mzt-q16",
    "prompt": "Une organisation doit protéger des données qui resteront confidentielles 20 ans et seront traitées dans le cloud. Quelles pistes avancées combineriez-vous et pourquoi ?",
    "skills": [
      "p-horizons",
      "p-racine"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "mzt-q17",
    "prompt": "À quoi sert l’attestation à distance d’une machine ?",
    "skills": [
      "p-attestation"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Sauvegarder automatiquement les fichiers de la machine"
      },
      {
        "id": "b",
        "text": "Prouver son état d’intégrité avant de lui confier un secret"
      },
      {
        "id": "c",
        "text": "Accélérer les échanges de données avec le serveur"
      },
      {
        "id": "d",
        "text": "Remplacer les mises à jour du système d’exploitation"
      }
    ]
  },
  {
    "id": "mzt-q18",
    "prompt": "Quel acteur compare les mesures reçues à des valeurs de référence lors d’une attestation ?",
    "skills": [
      "p-attestation"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le poste de l’utilisateur final"
      },
      {
        "id": "b",
        "text": "L’imprimante réseau du service"
      },
      {
        "id": "c",
        "text": "Le serveur de messagerie"
      },
      {
        "id": "d",
        "text": "Le vérificateur"
      }
    ]
  },
  {
    "id": "mzt-q19",
    "prompt": "Pourquoi protéger une mise à jour de micrologiciel contre le retour en arrière ?",
    "skills": [
      "p-attestation"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Pour permettre de revenir à n’importe quel moment"
      },
      {
        "id": "b",
        "text": "Pour empêcher le rétablissement d’une version vulnérable"
      },
      {
        "id": "c",
        "text": "Pour supprimer la signature de la mise à jour"
      },
      {
        "id": "d",
        "text": "Pour réduire la taille du fichier de mise à jour"
      }
    ]
  },
  {
    "id": "mzt-q20",
    "prompt": "Une mise à jour de micrologiciel doit être signée et sa signature vérifiée avant l’installation.",
    "skills": [
      "p-attestation"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "mzt-q21",
    "prompt": "Quels éléments renforcent la sécurité de la chaîne d’approvisionnement matérielle et logicielle ?",
    "skills": [
      "p-attestation"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "La vérification des signatures des mises à jour"
      },
      {
        "id": "b",
        "text": "Un inventaire des composants (nomenclature)"
      },
      {
        "id": "c",
        "text": "La qualification des fournisseurs et la traçabilité"
      },
      {
        "id": "d",
        "text": "L’achat de composants sans aucune traçabilité d’origine"
      }
    ]
  },
  {
    "id": "mzt-q22",
    "prompt": "Quel sigle désigne la nomenclature des composants logiciels d’un produit ? (quatre lettres)",
    "skills": [
      "p-attestation"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "quatre lettres"
  },
  {
    "id": "mzt-q23",
    "prompt": "Que doit faire le vérificateur si la mesure reçue ne correspond à aucune valeur de référence connue ?",
    "skills": [
      "p-attestation"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Refuser de confier des secrets à la machine"
      },
      {
        "id": "b",
        "text": "Accepter quand même pour ne pas bloquer l’accès"
      },
      {
        "id": "c",
        "text": "Effacer toutes ses valeurs de référence connues"
      },
      {
        "id": "d",
        "text": "Redémarrer le serveur de messagerie de l’entreprise"
      }
    ]
  },
  {
    "id": "mzt-q24",
    "prompt": "Quel mécanisme matériel empêche d’installer une version antérieure d’un micrologiciel ?",
    "skills": [
      "p-attestation"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un écran d’affichage de la version courante"
      },
      {
        "id": "b",
        "text": "Une sauvegarde manuelle faite chaque semaine"
      },
      {
        "id": "c",
        "text": "Un compteur de version non réinitialisable"
      },
      {
        "id": "d",
        "text": "Un fichier de configuration modifiable par tous"
      }
    ]
  },
  {
    "id": "mzt-q25",
    "prompt": "Pourquoi la menace quantique concerne-t-elle déjà les données chiffrées aujourd’hui ?",
    "skills": [
      "p-pqc"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le chiffrement symétrique est déjà cassé en pratique"
      },
      {
        "id": "b",
        "text": "Des données interceptées peuvent être déchiffrées plus tard"
      },
      {
        "id": "c",
        "text": "Les ordinateurs quantiques ralentissent tous les chiffrements"
      },
      {
        "id": "d",
        "text": "Tous les mots de passe seront bientôt supprimés partout"
      }
    ]
  },
  {
    "id": "mzt-q26",
    "prompt": "Quel inventaire prépare une migration cryptographique ?",
    "skills": [
      "p-pqc"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "La liste des fichiers de journalisation anciens"
      },
      {
        "id": "b",
        "text": "La liste des mots de passe de tous les employés"
      },
      {
        "id": "c",
        "text": "La liste des algorithmes, clés et usages en place"
      },
      {
        "id": "d",
        "text": "La liste des fournisseurs de fournitures de bureau"
      }
    ]
  },
  {
    "id": "mzt-q27",
    "prompt": "Qu’est-ce que l’agilité cryptographique ?",
    "skills": [
      "p-pqc"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Changer d’algorithme sans refondre le système"
      },
      {
        "id": "b",
        "text": "Utiliser un algorithme que personne ne connaît"
      },
      {
        "id": "c",
        "text": "Éviter toute mise à jour des bibliothèques"
      },
      {
        "id": "d",
        "text": "Chiffrer deux fois avec exactement la même clé"
      }
    ]
  },
  {
    "id": "mzt-q28",
    "prompt": "Un échange de clés hybride combine un algorithme classique et un algorithme post-quantique.",
    "skills": [
      "p-pqc"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "mzt-q29",
    "prompt": "Un ordinateur quantique rend immédiatement inutile tout chiffrement symétrique.",
    "skills": [
      "p-pqc"
    ],
    "difficulty": 3,
    "type": "truefalse"
  },
  {
    "id": "mzt-q30",
    "prompt": "Quelles données faut-il migrer en priorité vers le post-quantique ?",
    "skills": [
      "p-pqc"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Celles qui n’ont aucune valeur pour l’organisation"
      },
      {
        "id": "b",
        "text": "Celles qui perdent toute valeur au bout d’une heure"
      },
      {
        "id": "c",
        "text": "Celles qui sont déjà publiques depuis des années"
      },
      {
        "id": "d",
        "text": "Celles qui doivent rester secrètes très longtemps"
      }
    ]
  },
  {
    "id": "mzt-q31",
    "prompt": "Quelles actions préparent la migration post-quantique ?",
    "skills": [
      "p-pqc"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Attendre qu’un ordinateur quantique opérationnel existe"
      },
      {
        "id": "b",
        "text": "Inventorier les usages de cryptographie asymétrique"
      },
      {
        "id": "c",
        "text": "Prévoir l’agilité cryptographique des systèmes"
      },
      {
        "id": "d",
        "text": "Suivre les standards publiés par le NIST"
      }
    ]
  },
  {
    "id": "mzt-q32",
    "prompt": "Quel organisme américain a standardisé les premiers algorithmes post-quantiques ? (quatre lettres)",
    "skills": [
      "p-pqc"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "quatre lettres"
  },
  {
    "id": "mzt-q33",
    "prompt": "Qu’est-ce qu’une politique d’accès dynamique dans une architecture Zero Trust ?",
    "skills": [
      "p-zero-trust"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Une liste de mots de passe renouvelée chaque mois"
      },
      {
        "id": "b",
        "text": "Un accès ouvert à tous aux heures de bureau"
      },
      {
        "id": "c",
        "text": "Une décision recalculée selon le contexte à chaque demande"
      },
      {
        "id": "d",
        "text": "Une règle écrite une fois et jamais modifiée"
      }
    ]
  },
  {
    "id": "mzt-q34",
    "prompt": "Pourquoi la micro-segmentation complète-t-elle l’authentification forte ?",
    "skills": [
      "p-zero-trust"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Elle donne un accès libre entre les services"
      },
      {
        "id": "b",
        "text": "Elle limite le déplacement d’un compte déjà compromis"
      },
      {
        "id": "c",
        "text": "Elle remplace entièrement le besoin d’authentifier"
      },
      {
        "id": "d",
        "text": "Elle supprime toute journalisation du réseau"
      }
    ]
  },
  {
    "id": "mzt-q35",
    "prompt": "Quelle différence principale entre un TPM et un HSM ?",
    "skills": [
      "p-racine"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le TPM chiffre le réseau, le HSM attribue les adresses"
      },
      {
        "id": "b",
        "text": "Il n’existe aucune différence entre les deux"
      },
      {
        "id": "c",
        "text": "Le TPM est un logiciel, le HSM est un câble"
      },
      {
        "id": "d",
        "text": "Le TPM mesure une machine, le HSM garde des clés"
      }
    ]
  },
  {
    "id": "mzt-q36",
    "prompt": "Un HSM réalise les opérations cryptographiques sans jamais exposer la clé en clair à l’extérieur du module.",
    "skills": [
      "p-racine"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "mzt-q37",
    "prompt": "Quelle propriété doit avoir une comparaison de secret pour résister à une fuite temporelle ?",
    "skills": [
      "p-menaces-hw"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Une durée indépendante du contenu comparé"
      },
      {
        "id": "b",
        "text": "Une durée plus longue pour les secrets valides"
      },
      {
        "id": "c",
        "text": "Un arrêt dès le premier caractère différent"
      },
      {
        "id": "d",
        "text": "Une exécution après chiffrement du disque"
      }
    ]
  },
  {
    "id": "mzt-q38",
    "prompt": "Quel sigle désigne la mémoire qui détecte et corrige des inversions de bits, contre-mesure associée à Rowhammer ? (trois lettres)",
    "skills": [
      "p-menaces-hw"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "trois lettres"
  },
  {
    "id": "mzt-q39",
    "prompt": "Quelles techniques permettent de calculer ou de vérifier sans exposer les données ?",
    "skills": [
      "p-horizons"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Les preuves à divulgation nulle de connaissance"
      },
      {
        "id": "b",
        "text": "Le chiffrement homomorphe"
      },
      {
        "id": "c",
        "text": "Le stockage des données en clair chez l’hébergeur"
      },
      {
        "id": "d",
        "text": "Le calcul multipartite sécurisé"
      }
    ]
  },
  {
    "id": "mzt-q40",
    "prompt": "Le consensus tolérant aux fautes byzantines vise à rester correct malgré des participants malveillants.",
    "skills": [
      "p-horizons"
    ],
    "difficulty": 3,
    "type": "truefalse"
  }
];
