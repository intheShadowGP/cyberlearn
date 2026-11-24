// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "bdef-q1",
    "prompt": "Quel est l’objectif d’une attaque par déni de service ?",
    "skills": [
      "b-dos-usurpation"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Installer un logiciel espion sur les postes qui consultent le service"
      },
      {
        "id": "b",
        "text": "Rendre un service indisponible en épuisant l’une de ses ressources"
      },
      {
        "id": "c",
        "text": "Modifier discrètement les données stockées par le service visé"
      },
      {
        "id": "d",
        "text": "Dérober les mots de passe des utilisateurs qui se connectent au service"
      }
    ]
  },
  {
    "id": "bdef-q2",
    "prompt": "Dans une attaque par réflexion et amplification, pourquoi l’attaquant usurpe-t-il l’adresse source de ses requêtes ?",
    "skills": [
      "b-dos-usurpation"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Pour obliger les serveurs à lui renvoyer tout le trafic de la victime"
      },
      {
        "id": "b",
        "text": "Pour contourner le chiffrement appliqué aux réponses des serveurs ouverts"
      },
      {
        "id": "c",
        "text": "Pour que les réponses, bien plus volumineuses, soient envoyées à la victime"
      },
      {
        "id": "d",
        "text": "Pour que les serveurs sollicités n’enregistrent pas ses requêtes dans leurs journaux"
      }
    ]
  },
  {
    "id": "bdef-q3",
    "prompt": "Un résolveur DNS ouvert à tout Internet peut être exploité comme amplificateur dans une attaque par réflexion.",
    "skills": [
      "b-dos-usurpation"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "bdef-q4",
    "prompt": "Quel mécanisme évite à un serveur d’allouer de l’état à chaque SYN reçu, pour résister à un SYN flood ? (deux mots)",
    "skills": [
      "b-dos-usurpation"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "deux mots"
  },
  {
    "id": "bdef-q5",
    "prompt": "Que fait le filtrage d’entrée de type BCP 38 chez un opérateur ?",
    "skills": [
      "b-dos-usurpation"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Il bloque tous les paquets destinés à des adresses de réseaux privés, sur chaque interface"
      },
      {
        "id": "b",
        "text": "Il limite le débit de chaque client à la valeur prévue dans son contrat"
      },
      {
        "id": "c",
        "text": "Il chiffre les paquets sortants pour empêcher leur lecture par des tiers"
      },
      {
        "id": "d",
        "text": "Il rejette les paquets dont la source n’est pas légitime sur l’interface"
      }
    ]
  },
  {
    "id": "bdef-q6",
    "prompt": "Quelles mesures aident à faire face à une attaque volumétrique saturant le lien d’accès ?",
    "skills": [
      "b-dos-usurpation"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Agrandir la table d’états du pare-feu situé à l’intérieur du réseau"
      },
      {
        "id": "b",
        "text": "S’appuyer sur un CDN ou un réseau anycast qui répartit et absorbe la charge"
      },
      {
        "id": "c",
        "text": "Dériver le trafic vers un centre de nettoyage chez un opérateur ou un prestataire"
      },
      {
        "id": "d",
        "text": "Demander à l’opérateur de limiter ou filtrer le trafic en amont du lien"
      }
    ]
  },
  {
    "id": "bdef-q7",
    "prompt": "Votre site est inaccessible : le lien Internet est saturé par un trafic massif de réponses DNS que personne n’a demandées. Expliquez pourquoi le pare-feu local ne suffit pas et quelles mesures vous prenez.",
    "skills": [
      "b-dos-usurpation"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "bdef-q8",
    "prompt": "Quel plan d’un routeur regroupe les protocoles qui construisent la table de routage, comme OSPF et BGP ?",
    "skills": [
      "b-durcissement-equipements"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le plan de contrôle"
      },
      {
        "id": "b",
        "text": "Le plan de sauvegarde"
      },
      {
        "id": "c",
        "text": "Le plan de données"
      },
      {
        "id": "d",
        "text": "Le plan de gestion"
      }
    ]
  },
  {
    "id": "bdef-q9",
    "prompt": "À quoi sert le CoPP (Control Plane Policing) ?",
    "skills": [
      "b-durcissement-equipements"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "À limiter et filtrer le trafic destiné au processeur de l’équipement"
      },
      {
        "id": "b",
        "text": "À sauvegarder la configuration du routeur après chaque modification"
      },
      {
        "id": "c",
        "text": "À chiffrer les sessions de routage échangées entre deux routeurs voisins"
      },
      {
        "id": "d",
        "text": "À répartir la charge du trafic entre plusieurs liens de sortie du site"
      }
    ]
  },
  {
    "id": "bdef-q10",
    "prompt": "Une communauté SNMP v2c nommée « public » est acceptable sur un équipement dès lors qu’il se trouve sur le réseau interne.",
    "skills": [
      "b-durcissement-equipements"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "bdef-q11",
    "prompt": "Quel protocole remplace Telnet pour administrer un équipement à distance avec chiffrement ? (sigle)",
    "skills": [
      "b-durcissement-equipements"
    ],
    "difficulty": 1,
    "type": "short",
    "placeholder": "sigle"
  },
  {
    "id": "bdef-q12",
    "prompt": "Que vérifie la sécurité par le TTL (GTSM) entre deux routeurs voisins directement connectés ?",
    "skills": [
      "b-durcissement-equipements"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Que le paquet a bien été signé par le routeur voisin avec une clé partagée"
      },
      {
        "id": "b",
        "text": "Que le TTL reçu vaut 255, donc que le paquet n’a traversé aucun routeur"
      },
      {
        "id": "c",
        "text": "Que le routeur voisin possède un numéro de système autonome autorisé"
      },
      {
        "id": "d",
        "text": "Que le TTL est suffisant pour atteindre la destination sans expirer en chemin"
      }
    ]
  },
  {
    "id": "bdef-q13",
    "prompt": "Quelles pratiques relèvent de l’hygiène BGP ?",
    "skills": [
      "b-durcissement-equipements"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Accepter la route par défaut annoncée par chacun des voisins"
      },
      {
        "id": "b",
        "text": "Filtrer les préfixes reçus, notamment réservés et anormalement spécifiques"
      },
      {
        "id": "c",
        "text": "Fixer un nombre maximal de préfixes acceptés par voisin"
      },
      {
        "id": "d",
        "text": "Valider l’origine des annonces par la RPKI"
      }
    ]
  },
  {
    "id": "bdef-q14",
    "prompt": "Un routeur de bordure autorise Telnet, répond à SNMP v2c avec la communauté « public », fait tourner OSPF sans authentification sur toutes ses interfaces et accepte tout préfixe d’un voisin BGP. Classez les risques par priorité et proposez les corrections.",
    "skills": [
      "b-durcissement-equipements"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "bdef-q15",
    "prompt": "Que contient un enregistrement de flux NetFlow ou IPFIX ?",
    "skills": [
      "b-visibilite-chiffre"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Les mots de passe saisis par les utilisateurs dans les applications web"
      },
      {
        "id": "b",
        "text": "Le contenu intégral des paquets échangés pendant la durée du flux"
      },
      {
        "id": "c",
        "text": "La liste des fichiers transférés et le nom de leurs propriétaires"
      },
      {
        "id": "d",
        "text": "Les adresses, ports, volumes et durée d’un échange, sans son contenu"
      }
    ]
  },
  {
    "id": "bdef-q16",
    "prompt": "Quel avantage les flux ont-ils sur la capture complète des paquets ?",
    "skills": [
      "b-visibilite-chiffre"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Ils identifient avec certitude le processus à l’origine de la connexion"
      },
      {
        "id": "b",
        "text": "Ils permettent de relire le contenu des échanges chiffrés"
      },
      {
        "id": "c",
        "text": "Ils sont assez légers pour être conservés pendant des mois"
      },
      {
        "id": "d",
        "text": "Ils évitent d’avoir à placer des sondes ou à configurer les équipements"
      }
    ]
  },
  {
    "id": "bdef-q17",
    "prompt": "Avec TLS 1.3, le certificat du serveur est chiffré, ce qui réduit ce qu’une sonde placée sur le réseau peut observer.",
    "skills": [
      "b-visibilite-chiffre"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "bdef-q18",
    "prompt": "Comment s’appelle l’empreinte calculée à partir du ClientHello TLS pour identifier un logiciel client ? (JA suivi d’un chiffre)",
    "skills": [
      "b-visibilite-chiffre"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "JA…"
  },
  {
    "id": "bdef-q19",
    "prompt": "Quel effet a la généralisation d’ECH (Encrypted Client Hello) sur la supervision réseau ?",
    "skills": [
      "b-visibilite-chiffre"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le certificat du serveur est envoyé en clair, ce qui facilite son contrôle"
      },
      {
        "id": "b",
        "text": "Le nom du serveur n’est plus visible, d’où moins de filtrage par destination"
      },
      {
        "id": "c",
        "text": "Les adresses IP des serveurs disparaissent des enregistrements de flux"
      },
      {
        "id": "d",
        "text": "Le contenu des échanges devient lisible pour les sondes, car il est signé numériquement"
      }
    ]
  },
  {
    "id": "bdef-q20",
    "prompt": "Quelles sources aident à détecter une exfiltration par DNS ?",
    "skills": [
      "b-visibilite-chiffre",
      "b-detection-comportementale"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Les journaux du résolveur de l’entreprise"
      },
      {
        "id": "b",
        "text": "Les volumes de requêtes par poste et par domaine"
      },
      {
        "id": "c",
        "text": "Les journaux DNS produits par une sonde de métadonnées comme Zeek"
      },
      {
        "id": "d",
        "text": "Les journaux d’impression du parc de photocopieurs"
      }
    ]
  },
  {
    "id": "bdef-q21",
    "prompt": "L’inspection TLS réalisée par un proxy d’entreprise n’introduit aucun risque supplémentaire, puisqu’elle ne fait que lire le trafic.",
    "skills": [
      "b-visibilite-chiffre"
    ],
    "difficulty": 3,
    "type": "truefalse"
  },
  {
    "id": "bdef-q22",
    "prompt": "Pourquoi une détection comportementale a-t-elle besoin d’une ligne de base ?",
    "skills": [
      "b-detection-comportementale"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Pour disposer d’une liste complète de signatures d’attaques à comparer"
      },
      {
        "id": "b",
        "text": "Pour déchiffrer les échanges et lire leur contenu applicatif"
      },
      {
        "id": "c",
        "text": "Pour attribuer automatiquement une attaque à un groupe d’attaquants"
      },
      {
        "id": "d",
        "text": "Pour mesurer l’écart entre le comportement observé et l’habituel"
      }
    ]
  },
  {
    "id": "bdef-q23",
    "prompt": "Quel indice caractérise le plus une balise de commande et contrôle ?",
    "skills": [
      "b-detection-comportementale"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un transfert très volumineux, ponctuel, vers un service de stockage connu"
      },
      {
        "id": "b",
        "text": "Une multitude de connexions brèves vers des ports différents d’un même hôte"
      },
      {
        "id": "c",
        "text": "Des connexions périodiques, de volume quasi constant, vers une même cible"
      },
      {
        "id": "d",
        "text": "Une forte hausse du trafic web lors de la pause de midi des utilisateurs"
      }
    ]
  },
  {
    "id": "bdef-q24",
    "prompt": "Un poste utilisateur contacte, en une heure, 200 machines internes sur le port 445 avec de très petits échanges. Quelle hypothèse est la plus probable ?",
    "skills": [
      "b-detection-comportementale",
      "b-segmentation-zt"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un balayage ou une tentative de propagation latérale par SMB"
      },
      {
        "id": "b",
        "text": "Une sauvegarde nocturne du poste vers le serveur de fichiers"
      },
      {
        "id": "c",
        "text": "Une mise à jour du système distribuée depuis le serveur central"
      },
      {
        "id": "d",
        "text": "Une consultation normale des partages de l’équipe de l’utilisateur"
      }
    ]
  },
  {
    "id": "bdef-q25",
    "prompt": "Un leurre (honeypot) produit très peu de faux positifs, car aucun usage légitime ne le sollicite.",
    "skills": [
      "b-detection-comportementale"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "bdef-q26",
    "prompt": "Comment nomme-t-on la démarche proactive qui part d’une hypothèse d’attaque pour la rechercher dans les données collectées ? (en anglais ou en français)",
    "skills": [
      "b-detection-comportementale"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "démarche"
  },
  {
    "id": "bdef-q27",
    "prompt": "Quels indices évoquent un tunnel DNS ?",
    "skills": [
      "b-detection-comportementale"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Des sous-domaines longs et d’apparence aléatoire"
      },
      {
        "id": "b",
        "text": "Un très grand nombre de noms uniques sous un même domaine rare"
      },
      {
        "id": "c",
        "text": "Des requêtes courtes et répétées vers un domaine très populaire"
      },
      {
        "id": "d",
        "text": "Un volume anormal de requêtes de type TXT émises par un seul poste"
      }
    ]
  },
  {
    "id": "bdef-q28",
    "prompt": "Formulez une hypothèse de chasse pour détecter l’exfiltration de données vers un service de stockage en ligne, puis décrivez les données et les étapes pour la tester.",
    "skills": [
      "b-detection-comportementale"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "bdef-q29",
    "prompt": "Quelle différence principale entre un accès ZTNA et un VPN classique ?",
    "skills": [
      "b-segmentation-zt"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le ZTNA n’ouvre que l’application demandée, après contrôle de l’identité et de l’appareil"
      },
      {
        "id": "b",
        "text": "Le ZTNA ne fonctionne que pour les postes situés dans les locaux de l’entreprise, jamais à distance"
      },
      {
        "id": "c",
        "text": "Le ZTNA supprime tout besoin d’authentifier l’utilisateur qui se connecte à l’application"
      },
      {
        "id": "d",
        "text": "Le ZTNA chiffre les échanges alors que le VPN classique les laisse toujours en clair sur Internet"
      }
    ]
  },
  {
    "id": "bdef-q30",
    "prompt": "Que fait un contrôle d’accès réseau (NAC) face à un poste dont l’antivirus est désactivé et le système obsolète ?",
    "skills": [
      "b-segmentation-zt"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Il remplace automatiquement le système obsolète par une version à jour"
      },
      {
        "id": "b",
        "text": "Il l’autorise sur tout le réseau mais enregistre l’incident pour un traitement ultérieur par l’équipe"
      },
      {
        "id": "c",
        "text": "Il le déconnecte définitivement et supprime le compte de son utilisateur dans l’annuaire de l’entreprise"
      },
      {
        "id": "d",
        "text": "Il le place en quarantaine, dans un réseau restreint, jusqu’à sa mise en conformité"
      }
    ]
  },
  {
    "id": "bdef-q31",
    "prompt": "Le trafic est-ouest, entre serveurs d’un même site, est souvent moins filtré et moins observé que le trafic entrant et sortant.",
    "skills": [
      "b-segmentation-zt"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "bdef-q32",
    "prompt": "Quel est l’intérêt d’imposer un bastion pour l’administration des équipements ?",
    "skills": [
      "b-segmentation-zt"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Il rend inutile la mise à jour des équipements, puisqu’ils ne sont plus joignables du tout"
      },
      {
        "id": "b",
        "text": "Un accès unique et durci, où authentification forte et journalisation sont centralisées"
      },
      {
        "id": "c",
        "text": "Il remplace le pare-feu situé entre le réseau interne et Internet"
      },
      {
        "id": "d",
        "text": "Il permet à chaque administrateur de se connecter directement depuis son poste"
      }
    ]
  },
  {
    "id": "bdef-q33",
    "prompt": "Quel terme désigne le découpage du réseau jusqu’à la charge de travail, avec des règles de filtrage entre elles ?",
    "skills": [
      "b-segmentation-zt"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "terme"
  },
  {
    "id": "bdef-q34",
    "prompt": "Quelles mesures limitent le mouvement latéral au sein d’un réseau ?",
    "skills": [
      "b-segmentation-zt"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Limiter SMB, RDP et WinRM aux machines qui en ont réellement besoin"
      },
      {
        "id": "b",
        "text": "Isoler les postes entre eux, même au sein d’un même VLAN"
      },
      {
        "id": "c",
        "text": "Administrer les équipements uniquement par un bastion journalisé"
      },
      {
        "id": "d",
        "text": "Placer tous les serveurs dans un seul VLAN pour simplifier la supervision"
      }
    ]
  },
  {
    "id": "bdef-q35",
    "prompt": "Pourquoi synchroniser l’heure de tous les équipements par NTP en vue d’une investigation ?",
    "skills": [
      "b-resilience-reponse"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Pour chiffrer les journaux avant leur envoi vers le serveur central"
      },
      {
        "id": "b",
        "text": "Pour augmenter le débit des échanges entre les équipements du réseau"
      },
      {
        "id": "c",
        "text": "Pour remettre dans l’ordre les journaux de plusieurs sources"
      },
      {
        "id": "d",
        "text": "Pour que les équipements s’authentifient mutuellement avant d’échanger"
      }
    ]
  },
  {
    "id": "bdef-q36",
    "prompt": "Qu’est-ce qu’un sinkhole DNS ?",
    "skills": [
      "b-resilience-reponse"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un filtre qui supprime tous les enregistrements de type TXT d’une zone"
      },
      {
        "id": "b",
        "text": "Un tunnel chiffré par lequel transitent les requêtes DNS des postes distants"
      },
      {
        "id": "c",
        "text": "Un mécanisme qui fait résoudre un domaine malveillant vers une adresse du défenseur"
      },
      {
        "id": "d",
        "text": "Un serveur de secours qui reprend les requêtes lorsque le résolveur principal tombe en panne"
      }
    ]
  },
  {
    "id": "bdef-q37",
    "prompt": "Calculer une empreinte (SHA-256) d’une capture réseau dès sa collecte la modifie et la rend inutilisable comme preuve.",
    "skills": [
      "b-resilience-reponse"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "bdef-q38",
    "prompt": "Quel compromis comporte un blackholing (RTBH) de l’adresse attaquée ?",
    "skills": [
      "b-dos-usurpation",
      "b-resilience-reponse"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "La victime devient inaccessible, le reste du réseau est préservé"
      },
      {
        "id": "b",
        "text": "Le trafic est nettoyé, mais au prix d’une forte hausse de la latence"
      },
      {
        "id": "c",
        "text": "Le trafic légitime est conservé, mais l’attaque continue d’aboutir"
      },
      {
        "id": "d",
        "text": "L’attaquant est identifié, mais le service reste saturé pour tous"
      }
    ]
  },
  {
    "id": "bdef-q39",
    "prompt": "Quelles mesures renforcent la résilience d’un réseau ?",
    "skills": [
      "b-resilience-reponse"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Doubler les liens et les équipements critiques"
      },
      {
        "id": "b",
        "text": "Sauvegarder et tester la restauration des configurations"
      },
      {
        "id": "c",
        "text": "Envoyer les journaux en continu vers un serveur centralisé"
      },
      {
        "id": "d",
        "text": "Concentrer tout le routage sur un unique équipement très puissant"
      }
    ]
  },
  {
    "id": "bdef-q40",
    "prompt": "Un poste est soupçonné d’être compromis et de dialoguer avec un serveur de commande. Décrivez le confinement réseau et la préservation des preuves, et expliquez pourquoi les deux se décident ensemble.",
    "skills": [
      "b-resilience-reponse",
      "b-segmentation-zt"
    ],
    "difficulty": 3,
    "type": "open"
  }
];
