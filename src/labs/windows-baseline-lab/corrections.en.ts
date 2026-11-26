import type { LabCorrections } from '../../content/types';

export const corrections: LabCorrections = {
  "labId": "windows-baseline-lab",
  "questions": {
    "winlab-q1": {
      "type": "short",
      "accepted": [
        "4",
        "four"
      ],
      "explanation": "Four deviations: unencrypted disk, SMBv1 enabled, Remote Desktop enabled and the user being a local administrator. The other four settings are compliant."
    },
    "winlab-q2": {
      "type": "single",
      "correct": "a",
      "explanation": "A user who is a member of local administrators runs programs with elevated rights: a booby-trapped file opened by mistake can then modify the system, disable protections and install itself durably. Least privilege limits this impact.",
      "whyWrong": {
        "b": "Administrator rights do not prevent opening documents.",
        "c": "The firewall keeps working, but an administrator can disable it.",
        "d": "Rights have no direct effect on speed."
      }
    },
    "winlab-q3": {
      "type": "single",
      "correct": "a",
      "explanation": "Without encryption, someone who removes the disk or boots another system can read the files, whatever the session password. Disk encryption protects data at rest.",
      "whyWrong": {
        "b": "The lack of encryption does not prevent starting.",
        "c": "The firewall is not tied to disk encryption.",
        "d": "The session password stays in place but does not protect a disk read outside the system."
      }
    },
    "winlab-q4": {
      "type": "truefalse",
      "correct": false,
      "explanation": "The baseline precisely expects autorun to be disabled: the observed value matches the expected value, so the setting is compliant. “Disabled setting” must not be confused with “deviation”."
    },
    "winlab-q5": {
      "type": "single",
      "correct": "a",
      "explanation": "You first handle the deviations that expose the most (severity 3). A 42% score is not “fine”: it masks major deviations. Remote Desktop (severity 2) follows.",
      "whyWrong": {
        "b": "The severity 1 setting is compliant here, and would not come first anyway.",
        "c": "An overall score does not exempt you from handling major deviations.",
        "d": "The order of the list is not a priority criterion."
      }
    }
  },
  "debrief": [
    {
      "t": "h",
      "text": "Deviations found, by severity"
    },
    {
      "t": "table",
      "head": [
        "Severity",
        "Setting",
        "Expected",
        "Observed",
        "Measure"
      ],
      "rows": [
        [
          "3",
          "Disk encryption",
          "Enabled",
          "Disabled",
          "Enable BitLocker with recovery key backup"
        ],
        [
          "3",
          "SMBv1",
          "Disabled",
          "Enabled",
          "Disable the protocol"
        ],
        [
          "3",
          "Local administrator",
          "No",
          "Yes",
          "Remove the user from the group, occasional elevation if needed"
        ],
        [
          "2",
          "Remote Desktop",
          "Disabled",
          "Enabled",
          "Disable or restrict through a gateway"
        ]
      ]
    },
    {
      "t": "list",
      "items": [
        "**Weighted score**: 42% compliance, despite four of eight settings being compliant.",
        "**Priority**: severity first, not capture order.",
        "**Prevention**: apply the baseline through group policy or a management tool, and recheck regularly."
      ]
    },
    {
      "t": "callout",
      "kind": "key",
      "title": "Remember",
      "text": "A security baseline turns an impression (“the workstation is well configured”) into a verifiable measure. Deviations are handled by severity, not by order of appearance."
    }
  ]
};
