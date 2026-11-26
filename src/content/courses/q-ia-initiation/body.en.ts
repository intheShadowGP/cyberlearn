import type { CourseBody } from '../../types';
import { questions } from './questions.en';

export const body: CourseBody = {
  courseId: 'q-ia-initiation',
  lesson: {
    intro:
      'Artificial intelligence assistants have entered everyday life: writing, summarizing, searching, programming. They also help defense, but they make mistakes, they retain what we entrust to them and they also serve attackers. This course, with no prerequisites, gives the landmarks to use them with discernment: what an AI is, what it is used for in cybersecurity, what its limits are, how to protect your data and which new threats to recognize.',
    sections: [
      {
        id: 'notions',
        title: 'What is an AI?',
        blocks: [
          { t: 'p', text: '**Artificial intelligence** covers systems that perform tasks associated with human intelligence: recognizing, classifying, predicting, writing. Today, most rely on **machine learning**.' },
          {
            t: 'table',
            head: ['Notion', 'In one sentence', 'Example'],
            rows: [
              ['**AI**', 'System that performs an “intelligent” task', 'Assistant, image recognition'],
              ['**Machine learning**', 'The system learns from examples rather than from hand-written rules', 'Spam filter'],
              ['**Model**', 'The result of learning: it produces an answer from an input', 'Malicious file detector'],
              ['**Large language model (LLM)**', 'Model that produces plausible text from a given text', 'Writing assistant'],
            ],
          },
          { t: 'def', term: 'Training data', text: 'Examples from which the model learns. The quality of this data determines the quality of the model: false or unbalanced examples give a false or biased model.' },
          { t: 'def', term: 'Hallucination', text: 'False but plausible answer produced by a language model: an invented fact, a reference that does not exist, presented with confidence.' },
          { t: 'list', items: ['**An AI computes the most plausible continuation**, it does not “know” in the human sense.', '**Its quality depends on the data** that trained it.', '**It can be wrong** with great confidence.'] },
          { t: 'callout', kind: 'key', text: 'An AI is a powerful but fallible tool: you use it to save time, never to avoid checking.' },
        ],
      },
      {
        id: 'usages',
        title: 'What is AI used for in cybersecurity?',
        blocks: [
          { t: 'p', text: 'AI is already present in many defense tools. It shines on repetitive, high-volume tasks, where it saves analysts time.' },
          {
            t: 'table',
            head: ['Use', 'What the AI does', 'Role of the human'],
            rows: [
              ['**Filtering**', 'Spots unwanted mail and suspicious messages', 'Examines doubtful cases'],
              ['**Anomaly detection**', 'Flags what deviates from usual behavior', 'Checks whether the deviation is an incident'],
              ['**Alert triage**', 'Groups and summarizes related alerts', 'Decides what to do next'],
              ['**Writing assistance**', 'Proposes a summary or a search query', 'Reviews and corrects'],
            ],
          },
          { t: 'def', term: 'Human in the loop', text: 'Principle whereby a person validates the important decisions proposed by the AI, with the elements that justify them.' },
          { t: 'list', items: ['**AI proposes, the human decides** for high-impact actions (isolating a workstation, deleting an account).', '**Evidence** accompanies each suggestion.', '**Reversible, low-risk actions** can be automated, with monitoring.'] },
          { t: 'callout', kind: 'tip', text: 'The harder a decision is to undo, the more human validation is essential.' },
        ],
      },
      {
        id: 'limites',
        title: 'The limits: errors, inventions and bias',
        blocks: [
          { t: 'p', text: 'A well-written answer is not an accurate answer. Knowing an AI’s limits avoids costly mistakes.' },
          {
            t: 'table',
            head: ['Limit', 'What happens', 'Reflex'],
            rows: [
              ['**Hallucination**', 'Invented fact, figure or reference', 'Verify in a reliable source'],
              ['**Bias**', 'The model reproduces the imbalances of its data', 'Be wary of generalized answers'],
              ['**Drift**', 'Performance drops when reality changes', 'Re-evaluate regularly'],
              ['**Overreliance**', 'The answer is accepted without checking', 'Reread, cross-check, ask for sources'],
            ],
          },
          {
            t: 'example',
            title: 'A vulnerability that does not exist',
            blocks: [
              { t: 'p', text: 'To justify an urgent update, an assistant cites a credible-looking vulnerability identifier and a precise version number. A search in the official database finds no trace of that identifier. The answer was invented: you must always find the source.' },
            ],
          },
          { t: 'list', items: ['**Verify** facts, figures and references.', '**Do not copy** an answer as is into a report.', '**Report** errors so that the tool is re-evaluated.'] },
          { t: 'callout', kind: 'warn', text: 'The more precise and self-assured an answer is, the stronger the temptation to believe it: that is exactly where you must verify.' },
        ],
      },
      {
        id: 'donnees',
        title: 'Protecting your data with AI tools',
        blocks: [
          { t: 'p', text: 'What you write in an online assistant is sent to a provider. Depending on its terms, it may keep it, analyze it or reuse it.' },
          {
            t: 'table',
            head: ['Data', 'Can it be entered into a public tool?', 'Why'],
            rows: [
              ['Password, access key', '**Never**', 'A secret that is entered is a secret that is exposed'],
              ['Customers’ personal data', '**No**, unless a validated tool', 'GDPR applies'],
              ['Confidential document', '**No**, unless a validated tool', 'Risk of leakage'],
              ['General question about a protocol', '**Yes**', 'No sensitive data'],
            ],
          },
          { t: 'def', term: 'Minimization', text: 'Principle of using only the data strictly needed for a given purpose. The less you enter, the less there is to protect.' },
          { t: 'list', items: ['**Remove** names, addresses and identifiers before submitting a text.', '**Only use** the tools authorized by the organization.', '**Never enter** a secret or confidential data in a public tool.'] },
          { t: 'callout', kind: 'legal', text: 'Personal data entered in an AI service remains subject to GDPR: the organization remains responsible for what it sends there.' },
        ],
      },
      {
        id: 'menaces',
        title: 'Threats amplified by AI',
        blocks: [
          { t: 'p', text: 'Attackers also use AI: better-written messages, imitated voices and faces, personalization at scale. The right reflexes stay the same, but the warning signs change.' },
          {
            t: 'table',
            head: ['Threat', 'What AI changes', 'Reflex'],
            rows: [
              ['**Phishing**', 'Error-free, personalized messages in every language', 'Check the sender, do not click under pressure'],
              ['**Deepfake**', 'Voice or video imitating a person', 'Confirm through a second known channel'],
              ['**CEO fraud**', 'Urgent transfer request with an imitated voice', 'Validation procedure, call back on a known number'],
              ['**Prompt injection**', 'Text slipped in to hijack an assistant', 'Do not give the assistant rights it should not have'],
            ],
          },
          { t: 'def', term: 'Deepfake', text: 'Audio or video content falsified by artificial intelligence to make a person say or do something. It is more and more convincing.' },
          { t: 'list', items: ['**Urgency, secrecy, bypassing a procedure**: three warning signals, whatever the quality of the message.', '**Second channel**: call the person back on a known number before acting.', '**Procedures**: every payment request goes through a validation circuit.'] },
          { t: 'callout', kind: 'key', text: 'An impeccable message is no longer a sign of seriousness: you rely on context and procedure, not on form.' },
        ],
      },
      {
        id: 'verifier',
        title: "A method to check an AI answer",
        blocks: [
          { t: 'p', text: "An AI assistant produces text that is **plausible**, not text that is **guaranteed accurate**. Faced with a technical answer (command, configuration, explanation of an alert), always apply the same routine before using it." },
          { t: 'list', ordered: true, items: ["**Reread**: does the answer really address the question asked, with the right product and version?", "**Cross-check**: compare the important points with an official source (vendor documentation, ANSSI, NIST, OWASP).", "**Test safely**: run a command or script first in an isolated environment, never directly in production.", "**Understand**: if you cannot explain what a command does, do not run it.", "**Record**: note what was checked, by whom and when, before sharing the result."] },
          {
            t: 'table',
            caption: "Reasonable uses and precautions",
            head: ["Task", "Reasonable use", "Essential precaution"],
            rows: [
              ["Understand a concept", "Ask for an explanation or an example", "Cross-check definitions with an official source"],
              ["Summarize a long report", "Get a first summary to review", "Do not upload a confidential document to an unapproved service"],
              ["Write a command or script", "Get a draft", "Test it in an isolated environment and review it line by line"],
              ["Interpret an alert", "Form hypotheses", "Never conclude without logs and evidence"],
            ],
          },
          { t: 'callout', kind: 'warn', text: "An AI may cite references, command options or vulnerability numbers **that do not exist**. Check every reference in the original source before reusing it." },
        ],
      },
      {
        id: 'cadre-usage',
        title: "Usage framework: rules to know in an organization",
        blocks: [
          { t: 'p', text: "Using AI at work is not only a technical matter: it is also about **data**, **accountability** and **internal rules**." },
          {
            t: 'table',
            head: ["Topic", "Question to ask", "Reflex"],
            rows: [
              ["Data", "Is what I type personal, confidential or strategic?", "Enter no sensitive data into an unapproved tool; anonymize when possible"],
              ["Tools", "Is the tool approved by my organization?", "Use validated services; avoid “hidden” use (shadow AI)"],
              ["Accountability", "Who answers for a mistake caused by an AI answer?", "The person who uses the answer remains responsible: review and validate"],
              ["Law", "Which rules apply?", "GDPR for personal data; the European AI regulation (Regulation (EU) 2024/1689, applying in phases) for AI systems"],
              ["Traceability", "Could I explain where this result came from?", "Keep the request, the answer and the verification performed"],
            ],
          },
          { t: 'callout', kind: 'tip', text: "When in doubt about a piece of data, the safest rule is simple: **if you would not post it on a public website, do not type it into an unapproved AI tool**." },
        ],
      },
    ],
    useCases: [
      'Use an authorized assistant to summarize a public text, then review the result.',
      'Recognize an urgent transfer request and verify it through a second channel.',
      'Remove personal data from a text before submitting it to a validated assistant.',
    ],
    commonMistakes: [
      "Pasting a log excerpt, a contract or a customer list into a public assistant.",
      "Running a command suggested by an AI without understanding or testing it.",
      'Copying an AI answer into a report without verifying it.',
      'Entering a password or a confidential document into a public tool.',
      'Believing that an error-free message is necessarily legitimate.',
      'Letting an AI take an irreversible decision alone.',
      'Trusting a voice or a video without confirmation.',
    ],
    bestPractices: [
      'Verify facts, figures and references.',
      'Only enter non-sensitive data into public tools.',
      'Use the tools validated by the organization.',
      'Keep the human in the loop for important decisions.',
      'Confirm any unusual request through a second channel.',
    ],
    keyPoints: [
      "An AI answer is plausible, not guaranteed: reread, cross-check, test, record.",
      'An AI learns from examples and can be wrong with great confidence.',
      'AI assists analysts; the human decides.',
      'Secrets and confidential data have no place in a public tool.',
      'AI improves phishing and falsified content: verify through a second channel.',
      'Verify before believing, minimize before entering.',
    ],
  },
  practice: [
    {
      id: 'classer-usages',
      kind: 'guided',
      title: 'Sort uses of AI',
      context: [
        { t: 'p', text: 'Four proposals: (a) summarizing a long event log for the analyst; (b) letting the AI alone delete accounts it judges suspicious; (c) asking the AI to propose a search query that the analyst will review; (d) pasting into a public assistant an export of customers with their contact details to have it sorted.' },
      ],
      steps: ['Indicate for each proposal whether it is reasonable, to be framed or to be avoided.', 'Justify each answer in one sentence.', 'Propose a simple rule to decide who validates an AI action.'],
    },
    {
      id: 'donnees-prompt',
      kind: 'analysis',
      labId: 'ai-data-sharing-lab',
      title: 'Analysis: what can be sent to a public assistant?',
      context: [
        {
          t: 'table',
          head: ['Request', 'Content'],
          rows: [
            ['1', 'Explain how the DNS protocol works'],
            ['2', 'Here is the administrator’s password, check that it is strong: …'],
            ['3', 'Summarize this customer contract (full text with names and addresses)'],
            ['4', 'Give me a list of good practices for choosing a password'],
          ],
        },
      ],
      steps: ['Classify each request (allowed, to modify, forbidden).', 'Rewrite the requests to modify so as to remove sensitive data.', 'State the general rule to remember.'],
    },
    {
      id: 'verifier-reponse',
      kind: 'case',
      title: 'Case: an AI answer to verify',
      context: [
        { t: 'p', text: 'To prepare a note for management, an assistant answers: “Vulnerability XYZ-2024-9999 affects all routers of the Delta brand, version 7.2. Apply update 7.2.9 immediately.” You do not know this identifier.' },
      ],
      steps: ['State what you verify before acting.', 'Describe where to look and what proves the information is reliable.', 'Specify what you write in the note if you cannot find the source.'],
    },
  ],
  questions,
  resources: [
    { title: 'Security recommendations for a generative AI system', source: 'ANSSI', url: 'https://cyber.gouv.fr/publications/recommandations-de-securite-pour-un-systeme-dia-generative' },
    { title: 'Artificial intelligence: CNIL advice', source: 'CNIL', url: 'https://www.cnil.fr/fr/intelligence-artificielle' },
    { title: 'Phishing: what to do?', source: 'Cybermalveillance.gouv.fr', url: 'https://www.cybermalveillance.gouv.fr/' },
  ],
};
