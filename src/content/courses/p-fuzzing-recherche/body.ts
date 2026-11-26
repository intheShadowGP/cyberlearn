import type { CourseBody } from '../../types';
import { questions } from './questions';

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
          { t: 'callout', kind: 'warn', title: 'Limites des sanitizers', text: "Chaque sanitizer ne détecte que **sa** classe de défauts : ASan les accès mémoire spatiaux et temporels (débordements, use-after-free), UBSan les comportements indéfinis, MSan les lectures de mémoire non initialisée. Aucun ne voit les **bugs de logique**. ASan et MSan ne peuvent pas s’exécuter ensemble, l’instrumentation ralentit l’exécution (donc rarement en production), et une campagne sans plantage ne prouve que l’absence des défauts effectivement instrumentés — pas l’absence de vulnérabilité." },
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
      {
        id: 'continu',
        title: 'Fuzzing continu et intégration à la chaîne de livraison',
        blocks: [
          { t: 'p', text: 'Une campagne ponctuelle trouve les défauts du jour, pas ceux que le prochain correctif réintroduira. Le **fuzzing continu** s’intègre à la chaîne de développement : chaque changement de code est testé, les anciens plantages corrigés sont rejoués et la couverture est suivie dans le temps.' },
          {
            t: 'table',
            head: ['Étape', 'Objectif', 'Mise en œuvre'],
            rows: [
              ['**Fuzzing court par demande de fusion**', 'Détecter vite une régression évidente', 'Quelques minutes sur le corpus existant, plantage = échec de la validation'],
              ['**Campagne longue planifiée**', 'Explorer en profondeur', 'Nuit ou week-end, sur une grappe ou OSS-Fuzz / ClusterFuzz'],
              ['**Rejeu des plantages corrigés**', 'Empêcher le retour d’un défaut', 'Entrées de plantage versionnées dans les tests de non-régression'],
              ['**Suivi de la couverture**', 'Repérer les zones jamais atteintes', 'Rapport de couverture, nouveaux harnais pour les trous'],
            ],
          },
          { t: 'def', term: 'Corpus de régression', text: 'Ensemble d’entrées (graines utiles et entrées ayant déjà provoqué un plantage corrigé) conservé avec le code. Le rejouer à chaque changement coûte quelques secondes et garantit qu’un défaut corrigé ne revient pas.' },
          { t: 'def', term: 'Fuzzing continu', text: 'Exécution permanente ou récurrente du fuzzing sur la dernière version du code, avec ouverture automatique de signalements dédupliqués, vérification de la correction et suivi de la couverture.' },
          { t: 'list', items: ['**Séparer** les exécutions courtes (validation) des campagnes longues (recherche).', '**Mutualiser** et minimiser le corpus : un corpus trop gros ralentit sans apporter de couverture.', '**Automatiser** le triage : déduplication, minimisation, rattachement à un propriétaire.', '**Fixer un délai de correction** selon la gravité et vérifier la correction par rejeu.'] },
          { t: 'callout', kind: 'tip', text: 'Un plantage trouvé par l’intégration continue doit devenir un test de non-régression permanent : l’entrée qui l’a provoqué rejoint le corpus.' },
        ],
      },
      {
        id: 'structure',
        title: 'Fuzzing structuré, différentiel et de protocoles à état',
        blocks: [
          { t: 'p', text: 'Les mutations d’octets seules peinent sur les formats très structurés (grammaires, messages imbriqués, protocoles avec état). Des techniques adaptées permettent d’atteindre la logique profonde de l’analyseur.' },
          {
            t: 'table',
            head: ['Technique', 'Principe', 'Cas d’usage'],
            rows: [
              ['**Mutation structurée**', 'Muter un arbre ou un message typé plutôt que des octets (libprotobuf-mutator, grammaires)', 'Formats imbriqués, langages, API typées'],
              ['**Fuzzing différentiel**', 'Fournir la même entrée à plusieurs implémentations et comparer', 'Analyseurs concurrents, bibliothèques cryptographiques'],
              ['**Protocoles à état**', 'Rejouer des séquences de messages, restaurer un état connu', 'Serveurs de protocole, machines à états'],
              ['**Harnais par couche**', 'Cibler séparément transport, décodage et logique', 'Piles complexes difficiles à atteindre d’un coup'],
            ],
          },
          { t: 'def', term: 'Fuzzing différentiel', text: 'Technique qui exécute plusieurs implémentations d’une même spécification sur la même entrée et signale les divergences. Elle détecte des erreurs sans plantage : validation de certificats trop permissive, interprétations ambiguës.' },
          { t: 'def', term: 'Mutation structurée', text: 'Mutation qui conserve la validité syntaxique de l’entrée en opérant sur sa structure (champs, arbre syntaxique) : les entrées atteignent plus vite les couches profondes au lieu d’être rejetées par le premier contrôle.' },
          {
            t: 'example',
            title: 'Une divergence entre deux analyseurs',
            blocks: [
              { t: 'p', text: 'Deux bibliothèques de lecture de documents structurés reçoivent la même entrée : l’une la rejette, l’autre l’accepte en ignorant un champ dupliqué. La divergence n’est pas un plantage, mais elle révèle une ambiguïté exploitable si un composant valide et un autre interprète : elle est signalée aux deux projets.' },
            ],
          },
          { t: 'list', items: ['**Valider** le format avant d’entrer dans la logique, pour que les mutations ne soient pas rejetées d’emblée.', '**Isoler l’état** : réinitialiser ou restaurer le serveur entre deux séquences pour garder la reproductibilité.', '**Trier** les divergences : bug de l’une, de l’autre ou ambiguïté de la spécification.'] },
          { t: 'callout', kind: 'warn', text: 'Une divergence n’est pas toujours une vulnérabilité : elle peut refléter un choix permis par la spécification. Elle doit être analysée avant tout signalement.' },
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
    {
      id: 'ci-fuzzing',
      kind: 'case',
      title: 'Cas : mettre en place le fuzzing continu d’une bibliothèque',
      context: [
        { t: 'p', text: 'Une équipe maintient une bibliothèque de lecture de fichiers d’archive utilisée par plusieurs produits. Elle publie une version par mois et un défaut de mémoire corrigé il y a six mois vient de réapparaître. Elle dispose d’une intégration continue et d’une grappe de calcul disponible la nuit.' },
      ],
      steps: ['Décrivez les exécutions de fuzzing à placer dans la validation des changements et celles à planifier.', 'Expliquez comment éviter le retour d’un défaut déjà corrigé.', 'Précisez le traitement automatique d’un plantage trouvé et le délai de correction.', 'Proposez deux indicateurs pour suivre l’efficacité de la démarche.'],
    },
  ],
  questions,
  resources: [
    { title: 'libFuzzer — a library for coverage-guided fuzz testing', source: 'LLVM', url: 'https://llvm.org/docs/LibFuzzer.html' },
    { title: 'AFL++', source: 'Projet AFLplusplus', url: 'https://aflplus.plus/' },
    { title: 'OSS-Fuzz', source: 'Google', url: 'https://google.github.io/oss-fuzz/' },
    { title: 'RFC 9116 — security.txt', source: 'IETF', url: 'https://www.rfc-editor.org/rfc/rfc9116' },
  ],
};
