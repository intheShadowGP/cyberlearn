import type { LabCorrections } from '../../content/types';

export const corrections: LabCorrections = {
  "labId": "dns-zone-lab",
  "questions": {
    "dnslab-q1": {
      "type": "short",
      "accepted": [
        "4",
        "four"
      ],
      "explanation": "Four flaws: permissive SPF (no. 5), orphaned CNAME (no. 6), published private address (no. 7) and missing DMARC."
    },
    "dnslab-q2": {
      "type": "single",
      "correct": "a",
      "explanation": "`+all` authorizes every sender: the SPF check then protects nothing. You list the allowed servers and end with `-all` (reject) or `~all` (soft fail).",
      "whyWrong": {
        "b": "That is the role of `v=spf1 -all` alone.",
        "c": "You would have to list that server and end with `-all`.",
        "d": "SPF encrypts nothing; it authenticates the origin of mail."
      }
    },
    "dnslab-q3": {
      "type": "single",
      "correct": "a",
      "explanation": "If the target service was deleted but the record remains, an attacker can create an account at the provider, claim that name, and serve content (phishing, cookie theft) under your domain: this is subdomain takeover. Orphaned records are removed.",
      "whyWrong": {
        "b": "DNS will keep working.",
        "c": "Mail depends on MX and SPF records.",
        "d": "The domain is not deleted: it is a subdomain that is exposed."
      }
    },
    "dnslab-q4": {
      "type": "single",
      "correct": "a",
      "explanation": "A private address is not reachable from the Internet but informs an attacker about internal addressing and service names. Internal names belong in an internal DNS zone (separate view).",
      "whyWrong": {
        "b": "A private address is not accessible from the Internet.",
        "c": "The syntax is correct; the content is the problem.",
        "d": "There is no obligation to publish this name."
      }
    },
    "dnslab-q5": {
      "type": "truefalse",
      "correct": true,
      "explanation": "DMARC publishes a policy (`none`, `quarantine` or `reject`) and a reporting address. It complements SPF and DKIM by giving the recipient the instruction to follow for messages impersonating your domain."
    }
  },
  "debrief": [
    {
      "t": "h",
      "text": "Zone flaws and fixes"
    },
    {
      "t": "table",
      "head": [
        "Record",
        "Flaw",
        "Fix"
      ],
      "rows": [
        [
          "no. 5, `v=spf1 +all`",
          "Every sender is authorized",
          "`v=spf1 ip4:203.0.113.25 -all`"
        ],
        [
          "no. 6, `ancienne-boutique`",
          "Orphaned CNAME: takeover possible",
          "Delete the record"
        ],
        [
          "no. 7, `intranet`",
          "Private address published",
          "Move to an internal zone"
        ],
        [
          "(absent)",
          "No DMARC",
          "`_dmarc`: `v=DMARC1; p=quarantine; rua=…`"
        ]
      ]
    },
    {
      "t": "callout",
      "kind": "key",
      "title": "Remember",
      "text": "A DNS zone is infrastructure code: you review it, remove what is no longer used and publish mail policies (SPF, DKIM, DMARC) to prevent spoofing of the domain."
    }
  ]
};
