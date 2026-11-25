// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "j-memoire-artefacts-linux",
  questions: {
    "jfm-q1": {
      "type": "single",
      "correct": "d",
      "explanation": "`psscan` finds process structures everywhere in memory, including those of terminated processes or ones removed from the linked list by a rootkit (direct manipulation of kernel objects). The end time and other artifacts help distinguish the two cases.",
      "whyWrong": {
        "c": "Corruption is possible but rare; the gap between these two plugins is a normal, documented phenomenon.",
        "b": "`psscan` reads real structures present in memory.",
        "a": "A memory image only describes the machine that was acquired."
      }
    },
    "jfm-q2": {
      "type": "short",
      "accepted": [
        "windows.malfind",
        "malfind"
      ],
      "explanation": "`windows.malfind` spots executable memory regions (often PAGE_EXECUTE_READWRITE) that match no loaded file, and displays their first bytes for an initial examination."
    },
    "jfm-q3": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Just-in-time compilers (.NET, browsers, Java) legitimately create executable areas with no file. We extract the region, analyze it and cross-check (parent process, connections) before concluding."
    },
    "jfm-q4": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Memory holds the system state at the moment of acquisition: connections, processes, command lines, loaded code, including that of malware never written to disk.",
      "whyWrong": {
        "b": "The history of deleted files comes from disk analysis (file-system metadata), not from memory."
      }
    },
    "jfm-q16": {
      "type": "single",
      "correct": "b",
      "explanation": "Working on a verified copy guarantees the integrity and reproducibility of the evidence: the original stays intact and another expert can redo the analysis and obtain the same results.",
      "whyWrong": {
        "d": "Touching the original endangers the evidence.",
        "a": "A reboot erases memory and modifies the disk.",
        "c": "Modifying a copy changes its hash and its evidential value."
      }
    },
    "jfm-q31": {
      "type": "single",
      "correct": "c",
      "explanation": "Kernel structures change from one version to another: without the matching symbols, Volatility cannot read them. For Windows they are provided; for a Linux kernel, they must be generated.",
      "whyWrong": {
        "d": "Symbols serve to read, not to encrypt.",
        "a": "They have no compression role.",
        "b": "The analysis is done offline on an image."
      }
    },
    "jfm-q32": {
      "type": "single",
      "correct": "a",
      "explanation": "`windows.cmdline` displays each process’s arguments. `netscan` lists connections, `pstree` the tree. Command lines often reveal a hijacked use of a legitimate tool.",
      "whyWrong": {
        "b": "`netscan` lists network connections.",
        "c": "`pstree` displays the process tree.",
        "d": "This plugin does not display command lines."
      }
    },
    "jfm-q33": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "The tree, the command line and the connections situate the process: who launched it, with what, where it communicates. `mmls` is a command of The Sleuth Kit, not a Volatility plugin.",
      "whyWrong": {
        "a": "`mmls` belongs to The Sleuth Kit and reads disk images."
      }
    },
    "jfm-q5": {
      "type": "single",
      "correct": "d",
      "explanation": "`mmls` displays the partition table with the starting sector of each; this offset is then passed to the other commands with `-o`.",
      "whyWrong": {
        "c": "`icat` extracts the content of a file by its inode.",
        "a": "`mactime` produces a timeline from a “body” file.",
        "b": "`istat` displays the metadata of an inode."
      }
    },
    "jfm-q6": {
      "type": "short",
      "accepted": [
        "icat"
      ],
      "explanation": "`icat -o <offset> image <inode>` writes the file content to standard output, even if the file was deleted, as long as its data is intact."
    },
    "jfm-q7": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Deletion marks the entry and blocks as free without erasing the data. They remain recoverable until reused; on an SSD, however, the TRIM command can erase them quickly."
    },
    "jfm-q8": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Falsification tools generally modify `$STANDARD_INFORMATION` only, often with one-second precision: hence the inconsistency with `$FILE_NAME` and the zero fractions.",
      "whyWrong": {
        "b": "A file modified after its creation is the normal situation."
      }
    },
    "jfm-q15": {
      "type": "open",
      "model": "On ext4, `touch` and equivalent tools can reset `mtime` to an old date, but `ctime` is updated by the kernel at each metadata change and cannot be freely set by a user. A `ctime` from the night of the incident on a binary “dated” 2021 suggests that the file was modified or replaced that night, then backdated: it is a strong indicator of falsification (for example replacement of a library with a booby-trapped version). Verifications: compare the file’s hash with that of the official package (`debsums` or `rpm -Va`, or hash of the downloaded package), check `crtime` (inode creation date), look in the timeline for other files modified within the same minute, and analyze the extracted binary.",
      "criteria": [
        "The role of `ctime`, not freely modifiable, is explained.",
        "The hypothesis of a replacement followed by backdating is formulated.",
        "An integrity check against the official package is proposed.",
        "Cross-checking with the timeline or `crtime` is mentioned."
      ],
      "explanation": "Gaps between timestamps are often more telling than the timestamps themselves."
    },
    "jfm-q34": {
      "type": "single",
      "correct": "c",
      "explanation": "`fls -r` recursively lists files; deleted entries are marked with an asterisk. Their content can then be extracted with `icat` as long as the data has not been reused.",
      "whyWrong": {
        "a": "`fls` precisely displays deleted entries.",
        "d": "The output is text, with no particular color.",
        "b": "`fls` renames nothing: it reads the image."
      }
    },
    "jfm-q35": {
      "type": "truefalse",
      "correct": true,
      "explanation": "`$STANDARD_INFORMATION` is modified with common APIs; `$FILE_NAME` is updated by the kernel. Comparing the two reveals backdating."
    },
    "jfm-q9": {
      "type": "single",
      "correct": "a",
      "explanation": "Red Hat family distributions write authentications to `/var/log/secure`; Debian and Ubuntu to `/var/log/auth.log`. The systemd journal may also contain them.",
      "whyWrong": {
        "b": "That is the location on Debian and Ubuntu.",
        "c": "It is a configuration file, not a log.",
        "d": "This log describes Debian package installations."
      }
    },
    "jfm-q10": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Scheduled tasks, systemd units and authorized SSH keys are among the most common persistence mechanisms under Linux.",
      "whyWrong": {
        "b": "`/usr/share/doc/` contains package documentation; nothing there runs automatically."
      }
    },
    "jfm-q11": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Redirecting the history to `/dev/null` prevents commands from being recorded. It is not proof by itself (some administrators do it), but the link’s `ctime` allows dating the manipulation and relating it to the incident."
    },
    "jfm-q12": {
      "type": "open",
      "model": "1. Entry point: authentication logs (`auth.log` or `secure`, systemd journal via `journalctl -D`), `wtmp` and `btmp`, logs of exposed services (web server, VPN), firewall. We look for the first abnormal sign-in or request, which becomes the anchor point. 2. Actions: each account’s `.bash_history`, auditd logs, file-system timeline (`fls -m` then `mactime`) around the anchor point, files dropped in `/tmp`, `/var/tmp`, `/dev/shm`, modified binaries (`debsums`, `rpm -Va`). 3. Persistence: crontabs, system and user systemd units, `authorized_keys`, shell initialization files, `/etc/ld.so.preload`, accounts added in `/etc/passwd`. Each finding is dated in UTC, cross-checked by a second source and recorded with the hash of the extracted files.",
      "criteria": [
        "An ordered approach (entry, actions, persistence) is proposed.",
        "Precise artifacts are cited for each step.",
        "The timeline or anchor point is used.",
        "Cross-checking or traceability of findings is mentioned."
      ],
      "explanation": "Starting with the entry point gives a time bound that greatly reduces the mass of data to examine afterward."
    },
    "jfm-q36": {
      "type": "single",
      "correct": "b",
      "explanation": "`btmp` records failed sign-ins (readable with `lastb -f`), `wtmp` the history of successful sign-ins and sign-outs (`last -f`), `utmp` the current sessions.",
      "whyWrong": {
        "d": "`wtmp` records successful sign-ins.",
        "c": "`utmp` describes currently open sessions.",
        "a": "`lastlog` keeps each account’s last sign-in."
      }
    },
    "jfm-q37": {
      "type": "truefalse",
      "correct": false,
      "explanation": "`wtmp` is a binary file: it is read with `last -f <file>`. On a mounted image, the image’s file is specified, not the analysis workstation’s."
    },
    "jfm-q13": {
      "type": "single",
      "correct": "a",
      "explanation": "A firewall in UTC and a server in Paris time show a one- or two-hour offset: without conversion, the sign-in appears later than the actions it enabled.",
      "whyWrong": {
        "c": "Tools accept local times; it is the comparison that becomes wrong.",
        "d": "The conversion does not change the file size.",
        "b": "UTC is a time reference, not encryption."
      }
    },
    "jfm-q14": {
      "type": "short",
      "accepted": [
        "mactime",
        "mactime -b"
      ],
      "explanation": "`mactime -b body.txt` sorts entries by date and indicates for each which timestamp (m, a, c, b) changed; `-d` produces a CSV format."
    },
    "jfm-q38": {
      "type": "single",
      "correct": "c",
      "explanation": "The “body” format is an intermediate format: one line per entry with its timestamps. `mactime` turns it into a sorted timeline.",
      "whyWrong": {
        "d": "It describes the files; it does not contain them.",
        "b": "It contains no password.",
        "a": "Logs are separate files to integrate elsewhere."
      }
    },
    "jfm-q39": {
      "type": "single",
      "correct": "b",
      "explanation": "The anchor point is an event attested by several sources (for example a first successful sign-in from the attacker’s address) around which we explore before and after.",
      "whyWrong": {
        "c": "The last modified file is not necessarily relevant.",
        "a": "The analysis tool’s time has no link to the incident.",
        "d": "A deleted file is not a reliable landmark."
      }
    },
    "jfm-q40": {
      "type": "single",
      "correct": "d",
      "explanation": "The drift is measured by comparing an event present in another reliable source, then corrected in the timeline (original values are kept alongside). The correction is documented.",
      "whyWrong": {
        "b": "Without correction, the order of events may be wrong.",
        "a": "Setting the source aside loses useful information.",
        "c": "The faulty source is corrected, not the others."
      }
    },
    "jfm-q17": {
      "type": "single",
      "correct": "b",
      "explanation": "The `/var/lib/docker` directory contains images, layers (overlay2), volumes and, by default, each container’s JSON logs. It is acquired to investigate.",
      "whyWrong": {
        "d": "This directory contains documentation.",
        "c": "`/etc/passwd` is the list of local accounts.",
        "a": "`/boot` contains the kernel and the bootloader."
      }
    },
    "jfm-q18": {
      "type": "single",
      "correct": "d",
      "explanation": "We preserve what may disappear: `docker inspect`, logs, process list, file-system copy, possibly memory. Only then do we isolate or stop.",
      "whyWrong": {
        "a": "Deletion erases the container’s layers and logs.",
        "c": "A reboot destroys all running containers and memory.",
        "b": "A reinstall destroys evidence."
      }
    },
    "jfm-q19": {
      "type": "truefalse",
      "correct": true,
      "explanation": "With the default configuration, logs are stored on the host in the container’s directory and deleted with it. Sending them to a central collector protects these traces."
    },
    "jfm-q20": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Logs show activity, `inspect` reveals mounts and privileges (privileged container, mounted socket) and the layer history indicates how the image was built.",
      "whyWrong": {
        "a": "The terminal color carries no investigative information."
      }
    },
    "jfm-q21": {
      "type": "single",
      "correct": "c",
      "explanation": "The API audit log records requests (identity, action, resource, time). It must be enabled and exported to external storage to serve as evidence.",
      "whyWrong": {
        "d": "This firewall does not see calls to the cluster API.",
        "b": "The `hosts` file maps names to addresses.",
        "a": "It is a Windows component, unrelated to Kubernetes."
      }
    },
    "jfm-q22": {
      "type": "short",
      "accepted": [
        "snapshot",
        "a snapshot",
        "volume snapshot",
        "disk snapshot"
      ],
      "explanation": "A volume snapshot freezes the disk state and can be copied to an analysis account. It is combined with memory capture if possible, since the snapshot does not contain it."
    },
    "jfm-q23": {
      "type": "single",
      "correct": "a",
      "explanation": "Isolating (security rules) stops the spread while keeping the instance; a snapshot preserves the disk. Deleting would destroy evidence; changing nothing lets the attack continue.",
      "whyWrong": {
        "b": "Deletion destroys the evidence.",
        "d": "The attack could continue.",
        "c": "This is enough neither to contain nor to preserve."
      }
    },
    "jfm-q24": {
      "type": "single",
      "correct": "c",
      "explanation": "These commands compare the system’s files with the hashes of the official packages. A modified or replaced binary is flagged: a sign of compromise.",
      "whyWrong": {
        "b": "They only verify.",
        "a": "They encrypt nothing.",
        "d": "They do not touch the logs."
      }
    },
    "jfm-q25": {
      "type": "single",
      "correct": "d",
      "explanation": "Apart from known cases (configuration file, update not applied), a difference signals a modification. We extract the file, compute its hash and compare it with the official version.",
      "whyWrong": {
        "b": "A legitimate update also changes the reference package’s hash.",
        "c": "The official package is the trusted reference.",
        "a": "This has no relation to protection."
      }
    },
    "jfm-q26": {
      "type": "truefalse",
      "correct": false,
      "explanation": "A SUID executable runs with the rights of its owner. It is legitimate for a few system binaries, but very suspect in a writable temporary directory."
    },
    "jfm-q27": {
      "type": "single",
      "correct": "a",
      "explanation": "Once the incident window is known, we list the files modified, created or changed in that interval. This narrows the analysis and reveals the binaries, scripts and configurations touched.",
      "whyWrong": {
        "c": "The search deletes nothing.",
        "b": "It compresses nothing.",
        "d": "It changes no rights."
      }
    },
    "jfm-q28": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "A library forced into all processes, an unexpected kernel module or a second administrator account are implantation mechanisms. A README in the documentation is mundane.",
      "whyWrong": {
        "b": "A package’s documentation is common content."
      }
    },
    "jfm-q29": {
      "type": "short",
      "accepted": [
        "/etc/ld.so.preload",
        "ld.so.preload",
        "etc/ld.so.preload"
      ],
      "explanation": "`/etc/ld.so.preload` is normally absent or empty. A library listed there is loaded into every dynamic program: a mechanism used by some rootkits to hide files and processes."
    },
    "jfm-q30": {
      "type": "single",
      "correct": "b",
      "explanation": "The hashes and file attributes are recorded in a healthy state, then compared regularly. Any difference (binary, configuration) is then visible, which speeds up the investigation.",
      "whyWrong": {
        "c": "It is about detection, not encryption.",
        "d": "No effect on startup.",
        "a": "It restores nothing."
      }
    }
  },
};
