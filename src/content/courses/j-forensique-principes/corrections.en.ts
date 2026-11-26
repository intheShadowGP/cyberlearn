// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "j-forensique-principes",
  questions: {
    "for-q1": {
      "type": "single",
      "correct": "b",
      "explanation": "RAM disappears at power-off and constantly changes: it is collected before the disk, itself collected before the archives.",
      "whyWrong": {
        "c": "The disk is more durable than memory.",
        "a": "Backups are among the most durable data.",
        "d": "Archives can be kept without urgency."
      }
    },
    "for-q2": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Working on a copy verified by hash preserves the original and allows an opposing expert to redo the analysis on a new copy."
    },
    "for-q3": {
      "type": "short",
      "accepted": [
        "3227",
        "rfc 3227",
        "rfc3227"
      ],
      "explanation": "RFC 3227 (2002) defines the principles of evidence collection and archiving, including the order of volatility. It remains the basic reference."
    },
    "for-q13": {
      "type": "open",
      "model": "1) Photograph the screen and the scene, note the time, do not touch the keyboard unnecessarily. 2) Isolate from the network (cable, Wi-Fi) without powering off. 3) Acquire the RAM with a tool from the USB key to the external disk, noting the commands; compute the hash. 4) Retrieve the BitLocker recovery key (from AD or Entra ID, or from memory) and, if possible, make a logical image of the unlocked volume. 5) Power off (cut the power according to doctrine), remove the disk, make a physical image through a write blocker, compute the hash. 6) Seal, fill in the seal sheet and the chain of custody at each step.",
      "criteria": [
        "The memory is acquired before power-off.",
        "The BitLocker key question is addressed before power-off.",
        "Hashes are computed and recorded.",
        "Documentation (photos, times, chain of custody) accompanies each step."
      ],
      "explanation": "With full-disk encryption, powering off too early can make the disk permanently unreadable if the recovery key is not available."
    },
    "for-q32": {
      "type": "single",
      "correct": "a",
      "explanation": "Each action on a system produces artifacts. The investigator must therefore minimize and document their footprint so that their actions can be distinguished from the attacker’s.",
      "whyWrong": {
        "c": "This is the opposite of the principle.",
        "d": "The investigator also leaves traces.",
        "b": "Only volatile data disappears; other traces persist."
      }
    },
    "for-q40": {
      "type": "single",
      "correct": "d",
      "explanation": "Powering off makes the volume unreadable without the key. We first acquire the memory, where the key resides, and prepare the image of the unlocked volume or the recovery key.",
      "whyWrong": {
        "c": "Immediate power-off may make the data inaccessible.",
        "b": "Cleaning modifies the state and destroys evidence.",
        "a": "A reboot erases memory and locks the volume."
      }
    },
    "for-q4": {
      "type": "single",
      "correct": "c",
      "explanation": "Changing a single bit changes the SHA-256 hash. Comparing the current hash with the one recorded at acquisition proves integrity.",
      "whyWrong": {
        "b": "Two different images may have the same size.",
        "d": "Opening in an explorer may modify metadata.",
        "a": "Compression modifies the file and its hash."
      }
    },
    "for-q5": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "The chain of custody is factual: collection, method, hash, successive transfers with dates and reasons.",
      "whyWrong": {
        "d": "Opinions have no place in this register; conclusions appear in the report, backed by facts."
      }
    },
    "for-q6": {
      "type": "truefalse",
      "correct": true,
      "explanation": "The system may mount the volume, update access dates, write system files (indexing, recycle bin). A write blocker prevents any modification."
    },
    "for-q16": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Traceability, corroboration and reproducibility are the pillars of evidential value.",
      "whyWrong": {
        "d": "Modifying the image changes its hash and destroys its evidential value; we filter at analysis time, never in the evidence."
      }
    },
    "for-q33": {
      "type": "single",
      "correct": "d",
      "explanation": "The sealed original remains the reference. Any analysis can be reproduced by a third party on a new copy, verified by hash.",
      "whyWrong": {
        "a": "Speed is not the reason.",
        "c": "The hash remains necessary to prove the copy is faithful.",
        "b": "Nothing is deleted from evidence."
      }
    },
    "for-q34": {
      "type": "truefalse",
      "correct": false,
      "explanation": "The hash is computed at acquisition then verified at each use and each transfer. Computing it only at the end does not prove that the image did not change in between."
    },
    "for-q7": {
      "type": "single",
      "correct": "b",
      "explanation": "Prefetch files (.pf) are created when a program runs and keep the number of executions and up to eight last execution dates (Windows 8 and later).",
      "whyWrong": {
        "d": "The hosts file maps names to addresses.",
        "c": "The recycle bin holds deleted files.",
        "a": "The wallpaper is not an execution trace."
      }
    },
    "for-q8": {
      "type": "short",
      "accepted": [
        "volatility",
        "volatility 3",
        "volatility3"
      ],
      "explanation": "Volatility (currently version 3) extracts from a memory image the processes, connections, injected modules, command lines, etc."
    },
    "for-q9": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Run keys, services (7045) and scheduled tasks are among the most frequent persistence mechanisms (ATT&CK TA0003).",
      "whyWrong": {
        "a": "Screen resolution has no link to persistence."
      }
    },
    "for-q10": {
      "type": "single",
      "correct": "c",
      "explanation": "$STANDARD_INFORMATION can be modified by common APIs; $FILE_NAME is updated by the kernel. A recent $FN creation with an old $SI creation signals deliberate backdating.",
      "whyWrong": {
        "d": "A disk error does not produce this precise inconsistency.",
        "b": "An update does not push the $SI date into the past.",
        "a": "Compression does not change these two attributes this way."
      }
    },
    "for-q35": {
      "type": "single",
      "correct": "a",
      "explanation": "The Amcache (and the Shimcache) records the presence and execution of programs; the Amcache also holds the SHA-1 hash of executables, useful to look them up in intelligence databases.",
      "whyWrong": {
        "c": "The swap file holds fragments of memory.",
        "d": "The clipboard is volatile.",
        "b": "The print log does not concern executables."
      }
    },
    "for-q36": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Command history, authentication logs and scheduled tasks inform about actions, sign-ins and persistence. The desktop theme brings nothing.",
      "whyWrong": {
        "d": "The graphical theme is not a security activity trace."
      }
    },
    "for-q11": {
      "type": "truefalse",
      "correct": true,
      "explanation": "In winter, Paris is on UTC+1: 10:00 Paris time corresponds to 09:00 UTC. In summer (UTC+2), two hours would have to be subtracted."
    },
    "for-q12": {
      "type": "short",
      "accepted": [
        "utc"
      ],
      "explanation": "Coordinated Universal Time (UTC) has no daylight-saving change: it allows sources from different time zones to be compared without ambiguity."
    },
    "for-q14": {
      "type": "single",
      "correct": "b",
      "explanation": "The Unix epoch is January 1, 1970 at 00:00:00 UTC. January 1, 1601 UTC is the origin of the Windows FILETIME format (100 ns intervals).",
      "whyWrong": {
        "a": "This is not the origin of the Unix epoch.",
        "c": "Timestamp 0 has no link to installation.",
        "d": "This is the origin of the Windows FILETIME format."
      }
    },
    "for-q15": {
      "type": "open",
      "model": "Hypotheses: 1) deliberate log clearing by the attacker (event 1102 “log cleared” or 104); 2) logging service or collection agent stopped; 3) log saturation and rotation (maximum size too small); 4) server powered off or restarted (events 6005/6006, 6008); 5) failure of the collection chain toward the SIEM. Verifications: look for 1102/104, examine the log size configuration, cross-check with independent sources (EDR, firewall, SIEM, other servers’ logs, $MFT and USN Journal), look for clearing tools in Prefetch or Amcache.",
      "criteria": [
        "Deliberate clearing is considered and verifiable through a specific event.",
        "At least two non-malicious causes are proposed.",
        "Cross-checking with independent sources is proposed."
      ],
      "explanation": "A gap in the logs is itself a fact to explain. Independent sources (SIEM, EDR, disk artifacts) often fill the gap."
    },
    "for-q31": {
      "type": "short",
      "accepted": [
        "filetime",
        "file time",
        "the filetime"
      ],
      "explanation": "FILETIME is used by NTFS and many Windows structures. It must be converted to UTC before being compared with Unix timestamps or logs from other sources."
    },
    "for-q37": {
      "type": "single",
      "correct": "c",
      "explanation": "In summer, Paris is on UTC+2: 11:30 Paris time corresponds to 09:30 UTC. In winter (UTC+1), only one hour would be subtracted.",
      "whyWrong": {
        "a": "10:30 would correspond to UTC+1, hence to winter.",
        "d": "This would add instead of subtract.",
        "b": "This would add two hours."
      }
    },
    "for-q38": {
      "type": "single",
      "correct": "a",
      "explanation": "A known drift is measured (by comparison with a reference source) and corrected in the timeline, with documentation. Ignoring or deleting would lose useful information.",
      "whyWrong": {
        "b": "These logs remain usable once corrected.",
        "c": "Without correction, the order of events may be wrong.",
        "d": "A source is not removed without reason."
      }
    },
    "for-q39": {
      "type": "truefalse",
      "correct": true,
      "explanation": "A gap may come from clearing, a shutdown, saturation or a collection failure. We record it, look for its origin and fill it through other sources."
    },
    "for-q17": {
      "type": "single",
      "correct": "d",
      "explanation": "Memory holds the running state: processes (even hidden), network connections, loaded modules, keys. All of this is lost at power-off, hence a priority collection.",
      "whyWrong": {
        "c": "Files are on the disk, not in RAM.",
        "a": "Memory and disk complement each other; they do not replace each other.",
        "b": "RAM is volatile."
      }
    },
    "for-q18": {
      "type": "single",
      "correct": "c",
      "explanation": "The active list comes from system structures, which some malware modifies to hide. The scan looks for structure signatures in memory and also reveals terminated processes. The difference must be examined.",
      "whyWrong": {
        "d": "A difference between the two methods deserves to be understood.",
        "a": "A normal system process would appear in both.",
        "b": "This has no link with the keyboard."
      }
    },
    "for-q19": {
      "type": "single",
      "correct": "a",
      "explanation": "An office application launching a command interpreter is a classic pattern of execution through a booby-trapped document. The parent-child relationship is a strong clue, to be confirmed with the command line and context.",
      "whyWrong": {
        "c": "This is not usual behavior.",
        "b": "Parentage is, on the contrary, very informative.",
        "d": "An application can have child processes."
      }
    },
    "for-q20": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Launching a tool modifies memory (loading, allocation) and leaves traces. We document it, use a recognized tool, launched from an external medium, and take it into account in the analysis."
    },
    "for-q21": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "A memory image reveals the system’s state at capture time: processes, connections, modules. It does not contain the full content of the disks.",
      "whyWrong": {
        "a": "Disks are acquired separately, by a physical or logical image."
      }
    },
    "for-q22": {
      "type": "single",
      "correct": "d",
      "explanation": "Writing to the examined disk overwrites data and modifies the evidence. The image is saved on a clean external medium, and its hash is computed right away.",
      "whyWrong": {
        "c": "This would modify the evidence and overwrite data.",
        "a": "The desktop is part of the examined disk.",
        "b": "The temporary folder is on the examined disk."
      }
    },
    "for-q23": {
      "type": "short",
      "accepted": [
        "lime",
        "lime (linux memory extractor)",
        "avml"
      ],
      "explanation": "LiME (Linux Memory Extractor) is a kernel module that acquires memory. AVML is another common solution. In all cases, the tool is launched from an external medium."
    },
    "for-q24": {
      "type": "single",
      "correct": "b",
      "explanation": "The reader must be able to tell what is observed (backed by evidence) from what is deduced. This makes the report defensible and lets anyone challenge the interpretation.",
      "whyWrong": {
        "a": "This is not a stake of the report.",
        "c": "The cost of tools is not the subject.",
        "d": "The look of the screenshots is secondary."
      }
    },
    "for-q25": {
      "type": "single",
      "correct": "c",
      "explanation": "Some conclusions rest on several concordant sources, others on a single clue. An explicit confidence level helps the reader decide without over-interpreting.",
      "whyWrong": {
        "d": "On the contrary, it qualifies the conclusion.",
        "a": "Honesty does not seek to impress.",
        "b": "It makes the limits visible."
      }
    },
    "for-q26": {
      "type": "truefalse",
      "correct": false,
      "explanation": "The expert establishes facts and their technical interpretation; legal responsibility belongs to the justice system or the employer. Naming a culprit goes beyond the investigator’s role and weakens the report."
    },
    "for-q27": {
      "type": "single",
      "correct": "d",
      "explanation": "Reproducibility allows an opposing expertise: with a copy verified by hash and the documented method (tools, versions, commands), a third party finds the same findings.",
      "whyWrong": {
        "a": "It is the opposite.",
        "c": "It relies on the evidence and the method.",
        "b": "It must be independent of the person."
      }
    },
    "for-q28": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "A report states the framework, the reproducible method and the findings tied to the evidence. It does not expose personal information unrelated to the mission.",
      "whyWrong": {
        "a": "The report respects proportionality: it contains only what the mission justifies."
      }
    },
    "for-q29": {
      "type": "single",
      "correct": "b",
      "explanation": "The framework (IT charter, labor law, GDPR) requires legitimate purpose, prior information, proportionality and protection of personal exchanges. Access is limited and traced.",
      "whyWrong": {
        "c": "The employer must respect the legal framework and privacy.",
        "a": "An oral agreement is not a framework.",
        "d": "Distributing would breach confidentiality."
      }
    },
    "for-q30": {
      "type": "single",
      "correct": "a",
      "explanation": "Retention or destruction is regulated (legal periods, procedure, GDPR) and recorded. Improvisation exposes to legal risks and leaks.",
      "whyWrong": {
        "c": "Publication would expose sensitive data.",
        "b": "Keeping without a rule violates the storage-limitation principle.",
        "d": "Sharing must be limited to authorized people."
      }
    },
    "for-q41": {
      "type": "single",
      "correct": "d",
      "explanation": "Mixing local time and UTC, or ignoring clock drift, can reverse events and distort the reconstruction. You bring all sources to the same reference and note the offsets.",
      "whyWrong": {
        "a": "Normalization does not change log size.",
        "c": "It neither encrypts nor hides anything.",
        "b": "It has no effect on disk reading speed."
      }
    },
    "for-q42": {
      "type": "single",
      "correct": "b",
      "explanation": "The first sentence separates what is observed (creation time) from what is deduced (probable drop through the form). An address or a file is not enough to name a person.",
      "whyWrong": {
        "d": "It presents a deduction as an established fact.",
        "a": "It asserts without evidence or source.",
        "c": "It attributes an action to a person with no basis."
      }
    },
    "for-q43": {
      "type": "short",
      "accepted": [
        "stat"
      ],
      "explanation": "`stat file` shows the mtime, ctime and atime timestamps, useful to place a file on a timeline."
    }
  },
};
