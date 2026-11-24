import type { ModuleId } from './types';

/**
 * Textes anglais des disciplines et de leurs sujets cartographiés.
 * Les sujets sont donnés dans le MÊME ORDRE que `catalog.ts` (le test de parité vérifie les longueurs) ;
 * les identifiants de sujets restent ceux de la cartographie française.
 */
export interface ModuleText {
  title: string;
  short: string;
  description: string;
  topics: string[];
}

export const MODULE_TEXT_EN: Record<ModuleId, ModuleText> = {
  A: { title: 'Computing fundamentals', short: 'Fundamentals', description: 'Understand the machine, the operating system and software before securing them.',
    topics: ['How a computer works', 'Hardware architecture', 'Processor', 'RAM', 'Storage', 'BIOS and UEFI', 'Operating systems', 'Processes and services', 'File system', 'Permission management', 'Virtualization', 'Containerization', 'Software architecture', 'Compilation basics', 'Terminal and command line', 'Programming basics'] },
  B: { title: 'Computer networks', short: 'Networking', description: 'From the OSI layers to secure network architectures: addressing, routing, filtering, observing.',
    topics: ['OSI model', 'TCP/IP model', 'Ethernet', 'IPv4 addressing', 'IPv6 addressing', 'Subnetting', 'VLAN', 'Routing', 'Switching', 'ARP', 'ICMP', 'TCP', 'UDP', 'DNS', 'DHCP', 'NAT', 'PAT', 'VPN', 'Proxy', 'Reverse proxy', 'Firewall', 'IDS', 'IPS', 'Wi-Fi', 'WPA2', 'WPA3', '802.1X', 'RADIUS', 'TACACS+', 'BGP', 'OSPF', 'MPLS', 'SD-WAN', 'Packet analysis', 'Wireshark', 'Secure network architecture'] },
  C: { title: 'Linux', short: 'Linux', description: 'Administering, auditing and hardening Linux systems.',
    topics: ['Linux architecture', 'Distributions', 'Shell', 'Bash', 'User management', 'Permissions', 'ACL', 'Processes', 'Services', 'systemd', 'SSH', 'Package management', 'Logs', 'System auditing', 'Hardening', 'AppArmor', 'SELinux', 'iptables', 'nftables', 'Server hardening', 'System analysis', 'Automation'] },
  D: { title: 'Windows and Windows Server', short: 'Windows', description: 'Active Directory, authentication, group policies and Windows logging.',
    topics: ['Windows architecture', 'Active Directory', 'Domain', 'Domain controller', 'LDAP', 'Kerberos', 'NTLM', 'GPO', 'Windows DNS', 'Windows DHCP', 'PowerShell', 'NTFS', 'Permissions', 'Windows Defender', 'Windows Firewall', 'Windows Event Logs', 'Sysmon', 'Windows LAPS', 'BitLocker', 'PKI', 'Certificates', 'Windows Server hardening', 'Hardening', 'Event analysis', 'Workstation security'] },
  E: { title: 'Cryptography', short: 'Cryptography', description: 'Primitives, protocols and implementation mistakes: applied cryptography.',
    topics: ['Symmetric encryption', 'Asymmetric encryption', 'AES', 'RSA', 'ECC', 'Hash', 'SHA-2', 'SHA-3', 'HMAC', 'Salting', 'Key derivation', 'PBKDF2', 'Argon2', 'Digital signatures', 'Certificates', 'PKI', 'TLS', 'Key exchange', 'Perfect Forward Secrecy', 'Secrets management', 'Post-quantum cryptography', 'Cryptographic implementation errors'] },
  F: { title: 'Web security', short: 'Web', description: 'HTTP, sessions, injections and access control: attacking to better defend web applications.',
    topics: ['HTTP architecture', 'HTTPS', 'Cookies', 'Sessions', 'CORS', 'CSP', 'SameSite', 'CSRF', 'XSS', 'SQL Injection', 'NoSQL Injection', 'SSRF', 'XXE', 'Path Traversal', 'LFI', 'RFI', 'IDOR', 'Broken Access Control', 'Authentication flaws', 'Session fixation', 'Clickjacking', 'Race conditions', 'Security Headers', 'API security', 'OWASP Top 10', 'OWASP ASVS', 'OWASP Testing Guide'] },
  G: { title: 'Programming and code security', short: 'Secure code', description: 'Languages, memory vulnerabilities, code review and the software supply chain.',
    topics: ['Python', 'JavaScript', 'TypeScript', 'C', 'C++', 'Java', 'Bash', 'PowerShell', 'Data structures', 'Memory management', 'Buffer overflow', 'Stack overflow', 'Heap overflow', 'Use After Free', 'Integer overflow', 'Format string vulnerabilities', 'Secure Coding', 'Code review', 'Static Application Security Testing', 'Dynamic Application Security Testing', 'Software Composition Analysis', 'Dependency management', 'Supply Chain Security'] },
  H: { title: 'Offensive security and pentesting', short: 'Pentest', description: 'Authorized penetration-testing methodology, from scoping to reporting, in labs only.',
    topics: ['Pentest methodology', 'Reconnaissance', 'OSINT', 'Enumeration', 'Network scanning', 'Service analysis', 'Vulnerability identification', 'Exploitation in a lab', 'Controlled post-exploitation', 'Privilege escalation', 'Pivoting in a lab', 'Web penetration testing', 'Network penetration testing', 'Active Directory testing', 'Wi-Fi security', 'Red Team', 'Purple Team', 'Reporting', 'Rules of engagement', 'Evidence handling', 'Remediation', 'Nmap', 'Burp Suite', 'OWASP ZAP', 'Metasploit', 'Nuclei', 'Nikto', 'Gobuster', 'FFUF', 'John the Ripper', 'Hashcat', 'Hydra', 'Netcat', 'sqlmap'] },
  I: { title: 'Defense and SOC', short: 'SOC', description: 'Detect, correlate, investigate and respond: the daily work of the Blue Team.',
    topics: ['Blue Team', 'SOC', 'SIEM', 'SOAR', 'EDR', 'XDR', 'NDR', 'IDS/IPS', 'Threat Intelligence', 'Threat Hunting', 'Detection', 'Correlation', 'Alerting', 'Log analysis', 'Network analysis', 'Investigation', 'Incident management', 'Incident response', 'IOC', 'TTP', 'MITRE ATT&CK', 'Sigma', 'YARA', 'Playbooks', 'Behavioral analysis', 'Anomaly detection'] },
  J: { title: 'Digital forensics', short: 'Forensics', description: 'Preserve, acquire, analyze and reconstruct: rigorous digital investigation.',
    topics: ['Forensic principles', 'Evidence preservation', 'Chain of custody', 'Memory acquisition', 'Disk analysis', 'File system analysis', 'Network analysis', 'Timeline', 'Windows artifacts', 'Linux artifacts', 'Log analysis', 'Malware analysis', 'Volatility', 'Autopsy', 'Sleuth Kit', 'FTK Imager', 'Digital investigation'] },
  K: { title: 'Malware and reverse engineering', short: 'Malware', description: 'Typology, static and dynamic analysis, reverse engineering and indicators of compromise.',
    topics: ['Malware typology', 'Viruses', 'Worms', 'Trojans', 'Ransomware', 'Spyware', 'Rootkits', 'Bootkits', 'Keyloggers', 'Packers', 'Obfuscation', 'Static analysis', 'Dynamic analysis', 'Sandbox', 'Binary analysis', 'Disassembly', 'Debugging', 'Ghidra', 'IDA', 'x64dbg', 'YARA', 'Indicators of compromise'] },
  L: { title: 'Cloud security', short: 'Cloud', description: 'Shared responsibility model, IAM, containers, IaC and DevSecOps.',
    topics: ['Cloud concepts', 'IaaS', 'PaaS', 'SaaS', 'AWS', 'Azure', 'Google Cloud Platform', 'IAM', 'Identity management', 'Storage security', 'Cloud network security', 'Virtual machine security', 'Kubernetes', 'Docker', 'Containers', 'Secrets management', 'Cloud Security Posture Management', 'Infrastructure as Code', 'Terraform', 'CI/CD', 'DevSecOps', 'Serverless security', 'Hybrid environment security'] },
  M: { title: 'Governance and compliance', short: 'Governance', description: 'Risks, standards, regulations and security steering.',
    topics: ['Security governance', 'Security policy', 'Risk management', 'EBIOS Risk Manager', 'ISO 27001', 'ISO 27002', 'ISO 27005', 'NIST CSF', 'NIST SP 800', 'CIS Controls', 'ANSSI', 'GDPR', 'NIS2', 'DORA', 'Cyber Resilience Act', 'Audit management', 'BCP', 'DRP', 'BIA', 'Data classification', 'Supplier management', 'Awareness', 'Vulnerability management', 'Asset management'] },
  N: { title: 'Industrial and IoT security', short: 'OT / IoT', description: 'Industrial systems, OT protocols, connected devices and automotive cybersecurity.',
    topics: ['ICS', 'SCADA', 'PLC', 'OT', 'Industrial protocols', 'Modbus', 'OPC UA', 'Profinet', 'Industrial security', 'IT/OT segmentation', 'IEC 62443', 'IoT security', 'Firmware', 'Secure Boot', 'Hardware Security', 'IoT vulnerabilities', 'Automotive', 'ISO/SAE 21434', 'UNECE R155', 'UNECE R156', 'Embedded systems'] },
  O: { title: 'Identity and access control', short: 'Identity', description: 'Strong authentication, identity federation, privileges and Zero Trust.',
    topics: ['IAM', 'PAM', 'MFA', 'SSO', 'OAuth 2.0', 'OpenID Connect', 'SAML', 'FIDO2', 'Passkeys', 'Zero Trust', 'Least Privilege', 'RBAC', 'ABAC', 'Identity Federation', 'Secrets management', 'Privileged account management'] },
  P: { title: 'Advanced security and research', short: 'Research', description: 'Hardware, side channels, fuzzing, formal verification and confidential computing.',
    topics: ['Zero Trust architecture', 'Hardware security', 'TPM', 'HSM', 'Secure Boot', 'Side-channel attacks', 'Fault injection', 'Rowhammer', 'Firmware security', 'Advanced exploitation', 'Fuzzing', 'Symbolic execution', 'Formal verification', 'Protocol security', 'Distributed systems security', 'Advanced cryptography', 'Quantum security', 'Confidential Computing'] },
  Q: { title: 'Artificial intelligence and cybersecurity', short: 'AI & security', description: 'Securing AI systems and using AI for defense.',
    topics: ['AI fundamentals', 'Machine Learning', 'Deep Learning', 'LLM', 'Prompt injection', 'Data poisoning', 'Model inversion', 'Model extraction', 'Adversarial Machine Learning', 'AI agent security', 'Tool and connector security', 'OWASP Top 10 for LLM Applications', 'MITRE ATLAS', 'Data protection', 'AI-assisted detection', 'Defensive automation'] },
  R: { title: 'Methodologies and certifications', short: 'Certifications', description: 'Mapping between the platform’s content and recognized certification frameworks. The platform does not issue any official certification.',
    topics: ['CompTIA Security+', 'CompTIA Network+', 'CompTIA CySA+', 'CompTIA PenTest+', 'Cisco CCNA', 'Cisco CyberOps', 'ISC2 CC', 'CISSP', 'CEH', 'OSCP', 'eJPT', 'PNPT', 'GIAC', 'ISO 27001 Lead Implementer', 'ISO 27001 Lead Auditor'] },
};
