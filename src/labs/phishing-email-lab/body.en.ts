import type { LabBody } from '../../content/types';

export const body: LabBody = {
  "labId": "phishing-email-lab",
  "hints": [
    "In a web address, the domain that matters is the one before the first slash, **read from right to left**: the last word before the extension and the extension itself.",
    "A **double extension** (`.pdf.exe`) hides an executable behind a fake document name.",
    "A successful authentication check proves the sender really owns **its** domain, not that the domain is trustworthy."
  ],
  "questions": [
    {
      "id": "phishlab-q1",
      "type": "short",
      "difficulty": 1,
      "skills": [
        "i-ini-alerte"
      ],
      "prompt": "How many of these six emails are dangerous (phishing, fraud or malware)?",
      "placeholder": "number"
    },
    {
      "id": "phishlab-q2",
      "type": "single",
      "difficulty": 2,
      "skills": [
        "i-ini-alerte"
      ],
      "prompt": "Which email is a CEO fraud?",
      "options": [
        {
          "id": "a",
          "text": "No. 1 (payroll service)"
        },
        {
          "id": "b",
          "text": "No. 2 (bank)"
        },
        {
          "id": "c",
          "text": "No. 3 (“CEO” asking for a confidential transfer)"
        },
        {
          "id": "d",
          "text": "No. 5 (supplier)"
        }
      ]
    },
    {
      "id": "phishlab-q3",
      "type": "single",
      "difficulty": 2,
      "skills": [
        "i-ini-alerte"
      ],
      "prompt": "In email no. 6, which domain does the link `societe.example.com.reset-portal.example` really lead to?",
      "options": [
        {
          "id": "a",
          "text": "societe.example.com"
        },
        {
          "id": "b",
          "text": "societe.example"
        },
        {
          "id": "c",
          "text": "reset-portal.example"
        },
        {
          "id": "d",
          "text": "example.com"
        }
      ]
    },
    {
      "id": "phishlab-q4",
      "type": "truefalse",
      "difficulty": 2,
      "skills": [
        "i-ini-alerte"
      ],
      "prompt": "A “passed” authentication result (SPF, DKIM) is enough to prove an email is legitimate."
    },
    {
      "id": "phishlab-q5",
      "type": "single",
      "difficulty": 1,
      "skills": [
        "i-ini-alerte"
      ],
      "prompt": "What should you do with the `suivi_colis.pdf.exe` attachment of email no. 4?",
      "options": [
        {
          "id": "a",
          "text": "Open it to check its content"
        },
        {
          "id": "b",
          "text": "Forward it to colleagues for their opinion"
        },
        {
          "id": "c",
          "text": "Not open it and report the email through the established procedure"
        },
        {
          "id": "d",
          "text": "Rename it to `.pdf` to read it"
        }
      ]
    },
    {
      "id": "phishlab-q6",
      "type": "multi",
      "difficulty": 2,
      "skills": [
        "i-ini-alerte"
      ],
      "prompt": "Which clues make an email suspicious?",
      "options": [
        {
          "id": "a",
          "text": "A link domain different from the one displayed or expected"
        },
        {
          "id": "b",
          "text": "Pressure to act fast on an unusual subject"
        },
        {
          "id": "c",
          "text": "A double extension on the attachment"
        },
        {
          "id": "d",
          "text": "A subject written in lowercase letters"
        }
      ]
    }
  ]
};
