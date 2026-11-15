import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: 'j-forensique-principes',
  questions: {
    'for-q1': { type: 'single', correct: 'b', explanation: 'La mémoire vive disparaît à l’extinction et évolue en permanence : elle est collectée avant le disque, lui-même collecté avant les archives.' },
    'for-q2': { type: 'truefalse', correct: true, explanation: 'Travailler sur une copie vérifiée par empreinte préserve l’original et permet à un contre-expert de refaire l’analyse sur une nouvelle copie.' },
    'for-q3': { type: 'short', accepted: ['3227', 'rfc 3227', 'rfc3227'], explanation: 'La RFC 3227 (2002) définit les principes de collecte et d’archivage des preuves, dont l’ordre de volatilité. Elle reste la référence de base.' },
    'for-q4': { type: 'single', correct: 'b', explanation: 'Une modification d’un seul bit change l’empreinte SHA-256. Comparer l’empreinte actuelle à celle consignée lors de l’acquisition prouve l’intégrité.' },
    'for-q5': { type: 'multi', correct: ['a', 'b', 'c'], explanation: 'La chaîne de conservation est factuelle : collecte, méthode, empreinte, transferts successifs avec dates et motifs.', whyWrong: { d: 'Les opinions n’ont pas leur place dans ce registre ; les conclusions figurent dans le rapport, étayées par les faits.' } },
    'for-q6': { type: 'truefalse', correct: true, explanation: 'Le système peut monter le volume, mettre à jour des dates d’accès, écrire des fichiers système (indexation, corbeille). Un bloqueur d’écriture évite toute modification.' },
    'for-q7': { type: 'single', correct: 'a', explanation: 'Les fichiers Prefetch (.pf) sont créés lors de l’exécution d’un programme et conservent le nombre d’exécutions et jusqu’à huit dernières dates d’exécution (Windows 8 et suivants).' },
    'for-q8': { type: 'short', accepted: ['volatility', 'volatility 3', 'volatility3'], explanation: 'Volatility (version 3 actuellement) extrait d’une image mémoire les processus, connexions, modules injectés, lignes de commande, etc.' },
    'for-q9': { type: 'multi', correct: ['a', 'b', 'c'], explanation: 'Clés Run, services (7045) et tâches planifiées sont parmi les mécanismes de persistance les plus fréquents (ATT&CK TA0003).', whyWrong: { d: 'La résolution d’écran n’a pas de lien avec la persistance.' } },
    'for-q10': { type: 'single', correct: 'b', explanation: '$STANDARD_INFORMATION est modifiable par des API courantes ; $FILE_NAME est mis à jour par le noyau. Une création $FN récente avec une création $SI ancienne signe un antidatage volontaire.' },
    'for-q11': { type: 'truefalse', correct: true, explanation: 'En hiver, Paris est en UTC+1 : 10:00 heure de Paris correspond à 09:00 UTC. En été (UTC+2), il faudrait retirer deux heures.' },
    'for-q12': { type: 'short', accepted: ['utc'], explanation: 'Le temps universel coordonné (UTC) n’a pas de changement d’heure : il permet de comparer sans ambiguïté des sources de fuseaux différents.' },
    'for-q13': {
      type: 'open',
      model: '1) Photographier l’écran et la scène, noter l’heure, ne pas toucher au clavier inutilement. 2) Isoler du réseau (câble, Wi-Fi) sans éteindre. 3) Acquérir la mémoire vive avec un outil depuis la clé USB vers le disque externe, en notant les commandes ; calculer l’empreinte. 4) Récupérer la clé de récupération BitLocker (depuis l’AD ou Entra ID, ou en mémoire) et, si possible, réaliser une image logique du volume déverrouillé. 5) Éteindre (débrancher l’alimentation selon la doctrine), retirer le disque, faire une image physique via bloqueur d’écriture, calculer l’empreinte. 6) Sceller, remplir la fiche de scellé et la chaîne de conservation à chaque étape.',
      criteria: ['La mémoire est acquise avant l’extinction.', 'La question de la clé BitLocker est traitée avant l’extinction.', 'Les empreintes sont calculées et consignées.', 'La documentation (photos, horaires, chaîne de conservation) accompagne chaque étape.'],
      explanation: 'Avec le chiffrement intégral, éteindre trop tôt peut rendre le disque définitivement illisible si la clé de récupération n’est pas disponible.',
    },
    'for-q14': { type: 'single', correct: 'b', explanation: 'L’epoch Unix est le 1er janvier 1970 à 00:00:00 UTC. Le 1er janvier 1601 UTC est l’origine du format FILETIME de Windows (intervalles de 100 ns).' },
    'for-q15': {
      type: 'open',
      model: 'Hypothèses : 1) effacement volontaire des journaux par l’attaquant (événement 1102 « journal effacé » ou 104) ; 2) arrêt du service de journalisation ou de l’agent de collecte ; 3) saturation et rotation du journal (taille maximale trop faible) ; 4) serveur éteint ou redémarré (événements 6005/6006, 6008) ; 5) panne de la chaîne de collecte vers le SIEM. Vérifications : rechercher 1102/104, examiner la configuration de taille du journal, croiser avec des sources indépendantes (EDR, pare-feu, SIEM, journaux d’autres serveurs, $MFT et USN Journal), vérifier la présence d’outils d’effacement dans Prefetch ou Amcache.',
      criteria: ['L’effacement volontaire est envisagé et vérifiable par un événement précis.', 'Au moins deux causes non malveillantes sont proposées.', 'Le croisement avec des sources indépendantes est proposé.'],
      explanation: 'Un trou dans les journaux est en soi un fait à expliquer. Les sources indépendantes (SIEM, EDR, artefacts disque) permettent souvent de combler le manque.',
    },
    'for-q16': { type: 'multi', correct: ['a', 'b', 'd'], explanation: 'Traçabilité, corroboration et reproductibilité sont les piliers de la valeur probante.', whyWrong: { c: 'Modifier l’image change son empreinte et détruit sa valeur probante ; on filtre au moment de l’analyse, jamais dans la preuve.' } },
  },
};
