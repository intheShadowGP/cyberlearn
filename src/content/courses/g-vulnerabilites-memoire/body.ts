import type { CourseBody } from '../../types';
import { questions } from './questions';

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
          { t: 'code', lang: 'bash', caption: 'Deux compilations distinctes : tests avec sanitizers, production durcie', code: '# Tests et fuzzing : sanitizers (sans _FORTIFY_SOURCE, déconseillé avec ASan)\ngcc -g -O1 -fsanitize=address,undefined -fno-omit-frame-pointer \\\n    -Wall -Wextra -Wformat-security programme.c -o programme_test\n\n# Production : durcissement\ngcc -O2 -Wall -Wextra -Wformat-security -D_FORTIFY_SOURCE=3 \\\n    -fstack-protector-strong -fPIE -pie -Wl,-z,relro,-z,now programme.c -o programme' },
          { t: 'callout', kind: 'legal', text: 'L’exploitation de ces vulnérabilités ne doit être pratiquée que sur ses propres programmes ou des environnements d’entraînement (CTF, machines volontairement vulnérables).' },
        ],
      },
      {
        id: 'tas',
        title: 'Le tas : débordement, use-after-free et exploitation',
        blocks: [
          { t: 'p', text: 'Sur le tas, l’**allocateur** découpe la mémoire en blocs, dont il garde des **métadonnées** (taille, liens vers les blocs libres) à côté des données. Des objets de natures différentes se retrouvent côte à côte : une écriture hors limites sur l’un atteint son voisin.' },
          {
            t: 'table',
            head: ['Classe', 'Mécanisme', 'Conséquence possible', 'Parade'],
            rows: [
              ['**Débordement de tas**', 'Écriture au-delà d’un bloc alloué', 'Écrasement d’un pointeur de fonction ou des métadonnées voisines', 'Copies bornées, tailles vérifiées, allocateur durci'],
              ['**Use-after-free**', 'Utilisation d’un pointeur après `free`', 'La zone réallouée contient des données choisies par l’attaquant', 'Propriété claire, `NULL` après libération, ASan'],
              ['**Double free**', 'Deux `free` du même bloc', 'Corruption de la liste des blocs libres', 'Un seul propriétaire, vérifications de l’allocateur'],
              ['**Confusion de type**', 'Un objet est lu comme un autre type', 'Lecture ou écriture avec une disposition mémoire inattendue', 'Types explicites, contrôles de conversion'],
              ['**Lecture hors limites**', 'Lecture au-delà d’un bloc', 'Fuite d’information (clés, pointeurs)', 'Contrôle des longueurs, sanitizers'],
            ],
          },
          { t: 'code', lang: 'c', caption: 'Un pointeur de fonction voisin d’un tampon', code: 'struct requete {\n    char nom[32];\n    void (*traiter)(struct requete *);   /* juste après le tampon */\n};\n\n/* Si « nom » reçoit plus de 32 octets, l’excédent écrase « traiter » :\n   l’appel suivant à r->traiter(r) saute à l’adresse choisie par l’attaquant. */' },
          { t: 'def', term: 'Confusion de type', text: 'Un programme interprète une zone mémoire comme un type qu’elle n’est pas (conversion invalide, objet libéré puis réalloué sous un autre type). Les champs sont alors lus ou écrits à de mauvais emplacements : c’est un grand classique des vulnérabilités de navigateurs et de machines virtuelles.' },
          { t: 'def', term: 'Pulvérisation du tas (heap spraying)', text: 'Technique qui remplit le tas d’objets choisis pour que des données contrôlées se trouvent à une adresse prévisible, ce qui aide à exploiter un use-after-free ou un débordement malgré la randomisation des adresses.' },
          { t: 'list', items: ['**Propriété claire** : chaque allocation a un seul propriétaire, qui la libère exactement une fois.', '**Allocateur durci** (par exemple Scudo, `hardened_malloc`) : détection des double free, protection des métadonnées, randomisation des blocs.', '**Étiquetage mémoire matériel** (ARM MTE) : le processeur compare une étiquette de pointeur à celle du bloc et détecte débordements et use-after-free à faible coût.', '**Tests sous ASan** et fuzzing des entrées qui pilotent des allocations.'] },
          { t: 'callout', kind: 'warn', text: 'Mettre un pointeur à `NULL` après `free` protège de cette copie du pointeur, mais pas des autres copies qui subsistent ailleurs : la règle de propriété est la vraie protection.' },
        ],
      },
      {
        id: 'langages',
        title: 'C++ moderne, Rust et migration vers des langages sûrs',
        blocks: [
          { t: 'p', text: 'La façon la plus efficace d’éliminer une classe de vulnérabilités est de **rendre l’erreur impossible** plutôt que de la chercher. Des langages et des pratiques le font, à des degrés divers.' },
          {
            t: 'table',
            head: ['Langage', 'Mécanisme de sécurité mémoire', 'Limites'],
            rows: [
              ['**C++ moderne**', 'RAII, `unique_ptr`, `shared_ptr`, `std::vector`, `std::string`, `std::span`, `.at()` pour des accès vérifiés', 'Compatible avec le C : les pointeurs bruts et `new` / `delete` restent possibles'],
              ['**Rust**', 'Propriété et emprunts vérifiés à la **compilation** ; accès aux tableaux vérifiés ; pas de use-after-free en code sûr', 'Les blocs `unsafe` et les interfaces avec le C doivent être audités'],
              ['**Go**', 'Vérification des limites et ramasse-miettes', '`unsafe` et `cgo` sortent de la protection ; concurrence non sûre sur certains types'],
              ['**Java, C#**', 'Machine virtuelle, limites vérifiées, gestion automatique de la mémoire', 'Interfaces natives (JNI, P/Invoke) et bibliothèques en C'],
            ],
          },
          { t: 'def', term: 'RAII', text: 'Idiome C++ où une ressource (mémoire, fichier, verrou) est liée à la durée de vie d’un objet : elle est libérée automatiquement à la sortie de sa portée, même en cas d’exception. Il supprime les oublis de `free` et la plupart des fuites.' },
          { t: 'def', term: 'Propriété et emprunt (Rust)', text: 'Chaque valeur a un propriétaire unique ; on peut la prêter en lecture (plusieurs emprunts) ou en écriture (un seul à la fois). Le compilateur refuse le code où une référence survivrait à la valeur ou où deux écritures coexisteraient : use-after-free et courses de données sont rejetés à la compilation.' },
          {
            t: 'example',
            title: 'Rendre l’erreur impossible ou visible',
            blocks: [
              { t: 'code', lang: 'cpp', code: '#include <vector>\n#include <memory>\n\nstd::vector<int> v(10);\nint x = v.at(12);                          // lève std::out_of_range, ne lit pas hors limites\n\nauto s = std::make_unique<Session>();       // libérée automatiquement à la sortie de portée\n// pas de new / delete explicites, pas de free oublié' },
            ],
          },
          { t: 'list', items: ['**Nouveau code** dans un langage sûr pour la mémoire, surtout pour les analyseurs de formats et de protocoles exposés.', '**Code existant** : migrer d’abord les composants les plus exposés et les plus bogués, composant par composant, avec des interfaces étroites et validées.', '**`unsafe` minimal**, isolé dans de petits modules relus, avec tests et sanitizers.', '**Le reste en C** garde le durcissement, ASan, UBSan et le fuzzing.'] },
          { t: 'callout', kind: 'key', text: 'Les agences de cybersécurité (CISA, NSA, FBI et partenaires) recommandent de publier une feuille de route vers des langages sûrs pour la mémoire : la migration est une décision d’organisation autant que technique.' },
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
    {
      id: 'revue-tas',
      kind: 'analysis',
      title: 'Revue de code : un lecteur de messages en C',
      context: [
        { t: 'code', lang: 'c', code: 'struct msg {\n    char nom[32];\n    void (*rappel)(struct msg *);\n};\n\nstruct msg *lire(int fd) {\n    unsigned int n;\n    read(fd, &n, sizeof n);\n    struct msg *m = malloc(sizeof *m);\n    read(fd, m->nom, n);                  /* n fourni par le client */\n    m->rappel = traiter;\n    return m;\n}\n\nstruct msg *lire_lot(int fd, unsigned int nb) {\n    return malloc(nb * sizeof(struct msg));   /* nb fourni par le client */\n}\n\nvoid fermer(struct msg *m) {\n    free(m);\n    if (m->nom[0] == \'#\') journaliser(m->nom);   /* après free */\n    free(m);\n}\n\nvoid afficher(const char *saisie) { printf(saisie); }' },
      ],
      steps: ['Nommer la vulnérabilité de chaque fonction et ce qu’un attaquant peut obtenir.', 'Réécrire les fonctions de façon sûre.', 'Proposer la compilation durcie, les tests et la stratégie de langage qui réduiraient ces risques à long terme.'],
    },
  ],
  questions,
  resources: [
    { title: 'The Case for Memory Safe Roadmaps', source: 'CISA, NSA, FBI et agences partenaires', url: 'https://www.cisa.gov/resources-tools/resources/case-memory-safe-roadmaps' },
    { title: 'SEI CERT C Coding Standard', source: 'Carnegie Mellon University', url: 'https://wiki.sei.cmu.edu/confluence/display/c/SEI+CERT+C+Coding+Standard' },
    { title: 'AddressSanitizer', source: 'Projet LLVM / Google', url: 'https://clang.llvm.org/docs/AddressSanitizer.html' },
    { title: 'Règles de programmation pour le développement sécurisé de logiciels en langage C', source: 'ANSSI', url: 'https://cyber.gouv.fr/publications/regles-de-programmation-pour-le-developpement-securise-de-logiciels-en-langage-c' },
  ],
};
