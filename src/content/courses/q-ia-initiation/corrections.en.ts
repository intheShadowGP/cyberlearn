// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "q-ia-initiation",
  questions: {
    "qii-q1": {
      "type": "single",
      "correct": "b",
      "explanation": "A model adjusts its parameters from examples to reproduce a decision, rather than applying rules written one by one.",
      "whyWrong": {
        "d": "That is the opposite of learning.",
        "a": "That is not how it works.",
        "c": "It assists experts, it does not replace them."
      }
    },
    "qii-q2": {
      "type": "single",
      "correct": "a",
      "explanation": "An LLM produces the most plausible continuation of a given text: it writes, summarizes, answers, without “knowing” in the human sense.",
      "whyWrong": {
        "c": "That is not its role.",
        "b": "That is not its role.",
        "d": "That is not its role."
      }
    },
    "qii-q3": {
      "type": "single",
      "correct": "d",
      "explanation": "AI covers systems that recognize, classify, predict or write, tasks associated with human intelligence.",
      "whyWrong": {
        "a": "That is not the definition.",
        "b": "They do make mistakes.",
        "c": "That is not the definition."
      }
    },
    "qii-q4": {
      "type": "single",
      "correct": "c",
      "explanation": "Training data are the examples used to adjust the model: their quality determines the model’s quality.",
      "whyWrong": {
        "b": "That is not the definition.",
        "d": "That is not the definition.",
        "a": "That is not the definition."
      }
    },
    "qii-q5": {
      "type": "truefalse",
      "correct": true,
      "explanation": "A language model produces plausible text, not necessarily accurate: the confident tone proves nothing."
    },
    "qii-q6": {
      "type": "truefalse",
      "correct": false,
      "explanation": "A large amount of data prevents neither errors, nor biases, nor inventions: verification remains necessary."
    },
    "qii-q7": {
      "type": "short",
      "accepted": [
        "hallucination",
        "a hallucination",
        "hallucinations"
      ],
      "explanation": "A hallucination is an invented fact or a non-existent reference presented with confidence: you verify in a reliable source."
    },
    "qii-q8": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "AI learns from data whose qualities and flaws it inherits. It does not understand context like a person.",
      "whyWrong": {
        "a": "It can misinterpret context."
      }
    },
    "qii-q9": {
      "type": "single",
      "correct": "c",
      "explanation": "Grouping, summarizing and enriching alerts are high-volume tasks where AI saves time without deciding in the analyst’s place.",
      "whyWrong": {
        "d": "That is not a task for AI.",
        "a": "Logs remain essential.",
        "b": "That would be dangerous."
      }
    },
    "qii-q10": {
      "type": "single",
      "correct": "b",
      "explanation": "Spam filters learn to distinguish unwanted messages from legitimate ones from examples.",
      "whyWrong": {
        "a": "Unrelated.",
        "c": "Unrelated.",
        "d": "Unrelated."
      }
    },
    "qii-q11": {
      "type": "single",
      "correct": "d",
      "explanation": "The model learns usual behavior and flags deviations, which an analyst then checks.",
      "whyWrong": {
        "b": "That is not its goal.",
        "c": "That is not its goal.",
        "a": "That is not its goal."
      }
    },
    "qii-q12": {
      "type": "single",
      "correct": "a",
      "explanation": "A model error on a high-impact action is costly: human validation catches it before it has an effect.",
      "whyWrong": {
        "b": "That is not the reason.",
        "c": "That is not accurate.",
        "d": "That is not accurate."
      }
    },
    "qii-q13": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Assisted writing saves time; the review makes sure the summary is accurate and complete."
    },
    "qii-q14": {
      "type": "short",
      "accepted": [
        "loop",
        "the loop"
      ],
      "explanation": "Human in the loop validates the important decisions proposed by the system, with the elements that justify them."
    },
    "qii-q15": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Summarizing, classifying and proposing are aids reviewed by a human. Alone deleting accounts is an action hard to undo.",
      "whyWrong": {
        "a": "An action hard to undo."
      }
    },
    "qii-q16": {
      "type": "open",
      "model": "I answer that it is tempting but risky: the model can be wrong, and an important alert closed by mistake would go unnoticed with nobody able to catch it. I suggest that the AI classify and group alerts while stating its reasons, that the analyst validate, and that only reversible, low-risk actions be automated, with regular monitoring of the closures to measure errors. I remind them that the decision on important cases remains human.",
      "criteria": [
        "The risk of a model error with no catch is explained.",
        "The analyst’s validation role is kept.",
        "A reasonable alternative (triage aid, reversible actions) is proposed."
      ],
      "explanation": "The harder an action is to undo, the more human validation is necessary."
    },
    "qii-q17": {
      "type": "single",
      "correct": "d",
      "explanation": "An assistant produces plausible text, not necessarily true: facts, figures and references are checked in a reliable source.",
      "whyWrong": {
        "b": "That is not the reason.",
        "c": "That is not the reason.",
        "a": "That is not accurate."
      }
    },
    "qii-q18": {
      "type": "single",
      "correct": "b",
      "explanation": "If the data is unbalanced, the model reproduces that imbalance and favors certain cases.",
      "whyWrong": {
        "a": "That is not a bias.",
        "c": "That is not a bias.",
        "d": "That is not a bias."
      }
    },
    "qii-q19": {
      "type": "single",
      "correct": "a",
      "explanation": "Accepting an answer without checking it leads to acting on false information: wrong priority, wrong action, wrong report.",
      "whyWrong": {
        "b": "That is not a risk.",
        "c": "That is not a risk.",
        "d": "That is not a risk."
      }
    },
    "qii-q20": {
      "type": "single",
      "correct": "c",
      "explanation": "Invented references are common: the official source is found before relying on it.",
      "whyWrong": {
        "d": "That would spread a possible error.",
        "a": "That would spread a possible error.",
        "b": "It must be verified, not ignored."
      }
    },
    "qii-q21": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Hallucinations also affect references: identifiers, versions, legal articles. They are found in the official database."
    },
    "qii-q22": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Detail and a confident tone have no link with accuracy: an invented answer can be very detailed."
    },
    "qii-q23": {
      "type": "short",
      "accepted": [
        "drift"
      ],
      "explanation": "Drift makes a model that is neither monitored nor retrained lose performance when reality changes."
    },
    "qii-q24": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Facts, references and figures are checked before publication. Copying without checking spreads errors.",
      "whyWrong": {
        "d": "It spreads errors."
      }
    },
    "qii-q25": {
      "type": "single",
      "correct": "b",
      "explanation": "A secret entered in an online tool is exposed: it can be kept by the provider.",
      "whyWrong": {
        "c": "No risk.",
        "d": "No risk.",
        "a": "No risk."
      }
    },
    "qii-q26": {
      "type": "single",
      "correct": "d",
      "explanation": "Depending on the terms of use, the provider may keep, analyze or reuse the data entered.",
      "whyWrong": {
        "a": "That is not guaranteed.",
        "b": "It does leave the device.",
        "c": "That is not automatic."
      }
    },
    "qii-q27": {
      "type": "single",
      "correct": "c",
      "explanation": "Personal data keeps its protection: the organization remains responsible for what it sends to a provider.",
      "whyWrong": {
        "d": "It is not excluded.",
        "a": "That is not accurate.",
        "b": "That is not accurate."
      }
    },
    "qii-q28": {
      "type": "single",
      "correct": "a",
      "explanation": "A validated tool has been reviewed (contract, data retention, security): an unvalidated tool exposes the organization.",
      "whyWrong": {
        "c": "That exposes the data.",
        "b": "Unrelated.",
        "d": "Never share your credentials."
      }
    },
    "qii-q29": {
      "type": "truefalse",
      "correct": true,
      "explanation": "The less data you send, the less risk: this is the principle of minimization."
    },
    "qii-q30": {
      "type": "short",
      "accepted": [
        "minimization",
        "minimisation",
        "data minimization"
      ],
      "explanation": "Minimization limits the amount of data exposed: only the strict minimum is entered."
    },
    "qii-q31": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Secrets, personal data and confidential documents are to be excluded. A general question contains no sensitive data.",
      "whyWrong": {
        "b": "No sensitive data."
      }
    },
    "qii-q32": {
      "type": "open",
      "model": "I do not submit the report as is: it contains personal data and internal information that would be sent to a third party. I first check whether the organization provides a validated tool: in that case I use it. Otherwise, I replace names, addresses and identifiers with neutral markers before submitting a lightened text, or I write the summary myself. I review the result and I do not keep sensitive information in the tool. If in doubt, I ask security or the data protection officer.",
      "criteria": [
        "The risk of sending personal or internal data to a third party is identified.",
        "Use of a validated tool or removal of the sensitive data is proposed.",
        "Reviewing the result or consulting a manager is mentioned."
      ],
      "explanation": "We minimize before entering, use the validated tools and review the result."
    },
    "qii-q33": {
      "type": "single",
      "correct": "d",
      "explanation": "Generated messages are error-free, personalized and in every language: the quality of the form is no longer a sign of legitimacy.",
      "whyWrong": {
        "b": "That is not what it brings.",
        "c": "That is not what it brings.",
        "a": "That is not what it brings."
      }
    },
    "qii-q34": {
      "type": "single",
      "correct": "b",
      "explanation": "A deepfake imitates a person’s voice or face: more and more convincing, it is used for fraud.",
      "whyWrong": {
        "c": "That is not the definition.",
        "d": "That is not the definition.",
        "a": "That is not the definition."
      }
    },
    "qii-q35": {
      "type": "single",
      "correct": "c",
      "explanation": "You call the person back on a known number and follow the payment validation procedure.",
      "whyWrong": {
        "d": "That is what the attacker wants.",
        "b": "The channel may be controlled by the attacker.",
        "a": "That spreads the fraud."
      }
    },
    "qii-q36": {
      "type": "single",
      "correct": "a",
      "explanation": "Text hidden in a page, an email or a document can push an assistant to do something other than what the user wants.",
      "whyWrong": {
        "c": "That is not the definition.",
        "b": "That is not the definition.",
        "d": "That is not the definition."
      }
    },
    "qii-q37": {
      "type": "truefalse",
      "correct": false,
      "explanation": "With AI, phishing messages are impeccable: you rely on the sender, the context and the procedure, not on the form."
    },
    "qii-q38": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Urgency, bypassing and an unusual channel are warning signals. A request that follows the procedure remains verifiable.",
      "whyWrong": {
        "b": "It follows the usual circuit."
      }
    },
    "qii-q39": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Second channel, procedure and awareness limit the risk. A recognized voice proves nothing anymore, since it can be imitated.",
      "whyWrong": {
        "c": "A voice can be imitated."
      }
    },
    "qii-q40": {
      "type": "short",
      "accepted": [
        "phishing"
      ],
      "explanation": "Phishing pushes people to enter their credentials on a fake site; AI makes it more convincing."
    },
    "qii-q41": {
      "type": "single",
      "correct": "d",
      "explanation": "An AI may invent options or references with confidence. A precise detail is not proof: you check the official documentation and test outside production.",
      "whyWrong": {
        "c": "Running without checking in production is the mistake to avoid.",
        "a": "The detail of an answer does not prove its accuracy.",
        "b": "A resemblance does not guarantee the option exists or does what you think."
      }
    },
    "qii-q42": {
      "type": "single",
      "correct": "b",
      "explanation": "In an unapproved tool you enter no personal, confidential or internal data. A general question with nothing specific to the organization discloses nothing.",
      "whyWrong": {
        "d": "Internal addresses and names reveal the organization’s architecture.",
        "c": "A customer list contains personal data.",
        "a": "A contract is confidential by nature."
      }
    },
    "qii-q43": {
      "type": "single",
      "correct": "a",
      "explanation": "AI produces polished texts, in the target’s language and personalized. Spelling mistakes are therefore no longer a reliable clue: you check the sender, the link and the request.",
      "whyWrong": {
        "b": "The message may be only text with a link, with no infected attachment.",
        "d": "The sending address may be unknown or spoofed.",
        "c": "A phishing message must be readable by the victim."
      }
    },
    "qii-q44": {
      "type": "short",
      "accepted": [
        "hallucination",
        "hallucinations"
      ],
      "explanation": "It is called a hallucination: the model generates plausible but inaccurate text. Hence the need to verify important answers."
    }
  },
};
