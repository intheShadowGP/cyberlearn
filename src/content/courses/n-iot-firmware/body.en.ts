import type { CourseBody } from '../../types';
import { questions } from './questions.en';

export const body: CourseBody = {
  courseId: 'n-iot-firmware',
  lesson: {
    intro:
      "Cameras, routers, industrial sensors, thermostats: connected objects are numerous, rarely updated and often exposed. The Mirai botnet (2016) showed that a simple list of default credentials was enough to enroll hundreds of thousands of devices in massive attacks. Securing an object begins at its design and continues throughout its life.",
    sections: [
      {
        id: 'vulns',
        title: 'Recurring vulnerabilities',
        blocks: [
          {
            t: 'table',
            head: ['Weakness', 'Example', 'Consequence'],
            rows: [
              ['Default or universal credentials', '`admin/admin` identical across a whole range', 'Large-scale remote takeover'],
              ['Unnecessary services exposed', 'Telnet, web administration interface on the Internet', 'Needless attack surface'],
              ['Active debug interfaces', 'UART or JTAG accessible on the board', 'Root shell, firmware extraction'],
              ['Unsigned firmware', 'Update accepted with no verification', 'Installation of persistent malicious firmware'],
              ['Secrets in the firmware', 'Private key or hard-coded password, identical for all devices', 'Compromise of the whole fleet'],
              ['Obsolete components', 'Linux kernel and libraries from 2015', 'Exploitable public vulnerabilities'],
            ],
          },
          { t: 'def', term: 'Firmware', text: "Embedded software stored in non-volatile memory (flash) that controls the hardware: bootloader, system (often embedded Linux or an RTOS) and applications." },
          { t: 'callout', kind: 'info', text: "The European standard **ETSI EN 303 645** sets baseline requirements for consumer objects: no universal default password, a vulnerability disclosure policy, updates, safe storage of security parameters." },
        ],
      },
      {
        id: 'analyse',
        title: 'Analyzing a firmware (in an authorized environment)',
        blocks: [
          { t: 'list', ordered: true, items: ['**Obtain the image**: manufacturer’s site, interception of an update, or reading the flash chip of a device you own.', '**Identify the structure**: `binwalk` spots file systems and compressed blocks (SquashFS, kernel…), entropy reveals encrypted areas.', '**Extract** the file system and explore it: `/etc/passwd`, `/etc/shadow`, startup scripts, service binaries, keys and certificates.', '**Look for secrets** and vulnerable components (versions of BusyBox, OpenSSL, kernel).', '**Analyze the binaries** of exposed services (Ghidra) or emulate them (QEMU) to test them safely.'] },
          {
            t: 'example',
            title: 'A typical finding',
            blocks: [
              { t: 'code', lang: 'text', code: '$ binwalk -e camera_v2.4.bin\n0x0       uImage header, Linux kernel\n0x1A0000  Squashfs filesystem, little endian, version 4.0\n\n$ cat squashfs-root/etc/init.d/rcS\n…\ntelnetd -l /bin/sh &\n\n$ ls squashfs-root/etc/ssl/\nserver.key  server.crt' },
              { t: 'p', text: "A Telnet daemon with no authentication launched at boot, and a TLS private key **identical on all devices**: anyone who extracts the firmware can impersonate any camera of the range and intercept its communications." },
            ],
          },
          { t: 'callout', kind: 'legal', text: "Analyzing the firmware of a device you own is generally lawful, but circumventing a protection or testing a manufacturer’s online service may not be. When in doubt, stick to your own hardware and go through coordinated disclosure." },
        ],
      },
      {
        id: 'conception',
        title: 'Designing a defensible object',
        blocks: [
          { t: 'def', term: 'Secure boot', text: "Chain of trust starting from a **hardware root of trust** (ROM code, burned-in public key): each stage verifies the signature of the next (bootloader, kernel, system) before running it. A modified firmware is rejected." },
          { t: 'diagram', id: 'secure-boot', caption: 'Secure boot chain of trust: each link verifies the signature of the next before running it.', alt: 'Vertical chain — root of trust (ROM / burned-in key), bootloader, kernel, system — where each stage verifies the signature of the next; an invalid signature stops the chain and a modified firmware is rejected.' },
          { t: 'list', items: ['**Hardware root of trust** and verification keys that cannot be modified (OTP fuses).', '**Unique secrets per device**, generated or injected in production, stored in a secure element or a TPM, never identical across the fleet.', '**Debug interfaces disabled** or locked in production.', '**Signed updates**, carried over an authenticated channel, with **anti-rollback** (refusal of an older vulnerable version).', '**A/B partitions**: the update is installed on the inactive partition; if boot fails, automatic return to the previous version.', '**Least exposure**: minimal services, no administration exposed on the Internet, encrypted and authenticated communications.'] },
          {
            t: 'table',
            caption: 'Regulatory obligations (EU)',
            head: ['Text', 'Key points for the manufacturer'],
            rows: [
              ['**Cyber Resilience Act** (Regulation (EU) 2024/2847)', 'Security by design, no known exploitable vulnerability at placing on the market, security updates during the support period, reporting of actively exploited vulnerabilities; phased application through December 2027'],
              ['**ETSI EN 303 645**', 'Baseline requirements for consumer objects, often used as a compliance reference'],
              ['**IEC 62443-4-2**', 'Technical requirements for the components of industrial systems'],
            ],
          },
          { t: 'callout', kind: 'warn', title: 'Evolving notion', text: "The application dates and harmonized standards of the Cyber Resilience Act are being rolled out: check the texts and the European Commission before any compliance decision." },
        ],
      },
      {
        id: 'reseau',
        title: 'Communications and network of connected objects',
        blocks: [
          { t: 'p', text: 'An object is rarely isolated: it talks to a server, a mobile app, other objects. Each link is an attack surface. Lightweight messaging protocols (MQTT, CoAP) protect nothing by themselves: security comes from **TLS**, **authentication** and **compartmentalization**.' },
          {
            t: 'table',
            head: ['Link', 'Risk', 'Measure'],
            rows: [
              ['**Object to server** (MQTT, HTTPS)', 'Eavesdropping, impersonation of the server or the object', 'TLS with mutual authentication, unique certificate per device'],
              ['**Object to mobile app** (Bluetooth Low Energy)', 'Eavesdropping, insecure pairing, relay', 'Secure pairing, application-level encryption, limiting useful range'],
              ['**Long-range networks** (LoRaWAN, cellular)', 'Replay, shared keys', 'Per-device keys, anti-replay counters'],
              ['**Local network** (Wi-Fi, Zigbee)', 'A compromised object reaches neighboring workstations', 'Dedicated and filtered network, no inbound access from the Internet'],
            ],
          },
          { t: 'def', term: 'Mutual authentication', text: 'The server proves its identity to the object, and the object proves its own to the server, with certificates. It prevents a fake server from receiving data or a fake object from sending commands.' },
          { t: 'list', items: ['**Outbound connections**: the object initiates the connection to a service that authenticates it, rather than accepting inbound connections.', '**Segmentation**: objects’ network separated from workstations, with precise flow rules.', '**Revocation**: being able to withdraw trust from a compromised device without touching the others.'] },
          { t: 'callout', kind: 'warn', text: 'A service reachable from the Internet is scanned continuously by bots. Exposing an object’s administration can almost always be avoided.' },
        ],
      },
      {
        id: 'flotte',
        title: 'Life cycle and operation of a fleet of objects',
        blocks: [
          { t: 'p', text: 'An object stays in service for years. Security is therefore also played **after the sale**: tracking components, publishing fixes, handling vulnerability reports and announcing the end of support.' },
          {
            t: 'table',
            head: ['Stage', 'Content', 'Evidence'],
            rows: [
              ['**Manufacturing**', 'Injection of unique secrets, locking of debug', 'Production procedure and log'],
              ['**Commissioning**', 'Unique credential or enforced change, enrollment', 'Default password policy'],
              ['**Operation**', 'Signed updates, monitoring, up-to-date SBOM', 'Version log, tracking dashboard'],
              ['**Reports**', 'Disclosure channel, coordinated handling', 'Public policy and deadlines'],
              ['**End of support**', 'Announcement, replacement options', 'End-of-support date communicated'],
            ],
          },
          { t: 'def', term: 'Coordinated disclosure', text: 'Process by which a researcher informs the manufacturer of a vulnerability, agrees on a fix deadline then publishes the details. A public reporting channel (dedicated address, security.txt file) makes it easier.' },
          { t: 'def', term: 'SBOM', text: 'Inventory of the software components of each firmware version. It lets the manufacturer, when a vulnerability is published, immediately identify the products concerned.' },
          { t: 'list', items: ['**Announced support**: period during which security fixes are provided.', '**Fixes**: signed, rolled out progressively, with rollback possible.', '**Information**: customers warned of important vulnerabilities and of the end of support.'] },
          { t: 'callout', kind: 'legal', text: 'The Cyber Resilience Act requires manufacturers to manage vulnerabilities during the support period, with reporting of actively exploited vulnerabilities. Check the application calendars.' },
        ],
      },
      {
        id: 'triage-firmware',
        title: "Firmware triage: from raw image to findings",
        blocks: [
          { t: 'p', text: "Firmware analysis is done **only on devices you own or have written authorization to test**, in an isolated environment. It follows a simple sequence: identify, extract, look for common flaws." },
          { t: 'code', lang: "bash", caption: "Triage of a firmware image (isolated analysis workstation)", code: "sha256sum firmware.bin         # 1. hash: trace the version analyzed\nfile firmware.bin              # 2. content type\nbinwalk firmware.bin           # 3. spot embedded file systems and compressed blocks\nbinwalk -e firmware.bin        # 4. extract into a _firmware.bin.extracted/ folder\n\n# 5. look for common flaws in the extracted file system\ngrep -rIl \"password\" _firmware.bin.extracted/ | head\nfind _firmware.bin.extracted/ -name \"*.pem\" -o -name \"*.key\" -o -name \"shadow\"" },
          {
            t: 'table',
            head: ["Possible finding", "Risk", "Manufacturer remediation"],
            rows: [
              ["Username or password written in code or a configuration file", "Access to every unit of the device", "Unique password per device, or mandatory change at first use"],
              ["Private key or certificate embedded in the image", "Impersonation, decryption of communications", "Keys generated at manufacture, never shared across the series"],
              ["Debug service (Telnet, open serial port) left active", "Direct administrator access", "Disable in production or protect with authentication"],
              ["Old open-source components", "Known vulnerabilities", "Component inventory (SBOM) and tracked updates"],
              ["Unsigned update", "Installation of malicious firmware", "Signature verified by the device before installation"],
            ],
          },
          { t: 'callout', kind: 'warn', text: "If you find a vulnerability in a commercial product, follow **coordinated disclosure**: notify the manufacturer, give them a reasonable time to fix, and do not publish an exploitation procedure beforehand." },
        ],
      },
      {
        id: 'flotte-inventaire',
        title: "Managing a fleet of devices: the minimal inventory",
        blocks: [
          { t: 'p', text: "You cannot protect what you do not know. For a device fleet, a minimal inventory answers six questions for each device." },
          {
            t: 'table',
            head: ["Information", "Question it answers"],
            rows: [
              ["Model, serial number, location", "Which device are we talking about, and where is it?"],
              ["Firmware version and last update date", "Is it affected by an announced vulnerability?"],
              ["Owner (team or person)", "Who decides on an update or a shutdown?"],
              ["Network and allowed flows", "Whom must it talk to, and nothing else?"],
              ["Credential management method", "How are its passwords or certificates managed?"],
              ["Manufacturer end-of-support date", "Should its replacement be planned?"],
            ],
          },
          { t: 'callout', kind: 'key', text: "A device whose manufacturer no longer publishes fixes must be **isolated** (separate network, strictly limited flows) until it is replaced, because its security debt will only grow." },
        ],
      },
    ],
    useCases: [
      'Assess the security of a range of IP cameras before buying them for a sensitive site.',
      'Define the secure update architecture of a new industrial sensor.',
      'Prepare a product’s compliance with the Cyber Resilience Act.',
    ],
    commonMistakes: [
      "Analyzing the firmware of a device you neither own nor are authorized to test.",
      "Keeping an unsupported device in service with no isolation or replacement plan.",
      'Shipping all the devices with the same password or the same private key.',
      'Leaving UART or JTAG active in production.',
      'Accepting unsigned updates or allowing a return to a vulnerable version.',
      'Considering the device as “offline” while it is reachable through the manufacturer’s cloud.',
      'Providing no support period nor vulnerability disclosure policy.',
    ],
    bestPractices: [
      'Unique secrets per device in a secure element.',
      'Secure boot anchored in the hardware.',
      'Signed updates, anti-rollback, A/B partitions.',
      'Locked debug interfaces, minimal services.',
      'SBOM, component monitoring and a published disclosure policy.',
    ],
    keyPoints: [
      "Firmware: identify, extract, look for secrets and debug services; coordinated disclosure; fleet inventory.",
      'Universal credentials, active debug, unsigned firmware: the three major weaknesses.',
      'Firmware analysis: extraction (binwalk), exploration, search for secrets and obsolete components.',
      'Secure boot: each stage verifies the signature of the next from a hardware root.',
      'The Cyber Resilience Act requires security by design and updates during support.',
    ],
  },
  practice: [
    {
      id: 'analyse-extraction',
      kind: 'analysis',
      title: 'Analysis: results of a firmware extraction',
      context: [{ t: 'code', lang: 'text', code: 'squashfs-root/etc/shadow : root:$1$abc$X…:0:0:99999:7:::   (MD5-crypt)\nsquashfs-root/usr/sbin/httpd : BusyBox v1.19.4 (2012)\nsquashfs-root/etc/init.d/S50upgrade : wget http://maj.fabricant.example/fw.bin && flash fw.bin\nsquashfs-root/etc/ssl/private/device.key (identical across 3 firmwares of different versions)' }],
      steps: ['Rank the findings by severity.', 'Describe the most serious attack.', 'Propose the fixes for the next version.'],
    },
    {
      id: 'maj-conception',
      kind: 'case',
      title: 'Case study: design the updates of a sensor',
      context: [{ t: 'p', text: 'A vibration sensor with no screen, on a cellular network, must be maintained for 10 years. A failed update must never make the device unusable.' }],
      steps: ['Describe the format and verification of an update.', 'Describe the recovery mechanism in case of failure.', 'Describe the management of signing keys on the manufacturer’s side.'],
    },
    {
      id: 'incident-flotte',
      kind: 'case',
      title: 'Case study: a vulnerability reported on a fleet of cameras',
      context: [{ t: 'p', text: 'A researcher reports by email that a range of 40,000 cameras sold over the past three years accepts an unauthenticated command on an exposed administration service, and that the firmware contains an update signing key identical for the whole range. The manufacturer has no disclosure policy and no SBOM, and support for the first generation ended a year ago.' }],
      steps: ['Describe the manufacturer’s response in the first 72 hours.', 'Propose the fix, its rollout and the handling of older generations.', 'Define the structural measures to put in place afterwards.'],
    },
  ],
  questions,
  resources: [
    { title: 'ETSI EN 303 645 — Cyber Security for Consumer IoT', source: 'ETSI', url: 'https://www.etsi.org/technologies/consumer-iot-security' },
    { title: 'Regulation (EU) 2024/2847 — Cyber Resilience Act', source: 'EUR-Lex', url: 'https://eur-lex.europa.eu/eli/reg/2024/2847/oj' },
    { title: 'OWASP Firmware Security Testing Methodology', source: 'OWASP', url: 'https://github.com/scriptingxss/owasp-fstm' },
    { title: 'NIST IR 8259 — Foundational Cybersecurity Activities for IoT Device Manufacturers', source: 'NIST', url: 'https://csrc.nist.gov/pubs/ir/8259/final' },
  ],
};
