// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "r-preparation-fondamentaux",
  questions: {
    "rpf-q1": {
      "type": "single",
      "correct": "c",
      "explanation": "The outline (or objectives guide) describes what the exam assesses: domains, relative weights and expected skills.",
      "whyWrong": {
        "a": "Those questions are confidential.",
        "b": "Previous candidates’ scores are not in the official outline.",
        "d": "Former candidates’ home addresses are not published in an exam outline."
      }
    },
    "rpf-q2": {
      "type": "single",
      "correct": "a",
      "explanation": "It guides how revision time is distributed: a heavily weighted domain deserves more attention, without excusing coverage of the others.",
      "whyWrong": {
        "d": "The exam price does not depend on domain weighting.",
        "c": "The session date is not set by the weighting.",
        "b": "The weighting does not designate the exam center."
      }
    },
    "rpf-q3": {
      "type": "single",
      "correct": "d",
      "explanation": "Bodies update their exams: revising an outdated syllabus wastes time.",
      "whyWrong": {
        "a": "The outline does not change at each reading: it evolves by versions.",
        "b": "An outline stays valid for a period, not a single day.",
        "c": "Each body publishes its own."
      }
    },
    "rpf-q4": {
      "type": "single",
      "correct": "b",
      "explanation": "We list the objectives and self-assess on each: this diagnosis underlies the study plan.",
      "whyWrong": {
        "d": "Memorizing answers is not the use of the outline.",
        "a": "Choosing an exam center is not part of the outline.",
        "c": "Practice remains essential."
      }
    },
    "rpf-q5": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Only the certifying body is authoritative on the content of its exam: third-party summaries may be outdated or inaccurate."
    },
    "rpf-q6": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Weightings differ: they are read in the outline to distribute revision time."
    },
    "rpf-q7": {
      "type": "short",
      "accepted": [
        "weighting",
        "weight"
      ],
      "explanation": "Weighting indicates a domain’s relative weight, for example as a percentage of the number of questions."
    },
    "rpf-q8": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Domains, objectives and test arrangements are published. The real questions are confidential.",
      "whyWrong": {
        "c": "They are confidential."
      }
    },
    "rpf-q9": {
      "type": "single",
      "correct": "a",
      "explanation": "The mapping shows where to find the associated courses and labs and reveals what remains to be completed.",
      "whyWrong": {
        "c": "The platform issues no certification.",
        "d": "No domain is removed.",
        "b": "The official guide remains the reference."
      }
    },
    "rpf-q10": {
      "type": "single",
      "correct": "b",
      "explanation": "Module B covers networking; M governance, Q AI and R certifications.",
      "whyWrong": {
        "c": "That is governance.",
        "d": "That is AI.",
        "a": "Those are certifications."
      }
    },
    "rpf-q11": {
      "type": "single",
      "correct": "c",
      "explanation": "Module M deals with governance, risk management and compliance.",
      "whyWrong": {
        "a": "That is networking.",
        "b": "That is Linux.",
        "d": "That is cryptography."
      }
    },
    "rpf-q12": {
      "type": "single",
      "correct": "d",
      "explanation": "A coverage gap is filled with the official guide, a reference text or a lab.",
      "whyWrong": {
        "b": "That leaves a gap.",
        "a": "The outline is not modified.",
        "c": "That leaves a gap."
      }
    },
    "rpf-q13": {
      "type": "truefalse",
      "correct": true,
      "explanation": "It helps acquire the skills these exams assess; only the certifying bodies award their titles."
    },
    "rpf-q14": {
      "type": "short",
      "accepted": [
        "o",
        "module o"
      ],
      "explanation": "Module O deals with identity, authentication and access control."
    },
    "rpf-q15": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "The official guide, practice and courses tied to the outline are legitimate. Stolen questions are forbidden.",
      "whyWrong": {
        "c": "They are forbidden."
      }
    },
    "rpf-q16": {
      "type": "open",
      "model": "I start by rereading the domain’s objectives in the official outline and mapping them to module E of the platform. I follow the matching courses, do the labs for the practical skills (computing hashes, encryption, certificates) and write summary sheets. For objectives that are not covered, I use the body’s official guide. I measure my progress with practice questions for the domain, keep an error log and review the notions by spaced repetition. At the end I check that my score reaches the target level before booking the exam.",
      "criteria": [
        "The outline’s objectives are mapped to the platform’s modules.",
        "Complementary official or practical resources are cited.",
        "Tracking (practice questions, error log, spaced repetition) is planned."
      ],
      "explanation": "The mapping turns an exam outline into a precise study path."
    },
    "rpf-q17": {
      "type": "single",
      "correct": "a",
      "explanation": "Without a diagnosis, you revise what you already know: measuring makes it possible to prioritize what is missing.",
      "whyWrong": {
        "c": "Buying many books before any diagnosis scatters effort.",
        "d": "That is premature.",
        "b": "A quick reading does not replace a diagnosis by domain."
      }
    },
    "rpf-q18": {
      "type": "single",
      "correct": "b",
      "explanation": "Reviewing a notion just before it is forgotten, at increasingly spaced intervals, fixes memory more durably.",
      "whyWrong": {
        "c": "Spaced repetition spreads over time: it is not done in one night.",
        "a": "Practice remains necessary.",
        "d": "Revision remains necessary."
      }
    },
    "rpf-q19": {
      "type": "single",
      "correct": "d",
      "explanation": "Noting the notion, the cause of the error and the correction turns each mistake into a point of progress.",
      "whyWrong": {
        "c": "The error log is not for counting study hours.",
        "b": "It complements them.",
        "a": "Copying the manual’s answers is not the point of the log."
      }
    },
    "rpf-q20": {
      "type": "single",
      "correct": "c",
      "explanation": "A timed mock exam reveals the weak domains and the ability to last through the test.",
      "whyWrong": {
        "d": "The questions are confidential.",
        "a": "The outline remains the reference.",
        "b": "There is no provisional title."
      }
    },
    "rpf-q21": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Handling a tool or a configuration anchors notions better than passive reading."
    },
    "rpf-q22": {
      "type": "truefalse",
      "correct": false,
      "explanation": "A single reading leaves few traces: you must practice, self-assess and review the notions at regular intervals."
    },
    "rpf-q23": {
      "type": "short",
      "accepted": [
        "spaced repetition",
        "spaced repetitions"
      ],
      "explanation": "Spaced repetition is one of the best-established memorization techniques."
    },
    "rpf-q24": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Regularity, variety and priority to weak points give better results than a last-minute cram.",
      "whyWrong": {
        "d": "A last-minute cram retains little."
      }
    },
    "rpf-q25": {
      "type": "single",
      "correct": "d",
      "explanation": "Flagging and coming back avoids wasting time and lets you handle the accessible questions first.",
      "whyWrong": {
        "b": "That sacrifices the other questions.",
        "a": "Leaving the rest blank loses easy points.",
        "c": "Answering everything at random does not replace reasoning."
      }
    },
    "rpf-q26": {
      "type": "single",
      "correct": "c",
      "explanation": "Several options are plausible: they are ranked by priority and you choose the one the context makes most appropriate.",
      "whyWrong": {
        "b": "These words signal that one option outweighs the others, not that they are equal.",
        "a": "These words change the question’s meaning: it is not unimportant.",
        "d": "They do not make the answer trivial: you must rank."
      }
    },
    "rpf-q27": {
      "type": "single",
      "correct": "b",
      "explanation": "The scenario describes an incident or an architecture: you must reason and choose the most appropriate action.",
      "whyWrong": {
        "c": "Copying a definition is not a scenario question.",
        "a": "A scenario provides context, not a calculation without context.",
        "d": "A question with no possible answer does not exist in the exam."
      }
    },
    "rpf-q28": {
      "type": "single",
      "correct": "a",
      "explanation": "Elimination narrows the field and helps see what distinguishes the last two options.",
      "whyWrong": {
        "c": "Eliminating options does not change the official outline.",
        "d": "You must read the question.",
        "b": "Elimination does not avoid rereading: it helps choose."
      }
    },
    "rpf-q29": {
      "type": "truefalse",
      "correct": true,
      "explanation": "The options can mislead: understanding the question first limits traps."
    },
    "rpf-q30": {
      "type": "short",
      "accepted": [
        "performance-based",
        "performance based",
        "pbq"
      ],
      "explanation": "Performance-based questions assess a concrete skill: configuration, analysis, troubleshooting in a simulated environment."
    },
    "rpf-q31": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Distribution, flagging and review give a better result. Getting stuck on one question sacrifices several.",
      "whyWrong": {
        "c": "It sacrifices the others."
      }
    },
    "rpf-q32": {
      "type": "open",
      "model": "I distribute the time before starting (average time per question, with a reserve for review). I read each question in full before the options, spot the keywords (“most”, “first”) and eliminate clearly wrong options. I flag difficult questions and move on: I will come back to them with the remaining time. For scenarios, I reason in priorities (contain before eradicating, for example). I take a break when allowed, regularly watch the time and keep the last ten minutes to reread flagged questions. I prepared this strategy with timed mock exams.",
      "criteria": [
        "Time management (distribution, review reserve) is described.",
        "Reading the question and eliminating options are mentioned.",
        "Flagging difficult questions and reviewing are planned."
      ],
      "explanation": "A strategy rehearsed in a mock exam reduces stress and avoids careless errors."
    },
    "rpf-q33": {
      "type": "single",
      "correct": "b",
      "explanation": "Dumps are questions from real sessions circulating in breach of the confidentiality agreement.",
      "whyWrong": {
        "d": "Study outlines published by the body are not dumps.",
        "a": "Official free mock exams are not dumps.",
        "c": "Lab exercises are not leaked real questions."
      }
    },
    "rpf-q34": {
      "type": "single",
      "correct": "c",
      "explanation": "Using real questions circulated illegally is fraud: the result can be cancelled and the candidate sanctioned.",
      "whyWrong": {
        "a": "Dumps are not avoided because they are easy to read.",
        "d": "Their cost is not the reason to avoid them.",
        "b": "Dumps do contain answers: it is their origin that is illegal."
      }
    },
    "rpf-q35": {
      "type": "single",
      "correct": "a",
      "explanation": "Its value for an employer lies in the trust that can be placed in the skills the title attests.",
      "whyWrong": {
        "d": "That would be fraud.",
        "b": "A certification does not validate membership in a group.",
        "c": "It does not guarantee passing future exams."
      }
    },
    "rpf-q36": {
      "type": "single",
      "correct": "d",
      "explanation": "Accepting or distributing exposes you and the colleague to sanctions; refusing protects the value of the title.",
      "whyWrong": {
        "c": "That is forbidden.",
        "b": "That extends the fraud.",
        "a": "That funds the fraud."
      }
    },
    "rpf-q37": {
      "type": "truefalse",
      "correct": false,
      "explanation": "You retain answers without understanding the notions: you pass the exam without being able to practice, and expose yourself to sanctions."
    },
    "rpf-q38": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Cancellation, a ban and reputational damage are possible sanctions. Fraud brings no recognition.",
      "whyWrong": {
        "c": "Fraud destroys trust."
      }
    },
    "rpf-q39": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Exam confidentiality, honesty and continuing education are expected. Sharing the subject breaks the agreement.",
      "whyWrong": {
        "a": "It breaks the exam agreement."
      }
    },
    "rpf-q40": {
      "type": "short",
      "accepted": [
        "continuing education",
        "continuous education",
        "continuing professional development"
      ],
      "explanation": "Continuing education (training credits, conferences, publications) is required by many bodies to keep the title."
    }
  },
};
