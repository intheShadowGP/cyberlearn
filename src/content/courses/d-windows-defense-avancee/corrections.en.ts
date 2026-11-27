// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "d-windows-defense-avancee",
  questions: {
    "dwd-q1": {
      "type": "single",
      "correct": "d",
      "explanation": "One assumes that a workstation, an account or a contractor will be compromised one day. Defenses (partitioning, limited rights), detections and recovery plans are then designed to limit what the attacker can do next, rather than relying only on the perimeter.",
      "whyWrong": {
        "b": "This is precisely the opposite hypothesis, which this approach abandons.",
        "c": "It is not about cutting external connections.",
        "a": "The assume-breach hypothesis concerns designing defenses, not a replacement budget."
      }
    },
    "dwd-q2": {
      "type": "single",
      "correct": "a",
      "explanation": "ATT&CK catalogs the tactics and techniques observed in adversaries. It serves as a common language to describe an attack, map detection rules, spot uncovered techniques and plan exercises. It does not say which techniques are the most likely in one’s own environment.",
      "whyWrong": {
        "b": "ATT&CK does not replace the antivirus: it is a knowledge base of techniques.",
        "d": "It does not define a patching calendar.",
        "c": "It does not issue a compliance grade."
      }
    },
    "dwd-q3": {
      "type": "truefalse",
      "correct": true,
      "explanation": "By associating each rule with the techniques it detects, one gets a view of the zones with no detection. One then prioritizes according to the organization’s real threat, since “complete” coverage is neither realistic nor necessarily useful."
    },
    "dwd-q4": {
      "type": "short",
      "accepted": [
        "credential access"
      ],
      "explanation": "The “Credential Access” tactic groups the techniques that steal passwords, hashes, tickets and keys. Dumping LSASS is part of it; it is detected through Sysmon 10 and made harder by LSA protection and Credential Guard."
    },
    "dwd-q5": {
      "type": "single",
      "correct": "b",
      "explanation": "A service account often has extensive rights and an old password; an administration account opens access to a whole tier. Compromising them gives broad access for little effort: they guide the prioritization of measures.",
      "whyWrong": {
        "c": "They are, on the contrary, few.",
        "a": "Their actions are logged like the others.",
        "d": "All accounts can, depending on rights, connect remotely."
      }
    },
    "dwd-q6": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Privileged accounts and sessions, attack paths and exposed surfaces give a realistic view of what an adversary can reach. The number of wallpapers brings nothing to risk analysis.",
      "whyWrong": {
        "c": "A wallpaper has no effect on attack paths."
      }
    },
    "dwd-q7": {
      "type": "truefalse",
      "correct": false,
      "explanation": "The domain, the contractors, the applications and the attack techniques evolve. The model is updated after each significant change and each incident, otherwise it describes an environment that no longer exists."
    },
    "dwd-q8": {
      "type": "single",
      "correct": "c",
      "explanation": "An administrator who works from an ordinary workstation exposes their secrets to booby-trapped emails and malicious sites. On a PAW, no risky use exists: a privileged account authenticates only from a hardened, filtered workstation.",
      "whyWrong": {
        "b": "Power is not the goal: isolation is.",
        "d": "Sessions left open on a shared workstation would weaken the isolation.",
        "a": "A PAW is an administration workstation, not a backup server."
      }
    },
    "dwd-q9": {
      "type": "single",
      "correct": "a",
      "explanation": "With just-in-time rights, an account is privileged only for the duration of an approved task: an attacker who compromises it in the meantime has no right left to exploit. The process adds justification, approval and traceability.",
      "whyWrong": {
        "d": "A permanent right remains permanently available to an attacker.",
        "c": "A fixed schedule has no relation to the real need.",
        "b": "Just-In-Time does not depend on the resource’s creator: it grants a right on demand."
      }
    },
    "dwd-q10": {
      "type": "single",
      "correct": "b",
      "explanation": "With channel binding, an intercepted authentication cannot be replayed over another channel: the relay to the directory fails. Old clients must be inventoried before enforcing it.",
      "whyWrong": {
        "a": "It does not encrypt object storage.",
        "c": "It has no effect on speed.",
        "d": "It does not control read rights."
      }
    },
    "dwd-q11": {
      "type": "short",
      "accepted": [
        "JEA",
        "jea"
      ],
      "explanation": "JEA (Just Enough Administration) defines a restricted PowerShell endpoint: a delegated operator has access only to specific commands, under a virtual account, with logging. It avoids granting full administration rights for a limited task."
    },
    "dwd-q12": {
      "type": "truefalse",
      "correct": true,
      "explanation": "The audit lists the clients and servers that still use NTLM. One can then fix or replace these dependencies, then restrict in stages. A direct block causes outages that are rolled back, and the measure is abandoned."
    },
    "dwd-q13": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Signing and channel binding prevent reusing an intercepted authentication; extended protection protects web services. NTLMv1 can be cracked and worsens the risk: it must be forbidden.",
      "whyWrong": {
        "a": "NTLMv1 can be cracked: allowing it weakens the protection."
      }
    },
    "dwd-q14": {
      "type": "open",
      "model": "Multifactor protects authentication: it does not protect the workstation. If the administrator’s usual workstation is compromised (malware, theft of a session token or ticket), the attacker acts with the already authenticated session or with secrets in memory, without going through the second factor again. A PAW reduces exposure: the privileged account authenticates only from a dedicated workstation, with no mail or browsing, therefore harder to compromise. An authentication policy restricts the machines from which the account can obtain a ticket and limits ticket lifetime, which cuts reuse from an ordinary workstation. Just-in-time rights limit the window: the account is privileged only during the approved task, so a theft outside this window yields nothing. These measures are complemented by detections (tier 0 logons outside PAWs).",
      "criteria": [
        "Explains that multifactor protects the logon but not the workstation nor the already authenticated session.",
        "Describes the effect of a PAW on the exposure of secrets.",
        "Describes the effect of authentication policies and ticket lifetimes.",
        "Describes the effect of just-in-time rights on the exploitation window."
      ],
      "explanation": "Several independent barriers are worth more than a single one: each compensates for the possible failure of the others."
    },
    "dwd-q15": {
      "type": "single",
      "correct": "d",
      "explanation": "A decoy account, a fake SPN or a bait file has no reason to be used by an employee: any authentication attempt or access is suspicious. Decoys give very few false positives if they are credible and serve no other purpose.",
      "whyWrong": {
        "b": "A long-lived token would increase the risks.",
        "a": "A vault protects secrets: it is not a decoy.",
        "c": "Workstation certificates serve authentication, not trapping."
      }
    },
    "dwd-q16": {
      "type": "single",
      "correct": "c",
      "explanation": "Controllers continuously exchange replication data with the same rights. Without excluding their machine accounts, the rule would fire constantly. These accounts are excluded, and any modification of the controller list is monitored separately.",
      "whyWrong": {
        "a": "A controller can be compromised; excluding it does not mean trusting it.",
        "b": "That is precisely how they replicate.",
        "d": "Their events are collected like the others."
      }
    },
    "dwd-q17": {
      "type": "truefalse",
      "correct": false,
      "explanation": "It may never have been tested, rely on an event that is not logged, or have overly broad exclusions. A rule is validated by deliberately triggering it during a simulated attack, then measuring its false positives."
    },
    "dwd-q18": {
      "type": "short",
      "accepted": [
        "Sigma",
        "sigma"
      ],
      "explanation": "Sigma describes a detection rule in a neutral way; converters translate it to the queries of different monitoring tools. Rules can thus be shared, versioned and reviewed like code."
    },
    "dwd-q19": {
      "type": "single",
      "correct": "c",
      "explanation": "Event 5136 records the modification of an attribute: new membership, modified rights, authentication key added, policy changed. It is the source of many persistence and escalation detections, provided the matching auditing is enabled.",
      "whyWrong": {
        "b": "Logging speeds nothing up.",
        "d": "It increases the log volume, it does not reduce the database.",
        "a": "It encrypts nothing."
      }
    },
    "dwd-q20": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Testing on a simulated attack, measuring false positives and a documented response make a rule a usable control. Disabling it at the first alert removes the detection at the moment it is useful.",
      "whyWrong": {
        "d": "Disabling a rule that alerts amounts to no longer detecting anything."
      }
    },
    "dwd-q21": {
      "type": "single",
      "correct": "a",
      "explanation": "This type of service is installed on the controllers, reads their events and traffic, and detects known behaviors (reconnaissance, lateral movement, secret extraction). It complements, without replacing, the organization’s own rules.",
      "whyWrong": {
        "b": "It does not replace the controllers.",
        "d": "Password storage is not its role.",
        "c": "It does no backup."
      }
    },
    "dwd-q22": {
      "type": "single",
      "correct": "b",
      "explanation": "The attacker briefly registers a machine as a controller and injects modifications into the directory through the replication channel: the changes are accepted without going through the usual logs. The creation and deletion of server objects in the configuration partition are monitored.",
      "whyWrong": {
        "d": "It is not a copy of the database.",
        "c": "It is not a log duplication service.",
        "a": "A system state backup is not what DCShadow is: it injects changes through a fake controller."
      }
    },
    "dwd-q23": {
      "type": "single",
      "correct": "d",
      "explanation": "A periodic process copies AdminSDHolder’s ACL onto the protected privileged accounts and groups. A right added to this container therefore comes back at each cycle, even if it is removed from an account. It must be audited and any modification alerted on.",
      "whyWrong": {
        "c": "It does not touch logging.",
        "b": "It deletes no account.",
        "a": "The modification is visible in the container’s rights."
      }
    },
    "dwd-q24": {
      "type": "truefalse",
      "correct": true,
      "explanation": "If web enrollment accepts NTLM without extended protection, a relayed authentication is enough to request an authentication certificate in the victim’s name, sometimes a controller’s. NTLM is disabled on this service, extended protection and HTTPS are enforced, and issuances are monitored."
    },
    "dwd-q25": {
      "type": "short",
      "accepted": [
        "NTLM relay",
        "ntlm relay",
        "relay NTLM"
      ],
      "explanation": "In an NTLM relay, the attacker acts as the intermediary between a client and a server and forwards the authentication to act in the client’s name. Signing, channel binding, extended protection and reducing NTLM prevent it."
    },
    "dwd-q26": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "A hijacked ACL, SID history and an unexpected certificate are discreet return mechanisms. A scheduled restart is an ordinary operations task.",
      "whyWrong": {
        "c": "A scheduled restart is normal and unrelated to the directory."
      }
    },
    "dwd-q27": {
      "type": "single",
      "correct": "b",
      "explanation": "By writing a key into the msDS-KeyCredentialLink attribute, an attacker with write access on the account can then authenticate as it by certificate, without knowing its password. Write access is restricted and the attribute monitored (event 5136).",
      "whyWrong": {
        "c": "It is not a password stored in the registry.",
        "d": "Automatic rotation is a good practice, not an attack.",
        "a": "Root certificates installed without the user’s knowledge are another attack."
      }
    },
    "dwd-q28": {
      "type": "single",
      "correct": "a",
      "explanation": "By default, each user can join ten machines to the domain, hence create machine accounts. Setting the quota to zero removes this ability from an ordinary account; joining then goes through a dedicated account. Several attacks (delegation, relay) depend on it.",
      "whyWrong": {
        "b": "Disabling logging would prevent detecting, not attacking.",
        "c": "That would grant more rights, not fewer.",
        "d": "This setting is useful but unrelated to machine account creation."
      }
    },
    "dwd-q29": {
      "type": "single",
      "correct": "c",
      "explanation": "Conditional access applies policies according to context: multifactor required outside the trusted network, compliant device mandatory, access blocked in case of high risk. It replaces the trust granted to the internal network with an evaluation at each access.",
      "whyWrong": {
        "d": "It does not replace authentication, it complements it.",
        "a": "It does not impose a single device model.",
        "b": "Privileged roles still have to be controlled."
      }
    },
    "dwd-q30": {
      "type": "single",
      "correct": "d",
      "explanation": "An attacker who takes control of a synchronized local account inherits its rights in the cloud. Dedicated cloud administration accounts are created, not synchronized, protected by multifactor and reachable through temporary elevation.",
      "whyWrong": {
        "c": "Synchronized accounts can use multifactor.",
        "b": "The cloud accepts synchronized accounts.",
        "a": "They can log on from outside depending on policies."
      }
    },
    "dwd-q31": {
      "type": "truefalse",
      "correct": true,
      "explanation": "The token proves that authentication has already taken place: reusing it bypasses the second factor. Short lifetimes, binding the token to the device, conditional access and continuous risk evaluation reduce the effectiveness of this technique."
    },
    "dwd-q32": {
      "type": "short",
      "accepted": [
        "PIM",
        "pim"
      ],
      "explanation": "PIM (Privileged Identity Management) makes roles eligible rather than permanent: the administrator activates them for a limited duration, with justification, possible approval and logging. It reduces the exploitation window of a compromised account."
    },
    "dwd-q33": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "The synchronization server can write identities on both sides: it is protected like a domain controller, with a limited account and a monitored configuration. Exposing it to the Internet would make it a direct target.",
      "whyWrong": {
        "d": "Exposure to the Internet multiplies the attack paths to a tier 0 asset."
      }
    },
    "dwd-q34": {
      "type": "open",
      "model": "The synchronization server and its account have the power to read and write identities on both sides: the attacker can obtain secrets or tokens, create or modify accounts, add privileged memberships in the cloud, or forge accesses that bypass local authentication. Reaction: isolate the server without powering it off and collect its memory and logs; disable or reset the synchronization account and its secrets; audit the creations and modifications of accounts, roles and applications in the cloud and in the directory since the probable date of compromise; revoke the sessions and tokens of the affected accounts; check the privileged roles and the conditional access policies; rebuild the server from a clean medium; review the protection (tier 0, restricted access, monitoring of the configuration).",
      "criteria": [
        "Explains the synchronization server’s write power over both directories.",
        "Proposes containment (isolation, rotation of the account and secrets) with prior collection.",
        "Proposes auditing the creations and modifications in the cloud and the local directory.",
        "Proposes revoking tokens and rebuilding the server."
      ],
      "explanation": "In hybrid, a single compromised link can open both worlds: the response is carried out across the whole identity chain."
    },
    "dwd-q35": {
      "type": "single",
      "correct": "c",
      "explanation": "One first qualifies, then stops the progression, preserves the evidence, removes all presence, rebuilds what is doubtful, then draws the lessons. Rebuilding or eradicating without having collected destroys elements that explain the extent of the compromise.",
      "whyWrong": {
        "b": "One does not rebuild before qualifying and containing.",
        "d": "Nothing is removed without having qualified and preserved the evidence.",
        "a": "Lessons learned come after the action."
      }
    },
    "dwd-q36": {
      "type": "single",
      "correct": "b",
      "explanation": "Malware can run only in memory; encryption keys, network connections and processes are visible there. At shutdown, these elements disappear. Memory is therefore captured first, then the disk is collected.",
      "whyWrong": {
        "a": "Shutdown does not destroy the disk’s files.",
        "d": "The logs are on the disk; memory holds the execution state.",
        "c": "The system does not require it."
      }
    },
    "dwd-q37": {
      "type": "truefalse",
      "correct": false,
      "explanation": "One isolates by cutting the network (port, VLAN, firewall or EDR rule) to keep the machine on and preserve its state, notably memory. Powering off is decided only after the collection."
    },
    "dwd-q38": {
      "type": "short",
      "accepted": [
        "purple team",
        "purple teaming"
      ],
      "explanation": "In purple team, the attacker replays a technique and the defender checks whether it is detected; if not, the rule is written or fixed, then replayed. It is the most direct method to measure and improve coverage."
    },
    "dwd-q39": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "The copied secrets must be made unusable, any return mechanism removed and whatever can no longer be trusted rebuilt. Deleting the logs destroys the evidence and prevents understanding the incident.",
      "whyWrong": {
        "d": "Logs serve to understand and to prove: they are kept."
      }
    },
    "dwd-q40": {
      "type": "open",
      "model": "Triage: confirm the event (account, source, rights), check that these rights were never legitimately granted, look for the account’s other actions (logons, group and GPO modifications), identify the machines and accounts concerned. Containment: isolate the source workstation without powering it off, disable the account, purge sessions and tickets, remove or restore the modified GPO, isolate the affected servers. Collection: capture the memory of the workstation and the servers concerned, keep logs, copies of the GPO and tasks, hashes, chain of custody. Extent: consider the directory’s secrets as exposed (privileged and service accounts, the ticket-signing secret), look for persistences (ACLs, AdminSDHolder, certificates, authentication keys, SID history). Eradication and rebuild: reset the exposed secrets (double reset for the ticket-signing secret), remove the persistences, rebuild the doubtful servers, restore the directory from a healthy backup if integrity is uncertain, recheck the PKI. Lessons learned: timeline, entry cause, restriction of replication rights, improved detection rule, purple team exercise.",
      "criteria": [
        "Qualifies the event as a sign of extraction of the directory’s secrets and checks the rights’ legitimacy.",
        "Proposes containment without powering off, with prior collection (memory, logs).",
        "Considers the directory’s secrets as exposed and looks for persistences.",
        "Proposes eradication, rebuild and lessons learned that improve detection."
      ],
      "explanation": "The quality of the response lies in the order: qualify, contain, collect, assess the extent, then only eradicate and rebuild."
    }
  },
};
