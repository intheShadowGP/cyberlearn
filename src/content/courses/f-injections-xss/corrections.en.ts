// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "f-injections-xss",
  questions: {
    "web-q1": {
      "type": "single",
      "correct": "a",
      "explanation": "Whether it is SQL, HTML, shell commands or NoSQL queries, injection occurs when data changes the structure of an interpreted instruction. The fix is to structurally separate code and data.",
      "whyWrong": {
        "d": "Encryption plays no part in the mechanism of an injection.",
        "b": "A short password is another problem, unrelated to data being interpreted.",
        "c": "An up-to-date server can be vulnerable if the code concatenates inputs."
      }
    },
    "web-q2": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Client-side validation improves usability but is trivially bypassed: the attacker sends their request directly (curl, proxy). Any security validation must be done on the server side."
    },
    "web-q3": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Everything coming from outside the server code can be controlled by an attacker, directly (headers, cookies) or indirectly (compromised third-party API).",
      "whyWrong": {
        "c": "A constant in the source code is controlled by the developers; it is not an external input."
      }
    },
    "web-q4": {
      "type": "single",
      "correct": "c",
      "explanation": "The apostrophe closes the login string and `-- ` turns the rest of the query into a comment, removing the password condition.",
      "whyWrong": {
        "b": "An ordinary username is handled as a simple value.",
        "d": "A script tag targets XSS, not SQL injection; here it would be treated as a nonexistent username.",
        "a": "A null byte has no comment effect in standard SQL."
      }
    },
    "web-q5": {
      "type": "short",
      "accepted": [
        "parameterized queries",
        "parametrized queries",
        "prepared statements",
        "parameterized query",
        "prepared statement",
        "prepared queries",
        "bound parameters"
      ],
      "explanation": "With a parameterized (or prepared) query, the SQL text and the values are sent separately to the engine: a value can never change the structure of the query."
    },
    "web-q6": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Bound parameters can only represent values, not identifiers (tables, columns) or keywords (ASC/DESC). The input must then be compared to an allowlist of permitted columns."
    },
    "web-q7": {
      "type": "single",
      "correct": "d",
      "explanation": "The page does not return the query result, but its response time depends on an injected condition: this is a time-based blind injection. It allows data to be extracted bit by bit.",
      "whyWrong": {
        "b": "An XSS runs in the browser, with no link to a server-side delay.",
        "c": "A denial of service does not depend on a precise condition in a parameter.",
        "a": "A cache speeds responses up, it does not slow them down on demand."
      }
    },
    "web-q8": {
      "type": "single",
      "correct": "b",
      "explanation": "The payload comes from the URL fragment (after #), which is not even sent to the server; it is inserted by the page’s JavaScript into a dangerous sink (innerHTML). This is a DOM XSS.",
      "whyWrong": {
        "c": "The server never sees the fragment: it cannot reflect it.",
        "a": "Nothing is stored on the server side.",
        "d": "The fact that it is not sent to the server does not prevent its execution in the browser."
      }
    },
    "web-q9": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "The script runs with the site’s origin: it reads the DOM, sends authenticated requests (cookies are attached automatically) and can modify the display to trap the user.",
      "whyWrong": {
        "a": "The HttpOnly attribute makes the cookie inaccessible to JavaScript. The script can still act on the user’s behalf: HttpOnly limits the impact without removing it."
      }
    },
    "web-q10": {
      "type": "short",
      "accepted": [
        "textContent",
        ".textContent",
        "innerText"
      ],
      "explanation": "`textContent` inserts the value as text: tags are displayed as is and never interpreted. `innerText` has the same security effect."
    },
    "web-q11": {
      "type": "truefalse",
      "correct": false,
      "explanation": "A `javascript:alert(1)` URL contains no special HTML character: HTML encoding lets it through. The scheme must be validated (http/https only) in addition to attribute encoding."
    },
    "web-q12": {
      "type": "single",
      "correct": "c",
      "explanation": "`'unsafe-inline'` allows any inline script, including the one injected by the attacker. It is replaced by nonces or hashes for legitimate inline scripts.",
      "whyWrong": {
        "d": "`'self'` only allows scripts served by the site itself.",
        "a": "`'none'` allows no script at all.",
        "b": "A source limited to one specific domain remains restrictive."
      }
    },
    "web-q13": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "A strict CSP blocks the execution of injected scripts, HttpOnly prevents direct theft of session cookies, and nonces make it possible to avoid unsafe-inline.",
      "whyWrong": {
        "c": "Base64 is a transport encoding, with no effect whatsoever on script execution in the page."
      }
    },
    "web-q14": {
      "type": "open",
      "model": "Doubling apostrophes is manual escaping, dependent on the DBMS and the context: it does not protect a numeric parameter without quotes (`WHERE id = 1 OR 1=1`), can be bypassed depending on encodings and character sets, and must be thought of at every place, so it will be forgotten somewhere. Recommendation: parameterized queries everywhere (including through the ORM), allowlist for dynamic identifiers, database account with minimal rights, and automated tests (SAST) detecting any concatenation in a query.",
      "criteria": [
        "At least one limit of manual escaping is explained (numeric context, encoding, omission).",
        "Parameterized queries are recommended as the structural fix.",
        "A complementary measure (least privilege in the database, SAST, allowlist) is proposed."
      ],
      "explanation": "Manual escaping treats the symptom; the parameterized query removes the cause."
    },
    "web-q15": {
      "type": "open",
      "model": "1) First deploy the policy as `Content-Security-Policy-Report-Only` with a report collection endpoint, to measure without blocking. 2) Inventory the inline scripts and move them to external files; for those that must stay inline, use a nonce generated for each response. 3) Replace `onclick=` handlers with `addEventListener`. 4) List the third-party domains that are really needed. 5) Iterate until there are no more legitimate violations, then switch to blocking mode, keeping the reports active to detect regressions and attack attempts.",
      "criteria": [
        "Report-Only mode is used before enforcement.",
        "Inline scripts are externalized or protected by a nonce or hash.",
        "The switch to blocking mode is gradual and monitored."
      ],
      "explanation": "A CSP applied abruptly often breaks the application and ends up disabled. Report-Only mode allows a risk-free deployment."
    },
    "web-q16": {
      "type": "single",
      "correct": "b",
      "explanation": "`frame-ancestors` indicates which sites may embed the page in a frame (iframe). `frame-ancestors 'none'` prevents any embedding, hence clickjacking. It replaces the old X-Frame-Options header.",
      "whyWrong": {
        "d": "`script-src` controls script sources, not embedding in a frame.",
        "c": "`img-src` controls image sources.",
        "a": "`connect-src` controls the destinations of the script’s requests."
      }
    },
    "web-q17": {
      "type": "single",
      "correct": "a",
      "explanation": "The lasting fix is never to build code from data: parameterized queries, output encoding, calls without a shell. Filtering characters or limiting sizes at best reduces the surface, without removing the cause.",
      "whyWrong": {
        "d": "Lists of forbidden characters always leave an overlooked encoding or context.",
        "c": "Encryption does not change how the data is interpreted.",
        "b": "A length limit does not make a short payload harmless."
      }
    },
    "web-q18": {
      "type": "truefalse",
      "correct": true,
      "explanation": "A blocklist is bypassed by variants of case, encoding, comments or syntax. It does not act on the cause: the data remains mixed with the code. Only structural separation protects durably."
    },
    "web-q19": {
      "type": "short",
      "accepted": [
        "trust boundary",
        "the trust boundary",
        "boundary of trust"
      ],
      "explanation": "The trust boundary separates what the application controls from what comes to it from outside. Any data crossing it must be validated and treated as hostile."
    },
    "web-q20": {
      "type": "single",
      "correct": "d",
      "explanation": "UNION SELECT appends to the legitimate result that of a query chosen by the attacker: reading other tables or the engine version, provided the number and type of columns are aligned.",
      "whyWrong": {
        "b": "The goal is to read data, not to stop the server.",
        "a": "The attacker does not seek to duplicate, but to add different data.",
        "c": "UNION decrypts nothing: it reads what the application account can read."
      }
    },
    "web-q21": {
      "type": "single",
      "correct": "c",
      "explanation": "The attacker deduces the value of a piece of data by asking true/false questions whose answer changes the display. Each answer reveals one bit; the process can be automated but is slow.",
      "whyWrong": {
        "b": "UNION assumes that injected data appears in the page.",
        "d": "An XSS runs in the victim’s browser.",
        "a": "No error message is exploited here."
      }
    },
    "web-q22": {
      "type": "multi",
      "correct": [
        "b",
        "d"
      ],
      "explanation": "Parameterized queries and the allowlist separate data from structure. Hiding errors reduces the information given to the attacker without removing the flaw, and manual escaping remains fragile.",
      "whyWrong": {
        "a": "Manual escaping depends on the context and the encoding, and ends up forgotten.",
        "c": "Hiding errors does not fix the vulnerability (blind injection)."
      }
    },
    "web-q23": {
      "type": "single",
      "correct": "d",
      "explanation": "An ORM parameterizes the queries it builds itself. Raw query functions (`raw`, `execute`, `$where`) accept text: concatenating an input into them recreates the injection.",
      "whyWrong": {
        "a": "The queries generated by the ORM are parameterized.",
        "c": "Connection encryption is independent of the ORM.",
        "b": "Common ORMs mainly target relational databases."
      }
    },
    "web-q24": {
      "type": "single",
      "correct": "b",
      "explanation": "The payload is saved (comment, profile, message) then returned to all visitors of the page: this is what makes stored XSS more dangerous than reflected XSS, which requires the victim to open a booby-trapped link.",
      "whyWrong": {
        "a": "A payload only in the URL describes a reflected or DOM XSS.",
        "d": "The certificate plays no part in the page content.",
        "c": "The firewall does not store page content."
      }
    },
    "web-q25": {
      "type": "single",
      "correct": "a",
      "explanation": "React encodes the text inserted in JSX. On the other hand, `dangerouslySetInnerHTML` inserts raw HTML, and an `href` can receive a `javascript:` URL: HTML must be sanitized and schemes validated.",
      "whyWrong": {
        "c": "It is the opposite: the text is encoded.",
        "b": "React does not protect against explicit dangerous uses.",
        "d": "An href can contain a javascript: URL if it is not validated."
      }
    },
    "web-q26": {
      "type": "truefalse",
      "correct": false,
      "explanation": "HttpOnly prevents the cookie from being read by JavaScript, but the browser keeps sending it with each request to the site: the injected script can therefore act on behalf of the user without knowing the cookie."
    },
    "web-q27": {
      "type": "short",
      "accepted": [
        "DOMPurify",
        "dompurify"
      ],
      "explanation": "DOMPurify removes the dangerous elements and attributes from an HTML fragment. It is used when rich HTML (text editor, import) must be displayed as is."
    },
    "web-q28": {
      "type": "single",
      "correct": "d",
      "explanation": "Report-Only mode applies the policy “dry”: the browser reports what would be blocked without breaking the page. Legitimate violations are fixed, then you switch to blocking mode.",
      "whyWrong": {
        "a": "Report-Only blocks nothing.",
        "b": "It has no encryption function.",
        "c": "It does not distinguish accounts."
      }
    },
    "web-q29": {
      "type": "single",
      "correct": "c",
      "explanation": "An unpredictable nonce (new for each response) or a hash designates exactly the allowed script. A fixed nonce can be copied by the attacker and `*` allows any origin.",
      "whyWrong": {
        "b": "A fixed nonce can be guessed or reused by an attacker.",
        "a": "The wildcard cancels the protection.",
        "d": "A meta tag does not declare an allowed script in this way."
      }
    },
    "web-q30": {
      "type": "single",
      "correct": "a",
      "explanation": "Without a shell, the input stays an argument and cannot introduce other commands with `;`, `|` or `&&`. Strict validation of the value is added (allowlist, expected format).",
      "whyWrong": {
        "c": "Other separators exist (|, &&, line break, substitution).",
        "d": "Higher rights make the impact worse.",
        "b": "Case has no effect on the shell’s interpretation."
      }
    },
    "web-q31": {
      "type": "truefalse",
      "correct": true,
      "explanation": "The `$ne` (not equal) operator turns the condition into “password different from null”, true for any account. The fix is to check that the fields are really strings before the query."
    },
    "web-q32": {
      "type": "single",
      "correct": "b",
      "explanation": "The template engine evaluated the expression: the input was inserted into the text of the template (SSTI). The attacker’s next step is often code execution on the server.",
      "whyWrong": {
        "d": "Nothing is stored here: the expression is evaluated at rendering.",
        "c": "A cache does not compute expressions.",
        "a": "This is a server-side computation, not a memory overflow."
      }
    },
    "web-q33": {
      "type": "multi",
      "correct": [
        "b",
        "d"
      ],
      "explanation": "The template must be fixed text, with data passed to it as variables. Surrounding with quotes or hiding the engine does not change the fact that the input is evaluated.",
      "whyWrong": {
        "c": "Quotes can be closed with a suitable payload.",
        "a": "Hiding the engine barely slows the attacker without fixing the flaw."
      }
    },
    "web-q34": {
      "type": "short",
      "accepted": [
        "subprocess",
        "subprocess.run",
        "subprocess.Popen",
        "subprocess.call"
      ],
      "explanation": "`subprocess.run([\"ping\", \"-c\", \"1\", address])` passes the arguments directly to the program, without interpretation by a shell, which prevents the injection of additional commands."
    },
    "web-q35": {
      "type": "single",
      "correct": "b",
      "explanation": "If the value contains CR and LF, the attacker ends the header and adds others (cookie, redirect) or splits the response. These characters are refused and the framework API is used.",
      "whyWrong": {
        "a": "The redirect works; it is its content that is hijacked.",
        "c": "The session is not affected by this effect.",
        "d": "The server does not refuse: it follows the injected headers."
      }
    },
    "web-q36": {
      "type": "single",
      "correct": "c",
      "explanation": "A WAF detects known patterns and can block attacks while the fix is prepared, but it can be bypassed (encodings, variants). The cause must be fixed in the code.",
      "whyWrong": {
        "b": "The WAF does not fix the underlying vulnerability.",
        "d": "Parameterized queries remain the reference fix.",
        "a": "A WAF does not encrypt exchanges with the database."
      }
    },
    "web-q37": {
      "type": "single",
      "correct": "d",
      "explanation": "With minimal rights (no unneeded write access, no access to files or to administration), a successful injection reads or modifies less. This is defense in depth.",
      "whyWrong": {
        "a": "Rights do not noticeably influence speed.",
        "b": "Parameterized queries remain necessary.",
        "c": "Backup size does not depend on the account’s rights."
      }
    },
    "web-q38": {
      "type": "truefalse",
      "correct": true,
      "explanation": "A detailed error message reveals the structure of the query, the engine and sometimes table names, which guides the injection. A generic error is shown and the detail is kept in the logs."
    },
    "web-q39": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "The UNION SELECT and SLEEP patterns, as well as repeated errors after apostrophes, point to injection attempts. An ordinary request to the home page is normal.",
      "whyWrong": {
        "c": "A normal request to the home page is not suspicious in itself."
      }
    },
    "web-q40": {
      "type": "open",
      "model": "I fix the code first: the column name is compared to an allowlist of permitted columns, values go through parameterized queries. I deploy urgently, with a web application firewall rule in the meantime if needed. I search the access and database logs for traces of exploitation (UNION, SLEEP, repeated errors, abnormal data volumes) over the exposure period, and I prepare a notification if personal data is concerned. For prevention: database account with minimal rights, static analysis that detects concatenation, a regression test that replays the payload, review of the other places where dynamic identifiers are used.",
      "criteria": [
        "The fix by allowlist and parameterization is described.",
        "The search for past exploitation in the logs is planned.",
        "Prevention measures (least privilege, SAST, regression test) are proposed."
      ],
      "explanation": "Fixing is not enough: you must know whether the flaw was exploited and prevent it from coming back elsewhere."
    }
  },
};
