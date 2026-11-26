import type { LabCorrections } from '../../content/types';

export const corrections: LabCorrections = {
  "labId": "revision-plan-lab",
  "questions": {
    "revlab-q1": {
      "type": "short",
      "accepted": [
        "systems security",
        "systems",
        "system security",
        "sécurité des systèmes"
      ],
      "explanation": "Systems security weighs 25% of the exam and your score is 50%: 25 × (80 − 50) / 100 = 7.5 points to gain, the largest potential in the plan."
    },
    "revlab-q2": {
      "type": "short",
      "accepted": [
        "18.5",
        "18,5"
      ],
      "explanation": "Add up the gains per domain: 3.0 + 0 + 7.5 + 1.5 + 4.0 + 0.5 + 2.0 = 18.5 points."
    },
    "revlab-q3": {
      "type": "short",
      "accepted": [
        "8"
      ],
      "explanation": "20 × 7.5 / 18.5 ≈ 8.1 hours: about 8 hours, or 40% of the time for the domain that pays off most."
    },
    "revlab-q4": {
      "type": "truefalse",
      "correct": false,
      "explanation": "A domain already mastered offers little margin. Points are won where the gap to the target is large and the exam weight is high."
    },
    "revlab-q5": {
      "type": "single",
      "correct": "a",
      "explanation": "Honest preparation relies on legitimate resources and is measured by a new diagnostic. Stolen questions or cheating breach the certifications’ confidentiality agreement and can cost you the certification obtained.",
      "whyWrong": {
        "b": "Real questions circulated online breach the exam’s confidentiality.",
        "c": "Memorizing illegitimately obtained content is cheating and proves no skill.",
        "d": "Having someone else sit the test is outright fraud."
      }
    }
  },
  "debrief": [
    {
      "t": "h",
      "text": "Proposed plan for twenty hours"
    },
    {
      "t": "table",
      "head": [
        "Domain",
        "Weight",
        "Score",
        "Gain",
        "Hours"
      ],
      "rows": [
        [
          "Systems security",
          "25",
          "50",
          "7.5",
          "8.1"
        ],
        [
          "Incident response",
          "10",
          "40",
          "4.0",
          "4.3"
        ],
        [
          "Networking",
          "20",
          "65",
          "3.0",
          "3.2"
        ],
        [
          "Cloud",
          "10",
          "60",
          "2.0",
          "2.2"
        ],
        [
          "Risk management",
          "15",
          "70",
          "1.5",
          "1.6"
        ],
        [
          "Secure development",
          "10",
          "75",
          "0.5",
          "0.5"
        ],
        [
          "Cryptography",
          "10",
          "80",
          "0",
          "0"
        ]
      ]
    },
    {
      "t": "list",
      "items": [
        "**Priority 1**: systems security (high weight, lowest score among the big domains).",
        "**Priority 2**: incident response (small weight, but a very low score).",
        "**No targeted revision** for cryptography, already at the target."
      ]
    },
    {
      "t": "callout",
      "kind": "key",
      "title": "Method",
      "text": "Diagnose, compute the gain per domain, allocate time proportionally, practice, then redo a diagnostic to adjust. A revision plan is a model you correct with new measurements."
    }
  ]
};
