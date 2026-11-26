import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'p-analyse-pratique',
  practice: {
    'lire-code': {
      blocks: [
        { t: 'p', text: '**Defect**: memory error (buffer overflow). The size announced by the message (up to 255) is compared neither with the size of `zone` (64 bytes) nor with the length actually received `len`.' },
        { t: 'p', text: '**Conditions**: a message whose first byte exceeds 64, or which announces more bytes than were received. The copy then writes outside `zone` (and may read outside `buf`).' },
        { t: 'code', lang: 'c', code: 'int lire_message(const uint8_t *buf, size_t len) {\n    char zone[64];\n    if (len < 1) return -1;\n    size_t taille = buf[0];\n    if (taille > sizeof zone || taille > len - 1) return -1;\n    memcpy(zone, buf + 1, taille);\n    return traiter(zone, taille);\n}' },
        { t: 'list', items: ['Non-regression test: a message announcing 200 bytes, a message announcing more than received, a message of length 0: all must be rejected.', 'Reread the other functions that use an announced size: the same pattern often exists elsewhere.'] },
      ],
    },
    'harnais-simple': {
      blocks: [
        { t: 'code', lang: 'c', code: 'int LLVMFuzzerTestOneInput(const uint8_t *data, size_t size) {\n    struct cfg c;\n    memset(&c, 0, sizeof c);\n    if (cfg_parse(data, size, &c) == 0)\n        cfg_free(&c);\n    return 0;\n}' },
        { t: 'list', items: ['Corpus: a few real, small configuration files, with empty sections, boundary values and comments.', 'Sanitizers: ASan and UBSan at compile time, run locally.', 'Crash: reproduce with the saved input, minimize, deduplicate by call stack, fix the cause, add the input to the regression corpus.'] },
      ],
    },
    'rapport-vuln': {
      blocks: [
        { t: 'list', items: ['**Report**: library and version, minimal 40-byte file, sanitizer trace, line concerned, impact, proposed fix, contact details.', '**Severity**: high for the service that processes customer files (untrusted input, network exposure, possible execution); lower for the local desktop tool, where the user must open the file themselves.', '**Disclosure**: maintainers’ security channel (security.txt or project policy), agreed delay of about 90 days, no publication before the fix.'] },
        { t: 'p', text: 'The score is then nuanced by the context of each product that uses the library: exposure, process rights, data processed.' },
      ],
    },
  },
};
