import type { LabBody } from '../../content/types';

export const body: LabBody = {
  "labId": "ai-data-sharing-lab",
  "hints": [
    "Ask yourself: **if this information were published, what would be the consequence?**",
    "An **approved** tool has a contract, logging and non-reuse guarantees: it does not erase the rules on personal data.",
    "A **secret** (key, password) is never entered, in any tool."
  ],
  "questions": [
    {
      "id": "aishlab-q1",
      "type": "short",
      "difficulty": 1,
      "skills": [
        "q-ini-donnees"
      ],
      "prompt": "How many pieces of information may be entered into a public assistant?",
      "placeholder": "number"
    },
    {
      "id": "aishlab-q2",
      "type": "single",
      "difficulty": 1,
      "skills": [
        "q-ini-donnees"
      ],
      "prompt": "What should be done with the production API key (no. 7)?",
      "options": [
        {
          "id": "a",
          "text": "Paste it into the approved assistant so it finds the error"
        },
        {
          "id": "b",
          "text": "Never enter it; provide a dummy example and, if it was exposed, revoke it"
        },
        {
          "id": "c",
          "text": "Paste it into the public assistant, masking the start"
        },
        {
          "id": "d",
          "text": "Reword it so the assistant does not recognize it"
        }
      ]
    },
    {
      "id": "aishlab-q3",
      "type": "single",
      "difficulty": 2,
      "skills": [
        "q-ini-donnees"
      ],
      "prompt": "Can the customer list (no. 5) be entrusted to the approved assistant?",
      "options": [
        {
          "id": "a",
          "text": "Yes, since the tool is approved"
        },
        {
          "id": "b",
          "text": "No, unless the data protection officer approves and suitable measures such as anonymization are in place"
        },
        {
          "id": "c",
          "text": "Yes, if only first names are removed"
        },
        {
          "id": "d",
          "text": "Yes, after translating it into another language"
        }
      ]
    },
    {
      "id": "aishlab-q4",
      "type": "truefalse",
      "difficulty": 1,
      "skills": [
        "q-ini-donnees"
      ],
      "prompt": "A log excerpt with internal server names can be pasted into a public assistant without risk."
    },
    {
      "id": "aishlab-q5",
      "type": "single",
      "difficulty": 2,
      "skills": [
        "q-ini-donnees",
        "q-ini-limites"
      ],
      "prompt": "After receiving an answer from the approved assistant about a contract, what should you do?",
      "options": [
        {
          "id": "a",
          "text": "Consider it accurate, since the tool is approved"
        },
        {
          "id": "b",
          "text": "Check it before relying on it, as an assistant can be wrong or make things up"
        },
        {
          "id": "c",
          "text": "Forward it to the customer without review"
        },
        {
          "id": "d",
          "text": "Delete the original contract"
        }
      ]
    }
  ]
};
