// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.en.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "ad-q1",
    "prompt": "Which server hosts the Active Directory database and authenticates users?",
    "skills": [
      "d-ad-struct"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The workstations’ web proxy"
      },
      {
        "id": "b",
        "text": "The local network’s DHCP server"
      },
      {
        "id": "c",
        "text": "The company’s file server"
      },
      {
        "id": "d",
        "text": "The domain controller"
      }
    ]
  },
  {
    "id": "ad-q2",
    "prompt": "A GPO that an attacker can modify may let them run code on all the machines to which it applies.",
    "skills": [
      "d-ad-struct"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "ad-q3",
    "prompt": "What is the name of the Active Directory database file on a domain controller?",
    "skills": [
      "d-ad-struct"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "file name"
  },
  {
    "id": "ad-q4",
    "prompt": "With the key of which account is the TGT encrypted?",
    "skills": [
      "d-kerberos"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "That of the krbtgt account"
      },
      {
        "id": "b",
        "text": "That of the client workstation’s machine account"
      },
      {
        "id": "c",
        "text": "That of the user who authenticates"
      },
      {
        "id": "d",
        "text": "That of the domain’s Administrator account"
      }
    ]
  },
  {
    "id": "ad-q5",
    "prompt": "With the key of which account is a service ticket (TGS) encrypted?",
    "skills": [
      "d-kerberos"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The account of the user who requests the service ticket"
      },
      {
        "id": "b",
        "text": "The account that runs the targeted service (tied to the SPN)"
      },
      {
        "id": "c",
        "text": "The krbtgt account, as for all the domain’s tickets"
      },
      {
        "id": "d",
        "text": "None: the ticket travels in clear between client and server"
      }
    ]
  },
  {
    "id": "ad-q6",
    "prompt": "With NTLM, an attacker who holds a user’s NT hash can authenticate without knowing their password.",
    "skills": [
      "d-kerberos",
      "d-ad-attacks"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "ad-q7",
    "prompt": "Which Windows event identifier corresponds to a Kerberos service ticket request? (number)",
    "skills": [
      "d-kerberos",
      "d-ad-detect"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "number"
  },
  {
    "id": "ad-q8",
    "prompt": "A single source generates 300 4625 events on 300 different accounts in two minutes, then a 4624. What is it?",
    "skills": [
      "d-ad-attacks",
      "d-ad-detect"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A normal replication between domain controllers"
      },
      {
        "id": "b",
        "text": "A brute force against a single privileged account"
      },
      {
        "id": "c",
        "text": "A probably successful password spray"
      },
      {
        "id": "d",
        "text": "A Kerberoasting against a service account"
      }
    ]
  },
  {
    "id": "ad-q9",
    "prompt": "Which conditions make Kerberoasting effective for an attacker?",
    "skills": [
      "d-ad-attacks"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "A service account password that is never changed"
      },
      {
        "id": "b",
        "text": "The use of gMSA for the service accounts"
      },
      {
        "id": "c",
        "text": "RC4 encryption still allowed"
      },
      {
        "id": "d",
        "text": "A service account with an SPN and a weak password"
      }
    ]
  },
  {
    "id": "ad-q10",
    "prompt": "What is a “golden ticket”?",
    "skills": [
      "d-ad-attacks"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A root certificate issued by the company’s internal PKI"
      },
      {
        "id": "b",
        "text": "A TGT forged using the krbtgt account’s hash"
      },
      {
        "id": "c",
        "text": "A service ticket obtained through Kerberoasting on an account"
      },
      {
        "id": "d",
        "text": "A web session token stolen from a user’s browser"
      }
    ]
  },
  {
    "id": "ad-q11",
    "prompt": "Which measures limit lateral movement between workstations?",
    "skills": [
      "d-ad-detect"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Forbidding tier 0 accounts from logging on to workstations"
      },
      {
        "id": "b",
        "text": "Windows LAPS (a unique local administrator password per workstation)"
      },
      {
        "id": "c",
        "text": "Using the same image and the same local password everywhere"
      },
      {
        "id": "d",
        "text": "Blocking SMB between workstations at the firewall"
      }
    ]
  },
  {
    "id": "ad-q12",
    "prompt": "After a domain compromise, renewing krbtgt’s password a single time is enough to invalidate all golden tickets.",
    "skills": [
      "d-ad-detect"
    ],
    "difficulty": 3,
    "type": "truefalse"
  },
  {
    "id": "ad-q13",
    "prompt": "Which event identifier indicates the lockout of a user account? (number)",
    "skills": [
      "d-ad-detect",
      "d-ad-attacks"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "number"
  },
  {
    "id": "ad-q14",
    "prompt": "Describe the scenario by which the compromise of a single workstation can lead to the total compromise of the domain, and the three measures that would break this chain most effectively.",
    "skills": [
      "d-ad-attacks",
      "d-ad-detect"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "ad-q15",
    "prompt": "Explain to a junior colleague the difference between a TGT and a service ticket, and why the DC does not intervene when the ticket is presented to the server.",
    "skills": [
      "d-kerberos",
      "d-ad-struct"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "ad-q16",
    "prompt": "Which Windows security group notably prevents the use of NTLM and RC4 for its members?",
    "skills": [
      "d-ad-struct",
      "d-ad-detect"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Backup Operators"
      },
      {
        "id": "b",
        "text": "Remote Desktop Users"
      },
      {
        "id": "c",
        "text": "Domain Users"
      },
      {
        "id": "d",
        "text": "Protected Users"
      }
    ]
  },
  {
    "id": "ad-q17",
    "prompt": "An administrator claims: “our service accounts are gMSAs, so Kerberoasting can do nothing against them”. What is the correct nuance?",
    "skills": [
      "d-ad-attacks",
      "d-ad-detect"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Possible, but a gMSA’s random password makes cracking unrealistic"
      },
      {
        "id": "b",
        "text": "That is correct: a gMSA cannot receive a service ticket at all"
      },
      {
        "id": "c",
        "text": "Kerberoasting targets only user accounts, never service accounts"
      },
      {
        "id": "d",
        "text": "That is correct only if RC4 encryption is disabled in the domain"
      }
    ]
  },
  {
    "id": "ad-q18",
    "prompt": "What is an Active Directory forest?",
    "skills": [
      "d-ad-struct"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A complete backup of the directory kept at another site"
      },
      {
        "id": "b",
        "text": "A group of domain controllers installed on the same site"
      },
      {
        "id": "c",
        "text": "Domains sharing a schema and a security boundary"
      },
      {
        "id": "d",
        "text": "A list of all the users who have the right to log on"
      }
    ]
  },
  {
    "id": "ad-q19",
    "prompt": "What is an organizational unit (OU) for?",
    "skills": [
      "d-ad-struct"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Creating a trust between two forests belonging to distinct companies"
      },
      {
        "id": "b",
        "text": "Storing the password hashes of all the users"
      },
      {
        "id": "c",
        "text": "Encrypting the directory objects before their replication between controllers"
      },
      {
        "id": "d",
        "text": "Organizing objects, delegating their administration and applying GPOs to them"
      }
    ]
  },
  {
    "id": "ad-q20",
    "prompt": "Any authenticated domain user can read, over LDAP, a large part of the directory’s objects.",
    "skills": [
      "d-ad-struct"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "ad-q21",
    "prompt": "Which TCP port number does LDAPS, that is LDAP protected by TLS, use? (number)",
    "skills": [
      "d-ad-struct"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "port"
  },
  {
    "id": "ad-q22",
    "prompt": "What is Kerberos pre-authentication?",
    "skills": [
      "d-kerberos"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The request for a second factor before any logon"
      },
      {
        "id": "b",
        "text": "The encryption of the connection by TLS before the exchange of tickets"
      },
      {
        "id": "c",
        "text": "The client proves it knows its key before receiving a TGT"
      },
      {
        "id": "d",
        "text": "The verification of the server’s identity before sending the ticket"
      }
    ]
  },
  {
    "id": "ad-q23",
    "prompt": "What maximum clock skew, in minutes, does Kerberos tolerate by default between the client and the KDC? (number)",
    "skills": [
      "d-kerberos"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "minutes"
  },
  {
    "id": "ad-q24",
    "prompt": "In a modern Active Directory domain, NTLM is the authentication protocol used by default.",
    "skills": [
      "d-kerberos"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "ad-q25",
    "prompt": "What does AS-REP roasting target?",
    "skills": [
      "d-ad-attacks"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Accounts that are members of the Protected Users group"
      },
      {
        "id": "b",
        "text": "Accounts without pre-authentication, crackable offline"
      },
      {
        "id": "c",
        "text": "Service accounts that have a service principal name"
      },
      {
        "id": "d",
        "text": "Domain controllers whose clock is not synchronized"
      }
    ]
  },
  {
    "id": "ad-q26",
    "prompt": "Which attacks reuse a stolen secret or ticket without knowing the password?",
    "skills": [
      "d-ad-attacks"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Golden ticket, which forges a TGT with a stolen key"
      },
      {
        "id": "b",
        "text": "Pass-the-hash, which reuses the NT hash"
      },
      {
        "id": "c",
        "text": "Pass-the-ticket, which reuses a stolen Kerberos ticket"
      },
      {
        "id": "d",
        "text": "Password spraying, which tests common passwords"
      }
    ]
  },
  {
    "id": "ad-q27",
    "prompt": "What is a “silver ticket”?",
    "skills": [
      "d-ad-attacks",
      "d-kerberos"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A service ticket forged with the service account’s key"
      },
      {
        "id": "b",
        "text": "A ticket of an account of the neighboring forest, relayed by trust"
      },
      {
        "id": "c",
        "text": "A ticket that has expired but that the controller still accepts"
      },
      {
        "id": "d",
        "text": "A TGT forged with the targeted user account’s key"
      }
    ]
  },
  {
    "id": "ad-q28",
    "prompt": "What does logon type 3 mean in a 4624 event?",
    "skills": [
      "d-ad-detect"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A service starting with the account configured for it"
      },
      {
        "id": "b",
        "text": "A network session, for example an access to a share"
      },
      {
        "id": "c",
        "text": "An interactive session, at the workstation’s keyboard"
      },
      {
        "id": "d",
        "text": "An unlocking of a session after a screensaver"
      }
    ]
  },
  {
    "id": "ad-q29",
    "prompt": "A 4771 event with code 0x18 indicates a Kerberos pre-authentication failure due to a wrong password.",
    "skills": [
      "d-ad-detect"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "ad-q30",
    "prompt": "Which events should be monitored to spot a privilege escalation in Active Directory?",
    "skills": [
      "d-ad-detect"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "4672: special privileges assigned to a logon"
      },
      {
        "id": "b",
        "text": "4720: creation of a user account"
      },
      {
        "id": "c",
        "text": "4634: closing of a session by a user"
      },
      {
        "id": "d",
        "text": "4728, 4732 and 4756: addition to a security group"
      }
    ]
  },
  {
    "id": "ad-q31",
    "prompt": "Which event makes it possible to spot a directory replication request (DCSync) issued by an account that is not a controller?",
    "skills": [
      "d-ad-detect",
      "d-ad-chemins"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "4740, a lockout of a domain user account"
      },
      {
        "id": "b",
        "text": "4769, a Kerberos service ticket request"
      },
      {
        "id": "c",
        "text": "4625, a logon failure on a workstation"
      },
      {
        "id": "d",
        "text": "4662, with the directory replication rights"
      }
    ]
  },
  {
    "id": "ad-q32",
    "prompt": "Which free ANSSI tool produces a security status of an Active Directory directory? (name)",
    "skills": [
      "d-ad-detect"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "name"
  },
  {
    "id": "ad-q33",
    "prompt": "What is DCSync?",
    "skills": [
      "d-ad-chemins"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "An automatic copy of the directory database to a remote backup site"
      },
      {
        "id": "b",
        "text": "An administration tool that compares the GPOs between two controllers"
      },
      {
        "id": "c",
        "text": "An account with replication rights imitates a controller and obtains the hashes"
      },
      {
        "id": "d",
        "text": "A clock synchronization between two controllers of the same company domain"
      }
    ]
  },
  {
    "id": "ad-q34",
    "prompt": "Why is unconstrained Kerberos delegation dangerous?",
    "skills": [
      "d-ad-chemins",
      "d-kerberos"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "The server receives and keeps the TGTs of those who connect"
      },
      {
        "id": "b",
        "text": "It gives any user the right to modify the domain’s GPOs"
      },
      {
        "id": "c",
        "text": "It forces the use of NTLM instead of Kerberos between servers"
      },
      {
        "id": "d",
        "text": "It disables pre-authentication for all the accounts concerned"
      }
    ]
  },
  {
    "id": "ad-q35",
    "prompt": "A user must be a member of a privileged group to be able to escalate their privileges in Active Directory.",
    "skills": [
      "d-ad-chemins"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "ad-q36",
    "prompt": "Why is a graph of the directory’s relationships (BloodHound type) useful to defenders?",
    "skills": [
      "d-ad-chemins"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It automatically generates the passwords of the service accounts"
      },
      {
        "id": "b",
        "text": "It reveals the indirect paths to privileged accounts, so they can be cut"
      },
      {
        "id": "c",
        "text": "It encrypts the trust relationships between the forest’s domains"
      },
      {
        "id": "d",
        "text": "It replaces the monitoring of the authentication events of the entire domain"
      }
    ]
  },
  {
    "id": "ad-q37",
    "prompt": "Which measures reduce the risks of Kerberos delegation?",
    "skills": [
      "d-ad-chemins"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Replacing unconstrained delegation with constrained delegation"
      },
      {
        "id": "b",
        "text": "Marking sensitive accounts as “cannot be delegated”"
      },
      {
        "id": "c",
        "text": "Enabling unconstrained delegation on all application servers"
      },
      {
        "id": "d",
        "text": "Placing administration accounts in Protected Users"
      }
    ]
  },
  {
    "id": "ad-q38",
    "prompt": "Which highly privileged built-in group gives control of an entire Active Directory domain? (two words)",
    "skills": [
      "d-ad-chemins",
      "d-ad-struct"
    ],
    "difficulty": 1,
    "type": "short",
    "placeholder": "two words"
  },
  {
    "id": "ad-q39",
    "prompt": "An ordinary user account has the “GenericAll” right on a privileged group. What is the risk?",
    "skills": [
      "d-ad-chemins"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It can add itself to this group and obtain its privileges"
      },
      {
        "id": "b",
        "text": "It loses the right to authenticate on the controllers"
      },
      {
        "id": "c",
        "text": "It can only consult the history of the group’s modifications"
      },
      {
        "id": "d",
        "text": "It can only read the list of the group’s members"
      }
    ]
  },
  {
    "id": "ad-q40",
    "prompt": "An audit reveals that the “Support level 1” group has the right to write to a GPO linked to the servers’ OU. Explain the risk, how to spot it across the domain and how to fix it.",
    "skills": [
      "d-ad-chemins",
      "d-ad-detect"
    ],
    "difficulty": 3,
    "type": "open"
  }
];
