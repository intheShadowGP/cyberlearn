// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "d-ad-authentification",
  questions: {
    "ad-q1": {
      "type": "single",
      "correct": "d",
      "explanation": "The domain controller hosts NTDS.dit, acts as the Kerberos KDC and validates NTLM authentications. It is the most critical asset of the information system (tier 0).",
      "whyWrong": {
        "c": "A file server stores documents, not the directory.",
        "b": "DHCP assigns addresses.",
        "a": "The proxy filters web traffic."
      }
    },
    "ad-q2": {
      "type": "truefalse",
      "correct": true,
      "explanation": "A GPO can deploy startup scripts, scheduled tasks or software. Modify rights on GPOs (and on the OUs they are linked to) are among the attack paths to audit."
    },
    "ad-q3": {
      "type": "short",
      "accepted": [
        "ntds.dit",
        "ntds"
      ],
      "explanation": "NTDS.dit contains the directory objects and the password hashes. Extracting it (shadow copy, DCSync) amounts to the total compromise of the domain."
    },
    "ad-q4": {
      "type": "single",
      "correct": "a",
      "explanation": "The TGT is encrypted with the krbtgt account’s key, known only to the KDCs. The client cannot read it; it presents it to the KDC to obtain service tickets.",
      "whyWrong": {
        "c": "The user’s key serves for pre-authentication and to encrypt the session key returned, not the TGT itself."
      }
    },
    "ad-q5": {
      "type": "single",
      "correct": "b",
      "explanation": "The service ticket is encrypted with the key of the account tied to the SPN. This is what makes Kerberoasting possible: the attacker legitimately obtains the ticket, then tries to recover the service account’s password offline.",
      "whyWrong": {
        "c": "krbtgt encrypts the TGT, not the service tickets.",
        "d": "Tickets are always encrypted."
      }
    },
    "ad-q6": {
      "type": "truefalse",
      "correct": true,
      "explanation": "The NTLM response is computed from the NT hash, not from the password. Holding the hash is enough: this is pass-the-hash. Protected Users, Credential Guard and reducing NTLM limit this risk."
    },
    "ad-q7": {
      "type": "short",
      "accepted": [
        "4769"
      ],
      "explanation": "4768: TGT request (AS). 4769: service ticket request (TGS). 4771: Kerberos pre-authentication failure."
    },
    "ad-q8": {
      "type": "single",
      "correct": "c",
      "explanation": "Many different accounts, one try each: this is the signature of spraying, which avoids lockout. The final 4624 shows that an account gave way; it must be reset and its activity analyzed.",
      "whyWrong": {
        "b": "Brute force targets one account with many passwords.",
        "d": "Kerberoasting produces 4769, not 4625.",
        "a": "A replication does not generate a series of authentication failures."
      }
    },
    "ad-q9": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "The ticket can be cracked offline: the weaker and older the password, the more the attack succeeds. RC4 is faster to crack than AES.",
      "whyWrong": {
        "b": "A gMSA can still be targeted by Kerberoasting (the service ticket remains requestable), but its random ≈ 240-byte password, renewed automatically, makes offline cracking unrealistic: it is therefore not a condition that makes the attack effective, but a measure that neutralizes it in practice."
      }
    },
    "ad-q10": {
      "type": "single",
      "correct": "b",
      "explanation": "With krbtgt’s hash, an attacker can forge a TGT for any account, with any groups and an arbitrary duration. Only the (double) renewal of krbtgt’s password invalidates these tickets.",
      "whyWrong": {
        "c": "A service ticket obtained through Kerberoasting is cracked offline, not forged.",
        "d": "A web token has no link with Kerberos."
      }
    },
    "ad-q11": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "LAPS prevents the reuse of a local password, tier separation prevents the exposure of privileged accounts, and SMB filtering between workstations removes the main lateral channel.",
      "whyWrong": {
        "c": "An identical local password everywhere lets one pivot onto all the workstations as soon as a single one is compromised."
      }
    },
    "ad-q12": {
      "type": "truefalse",
      "correct": false,
      "explanation": "The KDC still accepts tickets encrypted with krbtgt’s previous password. It must be renewed twice, respecting a sufficient delay for replication and for the expiry of legitimate tickets."
    },
    "ad-q13": {
      "type": "short",
      "accepted": [
        "4740"
      ],
      "explanation": "Event 4740 is logged on the PDC emulator DC when an account is locked out. Serial lockouts often signal a brute force or an old cached password."
    },
    "ad-q14": {
      "type": "open",
      "model": "Chain: 1) a workstation is compromised (phishing); 2) the attacker elevates privileges locally and extracts LSASS secrets; 3) thanks to the same local administrator password everywhere, they pivot onto other workstations (pass-the-hash); 4) on one of them, a Domain Admin has logged on for support: their secrets are recovered; 5) with these rights, the attacker extracts NTDS.dit (DCSync) and controls the domain. Measures: tiered model (no tier 0 account on a workstation), Windows LAPS, and Protected Users or Credential Guard to protect the secrets; filter SMB between workstations as a complement.",
      "criteria": [
        "The chain workstation → credentials → pivot → privileged account → DC is described.",
        "The role of secrets in memory (LSASS) is mentioned.",
        "The tiered model and LAPS are among the measures.",
        "A third relevant measure is proposed."
      ],
      "explanation": "This chain is described in almost all ransomware incident reports. Each measure breaks one link."
    },
    "ad-q15": {
      "type": "open",
      "model": "The TGT is an “identity card” issued once by the KDC after logon; it serves only to request other tickets from the KDC. The service ticket is an “entry ticket” for a specific service, issued in exchange for the TGT. The service ticket is encrypted with the service account’s key: the server can therefore decrypt it and verify by itself its authenticity and the user’s identity, without contacting the DC.",
      "criteria": [
        "The TGT is presented as serving to obtain other tickets from the KDC.",
        "The service ticket is associated with a specific service.",
        "Encryption with the service’s key explains the absence of a call to the DC."
      ],
      "explanation": "This autonomy of the server also explains “silver tickets”: with a service account’s key, tickets accepted by that service are forged without any trace on the DC."
    },
    "ad-q16": {
      "type": "single",
      "correct": "d",
      "explanation": "Members of Protected Users can use neither NTLM, nor DES, nor RC4, nor delegation; their TGTs have a reduced lifetime. It is recommended for all human administration accounts.",
      "whyWrong": {
        "c": "Domain Users groups all accounts, with no particular restriction.",
        "a": "This group grants backup and restore rights.",
        "b": "This group allows RDP access; it restricts nothing."
      }
    },
    "ad-q17": {
      "type": "single",
      "correct": "a",
      "explanation": "A gMSA has an SPN and therefore receives a service ticket like any service account: the attack is technically possible. What neutralizes it is the random (≈ 240 bytes) password renewed automatically, which makes offline cracking unrealistic. The protection comes from the secret, not from an immunity to the technique.",
      "whyWrong": {
        "b": "A gMSA does receive a service ticket: it carries an SPN.",
        "d": "Disabling RC4 strengthens the defense, but even with RC4 a gMSA’s password remains uncrackable in practice.",
        "c": "Kerberoasting targets precisely the service accounts that carry an SPN."
      }
    },
    "ad-q18": {
      "type": "single",
      "correct": "c",
      "explanation": "A forest groups one or more domains linked by a common schema and trust relationships. The forest, not the domain, is the real security boundary: an administrator of one can, under conditions, compromise the others.",
      "whyWrong": {
        "b": "A site groups controllers by location, which is something else.",
        "a": "A forest is not a backup."
      }
    },
    "ad-q19": {
      "type": "single",
      "correct": "d",
      "explanation": "An OU is a container: accounts and computers are placed in it, GPOs are linked to it and rights are delegated to a team on it. Poorly delegated rights on an OU are a classic attack path.",
      "whyWrong": {
        "c": "Replication does not use OUs to encrypt.",
        "b": "The hashes are stored in NTDS.dit."
      }
    },
    "ad-q20": {
      "type": "truefalse",
      "correct": true,
      "explanation": "By default, an ordinary account can enumerate users, groups, computers, SPNs and memberships. An attacker who controls a single account therefore has a map of the domain, hence the importance of limiting rights and monitoring mass queries."
    },
    "ad-q21": {
      "type": "short",
      "accepted": [
        "636"
      ],
      "explanation": "Clear LDAP uses port 389; LDAPS uses 636 and protects the exchanges (authentications included) with TLS. LDAP signing or encryption is enforced to limit relay attacks."
    },
    "ad-q22": {
      "type": "single",
      "correct": "c",
      "explanation": "The client sends a timestamp encrypted with its key: the KDC issues the TGT only to whoever knows it. Without pre-authentication (a dangerous setting), anyone can obtain a reply encrypted with the account’s key and crack it offline: this is AS-REP roasting.",
      "whyWrong": {
        "d": "That is mutual authentication, a different notion.",
        "a": "Pre-authentication is not a second factor."
      }
    },
    "ad-q23": {
      "type": "short",
      "accepted": [
        "5",
        "five"
      ],
      "explanation": "Kerberos uses timestamps to prevent replay: beyond five minutes of difference, authentication fails. Time synchronization (NTP, source domain controller) is part of proper operation and of monitoring."
    },
    "ad-q24": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Kerberos is the default protocol; NTLM serves as a fallback (access by IP address, old systems, services without an SPN). Reducing NTLM, after an audit, removes a large share of relay and hash reuse attacks."
    },
    "ad-q25": {
      "type": "single",
      "correct": "b",
      "explanation": "For an account without pre-authentication, an attacker obtains an AS-REP reply encrypted with the account’s key, without knowing its password, and cracks it offline. The attack is avoided by requiring pre-authentication and inventorying these accounts.",
      "whyWrong": {
        "c": "That is Kerberoasting, which targets accounts with an SPN.",
        "a": "Protected Users strengthens accounts, on the contrary."
      }
    },
    "ad-q26": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "In the first three cases, the attacker holds a derived secret (hash, ticket, key) and authenticates without the password. Spraying, for its part, guesses passwords: it relies on no stolen secret.",
      "whyWrong": {
        "d": "Spraying is an attack by guessing, not by reusing a stolen secret."
      }
    },
    "ad-q27": {
      "type": "single",
      "correct": "a",
      "explanation": "With a service account’s key (obtained through Kerberoasting for example), the attacker makes tickets accepted by that service alone, without the DC being involved: very discreet. A golden ticket, for its part, is a TGT forged with krbtgt’s key.",
      "whyWrong": {
        "d": "A TGT is forged with krbtgt’s key, not a user’s.",
        "c": "Expiry is checked; it is not a type of attack."
      }
    },
    "ad-q28": {
      "type": "single",
      "correct": "b",
      "explanation": "Type 3 is a network session (access to a share, SMB, WinRM). NTLM in type 3 from workstations that do not usually emit it is a sign of pass-the-hash. Type 2 is interactive, type 5 a service, type 10 an RDP access.",
      "whyWrong": {
        "c": "That is type 2.",
        "a": "That is type 5.",
        "d": "That is type 7."
      }
    },
    "ad-q29": {
      "type": "truefalse",
      "correct": true,
      "explanation": "The 0x18 code of 4771 corresponds to a refused pre-authentication: the password provided does not match. A burst of these events on different accounts from the same source is the signature of a password spray against Kerberos."
    },
    "ad-q30": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Additions to privileged groups, account creations and sessions that receive special privileges are signals to monitor. A session closing is a commonplace event.",
      "whyWrong": {
        "c": "A session closing is a daily event, with no direct link to an escalation."
      }
    },
    "ad-q31": {
      "type": "single",
      "correct": "d",
      "explanation": "With “directory service access” auditing enabled, event 4662 records the use of replication rights. A replication requested by a non-controller account, or by a machine that is not one, is a strong sign of DCSync; it is complemented by monitoring replication traffic.",
      "whyWrong": {
        "a": "4740 signals an account lockout.",
        "b": "4769 concerns service tickets.",
        "c": "4625 is a logon failure."
      }
    },
    "ad-q32": {
      "type": "short",
      "accepted": [
        "ORADAD",
        "oradad"
      ],
      "explanation": "ORADAD collects directory information so that ANSSI or the organization can assess its security: privileged accounts, delegations, ACLs, configuration. Community tools such as PingCastle offer a quick rating."
    },
    "ad-q33": {
      "type": "single",
      "correct": "c",
      "explanation": "DCSync uses the replication protocol: an account holding replication rights asks a controller for the secrets of any account, without touching its disk. These rights are reserved for controllers and a few very high-level accounts; any other holder is an alert.",
      "whyWrong": {
        "d": "That is time synchronization, unrelated.",
        "a": "Legitimate replication does not aim to extract secrets."
      }
    },
    "ad-q34": {
      "type": "single",
      "correct": "a",
      "explanation": "With unconstrained delegation, the server keeps the TGT of each user who connects: if it is compromised, the attacker reuses these TGTs, administrators’ included. It is replaced by constrained or resource-based delegation, and sensitive accounts are protected.",
      "whyWrong": {
        "d": "Pre-authentication is a separate account setting.",
        "b": "It does not concern GPOs."
      }
    },
    "ad-q35": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Poorly delegated rights on an object (write on a group, control of an OU, modification of a GPO, password reset of a privileged account) make it possible to reach the higher level without belonging to a privileged group. Hence the audit of rights, not only of memberships."
    },
    "ad-q36": {
      "type": "single",
      "correct": "b",
      "explanation": "A graph links memberships, rights, sessions and delegations. It shows that an ordinary user reaches Domain Admins in five steps. Defenders cut these paths before an attacker takes them; it does not replace monitoring.",
      "whyWrong": {
        "d": "It reveals configuration weaknesses; it does not monitor events.",
        "a": "It does not act on passwords."
      }
    },
    "ad-q37": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Forbidding delegation for sensitive accounts, restricting the services to which a server can delegate and using Protected Users limit the value of a compromised server. Generalizing unconstrained delegation, on the contrary, multiplies the servers that keep TGTs.",
      "whyWrong": {
        "c": "Each server configured this way becomes a TGT-rich target."
      }
    },
    "ad-q38": {
      "type": "short",
      "accepted": [
        "domain admins",
        "domain administrators"
      ],
      "explanation": "Members of the Domain Admins group administer all the domain’s controllers and machines. Its members must be very few, use dedicated accounts and never log on to an ordinary workstation."
    },
    "ad-q39": {
      "type": "single",
      "correct": "a",
      "explanation": "“GenericAll” amounts to full control of the object: the account can modify the group’s membership, hence add itself. Such a right on a sensitive object must be removed and monitored; it belongs to rights control (ACLs), not to group membership.",
      "whyWrong": {
        "d": "Reading the list would not require full control.",
        "b": "This right removes nothing from authentication.",
        "c": "Full control allows far more than consulting."
      }
    },
    "ad-q40": {
      "type": "open",
      "model": "A support member can modify the GPO to deploy a scheduled task or script run as SYSTEM on all the servers of the OU: this is a privilege escalation to a level well above that of the group, without belonging to a privileged group. To spot it: audit the rights (ACLs) of GPOs and OUs with ORADAD, PingCastle or a relationship graph; look for write rights granted to ordinary groups; monitor GPO modifications (event 5136, directory object auditing) and group additions. To fix it: remove the write right from the support group, reserve GPO modification to a small tier 0 or tier 1 administration group depending on the OU, delegate what is needed through targeted rights, log changes and review delegations regularly.",
      "criteria": [
        "Explains code execution on the servers through the GPO modification.",
        "Proposes an ACL audit (tool or graph) to detect this type of right across the domain.",
        "Proposes monitoring GPO modifications.",
        "Proposes removing the right and reserving modification to a restricted group."
      ],
      "explanation": "Rights on directory objects create attack paths invisible in group lists: they are audited as much as memberships."
    }
  },
};
