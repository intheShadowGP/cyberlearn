// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "wsp-q1",
    "prompt": "Pourquoi le DNS est-il critique dans un domaine Active Directory ?",
    "skills": [
      "d-infra-services"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Les postes y trouvent les contrôleurs ; le détourner redirige les authentifications"
      },
      {
        "id": "b",
        "text": "Il chiffre les disques des serveurs avant qu’ils soient reliés au domaine"
      },
      {
        "id": "c",
        "text": "Il remplace le pare-feu en filtrant les connexions entre les postes et les serveurs"
      },
      {
        "id": "d",
        "text": "Il stocke les mots de passe des utilisateurs sous une forme qu’il est facile de relire"
      }
    ]
  },
  {
    "id": "wsp-q2",
    "prompt": "Les mises à jour dynamiques DNS « sécurisées » n’acceptent les enregistrements que de machines authentifiées dans le domaine, en vérifiant les droits.",
    "skills": [
      "d-infra-services"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "wsp-q3",
    "prompt": "Quelles mesures sécurisent les services d’infrastructure Windows ?",
    "skills": [
      "d-infra-services"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Ouvrir les transferts de zone à tous pour faciliter le diagnostic"
      },
      {
        "id": "b",
        "text": "Autoriser le serveur DHCP dans Active Directory"
      },
      {
        "id": "c",
        "text": "Surveiller les modifications DNS"
      },
      {
        "id": "d",
        "text": "Restreindre les transferts de zone DNS aux serveurs légitimes"
      }
    ]
  },
  {
    "id": "wsp-q4",
    "prompt": "Pourquoi garder l’autorité de certification racine hors ligne ?",
    "skills": [
      "d-pki"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Pour économiser de l’électricité et réduire la charge des serveurs de l’entreprise"
      },
      {
        "id": "b",
        "text": "Parce qu’elle ne sert jamais, y compris pour signer les autorités intermédiaires"
      },
      {
        "id": "c",
        "text": "Elle fonde la confiance de la PKI ; hors ligne, elle est difficile à compromettre"
      },
      {
        "id": "d",
        "text": "Pour accélérer l’émission des certificats délivrés aux utilisateurs du domaine"
      }
    ]
  },
  {
    "id": "wsp-q5",
    "prompt": "Comment appelle-t-on le gabarit qui définit l’usage, la durée et les conditions de délivrance d’un certificat dans AD CS ? (deux mots)",
    "skills": [
      "d-pki"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "modèle de …"
  },
  {
    "id": "wsp-q6",
    "prompt": "Un certificat d’authentification émis à tort peut permettre de se faire passer pour un autre utilisateur, y compris un administrateur.",
    "skills": [
      "d-pki"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "wsp-q7",
    "prompt": "Quel réglage de modèle est le plus dangereux pour un certificat d’authentification ?",
    "skills": [
      "d-certificats"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Publier le point de distribution de révocation pour que les clients le consultent"
      },
      {
        "id": "b",
        "text": "Laisser le demandeur fournir lui-même le sujet (le nom) du certificat"
      },
      {
        "id": "c",
        "text": "Exiger une approbation par un gestionnaire avant toute émission du certificat"
      },
      {
        "id": "d",
        "text": "Fixer une durée de validité d’un an, renouvelable par le demandeur lui-même"
      }
    ]
  },
  {
    "id": "wsp-q8",
    "prompt": "Révoquer un certificat suffit à le rendre inutilisable, même si les clients ne consultent pas l’état de révocation.",
    "skills": [
      "d-certificats"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "wsp-q9",
    "prompt": "Quelles configurations d’une PKI AD CS faut-il auditer en priorité ?",
    "skills": [
      "d-certificats"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Les modèles où le demandeur choisit le sujet pour un usage d’authentification"
      },
      {
        "id": "b",
        "text": "La couleur de l’icône du magasin de certificats"
      },
      {
        "id": "c",
        "text": "L’émission sans approbation de certificats privilégiés"
      },
      {
        "id": "d",
        "text": "Les droits d’inscription trop larges sur des modèles sensibles"
      }
    ]
  },
  {
    "id": "wsp-q10",
    "prompt": "Expliquez pourquoi une PKI mal configurée peut être aussi grave qu’une compromission d’Active Directory, et donnez deux vérifications défensives.",
    "skills": [
      "d-certificats",
      "d-pki"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "wsp-q11",
    "prompt": "Qu’apporte l’installation d’un serveur en mode Server Core ?",
    "skills": [
      "d-srv-hardening"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un antivirus intégré plus puissant que celui de l’installation avec interface graphique"
      },
      {
        "id": "b",
        "text": "La suppression du besoin d’appliquer des mises à jour de sécurité sur le serveur"
      },
      {
        "id": "c",
        "text": "Le chiffrement automatique de tout le trafic réseau échangé avec le serveur"
      },
      {
        "id": "d",
        "text": "Moins de composants installés, donc une surface d’attaque et des correctifs réduits"
      }
    ]
  },
  {
    "id": "wsp-q12",
    "prompt": "Quelles pratiques durcissent un serveur Windows ?",
    "skills": [
      "d-srv-hardening"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Utiliser LAPS et des comptes de service gérés (gMSA)"
      },
      {
        "id": "b",
        "text": "N’installer que les rôles nécessaires"
      },
      {
        "id": "c",
        "text": "Appliquer une référence de configuration (CIS, base Microsoft)"
      },
      {
        "id": "d",
        "text": "Partager le mot de passe administrateur entre tous les serveurs"
      }
    ]
  },
  {
    "id": "wsp-q13",
    "prompt": "Un contrôleur de domaine et un serveur de fichiers ordinaire peuvent partager les mêmes comptes d’administration sans risque.",
    "skills": [
      "d-srv-hardening"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "wsp-q14",
    "prompt": "Pourquoi isoler (hors ligne ou immuables) les sauvegardes ?",
    "skills": [
      "d-srv-supervision"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Pour économiser de l’espace disque sur les serveurs de production"
      },
      {
        "id": "b",
        "text": "Parce que les rançongiciels chiffrent aussi les sauvegardes accessibles"
      },
      {
        "id": "c",
        "text": "Parce que Windows l’impose pour toute sauvegarde de l’état système"
      },
      {
        "id": "d",
        "text": "Pour les rendre plus rapides à restaurer lors d’un incident sur un serveur"
      }
    ]
  },
  {
    "id": "wsp-q15",
    "prompt": "Vous mettez en service un contrôleur de domaine hébergeant le DNS. Décrivez les mesures de durcissement, la configuration DNS sécurisée et la stratégie de sauvegarde.",
    "skills": [
      "d-srv-hardening",
      "d-infra-services"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "wsp-q16",
    "prompt": "Une sauvegarde dont la restauration n’a jamais été testée n’est pas une vraie… (un mot)",
    "skills": [
      "d-srv-supervision"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "sauvegarde"
  },
  {
    "id": "wsp-q17",
    "prompt": "Quel type d’enregistrement DNS permet aux clients de localiser les contrôleurs de domaine ?",
    "skills": [
      "d-infra-services"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "SRV (localisation d’un service)"
      },
      {
        "id": "b",
        "text": "PTR (résolution inverse d’une adresse)"
      },
      {
        "id": "c",
        "text": "MX (serveur de messagerie du domaine)"
      },
      {
        "id": "d",
        "text": "CNAME (alias vers un autre nom)"
      }
    ]
  },
  {
    "id": "wsp-q18",
    "prompt": "Quel risque présente une zone DNS qui accepte les mises à jour dynamiques non sécurisées ?",
    "skills": [
      "d-infra-services"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Les mises à jour deviennent trop lentes pour que les postes retrouvent leurs serveurs"
      },
      {
        "id": "b",
        "text": "Le serveur DNS refuse de répondre aux requêtes des postes qui ne sont pas membres"
      },
      {
        "id": "c",
        "text": "La zone ne peut plus être répliquée entre les contrôleurs de domaine du réseau"
      },
      {
        "id": "d",
        "text": "N’importe quelle machine peut créer ou écraser des enregistrements pour rediriger"
      }
    ]
  },
  {
    "id": "wsp-q19",
    "prompt": "L’autorisation d’un serveur DHCP dans Active Directory empêche tout autre serveur DHCP de répondre aux clients du réseau.",
    "skills": [
      "d-infra-services"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "wsp-q20",
    "prompt": "Quel sigle désigne le transfert complet d’une zone DNS vers un autre serveur ? (sigle)",
    "skills": [
      "d-infra-services"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "sigle"
  },
  {
    "id": "wsp-q21",
    "prompt": "Quelles mesures protègent la résolution interne contre le détournement ?",
    "skills": [
      "d-infra-services"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Liste de blocage des requêtes globales conservée active (WPAD, ISATAP)"
      },
      {
        "id": "b",
        "text": "Droit de créer n’importe quel enregistrement accordé à tous les utilisateurs"
      },
      {
        "id": "c",
        "text": "Mises à jour dynamiques sécurisées uniquement"
      },
      {
        "id": "d",
        "text": "Droits de modification de la zone limités à quelques comptes"
      }
    ]
  },
  {
    "id": "wsp-q22",
    "prompt": "Quel est le rôle d’une autorité de certification émettrice (intermédiaire) ?",
    "skills": [
      "d-pki"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Conserver la clé de la racine et la remplacer lorsqu’elle arrive à expiration"
      },
      {
        "id": "b",
        "text": "Stocker les mots de passe des utilisateurs qui demandent un certificat"
      },
      {
        "id": "c",
        "text": "Délivrer au quotidien les certificats, avec l’autorisation de la racine"
      },
      {
        "id": "d",
        "text": "Remplacer le serveur DNS en publiant les noms des machines du domaine"
      }
    ]
  },
  {
    "id": "wsp-q23",
    "prompt": "Si la clé privée d’une autorité émettrice est volée, seuls les certificats futurs sont concernés.",
    "skills": [
      "d-pki"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "wsp-q24",
    "prompt": "Quel sigle désigne le service en ligne qui indique si un certificat est révoqué, comme alternative à la liste de révocation ? (sigle)",
    "skills": [
      "d-pki",
      "d-certificats"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "sigle"
  },
  {
    "id": "wsp-q25",
    "prompt": "Pourquoi sépare-t-on la racine et l’autorité émettrice sur deux niveaux ?",
    "skills": [
      "d-pki"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "On peut remplacer une émettrice compromise sans redéployer la confiance dans la racine"
      },
      {
        "id": "b",
        "text": "Les clients refusent tout certificat signé directement par une racine, quel que soit le cas"
      },
      {
        "id": "c",
        "text": "Cela divise par deux le temps nécessaire pour délivrer un certificat à un utilisateur"
      },
      {
        "id": "d",
        "text": "La racine ne peut techniquement pas signer autre chose qu’un autre certificat de racine"
      }
    ]
  },
  {
    "id": "wsp-q26",
    "prompt": "Quel risque particulier présente un certificat « wildcard » (*.exemple.fr) ?",
    "skills": [
      "d-pki",
      "d-certificats"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Il ne peut pas être révoqué, puisqu’il ne porte pas de nom précis"
      },
      {
        "id": "b",
        "text": "Il expire plus vite que les autres, ce qui provoque des pannes fréquentes"
      },
      {
        "id": "c",
        "text": "Il ne peut être utilisé que sur un seul serveur du domaine concerné"
      },
      {
        "id": "d",
        "text": "Sa clé compromise permet d’usurper tous les sous-domaines"
      }
    ]
  },
  {
    "id": "wsp-q27",
    "prompt": "À quoi sert l’extension « Subject Alternative Name » (SAN) d’un certificat ?",
    "skills": [
      "d-certificats"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "À désigner l’autorité de certification qui doit être contactée pour la révocation"
      },
      {
        "id": "b",
        "text": "À indiquer la date après laquelle il doit être renouvelé par son propriétaire"
      },
      {
        "id": "c",
        "text": "À lister les noms ou identités (DNS, courriel, UPN) pour lesquels il est valable"
      },
      {
        "id": "d",
        "text": "À chiffrer la clé privée qui est associée au certificat dans le magasin local"
      }
    ]
  },
  {
    "id": "wsp-q28",
    "prompt": "Un certificat dont personne ne surveille l’échéance peut provoquer une panne de service le jour de son expiration.",
    "skills": [
      "d-certificats"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "wsp-q29",
    "prompt": "Quelles pratiques réduisent les risques liés à la gestion des certificats ?",
    "skills": [
      "d-certificats"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Rendre non exportables les clés des certificats d’authentification"
      },
      {
        "id": "b",
        "text": "Privilégier des durées courtes avec renouvellement automatique"
      },
      {
        "id": "c",
        "text": "Autoriser l’export de toutes les clés privées pour faciliter les sauvegardes"
      },
      {
        "id": "d",
        "text": "Tenir un inventaire et surveiller les dates d’expiration"
      }
    ]
  },
  {
    "id": "wsp-q30",
    "prompt": "Quelle protection récente vérifie qu’un certificat d’authentification correspond bien au compte qui l’utilise ?",
    "skills": [
      "d-certificats",
      "d-pki"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le renouvellement quotidien de tous les certificats d’authentification"
      },
      {
        "id": "b",
        "text": "Le mappage fort, qui lie le certificat à l’identifiant (SID) du compte"
      },
      {
        "id": "c",
        "text": "La suppression de l’extension de nom alternatif dans tous les certificats"
      },
      {
        "id": "d",
        "text": "Le chiffrement du certificat avec le mot de passe de l’utilisateur"
      }
    ]
  },
  {
    "id": "wsp-q31",
    "prompt": "Qu’est-ce qu’un compte de service géré de groupe (gMSA) ?",
    "skills": [
      "d-srv-hardening"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un compte local dont le mot de passe est écrit dans le script de l’application"
      },
      {
        "id": "b",
        "text": "Un compte dont l’annuaire génère et renouvelle seul le mot de passe"
      },
      {
        "id": "c",
        "text": "Un compte administrateur partagé par tous les serveurs d’un même groupe"
      },
      {
        "id": "d",
        "text": "Un compte invité sans mot de passe pour les services qui n’ont pas besoin d’accès"
      }
    ]
  },
  {
    "id": "wsp-q32",
    "prompt": "Que vise le modèle d’administration par niveaux (tiering) ?",
    "skills": [
      "d-srv-hardening"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Augmenter le nombre de comptes d’administration pour partager les responsabilités"
      },
      {
        "id": "b",
        "text": "Réserver les comptes administrateurs aux seuls postes situés dans les locaux"
      },
      {
        "id": "c",
        "text": "Répartir les comptes d’administration entre plusieurs équipes selon leur charge"
      },
      {
        "id": "d",
        "text": "Empêcher qu’un compte privilégié ouvre une session sur un système moins protégé"
      }
    ]
  },
  {
    "id": "wsp-q33",
    "prompt": "Des services inutiles peuvent rester actifs sur un serveur dès lors que le pare-feu Windows est activé.",
    "skills": [
      "d-srv-hardening"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "wsp-q34",
    "prompt": "Quels protocoles hérités faut-il désactiver ou restreindre sur un serveur ?",
    "skills": [
      "d-srv-hardening"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "SMBv1"
      },
      {
        "id": "b",
        "text": "Kerberos, qu’il faut remplacer partout par un protocole plus ancien"
      },
      {
        "id": "c",
        "text": "LLMNR et NetBIOS sur TCP/IP"
      },
      {
        "id": "d",
        "text": "NTLM, au moins en audit puis en restriction"
      }
    ]
  },
  {
    "id": "wsp-q35",
    "prompt": "Quel événement du journal de sécurité d’une autorité AD CS signale qu’une demande a été approuvée et un certificat délivré ?",
    "skills": [
      "d-srv-supervision",
      "d-certificats"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "4624"
      },
      {
        "id": "b",
        "text": "1102"
      },
      {
        "id": "c",
        "text": "4887"
      },
      {
        "id": "d",
        "text": "4698"
      }
    ]
  },
  {
    "id": "wsp-q36",
    "prompt": "À quoi sert une restauration faisant autorité d’Active Directory ?",
    "skills": [
      "d-srv-supervision"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "À imposer les objets restaurés aux autres contrôleurs, malgré la réplication"
      },
      {
        "id": "b",
        "text": "À remettre à zéro tous les mots de passe des comptes présents dans l’annuaire"
      },
      {
        "id": "c",
        "text": "À restaurer les fichiers des utilisateurs depuis la dernière sauvegarde du serveur"
      },
      {
        "id": "d",
        "text": "À copier la base d’annuaire sur un contrôleur qui n’a jamais été membre du domaine"
      }
    ]
  },
  {
    "id": "wsp-q37",
    "prompt": "Les sauvegardes d’un contrôleur de domaine doivent être accessibles avec des identifiants distincts de ceux de l’administration courante.",
    "skills": [
      "d-srv-supervision"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "wsp-q38",
    "prompt": "Dans la règle de sauvegarde « 3-2-1 », combien de copies des données faut-il conserver au total ? (nombre)",
    "skills": [
      "d-srv-supervision"
    ],
    "difficulty": 1,
    "type": "short",
    "placeholder": "nombre"
  },
  {
    "id": "wsp-q39",
    "prompt": "Quels éléments un plan de reprise après compromission d’Active Directory doit-il prévoir ?",
    "skills": [
      "d-srv-supervision"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "La restauration d’un contrôleur à partir d’une sauvegarde saine, antérieure à l’intrusion"
      },
      {
        "id": "b",
        "text": "Des procédures écrites, répétées lors d’exercices"
      },
      {
        "id": "c",
        "text": "La double réinitialisation du mot de passe du compte krbtgt"
      },
      {
        "id": "d",
        "text": "L’attente du départ de l’attaquant avant de prendre toute mesure"
      }
    ]
  },
  {
    "id": "wsp-q40",
    "prompt": "Un rançongiciel a chiffré les serveurs et les sauvegardes, stockées sur un partage réseau accessible avec le compte d’administration du domaine. Expliquez ce qui s’est passé et ce que la stratégie de sauvegarde aurait dû prévoir.",
    "skills": [
      "d-srv-supervision",
      "d-srv-hardening"
    ],
    "difficulty": 3,
    "type": "open"
  }
];
