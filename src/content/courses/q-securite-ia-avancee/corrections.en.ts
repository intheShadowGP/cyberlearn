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
        "c": "Speed is not the point: the risk is that a model has been altered.",
        "b": "A model is not tied to a single piece of hardware: provenance concerns its integrity.",
        "d": "The repository does not automatically encrypt models, and encryption does not prove provenance."
      }
    },
    "qia-q2": {
      "type": "single",
      "correct": "c",
      "explanation": "A format that only contains numeric values (safetensors) cannot execute instructions on opening, unlike pickle.",
      "whyWrong": {
        "b": "A format that runs code on load lets a trojanized model execute.",
        "a": "An undocumented format prevents verification: it is not preferable.",
        "d": "A compressed format with no verification guarantees nothing about its content."
      }
    },
    "qia-q3": {
      "type": "single",
      "correct": "d",
      "explanation": "It inventories components and versions: if a model or a library is compromised, you know which systems are affected.",
      "whyWrong": {
        "b": "A bill of materials inventories components, not secrets.",
        "c": "The budget is project management, not the AI bill of materials.",
        "a": "Users are not AI components."
      }
    },
    "qia-q4": {
      "type": "single",
      "correct": "b",
      "explanation": "With no network or secret access, a model that ran malicious code would have nothing to steal or contact.",
      "whyWrong": {
        "d": "Isolation limits damage; it does not reduce energy consumption.",
        "a": "An isolated environment does not affect the model’s accuracy.",
        "c": "Isolating the model is not meant to make it easier to copy."
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
        "c": "Deploying an external model straight to production skips any verification."
      }
    },
    "qia-q9": {
      "type": "single",
      "correct": "a",
      "explanation": "If the agent reads hostile content, accesses private data and can send outside, a hidden instruction is enough to get data out.",
      "whyWrong": {
        "d": "A read-only tool with no data offers nothing to exfiltrate.",
        "b": "With no context or tool, there is neither data to steal nor an output channel.",
        "c": "With no data and no tool, the agent has nothing to exfiltrate."
      }
    },
    "qia-q10": {
      "type": "single",
      "correct": "d",
      "explanation": "Closing the output channel, removing access to private data or isolating untrusted content interrupts the exfiltration chain.",
      "whyWrong": {
        "b": "It does not change the structure of the risk.",
        "a": "Lengthening the prompt removes none of the three elements of the risk.",
        "c": "Temperature sets response variability, not rights or channels."
      }
    },
    "qia-q11": {
      "type": "single",
      "correct": "b",
      "explanation": "A dedicated account is easy to trace, limit and revoke, without confusing its actions with those of a human.",
      "whyWrong": {
        "c": "A dedicated identity serves, on the contrary, to log its actions.",
        "a": "Acting on behalf of everyone contradicts the principle of limited rights.",
        "d": "Administrator access by default is the opposite of limited rights."
      }
    },
    "qia-q12": {
      "type": "single",
      "correct": "c",
      "explanation": "The execution component checks each proposed action (authorized tool, recipient, cap) before running it.",
      "whyWrong": {
        "a": "The separation adds a check; it does not double speed.",
        "b": "The separation comes with logs: it does not remove them.",
        "d": "The planner is still a language model: the separation does not avoid it."
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
        "b": "Administrator access by default removes the limits the other measures set."
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
        "d": "A hardware failure is not a hidden model behavior.",
        "c": "An automatic backup is a legitimate function, not a backdoor.",
        "b": "A configuration interface is an intended function, not a hidden behavior."
      }
    },
    "qia-q18": {
      "type": "single",
      "correct": "b",
      "explanation": "The model sees during learning inputs designed to fool it: it learns to resist them, with no complete guarantee.",
      "whyWrong": {
        "a": "Adversarial training adds modified examples; it does not remove the original data.",
        "c": "It does not speed up training: it makes it heavier.",
        "d": "It is not limited to public data: it concerns the nature of the examples."
      }
    },
    "qia-q19": {
      "type": "single",
      "correct": "c",
      "explanation": "A defense tested only against generic attacks can fall to an adversary who has studied it.",
      "whyWrong": {
        "b": "Ease of automation is not the reason for this choice.",
        "a": "Cost is not the criterion: it is the realism of the threat.",
        "d": "They often give worse scores: that is precisely their value."
      }
    },
    "qia-q20": {
      "type": "single",
      "correct": "d",
      "explanation": "Detectors with different weaknesses force the attacker to bypass several defenses at once.",
      "whyWrong": {
        "a": "A single detector, however precise, leaves a single point of failure.",
        "b": "Security through obscurity is not enough.",
        "c": "Disabling alert logging prevents spotting bypasses."
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
        "a": "Accepting all contributions without checks makes poisoning easier."
      }
    },
    "qia-q25": {
      "type": "single",
      "correct": "c",
      "explanation": "ATLAS provides a vocabulary of tactics and techniques to build realistic threat scenarios.",
      "whyWrong": {
        "a": "ATLAS does not price projects: it describes attack techniques against AI.",
        "d": "ATLAS encrypts no model: it is a knowledge base.",
        "b": "ATLAS does not measure speed: it lists tactics and techniques."
      }
    },
    "qia-q26": {
      "type": "single",
      "correct": "b",
      "explanation": "This ranking helps check an architecture and prepare tests: injection, information leaks, excessive agents, etc.",
      "whyWrong": {
        "d": "A cabling standard concerns physical infrastructure, not LLM application risks.",
        "c": "A backup calendar is not a risk reference.",
        "a": "A salary grid has nothing to do with application risks."
      }
    },
    "qia-q27": {
      "type": "single",
      "correct": "d",
      "explanation": "We identify what must be protected and the data flows before describing threat scenarios.",
      "whyWrong": {
        "c": "Interface colors are not assets to protect.",
        "a": "Team schedules are not assets to protect.",
        "b": "Computer brands are not the AI system’s assets."
      }
    },
    "qia-q28": {
      "type": "single",
      "correct": "a",
      "explanation": "The same booby-trapped text is harmless to an agent with no tools and serious for one that can send, delete or pay.",
      "whyWrong": {
        "d": "Tools do not change verbosity: they change what the agent can do.",
        "c": "On the contrary, powerful tools increase the possible severity.",
        "b": "Tools strongly influence risk: they define the possible actions."
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
        "a": "Deleting a model is an administration operation, not an extraction.",
        "b": "Compressing a model is an optimization, not an attack.",
        "d": "Translating a model into another language is porting, not extraction."
      }
    },
    "qia-q34": {
      "type": "single",
      "correct": "b",
      "explanation": "Knowing that a person was in the training data can reveal sensitive information (for example a medical record).",
      "whyWrong": {
        "a": "Reproducing the model’s code is extraction, not membership inference.",
        "d": "Response speed is not what this attack measures.",
        "c": "Ranking users by rights is access control."
      }
    },
    "qia-q35": {
      "type": "single",
      "correct": "a",
      "explanation": "A model can retain specific examples (personal data, secrets) and return them for a well-chosen request.",
      "whyWrong": {
        "d": "Memorization does not slow requests: it exposes data.",
        "c": "A model that memorizes does not refuse new data for that reason.",
        "b": "The model does not delete its weights: it may reproduce data from them."
      }
    },
    "qia-q36": {
      "type": "single",
      "correct": "d",
      "explanation": "Limiting and monitoring requests, and reducing the information returned, makes extraction more costly and more visible.",
      "whyWrong": {
        "b": "Very detailed scores help the attacker reproduce the model.",
        "a": "Public access without authentication makes extraction easier.",
        "c": "Deleting logging prevents detecting extractions."
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
        "d": "Publishing the training data destroys the confidentiality being protected."
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
    "qia-q41": {
      "type": "single",
      "correct": "b",
      "explanation": "An AI system does not always answer the same way to the same input. Repeating trials estimates how often an attack succeeds and lets you compare before and after a fix.",
      "whyWrong": {
        "a": "Inflating the number of findings would hurt the report’s credibility.",
        "d": "Repeating a trial does not make the model more vulnerable.",
        "c": "The aim is not to hinder the defense team but to measure."
      }
    }
  },
};
