// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "r-certifications-preparation",
  questions: {
    "cert-q1": {
      "type": "single",
      "correct": "b",
      "explanation": "ISC2 CC is designed as an entry-level certification with no required experience. CISSP and CISM target experienced profiles (security and management); GCIH is a GIAC certification specialized in incident handling.",
      "whyWrong": {
        "d": "The CISSP requires several years of experience to be fully awarded.",
        "c": "The CISM targets information security management, with management experience."
      }
    },
    "cert-q2": {
      "type": "truefalse",
      "correct": true,
      "explanation": "The OSCP exam consists of compromising machines within a time limit, then submitting a professional report. Exact rules change over time: check OffSec’s website."
    },
    "cert-q3": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "e"
      ],
      "explanation": "eJPT (entry level), PNPT (practical exam including Active Directory and a report) and PenTest+ (knowledge and scenarios) all cover penetration testing.",
      "whyWrong": {
        "d": "ISO 27001 Lead Implementer is about implementing an ISMS: governance.",
        "a": "The CISM belongs to information security management."
      }
    },
    "cert-q4": {
      "type": "short",
      "accepted": [
        "comptia",
        "comptia inc"
      ],
      "explanation": "CompTIA is an organization independent of product vendors; its certifications are valid for three years and are renewed through continuing education."
    },
    "cert-q5": {
      "type": "single",
      "correct": "a",
      "explanation": "The ISO 27001 Lead Auditor certification trains for conducting ISMS audits according to ISO 19011 principles and the requirements applicable to certification bodies.",
      "whyWrong": {
        "b": "The Lead Implementer trains for implementing the ISMS, not for auditing it."
      }
    },
    "cert-q6": {
      "type": "truefalse",
      "correct": true,
      "explanation": "ISC2 requires five years of cumulative professional experience in at least two of the eight CISSP domains (one year can be offset by a recognized degree or certification)."
    },
    "cert-q7": {
      "type": "single",
      "correct": "d",
      "explanation": "CySA+ covers detection, threat analysis and response: consistent for a SOC analyst. Defensive GIAC certifications are another recognized option.",
      "whyWrong": {
        "a": "The OSCP is an offensive practical exam, oriented toward penetration testing.",
        "b": "Network+ validates networking knowledge, useful but not centered on detection."
      }
    },
    "cert-q8": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Concrete evidence of practice makes an application stand out: write-ups, contributions and documented projects show what the candidate can actually do.",
      "whyWrong": {
        "e": "Using or sharing copied exam questions violates certification bodies’ rules and can lead to revocation.",
        "b": "Accumulating credentials without a career project is not a signal of targeted skills."
      }
    },
    "cert-q9": {
      "type": "short",
      "accepted": [
        "isc2",
        "associate of isc2",
        "(isc)2",
        "isc²"
      ],
      "explanation": "The candidate becomes an “Associate of ISC2” and has a period of time to gain the required experience and obtain the full CISSP."
    },
    "cert-q10": {
      "type": "single",
      "correct": "c",
      "explanation": "Active recall (testing yourself) and spaced reviews are among the learning techniques best supported by cognitive science research."
    },
    "cert-q11": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Dumps violate the confidentiality agreements candidates sign. Using them can lead to exam cancellation and revocation of the certification, and does not build real skill."
    },
    "cert-q12": {
      "type": "multi",
      "correct": [
        "a",
        "d",
        "e"
      ],
      "explanation": "The official blueprint, hands-on practice and analyzed mock exams form a solid preparation.",
      "whyWrong": {
        "c": "Last-minute cramming produces fragile memorization.",
        "b": "Memorizing answers does not build skill and risks revocation if they come from dumps."
      }
    },
    "cert-q13": {
      "type": "short",
      "accepted": [
        "spaced repetition",
        "spaced repetitions",
        "repetition espacee",
        "répétition espacée"
      ],
      "explanation": "Spaced repetition schedules reviews just before forgetting. Flashcards and regular mock-exam draws are ways to apply it."
    },
    "cert-q14": {
      "type": "open",
      "model": "A) Lawyer → compliance: ISC2 CC for the basic technical culture, then ISO 27001 Lead Implementer; modules M (governance, GDPR, NIS2), O (identity), then fundamentals A and B to talk with technical teams. B) Experienced systems administrator → CISO: CISSP (their experience probably meets the prerequisites) or ISO 27001 Lead Implementer; modules M, I (SOC steering), L, O. C) CTF student → pentest: eJPT then OSCP; modules H, F, C, D, G, with the offensive labs and published write-ups.",
      "criteria": [
        "Each profile receives a certification consistent with their target career and level.",
        "The proposed modules match the target career.",
        "Profile B’s experience is taken into account for the CISSP."
      ],
      "explanation": "The choice starts from the target career and the starting point, not from how famous the certification is."
    },
    "cert-q15": {
      "type": "open",
      "model": "Weeks 1–2: read the official blueprint, self-assess by domain, take a diagnostic mock exam. Weeks 3–12: one or two domains per week (course + platform labs, 4 h; questions and active recall, 2 h), spaced review of previous domains (15 min per session). Weeks 13–14: weekly timed mock exams and error analysis. Weeks 15–16: targeted review of the weak points identified by the dashboard, a final mock exam, rest the day before. Exam registration scheduled from week 2 to commit.",
      "criteria": [
        "The plan starts from the blueprint and a diagnosis.",
        "Practice and active recall are built into every week.",
        "Reviews are spaced and mock exams are planned.",
        "The weekly hour budget is respected."
      ],
      "explanation": "A realistic, regular plan is more effective than an ambitious one abandoned after three weeks."
    },
    "cert-q16": {
      "type": "truefalse",
      "correct": false,
      "explanation": "CyberAcadémie is not affiliated with any certification body and does not issue any official certification. It prepares you for the corresponding knowledge and skills."
    },
    "cert-q17": {
      "type": "single",
      "correct": "b",
      "explanation": "The OSCP (Offensive Security Certified Professional) is issued by OffSec, following the PEN-200 course and a practical exam."
    },
    "cert-q18": {
      "type": "single",
      "correct": "a",
      "explanation": "The CISSP is issued by ISC2, which also offers ISC2 CC at entry level. ISACA, on the other hand, issues the CISM and the CISA."
    },
    "cert-q19": {
      "type": "single",
      "correct": "d",
      "explanation": "A practical exam (OSCP, PNPT) puts the candidate in an environment to compromise or analyze and ends with a report. A multiple-choice exam (Security+, CISSP, ISC2 CC) validates the breadth of knowledge. The two are complementary."
    },
    "cert-q20": {
      "type": "single",
      "correct": "c",
      "explanation": "Vendor-neutral certifications (CompTIA, ISC2…) validate knowledge that applies whatever the product. Vendor or manufacturer certifications (Cisco CCNA, for example) validate mastery of a specific ecosystem."
    },
    "cert-q21": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Security+ is vendor-neutral: it validates general security knowledge. It is Cisco, a network equipment manufacturer, that offers the CCNA and CyberOps Associate certifications."
    },
    "cert-q22": {
      "type": "single",
      "correct": "b",
      "explanation": "The CISM, issued by ISACA, is aimed at information security managers. eJPT is a practical entry-level penetration testing certification, Network+ covers networking and GCIA intrusion analysis."
    },
    "cert-q23": {
      "type": "single",
      "correct": "c",
      "explanation": "GIAC (Global Information Assurance Certification) groups many specialized certifications, notably defensive ones: GCIH (incident handling) and GCIA (intrusion analysis)."
    },
    "cert-q24": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "e"
      ],
      "explanation": "The Lead Implementer (implementing an ISMS), the CISM (management) and the CISSP (eight domains, experienced profiles) are classified under governance in the course overview.",
      "whyWrong": {
        "d": "eJPT is a practical penetration testing certification.",
        "a": "Network+ validates networking skills."
      }
    },
    "cert-q25": {
      "type": "single",
      "correct": "a",
      "explanation": "A SOC analyst career is built on solid networking and systems foundations, a foundational certification, then a detection certification. The OSCP is offensive and the CISSP requires experience."
    },
    "cert-q26": {
      "type": "single",
      "correct": "d",
      "explanation": "Application pentesting relies on web security, code security and pentest methodology (modules F, G, H), with a hands-on progression of eJPT then OSCP."
    },
    "cert-q27": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Aiming too high without the basics wastes time and discourages. Advanced certifications assume technical prerequisites that must be built first."
    },
    "cert-q28": {
      "type": "single",
      "correct": "a",
      "explanation": "Regularity matters more than intensity: 5 to 8 hours per week beats irregular marathon sessions, which produce fragile memorization."
    },
    "cert-q29": {
      "type": "short",
      "accepted": [
        "blueprint",
        "exam blueprint",
        "official blueprint",
        "exam objectives",
        "objectives",
        "referentiel",
        "référentiel"
      ],
      "explanation": "The blueprint (the exam objectives) published by the certification body defines precisely what will be assessed. It is used to map your gaps before planning."
    },
    "cert-q30": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Dumps violate the confidentiality agreements accepted before the exam. Certification bodies can invalidate a result or revoke a certification, regardless of passing the exam."
    },
    "cert-q31": {
      "type": "single",
      "correct": "b",
      "explanation": "A mock exam under real conditions reveals gaps and trains time management. It does not reproduce the official questions and does not deliver any attestation."
    },
    "cert-q32": {
      "type": "single",
      "correct": "d",
      "explanation": "Error analysis turns the mock exam into a learning tool: you identify the missing concepts, then rework them in labs and through active recall."
    },
    "cert-q33": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Active recall means retrieving information from memory (questions, oral explanation, rebuilt diagram). Rereading and highlighting are passive activities and less effective.",
      "whyWrong": {
        "b": "Repeated rereading gives an impression of mastery without requiring retrieval.",
        "e": "Highlighting remains passive: no retrieval from memory is required."
      }
    },
    "cert-q34": {
      "type": "truefalse",
      "correct": false,
      "explanation": "The intervals lengthen: for example 1 day, 3 days, 1 week, 1 month. Information is reviewed just before it is forgotten, which strengthens long-term retention."
    },
    "cert-q35": {
      "type": "single",
      "correct": "c",
      "explanation": "Most bodies require continuing education credits over the validity period (three years for CompTIA certifications, for example) to keep the credential active."
    },
    "cert-q36": {
      "type": "truefalse",
      "correct": false,
      "explanation": "CompTIA certifications are valid for three years; they are renewed through continuing education activities or a new certification. Always check the current rules on the certification body’s website."
    },
    "cert-q37": {
      "type": "single",
      "correct": "d",
      "explanation": "ISO/IEC 17024 governs the certification of persons (impartiality, assessment, maintenance of certification). ISO/IEC 27001 specifies the ISMS and ISO 19011 gives audit guidelines: those are other standards."
    },
    "cert-q38": {
      "type": "multi",
      "correct": [
        "c",
        "d",
        "e"
      ],
      "explanation": "A certification’s value is judged on what it assesses, its recognition in the target career and its upkeep conditions. Price alone or popularity say nothing about relevance.",
      "whyWrong": {
        "a": "Cost is a practical parameter, but never the only relevance criterion.",
        "b": "Popularity does not indicate what the exam really validates."
      }
    },
    "cert-q39": {
      "type": "single",
      "correct": "c",
      "explanation": "Passing a multiple-choice exam does not prove the ability to carry out the expected tasks. Lab practice consolidates concepts and prepares for interviews and scenario-based tests."
    },
    "cert-q40": {
      "type": "open",
      "model": "Network administrator: Cisco CCNA or CompTIA Network+ (networking skills used directly, a base for moving toward network security). SOC analyst: CompTIA CySA+ or a defensive GIAC certification (detection, analysis, response). Compliance lawyer: ISO 27001 Lead Implementer, or ISC2 CC as a first step to acquire technical culture. Justification: each choice starts from the job performed and takes into account the experience level, the recognition of the credential in the field and the renewal conditions.",
      "criteria": [
        "Each certification matches the employee’s job.",
        "The choice is justified by the skills assessed and the starting level.",
        "Renewal conditions or recognition are mentioned."
      ],
      "explanation": "A good recommendation links the certification to the job performed, the starting level and the credential’s value for the employer."
    },
    "cert-q41": {
      "type": "short",
      "accepted": [
        "cc",
        "isc2 cc"
      ],
      "explanation": "ISC2 CC (Certified in Cybersecurity) is ISC2’s entry-level certification, with no prior experience required; it prepares for more advanced certifications such as the CISSP."
    },
    "cert-q42": {
      "type": "single",
      "correct": "b",
      "explanation": "The CCNA validates mastery of networks built with Cisco equipment. The CISM is about management, the PNPT about pentesting and GCIH about incident handling."
    },
    "cert-q43": {
      "type": "truefalse",
      "correct": false,
      "explanation": "A certification validates knowledge or skills at a given moment; it does not replace experience. A certification plus a portfolio of achievements weighs more than a certification alone."
    },
    "cert-q44": {
      "type": "single",
      "correct": "a",
      "explanation": "A portfolio provides verifiable evidence of practice, which recruiters review alongside certifications. It replaces neither the exam nor the résumé."
    },
    "cert-q45": {
      "type": "multi",
      "correct": [
        "c",
        "d",
        "e"
      ],
      "explanation": "CySA+, CyberOps Associate and GCIA cover detection, analysis and response. The OSCP is offensive and the Lead Auditor belongs to governance.",
      "whyWrong": {
        "a": "The OSCP validates offensive skills.",
        "b": "The Lead Auditor concerns ISMS auditing."
      }
    },
    "cert-q46": {
      "type": "single",
      "correct": "d",
      "explanation": "The “Associate of ISC2” status is granted to someone who passes the exam without yet having the required professional experience; they have a period of time to complete it and obtain the full credential."
    }
  },
};
