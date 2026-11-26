// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.en.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "id-q1",
    "prompt": "A physical security key belongs to which category of factor?",
    "skills": [
      "o-mfa"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "What I have"
      },
      {
        "id": "b",
        "text": "Where I am today"
      },
      {
        "id": "c",
        "text": "What I truly am"
      },
      {
        "id": "d",
        "text": "What I know by heart"
      }
    ]
  },
  {
    "id": "id-q2",
    "prompt": "Which methods can be bypassed by a phishing proxy that relays the sign-in in real time?",
    "skills": [
      "o-mfa"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "FIDO2 passkey"
      },
      {
        "id": "b",
        "text": "Password alone"
      },
      {
        "id": "c",
        "text": "TOTP code from an app"
      },
      {
        "id": "d",
        "text": "SMS code"
      }
    ]
  },
  {
    "id": "id-q3",
    "prompt": "With FIDO2, the signature produced by the authenticator is bound to the site’s domain, which makes it unusable on a fake site.",
    "skills": [
      "o-mfa"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "id-q4",
    "prompt": "What is the attack that consists in sending repeated MFA notifications until the victim accepts one called? (two words)",
    "skills": [
      "o-mfa"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "two words"
  },
  {
    "id": "id-q15",
    "prompt": "Propose a step-by-step plan to deploy phishing-resistant authentication in a 1,000-person company, handling account recovery.",
    "skills": [
      "o-mfa",
      "o-authz"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "id-q31",
    "prompt": "A fingerprint belongs to which category of authentication factor?",
    "skills": [
      "o-mfa"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "What I know"
      },
      {
        "id": "b",
        "text": "Where I am"
      },
      {
        "id": "c",
        "text": "What I am"
      },
      {
        "id": "d",
        "text": "What I have"
      }
    ]
  },
  {
    "id": "id-q32",
    "prompt": "Why is account recovery often the weak link of a strong MFA?",
    "skills": [
      "o-mfa"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It is far too fast"
      },
      {
        "id": "b",
        "text": "It removes the password"
      },
      {
        "id": "c",
        "text": "It encrypts the whole account"
      },
      {
        "id": "d",
        "text": "It can bypass the strong factor"
      }
    ]
  },
  {
    "id": "id-q33",
    "prompt": "A passkey can replace the password, and not only serve as a second factor.",
    "skills": [
      "o-mfa"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "id-q5",
    "prompt": "Which protocol adds an authentication layer (id_token) on top of OAuth 2.0?",
    "skills": [
      "o-oauth"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "SAML 2.0"
      },
      {
        "id": "b",
        "text": "OpenID Connect"
      },
      {
        "id": "c",
        "text": "LDAP"
      },
      {
        "id": "d",
        "text": "Kerberos"
      }
    ]
  },
  {
    "id": "id-q6",
    "prompt": "A valid OAuth 2.0 access token proves the user’s identity to the client application.",
    "skills": [
      "o-oauth"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "id-q7",
    "prompt": "Which extension prevents an attacker who intercepted the authorization code from exchanging it for a token?",
    "skills": [
      "o-oauth"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "HSTS"
      },
      {
        "id": "b",
        "text": "PKCE"
      },
      {
        "id": "c",
        "text": "SameSite"
      },
      {
        "id": "d",
        "text": "CORS"
      }
    ]
  },
  {
    "id": "id-q8",
    "prompt": "Which OAuth parameter, random and verified on return, protects against CSRF on the sign-in flow?",
    "skills": [
      "o-oauth"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "one word"
  },
  {
    "id": "id-q9",
    "prompt": "Which controls must be verified on an id_token?",
    "skills": [
      "o-oauth"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "The audience (aud) equal to your own client_id"
      },
      {
        "id": "b",
        "text": "The issuer (iss)"
      },
      {
        "id": "c",
        "text": "The signature"
      },
      {
        "id": "d",
        "text": "The expiry (exp)"
      },
      {
        "id": "e",
        "text": "The color of the IdP’s logo"
      }
    ]
  },
  {
    "id": "id-q10",
    "prompt": "A victim accepted that an application “PDF Reader” read their mailbox. The password is changed, MFA is active. Does the attacker still have access?",
    "skills": [
      "o-oauth"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Yes, as long as the consent lasts"
      },
      {
        "id": "b",
        "text": "No, MFA blocks any activity"
      },
      {
        "id": "c",
        "text": "Only during the weekend"
      },
      {
        "id": "d",
        "text": "No, changing the password is enough"
      }
    ]
  },
  {
    "id": "id-q14",
    "prompt": "Spot the problems of the request `response_type=token` with the scopes `Mail.ReadWrite Files.ReadWrite.All` for a note-taking application, and propose the corrected configuration.",
    "skills": [
      "o-oauth",
      "o-authz"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "id-q34",
    "prompt": "What is the redirect_uri parameter of an OAuth request used for?",
    "skills": [
      "o-oauth"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "To set the user’s language"
      },
      {
        "id": "b",
        "text": "To give the client’s password"
      },
      {
        "id": "c",
        "text": "To indicate where to send the code back"
      },
      {
        "id": "d",
        "text": "To choose the token’s lifetime"
      }
    ]
  },
  {
    "id": "id-q35",
    "prompt": "Why is the implicit flow discouraged?",
    "skills": [
      "o-oauth"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It always imposes PKCE"
      },
      {
        "id": "b",
        "text": "It is far too secure"
      },
      {
        "id": "c",
        "text": "It encrypts all the cookies"
      },
      {
        "id": "d",
        "text": "The token travels in the URL"
      }
    ]
  },
  {
    "id": "id-q36",
    "prompt": "Which measures limit abuses of OAuth consent?",
    "skills": [
      "o-oauth"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Allow any application with no control"
      },
      {
        "id": "b",
        "text": "Reserve consent for validated applications"
      },
      {
        "id": "c",
        "text": "Regularly review authorized applications"
      },
      {
        "id": "d",
        "text": "Request minimal scopes"
      }
    ]
  },
  {
    "id": "id-q11",
    "prompt": "“A doctor can read a record if the patient is in their department and if they sign in from a managed workstation.” Which model is this?",
    "skills": [
      "o-authz"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "No known model"
      },
      {
        "id": "b",
        "text": "Discretionary DAC"
      },
      {
        "id": "c",
        "text": "ABAC"
      },
      {
        "id": "d",
        "text": "Plain RBAC"
      }
    ]
  },
  {
    "id": "id-q12",
    "prompt": "In a Zero Trust approach, a device connected to the company’s internal network automatically gets trusted access.",
    "skills": [
      "o-authz"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "id-q13",
    "prompt": "Which signals can a conditional access take into account?",
    "skills": [
      "o-authz"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "The session’s risk level"
      },
      {
        "id": "b",
        "text": "The authentication method used"
      },
      {
        "id": "c",
        "text": "The user’s wallpaper"
      },
      {
        "id": "d",
        "text": "The device’s compliance"
      }
    ]
  },
  {
    "id": "id-q16",
    "prompt": "Which NIST publication defines the Zero Trust architecture? (SP 800-…)",
    "skills": [
      "o-authz",
      "o-mfa"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "SP 800-…"
  },
  {
    "id": "id-q37",
    "prompt": "An employee only needs to view a dashboard. Which right should they be given?",
    "skills": [
      "o-authz"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A global administration right"
      },
      {
        "id": "b",
        "text": "A read right on this dashboard"
      },
      {
        "id": "c",
        "text": "A write right on the whole site"
      },
      {
        "id": "d",
        "text": "A right to delete accounts"
      }
    ]
  },
  {
    "id": "id-q38",
    "prompt": "What limitation does RBAC have when roles multiply?",
    "skills": [
      "o-authz"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Roles that are hard to audit"
      },
      {
        "id": "b",
        "text": "A dependence on local Wi-Fi"
      },
      {
        "id": "c",
        "text": "Far too slow encryption"
      },
      {
        "id": "d",
        "text": "A total absence of rights"
      }
    ]
  },
  {
    "id": "id-q39",
    "prompt": "In a Zero Trust architecture, which component decides whether to grant access?",
    "skills": [
      "o-authz"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The main network cable"
      },
      {
        "id": "b",
        "text": "The workstation’s wallpaper"
      },
      {
        "id": "c",
        "text": "The department’s printer"
      },
      {
        "id": "d",
        "text": "The decision point"
      }
    ]
  },
  {
    "id": "id-q40",
    "prompt": "A conditional access can impose restrictions on a sign-in from an unmanaged device.",
    "skills": [
      "o-authz"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "id-q17",
    "prompt": "Which life-cycle events of an identity (JML) must be managed?",
    "skills": [
      "o-iga"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Game, music, reading"
      },
      {
        "id": "b",
        "text": "Email, calendar, tasks"
      },
      {
        "id": "c",
        "text": "Arrival, move, departure"
      },
      {
        "id": "d",
        "text": "Monday, Tuesday, Wednesday"
      }
    ]
  },
  {
    "id": "id-q18",
    "prompt": "Which standard automates the provisioning of accounts between a directory and applications?",
    "skills": [
      "o-iga"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "HTTP"
      },
      {
        "id": "b",
        "text": "SCIM"
      },
      {
        "id": "c",
        "text": "SMTP"
      },
      {
        "id": "d",
        "text": "DNS"
      }
    ]
  },
  {
    "id": "id-q19",
    "prompt": "Why quickly delete dormant accounts?",
    "skills": [
      "o-iga"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "They are hijacked without alert"
      },
      {
        "id": "b",
        "text": "They consume electricity"
      },
      {
        "id": "c",
        "text": "They are forbidden by law"
      },
      {
        "id": "d",
        "text": "They slow down passwords"
      }
    ]
  },
  {
    "id": "id-q20",
    "prompt": "Which source must automatically trigger a person’s departure in the directory?",
    "skills": [
      "o-iga"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A poster in the corridor"
      },
      {
        "id": "b",
        "text": "An oral request to support"
      },
      {
        "id": "c",
        "text": "A colleague’s email"
      },
      {
        "id": "d",
        "text": "The HR system"
      }
    ]
  },
  {
    "id": "id-q21",
    "prompt": "A periodic access certification asks managers to confirm their teams’ rights.",
    "skills": [
      "o-iga"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "id-q22",
    "prompt": "Which practices strengthen identity governance?",
    "skills": [
      "o-iga"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Automatic removal at the end of the contract"
      },
      {
        "id": "b",
        "text": "Creating accounts on a simple oral request"
      },
      {
        "id": "c",
        "text": "Automatic provisioning from HR"
      },
      {
        "id": "d",
        "text": "Periodic certification of rights"
      }
    ]
  },
  {
    "id": "id-q23",
    "prompt": "Which three-letter acronym designates identity governance and administration? (acronym)",
    "skills": [
      "o-iga"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "acronym"
  },
  {
    "id": "id-q24",
    "prompt": "What does an attacker who hijacks an already authenticated session steal?",
    "skills": [
      "o-sessions"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The name of the workstation’s screen"
      },
      {
        "id": "b",
        "text": "The cookie or token"
      },
      {
        "id": "c",
        "text": "The keyboard model in use"
      },
      {
        "id": "d",
        "text": "The workstation’s wallpaper"
      }
    ]
  },
  {
    "id": "id-q25",
    "prompt": "Why limit the lifetime of an access token?",
    "skills": [
      "o-sessions"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Reduce the impact of a theft"
      },
      {
        "id": "b",
        "text": "Save bandwidth"
      },
      {
        "id": "c",
        "text": "Speed up authentication"
      },
      {
        "id": "d",
        "text": "Remove the need for MFA"
      }
    ]
  },
  {
    "id": "id-q26",
    "prompt": "What does continuous access evaluation allow?",
    "skills": [
      "o-sessions"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Disable the account’s MFA"
      },
      {
        "id": "b",
        "text": "Lengthen the tokens’ lifetime"
      },
      {
        "id": "c",
        "text": "Remove all logging"
      },
      {
        "id": "d",
        "text": "Revoke if the risk increases"
      }
    ]
  },
  {
    "id": "id-q27",
    "prompt": "How can the reuse of a stolen token on another device be limited?",
    "skills": [
      "o-sessions"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Publish it in the logs"
      },
      {
        "id": "b",
        "text": "Share it by email"
      },
      {
        "id": "c",
        "text": "Bind it to a device key"
      },
      {
        "id": "d",
        "text": "Display it on the workstation screen"
      }
    ]
  },
  {
    "id": "id-q28",
    "prompt": "Changing your password is always enough to invalidate sessions already open.",
    "skills": [
      "o-sessions"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "id-q29",
    "prompt": "Which signals reveal a possible session hijacking?",
    "skills": [
      "o-sessions"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Sudden change of user agent and address"
      },
      {
        "id": "b",
        "text": "New device followed by an email forwarding rule"
      },
      {
        "id": "c",
        "text": "“Impossible” sign-in from two countries in a short time"
      },
      {
        "id": "d",
        "text": "Usual sign-in from the managed workstation"
      }
    ]
  },
  {
    "id": "id-q30",
    "prompt": "Which word designates the immediate invalidation of a token or a session? (one word)",
    "skills": [
      "o-sessions"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "one word"
  }
];
