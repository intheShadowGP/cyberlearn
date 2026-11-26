import type { LabCorrections } from '../../content/types';

export const corrections: LabCorrections = {
  "labId": "http-headers-lab",
  "questions": {
    "httplab-q1": {
      "type": "short",
      "accepted": [
        "9",
        "nine"
      ],
      "explanation": "Nine flaws: four missing protection headers (HSTS, CSP, nosniff, Referrer-Policy), three missing cookie attributes (Secure, HttpOnly, SameSite) and two information leaks (server version and technology)."
    },
    "httplab-q2": {
      "type": "single",
      "correct": "b",
      "explanation": "`HttpOnly` makes the cookie inaccessible to JavaScript: if a script is injected (XSS), it cannot read the session identifier. `Secure` enforces HTTPS, `SameSite` limits cross-site sending.",
      "whyWrong": {
        "a": "`Secure` enforces HTTPS for sending the cookie, but does not prevent reading by a script.",
        "c": "`SameSite` limits sending the cookie in cross-site requests (protection against forged requests).",
        "d": "`Path` limits the paths that receive the cookie, with no effect on reading by a script."
      }
    },
    "httplab-q3": {
      "type": "single",
      "correct": "b",
      "explanation": "HSTS tells the browser to use only HTTPS for the site for the indicated duration, which prevents downgrade to plain HTTP. Encryption itself is provided by TLS.",
      "whyWrong": {
        "a": "Encryption is provided by TLS, not by HSTS.",
        "c": "That is the job of `X-Frame-Options` or the `frame-ancestors` directive.",
        "d": "That is the job of `Content-Security-Policy`."
      }
    },
    "httplab-q4": {
      "type": "truefalse",
      "correct": false,
      "explanation": "It reveals the technology and its version: an attacker can look for the known flaws of that precise version. It is useless to the site’s function and should be removed."
    },
    "httplab-q5": {
      "type": "single",
      "correct": "b",
      "explanation": "CSP tells the browser which origins of scripts, images or frames are allowed. A script injected from a disallowed origin is blocked: it is defense in depth against XSS, and does not replace output encoding.",
      "whyWrong": {
        "a": "CSP encrypts nothing.",
        "c": "Hiding the version is done in the server configuration.",
        "d": "CSP is not meant for performance."
      }
    }
  },
  "debrief": [
    {
      "t": "h",
      "text": "Flaws of the original response and fixes"
    },
    {
      "t": "table",
      "head": [
        "Flaw",
        "Fix"
      ],
      "rows": [
        [
          "No HSTS",
          "`Strict-Transport-Security: max-age=31536000; includeSubDomains`"
        ],
        [
          "No CSP",
          "`Content-Security-Policy: default-src 'self'` (to adapt to the site)"
        ],
        [
          "No nosniff",
          "`X-Content-Type-Options: nosniff`"
        ],
        [
          "No Referrer-Policy",
          "`Referrer-Policy: strict-origin-when-cross-origin`"
        ],
        [
          "Weak cookie",
          "`Set-Cookie: session=…; Path=/; Secure; HttpOnly; SameSite=Lax`"
        ],
        [
          "Server version",
          "`Server: web` (or remove the header)"
        ],
        [
          "Technology revealed",
          "Remove `X-Powered-By`"
        ]
      ]
    },
    {
      "t": "callout",
      "kind": "key",
      "title": "Remember",
      "text": "These headers replace neither input validation nor output encoding: they are additional protections, enabled by simple server configuration."
    }
  ]
};
