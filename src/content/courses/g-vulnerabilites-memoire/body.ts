import type { CourseBody } from '../../types';

export const body: CourseBody = {
  courseId: 'g-vulnerabilites-memoire',
  lesson: {
    intro:
      "Selon Microsoft et Google, environ 70 % des vulnérabilités graves corrigées dans leurs produits écrits en C et C++ sont des erreurs de sécurité mémoire. Ces langages laissent le programmeur gérer lui-même la mémoire, sans vérification automatique des limites. Une seule écriture hors limites peut permettre à un attaquant de détourner l'exécution du programme. Ce cours explique ces mécanismes pour savoir les reconnaître en revue de code et choisir les bonnes protections.",
    sections: [
      {
        id: 'memoire',
        title: 'La mémoire d’un processus',
        blocks: [
          {
            t: 'table',
            head: ['Zone', 'Contenu', 'Gestion'],
            rows: [
              ['Code (.text)', 'Instructions du programme', 'Lecture et exécution seulement'],
              ['Données (.data, .bss)', 'Variables globales et statiques', 'Allouée au chargement'],
              ['**Tas** (heap)', 'Allocations dynamiques (`malloc`, `new`)', 'Par le programmeur : `free`, `delete`'],
              ['**Pile** (stack)', 'Variables locales, adresses de retour, arguments', 'Automatique, à chaque appel de fonction'],
            ],
          },
          { t: 'diagram', id: 'stack-frame', caption: 'Cadre de pile d’une fonction (architecture x86-64 simplifiée)', alt: 'De bas en haut : tampon local, autres variables, canari, pointeur de cadre sauvegardé, adresse de retour, arguments. Une écriture au-delà du tampon atteint successivement le canari puis l’adresse de retour.' },
          { t: 'def', term: 'Adresse de retour', text: "Adresse, stockée sur la pile à chaque appel, de l'instruction à exécuter quand la fonction se termine. La contrôler revient à contrôler le flux d'exécution du programme." },
        ],
      },
      {
        id: 'pile',
        title: 'Débordement de tampon sur la pile',
        blocks: [
          { t: 'code', lang: 'c', caption: 'Fonction vulnérable', code: '#include <string.h>\n\nvoid saluer(const char *nom) {\n    char tampon[64];\n    strcpy(tampon, nom);      /* aucune vérification de taille */\n    printf("Bonjour %s\\n", tampon);\n}' },
          { t: 'p', text: "`strcpy` copie jusqu'au zéro terminal, sans connaître la taille de `tampon`. Si `nom` fait 200 octets, les octets au-delà des 64 premiers écrasent les données voisines sur la pile : le canari, le pointeur de cadre, puis **l'adresse de retour**. À la fin de la fonction, le processeur saute à l'adresse choisie par l'attaquant." },
          { t: 'def', term: 'Débordement de tampon (buffer overflow)', text: "Écriture de données au-delà des limites d'une zone mémoire allouée. Sur la pile, il vise typiquement l'adresse de retour ; sur le tas, les métadonnées de l'allocateur ou des pointeurs de fonction voisins." },
          { t: 'code', lang: 'c', caption: 'Correction', code: 'void saluer(const char *nom) {\n    char tampon[64];\n    snprintf(tampon, sizeof tampon, "%s", nom);   /* copie bornée, toujours terminée */\n    printf("Bonjour %s\\n", tampon);\n}' },
          { t: 'callout', kind: 'warn', text: "`strncpy` n'est pas une correction complète : il ne termine pas la chaîne si la source est trop longue. Préférer `snprintf`, `strlcpy` (quand disponible) ou un type chaîne sûr." },
        ],
      },
      {
        id: 'autres',
        title: 'Autres classes de vulnérabilités',
        blocks: [
          {
            t: 'example',
            title: 'Use-after-free',
            blocks: [
              { t: 'code', lang: 'c', code: 'struct session *s = malloc(sizeof *s);\n/* … */\nfree(s);\n/* … plus loin, chemin d\'erreur oublié … */\nif (s->admin) accorder_droits();   /* lecture d\'une zone libérée */' },
              { t: 'p', text: "Après `free`, la zone peut être réattribuée à une autre allocation, éventuellement contrôlée par l'attaquant. Le programme lit alors des données arbitraires comme s'il s'agissait de sa structure. Correction : mettre le pointeur à `NULL` après libération et clarifier la propriété des objets (qui libère quoi)." },
            ],
          },
          { t: 'def', term: 'Dépassement d’entier (integer overflow)', text: "Un calcul dépasse la capacité du type et « boucle ». Exemple : `malloc(n * taille)` avec `n` contrôlé ; si la multiplication déborde, l'allocation est minuscule et la copie qui suit déborde du tas. Vérifier avant de multiplier, ou utiliser `calloc` ou des fonctions d'arithmétique vérifiée." },
          { t: 'def', term: 'Chaîne de format', text: "`printf(saisie)` au lieu de `printf(\"%s\", saisie)` : la saisie est interprétée comme un format. `%x` lit la pile, `%n` écrit en mémoire. Les compilateurs avertissent (`-Wformat-security`)." },
          { t: 'list', items: ['**Double free** : libérer deux fois la même zone corrompt l’allocateur.', '**Lecture hors limites** : fuite d’information (Heartbleed, 2014, lisait jusqu’à 64 Ko de mémoire du serveur).', '**Variable non initialisée** : réutilise le contenu précédent de la mémoire.'] },
        ],
      },
      {
        id: 'protections',
        title: 'Protections du système et du compilateur',
        blocks: [
          {
            t: 'table',
            head: ['Protection', 'Principe', 'Ce qu’elle empêche ou complique'],
            rows: [
              ['**Canari de pile** (`-fstack-protector-strong`)', 'Valeur aléatoire placée avant l’adresse de retour, vérifiée en sortie de fonction', 'Écrasement linéaire de l’adresse de retour'],
              ['**NX / DEP**', 'Pile et tas non exécutables', 'Exécution de code injecté dans les données'],
              ['**ASLR** (+ PIE)', 'Adresses aléatoires à chaque exécution', 'Prédiction des adresses utiles'],
              ['**CFI**, CET (shadow stack)', 'Contrôle de l’intégrité du flux d’exécution', 'Détournement des retours et appels indirects'],
              ['**FORTIFY_SOURCE**', 'Vérification de taille ajoutée aux fonctions libc à la compilation', 'Débordements détectables statiquement'],
            ],
          },
          { t: 'callout', kind: 'key', text: "Ces protections **compliquent** l'exploitation (l'attaquant doit souvent combiner une fuite d'information pour contourner l'ASLR et des techniques de réutilisation de code comme le ROP), mais ne corrigent pas le bogue. La correction reste dans le code." },
        ],
      },
      {
        id: 'prevention',
        title: 'Prévenir : code, outils, langages',
        blocks: [
          { t: 'list', items: ['**Revue de code** ciblée sur les fonctions à risque : `strcpy`, `strcat`, `sprintf`, `gets` (interdite), `memcpy` avec taille calculée, `printf` sans format littéral.', '**Analyse statique (SAST)** : avertissements du compilateur (`-Wall -Wextra -Wformat-security`), clang-tidy, CodeQL, Coverity.', '**Sanitizers** pendant les tests : AddressSanitizer (ASan) détecte débordements et use-after-free, UBSan les comportements indéfinis.', '**Fuzzing** : générer massivement des entrées pour révéler les plantages (voir module P).', '**Langages sûrs pour la mémoire** (Rust, Go, Java, C#) pour le nouveau code : la CISA, la NSA et leurs partenaires internationaux recommandent cette transition.'] },
          { t: 'code', lang: 'bash', caption: 'Compilation de test avec sanitizers et durcissement', code: 'gcc -g -O1 -fsanitize=address,undefined -fno-omit-frame-pointer \\\n    -Wall -Wextra -Wformat-security -D_FORTIFY_SOURCE=3 \\\n    -fstack-protector-strong -fPIE -pie programme.c -o programme' },
          { t: 'callout', kind: 'legal', text: 'L’exploitation de ces vulnérabilités ne doit être pratiquée que sur ses propres programmes ou des environnements d’entraînement (CTF, machines volontairement vulnérables).' },
        ],
      },
    ],
    useCases: [
      'Revue de code d’un composant C exposé au réseau (analyseur de protocole, firmware).',
      'Mise en place d’une chaîne CI avec compilation durcie, ASan et fuzzing.',
      'Analyse d’un avis de sécurité (CVE) pour en évaluer l’exploitabilité selon les protections présentes.',
    ],
    commonMistakes: [
      'Remplacer `strcpy` par `strncpy` en pensant que le problème est réglé.',
      'Calculer une taille d’allocation par multiplication sans contrôle de débordement.',
      'Passer une saisie utilisateur comme premier argument de `printf`.',
      'Conserver un pointeur après `free` dans un chemin d’erreur.',
      'Considérer ASLR et NX comme une correction suffisante.',
    ],
    bestPractices: [
      'Fonctions bornées (`snprintf`), tailles toujours calculées avec `sizeof` sur la destination.',
      'Compilation durcie et avertissements traités comme des erreurs.',
      'ASan, UBSan et fuzzing dans l’intégration continue.',
      'Règles de propriété claires pour la mémoire allouée ; pointeurs mis à NULL après libération.',
      'Nouveau code critique dans un langage sûr pour la mémoire.',
    ],
    keyPoints: [
      'Pile : variables locales et adresses de retour ; tas : allocations dynamiques.',
      'Débordement de pile → écrasement de l’adresse de retour → détournement d’exécution.',
      'Use-after-free, double free, dépassement d’entier, chaîne de format : à repérer en revue.',
      'Canari, NX, ASLR, CFI compliquent l’exploitation, mais seule la correction du code supprime la faille.',
    ],
  },
  practice: [
    {
      id: 'labo-revue',
      kind: 'simulation',
      title: 'Laboratoire : revue de code d’un analyseur de paquets',
      context: [{ t: 'p', text: 'Un petit service C lit des messages réseau. Marquez les lignes vulnérables, puis répondez aux questions.' }],
      steps: ['Lire le code en entier avant de marquer.', 'Pour chaque ligne marquée, nommer la classe de vulnérabilité.', 'Proposer une correction.'],
      labId: 'code-review-lab',
    },
    {
      id: 'protections-cve',
      kind: 'analysis',
      title: 'Analyse : exploitabilité selon les protections',
      context: [{ t: 'p', text: 'Un avis signale un débordement de pile dans un service compilé sans PIE, avec canari, avec NX, sur un système où l’ASLR est activé pour les bibliothèques.' }],
      steps: ['Indiquer ce que chaque protection empêche.', 'Expliquer pourquoi l’absence de PIE affaiblit l’ASLR.', 'Conclure sur la priorité de correction.'],
    },
  ],
  questions: [
    { id: 'mem-q1', type: 'single', difficulty: 1, skills: ['g-mem-layout'], prompt: 'Où sont stockées les variables locales d’une fonction C ?', options: [{ id: 'a', text: 'Sur le tas' }, { id: 'b', text: 'Sur la pile' }, { id: 'c', text: 'Dans le segment de code' }, { id: 'd', text: 'Dans le registre d’instruction' }] },
    { id: 'mem-q2', type: 'truefalse', difficulty: 1, skills: ['g-mem-layout'], prompt: 'La mémoire allouée par malloc doit être libérée explicitement par le programmeur.' },
    { id: 'mem-q3', type: 'short', difficulty: 2, skills: ['g-mem-layout', 'g-mem-vulns'], prompt: 'Quelle donnée de la pile un débordement de tampon cherche-t-il typiquement à écraser pour détourner l’exécution ? (trois mots)' },
    { id: 'mem-q4', type: 'single', difficulty: 2, skills: ['g-mem-vulns'], prompt: 'Quelle vulnérabilité contient `printf(buffer_utilisateur);` ?', options: [{ id: 'a', text: 'Use-after-free' }, { id: 'b', text: 'Chaîne de format' }, { id: 'c', text: 'Injection SQL' }, { id: 'd', text: 'Dépassement d’entier' }] },
    { id: 'mem-q5', type: 'single', difficulty: 3, skills: ['g-mem-vulns'], prompt: '`char *p = malloc(n * 16);` avec `n` fourni par l’utilisateur, suivi d’une boucle écrivant `n` blocs de 16 octets. Quel est le risque principal ?', options: [{ id: 'a', text: 'Aucun, malloc vérifie la taille' }, { id: 'b', text: 'Un dépassement d’entier dans la multiplication menant à une allocation trop petite puis à un débordement de tas' }, { id: 'c', text: 'Une chaîne de format' }, { id: 'd', text: 'Une fuite de descripteur de fichier' }] },
    { id: 'mem-q6', type: 'multi', difficulty: 2, skills: ['g-mem-vulns'], prompt: 'Lesquelles de ces fonctions C sont à proscrire ou à surveiller particulièrement en revue de code ?', options: [{ id: 'a', text: '`gets`' }, { id: 'b', text: '`strcpy`' }, { id: 'c', text: '`snprintf` avec `sizeof` de la destination' }, { id: 'd', text: '`sprintf`' }] },
    { id: 'mem-q7', type: 'truefalse', difficulty: 2, skills: ['g-mem-vulns'], prompt: 'Utiliser un pointeur après l’avoir passé à free est sans danger tant que le programme ne plante pas.' },
    { id: 'mem-q8', type: 'single', difficulty: 2, skills: ['g-mem-protect'], prompt: 'Quelle protection rend la pile et le tas non exécutables ?', options: [{ id: 'a', text: 'ASLR' }, { id: 'b', text: 'NX / DEP' }, { id: 'c', text: 'Canari de pile' }, { id: 'd', text: 'FORTIFY_SOURCE' }] },
    { id: 'mem-q9', type: 'short', difficulty: 2, skills: ['g-mem-protect'], prompt: 'Quel sigle désigne la randomisation des adresses mémoire à chaque exécution ?' },
    { id: 'mem-q10', type: 'truefalse', difficulty: 3, skills: ['g-mem-protect'], prompt: 'Un binaire protégé par canari, NX et ASLR n’a plus besoin d’être corrigé en cas de débordement de pile.' },
    { id: 'mem-q11', type: 'multi', difficulty: 3, skills: ['g-mem-protect'], prompt: 'Comment un attaquant tente-t-il généralement de contourner NX et ASLR ?', options: [{ id: 'a', text: 'En réutilisant du code existant (ROP)' }, { id: 'b', text: 'En exploitant une fuite d’information révélant des adresses' }, { id: 'c', text: 'En désactivant l’ASLR à distance par une requête HTTP' }, { id: 'd', text: 'En ciblant un module chargé à adresse fixe (sans PIE)' }] },
    { id: 'mem-q12', type: 'single', difficulty: 2, skills: ['g-secure-code'], prompt: 'Quel outil détecte, pendant l’exécution des tests, les débordements et use-after-free ?', options: [{ id: 'a', text: 'AddressSanitizer (ASan)' }, { id: 'b', text: 'Un pare-feu applicatif' }, { id: 'c', text: 'gzip' }, { id: 'd', text: 'Un antivirus' }] },
    { id: 'mem-q13', type: 'short', difficulty: 2, skills: ['g-secure-code'], prompt: 'Quelle option de GCC active l’avertissement sur les appels printf dont le format n’est pas littéral ? (option -W…)' },
    { id: 'mem-q14', type: 'open', difficulty: 3, skills: ['g-mem-vulns', 'g-secure-code'], prompt: 'Expliquez à un développeur pourquoi remplacer `strcpy(dst, src)` par `strncpy(dst, src, sizeof dst)` n’est pas une correction complète et proposez une meilleure solution.' },
    { id: 'mem-q15', type: 'open', difficulty: 3, skills: ['g-secure-code', 'g-mem-protect'], prompt: 'Vous êtes responsable sécurité d’un projet C de 200 000 lignes exposé au réseau. Proposez un plan en cinq mesures pour réduire durablement le risque de vulnérabilités mémoire.' },
    { id: 'mem-q16', type: 'multi', difficulty: 2, skills: ['g-secure-code', 'g-mem-layout'], prompt: 'Quels langages offrent la sécurité mémoire par défaut (hors blocs explicitement non sûrs) ?', options: [{ id: 'a', text: 'Rust' }, { id: 'b', text: 'C' }, { id: 'c', text: 'Go' }, { id: 'd', text: 'Java' }] },
  ],
  resources: [
    { title: 'The Case for Memory Safe Roadmaps', source: 'CISA, NSA, FBI et agences partenaires', url: 'https://www.cisa.gov/resources-tools/resources/case-memory-safe-roadmaps' },
    { title: 'SEI CERT C Coding Standard', source: 'Carnegie Mellon University', url: 'https://wiki.sei.cmu.edu/confluence/display/c/SEI+CERT+C+Coding+Standard' },
    { title: 'AddressSanitizer', source: 'Projet LLVM / Google', url: 'https://clang.llvm.org/docs/AddressSanitizer.html' },
    { title: 'Règles de programmation pour le développement sécurisé de logiciels en langage C', source: 'ANSSI', url: 'https://cyber.gouv.fr/publications/regles-de-programmation-pour-le-developpement-securise-de-logiciels-en-langage-c' },
  ],
};
