import type { LabBody } from '../../content/types';

export const body: LabBody = {
  "labId": "windows-baseline-lab",
  "hints": [
    "A deviation is a difference between the **expected** value and the **observed** value, in either direction.",
    "An old service enabled (SMBv1) or an over-privileged account is more serious than a disabled convenience.",
    "Compliance is expressed weighted: not all deviations carry the same weight."
  ],
  "questions": [
    {
      "id": "winlab-q1",
      "type": "short",
      "difficulty": 1,
      "skills": [
        "d-base-protections"
      ],
      "prompt": "How many settings deviate from the baseline?",
      "placeholder": "number"
    },
    {
      "id": "winlab-q2",
      "type": "single",
      "difficulty": 2,
      "skills": [
        "d-base-comptes"
      ],
      "prompt": "Why is the user being a local administrator an important deviation?",
      "options": [
        {
          "id": "a",
          "text": "Malicious code launched by the user would have administrator rights"
        },
        {
          "id": "b",
          "text": "The user could no longer open documents"
        },
        {
          "id": "c",
          "text": "The firewall would stop working"
        },
        {
          "id": "d",
          "text": "The workstation would be slower"
        }
      ]
    },
    {
      "id": "winlab-q3",
      "type": "single",
      "difficulty": 2,
      "skills": [
        "d-base-protections"
      ],
      "prompt": "What risk does the lack of disk encryption pose if the laptop is stolen?",
      "options": [
        {
          "id": "a",
          "text": "The data is readable by anyone who reads the disk"
        },
        {
          "id": "b",
          "text": "The laptop no longer starts"
        },
        {
          "id": "c",
          "text": "The firewall turns off"
        },
        {
          "id": "d",
          "text": "The session password is erased"
        }
      ]
    },
    {
      "id": "winlab-q4",
      "type": "truefalse",
      "difficulty": 1,
      "skills": [
        "d-base-protections"
      ],
      "prompt": "Disabling autorun of removable media (setting no. 8) is a deviation to fix."
    },
    {
      "id": "winlab-q5",
      "type": "single",
      "difficulty": 2,
      "skills": [
        "d-base-protections"
      ],
      "prompt": "Which deviation should remediation start with?",
      "options": [
        {
          "id": "a",
          "text": "The severity 3 deviations: encryption, SMBv1 and local administrator rights"
        },
        {
          "id": "b",
          "text": "The severity 1 one"
        },
        {
          "id": "c",
          "text": "None, the overall score is fine"
        },
        {
          "id": "d",
          "text": "Remote Desktop, because it is the last one in the list"
        }
      ]
    }
  ]
};
