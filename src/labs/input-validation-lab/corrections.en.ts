import type { LabCorrections } from '../../content/types';

export const corrections: LabCorrections = {
  "labId": "input-validation-lab",
  "questions": {
    "validlab-q1": {
      "type": "short",
      "accepted": [
        "4",
        "four"
      ],
      "explanation": "Four out of six: the mixed-case `<ScRiPt>` tag, the `<img onerror>` tag, the `OR` SQL injection (no forbidden pattern) and the directory traversal. A deny-list recognizes only the exact patterns it knows."
    },
    "validlab-q2": {
      "type": "single",
      "correct": "a",
      "explanation": "By describing the expected format (3 to 16 alphanumeric characters or underscore), the allow-list rejects by default whatever does not fit, including attack variants nobody anticipated.",
      "whyWrong": {
        "b": "Writing time is not a robustness criterion.",
        "c": "Validation encrypts nothing.",
        "d": "Every validation rule is tested, with valid and invalid cases."
      }
    },
    "validlab-q3": {
      "type": "truefalse",
      "correct": false,
      "explanation": "There is always an unanticipated variant (case, encoding, comment, different tag). Reliable defenses are output encoding, parameterized queries and allow-list validation, combined."
    },
    "validlab-q4": {
      "type": "single",
      "correct": "a",
      "explanation": "When the format cannot be strictly described, security relies on output encoding, parameterized queries and size limits. Checks done in the browser can be bypassed by an attacker.",
      "whyWrong": {
        "b": "Forbidding all special characters would hinder legitimate users without solving edge cases.",
        "c": "Browser-side validation is bypassed by sending the request directly.",
        "d": "Removing the field is not a proportionate answer."
      }
    },
    "validlab-q5": {
      "type": "single",
      "correct": "a",
      "explanation": "The server is the only place the attacker does not control: any validation done in the browser is a comfort for the user, not a protection.",
      "whyWrong": {
        "b": "The browser is controlled by the user, hence by a possible attacker.",
        "c": "Attacks also come from inside and from compromised accounts.",
        "d": "The database does not know the format the application expects."
      }
    }
  },
  "debrief": [
    {
      "t": "h",
      "text": "Verdicts of the two validators"
    },
    {
      "t": "table",
      "head": [
        "Input",
        "Deny-list",
        "Allow-list"
      ],
      "rows": [
        [
          "`alice_01` (legitimate)",
          "accepted",
          "accepted"
        ],
        [
          "`<script>alert(1)</script>`",
          "rejected",
          "rejected"
        ],
        [
          "`<ScRiPt>alert(1)</ScRiPt>`",
          "**wrongly accepted**",
          "rejected"
        ],
        [
          "`<img src=x onerror=alert(1)>`",
          "**wrongly accepted**",
          "rejected"
        ],
        [
          "`x' OR '1'='1`",
          "**wrongly accepted**",
          "rejected"
        ],
        [
          "`x'; drop table users`",
          "rejected",
          "rejected"
        ],
        [
          "`../../etc/passwd`",
          "**wrongly accepted**",
          "rejected"
        ],
        [
          "`bob` (legitimate)",
          "accepted",
          "accepted"
        ]
      ]
    },
    {
      "t": "list",
      "items": [
        "**Deny-list**: blocks what was anticipated, lets the rest through.",
        "**Allow-list**: accepts only what is described.",
        "**Defense in depth**: validation + output encoding + parameterized queries."
      ]
    },
    {
      "t": "callout",
      "kind": "key",
      "title": "Remember",
      "text": "Describe what is permitted rather than listing what is forbidden, validate on the server side, and remember that validation replaces neither encoding nor parameterized queries."
    }
  ]
};
