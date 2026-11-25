// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "f-web-fondamentaux",
  questions: {
    "fwf-q1": {
      "type": "single",
      "correct": "b",
      "explanation": "After the `?` come the request parameters, sent to the server as `name=value`. They are controlled by the user and must never be taken at their word.",
      "whyWrong": {
        "d": "The domain name is `shop.example`.",
        "c": "The protocol is `https`.",
        "a": "The fragment starts with `#` and stays in the browser."
      }
    },
    "fwf-q2": {
      "type": "single",
      "correct": "c",
      "explanation": "`GET` requests a resource without changing it. `POST` sends data (form), `PUT` replaces a resource and `DELETE` removes it.",
      "whyWrong": {
        "a": "`POST` is used to send data to the server.",
        "b": "`DELETE` removes a resource.",
        "d": "`PUT` replaces or creates a resource."
      }
    },
    "fwf-q3": {
      "type": "short",
      "accepted": [
        "404"
      ],
      "explanation": "The `404` code (Not Found) indicates that the resource does not exist, or that the server chooses not to reveal its existence. 4xx codes signal a client-side error."
    },
    "fwf-q4": {
      "type": "truefalse",
      "correct": true,
      "explanation": "With the developer tools, a proxy or `curl`, everything sent (URL, parameters, headers, cookies) can be modified. The server can therefore assume nothing about what reaches it."
    },
    "fwf-q5": {
      "type": "single",
      "correct": "a",
      "explanation": "`403 Forbidden` means that the server refuses access to the resource: the user is identified (or not) but has no right. `401` signals that authentication is required.",
      "whyWrong": {
        "d": "A redirection is a 3xx code (`301`, `302`).",
        "b": "An internal error is a 5xx code, for example `500`.",
        "c": "A timeout corresponds to a `408` or `504` code."
      }
    },
    "fwf-q6": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "The Network tab, `curl -v` and an interception proxy show the detail of requests and responses. The spell checker does not concern network traffic.",
      "whyWrong": {
        "b": "The spell checker does not look at HTTP exchanges."
      }
    },
    "fwf-q7": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Each request is independent. To recognize a user, the site uses an additional mechanism, most often a cookie containing a session identifier."
    },
    "fwf-q8": {
      "type": "single",
      "correct": "d",
      "explanation": "The origin is defined by the triplet protocol, host and port: `http://example.fr` and `https://example.fr` are two different origins. It is the basis of the same-origin policy.",
      "whyWrong": {
        "a": "The server’s location plays no part.",
        "b": "The previous page is the Referer header, another notion.",
        "c": "The site’s publisher has no relation with the origin."
      }
    },
    "fwf-q9": {
      "type": "single",
      "correct": "d",
      "explanation": "A script cannot read the responses or the content of a page of another origin: a malicious site opened in another tab cannot read your mailbox.",
      "whyWrong": {
        "c": "Encryption is provided by HTTPS, not by this policy.",
        "a": "Several sites can be visited in parallel.",
        "b": "The number of cookies is not its purpose."
      }
    },
    "fwf-q10": {
      "type": "single",
      "correct": "b",
      "explanation": "The padlock indicates an HTTPS connection with a valid certificate for the displayed name. It protects the exchanges in transit, but says nothing about the site’s honesty or how it keeps data.",
      "whyWrong": {
        "c": "A phishing site can have a padlock.",
        "a": "The padlock does not guarantee the absence of malware.",
        "d": "Encryption at rest is another protection."
      }
    },
    "fwf-q11": {
      "type": "short",
      "accepted": [
        "HTTPS",
        "https"
      ],
      "explanation": "HTTPS is HTTP on top of TLS: the exchanges are encrypted and the server is authenticated by a certificate."
    },
    "fwf-q12": {
      "type": "truefalse",
      "correct": false,
      "explanation": "A cookie is a small piece of data (text) that the browser keeps and sends back to the site. It does not run, but it can contain a session identifier whose theft is equivalent to stealing the session."
    },
    "fwf-q13": {
      "type": "multi",
      "correct": [
        "c",
        "d"
      ],
      "explanation": "`HttpOnly` limits theft by an injected script and `Secure` avoids sending in clear. A broad domain increases exposure, and a very long lifetime extends the validity of a stolen session.",
      "whyWrong": {
        "a": "A cookie accessible to all subdomains increases the attack surface.",
        "b": "A ten-year session remains exploitable long after a theft."
      }
    },
    "fwf-q14": {
      "type": "single",
      "correct": "a",
      "explanation": "Since HTTP has no memory, the server associates an identifier (sent in a cookie) with the user’s state: logged-in account, cart. Stealing the identifier amounts to stealing the session.",
      "whyWrong": {
        "b": "HTTP works through separate requests, with no permanent connection.",
        "d": "A session is not a configuration file.",
        "c": "The browser cache is another notion."
      }
    },
    "fwf-q15": {
      "type": "single",
      "correct": "c",
      "explanation": "Everything the client sends is under its control: an attacker can send unexpected values, directly and without going through the form. The server must validate everything.",
      "whyWrong": {
        "b": "A form’s content is readable by the server.",
        "d": "A form can perfectly well carry numbers.",
        "a": "The browser deletes nothing: the server receives the data."
      }
    },
    "fwf-q16": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Browser-side checking improves the user’s comfort but is trivially bypassed with a tool like `curl`. Security validation must be done on the server side."
    },
    "fwf-q17": {
      "type": "single",
      "correct": "a",
      "explanation": "The application pastes the input into the query text: the attacker slips SQL into it that changes the structure of the query (bypassing a login, reading other tables).",
      "whyWrong": {
        "b": "It is not a data replication.",
        "d": "It is not an encryption.",
        "c": "It is not a backup."
      }
    },
    "fwf-q18": {
      "type": "single",
      "correct": "b",
      "explanation": "With a parameterized query, the SQL text and the values are sent separately: a value can never change the structure of the query. Character filters can be bypassed.",
      "whyWrong": {
        "a": "Forbidding the apostrophe is bypassable and hinders legitimate names.",
        "c": "An injection fits in a few characters.",
        "d": "Hiding the error does not fix the flaw."
      }
    },
    "fwf-q19": {
      "type": "short",
      "accepted": [
        "XSS",
        "xss",
        "cross-site scripting"
      ],
      "explanation": "XSS (Cross-Site Scripting) inserts script into a page of the vulnerable site. It runs in the victim’s browser with the site’s rights."
    },
    "fwf-q20": {
      "type": "single",
      "correct": "d",
      "explanation": "Output encoding turns `<` into `&lt;` and prevents the browser from interpreting the content as code. Modern template engines do it by default; raw HTML insertion must be avoided.",
      "whyWrong": {
        "c": "Raw HTML lets script tags through.",
        "a": "Case does not change interpretation.",
        "b": "Encrypting the comment does not make it readable for the browser."
      }
    },
    "fwf-q21": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Parameters, form fields, headers and cookies come from the client and can be modified. The server’s source code is not in the request.",
      "whyWrong": {
        "b": "The server’s code is not sent with the request."
      }
    },
    "fwf-q22": {
      "type": "single",
      "correct": "c",
      "explanation": "Authentication establishes identity (password, MFA). Authorization decides, for each action, whether this identity has the right to perform it. Succeeding at the first never exempts you from the second.",
      "whyWrong": {
        "a": "Encrypting and backing up are other functions.",
        "b": "They are two distinct checks.",
        "d": "Both are checked on the server side."
      }
    },
    "fwf-q23": {
      "type": "single",
      "correct": "c",
      "explanation": "The hash of a password is stored, computed with Argon2 or bcrypt (slow and salted), so that a database leak does not give the passwords. A password is never sent back: it is reset.",
      "whyWrong": {
        "d": "A password in clear is exposed in a leak.",
        "a": "A key placed next to the data protects nothing.",
        "b": "Base64 is a reversible encoding, not a protection."
      }
    },
    "fwf-q24": {
      "type": "truefalse",
      "correct": false,
      "explanation": "A hidden button does not prevent calling the page’s address directly. The right of access must be checked by the server on every request."
    },
    "fwf-q25": {
      "type": "single",
      "correct": "b",
      "explanation": "IDOR (insecure direct object reference): the application uses the supplied identifier without checking that the user has the right to it. Changing 1043 to 1044 in the URL is enough to read someone else’s invoice.",
      "whyWrong": {
        "c": "That is brute force.",
        "d": "That is a stored XSS.",
        "a": "That is network eavesdropping."
      }
    },
    "fwf-q26": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "MFA, attempt limiting and identical messages make brute force and account enumeration harder. Stating whether an account exists helps the attacker target.",
      "whyWrong": {
        "a": "Revealing the existence of an account facilitates enumeration."
      }
    },
    "fwf-q27": {
      "type": "short",
      "accepted": [
        "least privilege",
        "principle of least privilege",
        "the principle of least privilege"
      ],
      "explanation": "Least privilege limits the impact of an error or a compromise: an account that can do almost nothing is of little use to an attacker."
    },
    "fwf-q28": {
      "type": "single",
      "correct": "a",
      "explanation": "The browser is under the user’s control. Only the server can enforce rights, on every request and for every object.",
      "whyWrong": {
        "c": "A check in the browser can be bypassed.",
        "b": "Rights can vary from one request to another.",
        "d": "A hidden menu does not prevent direct access."
      }
    },
    "fwf-q29": {
      "type": "single",
      "correct": "d",
      "explanation": "OWASP is a foundation that publishes free resources. Its Top 10 is an awareness document: it ranks the main families of risks, without claiming to be exhaustive.",
      "whyWrong": {
        "c": "It is not software.",
        "a": "It does not rank sites.",
        "b": "It is not a binding standard."
      }
    },
    "fwf-q30": {
      "type": "truefalse",
      "correct": true,
      "explanation": "It summarizes the most frequent or most serious risks. An application can be vulnerable to something else: it is completed by requirements (ASVS) and test methods (WSTG)."
    },
    "fwf-q31": {
      "type": "single",
      "correct": "a",
      "explanation": "`Strict-Transport-Security` (HSTS) tells the browser to reach the site only over HTTPS for the indicated duration, which avoids returns to HTTP.",
      "whyWrong": {
        "c": "`X-Content-Type-Options` prevents the browser from guessing a content’s type.",
        "b": "`Access-Control-Allow-Origin` allows other origins to read responses (CORS).",
        "d": "`Referrer-Policy` sets the origin information passed in the Referer header."
      }
    },
    "fwf-q32": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Knowing what you use, applying fixes and following alerts reduce exposure. Never updating leaves known flaws open.",
      "whyWrong": {
        "d": "Known flaws remain exploitable on an obsolete version."
      }
    },
    "fwf-q33": {
      "type": "single",
      "correct": "b",
      "explanation": "A trace shows paths, versions, SQL queries: as many clues for preparing an attack. A generic message is displayed and the detail is kept in the logs.",
      "whyWrong": {
        "d": "Slowdown is not the problem.",
        "c": "HTTP forbids nothing of the kind.",
        "a": "The trace has no effect on cookies."
      }
    },
    "fwf-q34": {
      "type": "short",
      "accepted": [
        "CSP",
        "csp",
        "Content-Security-Policy"
      ],
      "explanation": "The Content Security Policy (CSP) lists the origins allowed for scripts, styles, images and connections. It limits the impact of an XSS."
    },
    "fwf-q35": {
      "type": "single",
      "correct": "d",
      "explanation": "Applications like Juice Shop or DVWA are made to be attacked. Testing a system you are not authorized for is illegal, even without intent to harm.",
      "whyWrong": {
        "b": "A real site is not a training target.",
        "c": "Without authorization, access is illegal.",
        "a": "Not copying data does not cancel the offense."
      }
    },
    "fwf-q36": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Accessing a system without authorization is an offense, whatever the goal. Authorization must be prior and, for an organization, written."
    },
    "fwf-q37": {
      "type": "single",
      "correct": "c",
      "explanation": "Access must be limited to the strict minimum, nothing copied or shared, and the flaw reported to the person in charge (security address, reporting page, CERT). Immediate public disclosure exposes users.",
      "whyWrong": {
        "b": "Copying the data aggravates the offense and the leak.",
        "a": "Immediate publication exposes the data before it is fixed.",
        "d": "Continuing to explore goes beyond what is justifiable."
      }
    },
    "fwf-q38": {
      "type": "multi",
      "correct": [
        "a",
        "c"
      ],
      "explanation": "A good report lets people understand, reproduce and fix. Attaching personal data is unnecessary and dangerous, and demanding something in return turns the report into blackmail.",
      "whyWrong": {
        "d": "Masked captures are enough: keeping personal data is unnecessary and risky.",
        "b": "Demanding payment before explaining amounts to blackmail."
      }
    },
    "fwf-q39": {
      "type": "open",
      "model": "I recommend five checks. 1) Validate data on the server side, because the check in the browser can be bypassed. 2) Use parameterized queries to avoid SQL injection. 3) Encode the comments when displaying them to avoid XSS. 4) Store passwords as slow, salted hashes, and enable HTTPS with Secure and HttpOnly session cookies. 5) Check the right of access to each resource on the server side, display generic errors and keep a log. Finally I advise them to test their site locally or on a copy that belongs to them.",
      "criteria": [
        "At least four relevant checks are cited.",
        "The measures are linked to the risk they avoid.",
        "Testing on a site one owns is recommended."
      ],
      "explanation": "The basic checks cover validation, injections, display, authentication, transport and rights: these are the most frequent mistakes."
    },
    "fwf-q40": {
      "type": "open",
      "model": "The padlock indicates that the connection between my browser and the site is encrypted, and that the certificate matches the displayed domain name. This protects me against eavesdropping and modification along the way. But anyone can get a certificate for their own domain name, including a fake site imitating a bank. The padlock says nothing about the site’s honesty, about whether it protects my data well once received, or about the absence of vulnerabilities. So I must also check the exact address, not click on dubious links and use a password manager that only fills in the real site.",
      "criteria": [
        "What the padlock guarantees (encryption to the displayed name) is correctly described.",
        "The limit is explained: a malicious site can also have a certificate.",
        "A vigilance reflex (check the address, avoid dubious links) is given."
      ],
      "explanation": "The padlock protects transport and the identity of the domain name; trust in the site depends on other checks."
    }
  },
};
