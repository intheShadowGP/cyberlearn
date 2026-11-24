// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "lsys-q1",
    "prompt": "Quelle commande affiche les ports TCP et UDP en écoute avec le processus associé ?",
    "skills": [
      "c-sys-services"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`journalctl -f`"
      },
      {
        "id": "b",
        "text": "`ps -ef`"
      },
      {
        "id": "c",
        "text": "`ip route show`"
      },
      {
        "id": "d",
        "text": "`ss -tulpn`"
      }
    ]
  },
  {
    "id": "lsys-q2",
    "prompt": "Le lien `/proc/<pid>/exe` d’un processus suffit pour récupérer une copie de son binaire, même si le fichier a été supprimé du disque.",
    "skills": [
      "c-sys-services"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "lsys-q3",
    "prompt": "Quelles directives systemd réduisent ce qu’un service compromis peut faire ?",
    "skills": [
      "c-sys-services"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "`CapabilityBoundingSet=` (vide)"
      },
      {
        "id": "b",
        "text": "`ProtectSystem=strict`"
      },
      {
        "id": "c",
        "text": "`Restart=always`"
      },
      {
        "id": "d",
        "text": "`NoNewPrivileges=yes`"
      }
    ]
  },
  {
    "id": "lsys-q4",
    "prompt": "Quelle commande systemd attribue une note d’exposition à une unité et liste les directives de confinement manquantes ? (donnez la commande sans le nom de l’unité)",
    "skills": [
      "c-sys-services"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "commande sous-commande"
  },
  {
    "id": "lsys-q5",
    "prompt": "Quelle commande affiche les messages de niveau erreur et plus grave depuis le dernier démarrage ?",
    "skills": [
      "c-sys-logs"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`dmesg --clear --level err`"
      },
      {
        "id": "b",
        "text": "`journalctl -p err -b`"
      },
      {
        "id": "c",
        "text": "`journalctl -u err --since today`"
      },
      {
        "id": "d",
        "text": "`ausearch -k err --start boot`"
      }
    ]
  },
  {
    "id": "lsys-q6",
    "prompt": "Avec la règle auditd `-w /etc/shadow -p wa -k identite`, quelle commande liste les événements correspondants ? (avec l’option de clé)",
    "skills": [
      "c-sys-logs"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "ausearch …"
  },
  {
    "id": "lsys-q7",
    "prompt": "Conserver les journaux uniquement sur le serveur qui les produit suffit, puisque seul root peut les modifier.",
    "skills": [
      "c-sys-logs"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "lsys-q8",
    "prompt": "Un administrateur vous demande comment savoir, la prochaine fois, qui a ajouté une clé dans `/root/.ssh/authorized_keys`. Proposez un dispositif complet, de la règle à la consultation.",
    "skills": [
      "c-sys-logs",
      "c-sys-services"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "lsys-q9",
    "prompt": "Quelle est la différence fondamentale entre AppArmor et SELinux ?",
    "skills": [
      "c-sys-mac"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Il n’y en a aucune : ce sont deux noms du même module du noyau"
      },
      {
        "id": "b",
        "text": "AppArmor ne fonctionne qu’en mode permissif, SELinux uniquement en mode strict"
      },
      {
        "id": "c",
        "text": "AppArmor raisonne sur des chemins, SELinux sur des étiquettes de type"
      },
      {
        "id": "d",
        "text": "SELinux remplace entièrement les permissions Unix, qui ne sont plus évaluées"
      }
    ]
  },
  {
    "id": "lsys-q10",
    "prompt": "Un serveur web RHEL renvoie « 403 » sur un nouveau répertoire alors que les permissions Unix sont correctes, et `ausearch -m AVC` montre un refus. Quelles réactions sont appropriées ?",
    "skills": [
      "c-sys-mac"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Passer définitivement en `setenforce 0`"
      },
      {
        "id": "b",
        "text": "Corriger le contexte du répertoire (`semanage fcontext` puis `restorecon`)"
      },
      {
        "id": "c",
        "text": "Lire le refus avec `audit2why` pour en comprendre la cause"
      },
      {
        "id": "d",
        "text": "Activer un booléen prévu si le besoin correspond (`setsebool`)"
      }
    ]
  },
  {
    "id": "lsys-q11",
    "prompt": "En mode permissif, SELinux journalise les accès qu’il aurait refusés mais ne les bloque pas.",
    "skills": [
      "c-sys-mac"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "lsys-q12",
    "prompt": "Expliquez pourquoi un service web confiné par SELinux ou AppArmor limite les dégâts d’une exécution de code à distance, même si le service tourne avec un compte privilégié.",
    "skills": [
      "c-sys-mac",
      "c-sys-services"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "lsys-q13",
    "prompt": "Dans une chaîne nftables `policy drop`, que se passe-t-il si l’on oublie la règle `ct state established,related accept` ?",
    "skills": [
      "c-sys-firewall"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Les réponses aux connexions du serveur sont rejetées : les services tombent en panne"
      },
      {
        "id": "b",
        "text": "Seul le trafic IPv6 est rejeté, le trafic IPv4 n’étant pas concerné par la politique"
      },
      {
        "id": "c",
        "text": "La politique repasse automatiquement en `accept` pour éviter de couper le serveur"
      },
      {
        "id": "d",
        "text": "Rien de particulier : nftables suit automatiquement les connexions et accepte leurs réponses"
      }
    ]
  },
  {
    "id": "lsys-q14",
    "prompt": "Quelles affirmations sur ce pare-feu nftables sont exactes : `table inet filtre { chain entree { type filter hook input priority 0; policy drop; ... } }` ?",
    "skills": [
      "c-sys-firewall"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Cette chaîne filtre aussi le trafic sortant du serveur"
      },
      {
        "id": "b",
        "text": "Tout paquet entrant non accepté par une règle est rejeté"
      },
      {
        "id": "c",
        "text": "Un service démarré par erreur sur un port non autorisé reste injoignable depuis le réseau"
      },
      {
        "id": "d",
        "text": "La famille `inet` s’applique à IPv4 et à IPv6"
      }
    ]
  },
  {
    "id": "lsys-q15",
    "prompt": "Quel mot-clé de politique nftables rejette par défaut tout paquet non accepté ?",
    "skills": [
      "c-sys-firewall"
    ],
    "difficulty": 1,
    "type": "short"
  },
  {
    "id": "lsys-q16",
    "prompt": "Un processus lancé par `www-data` écoute sur le port 31337. Quelle mesure, prise à l’avance, l’aurait rendu injoignable depuis l’extérieur ?",
    "skills": [
      "c-sys-firewall",
      "c-sys-services"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Une taille de journaux journald plus grande avec une rétention plus longue"
      },
      {
        "id": "b",
        "text": "Un umask plus restrictif sur les fichiers créés par le compte www-data"
      },
      {
        "id": "c",
        "text": "Un pare-feu local en refus par défaut, qui n’ouvre que 80 et 443"
      },
      {
        "id": "d",
        "text": "Un changement du port SSH vers un numéro élevé non standard"
      }
    ]
  },
  {
    "id": "lsys-q17",
    "prompt": "Quelle commande affiche l’état d’un service et ses derniers messages de journal ?",
    "skills": [
      "c-sys-services"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`systemctl list-sockets`"
      },
      {
        "id": "b",
        "text": "`systemctl mask nginx`"
      },
      {
        "id": "c",
        "text": "`systemctl daemon-reload`"
      },
      {
        "id": "d",
        "text": "`systemctl status nginx`"
      }
    ]
  },
  {
    "id": "lsys-q18",
    "prompt": "Quelle directive systemd rend `/home`, `/root` et `/run/user` inaccessibles à un service ?",
    "skills": [
      "c-sys-services"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`ProtectHome=yes`"
      },
      {
        "id": "b",
        "text": "`ProtectSystem=full`"
      },
      {
        "id": "c",
        "text": "`PrivateTmp=yes`"
      },
      {
        "id": "d",
        "text": "`NoNewPrivileges=yes`"
      }
    ]
  },
  {
    "id": "lsys-q19",
    "prompt": "La commande `systemctl edit nom.service` crée un fichier de surcharge (drop-in) sans modifier l’unité fournie par le paquet.",
    "skills": [
      "c-sys-services"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "lsys-q20",
    "prompt": "Vous déployez une API qui écoute sur le port 8443 sous un compte dédié, lit `/etc/api` et écrit dans `/var/lib/api`. Décrivez les directives systemd que vous poserez et comment vous vérifierez qu’elles n’ont rien cassé.",
    "skills": [
      "c-sys-services"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "lsys-q21",
    "prompt": "Un service sous un compte non privilégié doit écouter sur le port 443. Quelle directive lui accorde uniquement la capacité nécessaire ?",
    "skills": [
      "c-sys-services"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`CapabilityBoundingSet=` (vide), sans autre directive"
      },
      {
        "id": "b",
        "text": "`AmbientCapabilities=CAP_NET_BIND_SERVICE`"
      },
      {
        "id": "c",
        "text": "`PrivateNetwork=yes`, pour isoler le service"
      },
      {
        "id": "d",
        "text": "`User=root`, avec `NoNewPrivileges=yes`"
      }
    ]
  },
  {
    "id": "lsys-q22",
    "prompt": "Quel fichier contient les clés publiques autorisées à ouvrir une session SSH sur un compte ?",
    "skills": [
      "c-sys-persistance"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`~/.ssh/known_hosts`"
      },
      {
        "id": "b",
        "text": "`/etc/ssh/ssh_host_ed25519_key`"
      },
      {
        "id": "c",
        "text": "`~/.ssh/authorized_keys`"
      },
      {
        "id": "d",
        "text": "`~/.ssh/id_ed25519`"
      }
    ]
  },
  {
    "id": "lsys-q23",
    "prompt": "Quels emplacements faut-il examiner pour détecter une persistance sur un serveur Linux ?",
    "skills": [
      "c-sys-persistance"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Les tâches planifiées : `crontab -l`, `/etc/cron.d`, `/etc/cron.daily`"
      },
      {
        "id": "b",
        "text": "Les unités et minuteurs systemd : `/etc/systemd/system`, `systemctl list-timers`"
      },
      {
        "id": "c",
        "text": "Les pages de manuel installées dans `/usr/share/man`"
      },
      {
        "id": "d",
        "text": "Les fichiers `authorized_keys` des comptes, y compris celui de root"
      }
    ]
  },
  {
    "id": "lsys-q24",
    "prompt": "Un fichier `/etc/ld.so.preload` non vide est suspect, car il force le chargement de bibliothèques dans tous les processus.",
    "skills": [
      "c-sys-persistance",
      "c-sys-services"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "lsys-q25",
    "prompt": "Quelle commande liste les minuteurs systemd actifs avec leur prochaine exécution ?",
    "skills": [
      "c-sys-persistance"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`systemctl list-timers`"
      },
      {
        "id": "b",
        "text": "`journalctl --list-boots`"
      },
      {
        "id": "c",
        "text": "`crontab -r`"
      },
      {
        "id": "d",
        "text": "`at -l`"
      }
    ]
  },
  {
    "id": "lsys-q26",
    "prompt": "Quelle commande affiche la crontab de l’utilisateur courant ?",
    "skills": [
      "c-sys-persistance"
    ],
    "difficulty": 1,
    "type": "short",
    "placeholder": "commande"
  },
  {
    "id": "lsys-q27",
    "prompt": "Quel élément de cette unité, activée au démarrage, est le plus suspect ?",
    "skills": [
      "c-sys-persistance",
      "c-sys-services"
    ],
    "difficulty": 3,
    "context": {
      "lang": "text",
      "code": "$ systemctl cat update-helper.service\n[Unit]\nDescription=Update helper\n[Service]\nExecStart=/var/tmp/.cache/helper\nRestart=always\n[Install]\nWantedBy=multi-user.target"
    },
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "La directive `Restart=always`, réservée aux logiciels malveillants"
      },
      {
        "id": "b",
        "text": "Le binaire lancé est caché dans `/var/tmp`, inscriptible par tous"
      },
      {
        "id": "c",
        "text": "Le rattachement à `multi-user.target`, anormal pour un service"
      },
      {
        "id": "d",
        "text": "Le mot « update » dans le nom, qui trahit un service piraté"
      }
    ]
  },
  {
    "id": "lsys-q28",
    "prompt": "Un serveur a été compromis. Décrivez comment rechercher les mécanismes de persistance de l’attaquant sans altérer les preuves, puis comment vous vérifiez son éviction.",
    "skills": [
      "c-sys-persistance",
      "c-sys-logs"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "lsys-q29",
    "prompt": "Supprimer la clé malveillante d’`authorized_keys` suffit à évincer l’attaquant et à clore l’incident.",
    "skills": [
      "c-sys-persistance"
    ],
    "difficulty": 3,
    "type": "truefalse"
  },
  {
    "id": "lsys-q30",
    "prompt": "Quel réglage de `journald.conf` conserve les journaux après un redémarrage ?",
    "skills": [
      "c-sys-logs"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`ForwardToConsole=yes`"
      },
      {
        "id": "b",
        "text": "`Storage=volatile`"
      },
      {
        "id": "c",
        "text": "`Compress=no`"
      },
      {
        "id": "d",
        "text": "`Storage=persistent`"
      }
    ]
  },
  {
    "id": "lsys-q31",
    "prompt": "Que représente le champ `auid` d’un événement auditd ?",
    "skills": [
      "c-sys-logs"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "L’UID de connexion d’origine, conservé après `sudo`"
      },
      {
        "id": "b",
        "text": "L’UID effectif du processus au moment de l’appel système"
      },
      {
        "id": "c",
        "text": "L’identifiant de la règle auditd qui a produit l’événement"
      },
      {
        "id": "d",
        "text": "L’identifiant numérique du fichier concerné par l’accès"
      }
    ]
  },
  {
    "id": "lsys-q32",
    "prompt": "Quelle commande recharge les règles auditd persistantes du dossier `/etc/audit/rules.d/` ?",
    "skills": [
      "c-sys-logs"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "commande option"
  },
  {
    "id": "lsys-q34",
    "prompt": "Sans règle auditd, journald enregistre à lui seul qui a modifié `/etc/sudoers`, avec l’UID de connexion d’origine.",
    "skills": [
      "c-sys-logs"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "lsys-q35",
    "prompt": "Quelle commande affiche le mode courant de SELinux (`enforcing`, `permissive` ou `disabled`) ?",
    "skills": [
      "c-sys-mac"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`semodule -l`"
      },
      {
        "id": "b",
        "text": "`aa-status`"
      },
      {
        "id": "c",
        "text": "`setsebool -P httpd_can_network_connect on`"
      },
      {
        "id": "d",
        "text": "`getenforce`"
      }
    ]
  },
  {
    "id": "lsys-q36",
    "prompt": "Un profil AppArmor est en mode `complain`. Quelle en est la conséquence ?",
    "skills": [
      "c-sys-mac"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le programme ne démarre plus tant qu’un profil n’est pas chargé"
      },
      {
        "id": "b",
        "text": "Les violations du profil sont journalisées mais pas bloquées"
      },
      {
        "id": "c",
        "text": "Le profil est appliqué et toute violation est bloquée"
      },
      {
        "id": "d",
        "text": "Le programme s’exécute sans aucune journalisation d’AppArmor"
      }
    ]
  },
  {
    "id": "lsys-q37",
    "prompt": "Quelle commande SELinux rétablit le contexte par défaut d’un fichier ou d’un répertoire ? (nom de la commande seul)",
    "skills": [
      "c-sys-mac"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "commande"
  },
  {
    "id": "lsys-q38",
    "prompt": "Sur une distribution avec SELinux et auditd, quel fichier contient les messages de refus (AVC) ?",
    "skills": [
      "c-sys-mac",
      "c-sys-logs"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`/var/log/wtmp` (historique des connexions)"
      },
      {
        "id": "b",
        "text": "`/etc/selinux/config` (mode au démarrage)"
      },
      {
        "id": "c",
        "text": "`/var/log/audit/audit.log` (messages AVC)"
      },
      {
        "id": "d",
        "text": "`/var/log/lastlog` (dernières connexions)"
      }
    ]
  },
  {
    "id": "lsys-q33",
    "prompt": "Quelles pratiques rendent l’exploitation d’un pare-feu nftables plus sûre sur un serveur distant ?",
    "skills": [
      "c-sys-firewall"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Ouvrir SSH à toutes les adresses pour ne jamais se retrouver bloqué"
      },
      {
        "id": "b",
        "text": "Prévoir un retour arrière automatique si la connexion est perdue"
      },
      {
        "id": "c",
        "text": "Valider le fichier avant de l’appliquer (`nft -c -f`)"
      },
      {
        "id": "d",
        "text": "Journaliser les rejets avec une limite de débit"
      }
    ]
  },
  {
    "id": "lsys-q39",
    "prompt": "Quelle commande affiche le jeu de règles nftables actuellement chargé ?",
    "skills": [
      "c-sys-firewall"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`nft flush ruleset`"
      },
      {
        "id": "b",
        "text": "`ufw reset`"
      },
      {
        "id": "c",
        "text": "`nft list ruleset`"
      },
      {
        "id": "d",
        "text": "`iptables -F`"
      }
    ]
  },
  {
    "id": "lsys-q40",
    "prompt": "Quelle commande vérifie la syntaxe d’un fichier nftables sans l’appliquer ?",
    "skills": [
      "c-sys-firewall"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`nft -f /etc/nftables.conf`"
      },
      {
        "id": "b",
        "text": "`nft -c -f /etc/nftables.conf`"
      },
      {
        "id": "c",
        "text": "`systemctl reload nftables`"
      },
      {
        "id": "d",
        "text": "`nft list tables`"
      }
    ]
  }
];
