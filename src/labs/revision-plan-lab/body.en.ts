import type { LabBody } from '../../content/types';

export const body: LabBody = {
  "labId": "revision-plan-lab",
  "hints": [
    "A domain already at the target level brings nothing more: no need to spend time there.",
    "The gain depends on both the domain’s **weight** and its **gap** to the target.",
    "Allocate the budget in proportion to gain, not in equal shares."
  ],
  "questions": [
    {
      "id": "revlab-q1",
      "type": "short",
      "difficulty": 1,
      "skills": [
        "r-pf-methode"
      ],
      "prompt": "Which domain offers the greatest potential gain?",
      "placeholder": "domain"
    },
    {
      "id": "revlab-q2",
      "type": "short",
      "difficulty": 2,
      "skills": [
        "r-pf-methode"
      ],
      "prompt": "What is the total potential gain, in points? (one decimal)",
      "placeholder": "number"
    },
    {
      "id": "revlab-q3",
      "type": "short",
      "difficulty": 2,
      "skills": [
        "r-pf-methode"
      ],
      "prompt": "How many hours (rounded to the whole number) should go to systems security out of twenty, allocating by gain?",
      "placeholder": "hours"
    },
    {
      "id": "revlab-q4",
      "type": "truefalse",
      "difficulty": 1,
      "skills": [
        "r-pf-methode"
      ],
      "prompt": "Revising your strengths first is the most effective way to raise your score."
    },
    {
      "id": "revlab-q5",
      "type": "single",
      "difficulty": 2,
      "skills": [
        "r-pf-methode",
        "r-pf-integrite"
      ],
      "prompt": "Which study practice is consistent with honest preparation?",
      "options": [
        {
          "id": "a",
          "text": "Working with official materials and exercises, then redoing the diagnostic"
        },
        {
          "id": "b",
          "text": "Looking for the real exam questions published online"
        },
        {
          "id": "c",
          "text": "Memorizing past papers obtained in breach of confidentiality"
        },
        {
          "id": "d",
          "text": "Having someone else sit a test in your place"
        }
      ]
    }
  ]
};
