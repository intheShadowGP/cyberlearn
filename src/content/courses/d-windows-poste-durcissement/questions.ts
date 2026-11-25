// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "wpo-q1",
    "prompt": "Pourquoi un utilisateur ne devrait-il pas travailler au quotidien avec un compte administrateur local ?",
    "skills": [
      "d-win-acces"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un programme malveillant lancé par l’utilisateur hérite des droits d’administration"
      },
      {
        "id": "b",
        "text": "Windows refuse de créer plus d’un compte administrateur sur un même poste de travail"
      },
      {
        "id": "c",
        "text": "Le poste démarre plus lentement lorsque la session s’ouvre avec un compte administrateur"
      },
      {
        "id": "d",
        "text": "Les comptes administrateurs ne peuvent pas utiliser les applications de la suite Office"
      }
    ]
  },
  {
    "id": "wpo-q2",
    "prompt": "Microsoft considère l’UAC comme une frontière de sécurité : contourner l’UAC est donc toujours traité comme une vulnérabilité critique.",
    "skills": [
      "d-win-acces"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "wpo-q3",
    "prompt": "Dans une sortie `icacls`, quelle abréviation désigne le contrôle total ?",
    "skills": [
      "d-win-acces"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "lettre"
  },
  {
    "id": "wpo-q4",
    "prompt": "Une tâche planifiée exécute en SYSTEM `C:\\Outils\\maj.ps1`, et `icacls C:\\Outils` montre `BUILTIN\\Utilisateurs:(OI)(CI)(M)`. Quelles affirmations sont exactes ?",
    "skills": [
      "d-win-acces"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Tout utilisateur peut modifier le script et faire exécuter son code en SYSTEM"
      },
      {
        "id": "b",
        "text": "Le risque disparaît si le script est signé, même sans vérification de la signature"
      },
      {
        "id": "c",
        "text": "(OI)(CI) signifie que la permission s’hérite aux fichiers et sous-dossiers"
      },
      {
        "id": "d",
        "text": "Il faut retirer la modification aux utilisateurs et ne leur laisser au plus que RX"
      }
    ]
  },
  {
    "id": "wpo-q5",
    "prompt": "Que vaut la stratégie d’exécution PowerShell `Restricted` face à un attaquant ?",
    "skills": [
      "d-win-powershell"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Elle n’autorise que les scripts signés par Microsoft, sans aucune possibilité de contournement"
      },
      {
        "id": "b",
        "text": "Peu de chose : elle se contourne avec `-ExecutionPolicy Bypass` et évite surtout les erreurs"
      },
      {
        "id": "c",
        "text": "Elle chiffre les scripts stockés sur le poste pour empêcher leur lecture par un attaquant"
      },
      {
        "id": "d",
        "text": "Elle bloque toute exécution de code PowerShell, y compris en ligne de commande"
      }
    ]
  },
  {
    "id": "wpo-q6",
    "prompt": "Quel est l’identifiant de l’événement qui enregistre les blocs de script PowerShell exécutés ?",
    "skills": [
      "d-win-powershell"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "numéro"
  },
  {
    "id": "wpo-q7",
    "prompt": "Une commande PowerShell encodée en Base64 (`-enc`) apparaît en clair dans l’événement de journalisation des blocs de script.",
    "skills": [
      "d-win-powershell"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "wpo-q8",
    "prompt": "Quelles mesures réduisent réellement l’usage malveillant de PowerShell ?",
    "skills": [
      "d-win-powershell"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Renommer `powershell.exe` pour que les scripts ne le trouvent plus"
      },
      {
        "id": "b",
        "text": "Journalisation des blocs de script collectée par le SIEM"
      },
      {
        "id": "c",
        "text": "Mode de langage restreint imposé par le contrôle des applications (App Control for Business ou AppLocker)"
      },
      {
        "id": "d",
        "text": "Suppression du moteur PowerShell 2.0"
      }
    ]
  },
  {
    "id": "wpo-q9",
    "prompt": "Que garantit la protection contre les falsifications de Microsoft Defender ?",
    "skills": [
      "d-win-protections"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Les fichiers du poste sont chiffrés tant que la session de l’utilisateur n’est pas ouverte"
      },
      {
        "id": "b",
        "text": "Le pare-feu bloque tout le trafic sortant du poste vers les adresses jugées suspectes"
      },
      {
        "id": "c",
        "text": "Un processus local, même administrateur, ne peut pas désactiver les réglages de protection"
      },
      {
        "id": "d",
        "text": "Les courriels reçus sont signés numériquement avant d’être remis dans la boîte de réception"
      }
    ]
  },
  {
    "id": "wpo-q10",
    "prompt": "Il est recommandé de déployer les règles de réduction de la surface d’attaque d’abord en mode audit, puis en mode blocage.",
    "skills": [
      "d-win-protections"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "wpo-q11",
    "prompt": "Concernant BitLocker, quelles affirmations sont exactes ?",
    "skills": [
      "d-win-protections"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Le mode TPM + code PIN protège mieux un portable volé contre certaines attaques physiques"
      },
      {
        "id": "b",
        "text": "BitLocker protège les fichiers contre un malware qui s’exécute pendant que la session est ouverte"
      },
      {
        "id": "c",
        "text": "En mode TPM seul, le disque se déverrouille automatiquement si la chaîne de démarrage est intacte"
      },
      {
        "id": "d",
        "text": "La clé de récupération doit être sauvegardée avant le chiffrement, par exemple dans l’annuaire"
      }
    ]
  },
  {
    "id": "wpo-q12",
    "prompt": "Un utilisateur nomade se connecte au Wi-Fi d’un hôtel. Expliquez quelles protections intégrées de Windows le protègent et comment elles doivent être réglées.",
    "skills": [
      "d-win-protections",
      "d-win-acces"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "wpo-q13",
    "prompt": "Quel événement Sysmon signale l’ouverture d’un autre processus, utile pour repérer un accès à `lsass.exe` ?",
    "skills": [
      "d-win-journaux"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "ID 3 (connexion réseau établie)"
      },
      {
        "id": "b",
        "text": "ID 11 (création d’un fichier sur le disque)"
      },
      {
        "id": "c",
        "text": "ID 22 (requête DNS d’un processus)"
      },
      {
        "id": "d",
        "text": "ID 10 (accès à un processus)"
      }
    ]
  },
  {
    "id": "wpo-q14",
    "prompt": "Quel identifiant d’événement Sysmon correspond à la création d’un processus ?",
    "skills": [
      "d-win-journaux"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "numéro"
  },
  {
    "id": "wpo-q15",
    "prompt": "Votre SOC ne voit rien de ce qui se passe sur les postes. Proposez une configuration de journalisation minimale mais utile, et expliquez ce qu’elle permettra de détecter.",
    "skills": [
      "d-win-journaux",
      "d-win-powershell"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "wpo-q16",
    "prompt": "Pourquoi faut-il une configuration de filtrage pour Sysmon ?",
    "skills": [
      "d-win-journaux"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "La configuration chiffre les événements avant qu’ils soient écrits dans le journal"
      },
      {
        "id": "b",
        "text": "Elle remplace l’antivirus en bloquant les programmes malveillants à leur lancement"
      },
      {
        "id": "c",
        "text": "Sysmon refuse de démarrer tant qu’aucun fichier de configuration n’est fourni"
      },
      {
        "id": "d",
        "text": "Sans filtrage, le volume d’événements devient ingérable et noie les signaux utiles"
      }
    ]
  },
  {
    "id": "wpo-q17",
    "prompt": "Que contient le jeton d’accès d’un processus Windows ?",
    "skills": [
      "d-win-acces"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "La clé de chiffrement du disque, remise au processus au démarrage"
      },
      {
        "id": "b",
        "text": "Le SID de l’utilisateur, ses groupes et ses privilèges"
      },
      {
        "id": "c",
        "text": "La liste des fichiers que le processus a le droit d’ouvrir"
      },
      {
        "id": "d",
        "text": "Le mot de passe de l’utilisateur, en clair, pour les accès réseau"
      }
    ]
  },
  {
    "id": "wpo-q18",
    "prompt": "Qu’apporte Windows LAPS sur un parc de postes ?",
    "skills": [
      "d-win-acces"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un chiffrement des mots de passe des utilisateurs stockés dans le registre du poste"
      },
      {
        "id": "b",
        "text": "Un mot de passe unique pour tous les postes, plus simple à retenir pour le support technique"
      },
      {
        "id": "c",
        "text": "Un mot de passe d’administrateur local propre à chaque poste, renouvelé automatiquement"
      },
      {
        "id": "d",
        "text": "Une authentification biométrique obligatoire pour toute ouverture de session locale"
      }
    ]
  },
  {
    "id": "wpo-q19",
    "prompt": "Sur NTFS, une entrée de refus explicite l’emporte sur une autorisation de même niveau, ce qui rend les refus difficiles à gérer.",
    "skills": [
      "d-win-acces"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "wpo-q20",
    "prompt": "Quelles mesures compliquent le vol d’identifiants en mémoire (de type Mimikatz) ?",
    "skills": [
      "d-win-acces",
      "d-win-protections"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Activer Credential Guard sur les postes compatibles"
      },
      {
        "id": "b",
        "text": "Éviter qu’un compte d’administration ouvre une session sur un poste ordinaire"
      },
      {
        "id": "c",
        "text": "Activer la protection LSA (RunAsPPL)"
      },
      {
        "id": "d",
        "text": "Désactiver l’UAC pour éviter les fenêtres de demande d’élévation"
      }
    ]
  },
  {
    "id": "wpo-q21",
    "prompt": "Que désigne l’expression « living off the land » ?",
    "skills": [
      "d-win-powershell"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "L’usage d’outils légitimes déjà présents (PowerShell, WMI) pour attaquer"
      },
      {
        "id": "b",
        "text": "L’installation d’un grand nombre d’outils d’attaque sur le poste de la victime"
      },
      {
        "id": "c",
        "text": "L’attaque d’un parc informatique depuis l’extérieur, sans aucun compte interne"
      },
      {
        "id": "d",
        "text": "La récupération des données du poste après sa destruction par un rançongiciel"
      }
    ]
  },
  {
    "id": "wpo-q22",
    "prompt": "Comment s’appelle le mode PowerShell qui limite l’accès à .NET et aux API Windows pour les scripts non approuvés ?",
    "skills": [
      "d-win-powershell"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "nom du mode"
  },
  {
    "id": "wpo-q23",
    "prompt": "Un attaquant lance `powershell -version 2 -enc …`. Que cherche-t-il ?",
    "skills": [
      "d-win-powershell",
      "d-win-journaux"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Utiliser l’ancien moteur, qui ne journalise pas les blocs de script"
      },
      {
        "id": "b",
        "text": "Exécuter son code avec les droits d’un autre compte du domaine"
      },
      {
        "id": "c",
        "text": "Contourner le pare-feu en changeant le port utilisé par PowerShell"
      },
      {
        "id": "d",
        "text": "Obtenir une fenêtre d’élévation plus facile à valider pour l’utilisateur"
      }
    ]
  },
  {
    "id": "wpo-q24",
    "prompt": "Un script téléchargé s’exécute directement en mémoire avec `IEX (New-Object Net.WebClient).DownloadString(...)`, sans écrire de fichier. Expliquez pourquoi un antivirus qui analyse les fichiers le voit mal et quelles protections ou journaux aident.",
    "skills": [
      "d-win-powershell",
      "d-win-protections"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "wpo-q25",
    "prompt": "Quel profil du pare-feu Windows s’applique sur un réseau inconnu, comme le Wi-Fi d’un café ?",
    "skills": [
      "d-win-protections"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le profil privé"
      },
      {
        "id": "b",
        "text": "Le profil d’invité"
      },
      {
        "id": "c",
        "text": "Le profil public"
      },
      {
        "id": "d",
        "text": "Le profil domaine"
      }
    ]
  },
  {
    "id": "wpo-q26",
    "prompt": "À quoi sert l’AMSI (interface d’analyse anti-programmes malveillants) ?",
    "skills": [
      "d-win-protections",
      "d-win-powershell"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "À signer numériquement les scripts d’administration avant leur déploiement"
      },
      {
        "id": "b",
        "text": "À chiffrer les scripts PowerShell stockés dans le profil de l’utilisateur"
      },
      {
        "id": "c",
        "text": "À interdire l’exécution des scripts qui ne proviennent pas du domaine"
      },
      {
        "id": "d",
        "text": "À transmettre à l’antimalware le contenu d’un script avant son exécution"
      }
    ]
  },
  {
    "id": "wpo-q27",
    "prompt": "Par défaut, le pare-feu Windows bloque tout le trafic sortant du poste.",
    "skills": [
      "d-win-protections"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "wpo-q28",
    "prompt": "Quel sigle désigne les règles de Microsoft Defender qui réduisent la surface d’attaque (Office, scripts, vol d’identifiants) ?",
    "skills": [
      "d-win-protections"
    ],
    "difficulty": 1,
    "type": "short",
    "placeholder": "sigle"
  },
  {
    "id": "wpo-q29",
    "prompt": "Quel événement du journal de sécurité Windows enregistre une ouverture de session réussie ?",
    "skills": [
      "d-win-journaux"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "1102"
      },
      {
        "id": "b",
        "text": "4624"
      },
      {
        "id": "c",
        "text": "4625"
      },
      {
        "id": "d",
        "text": "4688"
      }
    ]
  },
  {
    "id": "wpo-q30",
    "prompt": "Que signale l’événement 1102 du journal de sécurité ?",
    "skills": [
      "d-win-journaux"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "L’échec d’une ouverture de session"
      },
      {
        "id": "b",
        "text": "La création d’un compte local"
      },
      {
        "id": "c",
        "text": "L’effacement du journal de sécurité"
      },
      {
        "id": "d",
        "text": "L’arrêt du service de journalisation"
      }
    ]
  },
  {
    "id": "wpo-q31",
    "prompt": "Quels événements Sysmon aident à repérer l’installation d’une persistance ?",
    "skills": [
      "d-win-journaux",
      "d-win-persistance"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "ID 11 (création de fichier)"
      },
      {
        "id": "b",
        "text": "ID 13 (modification d’une valeur de registre)"
      },
      {
        "id": "c",
        "text": "ID 1 (création de processus, avec `schtasks` ou `reg add`)"
      },
      {
        "id": "d",
        "text": "ID 4 (changement d’état du service Sysmon lui-même)"
      }
    ]
  },
  {
    "id": "wpo-q32",
    "prompt": "Des journaux qui restent uniquement sur le poste peuvent être effacés par un attaquant disposant des droits suffisants.",
    "skills": [
      "d-win-journaux"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "wpo-q33",
    "prompt": "Qu’est-ce que la persistance pour un attaquant ?",
    "skills": [
      "d-win-persistance"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "La durée pendant laquelle l’attaquant reste connecté à la machine de la victime"
      },
      {
        "id": "b",
        "text": "Un mécanisme qui relance son code après redémarrage ou fermeture de session"
      },
      {
        "id": "c",
        "text": "Un moyen de rendre le programme malveillant impossible à supprimer du disque"
      },
      {
        "id": "d",
        "text": "Une technique qui empêche l’antivirus de détecter le programme malveillant"
      }
    ]
  },
  {
    "id": "wpo-q34",
    "prompt": "Quels emplacements permettent une persistance sur un poste Windows ?",
    "skills": [
      "d-win-persistance"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Les services Windows"
      },
      {
        "id": "b",
        "text": "Les clés `Run` du registre"
      },
      {
        "id": "c",
        "text": "Les tâches planifiées"
      },
      {
        "id": "d",
        "text": "Le cache DNS du poste"
      },
      {
        "id": "e",
        "text": "La corbeille de l’utilisateur"
      }
    ]
  },
  {
    "id": "wpo-q35",
    "prompt": "Quelle commande liste les tâches planifiées d’un poste Windows ?",
    "skills": [
      "d-win-persistance"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`tasklist /svc /fo table /v`"
      },
      {
        "id": "b",
        "text": "`netstat -ano -p tcp`"
      },
      {
        "id": "c",
        "text": "`sc query type= service state= all`"
      },
      {
        "id": "d",
        "text": "`schtasks /query /fo LIST /v`"
      }
    ]
  },
  {
    "id": "wpo-q36",
    "prompt": "Pourquoi une persistance par abonnement WMI permanent est-elle difficile à repérer ?",
    "skills": [
      "d-win-persistance"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Elle vit dans le dépôt WMI, que les contrôles habituels ignorent"
      },
      {
        "id": "b",
        "text": "Elle ne s’exécute qu’en l’absence de tout antivirus installé sur le poste"
      },
      {
        "id": "c",
        "text": "Elle chiffre le programme malveillant avec une clé conservée par l’attaquant"
      },
      {
        "id": "d",
        "text": "Elle s’inscrit dans le BIOS du poste et résiste à une réinstallation du système"
      }
    ]
  },
  {
    "id": "wpo-q37",
    "prompt": "Supprimer le fichier malveillant suffit à éliminer la persistance d’un attaquant sur le poste.",
    "skills": [
      "d-win-persistance"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "wpo-q38",
    "prompt": "Quel outil Sysinternals liste tous les emplacements de démarrage automatique d’un poste Windows ?",
    "skills": [
      "d-win-persistance"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "nom"
  },
  {
    "id": "wpo-q39",
    "prompt": "Un service nommé « WinUpdateSvc » démarre automatiquement un exécutable situé dans `C:\\Users\\Public\\`. Quel indice est le plus révélateur ?",
    "skills": [
      "d-win-persistance",
      "d-win-acces"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le service s’exécute avec un compte qui ne dispose d’aucun privilège"
      },
      {
        "id": "b",
        "text": "Le nom du service contient le mot « Update » comme beaucoup de services Windows"
      },
      {
        "id": "c",
        "text": "Un service système lance un binaire placé dans un dossier modifiable par tous"
      },
      {
        "id": "d",
        "text": "Le service est configuré pour démarrer automatiquement avec le système"
      }
    ]
  },
  {
    "id": "wpo-q40",
    "prompt": "Un poste a été « nettoyé » d’un programme malveillant, mais le problème revient après chaque redémarrage. Décrivez comment rechercher la persistance et dans quel ordre agir.",
    "skills": [
      "d-win-persistance",
      "d-win-journaux"
    ],
    "difficulty": 3,
    "type": "open"
  }
];
