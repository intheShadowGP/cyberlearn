// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "iot-q1",
    "prompt": "Quelle faiblesse le botnet Mirai exploitait-il principalement ?",
    "skills": [
      "n-iot-vulns"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Une faille du chiffrement AES lui-même"
      },
      {
        "id": "b",
        "text": "Une injection SQL dans un site web"
      },
      {
        "id": "c",
        "text": "Une attaque par canal auxiliaire matériel"
      },
      {
        "id": "d",
        "text": "Des identifiants par défaut"
      }
    ]
  },
  {
    "id": "iot-q2",
    "prompt": "Lesquelles sont des faiblesses typiques des objets connectés ?",
    "skills": [
      "n-iot-vulns"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Interface UART donnant un shell root"
      },
      {
        "id": "b",
        "text": "Clé privée identique sur tous les appareils"
      },
      {
        "id": "c",
        "text": "Telnet activé au démarrage"
      },
      {
        "id": "d",
        "text": "Mises à jour signées avec anti-retour"
      }
    ]
  },
  {
    "id": "iot-q3",
    "prompt": "La norme ETSI EN 303 645 interdit les mots de passe universels par défaut sur les objets grand public.",
    "skills": [
      "n-iot-vulns"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "iot-q13",
    "prompt": "Quel port série de débogage, souvent présent sur les cartes électroniques, peut donner accès à une console ? (sigle)",
    "skills": [
      "n-iot-vulns",
      "n-iot-firmware"
    ],
    "difficulty": 1,
    "type": "short",
    "placeholder": "sigle"
  },
  {
    "id": "iot-q31",
    "prompt": "Pourquoi une caméra exposée sur Internet est-elle rapidement attaquée ?",
    "skills": [
      "n-iot-vulns"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Elles consomment trop de bande passante"
      },
      {
        "id": "b",
        "text": "Des robots balaient les services exposés"
      },
      {
        "id": "c",
        "text": "Les attaquants ne ciblent que les serveurs"
      },
      {
        "id": "d",
        "text": "Les caméras attirent particulièrement les orages"
      }
    ]
  },
  {
    "id": "iot-q32",
    "prompt": "Pourquoi verrouiller les interfaces de débogage (UART, JTAG) en production ?",
    "skills": [
      "n-iot-vulns"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Elles donnent un accès bas niveau"
      },
      {
        "id": "b",
        "text": "Elles consomment un peu d’énergie"
      },
      {
        "id": "c",
        "text": "Elles sont interdites par le protocole HTTP"
      },
      {
        "id": "d",
        "text": "Elles ralentissent le réseau local"
      }
    ]
  },
  {
    "id": "iot-q33",
    "prompt": "Un mot de passe codé en dur et identique sur toute une gamme est une faiblesse grave.",
    "skills": [
      "n-iot-vulns"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "iot-q4",
    "prompt": "Quel outil libre est couramment utilisé pour identifier et extraire les systèmes de fichiers d’une image de firmware ?",
    "skills": [
      "n-iot-firmware"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "nom de l’outil"
  },
  {
    "id": "iot-q5",
    "prompt": "binwalk ne reconnaît aucune signature dans une grande zone de l’image, dont l’entropie est proche du maximum. Quelle est la suite la plus pertinente ?",
    "skills": [
      "n-iot-firmware"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Flasher l’image sur un autre appareil pour observer"
      },
      {
        "id": "b",
        "text": "Ouvrir la zone dans un éditeur de texte"
      },
      {
        "id": "c",
        "text": "Supposer un contenu chiffré et chercher la clé"
      },
      {
        "id": "d",
        "text": "Conclure que la zone est vide et l’ignorer"
      }
    ]
  },
  {
    "id": "iot-q6",
    "prompt": "Une clé privée TLS identique dans le firmware de tous les appareils permet, une fois extraite, d’usurper n’importe quel appareil de la gamme.",
    "skills": [
      "n-iot-firmware"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "iot-q7",
    "prompt": "Que rechercher en priorité dans un système de fichiers extrait ?",
    "skills": [
      "n-iot-firmware"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Empreintes de mots de passe et comptes"
      },
      {
        "id": "b",
        "text": "La couleur de l’interface web"
      },
      {
        "id": "c",
        "text": "Scripts de démarrage et services lancés"
      },
      {
        "id": "d",
        "text": "Clés privées et certificats"
      }
    ]
  },
  {
    "id": "iot-q14",
    "prompt": "Analysez les résultats d’extraction (shadow en MD5-crypt, BusyBox de 2012, mise à jour par wget en HTTP sans vérification, clé privée identique entre versions) : gravité, attaque la plus grave, corrections.",
    "skills": [
      "n-iot-firmware",
      "n-iot-vulns"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "iot-q34",
    "prompt": "Que suggère une entropie très élevée sur une zone d’une image de firmware ?",
    "skills": [
      "n-iot-firmware"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "La version exacte du noyau installé"
      },
      {
        "id": "b",
        "text": "Un contenu chiffré ou compressé"
      },
      {
        "id": "c",
        "text": "La taille du fichier image complet"
      },
      {
        "id": "d",
        "text": "La liste des mots de passe stockés"
      }
    ]
  },
  {
    "id": "iot-q35",
    "prompt": "Pourquoi émuler un binaire extrait d’un firmware, par exemple avec QEMU ?",
    "skills": [
      "n-iot-firmware"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le chiffrer avant son stockage définitif"
      },
      {
        "id": "b",
        "text": "Le publier sur Internet pour le partager"
      },
      {
        "id": "c",
        "text": "Le compresser davantage pour le stockage"
      },
      {
        "id": "d",
        "text": "Le tester sans risque pour l’appareil"
      }
    ]
  },
  {
    "id": "iot-q36",
    "prompt": "Que vérifier pour une version de BusyBox repérée dans un firmware extrait ?",
    "skills": [
      "n-iot-firmware"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Ses vulnérabilités publiques"
      },
      {
        "id": "b",
        "text": "Le nom du fabricant de l’appareil"
      },
      {
        "id": "c",
        "text": "La couleur de l’interface web"
      },
      {
        "id": "d",
        "text": "La taille du fichier source extrait"
      }
    ]
  },
  {
    "id": "iot-q8",
    "prompt": "Sur quoi repose la chaîne de confiance d’un démarrage sécurisé ?",
    "skills": [
      "n-iot-design"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le pare-feu du réseau de l’utilisateur"
      },
      {
        "id": "b",
        "text": "L’antivirus installé sur l’appareil"
      },
      {
        "id": "c",
        "text": "Une racine de confiance matérielle"
      },
      {
        "id": "d",
        "text": "Un mot de passe saisi par l’utilisateur"
      }
    ]
  },
  {
    "id": "iot-q9",
    "prompt": "Comment appelle-t-on la protection qui refuse l’installation d’une version de firmware plus ancienne que la version courante ? (mot composé, « anti-… »)",
    "skills": [
      "n-iot-design"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "anti-…"
  },
  {
    "id": "iot-q10",
    "prompt": "Avec des partitions A/B, une mise à jour qui échoue au démarrage peut être annulée automatiquement en revenant à la partition précédente.",
    "skills": [
      "n-iot-design"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "iot-q11",
    "prompt": "Quelles mesures protègent les secrets d’un appareil ?",
    "skills": [
      "n-iot-design"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Secrets uniques par appareil"
      },
      {
        "id": "b",
        "text": "Interfaces de débogage verrouillées en production"
      },
      {
        "id": "c",
        "text": "Stockage dans un élément sécurisé ou un TPM"
      },
      {
        "id": "d",
        "text": "Secret codé en dur dans le code source"
      }
    ]
  },
  {
    "id": "iot-q12",
    "prompt": "Quel règlement européen impose aux fabricants des mises à jour de sécurité pendant la période de support de leurs produits numériques ?",
    "skills": [
      "n-iot-design",
      "n-iot-vulns"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le Cyber Resilience Act"
      },
      {
        "id": "b",
        "text": "Le règlement DORA sur la finance"
      },
      {
        "id": "c",
        "text": "Le RGPD sur les données personnelles"
      },
      {
        "id": "d",
        "text": "Le règlement eIDAS sur l’identité"
      }
    ]
  },
  {
    "id": "iot-q15",
    "prompt": "Concevez le mécanisme de mise à jour d’un capteur cellulaire maintenu 10 ans, sans jamais le rendre inutilisable.",
    "skills": [
      "n-iot-design"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "iot-q16",
    "prompt": "Pourquoi vérifier la signature d’une mise à jour même si elle est téléchargée en HTTPS ?",
    "skills": [
      "n-iot-design",
      "n-iot-firmware"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Pour compresser l’image avant l’envoi"
      },
      {
        "id": "b",
        "text": "Ce n’est pas utile dès qu’on utilise HTTPS"
      },
      {
        "id": "c",
        "text": "Pour accélérer le téléchargement de l’image"
      },
      {
        "id": "d",
        "text": "La signature prouve l’origine de l’image"
      }
    ]
  },
  {
    "id": "iot-q37",
    "prompt": "À quoi sert une racine de confiance matérielle ?",
    "skills": [
      "n-iot-design"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Remplacer le mot de passe de l’utilisateur"
      },
      {
        "id": "b",
        "text": "Ancrer la vérification dans le matériel"
      },
      {
        "id": "c",
        "text": "Stocker les photographies de l’appareil"
      },
      {
        "id": "d",
        "text": "Accélérer la connexion sans fil de l’objet"
      }
    ]
  },
  {
    "id": "iot-q38",
    "prompt": "Pourquoi prévoir des clés de signature de secours dans l’appareil ?",
    "skills": [
      "n-iot-design"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Éviter d’avoir à signer les images"
      },
      {
        "id": "b",
        "text": "Supprimer l’anti-retour"
      },
      {
        "id": "c",
        "text": "Remplacer une clé compromise"
      },
      {
        "id": "d",
        "text": "Doubler la vitesse de mise à jour"
      }
    ]
  },
  {
    "id": "iot-q39",
    "prompt": "Quelles étapes protègent un firmware de bout en bout ?",
    "skills": [
      "n-iot-design"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Un envoi sans vérification sur un canal ouvert"
      },
      {
        "id": "b",
        "text": "La vérification sur l’appareil avant installation"
      },
      {
        "id": "c",
        "text": "La signature par le fabricant"
      },
      {
        "id": "d",
        "text": "L’anti-retour"
      }
    ]
  },
  {
    "id": "iot-q40",
    "prompt": "Une mise à jour téléchargée en HTTPS n’a pas besoin d’être signée.",
    "skills": [
      "n-iot-design"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "iot-q17",
    "prompt": "Quel protocole léger de messagerie est très utilisé pour relier des objets connectés à un serveur ?",
    "skills": [
      "n-iot-reseau"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "RDP"
      },
      {
        "id": "b",
        "text": "MQTT"
      },
      {
        "id": "c",
        "text": "SMTP"
      },
      {
        "id": "d",
        "text": "FTP"
      }
    ]
  },
  {
    "id": "iot-q18",
    "prompt": "Pourquoi attribuer un certificat unique à chaque appareil pour qu’il s’authentifie ?",
    "skills": [
      "n-iot-reseau"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Révoquer un appareil isolément"
      },
      {
        "id": "b",
        "text": "Réduire la taille du firmware"
      },
      {
        "id": "c",
        "text": "Éviter tout chiffrement des échanges"
      },
      {
        "id": "d",
        "text": "Accélérer la connexion au serveur"
      }
    ]
  },
  {
    "id": "iot-q19",
    "prompt": "Comment isoler un réseau d’objets connectés des postes de travail d’une organisation ?",
    "skills": [
      "n-iot-reseau"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "En désactivant tous les mots de passe"
      },
      {
        "id": "b",
        "text": "En connectant chaque objet directement à Internet"
      },
      {
        "id": "c",
        "text": "En les laissant sur le même réseau sans filtre"
      },
      {
        "id": "d",
        "text": "Par un réseau dédié, filtré par un pare-feu"
      }
    ]
  },
  {
    "id": "iot-q20",
    "prompt": "Quel risque présente un objet qui accepte des connexions entrantes depuis Internet ?",
    "skills": [
      "n-iot-reseau"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Il ne peut plus recevoir de mises à jour"
      },
      {
        "id": "b",
        "text": "Il consomme moins d’énergie"
      },
      {
        "id": "c",
        "text": "Il est balayé et attaqué en permanence"
      },
      {
        "id": "d",
        "text": "Il chiffre ses données automatiquement"
      }
    ]
  },
  {
    "id": "iot-q21",
    "prompt": "Un appareil Bluetooth Low Energy est protégé contre toute écoute dès lors qu’il est à courte portée.",
    "skills": [
      "n-iot-reseau"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "iot-q22",
    "prompt": "Quelles mesures sécurisent les communications d’un objet ?",
    "skills": [
      "n-iot-reseau"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "TLS avec authentification mutuelle"
      },
      {
        "id": "b",
        "text": "Un réseau segmenté et filtré"
      },
      {
        "id": "c",
        "text": "Un secret partagé identique pour toute la gamme"
      },
      {
        "id": "d",
        "text": "Des certificats uniques par appareil"
      }
    ]
  },
  {
    "id": "iot-q23",
    "prompt": "Quel protocole sécurise une connexion en chiffrant les échanges, par exemple pour MQTT ? (sigle)",
    "skills": [
      "n-iot-reseau"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "sigle"
  },
  {
    "id": "iot-q24",
    "prompt": "Que faut-il imposer concernant les identifiants d’usine d’un objet à sa première mise en service ?",
    "skills": [
      "n-iot-flotte"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un identifiant publié sur le site du fabricant"
      },
      {
        "id": "b",
        "text": "Aucun contrôle"
      },
      {
        "id": "c",
        "text": "Un identifiant unique ou son changement"
      },
      {
        "id": "d",
        "text": "Un identifiant identique pour toute la gamme"
      }
    ]
  },
  {
    "id": "iot-q25",
    "prompt": "À quoi sert un SBOM pour un fabricant d’objets connectés ?",
    "skills": [
      "n-iot-flotte"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Chiffrer l’image du firmware"
      },
      {
        "id": "b",
        "text": "Repérer les produits concernés"
      },
      {
        "id": "c",
        "text": "Accélérer le démarrage des appareils"
      },
      {
        "id": "d",
        "text": "Remplacer les mises à jour de sécurité"
      }
    ]
  },
  {
    "id": "iot-q26",
    "prompt": "Qu’est-ce que la divulgation coordonnée d’une vulnérabilité ?",
    "skills": [
      "n-iot-flotte"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Prévenir le fabricant avant de publier"
      },
      {
        "id": "b",
        "text": "Vendre la faille au plus offrant"
      },
      {
        "id": "c",
        "text": "Garder la faille secrète pour toujours"
      },
      {
        "id": "d",
        "text": "Publier immédiatement tous les détails"
      }
    ]
  },
  {
    "id": "iot-q27",
    "prompt": "Que doit prévoir un fabricant pour les appareils arrivés en fin de support ?",
    "skills": [
      "n-iot-flotte"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un arrêt silencieux des appareils"
      },
      {
        "id": "b",
        "text": "Le maintien de tous les services sans limite"
      },
      {
        "id": "c",
        "text": "Un abandon discret, sans aucune information"
      },
      {
        "id": "d",
        "text": "Une information claire et des options"
      }
    ]
  },
  {
    "id": "iot-q28",
    "prompt": "Un appareil sans écran, relié seulement à un réseau local, n’a pas besoin de mises à jour de sécurité.",
    "skills": [
      "n-iot-flotte"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "iot-q29",
    "prompt": "Quels éléments composent une bonne politique de support d’un produit connecté ?",
    "skills": [
      "n-iot-flotte"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Des correctifs de sécurité fournis pendant le support"
      },
      {
        "id": "b",
        "text": "Un canal de signalement des vulnérabilités"
      },
      {
        "id": "c",
        "text": "Aucune information sur la fin de vie"
      },
      {
        "id": "d",
        "text": "Une durée de support annoncée"
      }
    ]
  },
  {
    "id": "iot-q30",
    "prompt": "Comment appelle-t-on le retrait de la confiance accordée à un certificat avant son expiration ? (un mot)",
    "skills": [
      "n-iot-flotte"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "un mot"
  }
];
