// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "o-acces-pratique",
  questions: {
    "opr-q1": {
      "type": "single",
      "correct": "c",
      "explanation": "The directory (Active Directory, Entra ID, LDAP) groups accounts, groups and their attributes: it is the basis of all access controls.",
      "whyWrong": {
        "b": "A directory does not store workstation backups.",
        "d": "Filtering mail is the role of a mail gateway.",
        "a": "Monitoring temperature belongs to server room operations."
      }
    },
    "opr-q2": {
      "type": "single",
      "correct": "a",
      "explanation": "Joining, moving and leaving are the three moments when rights must be created, adjusted and then removed.",
      "whyWrong": {
        "d": "That is not an account lifecycle.",
        "b": "That concerns software.",
        "c": "That concerns hardware."
      }
    },
    "opr-q3": {
      "type": "single",
      "correct": "d",
      "explanation": "The HR system knows about arrivals and departures. Using it as the source of truth avoids forgotten accounts and delays.",
      "whyWrong": {
        "a": "Unreliable and untraced.",
        "b": "A scattered source.",
        "c": "Fragile and quickly outdated."
      }
    },
    "opr-q4": {
      "type": "single",
      "correct": "b",
      "explanation": "Disabling cuts access at once. Deletion is deferred to preserve logs and allow a possible investigation or data recovery.",
      "whyWrong": {
        "d": "Freeing licenses is not the reason to disable first.",
        "c": "That is the opposite of the goal.",
        "a": "The manager must be informed."
      }
    },
    "opr-q5": {
      "type": "truefalse",
      "correct": true,
      "explanation": "A dormant account is a discreet entry for an attacker: nobody notices an unusual sign-in. It is detected by its last sign-in date."
    },
    "opr-q6": {
      "type": "short",
      "accepted": [
        "dormant",
        "dormant account",
        "a dormant account",
        "inactive"
      ],
      "explanation": "A dormant account stays active without use. It is detected by a last sign-in report and disabled after checking with managers."
    },
    "opr-q7": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Groups, department attributes and account state feed the access rules. The brand of the personal computer plays no role.",
      "whyWrong": {
        "b": "Unrelated to rights."
      }
    },
    "opr-q8": {
      "type": "single",
      "correct": "d",
      "explanation": "Recommendations (ANSSI, NIST) favor length and screening against compromised password lists over forced expiry, which pushes people to weak choices.",
      "whyWrong": {
        "a": "Forced expiry weakens choices.",
        "c": "Too short and too predictable.",
        "b": "Managers are recommended."
      }
    },
    "opr-q9": {
      "type": "single",
      "correct": "a",
      "explanation": "Email is used to reset other accounts and administration accounts have wide rights: protecting them first reduces risk the most.",
      "whyWrong": {
        "b": "These accounts are, on the contrary, heavily used.",
        "d": "They are in fact heavily targeted.",
        "c": "Every account has an identifier."
      }
    },
    "opr-q10": {
      "type": "single",
      "correct": "b",
      "explanation": "Entering the number shown on the sign-in screen forces you to look at the request: you can no longer approve at random a notification triggered by an attacker.",
      "whyWrong": {
        "c": "Number matching does not protect against physical phone theft.",
        "d": "It does not address mobile network outages.",
        "a": "It does not address forgetting the password."
      }
    },
    "opr-q11": {
      "type": "truefalse",
      "correct": false,
      "explanation": "A typed code can be relayed by a fake site or intercepted. The security key is bound to the legitimate site and does not work on a fake site."
    },
    "opr-q12": {
      "type": "short",
      "accepted": [
        "fido2",
        "webauthn",
        "fido",
        "fido2/webauthn"
      ],
      "explanation": "FIDO2 (with WebAuthn) defines public-key credentials bound to the site: it is the basis of passkeys and security keys that resist phishing."
    },
    "opr-q13": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "An independent channel, logging and a framed process stop the attacker from bypassing MFA through support. A reset with no check cancels the protection.",
      "whyWrong": {
        "d": "It bypasses MFA."
      }
    },
    "opr-q14": {
      "type": "open",
      "model": "I roll out in stages. I start with administrators and email using security keys, then extend to all employees with an authenticator app or a passkey. I explain the reasons to the teams, offer assistance during the first weeks and a backup method. I frame the recovery of a lost second factor with an independent identity check and logging. I document and date the exceptions, then remove the weakest methods such as SMS when possible, and I track indicators: the share of protected accounts and the number of open exceptions.",
      "criteria": [
        "A staged rollout starting with the most exposed accounts is described.",
        "User support (information, assistance) is planned.",
        "A safe recovery process is defined.",
        "Exceptions are limited and tracking by indicators is mentioned."
      ],
      "explanation": "A progressive, supported rollout reduces lockouts; recovery and exceptions are the weak points to frame."
    },
    "opr-q15": {
      "type": "single",
      "correct": "c",
      "explanation": "The identity provider authenticates the user and then issues an assertion or a token to the federated applications.",
      "whyWrong": {
        "a": "It does not manage identities.",
        "d": "A print server attests no identity.",
        "b": "A backup manager attests no identity."
      }
    },
    "opr-q16": {
      "type": "single",
      "correct": "b",
      "explanation": "SAML carries XML assertions signed by the identity provider. OpenID Connect does the same job with JSON tokens.",
      "whyWrong": {
        "d": "A mail protocol.",
        "a": "A time synchronization protocol.",
        "c": "A network addressing protocol."
      }
    },
    "opr-q17": {
      "type": "single",
      "correct": "c",
      "explanation": "SCIM propagates the creation, change and deletion of accounts from the directory to the applications: no more accounts forgotten after a departure.",
      "whyWrong": {
        "a": "SCIM does not encrypt browser exchanges.",
        "b": "It does not measure bandwidth.",
        "d": "It does not generate random passwords."
      }
    },
    "opr-q18": {
      "type": "single",
      "correct": "a",
      "explanation": "A single account opens many applications: it must be protected more (resistant MFA, monitoring) than the others.",
      "whyWrong": {
        "c": "It is the opposite with federation.",
        "b": "Sessions can expire.",
        "d": "MFA is set up in the same place."
      }
    },
    "opr-q19": {
      "type": "truefalse",
      "correct": true,
      "explanation": "The user enters their password only with the identity provider. The application only receives a signed assertion or token."
    },
    "opr-q20": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Signature, issuer, recipient and a limited lifetime prevent the use of a forged or replayed assertion. Accepting any identity provider cancels trust.",
      "whyWrong": {
        "b": "It cancels trust."
      }
    },
    "opr-q21": {
      "type": "short",
      "accepted": [
        "attributes",
        "attribute",
        "claims",
        "claim"
      ],
      "explanation": "Attributes (claims) are the information passed with the assertion or token; applications use them to decide access."
    },
    "opr-q22": {
      "type": "single",
      "correct": "d",
      "explanation": "With RBAC, rights are attached to roles or groups, then people receive the roles matching their function.",
      "whyWrong": {
        "c": "RBAC is not end-to-end backup encryption.",
        "b": "RBAC is not a local network.",
        "a": "RBAC is not email redirection."
      }
    },
    "opr-q23": {
      "type": "single",
      "correct": "b",
      "explanation": "Roles simplify joining, moving and reviews: you change the role rather than hundreds of individual rights.",
      "whyWrong": {
        "c": "That is the opposite of the point.",
        "a": "Reviews are still necessary.",
        "d": "Administrators are still needed."
      }
    },
    "opr-q24": {
      "type": "single",
      "correct": "a",
      "explanation": "The person who requests a sensitive action (a payment, an extended right) is not the one who approves it, which limits fraud and errors.",
      "whyWrong": {
        "d": "Each person must not administer everything: that is the opposite of separation.",
        "c": "Tasks are not split at random but according to rules.",
        "b": "That is the opposite."
      }
    },
    "opr-q25": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Rights drift over time. Managers know the real needs and can confirm or remove what is no longer justified."
    },
    "opr-q26": {
      "type": "truefalse",
      "correct": false,
      "explanation": "An elevation must be approved, time-limited and logged. A right left with no end date becomes a debt and a target."
    },
    "opr-q27": {
      "type": "short",
      "accepted": [
        "abac",
        "abac (attribute-based access control)"
      ],
      "explanation": "ABAC evaluates attributes of the user, the resource and the context to decide; it complements RBAC for fine-grained rules."
    },
    "opr-q28": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Justification, approval and an expiry make access traced and limited. Granting access before validation bypasses the control.",
      "whyWrong": {
        "a": "It bypasses the control."
      }
    },
    "opr-q29": {
      "type": "single",
      "correct": "c",
      "explanation": "The daily account reads emails and browses: it is exposed. Separating administration prevents a malicious click from handing over high rights.",
      "whyWrong": {
        "a": "Separating accounts costs a little time but protects high rights.",
        "d": "Passwords must be distinct.",
        "b": "MFA is still required."
      }
    },
    "opr-q30": {
      "type": "single",
      "correct": "d",
      "explanation": "A service account has an owner, rights limited to its function, a renewed secret in a vault, and is not used like a person’s account.",
      "whyWrong": {
        "c": "The secret must be renewed.",
        "b": "It does not sign in like a person.",
        "a": "That breaks least privilege."
      }
    },
    "opr-q31": {
      "type": "single",
      "correct": "a",
      "explanation": "The emergency account is excluded from the usual mechanisms to regain access if SSO or MFA is unavailable. Its use triggers an alert and a review.",
      "whyWrong": {
        "b": "It is reserved for emergencies.",
        "c": "An emergency account is not permanent access for contractors.",
        "d": "It does not replace MFA elsewhere."
      }
    },
    "opr-q32": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Provider access must be time-limited and removed at the end of the assignment: a forgotten access is an entry door for an attacker."
    },
    "opr-q33": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "A vault, renewal and limited scope reduce exposure. A clear-text secret in code ends up in repositories and backups.",
      "whyWrong": {
        "a": "It would be readable by everyone."
      }
    },
    "opr-q34": {
      "type": "open",
      "model": "I refuse permanent access and propose time-limited access, strictly suited to the task, with a named account and MFA. The access is approved by the system owner, opened for the duration of the intervention and then removed automatically. The intervention goes through a controlled workstation or jump host and its actions are logged, or even supervised. At the end of the assignment, I check that the account is disabled and record the operation in the register of provider access.",
      "criteria": [
        "Permanent access is refused in favor of time-limited access.",
        "The scope is suited to the task (least privilege) with a named account and MFA.",
        "Traceability or supervision of the intervention is planned.",
        "Removal of access at the end of the assignment is verified."
      ],
      "explanation": "Provider access is one of the most common entry points: duration, scope, named account and traceability limit the risk."
    },
    "opr-q35": {
      "type": "single",
      "correct": "b",
      "explanation": "Two countries within minutes of each other is impossible travel: the account is probably being used by a third party.",
      "whyWrong": {
        "a": "Normal behavior.",
        "c": "Normal behavior.",
        "d": "Normal behavior."
      }
    },
    "opr-q36": {
      "type": "single",
      "correct": "d",
      "explanation": "An automatic forward to the outside lets the attacker read messages silently, even after a password change.",
      "whyWrong": {
        "a": "Normal use.",
        "b": "Normal use.",
        "c": "Normal use."
      }
    },
    "opr-q37": {
      "type": "single",
      "correct": "c",
      "explanation": "You cut access by revoking sessions and tokens and resetting password and factors; logs are preserved to investigate.",
      "whyWrong": {
        "b": "You would destroy evidence.",
        "d": "Waiting makes the damage worse.",
        "a": "That makes no sense."
      }
    },
    "opr-q38": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Without logs, you cannot know since when the account was used or what was accessed. Their retention period must cover the detection delay."
    },
    "opr-q39": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Attackers often install persistence: rules, authorized applications, MFA methods. The interface theme has nothing to do with it.",
      "whyWrong": {
        "c": "The theme’s color has no relevance in this check."
      }
    },
    "opr-q40": {
      "type": "short",
      "accepted": [
        "password spraying",
        "spraying"
      ],
      "explanation": "Password spraying spreads attempts over many accounts. It is detected by looking at failures per source rather than per account."
    },
    "opr-q41": {
      "type": "single",
      "correct": "a",
      "explanation": "You disable at once to cut access, and delete later after transferring useful data. Abrupt deletion can destroy needed items.",
      "whyWrong": {
        "b": "Immediate deletion may destroy data the company needs.",
        "c": "An active account leaves exploitable access for a month.",
        "d": "Renaming does not prevent signing in."
      }
    },
    "opr-q42": {
      "type": "single",
      "correct": "c",
      "explanation": "Type 10 is a remote interactive session (RDP). A logon at an unusual hour and for an unusual account is a signal to qualify, for example with the source and earlier failures.",
      "whyWrong": {
        "a": "A local logon corresponds to type 2.",
        "d": "A service corresponds to type 5.",
        "b": "Access to a share corresponds to type 3."
      }
    },
    "opr-q43": {
      "type": "short",
      "accepted": [
        "4625"
      ],
      "explanation": "Event 4625 records a failed logon; a series of 4625 followed by a 4624 suggests a successful brute force."
    }
  },
};
