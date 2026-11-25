import type { CourseMetaText } from '../../types';

export const metaText: CourseMetaText = {
  title: 'Defensive reverse engineering: binaries, disassembly, debugging and tools',
  summary:
    'Deepen malware analysis through defensive reverse engineering: read a binary format (PE, ELF), understand disassembly and supervised debugging, use the reference tools (Ghidra, IDA, x64dbg), recognize obfuscation and analyze unpacked code, understand how bootkits and keyloggers work to better detect them, and turn the analysis into configuration, rules and a report.',
  objectives: [
    'Read the structure of a binary (PE, ELF): sections, imports, exports, entry points.',
    'Explain what disassembly is and read a few notions of assembly.',
    'Describe the role of debugging in analysis, carried out in an isolated environment.',
    'Place the reverse-engineering tools (Ghidra, IDA, x64dbg) and their uses.',
    'Understand, for detection and prevention purposes, how bootkits and keyloggers work.',
    'Recognize common protections (string encryption, dynamic resolution, packing, anti-debugging) and know how to get around them for defensive analysis.',
    'Turn a binary analysis into configuration, indicators, detection rules and a report, within the legal framework.',
  ],
  prerequisiteKnowledge: ['Malware typology, static and dynamic analysis, YARA, IOC (course k-malware-analyse)', 'Notions of architecture and memory (module A)'],
  skills: {
    'k-binaires': 'Binary formats and low-level analysis',
    'k-desassemblage-debogage': 'Disassembly and debugging',
    'k-outils-re': 'Reverse-engineering tools',
    'k-familles': 'Bootkits and keyloggers: operation and detection',
    'k-obfuscation': 'Obfuscation and unpacked code',
    'k-re-detection': 'From binary to detection',
  },
};
