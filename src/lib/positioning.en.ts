/**
 * Version anglaise de la banque du test de positionnement (`positioning.ts`).
 * Mêmes identifiants et même ordre des options (la bonne réponse reste en première position) ;
 * le test de parité vérifie que chaque question est traduite.
 */
export interface PositioningText {
  prompt: string;
  options: [string, string, string, string];
}

export const POSITIONING_EN: Record<string, PositioningText> = {
  // Fundamentals
  pf1: { prompt: 'What does virtualization mainly allow?', options: ['Running several isolated systems on the same hardware', 'Increasing the processor frequency', 'Automatically encrypting the disk', 'Replacing RAM with the disk'] },
  pf2: { prompt: 'How does a container differ from a virtual machine?', options: ['It shares the host kernel, without a full guest system', 'It emulates the entire hardware', 'It cannot be isolated', 'It requires a type 1 hypervisor'] },
  pf3: { prompt: 'What is an absolute path in a file system?', options: ['A path described from the root', 'A path relative to the current folder', 'A symbolic link', 'A process identifier'] },
  pf4: { prompt: 'What is the main role of an operating system?', options: ['Managing resources and arbitrating programs’ access to the hardware', 'Compiling the applications’ source code', 'Routing packets on the network', 'Encrypting communications'] },
  pf5: { prompt: 'Which statement about processes and threads is correct?', options: ['A thread runs inside a process and shares its memory', 'A process runs inside a thread', 'Threads have completely isolated memory spaces', 'A process can only have a single thread'] },
  pf6: { prompt: 'RAM differs from the disk because:', options: ['It is volatile: its content is lost at power-off', 'It keeps data without power', 'It is always slower than the disk', 'It only stores the operating system'] },
  // Networking
  pr1: { prompt: 'What does a type A DNS query typically return?', options: ['The IPv4 address associated with a domain name', 'The domain’s mail server', 'The domain’s public key', 'The routing path to the host'] },
  pr2: { prompt: 'What is the essential difference between TCP and UDP?', options: ['TCP is connection-oriented (order and delivery guaranteed), UDP is not', 'UDP is encrypted, TCP is not', 'TCP is always faster by design', 'UDP establishes a three-way handshake'] },
  pr3: { prompt: 'What is NAT used for?', options: ['Translating private addresses to a shared public address', 'Encrypting network traffic', 'Resolving domain names', 'Dynamically assigning addresses (DHCP)'] },
  pr4: { prompt: 'A VLAN is mainly used to:', options: ['Logically segment a layer 2 network', 'Increase the physical throughput of a link', 'Replace a firewall', 'Encrypt Ethernet frames'] },
  pr5: { prompt: 'In the OSI model, at which layer does a router operate?', options: ['Layer 3 (network)', 'Layer 1 (physical)', 'Layer 7 (application)', 'Layer 2 (data link)'] },
  pr6: { prompt: 'What does HTTPS bring compared with HTTP?', options: ['Encryption and server authentication through TLS', 'Mandatory page compression', 'Systematic browser caching', 'A change of DNS server'] },
  // Linux / Windows
  ps1: { prompt: 'The permissions `rwxr-x---` on a Linux file mean:', options: ['Owner: rwx; group: r-x; others: no rights', 'Everyone can write', 'Only root can read the file', 'Execution forbidden to the owner'] },
  ps2: { prompt: 'What is the role of Active Directory?', options: ['A centralized directory for authentication and for managing a domain’s accounts and rights', 'An application firewall', 'A virtualization hypervisor', 'A web server'] },
  ps3: { prompt: 'In Kerberos, the TGT is:', options: ['A ticket-granting ticket, encrypted with the krbtgt account key', 'The user’s clear-text password', 'An X.509 certificate', 'An NTLM hash'] },
  ps4: { prompt: 'Why is a SUID binary owned by root sensitive?', options: ['It runs with root privileges even when launched by a normal user', 'It can never be executed', 'It encrypts the user’s files', 'It disables the firewall'] },
  ps5: { prompt: 'The command `chmod 640 file` applies:', options: ['rw- to the owner, r-- to the group, --- to others', 'All rights to everyone', 'Execution for everyone', 'Read-only for the owner alone'] },
  ps6: { prompt: 'On Windows, the registry is used to:', options: ['Store the configuration of the system and applications', 'Host the users’ files', 'Manage only the firewall', 'Replace RAM'] },
  // Cryptography / authentication
  pc1: { prompt: 'What is the fundamental difference between hashing and encryption?', options: ['Hashing is not reversible; encryption is reversible with the key', 'Hashing uses a secret key', 'Encryption produces a fixed-size, non-reversible digest', 'There is no difference'] },
  pc2: { prompt: 'Why store a password with a slow, salted function (Argon2, bcrypt)?', options: ['To make offline cracking costly and defeat precomputed tables', 'To be able to read the password again later', 'Because SHA-256 is reversible', 'To encrypt the database'] },
  pc3: { prompt: 'What does multi-factor authentication (MFA) bring?', options: ['An additional proof independent of the password', 'Disk encryption', 'Replacement of the firewall', 'A faster login'] },
  pc4: { prompt: 'Base64 is:', options: ['An encoding reversible by anyone, with no confidentiality at all', 'A robust encryption algorithm', 'A hash function', 'An authentication protocol'] },
  pc5: { prompt: 'Asymmetric encryption relies on:', options: ['A public and private key pair', 'A single key shared in advance', 'No key', 'A reused password'] },
  pc6: { prompt: 'What is a digital signature used for?', options: ['Guaranteeing the integrity and authenticity of a message', 'Encrypting the hard drive', 'Compressing data', 'Speeding up the network'] },
  // Web security
  pw1: { prompt: 'An SQL injection occurs when:', options: ['User input is concatenated into an SQL query without parameterization', 'The server is offline', 'The TLS certificate has expired', 'DNS is misconfigured'] },
  pw2: { prompt: 'An XSS flaw mainly allows:', options: ['Running script in the victim’s browser', 'Reading files on the server', 'Breaking TLS encryption', 'Saturating the network'] },
  pw3: { prompt: 'The most effective lasting defense against SQL injection is:', options: ['Prepared (parameterized) queries', 'Only hiding error messages', 'A network firewall', 'Disabling JavaScript'] },
  pw4: { prompt: 'A CSRF attack exploits:', options: ['The site’s trust in the victim’s already authenticated browser', 'An encryption key that is too weak', 'A network port left open', 'A DNS resolution error'] },
  // SOC
  pso1: { prompt: 'What is a SIEM used for?', options: ['Collecting and correlating logs from many sources to generate alerts', 'Encrypting disks', 'Routing network traffic', 'Hosting websites'] },
  pso2: { prompt: 'When qualifying a detection, which case is the most dangerous?', options: ['The false negative: a real attack that triggers no alert', 'The true positive', 'The true negative', 'The false positive'] },
  pso3: { prompt: 'Does the absence of an alert prove the absence of malicious activity?', options: ['No: coverage may be incomplete or logs missing or erased', 'Yes, always', 'Yes if the SIEM is up to date', 'Only at night'] },
  pso4: { prompt: 'An indicator of compromise (IOC) is:', options: ['An observable artifact signaling a probable intrusion (hash, IP, domain)', 'A type of firewall', 'A password policy', 'A backup format'] },
  // Pentest
  ppe1: { prompt: 'A penetration test relies above all on:', options: ['Written authorization and a defined scope', 'The auditor’s anonymity', 'The absence of a final report', 'Exclusive use of paid tools'] },
  ppe2: { prompt: 'The reconnaissance phase consists of:', options: ['Gathering information about the target (OSINT, enumeration)', 'Encrypting the results', 'Fixing the vulnerabilities', 'Writing the invoice'] },
  ppe3: { prompt: 'An automated vulnerability scan:', options: ['Spots known weaknesses but produces false positives to verify', 'Always proves exploitability', 'Replaces a full manual audit', 'Automatically fixes the flaws'] },
  ppe4: { prompt: 'Privilege escalation consists of:', options: ['Obtaining rights higher than those initially granted', 'Encrypting a remote server', 'Reducing the attack surface', 'Documenting the flaws found'] },
  // GRC
  pg1: { prompt: 'The principle of least privilege consists of:', options: ['Granting only the rights strictly necessary for the task', 'Giving administrator rights by default', 'Removing all authentication', 'Encrypting all files'] },
  pg2: { prompt: 'Defense in depth means:', options: ['Layering several independent measures, none of them infallible', 'A single, very robust firewall', 'Encrypting only the database', 'Forbidding all Internet access'] },
  pg3: { prompt: 'An offline backup mainly protects against:', options: ['Ransomware encrypting the whole network', 'Power outages', 'Typing mistakes', 'Network slowness'] },
  pg4: { prompt: 'The “3-2-1” backup rule recommends:', options: ['3 copies, on 2 different media, 1 of them off-site', '3 passwords, 2 firewalls, 1 antivirus', '3 strictly identical servers', '1 single copy, encrypted'] },
};
