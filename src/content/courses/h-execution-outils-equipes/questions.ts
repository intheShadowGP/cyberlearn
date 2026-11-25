// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "heo-q1",
    "prompt": "Où la phase d’exploitation d’un test d’intrusion peut-elle se dérouler ?",
    "skills": [
      "h-exec-web"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Sur tout site public, même sans autorisation préalable"
      },
      {
        "id": "b",
        "text": "Sur n’importe quel système accessible depuis Internet"
      },
      {
        "id": "c",
        "text": "Sur un périmètre autorisé ou une cible d’entraînement"
      },
      {
        "id": "d",
        "text": "Sur les systèmes des concurrents pour les comparer"
      }
    ]
  },
  {
    "id": "heo-q2",
    "prompt": "Un test Active Directory vise, dans une optique défensive, à identifier et fermer les chemins d’élévation menant à l’administration du domaine.",
    "skills": [
      "h-cibles"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "heo-q3",
    "prompt": "À quoi sert un proxy d’interception (Burp Suite, OWASP ZAP) dans un test autorisé ?",
    "skills": [
      "h-exec-web"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Attribuer automatiquement des adresses IP aux machines du réseau"
      },
      {
        "id": "b",
        "text": "Modifier les requêtes pour tester la confiance du serveur"
      },
      {
        "id": "c",
        "text": "Remplacer le serveur DNS de l’organisation pendant la mission"
      },
      {
        "id": "d",
        "text": "Chiffrer le disque dur du poste utilisé pour réaliser les tests"
      }
    ]
  },
  {
    "id": "heo-q4",
    "prompt": "Quelle défense rend une injection SQL (détectable avec sqlmap) impossible ?",
    "skills": [
      "h-exec-web"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Les requêtes paramétrées"
      },
      {
        "id": "b",
        "text": "La désactivation du HTTPS sur le site concerné"
      },
      {
        "id": "c",
        "text": "Un mot de passe de base de données plus long"
      },
      {
        "id": "d",
        "text": "Un changement du numéro de port du serveur"
      }
    ]
  },
  {
    "id": "heo-q5",
    "prompt": "Quels outils servent au test d’applications web ?",
    "skills": [
      "h-exec-web"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Nikto (configuration web)"
      },
      {
        "id": "b",
        "text": "Gobuster et FFUF (découverte de contenu)"
      },
      {
        "id": "c",
        "text": "Un tableur de bureautique"
      },
      {
        "id": "d",
        "text": "Burp Suite et OWASP ZAP (proxys d’interception)"
      }
    ]
  },
  {
    "id": "heo-q6",
    "prompt": "Que neutralise le fait de maintenir un système à jour, vis-à-vis d’un cadriciel comme Metasploit ?",
    "skills": [
      "h-outils-reseau-mdp"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le réseau devient plus rapide pour toutes les applications"
      },
      {
        "id": "b",
        "text": "Le chiffrement est désactivé sur toutes les machines du parc"
      },
      {
        "id": "c",
        "text": "Les mots de passe s’allongent automatiquement pour chaque compte"
      },
      {
        "id": "d",
        "text": "Les modules visant des failles déjà corrigées ne s’appliquent plus"
      }
    ]
  },
  {
    "id": "heo-q7",
    "prompt": "Quelles défenses répondent à un outil qui teste la résistance des authentifications aux essais répétés (type Hydra) ?",
    "skills": [
      "h-outils-reseau-mdp"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "L’ouverture de tous les ports du pare-feu du site"
      },
      {
        "id": "b",
        "text": "La suppression de la journalisation des connexions"
      },
      {
        "id": "c",
        "text": "Un écran plus grand pour les administrateurs"
      },
      {
        "id": "d",
        "text": "Limitation des tentatives, verrouillage et MFA"
      }
    ]
  },
  {
    "id": "heo-q8",
    "prompt": "Un audit de mots de passe autorisé évalue leur robustesse à partir d’empreintes obtenues légalement, pour renforcer les pratiques — ce n’est pas un vol de comptes.",
    "skills": [
      "h-outils-reseau-mdp"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "heo-q9",
    "prompt": "Quelles mesures réduisent l’efficacité d’un audit de mots de passe par cassage hors ligne (John the Ripper, Hashcat) ?",
    "skills": [
      "h-outils-reseau-mdp"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Le stockage des mots de passe en clair"
      },
      {
        "id": "b",
        "text": "Des politiques imposant des mots de passe robustes"
      },
      {
        "id": "c",
        "text": "La MFA, qui réduit la valeur d’un mot de passe seul"
      },
      {
        "id": "d",
        "text": "Un hachage lent et salé (voir module E)"
      }
    ]
  },
  {
    "id": "heo-q10",
    "prompt": "Qu’évalue un test Active Directory, du point de vue défensif ?",
    "skills": [
      "h-cibles"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "La vitesse du réseau local entre les différents sites"
      },
      {
        "id": "b",
        "text": "La taille des disques des contrôleurs de domaine"
      },
      {
        "id": "c",
        "text": "Les chemins vers l’administration du domaine"
      },
      {
        "id": "d",
        "text": "La couleur de l’interface des outils d’administration"
      }
    ]
  },
  {
    "id": "heo-q11",
    "prompt": "Quelles mesures durcissent une infrastructure face aux tests AD et Wi-Fi ?",
    "skills": [
      "h-cibles"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Détection des points d’accès Wi-Fi pirates"
      },
      {
        "id": "b",
        "text": "Modèle en tiers, moindre privilège et LAPS pour Active Directory"
      },
      {
        "id": "c",
        "text": "Partage public du mot de passe Wi-Fi de l’entreprise"
      },
      {
        "id": "d",
        "text": "WPA2/WPA3-Entreprise et 802.1X pour le Wi-Fi"
      }
    ]
  },
  {
    "id": "heo-q12",
    "prompt": "Quelles contre-mesures limitent l’impact d’une post-exploitation (accès obtenu sur une machine) ?",
    "skills": [
      "h-post-equipes"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Segmentation, moindre privilège, détection (EDR) et journalisation"
      },
      {
        "id": "b",
        "text": "Augmentation de la luminosité des écrans des opérateurs"
      },
      {
        "id": "c",
        "text": "Attribution des droits d’administration à tous les utilisateurs"
      },
      {
        "id": "d",
        "text": "Désactivation de l’antivirus sur les machines sensibles"
      }
    ]
  },
  {
    "id": "heo-q13",
    "prompt": "Contre le pivoting (propagation d’un segment réseau à un autre), quelle mesure est la plus efficace ?",
    "skills": [
      "h-post-equipes"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un mot de passe plus long pour chaque utilisateur"
      },
      {
        "id": "b",
        "text": "La micro-segmentation et le filtrage inter-zones"
      },
      {
        "id": "c",
        "text": "La suppression des journaux de connexion des serveurs"
      },
      {
        "id": "d",
        "text": "Un écran de veille activé après une minute d’inactivité"
      }
    ]
  },
  {
    "id": "heo-q14",
    "prompt": "Quelle est la différence entre Red Team et Purple Team ?",
    "skills": [
      "h-post-equipes"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "La Purple Team ne réalise que de la reconnaissance passive"
      },
      {
        "id": "b",
        "text": "La Red Team teste, la Purple Team fait collaborer rouge et bleu"
      },
      {
        "id": "c",
        "text": "Ce sont deux noms pour exactement le même type d’exercice"
      },
      {
        "id": "d",
        "text": "La Red Team ne teste que le Wi-Fi, la Purple Team uniquement le web"
      }
    ]
  },
  {
    "id": "heo-q15",
    "prompt": "Expliquez pourquoi, dans une optique défensive, la vraie valeur d’un test d’intrusion réside dans les correctifs et les détections produits, et le rôle de la démarche Purple Team.",
    "skills": [
      "h-post-equipes",
      "h-exec-web"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "heo-q16",
    "prompt": "Un responsable demande pourquoi il faut connaître les outils offensifs pour défendre. Répondez en vous appuyant sur le lien entre chaque outil et sa défense.",
    "skills": [
      "h-outils-reseau-mdp",
      "h-exec-web"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "heo-q17",
    "prompt": "Pourquoi journaliser ses actions pendant un test autorisé ?",
    "skills": [
      "h-exec-web"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Pour augmenter la durée de la mission facturée"
      },
      {
        "id": "b",
        "text": "Pour effacer les traces laissées sur les systèmes"
      },
      {
        "id": "c",
        "text": "Pour éviter de rédiger le rapport en fin de mission"
      },
      {
        "id": "d",
        "text": "Pour distinguer le test d’une attaque réelle"
      }
    ]
  },
  {
    "id": "heo-q18",
    "prompt": "Quel proxy d’interception gratuit de la fondation OWASP est utilisé pour tester des applications web ? (sigle)",
    "skills": [
      "h-exec-web"
    ],
    "difficulty": 1,
    "type": "short",
    "placeholder": "sigle"
  },
  {
    "id": "heo-q19",
    "prompt": "Un outil de découverte de contenu comme Gobuster ou FFUF exploite des failles du code de l’application pour obtenir ses fichiers.",
    "skills": [
      "h-exec-web"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "heo-q20",
    "prompt": "Pourquoi un hachage lent et salé gêne-t-il un cassage hors ligne ?",
    "skills": [
      "h-outils-reseau-mdp"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Chaque essai coûte cher et les tables précalculées sont inutiles"
      },
      {
        "id": "b",
        "text": "Il chiffre les empreintes avec une clé inconnue de l’attaquant"
      },
      {
        "id": "c",
        "text": "Il bloque automatiquement le compte après trois essais"
      },
      {
        "id": "d",
        "text": "Il empêche de copier le fichier d’empreintes hors du serveur"
      }
    ]
  },
  {
    "id": "heo-q21",
    "prompt": "Quel outil de cassage d’empreintes tire parti de la puissance des cartes graphiques ? (nom)",
    "skills": [
      "h-outils-reseau-mdp"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "nom"
  },
  {
    "id": "heo-q22",
    "prompt": "Quel mécanisme Wi-Fi d’entreprise authentifie chaque utilisateur individuellement ?",
    "skills": [
      "h-cibles"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le filtrage des adresses MAC des appareils"
      },
      {
        "id": "b",
        "text": "Le masquage du nom du réseau (SSID)"
      },
      {
        "id": "c",
        "text": "WPA2/WPA3-Entreprise avec 802.1X"
      },
      {
        "id": "d",
        "text": "Un mot de passe partagé affiché à l’accueil"
      }
    ]
  },
  {
    "id": "heo-q23",
    "prompt": "Pourquoi les comptes de service sont-ils une cible fréquente dans Active Directory ?",
    "skills": [
      "h-cibles"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Ils appartiennent systématiquement au groupe des invités"
      },
      {
        "id": "b",
        "text": "Ils ne sont jamais journalisés par les contrôleurs de domaine"
      },
      {
        "id": "c",
        "text": "Ils sont toujours désactivés et donc faciles à réactiver"
      },
      {
        "id": "d",
        "text": "Ils ont souvent des droits élevés et des mots de passe anciens"
      }
    ]
  },
  {
    "id": "heo-q24",
    "prompt": "Un modèle d’administration en tiers sépare les comptes d’administration selon la sensibilité des systèmes qu’ils gèrent.",
    "skills": [
      "h-cibles"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "heo-q25",
    "prompt": "Quelles mesures protègent un réseau Wi-Fi d’entreprise ?",
    "skills": [
      "h-cibles"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "WPA2/WPA3-Entreprise avec 802.1X"
      },
      {
        "id": "b",
        "text": "Détection des points d’accès pirates"
      },
      {
        "id": "c",
        "text": "Segmentation séparée du réseau invité"
      },
      {
        "id": "d",
        "text": "Un mot de passe unique pour tous les salariés"
      }
    ]
  },
  {
    "id": "heo-q26",
    "prompt": "Comment valide-t-on qu’une règle de détection fonctionne dans une démarche Purple Team ?",
    "skills": [
      "h-post-equipes"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "En attendant qu’une vraie attaque se produise"
      },
      {
        "id": "b",
        "text": "En rejouant la technique offensive correspondante"
      },
      {
        "id": "c",
        "text": "En désactivant la règle puis en observant l’effet"
      },
      {
        "id": "d",
        "text": "En lisant la règle sans jamais la tester"
      }
    ]
  },
  {
    "id": "heo-q27",
    "prompt": "À quoi sert MITRE ATT&CK dans un exercice Purple Team ?",
    "skills": [
      "h-post-equipes"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "À référencer les techniques et suivre la couverture"
      },
      {
        "id": "b",
        "text": "À mesurer la vitesse du réseau pendant l’exercice"
      },
      {
        "id": "c",
        "text": "À chiffrer les preuves collectées pendant la mission"
      },
      {
        "id": "d",
        "text": "À remplacer le journal des actions du pentesteur"
      }
    ]
  },
  {
    "id": "heo-q28",
    "prompt": "Quel sigle désigne les solutions de détection et de réponse installées sur les postes et les serveurs ? (sigle)",
    "skills": [
      "h-post-equipes"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "sigle"
  },
  {
    "id": "heo-q29",
    "prompt": "Quelle mauvaise configuration cloud expose fréquemment des données ?",
    "skills": [
      "h-surfaces"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un accès d’administration protégé par une authentification MFA"
      },
      {
        "id": "b",
        "text": "Une sauvegarde conservée dans une autre région du fournisseur"
      },
      {
        "id": "c",
        "text": "Un stockage d’objets accessible publiquement par erreur"
      },
      {
        "id": "d",
        "text": "Un stockage d’objets chiffré avec une clé gérée par le client"
      }
    ]
  },
  {
    "id": "heo-q30",
    "prompt": "Pourquoi des droits IAM trop larges sont-ils dangereux dans le cloud ?",
    "skills": [
      "h-surfaces"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un compte compromis donne accès à beaucoup de ressources"
      },
      {
        "id": "b",
        "text": "Ils obligent à utiliser un chiffrement plus faible"
      },
      {
        "id": "c",
        "text": "Ils empêchent le fournisseur de sauvegarder les données"
      },
      {
        "id": "d",
        "text": "Ils ralentissent toutes les requêtes envoyées au fournisseur"
      }
    ]
  },
  {
    "id": "heo-q31",
    "prompt": "Un conteneur isolé du reste du système n’a pas besoin que l’image dont il provient soit mise à jour.",
    "skills": [
      "h-surfaces"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "heo-q32",
    "prompt": "Quelles mesures réduisent les risques d’une API exposée ?",
    "skills": [
      "h-surfaces"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Retour de toutes les propriétés des objets par défaut"
      },
      {
        "id": "b",
        "text": "Limitation de débit des appels"
      },
      {
        "id": "c",
        "text": "Autorisation vérifiée par objet et par fonction"
      },
      {
        "id": "d",
        "text": "Authentification de chaque appel"
      }
    ]
  },
  {
    "id": "heo-q33",
    "prompt": "Quel sigle désigne les outils qui comparent en continu la configuration du cloud à des règles de sécurité ? (sigle)",
    "skills": [
      "h-surfaces"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "sigle"
  },
  {
    "id": "heo-q34",
    "prompt": "Que vérifier avant de tester un environnement hébergé chez un fournisseur cloud ?",
    "skills": [
      "h-surfaces"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Que le client dispose d’une licence pour les outils de test"
      },
      {
        "id": "b",
        "text": "Que l’environnement est vide et sans aucune donnée"
      },
      {
        "id": "c",
        "text": "Que le fournisseur utilise le même système que vous"
      },
      {
        "id": "d",
        "text": "Sa politique sur les tests de sécurité et le périmètre admis"
      }
    ]
  },
  {
    "id": "heo-q35",
    "prompt": "Que mesure le taux de détection d’un exercice Purple Team ?",
    "skills": [
      "h-mesure"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "La durée totale de l’exercice du premier au dernier jour"
      },
      {
        "id": "b",
        "text": "La part des techniques rejouées que le SOC a détectées"
      },
      {
        "id": "c",
        "text": "Le nombre d’alertes produites par les outils en une journée"
      },
      {
        "id": "d",
        "text": "Le nombre de postes présents dans le périmètre testé"
      }
    ]
  },
  {
    "id": "heo-q36",
    "prompt": "Quel indicateur mesure la rapidité de la détection ?",
    "skills": [
      "h-mesure"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le nombre de techniques présentes dans le référentiel"
      },
      {
        "id": "b",
        "text": "Le nombre de règles écrites par l’équipe depuis un an"
      },
      {
        "id": "c",
        "text": "Le délai entre l’action offensive et l’alerte du SOC"
      },
      {
        "id": "d",
        "text": "Le temps de démarrage des outils de supervision"
      }
    ]
  },
  {
    "id": "heo-q37",
    "prompt": "Après la correction d’un constat, un retest vérifie que la faille est bien résolue.",
    "skills": [
      "h-mesure"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "heo-q38",
    "prompt": "Que doit contenir le rapport d’un exercice Purple Team ?",
    "skills": [
      "h-mesure"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Le résultat de détection de chacune"
      },
      {
        "id": "b",
        "text": "Les techniques rejouées, rattachées à ATT&CK"
      },
      {
        "id": "c",
        "text": "Les mots de passe récupérés pendant l’exercice"
      },
      {
        "id": "d",
        "text": "Les actions correctives, avec responsables et dates"
      }
    ]
  },
  {
    "id": "heo-q39",
    "prompt": "Un exercice Purple Team n’est réussi que si le SOC détecte toutes les techniques dès la première exécution.",
    "skills": [
      "h-mesure"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "heo-q40",
    "prompt": "La direction demande de prouver l’efficacité du SOC face à un scénario de rançongiciel. Concevez un exercice Purple Team : objectifs, déroulement, indicateurs et suites.",
    "skills": [
      "h-mesure",
      "h-post-equipes"
    ],
    "difficulty": 3,
    "type": "open"
  }
];
