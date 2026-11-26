// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "q-ia-pratique",
  questions: {
    "qip-q1": {
      "type": "single",
      "correct": "a",
      "explanation": "Context, task, output format and constraints give the assistant what it needs to answer usefully.",
      "whyWrong": {
        "c": "Insufficient.",
        "d": "Insufficient.",
        "b": "They must never be provided."
      }
    },
    "qip-q2": {
      "type": "single",
      "correct": "c",
      "explanation": "Delimiters around the data help the model treat it as content, not as instructions, even if it is not a guarantee.",
      "whyWrong": {
        "a": "That is not the goal.",
        "d": "That is not the goal.",
        "b": "That is not the goal."
      }
    },
    "qip-q3": {
      "type": "single",
      "correct": "b",
      "explanation": "A secret entered into an online tool is exposed, whether at the start, partly masked or sent separately.",
      "whyWrong": {
        "a": "That exposes them.",
        "c": "Insufficient.",
        "d": "That exposes them too."
      }
    },
    "qip-q4": {
      "type": "single",
      "correct": "d",
      "explanation": "An answer accompanied by its sources and assumptions is checked faster; it does not become accurate for all that.",
      "whyWrong": {
        "c": "That is not the goal.",
        "b": "It guarantees nothing.",
        "a": "Review remains necessary."
      }
    },
    "qip-q5": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Iterating removes ambiguities and gets a result closer to what is expected."
    },
    "qip-q6": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Detail helps, but it removes neither inventions nor errors: the answer must always be verified."
    },
    "qip-q7": {
      "type": "short",
      "accepted": [
        "system prompt",
        "system message"
      ],
      "explanation": "The system prompt sets the assistant’s role and limits. It can be disclosed: it must never contain a secret."
    },
    "qip-q8": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "A specified format, delimited data and removed sensitive information improve results and security. Adding secrets exposes them.",
      "whyWrong": {
        "a": "It exposes the secrets."
      }
    },
    "qip-q9": {
      "type": "single",
      "correct": "c",
      "explanation": "Writing a draft that the analyst reviews saves time without removing responsibility for the analysis.",
      "whyWrong": {
        "d": "That is not a task for an assistant.",
        "b": "That would degrade detection.",
        "a": "That would destroy evidence."
      }
    },
    "qip-q10": {
      "type": "single",
      "correct": "a",
      "explanation": "The query may contain non-existent fields or faulty logic: we understand it, test it on a small scope, then extend.",
      "whyWrong": {
        "b": "Risky.",
        "c": "Risky.",
        "d": "The assistant can be a useful aid."
      }
    },
    "qip-q11": {
      "type": "single",
      "correct": "b",
      "explanation": "The assistant gathers reputation, history and asset context, which speeds up the analyst’s work.",
      "whyWrong": {
        "c": "The investigation is still necessary.",
        "d": "That is not its purpose.",
        "a": "That is not its purpose."
      }
    },
    "qip-q12": {
      "type": "single",
      "correct": "d",
      "explanation": "Qualification commits the organization and depends on business knowledge the model lacks: the human decides, with the elements provided.",
      "whyWrong": {
        "b": "That is not the reason.",
        "c": "That is not accurate.",
        "a": "That is not the reason."
      }
    },
    "qip-q13": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Responsibility for the query, its execution and its consequences remains the analyst’s."
    },
    "qip-q14": {
      "type": "short",
      "accepted": [
        "correlation"
      ],
      "explanation": "Correlation makes it possible to handle one incident rather than a shower of isolated events."
    },
    "qip-q15": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Summarizing, proposing and explaining are aids reviewed by the analyst. Alone closing a major incident is a human decision.",
      "whyWrong": {
        "d": "It is a human decision."
      }
    },
    "qip-q16": {
      "type": "open",
      "model": "I do not run the query. A search query must never modify or delete data, and deleting alerts would destroy evidence and traceability. I remove the delete instruction, reread each clause, verify the fields in the documentation and test the search query on a small scope. I record that the query came from an assistant and the corrections made. If the goal is to reduce noise, I address the causes (rule too sensitive, grouping) with the detection owners rather than erasing alerts.",
      "criteria": [
        "Running the destructive query is refused.",
        "The query is reread, corrected and tested on a small scope.",
        "The origin of the query and the corrections are recorded, or the real need is addressed another way."
      ],
      "explanation": "An assistant can propose anything: the analyst understands before running, in particular if the action is destructive."
    },
    "qip-q17": {
      "type": "single",
      "correct": "d",
      "explanation": "A test set makes it possible to compare answers with expected results, before going live and after every change.",
      "whyWrong": {
        "b": "It measures, it does not fix.",
        "c": "That is not its role.",
        "a": "That is not its role."
      }
    },
    "qip-q18": {
      "type": "single",
      "correct": "b",
      "explanation": "We count the answers that contain false or invented elements (references, figures, facts) on a test set.",
      "whyWrong": {
        "c": "That is not what it measures.",
        "d": "That is not what it measures.",
        "a": "That is not what it measures."
      }
    },
    "qip-q19": {
      "type": "single",
      "correct": "a",
      "explanation": "A document containing a hidden instruction shows whether the assistant follows or ignores it: it is the measure of its robustness.",
      "whyWrong": {
        "b": "That is not the goal.",
        "c": "That is not the goal.",
        "d": "Review is still useful."
      }
    },
    "qip-q20": {
      "type": "single",
      "correct": "c",
      "explanation": "A new model or a modified prompt can degrade certain cases: only a new run of the test set reveals it.",
      "whyWrong": {
        "d": "That is not the reason.",
        "b": "That is not the reason.",
        "a": "That is not the reason."
      }
    },
    "qip-q21": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Human review spots subtle errors and plausible but false answers that automatic measures miss."
    },
    "qip-q22": {
      "type": "truefalse",
      "correct": false,
      "explanation": "The test set covers known cases: it is enriched with the errors encountered and replayed regularly."
    },
    "qip-q23": {
      "type": "short",
      "accepted": [
        "red teaming",
        "red team",
        "red-teaming"
      ],
      "explanation": "Red teaming is done in an authorized framework: it measures the system’s robustness before and after it goes live."
    },
    "qip-q24": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Real cases, hard cases and adversarial cases give an honest measure. Only easy cases give a false sense of assurance.",
      "whyWrong": {
        "c": "A false sense of assurance."
      }
    },
    "qip-q25": {
      "type": "single",
      "correct": "c",
      "explanation": "An assistant with limited tools cannot cause damage outside its scope, even if it is fooled.",
      "whyWrong": {
        "b": "That extends the rights.",
        "d": "That extends the rights.",
        "a": "That removes traceability."
      }
    },
    "qip-q26": {
      "type": "single",
      "correct": "b",
      "explanation": "An external or irreversible action requires validation with a display of exactly what is going to be done.",
      "whyWrong": {
        "d": "No risk.",
        "c": "No risk.",
        "a": "No risk."
      }
    },
    "qip-q27": {
      "type": "single",
      "correct": "d",
      "explanation": "Trials (including adversarial tests) are done on staging data and tools, with no consequence on the real systems.",
      "whyWrong": {
        "b": "That is not the goal.",
        "c": "That is not the goal.",
        "a": "That is not the goal."
      }
    },
    "qip-q28": {
      "type": "single",
      "correct": "a",
      "explanation": "The output can be influenced by hostile content: it is validated (and encoded) before any use in another system.",
      "whyWrong": {
        "b": "Risk of running hostile content.",
        "c": "Risk of running hostile content.",
        "d": "That is not validation."
      }
    },
    "qip-q29": {
      "type": "truefalse",
      "correct": true,
      "explanation": "The trace of calls and their context makes it possible to understand what triggered an action and measure its extent."
    },
    "qip-q30": {
      "type": "short",
      "accepted": [
        "least privilege",
        "the least privilege"
      ],
      "explanation": "Least privilege limits the impact of an error or hijacking: the assistant can only do what its task requires."
    },
    "qip-q31": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Limited tools, confirmations and logs limit and make traceable what an assistant can do. Administrator rights by default extend it.",
      "whyWrong": {
        "d": "It extends the rights."
      }
    },
    "qip-q32": {
      "type": "open",
      "model": "I apply least privilege: the assistant only has the two necessary tools, with limited rights (ticket creation in the planned queues, sending only to authorized recipients). External emails and sensitive content go through a human confirmation that displays the recipient and the exact text. I log every tool call with the context that triggered it and set up alerts on abnormal volumes. I treat the documents read as untrusted, I validate outputs before sending, and I test the set-up with adversarial cases in a staging environment before production.",
      "criteria": [
        "Least privilege is applied to the two tools.",
        "A human confirmation frames sensitive or external sends.",
        "Logging and adversarial tests are mentioned."
      ],
      "explanation": "Several simple controls combine: none is sufficient on its own."
    },
    "qip-q33": {
      "type": "single",
      "correct": "a",
      "explanation": "The policy says which tools are validated, which data may be processed in them and who is responsible.",
      "whyWrong": {
        "d": "That is not its purpose.",
        "c": "Such a list must never be compiled.",
        "b": "That is not its purpose."
      }
    },
    "qip-q34": {
      "type": "single",
      "correct": "d",
      "explanation": "The AI Act classifies systems by level of risk and imposes obligations (robustness, documentation, cybersecurity) on high-risk systems.",
      "whyWrong": {
        "a": "Unrelated.",
        "c": "Unrelated.",
        "b": "Unrelated."
      }
    },
    "qip-q35": {
      "type": "single",
      "correct": "c",
      "explanation": "A quick report makes it possible to assess exposure, request deletion and inform the individuals concerned if necessary.",
      "whyWrong": {
        "b": "That makes the situation worse.",
        "a": "That extends the exposure.",
        "d": "That delays the reaction."
      }
    },
    "qip-q36": {
      "type": "single",
      "correct": "b",
      "explanation": "Classification (public, internal, confidential, personal) determines which tools can process which data.",
      "whyWrong": {
        "a": "That is not the goal.",
        "c": "That is not the goal.",
        "d": "Unrelated."
      }
    },
    "qip-q37": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Without a validated alternative, uses continue without the organization’s knowledge. Better to offer validated tools and a clear rule."
    },
    "qip-q38": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Tools, data and owner make it possible to analyze risks and respond to an incident. A password has no place in it.",
      "whyWrong": {
        "c": "A register never contains a secret."
      }
    },
    "qip-q39": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Training, validated tools and an incident procedure make the policy applicable. Ignoring hidden uses leaves them uncontrolled.",
      "whyWrong": {
        "c": "They would remain uncontrolled."
      }
    },
    "qip-q40": {
      "type": "short",
      "accepted": [
        "gdpr",
        "rgpd"
      ],
      "explanation": "GDPR applies to personal data processed by an AI service: legal basis, information, processors, minimization."
    },
    "qip-q41": {
      "type": "single",
      "correct": "b",
      "explanation": "The analyzed content is data, not an instruction. The assistant must not obey it, and it is useful for it to report the injection attempt.",
      "whyWrong": {
        "c": "Obeying would let an attacker steer the assistant.",
        "a": "Ignoring without reporting loses a clue of attack.",
        "d": "Politeness has no effect on the legitimacy of the instruction."
      }
    },
    "qip-q42": {
      "type": "single",
      "correct": "d",
      "explanation": "Sensitive actions are not executed on an assistant’s decision alone: a human validates, and the action is logged.",
      "whyWrong": {
        "c": "Urgency does not replace validation.",
        "a": "Every action must be logged.",
        "b": "The time of day does not replace human control."
      }
    },
    "qip-q43": {
      "type": "short",
      "accepted": [
        "test set",
        "test suite",
        "regression tests",
        "regression test"
      ],
      "explanation": "A versioned test set is replayed at every change of model, instructions or data; every real incident becomes a new case."
    }
  },
};
