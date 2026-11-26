// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "n-ot-iot-initiation",
  questions: {
    "noi-q1": {
      "type": "single",
      "correct": "c",
      "explanation": "Operational technology groups the PLCs, supervision, sensors and actuators that command real installations: factories, water networks, energy, transport.",
      "whyWrong": {
        "a": "It serves workstations.",
        "b": "It runs no machine.",
        "d": "Unrelated."
      }
    },
    "noi-q2": {
      "type": "single",
      "correct": "a",
      "explanation": "A PLC reads sensors, runs a program and commands actuators (motors, valves) in real time, reliably and continuously.",
      "whyWrong": {
        "d": "It runs no machine.",
        "c": "It runs no machine.",
        "b": "It runs no machine."
      }
    },
    "noi-q3": {
      "type": "single",
      "correct": "b",
      "explanation": "The supervision system collects measurements from the PLCs, displays them to operators and allows sending setpoints remotely.",
      "whyWrong": {
        "a": "That is not its role.",
        "d": "That is not its role.",
        "c": "That is not its role."
      }
    },
    "noi-q4": {
      "type": "single",
      "correct": "d",
      "explanation": "Water stations, factories, power plants and transport networks are run by industrial systems. Office software and websites belong to business computing.",
      "whyWrong": {
        "a": "It is office software.",
        "b": "It is an online service.",
        "c": "It is an online service."
      }
    },
    "noi-q5": {
      "type": "truefalse",
      "correct": true,
      "explanation": "An erroneous command can stop production, damage equipment, pollute or endanger people. This is what sets OT apart from office IT."
    },
    "noi-q6": {
      "type": "short",
      "accepted": [
        "sensor",
        "a sensor",
        "the sensor"
      ],
      "explanation": "The sensor measures a quantity (temperature, pressure, level) and passes the information to the PLC, which then commands actuators."
    },
    "noi-q7": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Sensors, PLCs and actuators form the control loop. Personal printers belong to office IT.",
      "whyWrong": {
        "b": "They belong to office IT."
      }
    },
    "noi-q8": {
      "type": "single",
      "correct": "a",
      "explanation": "An erroneous command can injure or pollute: the safety of people and the continuity of the process dominate the trade-offs.",
      "whyWrong": {
        "c": "Secondary.",
        "d": "Secondary.",
        "b": "Secondary."
      }
    },
    "noi-q9": {
      "type": "single",
      "correct": "d",
      "explanation": "A patch often requires a stop and vendor validation. It is planned during technical shutdowns, with compensating measures in the meantime.",
      "whyWrong": {
        "a": "They do publish some.",
        "c": "No law forbids it.",
        "b": "That is not the case."
      }
    },
    "noi-q10": {
      "type": "single",
      "correct": "c",
      "explanation": "Industrial equipment is designed to last decades. Many run old systems that are no longer updated.",
      "whyWrong": {
        "b": "Far too short.",
        "a": "Far too short.",
        "d": "Far too short."
      }
    },
    "noi-q11": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Some old equipment crashes when faced with unexpected packets. Passive listening, documentation and surveys planned with operations are preferred."
    },
    "noi-q12": {
      "type": "short",
      "accepted": [
        "availability",
        "the availability"
      ],
      "explanation": "Availability is one of the three objectives of information security. In OT, it often takes precedence over confidentiality."
    },
    "noi-q13": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Longevity, rare patches and priority on safety set OT apart. A restart can on the contrary interrupt a continuous process.",
      "whyWrong": {
        "b": "A restart can stop a continuous process."
      }
    },
    "noi-q14": {
      "type": "open",
      "model": "I explain that an active scan can crash old PLCs and stop production, which can even be dangerous. I ask them not to launch anything without the operations manager’s agreement. I propose obtaining the inventory another way: passive listening of traffic (probe on a mirror port), documentation, on-site surveys, or, if a scan is essential, a targeted scan, planned during a shutdown with operations, on a test device first. I remind them that the priority in OT is safety and availability.",
      "criteria": [
        "The risk of disturbance or stop is explained.",
        "Operations’ agreement is requested.",
        "An alternative (passive listening, documentary inventory, planned scan) is proposed."
      ],
      "explanation": "In OT, IT practices are adapted: what is routine on an office workstation can be dangerous on a PLC."
    },
    "noi-q15": {
      "type": "single",
      "correct": "b",
      "explanation": "Segmentation limits spread: a compromise of the office network must not reach the PLCs.",
      "whyWrong": {
        "c": "That is not the goal.",
        "a": "Unrelated.",
        "d": "Unrelated."
      }
    },
    "noi-q16": {
      "type": "single",
      "correct": "a",
      "explanation": "Modbus is a protocol born in 1979, very widespread in industry. It includes neither authentication nor encryption.",
      "whyWrong": {
        "d": "It is not a browser.",
        "b": "It is not an antivirus.",
        "c": "It is not a search engine."
      }
    },
    "noi-q17": {
      "type": "single",
      "correct": "d",
      "explanation": "Any device that reaches the PLC can send it commands. Protection relies on network separation and filtering.",
      "whyWrong": {
        "c": "It does not encrypt.",
        "b": "It works over Ethernet.",
        "a": "Unrelated."
      }
    },
    "noi-q18": {
      "type": "single",
      "correct": "b",
      "explanation": "The intermediate zone receives a copy of production data that the office network consults, without ever directly linking the two networks.",
      "whyWrong": {
        "d": "That is not its role.",
        "c": "No effect on speed.",
        "a": "It complements them."
      }
    },
    "noi-q19": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Always-active remote-control software is a classic entry door. An on-demand access, with strong authentication and recording, is preferred."
    },
    "noi-q20": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Segmentation, controlled access and passive monitoring limit risks without disturbing the process. A common password removes all traceability.",
      "whyWrong": {
        "b": "A shared password identifies no one."
      }
    },
    "noi-q21": {
      "type": "short",
      "accepted": [
        "segmentation",
        "the segmentation",
        "compartmentalization"
      ],
      "explanation": "Segmentation splits the network into zones and lets through only the necessary flows, which limits the spread of an attack."
    },
    "noi-q22": {
      "type": "single",
      "correct": "c",
      "explanation": "Camera, thermostat, sensor, lock: a connected object embeds a small computer and communicates through a network. It is rarely updated.",
      "whyWrong": {
        "b": "That is not the definition.",
        "d": "That is not the definition.",
        "a": "That is not the definition."
      }
    },
    "noi-q23": {
      "type": "single",
      "correct": "a",
      "explanation": "This is what the Mirai botnet exploited in 2016: a short list of default passwords was enough to enroll hundreds of thousands of devices.",
      "whyWrong": {
        "c": "That is not the problem.",
        "b": "Unrelated.",
        "d": "Unrelated."
      }
    },
    "noi-q24": {
      "type": "single",
      "correct": "d",
      "explanation": "Flaws are discovered after the sale. An object with no updates remains vulnerable throughout its life.",
      "whyWrong": {
        "c": "That is not the goal.",
        "b": "That is not the goal.",
        "a": "That is not the goal."
      }
    },
    "noi-q25": {
      "type": "truefalse",
      "correct": true,
      "explanation": "An exposed camera with a default password can be controlled remotely, watched or used in an attack against other targets."
    },
    "noi-q26": {
      "type": "truefalse",
      "correct": false,
      "explanation": "The absence of a screen does not prevent attacks: an object is reachable through the network and can be compromised like any computer."
    },
    "noi-q27": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "A unique password, updates and non-exposure greatly reduce the risk. An administration open to everyone is a classic weakness.",
      "whyWrong": {
        "c": "It exposes the object to permanent scans."
      }
    },
    "noi-q28": {
      "type": "short",
      "accepted": [
        "mirai",
        "the mirai botnet"
      ],
      "explanation": "Mirai scanned the Internet for Telnet and SSH services protected by default credentials, then used the devices for massive attacks."
    },
    "noi-q29": {
      "type": "single",
      "correct": "b",
      "explanation": "When you cannot fix, you reduce exposure: isolation, filtering, monitoring. This is the logic of compensating measures.",
      "whyWrong": {
        "a": "It would stop the process.",
        "c": "It would expose it.",
        "d": "No effect."
      }
    },
    "noi-q30": {
      "type": "single",
      "correct": "c",
      "explanation": "Without an inventory, forgotten equipment remains exposed and unpatched. A precise inventory is the basis of all protection.",
      "whyWrong": {
        "d": "That is not the goal.",
        "a": "That is not the goal.",
        "b": "That is not the goal."
      }
    },
    "noi-q31": {
      "type": "single",
      "correct": "c",
      "explanation": "A saved and tested program makes it possible to restore an altered or replaced PLC. It also serves as a reference to detect a modification.",
      "whyWrong": {
        "b": "That is not its purpose.",
        "a": "That is not its purpose.",
        "d": "That is not its purpose."
      }
    },
    "noi-q32": {
      "type": "truefalse",
      "correct": false,
      "explanation": "An unknown stick can contain malware. Removable media are controlled and unused ports are disabled on industrial workstations."
    },
    "noi-q33": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Disabled ports, media checks and a ban on unknown sticks limit the introduction of malware.",
      "whyWrong": {
        "a": "A stick found on the ground is a classic attack means."
      }
    },
    "noi-q34": {
      "type": "open",
      "model": "First measure: remove or disable the permanent remote-control software and use an on-demand access, with strong authentication (second factor), opened for a specific intervention and recorded. Second measure: isolate the PLC in a separate network, behind a firewall, with no direct access from the Internet or the office network, allowing only the necessary flows. Third measure: back up the PLC’s program and keep it off-site, to be able to restore after an incident. An inventory of the equipment and passive monitoring of traffic can be added. I inform the operations manager before any change.",
      "criteria": [
        "The permanent remote access is removed or framed.",
        "Network isolation is proposed.",
        "Backup of the program is mentioned.",
        "Operations is involved in the changes."
      ],
      "explanation": "Three simple measures (framed access, isolation, backup) greatly reduce the risk without touching the PLC."
    },
    "noi-q35": {
      "type": "single",
      "correct": "d",
      "explanation": "Quick reporting allows operations and the security team to assess the situation. An isolated reaction can worsen the problem.",
      "whyWrong": {
        "c": "Waiting worsens the impact.",
        "b": "It erases clues.",
        "a": "It can be dangerous."
      }
    },
    "noi-q36": {
      "type": "single",
      "correct": "b",
      "explanation": "Stopping a process in progress can cause an accident or damage. The response is decided with operations.",
      "whyWrong": {
        "a": "They do have one.",
        "c": "It does not save time.",
        "d": "It does not remove it."
      }
    },
    "noi-q37": {
      "type": "single",
      "correct": "a",
      "explanation": "They know the process and what is safe or dangerous: they validate any containment action.",
      "whyWrong": {
        "d": "That is not their role.",
        "c": "That is not their role.",
        "b": "That is not their role."
      }
    },
    "noi-q38": {
      "type": "truefalse",
      "correct": true,
      "explanation": "A tabletop exercise reveals missing contacts, unclear decisions and unrealistic deadlines with no risk to production."
    },
    "noi-q39": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Reporting, notes and keeping the traces make it possible to understand the incident. Acting alone delays the response and can worsen the situation.",
      "whyWrong": {
        "d": "It delays the response."
      }
    },
    "noi-q40": {
      "type": "short",
      "accepted": [
        "degraded mode",
        "a degraded mode"
      ],
      "explanation": "Degraded mode keeps the essentials of production with reduced means (manual control, local supervision) while the incident is dealt with."
    },
    "noi-q41": {
      "type": "single",
      "correct": "a",
      "explanation": "A security action must not endanger people or the installation. Availability and integrity come next, and confidentiality is often last.",
      "whyWrong": {
        "c": "In OT, confidentiality often ranks after safety and availability.",
        "b": "A patch applied carelessly can interrupt the process.",
        "d": "Cost is not the priority of industrial security."
      }
    },
    "noi-q42": {
      "type": "single",
      "correct": "d",
      "explanation": "The industrial DMZ is a controlled crossing point between business IT and the field: you filter and log there, with no direct flow to PLCs.",
      "whyWrong": {
        "c": "A flat network exposes PLCs to any compromise of office IT.",
        "a": "Shared Wi-Fi widens the attack surface.",
        "b": "Permanent access is a lasting attack path."
      }
    },
    "noi-q43": {
      "type": "single",
      "correct": "c",
      "explanation": "Default credentials are known and tried automatically on exposed devices. This is how the Mirai botnet recruited hundreds of thousands of devices.",
      "whyWrong": {
        "b": "The hardware is not affected by this risk.",
        "d": "Storage is not the typical consequence.",
        "a": "The warranty is not the security risk at stake."
      }
    },
    "noi-q44": {
      "type": "short",
      "accepted": [
        "segmentation"
      ],
      "explanation": "Segmentation limits the spread of a compromise: each zone communicates only through explicitly allowed flows."
    }
  },
};
