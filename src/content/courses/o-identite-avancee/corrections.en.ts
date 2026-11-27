// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "o-identite-avancee",
  questions: {
    "oia-q1": {
      "type": "single",
      "correct": "d",
      "explanation": "The decision point (PDP) evaluates the request using policies; the enforcement point (PEP) then carries out the decision in front of the resource.",
      "whyWrong": {
        "b": "A print server evaluates no access policy.",
        "c": "An Internet access router does not evaluate access policies for applications.",
        "a": "It cannot be trusted to decide."
      }
    },
    "oia-q2": {
      "type": "single",
      "correct": "a",
      "explanation": "A central provider makes it possible to apply MFA, detection and policies in one place, and to remove an access everywhere in a single operation.",
      "whyWrong": {
        "d": "That is the opposite of the goal.",
        "c": "Federation makes partners easier.",
        "b": "Logging is still necessary."
      }
    },
    "oia-q3": {
      "type": "single",
      "correct": "b",
      "explanation": "OAuth 2.0 is a framework for delegating access to resources. OpenID Connect is added on top to provide the authenticated identity of the user.",
      "whyWrong": {
        "a": "The roles are swapped.",
        "c": "OpenID Connect and OAuth 2.0 do not encrypt disks.",
        "d": "They work over the Internet."
      }
    },
    "oia-q4": {
      "type": "single",
      "correct": "c",
      "explanation": "A short token expires quickly: if stolen, it is useful for a short time. The better-protected refresh token lets a new one be obtained without re-entry.",
      "whyWrong": {
        "d": "Authentication is still needed.",
        "b": "That is the opposite.",
        "a": "Logging is still necessary."
      }
    },
    "oia-q5": {
      "type": "truefalse",
      "correct": true,
      "explanation": "A poorly checked attribute (group, role) can grant undue rights. Its source, signature and scope are verified before it is relied on."
    },
    "oia-q6": {
      "type": "short",
      "accepted": [
        "pkce",
        "pkce (proof key for code exchange)"
      ],
      "explanation": "PKCE binds the authorization code to the client that requested it: an intercepted code can no longer be exchanged by a third party."
    },
    "oia-q7": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Signature, issuer, audience and expiry guarantee that the token is authentic, meant for this service and still valid. Its length proves nothing.",
      "whyWrong": {
        "c": "The length of the token in characters proves nothing about its authenticity."
      }
    },
    "oia-q8": {
      "type": "single",
      "correct": "b",
      "explanation": "Zero Trust evaluates each request according to identity, device and context, without granting trust merely because of a location in the network.",
      "whyWrong": {
        "a": "That is the perimeter model.",
        "d": "That is the opposite.",
        "c": "That is the opposite."
      }
    },
    "oia-q9": {
      "type": "single",
      "correct": "c",
      "explanation": "The device (managed, encrypted, up to date), location, risk and sensitivity of the action enter the decision, in addition to identity.",
      "whyWrong": {
        "b": "The wallpaper is not a risk signal.",
        "a": "The number of files is not an access signal.",
        "d": "The keyboard brand is not a risk signal."
      }
    },
    "oia-q10": {
      "type": "single",
      "correct": "d",
      "explanation": "Conditional access adapts the requirement to context: resistant MFA outside the trusted network, refusal of a non-compliant device, restriction according to sensitivity.",
      "whyWrong": {
        "b": "That is the opposite of a conditional rule.",
        "c": "Factors are still needed.",
        "a": "That is the opposite of the goal."
      }
    },
    "oia-q11": {
      "type": "single",
      "correct": "a",
      "explanation": "Zero Trust assumes breach: segmenting limits what a compromised session or device can reach.",
      "whyWrong": {
        "b": "It complements it, does not replace it.",
        "d": "Monitoring is still necessary.",
        "c": "That is the opposite."
      }
    },
    "oia-q12": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Zero Trust grants no trust merely because of location: the device is evaluated like any other at each request."
    },
    "oia-q13": {
      "type": "short",
      "accepted": [
        "pep",
        "policy enforcement point"
      ],
      "explanation": "The PEP carries out the decision of the decision point: it allows or blocks the request right in front of the resource."
    },
    "oia-q14": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Explicit verification, least privilege and continuous evaluation form the core of Zero Trust. Trust tied to the internal network is its opposite.",
      "whyWrong": {
        "b": "That is the perimeter model."
      }
    },
    "oia-q15": {
      "type": "single",
      "correct": "b",
      "explanation": "ABAC evaluates attributes of the user, the resource and the context (place, time, sensitivity), which a static role does not do.",
      "whyWrong": {
        "d": "That removes any decision.",
        "c": "A fixed list ignores context.",
        "a": "Open access for all employees ignores the resource’s sensitivity."
      }
    },
    "oia-q16": {
      "type": "single",
      "correct": "a",
      "explanation": "Too many roles make the model unreadable: nobody knows who has what, and overly broad roles get granted. Roles and attributes are combined to keep the model readable.",
      "whyWrong": {
        "b": "The number of roles does not affect bandwidth.",
        "d": "It does not delete accounts.",
        "c": "It does not strengthen encryption."
      }
    },
    "oia-q17": {
      "type": "single",
      "correct": "c",
      "explanation": "Recertification has managers confirm or remove rights. It detects rights that have become useless, which pile up otherwise.",
      "whyWrong": {
        "b": "That worsens the accumulation.",
        "a": "That removes traceability.",
        "d": "That removes traceability."
      }
    },
    "oia-q18": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Versioned, tested policies kept outside the code can be reviewed and changed without redeploying the application; they are also easier to trace."
    },
    "oia-q19": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Separation of duties spreads the steps of a critical action across several people (request, approval, execution). Read-only rights are not enough."
    },
    "oia-q20": {
      "type": "short",
      "accepted": [
        "recertification",
        "access recertification",
        "access review"
      ],
      "explanation": "Access recertification confirms that each right is still justified; it is more effective with a presentation of the differences."
    },
    "oia-q21": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Requester, resource, action, policy and result make it possible to replay and explain the decision. The interface theme is of no interest.",
      "whyWrong": {
        "d": "The theme’s color has no value for auditing a decision."
      }
    },
    "oia-q22": {
      "type": "single",
      "correct": "d",
      "explanation": "A long-lived secret copied into a repository or an image remains useful to whoever obtains it. Short-lived identities reduce that value.",
      "whyWrong": {
        "c": "A static secret does not speed up exchanges.",
        "a": "It does not remove the need for logging.",
        "b": "It does not prevent attacks: it makes them easier."
      }
    },
    "oia-q23": {
      "type": "single",
      "correct": "a",
      "explanation": "Each workload receives an attested, short-lived identity usable for mTLS, which replaces long-lived shared secrets.",
      "whyWrong": {
        "c": "That is what we try to avoid.",
        "b": "An IP address proves nothing.",
        "d": "It is automated instead."
      }
    },
    "oia-q24": {
      "type": "single",
      "correct": "b",
      "explanation": "With mTLS, the client and the server each present a certificate: the exchange is encrypted and both identities are verified.",
      "whyWrong": {
        "d": "That is classic TLS.",
        "a": "Exchanges are encrypted.",
        "c": "It does not use passwords."
      }
    },
    "oia-q25": {
      "type": "truefalse",
      "correct": true,
      "explanation": "A credential that expires within minutes or hours limits the window of use of a theft, unlike a key valid for years."
    },
    "oia-q26": {
      "type": "short",
      "accepted": [
        "rotation",
        "secret rotation",
        "key rotation",
        "renewal"
      ],
      "explanation": "Rotation, ideally automatic, reduces the time during which a stolen secret remains usable."
    },
    "oia-q27": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "No long-lived secret, limited scope and automatic renewal reduce exposure. A key in a public image is accessible to everyone.",
      "whyWrong": {
        "a": "It would be accessible to everyone."
      }
    },
    "oia-q28": {
      "type": "open",
      "model": "I treat the key as compromised: I revoke and replace it immediately, then check its recent uses in the logs. I remove the key from the repository and its history, and store the new secret in a vault. At the root, I replace the long-lived key with a short-lived identity issued on demand, with rights limited to the real use. To prevent recurrence, I enable automatic repository scanning to detect secrets before merge, keep an inventory of non-human identities with an owner, and plan automatic rotation.",
      "criteria": [
        "The key is considered compromised, revoked and replaced immediately.",
        "Recent uses are checked in the logs.",
        "The long-lived key is replaced by a short-lived identity or a vault.",
        "Prevention (repository scanning, inventory, rotation) is proposed."
      ],
      "explanation": "A secret in a repository is compromised as soon as it is copied: it is replaced, investigated, then the need for a long-lived secret is removed."
    },
    "oia-q29": {
      "type": "single",
      "correct": "c",
      "explanation": "All federated applications trust it: an attacker who controls it can impersonate any user.",
      "whyWrong": {
        "a": "The identity provider stores identities, not public images.",
        "d": "It is linked to many federated applications.",
        "b": "It logs sign-ins: that is exactly what makes monitoring it useful."
      }
    },
    "oia-q30": {
      "type": "single",
      "correct": "d",
      "explanation": "Few accounts, named, protected by resistant MFA and used from dedicated workstations, with just-in-time rights.",
      "whyWrong": {
        "c": "That removes traceability.",
        "b": "Devices must be controlled.",
        "a": "That breaks least privilege."
      }
    },
    "oia-q31": {
      "type": "single",
      "correct": "a",
      "explanation": "A new signing certificate or a new federated trust makes it possible to forge identities: any change must be alerted and approved.",
      "whyWrong": {
        "b": "Common event.",
        "c": "Common event.",
        "d": "No security impact."
      }
    },
    "oia-q32": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Applications accept assertions from the trusted provider: if an attacker controls it, they forge identities without knowing any password."
    },
    "oia-q33": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Federation changes, high-rights credentials and bursts of failures signal abuse. An updated avatar is a trivial event.",
      "whyWrong": {
        "d": "A trivial event."
      }
    },
    "oia-q34": {
      "type": "open",
      "model": "I disable the account and revoke its sessions and tokens, activate the emergency accounts and warn the response team and management. I examine recent changes to the federation: signing certificates, trusts, rights, authorized applications, and remove or isolate whatever is suspicious. If signing keys are involved, I replace them and invalidate the tokens already issued. I use the logs exported outside the provider to measure the extent. I then restore a clean configuration, restore authentication gradually starting with sensitive accounts, and strengthen administration and alerts.",
      "criteria": [
        "The account is disabled and its sessions revoked, emergency accounts activated.",
        "The federation configuration is audited and suspicious elements removed.",
        "Signing keys are replaced and tokens invalidated if necessary.",
        "Exported logs are used and a gradual restoration is planned."
      ],
      "explanation": "A provider compromise is a major incident: contain, clean up the trust, then restore gradually."
    },
    "oia-q35": {
      "type": "single",
      "correct": "b",
      "explanation": "If the main provider goes down, these accounts make it possible to restore access. They are rare, sealed and their use triggers an alert.",
      "whyWrong": {
        "c": "They do not exempt from protection.",
        "d": "Emergency accounts do not permanently replace named accounts.",
        "a": "They do not give permanent access to each administrator."
      }
    },
    "oia-q36": {
      "type": "single",
      "correct": "c",
      "explanation": "With the signing keys, an attacker forges valid tokens. They must be replaced and the tokens issued with the old keys made invalid.",
      "whyWrong": {
        "d": "Waiting lets the attacker act.",
        "b": "Informing only end users does not solve the key compromise.",
        "a": "You would lose the evidence."
      }
    },
    "oia-q37": {
      "type": "single",
      "correct": "d",
      "explanation": "The exercise validates that emergency accounts, backups and the restoration procedure really work, and reveals forgotten dependencies.",
      "whyWrong": {
        "a": "Typing speed has no link with resilience.",
        "b": "Too partial.",
        "c": "The sign-in interface color has no link with resilience."
      }
    },
    "oia-q38": {
      "type": "truefalse",
      "correct": false,
      "explanation": "An emergency account is excluded from the usual protections: its use must be exceptional, alerted and reviewed. Daily use makes it a target."
    },
    "oia-q39": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Tested emergency access, a saved configuration and up-to-date contacts make quick recovery possible. Deleting logs would prevent any investigation.",
      "whyWrong": {
        "d": "It prevents the investigation."
      }
    },
    "oia-q40": {
      "type": "short",
      "accepted": [
        "rto",
        "recovery time objective"
      ],
      "explanation": "The RTO sets the recovery objective: it sizes backups, redundancy and emergency procedures."
    },
    "oia-q41": {
      "type": "single",
      "correct": "a",
      "explanation": "Conditional access evaluates context (device, location, session risk, resource sensitivity) and adapts the requirement: allow, strengthen the factor or deny.",
      "whyWrong": {
        "d": "An account name’s length is not a risk signal.",
        "c": "The theme has nothing to do with risk.",
        "b": "Password strength does not describe the sign-in context."
      }
    },
    "oia-q42": {
      "type": "single",
      "correct": "b",
      "explanation": "A dynamically issued, short-lived token expires quickly; a static secret stays valid until rotated and leaks easily through the code repository.",
      "whyWrong": {
        "c": "Permissions still need least-privilege control.",
        "a": "Readability is not the reason.",
        "d": "Sharing an account is a bad practice."
      }
    },
    "oia-q43": {
      "type": "single",
      "correct": "d",
      "explanation": "The emergency account must remain usable if the identity provider or MFA fails, but any use must raise an alert and be reviewed.",
      "whyWrong": {
        "c": "Daily use exposes it and blurs detection.",
        "b": "A shared secret rules out accountability.",
        "a": "Monitoring it is, on the contrary, essential."
      }
    }
  },
};
