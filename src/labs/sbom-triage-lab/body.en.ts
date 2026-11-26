import type { LabBody } from '../../content/types';

export const body: LabBody = {
  "labId": "sbom-triage-lab",
  "hints": [
    "A component used only to build or test is not in the shipped product.",
    "A vulnerability that is present but whose vulnerable code is never called is not exploitable through that route: it is documented.",
    "“Unknown” is not “no”: until analyzed, you cannot declare the product not affected."
  ],
  "questions": [
    {
      "id": "sbomlab-q1",
      "type": "short",
      "difficulty": 2,
      "skills": [
        "l-dso-gouv"
      ],
      "prompt": "How many vulnerabilities require a fix within 48 hours?",
      "placeholder": "number"
    },
    {
      "id": "sbomlab-q2",
      "type": "single",
      "difficulty": 3,
      "skills": [
        "l-dso-gouv",
        "l-dso-supply"
      ],
      "prompt": "Vulnerability no. 4 has a CVSS of 9.1. Why is it not a priority?",
      "options": [
        {
          "id": "a",
          "text": "The component is a test tool, absent from the shipped product"
        },
        {
          "id": "b",
          "text": "A CVSS of 9.1 is a low score"
        },
        {
          "id": "c",
          "text": "Test tools are never vulnerable"
        },
        {
          "id": "d",
          "text": "It has already been fixed"
        }
      ]
    },
    {
      "id": "sbomlab-q3",
      "type": "single",
      "difficulty": 3,
      "skills": [
        "l-dso-gouv"
      ],
      "prompt": "What must a VEX “not affected” statement contain for no. 3?",
      "options": [
        {
          "id": "a",
          "text": "The justification: the library’s vulnerable code is never called by the application"
        },
        {
          "id": "b",
          "text": "Only the words “no risk”"
        },
        {
          "id": "c",
          "text": "The CVE number with no explanation"
        },
        {
          "id": "d",
          "text": "A request to remove the CVE from the public database"
        }
      ]
    },
    {
      "id": "sbomlab-q4",
      "type": "truefalse",
      "difficulty": 3,
      "skills": [
        "l-dso-gouv"
      ],
      "prompt": "“Unknown” reachability allows declaring the product not affected, in the meantime."
    },
    {
      "id": "sbomlab-q5",
      "type": "multi",
      "difficulty": 3,
      "skills": [
        "l-dso-gouv",
        "l-dso-incident"
      ],
      "prompt": "Which practices make this triage reliable over time?",
      "options": [
        {
          "id": "a",
          "text": "Regenerating the component inventory at every build"
        },
        {
          "id": "b",
          "text": "Keeping VEX statements and their justifications, and reopening them if the code changes"
        },
        {
          "id": "c",
          "text": "Measuring the delay between a fix’s publication and its deployment to production"
        },
        {
          "id": "d",
          "text": "Never updating a dependency that works"
        }
      ]
    }
  ]
};
