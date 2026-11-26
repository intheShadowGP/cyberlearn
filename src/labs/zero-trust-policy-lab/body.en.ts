import type { LabBody } from '../../content/types';

export const body: LabBody = {
  "labId": "zero-trust-policy-lab",
  "hints": [
    "The **first** rule that applies decides: follow them in order, without mixing them.",
    "A request that matches a deny rule never reaches the following rules.",
    "For each request, ask yourself: can a **non-human** identity satisfy this rule?"
  ],
  "questions": [
    {
      "id": "ztlab-q1",
      "type": "short",
      "difficulty": 1,
      "skills": [
        "o-adv-zt"
      ],
      "prompt": "How many of the eight requests are accepted unconditionally (full access)?",
      "placeholder": "number"
    },
    {
      "id": "ztlab-q2",
      "type": "single",
      "difficulty": 2,
      "skills": [
        "o-adv-zt"
      ],
      "prompt": "Which rule denies request no. 5 (user signing in from a country outside the list, security key, sensitive resource)?",
      "options": [
        {
          "id": "a",
          "text": "R1, high-risk device"
        },
        {
          "id": "b",
          "text": "R2, country not allowed on a sensitive resource"
        },
        {
          "id": "c",
          "text": "R3, strong authentication"
        },
        {
          "id": "d",
          "text": "R5, default access"
        }
      ]
    },
    {
      "id": "ztlab-q3",
      "type": "single",
      "difficulty": 3,
      "skills": [
        "o-adv-machines"
      ],
      "prompt": "What flaw does request no. 8 (backup service account) reveal?",
      "options": [
        {
          "id": "a",
          "text": "The policy is designed for humans: a service cannot supply a security key"
        },
        {
          "id": "b",
          "text": "The service account has too many rights over the country"
        },
        {
          "id": "c",
          "text": "Rule R1 is too lenient"
        },
        {
          "id": "d",
          "text": "A service account does not need an identity"
        }
      ]
    },
    {
      "id": "ztlab-q4",
      "type": "truefalse",
      "difficulty": 2,
      "skills": [
        "o-adv-zt"
      ],
      "prompt": "In this policy, the order of the rules has no effect on the result."
    },
    {
      "id": "ztlab-q5",
      "type": "single",
      "difficulty": 3,
      "skills": [
        "o-adv-zt",
        "o-adv-resilience"
      ],
      "prompt": "Which improvement best addresses request no. 4 (medium-sensitivity resource, non-compliant device)?",
      "options": [
        {
          "id": "a",
          "text": "Deny access to medium or high-sensitivity resources from a non-compliant device"
        },
        {
          "id": "b",
          "text": "Grant full access, since MFA is already there"
        },
        {
          "id": "c",
          "text": "Disable device compliance checks"
        },
        {
          "id": "d",
          "text": "Allow only personal devices"
        }
      ]
    }
  ]
};
