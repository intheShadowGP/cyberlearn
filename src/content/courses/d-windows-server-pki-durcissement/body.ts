import type { CourseBody } from '../../types';
import { questions } from './questions';

export const body: CourseBody = {
  courseId: 'd-windows-server-pki-durcissement',
  lesson: {
    intro:
      'Active Directory ne fonctionne pas seul : il s’appuie sur le DNS pour localiser les services, sur le DHCP pour adresser les postes, et souvent sur une PKI interne pour émettre les certificats de l’organisation. Ces rôles d’infrastructure sont des cibles de choix : un DNS détourné redirige les authentifications, une PKI mal configurée permet de se fabriquer l’identité de n’importe qui. Ce cours traite leur sécurisation et, plus largement, le durcissement d’un serveur Windows.',
    sections: [
      {
        id: 'infra',
        title: 'DNS et DHCP Windows',
        blocks: [
          { t: 'p', text: 'Dans un domaine, le **DNS** est critique : c’est par lui que les postes trouvent les contrôleurs de domaine (enregistrements SRV). Le DNS Windows est généralement **intégré à Active Directory**, ce qui réplique la zone entre contrôleurs et permet les mises à jour dynamiques sécurisées.' },
          {
            t: 'table',
            head: ['Rôle', 'Risque', 'Mesure'],
            rows: [
              ['DNS AD', 'Détournement de résolution, redirection des authentifications', 'Mises à jour dynamiques **sécurisées** uniquement, restriction des transferts de zone, surveillance des modifications'],
              ['DHCP', 'Serveur pirate, épuisement du pool, mauvaise passerelle imposée', 'Autorisation du serveur dans AD, DHCP snooping côté commutateur, surveillance'],
            ],
          },
          { t: 'def', term: 'Mise à jour dynamique sécurisée', text: 'Option du DNS intégré à AD qui n’accepte les enregistrements que de machines authentifiées dans le domaine, et vérifie les droits sur chaque enregistrement. Elle évite qu’une machine quelconque écrase un enregistrement existant.' },
          { t: 'def', term: 'Enregistrements SRV', text: 'Enregistrements DNS qui indiquent **quel serveur offre quel service** (par exemple l’annuaire LDAP ou Kerberos d’un domaine). Les postes les interrogent pour trouver un contrôleur de domaine : un attaquant qui peut les créer ou les modifier redirige les authentifications.' },
          { t: 'def', term: 'Liste de blocage des requêtes globales', text: 'Fonction du serveur DNS Windows qui **refuse de résoudre certains noms spéciaux** (WPAD, ISATAP) tant qu’aucun administrateur ne les a créés. Elle empêche un utilisateur d’enregistrer le nom `wpad` pour imposer son proxy aux postes du réseau.' },
          { t: 'callout', kind: 'tip', text: 'Les transferts de zone (AXFR) non restreints révèlent toute la cartographie interne (noms de serveurs, services). On ne les autorise qu’entre serveurs DNS légitimes.' },
        ],
      },
      {
        id: 'pki',
        title: 'PKI d’entreprise avec AD CS',
        blocks: [
          { t: 'p', text: 'Une **PKI** (infrastructure à clés publiques) émet et gère les certificats de l’organisation : authentification des machines et des utilisateurs, signature de code, chiffrement, serveurs web internes. Sous Windows, le rôle **AD CS** (Active Directory Certificate Services) fournit cette PKI.' },
          {
            t: 'table',
            head: ['Composant', 'Rôle'],
            rows: [
              ['Autorité racine', 'Point de confiance ; idéalement **hors ligne**, elle ne signe que les autorités intermédiaires'],
              ['Autorité émettrice', 'En ligne, délivre les certificats aux demandeurs selon des modèles'],
              ['Modèle de certificat', 'Définit l’usage, la durée, qui peut demander, et si une intervention est requise'],
              ['Point de distribution de révocation', 'Publie les certificats révoqués (CRL, OCSP)'],
            ],
          },
          { t: 'def', term: 'Modèle de certificat', text: 'Gabarit qui détermine à quoi sert un certificat et comment il est délivré : usages autorisés, durée, groupes qui peuvent en demander, et surtout si le demandeur peut choisir lui-même le nom (sujet) du certificat. Ce dernier point est une source fréquente de mauvaise configuration.' },
          { t: 'def', term: 'PKI à deux niveaux', text: 'Une **racine hors ligne** signe une ou plusieurs **autorités émettrices** en ligne. Si une émettrice est compromise, on la révoque et on en crée une nouvelle sous la même racine, sans redéployer la confiance dans la racine sur tous les postes.' },
          { t: 'def', term: 'CRL et OCSP', text: 'La **CRL** est la liste des certificats révoqués, publiée périodiquement ; **OCSP** est un service en ligne qui indique l’état d’un certificat précis. Dans les deux cas, le point de publication doit rester joignable et à jour, sinon les clients ne peuvent pas conclure.' },
          { t: 'callout', kind: 'warn', text: 'Si la clé d’une autorité émettrice est volée, ce ne sont pas seulement les certificats futurs qui sont en cause : l’attaquant peut fabriquer des certificats valides à volonté. La branche entière perd sa confiance et doit être révoquée et réémise.' },
          { t: 'callout', kind: 'key', text: 'Une PKI est aussi sensible qu’Active Directory : un certificat d’authentification émis à tort permet de se faire passer pour n’importe quel utilisateur, y compris un administrateur. L’autorité racine se protège comme un actif de plus haute valeur (hors ligne, accès strict).' },
        ],
      },
      {
        id: 'certificats',
        title: 'Cycle de vie et configurations à auditer',
        blocks: [
          { t: 'p', text: 'Un certificat suit un cycle : demande, validation, émission, utilisation, renouvellement, puis expiration ou **révocation** avant terme (clé compromise, départ, erreur). Les clients vérifient la validité et la non-révocation via les listes publiées (CRL) ou le service en ligne (OCSP).' },
          {
            t: 'table',
            head: ['Configuration dangereuse à auditer', 'Pourquoi'],
            rows: [
              ['Un modèle d’authentification où le demandeur fixe lui-même le sujet', 'Permet de demander un certificat au nom d’un autre compte'],
              ['Émission sans approbation ni restriction de groupe', 'Toute personne du domaine peut obtenir un certificat sensible'],
              ['Droits d’inscription trop larges sur un modèle', 'Élargit la population capable d’obtenir des certificats privilégiés'],
              ['Autorité émettrice sans supervision', 'Les émissions anormales passent inaperçues'],
            ],
          },
          {
            t: 'example',
            title: 'Un modèle risqué et sa correction',
            blocks: [
              { t: 'p', text: 'Un modèle « authentification client » publié pour « Utilisateurs du domaine », avec l’option « le demandeur fournit le sujet » et sans approbation : un utilisateur standard peut demander un certificat dont le sujet désigne un administrateur, puis s’authentifier comme lui.' },
              { t: 'p', text: 'Correction : retirer l’option de sujet libre (le sujet est tiré de l’objet du demandeur dans l’annuaire), restreindre l’inscription à un groupe précis, exiger l’approbation d’un gestionnaire pour les certificats sensibles, et tracer les émissions.' },
            ],
          },
          { t: 'def', term: 'Nom alternatif du sujet (SAN)', text: 'Extension qui liste les identités pour lesquelles le certificat est valable : noms DNS d’un serveur, adresse de courriel ou nom d’utilisateur (UPN) d’une personne. Pour un certificat d’authentification, un SAN **fourni par le demandeur** et accepté par l’autorité permet de désigner un autre compte.' },
          { t: 'def', term: 'Mappage fort', text: 'Le contrôleur de domaine exige que le certificat soit lié à l’**identifiant de sécurité (SID)** du compte qui l’utilise. Un certificat obtenu au nom d’un autre utilisateur ne passe alors plus l’authentification, même si le modèle était mal réglé.' },
          {
            t: 'table',
            head: ['Bonne pratique', 'Effet'],
            rows: [
              ['Inventaire et alertes avant expiration', 'Évite les pannes dues à un certificat expiré'],
              ['Clés non exportables (TPM, module matériel)', 'Empêche le vol et la copie de la clé privée'],
              ['Durées courtes, renouvellement automatique', 'Réduit la fenêtre d’abus d’un certificat volé'],
              ['Certificats distincts plutôt qu’un wildcard partout', 'Limite l’effet de la fuite d’une clé'],
            ],
          },
          { t: 'def', term: 'Révocation', text: 'Invalidation d’un certificat avant son expiration. Elle n’a d’effet que si les clients consultent effectivement l’état de révocation : une CRL expirée ou un point de distribution injoignable laisse un certificat compromis utilisable.' },
          { t: 'callout', kind: 'warn', text: 'Les erreurs de configuration des modèles AD CS sont une voie d’élévation de privilèges étudiée et outillée. La démarche défensive : inventorier les modèles publiés, vérifier qui peut s’y inscrire, désactiver ceux qui laissent choisir le sujet pour l’authentification, exiger l’approbation pour les certificats sensibles et surveiller les émissions.' },
        ],
      },
      {
        id: 'hardening',
        title: 'Durcir un serveur Windows',
        blocks: [
          { t: 'p', text: 'Un serveur se durcit en réduisant sa surface : moins de rôles, moins de comptes, moins de services, et une configuration conforme à une référence éprouvée.' },
          { t: 'list', items: ['**Rôles minimaux** : n’installer que ce que le serveur doit faire ; préférer **Server Core** (sans interface graphique) pour réduire la surface et les mises à jour.', '**Références de configuration** : appliquer une base reconnue (CIS Benchmarks, références de sécurité Microsoft) via des stratégies de groupe.', '**Comptes** : pas d’administrateur de domaine qui ouvre une session sur un serveur ordinaire ; LAPS pour l’administrateur local ; comptes de service gérés (gMSA).', '**Réseau** : pare-feu Windows actif, flux limités aux besoins, administration via un réseau dédié et un poste d’administration.', '**Mises à jour** : correctifs appliqués rapidement, cycle maîtrisé.'] },
          { t: 'def', term: 'Server Core', text: 'Mode d’installation de Windows Server sans interface graphique, administré en ligne de commande (PowerShell) et à distance. Moins de composants installés signifie moins de vulnérabilités potentielles et moins de redémarrages pour les correctifs.' },
          { t: 'def', term: 'gMSA (compte de service géré de groupe)', text: 'Compte de service dont le mot de passe, long et aléatoire, est **généré et renouvelé par Active Directory** : personne ne le connaît ni ne le saisit. Il remplace les mots de passe de service faibles et jamais changés.' },
          { t: 'def', term: 'Administration par niveaux (tiering)', text: 'Les identifiants d’un compte restent en mémoire sur les machines où il ouvre une session. On sépare donc **niveau 0** (contrôleurs de domaine, PKI), **niveau 1** (serveurs) et **niveau 2** (postes) : un compte d’un niveau n’ouvre jamais de session sur un niveau moins sûr.' },
          {
            t: 'table',
            head: ['Protocole hérité', 'Risque', 'Mesure'],
            rows: [
              ['SMBv1', 'Failles majeures, exploité par des vers', 'Désinstaller'],
              ['NTLM', 'Relais d’authentification, vol d’empreintes', 'Auditer puis restreindre, préférer Kerberos'],
              ['LLMNR, NetBIOS sur TCP/IP', 'Usurpation de noms sur le réseau local', 'Désactiver par stratégie de groupe'],
            ],
          },
          { t: 'callout', kind: 'key', text: 'Le durcissement d’un serveur dépend de son rôle de tiers : un contrôleur de domaine ou une autorité de certification relève du niveau d’administration le plus élevé et ne doit jamais partager d’identifiants avec des serveurs moins sensibles.' },
        ],
      },
      {
        id: 'supervision',
        title: 'Supervision et sauvegarde',
        blocks: [
          { t: 'p', text: 'Un serveur durci doit être surveillé et sauvegardé : sans cela, on ne détecte pas les incidents et on ne peut pas revenir à un état sain.' },
          { t: 'list', items: ['**Journalisation** centralisée (voir le cours sur le poste Windows) : authentifications, changements de groupes privilégiés, événements des rôles (émissions de certificats, modifications DNS).', '**Sauvegarde de l’état système** et, pour un contrôleur de domaine, sauvegarde permettant une restauration faisant autorité en cas de corruption ou de rançongiciel.', '**Tests de restauration** réguliers : une sauvegarde jamais testée n’est pas une sauvegarde.', '**Surveillance de l’intégrité** des fichiers sensibles et des modifications de configuration.'] },
          { t: 'def', term: 'Restauration faisant autorité', text: 'Restauration d’objets Active Directory qui s’impose à la réplication, utilisée pour rétablir des objets supprimés ou altérés. Elle suppose une sauvegarde saine et antérieure à l’incident.' },
          { t: 'def', term: 'Règle 3-2-1', text: '**3** copies des données, sur **2** supports différents, dont **1** hors site ou hors ligne. Elle limite l’effet d’une panne, d’un sinistre ou d’un rançongiciel.' },
          {
            t: 'table',
            caption: 'Événements d’une autorité AD CS à surveiller',
            head: ['ID', 'Signification'],
            rows: [['4886', 'Une demande de certificat a été reçue'], ['4887', 'Une demande a été approuvée et un certificat émis'], ['4888', 'Une demande a été refusée']],
          },
          { t: 'callout', kind: 'tip', text: 'Les sauvegardes sont elles-mêmes une cible des rançongiciels : elles doivent être isolées (hors ligne ou immuables) et leurs accès strictement contrôlés, sinon l’attaquant les chiffre aussi.' },
        ],
      },
      {
        id: 'reprise',
        title: 'Se préparer à reconstruire après une compromission',
        blocks: [
          { t: 'p', text: 'Quand un attaquant a obtenu les droits d’administration du domaine, on ne se contente pas de l’expulser : il a pu copier des secrets, créer des comptes, altérer la PKI. La reprise se **prépare avant l’incident**, par des procédures écrites et répétées.' },
          {
            t: 'table',
            head: ['Étape', 'Action', 'Pourquoi'],
            rows: [
              ['1. Contenir', 'Isoler les systèmes touchés, couper les accès des comptes compromis', 'Arrêter la progression sans détruire les preuves'],
              ['2. Préserver', 'Collecter journaux, copies et empreintes des systèmes touchés', 'Comprendre l’étendue et alimenter l’enquête'],
              ['3. Restaurer', 'Remettre un contrôleur à partir d’une sauvegarde saine, antérieure à l’intrusion', 'Repartir d’un annuaire non altéré'],
              ['4. Réinitialiser les secrets', 'Mots de passe privilégiés et de service, double réinitialisation de `krbtgt`, secrets de la PKI', 'Rendre inutilisables les identifiants copiés'],
              ['5. Vérifier la PKI', 'Contrôler modèles, droits et certificats émis ; révoquer et réémettre si nécessaire', 'Une PKI altérée permet de s’authentifier à nouveau'],
              ['6. Durcir et surveiller', 'Corriger la cause, renforcer la séparation des niveaux, alerter sur les signes de retour', 'Éviter la récidive'],
            ],
          },
          { t: 'callout', kind: 'info', title: 'Le compte krbtgt', text: 'Compte dont le secret signe tous les tickets Kerberos du domaine. S’il a été copié, l’attaquant peut forger des tickets valables. On le **réinitialise deux fois** (avec le délai de réplication entre les deux) pour invalider l’ancien et le précédent secret.' },
          { t: 'callout', kind: 'warn', text: 'Une reprise improvisée échoue souvent : sauvegardes chiffrées avec le reste, ordre de reconstruction inconnu, secrets non renouvelés. Un exercice annuel de reconstruction, sur un environnement isolé, révèle ces lacunes avant l’incident.' },
        ],
      },
    ],
    useCases: [
      'Revue de sécurité d’un domaine : mises à jour DNS sécurisées, restriction des transferts de zone, autorisation du serveur DHCP.',
      'Audit d’une PKI AD CS : inventaire des modèles, droits d’inscription, détection des modèles dangereux.',
      'Durcissement d’un parc de serveurs : Server Core, références CIS, LAPS, gMSA, sauvegardes isolées et testées.',
      'Préparation de la reprise : plan de reconstruction d’Active Directory, réinitialisation des secrets, vérification de la PKI, exercice annuel.',
    ],
    commonMistakes: [
      'Laisser les mises à jour dynamiques DNS non sécurisées ou les transferts de zone ouverts.',
      'Publier des modèles de certificats où le demandeur choisit le sujet d’un certificat d’authentification.',
      'Traiter une PKI ou un contrôleur de domaine comme un serveur ordinaire, avec des identifiants partagés.',
      'Installer des rôles et des outils inutiles sur un serveur.',
      'Ne pas isoler ni tester les sauvegardes, qui sont alors chiffrées avec le reste lors d’un rançongiciel.',
      'Laisser actifs SMBv1, LLMNR ou NTLM sans audit ni restriction.',
      'Croire que l’autorisation du DHCP dans AD empêche tout serveur pirate de répondre.',
      'Utiliser un certificat wildcard copié partout, dont une seule fuite expose tous les sous-domaines.',
    ],
    bestPractices: [
      'DNS intégré à AD avec mises à jour sécurisées et transferts de zone restreints ; serveur DHCP autorisé et surveillé.',
      'Autorité racine hors ligne ; modèles de certificats restreints, approbation pour les certificats sensibles, révocation opérationnelle.',
      'Rôles minimaux, Server Core, références de configuration (CIS, Microsoft), LAPS et gMSA.',
      'Séparation stricte des niveaux d’administration ; pas d’identifiants partagés entre serveurs sensibles et ordinaires.',
      'Journalisation centralisée, sauvegardes isolées et régulièrement testées.',
      'Modèle d’administration par niveaux, mappage fort des certificats, audit de l’autorité (événements 4886 à 4888).',
      'Plan de reprise écrit et répété : sauvegarde saine, réinitialisation des secrets (krbtgt deux fois), contrôle de la PKI.',
    ],
    keyPoints: [
      'Le DNS AD est critique : mises à jour sécurisées, transferts de zone restreints.',
      'Une PKI est aussi sensible qu’AD ; l’autorité racine reste hors ligne.',
      'Les modèles de certificats mal configurés (sujet libre, inscription large) sont une voie d’élévation à auditer.',
      'La révocation n’agit que si les clients vérifient l’état de révocation.',
      'Durcir = rôles minimaux, Server Core, références CIS, séparation des niveaux, sauvegardes isolées et testées.',
      'Reprise : on restaure une sauvegarde saine, on réinitialise les secrets copiés et on vérifie la PKI ; le tout se prépare avant l’incident.',
    ],
  },
  practice: [
    {
      id: 'audit-pki',
      kind: 'analysis',
      title: 'Audit des modèles d’une PKI',
      context: [
        { t: 'p', text: 'Extrait d’un inventaire des modèles de certificats publiés par une autorité AD CS :' },
        {
          t: 'table',
          head: ['Modèle', 'Usage', 'Peut s’inscrire', 'Sujet fourni par le demandeur', 'Approbation'],
          rows: [
            ['WebServeurInterne', 'Authentification serveur', 'Admins serveurs', 'Non (tiré de l’objet)', 'Non'],
            ['AuthUtilisateur', 'Authentification client', 'Utilisateurs du domaine', 'Oui', 'Non'],
            ['SignatureCode', 'Signature de code', 'Tout le domaine', 'Non', 'Non'],
          ],
        },
      ],
      steps: ['Identifier le ou les modèles à risque et expliquer pourquoi.', 'Proposer la correction de chacun.', 'Indiquer ce qu’il faut surveiller côté autorité émettrice.'],
    },
    {
      id: 'durcir-dc',
      kind: 'case',
      title: 'Cas pratique : sécuriser un nouveau contrôleur de domaine',
      context: [{ t: 'p', text: 'Vous ajoutez un contrôleur de domaine, qui hébergera aussi le DNS intégré à AD. Il doit être durci avant la mise en production, et une stratégie de sauvegarde doit être définie.' }],
      steps: ['Lister les mesures de durcissement propres à ce rôle sensible.', 'Décrire la configuration DNS sécurisée.', 'Proposer une stratégie de sauvegarde résistante aux rançongiciels.'],
    },
    {
      id: 'reprise-ad',
      kind: 'case',
      title: 'Cas pratique : reconstruire après un rançongiciel',
      context: [{ t: 'p', text: 'Un rançongiciel a chiffré les serveurs d’une organisation ainsi que les sauvegardes, qui se trouvaient sur un partage réseau accessible avec le compte d’administration du domaine. Une sauvegarde hors ligne vieille de trois semaines existe pour un seul contrôleur de domaine. L’enquête montre que l’attaquant avait les droits d’administration du domaine depuis au moins dix jours.' }],
      steps: ['Expliquer pourquoi la sauvegarde hors ligne est utilisable ou non, et à quelles conditions.', 'Ordonner les étapes de reprise (contenir, restaurer, réinitialiser, vérifier).', 'Proposer les mesures qui éviteraient de se retrouver dans cette situation.'],
    },
  ],
  questions,
  resources: [
    { title: 'Active Directory Certificate Services', source: 'Microsoft Learn', url: 'https://learn.microsoft.com/windows-server/identity/ad-cs/active-directory-certificate-services-overview' },
    { title: 'DNS Policies / Securing DNS', source: 'Microsoft Learn', url: 'https://learn.microsoft.com/windows-server/networking/dns/dns-top' },
    { title: 'Windows Server security documentation', source: 'Microsoft Learn', url: 'https://learn.microsoft.com/windows-server/security/security-and-assurance' },
    { title: 'Enterprise access model (administration par niveaux)', source: 'Microsoft Learn', url: 'https://learn.microsoft.com/security/privileged-access-workstations/privileged-access-access-model' },
    { title: 'CIS Benchmarks', source: 'Center for Internet Security', url: 'https://www.cisecurity.org/cis-benchmarks' },
    { title: 'Recommandations relatives à l’administration sécurisée des SI', source: 'ANSSI', url: 'https://cyber.gouv.fr/publications/recommandations-relatives-ladministration-securisee-des-si' },
  ],
};
