import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'p-fuzzing-recherche',
  practice: {
    'harnais-concevoir': {
      blocks: [
        { t: 'code', lang: 'c', code: '#include <stdint.h>\n#include <string.h>\n#include "img.h"\n\nint LLVMFuzzerTestOneInput(const uint8_t *data, size_t size) {\n    struct image img;\n    memset(&img, 0, sizeof img);\n    if (img_decode(data, size, &img) == 0)\n        img_free(&img);\n    return 0;\n}' },
        { t: 'list', items: ['Cible : `img_decode`, frontière de confiance, sans entrée-sortie.', 'Corpus : quelques images minuscules couvrant chaque variante du format.', 'Dictionnaire : signature du format, noms de blocs, valeurs limites (0, 0xFFFF, 0xFFFFFFFF).'] },
      ],
    },
    'triage-lot': {
      blocks: [
        { t: 'list', ordered: true, items: ['**UAF en écriture** dans img_free : priorité 1 (exécution de code possible).', '**Lecture hors limites** dans rle_decode : priorité 2 (fuite d’information).', '**Pointeur nul** dans img_get_palette : priorité 3 (déni de service).'] },
        { t: 'p', text: 'Pour la priorité 1 : minimiser l’entrée, tracer allocation, libération et réutilisation (ASan fournit les trois piles), corriger, ajouter l’entrée au corpus de régression, puis signaler à l’éditeur si la bibliothèque est tierce.' },
      ],
    },
  },
};
