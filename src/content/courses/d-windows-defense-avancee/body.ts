import type { CourseBody } from '../../types';
import { questions } from './questions';

export const body: CourseBody = {
  courseId: 'd-windows-defense-avancee',
  lesson: {
    intro:
      'Les cours précédents du module ont décrit les protections d’un poste, d’un serveur et de l’annuaire. Ce cours se place du côté d’un défenseur qui affronte un adversaire patient, déjà passé par les protections de base : il part de l’hypothèse que l’attaquant est ou sera dans le réseau, et cherche à rendre chacun de ses pas coûteux, visible et réversible. Il s’agit de raisonner en systèmes de contrôle : modèle de menace, durcissement de l’identité, détection, attaques avancées, identité hybride et réponse.',
    sections: [
      {
        id: 'menace',
        title: 'Modéliser la menace sur Windows et Active Directory',
        blocks: [
          { t: 'p', text: 'Un modèle de menace décrit **qui** attaque, **par où**, **pour obtenir quoi**, et ce qui l’arrête. Sur un domaine, la cible finale est presque toujours l’identité : les comptes privilégiés et les secrets qui les protègent. On part de l’**hypothèse de compromission** : un poste, un compte ou un prestataire sera compromis un jour ; la question est ce qu’il pourra faire ensuite.' },
          {
            t: 'table',
            head: ['Étape de l’attaque', 'Technique typique (ATT&CK)', 'Détection', 'Prévention'],
            rows: [
              ['Accès initial', 'Hameçonnage, compte valide (T1566, T1078)', 'Messagerie, connexions inhabituelles', 'Multifacteur, filtrage'],
              ['Vol d’identifiants', 'Vidage de la mémoire de LSASS (T1003)', 'Sysmon 10, EDR', 'Protection LSA, Credential Guard'],
              ['Mouvement latéral', 'Services distants, partages (T1021)', 'Flux est-ouest, 4624 type 3', 'Segmentation, LAPS, niveaux'],
              ['Élévation de privilèges', 'Abus de droits et de certificats (T1484, T1649)', '5136, 4887', 'Audit des ACL, modèles de certificats'],
              ['Domaine', 'Extraction des secrets de l’annuaire (T1003.006)', '4662, réplication anormale', 'Droits de réplication restreints'],
            ],
          },
          { t: 'def', term: 'Hypothèse de compromission', text: 'Principe de conception : on suppose qu’un attaquant est déjà dans le réseau (ou le sera), et l’on bâtit défenses, détections et plans de reprise en conséquence, au lieu de miser uniquement sur la prévention à la frontière.' },
          { t: 'def', term: 'ATT&CK', text: 'Référentiel public de **tactiques et techniques** adverses observées. Il sert de langage commun pour décrire une attaque, cartographier ses détections, repérer les techniques **non couvertes** et planifier des exercices ; il ne dit pas quelles techniques sont les plus probables chez soi.' },
          { t: 'callout', kind: 'key', text: 'Un modèle de menace n’est pas un document figé : il se met à jour avec le domaine, les prestataires, les incidents vécus et les nouvelles techniques. Les comptes privilégiés, les comptes de service et leurs sessions en sont les entrées prioritaires.' },
        ],
      },
      {
        id: 'durcissement',
        title: 'Durcir l’identité : au-delà des bases',
        blocks: [
          { t: 'p', text: 'Le durcissement avancé ne consiste pas à multiplier les réglages : il réduit **où** un compte puissant peut s’authentifier, **combien de temps** il a ses droits et **quels protocoles** faibles restent disponibles.' },
          {
            t: 'table',
            head: ['Mesure', 'Ce qu’elle limite', 'Précaution de déploiement'],
            rows: [
              ['**Station d’administration privilégiée (PAW)**', 'L’exposition des comptes privilégiés à un poste compromis', 'Poste dédié, sans messagerie ni navigation, accès réseau filtré'],
              ['**Politiques et silos d’authentification**', 'Les machines sur lesquelles un compte peut obtenir un ticket', 'Tester sur des comptes pilotes, prévoir un compte de secours'],
              ['**Droits à la demande (JIT) et JEA**', 'La durée et l’étendue des privilèges', 'Processus d’approbation et de traçabilité'],
              ['**Restriction de NTLM**', 'Le relais et le rejeu d’authentifications', 'Auditer d’abord, lister les dépendances, restreindre par étapes'],
              ['**Signature et liaison de canal LDAP, signature SMB**', 'Le relais d’authentification vers l’annuaire et les partages', 'Recenser les clients anciens avant d’imposer'],
              ['**Credential Guard, protection LSA**', 'Le vol de secrets en mémoire', 'Compatibilité des pilotes et des applications'],
            ],
          },
          { t: 'def', term: 'Station d’administration privilégiée (PAW)', text: 'Poste **dédié** aux tâches d’administration : durci, sans messagerie ni navigation web, accessible seulement aux administrateurs et filtré au niveau du réseau. Un administrateur qui s’authentifie depuis une PAW ne laisse pas ses secrets sur un poste exposé aux courriels piégés.' },
          { t: 'def', term: 'Droits à la demande (JIT) et JEA', text: '**Just-In-Time** : un privilège est accordé sur demande, pour une durée limitée, puis retiré. **Just Enough Administration** : une session PowerShell restreinte n’expose que les commandes nécessaires à une tâche déléguée. L’un limite la durée, l’autre l’étendue.' },
          { t: 'def', term: 'Liaison de canal LDAP', text: 'Mécanisme qui lie l’authentification LDAP au **canal TLS** qui la transporte. Associé à la signature LDAP, il empêche qu’une authentification interceptée soit relayée vers l’annuaire par un autre canal.' },
          { t: 'def', term: 'Politique d’authentification et silo', text: 'Ensemble de règles qui restreignent **depuis quelles machines** et avec quelle durée de vie de ticket un compte sensible peut s’authentifier. Un compte tier 0 ne peut alors obtenir de ticket que depuis les contrôleurs et les PAW.' },
          { t: 'callout', kind: 'warn', text: 'Une authentification multifacteur protège la **connexion**, pas le **poste** : si le poste d’un administrateur est compromis après l’authentification, l’attaquant agit avec sa session. D’où les PAW, les durées de vie courtes et les droits à la demande.' },
        ],
      },
      {
        id: 'detection',
        title: 'Détecter : règles, leurres et mesure de qualité',
        blocks: [
          { t: 'p', text: 'Détecter une attaque avancée suppose de surveiller des **comportements** plutôt que des signatures figées, et de mesurer la qualité de ce qu’on a écrit. Une règle qui n’a jamais déclenché n’est pas forcément efficace : elle n’a peut-être jamais été testée.' },
          {
            t: 'table',
            head: ['Cas de détection', 'Source', 'Indice'],
            rows: [
              ['Extraction par réplication (DCSync)', 'Événement 4662 (audit de l’accès à l’annuaire)', 'Droits de réplication utilisés par un compte qui n’est pas un contrôleur'],
              ['Modification de GPO, d’ACL, de groupe', 'Événements 5136, 4728, 4732, 4756', 'Modification hors processus par un compte non administrateur'],
              ['Ajout d’une clé d’authentification à un compte', 'Événement 5136 sur `msDS-KeyCredentialLink`', 'Attribut modifié par un compte inattendu'],
              ['Émission de certificat anormale', 'Événement 4887', 'Demandeur et modèle inhabituels'],
              ['Utilisation d’un compte leurre', 'Journaux d’authentification', 'Toute tentative sur un compte qui n’a aucun usage'],
            ],
          },
          { t: 'def', term: 'Honeytoken', text: 'Objet **sans usage légitime** (compte leurre, SPN factice, fichier appât) dont toute utilisation signale un attaquant. Les leurres donnent très peu de faux positifs, à condition d’être crédibles et de ne servir à rien d’autre.' },
          { t: 'def', term: 'Sigma', text: 'Format ouvert et indépendant des plateformes pour décrire des **règles de détection** sur des journaux. Une règle Sigma se traduit vers les requêtes de différents outils de supervision, ce qui permet de la partager et de la versionner.' },
          {
            t: 'example',
            title: 'Une règle de détection d’extraction par réplication',
            blocks: [
              { t: 'code', lang: 'text', code: 'title: Réplication d’annuaire par un compte non contrôleur\nlogsource: { product: windows, service: security }\ndetection:\n  selection:\n    EventID: 4662\n    Properties|contains:\n      - \'1131f6aa-9c07-11d1-f79f-00c04fc2dcd2\'   # Get-Changes\n      - \'1131f6ad-9c07-11d1-f79f-00c04fc2dcd2\'   # Get-Changes-All\n  filter_dc:\n    SubjectUserName|endswith: \'$\'               # comptes de contrôleurs\n  condition: selection and not filter_dc\nlevel: high' },
              { t: 'p', text: 'La règle cherche l’usage des droits de réplication, en excluant les comptes de machines de contrôleurs de domaine dont la réplication légitime est constante. Elle n’a de valeur que testée : sur un exercice d’extraction simulé, elle doit déclencher ; sur un fonctionnement normal, elle doit rester silencieuse.' },
            ],
          },
          { t: 'list', items: ['**Tester** chaque règle sur une attaque simulée (équipe offensive, outil de simulation) et sur un trafic normal.', '**Mesurer** les faux positifs, ajuster les exclusions, documenter la réponse attendue pour chaque alerte.', '**Revoir** régulièrement : une règle dont les exclusions ont grossi sans contrôle finit par ne plus rien détecter.'] },
          { t: 'callout', kind: 'tip', text: 'Des services d’analyse de l’identité (comme Microsoft Defender for Identity) lisent les journaux et le trafic des contrôleurs pour détecter des attaques connues. Ils complètent, sans les remplacer, les règles propres à l’organisation.' },
        ],
      },
      {
        id: 'attaques',
        title: 'Attaques avancées sur l’annuaire et parades',
        blocks: [
          { t: 'p', text: 'Au-delà du vol de mots de passe, un adversaire expérimenté abuse du fonctionnement même de l’annuaire pour obtenir des droits ou s’installer durablement. Les techniques ci-dessous sont décrites ici **pour les reconnaître et les prévenir** ; elles ne se pratiquent que dans un laboratoire ou une mission autorisée.' },
          {
            t: 'table',
            head: ['Technique', 'Principe', 'Indice', 'Parade'],
            rows: [
              ['**DCShadow**', 'Enregistrer temporairement une fausse machine comme contrôleur pour injecter des changements par réplication', 'Objet de serveur créé puis supprimé dans la partition de configuration', 'Surveiller ces objets, restreindre les droits de création'],
              ['**AdminSDHolder**', 'Ajouter une ACL au modèle qui protège les comptes privilégiés : elle se réapplique à chaque cycle', 'Modification des droits du conteneur AdminSDHolder', 'Auditer ses ACL, alerter sur toute modification'],
              ['**Relais NTLM vers AD CS**', 'Faire relayer l’authentification d’un compte vers le service web d’inscription de certificats, pour obtenir un certificat à son nom', 'Émission 4887 inhabituelle, demande depuis une source étrangère', 'Désactiver NTLM sur l’inscription web, imposer la protection étendue'],
              ['**Shadow credentials**', 'Ajouter une clé à l’attribut `msDS-KeyCredentialLink` d’un compte pour s’authentifier comme lui par certificat', 'Modification de cet attribut (5136)', 'Restreindre l’écriture, surveiller l’attribut'],
              ['**Délégation basée sur les ressources (RBCD)**', 'Créer un compte machine, le déclarer autorisé à agir au nom d’un utilisateur sur une cible', 'Création de comptes machines, modification de l’attribut de délégation', 'Limiter le quota de comptes machines, auditer l’attribut'],
              ['**Historique de SID**', 'Ajouter le SID d’un groupe privilégié à l’historique d’un compte', 'Comptes avec SID History inattendu', 'Inventaire régulier, filtrage des SID entre domaines'],
            ],
          },
          { t: 'def', term: 'Quota de comptes machines', text: 'Attribut du domaine (`ms-DS-MachineAccountQuota`) qui autorise chaque utilisateur à joindre un certain nombre de machines, **dix par défaut**. Le mettre à **zéro** retire à un compte ordinaire la possibilité de créer des comptes machines, qui servent à plusieurs abus (délégation, relais).' },
          { t: 'def', term: 'Persistance dans l’annuaire', text: 'Modification de l’annuaire qui permet à un attaquant de **revenir** après avoir été expulsé : ACL détournée, appartenance cachée, historique de SID, certificat d’authentification émis, clé ajoutée à un compte. Elle ne se corrige pas en réinitialisant des mots de passe : il faut la **rechercher** et la retirer.' },
          { t: 'callout', kind: 'warn', text: 'La plupart de ces techniques reposent sur un droit **mal délégué** ou un réglage ancien, pas sur une faille logicielle : elles disparaissent avec l’audit des ACL, la réduction des protocoles hérités et la surveillance des attributs sensibles.' },
        ],
      },
      {
        id: 'hybride',
        title: 'Identité hybride et services cloud',
        blocks: [
          { t: 'p', text: 'Beaucoup d’organisations relient leur annuaire à un service d’identité du cloud (par exemple Microsoft Entra ID) par un **service de synchronisation**. L’identité devient une chaîne : une compromission locale peut atteindre le cloud, et l’inverse. Le défenseur doit considérer les deux mondes comme **un seul périmètre**.' },
          {
            t: 'table',
            head: ['Élément', 'Risque', 'Mesure'],
            rows: [
              ['Serveur et compte de synchronisation', 'Compromis, il permet d’écrire des identités des deux côtés', 'Traiter comme tier 0, durcir, surveiller sa configuration'],
              ['Comptes synchronisés avec rôles cloud privilégiés', 'Une compromission locale donne un accès privilégié au cloud', 'Comptes d’administration cloud dédiés, non synchronisés'],
              ['Jetons de session', 'Un jeton volé peut contourner le multifacteur', 'Durées courtes, accès conditionnel, liaison à l’appareil'],
              ['Rôles privilégiés permanents', 'Droits disponibles en permanence pour un attaquant', 'Élévation temporaire à la demande (PIM)'],
            ],
          },
          { t: 'def', term: 'Accès conditionnel', text: 'Politique qui évalue **l’identité, l’appareil, la localisation et le risque** avant d’autoriser l’accès à une ressource, et qui peut exiger un second facteur, un appareil conforme ou refuser l’accès. Elle remplace la confiance accordée au seul réseau interne.' },
          { t: 'def', term: 'PIM (Privileged Identity Management)', text: 'Service qui rend les rôles privilégiés du cloud **éligibles** plutôt que permanents : l’administrateur les active pour une durée limitée, avec justification, approbation éventuelle et journalisation.' },
          { t: 'def', term: 'Vol de jeton', text: 'Un attaquant intercepte (par un faux site relais, un logiciel malveillant) un **jeton de session** déjà authentifié et le réutilise : le multifacteur a été satisfait par la victime. Les parades sont des durées courtes, la liaison du jeton à l’appareil et l’évaluation continue des risques.' },
          { t: 'callout', kind: 'tip', text: 'La règle d’or de l’identité hybride : **aucun privilège cloud ne doit dépendre d’un compte local**, et le serveur de synchronisation se protège comme un contrôleur de domaine.' },
        ],
      },
      {
        id: 'reponse',
        title: 'Répondre et reconstruire',
        blocks: [
          { t: 'p', text: 'La réponse à un incident sur l’annuaire est une **opération** conduite par étapes, avec des décisions qui comptent : confiner sans détruire les preuves, évaluer l’étendue, supprimer toutes les persistances, puis reconstruire ce dont l’intégrité est douteuse.' },
          {
            t: 'table',
            head: ['Phase', 'Objectif', 'Actions principales'],
            rows: [
              ['**Triage**', 'Confirmer et qualifier l’alerte', 'Corréler les événements, identifier les comptes et les machines concernés, évaluer la gravité'],
              ['**Confinement**', 'Arrêter la progression', 'Isoler les machines (sans les éteindre), désactiver les comptes, purger les tickets, bloquer les sources'],
              ['**Collecte**', 'Préserver les preuves', 'Image de la mémoire, journaux, copies et empreintes, chaîne de conservation'],
              ['**Éradication**', 'Retirer toute présence', 'Chercher les persistances, réinitialiser les secrets, corriger la faille d’entrée'],
              ['**Reconstruction**', 'Restaurer un état sain', 'Reconstruire les machines douteuses, restaurer l’annuaire si nécessaire, vérifier la PKI'],
              ['**Retour d’expérience**', 'Ne pas recommencer', 'Chronologie, causes, mesures correctives, mise à jour du modèle de menace et des détections'],
            ],
          },
          { t: 'def', term: 'Purple team', text: 'Exercice où l’équipe qui **attaque** (rouge) et celle qui **défend** (bleue) travaillent ensemble : l’attaquant rejoue une technique, le défenseur vérifie si elle est détectée, puis on corrige la règle. C’est la méthode la plus directe pour mesurer et améliorer la couverture de détection.' },
          { t: 'def', term: 'Reconstruction de forêt', text: 'Procédure qui remet en service un annuaire de façon **fiable** après une compromission étendue : restauration depuis une sauvegarde saine, nettoyage de la forêt, réinitialisation des secrets et revérification de la PKI. Elle exige une préparation et des essais, car elle se fait sous la pression d’un incident.' },
          { t: 'list', items: ['**Mémoire d’abord** : avant d’éteindre une machine suspecte, on capture sa mémoire, qui contient processus, connexions, clés et code absents du disque.', '**Isoler n’est pas éteindre** : on coupe le réseau (port, VLAN, règle du pare-feu) pour garder l’état de la machine.', '**Éradiquer vraiment** : réinitialiser les mots de passe ne suffit pas si une ACL, un certificat ou une clé d’authentification reste en place.'] },
          { t: 'callout', kind: 'warn', text: 'Lors d’un incident, chaque décision a un coût : isoler trop tôt peut alerter l’attaquant, attendre laisse l’attaque progresser. Un plan écrit à l’avance, répété lors d’exercices, évite d’arbitrer dans l’urgence sans critères.' },
        ],
      },
    ],
    useCases: [
      'Revue d’exposition : cartographier les détections existantes sur ATT&CK et lister les techniques non couvertes.',
      'Déploiement de stations d’administration, de politiques d’authentification et de droits à la demande pour les comptes les plus sensibles.',
      'Écriture, test et mise au point de règles de détection (Sigma) et déploiement de comptes leurres.',
      'Audit des attributs sensibles de l’annuaire (AdminSDHolder, délégation, clés d’authentification, historique de SID).',
      'Exercice purple team sur une technique d’extraction de secrets, de la détection à la réponse.',
    ],
    commonMistakes: [
      'Croire que l’authentification multifacteur protège le poste de l’administrateur, et pas seulement sa connexion.',
      'Imposer NTLM restreint, signature LDAP ou signature SMB sans audit préalable, puis tout retirer face aux pannes.',
      'Écrire des règles de détection sans jamais les tester sur une attaque simulée.',
      'Laisser grossir les exclusions d’une règle jusqu’à ce qu’elle ne détecte plus rien.',
      'Attribuer des rôles cloud privilégiés à des comptes synchronisés depuis l’annuaire local.',
      'Nettoyer un incident en réinitialisant des mots de passe sans rechercher les persistances (ACL, certificats, clés, historique de SID).',
      'Éteindre une machine compromise avant d’avoir capturé sa mémoire.',
    ],
    bestPractices: [
      'Hypothèse de compromission, modèle de menace mis à jour et cartographie ATT&CK de la couverture de détection.',
      'Comptes privilégiés limités à des PAW, avec politiques d’authentification, droits à la demande et durées de vie courtes.',
      'NTLM, signature SMB et LDAP : audit, puis restriction par étapes ; quota de comptes machines à zéro.',
      'Règles de détection versionnées, testées sur attaque simulée, mesurées en faux positifs ; leurres crédibles.',
      'Surveillance des attributs et conteneurs sensibles de l’annuaire (5136, 4662, 4887).',
      'Identité hybride traitée comme un seul périmètre : synchronisation en tier 0, comptes cloud dédiés, accès conditionnel, PIM.',
      'Plan de réponse et de reconstruction écrit, répété (purple team), avec chaîne de conservation des preuves.',
    ],
    keyPoints: [
      'On suppose la compromission : le but est de rendre chaque pas de l’attaquant coûteux, visible et réversible.',
      'Le MFA protège la connexion, pas le poste : PAW, politiques d’authentification et droits à la demande réduisent l’exposition.',
      'Restreindre NTLM et imposer signatures et liaison de canal se fait par audit puis par étapes.',
      'Une détection vaut ce qu’elle a été testée : simulation, mesure des faux positifs, revue des exclusions ; les leurres complètent.',
      'Les attaques avancées abusent de droits et d’attributs de l’annuaire ; elles se préviennent par l’audit et la surveillance.',
      'En hybride, la synchronisation est tier 0 et aucun privilège cloud ne dépend d’un compte local.',
      'La réponse suit des phases : triage, confinement, collecte, éradication, reconstruction, retour d’expérience.',
    ],
  },
  practice: [
    {
      id: 'regle-detection',
      kind: 'analysis',
      title: 'Évaluer une règle de détection',
      context: [
        { t: 'p', text: 'Un analyste propose cette règle pour détecter l’extraction des secrets de l’annuaire par réplication :' },
        { t: 'code', lang: 'text', code: 'title: Détection DCSync\nlogsource: { product: windows, service: security }\ndetection:\n  selection:\n    EventID: 4624\n    LogonType: 3\n    TargetUserName|contains: \'admin\'\n  condition: selection\nlevel: critical' },
      ],
      steps: ['Expliquer pourquoi cette règle ne détecte pas l’extraction par réplication et générerait beaucoup de faux positifs.', 'Proposer une règle corrigée (événement, champs, exclusions) et les prérequis de journalisation.', 'Décrire comment tester la règle et mesurer sa qualité avant de la mettre en production.'],
    },
    {
      id: 'plan-identite',
      kind: 'case',
      title: 'Cas pratique : plan de durcissement de l’identité sur 90 jours',
      context: [{ t: 'p', text: 'Une entreprise de 2 000 comptes dispose d’un domaine Active Directory synchronisé avec le cloud. Constats : administrateurs connectés sur leur poste de travail habituel, NTLM utilisé partout, LDAP sans signature, quota de comptes machines par défaut, rôles cloud privilégiés attribués à des comptes synchronisés, aucune règle de détection propre à l’annuaire.' }],
      steps: ['Hiérarchiser les mesures sur 90 jours en justifiant l’ordre.', 'Pour chacune, indiquer comment la déployer sans provoquer de panne.', 'Définir les indicateurs qui montrent que la mesure est en place et efficace.'],
    },
    {
      id: 'reponse-annuaire',
      kind: 'case',
      title: 'Cas pratique : une réplication anormale détectée',
      context: [{ t: 'p', text: 'Votre supervision signale un événement 4662 avec les droits de réplication, émis par le compte d’un employé depuis un poste de travail. Dans l’heure précédente, une GPO a été modifiée par ce même compte et une tâche planifiée inconnue est apparue sur trois serveurs.' }],
      steps: ['Qualifier la situation et lister les premières vérifications.', 'Ordonner les actions de confinement, de collecte et d’évaluation de l’étendue.', 'Décrire l’éradication, la reconstruction et les enseignements à tirer.'],
    },
  ],
  questions,
  resources: [
    { title: 'MITRE ATT&CK', source: 'MITRE', url: 'https://attack.mitre.org/' },
    { title: 'Sigma — format ouvert de règles de détection', source: 'SigmaHQ', url: 'https://github.com/SigmaHQ/sigma' },
    { title: 'Securing privileged access (stations d’administration privilégiées)', source: 'Microsoft Learn', url: 'https://learn.microsoft.com/security/privileged-access-workstations/overview' },
    { title: 'Active Directory Forest Recovery Guide', source: 'Microsoft Learn', url: 'https://learn.microsoft.com/windows-server/identity/ad-ds/manage/forest-recovery-guide/ad-forest-recovery-guide' },
    { title: 'Microsoft Defender for Identity', source: 'Microsoft Learn', url: 'https://learn.microsoft.com/defender-for-identity/what-is' },
    { title: 'Recommandations de sécurité relatives à Active Directory', source: 'ANSSI', url: 'https://cyber.gouv.fr/publications/recommandations-de-securite-relatives-active-directory' },
  ],
};
