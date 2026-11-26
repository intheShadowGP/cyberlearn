import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'p-materiel-zero-trust-confidentiel',
  practice: {
    'concevoir-zt': {
      blocks: [
        { t: 'list', items: ['Principes : ne faire confiance à aucun réseau par défaut ; vérifier explicitement chaque accès ; moindre privilège ; supposer la compromission.'] },
        {
          t: 'table',
          head: ['Axe', 'Mesure concrète'],
          rows: [
            ['Identité', 'Authentification forte (MFA résistante à l’hameçonnage), accès juste-à-temps, politiques dynamiques selon le contexte'],
            ['Appareils', 'N’autoriser que des appareils connus et conformes (à jour, protégés), vérifiés à chaque accès'],
            ['Segmentation', 'Micro-segmenter les applications ; chaque accès inter-service est authentifié et autorisé, pas implicite'],
          ],
        },
        { t: 'p', text: '« Supposer la compromission » conduit à concevoir pour limiter le rayon d’impact : micro-segmentation, journalisation complète, détection, et accès minimal, de sorte qu’une intrusion dans une zone n’ouvre pas tout le reste.' },
      ],
    },
    'donnees-hebergeur': {
      blocks: [
        { t: 'p', text: 'Les trois états de la donnée sont : au repos, en transit, en cours de traitement. Ici, le repos (chiffrement du stockage) et le transit (TLS) sont déjà maîtrisables ; le problème est le traitement, où les données seraient normalement en clair en mémoire, donc potentiellement accessibles à l’hébergeur.' },
        { t: 'list', items: ['Utiliser l’informatique confidentielle : exécuter le traitement dans une enclave, où les données restent protégées même du système de l’hébergeur.', 'Vérifier par attestation, avant d’envoyer les secrets, que l’enclave est légitime et exécute bien le code attendu.', 'Garder les clés sous contrôle du client (service de clés / HSM).'] },
        { t: 'callout', kind: 'warn', text: 'Limite : les enclaves réduisent la surface de confiance mais ne suppriment pas tous les risques (certaines attaques par canaux auxiliaires les ont visées). On les combine avec les autres mesures et on suit les correctifs du fournisseur.' },
      ],
    },
    'migration-pqc': {
      blocks: [
        {
          t: 'table',
          head: ['Usage', 'Urgence', 'Mesure'],
          rows: [
            ['Archives médicales (30 ans)', '**Très élevée** : menace « collecter maintenant, déchiffrer plus tard »', 'Passer l’échange de clés en mode hybride post-quantique, rechiffrer si nécessaire'],
            ['Mise à jour du micrologiciel (15 ans)', '**Élevée** : la vérification de signature doit durer autant que le produit', 'Intégrer une signature post-quantique ou hybride dès la conception, prévoir l’agilité'],
            ['Messagerie interne (2 ans)', 'Moyenne', 'Suivre le calendrier des bibliothèques, activer l’hybride quand il est disponible'],
            ['Certificat du site public (1 an)', 'Faible à court terme', 'Suivre les normes et le calendrier des autorités de certification'],
          ],
        },
        { t: 'list', items: ['**Inventorier** tous les usages de cryptographie asymétrique et leurs durées de confidentialité.', '**Mettre en place** l’agilité cryptographique (paramétrage, bibliothèques à jour, négociation d’algorithme).', '**Tester** une configuration hybride sur un périmètre pilote avant le déploiement.'] },
      ],
    },
  },
};
