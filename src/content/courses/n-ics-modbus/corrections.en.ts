// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "n-ics-modbus",
  questions: {
    "ics-q1": {
      "type": "single",
      "correct": "a",
      "explanation": "The programmable logic controller runs its program in a loop: reading inputs (sensors), computing, writing outputs (actuators).",
      "whyWrong": {
        "c": "It controls no sensors.",
        "b": "It controls no sensors.",
        "d": "It manages accounts, not a process."
      }
    },
    "ics-q2": {
      "type": "truefalse",
      "correct": true,
      "explanation": "An untimely stop or an erroneous command can cause an accident or pollution. The safety of people and continuity of the process dominate OT trade-offs."
    },
    "ics-q3": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Longevity, difficulty of updating and fragility of some old network stacks are major characteristics of OT.",
      "whyWrong": {
        "c": "It is the opposite: PLCs often remain in service for decades."
      }
    },
    "ics-q14": {
      "type": "single",
      "correct": "d",
      "explanation": "Triton (or Trisis) targeted Schneider Electric Triconex safety controllers, designed to put the process in a safe state in case of an anomaly. Its probable aim was to neutralize this protection.",
      "whyWrong": {
        "b": "Ransomware targeting Windows workstations.",
        "a": "Flaw in an encryption library.",
        "c": "Flaw in a logging library."
      }
    },
    "ics-q31": {
      "type": "single",
      "correct": "c",
      "explanation": "Operational technology (OT) groups the systems that run physical processes: PLCs, supervision, sensors, actuators.",
      "whyWrong": {
        "a": "Unrelated.",
        "d": "Unrelated.",
        "b": "Unrelated."
      }
    },
    "ics-q32": {
      "type": "single",
      "correct": "b",
      "explanation": "A continuous process (furnace, water network, chemistry) does not stop without consequences. Restarts and patches are planned during technical shutdowns.",
      "whyWrong": {
        "c": "That is not the reason.",
        "d": "That is not the reason.",
        "a": "That is not systematic."
      }
    },
    "ics-q33": {
      "type": "single",
      "correct": "a",
      "explanation": "Level 0 is the physical process, level 1 basic control (PLCs), level 2 supervision, level 3 operations; the industrial DMZ separates OT from IT.",
      "whyWrong": {
        "b": "It belongs to IT.",
        "c": "It belongs to IT.",
        "d": "It is the intermediate zone."
      }
    },
    "ics-q34": {
      "type": "truefalse",
      "correct": true,
      "explanation": "These systems monitor critical parameters and bring the process back to a safe state. Attacking them aims at neutralizing the last protective barrier."
    },
    "ics-q4": {
      "type": "short",
      "accepted": [
        "502",
        "tcp/502",
        "502/tcp"
      ],
      "explanation": "Modbus TCP uses port 502. The TLS-secured version uses port 802."
    },
    "ics-q5": {
      "type": "single",
      "correct": "c",
      "explanation": "0x06 (Write Single Register) writes a holding register. 0x03 reads registers, 0x01 reads coils, 0x04 reads input registers.",
      "whyWrong": {
        "a": "It is a read.",
        "b": "It is a read.",
        "d": "It is a read."
      }
    },
    "ics-q6": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Modbus TCP has no authentication: any device able to reach port 502 can send commands. Protection relies on segmentation and filtering."
    },
    "ics-q7": {
      "type": "single",
      "correct": "b",
      "explanation": "Unit 02, function 05 (write a coil), address 0x0003, value 0xFF00 which means ON (0x0000 means OFF). Such a command can start a pump or open a valve.",
      "whyWrong": {
        "d": "Function 05 writes, it does not read.",
        "a": "No restart is requested.",
        "c": "The address and value are not those."
      }
    },
    "ics-q8": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "OPC UA includes authentication and encryption; Modbus/TCP Security encapsulates Modbus in TLS with certificates; DNP3-SA authenticates critical commands.",
      "whyWrong": {
        "a": "Modbus RTU over a serial link has no more security than Modbus TCP."
      }
    },
    "ics-q16": {
      "type": "short",
      "accepted": [
        "passive"
      ],
      "explanation": "Passive monitoring analyzes a copy of the traffic (mirror port or TAP) without ever transmitting: it has no impact on the process."
    },
    "ics-q35": {
      "type": "single",
      "correct": "d",
      "explanation": "The unit identifier designates the targeted slave, notably behind a gateway. It authenticates nothing: anyone can fill it in.",
      "whyWrong": {
        "a": "Modbus TCP does not encrypt.",
        "b": "The frame contains no date.",
        "c": "There is no password."
      }
    },
    "ics-q36": {
      "type": "single",
      "correct": "c",
      "explanation": "For function 05, 0xFF00 means ON and 0x0000 means OFF. Any other value is invalid.",
      "whyWrong": {
        "b": "ON corresponds to 0xFF00.",
        "a": "The frame is valid.",
        "d": "No restart."
      }
    },
    "ics-q37": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Source address, function code and address range make it possible to allow only reads, or writes from the SCADA station alone.",
      "whyWrong": {
        "a": "This notion does not exist."
      }
    },
    "ics-q9": {
      "type": "short",
      "accepted": [
        "iec 62443",
        "62443",
        "isa/iec 62443",
        "isa 62443"
      ],
      "explanation": "The ISA/IEC 62443 series covers requirements for operators, integrators and manufacturers, with the notions of zones, conduits and security levels (SL)."
    },
    "ics-q10": {
      "type": "single",
      "correct": "b",
      "explanation": "The industrial DMZ acts as an intermediary: the historian is replicated from OT to the DMZ, where IT consults it, with no direct flow between IT and PLCs.",
      "whyWrong": {
        "d": "IT would access it directly.",
        "a": "Unacceptable exposure.",
        "c": "This workstation is not accessible to IT."
      }
    },
    "ics-q11": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Some old PLCs crash under unexpected packets. The inventory is preferably done by passive listening, documentation and on-site records; active requests are limited, targeted and planned."
    },
    "ics-q12": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Bastion with MFA and recording, on-demand access and restricted scope make it possible to control and trace each intervention.",
      "whyWrong": {
        "b": "Permanent remote-control software is a major entry door; it is a frequent vector of industrial incidents."
      }
    },
    "ics-q13": {
      "type": "open",
      "model": "1) Immediately alert the operations and process-safety managers, who check the physical state (concentrations, setpoints) and can switch to manual or safe mode. 2) Identify the value written and the register concerned, compare with the expected setpoints. 3) Block the flow between the office workstation and the OT network at the firewall (the flow should not exist anyway), without cutting legitimate supervision. 4) Isolate the source workstation and open an investigation (compromise? a tool used by a technician?). 5) Check the integrity of the PLC’s program and look for other writes. 6) Fix the segmentation that allowed this flow.",
      "criteria": [
        "Process safety is handled first with the operations teams.",
        "The command written is analyzed (register, value).",
        "The flow is blocked and the source isolated.",
        "The segmentation flaw is identified as the cause to fix."
      ],
      "explanation": "In OT, incident response is coordinated with operations: a brutal security action (cutting the supervision network) can itself create a danger."
    },
    "ics-q15": {
      "type": "open",
      "model": "HMIs and SCADA servers are often certified by the vendor with a precise system version: an unvalidated patch can break the supervision software; their restart can require a process stop, planned during technical shutdowns; some versions are no longer supported. Compensating measures: strict segmentation and no Internet access, application whitelisting, disabling of USB ports and unneeded services, named accounts without administrator rights, passive monitoring, application of vendor-validated patches during scheduled shutdowns, tested backups and restoration procedure.",
      "criteria": [
        "The vendor validation and the risk of malfunction are explained.",
        "The production stop constraint is mentioned.",
        "At least three relevant compensating measures are proposed."
      ],
      "explanation": "When the patch cannot be applied quickly, exposure is reduced and detection improved: this is the logic of compensating measures."
    },
    "ics-q38": {
      "type": "single",
      "correct": "a",
      "explanation": "No direct flow should link IT and the PLCs: exchanges go through an industrial DMZ, with filtered conduits.",
      "whyWrong": {
        "d": "Logging is necessary.",
        "b": "Inventory is necessary.",
        "c": "Backups are necessary."
      }
    },
    "ics-q39": {
      "type": "single",
      "correct": "d",
      "explanation": "The standard defines security levels SL 1 to 4, according to the resistance expected against increasingly capable attackers.",
      "whyWrong": {
        "a": "That is not the scale.",
        "b": "That is not the scale.",
        "c": "It does define some."
      }
    },
    "ics-q40": {
      "type": "truefalse",
      "correct": false,
      "explanation": "A permanent access exposes the site continuously and relies on a single factor. An on-demand access through a bastion, with MFA and recording, is preferred."
    },
    "ics-q17": {
      "type": "single",
      "correct": "d",
      "explanation": "OPC UA provides authentication, signing and encryption of exchanges. Its adoption grows as equipment is renewed.",
      "whyWrong": {
        "c": "No security.",
        "a": "No security.",
        "b": "No security."
      }
    },
    "ics-q18": {
      "type": "single",
      "correct": "a",
      "explanation": "DNP3 is widely used for supervising electrical substations and water networks. Its secure authentication (SA) version protects critical commands.",
      "whyWrong": {
        "d": "It is a mail protocol.",
        "b": "It is a mail protocol.",
        "c": "It is a web protocol."
      }
    },
    "ics-q19": {
      "type": "single",
      "correct": "b",
      "explanation": "Allowing only reads, and writes from the supervision station alone, limits what a compromised machine can command.",
      "whyWrong": {
        "c": "The firewall does not encrypt.",
        "d": "No effect on PLCs.",
        "a": "That is not the goal."
      }
    },
    "ics-q20": {
      "type": "single",
      "correct": "c",
      "explanation": "Filtering checks the type of operation and the source, not the business consistency of the value. A write authorized from the SCADA can remain dangerous: supervision must check it.",
      "whyWrong": {
        "a": "It can do so.",
        "b": "It can do so.",
        "d": "It can do so."
      }
    },
    "ics-q21": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Physical isolation reduces network exposure, but brings no authentication: local access to the bus is enough to send commands."
    },
    "ics-q22": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Modbus, DNP3 and Profinet are industrial protocols. SMTP is a mail protocol.",
      "whyWrong": {
        "d": "SMTP is used to carry email."
      }
    },
    "ics-q23": {
      "type": "short",
      "accepted": [
        "deep packet inspection",
        "dpi"
      ],
      "explanation": "Deep packet inspection (DPI) analyzes the application content of frames. Industrial firewalls use it to filter write operations."
    },
    "ics-q24": {
      "type": "single",
      "correct": "b",
      "explanation": "In OT, a brutal action can create a danger. Operations teams assess the state of the process and validate the response.",
      "whyWrong": {
        "c": "It can create a danger.",
        "a": "It can disturb the process.",
        "d": "It destroys evidence."
      }
    },
    "ics-q25": {
      "type": "single",
      "correct": "c",
      "explanation": "It analyzes a copy of the traffic without disturbing fragile equipment. It detects new machines, unexpected writes and program changes.",
      "whyWrong": {
        "d": "It detects, it does not block.",
        "b": "It replaces nothing.",
        "a": "It does not act on equipment."
      }
    },
    "ics-q26": {
      "type": "single",
      "correct": "d",
      "explanation": "Modifying a PLC’s program from an unusual workstation can signal a compromise or a manipulation of the process.",
      "whyWrong": {
        "a": "It is normal operation.",
        "b": "It is normal operation.",
        "c": "It is normal operation."
      }
    },
    "ics-q27": {
      "type": "single",
      "correct": "a",
      "explanation": "Without supervision, operators no longer see the process: the cut can itself cause an incident. The response is coordinated with operations.",
      "whyWrong": {
        "b": "It can on the contrary create a danger.",
        "d": "Unrelated.",
        "c": "Unrelated."
      }
    },
    "ics-q28": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Restoring a clean program makes it possible to restore the process quickly and to compare with an altered version. The backup is tested and stored outside the production network."
    },
    "ics-q29": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Source, destination, operation and equipment make it possible to qualify the alert and assess the impact on the process.",
      "whyWrong": {
        "c": "This information does not help qualify an alert."
      }
    },
    "ics-q30": {
      "type": "short",
      "accepted": [
        "degraded mode",
        "a degraded mode",
        "degraded operation"
      ],
      "explanation": "Degraded mode maintains the essentials of production with reduced means (manual control, local supervision) while the incident is dealt with."
    }
  },
};
