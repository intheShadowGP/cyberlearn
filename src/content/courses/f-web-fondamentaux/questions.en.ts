// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.en.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "fwf-q1",
    "prompt": "In the address `https://shop.example/list?category=books`, what does `?category=books` represent?",
    "skills": [
      "f-base-http"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A fragment that the browser does not transmit"
      },
      {
        "id": "b",
        "text": "A parameter sent to the server in the request"
      },
      {
        "id": "c",
        "text": "The protocol used for the connection to the site"
      },
      {
        "id": "d",
        "text": "The domain name of the site being visited"
      }
    ]
  },
  {
    "id": "fwf-q2",
    "prompt": "Which HTTP method is normally used to read a page without changing it?",
    "skills": [
      "f-base-http"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`POST`"
      },
      {
        "id": "b",
        "text": "`DELETE`"
      },
      {
        "id": "c",
        "text": "`GET`"
      },
      {
        "id": "d",
        "text": "`PUT`"
      }
    ]
  },
  {
    "id": "fwf-q3",
    "prompt": "Which HTTP status code means that the requested page cannot be found? (number)",
    "skills": [
      "f-base-http"
    ],
    "difficulty": 1,
    "type": "short",
    "placeholder": "number"
  },
  {
    "id": "fwf-q4",
    "prompt": "A user can modify the headers and cookies their browser sends to the server.",
    "skills": [
      "f-base-http"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "fwf-q5",
    "prompt": "What does the `403` response mean?",
    "skills": [
      "f-base-http"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The server refuses to answer a request it understood"
      },
      {
        "id": "b",
        "text": "The server met an unexpected internal error"
      },
      {
        "id": "c",
        "text": "The connection to the server took too long"
      },
      {
        "id": "d",
        "text": "The page was moved to another address on the site"
      }
    ]
  },
  {
    "id": "fwf-q6",
    "prompt": "Which means make it possible to observe the HTTP requests sent by a page?",
    "skills": [
      "f-base-http"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "An interception proxy configured for the test"
      },
      {
        "id": "b",
        "text": "The browser’s built-in spell checker"
      },
      {
        "id": "c",
        "text": "The Network tab of the browser’s developer tools"
      },
      {
        "id": "d",
        "text": "The `curl` command with the `-v` option"
      }
    ]
  },
  {
    "id": "fwf-q7",
    "prompt": "The HTTP protocol is stateless: it does not remember, by itself, the user from one request to the next.",
    "skills": [
      "f-base-http"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "fwf-q8",
    "prompt": "What is called the origin of a web page?",
    "skills": [
      "f-base-navigateur"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The country in which the site’s server is installed"
      },
      {
        "id": "b",
        "text": "The address of the previous page visited by the user"
      },
      {
        "id": "c",
        "text": "The name of the company that designed the website"
      },
      {
        "id": "d",
        "text": "The combination of the protocol, the host name and the port"
      }
    ]
  },
  {
    "id": "fwf-q9",
    "prompt": "What is the browser’s same-origin policy for?",
    "skills": [
      "f-base-navigateur"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Forbidding the user from visiting several sites at once"
      },
      {
        "id": "b",
        "text": "Limiting the number of cookies the browser can store"
      },
      {
        "id": "c",
        "text": "Automatically encrypting all pages before they are displayed"
      },
      {
        "id": "d",
        "text": "Preventing a page from reading another site’s data"
      }
    ]
  },
  {
    "id": "fwf-q10",
    "prompt": "What does the padlock in a website’s address bar guarantee?",
    "skills": [
      "f-base-navigateur"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The site contains no malware and has not been hacked"
      },
      {
        "id": "b",
        "text": "The connection is encrypted to the displayed domain name"
      },
      {
        "id": "c",
        "text": "The site is honest and never tries to deceive"
      },
      {
        "id": "d",
        "text": "The data is stored encrypted on the site’s server"
      }
    ]
  },
  {
    "id": "fwf-q11",
    "prompt": "Which acronym designates HTTP protected by TLS encryption? (acronym)",
    "skills": [
      "f-base-navigateur"
    ],
    "difficulty": 1,
    "type": "short",
    "placeholder": "acronym"
  },
  {
    "id": "fwf-q12",
    "prompt": "A cookie is an executable program that the site installs on the user’s computer.",
    "skills": [
      "f-base-navigateur"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "fwf-q13",
    "prompt": "Which attributes strengthen the security of a session cookie?",
    "skills": [
      "f-base-navigateur"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "A very broad domain covering all the site’s subdomains"
      },
      {
        "id": "b",
        "text": "A lifetime of ten years to avoid logging in again"
      },
      {
        "id": "c",
        "text": "`HttpOnly`, which makes it inaccessible to the page’s JavaScript"
      },
      {
        "id": "d",
        "text": "`Secure`, which limits its sending to HTTPS connections"
      }
    ]
  },
  {
    "id": "fwf-q14",
    "prompt": "What is a web session?",
    "skills": [
      "f-base-navigateur"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A server state found again through an identifier in a cookie"
      },
      {
        "id": "b",
        "text": "A permanent physical connection between the browser and the server"
      },
      {
        "id": "c",
        "text": "A copy of the page saved in the browser’s memory"
      },
      {
        "id": "d",
        "text": "A configuration file that the user downloads at startup"
      }
    ]
  },
  {
    "id": "fwf-q15",
    "prompt": "Why must the data received from a form never be trusted?",
    "skills": [
      "f-base-entrees"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It is deleted by the browser after each submission"
      },
      {
        "id": "b",
        "text": "It is always encrypted and therefore unreadable by the server"
      },
      {
        "id": "c",
        "text": "It comes from the client and can be modified or fabricated"
      },
      {
        "id": "d",
        "text": "It only contains text and never numbers"
      }
    ]
  },
  {
    "id": "fwf-q16",
    "prompt": "Checking a form in JavaScript in the browser is enough to guarantee the application’s security.",
    "skills": [
      "f-base-entrees"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "fwf-q17",
    "prompt": "What is a SQL injection?",
    "skills": [
      "f-base-entrees"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "An input that changes the SQL query the application runs"
      },
      {
        "id": "b",
        "text": "A copy of the database sent to another server"
      },
      {
        "id": "c",
        "text": "An automatic backup of the site’s database"
      },
      {
        "id": "d",
        "text": "An encryption of the data stored in the database"
      }
    ]
  },
  {
    "id": "fwf-q18",
    "prompt": "What is the best protection against SQL injection?",
    "skills": [
      "f-base-entrees"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Forbidding the apostrophe in all fields"
      },
      {
        "id": "b",
        "text": "Parameterized queries"
      },
      {
        "id": "c",
        "text": "Limiting the length of the form fields"
      },
      {
        "id": "d",
        "text": "Hiding the error message returned to the user"
      }
    ]
  },
  {
    "id": "fwf-q19",
    "prompt": "Which attack makes injected JavaScript run in the page of a site visited by the victim? (acronym)",
    "skills": [
      "f-base-entrees"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "acronym"
  },
  {
    "id": "fwf-q20",
    "prompt": "What should be done to display a user-written comment safely?",
    "skills": [
      "f-base-entrees"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Convert it to uppercase before displaying it"
      },
      {
        "id": "b",
        "text": "Encrypt it with a key before sending it to the browser"
      },
      {
        "id": "c",
        "text": "Display it as raw HTML to keep its formatting"
      },
      {
        "id": "d",
        "text": "Display it as text, encoding the characters"
      }
    ]
  },
  {
    "id": "fwf-q21",
    "prompt": "Which data can an attacker control in an HTTP request?",
    "skills": [
      "f-base-entrees"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "The headers and the cookies"
      },
      {
        "id": "b",
        "text": "The server’s source code"
      },
      {
        "id": "c",
        "text": "The fields of a form"
      },
      {
        "id": "d",
        "text": "The URL parameters"
      }
    ]
  },
  {
    "id": "fwf-q22",
    "prompt": "What is the difference between authentication and authorization?",
    "skills": [
      "f-base-acces"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The first encrypts the connection, the second backs up the data"
      },
      {
        "id": "b",
        "text": "Both designate the same step under different names"
      },
      {
        "id": "c",
        "text": "The first proves who you are, the second the granted rights"
      },
      {
        "id": "d",
        "text": "The first concerns the server, the second the browser"
      }
    ]
  },
  {
    "id": "fwf-q23",
    "prompt": "How should a site store its users’ passwords?",
    "skills": [
      "f-base-acces"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Encrypted with a key kept in the same database"
      },
      {
        "id": "b",
        "text": "As a simple Base64 conversion"
      },
      {
        "id": "c",
        "text": "As slow, salted hashes"
      },
      {
        "id": "d",
        "text": "In clear, so they can be sent back if forgotten"
      }
    ]
  },
  {
    "id": "fwf-q24",
    "prompt": "Hiding the administration button from ordinary users is enough to protect the administration page.",
    "skills": [
      "f-base-acces"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "fwf-q25",
    "prompt": "What is an IDOR?",
    "skills": [
      "f-base-acces"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Intercepting an unencrypted connection on a public network"
      },
      {
        "id": "b",
        "text": "Reading another’s object by changing an identifier"
      },
      {
        "id": "c",
        "text": "Guessing a password through very fast repeated attempts"
      },
      {
        "id": "d",
        "text": "Inserting a script in a comment shown to visitors"
      }
    ]
  },
  {
    "id": "fwf-q26",
    "prompt": "Which measures strengthen a site’s authentication?",
    "skills": [
      "f-base-acces"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "A message stating whether the account exists"
      },
      {
        "id": "b",
        "text": "Multi-factor authentication"
      },
      {
        "id": "c",
        "text": "An identical error message for an unknown account and a wrong password"
      },
      {
        "id": "d",
        "text": "Limiting login attempts"
      }
    ]
  },
  {
    "id": "fwf-q27",
    "prompt": "Which principle consists in giving each user only the necessary rights? (three words)",
    "skills": [
      "f-base-acces"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "three words"
  },
  {
    "id": "fwf-q28",
    "prompt": "Where must the right to access a resource be checked?",
    "skills": [
      "f-base-acces"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "On the server side, on every request"
      },
      {
        "id": "b",
        "text": "Only when the user logs in"
      },
      {
        "id": "c",
        "text": "On the browser side, before displaying the page"
      },
      {
        "id": "d",
        "text": "In the menus and buttons of the interface"
      }
    ]
  },
  {
    "id": "fwf-q29",
    "prompt": "What is the OWASP Top 10?",
    "skills": [
      "f-base-owasp"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A ranking of the ten most secure websites in the world"
      },
      {
        "id": "b",
        "text": "A standard that imposes ten measures on all companies"
      },
      {
        "id": "c",
        "text": "A software that automatically detects ten known flaws"
      },
      {
        "id": "d",
        "text": "The ten most critical risk categories of the web"
      }
    ]
  },
  {
    "id": "fwf-q30",
    "prompt": "The OWASP Top 10 is an awareness starting point, not a list of all possible flaws.",
    "skills": [
      "f-base-owasp"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "fwf-q31",
    "prompt": "Which header tells the browser to use only HTTPS for a site?",
    "skills": [
      "f-base-owasp"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "`Strict-Transport-Security`"
      },
      {
        "id": "b",
        "text": "`Access-Control-Allow-Origin`"
      },
      {
        "id": "c",
        "text": "`X-Content-Type-Options`"
      },
      {
        "id": "d",
        "text": "`Referrer-Policy`"
      }
    ]
  },
  {
    "id": "fwf-q32",
    "prompt": "Which practices reduce the risk linked to outdated components?",
    "skills": [
      "f-base-owasp"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Taking an inventory of the libraries used"
      },
      {
        "id": "b",
        "text": "Following alerts about known vulnerabilities"
      },
      {
        "id": "c",
        "text": "Regularly applying security updates"
      },
      {
        "id": "d",
        "text": "Never updating to avoid regressions"
      }
    ]
  },
  {
    "id": "fwf-q33",
    "prompt": "Why is displaying a detailed error trace to visitors discouraged?",
    "skills": [
      "f-base-owasp"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It prevents the browser from keeping its cookies"
      },
      {
        "id": "b",
        "text": "It reveals internal information useful to an attacker"
      },
      {
        "id": "c",
        "text": "It is forbidden in the definition of the HTTP protocol"
      },
      {
        "id": "d",
        "text": "It strongly slows the display of all the other pages"
      }
    ]
  },
  {
    "id": "fwf-q34",
    "prompt": "Which acronym designates the header that specifies the script sources allowed in a page? (acronym)",
    "skills": [
      "f-base-owasp"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "acronym"
  },
  {
    "id": "fwf-q35",
    "prompt": "Where can you legally practice attacking a web application?",
    "skills": [
      "f-base-pratiques"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "On any site, as long as no data is copied"
      },
      {
        "id": "b",
        "text": "On your bank’s website, during quiet hours"
      },
      {
        "id": "c",
        "text": "On a neighbor’s website, if they do not notice"
      },
      {
        "id": "d",
        "text": "On a vulnerable application installed at home"
      }
    ]
  },
  {
    "id": "fwf-q36",
    "prompt": "Testing a site you do not own is allowed as long as you steal no data.",
    "skills": [
      "f-base-pratiques"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "fwf-q37",
    "prompt": "By chance you notice, on a site that is not yours, that other people’s data can be seen. What do you do?",
    "skills": [
      "f-base-pratiques"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "You immediately publish the flaw on social media"
      },
      {
        "id": "b",
        "text": "You download the data to prove what you saw"
      },
      {
        "id": "c",
        "text": "You stop exploring and notify the site’s owner"
      },
      {
        "id": "d",
        "text": "You keep exploring to measure the extent of the problem"
      }
    ]
  },
  {
    "id": "fwf-q38",
    "prompt": "What must a useful flaw report contain?",
    "skills": [
      "f-base-pratiques"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "A clear description of the flaw and its impact"
      },
      {
        "id": "b",
        "text": "A payment request before any explanation"
      },
      {
        "id": "c",
        "text": "The precise steps to reproduce it"
      },
      {
        "id": "d",
        "text": "The personal data retrieved to prove the impact"
      }
    ]
  },
  {
    "id": "fwf-q39",
    "prompt": "A friend is developing a small site with a login form and a comments page. Which security checks do you recommend to them, and why?",
    "skills": [
      "f-base-pratiques",
      "f-base-entrees"
    ],
    "difficulty": 2,
    "type": "open"
  },
  {
    "id": "fwf-q40",
    "prompt": "Explain to a non-technical colleague why “the site has a padlock” does not mean “the site is safe”.",
    "skills": [
      "f-base-navigateur",
      "f-base-pratiques"
    ],
    "difficulty": 3,
    "type": "open"
  }
];
