import type { LabBody } from '../../content/types';

export const body: LabBody = {
  "labId": "exposed-ports-lab",
  "hints": [
    "An **administration** or **database** service almost never needs to be reachable from the whole Internet.",
    "A protocol that sends credentials **in clear text** has no place on a public network.",
    "An open port is not necessarily a problem: it is the use made of it that counts."
  ],
  "questions": [
    {
      "id": "portlab-q1",
      "type": "short",
      "difficulty": 1,
      "skills": [
        "b-osi-secu"
      ],
      "prompt": "How many of these ports must simply be closed?",
      "placeholder": "number"
    },
    {
      "id": "portlab-q2",
      "type": "single",
      "difficulty": 1,
      "skills": [
        "b-osi-secu"
      ],
      "prompt": "Which port transmits credentials in clear text?",
      "options": [
        {
          "id": "a",
          "text": "22 (ssh)"
        },
        {
          "id": "b",
          "text": "23 (telnet)"
        },
        {
          "id": "c",
          "text": "443 (https)"
        },
        {
          "id": "d",
          "text": "3389 (rdp)"
        }
      ]
    },
    {
      "id": "portlab-q3",
      "type": "single",
      "difficulty": 2,
      "skills": [
        "b-osi-secu"
      ],
      "prompt": "What should be done with port 3306 (MySQL database) reachable from the Internet?",
      "options": [
        {
          "id": "a",
          "text": "Leave it open, since the database has a password"
        },
        {
          "id": "b",
          "text": "Allow only the application server that needs it"
        },
        {
          "id": "c",
          "text": "Simply change its port number"
        },
        {
          "id": "d",
          "text": "Add a second open port next to it"
        }
      ]
    },
    {
      "id": "portlab-q4",
      "type": "truefalse",
      "difficulty": 2,
      "skills": [
        "b-osi-secu"
      ],
      "prompt": "Port 80 (http) must always be closed on a web server."
    },
    {
      "id": "portlab-q5",
      "type": "single",
      "difficulty": 2,
      "skills": [
        "b-osi-secu"
      ],
      "prompt": "How can the remote desktop service (3389) be protected without preventing remote work?",
      "options": [
        {
          "id": "a",
          "text": "Leave it open to all with a long password"
        },
        {
          "id": "b",
          "text": "Place it behind a VPN or access gateway with multi-factor authentication"
        },
        {
          "id": "c",
          "text": "Close it with no alternative"
        },
        {
          "id": "d",
          "text": "Move it to port 3390"
        }
      ]
    }
  ]
};
