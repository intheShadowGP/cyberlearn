// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "n-iot-firmware",
  questions: {
    "iot-q1": {
      "type": "single",
      "correct": "d",
      "explanation": "Mirai scanned the Internet for Telnet and SSH services and tested a short list of default credentials of cameras and recorders. The compromised devices were used for record distributed denial-of-service attacks in 2016.",
      "whyWrong": {
        "b": "It was not its vector.",
        "a": "Encryption was not at fault.",
        "c": "It was not its vector."
      }
    },
    "iot-q2": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Active debug, secrets shared by the whole fleet and unnecessary exposed services are frequent findings of connected-object audits.",
      "whyWrong": {
        "d": "Signed updates with anti-rollback are good practice, not a weakness."
      }
    },
    "iot-q3": {
      "type": "truefalse",
      "correct": true,
      "explanation": "The first provision of EN 303 645 forbids universal default passwords: each device must have a unique password or require the user to set one."
    },
    "iot-q13": {
      "type": "short",
      "accepted": [
        "uart"
      ],
      "explanation": "The UART is a serial link often left on the boards (a few pins). It frequently gives access to boot messages and a console, sometimes root with no password."
    },
    "iot-q31": {
      "type": "single",
      "correct": "b",
      "explanation": "Bots continuously test Internet addresses looking for known services and default credentials. An exposed device is found within minutes.",
      "whyWrong": {
        "d": "Storms have nothing to do with attacks on the Internet.",
        "c": "Attackers target objects too.",
        "a": "The bandwidth consumed does not explain attackers’ interest."
      }
    },
    "iot-q32": {
      "type": "single",
      "correct": "a",
      "explanation": "A UART or JTAG console lets you read memory, extract the firmware or obtain a root shell. In production, they are disabled or protected.",
      "whyWrong": {
        "b": "Power consumption is not the reason for locking them.",
        "d": "These interfaces do not slow the local network.",
        "c": "The HTTP protocol forbids nothing about debug interfaces."
      }
    },
    "iot-q33": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Once discovered (by analyzing the firmware or a single device), the secret compromises the whole range. Secrets must be unique per device."
    },
    "iot-q4": {
      "type": "short",
      "accepted": [
        "binwalk"
      ],
      "explanation": "binwalk looks for known signatures (kernel headers, file systems, archives) and can extract them; its entropy analysis helps spot encrypted areas."
    },
    "iot-q5": {
      "type": "single",
      "correct": "c",
      "explanation": "Maximum entropy with no recognized signature almost always indicates encrypted content (compression would generally have an identifiable header). The firmware must be decrypted before analysis: the key is often in the bootloader, or the decrypted content can be recovered from memory on a device you own.",
      "whyWrong": {
        "d": "An empty area would have zero entropy (repeated bytes), not maximal.",
        "b": "Encrypted content is not readable.",
        "a": "Flashing an unknown image risks making the device unusable and teaches nothing about its content."
      }
    },
    "iot-q6": {
      "type": "truefalse",
      "correct": true,
      "explanation": "The private key authenticates the device. Shared across the fleet, it lets anyone who extracted it from a single firmware impersonate all devices or decrypt their exchanges, depending on the protocol."
    },
    "iot-q7": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Accounts and hashes, services launched at boot and cryptographic material reveal exploitable access and secrets.",
      "whyWrong": {
        "b": "The look of the interface has no security interest."
      }
    },
    "iot-q14": {
      "type": "open",
      "model": "Severity: critical for the update by wget over HTTP with no verification (an attacker in a man-in-the-middle position, or controlling the DNS, installs arbitrary and persistent firmware on the whole fleet); critical for the identical private key (impersonation of all devices); high for the 2012 BusyBox (public vulnerabilities); medium for MD5-crypt (hash quick to crack, root account). Fixes: updates signed and verified by the device before installation (HTTPS in addition), anti-rollback, A/B partitions; unique keys per device generated in production and stored in a secure element; update of components with SBOM and monitoring; modern hashes (sha512-crypt or better) and, above all, no root account usable remotely; disclosure policy and fix for the existing fleet.",
      "criteria": [
        "The unverified update is identified as critical with a scenario.",
        "The shared key is identified as critical.",
        "The obsolete components and weak hash are noted.",
        "Precise fixes (signature, unique keys, component update) are proposed."
      ],
      "explanation": "An unauthenticated update turns the mechanism meant to fix flaws into a vector of compromise of the whole fleet."
    },
    "iot-q34": {
      "type": "single",
      "correct": "b",
      "explanation": "An entropy close to the maximum indicates data that looks like random: encryption or compression. Entropy guides the search for areas to decode.",
      "whyWrong": {
        "a": "It gives no version.",
        "c": "It does not measure size.",
        "d": "It lists nothing."
      }
    },
    "iot-q35": {
      "type": "single",
      "correct": "d",
      "explanation": "Emulation lets you run and observe a service in a controlled environment, without blocking a physical device, and test edge cases.",
      "whyWrong": {
        "c": "Emulation does not compress the binary.",
        "a": "It does not encrypt the binary.",
        "b": "Publishing a binary is not a goal of emulation."
      }
    },
    "iot-q36": {
      "type": "single",
      "correct": "a",
      "explanation": "An old version of a common component (BusyBox, OpenSSL, kernel) is matched against published vulnerabilities: this is the principle of a composition analysis.",
      "whyWrong": {
        "c": "The color of the web interface says nothing about the component’s flaws.",
        "b": "The device manufacturer’s name says nothing about the BusyBox version’s flaws.",
        "d": "The size of the extracted source file does not indicate its vulnerabilities."
      }
    },
    "iot-q8": {
      "type": "single",
      "correct": "c",
      "explanation": "The immutable boot code in ROM verifies the bootloader’s signature with a public key burned into the hardware; the bootloader then verifies the kernel, and so on.",
      "whyWrong": {
        "d": "A password does not protect boot.",
        "b": "It does not verify boot.",
        "a": "It does not verify boot."
      }
    },
    "iot-q9": {
      "type": "short",
      "accepted": [
        "anti-rollback",
        "antirollback",
        "anti rollback"
      ],
      "explanation": "Anti-rollback, often based on a monotonic version counter stored in hardware, prevents an attacker from reinstalling an old signed but vulnerable version."
    },
    "iot-q10": {
      "type": "truefalse",
      "correct": true,
      "explanation": "The new version is installed on the inactive partition. If the device does not boot correctly (validation by a watchdog or a success flag), the bootloader returns to the previous partition."
    },
    "iot-q11": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Uniqueness, protected hardware storage and locked debug access prevent extraction and limit the impact of a successful extraction to a single device.",
      "whyWrong": {
        "d": "A hard-coded secret ends up in every firmware and in the code repository."
      }
    },
    "iot-q12": {
      "type": "single",
      "correct": "a",
      "explanation": "The Cyber Resilience Act (Regulation (EU) 2024/2847) imposes essential cybersecurity requirements on products with digital elements, including the provision of security updates during the support period.",
      "whyWrong": {
        "c": "It deals with personal data.",
        "b": "It targets the financial sector.",
        "d": "It deals with electronic identification."
      }
    },
    "iot-q15": {
      "type": "open",
      "model": "Format: image signed by the manufacturer (asymmetric signature, private key in an HSM), with a version number and monotonic counter; HTTPS transport with mutual authentication of the device. On the device: download into the inactive partition (B), verification of the signature and version (anti-rollback), switch at restart; validation by a self-test and a watchdog; failing validation, automatic return to A. Resume in chunks for the cellular network. On the manufacturer’s side: signing keys in an HSM, separation of roles, rotation and revocation procedure (backup keys provided in the device), log of published versions, progressive rollout in waves with monitoring of the failure rate.",
      "criteria": [
        "The signature and its verification on the device are described.",
        "An A/B mechanism with automatic rollback is present.",
        "Anti-rollback is provided.",
        "Key management on the manufacturer’s side (HSM, rotation) is addressed."
      ],
      "explanation": "Over 10 years, the ability to evolve signing keys and to deploy carefully matters as much as the cryptography itself."
    },
    "iot-q16": {
      "type": "single",
      "correct": "d",
      "explanation": "HTTPS protects transport and authenticates the server; if the distribution server is compromised, it serves a malicious image over valid HTTPS. The manufacturer’s signature, verified by the device, guarantees the origin of the image itself.",
      "whyWrong": {
        "b": "HTTPS does not guarantee the image’s origin.",
        "c": "Verifying the signature does not speed up the download.",
        "a": "The signature does not compress the image."
      }
    },
    "iot-q37": {
      "type": "single",
      "correct": "b",
      "explanation": "A hardware root of trust (ROM, public key in fuses) cannot be modified by software: it anchors the whole verification chain.",
      "whyWrong": {
        "d": "A root of trust does not speed up wireless connection.",
        "a": "It does not replace the user’s password.",
        "c": "It does not store the device’s photographs."
      }
    },
    "iot-q38": {
      "type": "single",
      "correct": "c",
      "explanation": "Over ten years, a signing key can be compromised or expire. Backup keys planned from the design allow replacing it without making devices unusable.",
      "whyWrong": {
        "d": "Backup keys do not double update speed.",
        "b": "They do not remove anti-rollback: they replace a compromised key.",
        "a": "They do not remove the need to sign images."
      }
    },
    "iot-q39": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Signature, local verification and anti-rollback guarantee the origin and freshness of the image. Sending with no verification cancels these protections.",
      "whyWrong": {
        "a": "It lets any image be installed."
      }
    },
    "iot-q40": {
      "type": "truefalse",
      "correct": false,
      "explanation": "HTTPS only protects the transport and the server. If distribution is compromised, a malicious image arrives over HTTPS: only the signature, verified by the device, guarantees its origin."
    },
    "iot-q17": {
      "type": "single",
      "correct": "b",
      "explanation": "MQTT is a lightweight publish-subscribe protocol suited to objects. It must be protected by TLS and client authentication.",
      "whyWrong": {
        "c": "It is a mail protocol.",
        "d": "It is a file transfer protocol.",
        "a": "It is a remote desktop protocol."
      }
    },
    "iot-q18": {
      "type": "single",
      "correct": "a",
      "explanation": "A certificate per device makes it possible to revoke a single compromised device and to identify it precisely, without changing the whole fleet.",
      "whyWrong": {
        "d": "A unique certificate does not speed up the connection.",
        "b": "It does not reduce the firmware size.",
        "c": "On the contrary, it enables encryption."
      }
    },
    "iot-q19": {
      "type": "single",
      "correct": "d",
      "explanation": "A VLAN or dedicated network with filtering rules limits what a compromised object can reach and what can reach it.",
      "whyWrong": {
        "c": "No isolation.",
        "a": "It would worsen the risk.",
        "b": "It would expose it to the whole Internet."
      }
    },
    "iot-q20": {
      "type": "single",
      "correct": "c",
      "explanation": "A service reachable from the Internet is spotted by continuous scans. It is better to have outbound connections initiated by the object to a service that authenticates it.",
      "whyWrong": {
        "b": "Accepting inbound connections does not reduce consumption.",
        "d": "It does not automatically encrypt its data.",
        "a": "Exposure does not prevent updates: it increases the attack surface."
      }
    },
    "iot-q21": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Short range does not prevent eavesdropping with a suitable antenna nor relay attacks. Security relies on secure pairing, encryption and authentication."
    },
    "iot-q22": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Mutual TLS, unique certificates and segmentation limit eavesdropping, impersonation and spread. A secret common to the whole range is a weakness.",
      "whyWrong": {
        "c": "Once discovered, it compromises the whole fleet."
      }
    },
    "iot-q23": {
      "type": "short",
      "accepted": [
        "tls",
        "ssl/tls",
        "tls/ssl",
        "ssl"
      ],
      "explanation": "TLS encrypts the transport and authenticates the server, and, in mutual mode, the client. It is the baseline protection of objects’ communications."
    },
    "iot-q24": {
      "type": "single",
      "correct": "c",
      "explanation": "Universal default passwords are forbidden: each device has a unique credential, or the user must set one before use.",
      "whyWrong": {
        "d": "That is precisely Mirai’s weakness.",
        "a": "It would be a flaw.",
        "b": "It would be a flaw."
      }
    },
    "iot-q25": {
      "type": "single",
      "correct": "b",
      "explanation": "The SBOM lists the components of each version. When a vulnerability is published, the manufacturer immediately spots the products concerned.",
      "whyWrong": {
        "a": "The SBOM does not encrypt the firmware.",
        "c": "It does not speed up boot.",
        "d": "It does not replace them."
      }
    },
    "iot-q26": {
      "type": "single",
      "correct": "a",
      "explanation": "The researcher informs the manufacturer, agrees on a fix deadline then publishes the details. The aim is to protect users while informing the public.",
      "whyWrong": {
        "d": "Publishing everything at once exposes users before a fix.",
        "b": "Selling the flaw to the highest bidder is not coordinated disclosure.",
        "c": "It must eventually be handled."
      }
    },
    "iot-q27": {
      "type": "single",
      "correct": "d",
      "explanation": "The end of support is announced in advance, with the risks and replacement or upgrade solutions. The Cyber Resilience Act requires a declared support period.",
      "whyWrong": {
        "c": "Users must be informed.",
        "a": "It harms users.",
        "b": "Maintaining all services indefinitely is not sustainable without support."
      }
    },
    "iot-q28": {
      "type": "truefalse",
      "correct": false,
      "explanation": "A local device can be reached from another compromised workstation of the network. Security updates remain necessary, with a mechanism suited to the lack of a screen."
    },
    "iot-q29": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "An announced period, a reporting channel and fixes during support are expected from manufacturers. Hiding the end of life deprives the user of any decision.",
      "whyWrong": {
        "c": "The user must be able to anticipate the end of support."
      }
    },
    "iot-q30": {
      "type": "short",
      "accepted": [
        "revocation",
        "the revocation"
      ],
      "explanation": "Revocation invalidates a compromised certificate before its end date. It assumes devices and servers check revocation lists or an equivalent service."
    },
    "iot-q41": {
      "type": "single",
      "correct": "a",
      "explanation": "The hash identifies the analyzed version unambiguously. Analysis is done on a copy, in an isolated environment, never on a production device.",
      "whyWrong": {
        "c": "Flashing an unknown image in production is dangerous.",
        "b": "Nothing is published before analyzing and verifying.",
        "d": "Deleting content distorts the analysis."
      }
    },
    "iot-q42": {
      "type": "single",
      "correct": "b",
      "explanation": "A key common to the whole series, extracted from a single unit, compromises all the others. The remediation is to generate per-device keys at manufacture.",
      "whyWrong": {
        "c": "Speed is not the risk.",
        "a": "A key does not expire on its own without a planned validity date.",
        "d": "A common key concerns the whole series."
      }
    },
    "iot-q43": {
      "type": "short",
      "accepted": [
        "binwalk"
      ],
      "explanation": "`binwalk` detects file system and compressed block signatures; with `-e`, it extracts them to allow analysis."
    }
  },
};
