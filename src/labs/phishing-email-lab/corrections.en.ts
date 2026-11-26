import type { LabCorrections } from '../../content/types';

export const corrections: LabCorrections = {
  "labId": "phishing-email-lab",
  "questions": {
    "phishlab-q1": {
      "type": "short",
      "accepted": [
        "4",
        "four"
      ],
      "explanation": "Four emails are dangerous: no. 2 (fake bank site), no. 3 (CEO fraud), no. 4 (disguised executable) and no. 6 (fake sign-in portal). Nos. 1 and 5 are legitimate."
    },
    "phishlab-q2": {
      "type": "single",
      "correct": "c",
      "explanation": "No. 3 claims to come from the executive, demands an urgent, confidential transfer, and has no link or attachment: only the manipulation counts. The address does not belong to the organization and no authentication is established.",
      "whyWrong": {
        "a": "The payroll service writes from the organization’s domain, with passing checks.",
        "b": "The bank is a case of phishing through a fake site, not fraud impersonating an executive.",
        "d": "The supplier is a known sender with passing checks."
      }
    },
    "phishlab-q3": {
      "type": "single",
      "correct": "c",
      "explanation": "The domain that matters is the end of the host name: `reset-portal.example`. Everything before it (`societe.example.com.`) is a subdomain chosen by the attacker to look like the legitimate site.",
      "whyWrong": {
        "a": "That is a subdomain of the attacker’s domain.",
        "b": "That part is also just a prefix: it is not the end of the name.",
        "d": "That domain appears only as an intermediate element."
      }
    },
    "phishlab-q4": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Email no. 6 passes the checks and is still phishing: the attacker registered a domain close to yours and authenticates it normally. Authentication proves technical origin, not good faith."
    },
    "phishlab-q5": {
      "type": "single",
      "correct": "c",
      "explanation": "The double extension hides an executable. You do not open it, you report the message to the designated channel (or the security team) and let specialists examine it in an isolated environment.",
      "whyWrong": {
        "a": "Opening a disguised executable runs it.",
        "b": "Forwarding spreads the risk.",
        "d": "Renaming does not change its content: it remains an executable."
      }
    },
    "phishlab-q6": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "A misleading link, urgency on an unusual request and a double extension are classic clues. The case of the subject is not one.",
      "whyWrong": {
        "d": "Lowercase proves nothing: both legitimate and malicious emails can use it."
      }
    }
  },
  "debrief": [
    {
      "t": "h",
      "text": "Analysis of the six emails"
    },
    {
      "t": "table",
      "head": [
        "No.",
        "Sender",
        "Decisive clue",
        "Verdict"
      ],
      "rows": [
        [
          "1",
          "Payroll service",
          "Organization’s domain, internal link, passing checks",
          "Legitimate"
        ],
        [
          "2",
          "Bank",
          "Displayed link ≠ real domain (`banque-verif.example`), failed checks, urgency",
          "**Phishing**"
        ],
        [
          "3",
          "“CEO”",
          "External address, urgent and confidential transfer request",
          "**CEO fraud**"
        ],
        [
          "4",
          "Parcel",
          "`.pdf.exe` attachment, failed checks",
          "**Malware**"
        ],
        [
          "5",
          "Supplier",
          "Known sender, link on its own domain, passing checks",
          "Legitimate"
        ],
        [
          "6",
          "IT support",
          "Real domain `reset-portal.example` hidden behind a subdomain, although the checks pass",
          "**Phishing**"
        ]
      ]
    },
    {
      "t": "callout",
      "kind": "key",
      "title": "Reflex",
      "text": "Do not trust appearances: look at the link’s real domain, the nature of the request and the attachment. When in doubt, do not click, report, and verify through another channel."
    }
  ]
};
