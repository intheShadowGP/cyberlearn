import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'j-forensique-initiation',
  practice: {
    'premiers-gestes': {
      blocks: [
        { t: 'list', items: ['**To have her do**: stop using the computer, close or delete nothing, turn off Wi-Fi or unplug the network cable, do not power off.', '**Not to do**: do not restart, do not launch an antivirus on her own initiative, do not try to “repair”, do not plug in a USB key, do not delete the suspicious windows.'] },
        { t: 'list', items: ['**To note**: the time of the call, the colleague’s name, the machine, what is displayed (photo of the screen), the actions already taken, the documents concerned.'] },
        { t: 'p', text: '**Warn** the security officer (or the SOC) and wait for their instructions. We do not power off right away because **RAM** holds traces (processes, connections) that disappear at power-off; we isolate from the network to stop any ongoing data copy while keeping the machine’s state.' },
      ],
    },
    'lire-metadonnees': {
      blocks: [
        {
          t: 'table',
          head: ['File', 'Reading'],
          rows: [
            ['`budget-2026.xlsx`', 'Created in March, modified on March 20, accessed on April 12: a normal life cycle for a working document of `s.durand`'],
            ['`notes-reunion.docx`', 'Created, modified and accessed within the same half hour: minutes written in one go'],
            ['`export-clients.csv`', '**To examine**: created at 23:52 by an `admin-temp` account, a customer export file, outside working hours'],
          ],
        },
        { t: 'p', text: 'The third line deserves the most attention: a seemingly temporary account, a late hour and sensitive content (customers). It suggests a data copy, but does not prove it.' },
        { t: 'list', items: ['**Who is `admin-temp`**: legitimate account? who created it and when?', '**Logs**: sign-in of the account at 23:5x, from where? other actions around 23:52?', '**Exit**: was the file sent or copied (email, USB key, network transfer)?', '**Do not conclude** without cross-checking several sources; the access date alone is unreliable.'] },
      ],
    },
    'mini-chrono': {
      blocks: [
        {
          t: 'table',
          head: ['UTC time', 'Source', 'Event'],
          rows: [
            ['08:14:20', 'Firewall', 'Inbound connection from 203.0.113.50'],
            ['08:15:02', 'Server (09:15:02 Paris − 1 h)', 'Successful sign-in of the account “compta”'],
            ['08:16:45', 'EDR', 'Launch of an unknown program'],
            ['08:18:30', 'Mail (09:18:30 Paris − 1 h)', 'Forwarding rule created on the mailbox “compta”'],
          ],
        },
        { t: 'p', text: 'Story: an inbound connection is seen by the firewall, 42 seconds later the account “compta” signs in to the server, then an unknown program is launched, finally a forwarding rule is created on the mailbox (a classic technique to capture emails). Without conversion, the reading would be off by an hour.' },
        { t: 'list', items: ['Check whether the 08:15 sign-in comes from the same address as the one in the firewall.', 'Identify the program launched at 08:16 (location, signature, hash).', 'Examine the forwarding rule (destination) and delete it after preservation.', 'Check the clock drift of the three sources.'] },
      ],
    },
  },
};
