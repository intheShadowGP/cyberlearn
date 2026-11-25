// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "e-crypto-fondamentaux",
  questions: {
    "cfd-q1": {
      "type": "single",
      "correct": "b",
      "explanation": "Le chiffrement protège la confidentialité : sans la clé, le contenu est illisible. Il ne prouve pas l’identité de l’expéditeur et n’accélère pas l’envoi.",
      "whyWrong": {
        "a": "L’identité de l’expéditeur relève de la signature ou du certificat.",
        "c": "Le chiffrement n’empêche pas la suppression d’un message.",
        "d": "Le chiffrement n’accélère rien ; il ajoute un coût de calcul."
      }
    },
    "cfd-q2": {
      "type": "single",
      "correct": "c",
      "explanation": "Le texte clair est le message lisible ; le chiffrement le transforme, avec une clé, en texte chiffré, illisible sans la clé de déchiffrement.",
      "whyWrong": {
        "b": "C’est la définition du texte clair, pas du texte chiffré.",
        "a": "La clé est un paramètre distinct du texte chiffré.",
        "d": "Une copie conservée n’est pas forcément chiffrée."
      }
    },
    "cfd-q3": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Les algorithmes sûrs sont publics et examinés par de nombreux chercheurs. Si l’algorithme est connu et que le système reste sûr, seule la clé doit être protégée."
    },
    "cfd-q4": {
      "type": "short",
      "accepted": [
        "texte clair",
        "message clair",
        "clair",
        "le texte clair"
      ],
      "explanation": "Le texte clair (ou message clair) est la donnée lisible ; le chiffrement le transforme en texte chiffré."
    },
    "cfd-q5": {
      "type": "single",
      "correct": "d",
      "explanation": "L’intégrité répond à la question « la donnée a-t-elle changé ? ». On la contrôle avec une empreinte, un code d’authentification ou une signature. Chiffrer seul ne l’assure pas.",
      "whyWrong": {
        "c": "La confidentialité empêche la lecture, pas la modification.",
        "b": "La disponibilité concerne l’accès au service, pas l’altération.",
        "a": "Les journaux aident à enquêter, ils ne détectent pas une modification en chemin."
      }
    },
    "cfd-q6": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Un algorithme secret n’a pas été examiné par la communauté : ses failles restent cachées jusqu’à ce qu’un attaquant les trouve. Les standards publics, comme AES, résistent à des années d’attaques."
    },
    "cfd-q7": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Confidentialité, intégrité et authenticité sont les trois besoins que la cryptographie traite. La compression est une autre technique, qui n’a pas pour but la sécurité.",
      "whyWrong": {
        "b": "Réduire la taille des données n’a pas d’objectif de sécurité."
      }
    },
    "cfd-q8": {
      "type": "single",
      "correct": "a",
      "explanation": "En chiffrement symétrique, une seule clé secrète, partagée entre les correspondants, assure le chiffrement et le déchiffrement. AES en est l’exemple de référence.",
      "whyWrong": {
        "b": "La taille du texte chiffré n’est pas ce qui définit le chiffrement symétrique.",
        "d": "Deux clés liées, c’est le chiffrement asymétrique.",
        "c": "Appliquer la même transformation à chaque lettre décrit plutôt un chiffre simple, très faible."
      }
    },
    "cfd-q9": {
      "type": "short",
      "accepted": [
        "AES",
        "Advanced Encryption Standard"
      ],
      "explanation": "AES (Advanced Encryption Standard) est le standard de chiffrement symétrique, avec des clés de 128, 192 ou 256 bits."
    },
    "cfd-q10": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Les algorithmes symétriques comme AES sont souvent des centaines de fois plus rapides que RSA, et bénéficient d’accélération matérielle. On les emploie pour les données, et l’asymétrique pour l’échange de clés."
    },
    "cfd-q11": {
      "type": "single",
      "correct": "b",
      "explanation": "Si la clé voyage par le même canal que le message, un espion récupère les deux. L’échange de clés (asymétrique ou Diffie-Hellman) résout ce problème de distribution.",
      "whyWrong": {
        "d": "Le chiffrement symétrique est rapide, c’est son point fort.",
        "a": "AES est un standard public et très étudié.",
        "c": "Déchiffrer sans la clé est précisément ce que le système doit empêcher."
      }
    },
    "cfd-q12": {
      "type": "single",
      "correct": "d",
      "explanation": "Chaque bit supplémentaire double l’espace des clés possibles. De 56 à 128 bits, on passe de 2⁵⁶ à 2¹²⁸ clés, soit un facteur 2⁷² : c’est ce qui rend l’essai exhaustif irréaliste.",
      "whyWrong": {
        "b": "La croissance est exponentielle, pas de quelques pour cent.",
        "c": "La lenteur d’AES dépend peu de la taille de clé, et le gain de sécurité est réel.",
        "a": "Chaque bit compte, quel que soit le seuil."
      }
    },
    "cfd-q13": {
      "type": "short",
      "accepted": [
        "256",
        "256 bits"
      ],
      "explanation": "AES propose trois tailles de clé : 128, 192 et 256 bits. AES-256 est souvent choisi pour les données à protéger très longtemps."
    },
    "cfd-q14": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Un résultat identique révèle que les deux messages sont les mêmes et laisse voir des motifs. On ajoute une valeur propre à chaque message (nonce ou vecteur d’initialisation) pour que chaque chiffrement soit différent."
    },
    "cfd-q15": {
      "type": "single",
      "correct": "a",
      "explanation": "La clé publique peut être donnée à tout le monde ; la clé privée ne quitte jamais son propriétaire. Ce qui est chiffré avec l’une ne se déchiffre qu’avec l’autre.",
      "whyWrong": {
        "d": "Deux copies de la même clé, c’est du symétrique.",
        "b": "Une empreinte n’est pas une clé.",
        "c": "Les deux clés ne se distinguent pas par leur taille."
      }
    },
    "cfd-q16": {
      "type": "single",
      "correct": "c",
      "explanation": "On chiffre avec la clé publique du destinataire : seule Alice, avec sa clé privée, pourra déchiffrer. Si l’on chiffrait avec sa propre clé privée, tout le monde pourrait lire le résultat.",
      "whyWrong": {
        "d": "La clé privée d’Alice ne doit jamais être connue de vous.",
        "b": "Chiffrer avec votre clé privée ne protège pas : tout le monde dispose de votre clé publique.",
        "a": "Alice ne pourrait pas déchiffrer avec votre clé publique."
      }
    },
    "cfd-q17": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Une clé privée ne doit jamais être transmise : elle représente l’identité de son propriétaire. Un courriel peut être copié, conservé ou intercepté. Le collègue doit disposer de sa propre paire de clés."
    },
    "cfd-q18": {
      "type": "single",
      "correct": "b",
      "explanation": "C’est le chiffrement hybride : un échange asymétrique établit une clé de session, puis un algorithme symétrique chiffre les données, bien plus rapidement.",
      "whyWrong": {
        "c": "C’est l’inverse : l’asymétrique sert à l’échange de clés et à l’identité.",
        "d": "Chiffrer deux fois n’est pas le but ; chaque type a un rôle distinct.",
        "a": "Le choix ne dépend pas de la taille du message mais du rôle de chaque famille."
      }
    },
    "cfd-q19": {
      "type": "short",
      "accepted": [
        "RSA"
      ],
      "explanation": "RSA, du nom de ses inventeurs, s’appuie sur la difficulté de factoriser le produit de deux grands nombres premiers. On recommande des clés d’au moins 2 048 bits."
    },
    "cfd-q20": {
      "type": "multi",
      "correct": [
        "c",
        "d"
      ],
      "explanation": "RSA et les courbes elliptiques utilisent des paires de clés. AES est un chiffrement symétrique ; SHA-256 est une fonction de hachage, sans clé.",
      "whyWrong": {
        "b": "AES est symétrique : une seule clé secrète.",
        "a": "SHA-256 est une fonction de hachage, pas un chiffrement."
      }
    },
    "cfd-q21": {
      "type": "single",
      "correct": "a",
      "explanation": "Un échange de clés (asymétrique ou Diffie-Hellman) permet d’obtenir un secret commun sans le transmettre ; il reste à vérifier l’identité du correspondant. Envoyer la clé en clair, la cacher ou chiffrer avec sa clé privée n’apportent pas de confidentialité.",
      "whyWrong": {
        "c": "Une clé envoyée par courriel peut être lue par un tiers.",
        "b": "Un algorithme secret ne remplace pas une clé.",
        "d": "Chiffrer avec sa clé privée ne protège pas : tout le monde peut déchiffrer avec la clé publique."
      }
    },
    "cfd-q22": {
      "type": "single",
      "correct": "d",
      "explanation": "Une fonction de hachage transforme n’importe quelle donnée en une empreinte de longueur fixe (256 bits pour SHA-256). On ne peut pas retrouver la donnée à partir de l’empreinte.",
      "whyWrong": {
        "b": "Un hachage n’est pas réversible, contrairement à une compression.",
        "c": "Le hachage n’utilise pas de clé et ne chiffre rien.",
        "a": "Une empreinte n’est pas une clé de chiffrement."
      }
    },
    "cfd-q23": {
      "type": "truefalse",
      "correct": true,
      "explanation": "C’est l’effet d’avalanche : la plus petite modification change l’empreinte de façon imprévisible. C’est ce qui permet de détecter qu’une donnée a été altérée."
    },
    "cfd-q24": {
      "type": "single",
      "correct": "c",
      "explanation": "Seul le propriétaire de la clé privée peut produire la signature, mais tout le monde peut la vérifier avec la clé publique correspondante. C’est ce qui prouve l’origine.",
      "whyWrong": {
        "b": "Si la signature se faisait avec la clé publique, n’importe qui pourrait signer à la place de l’auteur.",
        "d": "Avec une clé partagée, on obtient un code d’authentification (HMAC), pas une signature numérique.",
        "a": "La clé publique du destinataire sert à lui chiffrer, pas à signer."
      }
    },
    "cfd-q25": {
      "type": "short",
      "accepted": [
        "SHA-256",
        "SHA256",
        "SHA 256"
      ],
      "explanation": "SHA-256 fait partie de la famille SHA-2 et produit une empreinte de 256 bits. MD5 et SHA-1 sont cassés et ne doivent plus servir à vérifier l’intégrité."
    },
    "cfd-q26": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Une fonction de hachage est à sens unique : l’empreinte ne contient pas assez d’information pour reconstituer la donnée, qui peut être bien plus grande. Elle sert à comparer, pas à restituer."
    },
    "cfd-q27": {
      "type": "single",
      "correct": "c",
      "explanation": "Une empreinte simple peut être recalculée par n’importe qui, y compris un attaquant qui a modifié le fichier. Le HMAC mêle une clé secrète à l’empreinte : il prouve l’intégrité et l’origine entre deux parties qui partagent cette clé.",
      "whyWrong": {
        "a": "La taille n’est pas ce qui distingue les deux : un HMAC-SHA-256 fait aussi 256 bits.",
        "b": "Le HMAC ne chiffre rien, il authentifie.",
        "d": "La clé d’un HMAC est secrète, partagée entre les deux parties."
      }
    },
    "cfd-q28": {
      "type": "single",
      "correct": "a",
      "explanation": "Un certificat associe une clé publique à un nom de domaine ou une organisation et est signé par une autorité de certification. Le navigateur s’en sert pour savoir à qui appartient la clé publique reçue.",
      "whyWrong": {
        "b": "Le chiffrement du trafic est assuré par la clé de session, pas par le certificat lui-même.",
        "d": "Un certificat ne contient pas de mot de passe.",
        "c": "Il ne dit rien de l’innocuité du site."
      }
    },
    "cfd-q29": {
      "type": "single",
      "correct": "b",
      "explanation": "Le cadenas indique une connexion HTTPS chiffrée vers le nom affiché, avec un certificat valide. Il ne dit rien de l’honnêteté du site : un site d’hameçonnage peut parfaitement avoir un cadenas.",
      "whyWrong": {
        "c": "N’importe qui peut obtenir un certificat pour son propre domaine.",
        "d": "Le cadenas ne garantit pas l’absence de logiciel malveillant.",
        "a": "Le chiffrement s’arrête au serveur du site, qui reçoit les données en clair."
      }
    },
    "cfd-q30": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Le cadenas atteste du chiffrement de la connexion et de l’adresse, pas des intentions du site. Les sites d’hameçonnage obtiennent des certificats gratuits ; il faut aussi vérifier le nom de domaine."
    },
    "cfd-q31": {
      "type": "short",
      "accepted": [
        "TLS",
        "SSL/TLS",
        "TLS 1.3",
        "TLS 1.2"
      ],
      "explanation": "TLS (Transport Layer Security), successeur de SSL, authentifie le serveur par certificat, établit une clé de session puis chiffre les échanges. HTTPS est HTTP sur TLS."
    },
    "cfd-q32": {
      "type": "single",
      "correct": "d",
      "explanation": "Avec le chiffrement de bout en bout, les clés sont détenues par les correspondants : le service qui transporte le message ne peut pas le déchiffrer. Cela ne protège pas contre un téléphone compromis ou une capture d’écran.",
      "whyWrong": {
        "a": "L’effacement ne protège pas contre la lecture.",
        "b": "C’est un chiffrement « en transit » seulement, où le service peut lire.",
        "c": "Le destinataire peut toujours copier le message qu’il a reçu."
      }
    },
    "cfd-q33": {
      "type": "multi",
      "correct": [
        "a",
        "d"
      ],
      "explanation": "Le chiffrement du disque protège des données au repos : appareil volé éteint, disque retiré. Une fois la session ouverte, le disque est déchiffré pour l’utilisateur, donc aussi pour un logiciel malveillant.",
      "whyWrong": {
        "c": "Pendant la session, le système accède aux données déchiffrées, y compris pour un logiciel malveillant.",
        "b": "Si le mot de passe est donné à un tiers, il peut ouvrir le disque."
      }
    },
    "cfd-q34": {
      "type": "single",
      "correct": "a",
      "explanation": "Un VPN chiffre le trafic jusqu’au serveur VPN, ce qui protège des écoutes sur un réseau Wi-Fi public. Le fournisseur voit le trafic, et le site visité reçoit toujours vos données : ce n’est pas un anonymat total.",
      "whyWrong": {
        "b": "Le fournisseur du VPN peut voir le trafic ; ce n’est pas un anonymat total.",
        "c": "Un VPN n’est pas un antivirus.",
        "d": "Le site visité reçoit les données que vous lui envoyez."
      }
    },
    "cfd-q35": {
      "type": "single",
      "correct": "c",
      "explanation": "Base64 sert à représenter des données binaires en texte. Il se décode instantanément, sans clé : il n’apporte aucune confidentialité. Un mot de passe « encodé » est en pratique en clair.",
      "whyWrong": {
        "a": "Base64 n’utilise aucune clé, ce n’est pas un chiffrement.",
        "b": "La longueur de la chaîne n’y change rien.",
        "d": "L’hexadécimal est aussi un simple encodage."
      }
    },
    "cfd-q36": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Un chiffrement correct ne laisse pas de porte dérobée : sans la clé, impossible de retrouver les données. D’où l’importance de ranger une clé de récupération en lieu sûr, séparée de l’appareil."
    },
    "cfd-q37": {
      "type": "single",
      "correct": "d",
      "explanation": "Si le mot de passe voyage avec le fichier, quiconque intercepte le courriel obtient les deux et le chiffrement ne sert plus à rien. Un second canal sépare les deux éléments.",
      "whyWrong": {
        "a": "Fichier et mot de passe ensemble : l’interception donne tout.",
        "b": "Le nom du fichier est visible de tous.",
        "c": "Le partager à un groupe l’expose à des personnes non concernées."
      }
    },
    "cfd-q38": {
      "type": "single",
      "correct": "b",
      "explanation": "Des failles d’implémentation sont régulièrement découvertes et des algorithmes (MD5, SHA-1, anciens protocoles) sont abandonnés. Les mises à jour apportent ces corrections.",
      "whyWrong": {
        "c": "Une mise à jour ne renouvelle pas les clés toute seule.",
        "a": "La longueur des mots de passe est une politique, pas un effet des mises à jour.",
        "d": "Les données restent protégées par la clé : une mise à jour ne les rend pas lisibles sans elle."
      }
    },
    "cfd-q39": {
      "type": "open",
      "model": "La clé doit être conservée dans un gestionnaire de clés ou un coffre dédié, avec un accès limité, séparé des données qu’elle protège. Si elle est rangée à côté des données (même dossier, code de l’application, courriel), celui qui obtient les données obtient aussi la clé et le chiffrement ne sert plus à rien. Il faut aussi prévoir une clé de récupération, conservée à part, pour ne pas perdre définitivement les données.",
      "criteria": [
        "La clé est conservée dans un coffre ou un gestionnaire, séparée des données.",
        "L’explication dit que ranger la clé avec les données annule la protection.",
        "Une clé de récupération conservée à part est mentionnée."
      ],
      "explanation": "La sécurité d’un chiffrement repose sur la protection de la clé : un chiffrement dont la clé est accessible à l’attaquant ne protège rien."
    },
    "cfd-q40": {
      "type": "open",
      "model": "Chiffrer le fichier avant l’envoi, avec un outil éprouvé (archive chiffrée en AES, ou chiffrement avec la clé publique du partenaire, ou messagerie chiffrée de bout en bout), car un courriel classique peut être lu à plusieurs endroits. Choisir une phrase de passe longue et unique. Transmettre cette phrase par un autre canal que le courriel, par exemple par téléphone, pour qu’un interlocuteur qui intercepte le courriel n’obtienne pas aussi la clé. Vérifier que le partenaire parvient bien à ouvrir le fichier et, si c’est important, joindre une empreinte ou une signature pour qu’il contrôle que le fichier est intact et vient bien de moi.",
      "criteria": [
        "Le fichier est chiffré avec un outil éprouvé avant d’être envoyé.",
        "Le mot de passe ou la clé est transmis par un canal distinct du fichier.",
        "L’explication relie ces choix à la protection de la confidentialité (et éventuellement à la vérification d’intégrité)."
      ],
      "explanation": "Chiffrer ne suffit pas : il faut aussi protéger la clé. Envoyer le fichier et le mot de passe par le même canal revient à ne pas chiffrer."
    }
  },
};
