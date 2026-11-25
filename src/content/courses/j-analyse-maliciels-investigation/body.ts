import type { CourseBody } from '../../types';
import { questions } from './questions';

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
      {
        id: 'documents',
        title: 'Documents piégés et scripts : une analyse défensive',
        blocks: [
          { t: 'p', text: 'Une grande part des incidents commence par un **document** (bureautique, PDF) ou un **script** qui entraîne l’exécution de code. Leur analyse suit les mêmes règles que celle d’un exécutable : isolement, statique d’abord, indicateurs en sortie. Elle reste **défensive** : on lit ce que contient le document, on ne le rend pas plus dangereux.' },
          {
            t: 'table',
            head: ['Type', 'Mécanisme fréquent', 'Ce qu’on extrait (sans exécuter)'],
            rows: [
              ['**Document bureautique avec macros**', 'Macro exécutée si l’utilisateur l’active ; elle lance un interpréteur ou télécharge un fichier', 'Texte de la macro, URL, noms et chemins de fichiers, commandes appelées'],
              ['**PDF**', 'Liens, scripts intégrés, exploitation d’une vulnérabilité du lecteur', 'Liens, objets intégrés, structure inhabituelle'],
              ['**Script (PowerShell, JavaScript, shell)**', 'Code lisible mais souvent masqué (encodage, concaténation de chaînes)', 'Commande décodée, adresses, fichiers déposés'],
              ['**Archive ou raccourci**', 'Le fichier ouvert lance en réalité un programme', 'Cible réelle du raccourci, contenu de l’archive, noms trompeurs'],
            ],
          },
          { t: 'def', term: 'Encodage et obfuscation', text: 'Un script malveillant masque souvent sa commande par un encodage réversible (par exemple Base64, option `-enc` de PowerShell) ou par des découpages de chaînes. Ce n’est **pas du chiffrement** : le décoder, dans un environnement isolé et sans l’exécuter, révèle ce qu’il fait.' },
          { t: 'list', items: ['**Ne pas activer** les macros ni ouvrir le document sur un poste ordinaire.', '**Extraire** le contenu actif (macros, scripts, liens) avec des outils d’analyse statique, en environnement isolé.', '**Décoder** sans exécuter : lire la commande, repérer les adresses et les fichiers visés.', '**Rattacher** les comportements à ATT&CK (exécution par script, hameçonnage) et produire les indicateurs.'] },
          {
            t: 'example',
            title: 'Du document à l’indicateur',
            blocks: [
              { t: 'p', text: 'Un document `commande-mars.docm` contient une macro qui lance `powershell -enc …`. Décodée en environnement isolé, la commande télécharge un fichier depuis `maj-service.example` et l’écrit dans `%APPDATA%`. On en tire trois indicateurs : l’empreinte du document, le domaine et le chemin de dépôt.' },
              { t: 'p', text: 'Côté prévention : bloquer les macros des documents d’origine externe, rechercher le même document dans les courriels reçus, bloquer le domaine et surveiller le chemin sur le parc.' },
            ],
          },
          { t: 'callout', kind: 'warn', text: 'Ne collez jamais le contenu d’un échantillon ou d’un document sensible dans un service public sans avoir mesuré la divulgation : on interroge par l’empreinte.' },
        ],
      },
      {
        id: 'rapport',
        title: 'Rapport, partage et cadre légal',
        blocks: [
          { t: 'p', text: 'Une analyse ne sert que si ses résultats sont **documentés**, **partagés avec discernement** et obtenus dans le **respect du droit**.' },
          {
            t: 'table',
            head: ['Partie du rapport', 'Contenu'],
            rows: [
              ['**Échantillon**', 'Nom, taille, empreinte, origine, date de collecte, chaîne de conservation'],
              ['**Méthode**', 'Environnement, outils et versions, ordre des analyses (statique, dynamique)'],
              ['**Comportement**', 'Fichiers, persistance, communications, techniques ATT&CK'],
              ['**Indicateurs**', 'IOC datés et qualifiés ; règle YARA le cas échéant'],
              ['**Confiance et limites**', 'Ce qui est établi, ce qui reste hypothèse, ce qui n’a pas pu être observé'],
              ['**Recommandations**', 'Blocage, recherche dans le parc, correction du vecteur d’entrée'],
            ],
          },
          { t: 'list', items: ['**Qualité des IOC** : un indicateur est daté, contextualisé et accompagné d’un niveau de confiance ; une adresse partagée ou réattribuée ne se bloque pas à l’aveugle.', '**Partage** : selon le marquage TLP, avec le CERT ou l’ISAC ; on partage des indicateurs et des règles, pas l’échantillon armé en clair.', '**Confidentialité** : le rapport ne contient ni données personnelles de victimes ni secrets.'] },
          { t: 'callout', kind: 'legal', title: 'Cadre légal', text: 'Détenir, étudier et partager des programmes malveillants exige un motif légitime et défensif, une mission documentée, un stockage protégé et une traçabilité des accès. Créer ou diffuser un maliciel, ou accéder sans autorisation à l’infrastructure d’un attaquant, est illégal. En cas de doute, on consulte le service juridique avant d’agir.' },
          { t: 'callout', kind: 'tip', text: 'Un bon rapport permet à une autre équipe de refaire la détection sans avoir à analyser de nouveau l’échantillon.' },
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
    {
      id: 'document-piege',
      kind: 'analysis',
      title: 'Analyse : un document avec macro reçu par courriel',
      context: [
        { t: 'p', text: 'Un salarié signale un courriel « Bon de commande » avec une pièce jointe. Analyse statique, en environnement isolé, sans activer les macros :' },
        { t: 'code', lang: 'text', code: 'Nom          : bon-de-commande.docm\nEmpreinte    : inconnue des services de réputation\nMacros       : une macro AutoOpen\nContenu macro (extrait) : lance powershell.exe avec -w hidden -enc <chaîne Base64>\nChaîne décodée (lecture seule) : télécharge http://maj-service.example/a.bin vers %APPDATA%\\upd.exe puis le lance\nCourriel     : expéditeur externe, domaine enregistré il y a 3 jours' },
      ],
      steps: ['Dire si le document est malveillant et pourquoi, sans l’avoir exécuté.', 'Lister les indicateurs à transmettre au SOC et les techniques ATT&CK associées.', 'Proposer les mesures de recherche, de blocage et de prévention.'],
    },
  ],
  questions,
  resources: [
    { title: 'Guide to Malware Incident Prevention and Handling (SP 800-83)', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/83/r1/final' },
    { title: 'YARA documentation', source: 'VirusTotal / projet YARA', url: 'https://yara.readthedocs.io/' },
    { title: 'MITRE ATT&CK', source: 'MITRE', url: 'https://attack.mitre.org/' },
    { title: 'Traffic Light Protocol (TLP) 2.0', source: 'FIRST', url: 'https://www.first.org/tlp/' },
    { title: 'Malware Analysis (ressources défensives)', source: 'CISA', url: 'https://www.cisa.gov/topics/cyber-threats-and-advisories/malware-phishing-and-ransomware' },
  ],
};
