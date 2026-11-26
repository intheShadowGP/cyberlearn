import type { CourseBody } from '../../types';
import { questions } from './questions';

export const body: CourseBody = {
  courseId: 'p-analyse-pratique',
  lesson: {
    intro:
      'Comprendre une vulnérabilité, c’est être capable de la reconnaître dans le code, de reproduire le plantage qu’elle provoque, d’en trouver la cause et de la corriger sans en créer une autre. Ce cours, centré sur la pratique défensive, présente les classes de défauts les plus courantes, les outils de diagnostic, un fuzzing de départ, l’examen d’un protocole et d’un micrologiciel, et la rédaction d’un rapport utile à l’éditeur.',
    sections: [
      {
        id: 'classes',
        title: 'Les grandes classes de défauts',
        blocks: [
          { t: 'p', text: 'Un petit nombre de familles de défauts explique la majorité des vulnérabilités. Les reconnaître permet de relire du code avec les bonnes questions.' },
          {
            t: 'table',
            head: ['Classe', 'Cause typique', 'Conséquence possible', 'Remède principal'],
            rows: [
              ['**Erreur mémoire**', 'Écriture ou lecture hors d’un tampon, utilisation après libération', 'Plantage, fuite d’information, détournement', 'Vérifier les tailles, langages sûrs, sanitizers'],
              ['**Entrée non validée**', 'Donnée externe utilisée sans contrôle (taille, format, contenu)', 'Injection, débordement', 'Valider à la frontière de confiance'],
              ['**Erreur de logique**', 'Règle métier ou contrôle d’accès mal écrit', 'Accès indu, contournement', 'Revue, tests de scénarios'],
              ['**Concurrence**', 'Deux traitements se disputent la même ressource', 'Résultat imprévisible, contournement de contrôle', 'Verrous, opérations atomiques'],
            ],
          },
          { t: 'def', term: 'Frontière de confiance', text: 'Limite au-delà de laquelle les données ne sont plus maîtrisées (fichier reçu, message réseau, saisie). Tout ce qui la franchit doit être validé avant usage.' },
          { t: 'def', term: 'CWE', text: 'Liste publique des types de faiblesses logicielles (Common Weakness Enumeration). Elle donne un nom commun à une classe de défauts, utile pour classer, discuter et former.' },
          { t: 'list', items: ['**Se demander** d’où vient la donnée, quelle taille elle peut avoir, qui la contrôle.', '**Repérer** les calculs de taille et les copies de mémoire.', '**Vérifier** les contrôles d’accès au plus près de la ressource.'] },
          { t: 'callout', kind: 'tip', text: 'Un défaut de logique ne se voit pas avec un sanitizer mémoire : il se trouve par la revue et par des tests qui décrivent le comportement attendu.' },
        ],
      },
      {
        id: 'outils',
        title: 'Diagnostiquer : débogueur, sanitizers et analyse statique',
        blocks: [
          { t: 'p', text: 'Pour passer du symptôme à la cause, on s’appuie sur des outils complémentaires. Ils ne remplacent pas la compréhension du code, mais ils la guident.' },
          {
            t: 'table',
            head: ['Outil', 'Ce qu’il apporte', 'Limite'],
            rows: [
              ['**Débogueur**', 'Exécution pas à pas, inspection des variables, pile d’appels', 'Suppose un plantage reproductible'],
              ['**Sanitizers (ASan, UBSan…)**', 'Signalent immédiatement les erreurs mémoire ou les comportements indéfinis', 'Ralentissent, ne voient que leur classe de défauts'],
              ['**Analyse statique**', 'Repère des motifs risqués sans exécuter le programme', 'Faux positifs, ne voit pas tout'],
              ['**Journaux et traces**', 'Racontent ce qui s’est passé avant l’erreur', 'Dépendent de ce qui a été journalisé'],
            ],
          },
          { t: 'def', term: 'Plantage reproductible', text: 'Plantage qui se produit à chaque fois avec la même entrée. C’est la condition pour l’analyser, le corriger et vérifier ensuite que la correction fonctionne.' },
          { t: 'list', ordered: true, items: ['**Reproduire** le plantage avec l’entrée exacte et la version exacte.', '**Observer** la pile d’appels et le type d’erreur.', '**Isoler** la cause : quelle donnée, quel calcul, quelle ligne.', '**Vérifier** l’hypothèse (une assertion, un test ciblé).', '**Corriger** puis rejouer l’entrée d’origine.'] },
          { t: 'callout', kind: 'warn', text: 'Corriger le symptôme (ignorer l’erreur, agrandir un tampon au hasard) laisse la cause en place : on cherche toujours pourquoi la donnée n’a pas été vérifiée.' },
        ],
      },
      {
        id: 'fuzz',
        title: 'Mettre en place un fuzzing simple',
        blocks: [
          { t: 'p', text: 'Un premier fuzzing n’exige pas une grande infrastructure : un harnais, quelques graines et un sanitizer suffisent pour trouver des défauts dans un analyseur de format.' },
          {
            t: 'table',
            head: ['Élément', 'Bonne pratique', 'Erreur fréquente'],
            rows: [
              ['**Harnais**', 'Appeler directement la fonction qui lit les octets, libérer les ressources', 'Passer par le disque ou le réseau'],
              ['**Corpus**', 'Quelques fichiers valides et variés, petits', 'Un seul fichier ou des fichiers énormes'],
              ['**Dictionnaire**', 'Mots-clés et constantes du format', 'Aucun, le fuzzer bute sur la première comparaison'],
              ['**Couverture**', 'Mesurée pour repérer les zones non explorées', 'Ignorée, campagne « à l’aveugle »'],
            ],
          },
          { t: 'code', lang: 'c', caption: 'Un harnais minimal', code: 'int LLVMFuzzerTestOneInput(const uint8_t *data, size_t size) {\n    struct doc d;\n    if (doc_parse(data, size, &d) == 0)\n        doc_free(&d);\n    return 0;\n}' },
          { t: 'def', term: 'Minimisation', text: 'Réduction d’une entrée qui provoque un plantage à sa plus petite forme qui le reproduit encore. Elle facilite l’analyse et le signalement.' },
          { t: 'list', items: ['**Tester en local**, sur son propre code ou du code libre.', '**Compiler avec un sanitizer** pour rendre visibles les corruptions silencieuses.', '**Dédupliquer** les plantages avant de les analyser.'] },
          { t: 'callout', kind: 'tip', text: 'Quelques minutes de fuzzing sur un analyseur jamais testé trouvent souvent un premier défaut : commencez petit, puis étendez.' },
        ],
      },
      {
        id: 'protocoles',
        title: 'Protocoles et micrologiciels',
        blocks: [
          { t: 'p', text: 'Les défauts ne se limitent pas aux fichiers : les protocoles et les micrologiciels de dispositifs connectés posent leurs propres questions, abordées ici du point de vue de la défense.' },
          {
            t: 'table',
            head: ['Sujet', 'Question à se poser', 'Mesure'],
            rows: [
              ['**Validation des messages**', 'Les longueurs et champs annoncés sont-ils contrôlés ?', 'Rejeter les messages mal formés'],
              ['**Rejeu**', 'Un message déjà capté peut-il être renvoyé et accepté ?', 'Nombre à usage unique, compteur, horodatage'],
              ['**Authentification**', 'Qui a émis ce message ?', 'Signature ou code d’authentification'],
              ['**Mise à jour**', 'Le micrologiciel installé est-il authentique et récent ?', 'Signature vérifiée, protection contre le retour en arrière'],
            ],
          },
          { t: 'def', term: 'Nonce', text: 'Nombre à usage unique inclus dans un message pour qu’un message capté ne puisse pas être rejoué et accepté une seconde fois.' },
          {
            t: 'example',
            title: 'Revue d’un protocole de commande',
            blocks: [
              { t: 'p', text: 'Un équipement reçoit des commandes de 8 octets : type, longueur, données. La revue montre que la longueur annoncée n’est pas comparée à la taille réelle reçue, et que la même commande peut être renvoyée à l’identique. Corrections : contrôle de longueur, compteur croissant signé avec la commande.' },
            ],
          },
          { t: 'list', items: ['**Valider** avant d’interpréter.', '**Authentifier** les messages et les mises à jour.', '**Refuser** ce qui est hors séquence ou rejoué.'] },
          { t: 'callout', kind: 'key', text: 'Un micrologiciel non signé est un point d’entrée durable : une fois remplacé, l’attaquant contrôle l’appareil, même après redémarrage.' },
        ],
      },
      {
        id: 'correction',
        title: 'Corriger, tester et rédiger le rapport',
        blocks: [
          { t: 'p', text: 'Un bon correctif traite la cause, est testé et s’accompagne d’un rapport qui permet de comprendre, reproduire et prioriser.' },
          {
            t: 'table',
            head: ['Élément', 'Contenu attendu'],
            rows: [
              ['**Correctif**', 'Traite la cause (contrôle de la taille avant la copie), pas seulement le symptôme'],
              ['**Test de non-régression**', 'Rejoue l’entrée qui provoquait le défaut'],
              ['**Rapport**', 'Produit, version, manipulation minimale, impact, correctif proposé'],
              ['**Gravité**', 'Estimée (score CVSS) puis nuancée par le contexte : exposition, données, droits obtenus'],
            ],
          },
          { t: 'def', term: 'Cause racine', text: 'Raison profonde d’un défaut (par exemple une taille jamais vérifiée) par opposition à ses manifestations (plantages à différents endroits). La corriger supprime toute la famille de plantages.' },
          { t: 'list', items: ['**Reproduire** avant de corriger, **rejouer** après.', '**Relire** le code voisin : le même motif existe souvent ailleurs.', '**Joindre** au rapport l’entrée minimale et la trace du sanitizer.', '**Éviter** de publier avant le correctif ou le délai convenu.'] },
          { t: 'callout', kind: 'tip', text: 'La gravité dépend du contexte : un même défaut est critique sur un service exposé à Internet et moindre sur un outil local sans privilèges.' },
        ],
      },
      {
        id: 'triage-plantage',
        title: "Trier un plantage : reproductible, exploitable, sans conséquence ?",
        blocks: [
          { t: 'p', text: "Un fuzzer produit souvent des dizaines de plantages, dont beaucoup ont la même cause. Le tri répond à trois questions dans l’ordre : le plantage est-il **reproductible** avec la même entrée, **quelle est sa cause** (la classe de défaut) et **quel est son impact** (déni de service, lecture hors limites, écriture hors limites). On regroupe les plantages par cause avant d’analyser chacun, afin de ne traiter qu’une fois chaque défaut." },
          {
            t: 'table',
            head: ["Observation", "Lecture probable", "Priorité"],
            rows: [
              ["Écriture hors des limites d’un tampon", "Défaut de mémoire à fort potentiel d’impact", "Haute"],
              ["Lecture hors limites avec fuite de données", "Divulgation d’informations possible", "Haute à moyenne"],
              ["Arrêt propre sur une assertion", "Contrôle interne qui fonctionne, éventuellement déni de service", "Faible à moyenne"],
              ["Boucle infinie ou consommation de mémoire", "Déni de service", "Selon l’exposition du service"],
            ],
          },
          { t: 'callout', kind: 'key', text: "Réduisez d’abord le **nombre de causes distinctes** : cent plantages issus du même défaut ne forment qu’un seul rapport." },
        ],
      },
      {
        id: 'minimiser-cas',
        title: "Minimiser un cas de test",
        blocks: [
          { t: 'p', text: "L’entrée qui provoque un plantage est souvent volumineuse et pleine d’éléments inutiles. La **minimisation** consiste à la réduire jusqu’au plus petit contenu qui déclenche toujours le même comportement. Un cas minimal se comprend vite, se joint facilement à un rapport et facilite l’écriture du test de non-régression. La procédure est mécanique : on retire une partie, on relance, et l’on conserve la réduction si le plantage persiste." },
          { t: 'list', items: ["**Retirer par blocs** d’abord (la moitié, puis le quart), puis octet par octet.", "**Vérifier à chaque étape** que la cause reste la même et non un autre défaut déclenché par la réduction.", "**Remplacer les valeurs complexes** par des valeurs simples quand le défaut le permet.", "**Conserver l’entrée d’origine** à côté du cas minimal, avec son empreinte."] },
          { t: 'callout', kind: 'tip', text: "De nombreux outils de fuzzing proposent une minimisation automatique ; elle ne dispense pas de **relire** le résultat pour s’assurer qu’il illustre bien le défaut étudié." },
        ],
      },
      {
        id: 'non-regression',
        title: "Transformer le défaut en test de non-régression",
        blocks: [
          { t: 'p', text: "Corriger ne suffit pas : il faut que le défaut ne revienne pas lors d’une évolution du code. Le cas minimal devient un **test automatique** qui échoue avant la correction et réussit après. Ce test s’ajoute à la suite exécutée à chaque modification du projet. Il matérialise la correction, documente le défaut et protège contre une réintroduction accidentelle." },
          { t: 'list', items: ["**Écrire le test avant la correction** et constater qu’il échoue pour la bonne raison.", "**Corriger la cause**, pas seulement le symptôme : refuser l’entrée précise ne règle pas la classe de défaut.", "**Chercher les cas voisins** : le même motif existe souvent ailleurs dans le code.", "**Relancer le fuzzing** sur la version corrigée pour vérifier qu’aucun nouveau plantage n’apparaît.", "**Consigner** la correction et le test dans le rapport."] },
        ],
      },
    ],
    useCases: [
      'Analyser un plantage signalé par un client et en trouver la cause racine.',
      'Mettre en place un premier fuzzing sur un analyseur de fichiers maison.',
      'Relire le protocole d’un équipement avant son intégration.',
      'Rédiger un rapport de vulnérabilité exploitable par l’éditeur.',
    ],
    commonMistakes: [
      'Corriger le symptôme sans chercher la cause.',
      'Fuzzer sans sanitizer et conclure à l’absence de défaut.',
      'Écrire un harnais qui passe par le disque ou le réseau.',
      'Oublier le test de non-régression.',
      'Décider de la priorité uniquement d’après un score de gravité.',
    ],
    bestPractices: [
      'Valider toute donnée à la frontière de confiance.',
      'Reproduire, isoler, corriger la cause, rejouer.',
      'Compiler avec des sanitizers pendant les tests.',
      'Authentifier les messages et signer les mises à jour.',
      'Rédiger un rapport minimal, reproductible et contextualisé.',
    ],
    keyPoints: [
      'Quelques classes de défauts expliquent la plupart des vulnérabilités.',
      'Un plantage reproductible est la clé de l’analyse.',
      'Un fuzzing simple (harnais, graines, sanitizer) trouve de vrais défauts.',
      'Protocoles et micrologiciels : valider, authentifier, refuser le rejeu.',
      'Corriger la cause, tester, rapporter avec le contexte.',
    ],
  },
  practice: [
    {
      id: 'lire-code',
      kind: 'analysis',
      title: 'Analyse : trouver le défaut dans une fonction de lecture',
      context: [
        { t: 'code', lang: 'c', caption: 'Fonction de lecture d’un message', code: 'int lire_message(const uint8_t *buf, size_t len) {\n    char zone[64];\n    uint8_t taille = buf[0];          /* taille annoncée */\n    memcpy(zone, buf + 1, taille);    /* copie des données */\n    return traiter(zone, taille);\n}' },
      ],
      steps: ['Identifiez le défaut et la classe à laquelle il appartient.', 'Expliquez dans quelles conditions il se manifeste.', 'Proposez une correction qui traite la cause, et le test de non-régression associé.'],
    },
    {
      id: 'harnais-simple',
      kind: 'guided',
      title: 'Préparer un premier fuzzing',
      context: [
        { t: 'p', text: 'Votre équipe maintient un petit analyseur de fichiers de configuration : `int cfg_parse(const uint8_t *data, size_t size, struct cfg *out)` et `void cfg_free(struct cfg *c)`. Aucun fuzzing n’a jamais été fait.' },
      ],
      steps: ['Décrivez le harnais à écrire et ce qu’il doit libérer.', 'Choisissez corpus de départ et sanitizer.', 'Indiquez comment traiter un plantage trouvé (reproduction, minimisation).'],
    },
    {
      id: 'rapport-vuln',
      kind: 'case',
      title: 'Cas : rédiger un rapport et évaluer la gravité',
      context: [
        { t: 'p', text: 'Vous avez trouvé, dans une bibliothèque libre de lecture d’archives, un débordement de tampon déclenché par un fichier minimal de 40 octets. La bibliothèque est utilisée par un service qui traite des fichiers envoyés par des clients, et aussi par un petit outil local de bureau.' },
      ],
      steps: ['Listez les éléments du rapport à envoyer aux mainteneurs.', 'Évaluez la gravité pour chacun des deux usages.', 'Précisez le délai et le canal de divulgation.'],
    },
  ],
  questions,
  resources: [
    { title: 'CWE — Common Weakness Enumeration', source: 'MITRE', url: 'https://cwe.mitre.org/' },
    { title: 'AddressSanitizer', source: 'LLVM', url: 'https://clang.llvm.org/docs/AddressSanitizer.html' },
    { title: 'CVSS — système commun de notation des vulnérabilités', source: 'FIRST', url: 'https://www.first.org/cvss/' },
  ],
};
