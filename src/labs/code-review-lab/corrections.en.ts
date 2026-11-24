import type { LabCorrections } from '../../content/types';

export const corrections: LabCorrections = {
  labId: 'code-review-lab',
  questions: {
    'cr-q1': { type: 'short', accepted: ['9', 'line 9', 'ligne 9'], explanation: '`printf(text)` interprets the name received from the network as a format: `%x` leaks the content of the stack, `%n` allows writing to memory. Fix: `printf("%s", text)` or `fputs(text, stdout)`.' },
    'cr-q2': { type: 'short', accepted: ['26', 'line 26', 'ligne 26'], explanation: '`items` is freed on line 25 then read on line 26. Depending on the allocator’s state, the read returns reused data, possibly controlled by the attacker.' },
    'cr-q3': { type: 'single', correct: 'b', explanation: 'n * 8 is computed then stored in 16 bits: 8192 × 8 = 65,536 becomes 0, 8193 × 8 becomes 8. malloc allocates a few bytes, but memcpy copies `(size_t)n * 8` bytes: a heap overflow controlled by the attacker.' },
    'cr-q4': { type: 'multi', correct: ['a', 'b'], explanation: 'memcpy (line 20) writes n × 8 bytes into an area of truncated size (heap overflow). strcpy (line 22) copies a name of arbitrary size into `name[32]` (stack overflow).', whyWrong: { c: 'free does not write into a user buffer; the problem is the read that follows.', d: 'A declaration writes nothing.' } },
    'cr-q5': { type: 'truefalse', correct: false, explanation: 'size is never used: the function reads packet[0], packet[1], then n × 8 bytes and a name without checking that they exist. An out-of-bounds read of the packet is possible from as little as 0 or 1 byte received.' },
    'cr-q6': {
      type: 'open',
      model: 'if (size < 2) return -1; size_t n = packet[0] | (packet[1] << 8); if (n > MAX_ITEMS || size - 2 < n * 8) return -1; /* n * 8 without overflow in size_t since n ≤ 65535 */ uint8_t *items = malloc(n * 8 ? n * 8 : 1); … memcpy(items, packet + 2, n * 8); const char *src = (const char *)packet + 2 + n * 8; size_t rest = size - 2 - n * 8; size_t len = strnlen(src, rest); if (len == rest || len >= NAME_MAX_LEN) { free(items); return -1; } memcpy(name, src, len + 1); fputs(name, stdout); … int result = (items[0] == 0xFF); free(items); return result;',
      criteria: ['The packet size is checked before each read.', 'The allocation size calculation uses size_t and is bounded.', 'The name copy is bounded by NAME_MAX_LEN and by the remaining size.', 'printf uses a literal format.', 'The read of items takes place before free.'],
      explanation: 'Every piece of data coming from the packet must be validated against the size actually received before use. A fuzzer with ASan would have found these five defects in a few seconds.',
    },
  },
  debrief: [
    { t: 'table', head: ['Line', 'Defect', 'Class'], rows: [['9', '`printf(text)`', 'Format string'], ['16–22', 'size never checked', 'Out-of-bounds read'], ['17', '`uint16_t total = n * 8`', 'Integer overflow'], ['20', 'memcpy into an area that is too small', 'Heap overflow'], ['22', 'strcpy into `name[32]`', 'Stack overflow'], ['26', 'read after free', 'Use-after-free']] },
    { t: 'callout', kind: 'key', title: 'Defensive measures', text: 'Validate each field against the size received, compute sizes in size_t with bounds, bounded copies, literal format, read then free in that order. In CI: compile with -Wall -Wformat-security, ASan and a fuzzer on `handle`. In the long run, rewrite the parser in a memory-safe language.' },
  ],
};
