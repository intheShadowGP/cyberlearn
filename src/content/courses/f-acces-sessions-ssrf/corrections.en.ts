// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "f-acces-sessions-ssrf",
  questions: {
    "acc-q1": {
      "type": "single",
      "correct": "d",
      "explanation": "The application accepts an identifier supplied by the client without checking that the object belongs to them: this is an insecure direct object reference (IDOR), the horizontal form of broken access control.",
      "whyWrong": {
        "c": "No SQL query is hijacked here: it is authorization that is missing.",
        "b": "No script is injected into the page.",
        "a": "The server is not made to send a request to an internal service."
      }
    },
    "acc-q2": {
      "type": "truefalse",
      "correct": false,
      "explanation": "A UUID reduces enumeration but often ends up leaking (logs, shared links, responses of other APIs). Only the server-side check of the object’s ownership fixes the flaw."
    },
    "acc-q3": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Server-side ownership check, deny by default and an explicit list of modifiable fields (against mass assignment) fix the cause.",
      "whyWrong": {
        "a": "Hiding a button improves the interface, but the route can still be called directly: it is not access control."
      }
    },
    "acc-q4": {
      "type": "open",
      "model": "Prepare at least two agent accounts (A and B) with distinct cases, and a supervisor account. Map all routes and requests (interception proxy) with the supervisor account. Replay each request: with agent B on A’s cases (horizontal check: expect 403 or 404), with an agent on supervisor functions (vertical check), without authentication, and with additional fields (role, owner) in modification requests. Also test alternative methods (PUT, DELETE) and exports. Record each deviation with the request, the response and the account used, then propose automated regression tests.",
      "criteria": [
        "Several accounts of the same level and of a different level are used.",
        "Both horizontal and vertical checks are tested.",
        "Requests are replayed directly, not only through the interface.",
        "Traceability or test automation is mentioned."
      ],
      "explanation": "Automatic scanners do not know business rules: testing access control remains a methodical, manual approach, supported by a proxy."
    },
    "acc-q5": {
      "type": "single",
      "correct": "a",
      "explanation": "`HttpOnly` removes the cookie from `document.cookie`: a script injected by XSS cannot read it directly (it can still act within the page, hence the need to fix the XSS itself).",
      "whyWrong": {
        "b": "`SameSite` limits cross-site sending of the cookie, without preventing its reading by JavaScript.",
        "d": "`Path` delimits the paths that receive the cookie.",
        "c": "`Max-Age` sets the cookie’s lifetime."
      }
    },
    "acc-q6": {
      "type": "short",
      "accepted": [
        "__Host-",
        "__host-",
        "__Host"
      ],
      "explanation": "A cookie prefixed `__Host-` is only accepted by the browser if it is `Secure`, with `Path=/` and without `Domain`: it is bound to the exact host and cannot be imposed from a subdomain."
    },
    "acc-q7": {
      "type": "truefalse",
      "correct": true,
      "explanation": "If the identifier changes at authentication, the one the attacker imposed beforehand becomes useless. It is also regenerated on any privilege change."
    },
    "acc-q8": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Identical messages (no account enumeration), limiting and MFA (against brute force and password reuse), robust reset tokens.",
      "whyWrong": {
        "b": "A password sent in clear implies that it is known or stored reversibly, and it then lingers in mailboxes."
      }
    },
    "acc-q9": {
      "type": "single",
      "correct": "b",
      "explanation": "CSRF does not steal the cookie: it exploits the fact that the browser adds it itself. The server sees an authenticated request, without being able to tell it from a deliberate action, unless there is a token or an origin check.",
      "whyWrong": {
        "a": "No brute force is involved: the attacker does not need the cookie.",
        "d": "The server does not send the cookie to other sites.",
        "c": "CORS passes no cookie to the attacker."
      }
    },
    "acc-q10": {
      "type": "truefalse",
      "correct": false,
      "explanation": "CORS controls the **reading** of responses by another origin. A cross-site HTML form is sent and executed by the server without going through CORS. Protection relies on SameSite, anti-CSRF tokens and origin checking."
    },
    "acc-q11": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Reflecting the origin, validating it by simple string inclusion or accepting `null` (the origin of sandboxed documents) lets a third-party site read authenticated responses.",
      "whyWrong": {
        "c": "A fixed and exact list of allowed origins is the correct configuration."
      }
    },
    "acc-q12": {
      "type": "short",
      "accepted": [
        "Strict",
        "SameSite=Strict"
      ],
      "explanation": "`Strict` never sends the cookie on a cross-site request, even when following a link: safer, but a user arriving from an external link appears logged out. `Lax` sends it on top-level GET navigation."
    },
    "acc-q13": {
      "type": "single",
      "correct": "c",
      "explanation": "169.254.169.254 is the address of the metadata service of the major cloud providers; it is reachable from the instance. It can deliver the temporary credentials of the instance’s role, hence compromises of entire cloud accounts.",
      "whyWrong": {
        "b": "The slowdown is a minor effect, unrelated to the danger.",
        "d": "This is not a display problem.",
        "a": "It is not routable on the Internet, but it is from the server, which is precisely the problem."
      }
    },
    "acc-q14": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Allowlist, verification of the address actually used (against DNS rebinding) and outbound network filtering form a defense in depth.",
      "whyWrong": {
        "d": "A denylist is bypassed by other spellings (`127.1`, `0x7f000001`, `[::1]`, a DNS name pointing to 127.0.0.1, a redirect)."
      }
    },
    "acc-q15": {
      "type": "open",
      "model": "If the parameter is concatenated to the directory, `file=../../../etc/passwd` leaves `/srv/reports/`: this is a path traversal, which can expose configuration files, keys or code. Safest fix: no longer accept a path, but an identifier mapped on the server side to a list of allowed files (for example in the database, checking that the user is entitled to this report). Second-best fix: normalize the path (`realpath`) after concatenation, check that it starts with `/srv/reports/`, refuse null bytes and outbound symbolic links; to be completed by a service account that only has access to this directory.",
      "criteria": [
        "Path traversal and its impact are explained.",
        "An identifier or allowlist solution is proposed first.",
        "A path normalization and prefix check solution is proposed.",
        "Access control to the report or least privilege of the account is mentioned."
      ],
      "explanation": "Filters that remove “../” are often bypassed (encoding, `....//`): you reason on the final normalized path, never on the received string."
    },
    "acc-q16": {
      "type": "single",
      "correct": "c",
      "explanation": "The ASVS lists precise, testable requirements, grouped by theme and by level. It is the basis for a specification, a code review or an audit, but it is not a tool.",
      "whyWrong": {
        "b": "The ASVS is a catalog of requirements, not a scanner.",
        "a": "It encrypts nothing.",
        "d": "It does not replace any protection equipment or software."
      }
    },
    "acc-q17": {
      "type": "single",
      "correct": "d",
      "explanation": "Vertical escalation means reaching a function reserved for a higher role. The route must check the caller’s role and deny by default anything not explicitly allowed.",
      "whyWrong": {
        "b": "Nothing here indicates a hijacked SQL query.",
        "a": "Session fixation concerns the session identifier, not the rights.",
        "c": "CORS limits cross-origin reading, not the authorization of calls."
      }
    },
    "acc-q18": {
      "type": "truefalse",
      "correct": true,
      "explanation": "A 403 confirms to the attacker that the object exists; a uniform 404 reduces the information given by enumeration. The decision must still always be taken on the server side, before any data is returned."
    },
    "acc-q19": {
      "type": "single",
      "correct": "b",
      "explanation": "If an API copies the request body into the object, a client can add sensitive fields to it (`role`, `owner`). An explicit list of modifiable fields is defined.",
      "whyWrong": {
        "d": "It is not a multiple sending, but a lack of filtering of fields.",
        "a": "The number of objects loaded is not the issue.",
        "c": "The problem is not assigning a common role but copying the received fields."
      }
    },
    "acc-q20": {
      "type": "single",
      "correct": "a",
      "explanation": "Chrome and Edge treat a cookie without a SameSite attribute as `Lax`. Not all browsers do: the attribute is set explicitly rather than relying on the default.",
      "whyWrong": {
        "b": "`Strict` must be requested explicitly.",
        "d": "`None` requires `Secure` and must be declared.",
        "c": "The `Lax` default already restricts sending on some cross-site requests."
      }
    },
    "acc-q21": {
      "type": "truefalse",
      "correct": false,
      "explanation": "A stolen or copied session identifier remains valid as long as the server has not invalidated it. Logout must destroy the session on the server side, and inactivity expiry must be enforced by the server."
    },
    "acc-q22": {
      "type": "single",
      "correct": "c",
      "explanation": "A GET can be triggered by an image tag, a link or a redirect: if an action is tied to it, it becomes exploitable through CSRF without even a form. Actions that change state use POST, PUT or DELETE, with a token.",
      "whyWrong": {
        "b": "There is no such limit in the protocol.",
        "a": "GET works over HTTPS.",
        "d": "A GET carries cookies like the other methods."
      }
    },
    "acc-q23": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "SameSite, the token and origin checking complement each other. CORS does not protect: the cross-site form is sent and executed even if the response is not readable.",
      "whyWrong": {
        "d": "CORS controls the reading of responses, not the sending of the request."
      }
    },
    "acc-q24": {
      "type": "single",
      "correct": "b",
      "explanation": "The same address can be written in many ways (decimal, hexadecimal, IPv6, DNS name, redirect). Only an allowlist, completed by checking the resolved address, is reliable.",
      "whyWrong": {
        "d": "The flaw is not blocking too much, but letting variants through.",
        "a": "A denylist can also contain internal addresses.",
        "c": "The HTTP standard does not forbid such lists."
      }
    },
    "acc-q25": {
      "type": "short",
      "accepted": [
        "DNS rebinding",
        "dns rebinding",
        "rebinding DNS",
        "rebinding"
      ],
      "explanation": "In DNS rebinding, the DNS response changes between the check and the use. The countermeasure is to resolve the name once, check the address obtained, then connect to that same address."
    },
    "acc-q26": {
      "type": "truefalse",
      "correct": true,
      "explanation": "The server follows the redirect and connects to the internal target although the initial URL was allowed. Redirects are refused or every hop is rechecked."
    },
    "acc-q27": {
      "type": "single",
      "correct": "d",
      "explanation": "BOLA is the API equivalent of IDOR: an object identifier supplied by the client is accepted without checking the right of access. It is the most frequent and most exploited API flaw.",
      "whyWrong": {
        "b": "Injection remains important, but is not at the top of the API ranking.",
        "a": "The absence of rate limiting is a distinct weakness.",
        "c": "The software version is information, not the main flaw."
      }
    },
    "acc-q28": {
      "type": "single",
      "correct": "a",
      "explanation": "The header is supplied by the attacker. Imposing the algorithm on the server side avoids accepting “none” and confusion between symmetric and asymmetric algorithms.",
      "whyWrong": {
        "b": "This is precisely the weakness to avoid.",
        "c": "Trying several algorithms opens the door to confusion.",
        "d": "A test with “none” ends up in production."
      }
    },
    "acc-q29": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Authorization per object and function, schema validation and rate limiting reduce abuse. Hiding on the client side fields that were already sent protects nothing: the content is in the response.",
      "whyWrong": {
        "d": "Sensitive fields sent to the client can be read by anyone who observes the response."
      }
    },
    "acc-q30": {
      "type": "short",
      "accepted": [
        "3",
        "level 3",
        "L3"
      ],
      "explanation": "Level 1 is the minimum for any application, level 2 suits most applications handling sensitive data, and level 3 is reserved for critical applications."
    },
    "acc-q31": {
      "type": "single",
      "correct": "c",
      "explanation": "WebAuthn signs a challenge by tying it to the domain name: on a fake site, the browser provides nothing usable. Typed codes (SMS, email) can be relayed in real time by a fake site.",
      "whyWrong": {
        "d": "An SMS code typed on a fake site is replayed at once.",
        "b": "A secret question is a knowledge factor, often guessable.",
        "a": "An email code is relayed like an SMS code."
      }
    },
    "acc-q32": {
      "type": "single",
      "correct": "b",
      "explanation": "The client generates a random value tied to the session, sends it and checks that it comes back unchanged. Without it, an attacker can make the victim finish a flow with a code obtained for the attacker’s own account.",
      "whyWrong": {
        "c": "`state` encrypts nothing.",
        "d": "Lifetime is set by the authorization server.",
        "a": "The requested rights are described by the `scope` parameter."
      }
    },
    "acc-q33": {
      "type": "truefalse",
      "correct": true,
      "explanation": "A prefix comparison or a wildcard lets the authorization code be redirected to a path or domain controlled by the attacker. Exact comparison, character for character, is the rule."
    },
    "acc-q34": {
      "type": "short",
      "accepted": [
        "PKCE",
        "pkce"
      ],
      "explanation": "PKCE (Proof Key for Code Exchange) ties the code to a secret generated by the client at the start: without this secret, an intercepted code cannot be exchanged for a token."
    },
    "acc-q35": {
      "type": "single",
      "correct": "d",
      "explanation": "A reset link gives control of the account. Single-use and valid for a short time, it is unusable after the reset or if the email is read later.",
      "whyWrong": {
        "a": "Tokens must be random, not memorizable.",
        "b": "The token is generally sent by email or SMS.",
        "c": "A token valid for several accounts would be a serious flaw."
      }
    },
    "acc-q36": {
      "type": "multi",
      "correct": [
        "a",
        "b"
      ],
      "explanation": "A poorly validated `redirect_uri` hands the code to the attacker; an ignored `state` lets the victim be forced into a prepared flow. PKCE and signature verification are protections, not mistakes.",
      "whyWrong": {
        "d": "PKCE strengthens the flow.",
        "c": "Verifying the signature is mandatory."
      }
    },
    "acc-q37": {
      "type": "single",
      "correct": "a",
      "explanation": "Enumeration is recognized by identifiers that follow each other, with a mix of denials and 200 responses: the attacker is looking for accessible objects. Correlation by account makes the pattern visible.",
      "whyWrong": {
        "c": "An isolated access to the home page is normal.",
        "d": "Spaced logins are not suspicious in themselves.",
        "b": "A predictable peak at a given hour is legitimate traffic."
      }
    },
    "acc-q38": {
      "type": "truefalse",
      "correct": false,
      "explanation": "A scanner does not know who may see which invoice: it cannot judge that a 200 response is a flaw. These flaws are found through multi-account tests and log monitoring."
    },
    "acc-q39": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Access denials, privilege changes and authentication failures feed detection. Passwords must never appear in logs: they would expose accounts in case of a leak.",
      "whyWrong": {
        "b": "Logging a password, even a wrong one, creates a potential leak (typos close to the real password)."
      }
    },
    "acc-q40": {
      "type": "open",
      "model": "I search the access logs, over the whole exposure period, for accounts that read objects that do not belong to them: consecutive identifiers, an unusual ratio of denials to successes, abnormal volumes on the route. I list the objects actually read and, if personal data was exposed, I prepare the appropriate notification. To prevent a return: an automated two-account test that requires 403 or 404 on another user’s object, a review of the other routes of the same type, a centralized ownership check in the data layer, rate limiting and alerts on enumeration patterns.",
      "criteria": [
        "The search for past exploitation in the logs is described with precise criteria.",
        "The exposed data is assessed and its notification considered.",
        "An automated regression test and a detection measure are proposed."
      ],
      "explanation": "Fixing the route does not tell whether it was exploited: log retro-analysis and the regression test complete the fix."
    }
  },
};
