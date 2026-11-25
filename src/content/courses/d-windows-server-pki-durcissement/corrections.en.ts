// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "d-windows-server-pki-durcissement",
  questions: {
    "wsp-q1": {
      "type": "single",
      "correct": "a",
      "explanation": "Workstations locate domain controllers through the DNS SRV records. A hijacked DNS can steer clients to a fake controller and intercept or relay authentications.",
      "whyWrong": {
        "d": "Passwords are kept (as hashes) in the directory, not in DNS.",
        "b": "Disk encryption is BitLocker’s role.",
        "c": "DNS resolves names; it filters no flow."
      }
    },
    "wsp-q2": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Secure dynamic update requires the machine to be authenticated in the domain and to have rights on the record, which prevents any machine from overwriting an existing record."
    },
    "wsp-q3": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Restricting zone transfers, authorizing the DHCP server in AD and monitoring DNS changes secure these roles.",
      "whyWrong": {
        "a": "Opening zone transfers to everyone discloses the internal map: it is the opposite of a security measure."
      }
    },
    "wsp-q4": {
      "type": "single",
      "correct": "c",
      "explanation": "The root is the trust anchor of the whole PKI. Kept offline, it signs only the intermediate authorities and becomes very hard to compromise, which protects the entire chain.",
      "whyWrong": {
        "b": "It is used to sign the intermediate authorities, at their creation and renewal.",
        "d": "It is the online issuing authorities that deliver the certificates."
      }
    },
    "wsp-q5": {
      "type": "short",
      "accepted": [
        "certificate template",
        "template",
        "modèle de certificat"
      ],
      "explanation": "The certificate template defines the usage, the duration, who can enroll and whether the requester chooses the subject. It is the central element to audit in an AD CS PKI."
    },
    "wsp-q6": {
      "type": "truefalse",
      "correct": true,
      "explanation": "An authentication certificate ties an identity to a key. Issued by mistake in another account’s name, it allows authenticating as that account, hence the major risk if a template lets the subject be chosen."
    },
    "wsp-q7": {
      "type": "single",
      "correct": "b",
      "explanation": "If the requester supplies the subject of an authentication certificate themselves, they can request a certificate in another user’s name (for example an administrator) and impersonate them. The other settings cited are sound.",
      "whyWrong": {
        "d": "A one-year duration is common and reasonable.",
        "a": "Publishing revocation is a good practice.",
        "c": "Approval reduces the risk, it does not increase it."
      }
    },
    "wsp-q8": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Revocation has an effect only if clients check the revocation state (CRL or OCSP). If the list is expired or the distribution point unreachable, a revoked certificate may remain accepted."
    },
    "wsp-q9": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Free subject for authentication, overly broad enrollment rights and issuance without approval of privileged certificates are the risky configurations to audit.",
      "whyWrong": {
        "b": "The look of the interface has no effect on security."
      }
    },
    "wsp-q10": {
      "type": "open",
      "model": "A PKI issues the organization’s authentication certificates: a certificate issued by mistake allows authenticating as any user, administrators included, without knowing their password, and sometimes durably (the certificate remains valid until revoked). Compromising or diverting the issuing authority therefore amounts to being able to impersonate the domain’s identities, like the compromise of AD itself. Defensive checks: inventory the published templates and disable or fix those that let the requester choose the subject for an authentication usage; restrict enrollment rights and require approval for sensitive certificates; keep the root offline; check that revocation (CRL/OCSP) is published and reachable; monitor the authority’s issuances.",
      "criteria": [
        "The link between an authentication certificate issued by mistake and identity impersonation is explained.",
        "The parallel with an AD compromise is made.",
        "At least two concrete defensive checks are given."
      ],
      "explanation": "This is why internal PKIs are now subject to specific audits, just like domain controllers."
    },
    "wsp-q11": {
      "type": "single",
      "correct": "d",
      "explanation": "Server Core installs fewer components (no graphical interface): less exposed code, therefore fewer vulnerabilities and fewer fixes to apply. Administration is done remotely and in PowerShell.",
      "whyWrong": {
        "a": "Server Core adds no protection: it removes components.",
        "b": "It is still subject to updates, simply fewer of them."
      }
    },
    "wsp-q12": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Minimal roles, a configuration baseline and controlled accounts (LAPS, gMSA) are pillars of hardening.",
      "whyWrong": {
        "d": "An administrator password common to all servers lets the fall of one server compromise all the others."
      }
    },
    "wsp-q13": {
      "type": "truefalse",
      "correct": false,
      "explanation": "A domain controller belongs to the highest administration tier. Sharing its accounts with an ordinary, more exposed server would allow moving from the latter to the controller: tiers must remain separate."
    },
    "wsp-q14": {
      "type": "single",
      "correct": "b",
      "explanation": "Ransomware tries to encrypt or delete accessible backups to prevent restoration. Offline or immutable backups with restricted access survive the attack.",
      "whyWrong": {
        "d": "Isolation does not change the restore speed.",
        "c": "No such requirement exists in Windows.",
        "a": "Isolation rather increases storage needs."
      }
    },
    "wsp-q15": {
      "type": "open",
      "model": "Hardening of the domain controller (highest administration tier): Server Core installation, limited roles, CIS/Microsoft baseline through GPO, active firewall, administration through a dedicated workstation and network, administration accounts not shared with other servers, LAPS for the local administrator, fast fixes. DNS: AD-integrated zone, secure dynamic updates only, zone transfers restricted to legitimate DNS servers, monitoring of changes. Backup: system state backup allowing an authoritative restore, isolated copies (offline or immutable) with restricted access to resist ransomware, and regular restore tests.",
      "criteria": [
        "Hardening measures specific to the sensitive role are given (Server Core, tier separation, baselines).",
        "The secure DNS configuration (secure updates, restricted transfers) is described.",
        "An isolated/immutable and tested backup is proposed."
      ],
      "explanation": "Domain controller, DNS and backup form a whole: the loss or corruption of one endangers the restoration of everything."
    },
    "wsp-q16": {
      "type": "short",
      "accepted": [
        "backup",
        "a backup",
        "real backup"
      ],
      "explanation": "A backup that has never been tested in restore is not a real backup: nothing guarantees it is usable on the day of the incident. Restore tests are part of the strategy."
    },
    "wsp-q17": {
      "type": "single",
      "correct": "a",
      "explanation": "SRV records (for example `_ldap._tcp.dc._msdcs`) indicate which servers offer a given service. A domain controller publishes them itself; an attacker who can create some redirects authentications.",
      "whyWrong": {
        "c": "MX designates mail servers.",
        "b": "PTR does reverse resolution.",
        "d": "CNAME is an alias, with no notion of service."
      }
    },
    "wsp-q18": {
      "type": "single",
      "correct": "d",
      "explanation": "Without authentication, any workstation or device can register or replace a record, and thus divert a name to a machine it controls. Secure update forbids it.",
      "whyWrong": {
        "a": "The risk concerns not speed but the integrity of the records.",
        "c": "Replication is not concerned."
      }
    },
    "wsp-q19": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Authorization concerns only Windows DHCP servers: a non-Windows server, or a device plugged into the network, can still answer. The countermeasure is complementary: DHCP snooping on the switches and monitoring of the replies."
    },
    "wsp-q20": {
      "type": "short",
      "accepted": [
        "AXFR",
        "axfr"
      ],
      "explanation": "AXFR is the full zone transfer. Unrestricted, it hands anyone who asks all the names in the zone, hence the internal map. It is limited to legitimate secondary DNS servers."
    },
    "wsp-q21": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Secure updates, restricted modification rights and the blocking of special names (WPAD, ISATAP) prevent a user from imposing a proxy or a gateway. Giving everyone the right to create records opens the way to hijacking.",
      "whyWrong": {
        "b": "This is the situation to avoid: a user could create the WPAD record of their choice."
      }
    },
    "wsp-q22": {
      "type": "single",
      "correct": "c",
      "explanation": "The issuing authority is online, receives requests, applies the templates and signs certificates. Its own authorization comes from the root, which stays offline. It can be revoked and replaced without changing the root deployed everywhere.",
      "whyWrong": {
        "a": "The root’s key is not kept in the issuing authority.",
        "d": "DNS is another service.",
        "b": "A PKI does not store passwords."
      }
    },
    "wsp-q23": {
      "type": "truefalse",
      "correct": false,
      "explanation": "With the authority’s key, an attacker can forge valid certificates at will, including backdated ones. The authority must be revoked, all its certificates reissued and an investigation carried out: trust in its whole branch is lost."
    },
    "wsp-q24": {
      "type": "short",
      "accepted": [
        "OCSP",
        "ocsp"
      ],
      "explanation": "OCSP (Online Certificate Status Protocol) answers the question “is this certificate revoked?” for a specific certificate, without downloading the whole list (CRL). Its responder must remain available, otherwise clients cannot conclude."
    },
    "wsp-q25": {
      "type": "single",
      "correct": "a",
      "explanation": "The root is trusted by all clients: changing it means redeploying it everywhere. By delegating issuance to an intermediate authority, a compromise is handled by revoking that authority and creating a new one under the same root.",
      "whyWrong": {
        "c": "The split does not change the issuance time.",
        "d": "The root can sign intermediate authority certificates.",
        "b": "There is no such general refusal."
      }
    },
    "wsp-q26": {
      "type": "single",
      "correct": "d",
      "explanation": "A wildcard certificate is copied to several servers: the key is more exposed, and its leak lets an attacker pass for any subdomain. Distinct, short-lived certificates are preferred when possible.",
      "whyWrong": {
        "a": "A wildcard is revoked like the others.",
        "c": "It is the opposite: it is used precisely on several servers."
      }
    },
    "wsp-q27": {
      "type": "single",
      "correct": "c",
      "explanation": "The SAN lists the identities covered: DNS names for a server, email address or user name (UPN) for a person. For an authentication certificate, a SAN supplied by the requester and accepted by the authority lets someone pass for another account.",
      "whyWrong": {
        "b": "The end-of-validity date is another field.",
        "a": "The revocation distribution point is another extension."
      }
    },
    "wsp-q28": {
      "type": "truefalse",
      "correct": true,
      "explanation": "An expired certificate is rejected by clients: the site, VPN or authentication it protects stops working. An inventory, alerts before expiry and automatic renewal avoid these outages."
    },
    "wsp-q29": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "The inventory avoids outages, non-exportable keys (stored for example in the TPM) prevent their theft, and short durations limit the window of abuse. Exporting every key, on the contrary, multiplies the copies to protect.",
      "whyWrong": {
        "c": "Each copy of a private key is an opportunity for a leak."
      }
    },
    "wsp-q30": {
      "type": "single",
      "correct": "b",
      "explanation": "With strong mapping, the domain controller requires the certificate to contain, or be associated with, the account’s security identifier (SID). A certificate obtained in another user’s name no longer passes authentication.",
      "whyWrong": {
        "a": "Frequent renewal does not verify identity.",
        "c": "Removing the alternative name does not solve the matching with the account."
      }
    },
    "wsp-q31": {
      "type": "single",
      "correct": "b",
      "explanation": "A gMSA is a service account whose long, random password is managed and renewed by Active Directory: no one knows or types it. It removes weak, never-changed service passwords.",
      "whyWrong": {
        "c": "Sharing an administrator account is precisely what is avoided.",
        "a": "A password in a script is a bad practice."
      }
    },
    "wsp-q32": {
      "type": "single",
      "correct": "d",
      "explanation": "An account’s credentials remain in memory on the machines where it logs on. Separating the tiers (domain controllers and PKI, servers, workstations) prevents an attacker who compromises a workstation from picking up a domain account there.",
      "whyWrong": {
        "c": "It is about security, not workload distribution.",
        "a": "Multiplying accounts is not the goal."
      }
    },
    "wsp-q33": {
      "type": "truefalse",
      "correct": false,
      "explanation": "A useless service remains an attack surface: the firewall does not prevent its exploitation from the allowed flows or from the machine itself, and it must be kept up to date. What is not needed is disabled or uninstalled."
    },
    "wsp-q34": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "SMBv1, NTLM, LLMNR and NetBIOS are old protocols exploited for authentication relay or name spoofing. Kerberos is, on the contrary, the authentication protocol to favor in a domain.",
      "whyWrong": {
        "b": "Kerberos is preferable to NTLM; it must not be replaced by an older protocol."
      }
    },
    "wsp-q35": {
      "type": "single",
      "correct": "c",
      "explanation": "Event 4887 indicates that the certificate services approved a request and issued a certificate (4886: request received; 4888: request denied). The authority’s auditing must be enabled, with an alert on abnormal issuances.",
      "whyWrong": {
        "a": "4624 is a successful logon.",
        "d": "4698 is the creation of a scheduled task.",
        "b": "1102 is the clearing of the security log."
      }
    },
    "wsp-q36": {
      "type": "single",
      "correct": "a",
      "explanation": "After an ordinary restore, replication would delete the restored objects because the other controllers believe them deleted. The authoritative restore marks these objects as having priority and propagates them.",
      "whyWrong": {
        "c": "It concerns the directory, not users’ files.",
        "b": "It resets no password."
      }
    },
    "wsp-q37": {
      "type": "truefalse",
      "correct": true,
      "explanation": "An attacker who obtains the domain administration rights would also try to delete or encrypt the backups. Separate accounts and media (offline or immutable) preserve the ability to restore."
    },
    "wsp-q38": {
      "type": "short",
      "accepted": [
        "3",
        "three"
      ],
      "explanation": "The 3-2-1 rule asks for 3 copies of the data, on 2 different media, 1 of them offsite (or offline). It limits the effect of a failure, a disaster or ransomware."
    },
    "wsp-q39": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "A recovery requires a healthy backup, the reset of the secrets the attacker may have copied (krbtgt, privileged accounts) and proven procedures. Waiting lets the attacker continue and prevents containing the incident.",
      "whyWrong": {
        "d": "Waiting gives the attacker time to act: one must contain."
      }
    },
    "wsp-q40": {
      "type": "open",
      "model": "Ransomware targets backups before encrypting the servers: an attacker who obtains the domain administration account reaches the backup share and encrypts or deletes it, which removes the possibility of restoring and increases the pressure of the ransom. The strategy should have provided isolated copies (offline or immutable), with access strictly separate from day-to-day administration (dedicated accounts, strong authentication), following the 3-2-1 rule; system state backups of the controllers and critical servers; logging and an alert on access to and deletion of backups; and regular restore tests in an isolated environment, with a written recovery plan (rebuild order, secret resets, PKI check).",
      "criteria": [
        "Explains that backups are targeted and why the shared access was fatal.",
        "Proposes isolated copies (offline, immutable) with separate access.",
        "Mentions restore tests and a written recovery plan.",
        "Cites an element of backup monitoring or logging."
      ],
      "explanation": "A backup accessible with the same rights as production is just one more copy to encrypt: the separation of access is what gives it value."
    }
  },
};
