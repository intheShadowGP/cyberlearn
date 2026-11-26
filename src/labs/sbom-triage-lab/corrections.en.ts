import type { LabCorrections } from '../../content/types';

export const corrections: LabCorrections = {
  "labId": "sbom-triage-lab",
  "questions": {
    "sbomlab-q1": {
      "type": "short",
      "accepted": [
        "1",
        "one"
      ],
      "explanation": "Only one: no. 1 (web framework, reachable code, known exploitation, CVSS 9.8). No. 7 (CVSS 9.0, known exploitation) has unknown reachability: it first requires an analysis, which must be fast given the known exploitation."
    },
    "sbomlab-q2": {
      "type": "single",
      "correct": "a",
      "explanation": "The test-runner is not embedded in the shipped product: its vulnerability does not expose users. It is recorded with a VEX “not affected” statement (component not present) and the tool is updated in normal maintenance, bearing in mind that the build chain can also be attacked.",
      "whyWrong": {
        "b": "9.1 is a critical score; the score is not what is at issue.",
        "c": "Development tools have vulnerabilities too.",
        "d": "Nothing indicates it was already fixed: the version is the one before the fix."
      }
    },
    "sbomlab-q3": {
      "type": "single",
      "correct": "a",
      "explanation": "A VEX statement asserts a status (“not affected”) and gives a verifiable justification, here the vulnerable code being unreachable. Without justification, the statement cannot be used by the product’s users or by an auditor.",
      "whyWrong": {
        "b": "A bare mention is not verifiable.",
        "c": "The number alone gives neither status nor reason.",
        "d": "The statement concerns your product, not the public database."
      }
    },
    "sbomlab-q4": {
      "type": "truefalse",
      "correct": false,
      "explanation": "As long as reachability is not established, you cannot assert that the product is not affected. You analyze (quickly, especially if exploitation is known), and treat the vulnerability as potentially exploitable in the meantime."
    },
    "sbomlab-q5": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "An up-to-date inventory, justified statements reopened when the code changes, and a fix-delay indicator make triage a verifiable process. Never updating accumulates security debt.",
      "whyWrong": {
        "d": "A dependency that works can contain a known flaw: not updating is a risk."
      }
    }
  },
  "debrief": [
    {
      "t": "h",
      "text": "Grid decisions"
    },
    {
      "t": "table",
      "head": [
        "No.",
        "Component",
        "CVSS",
        "Decision",
        "Rule"
      ],
      "rows": [
        [
          "1",
          "web-framework",
          "9.8",
          "**Fix within 48 h**",
          "T3"
        ],
        [
          "2",
          "xml-parser",
          "7.5",
          "Fix within 30 days",
          "T4"
        ],
        [
          "3",
          "image-lib",
          "8.8",
          "VEX “not affected” (code not reachable)",
          "T2"
        ],
        [
          "4",
          "test-runner",
          "9.1",
          "VEX “not affected” (outside shipped product)",
          "T1"
        ],
        [
          "5",
          "crypto-utils",
          "7.4",
          "Analyze reachability",
          "T5"
        ],
        [
          "6",
          "log-formatter",
          "5.3",
          "Fix within 30 days",
          "T4"
        ],
        [
          "7",
          "auth-client",
          "9.0",
          "**Analyze urgently** (known exploitation)",
          "T5"
        ],
        [
          "8",
          "build-plugin",
          "6.5",
          "VEX “not affected” (outside shipped product)",
          "T1"
        ]
      ]
    },
    {
      "t": "list",
      "items": [
        "**Presence ≠ exposure**: three vulnerabilities out of eight are documented without an immediate fix.",
        "**Case to watch**: no. 7, high score and known exploitation, but unknown reachability.",
        "**Traceability**: each VEX statement carries a justification and can be reopened."
      ]
    },
    {
      "t": "callout",
      "kind": "key",
      "title": "Remember",
      "text": "The goal of triage is not to shrink the report’s line count, but to concentrate effort on what can really be exploited in the shipped product, and to be able to demonstrate it."
    }
  ]
};
