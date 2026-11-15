import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: 'i-soc-detection',
  questions: {
    'soc-q1': { type: 'single', correct: 'a', explanation: 'Le SIEM (Security Information and Event Management) centralise, normalise et corrèle les journaux de sources multiples, et produit des alertes selon des règles. Le pare-feu est une source de journaux parmi d’autres.' },
    'soc-q2': { type: 'multi', correct: ['a', 'b', 'd'], explanation: 'Un EDR collecte une télémétrie fine (processus, fichiers, registre, réseau), détecte des comportements suspects et permet d’agir à distance (isolement, arrêt de processus).', whyWrong: { c: 'Le routage BGP relève des équipements réseau, pas d’un agent de sécurité sur poste.' } },
    'soc-q3': { type: 'short', accepted: ['soar'], explanation: 'SOAR : Security Orchestration, Automation and Response. Il automatise les tâches répétitives (enrichissement, ouverture de tickets, blocage) selon des playbooks, libérant du temps d’analyse.' },
    'soc-q4': { type: 'single', correct: 'c', explanation: 'Un faux négatif est une activité malveillante non détectée. C’est le cas le plus dangereux, car invisible : on le réduit en améliorant la couverture des journaux et des règles, et par la chasse aux menaces.' },
    'soc-q5': { type: 'truefalse', correct: false, explanation: 'Les attaques par fatigue MFA (notifications répétées jusqu’à acceptation), le vol de jetons de session et les proxys d’hameçonnage contournent la MFA classique. Le contexte (lieu, heure, appareil) reste à analyser.' },
    'soc-q6': { type: 'single', correct: 'a', explanation: 'Aucun déplacement physique ne permet de passer de Lyon à Singapour en 40 minutes. Il faut toutefois vérifier les explications légitimes (VPN d’entreprise sortant à l’étranger, relais cloud) avant de conclure.' },
    'soc-q7': { type: 'single', correct: 'd', explanation: 'Une empreinte change en recompilant, une IP ou un domaine en quelques minutes. Changer ses techniques oblige l’attaquant à réapprendre et réoutiller : c’est le sommet de la pyramide de la douleur.' },
    'soc-q8': { type: 'truefalse', correct: true, explanation: 'Les tactiques ATT&CK (accès initial, exécution, persistance, élévation de privilèges, contournement des défenses, accès aux identifiants, découverte, mouvement latéral, collecte, commande et contrôle, exfiltration, impact…) représentent les objectifs ; chaque technique y est rattachée.' },
    'soc-q9': { type: 'short', accepted: ['sigma'], explanation: 'Sigma décrit une règle (source de journaux, sélection, condition) en YAML. Des convertisseurs la traduisent vers les langages de requête des SIEM (Splunk SPL, KQL, Elastic, etc.).' },
    'soc-q10': { type: 'multi', correct: ['a', 'b', 'd'], explanation: 'Empreintes, domaines et clés de registre précises sont des artefacts observables : des IOC.', whyWrong: { c: 'Une technique décrit un comportement : c’est une TTP, pas un IOC.' } },
    'soc-q11': { type: 'single', correct: 'b', explanation: 'Le confinement vise à stopper la propagation : isolement réseau, désactivation de comptes, blocage de flux. L’éradication (retrait de la menace) vient ensuite.' },
    'soc-q12': { type: 'truefalse', correct: true, explanation: 'L’article 33 du RGPD impose la notification à l’autorité de contrôle (la CNIL en France) dans les 72 heures, sauf si la violation est peu susceptible d’engendrer un risque pour les droits et libertés des personnes. La documentation interne de la violation est obligatoire dans tous les cas.' },
    'soc-q13': {
      type: 'open',
      model: '1) Isoler immédiatement le serveur via l’EDR (le chiffrement en cours justifie l’urgence), sans l’éteindre, pour préserver la mémoire. 2) Identifier le compte et le processus à l’origine du chiffrement ; désactiver ce compte. 3) Vérifier si d’autres hôtes présentent la même activité (requête EDR/SIEM) et les isoler. 4) Protéger les sauvegardes : vérifier qu’elles sont hors ligne ou immuables, couper les accès de l’attaquant aux serveurs de sauvegarde. 5) Déclencher la cellule de crise selon le playbook (direction, juridique, communication) via un canal hors bande. 6) Commencer la chronologie et la collecte de preuves.',
      criteria: ['L’isolement du serveur est la première action, sans extinction.', 'Le compte ou le processus responsable est identifié et neutralisé.', 'La recherche d’autres hôtes touchés est prévue.', 'La protection des sauvegardes est mentionnée.', 'L’escalade vers la gestion de crise est prévue.'],
      explanation: 'Face à un chiffrement en cours, le confinement prime : chaque minute compte. La préservation des sauvegardes est souvent ce qui décide de la reprise.',
    },
    'soc-q14': { type: 'multi', correct: ['a', 'b', 'd'], explanation: 'La préparation regroupe tout ce qui doit exister avant l’incident : playbooks testés, sauvegardes, journaux, contacts et moyens de communication de crise.', whyWrong: { c: 'Supprimer la persistance relève de l’éradication, pendant l’incident.' } },
    'soc-q15': {
      type: 'open',
      model: 'Le pare-feu ne voit que des flux réseau à son passage : resteront invisibles l’hameçonnage et l’exécution de code sur les postes, l’élévation de privilèges locale, le vol d’identifiants, le mouvement latéral entre machines d’un même segment, l’abus de comptes légitimes et les attaques sur des services cloud ou SaaS. Priorités : 1) journaux Active Directory (authentifications, modifications de groupes) ; 2) télémétrie EDR ou Sysmon des postes et serveurs ; 3) journaux d’identité cloud (Entra ID, Google) et de messagerie ; 4) proxy web et DNS ; 5) VPN et accès distants.',
      criteria: ['Au moins trois catégories d’attaques invisibles sont citées.', 'Les journaux d’authentification (AD ou cloud) figurent parmi les priorités.', 'La télémétrie des postes (EDR, Sysmon) est proposée.'],
      explanation: 'La couverture de détection se pense à partir des techniques à détecter, puis des sources qui les rendent visibles.',
    },
    'soc-q16': { type: 'single', correct: 'b', explanation: 'Une clôture documentée permet la revue par un pair, l’amélioration des règles (réduction du bruit) et la reprise rapide si l’alerte se révèle plus tard liée à un incident.' },
  },
};
