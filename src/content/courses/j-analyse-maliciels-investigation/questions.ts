// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "ami-q1",
    "prompt": "Dans un cadre défensif, quels sont les objectifs de l’analyse de maliciels ?",
    "skills": [
      "j-mw-role"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Comprendre, détecter, contenir"
      },
      {
        "id": "b",
        "text": "Le vendre à des tiers intéressés"
      },
      {
        "id": "c",
        "text": "Reproduire le maliciel pour le réutiliser"
      },
      {
        "id": "d",
        "text": "Le diffuser à d’autres machines pour tester"
      }
    ]
  },
  {
    "id": "ami-q2",
    "prompt": "Un échantillon de maliciel étant une preuve, on en fait une copie de travail et on préserve l’original, comme pour toute preuve.",
    "skills": [
      "j-mw-role"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "ami-q3",
    "prompt": "À quelles questions d’investigation l’analyse d’un échantillon aide-t-elle à répondre ?",
    "skills": [
      "j-mw-role"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "D’autres machines sont-elles touchées ?"
      },
      {
        "id": "b",
        "text": "Comment contenir la propagation ?"
      },
      {
        "id": "c",
        "text": "Qu’a fait le maliciel sur la machine ?"
      },
      {
        "id": "d",
        "text": "Quelle est la météo du jour ?"
      }
    ]
  },
  {
    "id": "ami-q31",
    "prompt": "À quoi sert le triage avant toute analyse approfondie ?",
    "skills": [
      "j-mw-role",
      "j-mw-statique"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "À prévenir l’attaquant"
      },
      {
        "id": "b",
        "text": "À exécuter l’échantillon plus vite"
      },
      {
        "id": "c",
        "text": "À supprimer l’échantillon sans trace"
      },
      {
        "id": "d",
        "text": "À décider si elle est justifiée"
      }
    ]
  },
  {
    "id": "ami-q32",
    "prompt": "Un échantillon récupéré lors d’un incident doit être traité selon la chaîne de conservation.",
    "skills": [
      "j-mw-role"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "ami-q4",
    "prompt": "Pourquoi analyser un maliciel dans une machine virtuelle isolée avec instantanés ?",
    "skills": [
      "j-mw-env"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Parce que les maliciels ne fonctionnent qu’en machine virtuelle"
      },
      {
        "id": "b",
        "text": "Éviter la contamination et revenir à un état propre"
      },
      {
        "id": "c",
        "text": "Pour partager la machine avec les utilisateurs"
      },
      {
        "id": "d",
        "text": "Pour accélérer l’exécution du maliciel"
      }
    ]
  },
  {
    "id": "ami-q5",
    "prompt": "L’absence de comportement malveillant observé en bac à sable prouve toujours que le fichier est inoffensif.",
    "skills": [
      "j-mw-env"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "ami-q6",
    "prompt": "Quelles précautions encadrent un environnement d’analyse de maliciels ?",
    "skills": [
      "j-mw-env"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Connecter la machine au réseau de production pour plus de réalisme"
      },
      {
        "id": "b",
        "text": "Réseau isolé ou coupé, sans accès à l’entreprise"
      },
      {
        "id": "c",
        "text": "Aucune donnée ni identifiant réel sur la machine"
      },
      {
        "id": "d",
        "text": "Échantillon conservé dans une archive chiffrée et non exécuté par accident"
      }
    ]
  },
  {
    "id": "ami-q33",
    "prompt": "Quelles pratiques sécurisent la manipulation d’un échantillon ?",
    "skills": [
      "j-mw-env"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Le manipuler depuis une machine virtuelle dédiée"
      },
      {
        "id": "b",
        "text": "L’archiver chiffré avec un mot de passe convenu"
      },
      {
        "id": "c",
        "text": "L’ouvrir par un double-clic pour voir ce qu’il fait"
      },
      {
        "id": "d",
        "text": "Neutraliser l’extension pour éviter l’ouverture accidentelle"
      }
    ]
  },
  {
    "id": "ami-q34",
    "prompt": "Pourquoi restaure-t-on l’instantané propre après chaque exécution ?",
    "skills": [
      "j-mw-env",
      "j-mw-dynamique"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Pour sauvegarder le maliciel"
      },
      {
        "id": "b",
        "text": "Pour accélérer le prochain démarrage"
      },
      {
        "id": "c",
        "text": "Pour repartir d’un état identique"
      },
      {
        "id": "d",
        "text": "Pour supprimer la machine virtuelle"
      }
    ]
  },
  {
    "id": "ami-q7",
    "prompt": "Qu’est-ce que l’analyse statique d’un fichier ?",
    "skills": [
      "j-mw-statique"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le laisser contacter son serveur"
      },
      {
        "id": "b",
        "text": "Le recompiler pour le modifier"
      },
      {
        "id": "c",
        "text": "L’exécuter et observer son comportement"
      },
      {
        "id": "d",
        "text": "L’examiner sans l’exécuter"
      }
    ]
  },
  {
    "id": "ami-q8",
    "prompt": "Pourquoi interroger les services de réputation par l’empreinte plutôt qu’en téléversant le fichier ?",
    "skills": [
      "j-mw-statique"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Parce que le téléversement est payant"
      },
      {
        "id": "b",
        "text": "Pour ne pas divulguer le contenu"
      },
      {
        "id": "c",
        "text": "Parce que l’empreinte est plus lente à calculer"
      },
      {
        "id": "d",
        "text": "Il n’y a aucune différence entre les deux"
      }
    ]
  },
  {
    "id": "ami-q9",
    "prompt": "Un fichier nommé « facture.pdf.exe » dont le type réel est un exécutable est un signal d’alerte lors du triage.",
    "skills": [
      "j-mw-statique"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "ami-q10",
    "prompt": "Comment appelle-t-on la compression ou le chiffrement du contenu d’un exécutable qui cache son vrai code ? (un mot)",
    "skills": [
      "j-mw-statique"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "empa…"
  },
  {
    "id": "ami-q35",
    "prompt": "Que peut révéler la liste des chaînes de caractères d’un exécutable ?",
    "skills": [
      "j-mw-statique"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "La date de naissance de l’auteur"
      },
      {
        "id": "b",
        "text": "Le mot de passe de l’administrateur"
      },
      {
        "id": "c",
        "text": "Des domaines, chemins, messages"
      },
      {
        "id": "d",
        "text": "La version du système de l’analyste"
      }
    ]
  },
  {
    "id": "ami-q36",
    "prompt": "Quels éléments d’un exécutable Windows (PE) observe-t-on au triage statique ?",
    "skills": [
      "j-mw-statique"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "La date de compilation et les métadonnées"
      },
      {
        "id": "b",
        "text": "Les sections et leur entropie"
      },
      {
        "id": "c",
        "text": "Le mot de passe de l’attaquant en clair"
      },
      {
        "id": "d",
        "text": "Les bibliothèques et fonctions importées"
      }
    ]
  },
  {
    "id": "ami-q37",
    "prompt": "Quel terme désigne la mesure du caractère aléatoire d’une section, élevée pour un contenu compressé ou chiffré ?",
    "skills": [
      "j-mw-statique"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "un mot"
  },
  {
    "id": "ami-q11",
    "prompt": "Que cherche-t-on à produire par l’analyse comportementale d’un échantillon ?",
    "skills": [
      "j-mw-dynamique"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Des indicateurs de détection"
      },
      {
        "id": "b",
        "text": "Rien d’exploitable"
      },
      {
        "id": "c",
        "text": "Un accès au serveur de l’attaquant"
      },
      {
        "id": "d",
        "text": "Une copie fonctionnelle du maliciel"
      }
    ]
  },
  {
    "id": "ami-q12",
    "prompt": "Pendant l’analyse dynamique, on laisse l’échantillon joindre réellement son serveur de commande pour plus de réalisme.",
    "skills": [
      "j-mw-dynamique"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "ami-q13",
    "prompt": "Quel sigle désigne un élément observable (empreinte, domaine, clé) permettant de repérer une compromission ?",
    "skills": [
      "j-mw-dynamique"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "sigle"
  },
  {
    "id": "ami-q14",
    "prompt": "À quel référentiel rattache-t-on les comportements observés pour repérer les détections manquantes ?",
    "skills": [
      "j-mw-dynamique"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le RGPD"
      },
      {
        "id": "b",
        "text": "MITRE ATT&CK"
      },
      {
        "id": "c",
        "text": "Le protocole DHCP"
      },
      {
        "id": "d",
        "text": "La norme ISO 9001"
      }
    ]
  },
  {
    "id": "ami-q15",
    "prompt": "Décrivez comment transformer l’analyse d’un échantillon en capacité de détection réutilisable pour le SOC.",
    "skills": [
      "j-mw-dynamique",
      "j-mw-statique"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "ami-q16",
    "prompt": "Un collègue veut analyser une pièce jointe suspecte directement sur son poste de travail « pour aller vite ». Expliquez les risques et la bonne démarche.",
    "skills": [
      "j-mw-env",
      "j-mw-role"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "ami-q38",
    "prompt": "Que surveille-t-on pendant l’exécution encadrée d’un échantillon ?",
    "skills": [
      "j-mw-dynamique"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le nombre de pages imprimées"
      },
      {
        "id": "b",
        "text": "La météo du jour"
      },
      {
        "id": "c",
        "text": "La couleur de l’écran de la machine"
      },
      {
        "id": "d",
        "text": "Fichiers, persistance, connexions"
      }
    ]
  },
  {
    "id": "ami-q39",
    "prompt": "Comment observer les requêtes réseau d’un échantillon sans joindre l’infrastructure de l’attaquant ?",
    "skills": [
      "j-mw-dynamique",
      "j-mw-env"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Simuler les services réseau"
      },
      {
        "id": "b",
        "text": "Le brancher sur le réseau de production"
      },
      {
        "id": "c",
        "text": "Désactiver toute observation"
      },
      {
        "id": "d",
        "text": "Le laisser accéder à Internet normalement"
      }
    ]
  },
  {
    "id": "ami-q40",
    "prompt": "Un échantillon ne montre aucun comportement pendant cinq minutes. Quelle est la conclusion prudente ?",
    "skills": [
      "j-mw-dynamique"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le fichier est forcément corrompu"
      },
      {
        "id": "b",
        "text": "L’analyse statique devient inutile"
      },
      {
        "id": "c",
        "text": "On ne peut pas conclure"
      },
      {
        "id": "d",
        "text": "Le fichier est forcément inoffensif"
      }
    ]
  },
  {
    "id": "ami-q17",
    "prompt": "Qu’est-ce qu’une macro dans un document bureautique ?",
    "skills": [
      "j-mw-documents"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un mot de passe du document"
      },
      {
        "id": "b",
        "text": "Un style de police"
      },
      {
        "id": "c",
        "text": "Des instructions exécutées par le document"
      },
      {
        "id": "d",
        "text": "Une image intégrée au document"
      }
    ]
  },
  {
    "id": "ami-q18",
    "prompt": "Quel est le bon réflexe face à un document bureautique suspect avec macros ?",
    "skills": [
      "j-mw-documents"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Ne pas activer les macros"
      },
      {
        "id": "b",
        "text": "Activer les macros pour voir ce qui se passe"
      },
      {
        "id": "c",
        "text": "Le transférer à tous les collègues"
      },
      {
        "id": "d",
        "text": "Le supprimer sans en parler"
      }
    ]
  },
  {
    "id": "ami-q19",
    "prompt": "Un fichier PDF ne peut jamais contenir de contenu malveillant.",
    "skills": [
      "j-mw-documents"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "ami-q20",
    "prompt": "Quels éléments extrait-on d’un document piégé pour produire des indicateurs ?",
    "skills": [
      "j-mw-documents"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Les URL contactées"
      },
      {
        "id": "b",
        "text": "Les commandes appelées par la macro"
      },
      {
        "id": "c",
        "text": "Les noms et chemins de fichiers déposés"
      },
      {
        "id": "d",
        "text": "La couleur de la police du texte"
      }
    ]
  },
  {
    "id": "ami-q21",
    "prompt": "Une macro lance une commande PowerShell encodée. Comment la lire en sécurité ?",
    "skills": [
      "j-mw-documents"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "La coller dans un site public avec les données de l’entreprise"
      },
      {
        "id": "b",
        "text": "La décoder en environnement isolé, sans l’exécuter"
      },
      {
        "id": "c",
        "text": "L’exécuter sur le poste de l’utilisateur"
      },
      {
        "id": "d",
        "text": "Ne pas la regarder"
      }
    ]
  },
  {
    "id": "ami-q22",
    "prompt": "Quel encodage est couramment utilisé pour masquer une commande PowerShell passée avec l’option `-enc` ?",
    "skills": [
      "j-mw-documents"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "nom de l’encodage"
  },
  {
    "id": "ami-q23",
    "prompt": "Quelle mesure préventive réduit le plus le risque lié aux macros reçues par courriel ?",
    "skills": [
      "j-mw-documents"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Demander aux utilisateurs de les activer prudemment"
      },
      {
        "id": "b",
        "text": "Désactiver l’antivirus pour éviter les alertes"
      },
      {
        "id": "c",
        "text": "Imprimer systématiquement les documents"
      },
      {
        "id": "d",
        "text": "Bloquer les macros des documents issus d’Internet"
      }
    ]
  },
  {
    "id": "ami-q24",
    "prompt": "Que contient un rapport d’analyse d’échantillon ?",
    "skills": [
      "j-mw-rapport"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le code complet du maliciel pour republication"
      },
      {
        "id": "b",
        "text": "Empreinte, comportement, indicateurs"
      },
      {
        "id": "c",
        "text": "Un jugement moral sur l’attaquant"
      },
      {
        "id": "d",
        "text": "Les identifiants de l’utilisateur victime"
      }
    ]
  },
  {
    "id": "ami-q25",
    "prompt": "Que partage-t-on avec l’ISAC du secteur, selon le marquage TLP ?",
    "skills": [
      "j-mw-rapport"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Des indicateurs défensifs"
      },
      {
        "id": "b",
        "text": "L’échantillon exécutable sans protection"
      },
      {
        "id": "c",
        "text": "Les identifiants de l’entreprise"
      },
      {
        "id": "d",
        "text": "Les données personnelles des victimes"
      }
    ]
  },
  {
    "id": "ami-q26",
    "prompt": "Un analyste peut détenir et diffuser librement des maliciels dès lors qu’il se dit chercheur.",
    "skills": [
      "j-mw-rapport"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "ami-q27",
    "prompt": "Quelles précautions encadrent la détention d’échantillons par une équipe de défense ?",
    "skills": [
      "j-mw-rapport"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Une mission et un usage défensifs documentés"
      },
      {
        "id": "b",
        "text": "Un stockage chiffré et à accès restreint"
      },
      {
        "id": "c",
        "text": "La publication des échantillons sur un forum public"
      },
      {
        "id": "d",
        "text": "Une traçabilité des accès et des analyses"
      }
    ]
  },
  {
    "id": "ami-q28",
    "prompt": "Pourquoi indiquer un niveau de confiance dans un rapport d’analyse ?",
    "skills": [
      "j-mw-rapport"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Pour éviter de rendre le rapport"
      },
      {
        "id": "b",
        "text": "Pour augmenter la longueur du rapport"
      },
      {
        "id": "c",
        "text": "Pour masquer les limites"
      },
      {
        "id": "d",
        "text": "Pour distinguer faits et hypothèses"
      }
    ]
  },
  {
    "id": "ami-q29",
    "prompt": "Quel sigle désigne le marquage de diffusion en niveaux (RED, AMBER, GREEN, CLEAR) défini par le FIRST ?",
    "skills": [
      "j-mw-rapport"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "sigle"
  },
  {
    "id": "ami-q30",
    "prompt": "Une adresse IP partagée comme indicateur appartient finalement à un hébergeur légitime très utilisé. Que faut-il en conclure ?",
    "skills": [
      "j-mw-rapport",
      "j-mw-dynamique"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Il faut supprimer tous les indicateurs partagés"
      },
      {
        "id": "b",
        "text": "L’adresse n’a jamais été utilisée par un attaquant"
      },
      {
        "id": "c",
        "text": "Un IOC doit être qualifié et daté"
      },
      {
        "id": "d",
        "text": "Il faut bloquer toute la plage de l’hébergeur"
      }
    ]
  }
];
