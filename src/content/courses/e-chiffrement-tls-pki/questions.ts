// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "crypt-q1",
    "prompt": "Pourquoi le mode ECB est-il à proscrire pour chiffrer des données ?",
    "skills": [
      "e-sym"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Il produit des textes chiffrés qu’il est impossible de déchiffrer par la suite"
      },
      {
        "id": "b",
        "text": "Il n’accepte que des clés de 56 bits, devenues trop courtes pour être sûres"
      },
      {
        "id": "c",
        "text": "Deux blocs clairs identiques donnent deux blocs chiffrés identiques, ce qui révèle la structure"
      },
      {
        "id": "d",
        "text": "Il est beaucoup trop lent pour chiffrer des volumes de données de taille moyenne"
      }
    ]
  },
  {
    "id": "crypt-q2",
    "prompt": "Avec AES-GCM, réutiliser un nonce sous la même clé compromet à la fois la confidentialité et l’intégrité des messages concernés.",
    "skills": [
      "e-sym"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "crypt-q3",
    "prompt": "Quels modes ou constructions fournissent un chiffrement authentifié (AEAD) ?",
    "skills": [
      "e-sym"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "AES-ECB"
      },
      {
        "id": "b",
        "text": "ChaCha20-Poly1305"
      },
      {
        "id": "c",
        "text": "AES-CBC seul, sans MAC"
      },
      {
        "id": "d",
        "text": "AES-GCM"
      }
    ]
  },
  {
    "id": "crypt-q4",
    "prompt": "Quelle est la taille, en bits, d’un bloc AES ?",
    "skills": [
      "e-sym"
    ],
    "difficulty": 1,
    "type": "short",
    "placeholder": "nombre"
  },
  {
    "id": "crypt-q5",
    "prompt": "Dans TLS, à quoi sert principalement la cryptographie asymétrique ?",
    "skills": [
      "e-asym"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "À établir une clé de session et à authentifier le serveur par signature"
      },
      {
        "id": "b",
        "text": "À remplacer les fonctions de hachage utilisées pour contrôler l’intégrité"
      },
      {
        "id": "c",
        "text": "À chiffrer tout le trafic applicatif échangé entre le client et le serveur"
      },
      {
        "id": "d",
        "text": "À compresser les données avant leur envoi sur le réseau pour gagner du débit"
      }
    ]
  },
  {
    "id": "crypt-q6",
    "prompt": "Quelles affirmations sur RSA et les courbes elliptiques sont exactes ?",
    "skills": [
      "e-asym"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Une clé RSA de 1 024 bits reste recommandée pour les nouveaux systèmes"
      },
      {
        "id": "b",
        "text": "Le remplissage OAEP est recommandé pour le chiffrement RSA"
      },
      {
        "id": "c",
        "text": "Une clé de 256 bits sur courbe elliptique offre une sécurité voisine d’une clé RSA de 3 072 bits"
      },
      {
        "id": "d",
        "text": "Ed25519 est un algorithme de signature sur courbe elliptique"
      }
    ]
  },
  {
    "id": "crypt-q7",
    "prompt": "Il est recommandé d’utiliser la même paire de clés RSA à la fois pour signer et pour chiffrer.",
    "skills": [
      "e-asym"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "crypt-q8",
    "prompt": "Expliquez à un développeur la différence entre chiffrer avec une clé publique et signer avec une clé privée, et donnez un exemple d’usage de chacun.",
    "skills": [
      "e-asym",
      "e-pki-tls"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "crypt-q9",
    "prompt": "Un client signale « unable to verify the first certificate » alors que le certificat du serveur est valide et non expiré. Quelle est la cause la plus probable ?",
    "skills": [
      "e-pki-tls"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "La clé AES utilisée par le serveur est trop courte pour la négociation"
      },
      {
        "id": "b",
        "text": "Le pare-feu bloque le port 80 utilisé pour les redirections vers HTTPS"
      },
      {
        "id": "c",
        "text": "Le DNS du serveur répond aussi en IPv6 en plus de la réponse IPv4"
      },
      {
        "id": "d",
        "text": "Le serveur n’envoie pas le certificat intermédiaire de la chaîne"
      }
    ]
  },
  {
    "id": "crypt-q10",
    "prompt": "Quel champ d’un certificat X.509 liste les noms de domaine pour lesquels il est valide ? (sigle)",
    "skills": [
      "e-pki-tls"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "sigle"
  },
  {
    "id": "crypt-q11",
    "prompt": "Avec TLS 1.3, la compromission future de la clé privée du serveur permet de déchiffrer les sessions enregistrées par le passé.",
    "skills": [
      "e-tls-config",
      "e-pki-tls"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "crypt-q12",
    "prompt": "Quelles mesures font partie d’une configuration TLS moderne pour un site public ?",
    "skills": [
      "e-tls-config",
      "e-pki-tls"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Privilégier les suites AEAD avec échange ECDHE"
      },
      {
        "id": "b",
        "text": "Désactiver TLS 1.0 et 1.1"
      },
      {
        "id": "c",
        "text": "Envoyer l’en-tête HSTS"
      },
      {
        "id": "d",
        "text": "Accepter les certificats auto-signés des clients sans vérification"
      }
    ]
  },
  {
    "id": "crypt-q13",
    "prompt": "Où une application doit-elle conserver la clé maîtresse qui protège les données chiffrées de sa base ?",
    "skills": [
      "e-secrets-pq"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "En commentaire dans le code source pour que les développeurs la retrouvent"
      },
      {
        "id": "b",
        "text": "Dans un KMS ou un HSM, d’où elle ne sort pas, avec des accès journalisés"
      },
      {
        "id": "c",
        "text": "Dans un fichier de configuration versionné avec le code de l’application"
      },
      {
        "id": "d",
        "text": "Dans une colonne de la même base de données que les données chiffrées"
      }
    ]
  },
  {
    "id": "crypt-q14",
    "prompt": "Quel algorithme d’encapsulation de clés post-quantique le NIST a-t-il normalisé dans FIPS 203 ?",
    "skills": [
      "e-secrets-pq"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "sigle"
  },
  {
    "id": "crypt-q15",
    "prompt": "Expliquez la menace « collecter maintenant, déchiffrer plus tard » et ce qu’elle implique pour une organisation qui échange des données devant rester confidentielles quinze ans.",
    "skills": [
      "e-secrets-pq",
      "e-pki-tls"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "crypt-q16",
    "prompt": "Quel est l’effet attendu d’un ordinateur quantique sur AES-256 ?",
    "skills": [
      "e-secrets-pq",
      "e-sym"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un cassage immédiat de la clé, comme pour RSA face à l’algorithme de Shor"
      },
      {
        "id": "b",
        "text": "Un renforcement de AES-256, dont la sécurité effective doublerait en pratique"
      },
      {
        "id": "c",
        "text": "Une réduction de la sécurité effective (Grover), AES-256 restant considéré comme adapté"
      },
      {
        "id": "d",
        "text": "Aucun effet sur aucun algorithme, qu’il soit symétrique ou asymétrique"
      }
    ]
  },
  {
    "id": "crypt-q17",
    "prompt": "Qu’est-ce qu’un nonce dans un chiffrement authentifié comme AES-GCM ?",
    "skills": [
      "e-sym"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "La signature du message, calculée avec la clé privée de l’émetteur"
      },
      {
        "id": "b",
        "text": "Une clé secrète que seul l’émetteur du message connaît à l’avance"
      },
      {
        "id": "c",
        "text": "Le nombre maximal de messages qu’une clé a le droit de chiffrer"
      },
      {
        "id": "d",
        "text": "Une valeur unique par message, jamais réutilisée avec la même clé"
      }
    ]
  },
  {
    "id": "crypt-q18",
    "prompt": "Pourquoi faut-il vérifier l’étiquette d’authentification avant d’utiliser un texte déchiffré ?",
    "skills": [
      "e-sym"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Pour ne jamais exploiter des données qui ont pu être modifiées par un attaquant"
      },
      {
        "id": "b",
        "text": "Pour compresser le texte déchiffré avant de l’enregistrer dans la base"
      },
      {
        "id": "c",
        "text": "Pour accélérer le déchiffrement des messages de grande taille que le serveur reçoit"
      },
      {
        "id": "d",
        "text": "Pour obtenir la clé de chiffrement employée par l’émetteur du message reçu"
      }
    ]
  },
  {
    "id": "crypt-q19",
    "prompt": "Chiffrer un message avec AES en mode CBC suffit à garantir qu’il n’a pas été modifié en transit.",
    "skills": [
      "e-sym"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "crypt-q20",
    "prompt": "Que permet un échange de clés Diffie-Hellman éphémère (ECDHE) ?",
    "skills": [
      "e-asym"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "D’envoyer le secret de session chiffré avec la clé publique du serveur"
      },
      {
        "id": "b",
        "text": "De calculer à deux un secret commun, sans qu’il circule sur le canal"
      },
      {
        "id": "c",
        "text": "De signer la négociation avec la clé privée stockée dans le certificat"
      },
      {
        "id": "d",
        "text": "De vérifier que le certificat du serveur n’a pas été révoqué"
      }
    ]
  },
  {
    "id": "crypt-q21",
    "prompt": "Quelle courbe elliptique, très répandue pour l’échange de clés dans TLS 1.3, porte un nom commençant par X et se terminant par 25519 ?",
    "skills": [
      "e-asym"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "nom"
  },
  {
    "id": "crypt-q22",
    "prompt": "Réutiliser le même nonce de signature ECDSA pour deux messages différents permet de retrouver la clé privée.",
    "skills": [
      "e-asym"
    ],
    "difficulty": 3,
    "type": "truefalse"
  },
  {
    "id": "crypt-q23",
    "prompt": "Que prouve un certificat dit « validé par domaine » (DV) ?",
    "skills": [
      "e-pki-tls"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Que le demandeur contrôle le domaine, pas qui est l’organisation derrière"
      },
      {
        "id": "b",
        "text": "Que l’organisation a été contrôlée par un huissier ou un tiers de confiance"
      },
      {
        "id": "c",
        "text": "Que le site respecte les règles de protection des données personnelles"
      },
      {
        "id": "d",
        "text": "Que le serveur est exempt de vulnérabilités et de logiciels malveillants"
      }
    ]
  },
  {
    "id": "crypt-q24",
    "prompt": "Pourquoi l’épinglage de certificats (pinning) est-il risqué en exploitation ?",
    "skills": [
      "e-pki-tls"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Il empêche les clients d’utiliser le chiffrement symétrique après la poignée de main"
      },
      {
        "id": "b",
        "text": "Il oblige à utiliser des certificats auto-signés partout dans l’organisation"
      },
      {
        "id": "c",
        "text": "Un changement du certificat épinglé coupe le service pour les clients concernés"
      },
      {
        "id": "d",
        "text": "Il rend la chaîne de certificats impossible à vérifier pour tous les clients"
      }
    ]
  },
  {
    "id": "crypt-q25",
    "prompt": "Un certificat auto-signé n’est digne de confiance que si son empreinte a été vérifiée par un canal sûr, distinct de la connexion.",
    "skills": [
      "e-pki-tls"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "crypt-q26",
    "prompt": "Quelles vérifications un client TLS doit-il effectuer sur le certificat d’un serveur ?",
    "skills": [
      "e-pki-tls"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Le nom demandé figure dans le champ SAN"
      },
      {
        "id": "b",
        "text": "Le certificat est dans sa période de validité"
      },
      {
        "id": "c",
        "text": "La chaîne remonte à une racine de confiance"
      },
      {
        "id": "d",
        "text": "Le serveur fonctionne sur le système Linux"
      }
    ]
  },
  {
    "id": "crypt-q27",
    "prompt": "À quoi sert l’en-tête HTTP Strict-Transport-Security (HSTS) ?",
    "skills": [
      "e-tls-config"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "À compresser les réponses du serveur pour réduire le temps de chargement"
      },
      {
        "id": "b",
        "text": "À signer les certificats utilisés par le site avec l’autorité de certification"
      },
      {
        "id": "c",
        "text": "À chiffrer le contenu des pages du site en plus de la protection de TLS"
      },
      {
        "id": "d",
        "text": "À demander au navigateur de n’utiliser que HTTPS pour ce site pendant une durée donnée"
      }
    ]
  },
  {
    "id": "crypt-q28",
    "prompt": "Qu’est-ce que le TLS mutuel (mTLS) ?",
    "skills": [
      "e-tls-config"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le partage d’un même certificat entre plusieurs serveurs d’un même domaine"
      },
      {
        "id": "b",
        "text": "Le serveur et le client s’authentifient chacun par un certificat"
      },
      {
        "id": "c",
        "text": "L’usage de deux versions de TLS sur le même port pour assurer la compatibilité"
      },
      {
        "id": "d",
        "text": "Le chiffrement du trafic par deux clés de session successives dans la connexion"
      }
    ]
  },
  {
    "id": "crypt-q29",
    "prompt": "Quelle sous-commande d’OpenSSL ouvre une connexion TLS vers un serveur et affiche sa chaîne de certificats ?",
    "skills": [
      "e-tls-config"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "sous-commande"
  },
  {
    "id": "crypt-q30",
    "prompt": "Le mode 0-RTT de TLS 1.3 protège les données de reprise de session contre le rejeu.",
    "skills": [
      "e-tls-config"
    ],
    "difficulty": 3,
    "type": "truefalse"
  },
  {
    "id": "crypt-q31",
    "prompt": "Quelles erreurs de configuration TLS affaiblissent un service ?",
    "skills": [
      "e-tls-config"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Autoriser des suites sans confidentialité persistante, comme l’échange RSA statique"
      },
      {
        "id": "b",
        "text": "Ne servir que le certificat du serveur, sans les certificats intermédiaires"
      },
      {
        "id": "c",
        "text": "Renouveler automatiquement les certificats avant leur expiration"
      },
      {
        "id": "d",
        "text": "Laisser actifs TLS 1.0 et 1.1"
      }
    ]
  },
  {
    "id": "crypt-q32",
    "prompt": "Contre quelle menace le chiffrement complet d’un disque protège-t-il ?",
    "skills": [
      "e-donnees-repos"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un administrateur de la base de données qui consulte les données des clients"
      },
      {
        "id": "b",
        "text": "Le vol ou la perte du support, éteint, par quelqu’un qui n’a pas la clé"
      },
      {
        "id": "c",
        "text": "Une injection SQL qui lit les tables depuis l’application web en service"
      },
      {
        "id": "d",
        "text": "Un programme malveillant qui s’exécute pendant que la session est ouverte"
      }
    ]
  },
  {
    "id": "crypt-q33",
    "prompt": "Que protège de plus le chiffrement au niveau des champs sensibles de l’application, par rapport au chiffrement du disque ?",
    "skills": [
      "e-donnees-repos"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Les données restent illisibles pour qui accède à la base sans la clé de l’application"
      },
      {
        "id": "b",
        "text": "Les connexions entre l’application et la base sont chiffrées par TLS"
      },
      {
        "id": "c",
        "text": "Les sauvegardes sont automatiquement conservées sur plusieurs sites distants"
      },
      {
        "id": "d",
        "text": "Les données restent illisibles pour quiconque vole physiquement le serveur"
      }
    ]
  },
  {
    "id": "crypt-q34",
    "prompt": "Quel avantage principal le chiffrement d’enveloppe apporte-t-il lors de la rotation de la clé maîtresse ?",
    "skills": [
      "e-donnees-repos"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "On n’a plus jamais besoin de changer la clé maîtresse dans le KMS"
      },
      {
        "id": "b",
        "text": "Les données sont chiffrées deux fois par la même clé, ce qui double la protection"
      },
      {
        "id": "c",
        "text": "On ne rechiffre que les clés de données, pas toutes les données"
      },
      {
        "id": "d",
        "text": "Les clés de données sont conservées en clair à côté des données qu’elles protègent"
      }
    ]
  },
  {
    "id": "crypt-q35",
    "prompt": "Chiffrer une base de données protège ses données même si la clé de chiffrement est stockée dans la même base.",
    "skills": [
      "e-donnees-repos"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "crypt-q36",
    "prompt": "Comment nomme-t-on le matériel dédié qui génère et conserve des clés sans jamais les exposer en clair à l’extérieur ? (sigle)",
    "skills": [
      "e-donnees-repos"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "sigle"
  },
  {
    "id": "crypt-q37",
    "prompt": "Quelles pratiques réduisent le risque pesant sur les clés de chiffrement ?",
    "skills": [
      "e-donnees-repos"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Limiter et journaliser l’accès au KMS"
      },
      {
        "id": "b",
        "text": "Utiliser la même clé pour tous les environnements, du test à la production"
      },
      {
        "id": "c",
        "text": "Séparer les clés par usage et par jeu de données"
      },
      {
        "id": "d",
        "text": "Faire tourner les clés selon un calendrier et après tout incident"
      }
    ]
  },
  {
    "id": "crypt-q38",
    "prompt": "Vous concevez la protection des données d’une application de dossiers patients : au repos, en transit, gestion des clés, sauvegardes. Décrivez votre architecture et ses points de vigilance.",
    "skills": [
      "e-donnees-repos",
      "e-secrets-pq"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "crypt-q39",
    "prompt": "Que désigne l’agilité cryptographique ?",
    "skills": [
      "e-secrets-pq"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "La capacité d’un système à chiffrer avec plusieurs algorithmes en même temps"
      },
      {
        "id": "b",
        "text": "La rapidité avec laquelle un algorithme chiffre de grandes quantités de données"
      },
      {
        "id": "c",
        "text": "La rotation quotidienne des clés de chiffrement utilisées par les services"
      },
      {
        "id": "d",
        "text": "La capacité de remplacer un algorithme sans réécrire l’application"
      }
    ]
  },
  {
    "id": "crypt-q40",
    "prompt": "Quel algorithme de signature post-quantique fondé sur les réseaux euclidiens le NIST a-t-il normalisé dans FIPS 204 ?",
    "skills": [
      "e-secrets-pq"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "sigle"
  }
];
