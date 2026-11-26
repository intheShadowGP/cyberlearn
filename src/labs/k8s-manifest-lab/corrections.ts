import type { LabCorrections } from '../../content/types';

export const corrections: LabCorrections = {
  "labId": "k8s-manifest-lab",
  "questions": {
    "k8slab-q1": {
      "type": "short",
      "accepted": [
        "8",
        "huit"
      ],
      "explanation": "Huit défauts : conteneur privilégié, socket du moteur monté depuis l’hôte, capacité SYS_ADMIN, réseau de l’hôte, exécution en root, secret en clair dans l’environnement, étiquette `latest` et absence de limites de ressources."
    },
    "k8slab-q2": {
      "type": "single",
      "correct": "a",
      "explanation": "Un conteneur privilégié monté avec le socket du moteur de conteneurs peut lancer d’autres conteneurs avec tous les droits : il équivaut à un accès administrateur sur le nœud. Une compromission de l’application devient une compromission de l’hôte et, souvent, du cluster.",
      "whyWrong": {
        "b": "Ces défauts sont réels mais ne donnent pas, à eux seuls, de contrôle de l’hôte.",
        "c": "Le niveau de journalisation n’est pas un défaut de sécurité ici.",
        "d": "Le nom d’un conteneur n’a aucun effet sur la sécurité."
      }
    },
    "k8slab-q3": {
      "type": "single",
      "correct": "b",
      "explanation": "Une valeur en clair dans le manifeste est lisible par quiconque lit l’objet ou son historique. On la référence depuis un Secret (`valueFrom.secretKeyRef`), avec contrôle d’accès, et idéalement alimenté par un gestionnaire de secrets externe.",
      "whyWrong": {
        "a": "Le base64 est un encodage réversible, pas un chiffrement.",
        "c": "Renommer ne cache pas la valeur.",
        "d": "Placer un secret dans le nom de l’image l’expose à tous ceux qui voient l’image."
      }
    },
    "k8slab-q4": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Sans limites, un conteneur compromis ou défaillant peut épuiser la mémoire ou le processeur du nœud et provoquer un déni de service pour les autres applications."
    },
    "k8slab-q5": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Ne pas tourner en root, interdire l’élévation de privilèges et retirer toutes les capacités sont les trois réglages de base. `privileged: true` fait l’inverse.",
      "whyWrong": {
        "d": "`privileged: true` donne au conteneur presque tous les droits de l’hôte."
      }
    }
  },
  "debrief": [
    {
      "t": "h",
      "text": "Défauts du manifeste, par gravité"
    },
    {
      "t": "table",
      "head": [
        "Gravité",
        "Défaut",
        "Correctif"
      ],
      "rows": [
        [
          "**Critique**",
          "Conteneur privilégié",
          "Supprimer `privileged`, retirer les capacités inutiles"
        ],
        [
          "**Critique**",
          "Socket du moteur de conteneurs monté",
          "Supprimer le montage ; utiliser une API dédiée si nécessaire"
        ],
        [
          "Élevée",
          "Capacité SYS_ADMIN",
          "`capabilities.drop: [\"ALL\"]`"
        ],
        [
          "Élevée",
          "Réseau de l’hôte",
          "Réseau du pod par défaut"
        ],
        [
          "Élevée",
          "Exécution en root",
          "`runAsNonRoot: true`, utilisateur dédié"
        ],
        [
          "Élevée",
          "Secret en clair",
          "`secretKeyRef` et gestionnaire de secrets"
        ],
        [
          "Moyenne",
          "Étiquette `latest`",
          "Version précise ou condensat de l’image"
        ],
        [
          "Moyenne",
          "Pas de limites",
          "`resources.limits` pour mémoire et processeur"
        ]
      ]
    },
    {
      "t": "callout",
      "kind": "key",
      "title": "En pratique",
      "text": "Ces contrôles s’automatisent : un contrôle d’admission ou un linter de manifestes refuse le déploiement d’un conteneur privilégié, d’un secret en clair ou d’une image sans version, avant qu’un humain n’ait à le relire."
    }
  ]
};
