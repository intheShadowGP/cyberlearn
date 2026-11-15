import type { CourseBody } from '../../types';

export const body: CourseBody = {
  courseId: 'd-ad-authentification',
  lesson: {
    intro:
      "Dans la grande majorité des entreprises, Active Directory (AD) détient les clés de tout le système d'information : comptes, groupes, droits, stratégies de sécurité. Compromettre l'AD, c'est compromettre l'entreprise. Les rançongiciels modernes suivent presque toujours le même chemin : un poste, puis des identifiants, puis les privilèges de domaine, puis le déploiement massif. Comprendre l'authentification AD est donc indispensable, en attaque autorisée comme en défense.",
    sections: [
      {
        id: 'structure',
        title: 'Les briques d’Active Directory',
        blocks: [
          { t: 'def', term: 'Domaine', text: "Périmètre d'administration et d'authentification commun (par exemple `corp.exemple.fr`), qui regroupe utilisateurs, ordinateurs et groupes. Plusieurs domaines forment une **forêt**." },
          { t: 'def', term: 'Contrôleur de domaine (DC)', text: "Serveur qui héberge la base de l'annuaire (`NTDS.dit`), authentifie les utilisateurs (Kerberos, NTLM) et applique les stratégies. Il contient les empreintes de **tous** les mots de passe du domaine." },
          {
            t: 'table',
            head: ['Élément', 'Rôle', 'Point de vigilance'],
            rows: [
              ['LDAP (389, 636 en LDAPS)', 'Protocole d’interrogation de l’annuaire', 'Tout utilisateur authentifié peut lire une grande partie de l’annuaire'],
              ['Groupes privilégiés', 'Admins du domaine, Administrateurs de l’entreprise…', 'Membres à réduire au strict minimum'],
              ['GPO', 'Stratégies de groupe appliquées aux machines et utilisateurs', 'Une GPO modifiable par un attaquant = exécution de code sur toutes les machines ciblées'],
              ['Comptes de service', 'Exécutent des applications (SQL, sauvegarde)', 'Souvent sur-privilégiés, mots de passe anciens'],
            ],
          },
          { t: 'callout', kind: 'key', text: "Un compte membre de **Admins du domaine** qui se connecte sur un poste de travail y laisse des secrets réutilisables en mémoire. Si ce poste est compromis, le domaine l'est aussi. D'où le **modèle d'administration en tiers** : tier 0 (DC, AD), tier 1 (serveurs), tier 2 (postes), sans croisement." },
        ],
      },
      {
        id: 'kerberos',
        title: 'Kerberos pas à pas',
        blocks: [
          { t: 'p', text: "Kerberos est le protocole d'authentification par défaut d'AD. Il repose sur un tiers de confiance, le **KDC** (Key Distribution Center, hébergé sur chaque DC), et sur des **tickets** chiffrés à durée limitée." },
          { t: 'diagram', id: 'kerberos-flow', caption: 'Les trois échanges Kerberos', alt: 'Le client obtient un TGT auprès du KDC (AS), puis un ticket de service (TGS), qu’il présente au serveur (AP).' },
          {
            t: 'list',
            ordered: true,
            items: [
              "**AS-REQ / AS-REP** (événement **4768**) : l'utilisateur prouve son identité (pré-authentification avec un horodatage chiffré par sa clé) et reçoit un **TGT**, chiffré avec la clé du compte **krbtgt**.",
              "**TGS-REQ / TGS-REP** (événement **4769**) : avec son TGT, il demande un **ticket de service** pour un service identifié par son **SPN** (par exemple `MSSQLSvc/sql01.corp.exemple.fr`). Ce ticket est chiffré avec la clé du **compte de service**.",
              "**AP-REQ** : il présente le ticket au serveur, qui le déchiffre avec sa propre clé. Le DC n'intervient plus.",
            ],
          },
          { t: 'def', term: 'krbtgt', text: "Compte dont la clé chiffre tous les TGT du domaine. Qui possède son empreinte peut forger des TGT arbitraires : c'est le **golden ticket**." },
          { t: 'def', term: 'SPN', text: 'Service Principal Name : identifiant d’un service associé à un compte. Tout utilisateur du domaine peut demander un ticket pour n’importe quel SPN.' },
        ],
      },
      {
        id: 'ntlm',
        title: 'NTLM et ses faiblesses',
        blocks: [
          { t: 'p', text: "NTLM est un protocole défi-réponse plus ancien, toujours utilisé quand Kerberos n'est pas possible (accès par adresse IP, systèmes anciens). Le serveur envoie un défi, le client répond avec un calcul dérivé de l'**empreinte NT** de son mot de passe." },
          { t: 'callout', kind: 'warn', title: 'Conséquence majeure', text: "Avec NTLM, l'empreinte NT **équivaut au mot de passe** : un attaquant qui la récupère (en mémoire du processus LSASS par exemple) peut s'authentifier sans jamais connaître le mot de passe. C'est le **pass-the-hash**." },
          { t: 'list', items: ['**Relais NTLM** : l’attaquant relaie l’authentification d’une victime vers un autre serveur. Contre-mesures : signature SMB et LDAP, EPA, désactivation de NTLM là où c’est possible.', 'NTLMv1 est cassable : il doit être interdit par GPO.'] },
        ],
      },
      {
        id: 'attaques',
        title: 'Attaques courantes et leur signature',
        blocks: [
          {
            t: 'table',
            head: ['Attaque', 'Principe', 'Signature dans les journaux du DC'],
            rows: [
              ['**Pulvérisation de mots de passe**', 'Un mot de passe courant testé sur des centaines de comptes', 'Nombreux **4625** ou **4771** (code 0x18) sur des comptes différents depuis une même source'],
              ['**Force brute**', 'Nombreux mots de passe sur un même compte', 'Rafale de 4625 sur un compte, puis verrouillage **4740**'],
              ['**Kerberoasting**', 'Demander des tickets de service pour casser hors ligne le mot de passe du compte de service', 'Pics de **4769** depuis un même compte, chiffrement **RC4 (0x17)**'],
              ['**AS-REP roasting**', 'Comptes sans pré-authentification : le TGT est cassable hors ligne', '**4768** sans pré-authentification'],
              ['**Pass-the-hash**', 'Réutilisation de l’empreinte NT', '**4624** type 3 avec NTLM depuis des postes inhabituels'],
              ['**Golden ticket**', 'TGT forgé avec la clé krbtgt', 'Tickets à durée anormale, 4769 sans 4768 préalable'],
            ],
          },
          {
            t: 'example',
            title: 'Repérer une pulvérisation de mots de passe',
            blocks: [
              { t: 'code', lang: 'text', code: '08:01:02 4625 Échec  compte=a.bernard  source=10.0.8.44  état=0xC000006A\n08:01:02 4625 Échec  compte=c.durand   source=10.0.8.44  état=0xC000006A\n08:01:03 4625 Échec  compte=e.faure    source=10.0.8.44  état=0xC000006A\n… 240 comptes différents en 90 secondes …\n08:02:31 4624 Succès compte=m.petit    source=10.0.8.44  type=3' },
              { t: 'p', text: "Une même source, des centaines de comptes distincts, un échec chacun (état `0xC000006A` : mauvais mot de passe), puis **un succès** : le mot de passe testé était celui de `m.petit`. Ce compte est compromis." },
            ],
          },
          { t: 'callout', kind: 'legal', text: 'Ces techniques ne doivent être pratiquées que dans un laboratoire personnel ou dans le cadre d’un test d’intrusion contractualisé, avec des règles d’engagement écrites.' },
        ],
      },
      {
        id: 'defense',
        title: 'Durcir et surveiller',
        blocks: [
          { t: 'list', items: ['**Modèle en tiers** et postes d’administration dédiés : les comptes tier 0 ne se connectent que sur les DC et les postes d’administration tier 0.', '**Windows LAPS** : mot de passe d’administrateur local unique et renouvelé par poste, ce qui bloque la réutilisation latérale.', '**gMSA** (comptes de service gérés) : mots de passe longs et renouvelés automatiquement, inutilisables pour le Kerberoasting.', 'Groupe **Protected Users** pour les comptes privilégiés : pas de NTLM, pas de RC4, pas de délégation.', 'Désactiver RC4 et NTLMv1, activer la signature SMB/LDAP.', 'Renouveler deux fois le mot de passe de **krbtgt** après une compromission du domaine.', 'Centraliser et superviser les événements 4624, 4625, 4740, 4768, 4769, 4771, 4720, 4728/4732/4756 (ajouts aux groupes).'] },
          { t: 'callout', kind: 'tip', text: "L'outil gratuit de l'ANSSI **ORADAD** et le service d'audit **ADS** produisent un état de sécurité de l'AD. Côté communautaire, PingCastle offre une notation rapide." },
        ],
      },
    ],
    useCases: [
      "Analyste SOC : corréler une rafale de 4625 sur des comptes distincts suivie d'un 4624 pour détecter une pulvérisation réussie.",
      'Architecte : déployer le modèle en tiers et LAPS pour casser la chaîne poste → domaine.',
      'Pentesteur (mission autorisée) : vérifier l’exposition au Kerberoasting et la robustesse des mots de passe des comptes de service.',
      'Réponse à incident : après compromission du domaine, planifier le double renouvellement de krbtgt.',
    ],
    commonMistakes: [
      'Utiliser un compte Admin du domaine pour dépanner des postes de travail.',
      'Laisser des comptes de service avec SPN et des mots de passe courts qui n’expirent jamais.',
      'Utiliser le même mot de passe d’administrateur local sur tous les postes (image maîtresse).',
      'Ne journaliser que les échecs : c’est le succès qui suit une rafale d’échecs qui compte.',
      'Renouveler krbtgt une seule fois après une compromission (l’ancien mot de passe reste valide).',
    ],
    bestPractices: [
      'Modèle d’administration en tiers et postes d’administration dédiés.',
      'Windows LAPS sur tous les postes et serveurs membres.',
      'gMSA pour les comptes de service ; mots de passe de 25 caractères ou plus sinon.',
      'Protected Users pour les comptes privilégiés, désactivation de RC4 et NTLMv1.',
      'Audit régulier de l’AD (ORADAD, PingCastle) et supervision des événements clés.',
    ],
    keyPoints: [
      'Le DC détient toutes les empreintes : sa compromission = celle du domaine.',
      'Kerberos : TGT (chiffré par krbtgt) puis ticket de service (chiffré par le compte de service).',
      'Avec NTLM, l’empreinte vaut le mot de passe (pass-the-hash).',
      'Pulvérisation : beaucoup de comptes, peu d’essais chacun ; Kerberoasting : pics de 4769 en RC4.',
    ],
  },
  practice: [
    {
      id: 'kerberoast-detect',
      kind: 'analysis',
      title: 'Analyse : un pic d’événements 4769',
      context: [
        { t: 'p', text: 'Extrait des journaux du DC entre 14:00 et 14:01 :' },
        { t: 'code', lang: 'text', code: '4769 compte=j.leroy@CORP  service=MSSQLSvc/sql01   chiffrement=0x17\n4769 compte=j.leroy@CORP  service=HTTP/intranet     chiffrement=0x17\n4769 compte=j.leroy@CORP  service=svc_backup        chiffrement=0x17\n4769 compte=j.leroy@CORP  service=CIFS/fs02         chiffrement=0x12\n… 37 services distincts en 45 secondes …' },
      ],
      steps: ['Identifier l’attaque probable.', 'Expliquer pourquoi le type de chiffrement 0x17 est significatif.', 'Proposer des actions immédiates et des mesures de fond.'],
      labId: 'ad-events-lab',
    },
    {
      id: 'tiering',
      kind: 'case',
      title: 'Cas pratique : casser la chaîne poste → domaine',
      context: [{ t: 'p', text: 'Dans une entreprise de 300 postes, l’équipe support utilise le compte `adm-support`, membre des Admins du domaine, pour dépanner les postes. Tous les postes ont le même mot de passe d’administrateur local.' }],
      steps: ['Décrire le scénario d’attaque complet à partir d’un poste compromis.', 'Proposer une nouvelle organisation des comptes d’administration.', 'Lister les mesures techniques à déployer.'],
    },
  ],
  questions: [
    { id: 'ad-q1', type: 'single', difficulty: 1, skills: ['d-ad-struct'], prompt: 'Quel serveur héberge la base de l’annuaire Active Directory et authentifie les utilisateurs ?', options: [{ id: 'a', text: 'Le serveur de fichiers' }, { id: 'b', text: 'Le contrôleur de domaine' }, { id: 'c', text: 'Le serveur DHCP' }, { id: 'd', text: 'Le proxy web' }] },
    { id: 'ad-q2', type: 'truefalse', difficulty: 2, skills: ['d-ad-struct'], prompt: 'Une GPO modifiable par un attaquant peut lui permettre d’exécuter du code sur toutes les machines auxquelles elle s’applique.' },
    { id: 'ad-q3', type: 'short', difficulty: 2, skills: ['d-ad-struct'], prompt: 'Quel est le nom du fichier de base de données d’Active Directory sur un contrôleur de domaine ?', placeholder: 'nom de fichier' },
    { id: 'ad-q4', type: 'single', difficulty: 2, skills: ['d-kerberos'], prompt: 'Avec la clé de quel compte le TGT est-il chiffré ?', options: [{ id: 'a', text: 'Celle de l’utilisateur' }, { id: 'b', text: 'Celle du compte krbtgt' }, { id: 'c', text: 'Celle du compte Administrateur' }, { id: 'd', text: 'Celle du compte machine du client' }] },
    { id: 'ad-q5', type: 'single', difficulty: 2, skills: ['d-kerberos'], prompt: 'Avec la clé de quel compte un ticket de service (TGS) est-il chiffré ?', options: [{ id: 'a', text: 'Le compte krbtgt' }, { id: 'b', text: 'Le compte qui exécute le service visé (associé au SPN)' }, { id: 'c', text: 'Le compte de l’utilisateur demandeur' }, { id: 'd', text: 'Aucun : il est en clair' }] },
    { id: 'ad-q6', type: 'truefalse', difficulty: 2, skills: ['d-kerberos', 'd-ad-attacks'], prompt: 'Avec NTLM, un attaquant qui possède l’empreinte NT d’un utilisateur peut s’authentifier sans connaître son mot de passe.' },
    { id: 'ad-q7', type: 'short', difficulty: 2, skills: ['d-kerberos', 'd-ad-detect'], prompt: 'Quel identifiant d’événement Windows correspond à une demande de ticket de service Kerberos ? (nombre)' },
    { id: 'ad-q8', type: 'single', difficulty: 3, skills: ['d-ad-attacks', 'd-ad-detect'], prompt: 'Une même source génère 300 événements 4625 sur 300 comptes différents en deux minutes, puis un 4624. De quoi s’agit-il ?', options: [{ id: 'a', text: 'D’une force brute sur un seul compte' }, { id: 'b', text: 'D’une pulvérisation de mots de passe probablement réussie' }, { id: 'c', text: 'D’un Kerberoasting' }, { id: 'd', text: 'D’une réplication normale entre contrôleurs' }] },
    { id: 'ad-q9', type: 'multi', difficulty: 3, skills: ['d-ad-attacks'], prompt: 'Quelles conditions rendent le Kerberoasting efficace pour un attaquant ?', options: [{ id: 'a', text: 'Un compte de service avec SPN et un mot de passe faible' }, { id: 'b', text: 'Le chiffrement RC4 encore autorisé' }, { id: 'c', text: 'L’utilisation de gMSA pour les comptes de service' }, { id: 'd', text: 'Un mot de passe de compte de service qui n’est jamais changé' }] },
    { id: 'ad-q10', type: 'single', difficulty: 3, skills: ['d-ad-attacks'], prompt: 'Qu’est-ce qu’un « golden ticket » ?', options: [{ id: 'a', text: 'Un TGT forgé à l’aide de l’empreinte du compte krbtgt' }, { id: 'b', text: 'Un ticket de service obtenu par Kerberoasting' }, { id: 'c', text: 'Un jeton de session web volé' }, { id: 'd', text: 'Un certificat racine de la PKI' }] },
    { id: 'ad-q11', type: 'multi', difficulty: 2, skills: ['d-ad-detect'], prompt: 'Quelles mesures limitent le mouvement latéral entre postes de travail ?', options: [{ id: 'a', text: 'Windows LAPS (mot de passe administrateur local unique par poste)' }, { id: 'b', text: 'Interdire aux comptes tier 0 de se connecter sur les postes' }, { id: 'c', text: 'Utiliser la même image et le même mot de passe local partout' }, { id: 'd', text: 'Bloquer SMB entre postes de travail au pare-feu' }] },
    { id: 'ad-q12', type: 'truefalse', difficulty: 3, skills: ['d-ad-detect'], prompt: 'Après une compromission du domaine, renouveler une seule fois le mot de passe de krbtgt suffit à invalider tous les golden tickets.' },
    { id: 'ad-q13', type: 'short', difficulty: 2, skills: ['d-ad-detect', 'd-ad-attacks'], prompt: 'Quel identifiant d’événement indique le verrouillage d’un compte utilisateur ? (nombre)' },
    { id: 'ad-q14', type: 'open', difficulty: 3, skills: ['d-ad-attacks', 'd-ad-detect'], prompt: 'Décrivez le scénario par lequel la compromission d’un seul poste de travail peut mener à la compromission totale du domaine, et les trois mesures qui casseraient cette chaîne le plus efficacement.' },
    { id: 'ad-q15', type: 'open', difficulty: 3, skills: ['d-kerberos', 'd-ad-struct'], prompt: 'Expliquez à un collègue débutant la différence entre un TGT et un ticket de service, et pourquoi le DC n’intervient pas lors de la présentation du ticket au serveur.' },
    { id: 'ad-q16', type: 'single', difficulty: 2, skills: ['d-ad-struct', 'd-ad-detect'], prompt: 'Quel groupe de sécurité Windows empêche notamment l’usage de NTLM et de RC4 pour ses membres ?', options: [{ id: 'a', text: 'Utilisateurs du domaine' }, { id: 'b', text: 'Protected Users' }, { id: 'c', text: 'Opérateurs de sauvegarde' }, { id: 'd', text: 'Utilisateurs du Bureau à distance' }] },
  ],
  resources: [
    { title: 'Recommandations de sécurité relatives à Active Directory', source: 'ANSSI', url: 'https://cyber.gouv.fr/publications/recommandations-de-securite-relatives-active-directory' },
    { title: 'Points de contrôle Active Directory (ORADAD)', source: 'ANSSI / CERT-FR', url: 'https://www.cert.ssi.gouv.fr/uploads/guide-ad.html' },
    { title: 'MITRE ATT&CK T1558.003 — Kerberoasting', source: 'MITRE', url: 'https://attack.mitre.org/techniques/T1558/003/' },
    { title: 'Windows LAPS overview', source: 'Microsoft Learn', url: 'https://learn.microsoft.com/windows-server/identity/laps/laps-overview' },
  ],
};
