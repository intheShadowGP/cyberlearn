import type { LabCorrections } from '../../content/types';

export const corrections: LabCorrections = {
  "labId": "breach-deadline-lab",
  "questions": {
    "brlab-q1": {
      "type": "single",
      "correct": "a",
      "explanation": "72 calendar hours after Friday 17:45 is Monday 9 March at 17:45 UTC. The weekend counts: there is no postponement to the next working day. In practice, notification starts within the first hours.",
      "whyWrong": {
        "b": "Nothing postpones the deadline to the next working day.",
        "c": "That corresponds to seven days, not three.",
        "d": "That would be only 24 hours."
      }
    },
    "brlab-q2": {
      "type": "short",
      "accepted": [
        "2",
        "two"
      ],
      "explanation": "Two: the mailing with visible addresses (no. 2, risk present) and the ransomware (no. 3, high risk). The encrypted computer (no. 1) and the deleted payslip (no. 4) present no risk, but must still be recorded."
    },
    "brlab-q3": {
      "type": "single",
      "correct": "c",
      "explanation": "No. 3 exposes the health data of 2,000 people to an attacker: the risk is high, so individuals must be informed so they can protect themselves. The other incidents do not present a high risk.",
      "whyWrong": {
        "a": "A disk encrypted with a strong key makes the data unusable.",
        "b": "The risk exists, but is not high: the authority is notified, with no obligation to inform each person.",
        "d": "The message was deleted by the recipient, who confirmed it."
      }
    },
    "brlab-q4": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Every breach is recorded in an internal register, with its effects and the measures taken, even when it is not notified. The authority may ask for this register."
    },
    "brlab-q5": {
      "type": "single",
      "correct": "a",
      "explanation": "The deadline starts as soon as the organization is aware of the incident: an immediate alert gives the manager time to assess the risk. The decision to notify belongs to the designated person, not to the one who discovers it.",
      "whyWrong": {
        "b": "Waiting consumes the 72-hour deadline.",
        "c": "Deleting traces destroys evidence and makes the situation worse.",
        "d": "Informing individuals is decided after the risk assessment, by the manager."
      }
    }
  },
  "debrief": [
    {
      "t": "h",
      "text": "Decision for each incident"
    },
    {
      "t": "table",
      "head": [
        "No.",
        "Incident",
        "Risk",
        "Authority",
        "Individuals",
        "Deadline (UTC)"
      ],
      "rows": [
        [
          "1",
          "Lost encrypted computer",
          "None",
          "No, record it",
          "No",
          "—"
        ],
        [
          "2",
          "Visible addresses",
          "Present",
          "**Yes**",
          "No",
          "08/03 14:20"
        ],
        [
          "3",
          "Ransomware, health data",
          "High",
          "**Yes**",
          "**Yes**",
          "09/03 17:45"
        ],
        [
          "4",
          "Deleted payslip",
          "None",
          "No, record it",
          "No",
          "—"
        ]
      ]
    },
    {
      "t": "list",
      "items": [
        "**72 calendar hours**: the weekend does not suspend the deadline.",
        "**Risk**: no risk (strong encryption, recalled message) = no notification, but record it.",
        "**Informing individuals**: required when the risk is high."
      ]
    },
    {
      "t": "callout",
      "kind": "key",
      "title": "Reflex",
      "text": "Alert at once, describe the facts (which data, how many people, when), contain, and let the designated person decide on notification within the deadline."
    }
  ]
};
