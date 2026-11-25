import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'd-windows-defense-avancee',
  practice: {
    'regle-detection': {
      blocks: [
        { t: 'p', text: 'The rule targets event **4624** (network logon) on accounts whose name contains “admin”: it does **not look at replication**. It would fire at every network logon of a legitimate administration account (shares, monitoring, scripts): many false positives, and it would **miss** extraction through replication, which opens no session of that type for an “admin” account.' },
        { t: 'code', lang: 'text', caption: 'Corrected rule', code: 'title: Directory replication by a non-controller account\nlogsource: { product: windows, service: security }\ndetection:\n  selection:\n    EventID: 4662\n    Properties|contains:\n      - \'1131f6aa-9c07-11d1-f79f-00c04fc2dcd2\'\n      - \'1131f6ad-9c07-11d1-f79f-00c04fc2dcd2\'\n  filter_dc:\n    SubjectUserName|endswith: \'$\'\n  condition: selection and not filter_dc\nlevel: high' },
        { t: 'list', items: ['Prerequisites: enable “directory service access” auditing (successes) on the domain controllers and collect the 4662 events into the SIEM; maintain the list of legitimate controller accounts (or the pattern of their name) and of authorized synchronization accounts.', 'Tests: replay an extraction through replication in a lab (offensive team, simulation tool) and check the alert; observe several days of normal operation to measure false positives (backup, synchronization, monitoring).'] },
        { t: 'list', items: ['Quality: false positive rate, detection delay, coverage of the technique in the ATT&CK mapping, review of the exclusions at a fixed date.', 'Associated response: a high-level alert triggers the isolation of the account and of the source machine, and the verification of the replication rights granted.'] },
      ],
    },
    'plan-identite': {
      blocks: [
        {
          t: 'table',
          head: ['Priority', 'Measure', 'Deployment', 'Indicator'],
          rows: [
            ['1', 'Dedicated, non-synchronized privileged cloud accounts; conditional access and temporary elevation (PIM)', 'Create the accounts, migrate the roles, remove the roles from synchronized accounts', '% of privileged roles held by dedicated cloud accounts'],
            ['2', 'Administration workstations for tier 0 accounts, authentication policies in pilot', 'Pilot accounts, break-glass account, then generalization', 'Number of tier 0 logons outside PAWs'],
            ['3', 'NTLM audit, then staged restriction; LDAP and SMB signing', '30-day audit, dependency list, restriction per server', 'NTLM volume, number of clients without signing'],
            ['4', 'Machine account quota set to zero; review of sensitive ACLs and AdminSDHolder', 'Join process through a dedicated account', 'Machine accounts created by ordinary users'],
            ['5', 'Directory detection rules (4662, 5136, 4887), decoys, tests', 'DS Access auditing, tested Sigma rules, one purple team exercise', 'Techniques covered, false positives per week'],
          ],
        },
        { t: 'p', text: 'The order follows the risk/effort ratio: privileged cloud roles on synchronized accounts expose the cloud to a local compromise; the exposure of tier 0 accounts is the most frequent compromise path; NTLM and signing are handled by audit then in stages to avoid outages; detection then makes it possible to measure the effect of the other measures.' },
        { t: 'callout', kind: 'warn', text: 'Never impose a restriction without a prior audit or a break-glass account: too brutal a lockdown of administration accounts or of NTLM can prevent administering the domain at the very moment it is needed.' },
      ],
    },
    'reponse-annuaire': {
      blocks: [
        { t: 'p', text: 'The use of replication rights by an ordinary account from a workstation is a **strong sign of extraction of the directory’s secrets**; the GPO modification and the unknown scheduled tasks indicate an already **advanced takeover** (code deployment on the servers). The incident must be treated as a directory compromise.' },
        { t: 'list', ordered: true, items: ['**Qualify**: confirm the 4662 (account, source, rights), check that the account never had these rights legitimately, look for the account’s other actions (4624, 5136, 4728), list the servers affected by the task.', '**Contain**: isolate the source workstation without powering it off, disable the account, purge sessions and tickets, unlink or restore the modified GPO, isolate the three servers, block unusual outbound communications.', '**Collect**: capture the memory of the workstation and servers, keep logs, copies of the task and the GPO, compute hashes, maintain the chain of custody.', '**Assess the extent**: the attacker may have copied all the domain’s secrets; consider as exposed the privileged and service accounts and the domain’s ticket-signing secret; look for persistences (ACLs, AdminSDHolder, certificates, keys, SID history).'] },
        { t: 'list', items: ['Eradication and rebuild: reset the exposed secrets (privileged and service passwords, double reset of the ticket-signing account), remove all the persistences found, rebuild the doubtful servers, restore the directory from a healthy backup if integrity is uncertain, recheck the PKI.', 'Lessons learned: timeline, entry cause, replication rights to restrict, improved detection rule, purple team exercise on this scenario, update of the threat model.'] },
        { t: 'callout', kind: 'tip', text: 'Order matters: collect before rebuilding, disable the persistence before deleting its files, reset the secrets once control is regained, otherwise the attacker reuses the ones they copied.' },
      ],
    },
  },
};
