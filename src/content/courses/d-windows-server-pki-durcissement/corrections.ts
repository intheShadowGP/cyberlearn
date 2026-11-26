// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "d-windows-server-pki-durcissement",
  questions: {
    "wsp-q1": {
      "type": "single",
      "correct": "a",
      "explanation": "Les postes localisent les contrôleurs de domaine via les enregistrements SRV du DNS. Un DNS détourné peut diriger les clients vers un faux contrôleur et intercepter ou relayer les authentifications.",
      "whyWrong": {
        "d": "Les mots de passe sont conservés (sous forme d’empreintes) dans l’annuaire, pas dans le DNS.",
        "b": "Le chiffrement des disques est le rôle de BitLocker.",
        "c": "Le DNS résout des noms ; il ne filtre aucun flux."
      }
    },
    "wsp-q2": {
      "type": "truefalse",
      "correct": true,
      "explanation": "La mise à jour dynamique sécurisée exige que la machine soit authentifiée dans le domaine et dispose des droits sur l’enregistrement, ce qui empêche une machine quelconque d’écraser un enregistrement existant."
    },
    "wsp-q3": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Restreindre les transferts de zone, autoriser le serveur DHCP dans AD et surveiller les modifications DNS sécurisent ces rôles.",
      "whyWrong": {
        "a": "Ouvrir les transferts de zone à tous divulgue la cartographie interne : c’est l’inverse d’une mesure de sécurité."
      }
    },
    "wsp-q4": {
      "type": "single",
      "correct": "c",
      "explanation": "La racine est le point de confiance de toute la PKI. Maintenue hors ligne, elle ne signe que les autorités intermédiaires et devient très difficile à compromettre, ce qui protège l’ensemble de la chaîne.",
      "whyWrong": {
        "a": "L’objectif n’est pas l’économie d’énergie : c’est la protection de la racine de confiance.",
        "b": "Elle sert à signer les autorités intermédiaires, lors de leur création et de leur renouvellement.",
        "d": "Ce sont les autorités émettrices, en ligne, qui délivrent les certificats."
      }
    },
    "wsp-q5": {
      "type": "short",
      "accepted": [
        "modèle de certificat",
        "modele de certificat",
        "modèle",
        "modele",
        "template",
        "certificate template"
      ],
      "explanation": "Le modèle de certificat définit l’usage, la durée, qui peut s’inscrire et si le demandeur choisit le sujet. C’est l’élément central à auditer dans une PKI AD CS."
    },
    "wsp-q6": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Un certificat d’authentification lie une identité à une clé. Émis à tort au nom d’un autre compte, il permet de s’authentifier comme ce compte, d’où le risque majeur si un modèle laisse choisir le sujet."
    },
    "wsp-q7": {
      "type": "single",
      "correct": "b",
      "explanation": "Si le demandeur fournit lui-même le sujet d’un certificat d’authentification, il peut demander un certificat au nom d’un autre utilisateur (par exemple un administrateur) et usurper son identité. Les autres réglages cités sont sains.",
      "whyWrong": {
        "d": "Une durée d’un an est courante et raisonnable.",
        "a": "Publier la révocation est une bonne pratique.",
        "c": "L’approbation réduit le risque, elle ne l’augmente pas."
      }
    },
    "wsp-q8": {
      "type": "truefalse",
      "correct": false,
      "explanation": "La révocation n’a d’effet que si les clients vérifient l’état de révocation (CRL ou OCSP). Si la liste est expirée ou le point de distribution injoignable, un certificat révoqué peut rester accepté."
    },
    "wsp-q9": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Sujet libre pour l’authentification, droits d’inscription trop larges et émission sans approbation de certificats privilégiés sont les configurations à risque à auditer.",
      "whyWrong": {
        "b": "L’apparence de l’interface n’a aucun effet sur la sécurité."
      }
    },
    "wsp-q10": {
      "type": "open",
      "model": "Une PKI délivre les certificats d’authentification de l’organisation : un certificat émis à tort permet de s’authentifier comme n’importe quel utilisateur, administrateur compris, sans connaître son mot de passe, et parfois de façon durable (le certificat reste valable jusqu’à révocation). Compromettre ou détourner l’autorité émettrice revient donc à pouvoir usurper les identités du domaine, comme la compromission d’AD lui-même. Vérifications défensives : inventorier les modèles publiés et désactiver ou corriger ceux qui laissent le demandeur choisir le sujet pour un usage d’authentification ; restreindre les droits d’inscription et exiger l’approbation pour les certificats sensibles ; garder la racine hors ligne ; vérifier que la révocation (CRL/OCSP) est publiée et joignable ; surveiller les émissions de l’autorité.",
      "criteria": [
        "Le lien entre certificat d’authentification émis à tort et usurpation d’identité est expliqué.",
        "Le parallèle avec une compromission d’AD est fait.",
        "Au moins deux vérifications défensives concrètes sont données."
      ],
      "explanation": "C’est pourquoi les PKI internes font aujourd’hui l’objet d’audits spécifiques au même titre que les contrôleurs de domaine."
    },
    "wsp-q11": {
      "type": "single",
      "correct": "d",
      "explanation": "Server Core installe moins de composants (pas d’interface graphique) : moins de code exposé, donc moins de vulnérabilités et moins de correctifs à appliquer. L’administration se fait à distance et en PowerShell.",
      "whyWrong": {
        "a": "Server Core n’ajoute pas de protection : il retire des composants.",
        "c": "Server Core ne chiffre pas le trafic réseau : il réduit le nombre de composants installés.",
        "b": "Il reste soumis aux mises à jour, simplement moins nombreuses."
      }
    },
    "wsp-q12": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Rôles minimaux, référence de configuration et comptes maîtrisés (LAPS, gMSA) sont des piliers du durcissement.",
      "whyWrong": {
        "d": "Un mot de passe administrateur commun à tous les serveurs permet, dès qu’un serveur tombe, de compromettre tous les autres."
      }
    },
    "wsp-q13": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Un contrôleur de domaine relève du niveau d’administration le plus élevé. Partager ses comptes avec un serveur ordinaire, plus exposé, permettrait de passer de ce dernier au contrôleur : les niveaux doivent rester séparés."
    },
    "wsp-q14": {
      "type": "single",
      "correct": "b",
      "explanation": "Les rançongiciels cherchent à chiffrer ou supprimer les sauvegardes accessibles pour empêcher la restauration. Des sauvegardes hors ligne ou immuables, aux accès restreints, survivent à l’attaque.",
      "whyWrong": {
        "d": "L’isolement ne change pas la vitesse de restauration.",
        "c": "Aucune obligation de ce type n’existe dans Windows.",
        "a": "L’isolement augmente plutôt les besoins de stockage."
      }
    },
    "wsp-q15": {
      "type": "open",
      "model": "Durcissement du contrôleur de domaine (niveau d’administration le plus élevé) : installation en Server Core, rôles limités, référence CIS/Microsoft par GPO, pare-feu actif, administration via un poste et un réseau dédiés, comptes d’administration non partagés avec d’autres serveurs, LAPS pour l’administrateur local, correctifs rapides. DNS : zone intégrée à AD, mises à jour dynamiques sécurisées uniquement, transferts de zone restreints aux serveurs DNS légitimes, surveillance des modifications. Sauvegarde : sauvegarde de l’état système permettant une restauration faisant autorité, copies isolées (hors ligne ou immuables) et à accès restreint pour résister aux rançongiciels, et tests de restauration réguliers.",
      "criteria": [
        "Des mesures de durcissement propres au rôle sensible sont données (Server Core, séparation des niveaux, références).",
        "La configuration DNS sécurisée (mises à jour sécurisées, transferts restreints) est décrite.",
        "Une sauvegarde isolée/immuable et testée est proposée."
      ],
      "explanation": "Contrôleur de domaine, DNS et sauvegarde forment un tout : la perte ou la corruption de l’un met en péril la restauration de l’ensemble."
    },
    "wsp-q16": {
      "type": "short",
      "accepted": [
        "sauvegarde",
        "une sauvegarde",
        "vraie sauvegarde"
      ],
      "explanation": "Une sauvegarde jamais testée en restauration n’est pas une vraie sauvegarde : rien ne garantit qu’elle est exploitable le jour de l’incident. Les tests de restauration font partie de la stratégie."
    },
    "wsp-q17": {
      "type": "single",
      "correct": "a",
      "explanation": "Les enregistrements SRV (par exemple `_ldap._tcp.dc._msdcs`) indiquent quels serveurs offrent un service donné. Un contrôleur de domaine les publie lui-même ; un attaquant qui peut en créer redirige les authentifications.",
      "whyWrong": {
        "c": "MX désigne les serveurs de messagerie.",
        "b": "PTR fait la résolution inverse.",
        "d": "CNAME est un alias, sans notion de service."
      }
    },
    "wsp-q18": {
      "type": "single",
      "correct": "d",
      "explanation": "Sans authentification, un poste ou un appareil quelconque peut inscrire ou remplacer un enregistrement, et ainsi détourner un nom vers une machine qu’il contrôle. La mise à jour sécurisée l’interdit.",
      "whyWrong": {
        "a": "Le risque ne concerne pas la vitesse mais l’intégrité des enregistrements.",
        "c": "La réplication n’est pas concernée.",
        "b": "Une zone non sécurisée accepte n’importe quel client ; elle ne refuse pas les requêtes des postes non membres."
      }
    },
    "wsp-q19": {
      "type": "truefalse",
      "correct": false,
      "explanation": "L’autorisation ne concerne que les serveurs DHCP Windows : un serveur non Windows, ou un équipement branché sur le réseau, peut toujours répondre. La parade est complémentaire : DHCP snooping sur les commutateurs et surveillance des réponses."
    },
    "wsp-q20": {
      "type": "short",
      "accepted": [
        "AXFR",
        "axfr"
      ],
      "explanation": "AXFR est le transfert complet de zone. Non restreint, il livre à qui le demande tous les noms de la zone, donc la cartographie interne. On le limite aux serveurs DNS secondaires légitimes."
    },
    "wsp-q21": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Les mises à jour sécurisées, des droits de modification restreints et le blocage des noms spéciaux (WPAD, ISATAP) empêchent un utilisateur d’imposer un proxy ou une passerelle. Donner à tous le droit de créer des enregistrements ouvre la voie au détournement.",
      "whyWrong": {
        "b": "C’est la situation à éviter : un utilisateur pourrait créer l’enregistrement WPAD de son choix."
      }
    },
    "wsp-q22": {
      "type": "single",
      "correct": "c",
      "explanation": "L’autorité émettrice est en ligne, reçoit les demandes, applique les modèles et signe les certificats. Sa propre autorisation vient de la racine, qui reste hors ligne. On peut la révoquer et la remplacer sans changer la racine déployée partout.",
      "whyWrong": {
        "a": "La racine ne se conserve pas dans l’émettrice.",
        "d": "Le DNS est un autre service.",
        "b": "Une PKI ne stocke pas de mots de passe."
      }
    },
    "wsp-q23": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Avec la clé de l’autorité, un attaquant peut fabriquer des certificats valides à volonté, y compris datés du passé. Il faut révoquer l’autorité, réémettre tous ses certificats et enquêter : la confiance dans toute sa branche est perdue."
    },
    "wsp-q24": {
      "type": "short",
      "accepted": [
        "OCSP",
        "ocsp"
      ],
      "explanation": "OCSP (Online Certificate Status Protocol) répond à la question « ce certificat est-il révoqué ? » pour un certificat précis, sans télécharger toute la liste (CRL). Son répondeur doit rester disponible, sinon les clients ne peuvent pas conclure."
    },
    "wsp-q25": {
      "type": "single",
      "correct": "a",
      "explanation": "La racine est approuvée par tous les clients : la changer demande de la redéployer partout. En déléguant l’émission à une autorité intermédiaire, une compromission se traite en révoquant cette autorité et en en créant une nouvelle sous la même racine.",
      "whyWrong": {
        "c": "La séparation ne change pas la durée d’émission.",
        "d": "La racine peut signer des certificats d’autorités intermédiaires.",
        "b": "Il n’existe pas un tel refus général."
      }
    },
    "wsp-q26": {
      "type": "single",
      "correct": "d",
      "explanation": "Un certificat wildcard est copié sur plusieurs serveurs : la clé est plus exposée, et sa fuite permet à un attaquant de se faire passer pour n’importe quel sous-domaine. On préfère des certificats distincts, à durée courte, quand c’est possible.",
      "whyWrong": {
        "a": "Un wildcard se révoque comme les autres.",
        "c": "C’est l’inverse : il sert justement sur plusieurs serveurs.",
        "b": "Un certificat wildcard n’expire pas plus vite que les autres."
      }
    },
    "wsp-q27": {
      "type": "single",
      "correct": "c",
      "explanation": "Le SAN liste les identités couvertes : noms DNS pour un serveur, adresse de courriel ou nom d’utilisateur (UPN) pour une personne. Pour un certificat d’authentification, un SAN fourni par le demandeur et accepté par l’autorité permet de se faire passer pour un autre compte.",
      "whyWrong": {
        "b": "La date de fin de validité est un autre champ.",
        "d": "Le SAN ne chiffre pas la clé privée : il liste les noms pour lesquels le certificat est valide.",
        "a": "Le point de distribution de la révocation est une autre extension."
      }
    },
    "wsp-q28": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Un certificat expiré est rejeté par les clients : le site, le VPN ou l’authentification qu’il protège cesse de fonctionner. Un inventaire, des alertes avant l’échéance et un renouvellement automatique évitent ces pannes."
    },
    "wsp-q29": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "L’inventaire évite les pannes, les clés non exportables (stockées par exemple dans le TPM) empêchent leur vol, et les durées courtes limitent la fenêtre d’abus. Exporter toutes les clés multiplie au contraire les copies à protéger.",
      "whyWrong": {
        "c": "Chaque copie d’une clé privée est une occasion de fuite."
      }
    },
    "wsp-q30": {
      "type": "single",
      "correct": "b",
      "explanation": "Avec le mappage fort, le contrôleur de domaine exige que le certificat contienne ou soit associé à l’identifiant de sécurité (SID) du compte. Un certificat obtenu au nom d’un autre utilisateur ne passe plus l’authentification.",
      "whyWrong": {
        "a": "Un renouvellement fréquent ne vérifie pas l’identité.",
        "d": "Chiffrer le certificat avec le mot de passe de l’utilisateur ne prouve pas qu’il correspond au compte.",
        "c": "Supprimer le nom alternatif ne résout pas la correspondance avec le compte."
      }
    },
    "wsp-q31": {
      "type": "single",
      "correct": "b",
      "explanation": "Un gMSA est un compte de service dont le mot de passe, long et aléatoire, est géré et renouvelé par Active Directory : personne ne le connaît ni ne le saisit. Il supprime les mots de passe de service faibles et jamais changés.",
      "whyWrong": {
        "c": "Le partage d’un compte administrateur est précisément ce qu’on évite.",
        "a": "Un mot de passe dans un script est une mauvaise pratique.",
        "d": "Un gMSA n’est pas un compte invité : son mot de passe est géré et renouvelé par l’annuaire."
      }
    },
    "wsp-q32": {
      "type": "single",
      "correct": "d",
      "explanation": "Les identifiants d’un compte restent en mémoire sur les machines où il ouvre une session. Séparer les niveaux (contrôleurs de domaine et PKI, serveurs, postes) évite qu’un attaquant qui compromet un poste y récupère un compte de domaine.",
      "whyWrong": {
        "c": "Il s’agit de sécurité, pas de répartition de charge.",
        "a": "Multiplier les comptes n’est pas l’objectif.",
        "b": "Le tiering ne limite pas les comptes administrateurs à un lieu géographique."
      }
    },
    "wsp-q33": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Un service inutile reste une surface d’attaque : le pare-feu n’empêche pas son exploitation depuis les flux autorisés ou depuis la machine elle-même, et il faut le tenir à jour. On désactive ou on désinstalle ce qui n’est pas nécessaire."
    },
    "wsp-q34": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "SMBv1, NTLM, LLMNR et NetBIOS sont des protocoles anciens exploités pour le relais d’authentification ou l’usurpation de noms. Kerberos est au contraire le protocole d’authentification à privilégier dans un domaine.",
      "whyWrong": {
        "b": "Kerberos est préférable à NTLM ; il ne doit pas être remplacé par un protocole plus ancien."
      }
    },
    "wsp-q35": {
      "type": "single",
      "correct": "c",
      "explanation": "L’événement 4887 indique que les services de certificats ont approuvé une demande et émis un certificat (4886 : demande reçue ; 4888 : demande refusée). Il faut activer l’audit de l’autorité et alerter sur les émissions anormales.",
      "whyWrong": {
        "a": "4624 est une ouverture de session réussie.",
        "d": "4698 est la création d’une tâche planifiée.",
        "b": "1102 est l’effacement du journal de sécurité."
      }
    },
    "wsp-q36": {
      "type": "single",
      "correct": "a",
      "explanation": "Après une restauration ordinaire, la réplication supprimerait les objets restaurés parce que les autres contrôleurs les croient supprimés. La restauration faisant autorité marque ces objets comme prioritaires et les propage.",
      "whyWrong": {
        "c": "Elle concerne l’annuaire, pas les fichiers des utilisateurs.",
        "d": "Une restauration faisant autorité ne copie pas la base vers un contrôleur étranger au domaine.",
        "b": "Elle ne réinitialise aucun mot de passe."
      }
    },
    "wsp-q37": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Un attaquant qui obtient les droits d’administration du domaine chercherait aussi à supprimer ou chiffrer les sauvegardes. Des comptes et des supports séparés (hors ligne ou immuables) préservent la capacité de restauration."
    },
    "wsp-q38": {
      "type": "short",
      "accepted": [
        "3",
        "trois"
      ],
      "explanation": "La règle 3-2-1 demande 3 copies des données, sur 2 supports différents, dont 1 hors site (ou hors ligne). Elle limite l’effet d’une panne, d’un sinistre ou d’un rançongiciel."
    },
    "wsp-q39": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Une reprise exige une sauvegarde saine, la réinitialisation des secrets que l’attaquant a pu copier (krbtgt, comptes privilégiés) et des procédures éprouvées. Attendre laisse l’attaquant poursuivre et empêche de contenir l’incident.",
      "whyWrong": {
        "d": "Attendre laisse à l’attaquant le temps d’agir : il faut contenir."
      }
    },
    "wsp-q40": {
      "type": "open",
      "model": "Les rançongiciels visent les sauvegardes avant de chiffrer les serveurs : un attaquant qui obtient le compte d’administration du domaine accède au partage de sauvegarde et le chiffre ou le supprime, ce qui supprime la possibilité de restaurer et renforce la pression de la rançon. La stratégie aurait dû prévoir des copies isolées (hors ligne ou immuables), à accès strictement séparé de l’administration courante (comptes dédiés, authentification forte), suivant la règle 3-2-1 ; des sauvegardes de l’état système des contrôleurs et des serveurs critiques ; une journalisation et une alerte sur les accès et suppressions de sauvegardes ; et des tests de restauration réguliers dans un environnement isolé, avec un plan de reprise écrit (ordre de reconstruction, réinitialisation des secrets, vérification de la PKI).",
      "criteria": [
        "Explique que les sauvegardes sont ciblées et pourquoi l’accès partagé était fatal.",
        "Propose des copies isolées (hors ligne, immuables) avec des accès séparés.",
        "Mentionne des tests de restauration et un plan de reprise écrit.",
        "Cite un élément de surveillance ou de journalisation des sauvegardes."
      ],
      "explanation": "Une sauvegarde accessible avec les mêmes droits que la production n’est qu’une copie de plus à chiffrer : la séparation des accès fait sa valeur."
    }
  },
};
