import type { LabBody } from '../../content/types';

export const body: LabBody = {
  "labId": "k8s-manifest-lab",
  "hints": [
    "First look for anything that gives access **to the host**: privileged mode, host volumes, host network.",
    "A secret written in clear in the manifest is readable by anyone who can read the object.",
    "A `latest` tag does not designate a precise version."
  ],
  "questions": [
    {
      "id": "k8slab-q1",
      "type": "short",
      "difficulty": 1,
      "skills": [
        "l-k8s-cluster"
      ],
      "prompt": "How many flaws does the manifest contain?",
      "placeholder": "number"
    },
    {
      "id": "k8slab-q2",
      "type": "single",
      "difficulty": 2,
      "skills": [
        "l-k8s-isolation"
      ],
      "prompt": "Which combination is the most serious?",
      "options": [
        {
          "id": "a",
          "text": "A privileged container that mounts the container engine socket"
        },
        {
          "id": "b",
          "text": "A `latest` tag with no resource limits"
        },
        {
          "id": "c",
          "text": "A logging level set to info"
        },
        {
          "id": "d",
          "text": "A container name that is too short"
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
      "prompt": "How should the clear-text password in `DB_PASSWORD` be fixed?",
      "options": [
        {
          "id": "a",
          "text": "Encode it in base64 in the manifest"
        },
        {
          "id": "b",
          "text": "Reference it from a Secret object, ideally fed by a secrets manager"
        },
        {
          "id": "c",
          "text": "Rename it to make it less visible"
        },
        {
          "id": "d",
          "text": "Put it in the image name"
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
      "prompt": "The absence of resource limits is a mere comfort issue with no consequence for security."
    },
    {
      "id": "k8slab-q5",
      "type": "multi",
      "difficulty": 3,
      "skills": [
        "l-k8s-isolation",
        "l-k8s-cluster"
      ],
      "prompt": "Which settings harden the container?",
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
