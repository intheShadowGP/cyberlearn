import type { LabCorrections } from '../../content/types';

export const corrections: LabCorrections = {
  "labId": "custody-log-lab",
  "questions": {
    "custlab-q1": {
      "type": "short",
      "accepted": [
        "3",
        "three"
      ],
      "explanation": "Three anomalies: entry 5 has no handler and follows a gap of almost 29 hours (two anomalies on the same entry), and entry 6 has a hash different from the previous one."
    },
    "custlab-q2": {
      "type": "single",
      "correct": "a",
      "explanation": "A changed hash means the disk’s content was modified (or another item was examined): integrity is no longer demonstrated. The other items are normal.",
      "whyWrong": {
        "b": "The laboratory is the normal place for analysis.",
        "c": "The same handler can legitimately act several times.",
        "d": "A secure cabinet is the expected storage."
      }
    },
    "custlab-q3": {
      "type": "single",
      "correct": "a",
      "explanation": "An analysis with no identified handler, preceded by a long gap, suggests an untracked access: you cannot state who handled the evidence nor under what conditions.",
      "whyWrong": {
        "b": "A compliant chain names a handler for each handling.",
        "c": "A copy would be recorded as such, with a copy hash.",
        "d": "The missing handler is precisely what weakens the evidence before a court or a board."
      }
    },
    "custlab-q4": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Modifying a log after the fact destroys its value: a log is not “completed”, a dated note explaining the gap (with its author) is added to it. Traceability relies on records made at the time of the events."
    },
    "custlab-q5": {
      "type": "single",
      "correct": "a",
      "explanation": "You report the discrepancies, look for explanations contemporaneous with the events (calendars, access logs, testimonies) and measure what remains of the evidence. Falsifying or concealing would be a serious fault and may be an offense.",
      "whyWrong": {
        "b": "Erasing a line is falsification.",
        "c": "Rebuilding with new dates is forgery.",
        "d": "Concealing an anomaly exposes you to a penalty far heavier than the anomaly itself."
      }
    }
  },
  "debrief": [
    {
      "t": "h",
      "text": "Reading the log"
    },
    {
      "t": "table",
      "head": [
        "Entry",
        "Finding",
        "Consequence"
      ],
      "rows": [
        [
          "1 to 4",
          "Named handlers, constant hash, consistent locations",
          "Continuous, compliant chain"
        ],
        [
          "5",
          "No handler, after 28.8 hours without an entry",
          "**Possible untracked access**"
        ],
        [
          "6",
          "Hash different from the previous entry",
          "**Integrity not demonstrated**"
        ],
        [
          "7",
          "Correct storage, but of the new hash",
          "Does not repair the discrepancy"
        ]
      ]
    },
    {
      "t": "list",
      "items": [
        "**Who, when, where, in what state**: four questions each line must answer.",
        "**Hash**: constant on the original; any variation must be explained.",
        "**Honesty**: document the discrepancy, do not conceal it."
      ]
    },
    {
      "t": "callout",
      "kind": "key",
      "title": "Remember",
      "text": "The chain of custody is built at the time of the events. Technically intact evidence can lose its value if you cannot show who handled it and in what state."
    }
  ]
};
