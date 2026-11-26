import type { LabBody } from '../../content/types';

export const body: LabBody = {
  "labId": "k8s-manifest-lab",
  "hints": [
    "Cherchez d’abord tout ce qui donne un accès **à l’hôte** : mode privilégié, volumes de l’hôte, réseau de l’hôte.",
    "Un secret écrit en clair dans le manifeste est lisible par toute personne qui peut lire l’objet.",
    "Une étiquette `latest` ne désigne pas une version précise."
  ],
  "questions": [
    {
      "id": "k8slab-q1",
      "type": "short",
      "difficulty": 1,
      "skills": [
        "l-k8s-cluster"
      ],
      "prompt": "Combien de défauts le manifeste contient-il ?",
      "placeholder": "nombre"
    },
    {
      "id": "k8slab-q2",
      "type": "single",
      "difficulty": 2,
      "skills": [
        "l-k8s-isolation"
      ],
      "prompt": "Quelle combinaison est la plus grave ?",
      "options": [
        {
          "id": "a",
          "text": "Un conteneur privilégié qui monte le socket du moteur de conteneurs"
        },
        {
          "id": "b",
          "text": "Une étiquette `latest` sans limites de ressources"
        },
        {
          "id": "c",
          "text": "Un niveau de journalisation réglé sur info"
        },
        {
          "id": "d",
          "text": "Un nom de conteneur trop court"
        }
      ]
    },
    {
      "id": "k8slab-q3",
      "type": "single",
      "difficulty": 2,
      "skills": [
        "l-k8s-cluster"
      ],
      "prompt": "Comment corriger le mot de passe écrit en clair dans `DB_PASSWORD` ?",
      "options": [
        {
          "id": "a",
          "text": "Le chiffrer en base64 dans le manifeste"
        },
        {
          "id": "b",
          "text": "Le référencer depuis un objet Secret, idéalement alimenté par un gestionnaire de secrets"
        },
        {
          "id": "c",
          "text": "Le renommer pour le rendre moins visible"
        },
        {
          "id": "d",
          "text": "Le placer dans le nom de l’image"
        }
      ]
    },
    {
      "id": "k8slab-q4",
      "type": "truefalse",
      "difficulty": 2,
      "skills": [
        "l-k8s-cluster"
      ],
      "prompt": "L’absence de limites de ressources est un simple défaut de confort sans conséquence pour la sécurité."
    },
    {
      "id": "k8slab-q5",
      "type": "multi",
      "difficulty": 3,
      "skills": [
        "l-k8s-isolation",
        "l-k8s-cluster"
      ],
      "prompt": "Quels réglages durcissent le conteneur ?",
      "options": [
        {
          "id": "a",
          "text": "`runAsNonRoot: true`"
        },
        {
          "id": "b",
          "text": "`allowPrivilegeEscalation: false`"
        },
        {
          "id": "c",
          "text": "`capabilities.drop: [\"ALL\"]`"
        },
        {
          "id": "d",
          "text": "`privileged: true`"
        }
      ]
    }
  ]
};
