import type { LabBody } from '../../content/types';

export const body: LabBody = {
  "labId": "breach-deadline-lab",
  "hints": [
    "The deadline runs from the moment the organization **becomes aware** of the breach, not from its occurrence.",
    "Data **encrypted with a strong key** and not compromised, or a message recalled and deleted, presents no risk to individuals.",
    "Informing individuals is required when the risk is **high**; notifying the authority when there is a **risk**."
  ],
  "questions": [
    {
      "id": "brlab-q1",
      "type": "single",
      "difficulty": 2,
      "skills": [
        "m-ini-incident"
      ],
      "prompt": "What is the notification deadline for incident no. 3 (ransomware, awareness on Friday 6 March at 17:45 UTC)?",
      "options": [
        {
          "id": "a",
          "text": "Monday 9 March at 17:45 UTC"
        },
        {
          "id": "b",
          "text": "Tuesday 10 March at 09:00 UTC"
        },
        {
          "id": "c",
          "text": "Friday 13 March at 17:45 UTC"
        },
        {
          "id": "d",
          "text": "Saturday 7 March at 17:45 UTC"
        }
      ]
    },
    {
      "id": "brlab-q2",
      "type": "short",
      "difficulty": 1,
      "skills": [
        "m-ini-incident"
      ],
      "prompt": "How many of the four incidents must be notified to the supervisory authority?",
      "placeholder": "number"
    },
    {
      "id": "brlab-q3",
      "type": "single",
      "difficulty": 2,
      "skills": [
        "m-ini-incident"
      ],
      "prompt": "For which incident must the individuals concerned also be informed directly?",
      "options": [
        {
          "id": "a",
          "text": "No. 1 (lost computer)"
        },
        {
          "id": "b",
          "text": "No. 2 (visible addresses)"
        },
        {
          "id": "c",
          "text": "No. 3 (ransomware, health data)"
        },
        {
          "id": "d",
          "text": "No. 4 (payslip)"
        }
      ]
    },
    {
      "id": "brlab-q4",
      "type": "truefalse",
      "difficulty": 1,
      "skills": [
        "m-ini-incident"
      ],
      "prompt": "A breach that need not be notified to the authority need not be recorded either."
    },
    {
      "id": "brlab-q5",
      "type": "single",
      "difficulty": 1,
      "skills": [
        "m-ini-incident"
      ],
      "prompt": "What is the first action of the person who discovers an incident involving personal data?",
      "options": [
        {
          "id": "a",
          "text": "Immediately alert the designated person (security, data protection)"
        },
        {
          "id": "b",
          "text": "Wait to know more before telling anyone"
        },
        {
          "id": "c",
          "text": "Delete the traces to limit the damage"
        },
        {
          "id": "d",
          "text": "Notify customers by message"
        }
      ]
    }
  ]
};
