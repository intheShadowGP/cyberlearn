// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "n-ot-securite-avancee",
  questions: {
    "noa-q1": {
      "type": "single",
      "correct": "b",
      "explanation": "The series addresses three roles: the asset owner (operator), the integrator who installs the system and the manufacturer of the components. Each has its own requirements.",
      "whyWrong": {
        "d": "The series is not limited to the manufacturer: it also distinguishes the operator and the integrator.",
        "a": "The operator is only one of the three roles: the integrator and the manufacturer are missing.",
        "c": "Email is not part of the automation systems covered by the series."
      }
    },
    "noa-q2": {
      "type": "single",
      "correct": "c",
      "explanation": "The SL-T is the level of protection you want to reach for a zone, determined by the risk analysis. It is then compared with the level achieved and the components’ capabilities.",
      "whyWrong": {
        "d": "SL-T is a target protection level, not a price.",
        "a": "The number of operators plays no part in the target security level.",
        "b": "The commissioning date has no link with the target security level."
      }
    },
    "noa-q3": {
      "type": "single",
      "correct": "a",
      "explanation": "SL-T is the target, SL-A the level actually achieved, SL-C the capability of the components. The gap between SL-T and SL-A guides complementary measures.",
      "whyWrong": {
        "d": "The three acronyms designate three distinct notions: target, achieved and capability.",
        "b": "These are notions of the standard, not industrial protocols.",
        "c": "These are three levels of the same standard, not manufacturers."
      }
    },
    "noa-q4": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Part 4-1 describes the requirements a manufacturer must meet to develop products securely: design, testing, vulnerability management and updates."
    },
    "noa-q5": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "The series covers the security program (part 2), the system (part 3) and the components (part 4). It does not deal with aesthetics.",
      "whyWrong": {
        "b": "The series deals with security, not layout or the color of electrical cabinets."
      }
    },
    "noa-q6": {
      "type": "short",
      "accepted": [
        "sl",
        "the sl"
      ],
      "explanation": "The security level (SL) ranges from 1 to 4 according to the resistance required against increasingly capable attackers."
    },
    "noa-q7": {
      "type": "open",
      "model": "Approach: 1) Inventory the assets and map the flows. 2) Define the zones (office, DMZ, supervision, control, safety systems, maintenance) and the conduits between them. 3) Run a risk analysis per zone, integrating physical consequences, to set a target security level (SL-T): higher for safety systems and critical control. 4) Compare with the levels achieved (SL-A) and the components’ capabilities (SL-C), then define the measures to close the gaps (segmentation, controlled remote access, hardening, supervision). 5) Share responsibilities: the operator (asset owner) carries the security program and the risk, the integrator installs and configures in accordance with the requirements, manufacturers provide components compliant with 62443-4-1/4-2. 6) Set up continuous management: monitoring, fixes, review.",
      "criteria": [
        "Zones and conduits are defined.",
        "Target levels are set from a risk analysis.",
        "The gaps between target and achieved levels are treated.",
        "The roles of operator, integrator and manufacturer are distinguished."
      ],
      "explanation": "The standard structures the approach: zones, risks, levels, measures, responsibilities, then continuous management."
    },
    "noa-q8": {
      "type": "single",
      "correct": "d",
      "explanation": "The diode is a physical or logical barrier that lets information pass in one direction only, for example from OT to IT: no command can come back.",
      "whyWrong": {
        "a": "A traditional firewall lets flows through in both directions, unlike a diode.",
        "b": "A wireless router links networks; it does not guarantee a one-way flow.",
        "c": "An offline backup protects data; it does not control a network flow."
      }
    },
    "noa-q9": {
      "type": "single",
      "correct": "c",
      "explanation": "Production data goes up to IT (historian, indicators) without an attacker on the management network being able to send anything toward OT.",
      "whyWrong": {
        "d": "The unidirectional gateway sends no command toward the OT.",
        "b": "The intermediate zone remains useful: the gateway is added to it, not instead of it.",
        "a": "It does not encrypt sensors: it enforces a one-way flow."
      }
    },
    "noa-q10": {
      "type": "single",
      "correct": "a",
      "explanation": "The jump server imposes a single passage point: strong authentication, on-demand authorization and session recording before any access to OT.",
      "whyWrong": {
        "b": "Bandwidth is not the goal of a jump server.",
        "c": "The jump server does not replace the controllers; it controls access.",
        "d": "It is the opposite: it avoids exposing the OT directly."
      }
    },
    "noa-q11": {
      "type": "single",
      "correct": "b",
      "explanation": "Micro-segmentation splits the network into small zones (per production line, per device) to limit even more the spread of an incident.",
      "whyWrong": {
        "d": "Micro-segmentation splits the network into zones; it does not change packet size.",
        "c": "Merging networks is the opposite of segmentation.",
        "a": "It relies on filtering between zones: firewalls are not removed."
      }
    },
    "noa-q12": {
      "type": "truefalse",
      "correct": false,
      "explanation": "The exchanges exist, but they go through a controlled intermediate zone (industrial DMZ) with filtered conduits and precisely defined flows."
    },
    "noa-q13": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Zones, DMZ and controlled remote access form the base. A flat network lets a compromise spread freely.",
      "whyWrong": {
        "c": "A flat network lets a compromise spread: it is not defensible."
      }
    },
    "noa-q14": {
      "type": "short",
      "accepted": [
        "bastion",
        "a bastion",
        "the bastion"
      ],
      "explanation": "The bastion centralizes administration access: strong authentication, time-limited authorizations, session recording."
    },
    "noa-q15": {
      "type": "single",
      "correct": "d",
      "explanation": "In OT, risk includes harm to people, the environment and equipment, not just data. Safety guides prioritization.",
      "whyWrong": {
        "a": "In OT, availability is on the contrary central to production.",
        "c": "OT risk is not limited to data: it includes physical effects.",
        "b": "Risk analysis is not limited to firewalls: it covers the whole system."
      }
    },
    "noa-q16": {
      "type": "single",
      "correct": "c",
      "explanation": "The hazard study identifies accident scenarios. By crossing it with cyber scenarios, you spot the manipulations that could cause an accident.",
      "whyWrong": {
        "b": "Website ranking has nothing to do with the safety of a process.",
        "a": "An email migration does not address industrial accident scenarios.",
        "d": "A license inventory is management, not process safety."
      }
    },
    "noa-q17": {
      "type": "single",
      "correct": "d",
      "explanation": "ATT&CK for ICS lists the tactics and techniques observed against industrial systems. It helps build scenarios and assess detection coverage.",
      "whyWrong": {
        "c": "A corporate directory manages identities, not attack techniques.",
        "a": "An accounting manual describes no attack technique.",
        "b": "A furniture catalog has nothing to do with attack techniques."
      }
    },
    "noa-q18": {
      "type": "single",
      "correct": "a",
      "explanation": "A consequence that could cause injuries or a major accident justifies a high level of protection even if the scenario is unlikely.",
      "whyWrong": {
        "c": "The consequence does not replace likelihood: it complements it for prioritization.",
        "b": "The consequence is measured by safety effects, not network throughput.",
        "d": "The consequence depends on the process, not the vendor’s licenses."
      }
    },
    "noa-q19": {
      "type": "truefalse",
      "correct": true,
      "explanation": "The manipulation of setpoints or the neutralization of a safety system can cause an accident. This is why cyber analysis and safety analysis intersect."
    },
    "noa-q20": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Scenarios, attack paths, measures and residual risk make up the analysis. The color of indicator lights has no place in it.",
      "whyWrong": {
        "b": "The color of indicator lights adds nothing to the analysis of scenarios and consequences."
      }
    },
    "noa-q21": {
      "type": "single",
      "correct": "b",
      "explanation": "Industrial traffic is very regular: same devices, same cycles, same commands. The reference profile makes it possible to spot a deviation.",
      "whyWrong": {
        "d": "A list of passwords is not a traffic profile and should not be kept that way.",
        "c": "The plant floor plan does not describe network exchanges.",
        "a": "A maintenance calendar does not describe usual traffic."
      }
    },
    "noa-q22": {
      "type": "single",
      "correct": "d",
      "explanation": "The regularity of OT traffic makes deviations (new device, unusual write) easier to spot than on a very varied office network.",
      "whyWrong": {
        "b": "It is the opposite: industrial traffic is very regular.",
        "a": "Detection is not forbidden in OT; the passive sensor is recommended.",
        "c": "Detection complements firewalls; it does not replace them."
      }
    },
    "noa-q23": {
      "type": "single",
      "correct": "c",
      "explanation": "Most attacks against OT begin in IT. Correlating events from both worlds makes it possible to follow the attacker’s progression.",
      "whyWrong": {
        "a": "Correlating does not delete alerts: it links them together.",
        "d": "The aim is not to disable monitoring but to enrich it.",
        "b": "Correlating events does not merge the networks: they stay separate."
      }
    },
    "noa-q24": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Operations knows the state of the process and the consequences of a stop. Joint qualification avoids a security response causing an incident."
    },
    "noa-q25": {
      "type": "truefalse",
      "correct": false,
      "explanation": "The probe sees the source and destination addresses, the function code and the value. It therefore indicates who wrote what and where, without transmitting traffic."
    },
    "noa-q26": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "A new device, an unusual write and a download outside maintenance are strong signals. A periodic read is normal behavior.",
      "whyWrong": {
        "b": "A usual periodic read is part of the normal profile, not an anomaly."
      }
    },
    "noa-q27": {
      "type": "short",
      "accepted": [
        "anomaly detection",
        "detection of anomalies"
      ],
      "explanation": "Anomaly detection compares activity with the normal profile. It spots unknown attacks, but requires tuning to limit false alerts."
    },
    "noa-q28": {
      "type": "single",
      "correct": "b",
      "explanation": "A manufacturer that designs, tests and fixes in a controlled way delivers fewer flaws and handles better those that appear.",
      "whyWrong": {
        "a": "A secure lifecycle aims at fewer flaws, not a lower purchase price.",
        "c": "Updates remain necessary: a secure lifecycle helps produce and deliver them.",
        "d": "It facilitates audits; it does not avoid them."
      }
    },
    "noa-q29": {
      "type": "single",
      "correct": "a",
      "explanation": "When the fix is not applicable, filtering (industrial firewall, prevention system) blocks the exploitation attempt of the flaw: it is a compensating measure.",
      "whyWrong": {
        "b": "An offline patch is still a real patch; a virtual patch acts on the network.",
        "d": "An unsigned patch would be a risk, not a virtual patch.",
        "c": "A configuration backup blocks no exploitation."
      }
    },
    "noa-q30": {
      "type": "single",
      "correct": "d",
      "explanation": "Each intervention must be authorized, time-limited, tied to a person and recorded.",
      "whyWrong": {
        "b": "A shared, permanent account prevents identifying the person.",
        "a": "A common password removes any accountability.",
        "c": "The operator must on the contrary keep control of access."
      }
    },
    "noa-q31": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Factory settings (accounts, services, ports) must be checked and adapted: passwords, unneeded services, logging. The security acceptance testing is part of delivery."
    },
    "noa-q32": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Fix deadline, notification and software bill of materials give the operator visibility. Banning audits removes all control.",
      "whyWrong": {
        "b": "Forbidding audits deprives the operator of any verification."
      }
    },
    "noa-q33": {
      "type": "short",
      "accepted": [
        "sbom",
        "the sbom"
      ],
      "explanation": "The SBOM (Software Bill of Materials) lists a product’s components. It allows quickly identifying the equipment concerned when a vulnerability is published."
    },
    "noa-q34": {
      "type": "open",
      "model": "Requirements: compliance with the IEC 62443 requirements for integration (zones and conduits compliant with the operator’s architecture); delivery of a hardened system (named accounts, changed passwords, unneeded services and ports disabled, logging enabled) and complete documentation (architecture, flows, inventory, configuration backups); ban on permanent remote access, access only through the operator’s bastion with strong authentication and recording; provision of a software bill of materials and a fix deadline for critical vulnerabilities; commitment to notify incidents within a set deadline; security acceptance testing before commissioning (tests, configuration review, absence of default accounts); right to audit; training of operators; reversibility clause and return of backups and administration passwords; subcontracting subject to agreement.",
      "criteria": [
        "The requirement of a hardened and documented delivered system is present.",
        "Remote access is framed (bastion, authentication, recording).",
        "Vulnerability (SBOM, deadlines) and incident-notification requirements are cited.",
        "Security acceptance testing and a right to audit are provided."
      ],
      "explanation": "Contractual requirements make security a verifiable deliverable of the integrator rather than an option."
    },
    "noa-q35": {
      "type": "single",
      "correct": "a",
      "explanation": "A backup that has never been restored offers no assurance: incompatible version, incomplete file, unknown procedure. The test validates the time and the method.",
      "whyWrong": {
        "c": "Testing a restore has no effect on the local network.",
        "b": "It does not remove monitoring: it checks the backup.",
        "d": "Power consumption is not the subject of a restore test."
      }
    },
    "noa-q36": {
      "type": "single",
      "correct": "c",
      "explanation": "If supervision is unavailable, operators must be able to run the process safely with local means. The procedure is written and exercised.",
      "whyWrong": {
        "b": "A deliberately caused failure is not an operating procedure.",
        "a": "Manual mode keeps the process running; it does not stop it.",
        "d": "A penetration test is a security assessment, not a control mode."
      }
    },
    "noa-q37": {
      "type": "single",
      "correct": "b",
      "explanation": "The exercise reveals missing contacts, unclear decisions and forgotten dependencies, with no risk for production.",
      "whyWrong": {
        "c": "A crisis exercise tests teams, not cables.",
        "d": "Power consumption is not the subject of a crisis exercise.",
        "a": "Choosing a vendor is procurement, not an exercise."
      }
    },
    "noa-q38": {
      "type": "truefalse",
      "correct": true,
      "explanation": "A backup reachable from the production network can be altered or deleted by an attacker. An offline copy makes it possible to restore safely."
    },
    "noa-q39": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Backups, manual procedures and spare parts allow recovery. Obsolete documentation wastes precious time.",
      "whyWrong": {
        "d": "Outdated documentation slows recovery instead of speeding it."
      }
    },
    "noa-q40": {
      "type": "short",
      "accepted": [
        "sis",
        "the sis"
      ],
      "explanation": "A SIS (Safety Instrumented System) monitors critical parameters and triggers a shutdown or safe state. It is protected as a priority, as it is the last barrier."
    }
  },
};
