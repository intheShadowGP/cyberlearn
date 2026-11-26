// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "q-securite-ia-avancee",
  questions: {
    "qia-q1": {
      "type": "single",
      "correct": "a",
      "explanation": "An external model is a dependency like any other: its origin and integrity are verified before adoption.",
      "whyWrong": {
        "c": "That is not the reason.",
        "b": "That is not the reason.",
        "d": "That is not guaranteed."
      }
    },
    "qia-q2": {
      "type": "single",
      "correct": "c",
      "explanation": "A format that only contains numeric values (safetensors) cannot execute instructions on opening, unlike pickle.",
      "whyWrong": {
        "b": "That is the risk to avoid.",
        "a": "That prevents any verification.",
        "d": "That gives no guarantee."
      }
    },
    "qia-q3": {
      "type": "single",
      "correct": "d",
      "explanation": "It inventories components and versions: if a model or a library is compromised, you know which systems are affected.",
      "whyWrong": {
        "b": "That is not its content.",
        "c": "That is not its content.",
        "a": "That is not its content."
      }
    },
    "qia-q4": {
      "type": "single",
      "correct": "b",
      "explanation": "With no network or secret access, a model that ran malicious code would have nothing to steal or contact.",
      "whyWrong": {
        "d": "That is not the goal.",
        "a": "That is not the goal.",
        "c": "That is not the goal."
      }
    },
    "qia-q5": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Public data can be manipulated by third parties: provenance is checked and samples are examined before training."
    },
    "qia-q6": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Popularity proves neither integrity nor harmlessness: name impersonation and booby-trapped models exist. Verify as for any dependency."
    },
    "qia-q7": {
      "type": "short",
      "accepted": [
        "pickle"
      ],
      "explanation": "A pickle file can contain instructions executed on opening: a weights-only format is preferred."
    },
    "qia-q8": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Provenance, format and evaluation on your own cases give confidence. Deploying without checks exposes production.",
      "whyWrong": {
        "c": "It exposes production."
      }
    },
    "qia-q9": {
      "type": "single",
      "correct": "a",
      "explanation": "If the agent reads hostile content, accesses private data and can send outside, a hidden instruction is enough to get data out.",
      "whyWrong": {
        "d": "Barely exposed.",
        "b": "Barely exposed.",
        "c": "No exposure."
      }
    },
    "qia-q10": {
      "type": "single",
      "correct": "d",
      "explanation": "Closing the output channel, removing access to private data or isolating untrusted content interrupts the exfiltration chain.",
      "whyWrong": {
        "b": "It does not change the structure of the risk.",
        "a": "It can be bypassed.",
        "c": "Unrelated."
      }
    },
    "qia-q11": {
      "type": "single",
      "correct": "b",
      "explanation": "A dedicated account is easy to trace, limit and revoke, without confusing its actions with those of a human.",
      "whyWrong": {
        "c": "That is the opposite.",
        "a": "That extends the rights.",
        "d": "That extends the rights."
      }
    },
    "qia-q12": {
      "type": "single",
      "correct": "c",
      "explanation": "The execution component checks each proposed action (authorized tool, recipient, cap) before running it.",
      "whyWrong": {
        "a": "That is not the goal.",
        "b": "Logging is still necessary.",
        "d": "That is not the goal."
      }
    },
    "qia-q13": {
      "type": "truefalse",
      "correct": true,
      "explanation": "They are read by the model: a description can contain hidden instructions. The rights requested are examined as well."
    },
    "qia-q14": {
      "type": "short",
      "accepted": [
        "sandbox"
      ],
      "explanation": "The sandbox runs the code with no access to secrets or the internal network, with minimal rights."
    },
    "qia-q15": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Fine-grained authorizations, caps and confirmations bound what an agent can do. Administrator access by default extends rights.",
      "whyWrong": {
        "b": "It extends the rights."
      }
    },
    "qia-q16": {
      "type": "open",
      "model": "I spot the risky combination: untrusted content (emails), private data (CRM), output channel (sending). I close the output channel: replies only go to the authenticated sender of the message, any other send requires human validation displaying the recipient and content. I limit CRM access to the record of the customer concerned, enforced by the tool and not by the prompt. The agent has its own identity with minimal rights, its outputs are treated as untrusted and validated, and any code runs in a sandbox. I log each tool call with its context, with alerts on abnormal volumes, and I test the set-up with booby-trapped emails before production.",
      "criteria": [
        "The risky combination is identified.",
        "At least one of the three elements is removed or closed (output channel, data scope).",
        "Dedicated identity, confirmation and logging are planned.",
        "Tests with booby-trapped content are mentioned."
      ],
      "explanation": "We assume the model will be fooled and design so that it remains harmless."
    },
    "qia-q17": {
      "type": "single",
      "correct": "a",
      "explanation": "The model behaves normally until a trigger chosen by the attacker produces a specific response.",
      "whyWrong": {
        "d": "That is not the definition.",
        "c": "That is not the definition.",
        "b": "That is not the definition."
      }
    },
    "qia-q18": {
      "type": "single",
      "correct": "b",
      "explanation": "The model sees during learning inputs designed to fool it: it learns to resist them, with no complete guarantee.",
      "whyWrong": {
        "a": "That is not the definition.",
        "c": "That is not the definition.",
        "d": "That is not the definition."
      }
    },
    "qia-q19": {
      "type": "single",
      "correct": "c",
      "explanation": "A defense tested only against generic attacks can fall to an adversary who has studied it.",
      "whyWrong": {
        "b": "That is not the reason.",
        "a": "That is not the reason.",
        "d": "That is not the reason."
      }
    },
    "qia-q20": {
      "type": "single",
      "correct": "d",
      "explanation": "Detectors with different weaknesses force the attacker to bypass several defenses at once.",
      "whyWrong": {
        "a": "A single point of failure.",
        "b": "Security through obscurity is not enough.",
        "c": "The traces would be lost."
      }
    },
    "qia-q21": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Robustness is demonstrated against specific attacks and strengthened through a combination of defenses and continuous updating."
    },
    "qia-q22": {
      "type": "truefalse",
      "correct": false,
      "explanation": "A defense that was not attacked is merely untested: its robustness is not established."
    },
    "qia-q23": {
      "type": "short",
      "accepted": [
        "evasion"
      ],
      "explanation": "Evasion targets an already trained model, as opposed to poisoning, which targets its learning."
    },
    "qia-q24": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Provenance, outlier detection and version comparison limit poisoning. Accepting with no control opens the door to it.",
      "whyWrong": {
        "a": "It opens the door to it."
      }
    },
    "qia-q25": {
      "type": "single",
      "correct": "c",
      "explanation": "ATLAS provides a vocabulary of tactics and techniques to build realistic threat scenarios.",
      "whyWrong": {
        "a": "That is not its role.",
        "d": "That is not its role.",
        "b": "That is not its role."
      }
    },
    "qia-q26": {
      "type": "single",
      "correct": "b",
      "explanation": "This ranking helps check an architecture and prepare tests: injection, information leaks, excessive agents, etc.",
      "whyWrong": {
        "d": "Unrelated.",
        "c": "Unrelated.",
        "a": "Unrelated."
      }
    },
    "qia-q27": {
      "type": "single",
      "correct": "d",
      "explanation": "We identify what must be protected and the data flows before describing threat scenarios.",
      "whyWrong": {
        "c": "Unrelated.",
        "a": "Unrelated.",
        "b": "Unrelated."
      }
    },
    "qia-q28": {
      "type": "single",
      "correct": "a",
      "explanation": "The same booby-trapped text is harmless to an agent with no tools and serious for one that can send, delete or pay.",
      "whyWrong": {
        "d": "That is not the reason.",
        "c": "That is the opposite.",
        "b": "They have a great influence."
      }
    },
    "qia-q29": {
      "type": "truefalse",
      "correct": true,
      "explanation": "A change of model, tool or data scope alters the threats and measures: the analysis follows."
    },
    "qia-q30": {
      "type": "short",
      "accepted": [
        "ai rmf",
        "nist ai rmf",
        "ai risk management framework"
      ],
      "explanation": "The NIST AI RMF structures risk management: govern, map, measure, treat."
    },
    "qia-q31": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Source, asset, technique, impact and measures describe a scenario. The price of the subscription is not part of it.",
      "whyWrong": {
        "b": "It is not an element of the risk."
      }
    },
    "qia-q32": {
      "type": "open",
      "model": "I first map the assets and flows: share documents (including the most sensitive), system prompts, model and provider, ticket tool, logs. I then describe scenarios based on ATLAS and the OWASP Top 10 for LLM Applications: indirect injection through a document, leak of unauthorized documents through search, abuse of the ticket tool, compromise of a third-party component. I assess likelihood and severity taking the accessible tools into account, then propose measures: access rights kept in the index, confirmation of actions, logging, provenance of components. I record the residual risk accepted by management and review the analysis at each change of model, tool or scope.",
      "criteria": [
        "The assets and flows are mapped.",
        "Scenarios based on frameworks (ATLAS, OWASP) are described.",
        "Measures and a residual risk are indicated.",
        "Review of the analysis is planned."
      ],
      "explanation": "The risk analysis of an AI system follows the classic approach, with the assets and threats specific to AI."
    },
    "qia-q33": {
      "type": "single",
      "correct": "c",
      "explanation": "An attacker who massively queries an API can rebuild an equivalent model and steal its value.",
      "whyWrong": {
        "a": "That is not the definition.",
        "b": "That is not the definition.",
        "d": "That is not the definition."
      }
    },
    "qia-q34": {
      "type": "single",
      "correct": "b",
      "explanation": "Knowing that a person was in the training data can reveal sensitive information (for example a medical record).",
      "whyWrong": {
        "a": "That is not the definition.",
        "d": "That is not the definition.",
        "c": "That is not the definition."
      }
    },
    "qia-q35": {
      "type": "single",
      "correct": "a",
      "explanation": "A model can retain specific examples (personal data, secrets) and return them for a well-chosen request.",
      "whyWrong": {
        "d": "That is not the risk.",
        "c": "That is not the risk.",
        "b": "That is not the risk."
      }
    },
    "qia-q36": {
      "type": "single",
      "correct": "d",
      "explanation": "Limiting and monitoring requests, and reducing the information returned, makes extraction more costly and more visible.",
      "whyWrong": {
        "b": "That helps extraction.",
        "a": "That helps extraction.",
        "c": "The traces would be lost."
      }
    },
    "qia-q37": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Precise scores give more information per request: their detail and rate must be limited."
    },
    "qia-q38": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Calibrated noise, filtering and access control limit leaks. Publishing the training data exposes it.",
      "whyWrong": {
        "d": "It exposes it."
      }
    },
    "qia-q39": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Unauthorized documents, return of the context and disclosure of the prompt are the three leaks to test. Publishing before a fix exposes the system.",
      "whyWrong": {
        "b": "It is not a test and it exposes the system."
      }
    },
    "qia-q40": {
      "type": "short",
      "accepted": [
        "differential privacy"
      ],
      "explanation": "Differential privacy makes a person’s presence in the data nearly undetectable, at the price of a slight loss of accuracy."
    }
  },
};
