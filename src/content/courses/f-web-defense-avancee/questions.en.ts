// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.en.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "fwa-q1",
    "prompt": "What does the attack surface of a web application represent?",
    "skills": [
      "f-exp-menace"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The number of lines of code written by the development team"
      },
      {
        "id": "b",
        "text": "The entry points and components an attacker can reach"
      },
      {
        "id": "c",
        "text": "The list of users allowed to log in to the application"
      },
      {
        "id": "d",
        "text": "The total size of the files the server sends to visitors"
      }
    ]
  },
  {
    "id": "fwa-q2",
    "prompt": "In the STRIDE method, which letter designates identity impersonation?",
    "skills": [
      "f-exp-menace"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "S, for Spoofing"
      },
      {
        "id": "b",
        "text": "E, for Elevation of privilege"
      },
      {
        "id": "c",
        "text": "R, for Repudiation"
      },
      {
        "id": "d",
        "text": "T, for Tampering"
      }
    ]
  },
  {
    "id": "fwa-q3",
    "prompt": "Threat modeling is more effective when done at design time, before writing the code.",
    "skills": [
      "f-exp-menace"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "fwa-q4",
    "prompt": "Which elements does a data flow diagram help to spot?",
    "skills": [
      "f-exp-menace"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "The data stores and the external actors"
      },
      {
        "id": "b",
        "text": "The trust boundaries"
      },
      {
        "id": "c",
        "text": "The sensitive data flows"
      },
      {
        "id": "d",
        "text": "The color of the users’ interface"
      }
    ]
  },
  {
    "id": "fwa-q5",
    "prompt": "Which modeling method sorts threats into six categories including spoofing, tampering and denial of service? (acronym)",
    "skills": [
      "f-exp-menace"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "acronym"
  },
  {
    "id": "fwa-q6",
    "prompt": "Which of these risks falls under elevation of privilege in STRIDE?",
    "skills": [
      "f-exp-menace"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A service is saturated by too many requests"
      },
      {
        "id": "b",
        "text": "An attacker changes a price in the request sent to the server"
      },
      {
        "id": "c",
        "text": "An ordinary user reaches an administration function"
      },
      {
        "id": "d",
        "text": "An attacker impersonates another legitimate user"
      }
    ]
  },
  {
    "id": "fwa-q7",
    "prompt": "ASVS level 3 applies to all applications, whatever their use and the sensitivity of their data.",
    "skills": [
      "f-exp-menace"
    ],
    "difficulty": 3,
    "type": "truefalse"
  },
  {
    "id": "fwa-q8",
    "prompt": "What does an HTTP desynchronization attack (request smuggling) exploit?",
    "skills": [
      "f-exp-protocole"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A weakness of the TLS encryption used between the two machines"
      },
      {
        "id": "b",
        "text": "A syntax error in the page’s style sheet"
      },
      {
        "id": "c",
        "text": "A password reused across several network components"
      },
      {
        "id": "d",
        "text": "A disagreement between the proxy and the server on a request’s end"
      }
    ]
  },
  {
    "id": "fwa-q9",
    "prompt": "Which header, present together with `Content-Length`, creates the ambiguity of HTTP desynchronization?",
    "skills": [
      "f-exp-protocole"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "header name"
  },
  {
    "id": "fwa-q10",
    "prompt": "What is web cache poisoning?",
    "skills": [
      "f-exp-protocole"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Getting a cache to store a booby-trapped response served to others"
      },
      {
        "id": "b",
        "text": "Forcibly deleting all the entries present in the cache"
      },
      {
        "id": "c",
        "text": "Saturating the cache memory to slow down the whole site"
      },
      {
        "id": "d",
        "text": "Encrypting the cache content with a key chosen by the attacker"
      }
    ]
  },
  {
    "id": "fwa-q11",
    "prompt": "Building a password reset link with the received `Host` header, without checking it, lets an attacker divert that link.",
    "skills": [
      "f-exp-protocole"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "fwa-q12",
    "prompt": "Which measures reduce the risk of HTTP desynchronization?",
    "skills": [
      "f-exp-protocole"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Keeping the proxy and the application server up to date"
      },
      {
        "id": "b",
        "text": "Accepting malformed requests without checks to keep the traffic"
      },
      {
        "id": "c",
        "text": "Using HTTP/2 end to end between the proxy and the server"
      },
      {
        "id": "d",
        "text": "Rejecting ambiguous requests that carry both length headers"
      }
    ]
  },
  {
    "id": "fwa-q13",
    "prompt": "What is web cache deception?",
    "skills": [
      "f-exp-protocole"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Hijacking a site’s certificate to intercept its traffic"
      },
      {
        "id": "b",
        "text": "Bypassing authentication by sending an unusual cookie"
      },
      {
        "id": "c",
        "text": "Inserting a script into a public page cached by a CDN"
      },
      {
        "id": "d",
        "text": "Getting a private page stored that others can then read"
      }
    ]
  },
  {
    "id": "fwa-q14",
    "prompt": "Why is an open redirect useful to an attacker?",
    "skills": [
      "f-exp-protocole"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It lets them read the visitors’ cookie contents"
      },
      {
        "id": "b",
        "text": "It gives them access to the server’s files without authentication"
      },
      {
        "id": "c",
        "text": "It gives a legitimate link a destination they choose"
      },
      {
        "id": "d",
        "text": "It disables TLS encryption for the page concerned"
      }
    ]
  },
  {
    "id": "fwa-q15",
    "prompt": "What does `strict-dynamic` bring when combined with a nonce in a CSP?",
    "skills": [
      "f-exp-navigateur"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It encrypts the scripts before sending them to the browser"
      },
      {
        "id": "b",
        "text": "Scripts approved by nonce can load others"
      },
      {
        "id": "c",
        "text": "It completely disables the content security policy"
      },
      {
        "id": "d",
        "text": "It allows all the inline scripts of the visited page"
      }
    ]
  },
  {
    "id": "fwa-q16",
    "prompt": "What are Trusted Types for?",
    "skills": [
      "f-exp-navigateur"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Forbidding unvalidated strings from entering the DOM"
      },
      {
        "id": "b",
        "text": "Guaranteeing that a TLS certificate was issued by a recognized authority"
      },
      {
        "id": "c",
        "text": "Digitally signing the cookies sent by the server"
      },
      {
        "id": "d",
        "text": "Identifying trusted users by their email address"
      }
    ]
  },
  {
    "id": "fwa-q17",
    "prompt": "Which request header, prefixed `Sec-Fetch-`, indicates whether the request is cross-site, same-site or same-origin?",
    "skills": [
      "f-exp-navigateur"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "Sec-Fetch-…"
  },
  {
    "id": "fwa-q18",
    "prompt": "A CSP nonce can stay identical from one page to the next, as long as it is long.",
    "skills": [
      "f-exp-navigateur"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "fwa-q19",
    "prompt": "Which headers contribute to a page’s cross-origin isolation?",
    "skills": [
      "f-exp-navigateur"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "`Cache-Control: no-store` used alone"
      },
      {
        "id": "b",
        "text": "`Cross-Origin-Opener-Policy`"
      },
      {
        "id": "c",
        "text": "`Cross-Origin-Embedder-Policy`"
      },
      {
        "id": "d",
        "text": "`X-Powered-By`"
      }
    ]
  },
  {
    "id": "fwa-q20",
    "prompt": "What is the `integrity` attribute (SRI) of a script tag for?",
    "skills": [
      "f-exp-navigateur"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Limiting the script’s execution to some logged-in users"
      },
      {
        "id": "b",
        "text": "Checking that the third-party file has not been modified, by hash"
      },
      {
        "id": "c",
        "text": "Reducing the size of the script file to speed up loading"
      },
      {
        "id": "d",
        "text": "Encrypting the script file between the server and the browser"
      }
    ]
  },
  {
    "id": "fwa-q21",
    "prompt": "Why is a host list in `script-src` less robust than a nonce?",
    "skills": [
      "f-exp-navigateur"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A host list requires using HTTP instead of HTTPS"
      },
      {
        "id": "b",
        "text": "A host list always slows down the loading of pages"
      },
      {
        "id": "c",
        "text": "An allowed host may host exploitable entry points"
      },
      {
        "id": "d",
        "text": "Browsers do not understand host lists in the CSP"
      }
    ]
  },
  {
    "id": "fwa-q22",
    "prompt": "Which measure limits the abuse of a GraphQL API through deeply nested requests?",
    "skills": [
      "f-exp-api"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Publishing the whole schema so everyone can assess it"
      },
      {
        "id": "b",
        "text": "Allowing an unlimited number of fields in each request"
      },
      {
        "id": "c",
        "text": "Disabling type validation in the schema"
      },
      {
        "id": "d",
        "text": "Limiting the depth and cost of accepted requests"
      }
    ]
  },
  {
    "id": "fwa-q23",
    "prompt": "Leaving GraphQL introspection enabled in production has no security consequence.",
    "skills": [
      "f-exp-api"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "fwa-q24",
    "prompt": "What is a cross-site WebSocket hijacking (CSWSH)?",
    "skills": [
      "f-exp-api"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A server sends too many messages and saturates the browser"
      },
      {
        "id": "b",
        "text": "A third-party site opens the connection with the victim’s cookies"
      },
      {
        "id": "c",
        "text": "A client stays connected after the browser is closed"
      },
      {
        "id": "d",
        "text": "An attacker reads the messages of an encrypted WebSocket connection"
      }
    ]
  },
  {
    "id": "fwa-q25",
    "prompt": "Which checks protect a REST API?",
    "skills": [
      "f-exp-api"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Rate limiting per client"
      },
      {
        "id": "b",
        "text": "An explicit list of modifiable fields"
      },
      {
        "id": "c",
        "text": "Returning all the object’s properties by default"
      },
      {
        "id": "d",
        "text": "Authorization at the object and function level"
      }
    ]
  },
  {
    "id": "fwa-q26",
    "prompt": "Which acronym designates broken object-level authorization, the first flaw of the OWASP API Top 10? (acronym)",
    "skills": [
      "f-exp-api"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "acronym"
  },
  {
    "id": "fwa-q27",
    "prompt": "Why do GraphQL aliases make it easier to bypass rate limiting?",
    "skills": [
      "f-exp-api"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Aliases disable the logging of received requests"
      },
      {
        "id": "b",
        "text": "Aliases encrypt requests so the server cannot read them"
      },
      {
        "id": "c",
        "text": "One HTTP request contains hundreds of operations counted once"
      },
      {
        "id": "d",
        "text": "Aliases change the IP address seen by the server"
      }
    ]
  },
  {
    "id": "fwa-q28",
    "prompt": "What does a sender-bound access token (mTLS, DPoP) bring?",
    "skills": [
      "f-exp-api"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A token readable by any service in the company"
      },
      {
        "id": "b",
        "text": "A token that never expires and is never renewed"
      },
      {
        "id": "c",
        "text": "A token that replaces the users’ authentication"
      },
      {
        "id": "d",
        "text": "A stolen token is unusable without the client’s key"
      }
    ]
  },
  {
    "id": "fwa-q29",
    "prompt": "What is package typosquatting?",
    "skills": [
      "f-exp-chaine"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Publishing a package named close to a popular one to trap people"
      },
      {
        "id": "b",
        "text": "Locking a package’s version in the dependency file"
      },
      {
        "id": "c",
        "text": "Digitally signing a package before its official publication"
      },
      {
        "id": "d",
        "text": "Automatically correcting typos in package names"
      }
    ]
  },
  {
    "id": "fwa-q30",
    "prompt": "A version lock file makes installs reproducible and limits unexpected updates.",
    "skills": [
      "f-exp-chaine"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "fwa-q31",
    "prompt": "Which measures reduce the risk of third-party scripts on a payment page?",
    "skills": [
      "f-exp-chaine"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Allowing scripts from any origin"
      },
      {
        "id": "b",
        "text": "Subresource integrity (SRI) when possible"
      },
      {
        "id": "c",
        "text": "A strict CSP that limits script sources"
      },
      {
        "id": "d",
        "text": "Reducing the number of third-party scripts loaded"
      }
    ]
  },
  {
    "id": "fwa-q32",
    "prompt": "What name designates the attacks that insert a card-data theft script into a commerce site, often through a third-party script?",
    "skills": [
      "f-exp-chaine"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "name"
  },
  {
    "id": "fwa-q33",
    "prompt": "What does a software bill of materials (SBOM) provide?",
    "skills": [
      "f-exp-chaine"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The encrypted backup of the application’s whole source code"
      },
      {
        "id": "b",
        "text": "The log of attacks detected on the site over the month"
      },
      {
        "id": "c",
        "text": "The list of components and versions, to assess exposure to a flaw"
      },
      {
        "id": "d",
        "text": "The list of users allowed to modify the application’s code"
      }
    ]
  },
  {
    "id": "fwa-q34",
    "prompt": "Where must an API’s secret key never be placed?",
    "skills": [
      "f-exp-chaine"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "In the JavaScript code sent to the browser"
      },
      {
        "id": "b",
        "text": "In a secrets vault used by the server"
      },
      {
        "id": "c",
        "text": "In an environment variable of the back-end service"
      },
      {
        "id": "d",
        "text": "In a secrets manager of the deployment tool"
      }
    ]
  },
  {
    "id": "fwa-q35",
    "prompt": "What is the benefit of structured logging (for example in JSON)?",
    "skills": [
      "f-exp-detection"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Reducing the size of files to save space"
      },
      {
        "id": "b",
        "text": "Making search, correlation and alerts easier"
      },
      {
        "id": "c",
        "text": "Preventing administrators from reading the logs at all"
      },
      {
        "id": "d",
        "text": "Removing the need to keep the access logs"
      }
    ]
  },
  {
    "id": "fwa-q36",
    "prompt": "What is the virtual patching of a web application firewall?",
    "skills": [
      "f-exp-detection"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Encrypting the exchanges between the firewall and the application server"
      },
      {
        "id": "b",
        "text": "Permanently replacing the vulnerable code with safe code"
      },
      {
        "id": "c",
        "text": "Automatically installing the updates of all the libraries"
      },
      {
        "id": "d",
        "text": "Blocking a known exploitation with a rule while waiting for the fix"
      }
    ]
  },
  {
    "id": "fwa-q37",
    "prompt": "A properly tuned web application firewall removes the need to fix the code’s vulnerabilities.",
    "skills": [
      "f-exp-detection"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "fwa-q38",
    "prompt": "Which actions follow the discovery of a webshell on a web server?",
    "skills": [
      "f-exp-detection"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Identifying the entry flaw and fixing it"
      },
      {
        "id": "b",
        "text": "Changing the secrets accessible from the server"
      },
      {
        "id": "c",
        "text": "Deleting the file without investigating, then putting it back online"
      },
      {
        "id": "d",
        "text": "Isolating the server and keeping the evidence"
      }
    ]
  },
  {
    "id": "fwa-q39",
    "prompt": "You must design the security plan of an online shop with a public site, an API, a third-party payment and a back office. Present your approach from modeling to detection.",
    "skills": [
      "f-exp-menace",
      "f-exp-detection"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "fwa-q40",
    "prompt": "A third-party audience measurement script, loaded on your payment page, has been compromised. Describe how you detect it, respond to it and prevent a recurrence.",
    "skills": [
      "f-exp-chaine",
      "f-exp-detection"
    ],
    "difficulty": 3,
    "type": "open"
  }
];
