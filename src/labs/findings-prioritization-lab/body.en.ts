import type { LabBody } from '../../content/types';

export const body: LabBody = {
  "labId": "findings-prioritization-lab",
  "hints": [
    "A CVSS score measures the **technical** severity of the flaw, not the risk to **your** organization.",
    "An asset exposed on the Internet is easier to reach than an internal one.",
    "An exploitation already seen in the wild speeds up the remediation timeline."
  ],
  "questions": [
    {
      "id": "findlab-q1",
      "type": "short",
      "difficulty": 1,
      "skills": [
        "h-report"
      ],
      "prompt": "What is the number of the finding to handle first?",
      "placeholder": "number"
    },
    {
      "id": "findlab-q2",
      "type": "single",
      "difficulty": 3,
      "skills": [
        "h-report",
        "h-vuln"
      ],
      "prompt": "Why does finding no. 5 (CVSS 9.8, default password) rank after no. 3 (CVSS 8.1, SMB vulnerability)?",
      "options": [
        {
          "id": "a",
          "text": "The asset of no. 5 is less critical and internal, despite a higher score"
        },
        {
          "id": "b",
          "text": "No. 3 has a better score than no. 5"
        },
        {
          "id": "c",
          "text": "Default passwords are always harmless"
        },
        {
          "id": "d",
          "text": "No. 5 is exposed on the Internet"
        }
      ]
    },
    {
      "id": "findlab-q3",
      "type": "truefalse",
      "difficulty": 2,
      "skills": [
        "h-report"
      ],
      "prompt": "Sorting findings by decreasing CVSS score is enough to build a relevant remediation plan."
    },
    {
      "id": "findlab-q4",
      "type": "single",
      "difficulty": 2,
      "skills": [
        "h-report"
      ],
      "prompt": "What is the first action for finding no. 8?",
      "options": [
        {
          "id": "a",
          "text": "Document the finding and wait for the next review"
        },
        {
          "id": "b",
          "text": "Revoke the key, replace it, then check whether it was used"
        },
        {
          "id": "c",
          "text": "Delete the file from the repository and do nothing else"
        },
        {
          "id": "d",
          "text": "Rename the repository"
        }
      ]
    },
    {
      "id": "findlab-q5",
      "type": "multi",
      "difficulty": 3,
      "skills": [
        "h-report"
      ],
      "prompt": "Which elements usefully put a CVSS score in context?",
      "options": [
        {
          "id": "a",
          "text": "The asset’s exposure (Internet or internal)"
        },
        {
          "id": "b",
          "text": "The asset’s business criticality"
        },
        {
          "id": "c",
          "text": "The existence of known exploitation"
        },
        {
          "id": "d",
          "text": "The length of the finding’s title"
        }
      ]
    }
  ]
};
