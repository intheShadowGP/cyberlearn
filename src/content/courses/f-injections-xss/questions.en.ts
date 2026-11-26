// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.en.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "web-q1",
    "prompt": "What is the cause common to all injections?",
    "skills": [
      "f-inj-cause"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Untrusted data interpreted as code by another component"
      },
      {
        "id": "b",
        "text": "A password that is too short, chosen by the site’s users"
      },
      {
        "id": "c",
        "text": "A server whose system has not been updated for a long time"
      },
      {
        "id": "d",
        "text": "Encryption that is too weak to protect the stored data"
      }
    ]
  },
  {
    "id": "web-q2",
    "prompt": "Validating inputs in JavaScript in the browser is enough to protect against injections.",
    "skills": [
      "f-inj-cause"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "web-q3",
    "prompt": "Which data sources must be considered untrusted?",
    "skills": [
      "f-inj-cause"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "The responses of a third-party API called by the server"
      },
      {
        "id": "b",
        "text": "HTTP headers sent by the client (User-Agent, Referer)"
      },
      {
        "id": "c",
        "text": "A constant defined in the application’s source code"
      },
      {
        "id": "d",
        "text": "The cookies received with each request"
      }
    ]
  },
  {
    "id": "web-q4",
    "prompt": "In a query `… WHERE login = '` + input + `' AND …`, which username bypasses the password check?",
    "skills": [
      "f-sqli"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`admin%00`"
      },
      {
        "id": "b",
        "text": "`admin`"
      },
      {
        "id": "c",
        "text": "`admin' -- `"
      },
      {
        "id": "d",
        "text": "`<script>admin</script>`"
      }
    ]
  },
  {
    "id": "web-q5",
    "prompt": "What are SQL queries called whose values are sent separately from the query text? (two words)",
    "skills": [
      "f-sqli"
    ],
    "difficulty": 1,
    "type": "short",
    "placeholder": "two words"
  },
  {
    "id": "web-q6",
    "prompt": "A column name used in an ORDER BY can be sent as a bound parameter of a prepared query.",
    "skills": [
      "f-sqli"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "web-q7",
    "prompt": "The page consistently takes 5 seconds longer to respond when `' AND SLEEP(5) -- ` is added to the parameter. What is it?",
    "skills": [
      "f-sqli"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Normal caching behavior"
      },
      {
        "id": "b",
        "text": "A stored XSS in the page"
      },
      {
        "id": "c",
        "text": "A network denial-of-service attack"
      },
      {
        "id": "d",
        "text": "A time-based blind SQL injection"
      }
    ]
  },
  {
    "id": "web-q8",
    "prompt": "`el.innerHTML = location.hash.slice(1)` is vulnerable to which type of XSS?",
    "skills": [
      "f-xss"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Stored in the database"
      },
      {
        "id": "b",
        "text": "DOM-based"
      },
      {
        "id": "c",
        "text": "Reflected on the server side"
      },
      {
        "id": "d",
        "text": "None, as the fragment is not sent to the server"
      }
    ]
  },
  {
    "id": "web-q9",
    "prompt": "What can a script injected by XSS do in the victim’s page?",
    "skills": [
      "f-xss"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Read a cookie marked HttpOnly through document.cookie"
      },
      {
        "id": "b",
        "text": "Send requests to the site on behalf of the victim"
      },
      {
        "id": "c",
        "text": "Display a fake login form on the real domain"
      },
      {
        "id": "d",
        "text": "Read the page content and the displayed data"
      }
    ]
  },
  {
    "id": "web-q10",
    "prompt": "Which DOM property should be used instead of innerHTML to insert text without interpreting it?",
    "skills": [
      "f-xss"
    ],
    "difficulty": 1,
    "type": "short",
    "placeholder": "property"
  },
  {
    "id": "web-q11",
    "prompt": "Encoding the HTML characters (`<`, `>`, `&`) is enough to secure a value inserted in the `href` attribute of a link.",
    "skills": [
      "f-xss",
      "f-inj-cause"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "web-q12",
    "prompt": "Which CSP directive cancels most of the protection against XSS if it appears in script-src?",
    "skills": [
      "f-csp"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`'none'`"
      },
      {
        "id": "b",
        "text": "`https:` limited to one specific domain"
      },
      {
        "id": "c",
        "text": "`'unsafe-inline'`"
      },
      {
        "id": "d",
        "text": "`'self'`"
      }
    ]
  },
  {
    "id": "web-q13",
    "prompt": "Which measures reduce the impact of an XSS?",
    "skills": [
      "f-csp"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Using nonces for the few inline scripts that are needed"
      },
      {
        "id": "b",
        "text": "A CSP without 'unsafe-inline'"
      },
      {
        "id": "c",
        "text": "Base64 encoding of the server’s responses"
      },
      {
        "id": "d",
        "text": "HttpOnly session cookies"
      }
    ]
  },
  {
    "id": "web-q14",
    "prompt": "A developer proposes to fix a SQL injection by replacing each apostrophe with two apostrophes. Explain why this is not satisfactory and what you recommend.",
    "skills": [
      "f-sqli",
      "f-inj-cause"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "web-q15",
    "prompt": "You must deploy a strict CSP on an existing application that contains many inline scripts. Describe your approach so as not to break production.",
    "skills": [
      "f-csp",
      "f-xss"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "web-q16",
    "prompt": "Which CSP directive protects against clickjacking?",
    "skills": [
      "f-csp",
      "f-xss"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`connect-src`"
      },
      {
        "id": "b",
        "text": "`frame-ancestors`"
      },
      {
        "id": "c",
        "text": "`img-src`"
      },
      {
        "id": "d",
        "text": "`script-src`"
      }
    ]
  },
  {
    "id": "web-q17",
    "prompt": "Which fixing principle applies to all injections?",
    "skills": [
      "f-inj-cause"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Structurally separating code from data"
      },
      {
        "id": "b",
        "text": "Limiting the maximum length of each form field"
      },
      {
        "id": "c",
        "text": "Encrypting each piece of input data before processing it"
      },
      {
        "id": "d",
        "text": "Removing all known special characters from the input"
      }
    ]
  },
  {
    "id": "web-q18",
    "prompt": "A blocklist of keywords (SELECT, UNION, <script>) can be bypassed by variants of case, encoding or syntax.",
    "skills": [
      "f-inj-cause"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "web-q19",
    "prompt": "What is the point called where data moves from an uncontrolled zone to a zone that uses it? (two words)",
    "skills": [
      "f-inj-cause"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "two words"
  },
  {
    "id": "web-q20",
    "prompt": "What is the goal of a UNION SQL injection?",
    "skills": [
      "f-sqli"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Duplicating the query to double the number of rows read"
      },
      {
        "id": "b",
        "text": "Causing the database server to stop"
      },
      {
        "id": "c",
        "text": "Bypassing the encryption of the stored passwords"
      },
      {
        "id": "d",
        "text": "Extracting data from other tables through the result"
      }
    ]
  },
  {
    "id": "web-q21",
    "prompt": "A page shows “Welcome” if an injected condition is true and “Not found” otherwise, without ever showing data. Which technique is used?",
    "skills": [
      "f-sqli"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "An error-based injection"
      },
      {
        "id": "b",
        "text": "A UNION injection"
      },
      {
        "id": "c",
        "text": "A boolean blind injection"
      },
      {
        "id": "d",
        "text": "A reflected XSS"
      }
    ]
  },
  {
    "id": "web-q22",
    "prompt": "Which measures actually fix a SQL injection?",
    "skills": [
      "f-sqli"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Doubling the apostrophes present in the inputs"
      },
      {
        "id": "b",
        "text": "Using parameterized queries for all values"
      },
      {
        "id": "c",
        "text": "Hiding SQL error messages from the user"
      },
      {
        "id": "d",
        "text": "Comparing a dynamic column name to an allowlist"
      }
    ]
  },
  {
    "id": "web-q23",
    "prompt": "Why is using an ORM not always enough to avoid a SQL injection?",
    "skills": [
      "f-sqli"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "An ORM always passes inputs along without any prior check"
      },
      {
        "id": "b",
        "text": "An ORM only handles non-relational databases"
      },
      {
        "id": "c",
        "text": "An ORM disables the encryption of the database connection"
      },
      {
        "id": "d",
        "text": "Its raw queries stay injectable once a value is concatenated"
      }
    ]
  },
  {
    "id": "web-q24",
    "prompt": "In a stored XSS, where is the malicious payload?",
    "skills": [
      "f-xss"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Only in the URL opened by the victim"
      },
      {
        "id": "b",
        "text": "Saved on the server, served to every visitor"
      },
      {
        "id": "c",
        "text": "In the firewall that filters incoming requests"
      },
      {
        "id": "d",
        "text": "In the TLS certificate of the visited site"
      }
    ]
  },
  {
    "id": "web-q25",
    "prompt": "Which statement about React is correct?",
    "skills": [
      "f-xss"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`{value}` is encoded automatically, not `dangerouslySetInnerHTML`"
      },
      {
        "id": "b",
        "text": "React prevents all XSS whatever the use of components"
      },
      {
        "id": "c",
        "text": "Any content inserted in a component is interpreted as raw HTML"
      },
      {
        "id": "d",
        "text": "`href` attributes can never contain code"
      }
    ]
  },
  {
    "id": "web-q26",
    "prompt": "An HttpOnly cookie prevents an injected script from sending authenticated requests on behalf of the user.",
    "skills": [
      "f-xss"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "web-q27",
    "prompt": "Which library is commonly used to sanitize rich HTML before displaying it in the browser?",
    "skills": [
      "f-xss"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "name"
  },
  {
    "id": "web-q28",
    "prompt": "What is the Content-Security-Policy-Report-Only header for?",
    "skills": [
      "f-csp"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Blocking all external resources without logging anything at all"
      },
      {
        "id": "b",
        "text": "Encrypting the page content for the browser"
      },
      {
        "id": "c",
        "text": "Disabling the CSP for administrator accounts"
      },
      {
        "id": "d",
        "text": "Logging violations without blocking anything, before enforcement"
      }
    ]
  },
  {
    "id": "web-q29",
    "prompt": "A legitimate inline script must remain with a strict CSP. Which solution is preferable to `unsafe-inline`?",
    "skills": [
      "f-csp"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Adding `*` in `script-src` to allow any origin"
      },
      {
        "id": "b",
        "text": "A fixed nonce written in the page’s source code"
      },
      {
        "id": "c",
        "text": "A random nonce per response, or a sha256 hash"
      },
      {
        "id": "d",
        "text": "Moving the script into a meta tag of the page"
      }
    ]
  },
  {
    "id": "web-q30",
    "prompt": "What is the structural fix for a system command injection?",
    "skills": [
      "f-inj-autres"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Calling without a shell, with an argument list"
      },
      {
        "id": "b",
        "text": "Converting the input to uppercase before running it"
      },
      {
        "id": "c",
        "text": "Replacing the semicolon with a space in the input"
      },
      {
        "id": "d",
        "text": "Running the command with administrator rights"
      }
    ]
  },
  {
    "id": "web-q31",
    "prompt": "Sending `{\"$ne\": null}` instead of a password can bypass the authentication of a poorly protected MongoDB API.",
    "skills": [
      "f-inj-autres"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "web-q32",
    "prompt": "What does a form that displays 49 when you enter `{{7*7}}` reveal?",
    "skills": [
      "f-inj-autres"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A buffer overflow in the browser"
      },
      {
        "id": "b",
        "text": "A server-side template injection"
      },
      {
        "id": "c",
        "text": "A badly configured cache on the server"
      },
      {
        "id": "d",
        "text": "A stored XSS in the database"
      }
    ]
  },
  {
    "id": "web-q33",
    "prompt": "Which measures protect against template injection (SSTI)?",
    "skills": [
      "f-inj-autres"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Hiding the template engine’s name in the headers"
      },
      {
        "id": "b",
        "text": "Passing the data as variables of the template"
      },
      {
        "id": "c",
        "text": "Surrounding the input with quotes in the template"
      },
      {
        "id": "d",
        "text": "Never building the template text from an input"
      }
    ]
  },
  {
    "id": "web-q34",
    "prompt": "Which Python module allows calling a program without going through a shell, with an argument list?",
    "skills": [
      "f-inj-autres"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "module"
  },
  {
    "id": "web-q35",
    "prompt": "What risk does copying an unfiltered value into an HTTP redirect header present?",
    "skills": [
      "f-inj-autres"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The browser having to download the page twice"
      },
      {
        "id": "b",
        "text": "CRLF injection to add headers"
      },
      {
        "id": "c",
        "text": "The loss of the user’s session at each redirect"
      },
      {
        "id": "d",
        "text": "A systematic refusal of the redirect by the server"
      }
    ]
  },
  {
    "id": "web-q36",
    "prompt": "What role should a web application firewall (WAF) have against injections?",
    "skills": [
      "f-inj-defense"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A mechanism that encrypts the queries sent to the database"
      },
      {
        "id": "b",
        "text": "The definitive fix that removes the need to change the code"
      },
      {
        "id": "c",
        "text": "A complement that buys time without replacing the fix"
      },
      {
        "id": "d",
        "text": "A tool that makes parameterized queries unnecessary"
      }
    ]
  },
  {
    "id": "web-q37",
    "prompt": "Why must the application’s database account have minimal rights?",
    "skills": [
      "f-inj-defense"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "So that queries run faster on the database"
      },
      {
        "id": "b",
        "text": "To avoid having to use parameterized queries"
      },
      {
        "id": "c",
        "text": "So that the database backups are smaller"
      },
      {
        "id": "d",
        "text": "To limit the impact of a SQL injection that succeeds"
      }
    ]
  },
  {
    "id": "web-q38",
    "prompt": "Showing the user the detailed SQL error message makes an attacker’s work easier.",
    "skills": [
      "f-inj-defense"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "web-q39",
    "prompt": "Which elements of a web access log suggest a SQL injection attempt?",
    "skills": [
      "f-inj-defense"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Parameters containing UNION SELECT"
      },
      {
        "id": "b",
        "text": "Repeated 5-second requests with SLEEP(5)"
      },
      {
        "id": "c",
        "text": "A GET request for the home page with a 200 code"
      },
      {
        "id": "d",
        "text": "A series of 500 errors on a parameter after apostrophes"
      }
    ]
  },
  {
    "id": "web-q40",
    "prompt": "An audit reveals a SQL injection in a sort parameter of a production application. Describe your response: fix, checking for possible exploitation, and prevention.",
    "skills": [
      "f-inj-defense",
      "f-sqli"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "web-q41",
    "prompt": "Why is dynamic sorting (`ORDER BY`) not protected by a parameterized query?",
    "skills": [
      "f-sqli"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A column name is an identifier, not a value"
      },
      {
        "id": "b",
        "text": "The sort clause runs in the browser"
      },
      {
        "id": "c",
        "text": "Parameters only serve queries that write data"
      },
      {
        "id": "d",
        "text": "A sort cannot be hijacked by an attacker"
      }
    ]
  },
  {
    "id": "web-q42",
    "prompt": "What is the safest way to display typed text without it being interpreted as HTML?",
    "skills": [
      "f-xss"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Strip the spaces before inserting the text"
      },
      {
        "id": "b",
        "text": "Use `textContent` rather than `innerHTML`"
      },
      {
        "id": "c",
        "text": "Hide the element with a CSS display rule"
      },
      {
        "id": "d",
        "text": "Convert the whole input to lowercase letters"
      }
    ]
  },
  {
    "id": "web-q43",
    "prompt": "For a value inserted in a link’s `href` attribute, which precaution is specific to this context?",
    "skills": [
      "f-xss"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Convert the value to uppercase"
      },
      {
        "id": "b",
        "text": "Double the value’s apostrophes"
      },
      {
        "id": "c",
        "text": "Encode only the `<` and `>` characters of the value"
      },
      {
        "id": "d",
        "text": "Accept only the `http:` and `https:` schemes"
      }
    ]
  },
  {
    "id": "web-q44",
    "prompt": "What is the technique called that sends the SQL query and its values separately to the database? (two words)",
    "skills": [
      "f-inj-defense"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "two words"
  }
];
