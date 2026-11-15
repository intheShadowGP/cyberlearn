import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: 'a-systemes-fondamentaux',
  questions: {
    'afund-q1': { type: 'single', correct: 'b', explanation: 'La RAM est volatile : son contenu s’efface sans alimentation. SSD, disques et puce firmware sont des mémoires persistantes.', whyWrong: { d: 'La puce du firmware est une mémoire flash persistante, ce qui permet justement aux implants UEFI de survivre aux réinstallations.' } },
    'afund-q2': { type: 'truefalse', correct: false, explanation: 'Éteindre la machine efface la RAM, et donc les processus malveillants, connexions actives et clés de chiffrement. On isole d’abord la machine du réseau, puis on acquiert la mémoire, et seulement ensuite on décide de l’extinction.' },
    'afund-q3': { type: 'multi', correct: ['a', 'b', 'd'], explanation: 'La mémoire vive contient tout ce qui est en cours d’usage : clés de chiffrement déverrouillées, code malveillant injecté sans fichier sur disque, état des connexions réseau. C’est pourquoi l’acquisition mémoire est si précieuse en investigation.', whyWrong: { c: 'Un identifiant matériel n’est pas « trouvé en RAM » au sens forensique ; ce n’est pas l’intérêt de l’acquisition mémoire.' } },
    'afund-q4': { type: 'single', correct: 'b', explanation: 'Le firmware (UEFI, ou BIOS sur les machines anciennes) s’exécute dès la mise sous tension, initialise le matériel et lance le chargeur d’amorçage, qui charge ensuite le noyau.' },
    'afund-q5': { type: 'short', accepted: ['secure boot', 'secureboot', 'demarrage securise', 'démarrage sécurisé'], explanation: 'Secure Boot vérifie la signature de chaque composant de la chaîne de démarrage à l’aide de clés stockées dans le firmware. Un chargeur non signé ou modifié est refusé.' },
    'afund-q6': { type: 'truefalse', correct: true, explanation: 'Un bootkit s’insère dans la chaîne de démarrage (secteur d’amorçage, chargeur, voire firmware). Il prend la main avant le système et peut masquer sa présence aux outils qui démarrent après lui. Secure Boot et l’attestation de démarrage (TPM) sont les contre-mesures.' },
    'afund-q7': { type: 'single', correct: 'b', explanation: 'Les applications n’ont pas d’accès direct au matériel. Elles invoquent un appel système (par exemple `open`/`read` sous Linux, `NtReadFile` sous Windows) ; le noyau vérifie les droits puis effectue l’opération.' },
    'afund-q8': { type: 'multi', correct: ['a', 'b', 'c'], explanation: 'Chaque processus possède un PID, un parent (PPID) et un jeton ou contexte de sécurité qui définit ses droits. Les adresses MAC appartiennent aux interfaces réseau, pas aux processus.', whyWrong: { d: 'Une adresse MAC identifie une interface réseau, partagée par tous les processus de la machine.' } },
    'afund-q9': { type: 'single', correct: 'b', explanation: 'Une relation Word → PowerShell avec une commande encodée en Base64 (`-enc`) est un indicateur classique de macro malveillante. Les règles de réduction de la surface d’attaque (ASR) de Microsoft Defender bloquent précisément le lancement de processus enfants par les applications Office.' },
    'afund-q10': { type: 'short', accepted: ['root'], explanation: 'Sous Linux, l’utilisateur `root` (UID 0) contourne la plupart des contrôles d’accès. On l’utilise ponctuellement via `sudo`, jamais pour le travail courant.' },
    'afund-q11': { type: 'truefalse', correct: true, explanation: 'C’est la définition du moindre privilège. Il s’applique aux personnes, aux comptes de service, aux applications et même aux durées (droits temporaires, « juste à temps »).' },
    'afund-q12': { type: 'single', correct: 'b', explanation: 'Passer d’un contexte limité à un contexte plus puissant sur la même machine est une élévation de privilèges. Le mouvement latéral, lui, consiste à passer d’une machine à une autre.', whyWrong: { a: 'Le mouvement latéral désigne le passage vers d’autres machines du réseau.' } },
    'afund-q13': {
      type: 'open',
      model: 'Si le service est compromis (faille, binaire remplacé, identifiants récupérés en mémoire), l’attaquant obtient les droits d’administrateur du domaine, donc potentiellement le contrôle de toutes les machines. À la place : un compte de service dédié, sans droits d’administration du domaine, avec seulement les droits nécessaires (lecture des données à sauvegarder, écriture vers la cible), idéalement un compte de service géré (gMSA) dont le mot de passe est renouvelé automatiquement, et une connexion interactive interdite.',
      criteria: ['Le risque de compromission de tout le domaine est identifié.', 'Un compte dédié aux droits minimaux est proposé.', 'Au moins une mesure complémentaire est citée (gMSA, interdiction de connexion interactive, rotation du mot de passe, surveillance).'],
      explanation: 'Les comptes de service sur-privilégiés sont l’une des premières causes de compromission totale d’un Active Directory.',
    },
    'afund-q14': { type: 'single', correct: 'b', explanation: 'Sans chiffrement, il suffit de retirer le disque d’un portable volé pour lire son contenu. Le chiffrement intégral rend les données illisibles sans la clé, protégée par le TPM et un code PIN.' },
    'afund-q15': {
      type: 'open',
      model: 'Éteindre détruirait les preuves en mémoire (processus malveillants, connexions, clés) sans garantir l’arrêt de l’attaque si d’autres machines sont touchées. Ordre proposé : 1) isoler la machine du réseau (débrancher ou isoler via l’EDR) pour contenir ; 2) acquérir la mémoire vive et noter l’état (processus, connexions) ; 3) acquérir le disque ou un instantané ; 4) analyser, puis décider de l’extinction et de la remédiation.',
      criteria: ['La perte des preuves volatiles est expliquée.', 'L’isolement réseau est proposé comme alternative à l’extinction.', 'L’acquisition de la mémoire précède l’extinction.'],
      explanation: 'L’ordre de volatilité (RFC 3227) guide la collecte : on prélève d’abord ce qui disparaît le plus vite.',
    },
    'afund-q16': { type: 'multi', correct: ['a', 'b', 'd'], explanation: 'Le noyau et les pilotes chargés dans le noyau s’exécutent en mode privilégié ; le firmware s’exécute avant le système et en dehors de son contrôle. Un pilote vulnérable est donc une porte d’entrée vers le noyau (technique dite « BYOVD »).', whyWrong: { c: 'Un navigateur lancé par un utilisateur standard s’exécute en espace utilisateur avec des droits limités, souvent même dans un bac à sable.' } },
  },
};
