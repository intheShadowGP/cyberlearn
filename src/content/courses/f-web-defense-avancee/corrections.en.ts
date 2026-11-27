// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "f-web-defense-avancee",
  questions: {
    "fwa-q1": {
      "type": "single",
      "correct": "b",
      "explanation": "The attack surface gathers the reachable routes, APIs, forms, uploaded files, third-party scripts, administration interfaces, dependencies and integrations. Reducing it is a first defensive measure.",
      "whyWrong": {
        "d": "The size of the files is not what defines the attack surface.",
        "a": "The volume of code is not the reachable surface.",
        "c": "Authorized users do not define what an attacker can reach."
      }
    },
    "fwa-q2": {
      "type": "single",
      "correct": "a",
      "explanation": "STRIDE: Spoofing, Tampering, Repudiation, Information disclosure, Denial of service, Elevation of privilege.",
      "whyWrong": {
        "d": "T designates data alteration.",
        "c": "R designates denying a performed action.",
        "b": "E designates privilege escalation."
      }
    },
    "fwa-q3": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Fixing a design weakness costs little at the diagram stage and a lot once the application is in production. The model is also updated at each major change."
    },
    "fwa-q4": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "The diagram represents actors, processes, data stores, flows and trust boundaries: this is where STRIDE is applied. The visual look of the interface does not appear in it.",
      "whyWrong": {
        "d": "The appearance of the interface is not an element of the threat model."
      }
    },
    "fwa-q5": {
      "type": "short",
      "accepted": [
        "STRIDE",
        "stride"
      ],
      "explanation": "STRIDE is a threat classification method proposed by Microsoft, used to examine each flow of a data flow diagram."
    },
    "fwa-q6": {
      "type": "single",
      "correct": "c",
      "explanation": "Elevation of privilege means obtaining higher rights than those granted. The other cases fall respectively under spoofing, tampering and denial of service.",
      "whyWrong": {
        "d": "That is identity impersonation (Spoofing).",
        "b": "That is alteration (Tampering).",
        "a": "That is denial of service."
      }
    },
    "fwa-q7": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Level 1 is the basic minimum, level 2 suits most applications handling sensitive data, and level 3 is reserved for the most critical applications. The level is chosen according to the data and the exposure."
    },
    "fwa-q8": {
      "type": "single",
      "correct": "d",
      "explanation": "When the proxy and the server interpret a request’s length differently, part of the bytes is read as the start of the next request, which may belong to another user.",
      "whyWrong": {
        "a": "TLS encryption is not involved.",
        "b": "Style sheets have nothing to do with it.",
        "c": "A reused password has nothing to do with request smuggling."
      }
    },
    "fwa-q9": {
      "type": "short",
      "accepted": [
        "Transfer-Encoding",
        "transfer-encoding"
      ],
      "explanation": "A conflict between `Content-Length` and `Transfer-Encoding: chunked` (CL.TE or TE.CL) makes the proxy and the server split the same request differently."
    },
    "fwa-q10": {
      "type": "single",
      "correct": "a",
      "explanation": "If an unkeyed input (for example `X-Forwarded-Host`) is reflected in a cached response, this booby-trapped response is served to all the following visitors.",
      "whyWrong": {
        "c": "That is a denial of service, not poisoning.",
        "b": "Emptying the cache does not distort its content.",
        "d": "The cache does not encrypt its content with an attacker’s key."
      }
    },
    "fwa-q11": {
      "type": "truefalse",
      "correct": true,
      "explanation": "The attacker sends a reset request with a `Host` they control: the link received by the victim points to their domain and hands them the token. The domain name must come from the configuration."
    },
    "fwa-q12": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "HTTP/2 end to end removes the splitting ambiguity, rejecting ambiguous requests closes the remaining case and updating fixes faulty parsers. Accepting malformed requests worsens the risk.",
      "whyWrong": {
        "b": "Tolerating malformed requests is precisely what allows desynchronization."
      }
    },
    "fwa-q13": {
      "type": "single",
      "correct": "d",
      "explanation": "With a URL like `/account/profile/x.css`, the cache thinks it is storing a static resource while it keeps the victim’s private page, then accessible to the attacker. Dynamic content must be marked `private` or `no-store`.",
      "whyWrong": {
        "c": "That is XSS or poisoning, not cache deception.",
        "b": "It is not bypassing authentication by cookie.",
        "a": "Hijacking a certificate is another attack, not web cache deception."
      }
    },
    "fwa-q14": {
      "type": "single",
      "correct": "c",
      "explanation": "The link starts with the trusted site’s domain but leads elsewhere: it serves phishing and diverts flows such as OAuth. The countermeasure is an allowlist of addresses.",
      "whyWrong": {
        "a": "A redirect does not give access to cookies.",
        "b": "It does not read server files.",
        "d": "It does not alter encryption."
      }
    },
    "fwa-q15": {
      "type": "single",
      "correct": "b",
      "explanation": "With `strict-dynamic`, the trust granted by the nonce propagates to the scripts that the approved script loads; host lists and `unsafe-inline` are ignored. The policy no longer depends on a host list to maintain.",
      "whyWrong": {
        "d": "Inline scripts remain subject to the nonce.",
        "c": "The CSP remains active.",
        "a": "No encryption is involved."
      }
    },
    "fwa-q16": {
      "type": "single",
      "correct": "a",
      "explanation": "With Trusted Types, sinks such as `innerHTML` only accept a value produced by a trusted policy, not a raw string: a large share of DOM-based XSS disappears at the source.",
      "whyWrong": {
        "b": "Certificates are a matter for TLS, not Trusted Types.",
        "c": "Cookies are not concerned.",
        "d": "Trusted Types do not identify users by email: they restrict strings reaching the DOM."
      }
    },
    "fwa-q17": {
      "type": "short",
      "accepted": [
        "Sec-Fetch-Site",
        "sec-fetch-site"
      ],
      "explanation": "`Sec-Fetch-Site` takes the values `cross-site`, `same-site`, `same-origin` or `none`. The server can use it to refuse unexpected cross-site requests that change state."
    },
    "fwa-q18": {
      "type": "truefalse",
      "correct": false,
      "explanation": "A fixed nonce can be read (for example through another flaw) and reused by the attacker in an injected script. It must be random, unpredictable and new for each response."
    },
    "fwa-q19": {
      "type": "multi",
      "correct": [
        "b",
        "c"
      ],
      "explanation": "COOP and COEP, combined, give the cross-origin isolation useful against processor side-channel attacks. `X-Powered-By` informs about the technology, and `no-store` sets caching.",
      "whyWrong": {
        "d": "`X-Powered-By` protects nothing and discloses information.",
        "a": "`no-store` sets caching, not isolation."
      }
    },
    "fwa-q20": {
      "type": "single",
      "correct": "b",
      "explanation": "The browser computes the hash of the loaded file and compares it with the indicated one: a modified file (compromised CDN) is refused. SRI neither encrypts nor limits users.",
      "whyWrong": {
        "d": "Encryption is a matter for HTTPS.",
        "a": "SRI does not care about the user’s identity.",
        "c": "SRI does not compress the file."
      }
    },
    "fwa-q21": {
      "type": "single",
      "correct": "c",
      "explanation": "An allowed host (CDN, analytics domain) may serve an old library or a JSONP endpoint that runs script chosen by the attacker. The nonce authorizes specific scripts, whoever hosts them.",
      "whyWrong": {
        "b": "The difficulty is not speed but bypassing.",
        "d": "Browsers handle host lists well.",
        "a": "A host list can require HTTPS."
      }
    },
    "fwa-q22": {
      "type": "single",
      "correct": "d",
      "explanation": "Deep or costly requests saturate the server. Depth and computed cost are capped, persisted queries are used and authorization is checked field by field.",
      "whyWrong": {
        "b": "The absence of a limit is the cause of the problem.",
        "c": "Type validation is part of the defense.",
        "a": "Publishing the schema does not prevent abuse."
      }
    },
    "fwa-q23": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Introspection describes the whole schema (types, queries, sensitive fields) and helps discover poorly protected functions. It is disabled in production, unless explicitly needed for a public API."
    },
    "fwa-q24": {
      "type": "single",
      "correct": "b",
      "explanation": "The WebSocket handshake is an HTTP request that carries the cookies. Without checking the `Origin` header or an explicit token, a page from another site can open the connection on the victim’s behalf.",
      "whyWrong": {
        "d": "The channel’s encryption is not what is attacked.",
        "a": "Saturation is a denial of service.",
        "c": "A persistent connection is not a hijacking."
      }
    },
    "fwa-q25": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Object-level (BOLA) and function-level (BFLA) authorization, the list of modifiable fields (against mass assignment) and rate limiting are basic protections. Returning the whole object exposes unnecessary data.",
      "whyWrong": {
        "c": "Excessive data exposure is a classic API flaw."
      }
    },
    "fwa-q26": {
      "type": "short",
      "accepted": [
        "BOLA",
        "bola"
      ],
      "explanation": "BOLA (Broken Object Level Authorization) is the API equivalent of IDOR: the identifier supplied by the client is accepted without checking the right of access to the object."
    },
    "fwa-q27": {
      "type": "single",
      "correct": "c",
      "explanation": "A per-HTTP-request limit sees only one operation, whereas the request contains hundreds (for example password attempts). The limit must apply to operations or to cost.",
      "whyWrong": {
        "b": "Aliases encrypt nothing.",
        "d": "Aliases do not change the IP address.",
        "a": "Logging remains active."
      }
    },
    "fwa-q28": {
      "type": "single",
      "correct": "d",
      "explanation": "Using the token requires a proof of possession of a key (mTLS certificate, DPoP proof signed per request). An attacker who steals the token without the key cannot use it.",
      "whyWrong": {
        "b": "A token with no expiry worsens the risk.",
        "a": "Being readable by all services is a weakness.",
        "c": "It does not replace authentication."
      }
    },
    "fwa-q29": {
      "type": "single",
      "correct": "a",
      "explanation": "The attacker publishes for example `lodahs` in place of `lodash` hoping for a typing mistake: installing it then runs their code. The name and the publisher are checked and permitted dependencies are controlled.",
      "whyWrong": {
        "d": "It is the opposite of a correction: the trap exploits the mistake.",
        "b": "Locking is a defense, not an attack.",
        "c": "Signing is a defense, not an attack."
      }
    },
    "fwa-q30": {
      "type": "truefalse",
      "correct": true,
      "explanation": "The lock file fixes the exact versions (and their hashes): `npm ci` always installs the same packages. Updates become reviewed decisions, not surprises."
    },
    "fwa-q31": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "A strict CSP, SRI and above all fewer third-party scripts reduce exposure to skimming scripts. Allowing any origin cancels these protections.",
      "whyWrong": {
        "a": "Allowing all origins removes the CSP’s protection."
      }
    },
    "fwa-q32": {
      "type": "short",
      "accepted": [
        "Magecart",
        "magecart",
        "skimming",
        "web skimming"
      ],
      "explanation": "Magecart covers groups that inject capture (skimming) scripts into payment pages, directly or through a compromised third-party supplier."
    },
    "fwa-q33": {
      "type": "single",
      "correct": "c",
      "explanation": "An SBOM (CycloneDX, SPDX) lets you, as soon as a vulnerability is announced in a component, know within minutes which applications embed it and in which versions.",
      "whyWrong": {
        "d": "An SBOM does not list the users allowed to change the code.",
        "b": "An SBOM is not an attack log.",
        "a": "An SBOM is not a backup of the source code."
      }
    },
    "fwa-q34": {
      "type": "single",
      "correct": "a",
      "explanation": "Everything sent to the browser can be read by the visitor: a secret key placed in the JavaScript is public. Secrets stay on the server side, in a vault.",
      "whyWrong": {
        "b": "A secrets vault is the recommended location.",
        "c": "A server-side environment variable is acceptable.",
        "d": "A secrets manager is acceptable."
      }
    },
    "fwa-q35": {
      "type": "single",
      "correct": "b",
      "explanation": "Named fields (who, what, where, result, correlation identifier) are searched and cross-referenced automatically, which makes detection reliable. The format is not meant to hide the logs.",
      "whyWrong": {
        "a": "The structure does not aim at compression.",
        "c": "Administrators must be able to read them.",
        "d": "It does not remove the need to keep logs."
      }
    },
    "fwa-q36": {
      "type": "single",
      "correct": "d",
      "explanation": "The WAF rule recognizes the exploitation request and blocks it, which buys time. The flaw stays in the code: the fix must follow.",
      "whyWrong": {
        "b": "The code is not modified by the rule.",
        "c": "Virtual patching installs no update.",
        "a": "Virtual patching does not encrypt exchanges: it blocks a known exploitation with a rule."
      }
    },
    "fwa-q37": {
      "type": "truefalse",
      "correct": false,
      "explanation": "A WAF can be bypassed (encodings, variants) and does not know the business logic. It reduces the exposure window but does not replace the fix at the source."
    },
    "fwa-q38": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "You contain and preserve the evidence, find and fix the flaw, renew the exposed secrets. Merely deleting the file leaves the door open and possible other backdoors.",
      "whyWrong": {
        "c": "Without an investigation, the attacker can return through the same flaw or another backdoor."
      }
    },
    "fwa-q39": {
      "type": "open",
      "model": "I start by modeling the threat: data flow diagram with the trust boundaries (internet to the site and the API, site to payment provider, employee to the back office), then STRIDE on the sensitive flows and abuse cases. I choose an ASVS level (2 in general) and record the accepted risks with their owner. I then harden: object- and function-level authorization on the API, bound tokens, per-operation limiting, strict CSP with nonce and Trusted Types, SRI and few third-party scripts on the payment page, back office behind phishing-resistant MFA. For infrastructure: HTTP/2 end to end, controlled Host header, cache configured for dynamic content. Finally, structured logs, alerts, possible virtual patching, response plan and disclosure page.",
      "criteria": [
        "The threat modeling is described (flows, boundaries, STRIDE, requirement level).",
        "Concrete hardening measures cover API, browser, infrastructure or back office.",
        "Detection and response (logs, alerts, plan) are mentioned."
      ],
      "explanation": "Advanced defense chains modeling, hardening, detection and response: each step feeds the next."
    },
    "fwa-q40": {
      "type": "open",
      "model": "Detection: alerts on CSP violations and on SRI hashes that no longer match, monitoring of the page’s unusual network destinations, a report from the supplier or a third party. Response: immediately remove the script from the payment page, assess the exposure period from the logs, identify the data likely to have been captured (card entries), inform the payment provider and the relevant authorities, notify the affected customers. Prevention: stop loading third-party scripts on the payment page, or isolate them in a frame; a nonce CSP that limits destinations; SRI when possible; inventory (SBOM) and periodic review of suppliers; regular testing of the payment page.",
      "criteria": [
        "Detection through CSP, SRI or network monitoring is described.",
        "The response includes removing the script, assessing exposure and notification.",
        "Prevention (fewer third-party scripts, CSP, SRI, inventory) is proposed."
      ],
      "explanation": "Removing the script is not enough: you must measure what may have been captured and durably reduce the surface offered to third parties."
    }
  },
};
