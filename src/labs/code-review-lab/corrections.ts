import type { LabCorrections } from '../../content/types';

export const corrections: LabCorrections = {
  labId: 'code-review-lab',
  questions: {
    'cr-q1': { type: 'short', accepted: ['9', 'ligne 9'], explanation: '`printf(texte)` interprète le nom reçu du réseau comme un format : `%x` fait fuir le contenu de la pile, `%n` permet d’écrire en mémoire. Correction : `printf("%s", texte)` ou `fputs(texte, stdout)`.' },
    'cr-q2': { type: 'short', accepted: ['26', 'ligne 26'], explanation: '`elements` est libéré ligne 25 puis lu ligne 26. Selon l’état de l’allocateur, la lecture renvoie des données réutilisées, éventuellement contrôlées par l’attaquant.' },
    'cr-q3': { type: 'single', correct: 'b', explanation: 'n * 8 est calculé puis stocké sur 16 bits : 8192 × 8 = 65 536 devient 0, 8193 × 8 devient 8. malloc alloue quelques octets, mais memcpy copie `(size_t)n * 8` octets : débordement de tas contrôlé par l’attaquant.' },
    'cr-q4': { type: 'multi', correct: ['a', 'b'], explanation: 'memcpy (ligne 20) écrit n × 8 octets dans une zone de taille tronquée (débordement de tas). strcpy (ligne 22) copie un nom de taille arbitraire dans `nom[32]` (débordement de pile).', whyWrong: { c: 'free n’écrit pas dans un tampon utilisateur ; le problème est la lecture qui suit.', d: 'Une déclaration n’écrit rien.' } },
    'cr-q5': { type: 'truefalse', correct: false, explanation: 'taille n’est jamais utilisée : la fonction lit paquet[0], paquet[1], puis n × 8 octets et un nom sans vérifier qu’ils existent. Une lecture hors limites du paquet est possible dès 0 ou 1 octet reçu.' },
    'cr-q6': {
      type: 'open',
      model: 'if (taille < 2) return -1; size_t n = paquet[0] | (paquet[1] << 8); if (n > MAX_ELEMENTS || taille - 2 < n * 8) return -1; /* n * 8 sans débordement en size_t car n ≤ 65535 */ uint8_t *elements = malloc(n * 8 ? n * 8 : 1); … memcpy(elements, paquet + 2, n * 8); const char *src = (const char *)paquet + 2 + n * 8; size_t reste = taille - 2 - n * 8; size_t lg = strnlen(src, reste); if (lg == reste || lg >= NOM_MAX) { free(elements); return -1; } memcpy(nom, src, lg + 1); fputs(nom, stdout); … int resultat = (elements[0] == 0xFF); free(elements); return resultat;',
      criteria: ['La taille du paquet est vérifiée avant chaque lecture.', 'Le calcul de taille d’allocation utilise size_t et est borné.', 'La copie du nom est bornée par NOM_MAX et par la taille restante.', 'printf utilise un format littéral.', 'La lecture de elements a lieu avant free.'],
      explanation: 'Chaque donnée issue du paquet doit être validée contre la taille réellement reçue avant usage. Un fuzzer avec ASan aurait trouvé ces cinq défauts en quelques secondes.',
    },
  },
  debrief: [
    { t: 'table', head: ['Ligne', 'Défaut', 'Classe'], rows: [['9', '`printf(texte)`', 'Chaîne de format'], ['16–22', 'taille jamais vérifiée', 'Lecture hors limites'], ['17', '`uint16_t total = n * 8`', 'Dépassement d’entier'], ['20', 'memcpy dans une zone trop petite', 'Débordement de tas'], ['22', 'strcpy vers `nom[32]`', 'Débordement de pile'], ['26', 'lecture après free', 'Use-after-free']] },
    { t: 'callout', kind: 'key', title: 'Mesures défensives', text: 'Valider chaque champ contre la taille reçue, calculer les tailles en size_t avec bornes, copies bornées, format littéral, ordre lecture puis libération. En CI : compilation avec -Wall -Wformat-security, ASan et un fuzzer sur `traiter`. À terme, réécrire l’analyseur dans un langage sûr pour la mémoire.' },
  ],
};
