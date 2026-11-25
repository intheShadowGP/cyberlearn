// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "l-multicloud-serverless-hybride",
  questions: {
    "mch-q1": {
      "type": "single",
      "correct": "c",
      "explanation": "The provider secures the underlying infrastructure; the customer remains responsible for its configuration, its identities and its data. The exact boundary depends on the service (IaaS, PaaS, SaaS), but the principle is common to providers.",
      "whyWrong": {
        "b": "The customer keeps the configuration, identities and data.",
        "d": "The customer remains responsible for what it configures.",
        "a": "The model does not vary this way."
      }
    },
    "mch-q2": {
      "type": "single",
      "correct": "a",
      "explanation": "Cloud incidents very largely come from customer-side configuration errors: public storage, excessive rights, exposed secrets. This is why configuration and IAM are at the heart of cloud security.",
      "whyWrong": {
        "d": "These flaws exist but are rare.",
        "c": "An outage is not a security incident.",
        "b": "Updates fix flaws, they do not cause them."
      }
    },
    "mch-q3": {
      "type": "short",
      "accepted": [
        "cspm",
        "CSPM"
      ],
      "explanation": "CSPM (Cloud Security Posture Management) continuously assesses the configuration against best practices and benchmarks, and flags deviations (exposure, rights, logging)."
    },
    "mch-q8": {
      "type": "open",
      "model": "On Azure as on Google Cloud, rights apply at a scope (or are inherited down the hierarchy): a role granted to a management group or an organization propagates to all subscriptions, folders and projects below. A right that is “too high” therefore gives, often unnoticed, permissions over far more resources than necessary; the compromise of a single account concerned then exposes the whole inherited perimeter. To avoid it: assign at the lowest sufficient level (the project or resource concerned), prefer targeted roles to very broad ones (Owner, Contributor/Editor), regularly review inherited assignments, and use a posture tool to spot excessive rights.",
      "criteria": [
        "Inheritance or a high scope is explained as propagating the right downward.",
        "The risk (disproportionate permissions, impact of a compromise) is described.",
        "The rule of assignment at the lowest sufficient level is given.",
        "A control measure (targeted roles, review, posture) is proposed."
      ],
      "explanation": "The resource hierarchy is a compartmentalization tool: badly used, it becomes a privilege amplifier."
    },
    "mch-q31": {
      "type": "single",
      "correct": "d",
      "explanation": "Least privilege reduces both the level of right (read) and the scope (a single bucket). Each broader dimension increases the impact of a compromise of the account.",
      "whyWrong": {
        "b": "Far too broad for a read need.",
        "c": "The level of right is excessive.",
        "a": "The scope is excessive: all buckets."
      }
    },
    "mch-q32": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Certifications cover the provider’s foundation. The configuration, identities and data remain the customer’s responsibility, and must be monitored."
    },
    "mch-q4": {
      "type": "single",
      "correct": "b",
      "explanation": "Azure’s identity directory is Microsoft Entra ID (formerly Azure AD). Cloud Identity is Google’s, IAM is AWS’s.",
      "whyWrong": {
        "d": "It is Google’s directory.",
        "a": "It is AWS’s identity service.",
        "c": "It is a federation service, not Azure’s directory."
      }
    },
    "mch-q5": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Google Cloud IAM rights are inherited from the top to the bottom of the hierarchy: a role granted to the organization applies to all folders and projects. Hence the importance of assigning at the lowest sufficient level."
    },
    "mch-q6": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Minimal rights per non-human identity, federation instead of exported keys and assignment at the lowest level limit the impact of a compromise.",
      "whyWrong": {
        "b": "The default service account is precisely often too permissive: dedicated accounts are preferred."
      }
    },
    "mch-q7": {
      "type": "single",
      "correct": "d",
      "explanation": "The global administrator controls the whole Entra ID tenant: each holder is a very high-impact target. The number is limited, with phishing-resistant MFA and just-in-time access.",
      "whyWrong": {
        "b": "It is not a matter of cost.",
        "c": "This limit does not exist.",
        "a": "Unrelated to speed."
      }
    },
    "mch-q33": {
      "type": "single",
      "correct": "a",
      "explanation": "Conditional access policies evaluate the sign-in context (user, location, device, risk) and require MFA, a compliant device or block access.",
      "whyWrong": {
        "b": "Disk encryption is another function.",
        "c": "It is not conditional access’s remit.",
        "d": "The network falls under other services."
      }
    },
    "mch-q34": {
      "type": "single",
      "correct": "b",
      "explanation": "RBAC rights are inherited downward: a finer scope limits what a compromised account can reach.",
      "whyWrong": {
        "a": "Scope has no effect on speed.",
        "c": "It has nothing to do with expiry.",
        "d": "MFA remains necessary."
      }
    },
    "mch-q35": {
      "type": "truefalse",
      "correct": true,
      "explanation": "The application authenticates with its own identity provider and exchanges a short-lived token for access: no durable secret is stored or liable to leak."
    },
    "mch-q9": {
      "type": "single",
      "correct": "c",
      "explanation": "A security group is a firewall attached to a resource (or a subnet) that only allows the wanted flows, by port and source. In deny by default, it greatly reduces exposure.",
      "whyWrong": {
        "d": "IAM is another mechanism.",
        "a": "Encryption is another function.",
        "b": "It has nothing to do with service accounts."
      }
    },
    "mch-q10": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Opening SSH/RDP to the whole world exposes the resource to permanent scanning and attempts, whatever the strength of the password. Administration access goes through a bastion, a private endpoint or a VPN."
    },
    "mch-q11": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c",
        "d"
      ],
      "explanation": "Deny by default, private subnets, private endpoints and flow logging are measures that secure the cloud network.",
      "whyWrong": {
        "e": "Opening all ports exposes every resource to the Internet: it is the opposite of deny by default."
      }
    },
    "mch-q36": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "A rule open to the world, an unnecessary public address and anonymous access are frequent exposures, detectable by a posture tool.",
      "whyWrong": {
        "c": "A private subnet with no public address is on the contrary good practice."
      }
    },
    "mch-q37": {
      "type": "single",
      "correct": "c",
      "explanation": "A single, authenticated and logged entry point (bastion, provider private access, VPN) avoids exposing each machine.",
      "whyWrong": {
        "d": "It exposes the machine to the whole world.",
        "b": "It would become reachable from the Internet.",
        "a": "All network protection would be removed."
      }
    },
    "mch-q12": {
      "type": "single",
      "correct": "b",
      "explanation": "Serverless removes the server to administer, but the surface moves to the function’s code, its permissions and its triggers, which become the points to secure.",
      "whyWrong": {
        "d": "That is the provider’s concern.",
        "a": "It moves, it does not disappear.",
        "c": "That is the provider’s concern."
      }
    },
    "mch-q13": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Environment variables are often visible in the configuration and the logs. A function’s secrets are kept in a secrets vault, retrieved at runtime."
    },
    "mch-q14": {
      "type": "short",
      "accepted": [
        "federated identity",
        "identity federation",
        "federation",
        "unified identity",
        "identity unification"
      ],
      "explanation": "Federated identity (one reference directory) avoids duplicating accounts and policies in each environment, a source of inconsistencies and blind spots."
    },
    "mch-q15": {
      "type": "open",
      "model": "Problems: each environment (internal, cloud A, cloud B) has its own identities, policies and console, which creates inconsistencies (different rights and controls), blind spots (no overview), a high administration burden and orphan accounts. Recommendations: federate identity on a reference directory so that the same people and the same authentication rules (MFA, conditional access) apply everywhere; define equivalent security policies from one environment to another; set up unified posture monitoring (multi-cloud CSPM) and centralized log collection to get a single view; harmonize secrets management. The goal is consistency and visibility, not technical uniformity of providers.",
      "criteria": [
        "The inconsistency and blind-spot problems of a multi-environment setup are identified.",
        "Federated identity is recommended.",
        "Unified visibility or posture (CSPM, centralized logs) is proposed."
      ],
      "explanation": "Multi-cloud is only safe if the same identities, the same policies and an overview are found everywhere."
    },
    "mch-q16": {
      "type": "single",
      "correct": "a",
      "explanation": "A serverless function embeds its dependencies: a vulnerable library remains exploitable there, even without a server to administer. These dependencies are analyzed and updated as for any application.",
      "whyWrong": {
        "c": "That is not the purpose of the analysis.",
        "d": "The provider does not forbid it.",
        "b": "They remain exploitable in serverless."
      }
    },
    "mch-q38": {
      "type": "single",
      "correct": "d",
      "explanation": "A function can be triggered by external data: you validate what it receives before processing, and you limit its permissions.",
      "whyWrong": {
        "b": "It would worsen the impact of a compromise.",
        "a": "Logging is needed for detection.",
        "c": "That would ignore the risk."
      }
    },
    "mch-q39": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "A single identity, consistent policies and centralized visibility avoid blind spots. Separate accounts per environment multiply forgotten rights.",
      "whyWrong": {
        "d": "Separate accounts create orphan accounts and inconsistencies."
      }
    },
    "mch-q40": {
      "type": "short",
      "accepted": [
        "siem",
        "a siem",
        "the siem"
      ],
      "explanation": "A SIEM (Security Information and Event Management) collects the logs of all environments, correlates them and raises alerts: it is the single view a hybrid environment needs."
    },
    "mch-q17": {
      "type": "single",
      "correct": "a",
      "explanation": "The Azure activity log records management-plane operations (creation, modification, deletion of resources): it answers “who did what, when”.",
      "whyWrong": {
        "b": "Metrics measure load, not actions.",
        "d": "That workstation does not see cloud operations.",
        "c": "Billing does not trace actions."
      }
    },
    "mch-q18": {
      "type": "single",
      "correct": "b",
      "explanation": "Cloud Audit Logs (admin activity, data access) record who called which API. Admin activity is enabled by default; data access must be enabled.",
      "whyWrong": {
        "c": "They measure performance.",
        "d": "They concern costs.",
        "a": "They do not trace API calls."
      }
    },
    "mch-q19": {
      "type": "single",
      "correct": "d",
      "explanation": "You first cut access (disable, then delete after analysis), then examine what was done with the key, keeping the logs.",
      "whyWrong": {
        "b": "The delay lets the attacker act.",
        "c": "It would destroy evidence.",
        "a": "It would worsen the exposure."
      }
    },
    "mch-q20": {
      "type": "single",
      "correct": "c",
      "explanation": "An attacker who gains high rights tries to erase their traces. Logs written to a separate, write-only account remain usable.",
      "whyWrong": {
        "a": "That is not the purpose.",
        "b": "Alerts remain necessary.",
        "d": "Access control remains necessary."
      }
    },
    "mch-q21": {
      "type": "truefalse",
      "correct": true,
      "explanation": "A log that is not enabled records nothing. After an incident it is too late: you enable logging, centralize it and set a retention period before you need it."
    },
    "mch-q22": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Disabling logs, creating durable credentials and raising rights are typical attacker moves. A usual access is not a signal.",
      "whyWrong": {
        "c": "A usual access is normal."
      }
    },
    "mch-q23": {
      "type": "short",
      "accepted": [
        "rotation",
        "the rotation",
        "key rotation",
        "secret rotation",
        "rotate"
      ],
      "explanation": "Rotation replaces the compromised value with a new one, then revokes the old one. After an exposure, it is done without delay."
    },
    "mch-q24": {
      "type": "single",
      "correct": "a",
      "explanation": "Key management services (KMS, Key Vault, Cloud KMS) create and hold keys, control who can use them and log each use.",
      "whyWrong": {
        "b": "That is not their function.",
        "c": "It distributes traffic.",
        "d": "Unrelated."
      }
    },
    "mch-q25": {
      "type": "single",
      "correct": "d",
      "explanation": "With a customer-managed key, the customer decides who uses it, when it rotates and can revoke it, which makes the data unreadable. It does not change the provider’s responsibility for the foundation.",
      "whyWrong": {
        "a": "Encryption remains necessary.",
        "c": "Responsibility for the foundation does not change.",
        "b": "Backups remain possible."
      }
    },
    "mch-q26": {
      "type": "single",
      "correct": "c",
      "explanation": "Without the key, the encryption can no longer be undone. Key destruction is therefore protected (deletion delay, separate rights) and its backup planned.",
      "whyWrong": {
        "d": "It is not stored in clear.",
        "b": "It does not hold your key.",
        "a": "Backups encrypted with this key are affected too."
      }
    },
    "mch-q27": {
      "type": "truefalse",
      "correct": false,
      "explanation": "The service decrypts transparently for an authorized identity: the attacker who takes control of it reads the data in clear. Encryption protects against theft of a medium, not against abuse of rights."
    },
    "mch-q28": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Separating roles, rotating and tracing use limit abuse. A key kept next to the data it protects protects nothing.",
      "whyWrong": {
        "d": "The key must remain separate from the data."
      }
    },
    "mch-q29": {
      "type": "single",
      "correct": "b",
      "explanation": "Data residency is the geographic location (region, country) where data is stored and processed. It determines the applicable jurisdiction.",
      "whyWrong": {
        "c": "That is retention.",
        "a": "That has nothing to do with it.",
        "d": "That is encryption."
      }
    },
    "mch-q30": {
      "type": "short",
      "accepted": [
        "secnumcloud",
        "sec num cloud",
        "the secnumcloud"
      ],
      "explanation": "SecNumCloud is ANSSI’s qualification framework for cloud providers. It notably covers protection against extraterritorial laws."
    }
  },
};
