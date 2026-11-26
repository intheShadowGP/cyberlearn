import type { LabCorrections } from '../../content/types';

export const corrections: LabCorrections = {
  "labId": "exposed-ports-lab",
  "questions": {
    "portlab-q1": {
      "type": "short",
      "accepted": [
        "2",
        "two"
      ],
      "explanation": "Two ports are to be closed: Telnet (23), which sends credentials in clear text, and SMB (445), whose exposure on the Internet has no justification. The other ports are justified or restricted."
    },
    "portlab-q2": {
      "type": "single",
      "correct": "b",
      "explanation": "Telnet has no encryption: credentials and commands travel in clear text and can be read by anyone on the path. It is replaced by SSH.",
      "whyWrong": {
        "a": "SSH encrypts exchanges.",
        "c": "HTTPS encrypts exchanges through TLS.",
        "d": "The remote desktop protocol encrypts exchanges, but direct exposure remains risky."
      }
    },
    "portlab-q3": {
      "type": "single",
      "correct": "b",
      "explanation": "A database must be reachable only from the machines that use it, through a firewall rule or an internal network. A password alone prevents neither brute-force attempts nor the exploitation of flaws.",
      "whyWrong": {
        "a": "A password is not sufficient protection for an exposed service.",
        "c": "Changing the port number does not hide the service from a scan.",
        "d": "Opening a second port increases exposure."
      }
    },
    "portlab-q4": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Here, port 80 serves to redirect to https: closing it would break access for people who type the address without a protocol. It is acceptable if it only redirects, without sensitive content."
    },
    "portlab-q5": {
      "type": "single",
      "correct": "b",
      "explanation": "Remote desktop is not exposed directly: you first require a VPN or a gateway with multi-factor authentication, which greatly reduces automated brute-force attacks.",
      "whyWrong": {
        "a": "A password alone remains vulnerable to mass attempts and leaks.",
        "c": "Closing with no alternative prevents remote work.",
        "d": "Changing the port number brings no real protection."
      }
    }
  },
  "debrief": [
    {
      "t": "h",
      "text": "Recommendation for each port"
    },
    {
      "t": "table",
      "head": [
        "Port",
        "Service",
        "Recommendation",
        "Reason"
      ],
      "rows": [
        [
          "22",
          "SSH",
          "Restrict",
          "Key authentication, access limited to known addresses or a VPN"
        ],
        [
          "23",
          "Telnet",
          "**Close**",
          "Credentials in clear text; replace with SSH"
        ],
        [
          "80",
          "HTTP",
          "Acceptable",
          "Redirect to HTTPS only"
        ],
        [
          "443",
          "HTTPS",
          "Acceptable",
          "Public service, up-to-date TLS"
        ],
        [
          "445",
          "SMB",
          "**Close**",
          "Windows shares never to be exposed to the Internet"
        ],
        [
          "3306",
          "MySQL",
          "Restrict",
          "Reachable only from the application server"
        ],
        [
          "3389",
          "RDP",
          "Restrict",
          "Behind a VPN or a gateway with MFA"
        ]
      ]
    },
    {
      "t": "callout",
      "kind": "key",
      "title": "Remember",
      "text": "Every open port is an attack surface. Only what the public must reach is left exposed to the Internet; everything else is closed or restricted, and a regular scan helps detect drift."
    }
  ]
};
