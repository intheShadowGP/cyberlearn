// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "dwf-q1",
    "prompt": "Quelle différence y a-t-il entre le mode noyau et le mode utilisateur de Windows ?",
    "skills": [
      "d-base-architecture"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le mode utilisateur s’exécute seulement lorsque aucun compte n’est connecté au poste"
      },
      {
        "id": "b",
        "text": "Le mode noyau est réservé aux applications, le mode utilisateur au système lui-même"
      },
      {
        "id": "c",
        "text": "Le mode noyau accède directement au matériel ; les applications s’exécutent en mode utilisateur"
      },
      {
        "id": "d",
        "text": "Il n’y a pas de différence : les deux désignent un même niveau de privilèges"
      }
    ]
  },
  {
    "id": "dwf-q2",
    "prompt": "Le registre Windows est une base hiérarchique qui contient une grande partie de la configuration du système et des utilisateurs.",
    "skills": [
      "d-base-architecture"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "dwf-q3",
    "prompt": "Quelle commande ouvre l’éditeur du registre ?",
    "skills": [
      "d-base-architecture"
    ],
    "difficulty": 1,
    "type": "short",
    "placeholder": "commande"
  },
  {
    "id": "dwf-q4",
    "prompt": "Un service Windows peut s’exécuter alors qu’aucun utilisateur n’a ouvert de session sur le poste.",
    "skills": [
      "d-base-architecture"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "dwf-q5",
    "prompt": "Quel compte intégré, très privilégié, exécute de nombreux services système ?",
    "skills": [
      "d-base-architecture"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le compte Invité"
      },
      {
        "id": "b",
        "text": "Le compte de la première personne qui a installé Windows"
      },
      {
        "id": "c",
        "text": "Le compte du dernier utilisateur connecté au poste"
      },
      {
        "id": "d",
        "text": "Le compte système (LocalSystem)"
      }
    ]
  },
  {
    "id": "dwf-q6",
    "prompt": "Quels outils graphiques permettent d’inspecter les processus et les services d’un poste ?",
    "skills": [
      "d-base-architecture"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "La console des services (`services.msc`)"
      },
      {
        "id": "b",
        "text": "Le Moniteur de ressources"
      },
      {
        "id": "c",
        "text": "Le Gestionnaire des tâches"
      },
      {
        "id": "d",
        "text": "Le Bloc-notes, qui affiche les fichiers texte"
      }
    ]
  },
  {
    "id": "dwf-q7",
    "prompt": "Quelle commande affiche la version exacte de Windows installée sur le poste ?",
    "skills": [
      "d-base-architecture"
    ],
    "difficulty": 1,
    "type": "short",
    "placeholder": "commande"
  },
  {
    "id": "dwf-q8",
    "prompt": "Que désigne le SID d’un compte Windows ?",
    "skills": [
      "d-base-comptes"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un identifiant de sécurité unique attribué à un compte ou à un groupe"
      },
      {
        "id": "b",
        "text": "Le nom affiché dans l’écran de connexion du poste"
      },
      {
        "id": "c",
        "text": "La date jusqu’à laquelle le compte reste valide"
      },
      {
        "id": "d",
        "text": "Le mot de passe du compte, converti en une empreinte"
      }
    ]
  },
  {
    "id": "dwf-q9",
    "prompt": "Quelle différence y a-t-il entre un compte local et un compte de domaine ?",
    "skills": [
      "d-base-comptes"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le compte local est géré à distance, celui du domaine seulement sur le poste"
      },
      {
        "id": "b",
        "text": "Le compte local existe sur un poste ; celui du domaine dans l’annuaire de l’entreprise"
      },
      {
        "id": "c",
        "text": "Le compte de domaine ne fonctionne que sur un poste unique de l’entreprise"
      },
      {
        "id": "d",
        "text": "Le compte local est toujours administrateur, celui du domaine ne l’est jamais"
      }
    ]
  },
  {
    "id": "dwf-q10",
    "prompt": "Sur un poste Windows récent, le compte Administrateur intégré est activé par défaut.",
    "skills": [
      "d-base-comptes"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "dwf-q11",
    "prompt": "Quelle commande affiche le nom du compte avec lequel on est connecté ?",
    "skills": [
      "d-base-comptes"
    ],
    "difficulty": 1,
    "type": "short",
    "placeholder": "commande"
  },
  {
    "id": "dwf-q12",
    "prompt": "Pourquoi un code PIN Windows Hello est-il plus sûr qu’un mot de passe qui servirait à plusieurs sites ?",
    "skills": [
      "d-base-comptes"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Il peut être partagé sans risque entre plusieurs appareils de la même personne"
      },
      {
        "id": "b",
        "text": "Il est envoyé au service en ligne à chaque ouverture de session"
      },
      {
        "id": "c",
        "text": "Il n’est valable que sur l’appareil, protégé par la puce TPM"
      },
      {
        "id": "d",
        "text": "Il est chiffré avec une clé plus longue que celle du mot de passe"
      }
    ]
  },
  {
    "id": "dwf-q13",
    "prompt": "Quelles pratiques protègent les comptes d’un poste ?",
    "skills": [
      "d-base-comptes"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Activer l’authentification multifacteur quand elle existe"
      },
      {
        "id": "b",
        "text": "Partager le compte administrateur entre collègues pour dépanner"
      },
      {
        "id": "c",
        "text": "Choisir des mots de passe longs et uniques"
      },
      {
        "id": "d",
        "text": "Utiliser un compte standard pour le travail quotidien"
      }
    ]
  },
  {
    "id": "dwf-q14",
    "prompt": "Une personne travaille au quotidien avec un compte administrateur et ouvre une pièce jointe piégée. Expliquez ce qui change si elle travaillait avec un compte standard.",
    "skills": [
      "d-base-comptes",
      "d-base-protections"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "dwf-q15",
    "prompt": "Quel système de fichiers de Windows gère des permissions détaillées pour chaque fichier et dossier ?",
    "skills": [
      "d-base-fichiers"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "exFAT"
      },
      {
        "id": "b",
        "text": "ISO 9660"
      },
      {
        "id": "c",
        "text": "FAT32"
      },
      {
        "id": "d",
        "text": "NTFS"
      }
    ]
  },
  {
    "id": "dwf-q16",
    "prompt": "Un dossier partagé a la permission de partage « Lecture » pour Marie, alors que la permission NTFS de Marie sur le dossier est « Modification ». Quel droit a-t-elle quand elle y accède par le réseau ?",
    "skills": [
      "d-base-fichiers"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "La lecture seule, car on applique le plus restrictif des deux droits"
      },
      {
        "id": "b",
        "text": "La modification, car on applique le plus permissif des deux droits"
      },
      {
        "id": "c",
        "text": "Le contrôle total, car les deux droits s’additionnent pour un accès réseau"
      },
      {
        "id": "d",
        "text": "Aucun droit, car deux permissions différentes s’annulent mutuellement"
      }
    ]
  },
  {
    "id": "dwf-q17",
    "prompt": "Par défaut, un fichier ou un sous-dossier reçoit les permissions NTFS de son dossier parent.",
    "skills": [
      "d-base-fichiers"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "dwf-q18",
    "prompt": "Quelle commande en ligne de commande affiche et modifie les permissions NTFS d’un dossier ?",
    "skills": [
      "d-base-fichiers"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "commande"
  },
  {
    "id": "dwf-q19",
    "prompt": "Que peut faire le propriétaire d’un fichier NTFS, même s’il n’a aucun droit explicite ?",
    "skills": [
      "d-base-fichiers"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Supprimer toutes les ACL de tous les fichiers du disque"
      },
      {
        "id": "b",
        "text": "Modifier les permissions du fichier"
      },
      {
        "id": "c",
        "text": "Lire le fichier de tout autre utilisateur du poste"
      },
      {
        "id": "d",
        "text": "Rien : le propriétaire n’a plus de droit particulier"
      }
    ]
  },
  {
    "id": "dwf-q20",
    "prompt": "Quels dossiers ne doivent pas être modifiables par les utilisateurs ordinaires ?",
    "skills": [
      "d-base-fichiers"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "`C:\\Program Files`"
      },
      {
        "id": "b",
        "text": "Un dossier de scripts lancés par une tâche planifiée en SYSTEM"
      },
      {
        "id": "c",
        "text": "Le dossier Documents de chaque utilisateur"
      },
      {
        "id": "d",
        "text": "`C:\\Windows`"
      }
    ]
  },
  {
    "id": "dwf-q21",
    "prompt": "Copier un fichier sur une clé USB formatée en FAT32 conserve ses permissions NTFS.",
    "skills": [
      "d-base-fichiers"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "dwf-q22",
    "prompt": "Quelle forme ont les noms des commandes PowerShell (cmdlets) ?",
    "skills": [
      "d-base-cli"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Nom_Verbe, comme `Process_Get`"
      },
      {
        "id": "b",
        "text": "Verbe-Nom, comme `Get-Process`"
      },
      {
        "id": "c",
        "text": "Un nom libre, choisi par chaque auteur de commande"
      },
      {
        "id": "d",
        "text": "Une seule lettre suivie d’un chiffre, comme `p1`"
      }
    ]
  },
  {
    "id": "dwf-q23",
    "prompt": "Qu’est-ce qui distingue le tube (pipeline) de PowerShell de celui de cmd ?",
    "skills": [
      "d-base-cli"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Il transmet uniquement du texte brut, ligne par ligne"
      },
      {
        "id": "b",
        "text": "Il ne fonctionne qu’avec les commandes de l’administrateur"
      },
      {
        "id": "c",
        "text": "Il envoie la sortie d’une commande directement vers l’imprimante"
      },
      {
        "id": "d",
        "text": "Il transmet des objets, que l’on filtre sur leurs propriétés"
      }
    ]
  },
  {
    "id": "dwf-q24",
    "prompt": "Quelle cmdlet affiche l’aide d’une commande PowerShell ?",
    "skills": [
      "d-base-cli"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "cmdlet"
  },
  {
    "id": "dwf-q25",
    "prompt": "Quelle cmdlet liste les services Windows et leur état ?",
    "skills": [
      "d-base-cli"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`Get-Service`"
      },
      {
        "id": "b",
        "text": "`Get-Item`"
      },
      {
        "id": "c",
        "text": "`Get-Date`"
      },
      {
        "id": "d",
        "text": "`Get-Process`"
      }
    ]
  },
  {
    "id": "dwf-q26",
    "prompt": "Il faut toujours lancer PowerShell « en tant qu’administrateur » pour que ses commandes fonctionnent.",
    "skills": [
      "d-base-cli"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "dwf-q27",
    "prompt": "Quelles commandes aident à diagnostiquer un problème de réseau sur un poste ?",
    "skills": [
      "d-base-cli"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "`chkdsk`, qui vérifie l’état d’un disque"
      },
      {
        "id": "b",
        "text": "`tracert`, qui montre le chemin vers une destination"
      },
      {
        "id": "c",
        "text": "`ipconfig /all`, qui affiche l’adresse, la passerelle et le serveur DNS"
      },
      {
        "id": "d",
        "text": "`nslookup`, qui teste la résolution d’un nom"
      }
    ]
  },
  {
    "id": "dwf-q28",
    "prompt": "Que fait la commande `whoami /groups` ?",
    "skills": [
      "d-base-cli",
      "d-base-comptes"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Elle ferme la session du compte connecté sur le poste"
      },
      {
        "id": "b",
        "text": "Elle crée un groupe portant le nom du compte connecté"
      },
      {
        "id": "c",
        "text": "Elle liste les groupes dont le compte connecté est membre"
      },
      {
        "id": "d",
        "text": "Elle affiche tous les groupes du domaine, quel que soit le compte"
      }
    ]
  },
  {
    "id": "dwf-q29",
    "prompt": "Pourquoi faut-il installer rapidement les mises à jour de Windows ?",
    "skills": [
      "d-base-protections"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Elles corrigent des vulnérabilités déjà connues et exploitées"
      },
      {
        "id": "b",
        "text": "Elles servent seulement à ajouter de nouvelles fonctions"
      },
      {
        "id": "c",
        "text": "Elles remplacent l’antivirus installé sur le poste"
      },
      {
        "id": "d",
        "text": "Elles sont nécessaires uniquement pour les postes connectés à un domaine"
      }
    ]
  },
  {
    "id": "dwf-q30",
    "prompt": "Quel antivirus est intégré à Windows ?",
    "skills": [
      "d-base-protections"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Microsoft Guard Suite"
      },
      {
        "id": "b",
        "text": "Microsoft Defender Antivirus"
      },
      {
        "id": "c",
        "text": "Aucun : Windows n’embarque pas d’antivirus"
      },
      {
        "id": "d",
        "text": "Windows Shield Pro"
      }
    ]
  },
  {
    "id": "dwf-q31",
    "prompt": "Le pare-feu Windows est activé par défaut et bloque les connexions entrantes non sollicitées.",
    "skills": [
      "d-base-protections"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "dwf-q32",
    "prompt": "Que protège BitLocker, le chiffrement du disque de Windows ?",
    "skills": [
      "d-base-protections"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le poste contre les connexions entrantes venant d’Internet"
      },
      {
        "id": "b",
        "text": "Les courriels de l’utilisateur contre les messages frauduleux"
      },
      {
        "id": "c",
        "text": "Les données d’un disque perdu, volé ou retiré de l’appareil"
      },
      {
        "id": "d",
        "text": "Les fichiers contre un programme malveillant qui s’exécute en session"
      }
    ]
  },
  {
    "id": "dwf-q33",
    "prompt": "Quelles actions renforcent la sécurité de base d’un poste personnel ?",
    "skills": [
      "d-base-protections"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Utiliser un compte standard au quotidien"
      },
      {
        "id": "b",
        "text": "Laisser les mises à jour automatiques activées"
      },
      {
        "id": "c",
        "text": "Désactiver le contrôle de compte pour éviter les fenêtres de confirmation"
      },
      {
        "id": "d",
        "text": "Garder Defender et le pare-feu actifs"
      }
    ]
  },
  {
    "id": "dwf-q34",
    "prompt": "Quelle fonction de Windows avertit avant l’ouverture d’un programme ou d’un site peu connu ou malveillant ?",
    "skills": [
      "d-base-protections"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "nom"
  },
  {
    "id": "dwf-q35",
    "prompt": "Quel outil Windows permet de consulter les journaux d’événements ?",
    "skills": [
      "d-base-observation"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le Gestionnaire de périphériques"
      },
      {
        "id": "b",
        "text": "La Calculatrice"
      },
      {
        "id": "c",
        "text": "L’Éditeur du registre"
      },
      {
        "id": "d",
        "text": "L’Observateur d’événements"
      }
    ]
  },
  {
    "id": "dwf-q36",
    "prompt": "Quel identifiant d’événement du journal de sécurité signale un échec d’ouverture de session ? (nombre)",
    "skills": [
      "d-base-observation"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "nombre"
  },
  {
    "id": "dwf-q37",
    "prompt": "Par défaut, la taille d’un journal Windows est limitée et les entrées les plus anciennes finissent par être écrasées.",
    "skills": [
      "d-base-observation"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "dwf-q38",
    "prompt": "À quoi sert l’Historique des fichiers de Windows ?",
    "skills": [
      "d-base-observation",
      "d-base-protections"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "À enregistrer la liste des sites web consultés par l’utilisateur"
      },
      {
        "id": "b",
        "text": "À sauvegarder régulièrement les fichiers personnels, pour retrouver d’anciennes versions"
      },
      {
        "id": "c",
        "text": "À consigner les tentatives de connexion échouées sur le poste"
      },
      {
        "id": "d",
        "text": "À chiffrer les fichiers de l’utilisateur avec la clé du TPM"
      }
    ]
  },
  {
    "id": "dwf-q39",
    "prompt": "Un poste devient très lent. Quel premier réflexe d’observation est le plus utile ?",
    "skills": [
      "d-base-observation"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Ouvrir le Gestionnaire des tâches pour repérer le processus qui consomme le plus"
      },
      {
        "id": "b",
        "text": "Réinstaller Windows pour repartir d’un système propre sans attendre"
      },
      {
        "id": "c",
        "text": "Désactiver l’antivirus pendant quelques heures pour voir si le poste accélère"
      },
      {
        "id": "d",
        "text": "Supprimer des fichiers au hasard dans le dossier du système pour libérer de la place"
      }
    ]
  },
  {
    "id": "dwf-q40",
    "prompt": "Dans le journal de sécurité d’un poste, vous voyez une quarantaine d’événements 4625 sur un même compte en quelques minutes, puis un 4624. Expliquez comment les interpréter et quelles actions mener.",
    "skills": [
      "d-base-observation",
      "d-base-comptes"
    ],
    "difficulty": 3,
    "type": "open"
  }
];
