// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "j-forensique-initiation",
  questions: {
    "jfi-q1": {
      "type": "single",
      "correct": "c",
      "explanation": "A digital investigation reconstructs the facts from traces: what, when, how and sometimes who. It relies on a method that guarantees the value of the evidence.",
      "whyWrong": {
        "d": "Hardware price says nothing about an incident.",
        "a": "Unrelated to establishing the facts.",
        "b": "Headcount is not the subject of the investigation."
      }
    },
    "jfi-q2": {
      "type": "single",
      "correct": "b",
      "explanation": "It is used to understand an intrusion, a data leak, a fraud or a dispute, that is, whenever facts must be established from digital traces.",
      "whyWrong": {
        "d": "Unrelated to an incident.",
        "a": "Buying hardware requires no investigation.",
        "c": "A meeting is not an investigation."
      }
    },
    "jfi-q3": {
      "type": "truefalse",
      "correct": true,
      "explanation": "That is why they rest on unaltered evidence, a chain of custody and a documented, reproducible method."
    },
    "jfi-q4": {
      "type": "short",
      "accepted": [
        "forensics",
        "forensic",
        "digital forensics",
        "computer forensics"
      ],
      "explanation": "The word “forensics” comes from the Latin forensis, referring to the court. It designates the methods that establish facts in a defensible way."
    },
    "jfi-q5": {
      "type": "single",
      "correct": "d",
      "explanation": "A correct conclusion obtained by modifying the evidence or without traceability may be challenged or rejected. The method gives the result its value.",
      "whyWrong": {
        "b": "Tools differ; that is not the reason.",
        "c": "The method applies to evidence; it does not replace it.",
        "a": "Technique remains necessary."
      }
    },
    "jfi-q6": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "It establishes the facts, their date and their mechanism. It does not concern financial forecasts.",
      "whyWrong": {
        "c": "Unrelated to the investigation."
      }
    },
    "jfi-q7": {
      "type": "single",
      "correct": "a",
      "explanation": "The two are complementary: incident response limits damage and restores service, forensics establishes the facts and preserves evidence. They are often carried out together.",
      "whyWrong": {
        "d": "The goals differ.",
        "b": "It is, on the contrary, valuable during an incident.",
        "c": "Incident response also preserves evidence."
      }
    },
    "jfi-q8": {
      "type": "single",
      "correct": "d",
      "explanation": "File, log, memory content, message: any data stored or transmitted by a system that allows a fact to be established is potential digital evidence.",
      "whyWrong": {
        "a": "Digital evidence is not necessarily printed.",
        "c": "A forgotten password is not evidence.",
        "b": "Software is a tool, not evidence."
      }
    },
    "jfi-q9": {
      "type": "single",
      "correct": "a",
      "explanation": "RAM is emptied at power-off: processes, connections and keys in memory are lost. Files on the disk remain.",
      "whyWrong": {
        "b": "Files on the disk remain.",
        "c": "Backups are kept elsewhere.",
        "d": "Photos are files on the disk."
      }
    },
    "jfi-q10": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Opening or modifying the original may change dates or data. We make an exact copy (image) verified by hash and keep the original sealed."
    },
    "jfi-q11": {
      "type": "single",
      "correct": "c",
      "explanation": "We start with what disappears fastest: RAM, then network state, disk, remote logs, archives.",
      "whyWrong": {
        "a": "Archives are durable.",
        "d": "Backups are among the most durable data.",
        "b": "Printed documents are not lost at power-off."
      }
    },
    "jfi-q12": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Logs, memory and files (even deleted) are usable traces. A third party’s opinion that does not refer to data is not digital evidence.",
      "whyWrong": {
        "a": "An opinion unrelated to data is not digital evidence."
      }
    },
    "jfi-q13": {
      "type": "short",
      "accepted": [
        "image",
        "disk image",
        "forensic image",
        "bit-for-bit copy",
        "an image"
      ],
      "explanation": "An image is a faithful copy of the medium, including free space. It is analyzed in place of the original, whose integrity is preserved."
    },
    "jfi-q14": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "At power-off, RAM is erased: processes, connections and keys disappear. Files saved on the disk remain present.",
      "whyWrong": {
        "a": "The disk files are kept at power-off."
      }
    },
    "jfi-q15": {
      "type": "single",
      "correct": "b",
      "explanation": "The hash is a value computed from the content. If it differs from the one at collection, the image has been altered.",
      "whyWrong": {
        "a": "The hash has no effect on speed.",
        "d": "A hash encrypts nothing.",
        "c": "A hash does not compress."
      }
    },
    "jfi-q16": {
      "type": "truefalse",
      "correct": true,
      "explanation": "A cryptographic hash function produces a very different value at the slightest modification. This is what makes the hash reliable for checking integrity."
    },
    "jfi-q17": {
      "type": "short",
      "accepted": [
        "sha-256",
        "sha256",
        "sha 256",
        "sha-2"
      ],
      "explanation": "SHA-256 is the current standard. MD5 and SHA-1 are weakened (collisions possible): they may serve as a complement, but not as the sole guarantee."
    },
    "jfi-q18": {
      "type": "single",
      "correct": "b",
      "explanation": "It traces collection, method, hash and each transfer of custody. A break allows the evidence to be challenged.",
      "whyWrong": {
        "d": "No password is recorded.",
        "a": "Price has no evidential interest.",
        "c": "The public’s opinion is not a fact."
      }
    },
    "jfi-q19": {
      "type": "single",
      "correct": "a",
      "explanation": "It allows reading without ever modifying, since a system may otherwise write data and change dates as soon as it mounts the medium.",
      "whyWrong": {
        "c": "It prevents writing; it does not speed it up.",
        "b": "It protects against deletion.",
        "d": "It does not encrypt."
      }
    },
    "jfi-q20": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Identification, circumstances of collection and hash make the seal traceable. Opinions have no place in this factual document.",
      "whyWrong": {
        "b": "A sheet is factual; conclusions go in the report."
      }
    },
    "jfi-q21": {
      "type": "single",
      "correct": "c",
      "explanation": "If we do not know who held the medium between two dates, nothing proves it was not modified. The opposing party may then challenge the evidence.",
      "whyWrong": {
        "b": "On the contrary, it weakens it.",
        "d": "The break does not erase the evidence.",
        "a": "It has no relation to compression."
      }
    },
    "jfi-q22": {
      "type": "single",
      "correct": "d",
      "explanation": "Authentication logs indicate who signed in, when, from where and with what result.",
      "whyWrong": {
        "a": "The wallpaper records nothing.",
        "b": "The recycle bin holds deleted files.",
        "c": "Fonts have no link with sign-ins."
      }
    },
    "jfi-q23": {
      "type": "single",
      "correct": "a",
      "explanation": "It keeps the pages visited, searches and downloads, which may show how a suspicious file arrived on a workstation.",
      "whyWrong": {
        "b": "RAM is another source.",
        "c": "It does not contain the system’s passwords.",
        "d": "Firewall logs are elsewhere."
      }
    },
    "jfi-q24": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Deletion often marks the space as free without erasing the data. It remains recoverable until it is overwritten."
    },
    "jfi-q25": {
      "type": "single",
      "correct": "b",
      "explanation": "Creation and modification dates, author, device: this data describes the file and helps trace its history.",
      "whyWrong": {
        "a": "Metadata describes the content without reproducing it.",
        "d": "It is not malware.",
        "c": "It is not a copy."
      }
    },
    "jfi-q26": {
      "type": "single",
      "correct": "d",
      "explanation": "Prefetch files keep the trace of a program’s execution, with the number of executions and the last dates.",
      "whyWrong": {
        "c": "Unrelated to execution.",
        "a": "An empty recycle bin is not an execution trace.",
        "b": "A screensaver does not record executions."
      }
    },
    "jfi-q27": {
      "type": "short",
      "accepted": [
        ".bash_history",
        "bash_history",
        "~/.bash_history"
      ],
      "explanation": "`.bash_history` keeps the commands typed in the terminal. An empty history or one redirected to `/dev/null` may indicate deliberate concealment."
    },
    "jfi-q28": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Cross-checking sources, synchronizing clocks and protecting logs strengthen reliability. The access date, sometimes not updated, is not enough.",
      "whyWrong": {
        "a": "The access date is unreliable."
      }
    },
    "jfi-q29": {
      "type": "single",
      "correct": "c",
      "explanation": "It puts the events of all sources in the order of time, which reveals causes and consequences.",
      "whyWrong": {
        "b": "It deletes nothing.",
        "d": "It has no effect on performance.",
        "a": "It is not used to choose a product."
      }
    },
    "jfi-q30": {
      "type": "single",
      "correct": "a",
      "explanation": "Each source has its own time zone or format. UTC is a common reference with no daylight-saving change.",
      "whyWrong": {
        "b": "UTC encrypts nothing.",
        "c": "UTC does not change the size.",
        "d": "They are converted, not deleted."
      }
    },
    "jfi-q31": {
      "type": "single",
      "correct": "b",
      "explanation": "In winter, Paris is on UTC+1: one hour is subtracted to get UTC, i.e. 13:00. In summer (UTC+2), two hours would be subtracted.",
      "whyWrong": {
        "a": "15:00 would correspond to adding one hour.",
        "c": "This would ignore the time-zone offset.",
        "d": "12:00 would correspond to UTC+2, hence to summer."
      }
    },
    "jfi-q32": {
      "type": "truefalse",
      "correct": false,
      "explanation": "A source may be incomplete, poorly synchronized or modified. We cross-check several independent sources before asserting."
    },
    "jfi-q33": {
      "type": "single",
      "correct": "c",
      "explanation": "The drift is measured by comparison with a reliable source and corrected with documentation. Ignoring or deleting the source loses information.",
      "whyWrong": {
        "d": "Its logs remain usable once corrected.",
        "b": "Without correction, the order of events may be wrong.",
        "a": "Evidence is not deleted."
      }
    },
    "jfi-q34": {
      "type": "short",
      "accepted": [
        "epoch",
        "unix",
        "unix timestamp",
        "unix time",
        "unix epoch",
        "epoch time"
      ],
      "explanation": "The Unix timestamp (“epoch”) counts the seconds since January 1, 1970 UTC. It must be converted to a readable date, in UTC, before being compared with other sources."
    },
    "jfi-q35": {
      "type": "single",
      "correct": "d",
      "explanation": "The examination is done with the authorization of an entitled person and in compliance with labor law, the IT charter and the GDPR.",
      "whyWrong": {
        "a": "Mood plays no role.",
        "c": "The age of the disk is irrelevant.",
        "b": "The presence of a witness may even be useful."
      }
    },
    "jfi-q36": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Access is limited by proportionality and privacy protection: we consult only what the mission justifies, with a framework and prior information."
    },
    "jfi-q37": {
      "type": "single",
      "correct": "a",
      "explanation": "Isolation stops any spread without destroying memory. Restarting, cleaning or deleting erases evidence.",
      "whyWrong": {
        "d": "A restart erases RAM.",
        "b": "A cleanup modifies the state and destroys traces.",
        "c": "Deleting destroys evidence."
      }
    },
    "jfi-q38": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Each action of the investigator leaves traces. Noting them lets them be distinguished from those of the incident and lets the analysis be reproduced."
    },
    "jfi-q39": {
      "type": "open",
      "model": "I ask them to stop using the computer, to delete or “clean” nothing, not to restart or power it off, and to cut the network (cable or Wi-Fi) if the security team confirms. They note the time, what they saw and what they did, and possibly take a photo of the screen. I plan to warn the security officer without waiting. I explain that RAM holds traces that disappear at power-off and that any modification may weaken the evidence.",
      "criteria": [
        "The ban on deleting, cleaning or restarting is indicated.",
        "Network isolation and note-taking are mentioned.",
        "Warning security is planned."
      ],
      "explanation": "The first reflexes protect the evidence: do not touch, isolate, note, warn."
    },
    "jfi-q40": {
      "type": "open",
      "model": "The hash is a value computed from the content. If the copy’s hash is identical to the original’s, the copy is exact. It is then recomputed at each use: if it changes, the image has been altered. This proves the integrity of the evidence, lets a third party redo the analysis on a new copy and feeds the chain of custody.",
      "criteria": [
        "The principle of comparing hashes is explained.",
        "The integrity of the copy is tied to the value of the evidence.",
        "Verification at each use is mentioned."
      ],
      "explanation": "The hash is the mathematical proof that an image has not changed since its acquisition."
    }
  },
};
