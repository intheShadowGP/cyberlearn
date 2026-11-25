import type { CourseBody } from '../../types';
import { questions } from './questions';

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
          { t: 'def', term: 'Forêt', text: 'Ensemble d’un ou plusieurs domaines qui partagent un **schéma** et des approbations. La vraie frontière de sécurité est la forêt, et non le domaine : un administrateur compromis dans un domaine peut, sous conditions, atteindre les autres.' },
          { t: 'def', term: 'Unité d’organisation (OU)', text: 'Conteneur dans lequel on range des comptes et des ordinateurs, auquel on lie des GPO et sur lequel on **délègue** l’administration à une équipe. Les droits mal délégués sur une OU sont un chemin d’attaque classique.' },
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
          { t: 'def', term: 'Pré-authentification', text: 'Le client prouve qu’il connaît sa clé en envoyant un **horodatage chiffré** avant de recevoir un TGT. Un compte qui en est dispensé (réglage dangereux) livre à tout demandeur une réponse chiffrée avec sa clé, cassable hors ligne : c’est l’AS-REP roasting.' },
          { t: 'callout', kind: 'info', text: 'Kerberos horodate ses échanges pour empêcher le rejeu : au-delà de **cinq minutes** d’écart d’horloge entre le client et le KDC, l’authentification échoue. La synchronisation de l’heure fait donc partie du bon fonctionnement du domaine.' },
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
          { t: 'def', term: 'Silver ticket', text: 'Ticket de service **forgé** avec la clé du compte d’un service (obtenue par exemple par Kerberoasting). Il n’est accepté que par ce service et ne passe jamais par le DC : très discret, d’où l’intérêt de mots de passe de service aléatoires (gMSA).' },
          { t: 'callout', kind: 'warn', title: 'Limites de la détection des tickets forgés', text: "Un golden ticket (ou silver ticket) est **forgé hors ligne** avec une clé volée : le DC l’accepte sans émettre de 4768, et un attaquant soigneux imite les durées de vie et les attributs par défaut. La détection repose sur des **heuristiques faillibles** (durées anormales, 4769 sans 4768 corrélé, tickets pour des comptes inexistants) qu’on peut contourner. La vraie parade est **préventive** : protéger la clé krbtgt, appliquer le modèle en tiers, et renouveler **deux fois** krbtgt après compromission." },
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
          { t: 'list', items: ['**Modèle en tiers** et postes d’administration dédiés : les comptes tier 0 ne se connectent que sur les DC et les postes d’administration tier 0.', '**Windows LAPS** : mot de passe d’administrateur local unique et renouvelé par poste, ce qui bloque la réutilisation latérale.', '**gMSA / dMSA** (comptes de service gérés) : le mot de passe est aléatoire (≈ 240 octets), renouvelé automatiquement par le domaine. Le Kerberoasting reste **possible** (le ticket de service est toujours demandable), mais le cassage hors ligne devient irréaliste : la protection vient de la robustesse et de la rotation du secret, pas d’une immunité à la technique.', 'Groupe **Protected Users** pour les comptes privilégiés : pas de NTLM, pas de RC4, pas de délégation.', 'Désactiver RC4 et NTLMv1, activer la signature SMB/LDAP.', 'Renouveler deux fois le mot de passe de **krbtgt** après une compromission du domaine.', 'Centraliser et superviser les événements 4624, 4625, 4740, 4768, 4769, 4771, 4720, 4728/4732/4756 (ajouts aux groupes).'] },
          {
            t: 'table',
            caption: 'Événements à superviser',
            head: ['ID', 'Signification', 'À surveiller'],
            rows: [
              ['4624 (type 3)', 'Ouverture de session réseau', 'NTLM depuis des postes inhabituels (pass-the-hash)'],
              ['4672', 'Privilèges spéciaux attribués à une session', 'Comptes privilégiés sur des machines inattendues'],
              ['4720', 'Création d’un compte', 'Comptes créés hors processus'],
              ['4728 / 4732 / 4756', 'Ajout à un groupe de sécurité', 'Groupes privilégiés'],
              ['4662', 'Opération sur un objet d’annuaire', 'Droits de réplication (DCSync)'],
              ['5136', 'Modification d’un objet d’annuaire', 'Changements de GPO, d’ACL, de délégation'],
            ],
          },
          { t: 'callout', kind: 'tip', text: "L'outil gratuit de l'ANSSI **ORADAD** et le service d'audit **ADS** produisent un état de sécurité de l'AD. Côté communautaire, PingCastle offre une notation rapide." },
        ],
      },
      {
        id: 'chemins',
        title: 'Droits, délégation et chemins d’attaque',
        blocks: [
          { t: 'p', text: 'Les attaques les plus efficaces contre un annuaire n’exploitent pas toujours un protocole : elles suivent des **droits** mal délégués. Un compte ordinaire peut s’ajouter à un groupe privilégié, modifier une GPO ou réinitialiser le mot de passe d’un administrateur sans appartenir lui-même à un groupe sensible. Ces chemins sont **indirects** et invisibles dans une simple liste de groupes.' },
          {
            t: 'table',
            head: ['Mécanisme', 'Abus', 'Défense'],
            rows: [
              ['**ACL** d’un objet (GenericAll, WriteDacl…)', 'Modifier un groupe, un compte ou une OU dont on ne devrait pas avoir le contrôle', 'Auditer les droits, retirer les délégations excessives'],
              ['**GPO** modifiable', 'Déployer une tâche ou un script exécuté en SYSTEM sur toutes les machines liées', 'Réserver l’écriture à un petit groupe, surveiller les changements (5136)'],
              ['**Délégation non contrainte**', 'Récupérer les TGT des utilisateurs qui se connectent à un serveur compromis', 'Délégation contrainte, comptes sensibles non délégables, Protected Users'],
              ['**Droits de réplication**', 'DCSync : extraire les empreintes de tous les comptes', 'Limiter ces droits aux contrôleurs, alerter sur 4662'],
            ],
          },
          { t: 'def', term: 'DCSync', text: 'Technique par laquelle un compte disposant des **droits de réplication** se fait passer pour un contrôleur et demande à un vrai contrôleur les secrets de n’importe quel compte, sans toucher au disque. Ces droits sont réservés aux contrôleurs ; tout autre bénéficiaire est une alerte.' },
          { t: 'def', term: 'Délégation Kerberos', text: 'Mécanisme par lequel un service agit **au nom d’un utilisateur** auprès d’autres services. La délégation **non contrainte** fait conserver au serveur le TGT de chaque utilisateur qui s’y connecte : s’il est compromis, ces TGT sont réutilisables. On lui préfère la délégation contrainte, fondée sur les ressources.' },
          { t: 'def', term: 'Graphe des chemins d’attaque', text: 'Représentation des appartenances, droits, sessions et délégations sous forme de graphe (par exemple avec BloodHound ou PingCastle). Elle montre qu’un utilisateur ordinaire atteint les Admins du domaine en quelques étapes ; les défenseurs **coupent ces chemins** avant qu’un attaquant ne les emprunte.' },
          {
            t: 'example',
            title: 'Un chemin en quatre étapes',
            blocks: [
              { t: 'code', lang: 'text', code: 'j.martin (utilisateur)  → membre de  HelpDesk\nHelpDesk                → GenericWrite sur le compte  svc_deploy\nsvc_deploy              → membre de  Admins serveurs de sauvegarde\nAdmins serveurs...      → session ouverte de  adm-domain sur SRV-BKP\nadm-domain              → membre de  Admins du domaine' },
              { t: 'p', text: 'Aucune de ces relations n’est une faille isolée. Ensemble, elles donnent à `j.martin` un chemin vers l’administration du domaine. Retirer le droit d’écriture de HelpDesk sur `svc_deploy`, ou interdire à `adm-domain` d’ouvrir une session sur SRV-BKP, coupe le chemin.' },
            ],
          },
          { t: 'callout', kind: 'tip', text: 'Auditer les **droits** autant que les appartenances aux groupes : ORADAD, PingCastle ou un graphe de relations révèlent ce qu’une revue des groupes ne montre pas.' },
        ],
      },
    ],
    useCases: [
      "Analyste SOC : corréler une rafale de 4625 sur des comptes distincts suivie d'un 4624 pour détecter une pulvérisation réussie.",
      'Architecte : déployer le modèle en tiers et LAPS pour casser la chaîne poste → domaine.',
      'Pentesteur (mission autorisée) : vérifier l’exposition au Kerberoasting et la robustesse des mots de passe des comptes de service.',
      'Réponse à incident : après compromission du domaine, planifier le double renouvellement de krbtgt.',
      'Audit des droits : repérer les chemins d’attaque indirects (ACL, GPO, délégations) avec un graphe de relations et les couper.',
    ],
    commonMistakes: [
      'Utiliser un compte Admin du domaine pour dépanner des postes de travail.',
      'Laisser des comptes de service avec SPN et des mots de passe courts qui n’expirent jamais.',
      'Utiliser le même mot de passe d’administrateur local sur tous les postes (image maîtresse).',
      'Ne journaliser que les échecs : c’est le succès qui suit une rafale d’échecs qui compte.',
      'Renouveler krbtgt une seule fois après une compromission (l’ancien mot de passe reste valide).',
      'Ne contrôler que les appartenances aux groupes et oublier les droits (ACL) délégués sur les objets.',
      'Laisser des comptes sans pré-authentification Kerberos ou des serveurs en délégation non contrainte.',
      'Accorder à un groupe de support l’écriture sur des GPO ou des OU de serveurs.',
    ],
    bestPractices: [
      'Modèle d’administration en tiers et postes d’administration dédiés.',
      'Windows LAPS sur tous les postes et serveurs membres.',
      'gMSA pour les comptes de service ; mots de passe de 25 caractères ou plus sinon.',
      'Protected Users pour les comptes privilégiés, désactivation de RC4 et NTLMv1.',
      'Audit régulier de l’AD (ORADAD, PingCastle) et supervision des événements clés.',
      'Audit des ACL et des délégations, graphe des chemins d’attaque revu régulièrement.',
      'Délégation contrainte plutôt que non contrainte, comptes sensibles non délégables, pré-authentification exigée.',
    ],
    keyPoints: [
      'Le DC détient toutes les empreintes : sa compromission = celle du domaine.',
      'Kerberos : TGT (chiffré par krbtgt) puis ticket de service (chiffré par le compte de service).',
      'Avec NTLM, l’empreinte vaut le mot de passe (pass-the-hash).',
      'Pulvérisation : beaucoup de comptes, peu d’essais chacun ; Kerberoasting : pics de 4769 en RC4.',
      'Les chemins d’attaque passent par des droits indirects (ACL, GPO, délégation, réplication) : on les audite et on les coupe.',
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
    {
      id: 'chemin-acl',
      kind: 'analysis',
      title: 'Analyse : un chemin d’attaque dans les droits de l’annuaire',
      context: [
        { t: 'p', text: 'Un outil de cartographie des droits de l’annuaire renvoie le chemin suivant, depuis un compte utilisateur ordinaire :' },
        { t: 'code', lang: 'text', code: 'm.durand (utilisateur)  → membre de  Support N1\nSupport N1              → peut réinitialiser le mot de passe de  svc_sauv\nsvc_sauv                → administrateur local de  SRV-FICHIERS\nSRV-FICHIERS            → session ouverte de  adm-ad  (Admins du domaine)' },
      ],
      steps: ['Décrire comment un attaquant qui contrôle m.durand atteint les Admins du domaine.', 'Proposer au moins deux façons de couper ce chemin.', 'Indiquer les événements à superviser pour détecter son usage.'],
    },
  ],
  questions,
  resources: [
    { title: 'Recommandations de sécurité relatives à Active Directory', source: 'ANSSI', url: 'https://cyber.gouv.fr/publications/recommandations-de-securite-relatives-active-directory' },
    { title: 'Points de contrôle Active Directory (ORADAD)', source: 'ANSSI / CERT-FR', url: 'https://www.cert.ssi.gouv.fr/uploads/guide-ad.html' },
    { title: 'MITRE ATT&CK T1558.003 — Kerberoasting', source: 'MITRE', url: 'https://attack.mitre.org/techniques/T1558/003/' },
    { title: 'Best practices for securing Active Directory', source: 'Microsoft Learn', url: 'https://learn.microsoft.com/windows-server/identity/ad-ds/plan/security-best-practices/best-practices-for-securing-active-directory' },
    { title: 'Windows LAPS overview', source: 'Microsoft Learn', url: 'https://learn.microsoft.com/windows-server/identity/laps/laps-overview' },
  ],
};
