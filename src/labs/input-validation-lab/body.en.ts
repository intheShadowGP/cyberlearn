import type { LabBody } from '../../content/types';

export const body: LabBody = {
  "labId": "input-validation-lab",
  "hints": [
    "A deny-list must **anticipate** every variant; an allow-list describes **what is permitted**.",
    "Capital letters, different tags and unexpected separators are the simplest bypasses.",
    "Validating is not enough: an accepted value must still be **encoded** on display and **parameterized** in queries."
  ],
  "questions": [
    {
      "id": "validlab-q1",
      "type": "short",
      "difficulty": 1,
      "skills": [
        "g-base-entrees"
      ],
      "prompt": "How many malicious inputs does the deny-list let through?",
      "placeholder": "number"
    },
    {
      "id": "validlab-q2",
      "type": "single",
      "difficulty": 1,
      "skills": [
        "g-base-entrees"
      ],
      "prompt": "Why is the allow-list more robust here?",
      "options": [
        {
          "id": "a",
          "text": "It precisely describes the legitimate format and rejects everything else"
        },
        {
          "id": "b",
          "text": "It takes longer to write"
        },
        {
          "id": "c",
          "text": "It encrypts the input"
        },
        {
          "id": "d",
          "text": "It needs no testing"
        }
      ]
    },
    {
      "id": "validlab-q3",
      "type": "truefalse",
      "difficulty": 2,
      "skills": [
        "g-base-entrees"
      ],
      "prompt": "A well-stocked deny-list is enough to make an application safe against injections."
    },
    {
      "id": "validlab-q4",
      "type": "single",
      "difficulty": 2,
      "skills": [
        "g-base-entrees"
      ],
      "prompt": "A “free comment” field must accept almost all characters. What should you do?",
      "options": [
        {
          "id": "a",
          "text": "Not rely on validation alone: encode the output and parameterize queries"
        },
        {
          "id": "b",
          "text": "Forbid all special characters"
        },
        {
          "id": "c",
          "text": "Do nothing, browser validation is enough"
        },
        {
          "id": "d",
          "text": "Remove the field"
        }
      ]
    },
    {
      "id": "validlab-q5",
      "type": "single",
      "difficulty": 1,
      "skills": [
        "g-base-entrees"
      ],
      "prompt": "Where must an input necessarily be validated?",
      "options": [
        {
          "id": "a",
          "text": "On the server side"
        },
        {
          "id": "b",
          "text": "Only in the browser"
        },
        {
          "id": "c",
          "text": "Nowhere, if the form is internal"
        },
        {
          "id": "d",
          "text": "Only in the database"
        }
      ]
    }
  ]
};
