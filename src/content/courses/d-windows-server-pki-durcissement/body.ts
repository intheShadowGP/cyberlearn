import type { CourseBody } from '../../types';

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
          { t: 'def', term: 'Révocation', text: 'Invalidation d’un certificat avant son expiration. Elle n’a d’effet que si les clients consultent effectivement l’état de révocation : une CRL expirée ou un point de distribution injoignable laisse un certificat compromis utilisable.' },
          { t: 'callout', kind: 'warn', text: 'Les erreurs de configuration des modèles AD CS sont une voie d’élévation de privilèges étudiée et outillée. La démarche défensive : inventorier les modèles publiés, vérifier qui peut s’y inscrire, désactiver ceux qui laissent choisir le sujet pour l’authentification, exiger l’approbation pour les certificats sensibles et surveiller les émissions.' },
        ],
      },
      {
        id: 'hardening',
        title: 'Durcir un serveur Windows',
        blocks: [
          { t: 'p', text: 'Un serveur se durcit en réduisant sa surface : moins de rôles, moins de comptes, moins de services, et une configuration conforme à une référence éprouvée.' },
          { t: 'list', items: ['**Rôles minimaux** : n’installer que ce que le serveur doit faire ; préférer **Server Core** (sans interface graphique) pour réduire la surface et les mises à jour.', '**Références de configuration** : appliquer une base reconnue (CIS Benchmarks, références de sécurité Microsoft) via des stratégies de groupe.', '**Comptes** : pas d’administrateur de domaine qui se connecte sur un serchargé de rôles ; LAPS pour l’administrateur local ; comptes de service gérés (gMSA).', '**Réseau** : pare-feu Windows actif, flux limités aux besoins, administration via un réseau dédié et un poste d’administration.', '**Mises à jour** : correctifs appliqués rapidement, cycle maîtrisé.'] },
          { t: 'def', term: 'Server Core', text: 'Mode d’installation de Windows Server sans interface graphique, administré en ligne de commande (PowerShell) et à distance. Moins de composants installés signifie moins de vulnérabilités potentielles et moins de redémarrages pour les correctifs.' },
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
          { t: 'callout', kind: 'tip', text: 'Les sauvegardes sont elles-mêmes une cible des rançongiciels : elles doivent être isolées (hors ligne ou immuables) et leurs accès strictement contrôlés, sinon l’attaquant les chiffre aussi.' },
        ],
      },
    ],
    useCases: [
      'Revue de sécurité d’un domaine : mises à jour DNS sécurisées, restriction des transferts de zone, autorisation du serveur DHCP.',
      'Audit d’une PKI AD CS : inventaire des modèles, droits d’inscription, détection des modèles dangereux.',
      'Durcissement d’un parc de serveurs : Server Core, références CIS, LAPS, gMSA, sauvegardes isolées et testées.',
    ],
    commonMistakes: [
      'Laisser les mises à jour dynamiques DNS non sécurisées ou les transferts de zone ouverts.',
      'Publier des modèles de certificats où le demandeur choisit le sujet d’un certificat d’authentification.',
      'Traiter une PKI ou un contrôleur de domaine comme un serveur ordinaire, avec des identifiants partagés.',
      'Installer des rôles et des outils inutiles sur un serveur.',
      'Ne pas isoler ni tester les sauvegardes, qui sont alors chiffrées avec le reste lors d’un rançongiciel.',
    ],
    bestPractices: [
      'DNS intégré à AD avec mises à jour sécurisées et transferts de zone restreints ; serveur DHCP autorisé et surveillé.',
      'Autorité racine hors ligne ; modèles de certificats restreints, approbation pour les certificats sensibles, révocation opérationnelle.',
      'Rôles minimaux, Server Core, références de configuration (CIS, Microsoft), LAPS et gMSA.',
      'Séparation stricte des niveaux d’administration ; pas d’identifiants partagés entre serveurs sensibles et ordinaires.',
      'Journalisation centralisée, sauvegardes isolées et régulièrement testées.',
    ],
    keyPoints: [
      'Le DNS AD est critique : mises à jour sécurisées, transferts de zone restreints.',
      'Une PKI est aussi sensible qu’AD ; l’autorité racine reste hors ligne.',
      'Les modèles de certificats mal configurés (sujet libre, inscription large) sont une voie d’élévation à auditer.',
      'La révocation n’agit que si les clients vérifient l’état de révocation.',
      'Durcir = rôles minimaux, Server Core, références CIS, séparation des niveaux, sauvegardes isolées et testées.',
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
  ],
  questions: [
    { id: 'wsp-q1', type: 'single', difficulty: 2, skills: ['d-infra-services'], prompt: 'Pourquoi le DNS est-il critique dans un domaine Active Directory ?', options: [{ id: 'a', text: 'Les postes y trouvent les contrôleurs de domaine (enregistrements SRV) ; le détourner redirige les authentifications' }, { id: 'b', text: 'Il stocke les mots de passe des utilisateurs' }, { id: 'c', text: 'Il chiffre les disques des serveurs' }, { id: 'd', text: 'Il remplace le pare-feu' }] },
    { id: 'wsp-q2', type: 'truefalse', difficulty: 2, skills: ['d-infra-services'], prompt: 'Les mises à jour dynamiques DNS « sécurisées » n’acceptent les enregistrements que de machines authentifiées dans le domaine, en vérifiant les droits.' },
    { id: 'wsp-q3', type: 'multi', difficulty: 2, skills: ['d-infra-services'], prompt: 'Quelles mesures sécurisent les services d’infrastructure Windows ?', options: [{ id: 'a', text: 'Restreindre les transferts de zone DNS aux serveurs légitimes' }, { id: 'b', text: 'Autoriser le serveur DHCP dans Active Directory' }, { id: 'c', text: 'Surveiller les modifications DNS' }, { id: 'd', text: 'Ouvrir les transferts de zone à tous pour faciliter le diagnostic' }] },
    { id: 'wsp-q4', type: 'single', difficulty: 2, skills: ['d-pki'], prompt: 'Pourquoi garder l’autorité de certification racine hors ligne ?', options: [{ id: 'a', text: 'Elle est le point de confiance de toute la PKI ; hors ligne, elle est bien plus difficile à compromettre et ne signe que les autorités intermédiaires' }, { id: 'b', text: 'Pour économiser de l’électricité' }, { id: 'c', text: 'Parce qu’elle ne sert jamais' }, { id: 'd', text: 'Pour accélérer l’émission des certificats' }] },
    { id: 'wsp-q5', type: 'short', difficulty: 2, skills: ['d-pki'], prompt: 'Comment appelle-t-on le gabarit qui définit l’usage, la durée et les conditions de délivrance d’un certificat dans AD CS ? (deux mots)', placeholder: 'modèle de …' },
    { id: 'wsp-q6', type: 'truefalse', difficulty: 2, skills: ['d-pki'], prompt: 'Un certificat d’authentification émis à tort peut permettre de se faire passer pour un autre utilisateur, y compris un administrateur.' },
    { id: 'wsp-q7', type: 'single', difficulty: 3, skills: ['d-certificats'], prompt: 'Quel réglage de modèle est le plus dangereux pour un certificat d’authentification ?', options: [{ id: 'a', text: 'Laisser le demandeur fournir lui-même le sujet (le nom) du certificat' }, { id: 'b', text: 'Fixer une durée de validité d’un an' }, { id: 'c', text: 'Publier le point de distribution de révocation' }, { id: 'd', text: 'Exiger une approbation avant émission' }] },
    { id: 'wsp-q8', type: 'truefalse', difficulty: 2, skills: ['d-certificats'], prompt: 'Révoquer un certificat suffit à le rendre inutilisable, même si les clients ne consultent pas l’état de révocation.' },
    { id: 'wsp-q9', type: 'multi', difficulty: 3, skills: ['d-certificats'], prompt: 'Quelles configurations d’une PKI AD CS faut-il auditer en priorité ?', options: [{ id: 'a', text: 'Les modèles où le demandeur choisit le sujet pour un usage d’authentification' }, { id: 'b', text: 'Les droits d’inscription trop larges sur des modèles sensibles' }, { id: 'c', text: 'L’émission sans approbation de certificats privilégiés' }, { id: 'd', text: 'La couleur de l’icône du magasin de certificats' }] },
    { id: 'wsp-q10', type: 'open', difficulty: 3, skills: ['d-certificats', 'd-pki'], prompt: 'Expliquez pourquoi une PKI mal configurée peut être aussi grave qu’une compromission d’Active Directory, et donnez deux vérifications défensives.' },
    { id: 'wsp-q11', type: 'single', difficulty: 2, skills: ['d-srv-hardening'], prompt: 'Qu’apporte l’installation d’un serveur en mode Server Core ?', options: [{ id: 'a', text: 'Moins de composants installés, donc une surface d’attaque et un volume de correctifs réduits' }, { id: 'b', text: 'Un antivirus intégré plus puissant' }, { id: 'c', text: 'Le chiffrement automatique du réseau' }, { id: 'd', text: 'La suppression du besoin de mises à jour' }] },
    { id: 'wsp-q12', type: 'multi', difficulty: 2, skills: ['d-srv-hardening'], prompt: 'Quelles pratiques durcissent un serveur Windows ?', options: [{ id: 'a', text: 'N’installer que les rôles nécessaires' }, { id: 'b', text: 'Appliquer une référence de configuration (CIS, base Microsoft)' }, { id: 'c', text: 'Utiliser LAPS et des comptes de service gérés (gMSA)' }, { id: 'd', text: 'Partager le mot de passe administrateur entre tous les serveurs' }] },
    { id: 'wsp-q13', type: 'truefalse', difficulty: 2, skills: ['d-srv-hardening'], prompt: 'Un contrôleur de domaine et un serveur de fichiers ordinaire peuvent partager les mêmes comptes d’administration sans risque.' },
    { id: 'wsp-q14', type: 'single', difficulty: 2, skills: ['d-srv-hardening'], prompt: 'Pourquoi isoler (hors ligne ou immuables) les sauvegardes ?', options: [{ id: 'a', text: 'Parce que les rançongiciels cherchent à chiffrer aussi les sauvegardes accessibles' }, { id: 'b', text: 'Pour les rendre plus rapides' }, { id: 'c', text: 'Parce que Windows l’impose' }, { id: 'd', text: 'Pour économiser de l’espace disque' }] },
    { id: 'wsp-q15', type: 'open', difficulty: 3, skills: ['d-srv-hardening', 'd-infra-services'], prompt: 'Vous mettez en service un contrôleur de domaine hébergeant le DNS. Décrivez les mesures de durcissement, la configuration DNS sécurisée et la stratégie de sauvegarde.' },
    { id: 'wsp-q16', type: 'short', difficulty: 2, skills: ['d-srv-hardening'], prompt: 'Comment appelle-t-on une sauvegarde jamais testée en restauration, du point de vue de sa fiabilité réelle ? (en une courte phrase ou un mot : ce n’est pas une vraie …)', placeholder: 'sauvegarde' },
  ],
  resources: [
    { title: 'Active Directory Certificate Services', source: 'Microsoft Learn', url: 'https://learn.microsoft.com/windows-server/identity/ad-cs/active-directory-certificate-services-overview' },
    { title: 'DNS Policies / Securing DNS', source: 'Microsoft Learn', url: 'https://learn.microsoft.com/windows-server/networking/dns/dns-top' },
    { title: 'Windows Server security documentation', source: 'Microsoft Learn', url: 'https://learn.microsoft.com/windows-server/security/security-and-assurance' },
    { title: 'CIS Benchmarks', source: 'Center for Internet Security', url: 'https://www.cisecurity.org/cis-benchmarks' },
    { title: 'Recommandations relatives à l’administration sécurisée des SI', source: 'ANSSI', url: 'https://cyber.gouv.fr/publications/recommandations-relatives-ladministration-securisee-des-si' },
  ],
};
