import type { CourseBody } from '../../types';
import { questions } from './questions';

export const body: CourseBody = {
  courseId: 'p-materiel-zero-trust-confidentiel',
  lesson: {
    intro:
      'Les disciplines précédentes protègent les systèmes avec des mesures logicielles et organisationnelles. À un niveau avancé, la sécurité descend jusqu’au matériel et remonte jusqu’à l’architecture globale : sur quoi fonder la confiance quand on ne fait plus confiance au réseau, comment ancrer cette confiance dans une puce, comment protéger des données pendant leur traitement, et quelles attaques visent le matériel lui-même. Ce cours parcourt ces sujets de recherche appliquée, dans une optique de compréhension et de défense.',
    sections: [
      {
        id: 'zero-trust',
        title: 'Architecture Zero Trust',
        blocks: [
          { t: 'p', text: 'Le modèle traditionnel sépare un « intérieur » de confiance d’un « extérieur » hostile. L’**architecture Zero Trust** abandonne cette hypothèse : on ne fait confiance à aucun réseau ni à aucune machine par défaut, à l’intérieur comme à l’extérieur. Chaque accès est authentifié, autorisé et vérifié en continu.' },
          {
            t: 'table',
            head: ['Principe', 'Traduction concrète'],
            rows: [
              ['Vérifier explicitement', 'Authentifier l’utilisateur, l’appareil et son état à chaque accès'],
              ['Moindre privilège', 'Accès juste-à-temps et juste-assez, pas de droits permanents larges'],
              ['Supposer la compromission', 'Micro-segmenter, journaliser, limiter le rayon d’impact d’une intrusion'],
            ],
          },
          { t: 'def', term: 'Micro-segmentation', text: 'Découpage fin du réseau et des accès, jusqu’à la charge de travail, de sorte qu’une ressource compromise ne puisse pas se déplacer librement. C’est l’application de la segmentation (vue en réseau) poussée à l’échelle de chaque service.' },
          { t: 'callout', kind: 'key', text: 'Zero Trust n’est pas un produit mais une architecture : identité forte, appareils vérifiés, micro-segmentation, politique dynamique et surveillance. Le NIST la décrit dans sa publication SP 800-207.' },
        ],
      },
      {
        id: 'racine',
        title: 'Racine de confiance matérielle',
        blocks: [
          { t: 'p', text: 'Toute chaîne de confiance doit commencer quelque part. La **sécurité matérielle** fournit une **racine de confiance** ancrée dans une puce, bien plus difficile à altérer que du logiciel : c’est sur elle que reposent le démarrage vérifié et la protection des clés.' },
          {
            t: 'table',
            head: ['Composant', 'Rôle'],
            rows: [
              ['**TPM**', 'Puce qui mesure la chaîne de démarrage et stocke des clés ; elle ne libère un secret que si l’état mesuré est intègre'],
              ['**HSM**', 'Module matériel qui génère et garde les clés et réalise les opérations cryptographiques sans jamais exposer la clé'],
              ['**Secure Boot**', 'Vérifie la signature de chaque étape du démarrage (micrologiciel, chargeur, noyau) pour empêcher l’exécution d’un code non approuvé'],
              ['**Attestation**', 'Preuve, vérifiable à distance, de l’état d’intégrité d’une machine, fondée sur les mesures du TPM'],
            ],
          },
          { t: 'def', term: 'Chaîne de confiance (measured boot)', text: 'Chaque étape du démarrage mesure la suivante (empreinte) avant de lui passer la main et enregistre la mesure dans le TPM. Une modification quelque part change les mesures, ce qui est détectable et peut empêcher la libération des clés (par exemple celles de BitLocker).' },
          { t: 'callout', kind: 'key', text: 'La racine de confiance matérielle rend certaines garanties indépendantes du logiciel : même un système d’exploitation compromis ne peut pas extraire une clé d’un HSM ni falsifier une attestation d’intégrité.' },
        ],
      },
      {
        id: 'confidential',
        title: 'Informatique confidentielle et enclaves',
        blocks: [
          { t: 'p', text: 'On sait protéger les données **au repos** (chiffrement du stockage) et **en transit** (TLS). L’**informatique confidentielle** vise le troisième état : les données **en cours de traitement**, en mémoire, où elles sont normalement en clair.' },
          { t: 'def', term: 'Enclave (environnement d’exécution de confiance, TEE)', text: 'Zone isolée du processeur où le code et les données sont protégés même du système d’exploitation et de l’administrateur de la machine. Le contenu de l’enclave est chiffré en mémoire et son intégrité est vérifiée ; une attestation prouve à distance quel code s’y exécute.' },
          { t: 'list', items: ['Usage : traiter des données sensibles sur une infrastructure que l’on ne maîtrise pas entièrement (cloud), ou partager un calcul entre parties sans se dévoiler mutuellement les données.', 'L’**attestation** permet au client de vérifier qu’il parle bien à une enclave légitime exécutant le code attendu avant de lui confier des secrets.', 'Limites : les enclaves ne suppriment pas tous les risques (certaines attaques par canaux auxiliaires les ont visées) ; elles réduisent la surface de confiance, sans l’annuler.'] },
          { t: 'callout', kind: 'info', text: 'L’informatique confidentielle complète le chiffrement au repos et en transit : ensemble, ils visent à protéger la donnée dans ses trois états. C’est un domaine jeune, utile notamment pour le cloud et le calcul multipartite.' },
        ],
      },
      {
        id: 'menaces-hw',
        title: 'Menaces matérielles et contre-mesures (défensif)',
        blocks: [
          { t: 'p', text: 'Comprendre les attaques matérielles sert à s’en défendre et à évaluer la robustesse d’un composant. On les présente ici au niveau des principes et des **contre-mesures**, pas comme des procédures d’attaque.' },
          {
            t: 'table',
            head: ['Classe d’attaque', 'Principe (haut niveau)', 'Contre-mesures'],
            rows: [
              ['**Canaux auxiliaires**', 'Déduire un secret à partir d’une fuite physique indirecte (temps de calcul, consommation, émissions)', 'Implémentations à temps constant, masquage, réduction des fuites'],
              ['**Injection de fautes**', 'Perturber volontairement un composant (tension, horloge, lumière) pour provoquer une erreur exploitable', 'Détection d’anomalies, redondance, capteurs, double vérification'],
              ['**Rowhammer**', 'Des accès mémoire répétés provoquent des inversions de bits dans des cellules voisines', 'Mémoire à correction d’erreurs (ECC), rafraîchissement renforcé, atténuations matérielles'],
            ],
          },
          {
            t: 'example',
            title: 'Une fuite par le temps, et sa correction',
            blocks: [
              { t: 'p', text: 'Une vérification de jeton qui compare caractère par caractère et s’arrête dès le premier écart met un peu plus de temps quand les premiers caractères sont corrects. En mesurant finement ce temps sur de nombreux essais, on peut reconstituer le secret, caractère après caractère.' },
              { t: 'p', text: 'La contre-mesure est la comparaison à temps constant, qui compare toujours la totalité et ne révèle rien par sa durée. C’est la même règle que dans le cours sur le code sûr.' },
            ],
          },
          { t: 'def', term: 'Attaque par canal auxiliaire temporel', text: 'Exemple classique : une comparaison de secret qui s’arrête au premier caractère différent révèle, par son temps d’exécution, combien de caractères sont corrects. La contre-mesure est la comparaison à temps constant (vue dans le cours sur le code sûr).' },
          { t: 'callout', kind: 'warn', text: 'Ces attaques exigent souvent un accès proche ou physique au matériel, ou une co-résidence (même machine). Elles concernent surtout les composants à forte valeur (cartes à puce, HSM, environnements partagés) ; la défense relève des concepteurs de matériel et des bibliothèques cryptographiques, que l’on tient à jour.' },
        ],
      },
      {
        id: 'horizons',
        title: 'Horizons : systèmes distribués, cryptographie avancée, quantique',
        blocks: [
          { t: 'p', text: 'La sécurité avancée touche aussi des domaines en évolution rapide, à la frontière de la recherche.' },
          {
            t: 'table',
            head: ['Domaine', 'Enjeu de sécurité'],
            rows: [
              ['**Systèmes distribués**', 'Obtenir un accord fiable (consensus) malgré des pannes ou des participants malveillants ; tolérance aux fautes byzantines, intégrité des données répliquées'],
              ['**Cryptographie avancée**', 'Calculer sur des données chiffrées (chiffrement homomorphe), partager un calcul sans dévoiler les entrées (calcul multipartite), prouver sans révéler (preuves à divulgation nulle)'],
              ['**Sécurité quantique**', 'Un ordinateur quantique casserait les algorithmes asymétriques actuels ; d’où la migration vers la cryptographie post-quantique (vue dans le cours de cryptographie)'],
            ],
          },
          { t: 'def', term: 'Tolérance aux fautes byzantines', text: 'Capacité d’un système distribué à fonctionner correctement même si certains participants sont défaillants ou malveillants et envoient des informations contradictoires. C’est un fondement de la robustesse des systèmes répartis et de certaines chaînes de blocs.' },
          { t: 'def', term: 'Preuve à divulgation nulle de connaissance', text: 'Protocole par lequel une partie prouve qu’une affirmation est vraie (par exemple « je connais ce secret ») sans révéler le secret lui-même. Utile pour l’authentification et la confidentialité.' },
          { t: 'callout', kind: 'key', text: 'Ces domaines partagent une même idée : repousser la frontière de ce qu’on peut faire en sécurité (calculer sans voir, se mettre d’accord sans se faire confiance, résister à une machine quantique). Pour le défenseur, l’essentiel est de suivre l’état de l’art et de préparer les migrations, notamment post-quantique.' },
        ],
      },
      {
        id: 'attestation',
        title: 'Attestation à distance, micrologiciels et chaîne d’approvisionnement',
        blocks: [
          { t: 'p', text: 'Faire confiance à une machine ne suffit pas : il faut pouvoir **vérifier à distance** son état avant de lui confier un secret, et s’assurer que le matériel et ses mises à jour n’ont pas été altérés en amont.' },
          {
            t: 'table',
            head: ['Étape', 'Rôle', 'Point d’attention'],
            rows: [
              ['**Mesure**', 'Le TPM enregistre l’empreinte de chaque étape du démarrage', 'Mesures signées par une clé du composant'],
              ['**Preuve (evidence)**', 'La machine envoie ses mesures signées au vérificateur', 'Défi aléatoire pour éviter le rejeu'],
              ['**Vérification**', 'Le vérificateur compare aux valeurs de référence', 'Valeurs de référence tenues à jour à chaque mise à jour'],
              ['**Décision**', 'Libérer ou refuser l’accès aux secrets', 'Refus par défaut si la mesure est inconnue'],
            ],
          },
          { t: 'def', term: 'Attestation à distance', text: 'Protocole par lequel une machine prouve à un vérificateur, par des mesures signées, dans quel état d’intégrité elle se trouve. Le vérificateur ne confie des secrets qu’à une machine dont l’état correspond à une valeur de référence connue.' },
          { t: 'def', term: 'Protection contre le retour en arrière', text: 'Mécanisme (compteur de version non réinitialisable, par exemple) qui empêche d’installer une version antérieure d’un micrologiciel, afin qu’un défaut corrigé ne puisse pas être rétabli volontairement.' },
          { t: 'list', items: ['**Signer et vérifier** chaque mise à jour de micrologiciel avant installation.', '**Empêcher le retour** à une version vulnérable (anti-rollback).', '**Tenir un inventaire** des composants (nomenclature logicielle SBOM, et matérielle) pour réagir à une vulnérabilité d’un composant.', '**Qualifier les fournisseurs** et exiger la traçabilité des composants.'] },
          { t: 'callout', kind: 'warn', text: 'Une attestation prouve un état à un instant donné : elle ne dit rien de ce qui se passe après. On la renouvelle et on la combine avec la surveillance.' },
        ],
      },
      {
        id: 'agilite',
        title: 'Agilité cryptographique et migration post-quantique',
        blocks: [
          { t: 'p', text: 'Un ordinateur quantique suffisamment puissant casserait les algorithmes asymétriques actuels (RSA, courbes elliptiques). Les données interceptées aujourd’hui pourraient être déchiffrées demain : c’est la menace « **collecter maintenant, déchiffrer plus tard** ».' },
          {
            t: 'table',
            head: ['Mesure', 'Objectif', 'Remarque'],
            rows: [
              ['**Inventaire cryptographique**', 'Connaître algorithmes, longueurs de clés et usages', 'Base de toute migration'],
              ['**Priorisation par durée de confidentialité**', 'Traiter d’abord les données qui doivent rester secrètes longtemps', 'Plus la durée est longue, plus la migration est urgente'],
              ['**Mode hybride**', 'Combiner algorithme classique et post-quantique', 'Protège même si l’un des deux est affaibli'],
              ['**Agilité cryptographique**', 'Changer d’algorithme sans refondre le système', 'Paramétrage, bibliothèques à jour, protocoles négociables'],
            ],
          },
          { t: 'def', term: 'Agilité cryptographique', text: 'Capacité d’un système à remplacer un algorithme ou une longueur de clé par un autre sans refonte majeure, grâce à des interfaces et des protocoles qui négocient les algorithmes.' },
          { t: 'def', term: 'Échange de clés hybride', text: 'Établissement de clé qui combine un algorithme classique (courbe elliptique) et un algorithme post-quantique : la clé reste sûre tant que l’un des deux résiste.' },
          {
            t: 'example',
            title: 'Prioriser une migration',
            blocks: [
              { t: 'p', text: 'Une organisation recense trois usages : des archives médicales à conserver trente ans, des échanges de messagerie interne et un certificat de site web renouvelé chaque année. Les archives et l’échange de clés qui les protège passent en premier ; le certificat annuel suivra le calendrier des normes.' },
            ],
          },
          { t: 'list', items: ['**Inventorier** les usages de cryptographie asymétrique (échange de clés, signatures).', '**Suivre** les normes du NIST (algorithmes ML-KEM et ML-DSA) et les recommandations nationales.', '**Doubler** la longueur des clés symétriques (AES-256) face aux attaques quantiques génériques.', '**Tester** les performances et la compatibilité avant le déploiement.'] },
          { t: 'callout', kind: 'key', text: 'La migration est un projet de plusieurs années : commencer par l’inventaire et l’agilité coûte peu et évite d’être pris de court.' },
        ],
      },
    ],
    useCases: [
      'Conception d’une architecture Zero Trust pour une organisation sans périmètre clair (cloud, télétravail).',
      'Exigence d’attestation matérielle et d’enclaves pour traiter des données sensibles chez un hébergeur.',
      'Évaluation de la robustesse d’un composant sensible (carte à puce, HSM) face aux attaques matérielles.',
    ],
    commonMistakes: [
      'Croire que Zero Trust est un produit à acheter plutôt qu’une architecture à concevoir.',
      'Fonder la confiance uniquement sur du logiciel, sans racine matérielle.',
      'Penser qu’une enclave supprime tous les risques, y compris les canaux auxiliaires.',
      'Négliger la préparation à la menace quantique pour des données à longue durée de confidentialité.',
      'Confondre compréhension défensive des attaques matérielles et mode opératoire d’attaque.',
    ],
    bestPractices: [
      'Concevoir Zero Trust : identité forte, appareils vérifiés, micro-segmentation, politique dynamique, surveillance.',
      'Ancrer la confiance dans le matériel (TPM, HSM, Secure Boot) et utiliser l’attestation.',
      'Recourir à l’informatique confidentielle pour les données traitées sur une infrastructure peu maîtrisée, sans la croire infaillible.',
      'Tenir à jour les bibliothèques cryptographiques (implémentations à temps constant) et choisir du matériel robuste aux attaques physiques.',
      'Suivre l’état de l’art (crypto avancée, quantique) et planifier les migrations, notamment post-quantique.',
    ],
    keyPoints: [
      'Zero Trust : ne faire confiance à aucun réseau par défaut ; vérifier, moindre privilège, supposer la compromission.',
      'Racine de confiance matérielle : TPM (mesures, clés), HSM (clés), Secure Boot (démarrage signé), attestation.',
      'Informatique confidentielle : protéger les données en cours de traitement via des enclaves attestées.',
      'Attaques matérielles (canaux auxiliaires, fautes, Rowhammer) : comprises pour mieux s’en défendre (temps constant, ECC, redondance).',
      'Horizons : consensus distribué, crypto avancée (homomorphe, multipartite, preuves), migration post-quantique.',
    ],
  },
  practice: [
    {
      id: 'concevoir-zt',
      kind: 'case',
      title: 'Esquisser une architecture Zero Trust',
      context: [
        { t: 'p', text: 'Une organisation n’a plus de périmètre clair : applications dans le cloud, télétravail généralisé, prestataires. Le modèle « VPN + réseau interne de confiance » ne tient plus.' },
      ],
      steps: ['Énoncer les principes Zero Trust à appliquer.', 'Donner trois mesures concrètes (identité, appareils, segmentation).', 'Expliquer ce que « supposer la compromission » change dans la conception.'],
    },
    {
      id: 'donnees-hebergeur',
      kind: 'case',
      title: 'Protéger un traitement sensible chez un hébergeur',
      context: [{ t: 'p', text: 'Vous devez traiter des données personnelles sensibles sur l’infrastructure d’un fournisseur cloud, sans lui faire pleinement confiance pour l’accès en clair à ces données pendant le calcul.' }],
      steps: ['Rappeler les trois états de la donnée et lequel pose problème ici.', 'Proposer l’usage de l’informatique confidentielle et de l’attestation.', 'Mentionner une limite à garder à l’esprit.'],
    },
    {
      id: 'migration-pqc',
      kind: 'analysis',
      title: 'Analyse : prioriser une migration post-quantique',
      context: [
        {
          t: 'table',
          head: ['Usage', 'Algorithme actuel', 'Durée de confidentialité'],
          rows: [
            ['Archives médicales chiffrées, conservées', 'Échange de clés RSA-2048', '30 ans'],
            ['Messagerie interne (TLS)', 'Courbe elliptique P-256', '2 ans'],
            ['Certificat du site public', 'Signature RSA-2048, renouvelée chaque année', '1 an'],
            ['Mise à jour de micrologiciel d’un dispositif implanté', 'Signature ECDSA, durée de vie du produit 15 ans', '15 ans'],
          ],
        },
      ],
      steps: ['Classez les usages par urgence de migration et justifiez.', 'Indiquez le type de mesure adapté à chacun (hybride, agilité, calendrier).', 'Listez les premières actions à engager dès cette année.'],
    },
  ],
  questions,
  resources: [
    { title: 'Zero Trust Architecture (SP 800-207)', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/207/final' },
    { title: 'Trusted Platform Module (TPM) 2.0 — a brief introduction', source: 'Trusted Computing Group', url: 'https://trustedcomputinggroup.org/resource/trusted-platform-module-tpm-summary/' },
    { title: 'Hardware-Enabled Security (NIST IR 8320)', source: 'NIST', url: 'https://csrc.nist.gov/pubs/ir/8320/final' },
    { title: 'Confidential Computing', source: 'Confidential Computing Consortium', url: 'https://confidentialcomputing.io/' },
    { title: 'Post-Quantum Cryptography', source: 'NIST', url: 'https://csrc.nist.gov/projects/post-quantum-cryptography' },
  ],
};
