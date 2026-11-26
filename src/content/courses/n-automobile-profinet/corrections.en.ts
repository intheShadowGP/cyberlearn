// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "n-automobile-profinet",
  questions: {
    "apf-q1": {
      "type": "single",
      "correct": "a",
      "explanation": "As with other OT protocols, Profinet security comes from architecture: segmented and isolated networks, passive traffic monitoring and strict control of connected devices, rather than from native protection of the protocol.",
      "whyWrong": {
        "b": "The protocol does not impose this encryption.",
        "c": "It does not protect the network.",
        "d": "Unrealistic."
      }
    },
    "apf-q2": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Profinet, like Modbus, was born in a trusted-network context. Authentication and encryption are not systematic, hence the recourse to defense by architecture."
    },
    "apf-q3": {
      "type": "single",
      "correct": "c",
      "explanation": "Real time imposes bounded and predictable delays. An overly costly security processing (heavy encryption, deep inspection) risks exceeding these delays and disturbing the process, even safety.",
      "whyWrong": {
        "d": "That is not systematic.",
        "a": "No law forbids it.",
        "b": "It has a direct bearing."
      }
    },
    "apf-q31": {
      "type": "single",
      "correct": "d",
      "explanation": "A real-time protocol guarantees that a message arrives within a controlled delay. This constraint limits the security processing possible on the data path.",
      "whyWrong": {
        "b": "That is not the meaning.",
        "c": "That is not the meaning.",
        "a": "That is not the meaning."
      }
    },
    "apf-q32": {
      "type": "single",
      "correct": "b",
      "explanation": "The passive probe analyzes a copy of the traffic, without transmitting. It detects new devices and abnormal behavior without risking disturbing the process.",
      "whyWrong": {
        "d": "An active scan can disturb the network.",
        "c": "That is not its role.",
        "a": "Unrelated."
      }
    },
    "apf-q33": {
      "type": "single",
      "correct": "a",
      "explanation": "With no device authentication, a connected element can send frames and disturb PLCs and actuators. Control of connections is essential.",
      "whyWrong": {
        "b": "That is not its effect.",
        "c": "That is not its effect.",
        "d": "That is not its effect."
      }
    },
    "apf-q34": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Segmentation, control of connections and passive monitoring limit the impact of a hostile device. A direct Internet connection exposes the network.",
      "whyWrong": {
        "c": "It exposes the production network."
      }
    },
    "apf-q4": {
      "type": "single",
      "correct": "d",
      "explanation": "The CAN bus links the ECUs; designed for reliability, it neither encrypts nor authenticates messages by default. Access to the bus allows injecting messages, hence the need to compartmentalize domains and control gateways.",
      "whyWrong": {
        "a": "It is not a firewall.",
        "c": "It is not that system.",
        "b": "It is not the Internet."
      }
    },
    "apf-q5": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Wireless interfaces, infotainment/USB and the diagnostic port are real entry points, alongside the supply chain and remote services.",
      "whyWrong": {
        "c": "The color of the bodywork has no bearing on cybersecurity."
      }
    },
    "apf-q6": {
      "type": "truefalse",
      "correct": true,
      "explanation": "The main danger is that an exposed but low-criticality component serves as a stepping stone to the critical functions. Compartmentalizing domains and a filtering gateway break this path."
    },
    "apf-q35": {
      "type": "single",
      "correct": "c",
      "explanation": "A modern vehicle contains dozens of ECUs (engine, braking, steering, cabin). They communicate through buses and are as many potential targets.",
      "whyWrong": {
        "a": "Unrelated.",
        "d": "Unrelated.",
        "b": "Unrelated."
      }
    },
    "apf-q36": {
      "type": "truefalse",
      "correct": true,
      "explanation": "The gateway is the control point between domains: it allows only the planned messages, which keeps a compromise of infotainment from reaching braking."
    },
    "apf-q7": {
      "type": "single",
      "correct": "b",
      "explanation": "Compartmentalization by domains, with a secure gateway allowing only the necessary exchanges, keeps a compromise of infotainment from reaching braking or steering.",
      "whyWrong": {
        "c": "It protects nothing.",
        "a": "Impractical and ineffective.",
        "d": "Unrelated."
      }
    },
    "apf-q8": {
      "type": "single",
      "correct": "d",
      "explanation": "In automotive, a security flaw can cause dangerous behavior (loss of control of a function). Cybersecurity is therefore part of safety and must be considered from the design.",
      "whyWrong": {
        "c": "They are two distinct notions.",
        "a": "They are linked.",
        "b": "They complement each other."
      }
    },
    "apf-q9": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Segmentation by domains, secure boot and signed firmware, and intrusion detection on buses form an onboard defense in depth.",
      "whyWrong": {
        "b": "Removing electronic brakes would degrade safety: a security measure must never compromise physical safety."
      }
    },
    "apf-q10": {
      "type": "open",
      "model": "Remote updates (OTA) are a security measure, because they make it possible to quickly fix a vulnerability across a whole fleet of vehicles, without a workshop visit. But the update mechanism is also a surface of prime importance: if hijacked, an attacker could push malicious software to many vehicles. It is secured by cryptographically signing the update packages (the vehicle only installs what is signed by the manufacturer), authenticating the servers and the channel, verifying integrity and version (anti-rollback), validating updates before deployment and keeping traceability. This is the object of the update management system (SUMS) required by regulation R156.",
      "criteria": [
        "The dual role (fix quickly / surface to protect) is explained.",
        "Package signing and server authentication are cited.",
        "At least one complementary measure (integrity, anti-rollback, validation, traceability) is given."
      ],
      "explanation": "The ability to update is as powerful for defending as it is dangerous if compromised: it is protected like a privileged channel."
    },
    "apf-q37": {
      "type": "single",
      "correct": "c",
      "explanation": "Authenticating each message adds computation and bytes on buses with constrained bandwidth and delays. It is applied selectively to critical messages.",
      "whyWrong": {
        "d": "That is not the constraint.",
        "a": "No prohibition.",
        "b": "Unrelated."
      }
    },
    "apf-q38": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Anomaly spotting, alerting and logging make it possible to detect an attack and respond. Disabling the brakes would itself be dangerous.",
      "whyWrong": {
        "b": "A reaction must never degrade safety."
      }
    },
    "apf-q11": {
      "type": "short",
      "accepted": [
        "iso/sae 21434",
        "iso sae 21434",
        "21434",
        "iso/sae 21434:2021"
      ],
      "explanation": "ISO/SAE 21434 “Road vehicles — Cybersecurity engineering” defines how to integrate cybersecurity into the whole life cycle of the vehicle and its components, suppliers included. It is a process-oriented engineering standard."
    },
    "apf-q12": {
      "type": "short",
      "accepted": [
        "tara"
      ],
      "explanation": "TARA (Threat Analysis and Risk Assessment) identifies assets, threat scenarios and their impact to prioritize measures. It is the risk analysis method specific to automotive in ISO/SAE 21434."
    },
    "apf-q13": {
      "type": "single",
      "correct": "b",
      "explanation": "R155 requires a CSMS (cybersecurity management system) covering the whole life cycle; R156 requires a SUMS (software update management system), in particular for remote updates.",
      "whyWrong": {
        "a": "Nothing to do with tires.",
        "d": "They are two distinct regulations.",
        "c": "A standard is not replaced by a regulation."
      }
    },
    "apf-q14": {
      "type": "truefalse",
      "correct": true,
      "explanation": "The regulations set objectives to demonstrate for approval, without imposing a single solution. ISO/SAE 21434 is the engineering framework generally used to meet them."
    },
    "apf-q15": {
      "type": "open",
      "model": "ISO/SAE 21434 provides the engineering framework (the “how”): integrate cybersecurity into the life cycle, carry out a risk analysis (TARA), share responsibilities with suppliers, ensure monitoring and incident response. R155 requires, for approval, demonstrating a CSMS: the organization and processes by which the manufacturer manages the vehicle’s cybersecurity throughout its life. R156 requires a SUMS: the safe and traceable management of software updates, notably remote ones (software identification, validation, secure deployment). In summary, R155 and R156 say what must be proved, ISO/SAE 21434 serves as a recognized method to achieve it.",
      "criteria": [
        "The role of ISO/SAE 21434 as the engineering framework (the “how”) is explained.",
        "The CSMS (R155) is described as cybersecurity management over the life cycle.",
        "The SUMS (R156) is described as software update management."
      ],
      "explanation": "Compliance combines an engineering framework (the standard) and the demonstration of management systems (the regulations)."
    },
    "apf-q16": {
      "type": "truefalse",
      "correct": false,
      "explanation": "ISO/SAE 21434 is process-oriented: it describes what to organize (risk analysis, life cycle, continuous management), not a frozen list of technical measures to tick off."
    },
    "apf-q39": {
      "type": "single",
      "correct": "a",
      "explanation": "The World Forum for Harmonization of Vehicle Regulations (WP.29) develops the UNECE regulations, including R155 and R156.",
      "whyWrong": {
        "d": "That is not its role.",
        "c": "That is not its role.",
        "b": "That is not its role."
      }
    },
    "apf-q40": {
      "type": "short",
      "accepted": [
        "sums",
        "the sums"
      ],
      "explanation": "The SUMS (Software Update Management System) frames the identification of software, its validation, its safe deployment and its traceability, including for remote updates."
    },
    "apf-q17": {
      "type": "single",
      "correct": "b",
      "explanation": "The diagnostic port (OBD-II) allows workshops to read the ECUs. Uncontrolled access also allows sending messages on the buses.",
      "whyWrong": {
        "d": "It is not linked to the buses.",
        "a": "It is not linked to the buses.",
        "c": "It is not linked to the buses."
      }
    },
    "apf-q18": {
      "type": "single",
      "correct": "a",
      "explanation": "The attacker relays the exchanges between the key (far from the vehicle) and the vehicle, which believes the key is nearby. Countermeasures: key motion sensing, distance measurement, key sleep mode.",
      "whyWrong": {
        "d": "It is not an attack.",
        "c": "It is not this type of attack.",
        "b": "Unrelated."
      }
    },
    "apf-q19": {
      "type": "single",
      "correct": "d",
      "explanation": "V2X groups the communications between vehicles, infrastructure, pedestrians and network. These exchanges must be authenticated so that falsified messages do not cause a dangerous reaction.",
      "whyWrong": {
        "c": "Unrelated.",
        "a": "Unrelated.",
        "b": "Unrelated."
      }
    },
    "apf-q20": {
      "type": "single",
      "correct": "c",
      "explanation": "A diagnostic tool can read, but also reprogram ECUs. Access is therefore authenticated, filtered by the gateway and logged.",
      "whyWrong": {
        "a": "Unrelated.",
        "d": "Unrelated.",
        "b": "That is not its effect."
      }
    },
    "apf-q21": {
      "type": "truefalse",
      "correct": false,
      "explanation": "The cellular link is a remote access to the vehicle (services, updates, location). It must be authenticated, encrypted and separated from the critical domains."
    },
    "apf-q22": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Authentication, filtering and logging make it possible to control who acts on the ECUs. Free access exposes the critical functions.",
      "whyWrong": {
        "b": "It lets any tool command the ECUs."
      }
    },
    "apf-q23": {
      "type": "short",
      "accepted": [
        "obd",
        "obd-ii",
        "obd2",
        "obd ii"
      ],
      "explanation": "OBD-II (On-Board Diagnostics) is the standard diagnostic interface. It gives access to the ECUs’ data and maintenance functions."
    },
    "apf-q24": {
      "type": "single",
      "correct": "a",
      "explanation": "It assesses the exposure, prepares a fix, informs the parties concerned and deploys updates. ISO/SAE 21434 requires continuous vulnerability management.",
      "whyWrong": {
        "c": "Vehicles stay at risk.",
        "d": "It must inform.",
        "b": "Impractical and disproportionate."
      }
    },
    "apf-q25": {
      "type": "single",
      "correct": "d",
      "explanation": "This center collects alerts from vehicles and services, analyzes incidents and triggers the response. It extends the manufacturer’s monitoring after the sale.",
      "whyWrong": {
        "b": "Unrelated.",
        "c": "Unrelated.",
        "a": "Unrelated."
      }
    },
    "apf-q26": {
      "type": "single",
      "correct": "b",
      "explanation": "A vehicle stays on the road for fifteen years or more. New flaws are discovered in components after the sale: monitoring and updates are indispensable.",
      "whyWrong": {
        "c": "Unrelated.",
        "a": "Unrelated.",
        "d": "That is not the goal."
      }
    },
    "apf-q27": {
      "type": "single",
      "correct": "c",
      "explanation": "Location and driving habits are personal data. The GDPR requires purpose, minimization, security, information of individuals and retention periods.",
      "whyWrong": {
        "d": "It would be unlawful.",
        "b": "It would be unlawful.",
        "a": "The GDPR applies."
      }
    },
    "apf-q28": {
      "type": "truefalse",
      "correct": false,
      "explanation": "The regulation (R155) and the standard (ISO/SAE 21434) require continuous management: monitoring, incident response, fixes throughout the vehicle’s life."
    },
    "apf-q29": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Monitoring, response and updates cover operation. Stopping monitoring after production would be contrary to the spirit of the standard.",
      "whyWrong": {
        "a": "Monitoring must continue."
      }
    },
    "apf-q30": {
      "type": "short",
      "accepted": [
        "vsoc",
        "the vsoc"
      ],
      "explanation": "The VSOC (Vehicle Security Operations Center) monitors the security events of vehicles and associated services, and coordinates the response."
    }
  },
};
