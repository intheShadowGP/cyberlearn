import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'e-chiffrement-tls-pki',
  practice: {
    'revue-crypto': {
      blocks: [
        {
          t: 'table',
          head: ['Faiblesse', 'Conséquence'],
          rows: [
            ['Clé en dur, versionnée', 'Toute personne ayant accès au dépôt (ou à une fuite du dépôt) déchiffre toutes les données'],
            ['IV fixe à zéro en CBC', 'Deux numéros identiques donnent le même texte chiffré : on peut repérer les doublons et comparer'],
            ['CBC sans MAC', 'Aucune intégrité : un texte chiffré modifié est accepté ; risque d’oracle de remplissage'],
            ['Clé de 16 caractères ASCII prévisibles', 'Entropie très inférieure à 128 bits'],
            ['`verify=False`', 'Plus aucune authentification du serveur : interception triviale par un attaquant sur le réseau'],
          ],
        },
        { t: 'p', text: 'Correction : chiffrer avec un AEAD (AES-256-GCM ou ChaCha20-Poly1305) via une bibliothèque de haut niveau qui génère un nonce unique à chaque appel et le stocke avec le texte chiffré ; ajouter l’identifiant de l’enregistrement en données associées pour empêcher l’échange de valeurs entre lignes ; supprimer `verify=False` et, si une AC interne est utilisée, la fournir explicitement au client.' },
        { t: 'p', text: 'Gestion de la clé : chiffrement d’enveloppe avec une clé maîtresse dans un KMS ; l’application ne possède que des clés de données chiffrées ; rotation de la clé maîtresse (les anciennes versions restent utilisables en déchiffrement), rechiffrement progressif ; révocation immédiate de la clé exposée dans le dépôt et purge de l’historique Git.' },
      ],
    },
    'audit-tls': {
      blocks: [
        { t: 'list', items: ['Protocoles : TLS 1.2 et 1.3 seulement.', 'Suites : ECDHE + AES-GCM ou ChaCha20-Poly1305 en TLS 1.2 ; suites par défaut en TLS 1.3.', 'Chaîne complète (certificat + intermédiaires), renouvellement automatique (ACME), surveillance Certificate Transparency.', 'En-tête `Strict-Transport-Security: max-age=31536000; includeSubDomains`.'] },
        { t: 'p', text: 'Avec l’échange RSA statique, la clé de session est chiffrée avec la clé RSA du serveur : quiconque a enregistré le trafic et obtient un jour cette clé (vol, saisie, faille) déchiffre **toutes** les sessions passées. Pour des données de santé confidentielles 15 ans, c’est inacceptable : ECDHE apporte la confidentialité persistante.' },
        { t: 'p', text: 'Post-quantique : activer l’échange de clés hybride (X25519 + ML-KEM-768) dès que le serveur et ses clients le permettent, en commençant par ce portail dont les données ont une longue durée de sensibilité ; inscrire la migration des certificats vers des signatures post-quantiques dans la feuille de route, à mesure que les AC et les navigateurs les prendront en charge.' },
      ],
    },
    'plan-chiffrement': {
      blocks: [
        {
          t: 'table',
          head: ['Niveau', 'Menace couverte', 'Réalisation'],
          rows: [
            ['Transit', 'Écoute et usurpation sur le réseau', 'TLS 1.3 (1.2 minimum), HSTS, certificats renouvelés automatiquement, mTLS entre services internes et pour les API partenaires'],
            ['Volume', 'Vol d’un disque ou d’une machine virtuelle', 'Chiffrement des disques des serveurs de base de données et des volumes de sauvegarde'],
            ['Sauvegardes', 'Vol ou fuite chez le prestataire', 'Chiffrement avant envoi, avec des clés qui restent chez l’organisation ; copies isolées'],
            ['Champs sensibles', 'Lecture par un administrateur de la base, sauvegarde volée, injection', 'Chiffrement par l’application (AES-256-GCM) avec l’identifiant du dossier en données associées'],
          ],
        },
        { t: 'list', items: ['Clés : chiffrement d’enveloppe avec une clé maîtresse dans un KMS ou un HSM, des clés de données par jeu de données, séparées entre test et production, avec accès limités et journalisés et alertes sur les usages anormaux.', 'Rotation : calendrier régulier et rotation immédiate après un incident ; anciennes versions de la clé maîtresse conservées pour déchiffrer pendant la migration, rechiffrement progressif des clés de données.'] },
        { t: 'list', items: ['Sauvegardes et récupération : sauvegarder les clés (ou leur moyen de récupération) séparément des données, tester la restauration avec les clés, documenter la procédure de reprise.', 'Vigilance : aucune clé dans le dépôt ni dans la base, inventaire des algorithmes pour l’agilité (migration post-quantique), tests réguliers de la configuration TLS.'] },
        { t: 'callout', kind: 'tip', text: 'Aucun niveau ne suffit seul : le chiffrement du volume protège du vol de matériel, celui des champs d’un administrateur curieux. La valeur de l’ensemble tient à la gestion des clés.' },
      ],
    },
  },
};
