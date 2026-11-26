import type { LabBody } from '../../content/types';

export const body: LabBody = {
  "labId": "dns-zone-lab",
  "hints": [
    "A `TXT` record starting with `v=spf1` lists the servers allowed to send mail: look at how it **ends**.",
    "A `CNAME` to a service you no longer use can be **claimed** by someone else at that provider.",
    "A **public** zone must contain only addresses reachable from the Internet."
  ],
  "questions": [
    {
      "id": "dnslab-q1",
      "type": "short",
      "difficulty": 1,
      "skills": [
        "b-dns"
      ],
      "prompt": "How many flaws does the audit detect?",
      "placeholder": "number"
    },
    {
      "id": "dnslab-q2",
      "type": "single",
      "difficulty": 2,
      "skills": [
        "b-dns"
      ],
      "prompt": "What does the `v=spf1 +all` record allow?",
      "options": [
        {
          "id": "a",
          "text": "Any server to present itself as a legitimate sender of the domain"
        },
        {
          "id": "b",
          "text": "No server to send mail"
        },
        {
          "id": "c",
          "text": "Only the domain’s mail server"
        },
        {
          "id": "d",
          "text": "Encrypting the mail sent"
        }
      ]
    },
    {
      "id": "dnslab-q3",
      "type": "single",
      "difficulty": 2,
      "skills": [
        "b-dns"
      ],
      "prompt": "What risk does the CNAME `ancienne-boutique` to `boutique-fermee.hebergeur.example.` present?",
      "options": [
        {
          "id": "a",
          "text": "A third party could claim this name at the provider and serve content under your subdomain"
        },
        {
          "id": "b",
          "text": "The DNS server will go down"
        },
        {
          "id": "c",
          "text": "Mail will no longer be delivered"
        },
        {
          "id": "d",
          "text": "The domain will be deleted automatically"
        }
      ]
    },
    {
      "id": "dnslab-q4",
      "type": "single",
      "difficulty": 2,
      "skills": [
        "b-dns",
        "b-reseau-diag"
      ],
      "prompt": "What does the record `intranet A 10.0.4.12` reveal in a public zone?",
      "options": [
        {
          "id": "a",
          "text": "The structure and addresses of the internal network, useful to an attacker"
        },
        {
          "id": "b",
          "text": "A web server accessible to everyone"
        },
        {
          "id": "c",
          "text": "A syntax error"
        },
        {
          "id": "d",
          "text": "A mandatory record"
        }
      ]
    },
    {
      "id": "dnslab-q5",
      "type": "truefalse",
      "difficulty": 1,
      "skills": [
        "b-dns"
      ],
      "prompt": "A DMARC record tells receiving servers how to handle emails that fail SPF and DKIM checks."
    }
  ]
};
