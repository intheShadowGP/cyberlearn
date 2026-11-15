import type { CourseBody } from '../../types';

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
  ],
  questions: [
    { id: 'mzt-q1', type: 'single', difficulty: 2, skills: ['p-zero-trust'], prompt: 'Quelle est l’idée centrale d’une architecture Zero Trust ?', options: [{ id: 'a', text: 'Ne faire confiance à aucun réseau ni machine par défaut, et vérifier chaque accès en continu' }, { id: 'b', text: 'Faire confiance à tout ce qui est à l’intérieur du réseau' }, { id: 'c', text: 'Supprimer toute authentification pour simplifier' }, { id: 'd', text: 'Chiffrer uniquement les données au repos' }] },
    { id: 'mzt-q2', type: 'multi', difficulty: 3, skills: ['p-zero-trust'], prompt: 'Quels principes relèvent de Zero Trust ?', options: [{ id: 'a', text: 'Vérifier explicitement l’utilisateur, l’appareil et son état' }, { id: 'b', text: 'Appliquer le moindre privilège et l’accès juste-à-temps' }, { id: 'c', text: 'Supposer la compromission et micro-segmenter' }, { id: 'd', text: 'Accorder des droits permanents larges pour éviter les frictions' }] },
    { id: 'mzt-q3', type: 'truefalse', difficulty: 2, skills: ['p-zero-trust'], prompt: 'Zero Trust est un produit unique que l’on installe, plutôt qu’une architecture à concevoir.' },
    { id: 'mzt-q4', type: 'short', difficulty: 2, skills: ['p-zero-trust'], prompt: 'Comment appelle-t-on le découpage fin des accès jusqu’à la charge de travail, qui limite les déplacements latéraux ? (un mot)', placeholder: 'micro-…' },
    { id: 'mzt-q5', type: 'single', difficulty: 3, skills: ['p-racine'], prompt: 'Quel composant mesure la chaîne de démarrage et ne libère un secret que si l’état mesuré est intègre ?', options: [{ id: 'a', text: 'Le TPM' }, { id: 'b', text: 'Le proxy' }, { id: 'c', text: 'Le pare-feu' }, { id: 'd', text: 'Le routeur' }] },
    { id: 'mzt-q6', type: 'single', difficulty: 3, skills: ['p-racine'], prompt: 'Que garantit Secure Boot ?', options: [{ id: 'a', text: 'Il vérifie la signature de chaque étape du démarrage pour empêcher l’exécution d’un code non approuvé' }, { id: 'b', text: 'Il chiffre le trafic réseau' }, { id: 'c', text: 'Il accélère le démarrage' }, { id: 'd', text: 'Il attribue les adresses IP' }] },
    { id: 'mzt-q7', type: 'single', difficulty: 3, skills: ['p-racine'], prompt: 'Qu’est-ce que l’informatique confidentielle vise à protéger ?', options: [{ id: 'a', text: 'Les données en cours de traitement (en mémoire), grâce à des enclaves' }, { id: 'b', text: 'Uniquement les données au repos' }, { id: 'c', text: 'Uniquement les données en transit' }, { id: 'd', text: 'Les câbles réseau' }] },
    { id: 'mzt-q8', type: 'multi', difficulty: 3, skills: ['p-racine'], prompt: 'Concernant les enclaves (TEE) et l’attestation, quelles affirmations sont exactes ?', options: [{ id: 'a', text: 'Le contenu d’une enclave est protégé même du système d’exploitation de la machine' }, { id: 'b', text: 'L’attestation permet de vérifier à distance quel code s’exécute dans l’enclave' }, { id: 'c', text: 'Les enclaves suppriment tout risque, y compris les canaux auxiliaires' }, { id: 'd', text: 'Une enclave réduit la surface de confiance sans l’annuler' }] },
    { id: 'mzt-q9', type: 'single', difficulty: 3, skills: ['p-menaces-hw'], prompt: 'Qu’est-ce qu’une attaque par canal auxiliaire ?', options: [{ id: 'a', text: 'Déduire un secret à partir d’une fuite physique indirecte (temps, consommation, émissions)' }, { id: 'b', text: 'Deviner un mot de passe par force brute' }, { id: 'c', text: 'Injecter du SQL' }, { id: 'd', text: 'Envoyer un courriel d’hameçonnage' }] },
    { id: 'mzt-q10', type: 'open', difficulty: 3, skills: ['p-menaces-hw'], prompt: 'Expliquez, à des fins défensives, le principe d’une fuite par canal auxiliaire temporel lors d’une comparaison de secret, et la contre-mesure.' },
    { id: 'mzt-q11', type: 'multi', difficulty: 3, skills: ['p-menaces-hw'], prompt: 'Quelles contre-mesures sont associées aux attaques matérielles ?', options: [{ id: 'a', text: 'Implémentations à temps constant et masquage contre les canaux auxiliaires' }, { id: 'b', text: 'Redondance et capteurs contre l’injection de fautes' }, { id: 'c', text: 'Mémoire à correction d’erreurs (ECC) contre Rowhammer' }, { id: 'd', text: 'Désactiver la journalisation' }] },
    { id: 'mzt-q12', type: 'truefalse', difficulty: 3, skills: ['p-menaces-hw'], prompt: 'Comprendre le principe d’une attaque matérielle pour s’en défendre revient au même que disposer d’un mode opératoire d’attaque prêt à l’emploi.' },
    { id: 'mzt-q13', type: 'single', difficulty: 3, skills: ['p-horizons'], prompt: 'Qu’est-ce que la tolérance aux fautes byzantines dans un système distribué ?', options: [{ id: 'a', text: 'Fonctionner correctement même si certains participants sont défaillants ou malveillants et envoient des informations contradictoires' }, { id: 'b', text: 'Résister aux coupures de courant uniquement' }, { id: 'c', text: 'Chiffrer les disques' }, { id: 'd', text: 'Accélérer le réseau' }] },
    { id: 'mzt-q14', type: 'single', difficulty: 3, skills: ['p-horizons'], prompt: 'Que permet le chiffrement homomorphe ?', options: [{ id: 'a', text: 'Effectuer des calculs sur des données chiffrées sans les déchiffrer' }, { id: 'b', text: 'Chiffrer plus vite' }, { id: 'c', text: 'Supprimer le besoin de clés' }, { id: 'd', text: 'Compresser les données' }] },
    { id: 'mzt-q15', type: 'short', difficulty: 3, skills: ['p-horizons'], prompt: 'Comment appelle-t-on un protocole qui prouve une affirmation sans révéler le secret sous-jacent ? (expression : preuve à …)', placeholder: 'preuve à …' },
    { id: 'mzt-q16', type: 'open', difficulty: 3, skills: ['p-horizons', 'p-racine'], prompt: 'Une organisation doit protéger des données qui resteront confidentielles 20 ans et seront traitées dans le cloud. Quelles pistes avancées combineriez-vous et pourquoi ?' },
  ],
  resources: [
    { title: 'Zero Trust Architecture (SP 800-207)', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/207/final' },
    { title: 'Trusted Platform Module (TPM) 2.0 — a brief introduction', source: 'Trusted Computing Group', url: 'https://trustedcomputinggroup.org/resource/trusted-platform-module-tpm-summary/' },
    { title: 'Hardware-Enabled Security (NIST IR 8320)', source: 'NIST', url: 'https://csrc.nist.gov/pubs/ir/8320/final' },
    { title: 'Confidential Computing', source: 'Confidential Computing Consortium', url: 'https://confidentialcomputing.io/' },
    { title: 'Post-Quantum Cryptography', source: 'NIST', url: 'https://csrc.nist.gov/projects/post-quantum-cryptography' },
  ],
};
