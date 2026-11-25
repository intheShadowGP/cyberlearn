import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'l-cloud-initiation',
  practice: {
    'classer-services': {
      blocks: [
        {
          t: 'table',
          head: ['#', 'Model', 'To be secured by the company'],
          rows: [
            ['1', 'IaaS', 'Operating system and patches, firewall, administration accounts, installed software, data and backups'],
            ['2', 'SaaS', 'Accounts and strong authentication, sharing rights, data, departure of staff'],
            ['3', 'PaaS', 'The application’s code and its dependencies, secrets, accounts, data'],
          ],
        },
        { t: 'p', text: 'In all three cases, the company remains responsible for **who has access** and for **its data**: this is the part that never disappears in the shared responsibility model.' },
      ],
    },
    'verifier-partage': {
      blocks: [
        { t: 'list', items: ['**Public link with no end date**: anyone who receives or finds it can read the contracts.', '**Former employees**: access kept although they left the company.', '**Personal account**: if the employee leaves, loses the account or is hacked, the data is lost or exposed.'] },
        { t: 'list', ordered: true, items: ['Move the folder to an organization space.', 'Delete the public link and share by name with the people concerned, read-only when that is enough.', 'Remove the former employees’ access.', 'Define an owner for the folder and a validity period for the shares.'] },
        { t: 'p', text: 'Regular check: quarterly review of shares, alert on the creation of public links, automatic removal of access when an employee leaves.' },
      ],
    },
    'cle-publiee': {
      blocks: [
        { t: 'p', text: 'Removing the file is not enough: the repository keeps **its whole history**, copies may have been made and bots watch public repositories continuously. The key must be considered **compromised**.' },
        { t: 'list', ordered: true, items: ['**Disable** the key immediately, then create a new one.', '**Warn** the security manager.', '**Check** the account’s logs to detect any unusual use of the key (machines created, data read).', '**Fix**: delete what a third party created, replace the other exposed secrets.', '**Clean** the repository history if needed, without confusing this with disabling the key.'] },
        { t: 'list', items: ['**Prevention**: put secrets in a vault and not in the code, enable automatic secret scanning in the repository, limit the key’s rights and give it a short lifetime.', '**Awareness**: know that a published key is exploited within minutes.'] },
      ],
    },
  },
};
