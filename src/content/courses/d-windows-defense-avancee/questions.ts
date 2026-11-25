// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "dwd-q1",
    "prompt": "Que signifie l’hypothèse de compromission (assume breach) ?",
    "skills": [
      "d-exp-menace"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Prévoir un budget de remplacement de tous les postes en cas d’incident"
      },
      {
        "id": "b",
        "text": "Considérer que le réseau est sûr tant qu’aucune alerte n’a été déclenchée"
      },
      {
        "id": "c",
        "text": "Refuser toute connexion venant de l’extérieur du réseau de l’entreprise"
      },
      {
        "id": "d",
        "text": "Concevoir les défenses en supposant l’attaquant déjà dans le réseau"
      }
    ]
  },
  {
    "id": "dwd-q2",
    "prompt": "À quoi sert principalement le référentiel MITRE ATT&CK pour un défenseur ?",
    "skills": [
      "d-exp-menace"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Décrire les techniques adverses pour cartographier détections et manques"
      },
      {
        "id": "b",
        "text": "Remplacer l’antivirus par une base de signatures de programmes malveillants"
      },
      {
        "id": "c",
        "text": "Attribuer une note de conformité officielle à un système d’information"
      },
      {
        "id": "d",
        "text": "Fixer la liste des correctifs à appliquer chaque mois sur les serveurs"
      }
    ]
  },
  {
    "id": "dwd-q3",
    "prompt": "Cartographier ses règles de détection sur ATT&CK permet de repérer les techniques qui ne sont pas couvertes.",
    "skills": [
      "d-exp-menace"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "dwd-q4",
    "prompt": "Dans ATT&CK, quelle tactique regroupe le vol d’identifiants, comme le vidage de la mémoire de LSASS ? (deux mots)",
    "skills": [
      "d-exp-menace"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "deux mots"
  },
  {
    "id": "dwd-q5",
    "prompt": "Pourquoi les comptes de service et d’administration sont-ils des cibles prioritaires dans un modèle de menace d’annuaire ?",
    "skills": [
      "d-exp-menace"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Ils ne génèrent aucun événement dans les journaux de sécurité du domaine"
      },
      {
        "id": "b",
        "text": "Ils cumulent privilèges élevés et secrets anciens, réutilisables"
      },
      {
        "id": "c",
        "text": "Ils sont plus nombreux que les comptes des utilisateurs ordinaires du domaine"
      },
      {
        "id": "d",
        "text": "Ils sont les seuls comptes à pouvoir se connecter à distance au domaine"
      }
    ]
  },
  {
    "id": "dwd-q6",
    "prompt": "Quelles données alimentent utilement le modèle de menace d’un domaine ?",
    "skills": [
      "d-exp-menace"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "La liste des services exposés et des relations d’approbation"
      },
      {
        "id": "b",
        "text": "L’inventaire des comptes privilégiés et de leurs sessions"
      },
      {
        "id": "c",
        "text": "Le nombre de fonds d’écran déployés par stratégie de groupe"
      },
      {
        "id": "d",
        "text": "Un graphe des chemins d’attaque entre comptes, machines et droits"
      }
    ]
  },
  {
    "id": "dwd-q7",
    "prompt": "Un modèle de menace se construit une fois pour toutes lors de la conception du domaine et n’a plus besoin d’être revu.",
    "skills": [
      "d-exp-menace"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "dwd-q8",
    "prompt": "Quel est l’intérêt d’une station d’administration privilégiée (PAW) ?",
    "skills": [
      "d-exp-durcissement"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un serveur de sauvegarde conservé dans un local protégé du site"
      },
      {
        "id": "b",
        "text": "Un poste plus puissant pour exécuter plus vite les tâches d’administration"
      },
      {
        "id": "c",
        "text": "Un poste dédié et durci pour administrer, sans messagerie ni navigation web"
      },
      {
        "id": "d",
        "text": "Un poste partagé par tous les administrateurs, qui y laissent leurs sessions ouvertes"
      }
    ]
  },
  {
    "id": "dwd-q9",
    "prompt": "Que signifie « Just-In-Time » appliqué aux privilèges d’administration ?",
    "skills": [
      "d-exp-durcissement"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un droit accordé à la demande pour une durée limitée, puis retiré"
      },
      {
        "id": "b",
        "text": "Un droit réservé au compte qui a créé la ressource concernée"
      },
      {
        "id": "c",
        "text": "Un droit attribué à chaque administrateur le premier jour de chaque mois"
      },
      {
        "id": "d",
        "text": "Un droit accordé en permanence aux administrateurs, avec une alerte à l’usage"
      }
    ]
  },
  {
    "id": "dwd-q10",
    "prompt": "À quoi sert la liaison de canal LDAP (channel binding), en plus de la signature LDAP ?",
    "skills": [
      "d-exp-durcissement"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "À chiffrer le contenu des objets de l’annuaire stockés sur le disque"
      },
      {
        "id": "b",
        "text": "À lier l’authentification au canal TLS pour empêcher son relais"
      },
      {
        "id": "c",
        "text": "À accélérer les requêtes LDAP des applications envoyées au contrôleur"
      },
      {
        "id": "d",
        "text": "À interdire à tout utilisateur la lecture des objets de l’annuaire"
      }
    ]
  },
  {
    "id": "dwd-q11",
    "prompt": "Quel sigle désigne la fonction PowerShell qui limite une session déléguée aux seules commandes nécessaires à une tâche ? (sigle)",
    "skills": [
      "d-exp-durcissement"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "sigle"
  },
  {
    "id": "dwd-q12",
    "prompt": "Auditer l’usage de NTLM avant de le restreindre permet d’éviter de casser les applications qui en dépendent encore.",
    "skills": [
      "d-exp-durcissement"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "dwd-q13",
    "prompt": "Quelles mesures limitent le relais d’authentifications NTLM ?",
    "skills": [
      "d-exp-durcissement"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Autoriser NTLMv1 pour garder la compatibilité avec les anciens clients"
      },
      {
        "id": "b",
        "text": "Activer la protection étendue sur les services web, dont l’inscription AD CS"
      },
      {
        "id": "c",
        "text": "Imposer la signature SMB"
      },
      {
        "id": "d",
        "text": "Imposer la signature LDAP avec la liaison de canal"
      }
    ]
  },
  {
    "id": "dwd-q14",
    "prompt": "Un administrateur protégé par une authentification multifacteur voit son compte utilisé par un attaquant. Expliquez comment cela est possible et ce que les PAW, les politiques d’authentification et les droits à la demande changent.",
    "skills": [
      "d-exp-durcissement",
      "d-exp-menace"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "dwd-q15",
    "prompt": "Qu’est-ce qu’un honeytoken ?",
    "skills": [
      "d-exp-detection"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un mot de passe rangé dans un coffre-fort numérique de l’entreprise"
      },
      {
        "id": "b",
        "text": "Un jeton d’authentification à durée de vie très longue pour les services"
      },
      {
        "id": "c",
        "text": "Un certificat émis automatiquement pour chaque nouveau poste de travail"
      },
      {
        "id": "d",
        "text": "Un objet sans usage légitime dont toute utilisation signale un attaquant"
      }
    ]
  },
  {
    "id": "dwd-q16",
    "prompt": "Pourquoi une règle de détection d’extraction par réplication doit-elle exclure les comptes de contrôleurs de domaine ?",
    "skills": [
      "d-exp-detection",
      "d-exp-attaques"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Ils ne peuvent jamais être compromis par un attaquant du domaine"
      },
      {
        "id": "b",
        "text": "Ils n’utilisent jamais les droits de réplication pour échanger leurs données"
      },
      {
        "id": "c",
        "text": "Ils se répliquent légitimement en permanence, d’où des alertes inutiles"
      },
      {
        "id": "d",
        "text": "Leurs événements ne sont pas collectés par le système de supervision"
      }
    ]
  },
  {
    "id": "dwd-q17",
    "prompt": "Une règle de détection qui n’a jamais déclenché d’alerte est forcément efficace.",
    "skills": [
      "d-exp-detection"
    ],
    "difficulty": 3,
    "type": "truefalse"
  },
  {
    "id": "dwd-q18",
    "prompt": "Comment s’appelle le format ouvert, indépendant des plateformes, utilisé pour décrire des règles de détection sur des journaux ? (nom)",
    "skills": [
      "d-exp-detection"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "nom"
  },
  {
    "id": "dwd-q19",
    "prompt": "Pourquoi activer la journalisation des modifications d’objets d’annuaire (événement 5136) ?",
    "skills": [
      "d-exp-detection"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Pour chiffrer les attributs des comptes avant leur écriture dans l’annuaire"
      },
      {
        "id": "b",
        "text": "Pour accélérer la réplication entre les contrôleurs de domaine du réseau"
      },
      {
        "id": "c",
        "text": "Pour repérer les modifications de GPO, d’ACL et de groupes sensibles"
      },
      {
        "id": "d",
        "text": "Pour limiter la taille de la base de l’annuaire sur le disque du contrôleur"
      }
    ]
  },
  {
    "id": "dwd-q20",
    "prompt": "Quelles pratiques améliorent la qualité d’une règle de détection ?",
    "skills": [
      "d-exp-detection"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "La tester sur une attaque simulée et sur un fonctionnement normal"
      },
      {
        "id": "b",
        "text": "Documenter la réponse attendue pour chaque alerte"
      },
      {
        "id": "c",
        "text": "Mesurer ses faux positifs et ajuster ses exclusions avec contrôle"
      },
      {
        "id": "d",
        "text": "La désactiver dès qu’elle produit sa première alerte"
      }
    ]
  },
  {
    "id": "dwd-q21",
    "prompt": "Que fait un service comme Microsoft Defender for Identity ?",
    "skills": [
      "d-exp-detection"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Il analyse journaux et trafic des contrôleurs pour détecter des attaques"
      },
      {
        "id": "b",
        "text": "Il remplace les contrôleurs de domaine par un service entièrement hébergé"
      },
      {
        "id": "c",
        "text": "Il sauvegarde chaque nuit la base de l’annuaire vers un autre site"
      },
      {
        "id": "d",
        "text": "Il chiffre les mots de passe des comptes avant leur stockage dans l’annuaire"
      }
    ]
  },
  {
    "id": "dwd-q22",
    "prompt": "Qu’est-ce que DCShadow ?",
    "skills": [
      "d-exp-attaques"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Une sauvegarde de l’état système conservée en dehors du domaine"
      },
      {
        "id": "b",
        "text": "Une fausse machine déclarée contrôleur pour injecter des changements"
      },
      {
        "id": "c",
        "text": "Un service qui duplique les journaux des contrôleurs vers un autre serveur"
      },
      {
        "id": "d",
        "text": "Une copie cachée de la base d’annuaire conservée sur un poste de travail"
      }
    ]
  },
  {
    "id": "dwd-q23",
    "prompt": "Pourquoi une modification de l’ACL d’AdminSDHolder est-elle une persistance efficace pour un attaquant ?",
    "skills": [
      "d-exp-attaques"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Elle ne laisse aucune trace dans l’annuaire une fois appliquée"
      },
      {
        "id": "b",
        "text": "Elle supprime l’ensemble des comptes d’administration du domaine"
      },
      {
        "id": "c",
        "text": "Elle désactive la journalisation sur les contrôleurs du domaine"
      },
      {
        "id": "d",
        "text": "Elle se réapplique régulièrement aux comptes protégés"
      }
    ]
  },
  {
    "id": "dwd-q24",
    "prompt": "Le relais d’une authentification NTLM vers le service web d’inscription d’AD CS peut permettre d’obtenir un certificat au nom du compte relayé.",
    "skills": [
      "d-exp-attaques"
    ],
    "difficulty": 3,
    "type": "truefalse"
  },
  {
    "id": "dwd-q25",
    "prompt": "Comment nomme-t-on l’attaque qui consiste à faire suivre une authentification NTLM interceptée vers un autre serveur ? (deux mots)",
    "skills": [
      "d-exp-attaques"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "deux mots"
  },
  {
    "id": "dwd-q26",
    "prompt": "Quelles constatations évoquent une persistance dans l’annuaire ?",
    "skills": [
      "d-exp-attaques",
      "d-exp-detection"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Un certificat d’authentification émis pour un compte privilégié hors processus"
      },
      {
        "id": "b",
        "text": "Un compte avec un historique de SID inattendu"
      },
      {
        "id": "c",
        "text": "Un redémarrage planifié d’un serveur de fichiers un dimanche"
      },
      {
        "id": "d",
        "text": "Une ACL ajoutée sur le conteneur AdminSDHolder"
      }
    ]
  },
  {
    "id": "dwd-q27",
    "prompt": "Que sont les « shadow credentials » ?",
    "skills": [
      "d-exp-attaques"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Des certificats racines installés sans que l’utilisateur le sache"
      },
      {
        "id": "b",
        "text": "Une clé ajoutée à un compte pour s’authentifier à sa place"
      },
      {
        "id": "c",
        "text": "Des mots de passe cachés dans le registre d’un poste de travail"
      },
      {
        "id": "d",
        "text": "Des comptes de service dont le mot de passe est renouvelé en cachette"
      }
    ]
  },
  {
    "id": "dwd-q28",
    "prompt": "Quel réglage empêche un utilisateur ordinaire de créer des comptes machines, utilisés dans plusieurs abus de délégation ?",
    "skills": [
      "d-exp-attaques",
      "d-exp-durcissement"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Mettre le quota de comptes machines à zéro"
      },
      {
        "id": "b",
        "text": "Désactiver la journalisation des événements de création de comptes"
      },
      {
        "id": "c",
        "text": "Ajouter tous les utilisateurs au groupe des opérateurs de compte"
      },
      {
        "id": "d",
        "text": "Interdire l’ouverture de session des utilisateurs sur les contrôleurs"
      }
    ]
  },
  {
    "id": "dwd-q29",
    "prompt": "Qu’apporte l’accès conditionnel dans une identité hybride ?",
    "skills": [
      "d-exp-hybride"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Il impose à tous les utilisateurs d’employer le même appareil professionnel"
      },
      {
        "id": "b",
        "text": "Il supprime la nécessité de contrôler les rôles privilégiés du cloud"
      },
      {
        "id": "c",
        "text": "Il évalue identité, appareil, lieu et risque avant d’accorder l’accès"
      },
      {
        "id": "d",
        "text": "Il remplace le mot de passe par un code envoyé sur chaque poste"
      }
    ]
  },
  {
    "id": "dwd-q30",
    "prompt": "Pourquoi ne faut-il pas attribuer de rôles privilégiés du cloud à des comptes synchronisés depuis l’annuaire local ?",
    "skills": [
      "d-exp-hybride"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Ces comptes ne peuvent se connecter qu’à l’intérieur du réseau local"
      },
      {
        "id": "b",
        "text": "Le cloud refuse tout compte qui est issu de l’annuaire de l’entreprise"
      },
      {
        "id": "c",
        "text": "Les comptes synchronisés ne peuvent pas utiliser le multifacteur"
      },
      {
        "id": "d",
        "text": "Une compromission locale donnerait alors un accès privilégié au cloud"
      }
    ]
  },
  {
    "id": "dwd-q31",
    "prompt": "Un jeton de session volé après une authentification multifacteur peut permettre à un attaquant d’accéder au service sans repasser par le second facteur.",
    "skills": [
      "d-exp-hybride"
    ],
    "difficulty": 3,
    "type": "truefalse"
  },
  {
    "id": "dwd-q32",
    "prompt": "Quel sigle désigne le service qui rend les rôles privilégiés du cloud activables temporairement, à la demande ? (sigle)",
    "skills": [
      "d-exp-hybride"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "sigle"
  },
  {
    "id": "dwd-q33",
    "prompt": "Quelles mesures sécurisent la synchronisation entre l’annuaire local et le service d’identité du cloud ?",
    "skills": [
      "d-exp-hybride"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Surveiller les changements de configuration de la synchronisation"
      },
      {
        "id": "b",
        "text": "Traiter le serveur de synchronisation comme un actif de niveau 0"
      },
      {
        "id": "c",
        "text": "Protéger le compte de synchronisation et limiter ses droits"
      },
      {
        "id": "d",
        "text": "Exposer le serveur de synchronisation à Internet pour faciliter sa maintenance"
      }
    ]
  },
  {
    "id": "dwd-q34",
    "prompt": "Un attaquant a pris le contrôle du serveur de synchronisation entre l’annuaire local et le cloud. Expliquez ce qu’il peut faire et comment vous réagissez.",
    "skills": [
      "d-exp-hybride",
      "d-exp-reponse"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "dwd-q35",
    "prompt": "Quel est l’ordre logique général d’une réponse à incident sur un annuaire ?",
    "skills": [
      "d-exp-reponse"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Retour d’expérience, triage, éradication, confinement, collecte, reconstruction"
      },
      {
        "id": "b",
        "text": "Reconstruction, confinement, triage, collecte, éradication, retour d’expérience"
      },
      {
        "id": "c",
        "text": "Triage, confinement, collecte, éradication, reconstruction, retour d’expérience"
      },
      {
        "id": "d",
        "text": "Éradication, collecte, triage, reconstruction, confinement, retour d’expérience"
      }
    ]
  },
  {
    "id": "dwd-q36",
    "prompt": "Pourquoi capturer la mémoire d’une machine suspecte avant de l’éteindre ?",
    "skills": [
      "d-exp-reponse"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "L’extinction d’une machine compromise détruit définitivement tous les fichiers du disque"
      },
      {
        "id": "b",
        "text": "Elle contient processus, connexions, clés et code absents du disque, perdus à l’arrêt"
      },
      {
        "id": "c",
        "text": "Le système refuse de s’éteindre tant que la mémoire n’a pas été sauvegardée"
      },
      {
        "id": "d",
        "text": "La mémoire est la seule source qui contient les journaux d’événements du poste"
      }
    ]
  },
  {
    "id": "dwd-q37",
    "prompt": "Isoler une machine compromise implique de l’éteindre immédiatement.",
    "skills": [
      "d-exp-reponse"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "dwd-q38",
    "prompt": "Comment nomme-t-on l’exercice où l’équipe offensive et l’équipe défensive collaborent pour améliorer les détections ? (deux mots)",
    "skills": [
      "d-exp-reponse",
      "d-exp-detection"
    ],
    "difficulty": 1,
    "type": "short",
    "placeholder": "deux mots"
  },
  {
    "id": "dwd-q39",
    "prompt": "Quelles actions relèvent de l’éradication après une compromission d’annuaire ?",
    "skills": [
      "d-exp-reponse"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Réinitialiser les secrets que l’attaquant a pu copier"
      },
      {
        "id": "b",
        "text": "Reconstruire les systèmes dont l’intégrité est incertaine"
      },
      {
        "id": "c",
        "text": "Retirer les persistances (tâches, services, ACL, certificats, clés)"
      },
      {
        "id": "d",
        "text": "Supprimer les journaux de l’incident pour repartir d’une base propre"
      }
    ]
  },
  {
    "id": "dwd-q40",
    "prompt": "Votre supervision signale un événement 4662 avec les droits de réplication, émis par un compte d’employé depuis un poste de travail, puis une GPO modifiée par le même compte. Décrivez votre démarche de réponse, du triage à la reconstruction.",
    "skills": [
      "d-exp-reponse",
      "d-exp-attaques"
    ],
    "difficulty": 3,
    "type": "open"
  }
];
