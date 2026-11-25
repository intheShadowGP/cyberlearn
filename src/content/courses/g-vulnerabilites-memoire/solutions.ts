import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'g-vulnerabilites-memoire',
  practice: {
    'labo-revue': {
      blocks: [
        { t: 'p', text: 'Le débriefing du laboratoire « Revue de code C » liste chaque ligne vulnérable, sa classe et sa correction.' },
        { t: 'p', text: 'Méthode : suivre chaque donnée provenant du réseau jusqu’à son utilisation, et vérifier chaque calcul de taille et chaque copie.' },
      ],
    },
    'protections-cve': {
      blocks: [
        { t: 'list', items: ['**Canari** : bloque l’écrasement linéaire de l’adresse de retour, sauf fuite du canari.', '**NX** : empêche l’exécution d’un code injecté sur la pile ; l’attaquant doit recourir au ROP.', '**Sans PIE**, le code du programme est à une adresse fixe : il fournit des fragments ROP à adresse connue, ce qui neutralise en grande partie l’ASLR des bibliothèques.'] },
        { t: 'p', text: 'Conclusion : exploitation plus difficile mais plausible. Correction prioritaire, et recompilation avec PIE en mesure immédiate.' },
      ],
    },
    'revue-tas': {
      blocks: [
        {
          t: 'table',
          head: ['Fonction', 'Vulnérabilité', 'Ce que peut obtenir un attaquant'],
          rows: [
            ['`lire`', '**Débordement de tas** : `read` copie `n` octets (valeur du client) dans `nom[32]`', 'Écrasement du pointeur `rappel` voisin : exécution à l’adresse choisie'],
            ['`lire_lot`', '**Dépassement d’entier** dans `nb * sizeof(struct msg)` ; la valeur de `nb` n’est pas bornée', 'Allocation minuscule puis écritures hors limites, ou épuisement de mémoire'],
            ['`fermer`', '**Use-after-free** (lecture de `m->nom` après `free`) et **double free**', 'Lecture de données réallouées, corruption de l’allocateur'],
            ['`afficher`', '**Chaîne de format** : `printf(saisie)`', 'Lecture de la pile (`%x`), écriture en mémoire (`%n`)'],
          ],
        },
        { t: 'code', lang: 'c', caption: 'Version corrigée', code: '#include <stdint.h>\n\nstruct msg *lire(int fd) {\n    uint32_t n;\n    if (read(fd, &n, sizeof n) != sizeof n || n >= sizeof(((struct msg *)0)->nom))\n        return NULL;                          /* refuse les longueurs invalides */\n    struct msg *m = calloc(1, sizeof *m);\n    if (!m) return NULL;\n    if (read(fd, m->nom, n) != (ssize_t)n) { free(m); return NULL; }\n    m->nom[n] = \'\\0\';\n    m->rappel = traiter;\n    return m;\n}\n\nstruct msg *lire_lot(int fd, uint32_t nb) {\n    if (nb == 0 || nb > 1000) return NULL;     /* borne métier */\n    return calloc(nb, sizeof(struct msg));      /* contrôle le dépassement */\n}\n\nvoid fermer(struct msg *m) {\n    if (!m) return;\n    if (m->nom[0] == \'#\') journaliser(m->nom);\n    free(m);\n    /* la propriété est claire : l’appelant doit mettre son pointeur à NULL */\n}\n\nvoid afficher(const char *saisie) { printf("%s", saisie); }' },
        { t: 'list', items: ['Compilation durcie (`-fstack-protector-strong`, `-D_FORTIFY_SOURCE=3`, `-fPIE -pie`, `-Wl,-z,relro,-z,now`, `-Wformat-security`) et avertissements bloquants.', 'Tests sous ASan et UBSan et fuzzing du lecteur de messages, qui détecteraient débordement, use-after-free et double free.', 'Stratégie : écrire le nouvel analyseur de messages dans un langage sûr pour la mémoire (Rust) ou en C++ moderne, et garder le C pour le reste avec les contrôles ci-dessus.'] },
      ],
    },
  },
};
