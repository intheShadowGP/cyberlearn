// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "lsec-q1",
    "prompt": "Quel est l’objectif principal du durcissement du noyau ?",
    "skills": [
      "c-noyau-durcissement"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Remplacer le noyau de la distribution par un noyau écrit par l’équipe de sécurité"
      },
      {
        "id": "b",
        "text": "Supprimer le compte root pour que plus personne ne puisse administrer la machine"
      },
      {
        "id": "c",
        "text": "Accélérer les accès disque en désactivant toutes les protections du noyau pour gagner du temps"
      },
      {
        "id": "d",
        "text": "Retirer à un processus local ce dont il n’a pas besoin et rendre l’exploitation plus coûteuse"
      }
    ]
  },
  {
    "id": "lsec-q2",
    "prompt": "Quel paramètre sysctl masque les adresses du noyau aux utilisateurs ordinaires dans `/proc` ?",
    "skills": [
      "c-noyau-durcissement"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`kernel.panic`"
      },
      {
        "id": "b",
        "text": "`kernel.kptr_restrict`"
      },
      {
        "id": "c",
        "text": "`kernel.printk`"
      },
      {
        "id": "d",
        "text": "`kernel.randomize_va_space`"
      }
    ]
  },
  {
    "id": "lsec-q3",
    "prompt": "Quelle commande recharge tous les fichiers de configuration sysctl, dont ceux de `/etc/sysctl.d/` ?",
    "skills": [
      "c-noyau-durcissement"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "commande option"
  },
  {
    "id": "lsec-q4",
    "prompt": "Le réglage `kernel.modules_disabled=1` interdit tout nouveau chargement de module jusqu’au prochain redémarrage.",
    "skills": [
      "c-noyau-durcissement"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "lsec-q5",
    "prompt": "Quelles options de montage durcissent un répertoire comme `/tmp` ?",
    "skills": [
      "c-noyau-durcissement"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "`relatime`"
      },
      {
        "id": "b",
        "text": "`noexec`"
      },
      {
        "id": "c",
        "text": "`nodev`"
      },
      {
        "id": "d",
        "text": "`nosuid`"
      }
    ]
  },
  {
    "id": "lsec-q6",
    "prompt": "Que fait `kernel.yama.ptrace_scope = 1` ?",
    "skills": [
      "c-noyau-durcissement"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Tous les appels `ptrace` sont interdits, y compris pour root"
      },
      {
        "id": "b",
        "text": "Tous les utilisateurs peuvent déboguer n’importe quel processus"
      },
      {
        "id": "c",
        "text": "Un processus ne peut attacher `ptrace` qu’à ses descendants"
      },
      {
        "id": "d",
        "text": "Les programmes SUID ne peuvent plus être lancés par un utilisateur"
      }
    ]
  },
  {
    "id": "lsec-q7",
    "prompt": "On vous demande de définir une base de durcissement du noyau pour une flotte de serveurs Linux de production. Indiquez les réglages à retenir, les risques et la manière de les déployer.",
    "skills": [
      "c-noyau-durcissement",
      "c-elevation-locale"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "lsec-q8",
    "prompt": "Quelle commande liste les capacités de fichier posées sur le système de fichiers ?",
    "skills": [
      "c-elevation-locale"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`getcap -r /`"
      },
      {
        "id": "b",
        "text": "`getfacl -R /`"
      },
      {
        "id": "c",
        "text": "`capsh --print`"
      },
      {
        "id": "d",
        "text": "`setcap -r /`"
      }
    ]
  },
  {
    "id": "lsec-q9",
    "prompt": "Pourquoi `cap_setuid=ep` posé sur un interpréteur comme Python est-il critique ?",
    "skills": [
      "c-elevation-locale"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "L’interpréteur peut ouvrir tout port réseau sans aucune restriction"
      },
      {
        "id": "b",
        "text": "L’interpréteur devient exécutable par tous les groupes de la machine"
      },
      {
        "id": "c",
        "text": "L’interpréteur peut changer d’UID et donner un shell root"
      },
      {
        "id": "d",
        "text": "L’interpréteur n’est plus soumis à la journalisation des commandes"
      }
    ]
  },
  {
    "id": "lsec-q10",
    "prompt": "Un utilisateur membre du groupe `docker` dispose d’un accès équivalent à root sur l’hôte.",
    "skills": [
      "c-elevation-locale"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "lsec-q11",
    "prompt": "Quelles mesures réduisent le risque d’élévation locale par un exploit public visant le noyau ou un binaire SUID ?",
    "skills": [
      "c-elevation-locale",
      "c-noyau-durcissement"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Renommer les binaires SUID pour les rendre moins repérables"
      },
      {
        "id": "b",
        "text": "Réduire le nombre de binaires SUID installés"
      },
      {
        "id": "c",
        "text": "Restreindre les espaces de noms utilisateur non privilégiés quand le besoin n’existe pas"
      },
      {
        "id": "d",
        "text": "Appliquer rapidement les mises à jour de sécurité"
      }
    ]
  },
  {
    "id": "lsec-q12",
    "prompt": "Quelle commande retire la capacité posée sur `/usr/bin/python3.11` ?",
    "skills": [
      "c-elevation-locale"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "commande option chemin"
  },
  {
    "id": "lsec-q13",
    "prompt": "Que permet de repérer cette règle auditd ?",
    "skills": [
      "c-elevation-locale"
    ],
    "difficulty": 3,
    "context": {
      "lang": "text",
      "code": "-a always,exit -F arch=b64 -S execve -C uid!=euid -F euid=0 -k escalade"
    },
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Toutes les connexions SSH ouvertes directement avec le compte root"
      },
      {
        "id": "b",
        "text": "Les exécutions root lancées par un compte qui ne l’est pas"
      },
      {
        "id": "c",
        "text": "Les chargements de programmes eBPF par un compte non privilégié"
      },
      {
        "id": "d",
        "text": "Les modifications du fichier `/etc/passwd` faites par root"
      }
    ]
  },
  {
    "id": "lsec-q14",
    "prompt": "Un compte de service web a été compromis sur un serveur. Décrivez comment vous cartographiez et fermez les chemins d’élévation locale de privilèges, et comment vous surveillez ceux qui restent.",
    "skills": [
      "c-elevation-locale"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "lsec-q15",
    "prompt": "Que compare un outil comme AIDE ?",
    "skills": [
      "c-integrite-systeme"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "L’état actuel des fichiers surveillés à une base de référence"
      },
      {
        "id": "b",
        "text": "Les mots de passe des comptes à une liste de mots de passe courants"
      },
      {
        "id": "c",
        "text": "Les versions du noyau installées aux versions du dernier avis de sécurité"
      },
      {
        "id": "d",
        "text": "Les règles du pare-feu actuel à celles d’un autre serveur du parc"
      }
    ]
  },
  {
    "id": "lsec-q16",
    "prompt": "Où doit être conservée la base de référence AIDE pour garder sa valeur après une compromission ?",
    "skills": [
      "c-integrite-systeme"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Dans le répertoire personnel de root, où l’attaquant ne pense pas à regarder"
      },
      {
        "id": "b",
        "text": "Dans le répertoire de la base, avec les droits 777 pour que chacun puisse vérifier"
      },
      {
        "id": "c",
        "text": "Dans `/tmp`, effacée au redémarrage et reconstruite à partir de l’état courant"
      },
      {
        "id": "d",
        "text": "Hors de la machine surveillée, en lecture seule ou sur un serveur distinct"
      }
    ]
  },
  {
    "id": "lsec-q17",
    "prompt": "Quelle commande liste, sur Debian, les fichiers modifiés par rapport aux empreintes de leurs paquets ? (commande et option)",
    "skills": [
      "c-integrite-systeme"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "commande option"
  },
  {
    "id": "lsec-q18",
    "prompt": "IMA ne peut que mesurer les fichiers : il ne peut jamais refuser l’exécution d’un fichier.",
    "skills": [
      "c-integrite-systeme"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "lsec-q19",
    "prompt": "Quel mécanisme vérifie bloc par bloc un volume en lecture seule grâce à un arbre de hachage dont la racine est signée ?",
    "skills": [
      "c-integrite-systeme"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`debsums`"
      },
      {
        "id": "b",
        "text": "AIDE"
      },
      {
        "id": "c",
        "text": "`fs.protected_regular`"
      },
      {
        "id": "d",
        "text": "dm-verity"
      }
    ]
  },
  {
    "id": "lsec-q20",
    "prompt": "Quelles conditions rendent la signature des modules du noyau protectrice même face à un attaquant root ?",
    "skills": [
      "c-integrite-systeme",
      "c-noyau-durcissement"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Des clés de signature conservées hors de la machine"
      },
      {
        "id": "b",
        "text": "Un démarrage sécurisé (Secure Boot) actif"
      },
      {
        "id": "c",
        "text": "Un mode permissif qui accepte aussi les modules non signés"
      },
      {
        "id": "d",
        "text": "Le kernel lockdown en mode integrity ou confidentiality"
      }
    ]
  },
  {
    "id": "lsec-q21",
    "prompt": "Face à une alerte AIDE inexpliquée, la bonne réaction est de mettre immédiatement à jour la base de référence pour que l’alerte disparaisse.",
    "skills": [
      "c-integrite-systeme"
    ],
    "difficulty": 3,
    "type": "truefalse"
  },
  {
    "id": "lsec-q22",
    "prompt": "Que prouve une signature valide sur un paquet ?",
    "skills": [
      "c-chaine-paquets"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Qui l’a publié et qu’il n’a pas été modifié depuis"
      },
      {
        "id": "b",
        "text": "Que son mainteneur restera de confiance indéfiniment"
      },
      {
        "id": "c",
        "text": "Que son contenu est exempt de toute vulnérabilité"
      },
      {
        "id": "d",
        "text": "Que la distribution a relu son code source ligne par ligne"
      }
    ]
  },
  {
    "id": "lsec-q23",
    "prompt": "Quelle option d’un fichier de dépôt apt rattache une clé à un dépôt précis plutôt qu’à tous les dépôts ?",
    "skills": [
      "c-chaine-paquets"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`trusted=yes`"
      },
      {
        "id": "b",
        "text": "`Signed-By`"
      },
      {
        "id": "c",
        "text": "`Check-Valid-Until`"
      },
      {
        "id": "d",
        "text": "`Pin-Priority`"
      }
    ]
  },
  {
    "id": "lsec-q24",
    "prompt": "Rattacher la clé d’un dépôt tiers à ce seul dépôt limite les conséquences si cette clé est compromise.",
    "skills": [
      "c-chaine-paquets"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "lsec-q25",
    "prompt": "Quelles pratiques sécurisent l’ajout d’un dépôt tiers sur des serveurs de production ?",
    "skills": [
      "c-chaine-paquets"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Vérifier l’empreinte de la clé par un second canal"
      },
      {
        "id": "b",
        "text": "Épingler le dépôt pour qu’il ne remplace aucun paquet du système"
      },
      {
        "id": "c",
        "text": "Tester d’abord sur une machine d’essai ou un instantané"
      },
      {
        "id": "d",
        "text": "Ajouter `trusted=yes` pour éviter les erreurs de signature"
      }
    ]
  },
  {
    "id": "lsec-q26",
    "prompt": "Quel enseignement principal tire-t-on de l’affaire xz (CVE-2024-3094) ?",
    "skills": [
      "c-chaine-paquets"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Les bibliothèques de compression sont les composants les plus fréquemment attaqués"
      },
      {
        "id": "b",
        "text": "Un paquet signé par la distribution est toujours sûr"
      },
      {
        "id": "c",
        "text": "Une porte dérobée peut venir d’un mainteneur amont de confiance"
      },
      {
        "id": "d",
        "text": "Seules les distributions à publication continue sont exposées aux portes dérobées"
      }
    ]
  },
  {
    "id": "lsec-q27",
    "prompt": "Comment appelle-t-on, par son sigle anglais, l’inventaire des composants logiciels d’une machine ou d’une image ?",
    "skills": [
      "c-chaine-paquets"
    ],
    "difficulty": 1,
    "type": "short",
    "placeholder": "sigle"
  },
  {
    "id": "lsec-q28",
    "prompt": "Une équipe veut que chaque serveur installe ses paquets directement depuis Internet à chaque déploiement. Argumentez en faveur d’une alternative et décrivez-la.",
    "skills": [
      "c-chaine-paquets"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "lsec-q29",
    "prompt": "Quel est le rôle du vérificateur eBPF ?",
    "skills": [
      "c-ebpf-detection"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Remplacer les journaux système par ceux produits par le programme eBPF"
      },
      {
        "id": "b",
        "text": "Signer les programmes avec la clé du fabricant du matériel utilisé"
      },
      {
        "id": "c",
        "text": "Refuser avant exécution un programme dangereux pour le noyau"
      },
      {
        "id": "d",
        "text": "Chiffrer les paquets observés par le programme eBPF avant de les stocker"
      }
    ]
  },
  {
    "id": "lsec-q30",
    "prompt": "Quel outil détecte à l’exécution un comportement comme un shell lancé par un serveur web, en s’appuyant sur les événements du noyau ?",
    "skills": [
      "c-ebpf-detection"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`debsums`"
      },
      {
        "id": "b",
        "text": "`logrotate`"
      },
      {
        "id": "c",
        "text": "AIDE"
      },
      {
        "id": "d",
        "text": "Falco"
      }
    ]
  },
  {
    "id": "lsec-q31",
    "prompt": "Quelle commande liste les programmes eBPF actuellement chargés dans le noyau ?",
    "skills": [
      "c-ebpf-detection"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "commande sous-commande"
  },
  {
    "id": "lsec-q32",
    "prompt": "Un programme eBPF chargé ne peut pas servir à un attaquant, car le vérificateur garantit qu’il est inoffensif.",
    "skills": [
      "c-ebpf-detection"
    ],
    "difficulty": 3,
    "type": "truefalse"
  },
  {
    "id": "lsec-q33",
    "prompt": "Quels sont des risques ou des limites d’eBPF pour un défenseur ?",
    "skills": [
      "c-ebpf-detection"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Des rootkits peuvent exploiter eBPF pour masquer des activités"
      },
      {
        "id": "b",
        "text": "Des règles trop larges produisent des faux positifs sans base de comportement normal"
      },
      {
        "id": "c",
        "text": "Charger un programme eBPF exige des privilèges élevés qu’un root compromis possède aussi"
      },
      {
        "id": "d",
        "text": "Charger un programme eBPF modifie le code du noyau stocké sur disque"
      }
    ]
  },
  {
    "id": "lsec-q34",
    "prompt": "Quelle règle auditd permet de tracer chaque appel système de chargement eBPF ?",
    "skills": [
      "c-ebpf-detection"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`-w /etc/bpf.conf -p wa -k ebpf`"
      },
      {
        "id": "b",
        "text": "`-a always,exit -F arch=b64 -S bpf -k ebpf`"
      },
      {
        "id": "c",
        "text": "`-a never,exit -F arch=b64 -S bpf`"
      },
      {
        "id": "d",
        "text": "`-a always,exit -F arch=b64 -S execve -k ebpf`"
      }
    ]
  },
  {
    "id": "lsec-q35",
    "prompt": "Dans quel ordre collecte-t-on les preuves sur une machine encore en marche ?",
    "skills": [
      "c-investigation-live"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Du plus volatil (mémoire, processus) au plus durable (disque)"
      },
      {
        "id": "b",
        "text": "Dans l’ordre alphabétique des répertoires, pour n’en oublier aucun"
      },
      {
        "id": "c",
        "text": "Après un redémarrage, pour repartir d’un état propre et connu"
      },
      {
        "id": "d",
        "text": "Du plus durable au plus volatil, en commençant par une image du disque"
      }
    ]
  },
  {
    "id": "lsec-q36",
    "prompt": "Quelle commande repère les fichiers supprimés mais encore ouverts par un processus ?",
    "skills": [
      "c-investigation-live"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`lsof -nP +L1`"
      },
      {
        "id": "b",
        "text": "`ls -la /tmp /var/tmp`"
      },
      {
        "id": "c",
        "text": "`lsof -iTCP -sTCP:LISTEN`"
      },
      {
        "id": "d",
        "text": "`df -h` puis `du -sh /`"
      }
    ]
  },
  {
    "id": "lsec-q37",
    "prompt": "Éteindre une machine compromise avant la collecte détruit la mémoire et les processus en cours, donc des preuves.",
    "skills": [
      "c-investigation-live"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "lsec-q38",
    "prompt": "Quelles vérifications croisées peuvent révéler un rootkit qui falsifie les outils locaux ?",
    "skills": [
      "c-investigation-live"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Comparer les modules de `lsmod` à ceux de `/sys/module`"
      },
      {
        "id": "b",
        "text": "Comparer les ports de `ss` à `/proc/net/tcp` et à un scan réseau externe"
      },
      {
        "id": "c",
        "text": "Comparer la liste des processus de `ps` à celle de `/proc`"
      },
      {
        "id": "d",
        "text": "Relancer `ps` plusieurs fois pour voir si le résultat change"
      }
    ]
  },
  {
    "id": "lsec-q39",
    "prompt": "Après une compromission avec privilèges root, quelle démarche est la plus prudente pour remettre le serveur en service ?",
    "skills": [
      "c-investigation-live"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Réinstaller seulement le noyau, les autres fichiers n’étant pas concernés"
      },
      {
        "id": "b",
        "text": "Reconstruire depuis une image saine et restaurer des données vérifiées"
      },
      {
        "id": "c",
        "text": "Changer le mot de passe root et redémarrer le serveur"
      },
      {
        "id": "d",
        "text": "Supprimer le fichier malveillant trouvé, puis surveiller quelques jours"
      }
    ]
  },
  {
    "id": "lsec-q40",
    "prompt": "Vous êtes appelé sur un serveur suspecté d’être compromis, encore en production. Décrivez votre intervention depuis votre arrivée jusqu’à la décision de nettoyer ou de reconstruire.",
    "skills": [
      "c-investigation-live",
      "c-elevation-locale"
    ],
    "difficulty": 3,
    "type": "open"
  }
];
