// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "afund-q1",
    "prompt": "Quelle mémoire perd son contenu à l’extinction de la machine ?",
    "skills": [
      "a-hw"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le disque dur mécanique"
      },
      {
        "id": "b",
        "text": "Le SSD de la machine"
      },
      {
        "id": "c",
        "text": "La puce du firmware UEFI"
      },
      {
        "id": "d",
        "text": "La mémoire vive (RAM)"
      }
    ]
  },
  {
    "id": "afund-q2",
    "prompt": "Lors d’un incident, il faut éteindre immédiatement la machine pour préserver les preuves présentes en mémoire.",
    "skills": [
      "a-hw"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "afund-q3",
    "prompt": "Quelles informations peut-on typiquement trouver en mémoire vive sur une machine en fonctionnement ?",
    "skills": [
      "a-hw"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Des clés de chiffrement de disque en cours d’usage"
      },
      {
        "id": "b",
        "text": "Des connexions réseau actives et les processus associés"
      },
      {
        "id": "c",
        "text": "Le numéro de série gravé dans le processeur"
      },
      {
        "id": "d",
        "text": "Des processus malveillants qui n’existent pas sur le disque"
      },
      {
        "id": "e",
        "text": "La date de fabrication de la carte mère"
      }
    ]
  },
  {
    "id": "afund-q4",
    "prompt": "Quel composant exécute les instructions machine d’un programme ?",
    "skills": [
      "a-hw"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "La carte réseau"
      },
      {
        "id": "b",
        "text": "Le disque de stockage"
      },
      {
        "id": "c",
        "text": "Le processeur (CPU)"
      },
      {
        "id": "d",
        "text": "Le module de mémoire vive"
      }
    ]
  },
  {
    "id": "afund-q5",
    "prompt": "Pourquoi place-t-on plusieurs niveaux de cache entre le processeur et la RAM ?",
    "skills": [
      "a-hw"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Garder les données récentes dans une mémoire plus rapide"
      },
      {
        "id": "b",
        "text": "Augmenter le nombre de cœurs de calcul disponibles sur la puce"
      },
      {
        "id": "c",
        "text": "Chiffrer automatiquement chaque échange avec le disque dur"
      },
      {
        "id": "d",
        "text": "Conserver les données durablement quand la machine est éteinte"
      }
    ]
  },
  {
    "id": "afund-q6",
    "prompt": "Des attaques comme Spectre et Meltdown exploitent des effets de bord de l’exécution du processeur, notamment sur l’état des caches.",
    "skills": [
      "a-hw"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "afund-q7",
    "prompt": "Un ordinateur portable contenant un disque non chiffré est volé. Que peut faire le voleur ?",
    "skills": [
      "a-hw"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Rien : le système efface le disque après trois démarrages ratés"
      },
      {
        "id": "b",
        "text": "Lire les fichiers en branchant le disque sur une autre machine"
      },
      {
        "id": "c",
        "text": "Seulement lire les fichiers dont il est le propriétaire"
      },
      {
        "id": "d",
        "text": "Rien : le mot de passe de session protège les fichiers du disque"
      }
    ]
  },
  {
    "id": "afund-q8",
    "prompt": "Comment appelle-t-on la mémoire minuscule et ultra-rapide située dans le processeur lui-même ? (un mot, au pluriel)",
    "skills": [
      "a-hw"
    ],
    "difficulty": 1,
    "type": "short"
  },
  {
    "id": "afund-q9",
    "prompt": "Quel ordre de grandeur correspond à la latence d’accès à la mémoire vive ?",
    "skills": [
      "a-hw"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "≈ 1 ns"
      },
      {
        "id": "b",
        "text": "≈ 10 ms"
      },
      {
        "id": "c",
        "text": "≈ 100 µs"
      },
      {
        "id": "d",
        "text": "≈ 100 ns"
      }
    ]
  },
  {
    "id": "afund-q10",
    "prompt": "Combien de valeurs différentes un octet peut-il prendre ?",
    "skills": [
      "a-data"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "256 valeurs, de 0 à 255"
      },
      {
        "id": "b",
        "text": "512 valeurs, de 0 à 511"
      },
      {
        "id": "c",
        "text": "128 valeurs, de 0 à 127"
      },
      {
        "id": "d",
        "text": "255 valeurs, de 1 à 255"
      }
    ]
  },
  {
    "id": "afund-q11",
    "prompt": "Quelle écriture hexadécimale correspond à l’octet binaire 11111111 ?",
    "skills": [
      "a-data"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "80"
      },
      {
        "id": "b",
        "text": "FF"
      },
      {
        "id": "c",
        "text": "F0"
      },
      {
        "id": "d",
        "text": "1F"
      }
    ]
  },
  {
    "id": "afund-q12",
    "prompt": "Quel encodage de caractères, compatible avec l’ASCII, représente tous les caractères Unicode avec 1 à 4 octets ?",
    "skills": [
      "a-data"
    ],
    "difficulty": 2,
    "type": "short"
  },
  {
    "id": "afund-q13",
    "prompt": "Un fichier dont l’extension est .txt contient forcément du texte.",
    "skills": [
      "a-data"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "afund-q14",
    "prompt": "En ASCII, quelle lettre correspond à l’octet 0x41 (65 en décimal) ?",
    "skills": [
      "a-data"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "a minuscule"
      },
      {
        "id": "b",
        "text": "B majuscule"
      },
      {
        "id": "c",
        "text": "A majuscule"
      },
      {
        "id": "d",
        "text": "Z majuscule"
      }
    ]
  },
  {
    "id": "afund-q15",
    "prompt": "Quelles affirmations sur la représentation des données sont exactes ?",
    "skills": [
      "a-data"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "L’ASCII représente tous les caractères de toutes les langues"
      },
      {
        "id": "b",
        "text": "Un bit peut prendre 256 valeurs différentes"
      },
      {
        "id": "c",
        "text": "Un octet regroupe 8 bits"
      },
      {
        "id": "d",
        "text": "L’hexadécimal est une base 16 : chiffres de 0 à 9 puis lettres de A à F"
      },
      {
        "id": "e",
        "text": "Deux chiffres hexadécimaux suffisent pour écrire un octet"
      }
    ]
  },
  {
    "id": "afund-q16",
    "prompt": "Un analyste ouvre dans un éditeur hexadécimal un fichier nommé « facture.pdf » et lit « 4D 5A » aux deux premiers octets. Que peut-il en déduire et quelle est sa conduite ?",
    "skills": [
      "a-data",
      "a-proc"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "afund-q17",
    "prompt": "Quel composant s’exécute en premier à la mise sous tension ?",
    "skills": [
      "a-boot"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le firmware (UEFI ou BIOS)"
      },
      {
        "id": "b",
        "text": "Le gestionnaire de session de l’utilisateur"
      },
      {
        "id": "c",
        "text": "L’antivirus installé sur la machine"
      },
      {
        "id": "d",
        "text": "Le noyau du système d’exploitation"
      }
    ]
  },
  {
    "id": "afund-q18",
    "prompt": "Quelle fonction UEFI n’autorise que des chargeurs d’amorçage et des noyaux signés par une clé de confiance ? (deux mots)",
    "skills": [
      "a-boot"
    ],
    "difficulty": 1,
    "type": "short"
  },
  {
    "id": "afund-q19",
    "prompt": "Un bootkit est difficile à détecter car il s’exécute avant l’antivirus du système d’exploitation.",
    "skills": [
      "a-boot"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "afund-q20",
    "prompt": "Dans quel ordre se déroule le démarrage d’une machine ?",
    "skills": [
      "a-boot"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Premier processus, noyau, firmware, chargeur d’amorçage"
      },
      {
        "id": "b",
        "text": "Chargeur d’amorçage, firmware, premier processus, noyau"
      },
      {
        "id": "c",
        "text": "Firmware, chargeur d’amorçage, noyau, premier processus"
      },
      {
        "id": "d",
        "text": "Noyau, firmware, chargeur d’amorçage, premier processus"
      }
    ]
  },
  {
    "id": "afund-q21",
    "prompt": "À quoi sert un TPM dans la chaîne de démarrage ?",
    "skills": [
      "a-boot"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Précharger le système d’exploitation pour accélérer le démarrage complet"
      },
      {
        "id": "b",
        "text": "Fournir une connexion réseau protégée avant le chargement du noyau"
      },
      {
        "id": "c",
        "text": "Remplacer le noyau lorsque le système est corrompu ou endommagé"
      },
      {
        "id": "d",
        "text": "Stocker des clés et des mesures du démarrage pour vérifier l’intégrité"
      }
    ]
  },
  {
    "id": "afund-q22",
    "prompt": "Quelles mesures renforcent la protection de la chaîne de démarrage ?",
    "skills": [
      "a-boot"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Autoriser le démarrage depuis n’importe quel support amovible"
      },
      {
        "id": "b",
        "text": "Activer Secure Boot"
      },
      {
        "id": "c",
        "text": "Mettre à jour le firmware et le protéger par un mot de passe"
      },
      {
        "id": "d",
        "text": "Désactiver Secure Boot pour éviter les incompatibilités"
      }
    ]
  },
  {
    "id": "afund-q23",
    "prompt": "Pourquoi le chiffrement intégral du disque (BitLocker, LUKS) est-il recommandé sur un ordinateur portable ?",
    "skills": [
      "a-boot",
      "a-hw"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Il empêche les attaques menées à travers le réseau local"
      },
      {
        "id": "b",
        "text": "Il protège les données si l’appareil est volé éteint"
      },
      {
        "id": "c",
        "text": "Il remplace l’antivirus pour la détection des malwares"
      },
      {
        "id": "d",
        "text": "Il accélère les accès au disque lors de chaque lecture"
      }
    ]
  },
  {
    "id": "afund-q24",
    "prompt": "Un antivirus installé dans le système d’exploitation détecte toujours un implant du firmware UEFI, car il surveille la machine dès la mise sous tension.",
    "skills": [
      "a-boot"
    ],
    "difficulty": 3,
    "type": "truefalse"
  },
  {
    "id": "afund-q25",
    "prompt": "Un serveur suspect est toujours allumé. Le responsable veut l’éteindre « pour arrêter l’attaque ». Que lui répondez-vous et quel ordre d’actions proposez-vous ?",
    "skills": [
      "a-boot",
      "a-hw"
    ],
    "difficulty": 2,
    "type": "open"
  },
  {
    "id": "afund-q26",
    "prompt": "Comment une application en espace utilisateur demande-t-elle au noyau de lire un fichier ?",
    "skills": [
      "a-proc"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "En modifiant elle-même la table des processus"
      },
      {
        "id": "b",
        "text": "Par un appel système"
      },
      {
        "id": "c",
        "text": "Par une interruption émise par le firmware"
      },
      {
        "id": "d",
        "text": "En accédant directement au contrôleur de disque"
      }
    ]
  },
  {
    "id": "afund-q27",
    "prompt": "Quelles caractéristiques possède chaque processus ?",
    "skills": [
      "a-proc"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Un identifiant (PID)"
      },
      {
        "id": "b",
        "text": "Une adresse MAC dédiée"
      },
      {
        "id": "c",
        "text": "Un processus parent"
      },
      {
        "id": "d",
        "text": "Un contexte de sécurité (le compte au nom duquel il agit)"
      },
      {
        "id": "e",
        "text": "Un firmware qui lui est propre"
      }
    ]
  },
  {
    "id": "afund-q28",
    "prompt": "Quelle est la différence entre un processus et un thread ?",
    "skills": [
      "a-proc"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Les threads d’un processus partagent sa mémoire, deux processus non"
      },
      {
        "id": "b",
        "text": "Un processus est un thread qui a terminé son exécution"
      },
      {
        "id": "c",
        "text": "Un thread est un processus lancé avec les droits du noyau"
      },
      {
        "id": "d",
        "text": "Un thread s’exécute uniquement dans le firmware de la machine"
      }
    ]
  },
  {
    "id": "afund-q29",
    "prompt": "Sur un poste, WINWORD.EXE lance cmd.exe, qui lance powershell.exe -enc … Quelle est l’interprétation la plus probable ?",
    "skills": [
      "a-proc",
      "a-priv"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le fonctionnement normal du correcteur orthographique"
      },
      {
        "id": "b",
        "text": "Une mise à jour automatique du traitement de texte"
      },
      {
        "id": "c",
        "text": "Un comportement habituel de l’impression de documents"
      },
      {
        "id": "d",
        "text": "Un document piégé exécutant une commande encodée"
      }
    ]
  },
  {
    "id": "afund-q30",
    "prompt": "Un service (ou démon) est un processus lancé en arrière-plan, souvent au démarrage, sans interface utilisateur.",
    "skills": [
      "a-proc"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "afund-q31",
    "prompt": "Que se passe-t-il quand un processus ordinaire tente de lire la mémoire d’un autre processus sans autorisation ?",
    "skills": [
      "a-proc"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le système copie la mémoire de l’autre processus"
      },
      {
        "id": "b",
        "text": "Le processeur fusionne les deux espaces d’adressage"
      },
      {
        "id": "c",
        "text": "Le noyau et le processeur refusent l’accès"
      },
      {
        "id": "d",
        "text": "L’accès réussit car toute la RAM est partagée"
      }
    ]
  },
  {
    "id": "afund-q32",
    "prompt": "Comment s’appelle la technique qui rend aléatoires, à chaque lancement, les adresses des zones mémoire d’un processus ? (sigle)",
    "skills": [
      "a-proc"
    ],
    "difficulty": 2,
    "type": "short"
  },
  {
    "id": "afund-q33",
    "prompt": "Quelles zones de la mémoire d’un processus sont souvent visées par les corruptions mémoire ?",
    "skills": [
      "a-proc"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Le registre des tâches planifiées du système"
      },
      {
        "id": "b",
        "text": "La puce du firmware de la carte mère"
      },
      {
        "id": "c",
        "text": "Le tas (heap), alloué dynamiquement"
      },
      {
        "id": "d",
        "text": "La pile (stack), avec ses adresses de retour"
      }
    ]
  },
  {
    "id": "afund-q34",
    "prompt": "La protection NX (ou DEP) empêche d’exécuter du code situé dans des pages mémoire marquées comme données.",
    "skills": [
      "a-proc"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "afund-q35",
    "prompt": "Quel mécanisme traduit les adresses virtuelles d’un processus en adresses de la mémoire physique ?",
    "skills": [
      "a-proc"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le contrôleur du disque, piloté par le BIOS"
      },
      {
        "id": "b",
        "text": "La MMU du processeur, pilotée par le noyau"
      },
      {
        "id": "c",
        "text": "La carte réseau, pilotée par le pare-feu"
      },
      {
        "id": "d",
        "text": "L’écran, piloté par le gestionnaire de session"
      }
    ]
  },
  {
    "id": "afund-q36",
    "prompt": "Sous Linux, quel est le nom du compte tout-puissant (UID 0) ?",
    "skills": [
      "a-priv"
    ],
    "difficulty": 1,
    "type": "short"
  },
  {
    "id": "afund-q37",
    "prompt": "Le principe du moindre privilège consiste à n’accorder à chaque compte que les droits strictement nécessaires à sa fonction.",
    "skills": [
      "a-priv"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "afund-q38",
    "prompt": "Un attaquant passe d’un compte utilisateur standard au compte SYSTEM grâce à un service mal configuré. Comment nomme-t-on cette étape ?",
    "skills": [
      "a-priv"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Mouvement latéral"
      },
      {
        "id": "b",
        "text": "Exfiltration de données"
      },
      {
        "id": "c",
        "text": "Élévation de privilèges"
      },
      {
        "id": "d",
        "text": "Reconnaissance du réseau"
      }
    ]
  },
  {
    "id": "afund-q39",
    "prompt": "Un programme SUID dont le propriétaire est root est lancé par un utilisateur standard. Avec quels droits s’exécute-t-il ?",
    "skills": [
      "a-priv"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Aucun droit tant que sudo n’a pas été saisi"
      },
      {
        "id": "b",
        "text": "Ceux du compte invité du système"
      },
      {
        "id": "c",
        "text": "Ceux de l’utilisateur qui le lance"
      },
      {
        "id": "d",
        "text": "Ceux de son propriétaire, donc root"
      }
    ]
  },
  {
    "id": "afund-q40",
    "prompt": "Un service de sauvegarde s’exécute sous un compte administrateur du domaine. Expliquez le risque et ce que vous proposez à la place.",
    "skills": [
      "a-priv",
      "a-proc"
    ],
    "difficulty": 2,
    "type": "open"
  }
];
