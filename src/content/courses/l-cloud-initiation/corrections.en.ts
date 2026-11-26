// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "l-cloud-initiation",
  questions: {
    "cin-q1": {
      "type": "single",
      "correct": "b",
      "explanation": "The cloud (cloud computing) means using, over the Internet, resources — computing, storage, software — hosted by a provider and billed according to use.",
      "whyWrong": {
        "d": "That would be a local installation.",
        "a": "It is not a cable.",
        "c": "A USB stick is a local medium."
      }
    },
    "cin-q2": {
      "type": "single",
      "correct": "c",
      "explanation": "Elasticity makes it possible to increase or reduce resources (power, storage) within minutes, and to pay only for what is used.",
      "whyWrong": {
        "d": "It is not compression.",
        "b": "Encryption has to be configured.",
        "a": "Unrelated to elasticity."
      }
    },
    "cin-q3": {
      "type": "truefalse",
      "correct": true,
      "explanation": "The public cloud is shared: the provider isolates customers through logical mechanisms. This is what allows lower costs, but it requires configuring your own access properly."
    },
    "cin-q4": {
      "type": "single",
      "correct": "d",
      "explanation": "A public cloud shares the infrastructure among many customers; a private cloud is reserved for a single organization. The level of security depends mainly on the configuration, not on the name.",
      "whyWrong": {
        "b": "That is not systematic.",
        "a": "An account is needed in both cases.",
        "c": "A private cloud uses a network."
      }
    },
    "cin-q5": {
      "type": "short",
      "accepted": [
        "region",
        "a region",
        "the region"
      ],
      "explanation": "A provider spreads its data centers across regions (for example “Paris” or “Frankfurt”). The choice of region affects latency, continuity and where the data is stored."
    },
    "cin-q6": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Speed, pay-per-use billing and accessibility are real advantages of the cloud. However, the customer keeps security responsibilities.",
      "whyWrong": {
        "c": "The customer remains responsible for its access, its configuration and its data."
      }
    },
    "cin-q7": {
      "type": "single",
      "correct": "a",
      "explanation": "Several regions make it possible to place services near users, to respect legal location constraints and to keep working if a region is unavailable.",
      "whyWrong": {
        "b": "That is not the purpose.",
        "c": "Backups remain possible.",
        "d": "That is not a criterion."
      }
    },
    "cin-q8": {
      "type": "single",
      "correct": "a",
      "explanation": "In IaaS (infrastructure as a service), the provider rents virtual machines; the customer chooses, installs, updates and secures the system and applications.",
      "whyWrong": {
        "c": "In SaaS, the customer simply uses software.",
        "b": "In PaaS, the provider manages the system.",
        "d": "It is an example of SaaS."
      }
    },
    "cin-q9": {
      "type": "single",
      "correct": "b",
      "explanation": "SaaS (software as a service) provides a ready-to-use application. The customer mainly manages its accounts, rights and data.",
      "whyWrong": {
        "d": "IaaS provides machines to administer.",
        "c": "PaaS provides a platform for developers.",
        "a": "It is a deployment mode, not a service model."
      }
    },
    "cin-q10": {
      "type": "single",
      "correct": "d",
      "explanation": "Even in SaaS, the customer decides who accesses its data: accounts, rights, shares, authentication. The provider secures the technical foundation.",
      "whyWrong": {
        "a": "It cannot decide for the customer.",
        "b": "The browser has no such role.",
        "c": "Nothing is automatic."
      }
    },
    "cin-q11": {
      "type": "truefalse",
      "correct": false,
      "explanation": "The customer remains responsible for its accounts, authentication, sharing rights and data. Only the application and the infrastructure are managed by the provider."
    },
    "cin-q12": {
      "type": "short",
      "accepted": [
        "shared responsibility",
        "the shared responsibility",
        "shared responsibility model"
      ],
      "explanation": "The shared responsibility model specifies what the provider secures (the foundation) and what the customer secures (configuration, identities, data). The boundary varies between IaaS, PaaS and SaaS."
    },
    "cin-q13": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "In IaaS, system, firewall, accounts and data are the customer’s job. The physical security of the data center remains the provider’s.",
      "whyWrong": {
        "a": "It is the provider’s responsibility."
      }
    },
    "cin-q14": {
      "type": "open",
      "model": "The provider protects the infrastructure: buildings, servers, base network, isolation between customers. But the security of our data also depends on what we configure: who has an account, with which rights, whether strong authentication is enabled, whether storage is public, whether keys or passwords are exposed. Most data leaks in the cloud come from a customer misconfiguration, not from a provider flaw. We must therefore manage access, enable MFA, limit sharing, encrypt and back up, and monitor the logs.",
      "criteria": [
        "The provider’s role (the foundation) is acknowledged.",
        "The customer’s responsibility for access and configuration is explained.",
        "An example of misconfiguration is given.",
        "At least two concrete measures are proposed."
      ],
      "explanation": "The cloud does not remove responsibility: it divides it differently."
    },
    "cin-q15": {
      "type": "single",
      "correct": "c",
      "explanation": "The root (or owner) account can do everything, including deleting the whole account. It is protected with strong authentication and not used day to day.",
      "whyWrong": {
        "b": "It has no rights to protect.",
        "a": "Its rights are limited.",
        "d": "It is not the main account."
      }
    },
    "cin-q16": {
      "type": "single",
      "correct": "d",
      "explanation": "A second factor (code, app, security key) prevents an attacker who knows the password from signing in. It is one of the most effective measures against account theft.",
      "whyWrong": {
        "b": "It adds a step.",
        "a": "The login name remains necessary.",
        "c": "That is not its role."
      }
    },
    "cin-q17": {
      "type": "single",
      "correct": "c",
      "explanation": "The root account has no limit: a handling mistake or the theft of its credentials affects the whole account. Accounts with limited rights are created for everyday work.",
      "whyWrong": {
        "d": "It is not a matter of speed.",
        "b": "It can create anything.",
        "a": "Signing in is not billed."
      }
    },
    "cin-q18": {
      "type": "truefalse",
      "correct": true,
      "explanation": "The more limited an account’s rights, the fewer consequences a theft or a mistake has. It is the basic principle of access management."
    },
    "cin-q19": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Strong authentication, a unique password and named accounts limit theft and show who did what. Sharing an administrator account removes all traceability.",
      "whyWrong": {
        "a": "A shared account sent by email is exposed and not traceable."
      }
    },
    "cin-q20": {
      "type": "short",
      "accepted": [
        "sso",
        "the sso"
      ],
      "explanation": "SSO (Single Sign-On) centralizes authentication: the user identifies once, and the organization applies the password and second-factor rules in one place."
    },
    "cin-q21": {
      "type": "single",
      "correct": "b",
      "explanation": "A published key must be considered compromised: bots watch public repositories continuously. You disable it, replace it, then check its use in the logs.",
      "whyWrong": {
        "a": "The key remains usable after the repository is deleted.",
        "c": "Waiting leaves the key exploitable.",
        "d": "It does not invalidate it."
      }
    },
    "cin-q22": {
      "type": "single",
      "correct": "a",
      "explanation": "A bucket is an object storage space (files) identified by a name. Its access rights must be set carefully, because a mistake can expose it publicly.",
      "whyWrong": {
        "c": "It is not a machine.",
        "d": "It is not a secret.",
        "b": "Unrelated to the network."
      }
    },
    "cin-q23": {
      "type": "truefalse",
      "correct": false,
      "explanation": "A modified setting, a share or an overly broad rule can make storage public. Access settings must be checked regularly, ideally by an automatic tool."
    },
    "cin-q24": {
      "type": "single",
      "correct": "d",
      "explanation": "A public link requires no identification: it can be forwarded, indexed or guessed. A named share with a limited duration is preferred.",
      "whyWrong": {
        "a": "That is not automatic.",
        "b": "The file remains readable.",
        "c": "It is not deleted."
      }
    },
    "cin-q25": {
      "type": "truefalse",
      "correct": true,
      "explanation": "The service decrypts transparently for an authorized identity. If an account that can read is hacked, the attacker reads the data in clear. Encryption does not replace access management."
    },
    "cin-q26": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Encryption, tested backups and limited rights protect confidentiality, availability and integrity. Public access by default is a classic configuration mistake.",
      "whyWrong": {
        "c": "Public access exposes the data to the whole Internet."
      }
    },
    "cin-q27": {
      "type": "short",
      "accepted": [
        "backup",
        "a backup",
        "the backup"
      ],
      "explanation": "A backup makes it possible to restore data that was deleted, corrupted or encrypted by ransomware. It is only worth something if the restoration is tested regularly."
    },
    "cin-q28": {
      "type": "single",
      "correct": "a",
      "explanation": "If the account is compromised, the attacker can delete the data and its backups. A copy in a separate account or an immutable backup withstands this scenario.",
      "whyWrong": {
        "d": "It is readable.",
        "c": "The content is the same as the data.",
        "b": "It does not affect access."
      }
    },
    "cin-q29": {
      "type": "single",
      "correct": "c",
      "explanation": "Public storage, overly broad rights, published keys: these customer configuration mistakes are the first cause of leaks. They can be avoided with regular checks.",
      "whyWrong": {
        "d": "An outage does not expose data.",
        "a": "A cut does not expose data.",
        "b": "An update fixes flaws."
      }
    },
    "cin-q30": {
      "type": "single",
      "correct": "b",
      "explanation": "An administration access (SSH, remote desktop) open to the whole Internet is scanned continuously by bots. It is opened only from known addresses or through secure access.",
      "whyWrong": {
        "c": "It is good practice.",
        "a": "It is good practice.",
        "d": "It is good practice."
      }
    },
    "cin-q31": {
      "type": "single",
      "correct": "c",
      "explanation": "A code repository is copied, shared and kept with its entire history. Secrets go in a dedicated vault or manager, with controlled access.",
      "whyWrong": {
        "b": "It is the intended place.",
        "d": "It is a correct use.",
        "a": "It is a correct use."
      }
    },
    "cin-q32": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Without logs, you no longer know who did what and you can neither detect nor understand an incident. They must be enabled, kept and monitored."
    },
    "cin-q33": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Public storage, an administrator with no second factor and forgotten resources (unpatched, billed) are defects to fix. Limited access is the good practice.",
      "whyWrong": {
        "c": "It is on the contrary least privilege."
      }
    },
    "cin-q34": {
      "type": "open",
      "model": "First warn the security manager or the IT team without waiting, since the incident may involve personal data. Then remove the public access, without deleting the files or the logs. Keep the access logs to know whether outsiders downloaded files, and for how long the exposure lasted. Assess the nature of the data concerned. If personal data is affected, inform the data protection officer: a notification to the authority (CNIL) may be mandatory within 72 hours. Fix the cause (setting, rights), enable alerts on public storage and plan a regular review.",
      "criteria": [
        "The security manager is warned quickly.",
        "Public access is removed without destroying evidence.",
        "Keeping and analyzing the access logs is mentioned.",
        "The personal data dimension is taken into account."
      ],
      "explanation": "The exposure is corrected without destroying the traces, then the impact is assessed and the right people are informed."
    },
    "cin-q35": {
      "type": "single",
      "correct": "b",
      "explanation": "A provider never asks for your password by email. The message is reported to the security team, with no click and no reply.",
      "whyWrong": {
        "c": "It would give the attacker access.",
        "d": "You would spread the trap.",
        "a": "The attachment may be booby-trapped."
      }
    },
    "cin-q36": {
      "type": "single",
      "correct": "a",
      "explanation": "Shadow IT designates the tools and services used without validation (personal storage, messaging). The organization’s data escapes all control there.",
      "whyWrong": {
        "d": "It is not a backup.",
        "c": "It is not encryption.",
        "b": "It is not a security tool."
      }
    },
    "cin-q37": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Quick reporting limits the damage: disable a key, remove a share. Hiding a mistake leaves the exposure open and worsens the consequences."
    },
    "cin-q38": {
      "type": "single",
      "correct": "d",
      "explanation": "Access is cut immediately, then the manager is warned to assess what may have been viewed. Quick reporting is always preferable.",
      "whyWrong": {
        "a": "The folder remains accessible.",
        "b": "The share remains active.",
        "c": "The exposure remains."
      }
    },
    "cin-q39": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "A non-validated service may not meet the organization’s requirements. You check the authorization and the protection, and reserve sensitive data for validated services.",
      "whyWrong": {
        "d": "A reused password exposes all accounts in case of a leak."
      }
    },
    "cin-q40": {
      "type": "short",
      "accepted": [
        "anssi",
        "the anssi"
      ],
      "explanation": "ANSSI (the French national cybersecurity agency) publishes guides open to everyone and the SecNumCloud framework qualifying trusted cloud providers."
    },
    "cin-q41": {
      "type": "single",
      "correct": "c",
      "explanation": "You cut the exposure first, then look for who accessed the data through the logs (if enabled). Access configuration is the customer’s responsibility, not the provider’s.",
      "whyWrong": {
        "d": "Deleting without logs destroys the traces needed for the investigation.",
        "b": "Waiting prolongs the data’s exposure.",
        "a": "Configuration is the cloud customer’s responsibility."
      }
    },
    "cin-q42": {
      "type": "single",
      "correct": "a",
      "explanation": "Even in SaaS, the customer remains responsible for their accounts, rights, data and how they share. The provider secures the infrastructure and the application.",
      "whyWrong": {
        "c": "The provider does not manage how the customer shares data.",
        "b": "The browser plays no part in rights.",
        "d": "Rights do not configure themselves."
      }
    },
    "cin-q43": {
      "type": "short",
      "accepted": [
        "MFA",
        "mfa"
      ],
      "explanation": "Multi-factor authentication protects the account with unlimited rights: enable it before any other setting and avoid using it day to day."
    }
  },
};
