import type { ScenarioCorrections } from '../../scenarios';

export const corrections: ScenarioCorrections = {
  scenarioId: 'soc-intrusion-ad',
  questions: {
    'sc-ad-q1': {
      type: 'short',
      accepted: ['PC-COMPTA-07', 'pc-compta-07', 'PC COMPTA 07', 'compta-07', 'pccompta07'],
      explanation:
        'Source 1 explicitly associates `10.0.8.44` with the workstation **PC-COMPTA-07**. Making this link is the first correlation: all the `10.0.8.44` lines in source 2 therefore come from this workstation.',
      refs: ['Source 1 (EDR summary) cross-checked with source 2'],
    },
    'sc-ad-q2': {
      type: 'short',
      accepted: ['svc_backup', 'svc backup', 'svcbackup'],
      explanation:
        'It is **svc_backup** (not m.petit) that opens a session at 09:41 from `10.0.8.44` then performs the `4728` addition at 09:43. The attacker pivots from one account to another: spotting *who* acts, not just *what*, is at the heart of correlation.',
      refs: ['Source 2, events 4624 (09:41) and 4728 (09:43)'],
    },
    'sc-ad-q3': {
      type: 'single',
      correct: 'a',
      explanation:
        'Mass service ticket requests (`4769`) in **RC4-HMAC** (`0x17`), a weak encryption, are the signature of **Kerberoasting**: the attacker obtains tickets to crack the service accounts’ passwords offline. Forcing AES and monitoring spikes of RC4 4769 events are countermeasures.',
      whyWrong: {
        b: 'Pass-the-hash reuses an NTLM hash; it does not generate a burst of RC4 4769 events.',
        c: 'DNS poisoning does not affect Kerberos tickets.',
        d: 'Synchronization between controllers does not issue service ticket requests for application SPNs.',
      },
      refs: ['MITRE ATT&CK T1558.003 (Kerberoasting), Credential Access tactic'],
    },
    'sc-ad-q4': {
      type: 'truefalse',
      correct: true,
      explanation:
        'Adding a controlled account to a privileged group such as “Domain Admins” grants the highest rights and lets the attacker **come back** even after an initial remediation: it is both a privilege escalation and a persistence mechanism. This group must be closely monitored.',
      refs: ['MITRE ATT&CK T1098.007 (Account Manipulation: Additional Local or Domain Groups), Persistence and Privilege Escalation tactics'],
    },
    'sc-ad-q5': {
      type: 'single',
      correct: 'a',
      explanation:
        'A beacon (beaconing) is recognized by the **regularity** of the contacts (here every 5 minutes) and their **near-constant size**: it is the rhythm of a command channel, not human traffic. The domain name, the POST method or the low volume are not enough, on their own, to conclude.',
      whyWrong: {
        b: 'A domain name as a destination is commonplace; it is not in itself a beacon indicator.',
        c: 'The POST method is common for legitimate traffic.',
        d: 'A low volume indicates nothing in itself; it is the regularity that is characteristic.',
      },
      refs: ['Source 3 (proxy log): periodicity and size of the requests'],
    },
    'sc-ad-q6': {
      type: 'multi',
      correct: ['a', 'b', 'c'],
      explanation:
        'Proportionate containment combines: isolating the source workstation, cutting off the attacker’s access (disabling the accounts they use and removing m.petit from the sensitive group) and blocking the suspicious outbound destination. These actions stop the attack while preserving the systems and the evidence.',
      whyWrong: {
        d: 'Shutting down DC01 destroys the RAM (volatile evidence) and interrupts a critical service for the whole domain: it is disproportionate and counterproductive.',
      },
      refs: ['NIST SP 800-61r2, “Containment, eradication, recovery” phase'],
    },
    'sc-ad-q7': {
      type: 'single',
      correct: 'a',
      explanation:
        'You **isolate** the workstation (cut the network, not the power) then capture the RAM and the disk before any remediation. Shutting the machine down loses the volatile artifacts; reinstalling or deleting files destroys the evidence needed for the investigation.',
      whyWrong: {
        b: 'Shutting down loses the RAM, which is often decisive (processes, keys, connections).',
        c: 'Reinstalling erases the evidence before the extent of the compromise is understood.',
        d: 'Deleting files destroys evidence and does not guarantee eradication.',
      },
      refs: ['NIST SP 800-61r2; order of volatility (RFC 3227)'],
    },
  },
  debrief: [
    {
      t: 'p',
      text: '**Reconstruction.** The account `m.petit` is compromised by password attempts over NTLM (08:01–08:02, source 2), then used for Kerberoasting in RC4 (08:14). At 09:41, `svc_backup` opens a session from the same workstation `10.0.8.44` (PC-COMPTA-07) and, at 09:43, adds `m.petit` to “Domain Admins” (escalation + persistence). In parallel, PC-COMPTA-07 sends regular outbound traffic to a suspicious destination (source 3): beacon / exfiltration.',
    },
    {
      t: 'list',
      ordered: true,
      items: [
        '**Initial access**: NTLM password attempts (T1110, Credential Access) leading to a valid domain account (T1078.002).',
        '**Credential access**: Kerberoasting in RC4 (T1558.003).',
        '**Persistence / escalation**: addition to a privileged group (T1098.007).',
        '**Command and exfiltration**: regular beacons to an external destination.',
      ],
    },
    {
      t: 'callout',
      kind: 'key',
      text: 'The value of the approach is not recognizing a single event, but **reading and correlating** three sources — who acts, from which workstation, toward which destination — then acting in a **proportionate** way: cut access and isolate without destroying evidence or needlessly interrupting a critical service.',
    },
    {
      t: 'p',
      text: '**Hardening as prevention**: enforce AES and monitor spikes of RC4 `4769` events, alert on changes to administration groups (`4728`), lock accounts after repeated attempts, and partition administration (dedicated workstations and accounts).',
    },
  ],
};
