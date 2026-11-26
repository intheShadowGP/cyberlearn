// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "a-fichiers-programmes-ligne-commande",
  questions: {
    "fpc-q1": {
      "type": "single",
      "correct": "b",
      "explanation": "The name is stored in a directory, the metadata describe the file (size, owner, rights, dates) and the content is spread in blocks on the medium.",
      "whyWrong": {
        "d": "The IP address belongs to networking, not to the file system.",
        "a": "Color is not information kept by the file system.",
        "c": "The processor and the memory are hardware components, not file attributes."
      }
    },
    "fpc-q2": {
      "type": "single",
      "correct": "a",
      "explanation": "An absolute path (`/etc/hosts`, `C:\\Windows`) designates the same file wherever it is read from, because it starts from the root. A relative path depends on the current directory.",
      "whyWrong": {
        "b": "A path that starts from the current directory is a relative path.",
        "c": "A path is not defined by its characters.",
        "d": "An absolute path designates a local location, not a remote site."
      }
    },
    "fpc-q3": {
      "type": "truefalse",
      "correct": false,
      "explanation": "The extension is only an indication provided by the name. A file can be renamed without changing its content: this is why the real type is checked, for example through the first bytes of the file."
    },
    "fpc-q4": {
      "type": "short",
      "accepted": [
        "relative path",
        "relative"
      ],
      "explanation": "A relative path is interpreted from the current directory: `..` goes up one level. Path traversal flaws exploit this mechanism."
    },
    "fpc-q17": {
      "type": "single",
      "correct": "d",
      "explanation": "The `../` sequences climb up the tree: this is a path traversal. The program must normalize the resulting path and check that it stays inside the allowed folder.",
      "whyWrong": {
        "c": "A plain file name stays in the intended directory.",
        "a": "A plain name with an extension stays in the intended directory.",
        "b": "This name goes down into a subfolder, it does not go up."
      }
    },
    "fpc-q18": {
      "type": "single",
      "correct": "c",
      "explanation": "Opening a symbolic link amounts to opening its target. A poorly controlled link can redirect a privileged program to a sensitive file, hence the attention paid to how they are handled.",
      "whyWrong": {
        "d": "A full copy is a separate file, not a link.",
        "b": "A symbolic link has nothing to do with compression or a password.",
        "a": "A symbolic link works across the whole file system, not only in the browser."
      }
    },
    "fpc-q19": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "e"
      ],
      "explanation": "Metadata describe the file without being its content: owner, rights, dates, size. The text and the bytes of the image make up the content.",
      "whyWrong": {
        "d": "The text of the document is its content, not metadata.",
        "c": "The bytes of the image are the content of the file."
      }
    },
    "fpc-q20": {
      "type": "truefalse",
      "correct": true,
      "explanation": "The name is stored in the directory, the content in the file’s blocks: changing one does not touch the other. This is why a misleading extension does not change the nature of a file."
    },
    "fpc-q21": {
      "type": "open",
      "model": "The name ends in .exe: it is an executable program disguised as a document, and the icon and the beginning of the name are misleading. It must not be opened. Report it to the security team, check its real type (first bytes, for example “MZ” for a Windows executable), compute its hash to compare it with reputation databases, and run it only in an isolated sandbox. Showing file extensions also helps avoid this trap.",
      "criteria": [
        "Identifies the file as a disguised executable.",
        "Recommends not opening it and reporting it.",
        "Suggests checking the real type or the hash."
      ],
      "explanation": "The name says nothing about the content: the real type is checked and suspicious files are handled in an isolated environment."
    },
    "fpc-q7": {
      "type": "single",
      "correct": "d",
      "explanation": "Source code is text written by the developer. It is then compiled or interpreted to run. The binary file is the product of compilation, not the source.",
      "whyWrong": {
        "c": "Electric current has nothing to do with source code.",
        "a": "A network cable is not source code.",
        "b": "This is the executable obtained after compilation, not the source code."
      }
    },
    "fpc-q5": {
      "type": "single",
      "correct": "a",
      "explanation": "A compiler produces an executable once and for all; an interpreter reads the source code and executes it as it goes. Some languages combine both (bytecode and virtual machine).",
      "whyWrong": {
        "b": "Neither depends on a remote server.",
        "d": "Both concern code, not texts or images.",
        "c": "The two notions differ: prior translation or reading at each run."
      }
    },
    "fpc-q22": {
      "type": "single",
      "correct": "c",
      "explanation": "C, C++, Go and Rust are compiled to machine code. Python, Ruby and PHP are usually interpreted (with internal compilation to bytecode for some).",
      "whyWrong": {
        "d": "Python is usually interpreted.",
        "b": "Ruby is usually interpreted.",
        "a": "PHP is usually interpreted."
      }
    },
    "fpc-q6": {
      "type": "multi",
      "correct": [
        "c",
        "d",
        "e"
      ],
      "explanation": "Dependencies are delivered with the software: their flaws become its own. Inventory and updates are therefore essential, whatever the language.",
      "whyWrong": {
        "b": "They are part of the delivered software and of its attack surface.",
        "a": "All languages have dependencies (npm, pip, Maven, crates…)."
      }
    },
    "fpc-q23": {
      "type": "single",
      "correct": "b",
      "explanation": "Java and C# compile to an intermediate format (bytecode) that the virtual machine runs. This makes the program portable from one system to another.",
      "whyWrong": {
        "a": "Java is indeed compiled to bytecode: it is not pure interpretation.",
        "d": "Bytecode is not direct machine code; it goes through a virtual machine.",
        "c": "The kernel does not run bytecode on its own."
      }
    },
    "fpc-q24": {
      "type": "truefalse",
      "correct": false,
      "explanation": "A vulnerable library exposes the application that uses it, even if the vendor’s own code is flawless. This is why an inventory of dependencies is kept and they are updated."
    },
    "fpc-q25": {
      "type": "single",
      "correct": "b",
      "explanation": "The hash changes as soon as one byte changes. By recomputing it after the download and comparing it with the vendor’s (obtained through a trusted channel), an alteration is detected.",
      "whyWrong": {
        "d": "The hash does not change download speed.",
        "a": "A hash encrypts nothing.",
        "c": "The hash does not tell which language was used."
      }
    },
    "fpc-q26": {
      "type": "short",
      "accepted": [
        "dependencies",
        "dependency"
      ],
      "explanation": "Dependencies are managed by tools (npm, pip, Maven…) that make it possible to inventory them. Their inventory is the basis of software composition analysis."
    },
    "fpc-q27": {
      "type": "single",
      "correct": "a",
      "explanation": "By compromising a link that many other software products use, the attacker reaches all their users. It is fought with inventory, version pinning and source verification.",
      "whyWrong": {
        "d": "Denial of service targets a site’s availability, not the delivered code.",
        "b": "Phishing deceives a user by email.",
        "c": "Brute force tries passwords, unrelated to a trojanized library."
      }
    },
    "fpc-q8": {
      "type": "single",
      "correct": "d",
      "explanation": "The client (browser, application) sends requests; the server processes them and answers. The essential checks are therefore done on the server side.",
      "whyWrong": {
        "c": "The client sends the request; it does not process it.",
        "a": "The cable carries data; it does not process it.",
        "b": "The user acts on the client, not on request processing."
      }
    },
    "fpc-q9": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Code running on the user’s side can be modified, disabled or bypassed by sending the request directly. Only checks done on the server side are reliable."
    },
    "fpc-q10": {
      "type": "short",
      "accepted": [
        "trust boundary",
        "boundary of trust"
      ],
      "explanation": "Data crossing a trust boundary must be validated by the side you control. It is a principle of all application security."
    },
    "fpc-q28": {
      "type": "single",
      "correct": "c",
      "explanation": "Each layer only talks to its neighbor: presentation talks to business logic, which talks to data access. The browser must never access the database directly.",
      "whyWrong": {
        "d": "The presentation layer does not talk directly to the database.",
        "a": "The browser must never access the database directly.",
        "b": "The local network carries exchanges; it is not an application layer."
      }
    },
    "fpc-q29": {
      "type": "single",
      "correct": "c",
      "explanation": "The server must never use a sensitive value provided by the client: it reads it again from its own database. A check in the browser does not protect.",
      "whyWrong": {
        "b": "Trusting the received price would allow paying €1 instead of €100.",
        "d": "Hiding the price in the form does not protect it: the client can change it.",
        "a": "The browser is controlled by the user; price calculation is not delegated to it."
      }
    },
    "fpc-q30": {
      "type": "single",
      "correct": "b",
      "explanation": "An API (application programming interface) exposes functions, often over the network. Each exposed access point is an entry door that must be authenticated, validated and monitored.",
      "whyWrong": {
        "a": "A virus spread through attachments is not an API.",
        "c": "An API is not a programming language reserved for browsers.",
        "d": "An API is not a hardware component."
      }
    },
    "fpc-q31": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "e"
      ],
      "explanation": "The attack surface gathers the possible interaction points: forms, APIs, ports, accounts. A purely aesthetic element or one unrelated to the system is not part of it.",
      "whyWrong": {
        "a": "A wallpaper offers no interaction point with the application.",
        "d": "A color choice opens no access to the application."
      }
    },
    "fpc-q11": {
      "type": "open",
      "model": "The client (browser, mobile app) runs on a machine the user controls: its code, its requests and the values it sends can be modified. An attacker can also send requests without going through the interface. The checks that matter (authentication, authorization, validation, price computation) must therefore be done on the server side. Example: a basket whose price is sent back by the browser; if the server does not recompute it, the attacker pays €1 instead of €100.",
      "criteria": [
        "Explains that the client is under the user’s control.",
        "Places the essential checks on the server side.",
        "Gives a consistent concrete example."
      ],
      "explanation": "The trust boundary lies between the client and the server: everything that crosses it is checked."
    },
    "fpc-q32": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Each call between services is an exchange point to authenticate and encrypt. A services architecture brings flexibility but enlarges the attack surface."
    },
    "fpc-q12": {
      "type": "single",
      "correct": "a",
      "explanation": "A loop (`for`, `while`) repeats a block of instructions, for example to process each line of a file or each item of a list.",
      "whyWrong": {
        "d": "Storing a named value corresponds to a variable.",
        "c": "Shutting down the machine is not the role of a loop.",
        "b": "A loop encrypts nothing by itself."
      }
    },
    "fpc-q13": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "e"
      ],
      "explanation": "Lists, dictionaries and variables organize data. The loop repeats instructions and the condition chooses whether to run them: neither is an encryption mechanism.",
      "whyWrong": {
        "d": "A loop repeats instructions, it encrypts nothing.",
        "a": "A condition chooses whether a block runs; it is the loop that repeats."
      }
    },
    "fpc-q33": {
      "type": "single",
      "correct": "d",
      "explanation": "The price exceeds 100: r = 10. The customer is a member: r = 15. The result is 200 − (200 × 15 / 100) = 200 − 30 = 170.",
      "whyWrong": {
        "b": "180 would correspond to a 10% discount only, without the member bonus.",
        "a": "190 would correspond to a 5% discount only.",
        "c": "200 would mean that no discount is applied."
      }
    },
    "fpc-q34": {
      "type": "single",
      "correct": "d",
      "explanation": "A dictionary retrieves a value from its key (for example a username associated with their rights). A list is an ordered sequence accessed by position.",
      "whyWrong": {
        "c": "A list is an ordered sequence accessed by position.",
        "a": "A loop repeats instructions.",
        "b": "A condition chooses an execution branch."
      }
    },
    "fpc-q35": {
      "type": "truefalse",
      "correct": true,
      "explanation": "This is command injection: characters such as the semicolon chain a second command. The input is validated or going through an interpreter is avoided."
    },
    "fpc-q36": {
      "type": "single",
      "correct": "b",
      "explanation": "The input is concatenated to a command: the semicolon chains a second command that reads a sensitive file. The input must be validated (allowed characters) or the interpreter avoided.",
      "whyWrong": {
        "c": "A stack overflow is a memory-management error, absent here.",
        "d": "Packet loss is a network phenomenon, unrelated to executing commands.",
        "a": "A quota overrun concerns disk space, not command execution."
      }
    },
    "fpc-q37": {
      "type": "short",
      "accepted": [
        "function"
      ],
      "explanation": "A function groups instructions under a name, which avoids repetition and makes reading and testing easier."
    },
    "fpc-q38": {
      "type": "open",
      "model": "The untrusted data is the “file” parameter, supplied by the client. Concatenated to the path, it allows a path traversal: with “../../etc/passwd”, the program reads a file outside the intended folder. Fixes: normalize the full path and check that it stays under “/var/www/docs/”, allow only a list of known names or characters, and run the program with minimal rights.",
      "criteria": [
        "Identifies the “file” parameter as untrusted input.",
        "Describes the path traversal (../).",
        "Suggests path validation or normalization."
      ],
      "explanation": "Any value coming from outside must be validated before it is used to build a path or a command."
    },
    "fpc-q39": {
      "type": "single",
      "correct": "c",
      "explanation": "The shell (Bash, PowerShell) reads the typed commands, interprets them and starts the matching programs. It also lets you write scripts.",
      "whyWrong": {
        "d": "A shell does not encrypt the disk’s files.",
        "a": "Displaying web pages is the browser’s job.",
        "b": "Power management is the operating system’s job."
      }
    },
    "fpc-q14": {
      "type": "truefalse",
      "correct": true,
      "explanation": "A command is explicit and can be replayed, documented and automated in a script, which is valuable in administration and investigation."
    },
    "fpc-q15": {
      "type": "short",
      "accepted": [
        "shell",
        "command interpreter",
        "command line interpreter"
      ],
      "explanation": "Bash is the usual shell of Linux and macOS, PowerShell that of Windows. They are studied in detail in modules C and D."
    },
    "fpc-q40": {
      "type": "single",
      "correct": "a",
      "explanation": "`cat` reads the file, the pipe sends the text to `grep`, which keeps only the lines containing “Failed”, then `wc -l` counts the remaining lines. No line is modified or deleted.",
      "whyWrong": {
        "d": "None of these commands modifies the file.",
        "b": "No `>` redirection writes to a file here.",
        "c": "The size in bytes comes from `wc -c` or `ls -l`, not from this chain that counts lines."
      }
    },
    "fpc-q41": {
      "type": "multi",
      "correct": [
        "a",
        "b"
      ],
      "explanation": "A command can be reread, replayed and included in a script. It also works remotely (SSH) and obviously does not prevent mistakes, which automation can even amplify.",
      "whyWrong": {
        "d": "On the contrary, it is often the only way to act on a remote server.",
        "c": "A wrong command runs as typed: caution remains necessary."
      }
    }
  },
};
