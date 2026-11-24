// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "virt-q1",
    "prompt": "Qu’est-ce qu’un hyperviseur ?",
    "skills": [
      "a-virt"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un logiciel qui crée et fait fonctionner des machines virtuelles"
      },
      {
        "id": "b",
        "text": "Un service qui attribue des adresses IP aux machines du réseau"
      },
      {
        "id": "c",
        "text": "Un antivirus qui analyse les fichiers lors de leur ouverture"
      },
      {
        "id": "d",
        "text": "Un pare-feu qui filtre le trafic entre deux réseaux locaux"
      }
    ]
  },
  {
    "id": "virt-q2",
    "prompt": "Quelle est la différence entre un hyperviseur de type 1 et un hyperviseur de type 2 ?",
    "skills": [
      "a-virt"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le type 1 ne gère que des machines Linux, le type 2 que des machines Windows"
      },
      {
        "id": "b",
        "text": "Le type 1 s’exécute directement sur le matériel, le type 2 au-dessus d’un système hôte"
      },
      {
        "id": "c",
        "text": "Le type 1 est installé dans le navigateur, le type 2 dans le noyau"
      },
      {
        "id": "d",
        "text": "Le type 1 ne fait pas d’isolation, le type 2 isole chaque machine"
      }
    ]
  },
  {
    "id": "virt-q3",
    "prompt": "Lequel de ces produits est un hyperviseur de type 2 ?",
    "skills": [
      "a-virt"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "VMware ESXi"
      },
      {
        "id": "b",
        "text": "KVM"
      },
      {
        "id": "c",
        "text": "VirtualBox"
      },
      {
        "id": "d",
        "text": "Xen"
      }
    ]
  },
  {
    "id": "virt-q4",
    "prompt": "Une machine virtuelle exécute son propre système d’exploitation invité, avec son propre noyau.",
    "skills": [
      "a-virt"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "virt-q5",
    "prompt": "Quels usages de la virtualisation sont intéressants pour la sécurité ?",
    "skills": [
      "a-virt"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Supprimer le besoin de mettre à jour le système invité"
      },
      {
        "id": "b",
        "text": "Séparer un environnement de test d’un environnement de production"
      },
      {
        "id": "c",
        "text": "Revenir à un état sain grâce aux instantanés"
      },
      {
        "id": "d",
        "text": "Analyser un malware dans un environnement jetable"
      },
      {
        "id": "e",
        "text": "Rendre une machine immunisée contre toute attaque"
      }
    ]
  },
  {
    "id": "virt-q6",
    "prompt": "Un attaquant qui contrôle une machine invitée exploite une faille de l’hyperviseur pour atteindre l’hôte. Comment nomme-t-on cette attaque ?",
    "skills": [
      "a-virt"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un hameçonnage ciblé"
      },
      {
        "id": "b",
        "text": "Un dépassement de quota"
      },
      {
        "id": "c",
        "text": "Une usurpation de protocole ARP"
      },
      {
        "id": "d",
        "text": "Une évasion de machine virtuelle"
      }
    ]
  },
  {
    "id": "virt-q7",
    "prompt": "Un instantané (snapshot) d’une machine virtuelle ne contient jamais d’information sensible, puisqu’il ne reflète que le disque.",
    "skills": [
      "a-virt"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "virt-q8",
    "prompt": "Pourquoi la console d’administration d’un hyperviseur est-elle une cible de très haute valeur ?",
    "skills": [
      "a-virt",
      "a-orch"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Elle fonctionne sans journalisation ni authentification possible"
      },
      {
        "id": "b",
        "text": "La compromettre donne le contrôle de toutes les machines hébergées"
      },
      {
        "id": "c",
        "text": "Elle est publiée sur Internet par défaut dans les produits récents"
      },
      {
        "id": "d",
        "text": "Elle stocke les mots de passe de tous les utilisateurs du réseau"
      }
    ]
  },
  {
    "id": "virt-q9",
    "prompt": "Quel nom porte l’extension matérielle d’Intel qui accélère la virtualisation ? (quatre caractères)",
    "skills": [
      "a-virt"
    ],
    "difficulty": 2,
    "type": "short"
  },
  {
    "id": "virt-q10",
    "prompt": "Qu’est-ce qu’un conteneur ?",
    "skills": [
      "a-cont"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Une machine virtuelle complète avec son propre noyau et son matériel simulé"
      },
      {
        "id": "b",
        "text": "Un composant matériel qui isole la mémoire vive"
      },
      {
        "id": "c",
        "text": "Un processus isolé qui partage le noyau du système hôte"
      },
      {
        "id": "d",
        "text": "Un fichier compressé qui regroupe plusieurs documents"
      }
    ]
  },
  {
    "id": "virt-q11",
    "prompt": "Quelle différence majeure existe-t-il entre une machine virtuelle et un conteneur ?",
    "skills": [
      "a-cont"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le conteneur partage le noyau de l’hôte, la VM embarque le sien"
      },
      {
        "id": "b",
        "text": "La VM ne peut pas faire tourner un autre système que celui de l’hôte"
      },
      {
        "id": "c",
        "text": "Le conteneur embarque son propre noyau, la VM partage celui de l’hôte"
      },
      {
        "id": "d",
        "text": "Le conteneur nécessite toujours un hyperviseur de type 1"
      }
    ]
  },
  {
    "id": "virt-q12",
    "prompt": "Une faille du noyau Linux exploitable depuis un conteneur peut affecter l’hôte et les autres conteneurs.",
    "skills": [
      "a-cont"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "virt-q13",
    "prompt": "Quel mécanisme du noyau limite la quantité de processeur et de mémoire qu’un conteneur peut consommer ?",
    "skills": [
      "a-cont"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Secure Boot"
      },
      {
        "id": "b",
        "text": "Les namespaces"
      },
      {
        "id": "c",
        "text": "Les capabilities"
      },
      {
        "id": "d",
        "text": "Les cgroups"
      }
    ]
  },
  {
    "id": "virt-q14",
    "prompt": "Quel mécanisme du noyau donne à un conteneur sa propre vue des processus, du réseau ou des points de montage ?",
    "skills": [
      "a-cont"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Les journaux d’audit"
      },
      {
        "id": "b",
        "text": "Les cgroups"
      },
      {
        "id": "c",
        "text": "Le TPM"
      },
      {
        "id": "d",
        "text": "Les namespaces"
      }
    ]
  },
  {
    "id": "virt-q15",
    "prompt": "Quels avantages les conteneurs ont-ils sur les machines virtuelles ?",
    "skills": [
      "a-cont"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Un faible surcoût en ressources"
      },
      {
        "id": "b",
        "text": "Un noyau distinct pour chaque conteneur"
      },
      {
        "id": "c",
        "text": "Un démarrage très rapide"
      },
      {
        "id": "d",
        "text": "Une isolation plus forte"
      }
    ]
  },
  {
    "id": "virt-q16",
    "prompt": "Un développeur affirme que ses conteneurs sont « aussi isolés que des machines virtuelles ». Nuancez cette affirmation.",
    "skills": [
      "a-cont",
      "a-orch"
    ],
    "difficulty": 2,
    "type": "open"
  },
  {
    "id": "virt-q17",
    "prompt": "Un conteneur contient un système d’exploitation complet, noyau compris.",
    "skills": [
      "a-cont"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "virt-q18",
    "prompt": "Que fait l’option `--privileged` lors du lancement d’un conteneur ?",
    "skills": [
      "a-iso"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Elle donne au conteneur presque tous les droits et l’accès aux périphériques de l’hôte"
      },
      {
        "id": "b",
        "text": "Elle chiffre les échanges du conteneur avec le registre d’images"
      },
      {
        "id": "c",
        "text": "Elle interdit au conteneur toute connexion réseau sortante"
      },
      {
        "id": "d",
        "text": "Elle limite le conteneur à un seul cœur de processeur et à une quantité fixe de mémoire vive sur la machine"
      }
    ]
  },
  {
    "id": "virt-q19",
    "prompt": "Un conteneur reçoit en volume le socket du démon (`/var/run/docker.sock`). Que peut-il faire ?",
    "skills": [
      "a-iso"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Ouvrir un tunnel chiffré vers le registre d’images"
      },
      {
        "id": "b",
        "text": "Piloter le démon, ce qui équivaut à un accès root sur l’hôte"
      },
      {
        "id": "c",
        "text": "Seulement lire les journaux et les statistiques produits par le démon"
      },
      {
        "id": "d",
        "text": "Accélérer les échanges réseau avec les autres conteneurs"
      }
    ]
  },
  {
    "id": "virt-q20",
    "prompt": "Que sont les capabilities Linux ?",
    "skills": [
      "a-iso"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Des certificats qui servent à signer les images de conteneur"
      },
      {
        "id": "b",
        "text": "Des quotas de disque attribués à chaque utilisateur du système"
      },
      {
        "id": "c",
        "text": "Un découpage des pouvoirs de root en privilèges distincts"
      },
      {
        "id": "d",
        "text": "Des profils de pare-feu appliqués aux ports ouverts du serveur"
      }
    ]
  },
  {
    "id": "virt-q21",
    "prompt": "Quelles options réduisent les risques à l’exécution d’un conteneur ?",
    "skills": [
      "a-iso"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Utiliser un système de fichiers en lecture seule"
      },
      {
        "id": "b",
        "text": "Lancer le conteneur en mode privilégié par commodité"
      },
      {
        "id": "c",
        "text": "Exécuter l’application avec un utilisateur non root"
      },
      {
        "id": "d",
        "text": "Monter la racine de l’hôte pour faciliter le débogage"
      },
      {
        "id": "e",
        "text": "Retirer les capabilities inutiles"
      }
    ]
  },
  {
    "id": "virt-q22",
    "prompt": "Quel mécanisme filtre les appels système qu’un processus a le droit d’effectuer ?",
    "skills": [
      "a-iso"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "DNSSEC"
      },
      {
        "id": "b",
        "text": "AppArmor"
      },
      {
        "id": "c",
        "text": "seccomp"
      },
      {
        "id": "d",
        "text": "Les cgroups"
      }
    ]
  },
  {
    "id": "virt-q23",
    "prompt": "Exécuter l’application d’un conteneur avec un utilisateur non root limite l’impact d’une compromission.",
    "skills": [
      "a-iso"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "virt-q24",
    "prompt": "Quel sigle de trois lettres désigne le contrôle d’accès « obligatoire » dont relèvent SELinux et AppArmor ?",
    "skills": [
      "a-iso"
    ],
    "difficulty": 2,
    "type": "short"
  },
  {
    "id": "virt-q25",
    "prompt": "Que change le mode « rootless » d’un moteur de conteneurs ?",
    "skills": [
      "a-iso"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Les images sont chiffrées puis signées avant leur envoi vers le registre d’images"
      },
      {
        "id": "b",
        "text": "Le conteneur ne peut plus lire aucun fichier de son image"
      },
      {
        "id": "c",
        "text": "Le noyau de l’hôte est remplacé par celui du conteneur"
      },
      {
        "id": "d",
        "text": "Le moteur et les conteneurs s’exécutent sans les droits root de l’hôte"
      }
    ]
  },
  {
    "id": "virt-q26",
    "prompt": "Qu’est-ce qu’une image de conteneur ?",
    "skills": [
      "a-img"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un modèle en lecture seule, en couches, qui sert à lancer des conteneurs"
      },
      {
        "id": "b",
        "text": "Un disque virtuel qui contient une machine complète"
      },
      {
        "id": "c",
        "text": "Une capture d’écran du bureau de la machine hôte"
      },
      {
        "id": "d",
        "text": "Un fichier de configuration du pare-feu et des routes réseau de la machine hôte"
      }
    ]
  },
  {
    "id": "virt-q27",
    "prompt": "Quel est le défaut d’une référence d’image comme `nginx:latest` ?",
    "skills": [
      "a-img"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Elle supprime les couches intermédiaires de l’image"
      },
      {
        "id": "b",
        "text": "Le tag peut pointer vers un contenu différent à chaque téléchargement"
      },
      {
        "id": "c",
        "text": "Elle impose un accès administrateur au registre d’images pour chaque téléchargement"
      },
      {
        "id": "d",
        "text": "Elle rend l’image illisible lorsque la machine est hors ligne"
      }
    ]
  },
  {
    "id": "virt-q28",
    "prompt": "Que désigne un digest d’image (`image@sha256:…`) ?",
    "skills": [
      "a-img"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "L’adresse réseau du registre"
      },
      {
        "id": "b",
        "text": "Le nom de l’auteur de l’image"
      },
      {
        "id": "c",
        "text": "Un contenu précis et immuable"
      },
      {
        "id": "d",
        "text": "La date de publication de l’image"
      }
    ]
  },
  {
    "id": "virt-q29",
    "prompt": "Supprimer un fichier contenant un mot de passe dans une couche ultérieure du Dockerfile suffit à le retirer de l’image.",
    "skills": [
      "a-img"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "virt-q30",
    "prompt": "Quel emplacement est à proscrire pour un secret (clé d’API, mot de passe) ?",
    "skills": [
      "a-img"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Monté en lecture seule depuis un volume protégé"
      },
      {
        "id": "b",
        "text": "Fourni à l’exécution par un gestionnaire de secrets"
      },
      {
        "id": "c",
        "text": "Injecté à l’exécution par l’orchestrateur de conteneurs"
      },
      {
        "id": "d",
        "text": "Écrit dans le Dockerfile ou copié dans une couche de l’image"
      }
    ]
  },
  {
    "id": "virt-q31",
    "prompt": "Quel sigle de quatre lettres désigne l’inventaire détaillé des composants et dépendances d’un logiciel ou d’une image ?",
    "skills": [
      "a-img"
    ],
    "difficulty": 2,
    "type": "short"
  },
  {
    "id": "virt-q32",
    "prompt": "Quelles pratiques réduisent le risque lié aux images utilisées ?",
    "skills": [
      "a-img"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Conserver les mêmes images sans jamais les reconstruire"
      },
      {
        "id": "b",
        "text": "Analyser les images avec un scanner de vulnérabilités"
      },
      {
        "id": "c",
        "text": "Télécharger la première image trouvée sous un nom connu"
      },
      {
        "id": "d",
        "text": "Partir d’une image de base minimale et officielle"
      },
      {
        "id": "e",
        "text": "Référencer les images par leur digest"
      }
    ]
  },
  {
    "id": "virt-q33",
    "prompt": "Vous devez publier l’image d’une application web interne. Listez les mesures que vous appliquez à la construction et au déploiement.",
    "skills": [
      "a-img",
      "a-iso"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "virt-q34",
    "prompt": "Quel rôle joue un orchestrateur comme Kubernetes ?",
    "skills": [
      "a-orch"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Chiffrer le disque des machines hôtes"
      },
      {
        "id": "b",
        "text": "Planifier et superviser des conteneurs sur plusieurs machines"
      },
      {
        "id": "c",
        "text": "Remplacer le noyau Linux des nœuds"
      },
      {
        "id": "d",
        "text": "Fabriquer les images de conteneur à partir du code source de l’application"
      }
    ]
  },
  {
    "id": "virt-q35",
    "prompt": "Un conteneur est lancé avec `-p 8080:8080` sur un serveur qui a une adresse publique. Que risque-t-on ?",
    "skills": [
      "a-orch"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "De l’exposer à tout hôte qui peut joindre ce serveur"
      },
      {
        "id": "b",
        "text": "Que l’image soit supprimée du registre"
      },
      {
        "id": "c",
        "text": "Que le conteneur perde son système de fichiers"
      },
      {
        "id": "d",
        "text": "Rien : les ports publiés restent internes au serveur"
      }
    ]
  },
  {
    "id": "virt-q36",
    "prompt": "Vous devez exécuter du code fourni par des clients inconnus sur la même infrastructure. Quelle isolation privilégiez-vous ?",
    "skills": [
      "a-orch",
      "a-virt"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un compte utilisateur commun à tous les clients"
      },
      {
        "id": "b",
        "text": "Un conteneur standard partagé par tous les clients"
      },
      {
        "id": "c",
        "text": "Un même processus avec un thread par client"
      },
      {
        "id": "d",
        "text": "Des machines virtuelles ou micro-VM par client"
      }
    ]
  },
  {
    "id": "virt-q37",
    "prompt": "Pour analyser un échantillon de malware, quel environnement est le plus adapté ?",
    "skills": [
      "a-orch",
      "a-virt"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un dossier partagé sur le réseau de l’entreprise"
      },
      {
        "id": "b",
        "text": "Un conteneur privilégié sur un serveur de production"
      },
      {
        "id": "c",
        "text": "Une machine virtuelle jetable, isolée du réseau de production"
      },
      {
        "id": "d",
        "text": "Le poste de travail habituel de l’analyste, connecté au réseau de l’entreprise"
      }
    ]
  },
  {
    "id": "virt-q38",
    "prompt": "Exécuter des conteneurs à l’intérieur de machines virtuelles ajoute une couche de défense en profondeur.",
    "skills": [
      "a-orch"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "virt-q39",
    "prompt": "Quelles bonnes pratiques s’appliquent au réseau d’un parc de conteneurs ?",
    "skills": [
      "a-orch"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "N’exposer que les ports nécessaires"
      },
      {
        "id": "b",
        "text": "Relier tous les conteneurs au même réseau sans filtrage"
      },
      {
        "id": "c",
        "text": "Publier tous les ports pour simplifier les tests"
      },
      {
        "id": "d",
        "text": "Segmenter les conteneurs par réseaux ou par politiques"
      }
    ]
  },
  {
    "id": "virt-q40",
    "prompt": "Un collègue propose de lancer un conteneur en production avec `--privileged` et le socket du démon monté, « pour simplifier le déploiement ». Que répondez-vous ?",
    "skills": [
      "a-orch",
      "a-iso"
    ],
    "difficulty": 3,
    "type": "open"
  }
];
