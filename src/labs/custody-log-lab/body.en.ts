import type { LabBody } from '../../content/types';

export const body: LabBody = {
  "labId": "custody-log-lab",
  "hints": [
    "A chain of custody answers: **who** had the evidence, **when**, **where**, and **in what state**.",
    "An original’s hash must **not** change; only a copy may have its own hash, recorded as such.",
    "An unexplained gap in the timeline suggests an untracked access."
  ],
  "questions": [
    {
      "id": "custlab-q1",
      "type": "short",
      "difficulty": 1,
      "skills": [
        "j-ini-integrite"
      ],
      "prompt": "How many anomalies does the log contain?",
      "placeholder": "number"
    },
    {
      "id": "custlab-q2",
      "type": "single",
      "difficulty": 2,
      "skills": [
        "j-ini-integrite"
      ],
      "prompt": "Which anomaly most weakens the value of the evidence?",
      "options": [
        {
          "id": "a",
          "text": "The disk’s hash changed between entry 5 and entry 6"
        },
        {
          "id": "b",
          "text": "The location “Laboratory” appears several times"
        },
        {
          "id": "c",
          "text": "The same handler appears in several entries"
        },
        {
          "id": "d",
          "text": "The disk is stored in a cabinet"
        }
      ]
    },
    {
      "id": "custlab-q3",
      "type": "single",
      "difficulty": 2,
      "skills": [
        "j-ini-integrite"
      ],
      "prompt": "What does entry 5 (analysis with no handler, after a gap of almost 29 hours) show?",
      "options": [
        {
          "id": "a",
          "text": "An access to the evidence that nobody can attribute or explain"
        },
        {
          "id": "b",
          "text": "A perfectly compliant procedure"
        },
        {
          "id": "c",
          "text": "A copy made by the laboratory"
        },
        {
          "id": "d",
          "text": "A simple oversight with no consequence"
        }
      ]
    },
    {
      "id": "custlab-q4",
      "type": "truefalse",
      "difficulty": 1,
      "skills": [
        "j-ini-integrite"
      ],
      "prompt": "Correcting the log after the fact is enough to repair an incomplete chain of custody."
    },
    {
      "id": "custlab-q5",
      "type": "single",
      "difficulty": 2,
      "skills": [
        "j-ini-cadre"
      ],
      "prompt": "What is the right approach to these anomalies before the hearing?",
      "options": [
        {
          "id": "a",
          "text": "Report them honestly, gather dated explanations and assess what the evidence can still establish"
        },
        {
          "id": "b",
          "text": "Erase the line concerned from the log"
        },
        {
          "id": "c",
          "text": "Rebuild a clean log with new dates"
        },
        {
          "id": "d",
          "text": "Say nothing and hope nobody notices"
        }
      ]
    }
  ]
};
