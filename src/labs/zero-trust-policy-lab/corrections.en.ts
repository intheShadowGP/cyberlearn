import type { LabCorrections } from '../../content/types';

export const corrections: LabCorrections = {
  "labId": "zero-trust-policy-lab",
  "questions": {
    "ztlab-q1": {
      "type": "short",
      "accepted": [
        "2",
        "two"
      ],
      "explanation": "Only two requests get full access: no. 1 (low-sensitivity resource, MFA and compliant device) and no. 3 (sensitive resource with a security key on a compliant device)."
    },
    "ztlab-q2": {
      "type": "single",
      "correct": "b",
      "explanation": "The device is healthy and the security key satisfies R3, but R2 applies first: the country is outside the allowed list and the resource is sensitive. The deny rule is evaluated before the authentication rules.",
      "whyWrong": {
        "a": "The device risk is low in this request.",
        "c": "R3 is never reached: R2 denies before.",
        "d": "R5 is reached only if no previous rule applies."
      }
    },
    "ztlab-q3": {
      "type": "single",
      "correct": "a",
      "explanation": "R3 requires a security key, which an automated process cannot present: the backup will be blocked, or worse, someone will create a broad exception to unblock it. Workloads must have their own identity mechanism (workload identity, certificate, short-lived token) and a dedicated rule.",
      "whyWrong": {
        "b": "The country is not the issue: it is on the allowed list.",
        "c": "R1 only concerns device risk.",
        "d": "A workload precisely needs its own strong, traceable identity."
      }
    },
    "ztlab-q4": {
      "type": "truefalse",
      "correct": false,
      "explanation": "The first rule that applies decides. If R4 came before R1, a high-risk-device request could be redirected to a simple MFA prompt instead of being denied. Deny rules are placed before rules with conditions to satisfy."
    },
    "ztlab-q5": {
      "type": "single",
      "correct": "a",
      "explanation": "Limited access to a medium-sensitivity resource from an unmanaged device may still expose personal data. Reserving limited access for low-sensitivity resources reduces exposure without hindering compliant devices.",
      "whyWrong": {
        "b": "MFA does not guarantee the device’s health.",
        "c": "Removing the check removes the protection.",
        "d": "A personal device is by nature less controlled."
      }
    }
  },
  "debrief": [
    {
      "t": "h",
      "text": "Policy decisions"
    },
    {
      "t": "table",
      "head": [
        "No.",
        "Identity",
        "Decision",
        "Rule"
      ],
      "rows": [
        [
          "1",
          "alice",
          "Access",
          "R5"
        ],
        [
          "2",
          "bob",
          "Strong authentication (no security key)",
          "R3"
        ],
        [
          "3",
          "carol",
          "Access",
          "R5"
        ],
        [
          "4",
          "dave",
          "Limited access (non-compliant device)",
          "R5"
        ],
        [
          "5",
          "erin",
          "Denied (country outside list, sensitive resource)",
          "R2"
        ],
        [
          "6",
          "frank",
          "Denied (high-risk device)",
          "R1"
        ],
        [
          "7",
          "gina",
          "Multi-factor authentication required",
          "R4"
        ],
        [
          "8",
          "svc-backup",
          "Strong authentication required **that a service cannot supply**",
          "R3"
        ]
      ]
    },
    {
      "t": "list",
      "items": [
        "**Order**: denials come before authentication requirements.",
        "**Blind spot**: workloads are not provided for; a dedicated rule and identity mechanism are needed.",
        "**Limited access**: to reserve for low-sensitivity resources."
      ]
    },
    {
      "t": "callout",
      "kind": "key",
      "title": "Principle",
      "text": "A Zero Trust policy is tested like code: you predict the decision for typical cases, look for unforeseen cases (service accounts, emergencies) and log every decision."
    }
  ]
};
