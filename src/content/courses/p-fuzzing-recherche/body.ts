import type { CourseBody } from '../../types';

export const body: CourseBody = {
  courseId: 'p-fuzzing-recherche',
  lesson: {
    intro:
      "Le fuzzing a découvert des dizaines de milliers de vulnérabilités dans les logiciels les plus utilisés au monde ; le programme OSS-Fuzz de Google en revendique à lui seul des milliers dans les projets libres. Aucune revue humaine n'explore les milliards de chemins d'un analyseur de fichiers ou de protocole. Ce cours présente les méthodes automatiques de recherche de vulnérabilités, leurs forces et leurs limites, et le cadre éthique de la divulgation.",
    sections: [
      {
        id: 'fuzzing',
        title: 'Fuzzing guidé par la couverture',
        blocks: [
          { t: 'def', term: 'Fuzzing', text: "Technique de test qui fournit à un programme un très grand nombre d'entrées générées ou mutées automatiquement, et détecte les comportements anormaux (plantage, erreur signalée par un sanitizer, dépassement de délai)." },
          { t: 'def', term: 'Couverture de code', text: "Mesure des parties du programme exécutées (blocs, arêtes du graphe de contrôle). Un fuzzer guidé par la couverture **conserve** les entrées qui atteignent de nouveaux chemins et les **mute** à leur tour : il « apprend » progressivement le format attendu." },
          { t: 'list', ordered: true, items: ['Instrumentation du programme à la compilation (compteurs de couverture), avec ASan/UBSan.', 'Corpus initial d’entrées valides (graines).', 'Boucle : choisir une entrée, la muter (inversions de bits, insertion de valeurs limites, recombinaison), l’exécuter, mesurer la couverture.', 'Nouvelle couverture → ajout au corpus ; plantage → sauvegarde de l’entrée reproduisant le défaut.'] },
          {
            t: 'table',
            head: ['Outil', 'Particularité'],
            rows: [['libFuzzer', 'Fuzzing en processus, très rapide, intégré à Clang'], ['AFL++', 'Fuzzer polyvalent, nombreux modes (binaire seul via QEMU, persistance)'], ['Honggfuzz', 'Retour d’information matériel possible'], ['OSS-Fuzz / ClusterFuzz', 'Infrastructure de fuzzing continu pour les projets libres']],
          },
        ],
      },
      {
        id: 'harnais',
        title: 'Harnais, corpus et dictionnaires',
        blocks: [
          { t: 'code', lang: 'c', caption: 'Harnais libFuzzer pour une fonction d’analyse', code: '#include <stdint.h>\n#include <stddef.h>\n#include "parser.h"\n\nint LLVMFuzzerTestOneInput(const uint8_t *data, size_t size) {\n    struct message m;\n    if (parse_message(data, size, &m) == 0) {\n        message_free(&m);           /* exercer aussi la libération */\n    }\n    return 0;                       /* pas d\'état global conservé */\n}' },
          { t: 'code', lang: 'bash', caption: 'Compilation et exécution', code: 'clang -g -O1 -fsanitize=fuzzer,address,undefined harness.c parser.c -o fuzz_parser\n./fuzz_parser -dict=protocole.dict -max_len=4096 corpus/ ' },
          { t: 'list', items: ['**Un harnais rapide et déterministe** : pas d’accès réseau ni disque, pas d’état global persistant entre exécutions.', '**Cibler la frontière de confiance** : la fonction qui reçoit les octets non fiables.', '**Corpus initial varié** : fichiers valides réels, cas limites.', '**Dictionnaire** des mots-clés du format (balises, en-têtes, constantes magiques) pour franchir les comparaisons.', '**Mesurer la couverture** obtenue et ajouter des harnais pour les zones non atteintes.'] },
          { t: 'callout', kind: 'tip', text: "Les comparaisons sur de longues constantes (`if (magic == 0x89504E47)`) bloquent les mutations aléatoires. Les fuzzers modernes les contournent par la journalisation des comparaisons (CmpLog, value profile) et les dictionnaires." },
        ],
      },
      {
        id: 'triage',
        title: 'Triage et exploitabilité',
        blocks: [
          { t: 'list', ordered: true, items: ['**Reproduire** le plantage avec l’entrée sauvegardée, sous ASan.', '**Dédupliquer** : regrouper par pile d’appels et type d’erreur (des milliers de plantages correspondent souvent à quelques défauts).', '**Minimiser** l’entrée (`-minimize_crash=1`, `afl-tmin`) pour isoler la cause.', '**Caractériser** : lecture ou écriture hors limites, use-after-free, déréférencement nul, assertion, boucle infinie.', '**Évaluer l’exploitabilité** : une écriture contrôlée sur le tas est bien plus grave qu’un déréférencement de pointeur nul (souvent simple déni de service).'] },
          {
            t: 'example',
            title: 'Lire un rapport ASan',
            blocks: [
              { t: 'code', lang: 'text', code: '==4211==ERROR: AddressSanitizer: heap-buffer-overflow on address 0x6020000000f8\nWRITE of size 8 at 0x6020000000f8 thread T0\n    #0 0x55d1 in decode_items parser.c:142\n    #1 0x55d1 in parse_message parser.c:88\n0x6020000000f8 is located 0 bytes to the right of 8-byte region\nallocated by thread T0 here:\n    #0 malloc\n    #1 decode_items parser.c:131' },
              { t: 'p', text: "Écriture de 8 octets juste après une zone de 8 octets allouée ligne 131 et écrite ligne 142 : **débordement de tas en écriture**, typiquement causé par un calcul de taille erroné. Gravité potentielle élevée, à analyser en priorité." },
            ],
          },
        ],
      },
      {
        id: 'formel',
        title: 'Exécution symbolique et vérification formelle',
        blocks: [
          { t: 'def', term: 'Exécution symbolique', text: "Analyse qui remplace les entrées par des symboles et collecte, le long de chaque chemin, les contraintes sur ces symboles. Un solveur (SMT) calcule ensuite une entrée concrète atteignant un chemin donné. Outils : KLEE, angr, Triton." },
          { t: 'p', text: "Elle franchit les conditions complexes que le fuzzing atteint difficilement, mais souffre de l'**explosion des chemins** sur les gros programmes. Les approches **concoliques** et **hybrides** (fuzzing + exécution symbolique ciblée) combinent les deux." },
          { t: 'def', term: 'Vérification formelle', text: "Preuve mathématique qu'un programme ou un protocole respecte une spécification pour **toutes** les entrées. Exemples : micronoyau seL4 prouvé, bibliothèques cryptographiques vérifiées (HACL*), analyse de protocoles avec ProVerif ou Tamarin (TLS 1.3 a été analysé ainsi)." },
          {
            t: 'table',
            head: ['Méthode', 'Garantie', 'Coût'],
            rows: [['Fuzzing', 'Trouve des bugs, ne prouve pas leur absence', 'Faible à mettre en place, gros calcul'], ['Exécution symbolique', 'Atteint des chemins précis', 'Moyen, limité par l’explosion des chemins'], ['Vérification formelle', 'Preuve d’absence de classes de défauts, relative à la spécification', 'Très élevé, expertise rare']],
          },
          { t: 'callout', kind: 'warn', text: "Une preuve formelle ne vaut que pour sa spécification et son modèle : un canal auxiliaire, une erreur de spécification ou une hypothèse irréaliste sur l'environnement restent possibles." },
        ],
      },
      {
        id: 'divulgation',
        title: 'Divulgation coordonnée',
        blocks: [
          { t: 'list', items: ['Ne rechercher que sur des logiciels qu’on a le droit de tester (code libre en local, programme de bug bounty, mission contractuelle).', 'Signaler à l’éditeur par son canal officiel (`security.txt`, programme de divulgation) avec une preuve minimale reproductible.', 'Convenir d’un délai avant publication (90 jours est une pratique courante), laissant le temps de corriger.', 'Demander un identifiant CVE via l’éditeur ou une autorité de numérotation.', 'En France, l’ANSSI peut servir d’intermédiaire ; l’article L. 2321-4 du Code de la défense protège, sous conditions, le lanceur d’alerte de bonne foi qui lui signale une vulnérabilité.'] },
          { t: 'callout', kind: 'legal', text: "Découvrir une vulnérabilité ne donne pas le droit de l'exploiter sur des systèmes tiers. Pour un service en ligne, toute vérification hors programme autorisé expose à des poursuites." },
        ],
      },
    ],
    useCases: [
      'Intégrer un fuzzing continu au pipeline d’un analyseur de format de fichier.',
      'Auditer une bibliothèque de protocole avant son adoption dans un produit.',
      'Participer à un programme de bug bounty et rédiger un signalement exploitable par l’éditeur.',
    ],
    commonMistakes: [
      'Écrire un harnais lent (accès disque, initialisation lourde à chaque appel).',
      'Fuzzer sans sanitizers : de nombreuses corruptions mémoire ne provoquent pas de plantage visible.',
      'Rapporter des centaines de plantages bruts sans déduplication ni minimisation.',
      'Considérer une campagne de fuzzing sans plantage comme une preuve de sécurité.',
      'Publier une vulnérabilité sans laisser à l’éditeur le temps de corriger.',
    ],
    bestPractices: [
      'Harnais rapides, déterministes, ciblant les frontières de confiance.',
      'ASan et UBSan systématiques, corpus initial de qualité, dictionnaires.',
      'Fuzzing continu (OSS-Fuzz, CI) et suivi de la couverture.',
      'Triage rigoureux : reproduction, déduplication, minimisation, analyse d’impact.',
      'Divulgation coordonnée par les canaux officiels.',
    ],
    keyPoints: [
      'Le fuzzing guidé par la couverture garde les entrées qui découvrent de nouveaux chemins.',
      'Un bon harnais cible la frontière de confiance et reste rapide.',
      'Triage : reproduire, dédupliquer, minimiser, caractériser.',
      'Fuzzing trouve, exécution symbolique cible, vérification formelle prouve (relativement à une spécification).',
    ],
  },
  practice: [
    {
      id: 'harnais-concevoir',
      kind: 'guided',
      title: 'Concevoir un harnais',
      context: [
        { t: 'p', text: 'Bibliothèque d’images : `int img_load(const char *chemin, struct image *out)` ouvre un fichier, puis appelle `int img_decode(const uint8_t *buf, size_t len, struct image *out)`. `img_free(struct image *)` libère l’image.' },
      ],
      steps: ['Choisir la fonction à cibler et justifier.', 'Écrire le harnais libFuzzer.', 'Proposer un corpus initial et un dictionnaire.'],
    },
    {
      id: 'triage-lot',
      kind: 'analysis',
      title: 'Trier un lot de plantages',
      context: [{ t: 'p', text: 'Une nuit de fuzzing a produit 2 300 entrées provoquant des plantages : 2 100 « SEGV on unknown address 0x000000000000 » dans `img_get_palette`, 180 « heap-buffer-overflow READ of size 1 » dans `rle_decode`, 20 « heap-use-after-free WRITE » dans `img_free`.' }],
      steps: ['Regrouper les plantages en défauts probables.', 'Prioriser selon la gravité potentielle.', 'Décrire la suite pour le défaut prioritaire.'],
    },
  ],
  questions: [
    { id: 'fz-q1', type: 'single', difficulty: 2, skills: ['p-fuzz'], prompt: 'Qu’est-ce qui distingue un fuzzer guidé par la couverture d’un fuzzer purement aléatoire ?', options: [{ id: 'a', text: 'Il conserve et mute les entrées qui atteignent de nouvelles parties du code' }, { id: 'b', text: 'Il n’exécute pas le programme' }, { id: 'c', text: 'Il nécessite une preuve formelle' }, { id: 'd', text: 'Il ne fonctionne que sur le réseau' }] },
    { id: 'fz-q2', type: 'truefalse', difficulty: 2, skills: ['p-fuzz'], prompt: 'Sans sanitizer, de nombreuses corruptions mémoire déclenchées par le fuzzer passent inaperçues car elles ne provoquent pas de plantage immédiat.' },
    { id: 'fz-q3', type: 'short', difficulty: 2, skills: ['p-fuzz'], prompt: 'Quel est le nom de la fonction point d’entrée qu’un harnais libFuzzer doit définir ?' },
    { id: 'fz-q4', type: 'multi', difficulty: 3, skills: ['p-fuzz', 'p-triage'], prompt: 'Quelles caractéristiques rendent un harnais efficace ?', options: [{ id: 'a', text: 'Exécution rapide, sans accès disque ni réseau' }, { id: 'b', text: 'Déterminisme : la même entrée produit le même comportement' }, { id: 'c', text: 'Un état global qui s’accumule entre les exécutions' }, { id: 'd', text: 'Ciblage de la fonction qui traite les octets non fiables' }] },
    { id: 'fz-q5', type: 'single', difficulty: 3, skills: ['p-fuzz'], prompt: 'Pourquoi fournir un dictionnaire au fuzzer ?', options: [{ id: 'a', text: 'Pour traduire les messages d’erreur' }, { id: 'b', text: 'Pour l’aider à produire les mots-clés et constantes du format, que des mutations aléatoires trouvent difficilement' }, { id: 'c', text: 'Pour chiffrer le corpus' }, { id: 'd', text: 'Pour réduire la couverture' }] },
    { id: 'fz-q6', type: 'single', difficulty: 3, skills: ['p-triage'], prompt: 'Lequel de ces défauts est en général le plus grave à traiter en priorité ?', options: [{ id: 'a', text: 'Déréférencement de pointeur nul en lecture' }, { id: 'b', text: 'Heap-use-after-free en écriture' }, { id: 'c', text: 'Dépassement de délai sur une entrée de 10 Mo' }, { id: 'd', text: 'Avertissement de compilation' }] },
    { id: 'fz-q7', type: 'multi', difficulty: 3, skills: ['p-triage'], prompt: 'Quelles étapes font partie du triage de plantages ?', options: [{ id: 'a', text: 'Reproduction sous sanitizer' }, { id: 'b', text: 'Déduplication par pile d’appels' }, { id: 'c', text: 'Minimisation de l’entrée' }, { id: 'd', text: 'Publication immédiate de toutes les entrées' }] },
    { id: 'fz-q8', type: 'truefalse', difficulty: 2, skills: ['p-triage', 'p-formal'], prompt: 'Une campagne de fuzzing de plusieurs semaines sans aucun plantage prouve l’absence de vulnérabilités.' },
    { id: 'fz-q9', type: 'short', difficulty: 3, skills: ['p-triage'], prompt: 'Dans un rapport ASan, quel type d’erreur est indiqué par « WRITE of size 8 … 0 bytes to the right of 8-byte region » sur une zone allouée par malloc ? (terme anglais d’ASan)' },
    { id: 'fz-q10', type: 'single', difficulty: 3, skills: ['p-formal'], prompt: 'Quel est le principal obstacle de l’exécution symbolique sur les gros programmes ?', options: [{ id: 'a', text: 'L’explosion du nombre de chemins' }, { id: 'b', text: 'L’absence de compilateur' }, { id: 'c', text: 'Le chiffrement des binaires' }, { id: 'd', text: 'La taille de l’écran' }] },
    { id: 'fz-q11', type: 'truefalse', difficulty: 3, skills: ['p-formal'], prompt: 'Une preuve formelle garantit la sécurité d’un système quelles que soient la spécification et les hypothèses retenues.' },
    { id: 'fz-q12', type: 'short', difficulty: 3, skills: ['p-formal'], prompt: 'Citez un outil d’analyse formelle de protocoles cryptographiques utilisé notamment pour TLS 1.3.' },
    { id: 'fz-q13', type: 'multi', difficulty: 2, skills: ['p-disclosure'], prompt: 'Quelles pratiques relèvent de la divulgation coordonnée ?', options: [{ id: 'a', text: 'Signaler par le canal officiel de l’éditeur (security.txt, programme)' }, { id: 'b', text: 'Laisser un délai raisonnable avant publication' }, { id: 'c', text: 'Vendre la vulnérabilité au plus offrant sans prévenir l’éditeur' }, { id: 'd', text: 'Fournir une preuve minimale reproductible' }] },
    { id: 'fz-q14', type: 'open', difficulty: 4, skills: ['p-fuzz', 'p-triage'], prompt: 'Écrivez (ou décrivez précisément) un harnais libFuzzer pour `img_decode(const uint8_t *buf, size_t len, struct image *out)`, et expliquez pourquoi vous ne ciblez pas `img_load`.' },
    { id: 'fz-q15', type: 'open', difficulty: 4, skills: ['p-triage', 'p-disclosure'], prompt: 'Pour le lot de 2 300 plantages (2 100 SEGV adresse nulle, 180 lectures hors limites, 20 use-after-free en écriture), proposez la priorisation, la démarche d’analyse et la communication à l’éditeur.' },
    { id: 'fz-q16', type: 'single', difficulty: 2, skills: ['p-disclosure'], prompt: 'Quel fichier standardisé publié par un site indique comment lui signaler une vulnérabilité ?', options: [{ id: 'a', text: 'robots.txt' }, { id: 'b', text: 'security.txt (/.well-known/security.txt)' }, { id: 'c', text: 'humans.txt' }, { id: 'd', text: 'sitemap.xml' }] },
  ],
  resources: [
    { title: 'libFuzzer — a library for coverage-guided fuzz testing', source: 'LLVM', url: 'https://llvm.org/docs/LibFuzzer.html' },
    { title: 'AFL++', source: 'Projet AFLplusplus', url: 'https://aflplus.plus/' },
    { title: 'OSS-Fuzz', source: 'Google', url: 'https://google.github.io/oss-fuzz/' },
    { title: 'RFC 9116 — security.txt', source: 'IETF', url: 'https://www.rfc-editor.org/rfc/rfc9116' },
  ],
};
