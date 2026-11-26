import type { CourseBody } from '../../types';
import { questions } from './questions';

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
          { t: 'diagram', id: 'secure-boot', caption: 'Chaîne de confiance du démarrage sécurisé : chaque maillon vérifie la signature du suivant avant de l’exécuter.', alt: 'Chaîne verticale — racine de confiance (ROM / clé gravée), chargeur, noyau, système — où chaque étape vérifie la signature de la suivante ; une signature invalide arrête la chaîne et un firmware modifié est refusé.' },
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
      {
        id: 'reseau',
        title: 'Communications et réseau des objets connectés',
        blocks: [
          { t: 'p', text: 'Un objet est rarement isolé : il parle à un serveur, à une application mobile, à d’autres objets. Chaque lien est une surface d’attaque. Les protocoles de messagerie légers (MQTT, CoAP) ne protègent rien par eux-mêmes : la sécurité vient de **TLS**, de l’**authentification** et du **cloisonnement**.' },
          {
            t: 'table',
            head: ['Lien', 'Risque', 'Mesure'],
            rows: [
              ['**Objet vers serveur** (MQTT, HTTPS)', 'Écoute, usurpation du serveur ou de l’objet', 'TLS avec authentification mutuelle, certificat unique par appareil'],
              ['**Objet vers application mobile** (Bluetooth Low Energy)', 'Écoute, appairage non sécurisé, relais', 'Appairage sécurisé, chiffrement applicatif, limitation de la portée utile'],
              ['**Réseaux à longue portée** (LoRaWAN, cellulaire)', 'Rejeu, clés partagées', 'Clés par appareil, compteurs anti-rejeu'],
              ['**Réseau local** (Wi-Fi, Zigbee)', 'Un objet compromis atteint les postes voisins', 'Réseau dédié et filtré, aucun accès entrant depuis Internet'],
            ],
          },
          { t: 'def', term: 'Authentification mutuelle', text: 'Le serveur prouve son identité à l’objet, et l’objet prouve la sienne au serveur, par certificats. Elle évite qu’un faux serveur reçoive des données ou qu’un faux objet envoie des commandes.' },
          { t: 'list', items: ['**Connexions sortantes** : l’objet initie la connexion vers un service qui l’authentifie, plutôt que d’accepter des connexions entrantes.', '**Segmentation** : réseau des objets séparé des postes, avec des règles de flux précises.', '**Révocation** : pouvoir retirer la confiance d’un appareil compromis sans toucher les autres.'] },
          { t: 'callout', kind: 'warn', text: 'Un service joignable depuis Internet est balayé en continu par des robots. Exposer l’administration d’un objet est presque toujours évitable.' },
        ],
      },
      {
        id: 'flotte',
        title: 'Cycle de vie et exploitation d’une flotte d’objets',
        blocks: [
          { t: 'p', text: 'Un objet reste en service pendant des années. La sécurité se joue donc aussi **après la vente** : suivre les composants, publier les correctifs, traiter les signalements de vulnérabilités et informer de la fin de support.' },
          {
            t: 'table',
            head: ['Étape', 'Contenu', 'Preuve'],
            rows: [
              ['**Fabrication**', 'Injection de secrets uniques, verrouillage du débogage', 'Procédure et journal de production'],
              ['**Mise en service**', 'Identifiant unique ou changement imposé, enrôlement', 'Politique des mots de passe par défaut'],
              ['**Exploitation**', 'Mises à jour signées, supervision, SBOM à jour', 'Journal des versions, tableau de suivi'],
              ['**Signalements**', 'Canal de divulgation, traitement coordonné', 'Politique publique et délais'],
              ['**Fin de support**', 'Annonce, options de remplacement', 'Date de fin de support communiquée'],
            ],
          },
          { t: 'def', term: 'Divulgation coordonnée', text: 'Procédé par lequel un chercheur informe le fabricant d’une vulnérabilité, convient d’un délai de correction puis publie les détails. Un canal de signalement public (adresse dédiée, fichier security.txt) la facilite.' },
          { t: 'def', term: 'SBOM', text: 'Inventaire des composants logiciels de chaque version du firmware. Il permet au fabricant, lorsqu’une vulnérabilité est publiée, d’identifier immédiatement les produits concernés.' },
          { t: 'list', items: ['**Support annoncé** : durée pendant laquelle des correctifs de sécurité sont fournis.', '**Correctifs** : signés, déployés progressivement, avec retour possible.', '**Information** : clients prévenus des vulnérabilités importantes et de la fin de support.'] },
          { t: 'callout', kind: 'legal', text: 'Le Cyber Resilience Act exige des fabricants une gestion des vulnérabilités pendant la période de support, avec signalement des vulnérabilités activement exploitées. Vérifier les calendriers d’application.' },
        ],
      },
      {
        id: 'triage-firmware',
        title: "Triage d’un firmware : de l’image brute aux constats",
        blocks: [
          { t: 'p', text: "L’analyse de firmware se pratique **uniquement sur des appareils que l’on possède ou sur lesquels on a une autorisation écrite**, dans un environnement isolé. Elle suit un enchaînement simple : identifier, extraire, chercher les défauts courants." },
          { t: 'code', lang: "bash", caption: "Triage d’une image de firmware (poste d’analyse isolé)", code: "sha256sum firmware.bin         # 1. empreinte : tracer la version analysée\nfile firmware.bin              # 2. type de contenu\nbinwalk firmware.bin           # 3. repérer les systèmes de fichiers et blocs compressés intégrés\nbinwalk -e firmware.bin        # 4. extraire dans un dossier _firmware.bin.extracted/\n\n# 5. chercher les défauts courants dans le système de fichiers extrait\ngrep -rIl \"password\" _firmware.bin.extracted/ | head\nfind _firmware.bin.extracted/ -name \"*.pem\" -o -name \"*.key\" -o -name \"shadow\"" },
          {
            t: 'table',
            head: ["Constat possible", "Risque", "Remédiation côté fabricant"],
            rows: [
              ["Identifiant ou mot de passe écrit dans le code ou un fichier de configuration", "Accès à tous les exemplaires de l’appareil", "Mot de passe unique par appareil, ou changement obligatoire à la première utilisation"],
              ["Clé privée ou certificat embarqué dans l’image", "Usurpation, déchiffrement des communications", "Clés générées à la fabrication, jamais communes à la série"],
              ["Service de débogage (Telnet, port série ouvert) laissé actif", "Accès administrateur direct", "Désactiver en production ou protéger par authentification"],
              ["Composants open source anciens", "Vulnérabilités connues", "Inventaire des composants (SBOM) et mises à jour suivies"],
              ["Mise à jour non signée", "Installation d’un firmware malveillant", "Signature vérifiée par l’appareil avant installation"],
            ],
          },
          { t: 'callout', kind: 'warn', text: "Si vous trouvez une vulnérabilité dans un produit commercial, suivez une **divulgation coordonnée** : prévenez le fabricant, laissez-lui un délai raisonnable pour corriger, et ne publiez pas de procédure d’exploitation avant." },
        ],
      },
      {
        id: 'flotte-inventaire',
        title: "Gérer une flotte d’objets : l’inventaire minimal",
        blocks: [
          { t: 'p', text: "On ne protège pas ce qu’on ne connaît pas. Pour une flotte d’objets, un inventaire minimal répond à six questions, pour chaque appareil." },
          {
            t: 'table',
            head: ["Information", "Question à laquelle elle répond"],
            rows: [
              ["Modèle, numéro de série, localisation", "De quel appareil parle-t-on, et où est-il ?"],
              ["Version du firmware et date de dernière mise à jour", "Est-il concerné par une vulnérabilité annoncée ?"],
              ["Responsable (équipe ou personne)", "Qui décide d’une mise à jour ou d’un arrêt ?"],
              ["Réseau et flux autorisés", "Avec qui doit-il communiquer, et rien d’autre ?"],
              ["Mode de gestion des identifiants", "Comment sont gérés ses mots de passe ou certificats ?"],
              ["Date de fin de support du fabricant", "Faut-il prévoir son remplacement ?"],
            ],
          },
          { t: 'callout', kind: 'key', text: "Un objet dont le fabricant ne publie plus de correctifs doit être **isolé** (réseau séparé, flux strictement limités) en attendant son remplacement, car sa dette de sécurité ne fera que croître." },
        ],
      },
    ],
    useCases: [
      'Évaluer la sécurité d’une gamme de caméras IP avant son achat pour un site sensible.',
      'Définir l’architecture de mise à jour sécurisée d’un nouveau capteur industriel.',
      'Préparer la conformité d’un produit au Cyber Resilience Act.',
    ],
    commonMistakes: [
      "Analyser le firmware d’un appareil dont on n’est ni propriétaire ni autorisé à le tester.",
      "Garder en service un objet sans support, sans isolation ni plan de remplacement.",
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
      "Firmware : identifier, extraire, chercher secrets et services de débogage ; divulgation coordonnée ; inventaire de la flotte.",
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
    {
      id: 'incident-flotte',
      kind: 'case',
      title: 'Cas pratique : une vulnérabilité signalée sur une flotte de caméras',
      context: [{ t: 'p', text: 'Un chercheur signale par courriel qu’une gamme de 40 000 caméras vendues depuis trois ans accepte une commande non authentifiée sur un service d’administration exposé, et que le firmware contient une clé de signature de mise à jour identique pour toute la gamme. Le fabricant n’a ni politique de divulgation ni SBOM, et le support de la première génération a pris fin il y a un an.' }],
      steps: ['Décrire la réponse du fabricant dans les 72 premières heures.', 'Proposer le correctif, son déploiement et la gestion des anciennes générations.', 'Définir les mesures structurelles à mettre en place pour la suite.'],
    },
  ],
  questions,
  resources: [
    { title: 'ETSI EN 303 645 — Cyber Security for Consumer IoT', source: 'ETSI', url: 'https://www.etsi.org/technologies/consumer-iot-security' },
    { title: 'Règlement (UE) 2024/2847 — Cyber Resilience Act', source: 'EUR-Lex', url: 'https://eur-lex.europa.eu/eli/reg/2024/2847/oj' },
    { title: 'OWASP Firmware Security Testing Methodology', source: 'OWASP', url: 'https://github.com/scriptingxss/owasp-fstm' },
    { title: 'NIST IR 8259 — Foundational Cybersecurity Activities for IoT Device Manufacturers', source: 'NIST', url: 'https://csrc.nist.gov/pubs/ir/8259/final' },
  ],
};
