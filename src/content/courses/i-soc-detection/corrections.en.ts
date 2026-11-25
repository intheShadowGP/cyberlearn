// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "i-soc-detection",
  questions: {
    "soc-q1": {
      "type": "single",
      "correct": "b",
      "explanation": "The SIEM (Security Information and Event Management) centralizes, normalizes and correlates logs from multiple sources, and produces alerts according to rules. The firewall is one log source among others.",
      "whyWrong": {
        "a": "The firewall is a log source; it does not correlate the logs of other equipment.",
        "d": "A password manager does not produce correlated security alerts.",
        "c": "The DNS server provides queries to analyze, but does not correlate them."
      }
    },
    "soc-q2": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "An EDR collects fine telemetry (processes, files, registry, network), detects suspicious behavior and allows remote action (isolation, stopping a process).",
      "whyWrong": {
        "c": "BGP routing belongs to network equipment, not to a security agent on an endpoint."
      }
    },
    "soc-q3": {
      "type": "short",
      "accepted": [
        "soar",
        "the soar"
      ],
      "explanation": "SOAR: Security Orchestration, Automation and Response. It automates repetitive tasks (enrichment, ticket creation, blocking) according to playbooks, freeing up analysis time."
    },
    "soc-q4": {
      "type": "single",
      "correct": "a",
      "explanation": "A false negative is an undetected malicious activity. It is the most dangerous case, because it is invisible: it is reduced by improving log and rule coverage, and through threat hunting.",
      "whyWrong": {
        "d": "A false positive is an alert on legitimate activity.",
        "c": "A true negative is legitimate activity that triggers nothing.",
        "b": "A true positive is a real attack that triggers an alert."
      }
    },
    "soc-q5": {
      "type": "truefalse",
      "correct": false,
      "explanation": "MFA fatigue attacks (repeated notifications until acceptance), session-token theft and phishing proxies bypass classic MFA. The context (place, time, device) still has to be analyzed."
    },
    "soc-q6": {
      "type": "single",
      "correct": "c",
      "explanation": "No physical journey allows going from Lyon to Singapore in 40 minutes. Legitimate explanations (corporate VPN exiting abroad, cloud relay) must nevertheless be checked before concluding.",
      "whyWrong": {
        "a": "Spraying consists of trying a common password on many accounts.",
        "b": "A denial of service targets availability, not an account’s authentication.",
        "d": "Lateral movement describes an attacker moving from one machine to another."
      }
    },
    "soc-q16": {
      "type": "single",
      "correct": "d",
      "explanation": "A documented closure allows peer review, rule improvement (noise reduction) and quick resumption if the alert later turns out to be linked to an incident.",
      "whyWrong": {
        "b": "Without a trace, the analysis can be neither reviewed nor reused.",
        "a": "The rule is tuned (documented exclusion); it is not deleted over a single alert.",
        "c": "A message to the user does not replace documenting the decision."
      }
    },
    "soc-q17": {
      "type": "single",
      "correct": "c",
      "explanation": "Spotting almost all attacks = few false negatives = high recall. Many unjustified alerts = many false positives = low precision. Precision and recall often move in opposite directions: tuning a rule means choosing this trade-off.",
      "whyWrong": {
        "b": "That would be a very specific rule missing attacks, the opposite of the statement.",
        "a": "Many false positives rule out high precision.",
        "d": "Unjustified alerts are precisely false positives."
      }
    },
    "soc-q7": {
      "type": "single",
      "correct": "b",
      "explanation": "A hash changes by recompiling, an IP or a domain in a few minutes. Changing their techniques forces the attacker to relearn and retool: it is the top of the pyramid of pain.",
      "whyWrong": {
        "c": "A hash changes as soon as the file is recompiled.",
        "d": "An IP address can be replaced in a few minutes.",
        "a": "A domain is easily and cheaply replaced."
      }
    },
    "soc-q8": {
      "type": "truefalse",
      "correct": true,
      "explanation": "ATT&CK tactics (initial access, execution, persistence, privilege escalation, defense evasion, credential access, discovery, lateral movement, collection, command and control, exfiltration, impact…) represent the objectives; each technique is tied to them."
    },
    "soc-q9": {
      "type": "short",
      "accepted": [
        "sigma",
        "sigma rules",
        "the sigma format"
      ],
      "explanation": "Sigma describes a rule (log source, selection, condition) in YAML. Converters translate it into the query languages of SIEMs (Splunk SPL, KQL, Elastic, etc.)."
    },
    "soc-q10": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Hashes, domains and specific registry keys are observable artifacts: IOCs.",
      "whyWrong": {
        "a": "A technique describes a behavior: it is a TTP, not an IOC."
      }
    },
    "soc-q15": {
      "type": "open",
      "model": "The firewall only sees network flows passing through it: phishing and code execution on endpoints, local privilege escalation, credential theft, lateral movement between machines on the same segment, abuse of legitimate accounts and attacks on cloud or SaaS services would remain invisible. Priorities: 1) Active Directory logs (authentications, group changes); 2) EDR or Sysmon telemetry from endpoints and servers; 3) cloud identity logs (Entra ID, Google) and email logs; 4) web proxy and DNS; 5) VPN and remote access.",
      "criteria": [
        "At least three categories of invisible attacks are cited.",
        "Authentication logs (AD or cloud) are among the priorities.",
        "Endpoint telemetry (EDR, Sysmon) is proposed."
      ],
      "explanation": "Detection coverage is thought through starting from the techniques to detect, then the sources that make them visible."
    },
    "soc-q11": {
      "type": "single",
      "correct": "a",
      "explanation": "Containment aims to stop the spread: network isolation, disabling accounts, blocking flows. Eradication (removing the threat) comes next.",
      "whyWrong": {
        "d": "Preparation takes place before the incident.",
        "b": "Lessons learned come after recovery.",
        "c": "Recovery restores service, after containment and eradication."
      }
    },
    "soc-q12": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Article 33 of the GDPR requires notification to the supervisory authority (the CNIL in France) within 72 hours, unless the breach is unlikely to result in a risk to people’s rights and freedoms. Internal documentation of the breach is mandatory in all cases."
    },
    "soc-q13": {
      "type": "open",
      "model": "1) Immediately isolate the server through the EDR (encryption in progress justifies the urgency), without powering it off, to preserve memory. 2) Identify the account and the process behind the encryption; disable that account. 3) Check whether other hosts show the same activity (EDR/SIEM query) and isolate them. 4) Protect the backups: check they are offline or immutable, cut the attacker’s access to the backup servers. 5) Trigger the crisis cell according to the playbook (management, legal, communication) via an out-of-band channel. 6) Start the timeline and evidence collection.",
      "criteria": [
        "Isolating the server is the first action, without powering it off.",
        "The responsible account or process is identified and neutralized.",
        "The search for other affected hosts is planned.",
        "Protection of the backups is mentioned.",
        "Escalation to crisis management is planned."
      ],
      "explanation": "Facing encryption in progress, containment comes first: every minute counts. Preserving the backups is often what decides the recovery."
    },
    "soc-q14": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Preparation covers everything that must exist before the incident: tested playbooks, backups, logs, contacts and crisis communication means.",
      "whyWrong": {
        "c": "Removing persistence belongs to eradication, during the incident."
      }
    },
    "soc-q18": {
      "type": "single",
      "correct": "d",
      "explanation": "Event 4720 is generated when a user account is created. 4624 signals a successful logon, 4625 a failure and 4688 a process creation.",
      "whyWrong": {
        "a": "4625 signals a failed logon.",
        "c": "4688 signals a process creation.",
        "b": "4624 signals a successful logon."
      }
    },
    "soc-q19": {
      "type": "single",
      "correct": "d",
      "explanation": "Correlating events from several sources requires consistent timestamps (NTP, preferably in UTC). Otherwise the order of events is wrong and the analysis may reach a wrong conclusion.",
      "whyWrong": {
        "b": "Synchronization has no effect on log volume.",
        "c": "It replaces neither protection nor encryption of the logs.",
        "a": "Deduplication is a matter of correlation, not of the clock."
      }
    },
    "soc-q20": {
      "type": "truefalse",
      "correct": false,
      "explanation": "A source’s silence is a signal: the collector went down, a rule can no longer fire, or the attacker disabled logging. The health of collection is monitored."
    },
    "soc-q21": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Useful logs are correctly time-stamped, complete and protected (sent off the machine, restricted rights). Collecting everything without choice blows up costs and drowns useful signals.",
      "whyWrong": {
        "b": "Collecting indiscriminately is costly and dilutes signals; sources are chosen according to the techniques to cover."
      }
    },
    "soc-q22": {
      "type": "short",
      "accepted": [
        "normalization",
        "normalisation",
        "the normalization",
        "normalizing"
      ],
      "explanation": "Normalization puts different formats (firewall, Windows, cloud) under a common schema, which lets you write rules independent of the source and correlate more easily."
    },
    "soc-q23": {
      "type": "single",
      "correct": "a",
      "explanation": "A rule is useless without data: without the Security log (or EDR telemetry) of the workstations, the technique is not covered. Technique, log source and rule are mapped to spot the gaps.",
      "whyWrong": {
        "c": "A rule without a data source never fires.",
        "d": "The firewall does not see local actions on a workstation.",
        "b": "Local account creation is a known persistence technique (ATT&CK)."
      }
    },
    "soc-q24": {
      "type": "single",
      "correct": "b",
      "explanation": "A good rule starts from a precise hypothesis (which technique, which trace in which source). We then check that the data exists, then write, test, tune and deploy.",
      "whyWrong": {
        "a": "Severity is decided once the rule is understood and tested.",
        "d": "Deploying without testing produces noise or blind spots.",
        "c": "Neighboring rules may be complementary: they are not disabled on principle."
      }
    },
    "soc-q25": {
      "type": "single",
      "correct": "c",
      "explanation": "The targeted activity is replayed to check that the rule fires, then the rule is applied to historical data to estimate false positives. This avoids useless alerts and blind spots.",
      "whyWrong": {
        "d": "The test does not touch retained logs.",
        "b": "Documentation remains necessary for review and tuning.",
        "a": "A rule helps analysts; it does not replace them."
      }
    },
    "soc-q26": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Observation mode (alert not notified) produces statistics on real firings: thresholds and exclusions are tuned before the analysts are involved."
    },
    "soc-q27": {
      "type": "single",
      "correct": "c",
      "explanation": "MTTD measures the ability to see an attack quickly. MTTR measures the response or resolution time; alert volume and costs are other indicators.",
      "whyWrong": {
        "b": "This number measures workload, not detection delay.",
        "a": "That is recovery time, which falls under MTTR.",
        "d": "Cost is not a detection indicator."
      }
    },
    "soc-q28": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Noise is reduced by tuning rules (documented, dated exclusions), grouping related alerts and measuring precision. Disabling without analysis can create blind spots.",
      "whyWrong": {
        "d": "A noisy rule may protect against a real threat: it is tuned, not removed without study."
      }
    },
    "soc-q29": {
      "type": "short",
      "accepted": [
        "exclusion list",
        "exclusions",
        "exclusion",
        "allowlist",
        "allow list",
        "whitelist",
        "allowlisting",
        "exception list"
      ],
      "explanation": "An exclusion list (or allowlist) removes noise from a known legitimate activity. It must be documented, dated and re-examined: an exclusion that is too broad creates a blind spot."
    },
    "soc-q30": {
      "type": "single",
      "correct": "d",
      "explanation": "If the exclusion covers more than the targeted legitimate activity (for example a whole directory or account), an attacker can slip in without triggering an alert. We document, date and re-examine.",
      "whyWrong": {
        "a": "It is the opposite: fewer alerts, hence more risk of false negatives.",
        "b": "The SIEM applies the exclusion without difficulty; the risk is functional.",
        "c": "The logs are still collected, but the alert is no longer raised."
      }
    },
    "soc-q31": {
      "type": "single",
      "correct": "a",
      "explanation": "L1 handles the flow of alerts: enrichment, qualification, documented closure or escalation to L2 for deeper investigation.",
      "whyWrong": {
        "d": "Network architecture belongs to other teams.",
        "c": "Contracts are not part of triage.",
        "b": "Application development is not a SOC role."
      }
    },
    "soc-q32": {
      "type": "single",
      "correct": "b",
      "explanation": "The EDR is an agent on the workstation or server (processes, files, registry); the IDS or NDR analyzes network traffic. The two are complementary.",
      "whyWrong": {
        "d": "It is the opposite.",
        "c": "An EDR is not a backup tool.",
        "a": "The IDS does not replace authentication logs."
      }
    },
    "soc-q33": {
      "type": "single",
      "correct": "b",
      "explanation": "The context (parent process, account, actions just before and after) distinguishes an administration script from a malicious execution. We neither power off the machine nor close without checking.",
      "whyWrong": {
        "c": "PowerShell is legitimate, but also heavily used by attackers: we check.",
        "a": "A restart destroys memory and evidence.",
        "d": "Waiting lets a possible attack progress."
      }
    },
    "soc-q34": {
      "type": "single",
      "correct": "a",
      "explanation": "Severity combines impact and likelihood. A domain controller holds the directory: the impact is far higher. With equal likelihood, we start with it.",
      "whyWrong": {
        "b": "The impact of a test workstation is low.",
        "d": "Order of arrival does not reflect risk.",
        "c": "Two identical alerts do not have the same impact depending on the asset concerned."
      }
    },
    "soc-q35": {
      "type": "truefalse",
      "correct": false,
      "explanation": "An alert is a signal to qualify: it may be a false positive. An incident is a qualified alert requiring a response; a confirmed compromise requires proof that the attacker succeeded."
    },
    "soc-q36": {
      "type": "single",
      "correct": "c",
      "explanation": "A tactic answers “why” (initial access, persistence, lateral movement…). A technique describes “how” the objective is reached, with variants called sub-techniques.",
      "whyWrong": {
        "b": "Malware is a tool, not a tactic.",
        "d": "An IP address is an IOC.",
        "a": "ATT&CK describes behaviors, not patches."
      }
    },
    "soc-q37": {
      "type": "short",
      "accepted": [
        "eradication",
        "the eradication"
      ],
      "explanation": "Eradication removes what the attacker left behind (accounts, scheduled tasks, software) and fixes the exploited flaw. It follows containment and precedes recovery."
    },
    "soc-q38": {
      "type": "single",
      "correct": "d",
      "explanation": "PowerShell is a widely used administration tool: without context (parent process, arguments, user), the rule fires constantly. The selection is refined, as in PowerShell launched by Office.",
      "whyWrong": {
        "c": "Sigma converts without difficulty for a simple rule.",
        "a": "The rule does not tell good from bad; it does not depend on a list of threats.",
        "b": "It will, on the contrary, fire very often."
      }
    },
    "soc-q39": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Lessons learned draw the conclusions: root causes, new detections, updated playbooks. Isolating machines belongs to containment, during the incident.",
      "whyWrong": {
        "d": "Isolation belongs to the containment phase."
      }
    },
    "soc-q40": {
      "type": "single",
      "correct": "a",
      "explanation": "An out-of-band channel (phones, independent messaging) protects crisis exchanges from an attacker who might read the emails. It is prepared and tested before the incident.",
      "whyWrong": {
        "b": "A compromised mail system may be read by the attacker.",
        "d": "A public message is not an internal crisis channel.",
        "c": "Without coordination, the response is ineffective."
      }
    }
  },
};
