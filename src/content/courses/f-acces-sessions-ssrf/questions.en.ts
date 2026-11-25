// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.en.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "acc-q1",
    "prompt": "A customer reads another customer’s invoice by replacing `1043` with `1044` in the URL. What vulnerability is this?",
    "skills": [
      "f-access"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "An SSRF toward a service on the internal network"
      },
      {
        "id": "b",
        "text": "A reflected XSS in the displayed page"
      },
      {
        "id": "c",
        "text": "A SQL injection in the URL parameter"
      },
      {
        "id": "d",
        "text": "An IDOR (broken horizontal access)"
      }
    ]
  },
  {
    "id": "acc-q2",
    "prompt": "Replacing numeric identifiers with random UUIDs is enough to fix an IDOR.",
    "skills": [
      "f-access"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "acc-q3",
    "prompt": "Which measures fix or prevent access control flaws?",
    "skills": [
      "f-access"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Hiding the administration buttons from standard users"
      },
      {
        "id": "b",
        "text": "Denying by default any route without an explicit authorization rule"
      },
      {
        "id": "c",
        "text": "Limiting modifiable fields to an explicit list"
      },
      {
        "id": "d",
        "text": "Checking on the server, on every request, that the object belongs to the user"
      }
    ]
  },
  {
    "id": "acc-q4",
    "prompt": "Describe how you would test the access control of a case management application with “agent” and “supervisor” roles.",
    "skills": [
      "f-access",
      "f-csrf-cors"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "acc-q5",
    "prompt": "Which attribute prevents the page’s JavaScript from reading a session cookie?",
    "skills": [
      "f-session"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`HttpOnly`"
      },
      {
        "id": "b",
        "text": "`SameSite`"
      },
      {
        "id": "c",
        "text": "`Max-Age`"
      },
      {
        "id": "d",
        "text": "`Path=/`"
      }
    ]
  },
  {
    "id": "acc-q6",
    "prompt": "Which cookie name prefix imposes `Secure`, `Path=/` and no `Domain` attribute?",
    "skills": [
      "f-session"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "__…-"
  },
  {
    "id": "acc-q7",
    "prompt": "To prevent session fixation, a new session identifier must be generated at the time of authentication.",
    "skills": [
      "f-session"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "acc-q8",
    "prompt": "Which practices strengthen a web application’s authentication?",
    "skills": [
      "f-session"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "A random, single-use, short-lived reset token"
      },
      {
        "id": "b",
        "text": "Sending the password in clear by email after registration"
      },
      {
        "id": "c",
        "text": "The same error message for an unknown account and a wrong password"
      },
      {
        "id": "d",
        "text": "Attempt limiting and multi-factor authentication"
      }
    ]
  },
  {
    "id": "acc-q9",
    "prompt": "Why does a CSRF attack work without the attacker knowing the victim’s cookie?",
    "skills": [
      "f-csrf-cors"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The attacker guesses the cookie by brute force before sending the request"
      },
      {
        "id": "b",
        "text": "The browser automatically attaches the target site’s cookies"
      },
      {
        "id": "c",
        "text": "CORS passes the victim’s cookie directly to the attacker"
      },
      {
        "id": "d",
        "text": "The server sends the session cookie to every site that asks for it"
      }
    ]
  },
  {
    "id": "acc-q10",
    "prompt": "A restrictive CORS policy is enough to protect an application against CSRF.",
    "skills": [
      "f-csrf-cors"
    ],
    "difficulty": 3,
    "type": "truefalse"
  },
  {
    "id": "acc-q11",
    "prompt": "Which CORS configurations are dangerous for an API that uses session cookies?",
    "skills": [
      "f-csrf-cors"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Reflecting the received `Origin` header with `Access-Control-Allow-Credentials: true`"
      },
      {
        "id": "b",
        "text": "Allowing the `null` origin with credentials"
      },
      {
        "id": "c",
        "text": "A fixed list containing only the official front end’s origin"
      },
      {
        "id": "d",
        "text": "Accepting any origin that contains the domain name (`example.fr.attacker.example` passes)"
      }
    ]
  },
  {
    "id": "acc-q12",
    "prompt": "Which value of the SameSite attribute prevents the cookie from being sent on any cross-site request, including navigation by link?",
    "skills": [
      "f-csrf-cors"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "value"
  },
  {
    "id": "acc-q13",
    "prompt": "A “link preview” feature returns the content of `http://169.254.169.254/latest/meta-data/`. What is the main risk?",
    "skills": [
      "f-ssrf"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "None: this address is not routable on the Internet"
      },
      {
        "id": "b",
        "text": "A slowdown of the site while previews are generated"
      },
      {
        "id": "c",
        "text": "Theft of cloud credentials via the metadata service"
      },
      {
        "id": "d",
        "text": "A display error in the page’s style sheet"
      }
    ]
  },
  {
    "id": "acc-q14",
    "prompt": "Which defenses are effective against SSRF?",
    "skills": [
      "f-ssrf"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Allowlist of domains and of the `https` scheme"
      },
      {
        "id": "b",
        "text": "Outbound network filtering from the server"
      },
      {
        "id": "c",
        "text": "Checking the resolved IP address, then connecting to that same address"
      },
      {
        "id": "d",
        "text": "Refusing only the string “127.0.0.1” in the URL"
      }
    ]
  },
  {
    "id": "acc-q15",
    "prompt": "A route `GET /download?file=report.pdf` reads the file in `/srv/reports/`. Explain the possible vulnerability and propose two fixes, from the safest to the least safe.",
    "skills": [
      "f-ssrf",
      "f-access"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "acc-q16",
    "prompt": "What is the OWASP ASVS mainly used for?",
    "skills": [
      "f-api"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Encrypting the session cookies of web applications"
      },
      {
        "id": "b",
        "text": "Automatically scanning all the vulnerabilities of a site"
      },
      {
        "id": "c",
        "text": "Defining verifiable security requirements, by level"
      },
      {
        "id": "d",
        "text": "Replacing a web application firewall in production"
      }
    ]
  },
  {
    "id": "acc-q17",
    "prompt": "A standard user calls `POST /api/admin/users` and gets a 200 response. What flaw is this?",
    "skills": [
      "f-access"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A session fixation"
      },
      {
        "id": "b",
        "text": "A SQL injection in the route"
      },
      {
        "id": "c",
        "text": "A CORS misconfiguration"
      },
      {
        "id": "d",
        "text": "Broken vertical access"
      }
    ]
  },
  {
    "id": "acc-q18",
    "prompt": "Returning 404 rather than 403 for an object that does not belong to the user avoids revealing that this object exists.",
    "skills": [
      "f-access"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "acc-q19",
    "prompt": "What is mass assignment?",
    "skills": [
      "f-access"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Loading several objects in a single request to the database"
      },
      {
        "id": "b",
        "text": "Copying fields sent by the client into the object without a filter"
      },
      {
        "id": "c",
        "text": "Assigning the same role to all users of an application"
      },
      {
        "id": "d",
        "text": "Sending the same request to a large number of user accounts"
      }
    ]
  },
  {
    "id": "acc-q20",
    "prompt": "Which SameSite value do some browsers apply by default when the attribute is missing?",
    "skills": [
      "f-session"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`Lax`"
      },
      {
        "id": "b",
        "text": "`Strict`"
      },
      {
        "id": "c",
        "text": "None: the cookie is always sent"
      },
      {
        "id": "d",
        "text": "`None`"
      }
    ]
  },
  {
    "id": "acc-q21",
    "prompt": "Deleting the session cookie in the browser at logout is enough: no server-side action is needed.",
    "skills": [
      "f-session"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "acc-q22",
    "prompt": "Why must application state never be changed on a GET request?",
    "skills": [
      "f-csrf-cors"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It cannot be sent over an HTTPS connection"
      },
      {
        "id": "b",
        "text": "It is limited to 255 bytes by the HTTP protocol"
      },
      {
        "id": "c",
        "text": "It can be triggered by a link or an image"
      },
      {
        "id": "d",
        "text": "It never carries a cookie to the server"
      }
    ]
  },
  {
    "id": "acc-q23",
    "prompt": "Which measures protect against CSRF?",
    "skills": [
      "f-csrf-cors"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "`SameSite=Lax` or `Strict` on the session cookie"
      },
      {
        "id": "b",
        "text": "An anti-CSRF token tied to the session and checked on each request"
      },
      {
        "id": "c",
        "text": "Checking the `Origin` header on sensitive requests"
      },
      {
        "id": "d",
        "text": "A restrictive CORS policy used as the only protection"
      }
    ]
  },
  {
    "id": "acc-q24",
    "prompt": "Why is a denylist of addresses insufficient against SSRF?",
    "skills": [
      "f-ssrf"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It only applies to public IPv4 addresses"
      },
      {
        "id": "b",
        "text": "There are many equivalent spellings of an address"
      },
      {
        "id": "c",
        "text": "It is forbidden by the HTTP protocol standard"
      },
      {
        "id": "d",
        "text": "It also blocks legitimate requests the server must send"
      }
    ]
  },
  {
    "id": "acc-q25",
    "prompt": "What is the attack called in which a DNS name returns an allowed address at verification time, then an internal address at connection time? (two words)",
    "skills": [
      "f-ssrf"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "two words"
  },
  {
    "id": "acc-q26",
    "prompt": "An allowed external URL can redirect the server to an internal address if redirects are followed without a new check.",
    "skills": [
      "f-ssrf"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "acc-q27",
    "prompt": "Which vulnerability is in first position of the OWASP Top 10 dedicated to APIs?",
    "skills": [
      "f-api"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The absence of rate limiting"
      },
      {
        "id": "b",
        "text": "SQL injection in request parameters"
      },
      {
        "id": "c",
        "text": "Disclosure of the software version"
      },
      {
        "id": "d",
        "text": "Authorization failure on the object (BOLA)"
      }
    ]
  },
  {
    "id": "acc-q28",
    "prompt": "In an API with signed tokens, how must the server choose the verification algorithm?",
    "skills": [
      "f-api"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It imposes it itself, without reading the token’s"
      },
      {
        "id": "b",
        "text": "It applies the one indicated in the received token’s header"
      },
      {
        "id": "c",
        "text": "It tries all the known algorithms one after another"
      },
      {
        "id": "d",
        "text": "It accepts the “none” algorithm in a test environment"
      }
    ]
  },
  {
    "id": "acc-q29",
    "prompt": "Which measures are suited to securing an API?",
    "skills": [
      "f-api"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Authorization at the object and function level"
      },
      {
        "id": "b",
        "text": "Rate and size limiting of requests"
      },
      {
        "id": "c",
        "text": "Strict input validation by schema"
      },
      {
        "id": "d",
        "text": "Returning the complete object and letting the client hide the sensitive fields"
      }
    ]
  },
  {
    "id": "acc-q30",
    "prompt": "Which ASVS level is intended for the most critical applications? (number)",
    "skills": [
      "f-api"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "number"
  },
  {
    "id": "acc-q31",
    "prompt": "Which authentication factor best resists phishing?",
    "skills": [
      "f-auth-moderne"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A code sent by email to the account’s address"
      },
      {
        "id": "b",
        "text": "A secret question chosen at registration"
      },
      {
        "id": "c",
        "text": "A FIDO2 / WebAuthn key bound to the site’s domain"
      },
      {
        "id": "d",
        "text": "A six-digit code received by SMS on the phone"
      }
    ]
  },
  {
    "id": "acc-q32",
    "prompt": "In OAuth 2.0, what is the `state` parameter for?",
    "skills": [
      "f-auth-moderne"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Designating the rights requested by the application"
      },
      {
        "id": "b",
        "text": "Binding the response to the request to prevent a CSRF"
      },
      {
        "id": "c",
        "text": "Encrypting the access token returned by the authorization server"
      },
      {
        "id": "d",
        "text": "Indicating the lifetime of the issued access token"
      }
    ]
  },
  {
    "id": "acc-q33",
    "prompt": "The authorization server must compare `redirect_uri` to an exact list of registered URLs, with no partial match or wildcard.",
    "skills": [
      "f-auth-moderne"
    ],
    "difficulty": 3,
    "type": "truefalse"
  },
  {
    "id": "acc-q34",
    "prompt": "Which OAuth 2.0 extension, combined with the authorization code flow, prevents a third party from using an intercepted code? (acronym)",
    "skills": [
      "f-auth-moderne"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "acronym"
  },
  {
    "id": "acc-q35",
    "prompt": "Why must a password reset token be single-use and short-lived?",
    "skills": [
      "f-auth-moderne",
      "f-session"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "So that the user can remember it more easily"
      },
      {
        "id": "b",
        "text": "To avoid having to send it by email"
      },
      {
        "id": "c",
        "text": "So that it can be reused on other accounts"
      },
      {
        "id": "d",
        "text": "To limit the exploitation window if it leaks"
      }
    ]
  },
  {
    "id": "acc-q36",
    "prompt": "Which mistakes in an OAuth / OpenID Connect integration open the way to account takeover?",
    "skills": [
      "f-auth-moderne"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "A `redirect_uri` validated by prefix or simple string inclusion"
      },
      {
        "id": "b",
        "text": "No verification of the `state` parameter on return"
      },
      {
        "id": "c",
        "text": "Verifying the identity token’s signature"
      },
      {
        "id": "d",
        "text": "Using PKCE with a secret generated for each flow"
      }
    ]
  },
  {
    "id": "acc-q37",
    "prompt": "Which access log signal suggests object enumeration (IDOR)?",
    "skills": [
      "f-detection-acces"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "An account runs through consecutive identifiers with 403s"
      },
      {
        "id": "b",
        "text": "A traffic peak on Monday morning when offices open"
      },
      {
        "id": "c",
        "text": "A single access to the home page from a common browser"
      },
      {
        "id": "d",
        "text": "Spaced POST requests to the login page"
      }
    ]
  },
  {
    "id": "acc-q38",
    "prompt": "Automatic scanners easily detect access control flaws, without knowing the application’s business rules.",
    "skills": [
      "f-detection-acces",
      "f-access"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "acc-q39",
    "prompt": "Which elements should be logged to detect access control abuse?",
    "skills": [
      "f-detection-acces"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Role and privilege changes"
      },
      {
        "id": "b",
        "text": "The passwords typed during failed logins"
      },
      {
        "id": "c",
        "text": "Repeated authentication failures"
      },
      {
        "id": "d",
        "text": "Access denials, with the account, the target object and the address"
      }
    ]
  },
  {
    "id": "acc-q40",
    "prompt": "You have just fixed an IDOR on a billing API in production. How do you check that it was not exploited and prevent it from reappearing?",
    "skills": [
      "f-detection-acces",
      "f-access"
    ],
    "difficulty": 3,
    "type": "open"
  }
];
