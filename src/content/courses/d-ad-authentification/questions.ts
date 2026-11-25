// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "ad-q1",
    "prompt": "Quel serveur héberge la base de l’annuaire Active Directory et authentifie les utilisateurs ?",
    "skills": [
      "d-ad-struct"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le proxy web des postes de travail"
      },
      {
        "id": "b",
        "text": "Le serveur DHCP du réseau local"
      },
      {
        "id": "c",
        "text": "Le serveur de fichiers de l’entreprise"
      },
      {
        "id": "d",
        "text": "Le contrôleur de domaine"
      }
    ]
  },
  {
    "id": "ad-q2",
    "prompt": "Une GPO modifiable par un attaquant peut lui permettre d’exécuter du code sur toutes les machines auxquelles elle s’applique.",
    "skills": [
      "d-ad-struct"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "ad-q3",
    "prompt": "Quel est le nom du fichier de base de données d’Active Directory sur un contrôleur de domaine ?",
    "skills": [
      "d-ad-struct"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "nom de fichier"
  },
  {
    "id": "ad-q4",
    "prompt": "Avec la clé de quel compte le TGT est-il chiffré ?",
    "skills": [
      "d-kerberos"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Celle du compte krbtgt"
      },
      {
        "id": "b",
        "text": "Celle du compte machine du poste client"
      },
      {
        "id": "c",
        "text": "Celle de l’utilisateur qui s’authentifie"
      },
      {
        "id": "d",
        "text": "Celle du compte Administrateur du domaine"
      }
    ]
  },
  {
    "id": "ad-q5",
    "prompt": "Avec la clé de quel compte un ticket de service (TGS) est-il chiffré ?",
    "skills": [
      "d-kerberos"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le compte de l’utilisateur qui demande le ticket de service"
      },
      {
        "id": "b",
        "text": "Le compte qui exécute le service visé (associé au SPN)"
      },
      {
        "id": "c",
        "text": "Le compte krbtgt, comme pour tous les tickets du domaine"
      },
      {
        "id": "d",
        "text": "Aucun : le ticket circule en clair entre le client et le serveur"
      }
    ]
  },
  {
    "id": "ad-q6",
    "prompt": "Avec NTLM, un attaquant qui possède l’empreinte NT d’un utilisateur peut s’authentifier sans connaître son mot de passe.",
    "skills": [
      "d-kerberos",
      "d-ad-attacks"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "ad-q7",
    "prompt": "Quel identifiant d’événement Windows correspond à une demande de ticket de service Kerberos ? (nombre)",
    "skills": [
      "d-kerberos",
      "d-ad-detect"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "nombre"
  },
  {
    "id": "ad-q8",
    "prompt": "Une même source génère 300 événements 4625 sur 300 comptes différents en deux minutes, puis un 4624. De quoi s’agit-il ?",
    "skills": [
      "d-ad-attacks",
      "d-ad-detect"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "D’une réplication normale entre les contrôleurs de domaine"
      },
      {
        "id": "b",
        "text": "D’une force brute menée contre un seul compte privilégié"
      },
      {
        "id": "c",
        "text": "D’une pulvérisation de mots de passe probablement réussie"
      },
      {
        "id": "d",
        "text": "D’un Kerberoasting mené contre un compte de service"
      }
    ]
  },
  {
    "id": "ad-q9",
    "prompt": "Quelles conditions rendent le Kerberoasting efficace pour un attaquant ?",
    "skills": [
      "d-ad-attacks"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Un mot de passe de compte de service qui n’est jamais changé"
      },
      {
        "id": "b",
        "text": "L’utilisation de gMSA pour les comptes de service"
      },
      {
        "id": "c",
        "text": "Le chiffrement RC4 encore autorisé"
      },
      {
        "id": "d",
        "text": "Un compte de service avec SPN et un mot de passe faible"
      }
    ]
  },
  {
    "id": "ad-q10",
    "prompt": "Qu’est-ce qu’un « golden ticket » ?",
    "skills": [
      "d-ad-attacks"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un certificat racine émis par la PKI interne de l’entreprise"
      },
      {
        "id": "b",
        "text": "Un TGT forgé à l’aide de l’empreinte du compte krbtgt"
      },
      {
        "id": "c",
        "text": "Un ticket de service obtenu par Kerberoasting sur un compte"
      },
      {
        "id": "d",
        "text": "Un jeton de session web volé dans le navigateur d’un utilisateur"
      }
    ]
  },
  {
    "id": "ad-q11",
    "prompt": "Quelles mesures limitent le mouvement latéral entre postes de travail ?",
    "skills": [
      "d-ad-detect"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Interdire aux comptes tier 0 de se connecter sur les postes"
      },
      {
        "id": "b",
        "text": "Windows LAPS (mot de passe administrateur local unique par poste)"
      },
      {
        "id": "c",
        "text": "Utiliser la même image et le même mot de passe local partout"
      },
      {
        "id": "d",
        "text": "Bloquer SMB entre postes de travail au pare-feu"
      }
    ]
  },
  {
    "id": "ad-q12",
    "prompt": "Après une compromission du domaine, renouveler une seule fois le mot de passe de krbtgt suffit à invalider tous les golden tickets.",
    "skills": [
      "d-ad-detect"
    ],
    "difficulty": 3,
    "type": "truefalse"
  },
  {
    "id": "ad-q13",
    "prompt": "Quel identifiant d’événement indique le verrouillage d’un compte utilisateur ? (nombre)",
    "skills": [
      "d-ad-detect",
      "d-ad-attacks"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "nombre"
  },
  {
    "id": "ad-q14",
    "prompt": "Décrivez le scénario par lequel la compromission d’un seul poste de travail peut mener à la compromission totale du domaine, et les trois mesures qui casseraient cette chaîne le plus efficacement.",
    "skills": [
      "d-ad-attacks",
      "d-ad-detect"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "ad-q15",
    "prompt": "Expliquez à un collègue débutant la différence entre un TGT et un ticket de service, et pourquoi le DC n’intervient pas lors de la présentation du ticket au serveur.",
    "skills": [
      "d-kerberos",
      "d-ad-struct"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "ad-q16",
    "prompt": "Quel groupe de sécurité Windows empêche notamment l’usage de NTLM et de RC4 pour ses membres ?",
    "skills": [
      "d-ad-struct",
      "d-ad-detect"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Opérateurs de sauvegarde"
      },
      {
        "id": "b",
        "text": "Utilisateurs du Bureau à distance"
      },
      {
        "id": "c",
        "text": "Utilisateurs du domaine"
      },
      {
        "id": "d",
        "text": "Protected Users"
      }
    ]
  },
  {
    "id": "ad-q17",
    "prompt": "Un administrateur affirme : « nos comptes de service sont des gMSA, donc le Kerberoasting ne peut rien contre eux ». Quelle est la nuance correcte ?",
    "skills": [
      "d-ad-attacks",
      "d-ad-detect"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Possible, mais le mot de passe aléatoire d’un gMSA rend le cassage irréaliste"
      },
      {
        "id": "b",
        "text": "C’est exact : un gMSA ne peut pas recevoir de ticket de service du tout"
      },
      {
        "id": "c",
        "text": "Le Kerberoasting ne vise que les comptes utilisateurs, jamais les comptes de service"
      },
      {
        "id": "d",
        "text": "C’est exact uniquement si le chiffrement RC4 est désactivé dans le domaine"
      }
    ]
  },
  {
    "id": "ad-q18",
    "prompt": "Qu’est-ce qu’une forêt Active Directory ?",
    "skills": [
      "d-ad-struct"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Une sauvegarde complète de l’annuaire conservée dans un autre site"
      },
      {
        "id": "b",
        "text": "Un groupe de contrôleurs de domaine installés sur un même site"
      },
      {
        "id": "c",
        "text": "Des domaines partageant un schéma et une frontière de sécurité"
      },
      {
        "id": "d",
        "text": "Une liste de tous les utilisateurs qui ont le droit de se connecter"
      }
    ]
  },
  {
    "id": "ad-q19",
    "prompt": "À quoi sert une unité d’organisation (OU) ?",
    "skills": [
      "d-ad-struct"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "À créer une approbation entre deux forêts appartenant à des entreprises distinctes"
      },
      {
        "id": "b",
        "text": "À stocker les empreintes des mots de passe de tous les utilisateurs"
      },
      {
        "id": "c",
        "text": "À chiffrer les objets de l’annuaire avant leur réplication entre contrôleurs"
      },
      {
        "id": "d",
        "text": "À ranger des objets, déléguer leur administration et leur appliquer des GPO"
      }
    ]
  },
  {
    "id": "ad-q20",
    "prompt": "Tout utilisateur authentifié du domaine peut lire, par LDAP, une grande partie des objets de l’annuaire.",
    "skills": [
      "d-ad-struct"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "ad-q21",
    "prompt": "Quel numéro de port TCP utilise LDAPS, c’est-à-dire LDAP protégé par TLS ? (nombre)",
    "skills": [
      "d-ad-struct"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "port"
  },
  {
    "id": "ad-q22",
    "prompt": "Qu’est-ce que la pré-authentification Kerberos ?",
    "skills": [
      "d-kerberos"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "La demande d’un second facteur avant toute ouverture de session"
      },
      {
        "id": "b",
        "text": "Le chiffrement de la connexion par TLS avant l’échange de tickets"
      },
      {
        "id": "c",
        "text": "Le client prouve connaître sa clé avant de recevoir un TGT"
      },
      {
        "id": "d",
        "text": "La vérification de l’identité du serveur avant l’envoi du ticket"
      }
    ]
  },
  {
    "id": "ad-q23",
    "prompt": "Quel décalage d’horloge maximal, en minutes, Kerberos tolère-t-il par défaut entre le client et le KDC ? (nombre)",
    "skills": [
      "d-kerberos"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "minutes"
  },
  {
    "id": "ad-q24",
    "prompt": "Dans un domaine Active Directory moderne, NTLM est le protocole d’authentification utilisé par défaut.",
    "skills": [
      "d-kerberos"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "ad-q25",
    "prompt": "Que vise l’AS-REP roasting ?",
    "skills": [
      "d-ad-attacks"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Les comptes qui sont membres du groupe Protected Users"
      },
      {
        "id": "b",
        "text": "Les comptes sans pré-authentification, cassables hors ligne"
      },
      {
        "id": "c",
        "text": "Les comptes de service qui possèdent un nom de principal de service"
      },
      {
        "id": "d",
        "text": "Les contrôleurs de domaine dont l’horloge n’est pas synchronisée"
      }
    ]
  },
  {
    "id": "ad-q26",
    "prompt": "Quelles attaques réutilisent un secret ou un ticket volé sans connaître le mot de passe ?",
    "skills": [
      "d-ad-attacks"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Le golden ticket, qui forge un TGT avec une clé volée"
      },
      {
        "id": "b",
        "text": "Le pass-the-hash, qui réutilise l’empreinte NT"
      },
      {
        "id": "c",
        "text": "Le pass-the-ticket, qui réutilise un ticket Kerberos volé"
      },
      {
        "id": "d",
        "text": "La pulvérisation de mots de passe, qui teste des mots de passe courants"
      }
    ]
  },
  {
    "id": "ad-q27",
    "prompt": "Qu’est-ce qu’un « silver ticket » ?",
    "skills": [
      "d-ad-attacks",
      "d-kerberos"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un ticket de service forgé avec la clé du compte du service"
      },
      {
        "id": "b",
        "text": "Un ticket d’un compte de la forêt voisine, relayé par approbation"
      },
      {
        "id": "c",
        "text": "Un ticket qui a expiré, mais que le contrôleur accepte encore"
      },
      {
        "id": "d",
        "text": "Un TGT forgé avec la clé du compte de l’utilisateur ciblé"
      }
    ]
  },
  {
    "id": "ad-q28",
    "prompt": "Que signifie le type d’ouverture de session 3 dans un événement 4624 ?",
    "skills": [
      "d-ad-detect"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un service qui démarre avec le compte qui lui est configuré"
      },
      {
        "id": "b",
        "text": "Une session réseau, par exemple un accès à un partage"
      },
      {
        "id": "c",
        "text": "Une ouverture de session interactive, au clavier du poste"
      },
      {
        "id": "d",
        "text": "Un déverrouillage de session après un écran de veille"
      }
    ]
  },
  {
    "id": "ad-q29",
    "prompt": "Un événement 4771 avec le code 0x18 indique un échec de pré-authentification Kerberos dû à un mot de passe incorrect.",
    "skills": [
      "d-ad-detect"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "ad-q30",
    "prompt": "Quels événements surveiller pour repérer une élévation de privilèges dans Active Directory ?",
    "skills": [
      "d-ad-detect"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "4672 : privilèges spéciaux attribués à une ouverture de session"
      },
      {
        "id": "b",
        "text": "4720 : création d’un compte utilisateur"
      },
      {
        "id": "c",
        "text": "4634 : fermeture d’une session par un utilisateur"
      },
      {
        "id": "d",
        "text": "4728, 4732 et 4756 : ajout à un groupe de sécurité"
      }
    ]
  },
  {
    "id": "ad-q31",
    "prompt": "Quel événement permet de repérer une demande de réplication d’annuaire (DCSync) émise par un compte qui n’est pas un contrôleur ?",
    "skills": [
      "d-ad-detect",
      "d-ad-chemins"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "4740, un verrouillage d’un compte utilisateur du domaine"
      },
      {
        "id": "b",
        "text": "4769, une demande de ticket de service Kerberos"
      },
      {
        "id": "c",
        "text": "4625, un échec d’ouverture de session sur un poste"
      },
      {
        "id": "d",
        "text": "4662, avec les droits de réplication de l’annuaire"
      }
    ]
  },
  {
    "id": "ad-q32",
    "prompt": "Quel outil gratuit de l’ANSSI produit un état de sécurité d’un annuaire Active Directory ? (nom)",
    "skills": [
      "d-ad-detect"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "nom"
  },
  {
    "id": "ad-q33",
    "prompt": "Qu’est-ce que DCSync ?",
    "skills": [
      "d-ad-chemins"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Une copie automatique de la base d’annuaire vers un site distant de secours"
      },
      {
        "id": "b",
        "text": "Un outil d’administration qui compare les GPO entre deux contrôleurs"
      },
      {
        "id": "c",
        "text": "Un compte aux droits de réplication imite un contrôleur et obtient les empreintes"
      },
      {
        "id": "d",
        "text": "Une synchronisation d’horloge entre deux contrôleurs du même domaine de l’entreprise"
      }
    ]
  },
  {
    "id": "ad-q34",
    "prompt": "Pourquoi la délégation Kerberos non contrainte est-elle dangereuse ?",
    "skills": [
      "d-ad-chemins",
      "d-kerberos"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le serveur reçoit et conserve les TGT de ceux qui s’y connectent"
      },
      {
        "id": "b",
        "text": "Elle donne à tout utilisateur le droit de modifier les GPO du domaine"
      },
      {
        "id": "c",
        "text": "Elle force l’usage de NTLM au lieu de Kerberos entre les serveurs"
      },
      {
        "id": "d",
        "text": "Elle désactive la pré-authentification pour tous les comptes concernés"
      }
    ]
  },
  {
    "id": "ad-q35",
    "prompt": "Un utilisateur doit être membre d’un groupe privilégié pour pouvoir élever ses privilèges dans Active Directory.",
    "skills": [
      "d-ad-chemins"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "ad-q36",
    "prompt": "Pourquoi un graphe des relations de l’annuaire (de type BloodHound) est-il utile aux défenseurs ?",
    "skills": [
      "d-ad-chemins"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Il génère automatiquement les mots de passe des comptes de service"
      },
      {
        "id": "b",
        "text": "Il révèle les chemins indirects vers les comptes privilégiés, pour les couper"
      },
      {
        "id": "c",
        "text": "Il chiffre les relations d’approbation entre les domaines de la forêt"
      },
      {
        "id": "d",
        "text": "Il remplace la supervision des événements d’authentification du domaine entier"
      }
    ]
  },
  {
    "id": "ad-q37",
    "prompt": "Quelles mesures réduisent les risques de la délégation Kerberos ?",
    "skills": [
      "d-ad-chemins"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Remplacer la délégation non contrainte par une délégation contrainte"
      },
      {
        "id": "b",
        "text": "Marquer les comptes sensibles comme « ne peut pas être délégué »"
      },
      {
        "id": "c",
        "text": "Activer la délégation non contrainte sur tous les serveurs d’applications"
      },
      {
        "id": "d",
        "text": "Placer les comptes d’administration dans Protected Users"
      }
    ]
  },
  {
    "id": "ad-q38",
    "prompt": "Quel groupe intégré, très privilégié, donne le contrôle de l’ensemble d’un domaine Active Directory ? (deux mots)",
    "skills": [
      "d-ad-chemins",
      "d-ad-struct"
    ],
    "difficulty": 1,
    "type": "short",
    "placeholder": "deux mots"
  },
  {
    "id": "ad-q39",
    "prompt": "Un compte utilisateur ordinaire dispose du droit « GenericAll » sur un groupe privilégié. Quel est le risque ?",
    "skills": [
      "d-ad-chemins"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Il peut s’ajouter à ce groupe et obtenir ses privilèges"
      },
      {
        "id": "b",
        "text": "Il perd le droit de s’authentifier sur les contrôleurs"
      },
      {
        "id": "c",
        "text": "Il peut seulement consulter l’historique des modifications du groupe"
      },
      {
        "id": "d",
        "text": "Il peut seulement lire la liste des membres du groupe"
      }
    ]
  },
  {
    "id": "ad-q40",
    "prompt": "Un audit révèle que le groupe « Support niveau 1 » a le droit d’écrire sur une GPO liée à l’OU des serveurs. Expliquez le risque, comment le repérer à l’échelle du domaine et comment corriger.",
    "skills": [
      "d-ad-chemins",
      "d-ad-detect"
    ],
    "difficulty": 3,
    "type": "open"
  }
];
