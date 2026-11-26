import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'p-fuzzing-recherche',
  practice: {
    'harnais-concevoir': {
      blocks: [
        { t: 'code', lang: 'c', code: '#include <stdint.h>\n#include <string.h>\n#include "img.h"\n\nint LLVMFuzzerTestOneInput(const uint8_t *data, size_t size) {\n    struct image img;\n    memset(&img, 0, sizeof img);\n    if (img_decode(data, size, &img) == 0)\n        img_free(&img);\n    return 0;\n}' },
        { t: 'list', items: ['Target: `img_decode`, the trust boundary, with no input/output.', 'Corpus: a few tiny images covering each variant of the format.', 'Dictionary: format signature, block names, boundary values (0, 0xFFFF, 0xFFFFFFFF).'] },
      ],
    },
    'triage-lot': {
      blocks: [
        { t: 'list', ordered: true, items: ['**Write UAF** in img_free: priority 1 (code execution possible).', '**Out-of-bounds read** in rle_decode: priority 2 (information leak).', '**Null pointer** in img_get_palette: priority 3 (denial of service).'] },
        { t: 'p', text: 'For priority 1: minimize the input, trace allocation, release and reuse (ASan provides the three stacks), fix, add the input to the regression corpus, then report to the vendor if the library is third-party.' },
      ],
    },
    'ci-fuzzing': {
      blocks: [
        { t: 'list', ordered: true, items: ['**Change validation**: short fuzzing (a few minutes) on the existing corpus, under ASan and UBSan; a crash fails the validation.', '**Scheduled campaign**: long runs at night on the cluster, with a pooled and minimized corpus.', '**Non-regression**: every input that caused a fixed crash is added to the regression corpus, replayed at every change.', '**Crash found**: deduplication, minimization, automatic opening of a report assigned to an owner, fix deadline according to severity (urgent for an out-of-bounds write), replay to confirm the fix.'] },
        { t: 'list', items: ['**Indicator 1**: coverage of the code blocks reached by the harnesses, and zones with no harness.', '**Indicator 2**: delay between detection and fix, and number of reintroduced defects (goal: zero).'] },
      ],
    },
  },
};
