import type { LabCorrections } from '../../content/types';

export const corrections: LabCorrections = {
  "labId": "k8s-manifest-lab",
  "questions": {
    "k8slab-q1": {
      "type": "short",
      "accepted": [
        "8",
        "eight"
      ],
      "explanation": "Eight flaws: privileged container, container engine socket mounted from the host, SYS_ADMIN capability, host network, running as root, clear-text secret in the environment, `latest` tag and no resource limits."
    },
    "k8slab-q2": {
      "type": "single",
      "correct": "a",
      "explanation": "A privileged container mounted with the container engine socket can launch other containers with full rights: it is equivalent to administrator access on the node. A compromise of the application becomes a compromise of the host and, often, of the cluster.",
      "whyWrong": {
        "b": "These flaws are real but do not on their own give control of the host.",
        "c": "The logging level is not a security flaw here.",
        "d": "A container’s name has no effect on security."
      }
    },
    "k8slab-q3": {
      "type": "single",
      "correct": "b",
      "explanation": "A clear value in the manifest is readable by anyone who reads the object or its history. You reference it from a Secret (`valueFrom.secretKeyRef`), with access control, and ideally fed by an external secrets manager.",
      "whyWrong": {
        "a": "Base64 is a reversible encoding, not encryption.",
        "c": "Renaming does not hide the value.",
        "d": "Putting a secret in the image name exposes it to everyone who sees the image."
      }
    },
    "k8slab-q4": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Without limits, a compromised or faulty container can exhaust the node’s memory or CPU and cause a denial of service for other applications."
    },
    "k8slab-q5": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Not running as root, forbidding privilege escalation and dropping all capabilities are the three basic settings. `privileged: true` does the opposite.",
      "whyWrong": {
        "d": "`privileged: true` gives the container almost all of the host’s rights."
      }
    }
  },
  "debrief": [
    {
      "t": "h",
      "text": "Manifest flaws, by severity"
    },
    {
      "t": "table",
      "head": [
        "Severity",
        "Flaw",
        "Fix"
      ],
      "rows": [
        [
          "**Critical**",
          "Privileged container",
          "Remove `privileged`, drop unneeded capabilities"
        ],
        [
          "**Critical**",
          "Container engine socket mounted",
          "Remove the mount; use a dedicated API if needed"
        ],
        [
          "High",
          "SYS_ADMIN capability",
          "`capabilities.drop: [\"ALL\"]`"
        ],
        [
          "High",
          "Host network",
          "Default pod network"
        ],
        [
          "High",
          "Running as root",
          "`runAsNonRoot: true`, dedicated user"
        ],
        [
          "High",
          "Clear-text secret",
          "`secretKeyRef` and a secrets manager"
        ],
        [
          "Medium",
          "`latest` tag",
          "Precise version or image digest"
        ],
        [
          "Medium",
          "No limits",
          "`resources.limits` for memory and CPU"
        ]
      ]
    },
    {
      "t": "callout",
      "kind": "key",
      "title": "In practice",
      "text": "These checks can be automated: an admission control or manifest linter refuses to deploy a privileged container, a clear-text secret or an unversioned image before a human has to review it."
    }
  ]
};
