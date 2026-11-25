// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.en.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "wsp-q1",
    "prompt": "Why is DNS critical in an Active Directory domain?",
    "skills": [
      "d-infra-services"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Workstations find the controllers there; hijacking it redirects authentications"
      },
      {
        "id": "b",
        "text": "It encrypts the servers’ disks before they are joined to the domain"
      },
      {
        "id": "c",
        "text": "It replaces the firewall by filtering connections between workstations and servers"
      },
      {
        "id": "d",
        "text": "It stores the users’ passwords in a form that is easy to read back"
      }
    ]
  },
  {
    "id": "wsp-q2",
    "prompt": "“Secure” DNS dynamic updates accept records only from machines authenticated in the domain, checking the rights.",
    "skills": [
      "d-infra-services"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "wsp-q3",
    "prompt": "Which measures secure the Windows infrastructure services?",
    "skills": [
      "d-infra-services"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Opening zone transfers to everyone to ease diagnosis"
      },
      {
        "id": "b",
        "text": "Authorizing the DHCP server in Active Directory"
      },
      {
        "id": "c",
        "text": "Monitoring DNS changes"
      },
      {
        "id": "d",
        "text": "Restricting DNS zone transfers to legitimate servers"
      }
    ]
  },
  {
    "id": "wsp-q4",
    "prompt": "Why keep the root certification authority offline?",
    "skills": [
      "d-pki"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "To save electricity and reduce the load on the company’s servers"
      },
      {
        "id": "b",
        "text": "Because it is never used, not even to sign the intermediate authorities"
      },
      {
        "id": "c",
        "text": "It anchors the PKI’s trust; offline, it is hard to compromise"
      },
      {
        "id": "d",
        "text": "To speed up the issuance of certificates delivered to the domain’s users"
      }
    ]
  },
  {
    "id": "wsp-q5",
    "prompt": "What is the pattern called that defines the usage, duration and issuance conditions of a certificate in AD CS? (two words)",
    "skills": [
      "d-pki"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "certificate …"
  },
  {
    "id": "wsp-q6",
    "prompt": "An authentication certificate issued by mistake can let someone pass for another user, including an administrator.",
    "skills": [
      "d-pki"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "wsp-q7",
    "prompt": "Which template setting is the most dangerous for an authentication certificate?",
    "skills": [
      "d-certificats"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Publishing the revocation distribution point so that clients consult it"
      },
      {
        "id": "b",
        "text": "Letting the requester supply the certificate’s subject (name) themselves"
      },
      {
        "id": "c",
        "text": "Requiring a manager’s approval before any issuance of the certificate"
      },
      {
        "id": "d",
        "text": "Setting a validity of one year, renewable by the requester themselves"
      }
    ]
  },
  {
    "id": "wsp-q8",
    "prompt": "Revoking a certificate is enough to make it unusable, even if clients do not consult the revocation state.",
    "skills": [
      "d-certificats"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "wsp-q9",
    "prompt": "Which configurations of an AD CS PKI must be audited as a priority?",
    "skills": [
      "d-certificats"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Templates where the requester chooses the subject for an authentication usage"
      },
      {
        "id": "b",
        "text": "The color of the certificate store’s icon"
      },
      {
        "id": "c",
        "text": "Issuance without approval of privileged certificates"
      },
      {
        "id": "d",
        "text": "Enrollment rights that are too broad on sensitive templates"
      }
    ]
  },
  {
    "id": "wsp-q10",
    "prompt": "Explain why a poorly configured PKI can be as serious as a compromise of Active Directory, and give two defensive checks.",
    "skills": [
      "d-certificats",
      "d-pki"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "wsp-q11",
    "prompt": "What does installing a server in Server Core mode provide?",
    "skills": [
      "d-srv-hardening"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A built-in antivirus more powerful than the one in the graphical installation"
      },
      {
        "id": "b",
        "text": "The removal of the need to apply security updates on the server"
      },
      {
        "id": "c",
        "text": "Automatic encryption of all the network traffic exchanged with the server"
      },
      {
        "id": "d",
        "text": "Fewer components installed, hence a reduced attack surface and fewer fixes"
      }
    ]
  },
  {
    "id": "wsp-q12",
    "prompt": "Which practices harden a Windows server?",
    "skills": [
      "d-srv-hardening"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Using LAPS and managed service accounts (gMSA)"
      },
      {
        "id": "b",
        "text": "Installing only the necessary roles"
      },
      {
        "id": "c",
        "text": "Applying a configuration baseline (CIS, Microsoft base)"
      },
      {
        "id": "d",
        "text": "Sharing the administrator password across all the servers"
      }
    ]
  },
  {
    "id": "wsp-q13",
    "prompt": "A domain controller and an ordinary file server can share the same administration accounts without risk.",
    "skills": [
      "d-srv-hardening"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "wsp-q14",
    "prompt": "Why isolate (offline or immutable) the backups?",
    "skills": [
      "d-srv-supervision"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "To save disk space on the production servers"
      },
      {
        "id": "b",
        "text": "Because ransomware also encrypts the accessible backups"
      },
      {
        "id": "c",
        "text": "Because Windows requires it for any system state backup"
      },
      {
        "id": "d",
        "text": "To make them faster to restore during an incident on a server"
      }
    ]
  },
  {
    "id": "wsp-q15",
    "prompt": "You are putting into service a domain controller that hosts DNS. Describe the hardening measures, the secure DNS configuration and the backup strategy.",
    "skills": [
      "d-srv-hardening",
      "d-infra-services"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "wsp-q16",
    "prompt": "A backup whose restore has never been tested is not a real… (one word)",
    "skills": [
      "d-srv-supervision"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "backup"
  },
  {
    "id": "wsp-q17",
    "prompt": "Which type of DNS record lets clients locate the domain controllers?",
    "skills": [
      "d-infra-services"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "SRV (service location)"
      },
      {
        "id": "b",
        "text": "PTR (reverse resolution of an address)"
      },
      {
        "id": "c",
        "text": "MX (the domain’s mail server)"
      },
      {
        "id": "d",
        "text": "CNAME (alias to another name)"
      }
    ]
  },
  {
    "id": "wsp-q18",
    "prompt": "What risk does a DNS zone that accepts non-secure dynamic updates present?",
    "skills": [
      "d-infra-services"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Updates become too slow for workstations to find their servers again"
      },
      {
        "id": "b",
        "text": "The DNS server refuses to answer the queries of non-member workstations"
      },
      {
        "id": "c",
        "text": "The zone can no longer be replicated between the domain controllers"
      },
      {
        "id": "d",
        "text": "Any machine can create or overwrite records to redirect"
      }
    ]
  },
  {
    "id": "wsp-q19",
    "prompt": "Authorizing a DHCP server in Active Directory prevents any other DHCP server from answering the network’s clients.",
    "skills": [
      "d-infra-services"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "wsp-q20",
    "prompt": "Which acronym designates the full transfer of a DNS zone to another server? (acronym)",
    "skills": [
      "d-infra-services"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "acronym"
  },
  {
    "id": "wsp-q21",
    "prompt": "Which measures protect internal resolution against hijacking?",
    "skills": [
      "d-infra-services"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "The global query block list kept active (WPAD, ISATAP)"
      },
      {
        "id": "b",
        "text": "The right to create any record granted to all users"
      },
      {
        "id": "c",
        "text": "Secure dynamic updates only"
      },
      {
        "id": "d",
        "text": "Zone modification rights limited to a few accounts"
      }
    ]
  },
  {
    "id": "wsp-q22",
    "prompt": "What is the role of an issuing (intermediate) certification authority?",
    "skills": [
      "d-pki"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Keeping the root’s key and replacing it when it expires"
      },
      {
        "id": "b",
        "text": "Storing the passwords of the users who request a certificate"
      },
      {
        "id": "c",
        "text": "Issuing certificates day to day, with the root’s authorization"
      },
      {
        "id": "d",
        "text": "Replacing the DNS server by publishing the names of the domain’s machines"
      }
    ]
  },
  {
    "id": "wsp-q23",
    "prompt": "If an issuing authority’s private key is stolen, only future certificates are affected.",
    "skills": [
      "d-pki"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "wsp-q24",
    "prompt": "Which acronym designates the online service that tells whether a certificate is revoked, as an alternative to the revocation list? (acronym)",
    "skills": [
      "d-pki",
      "d-certificats"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "acronym"
  },
  {
    "id": "wsp-q25",
    "prompt": "Why split the root and the issuing authority into two tiers?",
    "skills": [
      "d-pki"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A compromised issuing authority can be replaced without redeploying trust in the root"
      },
      {
        "id": "b",
        "text": "Clients refuse any certificate signed directly by a root, in every case"
      },
      {
        "id": "c",
        "text": "It halves the time needed to issue a certificate to a user"
      },
      {
        "id": "d",
        "text": "The root technically cannot sign anything other than another root certificate"
      }
    ]
  },
  {
    "id": "wsp-q26",
    "prompt": "What particular risk does a “wildcard” certificate (*.example.fr) present?",
    "skills": [
      "d-pki",
      "d-certificats"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "It cannot be revoked, since it carries no precise name"
      },
      {
        "id": "b",
        "text": "It expires faster than the others, which causes frequent outages"
      },
      {
        "id": "c",
        "text": "It can be used on a single server of the domain concerned only"
      },
      {
        "id": "d",
        "text": "Its compromised key lets all subdomains be impersonated"
      }
    ]
  },
  {
    "id": "wsp-q27",
    "prompt": "What is the “Subject Alternative Name” (SAN) extension of a certificate for?",
    "skills": [
      "d-certificats"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Designating the certification authority to contact for revocation"
      },
      {
        "id": "b",
        "text": "Indicating the date after which it must be renewed by its owner"
      },
      {
        "id": "c",
        "text": "Listing the names or identities (DNS, email, UPN) it is valid for"
      },
      {
        "id": "d",
        "text": "Encrypting the private key associated with the certificate in the local store"
      }
    ]
  },
  {
    "id": "wsp-q28",
    "prompt": "A certificate whose expiry nobody monitors can cause a service outage on the day it expires.",
    "skills": [
      "d-certificats"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "wsp-q29",
    "prompt": "Which practices reduce the risks of certificate management?",
    "skills": [
      "d-certificats"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Making the keys of authentication certificates non-exportable"
      },
      {
        "id": "b",
        "text": "Favoring short durations with automatic renewal"
      },
      {
        "id": "c",
        "text": "Allowing the export of all private keys to ease backups"
      },
      {
        "id": "d",
        "text": "Keeping an inventory and monitoring the expiry dates"
      }
    ]
  },
  {
    "id": "wsp-q30",
    "prompt": "Which recent protection checks that an authentication certificate matches the account that uses it?",
    "skills": [
      "d-certificats",
      "d-pki"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Daily renewal of all the authentication certificates"
      },
      {
        "id": "b",
        "text": "Strong mapping, which ties the certificate to the account’s SID"
      },
      {
        "id": "c",
        "text": "Removing the alternative name extension from all certificates"
      },
      {
        "id": "d",
        "text": "Encrypting the certificate with the user’s password"
      }
    ]
  },
  {
    "id": "wsp-q31",
    "prompt": "What is a group managed service account (gMSA)?",
    "skills": [
      "d-srv-hardening"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "A local account whose password is written in the application’s script"
      },
      {
        "id": "b",
        "text": "An account whose password the directory generates and renews by itself"
      },
      {
        "id": "c",
        "text": "An administrator account shared by all the servers of a group"
      },
      {
        "id": "d",
        "text": "A guest account with no password for services that need no access"
      }
    ]
  },
  {
    "id": "wsp-q32",
    "prompt": "What does the tiered administration model aim at?",
    "skills": [
      "d-srv-hardening"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Increasing the number of administration accounts to share responsibilities"
      },
      {
        "id": "b",
        "text": "Reserving administrator accounts for workstations located on the premises only"
      },
      {
        "id": "c",
        "text": "Spreading the administration accounts between several teams by workload"
      },
      {
        "id": "d",
        "text": "Preventing a privileged account from logging on to a less protected system"
      }
    ]
  },
  {
    "id": "wsp-q33",
    "prompt": "Useless services can stay active on a server as long as Windows Firewall is enabled.",
    "skills": [
      "d-srv-hardening"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "wsp-q34",
    "prompt": "Which legacy protocols must be disabled or restricted on a server?",
    "skills": [
      "d-srv-hardening"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "SMBv1"
      },
      {
        "id": "b",
        "text": "Kerberos, to be replaced everywhere by an older protocol"
      },
      {
        "id": "c",
        "text": "LLMNR and NetBIOS over TCP/IP"
      },
      {
        "id": "d",
        "text": "NTLM, at least in audit then in restriction"
      }
    ]
  },
  {
    "id": "wsp-q35",
    "prompt": "Which event in an AD CS authority’s security log signals that a request was approved and a certificate issued?",
    "skills": [
      "d-srv-supervision",
      "d-certificats"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "4624"
      },
      {
        "id": "b",
        "text": "1102"
      },
      {
        "id": "c",
        "text": "4887"
      },
      {
        "id": "d",
        "text": "4698"
      }
    ]
  },
  {
    "id": "wsp-q36",
    "prompt": "What is an authoritative restore of Active Directory for?",
    "skills": [
      "d-srv-supervision"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Imposing the restored objects on the other controllers despite replication"
      },
      {
        "id": "b",
        "text": "Resetting all the passwords of the accounts in the directory"
      },
      {
        "id": "c",
        "text": "Restoring the users’ files from the server’s last backup"
      },
      {
        "id": "d",
        "text": "Copying the directory database to a controller that was never a domain member"
      }
    ]
  },
  {
    "id": "wsp-q37",
    "prompt": "A domain controller’s backups must be accessible with credentials distinct from those of day-to-day administration.",
    "skills": [
      "d-srv-supervision"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "wsp-q38",
    "prompt": "In the “3-2-1” backup rule, how many copies of the data must be kept in total? (number)",
    "skills": [
      "d-srv-supervision"
    ],
    "difficulty": 1,
    "type": "short",
    "placeholder": "number"
  },
  {
    "id": "wsp-q39",
    "prompt": "Which elements must a recovery plan after an Active Directory compromise include?",
    "skills": [
      "d-srv-supervision"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Restoring a controller from a healthy backup that predates the intrusion"
      },
      {
        "id": "b",
        "text": "Written procedures, rehearsed during exercises"
      },
      {
        "id": "c",
        "text": "The double reset of the krbtgt account password"
      },
      {
        "id": "d",
        "text": "Waiting for the attacker to leave before taking any measure"
      }
    ]
  },
  {
    "id": "wsp-q40",
    "prompt": "Ransomware has encrypted the servers and the backups, stored on a network share accessible with the domain administration account. Explain what happened and what the backup strategy should have provided.",
    "skills": [
      "d-srv-supervision",
      "d-srv-hardening"
    ],
    "difficulty": 3,
    "type": "open"
  }
];
