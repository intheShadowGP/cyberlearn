// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.en.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "xrc-q1",
    "prompt": "What makes an XXE attack possible?",
    "skills": [
      "f-xxe-rfi"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The absence of HTTPS on the page that receives the sent XML document"
      },
      {
        "id": "b",
        "text": "A password that is too short, chosen by an administrator of the online service"
      },
      {
        "id": "c",
        "text": "An XML parser that resolves external entities in user XML"
      },
      {
        "id": "d",
        "text": "A session cookie set without the Secure attribute by the application"
      }
    ]
  },
  {
    "id": "xrc-q2",
    "prompt": "Which impacts can an XXE have depending on the configuration?",
    "skills": [
      "f-xxe-rfi"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "An increase in the server’s processing speed"
      },
      {
        "id": "b",
        "text": "Denial of service through entity expansion"
      },
      {
        "id": "c",
        "text": "Requests to internal services (a form of SSRF)"
      },
      {
        "id": "d",
        "text": "Reading server files"
      }
    ]
  },
  {
    "id": "xrc-q3",
    "prompt": "What is the reference fix against XXE?",
    "skills": [
      "f-xxe-rfi"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Increasing the minimum length of users’ passwords"
      },
      {
        "id": "b",
        "text": "Disabling external entities and DTDs in the XML parser"
      },
      {
        "id": "c",
        "text": "Changing the port number on which the server listens"
      },
      {
        "id": "d",
        "text": "Serving the site over HTTP rather than HTTPS to avoid errors"
      }
    ]
  },
  {
    "id": "xrc-q4",
    "prompt": "What is the difference between LFI and RFI?",
    "skills": [
      "f-xxe-rfi"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "There is no difference between the two types of inclusion"
      },
      {
        "id": "b",
        "text": "LFI encrypts the included files whereas RFI signs them"
      },
      {
        "id": "c",
        "text": "LFI concerns the IPv6 protocol and RFI the IPv4 protocol"
      },
      {
        "id": "d",
        "text": "LFI includes a server file, RFI a remote file"
      }
    ]
  },
  {
    "id": "xrc-q5",
    "prompt": "Building the path of a file to include from a user-supplied parameter, without control, is a cause of file inclusion.",
    "skills": [
      "f-xxe-rfi"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "xrc-q6",
    "prompt": "Which approach, safer than path validation, maps each expected value to a known resource? (two or three words)",
    "skills": [
      "f-xxe-rfi"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "… table"
  },
  {
    "id": "xrc-q7",
    "prompt": "What does clickjacking consist in?",
    "skills": [
      "f-clickjacking"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Laying the real application, invisible, over a decoy page"
      },
      {
        "id": "b",
        "text": "Encrypting the victim’s files to then demand a ransom"
      },
      {
        "id": "c",
        "text": "Injecting SQL into a form to read the database"
      },
      {
        "id": "d",
        "text": "Guessing an account’s password through repeated, fast attempts"
      }
    ]
  },
  {
    "id": "xrc-q8",
    "prompt": "Which CSP directive indicates which sites may display the page in a frame (iframe)?",
    "skills": [
      "f-clickjacking"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "frame-…"
  },
  {
    "id": "xrc-q9",
    "prompt": "Which measures protect against clickjacking?",
    "skills": [
      "f-clickjacking"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Requiring an explicit confirmation of sensitive actions"
      },
      {
        "id": "b",
        "text": "Disabling HTTPS on the pages concerned"
      },
      {
        "id": "c",
        "text": "`X-Frame-Options: DENY` for old browsers"
      },
      {
        "id": "d",
        "text": "`Content-Security-Policy: frame-ancestors 'none'`"
      }
    ]
  },
  {
    "id": "xrc-q10",
    "prompt": "Explain what a TOCTOU race condition is in a web application and give an example where it allows bypassing a limit.",
    "skills": [
      "f-race"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "xrc-q11",
    "prompt": "Checking then acting in two non-atomic steps can be bypassed by sending several requests at exactly the same time.",
    "skills": [
      "f-race"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "xrc-q12",
    "prompt": "Which fixes make a “single-use” limit safe?",
    "skills": [
      "f-race"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "An atomic conditional update (`UPDATE … WHERE not_used`)"
      },
      {
        "id": "b",
        "text": "A “only once, thank you” message shown to the user"
      },
      {
        "id": "c",
        "text": "A uniqueness constraint in the database"
      },
      {
        "id": "d",
        "text": "A lock or transaction covering check and action"
      }
    ]
  },
  {
    "id": "xrc-q13",
    "prompt": "What is the OWASP testing guide (WSTG) for?",
    "skills": [
      "f-methodo-test"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Generating strong passwords for the users’ accounts"
      },
      {
        "id": "b",
        "text": "Replacing the application firewall placed in front of the organization’s site"
      },
      {
        "id": "c",
        "text": "Encrypting the session cookies of the organization’s web applications"
      },
      {
        "id": "d",
        "text": "Testing an application by categories, on an authorized target"
      }
    ]
  },
  {
    "id": "xrc-q14",
    "prompt": "Testing an application’s security without written authorization is acceptable as long as there is no intent to harm.",
    "skills": [
      "f-methodo-test"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "xrc-q15",
    "prompt": "What is the difference between the OWASP ASVS and the WSTG?",
    "skills": [
      "f-methodo-test"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The ASVS lists the requirements, the WSTG describes how to test them"
      },
      {
        "id": "b",
        "text": "The ASVS is an application firewall, the WSTG an antivirus for servers"
      },
      {
        "id": "c",
        "text": "The ASVS only concerns the security of network equipment"
      },
      {
        "id": "d",
        "text": "The two documents are identical and have different names"
      }
    ]
  },
  {
    "id": "xrc-q16",
    "prompt": "You are entrusted with the security test of an internal acceptance application. Describe your methodical approach and the precautions on scope (authorization, perimeter, data).",
    "skills": [
      "f-methodo-test",
      "f-xxe-rfi"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "xrc-q17",
    "prompt": "An application accepts DOCX documents or SVG images sent by users. Why can this expose it to XXE?",
    "skills": [
      "f-xxe-rfi"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "These formats contain binary code run by the processor"
      },
      {
        "id": "b",
        "text": "These formats can only be opened by one internal service"
      },
      {
        "id": "c",
        "text": "These formats contain XML parsed on the server"
      },
      {
        "id": "d",
        "text": "These formats are always encrypted by the user’s browser"
      }
    ]
  },
  {
    "id": "xrc-q18",
    "prompt": "Appending a fixed extension (`.html`) to the name supplied by the user is enough to prevent the inclusion of arbitrary files.",
    "skills": [
      "f-xxe-rfi"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "xrc-q19",
    "prompt": "Which legacy HTTP header, replaced by the `frame-ancestors` directive, forbids or limits displaying a page in a frame?",
    "skills": [
      "f-clickjacking"
    ],
    "difficulty": 1,
    "type": "short",
    "placeholder": "header name"
  },
  {
    "id": "xrc-q20",
    "prompt": "Why is a “frame-busting” script not enough to protect against clickjacking?",
    "skills": [
      "f-clickjacking"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It is only run by recent mobile browsers"
      },
      {
        "id": "b",
        "text": "It can be bypassed, notably with the sandbox attribute"
      },
      {
        "id": "c",
        "text": "It prevents the page from showing even on the legitimate site"
      },
      {
        "id": "d",
        "text": "It slows the page down to the point of making it unusable"
      }
    ]
  },
  {
    "id": "xrc-q21",
    "prompt": "A `frame-ancestors` directive placed in a `<meta>` tag of the page is honored by the browser.",
    "skills": [
      "f-clickjacking"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "xrc-q22",
    "prompt": "Which approach consumes a single-use code atomically?",
    "skills": [
      "f-race"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A `SELECT` followed by an informational message shown to the user"
      },
      {
        "id": "b",
        "text": "A `SELECT` to read the state, then an `UPDATE` in a separate query"
      },
      {
        "id": "c",
        "text": "`UPDATE … WHERE code = ? AND used = 0`, then check the rows"
      },
      {
        "id": "d",
        "text": "An unconditional `UPDATE` after a test made in the application code"
      }
    ]
  },
  {
    "id": "xrc-q23",
    "prompt": "Which acronym designates the gap between checking a state and the action that depends on it?",
    "skills": [
      "f-race"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "acronym"
  },
  {
    "id": "xrc-q24",
    "prompt": "Which operations are typical targets of race conditions?",
    "skills": [
      "f-race"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "A withdrawal or transfer with a balance check"
      },
      {
        "id": "b",
        "text": "Displaying a static help page"
      },
      {
        "id": "c",
        "text": "Reading a read-only license file"
      },
      {
        "id": "d",
        "text": "Applying a single-use promo code"
      }
    ]
  },
  {
    "id": "xrc-q25",
    "prompt": "What is the first step of an application security test?",
    "skills": [
      "f-methodo-test"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Looking for the real users’ credentials"
      },
      {
        "id": "b",
        "text": "Obtaining written authorization and the scope"
      },
      {
        "id": "c",
        "text": "Writing the report and its conclusions right away"
      },
      {
        "id": "d",
        "text": "Running an automatic scanner on production"
      }
    ]
  },
  {
    "id": "xrc-q26",
    "prompt": "Why reproduce each finding before recording it?",
    "skills": [
      "f-methodo-test"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "To make sure it is real and assess its impact"
      },
      {
        "id": "b",
        "text": "Because a finding must be written in two copies"
      },
      {
        "id": "c",
        "text": "Because the client always demands it by contract"
      },
      {
        "id": "d",
        "text": "To reach the minimum number of findings in the report"
      }
    ]
  },
  {
    "id": "xrc-q27",
    "prompt": "Which check is insufficient to secure an image upload?",
    "skills": [
      "f-upload-deser"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Limiting the maximum size of the accepted file"
      },
      {
        "id": "b",
        "text": "Renaming the file with a random identifier"
      },
      {
        "id": "c",
        "text": "Storing the file outside the site’s web root"
      },
      {
        "id": "d",
        "text": "Only checking the extension of the sent name"
      }
    ]
  },
  {
    "id": "xrc-q28",
    "prompt": "Which measures secure a file upload?",
    "skills": [
      "f-upload-deser"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Limiting the size and number of files"
      },
      {
        "id": "b",
        "text": "Renaming the file with a random identifier"
      },
      {
        "id": "c",
        "text": "Keeping the name and extension sent by the user"
      },
      {
        "id": "d",
        "text": "Storing files outside the web root"
      }
    ]
  },
  {
    "id": "xrc-q29",
    "prompt": "The MIME type announced by the browser in the upload request proves the real nature of the file.",
    "skills": [
      "f-upload-deser"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "xrc-q30",
    "prompt": "What is insecure deserialization?",
    "skills": [
      "f-upload-deser"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Rebuilding objects from untrusted data"
      },
      {
        "id": "b",
        "text": "Copying objects from one server to another to back them up"
      },
      {
        "id": "c",
        "text": "Encrypting objects before storing them in the database"
      },
      {
        "id": "d",
        "text": "Compressing objects before the client sends them to the server"
      }
    ]
  },
  {
    "id": "xrc-q31",
    "prompt": "Which Python serialization module must never load untrusted data?",
    "skills": [
      "f-upload-deser"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "module"
  },
  {
    "id": "xrc-q32",
    "prompt": "Which approach is better than native object serialization for exchanging data with a client?",
    "skills": [
      "f-upload-deser"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "An object serialized in an unsigned cookie"
      },
      {
        "id": "b",
        "text": "A simple format, such as JSON, validated by a schema"
      },
      {
        "id": "c",
        "text": "An object encrypted with a key placed in the page"
      },
      {
        "id": "d",
        "text": "A proprietary binary format with no validation at all"
      }
    ]
  },
  {
    "id": "xrc-q33",
    "prompt": "A deserialization payload can trigger code execution before the application examines the resulting object.",
    "skills": [
      "f-upload-deser"
    ],
    "difficulty": 3,
    "type": "truefalse"
  },
  {
    "id": "xrc-q34",
    "prompt": "What is a business logic flaw?",
    "skills": [
      "f-logique-metier"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A default password left in place on a device"
      },
      {
        "id": "b",
        "text": "A syntax error in the code that prevents it from running"
      },
      {
        "id": "c",
        "text": "A legitimate use of functions diverted in an unforeseen way"
      },
      {
        "id": "d",
        "text": "A firewall misconfiguration in front of the application"
      }
    ]
  },
  {
    "id": "xrc-q35",
    "prompt": "A site accepts the price sent by the browser in the payment form. What is the flaw?",
    "skills": [
      "f-logique-metier"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Too weak an encryption of the payment form sent"
      },
      {
        "id": "b",
        "text": "An absence of logging of accepted payments"
      },
      {
        "id": "c",
        "text": "A session cookie without the HttpOnly attribute on this site"
      },
      {
        "id": "d",
        "text": "Excessive trust in client-supplied data"
      }
    ]
  },
  {
    "id": "xrc-q36",
    "prompt": "Which measures reduce business logic flaws?",
    "skills": [
      "f-logique-metier"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Recomputing prices and quantities on the server"
      },
      {
        "id": "b",
        "text": "Relying on hiding certain form fields"
      },
      {
        "id": "c",
        "text": "Writing abuse cases into the automated tests"
      },
      {
        "id": "d",
        "text": "Enforcing the order of a flow’s steps on the server"
      }
    ]
  },
  {
    "id": "xrc-q37",
    "prompt": "Which scoring system expresses the technical severity of a vulnerability from 0 to 10? (acronym)",
    "skills": [
      "f-logique-metier"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "acronym"
  },
  {
    "id": "xrc-q38",
    "prompt": "What must a finding sheet in a test report contain?",
    "skills": [
      "f-logique-metier",
      "f-methodo-test"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A commercial summary with no reproducible technical detail"
      },
      {
        "id": "b",
        "text": "Description, reproducible evidence, impact, severity, fix"
      },
      {
        "id": "c",
        "text": "The real passwords found, written in clear"
      },
      {
        "id": "d",
        "text": "Only the name of the tool used and the total duration of the test carried out"
      }
    ]
  },
  {
    "id": "xrc-q39",
    "prompt": "A test report must reproduce the real passwords found, in clear, to prove exploitation.",
    "skills": [
      "f-logique-metier",
      "f-methodo-test"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "xrc-q40",
    "prompt": "You are testing, with authorization, an online ordering application. Give five business logic abuse cases to test and explain how to report the findings.",
    "skills": [
      "f-logique-metier",
      "f-methodo-test"
    ],
    "difficulty": 3,
    "type": "open"
  }
];
