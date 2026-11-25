import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'e-crypto-appliquee-avancee',
  practice: {
    'revue-jeton': {
      blocks: [
        {
          t: 'table',
          head: ['Faiblesse', 'Attaque rendue possible'],
          rows: [
            ['Secret `changeme` versionné dans le dépôt', 'Quiconque lit ou devine le secret forge des jetons HS256 valides pour n’importe quel utilisateur'],
            ['L’algorithme est lu dans l’en-tête du jeton', 'L’attaquant choisit l’algorithme, donc la clé et le mode de vérification'],
            ['`alg == "none"` accepté', 'Un jeton sans signature est considéré comme valide : forge triviale'],
            ['La famille d’algorithme détermine la clé (HS ou RSA)', 'Confusion d’algorithme : choisir HS pour tomber sur le secret faible, ou pour détourner la clé publique en secret HMAC dans d’autres implémentations'],
            ['Comparaison `attendu == signature`', 'Temps variable avec le premier octet différent : reconstruction de la signature par mesures'],
            ['Aucune vérification de `exp`, `nbf`, `iss`, `aud`', 'Jetons expirés, ou émis pour un autre service, acceptés indéfiniment'],
          ],
        },
        { t: 'p', text: 'Règles correctes : le serveur impose **une liste blanche d’algorithmes** (par exemple uniquement RS256 ou EdDSA) et associe **une clé de vérification à un seul algorithme** ; l’en-tête ne sert qu’à choisir parmi des clés déjà connues (`kid` dans une table fermée) ; la signature est comparée avec une fonction **en temps constant** ; on vérifie ensuite `exp`, `nbf`, `iss` et `aud`, et l’on renvoie une erreur unique sans détail.' },
        { t: 'p', text: 'Gestion des clés : préférer une signature **asymétrique** (clé privée uniquement chez l’émetteur, clé publique publiée, par exemple en JWKS, pour les vérificateurs) ; clé privée dans un KMS ou un HSM ; rotation planifiée avec plusieurs clés publiées pendant la transition ; durée de vie courte des jetons et révocation par liste ou par rotation en cas de compromission. Retirer immédiatement le secret du dépôt et purger son historique.' },
      ],
    },
    'plan-migration-pq': {
      blocks: [
        {
          t: 'table',
          head: ['Élément', 'Mosca (x + y > z ?)', 'Mesure'],
          rows: [
            ['(1) Portail patient, dossiers 30 ans', 'x = 30 ans, y ≈ 5 ans, z = 15 ans : 35 > 15, **risque présent**, et le trafic est enregistrable aujourd’hui', 'Échange **hybride** (X25519 + ML-KEM) dès que le serveur et les clients le permettent ; ECDHE au minimum pour la confidentialité persistante'],
            ['(2) Sauvegardes AES-128 via tunnel IPsec', 'Longue durée de sensibilité et échange Diffie-Hellman cassable par Shor : **risque présent**', 'Passer à AES-256 ; protéger le tunnel par un échange hybride ou une clé prépartagée symétrique forte (PSK) en attendant le support post-quantique'],
            ['(3) Jetons de session de 15 minutes', 'x = 15 minutes : **aucune urgence**', 'Rien de particulier ; suivre l’agilité de la bibliothèque'],
            ['(4) Signature de firmware sur 15 ans', 'Les appareils vérifient avec une clé RSA 2 048 bits pendant 15 ans : une signature forgée plus tard est possible', 'Signature **post-quantique ou hybride** (ML-DSA, ou SLH-DSA pour une racine), clé racine plus durable, mécanisme de **mise à jour de la clé de vérification** dans les appareils'],
          ],
        },
        { t: 'list', items: ['Inventaire : protocoles, bibliothèques, certificats, clés, durées de sensibilité, propriétaires.', 'Priorité : échanges de clés exposés à l’enregistrement, puis signatures à longue durée de vie.', 'Risques : messages et certificats plus gros (fragmentation, limites de taille), équipements qui ne peuvent pas être mis à jour, performances, bibliothèques jeunes.', 'Repli : conserver un mécanisme classique en parallèle (hybride), tests d’interopérabilité, calendrier révisé selon les recommandations officielles.'] },
        { t: 'callout', kind: 'tip', text: 'Le point (4) est le plus délicat : un appareil déployé ne change pas de clé de vérification facilement. Prévoir la **possibilité d’en changer** dès la conception est la vraie mesure d’agilité.' },
      ],
    },
    'hierarchie-cles': {
      blocks: [
        {
          t: 'table',
          head: ['Niveau', 'Contenu', 'Conservation'],
          rows: [
            ['Racine', 'Clé maîtresse du service', 'HSM sur site (non exportable), sauvegarde par parts de Shamir hors ligne'],
            ['KEK', 'Clé de chiffrement de clés par domaine ou par locataire', 'KMS cloud, protégée par la racine, accès limité et journalisé'],
            ['DEK', 'Clé de données par client (ou par lot)', 'Stockée **chiffrée** à côté des données, déchiffrée à la demande par l’application via le KMS'],
            ['Signature', 'Clé de signature des relevés', 'Clé distincte, dans le HSM, avec rotation propre et publication de la clé publique'],
          ],
        },
        { t: 'list', items: ['Cérémonie : salle contrôlée, HSM hors ligne, script validé et témoins, clé générée dans le HSM, sauvegarde en parts de Shamir (par exemple 3 sur 5) confiées à des personnes distinctes dans des coffres distincts, double contrôle, journal signé, empreinte de la clé publique publiée.', 'Suppression à la demande : une DEK par client ; détruire la DEK (et ses sauvegardes) rend les données illisibles, y compris dans les sauvegardes (crypto-shredding).', 'Rotation : la racine ou la KEK change sans rechiffrer les données (on rechiffre les DEK) ; les anciennes versions restent disponibles pour le déchiffrement pendant la migration.', 'Détection : alertes sur les volumes de déchiffrement anormaux, usages hors horaires ou depuis une application inattendue, journaux immuables.'] },
        { t: 'p', text: 'Une **variable d’environnement** contenant la clé unique est rejetée : elle apparaît dans les processus, les journaux, les images de conteneurs et les sauvegardes, interdit la rotation et la suppression ciblée, et fait d’un seul vol un accès à toutes les données.' },
      ],
    },
  },
};
