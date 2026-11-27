// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "l-cloud-iam",
  questions: {
    "cl-q1": {
      "type": "single",
      "correct": "b",
      "explanation": "Even in SaaS, the customer manages its users, their rights, MFA and its data. The provider supplies the means (SSO, MFA, logs); the customer must configure them.",
      "whyWrong": {
        "d": "The provider supplies the means, not the governance of the customer’s accounts.",
        "c": "The Internet provider is not involved in account management.",
        "a": "Someone must manage the accounts: it is the customer."
      }
    },
    "cl-q2": {
      "type": "truefalse",
      "correct": true,
      "explanation": "In IaaS, the provider manages the hardware and the hypervisor; the guest system, its patches, accounts and applications fall to the customer."
    },
    "cl-q3": {
      "type": "short",
      "accepted": [
        "secnumcloud",
        "the secnumcloud qualification"
      ],
      "explanation": "SecNumCloud is ANSSI’s qualification framework for cloud-computing providers. Its version 3.2 includes requirements of immunity to extraterritorial laws."
    },
    "cl-q15": {
      "type": "open",
      "model": "Several options without public access: 1) create an IAM role that the provider’s cloud account can assume (trust relationship limited to its account ID, with an external ID), granting only s3:GetObject and ListBucket on the backup prefix; 2) or generate short-lived pre-signed URLs each night, sent through a secure channel; 3) or a replication to a bucket of the provider. In all cases: encryption with a KMS key whose use is also granted to the provider, access logging, and public-access blocking maintained at the account level.",
      "criteria": [
        "The bucket stays private (public blocking maintained).",
        "An authenticated, limited access mechanism is proposed (cross-account role, pre-signed URLs, replication).",
        "Rights are limited to the strict minimum (read, prefix).",
        "Access logging is planned."
      ],
      "explanation": "Cross-organization access must go through explicit identities and authorizations, never through public opening."
    },
    "cl-q31": {
      "type": "single",
      "correct": "d",
      "explanation": "In PaaS, the provider also manages the operating system and the runtime; the customer keeps its data, identities and the configuration of its application.",
      "whyWrong": {
        "c": "Hardware belongs to the provider.",
        "a": "The hypervisor belongs to the provider.",
        "b": "Cabling belongs to the provider."
      }
    },
    "cl-q32": {
      "type": "truefalse",
      "correct": false,
      "explanation": "The customer remains responsible for its accounts, MFA, rights and data. A well-secured SaaS does not protect an administrator account without MFA."
    },
    "cl-q4": {
      "type": "single",
      "correct": "a",
      "explanation": "In IAM evaluation logic, a matching explicit Deny always prevails over any Allow. This is what allows guardrails (service control policies, permission boundaries).",
      "whyWrong": {
        "d": "The Deny wins over any Allow.",
        "b": "Evaluation is deterministic.",
        "c": "There is no manual validation in the evaluation."
      }
    },
    "cl-q5": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Implicit deny is the default rule: only an applicable Allow statement, with no contrary Deny, authorizes an action."
    },
    "cl-q6": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Attaching a policy to oneself, having a resource one controls carry a privileged role, or creating keys for another user allow obtaining more rights than intended.",
      "whyWrong": {
        "a": "Reading objects from a logs bucket exposes information, but does not give additional rights in itself."
      }
    },
    "cl-q7": {
      "type": "short",
      "accepted": [
        "deny",
        "explicit deny",
        "the deny"
      ],
      "explanation": "An explicit Deny wins over any Allow, wherever it is defined (identity policy, resource policy, SCP)."
    },
    "cl-q14": {
      "type": "open",
      "model": "Approach: identify precisely the necessary actions (create and update the function, its execution role, its logs), then create a limited policy: lambda:CreateFunction, UpdateFunctionCode, UpdateFunctionConfiguration on functions with the project prefix; iam:PassRole only on the planned execution role; logs:* limited to the project’s log group. Deploy through CI with a federated identity (OIDC) rather than with the developer’s personal rights. Use a permissions boundary and analyze actual usage (Access Analyzer) to reduce further. For experimentation, an isolated sandbox account may be more permissive.",
      "criteria": [
        "The necessary actions are identified and limited.",
        "Resources are restricted (prefix, precise role for PassRole).",
        "Deployment goes through CI or a dedicated identity.",
        "A guardrail or review (permissions boundary, Access Analyzer, isolated account) is proposed."
      ],
      "explanation": "AdministratorAccess for a targeted task turns any compromise of the developer’s workstation into a total compromise of the cloud account."
    },
    "cl-q33": {
      "type": "single",
      "correct": "c",
      "explanation": "Least privilege restricts the actions (no `*`), the resources (precise ARNs) and adds conditions. Access broader than needed multiplies the impact of a compromise.",
      "whyWrong": {
        "b": "That is full administrator rights.",
        "a": "That destroys individual traceability.",
        "d": "That removes investigative capability."
      }
    },
    "cl-q34": {
      "type": "single",
      "correct": "d",
      "explanation": "A condition can reserve sensitive actions (deletion, rights changes) for sessions authenticated with a second factor.",
      "whyWrong": {
        "b": "It encrypts nothing.",
        "a": "It has no performance effect.",
        "c": "It does not touch logs."
      }
    },
    "cl-q35": {
      "type": "single",
      "correct": "a",
      "explanation": "A static key copied into a repository, a workstation or an image remains usable until revoked. Temporary identities expire by themselves.",
      "whyWrong": {
        "b": "A long-lived key is not a speed problem.",
        "d": "They are not encrypted by nature.",
        "c": "Calls can be logged."
      }
    },
    "cl-q8": {
      "type": "single",
      "correct": "b",
      "explanation": "The principal `*` designates everyone, including anonymous requests. Combined with s3:GetObject, it makes objects public.",
      "whyWrong": {
        "d": "`*` is not limited to administrators.",
        "a": "The root account is a precise principal.",
        "c": "`*` designates everyone, not nobody."
      }
    },
    "cl-q9": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Vaults with rotation, federated identities and instance roles remove or reduce the lifetime of secrets.",
      "whyWrong": {
        "c": "A versioned .env sooner or later ends up in a repository’s history, sometimes a public one."
      }
    },
    "cl-q10": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Service-managed encryption at rest is transparent for authorized requests: if the bucket is public, the service decrypts and serves the objects to everyone. Encryption protects against access to the physical medium, not against a bad authorization."
    },
    "cl-q36": {
      "type": "single",
      "correct": "c",
      "explanation": "Each modification creates a new version: a malicious or accidental deletion or overwrite remains recoverable. It is combined with deletion protection.",
      "whyWrong": {
        "d": "No performance effect.",
        "b": "Versioning does not make the bucket public.",
        "a": "It does not touch logs."
      }
    },
    "cl-q37": {
      "type": "single",
      "correct": "c",
      "explanation": "A customer-managed key lets you define who can use it, rotate it, disable it and log each use.",
      "whyWrong": {
        "a": "It enables and controls it.",
        "d": "Nothing is made public.",
        "b": "Key policies add to the others."
      }
    },
    "cl-q38": {
      "type": "truefalse",
      "correct": true,
      "explanation": "This guardrail prevails over bucket policies: even if a policy opens the storage to the public, the block prevents exposure."
    },
    "cl-q11": {
      "type": "single",
      "correct": "d",
      "explanation": "A CSPM continuously compares the real configuration (public storage, MFA, logs, open networks) with frameworks and alerts on deviations, or even fixes them automatically.",
      "whyWrong": {
        "a": "A CSPM tool audits configurations: it does not encrypt data.",
        "b": "It does not filter traffic.",
        "c": "It does not manage billing."
      }
    },
    "cl-q12": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Root account without MFA, SSH open to the Internet and missing logging are classic deviations from the CIS frameworks.",
      "whyWrong": {
        "a": "A role limited to one action on a precise prefix is an example of least privilege."
      }
    },
    "cl-q13": {
      "type": "short",
      "accepted": [
        "cloudtrail",
        "aws cloudtrail"
      ],
      "explanation": "CloudTrail records API calls (who, what, when, from where). On Azure, the equivalent is the activity log; on Google Cloud, Cloud Audit Logs."
    },
    "cl-q16": {
      "type": "single",
      "correct": "a",
      "explanation": "Analyzing Infrastructure as Code in CI detects deviations (public storage, missing encryption) before they exist in production: this is the “shift left” principle.",
      "whyWrong": {
        "c": "Billing says nothing about configuration.",
        "b": "Disabling logs removes visibility.",
        "d": "IaC analysis is precisely made for this."
      }
    },
    "cl-q39": {
      "type": "single",
      "correct": "b",
      "explanation": "The frameworks describe the expected configurations for each service. The CSPM measures the gap between what exists and these recommendations.",
      "whyWrong": {
        "d": "They are not used to choose a provider.",
        "a": "They delete nothing.",
        "c": "They encrypt nothing."
      }
    },
    "cl-q40": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Versioned code, review and continuous evaluation keep the environment compliant. Manual changes create invisible deviations.",
      "whyWrong": {
        "c": "Manual changes bypass review and traceability."
      }
    },
    "cl-q17": {
      "type": "single",
      "correct": "b",
      "explanation": "SSO centralizes authentication (and MFA) at an identity provider: one controlled identity, revocable at one point.",
      "whyWrong": {
        "c": "That is precisely what must be avoided.",
        "a": "MFA is strengthened with SSO.",
        "d": "SSO does not make a service public."
      }
    },
    "cl-q18": {
      "type": "single",
      "correct": "d",
      "explanation": "An assumed role delivers short-lived credentials: even if copied, they expire. A static key remains valid until revoked.",
      "whyWrong": {
        "c": "A role can be misconfigured like a key.",
        "a": "It does not touch the logs.",
        "b": "It exposes nothing."
      }
    },
    "cl-q19": {
      "type": "truefalse",
      "correct": true,
      "explanation": "The security token service issues credentials of limited duration. This is the basis of application identities and federation."
    },
    "cl-q20": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "SAML and OIDC connect an identity provider to the cloud; roles and temporary tokens avoid durable secrets. A shared password removes traceability.",
      "whyWrong": {
        "d": "It destroys individual traceability."
      }
    },
    "cl-q21": {
      "type": "short",
      "accepted": [
        "oidc",
        "openid connect",
        "openid-connect"
      ],
      "explanation": "OIDC (OpenID Connect) lets a CI platform prove its identity and obtain temporary credentials from the cloud, with no stored key."
    },
    "cl-q22": {
      "type": "single",
      "correct": "c",
      "explanation": "They grant no rights: they bound what identity policies can grant, even to an administrator of the account concerned.",
      "whyWrong": {
        "d": "They grant no rights.",
        "b": "They encrypt nothing.",
        "a": "They do not replace authentication."
      }
    },
    "cl-q23": {
      "type": "single",
      "correct": "a",
      "explanation": "It is used if the identity provider is unavailable. Its credentials are kept separately, each use triggers an alert and is reviewed.",
      "whyWrong": {
        "d": "It must be monitored.",
        "b": "It must be tested regularly.",
        "c": "It stays logged."
      }
    },
    "cl-q24": {
      "type": "single",
      "correct": "b",
      "explanation": "An attacker who compromises an account seeks to erase their traces. Logs sent elsewhere, write-only, remain usable.",
      "whyWrong": {
        "d": "Separating logs is not meant to reduce their size.",
        "a": "Alerts stay active.",
        "c": "Logs must not be public."
      }
    },
    "cl-q25": {
      "type": "single",
      "correct": "c",
      "explanation": "The root account should be unused: any use is abnormal. Other critical events: key creation, policy change, logging disabled.",
      "whyWrong": {
        "a": "Harmless.",
        "b": "Common and harmless.",
        "d": "Common."
      }
    },
    "cl-q26": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Without API logs, we no longer know who did what, nor when or from where. Disabling logging is a warning sign, and one of an attacker’s first actions."
    },
    "cl-q27": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "We revoke, measure the key’s actual activity, then handle the exposed resources. Deleting the logs would destroy evidence.",
      "whyWrong": {
        "a": "That destroys evidence and does not remove the key from the repository."
      }
    },
    "cl-q28": {
      "type": "single",
      "correct": "a",
      "explanation": "We cut the attacker’s access (sessions, keys) without destroying evidence. Deleting resources would erase traces and might interrupt activity.",
      "whyWrong": {
        "d": "Deleting the account destroys evidence.",
        "c": "That destroys evidence and interrupts service.",
        "b": "The attack would continue."
      }
    },
    "cl-q29": {
      "type": "short",
      "accepted": [
        "cloud audit logs",
        "audit logs",
        "cloud audit log",
        "google cloud audit logs"
      ],
      "explanation": "Cloud Audit Logs record administrative activities and data access. The AWS equivalent is CloudTrail, Azure’s is the activity log."
    },
    "cl-q30": {
      "type": "single",
      "correct": "d",
      "explanation": "The customer is responsible for its configurations and its data: a personal-data breach posing a risk is notified to the CNIL within 72 hours.",
      "whyWrong": {
        "a": "The configuration is the customer’s responsibility.",
        "b": "The deadline is 72 hours.",
        "c": "Deleting the provider account does not meet a notification obligation."
      }
    },
    "cl-q41": {
      "type": "single",
      "correct": "d",
      "explanation": "A wildcard on actions and resources grants every right: compromising the application gives control of the account. List only the necessary actions and resources.",
      "whyWrong": {
        "c": "The provider accepts this kind of policy, which is precisely the danger.",
        "a": "On the contrary, everything is allowed.",
        "b": "The wildcard covers writes and deletions too."
      }
    },
    "cl-q42": {
      "type": "single",
      "correct": "b",
      "explanation": "An explicit deny always overrides an allow. And anything not explicitly allowed is denied by default.",
      "whyWrong": {
        "d": "An `Allow` cannot cancel an explicit `Deny`.",
        "a": "Nothing is random: the evaluation order is defined.",
        "c": "Only a condition provides that explicitly; it is not the case here."
      }
    },
    "cl-q43": {
      "type": "single",
      "correct": "a",
      "explanation": "An active account for someone no longer under contract is a useless and exploitable access: it is disabled immediately, before any finer analysis.",
      "whyWrong": {
        "d": "Worth examining, but less urgent than an active access with no reason.",
        "c": "A recently rotated key follows good practice.",
        "b": "MFA enabled is the expected behavior."
      }
    },
    "cl-q44": {
      "type": "short",
      "accepted": [
        "least privilege",
        "principle of least privilege",
        "the principle of least privilege"
      ],
      "explanation": "Least privilege limits the impact of a compromise: an identity can only do what its role requires."
    }
  },
};
