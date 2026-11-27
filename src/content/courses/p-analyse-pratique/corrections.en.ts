// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.en.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "p-analyse-pratique",
  questions: {
    "pra-q1": {
      "type": "single",
      "correct": "b",
      "explanation": "Writing outside an array is a memory error: it can corrupt other data, crash the program or be hijacked.",
      "whyWrong": {
        "c": "Text formatting is not a write past the end of an array.",
        "d": "Message translation has no link with out-of-bounds writes.",
        "a": "A user input mistake is not this class of code defect."
      }
    },
    "pra-q2": {
      "type": "single",
      "correct": "a",
      "explanation": "After release, the area may be reused for something else: using it again reads or writes data that is no longer its own.",
      "whyWrong": {
        "b": "That is another defect: memory is never given back.",
        "c": "That is another defect.",
        "d": "A variable name collision is a scope issue, not use after free."
      }
    },
    "pra-q3": {
      "type": "single",
      "correct": "c",
      "explanation": "An injection occurs when user-controlled data is interpreted as a command or query.",
      "whyWrong": {
        "b": "A hardware failure is not a defect caused by unchecked data.",
        "d": "A memory leak is a resource management defect, not injection.",
        "a": "A stack overflow occurs without a query interpreter."
      }
    },
    "pra-q4": {
      "type": "single",
      "correct": "d",
      "explanation": "An integer overflow can yield a size that is too small: the allocated area is insufficient and the copy that follows overflows.",
      "whyWrong": {
        "b": "The processor does not corrupt memory by heating: it is a calculation flaw.",
        "a": "Integers are not “stored in clear”: the problem is the calculation overflowing.",
        "c": "The compiler does not remove the area: a bad calculation undersizes it."
      }
    },
    "pra-q5": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Uncontrolled external data (size, format, content) is the cause of many overflows and injections. We validate at the trust boundary."
    },
    "pra-q6": {
      "type": "truefalse",
      "correct": false,
      "explanation": "When two operations compete for a resource, a control can be bypassed (check then use). Locks and atomic operations fix the defect."
    },
    "pra-q7": {
      "type": "short",
      "accepted": [
        "cwe"
      ],
      "explanation": "CWE gives a common name to each class of weakness: it is used to classify defects, train and compare tools."
    },
    "pra-q8": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Everything that crosses the trust boundary (file, request, announced size) is checked. A constant in the code is controlled by the team.",
      "whyWrong": {
        "b": "It is controlled by the team."
      }
    },
    "pra-q9": {
      "type": "single",
      "correct": "a",
      "explanation": "The debugger lets you stop the program, observe variables and the call stack and understand what precedes the error.",
      "whyWrong": {
        "c": "A debugger encrypts no file.",
        "b": "It is not used to speed up a connection.",
        "d": "Backing up code is the job of a version control system."
      }
    },
    "pra-q10": {
      "type": "single",
      "correct": "b",
      "explanation": "The sanitizer adds runtime checks: a memory error or undefined behavior is reported immediately, with the call stack.",
      "whyWrong": {
        "a": "It detects, it does not fix.",
        "c": "A sanitizer encrypts no data: it detects errors.",
        "d": "On the contrary it slows things down."
      }
    },
    "pra-q11": {
      "type": "single",
      "correct": "c",
      "explanation": "A reproducible crash makes it possible to check the hypothesis, fix and see that the original input no longer crashes.",
      "whyWrong": {
        "d": "Reproducing serves to understand a crash, not to accumulate them.",
        "a": "You must read the code.",
        "b": "The test goes with the fix."
      }
    },
    "pra-q12": {
      "type": "single",
      "correct": "d",
      "explanation": "Static analysis examines the code without running it: useful to spot risky patterns, with false positives and without seeing everything.",
      "whyWrong": {
        "a": "That is profiling.",
        "c": "It does not replace review.",
        "b": "It is not limited to the network."
      }
    },
    "pra-q13": {
      "type": "truefalse",
      "correct": true,
      "explanation": "It can be replayed at will, observed, a hypothesis tested and the fix verified. A sporadic crash first requires finding how to trigger it."
    },
    "pra-q14": {
      "type": "short",
      "accepted": [
        "ubsan",
        "ub-san"
      ],
      "explanation": "UBSan (UndefinedBehaviorSanitizer) reports signed integer overflows, invalid shifts and other undefined behavior."
    },
    "pra-q15": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Call stack, input and version make it possible to reproduce and locate the defect. The wallpaper has nothing to do with it.",
      "whyWrong": {
        "a": "The tester’s wallpaper adds nothing to the analysis."
      }
    },
    "pra-q16": {
      "type": "open",
      "model": "I first try to reproduce the crash: I gather the exact version, the input or actions that precede it, the configuration and the logs. If the crash is not reproducible, I enable traces and sanitizers in a test environment and try to replay the conditions. Once reproduced, I observe the call stack and the error type, trace back to the data involved and the line concerned, then verify my hypothesis with an assertion or a targeted test. I fix the cause, not the symptom, replay the original input and add a non-regression test. Finally I reread the neighboring code to see whether the same pattern exists elsewhere.",
      "criteria": [
        "Reproducing the crash is the first step.",
        "Observing the call stack and tracing back to the cause are described.",
        "Fixing the cause and the non-regression test are mentioned."
      ],
      "explanation": "The approach always follows the same thread: reproduce, isolate, fix the cause, replay and protect with a test."
    },
    "pra-q17": {
      "type": "single",
      "correct": "c",
      "explanation": "The harness is the function that receives the fuzzer’s bytes and passes them to the function to test, then frees the resources.",
      "whyWrong": {
        "a": "That would greatly slow down the test.",
        "d": "That would greatly slow down the test.",
        "b": "Choosing the compiler is not a fuzzing harness’s job."
      }
    },
    "pra-q18": {
      "type": "single",
      "correct": "a",
      "explanation": "A minimal input only contains what triggers the defect: it is simpler to analyze and to attach to a report.",
      "whyWrong": {
        "b": "That is the opposite.",
        "c": "It still reproduces the crash.",
        "d": "Minimizing an input does not encrypt it."
      }
    },
    "pra-q19": {
      "type": "single",
      "correct": "b",
      "explanation": "The format’s keywords and constants are hard to guess by mutation: the dictionary lets the fuzzer get past the first comparisons faster.",
      "whyWrong": {
        "d": "A dictionary has no translation function.",
        "a": "It does not compress results.",
        "c": "It removes no input: it supplies elements of the format."
      }
    },
    "pra-q20": {
      "type": "single",
      "correct": "d",
      "explanation": "Coverage shows the blocks reached and those that are not: it guides the addition of seeds, dictionaries and harnesses.",
      "whyWrong": {
        "c": "Coverage does not measure machine speed.",
        "a": "It does not count developers.",
        "b": "It does not check disk space."
      }
    },
    "pra-q21": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Seeds covering different variants of the format give the fuzzer several starting points and reach different code faster."
    },
    "pra-q22": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Without a sanitizer, a corruption that does not cause an immediate crash goes unnoticed: instrumentation makes these errors visible and precise."
    },
    "pra-q23": {
      "type": "short",
      "accepted": [
        "libfuzzer",
        "lib-fuzzer"
      ],
      "explanation": "libFuzzer runs the tested code in its own process, which makes it very fast, and relies on coverage."
    },
    "pra-q24": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Direct call, resource release and no input/output make the harness fast and reproducible. Retained global state distorts the results.",
      "whyWrong": {
        "b": "Retained state makes crashes non-reproducible."
      }
    },
    "pra-q25": {
      "type": "single",
      "correct": "b",
      "explanation": "A receiver cannot assume the sender is honest or that the message is well formed: it checks lengths, fields and sequence.",
      "whyWrong": {
        "c": "That is a dangerous assumption.",
        "a": "Validation adds a check: it does not always speed up the network.",
        "d": "It does not replace encryption."
      }
    },
    "pra-q26": {
      "type": "single",
      "correct": "c",
      "explanation": "The signature proves that the update really comes from the vendor and has not been modified: an altered file is refused.",
      "whyWrong": {
        "a": "The signature does not measure download speed.",
        "d": "It does not concern size on disk.",
        "b": "It does not protect the displayed file name."
      }
    },
    "pra-q27": {
      "type": "single",
      "correct": "d",
      "explanation": "If the receiver accepts the same command a second time, a captured message can be replayed: protection is a nonce, a counter or a timestamp.",
      "whyWrong": {
        "c": "Writing a new message is not a replay.",
        "a": "Deleting a message before it arrives is interception.",
        "b": "Encrypting with a fresh key is not a replay."
      }
    },
    "pra-q28": {
      "type": "single",
      "correct": "a",
      "explanation": "A nonce or a counter signed with the message makes it possible to refuse a message already seen or out of sequence.",
      "whyWrong": {
        "d": "A color does not distinguish a replayed message from a new one.",
        "c": "Does not protect against replay.",
        "b": "That encourages replay."
      }
    },
    "pra-q29": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Without signature verification, the device accepts any image: an attacker who replaces it controls the device, even after a restart."
    },
    "pra-q30": {
      "type": "short",
      "accepted": [
        "nonce"
      ],
      "explanation": "The nonce (number used once) makes an already seen message be refused: a captured message can no longer be accepted a second time."
    },
    "pra-q31": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Lengths, sequence and authentication limit malformed, replayed or forged messages. Accepting unknown fields opens possibilities for bypass.",
      "whyWrong": {
        "c": "It opens possibilities for bypass."
      }
    },
    "pra-q32": {
      "type": "open",
      "model": "Every update is signed by the vendor and the device verifies the signature before installing, with a verification key protected in hardware. I add rollback protection to prevent installing an old vulnerable version. The transfer goes through an encrypted and authenticated channel. The device keeps a previous healthy version to fall back to on failure, and a verified boot checks the image at startup. I include an update log and a bill of materials of the components to react quickly to a vulnerability.",
      "criteria": [
        "Signing updates and verifying the signature are planned.",
        "Rollback protection is cited.",
        "A safe channel, verified boot or recovery on failure are mentioned."
      ],
      "explanation": "An update is a privileged entry channel: authenticity, freshness and safe recovery are essential."
    },
    "pra-q33": {
      "type": "single",
      "correct": "c",
      "explanation": "The report must make it possible to understand, reproduce and prioritize: product, version, minimal manipulation, impact and, if possible, a proposed fix.",
      "whyWrong": {
        "a": "Third-party data must not be kept.",
        "d": "That is blackmail.",
        "b": "That would be a weapon."
      }
    },
    "pra-q34": {
      "type": "single",
      "correct": "b",
      "explanation": "The test replays the input that caused the defect: if a later change reintroduces it, the validation fails.",
      "whyWrong": {
        "c": "The test does not delete the old code.",
        "a": "It complements review.",
        "d": "It does not measure compiler speed."
      }
    },
    "pra-q35": {
      "type": "single",
      "correct": "d",
      "explanation": "We address the cause: the size is compared with the buffer capacity and with the length actually received before any copy.",
      "whyWrong": {
        "c": "That does not fix the cause.",
        "b": "The defect would be hidden.",
        "a": "The defect remains."
      }
    },
    "pra-q36": {
      "type": "single",
      "correct": "a",
      "explanation": "The score estimates a general severity. Internet exposure, process rights and data sensitivity change the real priority.",
      "whyWrong": {
        "c": "A score is not always zero.",
        "b": "The score does not change each time the report is read.",
        "d": "It applies to any software."
      }
    },
    "pra-q37": {
      "type": "truefalse",
      "correct": false,
      "explanation": "The defect remains and can show up differently. We fix the cause (the missing check) and reread the neighboring code."
    },
    "pra-q38": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "A test, an explanation of the cause and a second review make the fix durable. Deleting the report loses the trace of the defect.",
      "whyWrong": {
        "a": "The trace of the defect would be lost."
      }
    },
    "pra-q39": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Exposure, rights obtained and data concerned determine the real impact. The logo has no influence.",
      "whyWrong": {
        "a": "The color of the logo does not influence a vulnerability’s severity."
      }
    },
    "pra-q40": {
      "type": "short",
      "accepted": [
        "cvss"
      ],
      "explanation": "CVSS gives a score from 0 to 10 based on criteria such as ease of exploitation and impact; it is interpreted with the context."
    }
  },
};
