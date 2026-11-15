import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: 'l-cloud-iam',
  questions: {
    'cl-q1': { type: 'single', correct: 'b', explanation: 'Même en SaaS, le client gère ses utilisateurs, leurs droits, la MFA et ses données. Le fournisseur fournit les moyens (SSO, MFA, journaux), le client doit les configurer.' },
    'cl-q2': { type: 'truefalse', correct: true, explanation: 'En IaaS, le fournisseur gère le matériel et l’hyperviseur ; le système invité, ses correctifs, ses comptes et ses applications relèvent du client.' },
    'cl-q3': { type: 'short', accepted: ['secnumcloud'], explanation: 'SecNumCloud est le référentiel de qualification de l’ANSSI pour les prestataires d’informatique en nuage. Sa version 3.2 intègre des exigences d’immunité aux lois extraterritoriales.' },
    'cl-q4': { type: 'single', correct: 'b', explanation: 'Dans la logique d’évaluation IAM, un Deny explicite correspondant prévaut toujours sur n’importe quel Allow. C’est ce qui permet de poser des garde-fous (politiques de contrôle de service, limites de permissions).' },
    'cl-q5': { type: 'truefalse', correct: true, explanation: 'Le refus implicite est la règle par défaut : seule une déclaration Allow applicable, sans Deny contraire, autorise une action.' },
    'cl-q6': { type: 'multi', correct: ['a', 'b', 'd'], explanation: 's’attacher une politique, faire porter un rôle privilégié à une ressource qu’on contrôle, ou créer des clés pour un autre utilisateur permettent d’obtenir plus de droits que prévu.', whyWrong: { c: 'Lire des objets d’un compartiment de journaux expose des informations, mais ne donne pas de droits supplémentaires en soi.' } },
    'cl-q7': { type: 'short', accepted: ['deny', 'explicit deny', 'le deny'], explanation: 'Un Deny explicite l’emporte sur tout Allow, quel que soit l’endroit où il est défini (politique d’identité, de ressource, SCP).' },
    'cl-q8': { type: 'single', correct: 'b', explanation: 'Le principal `*` désigne tout le monde, y compris les requêtes anonymes. Combiné à s3:GetObject, il rend les objets publics.' },
    'cl-q9': { type: 'multi', correct: ['a', 'b', 'd'], explanation: 'Coffres avec rotation, identités fédérées et rôles d’instance suppriment ou réduisent la durée de vie des secrets.', whyWrong: { c: 'Un .env versionné finit tôt ou tard dans l’historique d’un dépôt, parfois public.' } },
    'cl-q10': { type: 'truefalse', correct: false, explanation: 'Le chiffrement au repos géré par le service est transparent pour les requêtes autorisées : si le compartiment est public, le service déchiffre et sert les objets à tout le monde. Le chiffrement protège contre l’accès au support physique, pas contre une mauvaise autorisation.' },
    'cl-q11': { type: 'single', correct: 'b', explanation: 'Un CSPM compare en continu la configuration réelle (stockage public, MFA, journaux, réseaux ouverts) aux référentiels et alerte sur les écarts, voire les corrige automatiquement.' },
    'cl-q12': { type: 'multi', correct: ['a', 'b', 'c'], explanation: 'Compte racine sans MFA, SSH ouvert à Internet et journalisation absente sont des écarts classiques des référentiels CIS.', whyWrong: { d: 'Un rôle limité à une action sur un préfixe précis est un exemple de moindre privilège.' } },
    'cl-q13': { type: 'short', accepted: ['cloudtrail', 'aws cloudtrail'], explanation: 'CloudTrail enregistre les appels d’API (qui, quoi, quand, depuis où). Sur Azure, l’équivalent est le journal d’activité ; sur Google Cloud, les Cloud Audit Logs.' },
    'cl-q14': {
      type: 'open',
      model: 'Démarche : identifier précisément les actions nécessaires (créer et mettre à jour la fonction, son rôle d’exécution, ses journaux), puis créer une politique limitée : lambda:CreateFunction, UpdateFunctionCode, UpdateFunctionConfiguration sur des fonctions au préfixe du projet ; iam:PassRole uniquement sur le rôle d’exécution prévu ; logs:* limité au groupe de journaux du projet. Déployer via la CI avec une identité fédérée (OIDC) plutôt qu’avec les droits personnels du développeur. Utiliser une limite de permissions (permission boundary) et analyser l’usage réel (Access Analyzer) pour réduire encore. Pour l’expérimentation, un compte de bac à sable isolé peut être plus permissif.',
      criteria: ['Les actions nécessaires sont identifiées et limitées.', 'Les ressources sont restreintes (préfixe, rôle précis pour PassRole).', 'Le déploiement passe par la CI ou une identité dédiée.', 'Un garde-fou ou une revue (limite de permissions, Access Analyzer, compte isolé) est proposé.'],
      explanation: 'AdministratorAccess pour une tâche ciblée transforme toute compromission du poste du développeur en compromission totale du compte cloud.',
    },
    'cl-q15': {
      type: 'open',
      model: 'Plusieurs options sans accès public : 1) créer un rôle IAM que le compte cloud du prestataire peut assumer (relation de confiance limitée à son identifiant de compte, avec un identifiant externe), ne donnant que s3:GetObject et ListBucket sur le préfixe des sauvegardes ; 2) ou générer chaque nuit des URL pré-signées à durée courte transmises par un canal sécurisé ; 3) ou une réplication vers un compartiment du prestataire. Dans tous les cas : chiffrement avec une clé KMS dont l’usage est aussi accordé au prestataire, journalisation des accès, et blocage de l’accès public maintenu au niveau du compte.',
      criteria: ['Le compartiment reste privé (blocage public maintenu).', 'Un mécanisme d’accès authentifié et limité est proposé (rôle inter-comptes, URL pré-signées, réplication).', 'Les droits sont limités au strict nécessaire (lecture, préfixe).', 'La journalisation des accès est prévue.'],
      explanation: 'Les accès inter-organisations doivent passer par des identités et des autorisations explicites, jamais par l’ouverture publique.',
    },
    'cl-q16': { type: 'single', correct: 'a', explanation: 'Analyser l’Infrastructure as Code dans la CI détecte les écarts (stockage public, chiffrement absent) avant qu’ils n’existent en production : c’est le principe du « shift left ».' },
  },
};
