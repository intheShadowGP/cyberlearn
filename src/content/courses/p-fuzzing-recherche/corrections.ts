import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: 'p-fuzzing-recherche',
  questions: {
    'fz-q1': { type: 'single', correct: 'a', explanation: 'Le retour de couverture transforme une recherche aveugle en exploration guidée : chaque entrée qui ouvre un nouveau chemin devient un point de départ pour d’autres mutations.' },
    'fz-q2': { type: 'truefalse', correct: true, explanation: 'Un débordement de quelques octets ou un use-after-free peut corrompre silencieusement la mémoire sans plantage. ASan rend ces erreurs immédiatement visibles et précises.' },
    'fz-q3': { type: 'short', accepted: ['llvmfuzzertestoneinput', 'llvmfuzzertestoneinput()'], explanation: 'libFuzzer appelle `LLVMFuzzerTestOneInput(const uint8_t *data, size_t size)` pour chaque entrée générée ; la fonction doit renvoyer 0.' },
    'fz-q4': { type: 'multi', correct: ['a', 'b', 'd'], explanation: 'Vitesse (des milliers d’exécutions par seconde), déterminisme (reproductibilité des plantages) et ciblage de la frontière de confiance font l’efficacité d’un harnais.', whyWrong: { c: 'Un état global accumulé rend les plantages non reproductibles et fausse la couverture.' } },
    'fz-q5': { type: 'single', correct: 'b', explanation: 'Un dictionnaire de jetons (en-têtes, mots-clés, constantes magiques) permet au fuzzer de franchir rapidement les comparaisons qui protègent les parties profondes de l’analyseur.' },
    'fz-q6': { type: 'single', correct: 'b', explanation: 'Une écriture après libération permet souvent de corrompre des structures contrôlées par l’attaquant : potentiellement exécution de code. Un déréférencement nul est généralement un déni de service.' },
    'fz-q7': { type: 'multi', correct: ['a', 'b', 'c'], explanation: 'Reproduire, regrouper et minimiser permettent de passer de milliers d’entrées à une liste courte de défauts compris.', whyWrong: { d: 'Publier des entrées de plantage avant correction revient à publier des preuves de concept d’exploitation.' } },
    'fz-q8': { type: 'truefalse', correct: false, explanation: 'Le fuzzing ne prouve pas l’absence de défaut : des chemins peuvent rester inexplorés (couverture incomplète) ou ne pas déclencher d’erreur détectable. Il faut mesurer la couverture et compléter par d’autres méthodes.' },
    'fz-q9': { type: 'short', accepted: ['heap-buffer-overflow', 'heap buffer overflow'], explanation: 'ASan signale un heap-buffer-overflow : l’accès se situe juste après la fin d’une zone allouée sur le tas. En écriture, c’est un défaut à forte gravité potentielle.' },
    'fz-q10': { type: 'single', correct: 'a', explanation: 'Chaque branche dépendant d’une entrée double potentiellement le nombre de chemins : les boucles et les gros programmes deviennent intraitables. D’où les approches hybrides qui n’utilisent le solveur que pour franchir des conditions précises.' },
    'fz-q11': { type: 'truefalse', correct: false, explanation: 'Une preuve est relative à une spécification et à un modèle (du matériel, du compilateur, de l’environnement). Une spécification incomplète ou une hypothèse fausse laisse place à des vulnérabilités.' },
    'fz-q12': { type: 'short', accepted: ['tamarin', 'proverif', 'tamarin prover', 'cryptoverif'], explanation: 'Tamarin et ProVerif ont été utilisés pour analyser TLS 1.3 pendant sa conception, ce qui a permis de corriger des faiblesses avant publication.' },
    'fz-q13': { type: 'multi', correct: ['a', 'b', 'd'], explanation: 'Canal officiel, délai de correction et preuve minimale sont les piliers de la divulgation coordonnée.', whyWrong: { c: 'Vendre une vulnérabilité sans en informer l’éditeur expose les utilisateurs et, selon les cas, engage la responsabilité pénale du vendeur.' } },
    'fz-q14': {
      type: 'open',
      model: 'int LLVMFuzzerTestOneInput(const uint8_t *data, size_t size) { struct image img; memset(&img, 0, sizeof img); if (img_decode(data, size, &img) == 0) { img_free(&img); } return 0; } — On cible img_decode car elle reçoit directement les octets non fiables ; img_load ajoute un accès disque (lent, non déterministe, création de fichiers temporaires) sans intérêt pour la recherche de défauts de décodage. Corpus initial : petites images valides de chaque variante du format (avec et sans palette, compression RLE…) ; dictionnaire : signatures et noms de blocs du format.',
      criteria: ['Le harnais appelle img_decode avec le tampon fourni et libère l’image.', 'L’exclusion d’img_load est justifiée par la vitesse et le déterminisme.', 'Un corpus initial et un dictionnaire pertinents sont proposés.'],
      explanation: 'Libérer l’image dans le harnais exerce aussi le code de libération, souvent à l’origine des use-after-free et double free.',
    },
    'fz-q15': {
      type: 'open',
      model: 'Regroupement probable : 3 défauts (un par signature et fonction), à confirmer par déduplication sur la pile complète. Priorité : 1) use-after-free en écriture dans img_free (20 entrées) : potentiellement exploitable pour exécuter du code ; 2) lecture hors limites dans rle_decode (180) : fuite d’information, parfois combinable ; 3) SEGV adresse nulle dans img_get_palette (2 100) : déni de service probable, très fréquent mais peu grave. Démarche pour le premier : minimiser une entrée, analyser la durée de vie de l’objet (où il est libéré, où il est réutilisé), écrire un correctif et un test de non-régression, vérifier les versions affectées. Communication : rapport à l’éditeur via son canal sécurité avec entrées minimisées, traces ASan, versions concernées, évaluation de gravité, proposition de correctif, et délai de divulgation convenu (par exemple 90 jours).',
      criteria: ['Les plantages sont regroupés par défaut et non traités un par un.', 'La priorisation suit la gravité (UAF en écriture > lecture OOB > pointeur nul), pas le nombre d’occurrences.', 'La démarche d’analyse inclut minimisation et compréhension de la cause.', 'La communication suit une divulgation coordonnée.'],
      explanation: 'Le nombre d’occurrences d’un plantage reflète la facilité à le déclencher, pas sa gravité.',
    },
    'fz-q16': { type: 'single', correct: 'b', explanation: 'Le fichier security.txt (RFC 9116), placé dans /.well-known/, indique les contacts et la politique de divulgation d’un site.' },
  },
};
