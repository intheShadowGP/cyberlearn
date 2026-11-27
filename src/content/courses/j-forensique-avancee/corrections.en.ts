// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "j-forensique-avancee",
  questions: {
    "jfa-q1": {
      "type": "single",
      "correct": "b",
      "explanation": "We tend to look for what confirms the starting hypothesis. Posing several scenarios and looking for what tells them apart protects against this bias.",
      "whyWrong": {
        "a": "Eye strain is not a cognitive risk reduced by competing hypotheses.",
        "d": "License cost is not a cognitive risk.",
        "c": "Log size is a technical issue."
      }
    },
    "jfa-q2": {
      "type": "single",
      "correct": "d",
      "explanation": "We start with what may disappear: memory, short-retention logs, snapshots that expire. Durable sources can wait.",
      "whyWrong": {
        "b": "Volume does not indicate fragility.",
        "c": "Alphabetical order has no justification.",
        "a": "Date alone is not the criterion."
      }
    },
    "jfa-q3": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Also looking for what refutes it is essential: a hypothesis that withstands attempts at refutation is far stronger."
    },
    "jfa-q4": {
      "type": "short",
      "accepted": [
        "confirmation bias",
        "the confirmation bias"
      ],
      "explanation": "Confirmation bias leads to neglecting contradictions. Formulating alternative hypotheses and trying to tell them apart is the remedy."
    },
    "jfa-q5": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Scoping sets questions, scope, authorizations, constraints, deadlines and actors. Concluding before investigating is precisely what we want to avoid.",
      "whyWrong": {
        "c": "A predetermined conclusion skews the investigation."
      }
    },
    "jfa-q6": {
      "type": "single",
      "correct": "c",
      "explanation": "The logbook explains why a source was retained or set aside. It makes the investigation reviewable, defensible and reproducible.",
      "whyWrong": {
        "d": "The goal is not to shorten.",
        "a": "It allows, on the contrary, accounting for mistakes.",
        "b": "It does not replace hashes."
      }
    },
    "jfa-q7": {
      "type": "single",
      "correct": "a",
      "explanation": "The investigator establishes facts; responsibility falls to other bodies. Naming too early exposes to a serious error and weakens the report.",
      "whyWrong": {
        "c": "That exposes to bias and error.",
        "b": "That does not meet the need.",
        "d": "Uncertainties must be stated."
      }
    },
    "jfa-q8": {
      "type": "single",
      "correct": "b",
      "explanation": "Logs that are not enabled or are kept too briefly cannot be reconstructed. Logging and retention are decided in advance.",
      "whyWrong": {
        "a": "The interface color allows no investigation.",
        "c": "Names are not enough to investigate.",
        "d": "The team’s lunch hour has no link with investigation."
      }
    },
    "jfa-q9": {
      "type": "single",
      "correct": "a",
      "explanation": "Isolating through network rules stops the spread while keeping the resource; the snapshot preserves the disk. Deleting destroys evidence.",
      "whyWrong": {
        "b": "Deletion destroys evidence.",
        "d": "The attack could continue.",
        "c": "This neither contains nor preserves anything."
      }
    },
    "jfa-q10": {
      "type": "truefalse",
      "correct": false,
      "explanation": "The snapshot freezes the disk, not the RAM. For memory, a dedicated tool launched before shutdown is needed, if the procedure allows."
    },
    "jfa-q11": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Identity, platform activity and data access tell who did what. The wallpaper brings nothing.",
      "whyWrong": {
        "c": "No investigative value."
      }
    },
    "jfa-q12": {
      "type": "short",
      "accepted": [
        "shared responsibility",
        "shared responsibility model",
        "the shared responsibility model",
        "responsabilité partagée"
      ],
      "explanation": "The shared-responsibility model specifies what the provider logs and what the customer must enable. It conditions the sources available to the investigation."
    },
    "jfa-q13": {
      "type": "single",
      "correct": "c",
      "explanation": "The first traces will expire in two days. We export and compute the hashes without waiting, before any other analysis.",
      "whyWrong": {
        "a": "Waiting risks losing the first traces.",
        "d": "Deletion destroys the evidence.",
        "b": "They will soon be erased."
      }
    },
    "jfa-q14": {
      "type": "single",
      "correct": "d",
      "explanation": "The applicable law (personal data, access by authorities, transfers outside the territory) depends on the location and the contracts. It influences what can be requested and transferred.",
      "whyWrong": {
        "c": "The storage location does not change the color of logs.",
        "a": "It may, on the contrary, slow down collection.",
        "b": "The customer remains responsible for its data."
      }
    },
    "jfa-q15": {
      "type": "single",
      "correct": "c",
      "explanation": "TRIM informs the controller that blocks are no longer used and may be erased in the background. This reduces the chances of recovering deleted files.",
      "whyWrong": {
        "a": "TRIM encrypts nothing.",
        "b": "It does not back up.",
        "d": "It does not increase capacity."
      }
    },
    "jfa-q16": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Erasure by the controller can make the file unrecoverable. The absence of a trace does not prove the absence of action: we corroborate with logs and backups."
    },
    "jfa-q17": {
      "type": "single",
      "correct": "a",
      "explanation": "The key is in memory or in the directory. We acquire it before power-off, which would make the volume unreadable without it.",
      "whyWrong": {
        "c": "Power-off may make the volume unreadable.",
        "b": "A restart erases memory.",
        "d": "Deleting the key would destroy access."
      }
    },
    "jfa-q18": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "We document, corroborate and prepare access to encrypted data. Concluding from an absence is a methodological error.",
      "whyWrong": {
        "b": "The absence of a trace is not proof of absence."
      }
    },
    "jfa-q19": {
      "type": "short",
      "accepted": [
        "controller",
        "the controller",
        "ssd controller",
        "flash controller"
      ],
      "explanation": "The controller manages the mapping between logical and physical addresses and the erasure of blocks. It acts even without commands from the system, hence possible differences between two acquisitions."
    },
    "jfa-q20": {
      "type": "single",
      "correct": "b",
      "explanation": "An SSD keeps working (garbage collection, erasure) even without commands. The finding is documented; it does not by itself prove manipulation.",
      "whyWrong": {
        "d": "Nothing allows asserting falsification.",
        "a": "The cause may be the medium itself.",
        "c": "They remain usable, with their limits."
      }
    },
    "jfa-q21": {
      "type": "single",
      "correct": "d",
      "explanation": "A gap is a fact to document: erasure, failure, saturation. Other sources (EDR, firewall, network) often allow filling it.",
      "whyWrong": {
        "a": "Ignoring a gap misses a clue.",
        "b": "Inventing data is a serious fault.",
        "c": "Removing the period loses the essentials."
      }
    },
    "jfa-q22": {
      "type": "single",
      "correct": "d",
      "explanation": "The use of legitimate administration tools leaves few files. Command lines, process parentage and connections reveal the activity better.",
      "whyWrong": {
        "a": "Files are not always encrypted.",
        "b": "Logs often exist.",
        "c": "Behaviors are observed through telemetry."
      }
    },
    "jfa-q23": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Backdating tools do not modify every attribute. A gap between `$STANDARD_INFORMATION` and `$FILE_NAME`, or a recent `ctime`, betrays the manipulation."
    },
    "jfa-q24": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Validation rests on tests, traceability of versions and cross-checking. Fame does not guarantee the absence of bugs.",
      "whyWrong": {
        "d": "Reputation does not replace validation."
      }
    },
    "jfa-q25": {
      "type": "short",
      "accepted": [
        "timestomping",
        "time stomping",
        "timestamp stomping",
        "backdating"
      ],
      "explanation": "Timestomping (ATT&CK T1070.006) aims to bury a file among old files. It is spotted by comparing several attributes and sources."
    },
    "jfa-q26": {
      "type": "single",
      "correct": "b",
      "explanation": "We ask what could alter or mislead it, then look for independent sources that confirm or refute it.",
      "whyWrong": {
        "c": "Evidence can be altered or misleading.",
        "a": "Age is not a criterion of reliability.",
        "d": "A single source is fragile."
      }
    },
    "jfa-q27": {
      "type": "single",
      "correct": "c",
      "explanation": "The expert declares any ties and does not assess their own productions. This protects the impartiality of their conclusions.",
      "whyWrong": {
        "b": "They must, on the contrary, write a report.",
        "a": "They know the context of the mission.",
        "d": "They use validated tools."
      }
    },
    "jfa-q28": {
      "type": "single",
      "correct": "a",
      "explanation": "With a verified copy and an explicit method (tools, versions, commands), a third party can redo the analysis. It is the basis of fair contradiction.",
      "whyWrong": {
        "c": "Length is not the goal.",
        "b": "It allows contradiction, on the contrary.",
        "d": "The logbook remains necessary."
      }
    },
    "jfa-q29": {
      "type": "truefalse",
      "correct": true,
      "explanation": "This shows that the expert tried to refute their own conclusion and lets the reader judge the reasoning."
    },
    "jfa-q30": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Measured vocabulary, confidence levels and reference to sources make the report defensible. Asserting guilt goes beyond the expert’s role.",
      "whyWrong": {
        "d": "Legal responsibility is not the technical expert’s role."
      }
    },
    "jfa-q31": {
      "type": "short",
      "accepted": [
        "27037",
        "iso 27037",
        "iso/iec 27037",
        "iso/iec27037",
        "iso27037"
      ],
      "explanation": "ISO/IEC 27037 provides guidelines for identification, collection, acquisition and preservation. Standards 27041 and 27042 complete it for method and analysis."
    },
    "jfa-q32": {
      "type": "single",
      "correct": "a",
      "explanation": "Logs link an action to an account, an address and a device. Identifying the person requires additional elements that the report does not claim to provide alone.",
      "whyWrong": {
        "c": "The account does not necessarily designate the person.",
        "d": "The report does establish facts about the account.",
        "b": "The account exists; the question is about its user."
      }
    },
    "jfa-q33": {
      "type": "single",
      "correct": "c",
      "explanation": "A targeted collection of artifacts quickly identifies the machines affected. The full image is reserved for key machines.",
      "whyWrong": {
        "d": "They are allowed within the appropriate framework.",
        "a": "Triage deletes nothing.",
        "b": "Traceability remains necessary."
      }
    },
    "jfa-q34": {
      "type": "single",
      "correct": "b",
      "explanation": "A faulty script may disrupt production or produce false results everywhere. It is tested on a known set, then on a small scope.",
      "whyWrong": {
        "c": "Validating a script is not meant to lengthen it.",
        "a": "Documentation remains mandatory.",
        "d": "Validation is part of acceptance."
      }
    },
    "jfa-q35": {
      "type": "truefalse",
      "correct": false,
      "explanation": "The score guides analysts to the machines to examine. It does not conclude: human review and evidence remain necessary."
    },
    "jfa-q36": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Framework, impact and traceability are essential. Minimization of personal data also applies at scale.",
      "whyWrong": {
        "b": "Collection must remain proportionate to the mission."
      }
    },
    "jfa-q37": {
      "type": "single",
      "correct": "d",
      "explanation": "It merges disk, logs and network into a single timeline, which reveals the links between sources. Time zones must be normalized.",
      "whyWrong": {
        "a": "It deletes nothing.",
        "b": "It encrypts nothing.",
        "c": "It assists; it does not replace."
      }
    },
    "jfa-q38": {
      "type": "single",
      "correct": "c",
      "explanation": "If the same inputs with the same version produce the same result, a third party can verify it. A result that cannot be redone cannot be defended.",
      "whyWrong": {
        "b": "Speed proves nothing.",
        "d": "A color display does not make a result defensible.",
        "a": "Code size is not a criterion."
      }
    },
    "jfa-q39": {
      "type": "open",
      "model": "I start by preserving, taking retention into account: export of the identity, activity and mail-access logs, copy of the configuration (forwarding rules, application consents, authentication methods), snapshot of the resources created, with hashes and timestamps. Then I contain without destroying: revocation of sessions and tokens, reset of credentials, removal of the forwarding rule and consents, isolation of suspicious resources through network rules rather than deletion. I look for the other accounts or resources affected. On the legal side, I anticipate a possible notification to the CNIL and to the insurer, the preservation request to the provider, the place where data is stored and respect for the privacy of the person concerned.",
      "criteria": [
        "Preservation (export, snapshot, hashes) comes before containment.",
        "Containment avoids destroying evidence (isolate rather than delete).",
        "The legal points (notification, provider, privacy) are cited."
      ],
      "explanation": "In the cloud, we preserve quickly because of short retention, we contain without destroying and we anticipate the legal framework."
    },
    "jfa-q40": {
      "type": "open",
      "model": "I start by acknowledging the limit: on an SSD, the recovery of deleted files and dating from the disk alone are uncertain because of the controller and TRIM. I then indicate what the dating rests on: sources independent of the disk (application or file-server logs, recycle bin, metadata, backups), concordant among themselves, with their confidence level. I recall the method (copy verified by hash, validated tools and versions, clock drift measured and corrected) and mention the alternative hypotheses set aside. I propose additional checks (analysis of an earlier backup, a second independent analysis) and I assert nothing beyond what the elements allow.",
      "criteria": [
        "The SSD limit is explicitly acknowledged.",
        "Dating rests on independent, concordant sources with a confidence level.",
        "The method, alternative hypotheses and additional checks are mentioned."
      ],
      "explanation": "Acknowledging the limit and showing what compensates for it is the best defense against a technical challenge."
    }
  },
};
