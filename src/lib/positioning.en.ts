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
  pf1: { prompt: 'What does virtualization mainly allow?', options: ['Isolating several systems on the same hardware', 'Raising the processor frequency of the machine', 'Automatically encrypting every disk of the host', 'Replacing the RAM with space on the disk'] },
  pf2: { prompt: 'How does a container differ from a virtual machine?', options: ['It shares the host kernel, with no guest system', 'It emulates all of the host’s hardware', 'It cannot be isolated from other processes', 'It always requires a type 1 hypervisor'] },
  pf3: { prompt: 'What is an absolute path in a file system?', options: ['A path described from the root of the system', 'A path relative to the user’s current folder', 'A symbolic link pointing to another file', 'A numeric identifier assigned to a process'] },
  pf4: { prompt: 'What is the main role of an operating system?', options: ['Managing resources and arbitrating access to hardware', 'Compiling the source code of installed applications', 'Routing packets of a network to their destination', 'Encrypting all of the machine’s communications'] },
  pf5: { prompt: 'Which statement about processes and threads is correct?', options: ['A thread lives in a process and shares its memory', 'A process runs inside a single thread of another', 'The threads of a process have isolated memory', 'A process can never have more than one thread'] },
  pf6: { prompt: 'RAM differs from the disk because:', options: ['It is volatile: lost at power-off', 'It keeps its data even without power', 'It is always slower than any disk', 'It only holds the operating system'] },
  // Networking
  pr1: { prompt: 'What does a type A DNS query typically return?', options: ['The IPv4 address linked to a domain name', 'The mail server responsible for the domain', 'The public key used by the domain', 'The routing path to the requested host'] },
  pr2: { prompt: 'What is the essential difference between TCP and UDP?', options: ['TCP guarantees order and delivery', 'UDP is encrypted while TCP is not', 'TCP is always faster than UDP by design', 'UDP starts with a three-way handshake'] },
  pr3: { prompt: 'What is NAT used for?', options: ['Translating private addresses to public ones', 'Encrypting traffic between two remote networks', 'Resolving domain names into IP addresses', 'Dynamically assigning addresses to workstations'] },
  pr4: { prompt: 'A VLAN is mainly used to:', options: ['Logically segmenting a layer 2 network', 'Increasing the physical throughput of a link', 'Replacing the firewall at the network edge', 'Encrypting every Ethernet frame exchanged'] },
  pr5: { prompt: 'In the OSI model, at which layer does a router operate?', options: ['Layer 3, the network layer', 'Layer 1, the physical layer', 'Layer 7, the application layer', 'Layer 2, the data link layer'] },
  pr6: { prompt: 'What does HTTPS bring compared with HTTP?', options: ['Encryption and server authentication through TLS', 'Mandatory compression of every page served', 'Systematic caching in the user’s browser', 'An automatic switch to another DNS server'] },
  // Linux / Windows
  ps1: { prompt: 'The permissions `rwxr-x---` on a Linux file mean:', options: ['Owner rwx, group r-x, others none', 'Every user can modify this file freely', 'Only the root account can read this file', 'The owner has no execution right on it'] },
  ps2: { prompt: 'What is the role of Active Directory?', options: ['A directory of accounts and rights', 'An application firewall for web servers', 'A hypervisor for virtualizing servers', 'A web server meant for end users'] },
  ps3: { prompt: 'In Kerberos, the TGT is:', options: ['A ticket used to obtain other tickets', 'The user’s password in clear text', 'An X.509 certificate issued by the directory', 'An NTLM hash stored by the client'] },
  ps4: { prompt: 'Why is a SUID binary owned by root sensitive?', options: ['It runs with root’s rights for every user', 'It can never be executed by a normal user', 'It automatically encrypts the user’s files', 'It disables the system firewall at launch'] },
  ps5: { prompt: 'The command `chmod 640 file` applies:', options: ['rw- for the owner, r-- for the group, none for others', 'Every right granted to every user of the system', 'Execution rights granted to everyone on the file', 'Read-only access for the owner alone, nothing else'] },
  ps6: { prompt: 'On Windows, the registry is used to:', options: ['Storing system and software configuration', 'Hosting the users’ personal files', 'Managing only the firewall rules of the host', 'Replacing the RAM when it becomes full'] },
  // Cryptography / authentication
  pc1: { prompt: 'What is the fundamental difference between hashing and encryption?', options: ['Hashing is irreversible, encryption is not', 'Hashing always uses a shared secret key', 'Encryption produces a fixed-size fingerprint', 'There is no difference between the two'] },
  pc2: { prompt: 'Why store a password with a slow, salted function (Argon2, bcrypt)?', options: ['Making offline cracking costly for the attacker', 'Being able to read the password back if forgotten', 'Because SHA-256 would be reversible with a key', 'To reduce the size of user databases'] },
  pc3: { prompt: 'What does multi-factor authentication (MFA) bring?', options: ['A second proof independent of the password', 'Encryption of the user’s whole hard disk', 'Replacement of the company’s main firewall', 'A faster sign-in to all the services'] },
  pc4: { prompt: 'Base64 is:', options: ['An encoding that anyone can reverse', 'A robust encryption algorithm for secrets', 'A cryptographic hash function for storage', 'A strong authentication protocol for users'] },
  pc5: { prompt: 'Asymmetric encryption relies on:', options: ['A pair of keys, public and private', 'A single key both parties share in advance', 'No key at all, only a long password', 'A secret that is reused for each message'] },
  pc6: { prompt: 'What is a digital signature used for?', options: ['Guaranteeing a message’s integrity and authenticity', 'Encrypting the hard disk of the sender’s machine', 'Compressing the data before sending it out', 'Speeding up the traffic on the company network'] },
  // Web security
  pw1: { prompt: 'An SQL injection occurs when:', options: ['Input pasted into a raw query', 'The server has been offline for quite a while', 'The TLS certificate of the website has expired', 'The DNS of the domain is badly configured'] },
  pw2: { prompt: 'An XSS flaw mainly allows:', options: ['Running script in the victim’s browser', 'Directly reading the server’s files', 'Breaking the TLS protocol encryption', 'Saturating the network bandwidth'] },
  pw3: { prompt: 'The most effective lasting defense against SQL injection is:', options: ['Prepared queries with bound parameters', 'Only hiding the error messages shown to users', 'Putting a network firewall in front of the site', 'Disabling JavaScript in the user’s browser'] },
  pw4: { prompt: 'A CSRF attack exploits:', options: ['The site’s trust in a signed-in browser', 'An encryption key that is far too weak', 'A network port that was left open by mistake', 'An error when resolving the domain name'] },
  // SOC
  pso1: { prompt: 'What is a SIEM used for?', options: ['Collecting and correlating logs', 'Encrypting the disks of critical servers', 'Routing traffic between remote sites', 'Hosting the company’s public websites'] },
  pso2: { prompt: 'When qualifying a detection, which case is the most dangerous?', options: ['A false negative: a real attack with no alert at all', 'A true positive, meaning a justified alert', 'A true negative, meaning a justified lack of alert', 'A false positive, meaning an alert raised wrongly'] },
  pso3: { prompt: 'Does the absence of an alert prove the absence of malicious activity?', options: ['No: coverage may be incomplete', 'Yes, always, without any exception', 'Yes, as soon as the SIEM is up to date', 'Yes, but only during the night'] },
  pso4: { prompt: 'An indicator of compromise (IOC) is:', options: ['An artifact of a likely intrusion', 'A type of application-layer firewall', 'A policy for strong password rules', 'An encrypted backup format for logs'] },
  // Pentest
  ppe1: { prompt: 'A penetration test relies above all on:', options: ['A written authorization and a defined scope', 'The complete anonymity of the person testing', 'The absence of any final report to deliver', 'The exclusive use of paid commercial tools'] },
  ppe2: { prompt: 'The reconnaissance phase consists of:', options: ['Gathering information about the target', 'Encrypting the results of the tests', 'Fixing the vulnerabilities already found', 'Writing the invoice for the client'] },
  ppe3: { prompt: 'An automated vulnerability scan:', options: ['Spots known weaknesses, with false positives', 'Always proves that the flaw is exploitable', 'Completely replaces a full manual audit', 'Automatically fixes all the flaws it finds'] },
  ppe4: { prompt: 'Privilege escalation consists of:', options: ['Gaining higher rights than those first granted', 'Encrypting a remote server without permission', 'Reducing the attack surface of a system', 'Documenting the flaws in the final report'] },
  // GRC
  pg1: { prompt: 'The principle of least privilege consists of:', options: ['Granting only the strictly necessary rights', 'Giving administrator rights by default', 'Removing every form of authentication', 'Systematically encrypting all the files'] },
  pg2: { prompt: 'Defense in depth means:', options: ['Layering several independent measures', 'Relying on one very strong firewall', 'Only encrypting the central database', 'Forbidding all access to the Internet'] },
  pg3: { prompt: 'An offline backup mainly protects against:', options: ['A ransomware that encrypts the whole network', 'Power cuts affecting the whole building', 'Typing mistakes made by the users', 'Slowness of the internal network at peak hours'] },
  pg4: { prompt: 'The “3-2-1” backup rule recommends:', options: ['3 copies, 2 media types, 1 off-site', '3 passwords, 2 firewalls and 1 antivirus', '3 servers that are strictly identical', 'A single copy, encrypted and kept on-site'] },
};
