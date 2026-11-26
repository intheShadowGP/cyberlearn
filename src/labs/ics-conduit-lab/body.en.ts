import type { LabBody } from '../../content/types';

export const body: LabBody = {
  "labId": "ics-conduit-lab",
  "hints": [
    "A conduit is defined by a **source**, a **destination** and a **port**: a reverse flow or one on another port is not allowed.",
    "A flow leaving a **safety** zone toward business IT is the most serious: these systems must stay isolated.",
    "A flow that matches a conduit is not necessarily legitimate in its **content**."
  ],
  "questions": [
    {
      "id": "conduitlab-q1",
      "type": "short",
      "difficulty": 2,
      "skills": [
        "n-adv-62443"
      ],
      "prompt": "How many observed flows match no allowed conduit?",
      "placeholder": "number"
    },
    {
      "id": "conduitlab-q2",
      "type": "single",
      "difficulty": 3,
      "skills": [
        "n-adv-62443",
        "n-adv-archi"
      ],
      "prompt": "Which deviation is the most serious?",
      "options": [
        {
          "id": "a",
          "text": "No. 8: a flow leaves the safety system toward the enterprise"
        },
        {
          "id": "b",
          "text": "No. 4: remote desktop to the supervision"
        },
        {
          "id": "c",
          "text": "No. 7: an undeclared protocol between supervision and control"
        },
        {
          "id": "d",
          "text": "No. 5: three outbound connections from a PLC"
        }
      ]
    },
    {
      "id": "conduitlab-q3",
      "type": "single",
      "difficulty": 3,
      "skills": [
        "n-adv-62443"
      ],
      "prompt": "How should flow no. 4 (direct remote desktop from the enterprise to the supervision) be handled?",
      "options": [
        {
          "id": "a",
          "text": "Replace it with access through the DMZ, with a bastion, multi-factor authentication and session recording"
        },
        {
          "id": "b",
          "text": "Allow the flow by adding it to the conduit list"
        },
        {
          "id": "c",
          "text": "Ignore it: it happened only 14 times"
        },
        {
          "id": "d",
          "text": "Move it to another port"
        }
      ]
    },
    {
      "id": "conduitlab-q4",
      "type": "truefalse",
      "difficulty": 3,
      "skills": [
        "n-adv-detection"
      ],
      "prompt": "A flow that matches an allowed conduit is necessarily legitimate in its content."
    },
    {
      "id": "conduitlab-q5",
      "type": "single",
      "difficulty": 3,
      "skills": [
        "n-adv-risque"
      ],
      "prompt": "What should be done with flow no. 7 (undeclared EtherNet/IP between the supervision and the PLCs)?",
      "options": [
        {
          "id": "a",
          "text": "Find out who uses it and why, then declare it with inspection or block it"
        },
        {
          "id": "b",
          "text": "Block it immediately without warning operations"
        },
        {
          "id": "c",
          "text": "Leave it as is, since it runs between two internal zones"
        },
        {
          "id": "d",
          "text": "Declare it without investigation to remove the deviation"
        }
      ]
    }
  ]
};
