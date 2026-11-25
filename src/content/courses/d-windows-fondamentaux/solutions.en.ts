import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'd-windows-fondamentaux',
  practice: {
    'lire-comptes': {
      blocks: [
        {
          t: 'table',
          head: ['Finding', 'Why it is worrying'],
          rows: [
            ['Four accounts in the Administrators group, including an intern and a contractor', 'An intern does not need administrator rights: a mistake or a compromised account gives complete control of the workstation'],
            ['`support-externe` as a permanent administrator', 'An external account with permanent rights is a lasting entry door; its access must be time-limited and traced'],
            ['Intern’s password that never expires, unchanged since 2021', 'An old password may have been disclosed or reused; nothing forces its renewal'],
            ['Intern’s account still active', 'If the internship is over, the account must be disabled'],
          ],
        },
        { t: 'list', items: ['Recommended organization: one standard account per person; a single, separate administration account, used only to administer; the contractor’s access granted for the duration of an intervention, then removed.', 'Checks: re-read `net localgroup Administrators`, check that `stagiaire` is disabled or standard, check recent activity (events 4624 and 4672) and record the list of administrators for the next review.'] },
        { t: 'callout', kind: 'tip', text: 'The principle of least privilege applies to accounts as to files: everyone has the rights they need, for as long as they need them.' },
      ],
    },
    'poste-neuf': {
      blocks: [
        { t: 'list', ordered: true, items: ['Accounts: create a standard account for the person and a separate administrator account for the preparation; long, unique password, Windows Hello with PIN, multifactor authentication on the online account.', 'Updates: install all the available updates and leave automatic updates enabled.', 'Protections: check that Defender and the firewall are active on the three profiles, that SmartScreen is active, that account control is at its default level.', 'Data: enable BitLocker (or device encryption) and keep the recovery key off the laptop; set up File History or an online backup, and test the restore.', 'Handover: record the configuration and remind the person not to disable the protections and to report any loss immediately.'] },
        { t: 'callout', kind: 'info', text: 'Encryption protects a stolen powered-off laptop; backup protects against failure or ransomware. One does not replace the other.' },
      ],
    },
    'serie-echecs': {
      blocks: [
        { t: 'p', text: 'Thirty-eight failures in three minutes from the same address, then a type 3 (network) success: someone **guessed the password** of the `comptable` account, probably by automated attempts. A few seconds later, a `powershell.exe` is launched by `services.exe`: the attacker installed or started a service that runs code. The workstation must be considered **compromised**.' },
        { t: 'list', items: ['First actions: isolate the workstation from the network without powering it off, reset the account’s password (and that of any account that used it elsewhere), keep the logs and look for the service created (event 7045) and the persistence.', 'Identify the source `10.0.4.77`: is it a workstation on the internal network? It must be isolated too, since it may itself be compromised or be the origin of the attack.'] },
        { t: 'list', items: ['Prevention: account lockout after a few failures, long passwords, multifactor authentication, limiting network access to the workstation (firewall), disabling useless remote access services.', 'Detection: an alert on a high number of 4625 followed by a 4624, and collection of the logs to a server.'] },
      ],
    },
  },
};
