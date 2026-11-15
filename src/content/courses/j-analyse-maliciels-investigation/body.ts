import type { CourseBody } from '../../types';

export const body: CourseBody = {
  courseId: 'j-analyse-maliciels-investigation',
  lesson: {
    intro:
      'Au cours d’une investigation, on finit souvent par trouver un fichier suspect : le binaire déposé par un attaquant, la pièce jointe à l’origine de l’incident. L’analyser répond à des questions défensives : qu’a-t-il fait ? comment le détecter ailleurs ? comment s’en protéger ? Ce cours décrit cette analyse dans un cadre strictement défensif et encadré — comprendre et détecter, jamais produire ou diffuser un logiciel malveillant — avec les précautions indispensables pour ne pas provoquer soi-même une contamination.',
    sections: [
      {
        id: 'role',
        title: 'Place de l’analyse dans l’investigation',
        blocks: [
          { t: 'p', text: 'L’analyse de maliciels, dans un contexte défensif, sert trois objectifs : **comprendre** ce qu’un échantillon fait (impact, objectif), **détecter** sa présence ailleurs dans le parc, et **contenir** l’incident (couper les communications, bloquer les indicateurs). Le but n’est jamais de reproduire ou de diffuser le code malveillant.' },
          {
            t: 'table',
            head: ['Question d’investigation', 'Ce que l’analyse apporte'],
            rows: [
              ['Que s’est-il passé sur cette machine ?', 'Comportement de l’échantillon : fichiers, persistance, communications'],
              ['D’autres machines sont-elles touchées ?', 'Indicateurs (empreintes, domaines, chemins) à rechercher dans le parc'],
              ['Comment arrêter la propagation ?', 'Éléments à bloquer (destinations réseau, exécutables) et à surveiller'],
              ['Comment éviter que cela se reproduise ?', 'Vecteur d’entrée et mesures de durcissement à renforcer'],
            ],
          },
          { t: 'def', term: 'Cadre défensif', text: 'L’analyse se fait sur un échantillon déjà présent dans un incident ou fourni par une source de confiance, dans le but de défendre un système d’information. Elle ne consiste pas à créer, armer ou diffuser un maliciel : ces actions sortent du cadre et sont illégales.' },
          { t: 'callout', kind: 'key', text: 'Comme toute preuve, l’échantillon doit être traité selon la chaîne de conservation : copie de travail, empreinte calculée, original préservé. On n’analyse jamais l’unique exemplaire d’une preuve.' },
        ],
      },
      {
        id: 'environnement',
        title: 'Un environnement d’analyse isolé',
        blocks: [
          { t: 'p', text: 'Analyser un fichier potentiellement malveillant sur un poste de travail ordinaire reviendrait à risquer de l’exécuter et de contaminer le réseau. On travaille dans un **environnement isolé et jetable**, conçu pour être détruit après usage.' },
          { t: 'list', items: ['**Machine virtuelle dédiée**, sans accès au réseau de l’entreprise (réseau isolé ou coupé), avec des **instantanés** (snapshots) pour revenir à un état propre après chaque test.', '**Pas de données ni d’identifiants réels** sur la machine d’analyse.', '**Manipulation sûre** de l’échantillon : conservé dans une archive **chiffrée et protégée par mot de passe** (par convention `infected`), transféré sans jamais être exécuté par accident, extension neutralisée.', '**Outils d’analyse** installés à l’avance, car la machine n’a pas d’accès Internet pendant l’analyse.'] },
          { t: 'def', term: 'Bac à sable (sandbox)', text: 'Environnement d’exécution isolé, souvent automatisé, qui lance un échantillon et observe son comportement (fichiers, registre, réseau) sans risque pour le système hôte. Les bacs à sable en ligne sont pratiques, mais y soumettre un fichier peut divulguer des données sensibles et alerter l’attaquant : à utiliser avec discernement.' },
          { t: 'callout', kind: 'warn', text: 'Certains maliciels détectent l’environnement d’analyse (machine virtuelle, bac à sable) et changent de comportement pour tromper l’analyste. L’absence de comportement malveillant observé ne prouve donc pas l’innocuité : on recoupe statique et dynamique.' },
        ],
      },
      {
        id: 'statique',
        title: 'Triage et analyse statique',
        blocks: [
          { t: 'p', text: 'L’analyse **statique** examine le fichier **sans l’exécuter**. C’est l’étape la plus sûre, et souvent suffisante pour le triage : décider si un fichier mérite une analyse approfondie.' },
          {
            t: 'table',
            head: ['Étape', 'Ce qu’on cherche'],
            rows: [
              ['Empreinte (hachage)', 'Identifier le fichier ; le comparer aux bases de réputation et aux indicateurs connus'],
              ['Type réel du fichier', 'Un exécutable déguisé en document (extension trompeuse) est un signal'],
              ['Chaînes de caractères', 'Domaines, adresses, chemins, messages : des pistes sur le comportement'],
              ['Métadonnées et imports', 'Les bibliothèques et fonctions appelées suggèrent les capacités (réseau, chiffrement, persistance)'],
              ['Signes d’obfuscation', 'Compression/chiffrement du contenu (empaquetage) qui cache le vrai code'],
            ],
          },
          { t: 'def', term: 'Réputation', text: 'Services (publics ou internes) qui indiquent si une empreinte, un domaine ou une adresse sont déjà connus comme malveillants. On interroge de préférence par l’empreinte plutôt qu’en téléversant le fichier, pour ne pas divulguer un contenu sensible.' },
          {
            t: 'example',
            title: 'Ce que révèle un triage statique',
            blocks: [
              { t: 'p', text: 'Un fichier nommé `facture.pdf.exe` : le type réel est un exécutable (double extension trompeuse). Son empreinte est déjà signalée comme malveillante par les services de réputation. Ses chaînes contiennent un domaine inconnu et un chemin `%APPDATA%\\svc.exe` ; ses imports incluent des fonctions réseau.' },
              { t: 'p', text: 'Sans l’avoir exécuté, on sait déjà qu’il faut le traiter comme malveillant, et on dispose de trois IOC (empreinte, domaine, chemin de dépôt) à transmettre immédiatement au SOC.' },
            ],
          },
          { t: 'callout', kind: 'tip', text: 'Le triage statique répond déjà à beaucoup de questions sans aucun risque. On ne passe à l’analyse dynamique que si c’est nécessaire et dans l’environnement isolé.' },
        ],
      },
      {
        id: 'dynamique',
        title: 'Analyse comportementale encadrée',
        blocks: [
          { t: 'p', text: 'L’analyse **dynamique** observe ce que fait l’échantillon lorsqu’il s’exécute, dans l’environnement isolé. On ne cherche pas à « utiliser » le maliciel, mais à **enregistrer son comportement** pour en tirer des indicateurs.' },
          {
            t: 'table',
            head: ['Observation', 'Indicateur produit'],
            rows: [
              ['Fichiers créés ou modifiés', 'Chemins et noms déposés, à rechercher sur les autres machines'],
              ['Persistance installée', 'Clés de registre, tâches planifiées, services (voir les cours forensiques)'],
              ['Communications réseau', 'Domaines et adresses contactés (serveur de commande), à bloquer et surveiller'],
              ['Processus et injections', 'Techniques utilisées, rattachables à MITRE ATT&CK'],
            ],
          },
          { t: 'def', term: 'Indicateur de compromission (IOC)', text: 'Élément observable permettant de repérer une compromission : empreinte de fichier, nom de fichier, clé de registre, domaine, adresse IP. Les IOC alimentent la recherche dans le parc et les règles de détection.' },
          { t: 'callout', kind: 'warn', text: 'L’analyse dynamique se fait réseau coupé ou simulé. Laisser l’échantillon contacter réellement son serveur de commande peut prévenir l’attaquant, voire déclencher une étape supplémentaire. On restaure l’instantané propre après chaque exécution.' },
        ],
      },
      {
        id: 'detection',
        title: 'Des constats à la détection',
        blocks: [
          { t: 'p', text: 'Le produit de l’analyse n’est pas « avoir compris le maliciel », mais une **capacité de détection et de réponse** réutilisable. On transforme les constats en éléments actionnables.' },
          { t: 'list', ordered: true, items: ['Rassembler les **IOC** (empreintes, domaines, chemins, clés) et les diffuser au SOC pour recherche et blocage.', 'Écrire une règle **YARA** à partir de chaînes ou de structures caractéristiques, pour retrouver les variantes sur les serveurs de fichiers et via l’EDR.', 'Rattacher les comportements aux techniques **MITRE ATT&CK** pour identifier les détections manquantes.', 'Documenter : échantillon (empreinte), comportement, IOC, techniques, recommandations de remédiation.', 'Vérifier l’efficacité des détections créées et la remédiation.'] },
          { t: 'def', term: 'Règle YARA', text: 'Motif décrivant des caractéristiques d’un fichier (chaînes, séquences d’octets, conditions) pour identifier une famille de maliciels. Construite à partir d’un échantillon analysé, elle permet de chercher les variantes à grande échelle.' },
          { t: 'callout', kind: 'key', text: 'Le partage d’IOC (avec le CERT, l’ISAC du secteur) selon le marquage TLP aide toute la communauté : la même analyse profite à d’autres défenseurs. On partage des indicateurs défensifs, jamais l’échantillon armé en clair.' },
        ],
      },
    ],
    useCases: [
      'Réponse à incident : analyser le binaire déposé par un attaquant pour produire des IOC et contenir la propagation.',
      'Qualification d’une pièce jointe suspecte signalée par un utilisateur, par triage statique d’abord.',
      'Enrichissement de la détection : règle YARA et IOC diffusés au SOC à partir d’un échantillon.',
    ],
    commonMistakes: [
      'Analyser un fichier suspect sur un poste de travail connecté au réseau de l’entreprise.',
      'Exécuter l’échantillon avant toute analyse statique, voire par accident (extension non neutralisée).',
      'Conclure à l’innocuité parce qu’aucun comportement n’a été observé (le maliciel peut détecter l’analyse).',
      'Laisser l’échantillon joindre réellement son serveur de commande pendant l’analyse.',
      'Téléverser un fichier sensible sur un service public d’analyse sans en mesurer la divulgation.',
    ],
    bestPractices: [
      'Traiter l’échantillon comme une preuve : copie de travail, empreinte, original préservé.',
      'Environnement isolé et jetable, sans données réelles, avec instantanés ; échantillon en archive chiffrée.',
      'Triage statique d’abord (empreinte, type, chaînes, imports) ; dynamique seulement si nécessaire, réseau coupé.',
      'Produire des IOC et des règles YARA, les rattacher à MITRE ATT&CK, documenter et vérifier.',
      'Partager des indicateurs défensifs selon le TLP ; ne jamais diffuser l’échantillon armé en clair.',
    ],
    keyPoints: [
      'But défensif : comprendre, détecter, contenir ; jamais créer ni diffuser un maliciel.',
      'Analyse en environnement isolé et jetable, échantillon manipulé sans exécution accidentelle.',
      'Statique d’abord (sans exécuter) : empreinte, type, chaînes, imports, obfuscation.',
      'Dynamique encadrée, réseau coupé, instantané restauré après chaque test ; elle produit des IOC.',
      'Le livrable est une détection réutilisable : IOC, règle YARA, rattachement ATT&CK, rapport.',
    ],
  },
  practice: [
    {
      id: 'triage-fichier',
      kind: 'analysis',
      title: 'Trier un fichier suspect',
      context: [
        { t: 'p', text: 'Un utilisateur signale une pièce jointe. Observations statiques (sans exécution) :' },
        { t: 'code', lang: 'text', code: 'Nom affiché   : facture.pdf.exe\nType réel     : exécutable Windows (PE)\nEmpreinte     : connue et signalée comme malveillante par plusieurs sources de réputation\nChaînes       : un domaine « maj-facturation.example », le chemin %APPDATA%\\svc.exe\nImports       : fonctions réseau et de création de processus\nParticularité : contenu largement empaqueté (compressé/chiffré)' },
      ],
      steps: ['Dire si ce fichier mérite une analyse approfondie et pourquoi, sans l’exécuter.', 'Lister les IOC déjà exploitables à ce stade.', 'Indiquer les précautions avant toute analyse dynamique.'],
    },
    {
      id: 'plan-analyse',
      kind: 'case',
      title: 'Cas pratique : organiser l’analyse d’un binaire d’incident',
      context: [{ t: 'p', text: 'Pendant une réponse à incident, vous récupérez un binaire déposé par l’attaquant sur un serveur. Vous devez l’analyser pour détecter sa présence ailleurs et contenir l’incident.' }],
      steps: ['Décrire la préparation de l’environnement et la manipulation de l’échantillon.', 'Décrire l’ordre des analyses (statique puis dynamique) et les précautions.', 'Indiquer les livrables défensifs attendus.'],
    },
  ],
  questions: [
    { id: 'ami-q1', type: 'single', difficulty: 1, skills: ['j-mw-role'], prompt: 'Dans un cadre défensif, quels sont les objectifs de l’analyse de maliciels ?', options: [{ id: 'a', text: 'Comprendre, détecter et contenir ; pas créer ni diffuser' }, { id: 'b', text: 'Reproduire le maliciel pour le réutiliser' }, { id: 'c', text: 'Le diffuser à d’autres machines pour tester' }, { id: 'd', text: 'Le vendre' }] },
    { id: 'ami-q2', type: 'truefalse', difficulty: 2, skills: ['j-mw-role'], prompt: 'Un échantillon de maliciel étant une preuve, on en fait une copie de travail et on préserve l’original, comme pour toute preuve.' },
    { id: 'ami-q3', type: 'multi', difficulty: 2, skills: ['j-mw-role'], prompt: 'À quelles questions d’investigation l’analyse d’un échantillon aide-t-elle à répondre ?', options: [{ id: 'a', text: 'Qu’a fait le maliciel sur la machine ?' }, { id: 'b', text: 'D’autres machines sont-elles touchées ?' }, { id: 'c', text: 'Comment contenir la propagation ?' }, { id: 'd', text: 'Quelle est la météo du jour ?' }] },
    { id: 'ami-q4', type: 'single', difficulty: 2, skills: ['j-mw-env'], prompt: 'Pourquoi analyser un maliciel dans une machine virtuelle isolée avec instantanés ?', options: [{ id: 'a', text: 'Pour éviter toute contamination du réseau et revenir à un état propre après chaque test' }, { id: 'b', text: 'Pour accélérer l’exécution du maliciel' }, { id: 'c', text: 'Parce que les maliciels ne fonctionnent qu’en machine virtuelle' }, { id: 'd', text: 'Pour partager la machine avec les utilisateurs' }] },
    { id: 'ami-q5', type: 'truefalse', difficulty: 2, skills: ['j-mw-env'], prompt: 'L’absence de comportement malveillant observé en bac à sable prouve toujours que le fichier est inoffensif.' },
    { id: 'ami-q6', type: 'multi', difficulty: 3, skills: ['j-mw-env'], prompt: 'Quelles précautions encadrent un environnement d’analyse de maliciels ?', options: [{ id: 'a', text: 'Réseau isolé ou coupé, sans accès à l’entreprise' }, { id: 'b', text: 'Aucune donnée ni identifiant réel sur la machine' }, { id: 'c', text: 'Échantillon conservé dans une archive chiffrée et non exécuté par accident' }, { id: 'd', text: 'Connecter la machine au réseau de production pour plus de réalisme' }] },
    { id: 'ami-q7', type: 'single', difficulty: 2, skills: ['j-mw-statique'], prompt: 'Qu’est-ce que l’analyse statique d’un fichier ?', options: [{ id: 'a', text: 'L’examiner sans l’exécuter (empreinte, type, chaînes, imports)' }, { id: 'b', text: 'L’exécuter et observer son comportement' }, { id: 'c', text: 'Le laisser contacter son serveur' }, { id: 'd', text: 'Le recompiler' }] },
    { id: 'ami-q8', type: 'single', difficulty: 2, skills: ['j-mw-statique'], prompt: 'Pourquoi interroger les services de réputation par l’empreinte plutôt qu’en téléversant le fichier ?', options: [{ id: 'a', text: 'Pour ne pas divulguer un contenu potentiellement sensible ni alerter l’attaquant' }, { id: 'b', text: 'Parce que le téléversement est payant' }, { id: 'c', text: 'Parce que l’empreinte est plus lente' }, { id: 'd', text: 'Il n’y a aucune différence' }] },
    { id: 'ami-q9', type: 'truefalse', difficulty: 2, skills: ['j-mw-statique'], prompt: 'Un fichier nommé « facture.pdf.exe » dont le type réel est un exécutable est un signal d’alerte lors du triage.' },
    { id: 'ami-q10', type: 'short', difficulty: 2, skills: ['j-mw-statique'], prompt: 'Comment appelle-t-on la compression ou le chiffrement du contenu d’un exécutable qui cache son vrai code ? (un mot)', placeholder: 'empa…' },
    { id: 'ami-q11', type: 'single', difficulty: 2, skills: ['j-mw-dynamique'], prompt: 'Que cherche-t-on à produire par l’analyse comportementale d’un échantillon ?', options: [{ id: 'a', text: 'Des indicateurs de compromission (fichiers, persistance, domaines contactés) réutilisables pour la détection' }, { id: 'b', text: 'Une copie fonctionnelle du maliciel' }, { id: 'c', text: 'Un accès au serveur de l’attaquant' }, { id: 'd', text: 'Rien d’exploitable' }] },
    { id: 'ami-q12', type: 'truefalse', difficulty: 2, skills: ['j-mw-dynamique'], prompt: 'Pendant l’analyse dynamique, on laisse l’échantillon joindre réellement son serveur de commande pour plus de réalisme.' },
    { id: 'ami-q13', type: 'short', difficulty: 2, skills: ['j-mw-dynamique'], prompt: 'Quel sigle désigne un élément observable (empreinte, domaine, clé) permettant de repérer une compromission ?', placeholder: 'sigle' },
    { id: 'ami-q14', type: 'single', difficulty: 2, skills: ['j-mw-dynamique'], prompt: 'À quel référentiel rattache-t-on les comportements observés pour repérer les détections manquantes ?', options: [{ id: 'a', text: 'MITRE ATT&CK' }, { id: 'b', text: 'Le RGPD' }, { id: 'c', text: 'La norme ISO 9001' }, { id: 'd', text: 'Le protocole DHCP' }] },
    { id: 'ami-q15', type: 'open', difficulty: 3, skills: ['j-mw-dynamique', 'j-mw-statique'], prompt: 'Décrivez comment transformer l’analyse d’un échantillon en capacité de détection réutilisable pour le SOC.' },
    { id: 'ami-q16', type: 'open', difficulty: 3, skills: ['j-mw-env', 'j-mw-role'], prompt: 'Un collègue veut analyser une pièce jointe suspecte directement sur son poste de travail « pour aller vite ». Expliquez les risques et la bonne démarche.' },
  ],
  resources: [
    { title: 'Guide to Malware Incident Prevention and Handling (SP 800-83)', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/83/r1/final' },
    { title: 'YARA documentation', source: 'VirusTotal / projet YARA', url: 'https://yara.readthedocs.io/' },
    { title: 'MITRE ATT&CK', source: 'MITRE', url: 'https://attack.mitre.org/' },
    { title: 'Traffic Light Protocol (TLP) 2.0', source: 'FIRST', url: 'https://www.first.org/tlp/' },
    { title: 'Malware Analysis (ressources défensives)', source: 'CISA', url: 'https://www.cisa.gov/topics/cyber-threats-and-advisories/malware-phishing-and-ransomware' },
  ],
};
