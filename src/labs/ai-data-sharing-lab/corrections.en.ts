import type { LabCorrections } from '../../content/types';

export const corrections: LabCorrections = {
  "labId": "ai-data-sharing-lab",
  "questions": {
    "aishlab-q1": {
      "type": "short",
      "accepted": [
        "2",
        "two"
      ],
      "explanation": "Two: the general question about TLS and the already published blog article, which are public. Everything else, even “internal”, stays out of an unapproved tool."
    },
    "aishlab-q2": {
      "type": "single",
      "correct": "b",
      "explanation": "A secret is entered into no tool: you provide a dummy example of the same format. If the key was already pasted somewhere, it is considered compromised and revoked.",
      "whyWrong": {
        "a": "Even an approved tool logs what is sent to it.",
        "c": "Masking the start does not protect the whole key.",
        "d": "A modified key will no longer work, but the habit of entering secrets remains dangerous."
      }
    },
    "aishlab-q3": {
      "type": "single",
      "correct": "b",
      "explanation": "Personal data falls under the GDPR: a tool’s general approval does not exempt you from justifying the purpose, the legal basis and minimization. You anonymize or obtain the data protection officer’s approval.",
      "whyWrong": {
        "a": "Approval of the tool is not authorization for all data.",
        "c": "Removing first names does not make data anonymous.",
        "d": "Translating does not change the nature of the data."
      }
    },
    "aishlab-q4": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Server names and internal addresses describe your architecture and help an attacker. In an unapproved tool, no internal information is sent; you use the approved assistant or anonymize."
    },
    "aishlab-q5": {
      "type": "single",
      "correct": "b",
      "explanation": "An approved tool protects data, it does not guarantee the accuracy of answers. Assistants can be wrong: the person who uses the answer remains responsible and checks it.",
      "whyWrong": {
        "a": "Approval concerns data security, not correctness.",
        "c": "Forwarding without review engages the organization’s liability.",
        "d": "Deleting the original destroys a necessary document."
      }
    }
  },
  "debrief": [
    {
      "t": "h",
      "text": "Rule applied to the eight pieces of information"
    },
    {
      "t": "table",
      "head": [
        "No.",
        "Information",
        "Classification",
        "Public",
        "Approved"
      ],
      "rows": [
        [
          "1",
          "General question about TLS",
          "Public",
          "Allowed",
          "Allowed"
        ],
        [
          "2",
          "Published blog article",
          "Public",
          "Allowed",
          "Allowed"
        ],
        [
          "3",
          "Meeting minutes",
          "Internal",
          "Forbidden",
          "Allowed"
        ],
        [
          "4",
          "Log with server names",
          "Internal",
          "Forbidden",
          "Allowed"
        ],
        [
          "5",
          "Customer list",
          "Personal data",
          "Forbidden",
          "Forbidden without approval"
        ],
        [
          "6",
          "Supplier contract",
          "Confidential",
          "Forbidden",
          "Forbidden without approval"
        ],
        [
          "7",
          "API key",
          "Secret",
          "Forbidden",
          "**Forbidden**"
        ],
        [
          "8",
          "Medical file",
          "Personal data",
          "Forbidden",
          "Forbidden without approval"
        ]
      ]
    },
    {
      "t": "callout",
      "kind": "key",
      "title": "Reflex",
      "text": "Before pasting anything: what type of information is it, and for which tool? When in doubt, enter nothing and ask. A secret is never entered."
    }
  ]
};
