import type { LabCorrections } from '../../content/types';

export const corrections: LabCorrections = {
  "labId": "findings-prioritization-lab",
  "questions": {
    "findlab-q1": {
      "type": "short",
      "accepted": [
        "8",
        "finding 8",
        "no. 8"
      ],
      "explanation": "Finding no. 8 (API key published in a public repository) combines Internet exposure, a critical asset and known exploitation: its priority reaches the cap of 10. It is handled immediately by revoking the key."
    },
    "findlab-q2": {
      "type": "single",
      "correct": "a",
      "explanation": "The raw score ignores context: no. 5 affects a medium-criticality asset reachable only internally, whereas no. 3 concerns a critical file server with known exploitation. Both remain to be handled, but not in score order.",
      "whyWrong": {
        "b": "It is the opposite: no. 5 is 9.8 and no. 3 is 8.1.",
        "c": "A default password is a serious flaw; here it only ranks after a more exposed finding.",
        "d": "No. 5 is internal: that is precisely what lowers its priority."
      }
    },
    "findlab-q3": {
      "type": "truefalse",
      "correct": false,
      "explanation": "The CVSS score describes technical severity; real risk depends on exposure, asset value and exploitation context. Here three findings change rank once put in context."
    },
    "findlab-q4": {
      "type": "single",
      "correct": "b",
      "explanation": "A published key must be considered compromised: you revoke it, replace it and consult the usage logs. Deleting the file does not remove the key from history or from copies already made.",
      "whyWrong": {
        "a": "Waiting prolongs the exposure of an exploitable key.",
        "c": "The secret stays in the history and in clones.",
        "d": "Renaming protects nothing."
      }
    },
    "findlab-q5": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Exposure, asset criticality and known exploitation are the three factors used in this lab to move from technical severity to risk. The length of the title has no link with risk.",
      "whyWrong": {
        "d": "A longer or shorter title does not change the risk."
      }
    }
  },
  "debrief": [
    {
      "t": "h",
      "text": "Contextual ranking"
    },
    {
      "t": "table",
      "head": [
        "Rank",
        "No.",
        "Finding",
        "CVSS",
        "Priority"
      ],
      "rows": [
        [
          "1",
          "8",
          "API key published in a public repository",
          "9.1",
          "10.00"
        ],
        [
          "2",
          "1",
          "SQL injection on the customer portal",
          "9.8",
          "9.80"
        ],
        [
          "3",
          "3",
          "SMB vulnerability on a file server",
          "8.1",
          "6.80"
        ],
        [
          "4",
          "5",
          "Default password on the probe",
          "9.8",
          "6.59"
        ],
        [
          "5",
          "2",
          "Telnet on a printer",
          "7.5",
          "3.78"
        ],
        [
          "6",
          "4",
          "TLS 1.0 on the showcase site",
          "5.9",
          "3.54"
        ],
        [
          "7",
          "7",
          "Stored XSS on the HR intranet",
          "6.1",
          "3.42"
        ],
        [
          "8",
          "6",
          "Missing security header",
          "3.1",
          "2.48"
        ]
      ]
    },
    {
      "t": "list",
      "items": [
        "**Context**: exposure, criticality and known exploitation change the order of raw scores.",
        "**This fortnight**: findings 8, 1, 3 and 5; the others can be scheduled.",
        "**Communication**: present the ranking AND its justification to management, not just scores."
      ]
    },
    {
      "t": "callout",
      "kind": "key",
      "title": "Remember",
      "text": "CVSS says how serious a flaw is in itself; priority depends on what it endangers in your organization and on how easily it can be exploited."
    }
  ]
};
