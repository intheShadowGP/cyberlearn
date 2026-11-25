// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "jfm-q1",
    "prompt": "Un processus apparaît dans `windows.psscan` mais pas dans `windows.pslist`. Quelle interprétation est juste ?",
    "skills": [
      "j-mem-volatility"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le processus tourne sur une autre machine"
      },
      {
        "id": "b",
        "text": "`psscan` invente des processus fictifs"
      },
      {
        "id": "c",
        "text": "L’image mémoire est forcément corrompue"
      },
      {
        "id": "d",
        "text": "Processus terminé ou délié de la liste"
      }
    ]
  },
  {
    "id": "jfm-q2",
    "prompt": "Quel plugin Volatility 3 pour Windows signale les régions mémoire exécutables non adossées à un fichier, typiques d’une injection de code ? (donnez le nom complet du plugin)",
    "skills": [
      "j-mem-volatility"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "windows.…"
  },
  {
    "id": "jfm-q3",
    "prompt": "Toute région signalée par `malfind` prouve à elle seule la présence d’un malware.",
    "skills": [
      "j-mem-volatility"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "jfm-q4",
    "prompt": "Quelles informations l’analyse mémoire peut-elle apporter, alors que le disque ne les contient pas toujours ?",
    "skills": [
      "j-mem-volatility",
      "j-chronologie"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Les lignes de commande des processus en cours"
      },
      {
        "id": "b",
        "text": "L’historique complet des fichiers supprimés depuis l’installation"
      },
      {
        "id": "c",
        "text": "Le code d’un malware exécuté uniquement en mémoire"
      },
      {
        "id": "d",
        "text": "Les connexions réseau ouvertes au moment de l’acquisition"
      }
    ]
  },
  {
    "id": "jfm-q16",
    "prompt": "Sur quoi l’analyse doit-elle toujours porter ?",
    "skills": [
      "j-mem-volatility",
      "j-fs-tsk"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le système en cours d’exécution, après redémarrage"
      },
      {
        "id": "b",
        "text": "Une copie vérifiée, montée en lecture seule"
      },
      {
        "id": "c",
        "text": "Une copie modifiée pour retirer les fichiers inutiles"
      },
      {
        "id": "d",
        "text": "Directement le disque original, pour gagner du temps"
      }
    ]
  },
  {
    "id": "jfm-q31",
    "prompt": "Pourquoi Volatility 3 a-t-il besoin de tables de symboles ?",
    "skills": [
      "j-mem-volatility"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Pour compresser le fichier d’image"
      },
      {
        "id": "b",
        "text": "Pour se connecter au réseau de la machine"
      },
      {
        "id": "c",
        "text": "Pour lire les structures du noyau"
      },
      {
        "id": "d",
        "text": "Pour chiffrer l’image mémoire"
      }
    ]
  },
  {
    "id": "jfm-q32",
    "prompt": "Quel plugin Volatility 3 affiche les lignes de commande des processus Windows ?",
    "skills": [
      "j-mem-volatility"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`windows.cmdline`"
      },
      {
        "id": "b",
        "text": "`windows.netscan`"
      },
      {
        "id": "c",
        "text": "`windows.pstree`"
      },
      {
        "id": "d",
        "text": "`windows.hashdump`"
      }
    ]
  },
  {
    "id": "jfm-q33",
    "prompt": "Quels plugins Volatility 3 aident à examiner un processus suspect ?",
    "skills": [
      "j-mem-volatility"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "`mmls`"
      },
      {
        "id": "b",
        "text": "`windows.cmdline`"
      },
      {
        "id": "c",
        "text": "`windows.netscan`"
      },
      {
        "id": "d",
        "text": "`windows.pstree`"
      }
    ]
  },
  {
    "id": "jfm-q5",
    "prompt": "Quelle commande de The Sleuth Kit affiche la table des partitions d’une image et leur décalage de départ ?",
    "skills": [
      "j-fs-tsk"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`mactime`"
      },
      {
        "id": "b",
        "text": "`istat`"
      },
      {
        "id": "c",
        "text": "`icat`"
      },
      {
        "id": "d",
        "text": "`mmls`"
      }
    ]
  },
  {
    "id": "jfm-q6",
    "prompt": "Quelle commande de The Sleuth Kit extrait le contenu d’un fichier à partir de son numéro d’inode ?",
    "skills": [
      "j-fs-tsk"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "commande"
  },
  {
    "id": "jfm-q7",
    "prompt": "Un fichier supprimé peut souvent être récupéré tant que ses blocs de données n’ont pas été réutilisés.",
    "skills": [
      "j-fs-tsk"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "jfm-q8",
    "prompt": "Sur NTFS, quels constats évoquent une falsification d’horodatage ?",
    "skills": [
      "j-fs-tsk",
      "j-chronologie"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Horodatages `$STANDARD_INFORMATION` dont les fractions de seconde valent exactement zéro"
      },
      {
        "id": "b",
        "text": "Date de modification postérieure à la date de création"
      },
      {
        "id": "c",
        "text": "Exécutable daté de 2019 dans un dossier créé hier, avec un `$FILE_NAME` daté d’hier"
      },
      {
        "id": "d",
        "text": "Date de création `$STANDARD_INFORMATION` antérieure à celle de `$FILE_NAME`"
      }
    ]
  },
  {
    "id": "jfm-q15",
    "prompt": "Sur un serveur ext4, un binaire système affiche un `mtime` de 2021 et un `ctime` de la nuit de l’incident. Que peut-on en conclure et comment le vérifier ?",
    "skills": [
      "j-chronologie",
      "j-fs-tsk"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "jfm-q34",
    "prompt": "Comment `fls` signale-t-il une entrée supprimée dans sa sortie ?",
    "skills": [
      "j-fs-tsk"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "En ne l’affichant jamais"
      },
      {
        "id": "b",
        "text": "En la renommant avec l’extension `.bak`"
      },
      {
        "id": "c",
        "text": "Par un astérisque devant l’entrée"
      },
      {
        "id": "d",
        "text": "Par un fond rouge dans le terminal"
      }
    ]
  },
  {
    "id": "jfm-q35",
    "prompt": "Sur NTFS, l’attribut `$FILE_NAME` est plus difficile à falsifier que l’attribut `$STANDARD_INFORMATION`.",
    "skills": [
      "j-fs-tsk",
      "j-chronologie"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "jfm-q9",
    "prompt": "Sur un serveur RHEL, dans quel fichier trouve-t-on habituellement les authentifications SSH ?",
    "skills": [
      "j-artefacts-linux"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`/var/log/secure`"
      },
      {
        "id": "b",
        "text": "`/var/log/auth.log`"
      },
      {
        "id": "c",
        "text": "`/etc/ssh/sshd_config`"
      },
      {
        "id": "d",
        "text": "`/var/log/dpkg.log`"
      }
    ]
  },
  {
    "id": "jfm-q10",
    "prompt": "Quels emplacements sont des mécanismes de persistance à vérifier sur un serveur Linux compromis ?",
    "skills": [
      "j-artefacts-linux"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "`~/.ssh/authorized_keys`"
      },
      {
        "id": "b",
        "text": "`/usr/share/doc/`"
      },
      {
        "id": "c",
        "text": "`/etc/systemd/system/`"
      },
      {
        "id": "d",
        "text": "`/etc/cron.d/` et `/var/spool/cron/`"
      }
    ]
  },
  {
    "id": "jfm-q11",
    "prompt": "Un fichier `.bash_history` lié symboliquement à `/dev/null` est un indice possible de dissimulation volontaire.",
    "skills": [
      "j-artefacts-linux"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "jfm-q12",
    "prompt": "Vous analysez l’image d’un serveur Linux compromis. Décrivez dans quel ordre vous rechercheriez le point d’entrée, les actions de l’attaquant et sa persistance, et quels artefacts vous consulteriez pour chacun.",
    "skills": [
      "j-artefacts-linux",
      "j-chronologie"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "jfm-q36",
    "prompt": "Quel fichier Linux consigne les tentatives de connexion échouées, lisible avec `lastb` ?",
    "skills": [
      "j-artefacts-linux"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`lastlog`"
      },
      {
        "id": "b",
        "text": "`btmp`"
      },
      {
        "id": "c",
        "text": "`utmp`"
      },
      {
        "id": "d",
        "text": "`wtmp`"
      }
    ]
  },
  {
    "id": "jfm-q37",
    "prompt": "Le fichier `wtmp` se lit correctement avec un éditeur de texte ordinaire.",
    "skills": [
      "j-artefacts-linux"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "jfm-q13",
    "prompt": "Pourquoi faut-il convertir toutes les sources en UTC avant de construire une chronologie ?",
    "skills": [
      "j-chronologie"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Pour ne pas inverser l’ordre réel"
      },
      {
        "id": "b",
        "text": "Parce que l’UTC chiffre les horodatages"
      },
      {
        "id": "c",
        "text": "Parce que les outils refusent les heures locales"
      },
      {
        "id": "d",
        "text": "Pour réduire la taille du fichier"
      }
    ]
  },
  {
    "id": "jfm-q14",
    "prompt": "Quelle commande de The Sleuth Kit transforme un fichier « body » produit par `fls -m` en chronologie triée ?",
    "skills": [
      "j-chronologie"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "commande"
  },
  {
    "id": "jfm-q38",
    "prompt": "Que contient le fichier « body » produit par `fls -m` ?",
    "skills": [
      "j-chronologie",
      "j-fs-tsk"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Les journaux d’authentification"
      },
      {
        "id": "b",
        "text": "La liste des mots de passe du système"
      },
      {
        "id": "c",
        "text": "Les horodatages de tous les fichiers"
      },
      {
        "id": "d",
        "text": "Le contenu de tous les fichiers de l’image"
      }
    ]
  },
  {
    "id": "jfm-q39",
    "prompt": "Qu’appelle-t-on un point d’ancrage dans une chronologie ?",
    "skills": [
      "j-chronologie"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "L’heure du démarrage du logiciel d’analyse"
      },
      {
        "id": "b",
        "text": "Un événement daté avec certitude"
      },
      {
        "id": "c",
        "text": "Le dernier fichier modifié sur le disque"
      },
      {
        "id": "d",
        "text": "Un fichier supprimé définitivement"
      }
    ]
  },
  {
    "id": "jfm-q40",
    "prompt": "Le journal d’un serveur a une horloge en avance de huit minutes. Que faire dans la chronologie ?",
    "skills": [
      "j-chronologie"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Supprimer ce journal de la chronologie"
      },
      {
        "id": "b",
        "text": "Ne rien changer pour préserver la preuve"
      },
      {
        "id": "c",
        "text": "Avancer les dates de toutes les autres sources"
      },
      {
        "id": "d",
        "text": "Mesurer la dérive et corriger ses dates"
      }
    ]
  },
  {
    "id": "jfm-q17",
    "prompt": "Où se trouvent, sur l’hôte, les couches et les journaux d’un moteur de conteneurs Docker par défaut ?",
    "skills": [
      "j-conteneurs-cloud"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Dans `/boot`"
      },
      {
        "id": "b",
        "text": "Dans `/var/lib/docker`"
      },
      {
        "id": "c",
        "text": "Dans `/etc/passwd`"
      },
      {
        "id": "d",
        "text": "Dans `/usr/share/doc`"
      }
    ]
  },
  {
    "id": "jfm-q18",
    "prompt": "Un conteneur suspect tourne encore. Quelle est la bonne première action ?",
    "skills": [
      "j-conteneurs-cloud"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le supprimer aussitôt"
      },
      {
        "id": "b",
        "text": "Réinstaller le moteur de conteneurs"
      },
      {
        "id": "c",
        "text": "Redémarrer l’hôte"
      },
      {
        "id": "d",
        "text": "Capturer son état avant de l’arrêter"
      }
    ]
  },
  {
    "id": "jfm-q19",
    "prompt": "Les journaux d’un conteneur peuvent disparaître avec lui s’ils ne sont pas envoyés vers un système externe.",
    "skills": [
      "j-conteneurs-cloud"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "jfm-q20",
    "prompt": "Quels éléments sont utiles dans l’investigation d’un hôte de conteneurs ?",
    "skills": [
      "j-conteneurs-cloud"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "La couleur du terminal de l’administrateur"
      },
      {
        "id": "b",
        "text": "L’historique des couches de l’image"
      },
      {
        "id": "c",
        "text": "La sortie de `docker inspect` (montages, privilèges)"
      },
      {
        "id": "d",
        "text": "Les journaux JSON de chaque conteneur"
      }
    ]
  },
  {
    "id": "jfm-q21",
    "prompt": "Quel journal Kubernetes indique qui a effectué quelle action sur l’API du cluster ?",
    "skills": [
      "j-conteneurs-cloud"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le planificateur de tâches Windows"
      },
      {
        "id": "b",
        "text": "Le fichier `hosts` de l’hôte"
      },
      {
        "id": "c",
        "text": "Le journal d’audit de l’API"
      },
      {
        "id": "d",
        "text": "Le journal du pare-feu du poste"
      }
    ]
  },
  {
    "id": "jfm-q22",
    "prompt": "Quel mécanisme du cloud permet de copier le disque d’une machine virtuelle sans l’éteindre ?",
    "skills": [
      "j-conteneurs-cloud"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "un terme"
  },
  {
    "id": "jfm-q23",
    "prompt": "Une instance cloud est compromise. Que privilégier avant sa suppression ?",
    "skills": [
      "j-conteneurs-cloud"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "L’isoler et réaliser un instantané"
      },
      {
        "id": "b",
        "text": "La supprimer pour supprimer le problème"
      },
      {
        "id": "c",
        "text": "Réinitialiser le mot de passe du compte seulement"
      },
      {
        "id": "d",
        "text": "La laisser fonctionner sans changement"
      }
    ]
  },
  {
    "id": "jfm-q24",
    "prompt": "À quoi sert une commande comme `debsums` ou `rpm -Va` ?",
    "skills": [
      "j-integrite-linux"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "À chiffrer le disque"
      },
      {
        "id": "b",
        "text": "À installer de nouveaux paquets"
      },
      {
        "id": "c",
        "text": "À vérifier l’intégrité des fichiers"
      },
      {
        "id": "d",
        "text": "À supprimer les journaux"
      }
    ]
  },
  {
    "id": "jfm-q25",
    "prompt": "L’empreinte d’un binaire système diffère de celle du paquet officiel. Que cela signifie-t-il ?",
    "skills": [
      "j-integrite-linux"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le fichier est protégé contre la copie"
      },
      {
        "id": "b",
        "text": "C’est toujours normal après une mise à jour"
      },
      {
        "id": "c",
        "text": "Le paquet officiel est corrompu"
      },
      {
        "id": "d",
        "text": "Il a été modifié ou remplacé : à investiguer"
      }
    ]
  },
  {
    "id": "jfm-q26",
    "prompt": "Un exécutable inconnu avec le bit SUID dans `/tmp` est un comportement normal.",
    "skills": [
      "j-integrite-linux"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "jfm-q27",
    "prompt": "Pourquoi rechercher les fichiers modifiés sur une fenêtre de dates, par exemple avec `find -newermt` ?",
    "skills": [
      "j-integrite-linux",
      "j-chronologie"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Pour limiter l’examen à l’incident"
      },
      {
        "id": "b",
        "text": "Pour compresser les fichiers récents"
      },
      {
        "id": "c",
        "text": "Pour supprimer les fichiers anciens"
      },
      {
        "id": "d",
        "text": "Pour changer leurs droits"
      }
    ]
  },
  {
    "id": "jfm-q28",
    "prompt": "Quels constats évoquent une compromission persistante d’un système Linux ?",
    "skills": [
      "j-integrite-linux"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Un fichier `/etc/ld.so.preload` non vide"
      },
      {
        "id": "b",
        "text": "Un fichier README dans `/usr/share/doc`"
      },
      {
        "id": "c",
        "text": "Un compte supplémentaire avec l’UID 0"
      },
      {
        "id": "d",
        "text": "Un module noyau inconnu chargé"
      }
    ]
  },
  {
    "id": "jfm-q29",
    "prompt": "Quel fichier, lu par l’éditeur de liens dynamique, permet de forcer le chargement d’une bibliothèque dans tous les processus ?",
    "skills": [
      "j-integrite-linux"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "chemin du fichier"
  },
  {
    "id": "jfm-q30",
    "prompt": "À quoi sert une base d’intégrité comme celle d’AIDE ?",
    "skills": [
      "j-integrite-linux"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "À remplacer les sauvegardes"
      },
      {
        "id": "b",
        "text": "À détecter des changements"
      },
      {
        "id": "c",
        "text": "À chiffrer les fichiers"
      },
      {
        "id": "d",
        "text": "À accélérer le démarrage du serveur"
      }
    ]
  }
];
