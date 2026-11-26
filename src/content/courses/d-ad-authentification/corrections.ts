// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "d-ad-authentification",
  questions: {
    "ad-q1": {
      "type": "single",
      "correct": "d",
      "explanation": "Le contrôleur de domaine héberge NTDS.dit, joue le rôle de KDC Kerberos et valide les authentifications NTLM. C’est l’actif le plus critique du système d’information (tier 0).",
      "whyWrong": {
        "c": "Un serveur de fichiers stocke des documents, pas l’annuaire.",
        "b": "Le DHCP attribue des adresses.",
        "a": "Le proxy filtre le trafic web."
      }
    },
    "ad-q2": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Une GPO peut déployer des scripts de démarrage, des tâches planifiées ou des logiciels. Les droits de modification sur les GPO (et sur les OU auxquelles elles sont liées) font partie des chemins d’attaque à auditer."
    },
    "ad-q3": {
      "type": "short",
      "accepted": [
        "ntds.dit",
        "ntds"
      ],
      "explanation": "NTDS.dit contient les objets de l’annuaire et les empreintes des mots de passe. Son extraction (copie d’ombre, DCSync) équivaut à la compromission totale du domaine."
    },
    "ad-q4": {
      "type": "single",
      "correct": "a",
      "explanation": "Le TGT est chiffré avec la clé du compte krbtgt, connue uniquement des KDC. Le client ne peut pas le lire ; il le présente au KDC pour obtenir des tickets de service.",
      "whyWrong": {
        "c": "La clé de l’utilisateur sert à la pré-authentification et à chiffrer la clé de session renvoyée, pas le TGT lui-même.",
        "d": "Le TGT n’est pas chiffré avec la clé de l’Administrateur du domaine.",
        "b": "La clé du compte machine ne chiffre pas le TGT : celle-ci appartient au compte krbtgt."
      }
    },
    "ad-q5": {
      "type": "single",
      "correct": "b",
      "explanation": "Le ticket de service est chiffré avec la clé du compte associé au SPN. C’est ce qui rend le Kerberoasting possible : l’attaquant obtient légitimement le ticket, puis tente de retrouver hors ligne le mot de passe du compte de service.",
      "whyWrong": {
        "c": "krbtgt chiffre le TGT, pas les tickets de service.",
        "a": "Le ticket de service n’est pas chiffré avec la clé de l’utilisateur demandeur : il l’est avec celle du compte du service.",
        "d": "Les tickets sont toujours chiffrés."
      }
    },
    "ad-q6": {
      "type": "truefalse",
      "correct": true,
      "explanation": "La réponse NTLM est calculée à partir de l’empreinte NT, pas du mot de passe. Posséder l’empreinte suffit : c’est le pass-the-hash. Protected Users, Credential Guard et la réduction de NTLM limitent ce risque."
    },
    "ad-q7": {
      "type": "short",
      "accepted": [
        "4769"
      ],
      "explanation": "4768 : demande de TGT (AS). 4769 : demande de ticket de service (TGS). 4771 : échec de pré-authentification Kerberos."
    },
    "ad-q8": {
      "type": "single",
      "correct": "c",
      "explanation": "Beaucoup de comptes différents, un essai chacun : c’est la signature de la pulvérisation, qui évite le verrouillage. Le 4624 final indique qu’un compte a cédé ; il faut le réinitialiser et analyser son activité.",
      "whyWrong": {
        "b": "La force brute cible un même compte avec de nombreux mots de passe.",
        "d": "Le Kerberoasting produit des 4769, pas des 4625.",
        "a": "Une réplication ne génère pas d’échecs d’authentification en série."
      }
    },
    "ad-q9": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Le ticket est cassable hors ligne : plus le mot de passe est faible et ancien, plus l’attaque réussit. RC4 est plus rapide à casser qu’AES.",
      "whyWrong": {
        "b": "Un gMSA peut toujours être ciblé par le Kerberoasting (le ticket de service reste demandable), mais son mot de passe aléatoire de ≈ 240 octets, renouvelé automatiquement, rend le cassage hors ligne irréaliste : ce n’est donc pas une condition qui rend l’attaque efficace, mais une mesure qui la neutralise en pratique."
      }
    },
    "ad-q10": {
      "type": "single",
      "correct": "b",
      "explanation": "Avec l’empreinte de krbtgt, un attaquant peut forger un TGT pour n’importe quel compte, avec n’importe quels groupes et une durée arbitraire. Seul le renouvellement (double) du mot de passe de krbtgt invalide ces tickets.",
      "whyWrong": {
        "c": "Un ticket de service obtenu par Kerberoasting est cassé hors ligne, pas forgé.",
        "d": "Un jeton web n’a aucun lien avec Kerberos.",
        "a": "Un certificat racine relève de la PKI, pas de Kerberos."
      }
    },
    "ad-q11": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "LAPS empêche la réutilisation d’un mot de passe local, le cloisonnement des tiers empêche l’exposition des comptes privilégiés, et le filtrage SMB entre postes supprime le principal canal latéral.",
      "whyWrong": {
        "c": "Un mot de passe local identique partout permet de rebondir sur tous les postes dès qu’un seul est compromis."
      }
    },
    "ad-q12": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Le KDC accepte encore les tickets chiffrés avec le mot de passe précédent de krbtgt. Il faut le renouveler deux fois, en respectant un délai suffisant pour la réplication et l’expiration des tickets légitimes."
    },
    "ad-q13": {
      "type": "short",
      "accepted": [
        "4740"
      ],
      "explanation": "L’événement 4740 est journalisé sur le DC émulateur PDC lorsqu’un compte est verrouillé. Des verrouillages en série signalent souvent une force brute ou un ancien mot de passe en cache."
    },
    "ad-q14": {
      "type": "open",
      "model": "Chaîne : 1) un poste est compromis (hameçonnage) ; 2) l’attaquant élève ses privilèges localement et extrait les secrets de LSASS ; 3) grâce au mot de passe d’administrateur local identique partout, il rebondit sur d’autres postes (pass-the-hash) ; 4) sur l’un d’eux, un Admin du domaine s’est connecté pour du support : ses secrets sont récupérés ; 5) avec ces droits, l’attaquant extrait NTDS.dit (DCSync) et contrôle le domaine. Mesures : modèle en tiers (aucun compte tier 0 sur un poste), Windows LAPS, et Protected Users ou Credential Guard pour protéger les secrets ; filtrer SMB entre postes en complément.",
      "criteria": [
        "La chaîne poste → identifiants → rebond → compte privilégié → DC est décrite.",
        "Le rôle des secrets en mémoire (LSASS) est mentionné.",
        "Le modèle en tiers et LAPS figurent parmi les mesures.",
        "Une troisième mesure pertinente est proposée."
      ],
      "explanation": "Cette chaîne est décrite dans la quasi-totalité des rapports d’incidents par rançongiciel. Chaque mesure en casse un maillon."
    },
    "ad-q15": {
      "type": "open",
      "model": "Le TGT est une « carte d’identité » délivrée une fois par le KDC après l’ouverture de session ; il sert uniquement à demander d’autres tickets au KDC. Le ticket de service est un « billet d’entrée » pour un service précis, délivré en échange du TGT. Le ticket de service est chiffré avec la clé du compte du service : le serveur peut donc le déchiffrer et vérifier lui-même son authenticité et l’identité de l’utilisateur, sans contacter le DC.",
      "criteria": [
        "Le TGT est présenté comme servant à obtenir d’autres tickets auprès du KDC.",
        "Le ticket de service est associé à un service précis.",
        "Le chiffrement par la clé du service explique l’absence d’appel au DC."
      ],
      "explanation": "Cette autonomie du serveur explique aussi les « silver tickets » : avec la clé d’un compte de service, on forge des tickets acceptés par ce service sans aucune trace sur le DC."
    },
    "ad-q16": {
      "type": "single",
      "correct": "d",
      "explanation": "Les membres de Protected Users ne peuvent utiliser ni NTLM, ni DES, ni RC4, ni la délégation ; leurs TGT ont une durée de vie réduite. Il est recommandé pour tous les comptes d’administration humains.",
      "whyWrong": {
        "c": "Utilisateurs du domaine regroupe tous les comptes, sans restriction particulière.",
        "a": "Ce groupe donne des droits de sauvegarde et de restauration.",
        "b": "Ce groupe autorise l’accès RDP, il ne restreint rien."
      }
    },
    "ad-q17": {
      "type": "single",
      "correct": "a",
      "explanation": "Un gMSA a un SPN et reçoit donc un ticket de service comme tout compte de service : l’attaque est techniquement possible. Ce qui la neutralise, c’est le mot de passe aléatoire (≈ 240 octets) renouvelé automatiquement, qui rend le cassage hors ligne irréaliste. La protection vient du secret, pas d’une immunité à la technique.",
      "whyWrong": {
        "b": "Un gMSA reçoit bien un ticket de service : il porte un SPN.",
        "d": "Désactiver RC4 renforce la défense, mais même en RC4 le mot de passe d’un gMSA reste incassable en pratique.",
        "c": "Le Kerberoasting vise précisément les comptes de service porteurs d’un SPN."
      }
    },
    "ad-q18": {
      "type": "single",
      "correct": "c",
      "explanation": "Une forêt regroupe un ou plusieurs domaines liés par un schéma commun et des relations d’approbation. La forêt, et non le domaine, constitue la vraie frontière de sécurité : un administrateur de l’un peut, sous conditions, compromettre les autres.",
      "whyWrong": {
        "b": "Un site regroupe des contrôleurs selon leur localisation, ce qui est autre chose.",
        "a": "Une forêt n’est pas une sauvegarde.",
        "d": "Une forêt n’est pas une liste d’utilisateurs : elle regroupe des domaines."
      }
    },
    "ad-q19": {
      "type": "single",
      "correct": "d",
      "explanation": "Une OU est un conteneur : on y range des comptes et des ordinateurs, on lui lie des GPO et on y délègue des droits à une équipe. Les droits mal délégués sur une OU sont un chemin d’attaque classique.",
      "whyWrong": {
        "c": "La réplication n’utilise pas les OU pour chiffrer.",
        "b": "Les empreintes sont stockées dans NTDS.dit.",
        "a": "Une approbation entre forêts est une relation distincte, sans lien avec une OU."
      }
    },
    "ad-q20": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Par défaut, un compte ordinaire peut énumérer utilisateurs, groupes, ordinateurs, SPN et appartenances. Un attaquant qui contrôle un seul compte dispose donc d’une carte du domaine, d’où l’importance de limiter les droits et de surveiller les requêtes massives."
    },
    "ad-q21": {
      "type": "short",
      "accepted": [
        "636"
      ],
      "explanation": "LDAP en clair utilise le port 389 ; LDAPS utilise le 636 et protège les échanges (dont les authentifications) par TLS. On impose la signature ou le chiffrement LDAP pour limiter les attaques par relais."
    },
    "ad-q22": {
      "type": "single",
      "correct": "c",
      "explanation": "Le client envoie un horodatage chiffré avec sa clé : le KDC ne délivre le TGT qu’à celui qui la connaît. Sans pré-authentification (réglage dangereux), n’importe qui peut obtenir une réponse chiffrée avec la clé du compte et la casser hors ligne : c’est l’AS-REP roasting.",
      "whyWrong": {
        "d": "C’est l’authentification mutuelle, une autre notion.",
        "b": "La pré-authentification Kerberos ne passe pas par TLS : elle repose sur une valeur chiffrée par la clé du client.",
        "a": "La pré-authentification n’est pas un second facteur."
      }
    },
    "ad-q23": {
      "type": "short",
      "accepted": [
        "5",
        "cinq"
      ],
      "explanation": "Kerberos utilise des horodatages pour empêcher le rejeu : au-delà de cinq minutes d’écart, l’authentification échoue. La synchronisation de l’heure (NTP, contrôleur de domaine source) fait partie du bon fonctionnement et de la supervision."
    },
    "ad-q24": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Kerberos est le protocole par défaut ; NTLM sert de repli (accès par adresse IP, systèmes anciens, services sans SPN). Réduire NTLM, après audit, supprime une grande part des attaques par relais et par réutilisation d’empreintes."
    },
    "ad-q25": {
      "type": "single",
      "correct": "b",
      "explanation": "Pour un compte sans pré-authentification, un attaquant obtient une réponse AS-REP chiffrée avec la clé du compte, sans connaître son mot de passe, et la casse hors ligne. On évite l’attaque en exigeant la pré-authentification et en inventoriant ces comptes.",
      "whyWrong": {
        "c": "C’est le Kerberoasting, qui vise les comptes avec SPN.",
        "d": "La synchronisation d’horloge n’est pas ce que vise l’AS-REP roasting.",
        "a": "Protected Users renforce au contraire les comptes."
      }
    },
    "ad-q26": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Dans les trois premiers cas, l’attaquant possède un secret dérivé (empreinte, ticket, clé) et s’authentifie sans le mot de passe. La pulvérisation, elle, devine des mots de passe : elle ne repose sur aucun secret volé.",
      "whyWrong": {
        "d": "La pulvérisation est une attaque par deviner, pas par réutilisation d’un secret volé."
      }
    },
    "ad-q27": {
      "type": "single",
      "correct": "a",
      "explanation": "Avec la clé d’un compte de service (obtenue par Kerberoasting par exemple), l’attaquant fabrique des tickets acceptés par ce service seul, sans que le DC soit sollicité : très discret. Un golden ticket, lui, est un TGT forgé avec la clé de krbtgt.",
      "whyWrong": {
        "d": "Un TGT se forge avec la clé de krbtgt, pas celle d’un utilisateur.",
        "c": "L’expiration est vérifiée ; ce n’est pas un type d’attaque.",
        "b": "Un ticket relayé par approbation entre forêts relève d’une autre attaque, pas du silver ticket."
      }
    },
    "ad-q28": {
      "type": "single",
      "correct": "b",
      "explanation": "Le type 3 est une session réseau (accès à un partage, SMB, WinRM). Du NTLM en type 3 depuis des postes qui n’en émettent pas d’ordinaire est un indice de pass-the-hash. Le type 2 est interactif, le type 5 un service, le type 10 un accès RDP.",
      "whyWrong": {
        "c": "C’est le type 2.",
        "a": "C’est le type 5.",
        "d": "C’est le type 7."
      }
    },
    "ad-q29": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Le code 0x18 du 4771 correspond à une pré-authentification refusée : le mot de passe fourni ne correspond pas. Une rafale de ces événements sur des comptes différents depuis une même source est la signature d’une pulvérisation de mots de passe contre Kerberos."
    },
    "ad-q30": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Les ajouts à des groupes privilégiés, la création de comptes et les sessions qui reçoivent des privilèges spéciaux sont des signaux à superviser. Une fermeture de session est un événement banal.",
      "whyWrong": {
        "c": "Une fermeture de session est un événement quotidien, sans lien direct avec une élévation."
      }
    },
    "ad-q31": {
      "type": "single",
      "correct": "d",
      "explanation": "Avec l’audit « accès au service d’annuaire » activé, l’événement 4662 consigne l’usage des droits de réplication. Une réplication demandée par un compte non contrôleur, ou par une machine qui n’en est pas un, est un indice fort de DCSync ; on le complète par la supervision du trafic de réplication.",
      "whyWrong": {
        "a": "4740 signale un verrouillage de compte.",
        "b": "4769 concerne les tickets de service.",
        "c": "4625 est un échec de connexion."
      }
    },
    "ad-q32": {
      "type": "short",
      "accepted": [
        "ORADAD",
        "oradad"
      ],
      "explanation": "ORADAD collecte des informations de l’annuaire pour que l’ANSSI ou l’organisation puisse en évaluer la sécurité : comptes privilégiés, délégations, ACL, configuration. Des outils communautaires comme PingCastle offrent une notation rapide."
    },
    "ad-q33": {
      "type": "single",
      "correct": "c",
      "explanation": "DCSync utilise le protocole de réplication : un compte disposant des droits de réplication demande à un contrôleur les secrets de n’importe quel compte, sans toucher à son disque. Ces droits sont réservés aux contrôleurs et à quelques comptes de très haut niveau ; tout autre bénéficiaire est une alerte.",
      "whyWrong": {
        "d": "C’est de la synchronisation horaire, sans lien.",
        "a": "La réplication légitime ne vise pas à extraire des secrets.",
        "b": "DCSync n’est pas un outil de comparaison de GPO : il imite la réplication d’un contrôleur."
      }
    },
    "ad-q34": {
      "type": "single",
      "correct": "a",
      "explanation": "Avec la délégation non contrainte, le serveur garde le TGT de chaque utilisateur qui se connecte : s’il est compromis, l’attaquant réutilise ces TGT, y compris ceux d’administrateurs. On la remplace par une délégation contrainte ou fondée sur les ressources, et on protège les comptes sensibles.",
      "whyWrong": {
        "d": "La pré-authentification est un réglage de compte distinct.",
        "c": "La délégation non contrainte ne force pas l’usage de NTLM.",
        "b": "Elle ne concerne pas les GPO."
      }
    },
    "ad-q35": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Des droits mal délégués sur un objet (écriture sur un groupe, contrôle d’une OU, modification d’une GPO, réinitialisation du mot de passe d’un compte privilégié) permettent d’arriver au niveau supérieur sans appartenir à un groupe privilégié. D’où l’audit des droits, et pas seulement des appartenances."
    },
    "ad-q36": {
      "type": "single",
      "correct": "b",
      "explanation": "Un graphe relie appartenances, droits, sessions et délégations. Il montre qu’un utilisateur ordinaire atteint les Admins du domaine en cinq étapes. Les défenseurs coupent ces chemins avant qu’un attaquant les emprunte ; il ne remplace pas la surveillance.",
      "whyWrong": {
        "d": "Il révèle des faiblesses de configuration ; il ne supervise pas les événements.",
        "c": "Un graphe de relations ne chiffre aucune approbation : il les cartographie.",
        "a": "Il n’agit pas sur les mots de passe."
      }
    },
    "ad-q37": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Interdire la délégation pour les comptes sensibles, restreindre les services vers lesquels un serveur peut déléguer et utiliser Protected Users limitent la valeur d’un serveur compromis. Généraliser la délégation non contrainte multiplie au contraire les serveurs qui conservent des TGT.",
      "whyWrong": {
        "c": "Chaque serveur ainsi configuré devient une cible riche en TGT."
      }
    },
    "ad-q38": {
      "type": "short",
      "accepted": [
        "admins du domaine",
        "administrateurs du domaine",
        "domain admins"
      ],
      "explanation": "Les membres du groupe Admins du domaine administrent tous les contrôleurs et les machines du domaine. Ses membres doivent être très peu nombreux, utiliser des comptes dédiés et ne jamais ouvrir de session sur un poste ordinaire."
    },
    "ad-q39": {
      "type": "single",
      "correct": "a",
      "explanation": "« GenericAll » équivaut à un contrôle total de l’objet : le compte peut modifier l’appartenance du groupe, donc s’y ajouter. Un tel droit sur un objet sensible doit être retiré et surveillé ; il relève du contrôle des droits (ACL), pas de l’appartenance aux groupes.",
      "whyWrong": {
        "d": "Lire la liste n’exigerait pas un contrôle total.",
        "b": "Ce droit ne retire rien à l’authentification.",
        "c": "Un contrôle total permet bien plus que consulter."
      }
    },
    "ad-q40": {
      "type": "open",
      "model": "Un membre du support peut modifier la GPO pour déployer une tâche planifiée ou un script exécuté en SYSTEM sur tous les serveurs de l’OU : c’est une élévation de privilèges vers un niveau bien supérieur à celui du groupe, sans appartenir à un groupe privilégié. Pour le repérer : auditer les droits (ACL) des GPO et des OU avec ORADAD, PingCastle ou un graphe de relations ; rechercher les droits d’écriture accordés à des groupes ordinaires ; superviser les modifications de GPO (événement 5136, audit des objets d’annuaire) et les ajouts aux groupes. Pour corriger : retirer le droit d’écriture au groupe de support, réserver la modification des GPO à un petit groupe d’administration de niveau 0 ou 1 selon l’OU, déléguer ce qui est nécessaire par des droits ciblés, journaliser les changements et revoir régulièrement les délégations.",
      "criteria": [
        "Explique l’exécution de code sur les serveurs par modification de la GPO.",
        "Propose un audit des ACL (outil ou graphe) pour détecter ce type de droit à l’échelle du domaine.",
        "Propose de superviser les modifications de GPO.",
        "Propose de retirer le droit et de réserver la modification à un groupe restreint."
      ],
      "explanation": "Les droits sur les objets de l’annuaire créent des chemins d’attaque invisibles dans les listes de groupes : on les audite autant que les appartenances."
    }
  },
};
