import type { CourseBody } from '../../types';

export const body: CourseBody = {
  courseId: 'i-threat-hunting',
  lesson: {
    intro:
      'Les règles de détection ne voient que ce qu’on leur a appris à reconnaître. Un attaquant patient, qui utilise des outils légitimes et change d’infrastructure, peut rester des mois sous le seuil des alertes. La chasse aux menaces (threat hunting) part de l’hypothèse inverse : « un attaquant est peut-être déjà là ; où laisserait-il des traces ? ». Elle s’appuie sur le renseignement, l’analyse réseau et la statistique, et se termine toujours par une amélioration de la détection.',
    sections: [
      {
        id: 'cti',
        title: 'Renseignement sur la menace (CTI)',
        blocks: [
          { t: 'p', text: 'Le renseignement sur la menace (Cyber Threat Intelligence) transforme des informations sur les attaquants en **décisions** : quoi surveiller, quoi corriger en priorité, quoi chasser.' },
          {
            t: 'table',
            head: ['Niveau', 'Public', 'Exemple', 'Durée de validité'],
            rows: [
              ['**Stratégique**', 'Direction, RSSI', 'Les rançongiciels ciblent le secteur de la santé de la région', 'Mois, années'],
              ['**Opérationnel**', 'SOC, réponse à incident', 'Le groupe X obtient l’accès initial par des VPN non corrigés, puis utilise des outils d’accès à distance légitimes', 'Semaines, mois'],
              ['**Tactique / technique**', 'Outils de détection', 'Adresses IP, domaines, empreintes de fichiers, règles YARA', 'Heures, jours'],
            ],
          },
          { t: 'def', term: 'TLP (Traffic Light Protocol)', text: 'Marquage de diffusion défini par le FIRST (version 2.0), en quatre niveaux dont AMBER possède une variante stricte : **TLP:RED** (destinataires nommés uniquement), **TLP:AMBER+STRICT** (organisation du destinataire seulement), **TLP:AMBER** (organisation et ses clients, selon le besoin d’en connaître), **TLP:GREEN** (communauté), **TLP:CLEAR** (diffusion libre).' },
          { t: 'def', term: 'STIX et TAXII', text: 'STIX est un format structuré pour décrire indicateurs, acteurs, campagnes et techniques ; TAXII est le protocole qui permet d’échanger ces objets entre plateformes (par exemple MISP, OpenCTI).' },
          { t: 'callout', kind: 'key', text: 'Un flux d’indicateurs importé sans tri génère surtout des faux positifs. Un renseignement utile est **pertinent** (il concerne votre secteur et vos technologies), **récent** et **exploitable** (il dit quoi faire).' },
        ],
      },
      {
        id: 'pyramide',
        title: 'Pyramide de la douleur et hypothèses de chasse',
        blocks: [
          { t: 'p', text: 'La **pyramide de la douleur** (David Bianco) classe les indicateurs selon le coût qu’ils imposent à l’attaquant quand le défenseur les détecte.' },
          { t: 'diagram', id: 'pyramid-of-pain', caption: 'Plus un indicateur est haut dans la pyramide, plus il coûte cher à l’attaquant d’en changer : détecter des TTP le gêne bien plus que bloquer une empreinte ou une adresse IP.', alt: 'Pyramide de la douleur, du bas vers le haut : empreintes de fichiers (trivial), adresses IP (facile), noms de domaine (simple), artefacts réseau et système (gênant), outils (difficile), TTP (très difficile).' },
          {
            t: 'table',
            head: ['Niveau (du bas vers le haut)', 'Pour l’attaquant, en changer est…'],
            rows: [['Empreintes de fichiers', 'Trivial (recompiler, modifier un octet)'], ['Adresses IP', 'Facile'], ['Noms de domaine', 'Simple'], ['Artefacts réseau et système', 'Gênant'], ['Outils', 'Difficile'], ['**TTP** (tactiques, techniques et procédures)', '**Très difficile** : il faut changer sa façon de travailler']],
          },
          { t: 'p', text: 'Une chasse efficace vise donc le haut de la pyramide : on ne cherche pas « l’adresse 203.0.113.7 », mais **un comportement**, comme « un processus Office qui lance un interpréteur de commandes ».' },
          {
            t: 'example',
            title: 'D’une technique ATT&CK à une hypothèse testable',
            blocks: [
              { t: 'list', ordered: true, items: ['**Déclencheur** : un rapport de renseignement indique qu’un groupe actif dans le secteur crée des tâches planifiées pour sa persistance (T1053.005).', '**Hypothèse** : « Si cet attaquant est présent, des tâches planifiées ont été créées sur des postes par des comptes non administrateurs, avec une action pointant vers `AppData` ou `ProgramData`. »', '**Données** : événements 4698 (création de tâche planifiée), Sysmon 1 (`schtasks.exe`), inventaire des tâches.', '**Analyse** : empiler les chemins d’action sur tout le parc, examiner les valeurs rares.', '**Résultat** : soit une compromission (incident), soit une absence documentée et une **nouvelle règle de détection**.'] },
            ],
          },
          { t: 'def', term: 'Chasse fondée sur des hypothèses', text: 'Démarche où chaque chasse part d’une affirmation vérifiable, précise les données nécessaires et produit un résultat documenté, qu’elle trouve quelque chose ou non.' },
        ],
      },
      {
        id: 'reseau',
        title: 'Analyse réseau : Zeek, Suricata, NDR',
        blocks: [
          { t: 'p', text: 'Le réseau voit ce que les postes ne racontent pas : un appareil sans agent, un poste dont l’EDR a été désactivé, un échange vers l’extérieur. Deux familles d’outils se complètent.' },
          {
            t: 'table',
            head: ['Outil', 'Rôle', 'Production'],
            rows: [
              ['**Suricata** (IDS/IPS)', 'Compare le trafic à des signatures ; en mode IPS, placé en coupure, il peut bloquer', 'Alertes'],
              ['**Zeek**', 'Décrit le trafic sans le juger', 'Journaux structurés : `conn.log`, `dns.log`, `http.log`, `ssl.log`, `files.log`…'],
              ['**NDR**', 'Plateformes commerciales qui combinent métadonnées, apprentissage du comportement normal et détection', 'Alertes comportementales'],
            ],
          },
          { t: 'code', lang: 'text', caption: 'Règle Suricata : requête HTTP vers un chemin d’administration exposé', code: 'alert http $EXTERNAL_NET any -> $HOME_NET any (msg:"Accès externe à /admin"; flow:established,to_server; http.uri; content:"/admin"; startswith; classtype:web-application-attack; sid:1000001; rev:1;)' },
          {
            t: 'table',
            caption: 'Signaux réseau classiques',
            head: ['Comportement', 'Signes dans les journaux'],
            rows: [
              ['**Balise** de commande et contrôle', 'Connexions vers la même destination à intervalle très régulier (par exemple toutes les 60 s ± 5 %), volumes faibles et constants, sur des heures ou des jours'],
              ['**Tunnel DNS**', 'Sous-domaines très longs et aléatoires (forte entropie), nombreuses requêtes vers un même domaine, enregistrements TXT inhabituels'],
              ['**Exfiltration**', 'Volume sortant inhabituel pour cet hôte, vers une destination nouvelle, souvent hors des heures de travail'],
            ],
          },
          { t: 'callout', kind: 'info', text: 'Avec TLS, le contenu est chiffré, mais les métadonnées restent visibles : destination, durée, volumes, nom de serveur annoncé (SNI), certificat, empreinte de la négociation TLS (JA3, JA4). Elles suffisent souvent à repérer une balise.' },
        ],
      },
      {
        id: 'anomalies',
        title: 'Analyse comportementale et empilement',
        blocks: [
          { t: 'p', text: 'Dans un parc homogène, la plupart des comportements légitimes se répètent sur des centaines de machines. L’attaquant, lui, est **rare**. L’empilement (stacking) consiste à compter les occurrences d’une valeur sur l’ensemble du parc et à examiner la queue de la distribution.' },
          { t: 'code', lang: 'text', caption: 'Empilement des processus parents de powershell.exe (sur 30 jours)', code: 'Processus parent        Nombre   Postes\nexplorer.exe            18 402    611\nsvchost.exe              7 210    640\nccmexec.exe              3 115    640   ← agent de déploiement\nWINWORD.EXE                  3      2   ← à examiner\nw3wp.exe                     1      1   ← serveur web IIS qui lance PowerShell : à examiner en priorité' },
          { t: 'def', term: 'Ligne de base', text: 'Description du comportement normal d’un hôte, d’un compte ou d’un service (heures de connexion, volumes, processus habituels). Une anomalie n’a de sens que par rapport à elle.' },
          { t: 'callout', kind: 'warn', text: 'Rare ne veut pas dire malveillant : un outil d’administration utilisé une fois par an ressort aussi. L’empilement désigne où regarder ; c’est l’investigation qui conclut.' },
          { t: 'p', text: 'Les **règles YARA** prolongent la chasse sur les fichiers : une règle construite à partir d’un échantillon trouvé (chaînes caractéristiques, structure) permet de rechercher les variantes sur les serveurs de fichiers et les postes, via l’EDR.' },
        ],
      },
      {
        id: 'industrialiser',
        title: 'De la chasse à la détection : XDR, SOAR, playbooks',
        blocks: [
          { t: 'p', text: 'Une chasse qui n’aboutit qu’à un rapport est à moitié utile. Son vrai produit est une **détection durable** et une réponse plus rapide la prochaine fois.' },
          { t: 'list', ordered: true, items: ['Écrire la logique de la chasse comme une règle (Sigma, requête du SIEM ou de l’XDR), avec ses exclusions documentées.', 'La tester sur l’historique : combien d’alertes par jour, combien de faux positifs ?', 'Définir la réponse : un **playbook** qui décrit les vérifications et les actions.', 'Automatiser dans le **SOAR** ce qui peut l’être sans risque : enrichissement (réputation, propriétaire du poste), création du ticket, isolement après validation humaine.', 'Revoir la règle régulièrement : une détection non maintenue se dégrade.'] },
          { t: 'def', term: 'XDR', text: 'Plateforme qui corrèle nativement les télémétries de plusieurs sources (postes, réseau, messagerie, identité, cloud) d’un même éditeur ou via des connecteurs, pour détecter et répondre depuis une console unique.' },
          { t: 'def', term: 'SOAR', text: 'Outil d’orchestration et d’automatisation de la réponse : il exécute des playbooks qui enchaînent des actions sur d’autres outils (SIEM, EDR, pare-feu, messagerie, gestion des tickets).' },
          { t: 'callout', kind: 'tip', text: 'Suivre la couverture ATT&CK de ses détections (par exemple avec ATT&CK Navigator) permet de choisir la prochaine chasse là où la détection est la plus faible.' },
        ],
      },
    ],
    useCases: [
      'Après la publication d’un rapport sur un groupe ciblant votre secteur : chasser ses techniques sur 90 jours d’historique.',
      'Revue hebdomadaire des balises potentielles dans les journaux Zeek du lien Internet.',
      'Programme de chasse trimestriel orienté par les lacunes de couverture ATT&CK, avec une nouvelle détection par chasse.',
    ],
    commonMistakes: [
      'Confondre chasse et recherche d’indicateurs : chercher une liste d’adresses IP n’est pas une chasse.',
      'Partir sans hypothèse ni données disponibles, puis conclure « rien trouvé » sans savoir ce qui a été vérifié.',
      'Importer des flux d’indicateurs non triés qui saturent le SOC de faux positifs.',
      'Considérer toute valeur rare comme malveillante.',
      'Ne pas transformer une chasse réussie en détection automatisée.',
      'Rediffuser une information TLP:AMBER+STRICT hors de son organisation.',
    ],
    bestPractices: [
      'Une hypothèse par chasse, rattachée à une technique ATT&CK et à un renseignement pertinent.',
      'Viser les comportements (haut de la pyramide) plutôt que les indicateurs éphémères.',
      'Conserver assez d’historique (journaux Zeek, EDR, SIEM) pour chasser dans le passé.',
      'Documenter chaque chasse : hypothèse, données, requêtes, résultat, détection créée.',
      'Respecter le marquage TLP et partager en retour avec sa communauté (ISAC, CERT).',
    ],
    keyPoints: [
      'CTI : stratégique, opérationnel, tactique ; TLP 2.0 encadre la diffusion.',
      'Pyramide de la douleur : les TTP coûtent le plus cher à l’attaquant.',
      'Une chasse part d’une hypothèse testable et produit une détection.',
      'Balise : régularité ; tunnel DNS : sous-domaines longs et aléatoires.',
      'Empilement : l’attaquant est rare ; la rareté guide l’investigation sans la remplacer.',
    ],
  },
  practice: [
    {
      id: 'balise-zeek',
      kind: 'analysis',
      title: 'Repérer une balise dans conn.log',
      context: [
        { t: 'p', text: 'Extrait agrégé des journaux Zeek du poste 10.1.4.27 sur une journée :' },
        { t: 'code', lang: 'text', code: 'Destination          Port  Connexions  Intervalle moyen  Écart type  Octets envoyés/conn.\n13.107.42.14         443        212        aléatoire          —          4 000 – 900 000\n198.51.100.23        443       1 438        60,1 s            1,9 s       ≈ 420\n10.1.0.10             53       3 905        aléatoire          —          ≈ 70\n203.0.113.80         443          3        aléatoire          —          ≈ 2 000' },
      ],
      steps: ['Identifier la destination la plus suspecte et justifier.', 'Lister les vérifications complémentaires (dns.log, ssl.log, EDR).', 'Rédiger la logique d’une détection durable.'],
    },
    {
      id: 'plan-chasse',
      kind: 'case',
      title: 'Cas pratique : préparer une chasse à partir d’un rapport',
      context: [{ t: 'p', text: 'Le CERT de votre secteur diffuse en TLP:AMBER un rapport : un groupe utilise des comptes VPN volés, puis un outil d’accès à distance légitime installé comme service, et exfiltre vers un stockage cloud grand public.' }],
      steps: ['Formuler deux hypothèses testables.', 'Pour chacune, indiquer les données nécessaires et la méthode d’analyse.', 'Préciser avec qui vous pouvez partager vos résultats compte tenu du marquage.'],
    },
  ],
  questions: [
    { id: 'hunt-q1', type: 'single', difficulty: 1, skills: ['i-hunt-cti'], prompt: 'Quel niveau de renseignement correspond à une liste d’adresses IP et d’empreintes de fichiers destinée aux outils de détection ?', options: [{ id: 'a', text: 'Tactique (technique)' }, { id: 'b', text: 'Stratégique' }, { id: 'c', text: 'Juridique' }, { id: 'd', text: 'Financier' }] },
    { id: 'hunt-q2', type: 'single', difficulty: 2, skills: ['i-hunt-cti'], prompt: 'Un rapport porte la mention TLP:AMBER+STRICT. Avec qui pouvez-vous le partager ?', options: [{ id: 'a', text: 'Uniquement au sein de votre propre organisation, selon le besoin d’en connaître' }, { id: 'b', text: 'Avec vos clients et partenaires' }, { id: 'c', text: 'Publiquement sur un blog' }, { id: 'd', text: 'Avec toute la communauté de votre secteur' }] },
    { id: 'hunt-q3', type: 'truefalse', difficulty: 2, skills: ['i-hunt-cti'], prompt: 'Importer tous les flux d’indicateurs gratuits disponibles améliore automatiquement la détection.' },
    { id: 'hunt-q4', type: 'short', difficulty: 2, skills: ['i-hunt-cti'], prompt: 'Quel format structuré, échangé via le protocole TAXII, sert à décrire indicateurs, acteurs et campagnes ?' },
    { id: 'hunt-q5', type: 'single', difficulty: 2, skills: ['i-hunt-method'], prompt: 'Selon la pyramide de la douleur, quel type d’indicateur est le plus coûteux à changer pour l’attaquant ?', options: [{ id: 'a', text: 'Les TTP (tactiques, techniques et procédures)' }, { id: 'b', text: 'Les empreintes de fichiers' }, { id: 'c', text: 'Les adresses IP' }, { id: 'd', text: 'Les noms de domaine' }] },
    { id: 'hunt-q6', type: 'multi', difficulty: 2, skills: ['i-hunt-method'], prompt: 'Quels éléments caractérisent une bonne hypothèse de chasse ?', options: [{ id: 'a', text: 'Elle est vérifiable avec des données disponibles' }, { id: 'b', text: 'Elle s’appuie sur une technique ou un renseignement précis' }, { id: 'c', text: 'Elle est formulée de façon assez vague pour couvrir toutes les attaques' }, { id: 'd', text: 'Elle produit un résultat documenté même si rien n’est trouvé' }] },
    { id: 'hunt-q7', type: 'truefalse', difficulty: 1, skills: ['i-hunt-method'], prompt: 'Une chasse qui ne trouve aucune compromission est inutile.' },
    { id: 'hunt-q8', type: 'open', difficulty: 3, skills: ['i-hunt-method', 'i-hunt-cti'], prompt: 'À partir de la technique « création d’un compte local pour la persistance » (T1136.001), formulez une hypothèse de chasse, les données nécessaires et la méthode d’analyse.' },
    { id: 'hunt-q9', type: 'single', difficulty: 2, skills: ['i-hunt-network'], prompt: 'Quelle différence entre Zeek et Suricata ?', options: [{ id: 'a', text: 'Zeek produit des journaux décrivant le trafic ; Suricata compare le trafic à des signatures et produit des alertes' }, { id: 'b', text: 'Zeek ne fonctionne qu’en IPv6' }, { id: 'c', text: 'Suricata ne lit que les journaux Windows' }, { id: 'd', text: 'Ce sont deux noms du même logiciel' }] },
    { id: 'hunt-q10', type: 'multi', difficulty: 2, skills: ['i-hunt-network'], prompt: 'Quels signes évoquent un tunnel DNS ?', options: [{ id: 'a', text: 'Des sous-domaines très longs et d’apparence aléatoire' }, { id: 'b', text: 'De nombreuses requêtes vers un même domaine peu connu' }, { id: 'c', text: 'Des enregistrements TXT inhabituels en grand nombre' }, { id: 'd', text: 'Une requête vers le résolveur interne au démarrage du poste' }] },
    { id: 'hunt-q11', type: 'truefalse', difficulty: 2, skills: ['i-hunt-network'], prompt: 'Le chiffrement TLS empêche toute détection d’une balise de commande et contrôle sur le réseau.' },
    { id: 'hunt-q12', type: 'short', difficulty: 2, skills: ['i-hunt-network'], prompt: 'Quel journal Zeek recense toutes les connexions (adresses, ports, durée, volumes) ?', placeholder: 'nom.log' },
    { id: 'hunt-q13', type: 'single', difficulty: 2, skills: ['i-hunt-anomalies'], prompt: 'Lors d’un empilement des processus parents de `powershell.exe`, quelle valeur examiner en priorité ?', options: [{ id: 'a', text: '`w3wp.exe` (serveur web IIS), une seule occurrence' }, { id: 'b', text: '`explorer.exe`, 18 000 occurrences sur 600 postes' }, { id: 'c', text: 'L’agent de déploiement présent sur tous les postes' }, { id: 'd', text: '`svchost.exe` sur tous les postes' }] },
    { id: 'hunt-q14', type: 'multi', difficulty: 3, skills: ['i-hunt-anomalies'], prompt: 'Une chasse a mis au jour une technique non détectée. Quelles étapes permettent de l’industrialiser ?', options: [{ id: 'a', text: 'Écrire une règle (Sigma ou requête du SIEM) avec ses exclusions documentées' }, { id: 'b', text: 'La tester sur l’historique pour mesurer les faux positifs' }, { id: 'c', text: 'Rédiger un playbook de réponse et automatiser l’enrichissement dans le SOAR' }, { id: 'd', text: 'Isoler automatiquement tout poste correspondant, sans validation ni test préalable' }] },
    { id: 'hunt-q15', type: 'open', difficulty: 3, skills: ['i-hunt-anomalies', 'i-hunt-network'], prompt: 'Un directeur vous demande pourquoi financer une activité de chasse alors que le SOC dispose déjà d’un SIEM et d’un EDR qui génèrent des alertes. Que répondez-vous ?' },
    { id: 'hunt-q16', type: 'single', difficulty: 2, skills: ['i-hunt-anomalies'], prompt: 'Quel outil exécute des playbooks qui enchaînent des actions sur le SIEM, l’EDR et la gestion des tickets ?', options: [{ id: 'a', text: 'Un SOAR' }, { id: 'b', text: 'Un IDS' }, { id: 'c', text: 'Un pare-feu applicatif' }, { id: 'd', text: 'Un proxy inverse' }] },
  ],
  resources: [
    { title: 'Traffic Light Protocol (TLP) 2.0', source: 'FIRST', url: 'https://www.first.org/tlp/' },
    { title: 'The Pyramid of Pain', source: 'David J. Bianco', url: 'https://detect-respond.blogspot.com/2013/03/the-pyramid-of-pain.html' },
    { title: 'MITRE ATT&CK', source: 'MITRE', url: 'https://attack.mitre.org/' },
    { title: 'Documentation Zeek', source: 'Projet Zeek', url: 'https://docs.zeek.org/' },
    { title: 'Documentation Suricata', source: 'OISF', url: 'https://docs.suricata.io/' },
  ],
};
