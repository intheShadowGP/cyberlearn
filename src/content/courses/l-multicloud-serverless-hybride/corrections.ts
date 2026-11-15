import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: 'l-multicloud-serverless-hybride',
  questions: {
    'mch-q1': { type: 'single', correct: 'a', explanation: 'Le fournisseur sécurise l’infrastructure sous-jacente ; le client reste responsable de sa configuration, de ses identités et de ses données. La frontière exacte dépend du service (IaaS, PaaS, SaaS), mais le principe est commun aux fournisseurs.' },
    'mch-q2': { type: 'single', correct: 'a', explanation: 'Les incidents cloud proviennent très majoritairement d’erreurs de configuration côté client : stockage public, droits excessifs, secrets exposés. C’est pourquoi la configuration et l’IAM sont au cœur de la sécurité cloud.' },
    'mch-q3': { type: 'short', accepted: ['CSPM', 'cspm'], explanation: 'Le CSPM (Cloud Security Posture Management) évalue en continu la configuration par rapport aux bonnes pratiques et aux référentiels, et signale les écarts (exposition, droits, journalisation).' },
    'mch-q4': { type: 'single', correct: 'a', explanation: 'L’annuaire d’identités d’Azure est Microsoft Entra ID (anciennement Azure AD). Cloud Identity est celui de Google, IAM celui d’AWS.' },
    'mch-q5': { type: 'truefalse', correct: true, explanation: 'Les droits IAM de Google Cloud s’héritent du haut vers le bas de la hiérarchie : un rôle accordé à l’organisation s’applique à tous les dossiers et projets. D’où l’importance d’attribuer au niveau le plus bas suffisant.' },
    'mch-q6': { type: 'multi', correct: ['a', 'b', 'd'], explanation: 'Droits minimaux par identité non humaine, fédération au lieu de clés exportées et attribution au niveau le plus bas limitent l’impact d’une compromission.', whyWrong: { c: 'Le compte de service par défaut est justement souvent trop permissif : on lui préfère des comptes dédiés.' } },
    'mch-q7': { type: 'single', correct: 'a', explanation: 'L’administrateur général contrôle tout le locataire Entra ID : chaque titulaire est une cible à très fort impact. On en limite le nombre, avec MFA résistante et accès juste-à-temps.' },
    'mch-q8': {
      type: 'open',
      model: 'Sur Azure comme sur Google Cloud, les droits s’appliquent à une portée (ou s’héritent dans la hiérarchie) : un rôle accordé à un groupe de gestion / une organisation se propage à tous les abonnements, dossiers et projets en dessous. Un droit « trop haut » donne donc, souvent sans qu’on s’en rende compte, des permissions sur bien plus de ressources que nécessaire ; la compromission d’un seul compte concerné expose alors tout le périmètre hérité. Pour l’éviter : attribuer au niveau le plus bas suffisant (le projet ou la ressource concernés), préférer des rôles ciblés aux rôles très larges (Propriétaire/Owner, Contributeur/Editor), revoir régulièrement les attributions héritées, et utiliser un outil de posture pour repérer les droits excessifs.',
      criteria: ['L’héritage ou la portée élevée est expliqué comme propageant le droit vers le bas.', 'Le risque (permissions disproportionnées, impact d’une compromission) est décrit.', 'La règle d’attribution au niveau le plus bas suffisant est donnée.', 'Une mesure de contrôle (rôles ciblés, revue, posture) est proposée.'],
      explanation: 'La hiérarchie des ressources est un outil de cloisonnement : mal utilisée, elle devient un amplificateur de privilèges.',
    },
    'mch-q9': { type: 'single', correct: 'a', explanation: 'Un groupe de sécurité est un pare-feu attaché à une ressource (ou à un sous-réseau) qui n’autorise que les flux voulus, par port et par source. En refus par défaut, il réduit fortement l’exposition.' },
    'mch-q10': { type: 'truefalse', correct: false, explanation: 'Ouvrir SSH/RDP au monde entier expose la ressource à un balayage et à des tentatives permanentes, quelle que soit la force du mot de passe. L’accès d’administration passe par un bastion, un point d’accès privé ou un VPN.' },
    'mch-q11': { type: 'multi', correct: ['a', 'b', 'c', 'd'], explanation: 'Refus par défaut, sous-réseaux privés, points d’accès privés et journalisation des flux sont toutes des mesures de sécurisation du réseau cloud.' },
    'mch-q12': { type: 'single', correct: 'a', explanation: 'Le serverless supprime le serveur à administrer, mais la surface se déplace vers le code de la fonction, ses permissions et ses déclencheurs, qui deviennent les points à sécuriser.' },
    'mch-q13': { type: 'truefalse', correct: true, explanation: 'Les variables d’environnement sont souvent visibles dans la configuration et les journaux. Les secrets d’une fonction se conservent dans un coffre de secrets, récupérés à l’exécution.' },
    'mch-q14': { type: 'short', accepted: ['identité fédérée', 'identite federee', 'fédération', 'federation', 'identité unifiée', 'identite unifiee'], explanation: 'L’identité fédérée (un annuaire de référence) évite de dupliquer les comptes et les politiques sur chaque environnement, source d’incohérences et d’angles morts.' },
    'mch-q15': {
      type: 'open',
      model: 'Problèmes : chaque environnement (interne, cloud A, cloud B) a ses propres identités, ses propres politiques et sa propre console, ce qui crée des incohérences (droits et contrôles différents), des angles morts (pas de vue d’ensemble), une charge d’administration élevée et des comptes orphelins. Recommandations : fédérer l’identité sur un annuaire de référence pour que les mêmes personnes et les mêmes règles d’authentification (MFA, accès conditionnel) s’appliquent partout ; définir des politiques de sécurité équivalentes d’un environnement à l’autre ; mettre en place une surveillance de posture unifiée (CSPM multi-cloud) et une collecte de journaux centralisée pour avoir une vue unique ; harmoniser la gestion des secrets. L’objectif est la cohérence et la visibilité, pas l’uniformité technique des fournisseurs.',
      criteria: ['Les problèmes d’incohérence et d’angles morts du multi-environnement sont identifiés.', 'L’identité fédérée est recommandée.', 'Une visibilité ou posture unifiée (CSPM, journaux centralisés) est proposée.'],
      explanation: 'Le multi-cloud n’est sûr que si l’on retrouve partout les mêmes identités, les mêmes politiques et une vue d’ensemble.',
    },
    'mch-q16': { type: 'single', correct: 'a', explanation: 'Une fonction serverless embarque ses dépendances : une bibliothèque vulnérable y reste exploitable, même sans serveur à administrer. On analyse et met à jour ces dépendances comme pour toute application.' },
  },
};
