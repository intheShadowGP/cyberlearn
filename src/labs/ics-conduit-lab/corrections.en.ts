import type { LabCorrections } from '../../content/types';

export const corrections: LabCorrections = {
  "labId": "ics-conduit-lab",
  "questions": {
    "conduitlab-q1": {
      "type": "short",
      "accepted": [
        "5",
        "five"
      ],
      "explanation": "Five flows: direct remote desktop to the supervision (no. 4), a PLC going out to the Internet (no. 5), direct Modbus from the enterprise to the PLCs (no. 6), undeclared EtherNet/IP (no. 7) and a flow from the safety system to the enterprise (no. 8)."
    },
    "conduitlab-q2": {
      "type": "single",
      "correct": "a",
      "explanation": "A safety instrumented system protects people and the installation: it must stay isolated from business IT. A flow leaving it toward the enterprise breaks that isolation and can serve as a path to the safety function itself. The other deviations are serious but do not directly touch safety.",
      "whyWrong": {
        "b": "Serious (direct access to the supervision), but it can be fixed by going through the DMZ.",
        "c": "To investigate: could be explained by a migration or an undocumented need.",
        "d": "Serious (a PLC going out to the Internet), but it does not touch the safety function."
      }
    },
    "conduitlab-q3": {
      "type": "single",
      "correct": "a",
      "explanation": "Remote administration access must go through a controlled jump point in the DMZ, with strong authentication and traceability. Adding the flow to the list would normalize a bypass; the low volume does not make it harmless.",
      "whyWrong": {
        "b": "Normalizing a bypass removes the protection.",
        "c": "Fourteen connections are enough for an attacker.",
        "d": "Changing the port does not change the nature of the flow."
      }
    },
    "conduitlab-q4": {
      "type": "truefalse",
      "correct": false,
      "explanation": "A conduit controls zones, direction and port, not content. A malicious write command on the allowed Modbus conduit goes through: this is why protocol inspection (function codes, ranges) and behavior-deviation detection are added."
    },
    "conduitlab-q5": {
      "type": "single",
      "correct": "a",
      "explanation": "An undeclared flow is a deviation to qualify: it may be legitimate (new equipment, migration) or not. You investigate with operations, then declare a precise conduit (with inspection) or block, planning for the risk of stopping the process.",
      "whyWrong": {
        "b": "A sudden block can stop the process: the decision is made with operations.",
        "c": "An unplanned internal flow remains a deviation to understand.",
        "d": "Declaring without investigation makes the audit pointless."
      }
    }
  },
  "debrief": [
    {
      "t": "h",
      "text": "Matching flows against conduits"
    },
    {
      "t": "table",
      "head": [
        "No.",
        "Flow",
        "Conduit",
        "Qualification"
      ],
      "rows": [
        [
          "1",
          "Enterprise → DMZ, 443",
          "C1",
          "Compliant"
        ],
        [
          "2",
          "DMZ → Supervision, 4840",
          "C2",
          "Compliant"
        ],
        [
          "3",
          "Supervision → Control, 502",
          "C3",
          "Compliant (content to monitor)"
        ],
        [
          "4",
          "Enterprise → Supervision, 3389",
          "—",
          "**Deviation**: direct access, to replace with a bastion in the DMZ"
        ],
        [
          "5",
          "Control → Internet, 443",
          "—",
          "**Deviation**: a PLC must not go out; to investigate"
        ],
        [
          "6",
          "Enterprise → Control, 502",
          "—",
          "**Deviation**: direct access to PLCs through an unauthenticated protocol"
        ],
        [
          "7",
          "Supervision → Control, 44818",
          "—",
          "**Deviation**: undeclared flow, to qualify"
        ],
        [
          "8",
          "Safety → Enterprise, 443",
          "—",
          "**Most serious deviation**: safety system isolation broken"
        ]
      ]
    },
    {
      "t": "list",
      "items": [
        "**Handling order**: no. 8, then nos. 6 and 5, then no. 4, then no. 7.",
        "**Limit**: the three compliant flows say nothing about their content: add protocol inspection.",
        "**Method**: explicit policy, continuous passive measurement, deviations qualified with operations."
      ]
    },
    {
      "t": "callout",
      "kind": "key",
      "title": "Remember",
      "text": "A conduit policy is only useful if it is regularly compared with real traffic. Each deviation is a question put to operations before it is an alert."
    }
  ]
};
