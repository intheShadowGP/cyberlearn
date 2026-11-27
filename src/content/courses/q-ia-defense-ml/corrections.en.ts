// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "q-ia-defense-ml",
  questions: {
    "aiml-q1": {
      "type": "single",
      "correct": "b",
      "explanation": "Supervised learning adjusts the model from examples whose right answer is known. Unsupervised learning works without labels, grouping or spotting deviations.",
      "whyWrong": {
        "c": "It works without labels.",
        "a": "Symmetric encryption protects data; it is not a type of learning.",
        "d": "Compression does not describe a type of learning."
      }
    },
    "aiml-q2": {
      "type": "truefalse",
      "correct": true,
      "explanation": "The model exploits any correlation present in the data, even accidental (source, date, size). That is why building and checking training data is essential."
    },
    "aiml-q3": {
      "type": "short",
      "accepted": [
        "features",
        "feature"
      ],
      "explanation": "Features are the quantities measured on each example: their choice determines what the model can learn and what an attacker can manipulate."
    },
    "aiml-q4": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Detecting deviations from a baseline and grouping similar items do not require labels: these are classic uses of unsupervised learning.",
      "whyWrong": {
        "a": "Checking a signature is a deterministic cryptographic operation, with no learning."
      }
    },
    "aiml-q5": {
      "type": "single",
      "correct": "a",
      "explanation": "Precision relates true positives to the total number of alerts. Recall relates true positives to the total of malicious events.",
      "whyWrong": {
        "c": "That is recall.",
        "b": "Execution speed does not measure precision.",
        "d": "The number of parameters describes the model’s size, not its precision."
      }
    },
    "aiml-q6": {
      "type": "truefalse",
      "correct": false,
      "explanation": "If 0.1% of events are malicious, a model that never detects anything already reaches 99.9% accuracy. Precision, recall and false positive rate must be examined."
    },
    "aiml-q7": {
      "type": "short",
      "accepted": [
        "drift",
        "data drift",
        "concept drift"
      ],
      "explanation": "Drift lowers a model’s performance as usage, software and attack techniques evolve; it is monitored in production."
    },
    "aiml-q8": {
      "type": "open",
      "model": "True positives: 95% of 20, about 19 attacks detected per day. False positives: 0.5% of about 2,000,000 legitimate events, about 10,000 false alerts per day. Precision: 19 / (19 + 10,000), about 0.2%. Analysts would have to examine more than 500 alerts to find a real one: this is unmanageable, and the real attacks would be drowned. The false positive rate must be much lower, or the detector used as one signal among others (correlation, cumulative score) rather than as a source of direct alerts.",
      "criteria": [
        "The number of true positives (about 19) is calculated.",
        "The number of false positives (about 10,000) is calculated.",
        "The very low precision and its effect on the SOC are commented.",
        "An improvement or a suitable use is proposed."
      ],
      "explanation": "This is the base rate paradox: when the events sought are rare, even a low false positive rate dominates the volume of alerts."
    },
    "aiml-q9": {
      "type": "single",
      "correct": "d",
      "explanation": "AI proposes and justifies, the analyst decides: the model’s errors are caught before they have an effect. The other options let the model take high-impact decisions alone.",
      "whyWrong": {
        "c": "No human validation.",
        "a": "No traceability.",
        "b": "No human validation."
      }
    },
    "aiml-q10": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Grouping, enrichment, summarizing and search help are high-volume tasks where AI saves time without deciding in the analyst’s place.",
      "whyWrong": {
        "b": "A decision affecting a person requires human analysis and guarantees, and also falls under labor law and GDPR."
      }
    },
    "aiml-q11": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Without evidence, the analyst can only believe or ignore the suggestion. With it, they verify it quickly and spot the model’s errors."
    },
    "aiml-q12": {
      "type": "single",
      "correct": "c",
      "explanation": "Poisoning corrupts the learning itself, for example by having malicious examples labeled as legitimate. Evasion targets an already trained model.",
      "whyWrong": {
        "b": "Evasion targets an already trained model.",
        "a": "That is another attack.",
        "d": "Phishing deceives users: it does not alter training data."
      }
    },
    "aiml-q13": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Less information per answer, fewer possible requests and training that limits memorization of individual cases reduce what the attacker can deduce.",
      "whyWrong": {
        "c": "Publishing the training data would directly expose the information these attacks seek."
      }
    },
    "aiml-q14": {
      "type": "truefalse",
      "correct": true,
      "explanation": "The pickle format can contain instructions executed on load. Weight formats that only contain data (for example safetensors) are preferred, and model provenance and signature are checked."
    },
    "aiml-q15": {
      "type": "open",
      "model": "This is an evasion attack: the attacker modifies the file (adding harmless data, reordering, partial encryption) to change the features seen by the model without changing the program’s behavior. Measures: 1) base detection on features that are hard to change without breaking the program (runtime behavior, system calls) rather than on superficial features; 2) combine several independent detectors (signatures, dynamic analysis, behavioral EDR) so that a single bypass is not enough; 3) retrain the model with the modified variants discovered (adversarial training) and monitor drops in performance. The attacker’s access to the model’s score, which helps them adjust their modifications, can also be limited.",
      "criteria": [
        "The attack is identified as evasion.",
        "At least three distinct measures are proposed.",
        "The idea of robust features or defense in depth is present."
      ],
      "explanation": "No model is infallible against an adaptive attacker: robustness comes from combining approaches and updating them."
    },
    "aiml-q16": {
      "type": "short",
      "accepted": [
        "atlas",
        "mitre atlas"
      ],
      "explanation": "MITRE ATLAS (Adversarial Threat Landscape for Artificial-Intelligence Systems) lists tactics, techniques and case studies of attacks against AI systems."
    },
    "aiml-q17": {
      "type": "single",
      "correct": "c",
      "explanation": "The model reproduces what the data contains, including errors, biases and accidental correlations.",
      "whyWrong": {
        "b": "It learns them too.",
        "d": "It does not fix them.",
        "a": "The model also uses recent data: their quality matters."
      }
    },
    "aiml-q18": {
      "type": "single",
      "correct": "b",
      "explanation": "If all the malicious examples come from one source or period, the model learns to recognize that source rather than maliciousness.",
      "whyWrong": {
        "a": "A syntax error is a coding bug, not a bias in the data.",
        "d": "Weak encryption is a security flaw, not a representation bias.",
        "c": "A hardware failure is not a bias in the dataset."
      }
    },
    "aiml-q19": {
      "type": "single",
      "correct": "d",
      "explanation": "In production, the model sees data later than its training: a chronological test gives a more realistic estimate than a random draw from the same batch.",
      "whyWrong": {
        "c": "Splitting by date does not speed up training.",
        "b": "It does not increase the number of examples.",
        "a": "It does not remove duplicates: it avoids testing on already-seen future data."
      }
    },
    "aiml-q20": {
      "type": "single",
      "correct": "a",
      "explanation": "The fields or events that weighed in the decision let the analyst quickly confirm it or spot a model error.",
      "whyWrong": {
        "c": "Explainability does not raise a score: it clarifies the decision.",
        "d": "It does not replace the analyst.",
        "b": "It does not encrypt any data before sending."
      }
    },
    "aiml-q21": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Drift, different data and adaptive attackers degrade performance: we measure on recent data and monitor continuously."
    },
    "aiml-q22": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Provenance, absence of leakage and written labeling criteria make the set reliable. Losing the history prevents any verification.",
      "whyWrong": {
        "a": "Nothing could be verified."
      }
    },
    "aiml-q23": {
      "type": "short",
      "accepted": [
        "feature engineering"
      ],
      "explanation": "Feature engineering determines what the model can learn and what an attacker can manipulate: quantities that are hard to forge are preferred."
    },
    "aiml-q24": {
      "type": "single",
      "correct": "b",
      "explanation": "If test examples were used for training, the model seems better than it is: the figures will not be reproduced in production.",
      "whyWrong": {
        "a": "A data leak does not make the model faster.",
        "d": "It does not shrink the dataset.",
        "c": "It strengthens no encryption: it distorts measurements."
      }
    },
    "aiml-q25": {
      "type": "single",
      "correct": "a",
      "explanation": "Performance on confirmed cases and the distribution of the data reveal a degradation or an attack.",
      "whyWrong": {
        "d": "The interface color is not a detection indicator.",
        "c": "The number of lines of code does not indicate production quality.",
        "b": "Server room temperature is not a model indicator."
      }
    },
    "aiml-q26": {
      "type": "single",
      "correct": "c",
      "explanation": "Drift is normal: it is detected, the cause analyzed, then the model retrained or adjusted in a controlled environment.",
      "whyWrong": {
        "d": "Waiting makes things worse.",
        "b": "The traces would be lost.",
        "a": "That is the opposite."
      }
    },
    "aiml-q27": {
      "type": "single",
      "correct": "d",
      "explanation": "A previous version, validated, signed and kept, makes it possible to restore detection while the cause is analyzed.",
      "whyWrong": {
        "a": "Keeping a previous version uses storage; it does not save it.",
        "b": "The history must be kept.",
        "c": "Rolling back does not avoid retraining: it lets you react meanwhile."
      }
    },
    "aiml-q28": {
      "type": "single",
      "correct": "d",
      "explanation": "Authentication, rate limiting and request logging slow extraction and make it possible to spot abnormal use.",
      "whyWrong": {
        "c": "That helps the attacker.",
        "a": "That helps the attacker.",
        "b": "That helps the attacker."
      }
    },
    "aiml-q29": {
      "type": "single",
      "correct": "b",
      "explanation": "The signature guarantees that the deployed model is the one that was validated and that it has not been replaced or altered.",
      "whyWrong": {
        "a": "Signing does not reduce a file’s size.",
        "d": "It does not increase compute speed.",
        "c": "It does not hide the model’s existence."
      }
    },
    "aiml-q30": {
      "type": "truefalse",
      "correct": true,
      "explanation": "A weights-only format cannot execute instructions on opening: it is preferable to a format such as pickle for models of external origin."
    },
    "aiml-q31": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Detection, rollback and data analysis are the core of the plan. Disabling logging would prevent understanding the incident.",
      "whyWrong": {
        "b": "The traces would be lost."
      }
    },
    "aiml-q32": {
      "type": "short",
      "accepted": [
        "model card"
      ],
      "explanation": "The model card documents intended use, training data, measured performance, known limits and re-evaluation conditions."
    },
    "aiml-q33": {
      "type": "single",
      "correct": "c",
      "explanation": "Unsupervised learning spots structures or deviations with no known answer: groupings, unusual behavior.",
      "whyWrong": {
        "a": "It requires labels.",
        "b": "Asymmetric encryption is not a type of learning.",
        "d": "An incremental backup is not a type of learning."
      }
    },
    "aiml-q34": {
      "type": "single",
      "correct": "a",
      "explanation": "Recall relates true positives to the total of really malicious events: it measures what the detector lets through.",
      "whyWrong": {
        "c": "That is precision.",
        "b": "Processing speed does not measure recall.",
        "d": "The number of analysts mobilized is not recall."
      }
    },
    "aiml-q35": {
      "type": "single",
      "correct": "c",
      "explanation": "Even a low false positive rate, applied to millions of legitimate events, produces thousands of false alerts.",
      "whyWrong": {
        "d": "Faster hardware does not generate false alerts.",
        "a": "The dashboard color does not explain false alerts.",
        "b": "The number of on-call analysts does not create false alerts."
      }
    },
    "aiml-q36": {
      "type": "single",
      "correct": "a",
      "explanation": "With the events, fields and reasons, the analyst quickly verifies the suggestion instead of taking it on trust.",
      "whyWrong": {
        "c": "That would remove supervision.",
        "b": "Useless for the decision.",
        "d": "A list of passwords has no place in an alert."
      }
    },
    "aiml-q37": {
      "type": "single",
      "correct": "b",
      "explanation": "In evasion, the attacker modifies an input (for example a file) to fool an already trained model while keeping its behavior.",
      "whyWrong": {
        "c": "It targets training.",
        "a": "It targets the training data.",
        "d": "A distributed denial of service targets availability, not a model’s classification."
      }
    },
    "aiml-q38": {
      "type": "truefalse",
      "correct": false,
      "explanation": "A high-impact action requires human validation and a trace of the reasons: the human in the loop catches the model’s errors."
    },
    "aiml-q39": {
      "type": "single",
      "correct": "d",
      "explanation": "Calibrated noise makes the presence or absence of a person in the data change the result very little, at the price of a slight loss of accuracy.",
      "whyWrong": {
        "c": "Lossless compression does not protect individuals.",
        "a": "A port redirection adds no calibrated noise.",
        "b": "Caching has no effect on individuals’ privacy."
      }
    },
    "aiml-q40": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Independent detectors, robust features and retraining reduce the effectiveness of evasion. Detailed scores help the attacker adjust modifications.",
      "whyWrong": {
        "d": "It helps the attacker adjust modifications."
      }
    }
  },
};
