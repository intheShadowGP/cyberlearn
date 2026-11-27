// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "r-certifications-expertes",
  questions: {
    "rce-q1": {
      "type": "single",
      "correct": "b",
      "explanation": "These certifications generally require several years of experience: they assess judgment and the overall view.",
      "whyWrong": {
        "d": "A management certification targets experienced profiles, not beginners.",
        "c": "It assumes a security role, not users with no technical function.",
        "a": "It targets working professionals, not students with no experience."
      }
    },
    "rce-q2": {
      "type": "single",
      "correct": "d",
      "explanation": "The questions describe a context and ask for the best decision: judgment is assessed more than technical action.",
      "whyWrong": {
        "c": "Typing speed has nothing to do with security management.",
        "b": "Memorizing command lines belongs to a technical exam, not a management one.",
        "a": "These exams are vendor-neutral."
      }
    },
    "rce-q3": {
      "type": "single",
      "correct": "c",
      "explanation": "The body asks for experience in security domains; otherwise an intermediate status is granted until it is acquired.",
      "whyWrong": {
        "a": "No medical degree is required: it is professional experience.",
        "b": "That is the opposite.",
        "d": "A video subscription is not a certification requirement."
      }
    },
    "rce-q4": {
      "type": "single",
      "correct": "a",
      "explanation": "You weigh impact, cost, obligations and risk, and you respect governance and the law: the best answer is the most appropriate to the context.",
      "whyWrong": {
        "d": "The most technical option is not always the best aligned with objectives.",
        "c": "Cost is not the only criterion.",
        "b": "It is to be rejected."
      }
    },
    "rce-q5": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Scenario questions ask you to choose the best decision rather than to run a command."
    },
    "rce-q6": {
      "type": "truefalse",
      "correct": false,
      "explanation": "The best answer is the one that fits the context, the risks and the responsibilities, not necessarily the most technical."
    },
    "rce-q41": {
      "type": "single",
      "correct": "c",
      "explanation": "Management arbitrates between options by comparing risk, cost and benefit. It must also see what remains exposed after the measure: the residual risk it accepts in writing.",
      "whyWrong": {
        "b": "A single option removes management’s ability to arbitrate.",
        "a": "Technical detail cannot be compared in business terms: it does not allow a decision.",
        "d": "No measure cancels a risk: promising zero is misleading."
      }
    },
    "rce-q8": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Risks, identities and operations are among the domains. Writing attack tools is not the subject of this exam.",
      "whyWrong": {
        "d": "Outside the exam’s scope."
      }
    },
    "rce-q9": {
      "type": "single",
      "correct": "d",
      "explanation": "It sets the requirements of an ISMS: policies, processes, responsibilities and continuous improvement.",
      "whyWrong": {
        "a": "An encryption protocol is something else: ISO 27001 describes a management system.",
        "b": "It does not define a backup format.",
        "c": "It does not describe a web application firewall product."
      }
    },
    "rce-q10": {
      "type": "single",
      "correct": "b",
      "explanation": "The Lead Implementer builds and keeps the ISMS alive; the Lead Auditor assesses its conformity independently.",
      "whyWrong": {
        "a": "Both titles concern management systems, not writing code.",
        "c": "Neither title concerns training or recruiting users.",
        "d": "Their missions differ."
      }
    },
    "rce-q11": {
      "type": "single",
      "correct": "a",
      "explanation": "It lists the standard’s measures, specifies which are applied or not and justifies each choice from the risk analysis.",
      "whyWrong": {
        "c": "A list of passwords must never appear in this document.",
        "b": "The budget is not the subject of the statement of applicability.",
        "d": "A vacation schedule has no link with the ISMS."
      }
    },
    "rce-q12": {
      "type": "single",
      "correct": "d",
      "explanation": "A finding without evidence can be contested. Documents, records, interviews and observations give verifiable facts.",
      "whyWrong": {
        "c": "Evidence serves to establish facts, not to lengthen the audit.",
        "b": "The report is a deliverable.",
        "a": "The audit is not an opposition: it aims at verifiable findings."
      }
    },
    "rce-q13": {
      "type": "truefalse",
      "correct": true,
      "explanation": "The ISMS evolves: plan, implement, check, improve, with a regular management review."
    },
    "rce-q14": {
      "type": "short",
      "accepted": [
        "isms",
        "smsi"
      ],
      "explanation": "The ISMS is the governance structure in which security measures are decided, tracked and improved."
    },
    "rce-q15": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Documents, interviews and observations are evidence. Rumors are not verifiable evidence.",
      "whyWrong": {
        "b": "They are not verifiable facts."
      }
    },
    "rce-q16": {
      "type": "open",
      "model": "I qualify a gap against the requirement for periodic review of privileged access rights set by the ISMS policy. I cite the evidence: the policy and its calendar, the absence of minutes or validation, the interview with the access manager. I state the impact: obsolete or excessive rights may remain without control. I recommend carrying out the review immediately, naming an owner and a deputy, adding the task to the calendar with an automatic reminder, and verifying closure through a follow-up. I rank the gap by severity and propose a correction deadline.",
      "criteria": [
        "The finding is qualified as a gap against a precise requirement.",
        "The evidence is cited.",
        "A corrective action, an owner and a follow-up are proposed."
      ],
      "explanation": "A good audit finding links a requirement, evidence and a recommendation."
    },
    "rce-q17": {
      "type": "single",
      "correct": "b",
      "explanation": "They attest a targeted technical skill (detection, forensics, penetration testing…).",
      "whyWrong": {
        "a": "They do not replace experience.",
        "d": "They do not give access to everything.",
        "c": "They often require training."
      }
    },
    "rce-q18": {
      "type": "single",
      "correct": "a",
      "explanation": "A specialty visible to teams recruiting in that domain strengthens the profile.",
      "whyWrong": {
        "b": "Watch remains necessary.",
        "d": "No specialization guarantees you will never change careers.",
        "c": "Continuing education remains required."
      }
    },
    "rce-q19": {
      "type": "single",
      "correct": "c",
      "explanation": "An index links notions to references in your materials: it saves time, provided you understood the notions.",
      "whyWrong": {
        "b": "An index helps search; it does not replace reading and understanding the materials.",
        "d": "Getting the questions in advance would be cheating.",
        "a": "An index does not shorten the planned duration: it saves search time."
      }
    },
    "rce-q20": {
      "type": "single",
      "correct": "a",
      "explanation": "Application questions ask you to interpret and choose: finding a page is not enough.",
      "whyWrong": {
        "d": "Not all bodies forbid indexes when documents are allowed.",
        "b": "An index can contain useful notions: it just is not enough.",
        "c": "A well-made index speeds up access to information."
      }
    },
    "rce-q21": {
      "type": "truefalse",
      "correct": true,
      "explanation": "They add to experience and achievements; alone, they are not enough to make an expert."
    },
    "rce-q22": {
      "type": "truefalse",
      "correct": false,
      "explanation": "An index helps search. Without understanding, you know neither what to look for nor how to apply what you find."
    },
    "rce-q23": {
      "type": "short",
      "accepted": [
        "giac"
      ],
      "explanation": "GIAC offers many technical specialty certifications, often tied to training courses."
    },
    "rce-q24": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Practice, an index and mock exams are effective. Revising only titles prepares for nothing.",
      "whyWrong": {
        "b": "It prepares for nothing."
      }
    },
    "rce-q25": {
      "type": "single",
      "correct": "d",
      "explanation": "Achievements and experience prove the skill the title attests.",
      "whyWrong": {
        "c": "That brings nothing.",
        "a": "That is counterproductive.",
        "b": "That is counterproductive."
      }
    },
    "rce-q26": {
      "type": "single",
      "correct": "b",
      "explanation": "Each title is chosen for the target position: without coherence, the investment is lost.",
      "whyWrong": {
        "c": "Employers do not forbid certifications: they judge them by usefulness.",
        "d": "A certification does not disappear in a day.",
        "a": "They do not make exams impossible: they cost time."
      }
    },
    "rce-q27": {
      "type": "single",
      "correct": "c",
      "explanation": "Bodies require training activities over the validity period to keep the title.",
      "whyWrong": {
        "a": "Continuing education does not replace the initial exam.",
        "d": "It does not remove any responsibility from the holder.",
        "b": "It does not reduce validity: it maintains it."
      }
    },
    "rce-q28": {
      "type": "single",
      "correct": "c",
      "explanation": "A solid specialty rests on sound basics: that is what builds a recognized expertise.",
      "whyWrong": {
        "b": "Specialization builds on mastered basics; it does not replace them.",
        "a": "Specializing does not prevent working in a team.",
        "d": "A specialty requires, on the contrary, regular watch."
      }
    },
    "rce-q29": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Reports, tools, contributions and exercises give concrete evidence of what the title attests."
    },
    "rce-q30": {
      "type": "short",
      "accepted": [
        "validity",
        "validity period"
      ],
      "explanation": "The validity period often requires showing continuing education to renew the title."
    },
    "rce-q31": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Targeted certifications, achievements and watch form a coherent profile. A pile of unrelated titles brings nothing.",
      "whyWrong": {
        "b": "It brings nothing."
      }
    },
    "rce-q32": {
      "type": "open",
      "model": "First year: consolidate technical expertise with a specialty certification in incident response or analysis, while leading a crisis exercise. Second year: acquire governance and risk management (platform module M), prepare a management certification and conduct a real risk analysis. Third year: train in audit and ISO/IEC 27001 (implementation or audit), take part in an internal audit and write a security policy. I build a portfolio of achievements, plan renewals and continuing education, and keep a regular watch.",
      "criteria": [
        "A progressive path with specialty then governance is proposed.",
        "Concrete achievements are planned.",
        "Maintenance of titles and watch are mentioned."
      ],
      "explanation": "A coherent path combines targeted titles, achievements and continuing education."
    },
    "rce-q33": {
      "type": "single",
      "correct": "a",
      "explanation": "The life and safety of people come before property and image.",
      "whyWrong": {
        "d": "Licenses are not the priority in a major incident.",
        "c": "Press communication comes after protecting people.",
        "b": "The org chart is not an immediate answer to an incident."
      }
    },
    "rce-q34": {
      "type": "single",
      "correct": "d",
      "explanation": "Neither excess constraints nor insufficient protection: the measure matches the risk it reduces.",
      "whyWrong": {
        "b": "A proportionate measure is not necessarily the most expensive.",
        "c": "A measure that is too strict everywhere is disproportionate and costly.",
        "a": "Choosing without analysis contradicts proportionality."
      }
    },
    "rce-q35": {
      "type": "single",
      "correct": "b",
      "explanation": "You compare the risk reduced with the cost and constraints before deciding.",
      "whyWrong": {
        "c": "Fashion is not a criterion for choosing a measure.",
        "d": "Adopting a costly measure without telling anyone prevents any validation.",
        "a": "Postponing the decision indefinitely leaves the risk unchanged."
      }
    },
    "rce-q36": {
      "type": "single",
      "correct": "a",
      "explanation": "Acceptance is an informed, documented decision by management when treatment is disproportionate to the risk.",
      "whyWrong": {
        "b": "Residual risk can be measured; it is the basis of the acceptance decision.",
        "c": "On the contrary, acceptance must have a designated owner.",
        "d": "The law does not always require accepting a risk."
      }
    },
    "rce-q37": {
      "type": "truefalse",
      "correct": false,
      "explanation": "The security manager informs and recommends; acceptance of the residual risk rests with management or the risk owner."
    },
    "rce-q38": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Reduce, transfer, avoid and explicitly accept are the options. Ignoring without documenting is not a treatment.",
      "whyWrong": {
        "d": "Ignoring without documenting is not a risk treatment option."
      }
    },
    "rce-q39": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Context, obligations and cost-impact underpin the decision. A personal preference is not a criterion.",
      "whyWrong": {
        "b": "A personal preference for a tool does not support a reasoned decision."
      }
    },
    "rce-q40": {
      "type": "short",
      "accepted": [
        "residual risk",
        "the residual risk"
      ],
      "explanation": "Residual risk is documented and explicitly accepted by management or the risk owner."
    }
  },
};
