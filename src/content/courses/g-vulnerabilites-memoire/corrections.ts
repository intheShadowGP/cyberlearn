import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: 'g-vulnerabilites-memoire',
  questions: {
    'mem-q1': { type: 'single', correct: 'b', explanation: 'Les variables locales (non statiques) résident dans le cadre de pile de la fonction, créé à l’appel et détruit au retour. Le tas reçoit les allocations dynamiques.' },
    'mem-q2': { type: 'truefalse', correct: true, explanation: 'En C, le tas n’a pas de ramasse-miettes : chaque malloc doit correspondre à exactement un free. Oublier un free crée une fuite ; en faire deux crée un double free ; utiliser après free crée un use-after-free.' },
    'mem-q3': { type: 'short', accepted: ["l'adresse de retour", 'adresse de retour', "l adresse de retour", 'return address'], explanation: 'L’adresse de retour, empilée lors de l’appel, détermine où le programme reprend à la fin de la fonction. La contrôler, c’est contrôler le flux d’exécution.' },
    'mem-q4': { type: 'single', correct: 'b', explanation: 'La saisie est interprétée comme une chaîne de format : `%x` ou `%p` lisent la pile (fuite d’information), `%n` écrit en mémoire. Il faut écrire `printf("%s", buffer_utilisateur)`.' },
    'mem-q5': { type: 'single', correct: 'b', explanation: 'Si `n * 16` dépasse la capacité du type size_t, le résultat boucle vers une petite valeur : malloc alloue peu, mais la boucle écrit n blocs. Il faut vérifier `n <= SIZE_MAX / 16` ou utiliser calloc(n, 16), qui contrôle le débordement.' },
    'mem-q6': { type: 'multi', correct: ['a', 'b', 'd'], explanation: '`gets` est retirée du standard C11 (aucune limite possible) ; `strcpy` et `sprintf` ne connaissent pas la taille de la destination.', whyWrong: { c: '`snprintf(dst, sizeof dst, …)` borne l’écriture et termine toujours la chaîne : c’est la forme recommandée.' } },
    'mem-q7': { type: 'truefalse', correct: false, explanation: 'Un use-after-free peut ne jamais planter en test et être parfaitement exploitable : la zone libérée est réallouée à des données contrôlées par l’attaquant. L’absence de plantage ne prouve rien ; ASan le détecte systématiquement.' },
    'mem-q8': { type: 'single', correct: 'b', explanation: 'NX (No eXecute, appelé DEP sous Windows) marque les pages de données comme non exécutables : un code injecté dans la pile ne peut pas être exécuté directement.' },
    'mem-q9': { type: 'short', accepted: ['aslr'], explanation: 'ASLR (Address Space Layout Randomization) place pile, tas, bibliothèques et, avec PIE, le programme lui-même à des adresses aléatoires.' },
    'mem-q10': { type: 'truefalse', correct: false, explanation: 'Les protections compliquent l’exploitation sans la rendre impossible (fuite d’information, ROP, attaques sur le tas, déni de service par plantage). Le défaut doit être corrigé.' },
    'mem-q11': { type: 'multi', correct: ['a', 'b', 'd'], explanation: 'Le ROP enchaîne des fragments de code existants (exécutables, donc compatibles avec NX) ; une fuite d’adresse ou un module à adresse fixe neutralise l’ASLR.', whyWrong: { c: 'L’ASLR est un réglage du système d’exploitation local, pas désactivable par une requête.' } },
    'mem-q12': { type: 'single', correct: 'a', explanation: 'AddressSanitizer instrumente le programme à la compilation et signale précisément tout accès hors limites ou après libération pendant les tests ou le fuzzing.' },
    'mem-q13': { type: 'short', accepted: ['-wformat-security', 'wformat-security', '-wformat=2'], explanation: '`-Wformat-security` avertit lorsqu’une fonction de la famille printf reçoit un format non littéral sans argument. `-Wformat=2` active un ensemble plus large de vérifications.' },
    'mem-q14': {
      type: 'open',
      model: 'strncpy borne la copie, mais si src est plus long que dst, il ne place pas de zéro terminal : dst n’est plus une chaîne valide et la prochaine lecture (strlen, printf %s) déborde. De plus, il remplit de zéros le reste du tampon (coût) et masque la troncature. Meilleure solution : `snprintf(dst, sizeof dst, "%s", src)` qui termine toujours la chaîne et renvoie la longueur voulue (permettant de détecter la troncature), ou strlcpy, ou un type chaîne avec longueur explicite. Idéalement, valider la longueur en amont et refuser les entrées trop longues.',
      criteria: ['L’absence possible de zéro terminal est expliquée.', 'Une alternative qui termine toujours la chaîne est proposée.', 'La détection ou le refus de la troncature est mentionné.'],
      explanation: 'Une « correction » qui déplace le bogue est fréquente en audit : il faut vérifier le comportement exact de chaque fonction de remplacement.',
    },
    'mem-q15': {
      type: 'open',
      model: '1) Compilation durcie systématique (stack protector, FORTIFY_SOURCE=3, PIE, RELRO, CET) et avertissements bloquants. 2) Analyse statique dans l’intégration continue (CodeQL, clang-tidy) avec règles bannissant les fonctions dangereuses. 3) Tests sous ASan et UBSan, et fuzzing continu (libFuzzer, AFL++, OSS-Fuzz) des points d’entrée réseau. 4) Revue de code obligatoire sur les parties qui manipulent des tampons ou des tailles. 5) Feuille de route vers un langage sûr pour la mémoire (Rust) en commençant par les composants les plus exposés (analyseurs de protocoles), plus un processus de gestion des vulnérabilités et de publication des correctifs.',
      criteria: ['Des mesures de compilation et de test (sanitizers, fuzzing) sont présentes.', 'L’analyse statique ou la revue de code est intégrée au processus.', 'La migration progressive vers un langage sûr est envisagée.', 'Les mesures sont priorisées selon l’exposition.'],
      explanation: 'Aucune mesure isolée ne suffit ; la combinaison prévention (langage, revue), détection (SAST, fuzzing) et atténuation (durcissement) réduit durablement le risque.',
    },
    'mem-q16': { type: 'multi', correct: ['a', 'c', 'd'], explanation: 'Rust (hors blocs `unsafe`), Go et Java vérifient les limites et gèrent la durée de vie des objets.', whyWrong: { b: 'C ne vérifie ni les limites ni la durée de vie des allocations.' } },
  },
};
