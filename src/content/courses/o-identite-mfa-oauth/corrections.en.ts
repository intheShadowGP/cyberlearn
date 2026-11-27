// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "o-identite-mfa-oauth",
  questions: {
    "id-q1": {
      "type": "single",
      "correct": "a",
      "explanation": "A security key is a physical object held by the user: a possession factor. The PIN that unlocks it adds a knowledge factor.",
      "whyWrong": {
        "d": "That is a password or code.",
        "c": "That is biometrics.",
        "b": "Location is a context signal, not one of the three classic categories of factor."
      }
    },
    "id-q2": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Password, SMS code and TOTP code are values the user types on the fake site; the proxy replays them immediately on the real site.",
      "whyWrong": {
        "a": "The passkey is bound to the origin: the browser does not present it to the fake domain, and a signature obtained for another domain is refused."
      }
    },
    "id-q3": {
      "type": "truefalse",
      "correct": true,
      "explanation": "The browser includes the origin in the signed data and the credential is only associated with the legitimate domain. This is what makes FIDO2 phishing-resistant by construction."
    },
    "id-q4": {
      "type": "short",
      "accepted": [
        "mfa fatigue",
        "push bombing",
        "mfa bombing",
        "mfa fatigue attack"
      ],
      "explanation": "MFA fatigue (or notification bombing) exploits weariness or confusion. Countermeasures: entering a number displayed on screen, geographic context in the notification, limiting the number of requests, and above all FIDO2."
    },
    "id-q15": {
      "type": "open",
      "model": "1) Inventory of accounts, applications and current MFA methods; enable SSO for as many applications as possible. 2) Priority to privileged accounts: hardware FIDO2 keys (two per administrator), conditional access requiring them. 3) Pilot of passkeys with a volunteer population, documentation and support. 4) Wave-by-wave rollout, progressive disabling of SMS and simple notifications, keeping a TOTP or a number-matching notification as a temporary fallback. 5) Account recovery: identity verification in person or through the manager with support, one-time temporary access code (Temporary Access Pass), never a simple secret question or an unverified call. 6) Measure: share of phishing-resistant sign-ins, then block the weak methods.",
      "criteria": [
        "Privileged accounts are handled first with FIDO2.",
        "The rollout is progressive, with a pilot and support.",
        "Account recovery is secured (identity verification, temporary access).",
        "Weak methods are progressively disabled."
      ],
      "explanation": "The weak link of a strong MFA is often the reset procedure: attackers call support pretending to be the user."
    },
    "id-q31": {
      "type": "single",
      "correct": "c",
      "explanation": "Biometrics (fingerprint, face) is an inherence factor: it depends on the user themselves. It is often used to unlock a local authenticator.",
      "whyWrong": {
        "a": "That is a password.",
        "d": "That is an object.",
        "b": "Location is a context signal, not a factor category like inherence."
      }
    },
    "id-q32": {
      "type": "single",
      "correct": "d",
      "explanation": "If support can reset a factor on a simple call, an attacker uses it to take the account. The procedure must verify identity and use a temporary access.",
      "whyWrong": {
        "a": "Account recovery is a problem not by its speed but by what it bypasses.",
        "c": "It does not encrypt the account: it allows resetting a factor.",
        "b": "It does not remove the password: it resets factors."
      }
    },
    "id-q33": {
      "type": "truefalse",
      "correct": true,
      "explanation": "A passkey authenticates the user with a key pair specific to the site: no more password to steal, guess or type on a fake site."
    },
    "id-q5": {
      "type": "single",
      "correct": "b",
      "explanation": "OpenID Connect adds the id_token (signed JWT) and the userinfo endpoint to OAuth 2.0 to authenticate the user.",
      "whyWrong": {
        "a": "SAML is another federation protocol.",
        "d": "Kerberos is an internal authentication protocol.",
        "c": "LDAP is a directory."
      }
    },
    "id-q6": {
      "type": "truefalse",
      "correct": false,
      "explanation": "The access token is intended for the API (resource server) and can be opaque to the client. Using an access token as proof of identity exposes to substitution attacks (a token obtained for another application). The client authenticates the user with the OIDC id_token."
    },
    "id-q7": {
      "type": "single",
      "correct": "b",
      "explanation": "With PKCE, the code exchange requires the secret code_verifier that only the legitimate client has. An intercepted code becomes unusable. PKCE is recommended for all clients, including confidential ones.",
      "whyWrong": {
        "d": "CORS handles cross-origin access.",
        "a": "HSTS enforces HTTPS.",
        "c": "SameSite limits cookies."
      }
    },
    "id-q8": {
      "type": "short",
      "accepted": [
        "state",
        "the state",
        "the state parameter"
      ],
      "explanation": "The client generates an unpredictable state tied to the user’s session and verifies it is identical on return. Otherwise, an attacker can get their own authorization to complete in the victim’s session."
    },
    "id-q9": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c",
        "d"
      ],
      "explanation": "Signature (with the keys published by the IdP), issuer, audience, expiry, and the nonce when it was sent: each omitted control opens a possibility of impersonation.",
      "whyWrong": {
        "e": "The look of the interface has no security value."
      }
    },
    "id-q10": {
      "type": "single",
      "correct": "a",
      "explanation": "The application holds a refresh token tied to the consent, independent of the password. The consent must be revoked (remove the application from the directory), its tokens invalidated and users’ consent restricted.",
      "whyWrong": {
        "d": "The token remains valid.",
        "b": "MFA no longer comes into play.",
        "c": "Consent does not depend on the day of the week."
      }
    },
    "id-q14": {
      "type": "open",
      "model": "Problems: 1) implicit flow (`response_type=token`): token exposed in the URL, the history and Referer headers, discouraged by RFC 9700; 2) no PKCE nor state; 3) excessive scopes: a notes application does not need to read and write the mailbox nor all files; 4) redirect_uri accepted by prefix: `https://notes.exemple.fr.attaquant.example` or a vulnerable path could receive the token. Fix: `response_type=code` with `code_challenge` (S256) and `state`, `scope=openid profile Notes.ReadWrite` (or the minimal scope), code exchange on the client side with the verifier; on the authorization server side, exact list of registered redirect_uris, mandatory PKCE, implicit flow disabled for this client, short-lived access tokens.",
      "criteria": [
        "The implicit flow is identified and replaced by authorization code + PKCE.",
        "The excess of scopes is noted and a minimal scope proposed.",
        "The prefix comparison of redirect_uri is identified as dangerous.",
        "The addition of state is proposed."
      ],
      "explanation": "These four flaws are among the most frequent in OAuth integrations found in audits."
    },
    "id-q34": {
      "type": "single",
      "correct": "c",
      "explanation": "The authorization server sends the code back to this address. It must be registered in advance and compared exactly, otherwise the code can be diverted.",
      "whyWrong": {
        "b": "The redirect_uri parameter does not carry a password.",
        "a": "The language is not set by this parameter.",
        "d": "The token lifetime is not set by this parameter."
      }
    },
    "id-q35": {
      "type": "single",
      "correct": "d",
      "explanation": "In the implicit flow, the access token is returned in the URL fragment: it leaks through history, logs and extensions. The authorization code with PKCE replaces it.",
      "whyWrong": {
        "b": "It is the opposite.",
        "a": "It does not impose it.",
        "c": "The implicit flow does not encrypt cookies."
      }
    },
    "id-q36": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Framed consent, review of applications and minimal scopes reduce the risk of a malicious application authorized by a victim.",
      "whyWrong": {
        "a": "It is the open door to abuse."
      }
    },
    "id-q11": {
      "type": "single",
      "correct": "c",
      "explanation": "The decision depends on attributes of the subject (department), the resource (the patient’s department) and the context (managed workstation): it is ABAC. RBAC alone cannot express the patient–department relation.",
      "whyWrong": {
        "d": "It does not handle context.",
        "b": "It leaves the owner to decide.",
        "a": "It is a common model."
      }
    },
    "id-q12": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Zero Trust precisely removes the trust granted to network position. Each access is evaluated according to identity, device and context."
    },
    "id-q13": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Sign-in risk, device state (managed, up to date, encrypted) and strength of authentication are key signals of conditional access.",
      "whyWrong": {
        "c": "Wallpaper is not a security signal."
      }
    },
    "id-q16": {
      "type": "short",
      "accepted": [
        "800-207",
        "sp 800-207",
        "nist sp 800-207",
        "207"
      ],
      "explanation": "NIST SP 800-207 (2020) defines the principles and components of a Zero Trust architecture: decision point, policy enforcement point, signal sources."
    },
    "id-q37": {
      "type": "single",
      "correct": "b",
      "explanation": "Least privilege limits the right to the strict necessary, in level (read) as in scope (this dashboard).",
      "whyWrong": {
        "a": "Far too broad.",
        "c": "Far too broad.",
        "d": "Far too broad."
      }
    },
    "id-q38": {
      "type": "single",
      "correct": "a",
      "explanation": "Over time, a role is created for each particular case. Roles become numerous and overlap: auditing rights becomes difficult.",
      "whyWrong": {
        "d": "Many roles do not remove rights: they make them confusing.",
        "c": "Encryption is not affected by the number of roles.",
        "b": "Local Wi-Fi has nothing to do with roles."
      }
    },
    "id-q39": {
      "type": "single",
      "correct": "d",
      "explanation": "The decision point evaluates identity, device and context then instructs the enforcement point to allow or refuse the session.",
      "whyWrong": {
        "b": "A wallpaper decides no access.",
        "a": "A network cable carries data; it decides nothing.",
        "c": "A printer decides no access."
      }
    },
    "id-q40": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Conditional access can require a compliant device, block data download or ask for a stronger factor depending on the device’s state."
    },
    "id-q17": {
      "type": "single",
      "correct": "c",
      "explanation": "Arrival (joiner), move (mover) and departure (leaver) trigger the creation, adjustment and removal of rights.",
      "whyWrong": {
        "a": "These words do not designate identity lifecycle events.",
        "d": "Days of the week are not lifecycle events.",
        "b": "Those are applications."
      }
    },
    "id-q18": {
      "type": "single",
      "correct": "b",
      "explanation": "SCIM describes a format and an API to automatically create, modify and delete accounts in applications from the directory.",
      "whyWrong": {
        "a": "It is a web protocol.",
        "d": "It is a naming protocol.",
        "c": "It is a mail protocol."
      }
    },
    "id-q19": {
      "type": "single",
      "correct": "a",
      "explanation": "An unused account is monitored by no one: an attacker who takes it goes unnoticed. Automatic disabling after inactivity reduces this risk.",
      "whyWrong": {
        "b": "Electricity consumption is not the reason to remove them.",
        "d": "A dormant account does not slow passwords.",
        "c": "The law does not forbid keeping them: it is a risk matter."
      }
    },
    "id-q20": {
      "type": "single",
      "correct": "d",
      "explanation": "The HR system is the source of truth about arrivals, moves and departures. Automating it avoids oversights.",
      "whyWrong": {
        "c": "Unreliable.",
        "b": "Unreliable.",
        "a": "Unreliable."
      }
    },
    "id-q21": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Each manager reviews the rights of their scope and confirms or removes. Decisions are traced and serve as audit evidence."
    },
    "id-q22": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Automating arrivals and departures, and regularly verifying rights, limits orphan accounts and drift. An oral request leaves no trace.",
      "whyWrong": {
        "b": "No traceability or validation."
      }
    },
    "id-q23": {
      "type": "short",
      "accepted": [
        "iga",
        "the iga"
      ],
      "explanation": "IGA (Identity Governance and Administration) covers the life cycle of identities, provisioning, access reviews and compliance."
    },
    "id-q24": {
      "type": "single",
      "correct": "b",
      "explanation": "The cookie or token proves the user is authenticated. By stealing it, the attacker acts without knowing the password or facing MFA.",
      "whyWrong": {
        "d": "Of no interest.",
        "a": "Of no interest.",
        "c": "Of no interest."
      }
    },
    "id-q25": {
      "type": "single",
      "correct": "a",
      "explanation": "A short token expires quickly: if stolen, the window of exploitation is brief. A refresh token allows renewing it under control.",
      "whyWrong": {
        "b": "Limiting lifetime does not save bandwidth.",
        "d": "It does not remove MFA.",
        "c": "A short token does not speed up authentication."
      }
    },
    "id-q26": {
      "type": "single",
      "correct": "d",
      "explanation": "Access is not judged just once at sign-in: a change of context (risky device, compromised account) can revoke the session in progress.",
      "whyWrong": {
        "c": "Continuous evaluation does not delete logging.",
        "b": "It does not lengthen token lifetimes: it allows revoking them.",
        "a": "It does not disable MFA."
      }
    },
    "id-q27": {
      "type": "single",
      "correct": "c",
      "explanation": "A token bound to the device’s key (proof of possession) is unusable elsewhere: the thief does not have the key. This is the principle of device-bound tokens.",
      "whyWrong": {
        "d": "It would expose it.",
        "b": "It would expose it.",
        "a": "It would expose it."
      }
    },
    "id-q28": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Sessions and tokens already issued may remain valid. After an incident, sessions, refresh tokens and consents must also be revoked."
    },
    "id-q29": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Impossible travel, a new forwarding rule and a sudden change of context are classic signals. A usual sign-in is not one.",
      "whyWrong": {
        "d": "It is normal use."
      }
    },
    "id-q30": {
      "type": "short",
      "accepted": [
        "revocation",
        "the revocation"
      ],
      "explanation": "Revocation immediately removes the validity of a token, a session or a consent. It is part of the response to a session theft."
    },
    "id-q41": {
      "type": "single",
      "correct": "b",
      "explanation": "Only the hash (`code_challenge`) travels in the request. The `code_verifier` is presented only when exchanging the code: an intercepted code is therefore useless without it.",
      "whyWrong": {
        "a": "The verifier must never travel in the first request.",
        "d": "The password is never sent to the client.",
        "c": "The token is issued after the code exchange, not before."
      }
    },
    "id-q42": {
      "type": "single",
      "correct": "d",
      "explanation": "A partial comparison (prefix, wildcard) may let through an address controlled by an attacker, who would then receive the code or token.",
      "whyWrong": {
        "c": "Speed is not the point.",
        "b": "The browser imposes nothing of the kind.",
        "a": "The comparison encrypts nothing."
      }
    },
    "id-q43": {
      "type": "short",
      "accepted": [
        "state"
      ],
      "explanation": "The `state` parameter is generated by the client, returned unchanged by the authorization server and checked on return."
    }
  },
};
