// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "o-identite-initiation",
  questions: {
    "oii-q1": {
      "type": "single",
      "correct": "d",
      "explanation": "Authentication verifies that a person really is who they claim to be, for example with a password, a code or a security key.",
      "whyWrong": {
        "a": "Unrelated.",
        "c": "Unrelated.",
        "b": "Unrelated."
      }
    },
    "oii-q2": {
      "type": "single",
      "correct": "a",
      "explanation": "Once the person is identified, authorization decides what they can access and what they can do (read, modify, delete).",
      "whyWrong": {
        "b": "That is authentication.",
        "d": "That is not its role.",
        "c": "That is not its role."
      }
    },
    "oii-q3": {
      "type": "single",
      "correct": "c",
      "explanation": "The identifier (username, email address) designates the account. It is not secret: the secret is the password or the factor.",
      "whyWrong": {
        "d": "That is not an identifier.",
        "a": "That is not an identifier.",
        "b": "That is not an identifier."
      }
    },
    "oii-q4": {
      "type": "single",
      "correct": "b",
      "explanation": "A named account makes it possible to trace actions, remove the access of a single person and adjust their rights.",
      "whyWrong": {
        "c": "That is not the goal.",
        "a": "That is not the goal.",
        "d": "That is not the goal."
      }
    },
    "oii-q5": {
      "type": "truefalse",
      "correct": true,
      "explanation": "It groups the identifier, the authentication factors, the attributes (department, role) and the rights associated with the account."
    },
    "oii-q6": {
      "type": "short",
      "accepted": [
        "password",
        "a password",
        "the password"
      ],
      "explanation": "The password is a knowledge factor. Alone, it is vulnerable to theft and reuse: it is completed with a second factor."
    },
    "oii-q7": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Identifier, rights and sign-in history characterize the account. The favorite color plays no role.",
      "whyWrong": {
        "d": "Unrelated to access."
      }
    },
    "oii-q8": {
      "type": "single",
      "correct": "a",
      "explanation": "Length matters more than apparent complexity. A phrase of several words, specific to each service, is hard to guess and easy to remember.",
      "whyWrong": {
        "c": "Easy to guess.",
        "d": "An attacker’s first attempt.",
        "b": "Easy to find."
      }
    },
    "oii-q9": {
      "type": "single",
      "correct": "d",
      "explanation": "When a service is hacked, attackers try the same credentials elsewhere. A unique password per service limits the damage.",
      "whyWrong": {
        "b": "That is not the reason.",
        "c": "That is not the reason.",
        "a": "That is not the reason."
      }
    },
    "oii-q10": {
      "type": "single",
      "correct": "b",
      "explanation": "It generates long and different passwords for each service and fills them in for you. You only remember one main password.",
      "whyWrong": {
        "d": "That is not its role.",
        "a": "That is not its role.",
        "c": "That is not its role."
      }
    },
    "oii-q11": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Changes that are too frequent push people to choose weak passwords. A long, unique password is preferred, changed after a leak or a suspicion."
    },
    "oii-q12": {
      "type": "short",
      "accepted": [
        "passphrase",
        "a passphrase",
        "pass phrase",
        "password phrase"
      ],
      "explanation": "A passphrase is long, so hard to guess, while remaining memorable."
    },
    "oii-q13": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Length, uniqueness, a manager and confidentiality protect the password. Paper stuck to the screen makes it visible to everyone.",
      "whyWrong": {
        "c": "Anyone can read it."
      }
    },
    "oii-q14": {
      "type": "open",
      "model": "I advise them to immediately change the password of their work mailbox, then that of every account where they used the same one, with a long and different password for each. I encourage them to use a password manager to create and remember them, and to enable multi-factor authentication, at least on the mailbox. They must check the recent activity of the account (unusual sign-ins, forwarding rules) and warn the security team, because attackers first try credentials stolen from other services. Finally, they must never again reuse a work password for personal use.",
      "criteria": [
        "Immediate change of the work password is advised.",
        "Reuse is identified as the cause of the risk.",
        "A password manager and MFA are proposed.",
        "Reporting or checking the account activity is mentioned."
      ],
      "explanation": "Reuse turns the leak of an unimportant site into the compromise of a work account."
    },
    "oii-q15": {
      "type": "single",
      "correct": "c",
      "explanation": "MFA combines at least two proofs of different categories (what you know, have, are): a stolen password is no longer enough.",
      "whyWrong": {
        "b": "That is not the definition.",
        "a": "That is not the definition.",
        "d": "That is not the definition."
      }
    },
    "oii-q16": {
      "type": "single",
      "correct": "b",
      "explanation": "The phone and the security key are objects held by the person: possession factors.",
      "whyWrong": {
        "c": "That is a knowledge factor.",
        "a": "That is a biometric factor.",
        "d": "That is a knowledge factor."
      }
    },
    "oii-q17": {
      "type": "single",
      "correct": "c",
      "explanation": "Without the second factor (phone, key), the password alone does not allow signing in.",
      "whyWrong": {
        "d": "That is not what happens.",
        "a": "That is not what happens.",
        "b": "That is not what happens."
      }
    },
    "oii-q18": {
      "type": "single",
      "correct": "d",
      "explanation": "A security key or a passkey is bound to the legitimate site: it does not work on a fake site. Typed codes can be relayed.",
      "whyWrong": {
        "a": "The code can be relayed.",
        "c": "It can be guessed or found.",
        "b": "It can be stolen."
      }
    },
    "oii-q19": {
      "type": "truefalse",
      "correct": true,
      "explanation": "If you did not initiate the request, someone probably knows your password. You must refuse and report."
    },
    "oii-q20": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Refusing, reporting and checking the context limit MFA fatigue attacks. Accepting to get some peace gives access to the attacker.",
      "whyWrong": {
        "b": "It gives access to the attacker."
      }
    },
    "oii-q21": {
      "type": "short",
      "accepted": [
        "security key",
        "a security key",
        "fido2 key",
        "hardware key"
      ],
      "explanation": "The security key (FIDO2) signs a challenge bound to the site: it is the factor most resistant to phishing."
    },
    "oii-q22": {
      "type": "single",
      "correct": "a",
      "explanation": "The more limited the rights, the fewer consequences a mistake or a compromise has.",
      "whyWrong": {
        "d": "That is not a security principle.",
        "c": "That is not a security principle.",
        "b": "That is not a security principle."
      }
    },
    "oii-q23": {
      "type": "single",
      "correct": "d",
      "explanation": "Without removal, rights pile up over the positions held: the person ends up accessing data unrelated to their work.",
      "whyWrong": {
        "a": "It is not a punishment.",
        "b": "Unrelated.",
        "c": "Unrelated."
      }
    },
    "oii-q24": {
      "type": "single",
      "correct": "a",
      "explanation": "A shared account prevents attributing an action to a person and outlives the departure of users: the practice is avoided.",
      "whyWrong": {
        "c": "That is not the risk.",
        "d": "It is less safe.",
        "b": "There is a real risk."
      }
    },
    "oii-q25": {
      "type": "truefalse",
      "correct": true,
      "explanation": "An active account of a person who has left is an entry door: it can be used by them or by an attacker without anyone noticing."
    },
    "oii-q26": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Email is an attack vector: a single malicious click would hand over administration rights. An ordinary account is used for email."
    },
    "oii-q27": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Administrators, service accounts and provider access can act widely: they are inventoried and monitored. A disabled account with no rights presents no risk.",
      "whyWrong": {
        "d": "It has no rights."
      }
    },
    "oii-q28": {
      "type": "short",
      "accepted": [
        "service account",
        "a service account"
      ],
      "explanation": "A service account runs an application, a backup or a tool. It has limited rights, an owner and does not sign in like a person."
    },
    "oii-q29": {
      "type": "single",
      "correct": "b",
      "explanation": "You authenticate once with an identity provider, which attests the identity to the applications. MFA is set up in the same place.",
      "whyWrong": {
        "c": "Unrelated.",
        "a": "That is not the principle.",
        "d": "Unrelated."
      }
    },
    "oii-q30": {
      "type": "single",
      "correct": "c",
      "explanation": "The site delegates authentication to a provider (mailbox, social network, company directory). It does not receive your password.",
      "whyWrong": {
        "a": "It does not receive it.",
        "b": "That is not what happens.",
        "d": "That is not what happens."
      }
    },
    "oii-q31": {
      "type": "single",
      "correct": "c",
      "explanation": "A malicious application can ask to read your mailbox. The rights requested must match its real use.",
      "whyWrong": {
        "b": "Unrelated.",
        "d": "Insufficient.",
        "a": "Insufficient."
      }
    },
    "oii-q32": {
      "type": "truefalse",
      "correct": false,
      "explanation": "The application gets its own access, independent of your password. A malicious application can read your messages even with a very strong password."
    },
    "oii-q33": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Refusing excess, revoking what is no longer used and reading requests limit abuse. Accepting everything gives lasting access to any application.",
      "whyWrong": {
        "d": "It exposes your data."
      }
    },
    "oii-q34": {
      "type": "open",
      "model": "I do not authorize. I first look at the rights requested: an application that reads documents does not need to read my whole mailbox or keep permanent access. I check the sender and the link, which may be a phishing attempt, and I do not click from the message. If the need is real, I go through the catalog of applications validated by the organization. I report the message to the security team. If I have already accepted, I revoke the application in my account settings and warn the security team so that they check the account activity.",
      "criteria": [
        "The authorization is refused or the application verified before accepting.",
        "The rights requested are judged against the need.",
        "Reporting to the security team is mentioned.",
        "Revocation in case of acceptance is planned."
      ],
      "explanation": "An abusive consent gives lasting access without knowing the password: caution is played at the moment of the click."
    },
    "oii-q35": {
      "type": "single",
      "correct": "d",
      "explanation": "You cut access (password, sessions) and you warn, so that the team can check what was done with the account.",
      "whyWrong": {
        "a": "Waiting makes the damage worse.",
        "b": "You destroy evidence.",
        "c": "You must never share your password."
      }
    },
    "oii-q36": {
      "type": "single",
      "correct": "a",
      "explanation": "It is a classic phishing attempt. You enter nothing, you do not open the links and you report the message to the security team.",
      "whyWrong": {
        "b": "It would hand over the account.",
        "d": "You would spread the trap.",
        "c": "It would hand over the account."
      }
    },
    "oii-q37": {
      "type": "single",
      "correct": "b",
      "explanation": "The alert warns you when a sign-in comes from an unusual place or device, which lets you react quickly.",
      "whyWrong": {
        "c": "That is not its role.",
        "d": "That is not its role.",
        "a": "That is not its role."
      }
    },
    "oii-q38": {
      "type": "truefalse",
      "correct": true,
      "explanation": "The faster the alert, the earlier the access is cut and the less time the attacker has to act: read messages, create rules, send fraud."
    },
    "oii-q39": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Password, sessions and reporting cut access and allow the damage to be checked. Staying silent lets the attacker act.",
      "whyWrong": {
        "a": "It lets the attacker act."
      }
    },
    "oii-q40": {
      "type": "short",
      "accepted": [
        "phishing",
        "phish"
      ],
      "explanation": "Phishing pushes the victim to enter their credentials on a fake site. Factors bound to the legitimate site (passkeys) defeat it."
    }
  },
};
