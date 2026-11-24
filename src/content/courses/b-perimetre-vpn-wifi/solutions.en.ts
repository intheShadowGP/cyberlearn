import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'b-perimetre-vpn-wifi',
  practice: {
    'archi-perimetre': {
      blocks: [
        {
          t: 'table',
          head: ['Zone', 'Content', 'Allowed flows'],
          rows: [
            ['DMZ', 'Web server, inbound mail relay', 'Internet → DMZ on 443/25; DMZ → internal only towards the precise services required'],
            ['Internal', 'The 60 workstations, internal servers', 'Internal → Internet through the proxy; no direct inbound access'],
            ['Administration', 'Management of network devices and servers', 'Access through a dedicated administration workstation / jump host, isolated from the workstations'],
          ],
        },
        { t: 'list', items: ['Reverse proxy (with WAF) in front of the web server, in or in front of the DMZ; outbound proxy for the workstations, with URL filtering and logging; IDS/IPS on the Internet link and at the DMZ entry.', 'Up-to-date remote access VPN, multifactor authentication, full tunnel to control teleworkers’ traffic.', 'Employee Wi-Fi in WPA2/WPA3-Enterprise with 802.1X and RADIUS (VLAN according to the user); visitor Wi-Fi on an isolated VLAN, Internet access only.'] },
      ],
    },
    'revue-regles': {
      blocks: [
        { t: 'p', text: 'Three flaws appear. Rule 1 allows **all outbound traffic** on all ports: a blind spot for exfiltration and callbacks to a command server. Rule 3 denies everything from the DMZ to the internal network **before** rule 4: since the firewall applies the first matching rule, rule 4 (access to the database) is never reached and the service is in fact cut. Finally, nothing is logged.' },
        { t: 'table', head: ['No.', 'Corrected rule', 'Remark'], rows: [
          ['1', 'allow internal -> Internet on 80, 443 and 53 (through proxy and resolver)', 'Outbound limited to the necessary services'],
          ['2', 'allow Internet -> DMZ on 443', 'Published service unchanged'],
          ['3', 'allow DMZ -> specific database server on 3306', 'Precise flow placed before the deny'],
          ['4', 'deny DMZ -> internal', 'Any other flow from the DMZ to the internal network is blocked'],
          ['5', 'deny any -> any', 'Default policy, with logging'],
        ] },
        { t: 'list', items: ['Log the denials (especially DMZ → internal and unexpected outbound), the connections accepted from the DMZ to the database and the changes to the rule list.', 'A series of DMZ → internal denials is a sign that an exposed server may be compromised and is trying to bounce.'] },
      ],
    },
    'capture-balise': {
      blocks: [
        { t: 'p', text: 'The regularity (every 60 s ± 2 s), the almost constant volume and the 24-hour permanence suggest a **command-and-control beacon**: a human or an ordinary application does not produce this metronomic rhythm. Encryption does not prevent this finding, which rests on the shape of the traffic.' },
        { t: 'list', items: ['Filters: `ip.addr == <destination> && tls`; examine the periodicity (timestamps), the handshake SNI (`tls.handshake.extensions_server_name`), the certificate and, if possible, the JA3/JA4 fingerprint; cross-check with `dns` for the resolved name.', 'Measures: create a detection rule for periodic connections to a single destination; check the reputation and age of the domain; block the destination at the firewall and proxy; isolate and analyze the source host (process behind the connections, through the EDR).'] },
      ],
    },
  },
};
