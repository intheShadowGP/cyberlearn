// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "k8s-q1",
    "prompt": "Quelle différence fondamentale distingue un conteneur d’une machine virtuelle ?",
    "skills": [
      "l-k8s-isolation"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le conteneur partage le noyau de l’hôte"
      },
      {
        "id": "b",
        "text": "Le conteneur a son propre noyau"
      },
      {
        "id": "c",
        "text": "La machine virtuelle n’a pas de système d’exploitation"
      },
      {
        "id": "d",
        "text": "Aucune"
      }
    ]
  },
  {
    "id": "k8s-q2",
    "prompt": "Quels mécanismes du noyau Linux participent à l’isolation des conteneurs ?",
    "skills": [
      "l-k8s-isolation"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Les cgroups"
      },
      {
        "id": "b",
        "text": "seccomp"
      },
      {
        "id": "c",
        "text": "Le BIOS"
      },
      {
        "id": "d",
        "text": "Les espaces de noms"
      }
    ]
  },
  {
    "id": "k8s-q3",
    "prompt": "Monter le socket Docker de l’hôte dans un conteneur permet à ce conteneur de prendre le contrôle de l’hôte.",
    "skills": [
      "l-k8s-isolation"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "k8s-q4",
    "prompt": "Quel paramètre de securityContext donne à un conteneur quasiment tous les privilèges de l’hôte ? (un mot)",
    "skills": [
      "l-k8s-isolation"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "un mot"
  },
  {
    "id": "k8s-q13",
    "prompt": "Pourquoi `create pods` dans un espace de noms est-il dangereux même sans accès aux Secrets ?",
    "skills": [
      "l-k8s-cluster",
      "l-k8s-isolation"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Cela consomme du CPU"
      },
      {
        "id": "b",
        "text": "Cela supprime les journaux"
      },
      {
        "id": "c",
        "text": "Un pod peut monter les Secrets"
      },
      {
        "id": "d",
        "text": "Ce n’est pas dangereux"
      }
    ]
  },
  {
    "id": "k8s-q14",
    "prompt": "Analysez le manifeste (hostNetwork, privileged, socket Docker monté, image `latest`) : risques, chemin d’évasion et version durcie.",
    "skills": [
      "l-k8s-isolation",
      "l-k8s-cluster"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "k8s-q31",
    "prompt": "Pourquoi un montage `hostPath: /` est-il dangereux ?",
    "skills": [
      "l-k8s-isolation"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Il ralentit le réseau"
      },
      {
        "id": "b",
        "text": "Il expose les fichiers de l’hôte"
      },
      {
        "id": "c",
        "text": "Il désactive les cgroups"
      },
      {
        "id": "d",
        "text": "Il supprime les images"
      }
    ]
  },
  {
    "id": "k8s-q32",
    "prompt": "Que fait-on pour isoler des charges non fiables (code de clients, multi-locataire) au-delà du conteneur ?",
    "skills": [
      "l-k8s-isolation"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Désactiver seccomp"
      },
      {
        "id": "b",
        "text": "Rien, un conteneur suffit"
      },
      {
        "id": "c",
        "text": "Monter le socket Docker"
      },
      {
        "id": "d",
        "text": "Ajouter une sandbox ou des nœuds dédiés"
      }
    ]
  },
  {
    "id": "k8s-q33",
    "prompt": "Un conteneur offre une isolation aussi forte qu’une machine virtuelle.",
    "skills": [
      "l-k8s-isolation"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "k8s-q5",
    "prompt": "Un Dockerfile copie un fichier .env puis le supprime dans l’instruction suivante. Le secret est-il protégé ?",
    "skills": [
      "l-k8s-images"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Non, il reste dans la couche"
      },
      {
        "id": "b",
        "text": "Oui, car les couches sont chiffrées"
      },
      {
        "id": "c",
        "text": "Oui, si l’image est privée"
      },
      {
        "id": "d",
        "text": "Oui, il a été supprimé"
      }
    ]
  },
  {
    "id": "k8s-q6",
    "prompt": "Quelles pratiques améliorent la sécurité d’une image ?",
    "skills": [
      "l-k8s-images"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Image de base minimale (distroless, slim)"
      },
      {
        "id": "b",
        "text": "Utilisateur non root"
      },
      {
        "id": "c",
        "text": "Étiquette `latest` pour avoir toujours la dernière version"
      },
      {
        "id": "d",
        "text": "Analyse des vulnérabilités en CI"
      }
    ]
  },
  {
    "id": "k8s-q7",
    "prompt": "Épingler une image par son empreinte `@sha256:…` garantit que le même contenu est déployé à chaque fois.",
    "skills": [
      "l-k8s-images"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "k8s-q8",
    "prompt": "Quelle commande Docker affiche l’historique des couches d’une image ? (deux mots)",
    "skills": [
      "l-k8s-images"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "commande"
  },
  {
    "id": "k8s-q16",
    "prompt": "Quel réglage empêche un processus du conteneur d’obtenir plus de privilèges que son parent (setuid) ?",
    "skills": [
      "l-k8s-images",
      "l-k8s-cluster"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`replicas: 1` pour limiter les copies"
      },
      {
        "id": "b",
        "text": "`allowPrivilegeEscalation: false`"
      },
      {
        "id": "c",
        "text": "`privileged: true` pour tous les droits"
      },
      {
        "id": "d",
        "text": "`hostPID: true` pour voir les processus"
      }
    ]
  },
  {
    "id": "k8s-q34",
    "prompt": "Que permet une construction d’image multi-étapes ?",
    "skills": [
      "l-k8s-images"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Une image plus lente à démarrer"
      },
      {
        "id": "b",
        "text": "Une image sans couches"
      },
      {
        "id": "c",
        "text": "Une image finale allégée"
      },
      {
        "id": "d",
        "text": "Une image publique"
      }
    ]
  },
  {
    "id": "k8s-q35",
    "prompt": "Quel avantage présente une image « distroless » ?",
    "skills": [
      "l-k8s-images"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Elle rend l’analyse impossible"
      },
      {
        "id": "b",
        "text": "Elle contient plus d’outils d’administration"
      },
      {
        "id": "c",
        "text": "Elle fonctionne sans noyau"
      },
      {
        "id": "d",
        "text": "Peu de composants, pas de shell"
      }
    ]
  },
  {
    "id": "k8s-q36",
    "prompt": "Comment fournir un secret nécessaire à la construction d’une image sans le laisser dans une couche ?",
    "skills": [
      "l-k8s-images"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Dans un commentaire du Dockerfile"
      },
      {
        "id": "b",
        "text": "Avec un `COPY` suivi d’un `rm`"
      },
      {
        "id": "c",
        "text": "Avec un secret de build"
      },
      {
        "id": "d",
        "text": "Dans une variable d’environnement de l’image"
      }
    ]
  },
  {
    "id": "k8s-q9",
    "prompt": "Par défaut, sans NetworkPolicy, quels pods d’un cluster Kubernetes peuvent communiquer entre eux ?",
    "skills": [
      "l-k8s-cluster"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Seulement ceux du même espace de noms"
      },
      {
        "id": "b",
        "text": "Tous"
      },
      {
        "id": "c",
        "text": "Aucun"
      },
      {
        "id": "d",
        "text": "Seulement ceux du même nœud"
      }
    ]
  },
  {
    "id": "k8s-q10",
    "prompt": "Un objet Secret Kubernetes est chiffré par défaut puisque ses valeurs sont en Base64.",
    "skills": [
      "l-k8s-cluster"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "k8s-q11",
    "prompt": "Quelles permissions RBAC sont particulièrement sensibles ?",
    "skills": [
      "l-k8s-cluster"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "`bind` ou `escalate` sur les rôles"
      },
      {
        "id": "b",
        "text": "`get` sur les `configmaps` d’un espace de noms de démonstration"
      },
      {
        "id": "c",
        "text": "`create` sur les `pods`"
      },
      {
        "id": "d",
        "text": "`get` sur les `secrets`"
      }
    ]
  },
  {
    "id": "k8s-q12",
    "prompt": "Quel est le nom du profil Pod Security Standards le plus strict ?",
    "skills": [
      "l-k8s-cluster"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "nom du profil"
  },
  {
    "id": "k8s-q15",
    "prompt": "Décrivez les NetworkPolicy nécessaires pour que front joigne api:8080 et api joigne db:5432, et rien d’autre, dans l’espace de noms `boutique`.",
    "skills": [
      "l-k8s-cluster"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "k8s-q37",
    "prompt": "À quoi sert Pod Security Admission ?",
    "skills": [
      "l-k8s-cluster"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "À chiffrer le réseau"
      },
      {
        "id": "b",
        "text": "À mettre à jour les nœuds"
      },
      {
        "id": "c",
        "text": "À sauvegarder le cluster"
      },
      {
        "id": "d",
        "text": "À appliquer un profil aux pods"
      }
    ]
  },
  {
    "id": "k8s-q38",
    "prompt": "Avec un refus par défaut en sortie, que faut-il autoriser pour que les pods résolvent les noms ?",
    "skills": [
      "l-k8s-cluster"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le trafic DNS vers kube-dns"
      },
      {
        "id": "b",
        "text": "Le socket Docker de l’hôte"
      },
      {
        "id": "c",
        "text": "Le port 22 vers les nœuds"
      },
      {
        "id": "d",
        "text": "Tout le trafic vers Internet"
      }
    ]
  },
  {
    "id": "k8s-q39",
    "prompt": "Ne pas monter le jeton de compte de service dans un pod qui n’en a pas besoin réduit la surface d’attaque.",
    "skills": [
      "l-k8s-cluster"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "k8s-q40",
    "prompt": "Quelles mesures protègent les Secrets Kubernetes ?",
    "skills": [
      "l-k8s-cluster"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Coffre externe de secrets"
      },
      {
        "id": "b",
        "text": "Accès RBAC restreint"
      },
      {
        "id": "c",
        "text": "Chiffrement au repos d’etcd"
      },
      {
        "id": "d",
        "text": "Compter sur l’encodage Base64"
      }
    ]
  },
  {
    "id": "k8s-q17",
    "prompt": "Que contient le journal d’audit de l’API Kubernetes ?",
    "skills": [
      "l-k8s-runtime"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "La température des nœuds"
      },
      {
        "id": "b",
        "text": "Qui a fait quelle action"
      },
      {
        "id": "c",
        "text": "Les mots de passe des utilisateurs"
      },
      {
        "id": "d",
        "text": "Le code source des applications"
      }
    ]
  },
  {
    "id": "k8s-q18",
    "prompt": "Quel événement mérite une attention immédiate dans un cluster de production ?",
    "skills": [
      "l-k8s-runtime"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un redémarrage prévu"
      },
      {
        "id": "b",
        "text": "La création d’un pod de test hors production"
      },
      {
        "id": "c",
        "text": "Un `kubectl exec` inattendu dans un pod"
      },
      {
        "id": "d",
        "text": "Une mise à l’échelle planifiée"
      }
    ]
  },
  {
    "id": "k8s-q19",
    "prompt": "La création d’un pod `privileged: true` dans un espace de noms applicatif est un événement à alerter.",
    "skills": [
      "l-k8s-runtime"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "k8s-q20",
    "prompt": "Quels signaux surveille-t-on dans le journal d’audit ?",
    "skills": [
      "l-k8s-runtime"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Lecture de Secrets par un compte inhabituel"
      },
      {
        "id": "b",
        "text": "Ouverture de shells dans des pods"
      },
      {
        "id": "c",
        "text": "Création de pods privilégiés"
      },
      {
        "id": "d",
        "text": "Mise à l’échelle normale d’un déploiement"
      }
    ]
  },
  {
    "id": "k8s-q21",
    "prompt": "Quel outil libre détecte les comportements suspects dans les conteneurs à l’exécution, à partir des appels système ?",
    "skills": [
      "l-k8s-runtime"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "nom de l’outil"
  },
  {
    "id": "k8s-q22",
    "prompt": "Un pod semble compromis. Quelle est la meilleure première action ?",
    "skills": [
      "l-k8s-runtime"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "L’isoler et préserver ses traces"
      },
      {
        "id": "b",
        "text": "Ne rien faire pour ne pas alerter"
      },
      {
        "id": "c",
        "text": "Redémarrer tout le cluster"
      },
      {
        "id": "d",
        "text": "Le supprimer immédiatement"
      }
    ]
  },
  {
    "id": "k8s-q23",
    "prompt": "À quoi sert de « cordonner » un nœud suspect ?",
    "skills": [
      "l-k8s-runtime"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "À le supprimer"
      },
      {
        "id": "b",
        "text": "À chiffrer ses disques"
      },
      {
        "id": "c",
        "text": "À le rendre public"
      },
      {
        "id": "d",
        "text": "À bloquer de nouveaux pods"
      }
    ]
  },
  {
    "id": "k8s-q24",
    "prompt": "Pourquoi utiliser un registre d’images privé et contrôlé ?",
    "skills": [
      "l-k8s-admission"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Pour maîtriser les images"
      },
      {
        "id": "b",
        "text": "Pour supprimer les versions"
      },
      {
        "id": "c",
        "text": "Pour rendre les images publiques"
      },
      {
        "id": "d",
        "text": "Pour éviter toute analyse"
      }
    ]
  },
  {
    "id": "k8s-q25",
    "prompt": "À quoi sert la signature d’une image (par exemple avec cosign) ?",
    "skills": [
      "l-k8s-admission"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "La rendre plus rapide"
      },
      {
        "id": "b",
        "text": "La rendre plus petite"
      },
      {
        "id": "c",
        "text": "La chiffrer"
      },
      {
        "id": "d",
        "text": "Vérifier son origine"
      }
    ]
  },
  {
    "id": "k8s-q26",
    "prompt": "Une image sans vulnérabilité connue au moment de sa construction le restera.",
    "skills": [
      "l-k8s-admission"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "k8s-q27",
    "prompt": "Que peut faire une politique d’admission (Kyverno, Gatekeeper) ?",
    "skills": [
      "l-k8s-admission"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Interdire les pods privilégiés"
      },
      {
        "id": "b",
        "text": "Exiger l’exécution non root"
      },
      {
        "id": "c",
        "text": "N’autoriser que des images signées d’un registre approuvé"
      },
      {
        "id": "d",
        "text": "Désactiver le RBAC"
      }
    ]
  },
  {
    "id": "k8s-q28",
    "prompt": "Que fait un contrôleur d’admission ?",
    "skills": [
      "l-k8s-admission"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Il chiffre les images"
      },
      {
        "id": "b",
        "text": "Il filtre les requêtes à l’API"
      },
      {
        "id": "c",
        "text": "Il sauvegarde les pods"
      },
      {
        "id": "d",
        "text": "Il remplace le RBAC"
      }
    ]
  },
  {
    "id": "k8s-q29",
    "prompt": "Citez un outil libre d’analyse de vulnérabilités d’images de conteneurs.",
    "skills": [
      "l-k8s-admission"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "nom de l’outil"
  },
  {
    "id": "k8s-q30",
    "prompt": "À quoi sert la nomenclature logicielle (SBOM) d’une image ?",
    "skills": [
      "l-k8s-admission"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Accélérer son démarrage"
      },
      {
        "id": "b",
        "text": "Supprimer des couches"
      },
      {
        "id": "c",
        "text": "Connaître ses composants"
      },
      {
        "id": "d",
        "text": "Chiffrer l’image"
      }
    ]
  }
];
