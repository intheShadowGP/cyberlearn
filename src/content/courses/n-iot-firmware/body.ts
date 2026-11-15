import type { CourseBody } from '../../types';

export const body: CourseBody = {
  courseId: 'n-iot-firmware',
  lesson: {
    intro:
      "Caméras, routeurs, capteurs industriels, thermostats : les objets connectés sont nombreux, rarement mis à jour et souvent exposés. Le botnet Mirai (2016) a montré qu'une simple liste d'identifiants par défaut suffisait à enrôler des centaines de milliers d'appareils dans des attaques massives. Sécuriser un objet commence à sa conception et se poursuit pendant toute sa durée de vie.",
    sections: [
      {
        id: 'vulns',
        title: 'Vulnérabilités récurrentes',
        blocks: [
          {
            t: 'table',
            head: ['Faiblesse', 'Exemple', 'Conséquence'],
            rows: [
              ['Identifiants par défaut ou universels', '`admin/admin` identique sur toute une gamme', 'Prise de contrôle à distance à grande échelle'],
              ['Services inutiles exposés', 'Telnet, interface web d’administration sur Internet', 'Surface d’attaque inutile'],
              ['Interfaces de débogage actives', 'UART ou JTAG accessibles sur la carte', 'Shell root, extraction du firmware'],
              ['Firmware non signé', 'Mise à jour acceptée sans vérification', 'Installation d’un firmware malveillant persistant'],
              ['Secrets dans le firmware', 'Clé privée ou mot de passe codé en dur, identique pour tous les appareils', 'Compromission de toute la flotte'],
              ['Composants obsolètes', 'Noyau Linux et bibliothèques de 2015', 'Vulnérabilités publiques exploitables'],
            ],
          },
          { t: 'def', term: 'Firmware', text: "Logiciel embarqué stocké en mémoire non volatile (flash) qui contrôle le matériel : chargeur d'amorçage, système (souvent Linux embarqué ou RTOS) et applications." },
          { t: 'callout', kind: 'info', text: "La norme européenne **ETSI EN 303 645** fixe des exigences de base pour les objets grand public : pas de mot de passe universel par défaut, politique de divulgation des vulnérabilités, mises à jour, stockage sûr des paramètres de sécurité." },
        ],
      },
      {
        id: 'analyse',
        title: 'Analyser un firmware (en environnement autorisé)',
        blocks: [
          { t: 'list', ordered: true, items: ['**Obtenir l’image** : site du fabricant, interception d’une mise à jour, ou lecture de la puce flash sur un appareil vous appartenant.', '**Identifier la structure** : `binwalk` repère les systèmes de fichiers et blocs compressés (SquashFS, kernel…), l’entropie révèle les zones chiffrées.', '**Extraire** le système de fichiers et l’explorer : `/etc/passwd`, `/etc/shadow`, scripts de démarrage, binaires des services, clés et certificats.', '**Rechercher les secrets** et les composants vulnérables (versions de BusyBox, OpenSSL, noyau).', '**Analyser les binaires** des services exposés (Ghidra) ou les émuler (QEMU) pour les tester sans risque.'] },
          {
            t: 'example',
            title: 'Trouvaille typique',
            blocks: [
              { t: 'code', lang: 'text', code: '$ binwalk -e camera_v2.4.bin\n0x0       uImage header, Linux kernel\n0x1A0000  Squashfs filesystem, little endian, version 4.0\n\n$ cat squashfs-root/etc/init.d/rcS\n…\ntelnetd -l /bin/sh &\n\n$ ls squashfs-root/etc/ssl/\nserver.key  server.crt' },
              { t: 'p', text: "Un démon Telnet sans authentification lancé au démarrage, et une clé privée TLS **identique sur tous les appareils** : quiconque extrait le firmware peut usurper n'importe quelle caméra de la gamme et intercepter ses communications." },
            ],
          },
          { t: 'callout', kind: 'legal', text: "Analyser le firmware d'un appareil que l'on possède est généralement licite, mais contourner une protection ou tester un service en ligne du fabricant peut ne pas l'être. Dans le doute, se limiter à son propre matériel et passer par la divulgation coordonnée." },
        ],
      },
      {
        id: 'conception',
        title: 'Concevoir un objet défendable',
        blocks: [
          { t: 'def', term: 'Démarrage sécurisé (secure boot)', text: "Chaîne de confiance qui part d'une **racine de confiance matérielle** (code en ROM, clé publique gravée) : chaque étape vérifie la signature de la suivante (chargeur, noyau, système) avant de l'exécuter. Un firmware modifié est refusé." },
          { t: 'list', items: ['**Racine de confiance matérielle** et clés de vérification non modifiables (fusibles OTP).', '**Secrets uniques par appareil**, générés ou injectés en production, stockés dans un élément sécurisé ou un TPM, jamais identiques sur toute la flotte.', '**Interfaces de débogage désactivées** ou verrouillées en production.', '**Mises à jour signées**, transportées sur un canal authentifié, avec **anti-retour** (refus d’une version plus ancienne vulnérable).', '**Partition A/B** : la mise à jour s’installe sur la partition inactive ; en cas d’échec au démarrage, retour automatique à la version précédente.', '**Moindre exposition** : services minimaux, pas d’administration exposée sur Internet, communications chiffrées et authentifiées.'] },
          {
            t: 'table',
            caption: 'Obligations réglementaires (UE)',
            head: ['Texte', 'Points clés pour le fabricant'],
            rows: [
              ['**Cyber Resilience Act** (règlement (UE) 2024/2847)', 'Sécurité dès la conception, absence de vulnérabilité exploitable connue à la mise sur le marché, mises à jour de sécurité pendant la période de support, signalement des vulnérabilités activement exploitées ; application progressive jusqu’en décembre 2027'],
              ['**ETSI EN 303 645**', 'Socle d’exigences pour les objets grand public, souvent utilisé comme référence de conformité'],
              ['**IEC 62443-4-2**', 'Exigences techniques pour les composants des systèmes industriels'],
            ],
          },
          { t: 'callout', kind: 'warn', title: 'Notion évolutive', text: "Les dates d'application et les normes harmonisées du Cyber Resilience Act sont en cours de déploiement : vérifier les textes et la Commission européenne avant toute décision de conformité." },
        ],
      },
    ],
    useCases: [
      'Évaluer la sécurité d’une gamme de caméras IP avant son achat pour un site sensible.',
      'Définir l’architecture de mise à jour sécurisée d’un nouveau capteur industriel.',
      'Préparer la conformité d’un produit au Cyber Resilience Act.',
    ],
    commonMistakes: [
      'Livrer tous les appareils avec le même mot de passe ou la même clé privée.',
      'Laisser l’UART ou le JTAG actifs en production.',
      'Accepter des mises à jour non signées ou permettre le retour à une version vulnérable.',
      'Considérer l’appareil comme « hors ligne » alors qu’il est joignable via le cloud du fabricant.',
      'Ne prévoir aucune durée de support ni politique de divulgation des vulnérabilités.',
    ],
    bestPractices: [
      'Secrets uniques par appareil dans un élément sécurisé.',
      'Démarrage sécurisé ancré dans le matériel.',
      'Mises à jour signées, anti-retour, partitions A/B.',
      'Interfaces de débogage verrouillées, services minimaux.',
      'SBOM, veille des composants et politique de divulgation publiée.',
    ],
    keyPoints: [
      'Identifiants universels, débogage actif, firmware non signé : les trois faiblesses majeures.',
      'Analyse de firmware : extraction (binwalk), exploration, recherche de secrets et de composants obsolètes.',
      'Secure boot : chaque étape vérifie la signature de la suivante depuis une racine matérielle.',
      'Le Cyber Resilience Act impose sécurité dès la conception et mises à jour pendant le support.',
    ],
  },
  practice: [
    {
      id: 'analyse-extraction',
      kind: 'analysis',
      title: 'Analyse : résultats d’extraction d’un firmware',
      context: [{ t: 'code', lang: 'text', code: 'squashfs-root/etc/shadow : root:$1$abc$X…:0:0:99999:7:::   (MD5-crypt)\nsquashfs-root/usr/sbin/httpd : BusyBox v1.19.4 (2012)\nsquashfs-root/etc/init.d/S50upgrade : wget http://maj.fabricant.example/fw.bin && flash fw.bin\nsquashfs-root/etc/ssl/private/device.key (identique sur 3 firmwares de versions différentes)' }],
      steps: ['Classer les constats par gravité.', 'Décrire l’attaque la plus grave.', 'Proposer les corrections pour la prochaine version.'],
    },
    {
      id: 'maj-conception',
      kind: 'case',
      title: 'Cas pratique : concevoir les mises à jour d’un capteur',
      context: [{ t: 'p', text: 'Un capteur de vibrations sans écran, sur réseau cellulaire, doit être maintenu 10 ans. Une mise à jour ratée ne doit jamais rendre l’appareil inutilisable.' }],
      steps: ['Décrire le format et la vérification d’une mise à jour.', 'Décrire le mécanisme de reprise en cas d’échec.', 'Décrire la gestion des clés de signature côté fabricant.'],
    },
  ],
  questions: [
    { id: 'iot-q1', type: 'single', difficulty: 1, skills: ['n-iot-vulns'], prompt: 'Quelle faiblesse le botnet Mirai exploitait-il principalement ?', options: [{ id: 'a', text: 'Des identifiants par défaut' }, { id: 'b', text: 'Une injection SQL' }, { id: 'c', text: 'Une faille du chiffrement AES' }, { id: 'd', text: 'Une attaque par canal auxiliaire' }] },
    { id: 'iot-q2', type: 'multi', difficulty: 2, skills: ['n-iot-vulns'], prompt: 'Lesquelles sont des faiblesses typiques des objets connectés ?', options: [{ id: 'a', text: 'Interface UART donnant un shell root' }, { id: 'b', text: 'Clé privée identique sur tous les appareils' }, { id: 'c', text: 'Mises à jour signées avec anti-retour' }, { id: 'd', text: 'Telnet activé au démarrage' }] },
    { id: 'iot-q3', type: 'truefalse', difficulty: 1, skills: ['n-iot-vulns'], prompt: 'La norme ETSI EN 303 645 interdit les mots de passe universels par défaut sur les objets grand public.' },
    { id: 'iot-q4', type: 'short', difficulty: 2, skills: ['n-iot-firmware'], prompt: 'Quel outil libre est couramment utilisé pour identifier et extraire les systèmes de fichiers d’une image de firmware ?' },
    { id: 'iot-q5', type: 'single', difficulty: 2, skills: ['n-iot-firmware'], prompt: 'binwalk ne reconnaît aucune signature dans une grande zone de l’image, dont l’entropie est proche du maximum. Quelle est la suite la plus pertinente ?', options: [{ id: 'a', text: 'Conclure que la zone est vide et l’ignorer' }, { id: 'b', text: 'Supposer un firmware chiffré et rechercher la clé ou la routine de déchiffrement (chargeur d’amorçage, mémoire de l’appareil)' }, { id: 'c', text: 'Ouvrir la zone dans un éditeur de texte pour lire la configuration' }, { id: 'd', text: 'Flasher l’image sur un autre appareil pour voir ce qui se passe' }] },
    { id: 'iot-q6', type: 'truefalse', difficulty: 2, skills: ['n-iot-firmware'], prompt: 'Une clé privée TLS identique dans le firmware de tous les appareils permet, une fois extraite, d’usurper n’importe quel appareil de la gamme.' },
    { id: 'iot-q7', type: 'multi', difficulty: 3, skills: ['n-iot-firmware'], prompt: 'Que rechercher en priorité dans un système de fichiers extrait ?', options: [{ id: 'a', text: 'Empreintes de mots de passe et comptes' }, { id: 'b', text: 'Scripts de démarrage et services lancés' }, { id: 'c', text: 'Clés privées et certificats' }, { id: 'd', text: 'La couleur de l’interface web' }] },
    { id: 'iot-q8', type: 'single', difficulty: 2, skills: ['n-iot-design'], prompt: 'Sur quoi repose la chaîne de confiance d’un démarrage sécurisé ?', options: [{ id: 'a', text: 'Sur un mot de passe saisi par l’utilisateur' }, { id: 'b', text: 'Sur une racine de confiance matérielle qui vérifie la signature de l’étape suivante' }, { id: 'c', text: 'Sur l’antivirus' }, { id: 'd', text: 'Sur le pare-feu' }] },
    { id: 'iot-q9', type: 'short', difficulty: 2, skills: ['n-iot-design'], prompt: 'Comment appelle-t-on la protection qui refuse l’installation d’une version de firmware plus ancienne que la version courante ? (mot composé, « anti-… »)' },
    { id: 'iot-q10', type: 'truefalse', difficulty: 2, skills: ['n-iot-design'], prompt: 'Avec des partitions A/B, une mise à jour qui échoue au démarrage peut être annulée automatiquement en revenant à la partition précédente.' },
    { id: 'iot-q11', type: 'multi', difficulty: 3, skills: ['n-iot-design'], prompt: 'Quelles mesures protègent les secrets d’un appareil ?', options: [{ id: 'a', text: 'Secrets uniques par appareil' }, { id: 'b', text: 'Stockage dans un élément sécurisé ou un TPM' }, { id: 'c', text: 'Secret codé en dur dans le code source' }, { id: 'd', text: 'Interfaces de débogage verrouillées en production' }] },
    { id: 'iot-q12', type: 'single', difficulty: 2, skills: ['n-iot-design', 'n-iot-vulns'], prompt: 'Quel règlement européen impose aux fabricants des mises à jour de sécurité pendant la période de support de leurs produits numériques ?', options: [{ id: 'a', text: 'Le Cyber Resilience Act' }, { id: 'b', text: 'Le RGPD' }, { id: 'c', text: 'DORA' }, { id: 'd', text: 'eIDAS' }] },
    { id: 'iot-q13', type: 'short', difficulty: 1, skills: ['n-iot-vulns', 'n-iot-firmware'], prompt: 'Quel port série de débogage, souvent présent sur les cartes électroniques, peut donner accès à une console ? (sigle)' },
    { id: 'iot-q14', type: 'open', difficulty: 3, skills: ['n-iot-firmware', 'n-iot-vulns'], prompt: 'Analysez les résultats d’extraction (shadow en MD5-crypt, BusyBox de 2012, mise à jour par wget en HTTP sans vérification, clé privée identique entre versions) : gravité, attaque la plus grave, corrections.' },
    { id: 'iot-q15', type: 'open', difficulty: 3, skills: ['n-iot-design'], prompt: 'Concevez le mécanisme de mise à jour d’un capteur cellulaire maintenu 10 ans, sans jamais le rendre inutilisable.' },
    { id: 'iot-q16', type: 'single', difficulty: 2, skills: ['n-iot-design', 'n-iot-firmware'], prompt: 'Pourquoi vérifier la signature d’une mise à jour même si elle est téléchargée en HTTPS ?', options: [{ id: 'a', text: 'Ce n’est pas utile' }, { id: 'b', text: 'HTTPS authentifie le serveur, pas l’intégrité de l’image chez l’éditeur ; la signature prouve que l’image vient du fabricant, même si le serveur de distribution est compromis' }, { id: 'c', text: 'Pour accélérer le téléchargement' }, { id: 'd', text: 'Pour compresser l’image' }] },
  ],
  resources: [
    { title: 'ETSI EN 303 645 — Cyber Security for Consumer IoT', source: 'ETSI', url: 'https://www.etsi.org/technologies/consumer-iot-security' },
    { title: 'Règlement (UE) 2024/2847 — Cyber Resilience Act', source: 'EUR-Lex', url: 'https://eur-lex.europa.eu/eli/reg/2024/2847/oj' },
    { title: 'OWASP Firmware Security Testing Methodology', source: 'OWASP', url: 'https://github.com/scriptingxss/owasp-fstm' },
    { title: 'NIST IR 8259 — Foundational Cybersecurity Activities for IoT Device Manufacturers', source: 'NIST', url: 'https://csrc.nist.gov/pubs/ir/8259/final' },
  ],
};
