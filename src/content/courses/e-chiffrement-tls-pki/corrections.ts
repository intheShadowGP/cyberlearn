// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "e-chiffrement-tls-pki",
  questions: {
    "crypt-q1": {
      "type": "single",
      "correct": "c",
      "explanation": "En ECB, chaque bloc est chiffré indépendamment avec la même clé : les répétitions du texte clair restent visibles dans le texte chiffré (l’exemple classique est une image dont les contours restent lisibles une fois chiffrée).",
      "whyWrong": {
        "d": "ECB est au contraire rapide : le problème est sa fuite de structure.",
        "b": "ECB fonctionne avec les mêmes clés qu’AES.",
        "a": "ECB se déchiffre normalement avec la clé."
      }
    },
    "crypt-q2": {
      "type": "truefalse",
      "correct": true,
      "explanation": "GCM produit un flot de clé à partir de la clé et du nonce : deux messages chiffrés avec le même couple donnent, par XOR, le XOR des textes clairs. La réutilisation permet aussi de retrouver la clé d’authentification et donc de forger des étiquettes valides."
    },
    "crypt-q3": {
      "type": "multi",
      "correct": [
        "b",
        "d"
      ],
      "explanation": "AES-GCM et ChaCha20-Poly1305 sont des AEAD : ils produisent une étiquette d’authentification qui détecte toute modification du texte chiffré.",
      "whyWrong": {
        "a": "ECB n’offre ni confidentialité correcte ni intégrité.",
        "c": "CBC seul chiffre mais n’authentifie pas : un attaquant peut modifier le texte chiffré, voire exploiter un oracle de remplissage."
      }
    },
    "crypt-q4": {
      "type": "short",
      "accepted": [
        "128",
        "128 bits"
      ],
      "explanation": "AES chiffre toujours des blocs de 128 bits ; seule la taille de clé varie (128, 192 ou 256 bits)."
    },
    "crypt-q5": {
      "type": "single",
      "correct": "a",
      "explanation": "L’asymétrique sert à l’échange de clés éphémère (ECDHE) et à la signature qui authentifie le serveur. Le trafic lui-même est chiffré par un algorithme symétrique (AES-GCM, ChaCha20-Poly1305), beaucoup plus rapide.",
      "whyWrong": {
        "c": "Chiffrer le trafic en asymétrique serait des centaines de fois plus lent ; TLS ne le fait pas.",
        "d": "La compression est une autre fonction, sans rapport."
      }
    },
    "crypt-q6": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Les courbes elliptiques offrent la même sécurité avec des clés bien plus courtes ; OAEP est le remplissage recommandé pour le chiffrement RSA ; Ed25519 est une signature sur la courbe Edwards25519.",
      "whyWrong": {
        "a": "RSA 1 024 bits n’est plus considéré comme sûr : le minimum est 2 048 bits, et 3 072 bits pour une protection au-delà de 2030."
      }
    },
    "crypt-q7": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Séparer les clés par usage limite l’impact d’une compromission, permet des durées de vie et des procédures distinctes (une clé de chiffrement peut devoir être séquestrée, jamais une clé de signature), et évite des attaques qui exploitent l’interaction entre les deux usages."
    },
    "crypt-q8": {
      "type": "open",
      "model": "Chiffrer avec la clé publique du destinataire garantit que seul le détenteur de la clé privée correspondante pourra lire le message : c’est la confidentialité. Exemple : chiffrer une clé de session pour un destinataire (RSA-OAEP), ou l’échange de clés dans TLS. Signer avec sa propre clé privée permet à quiconque possède la clé publique de vérifier que le message vient bien de soi et n’a pas été modifié : c’est l’authenticité et l’intégrité, sans confidentialité (le message reste lisible). Exemple : signature d’une mise à jour logicielle, d’un jeton, ou signature du serveur pendant la négociation TLS.",
      "criteria": [
        "Le chiffrement est associé à la clé publique du destinataire et à la confidentialité.",
        "La signature est associée à la clé privée de l’émetteur et à l’authenticité ou l’intégrité.",
        "Un exemple concret est donné pour chacun."
      ],
      "explanation": "Confondre les deux mène à des conceptions dangereuses, par exemple croire qu’un message signé est confidentiel."
    },
    "crypt-q9": {
      "type": "single",
      "correct": "d",
      "explanation": "Le client ne peut pas relier le certificat du serveur à une racine connue sans l’intermédiaire. Les navigateurs le récupèrent parfois eux-mêmes, ce qui masque le problème ; les autres clients (scripts, applications, outils en ligne de commande) échouent.",
      "whyWrong": {
        "a": "AES n’intervient pas dans la vérification de la chaîne.",
        "b": "Le port 80 n’a aucun rapport avec la validation de la chaîne.",
        "c": "IPv6 ne change rien à la chaîne de certificats."
      }
    },
    "crypt-q10": {
      "type": "short",
      "accepted": [
        "SAN",
        "subjectAltName",
        "subject alternative name"
      ],
      "explanation": "Le champ Subject Alternative Name (SAN) contient les noms DNS (et éventuellement les adresses IP) couverts. Les clients modernes l’utilisent à la place du nom commun (CN)."
    },
    "crypt-q11": {
      "type": "truefalse",
      "correct": false,
      "explanation": "TLS 1.3 n’autorise que des échanges de clés éphémères : la clé privée du serveur ne sert qu’à signer la négociation. Sa compromission permet d’usurper le serveur à l’avenir, mais pas de déchiffrer les sessions passées : c’est la confidentialité persistante."
    },
    "crypt-q12": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "TLS 1.0 et 1.1 sont obsolètes (RFC 8996) ; HSTS empêche le retour en HTTP ; les suites AEAD avec ECDHE assurent intégrité et confidentialité persistante.",
      "whyWrong": {
        "d": "Accepter n’importe quel certificat client revient à supprimer l’authentification mutuelle."
      }
    },
    "crypt-q13": {
      "type": "single",
      "correct": "b",
      "explanation": "Un KMS ou un HSM effectue les opérations sans exposer la clé maîtresse, contrôle qui peut l’utiliser et journalise chaque usage. Une clé stockée avec le code ou les données est compromise en même temps qu’eux.",
      "whyWrong": {
        "c": "Une clé versionnée est copiée avec le dépôt.",
        "d": "La base volée contiendrait la clé et les données.",
        "a": "Une clé dans le code est lue par quiconque accède au dépôt."
      }
    },
    "crypt-q14": {
      "type": "short",
      "accepted": [
        "ML-KEM",
        "MLKEM",
        "ML KEM",
        "Kyber",
        "CRYSTALS-Kyber"
      ],
      "explanation": "FIPS 203 normalise ML-KEM (Module-Lattice-Based Key-Encapsulation Mechanism), issu de CRYSTALS-Kyber. FIPS 204 (ML-DSA) et FIPS 205 (SLH-DSA) concernent les signatures."
    },
    "crypt-q15": {
      "type": "open",
      "model": "Un attaquant capable d’intercepter le trafic peut l’enregistrer dès aujourd’hui, même s’il ne peut pas le déchiffrer, puis le déchiffrer le jour où un ordinateur quantique pourra casser l’échange de clés classique (ECDHE, RSA). Pour des données qui doivent rester confidentielles quinze ans, le risque existe donc dès maintenant si cet horizon dépasse l’arrivée possible d’un tel ordinateur. Conséquences : inventorier les flux concernés, déployer en priorité un échange de clés hybride (classique + ML-KEM) sur ces flux, rendre l’infrastructure agile pour changer d’algorithme, et planifier la migration des signatures ensuite (elles ne sont pas exposées rétroactivement de la même façon).",
      "criteria": [
        "Le principe d’enregistrement immédiat et de déchiffrement futur est expliqué.",
        "Le lien entre durée de confidentialité et urgence est fait.",
        "L’échange de clés hybride ou post-quantique est proposé comme priorité.",
        "Une démarche d’inventaire ou d’agilité cryptographique est mentionnée."
      ],
      "explanation": "C’est pour cette raison que les navigateurs et de grands services ont déployé l’échange de clés hybride avant les signatures post-quantiques."
    },
    "crypt-q16": {
      "type": "single",
      "correct": "c",
      "explanation": "L’algorithme de Grover accélère la recherche exhaustive de façon quadratique : la sécurité effective d’une clé est divisée par deux en bits. AES-256 garde une marge suffisante, contrairement à RSA et aux courbes elliptiques, cassés par l’algorithme de Shor.",
      "whyWrong": {
        "a": "C’est RSA et les courbes elliptiques qui sont cassés par Shor, pas AES.",
        "d": "Un ordinateur quantique affecte les algorithmes asymétriques actuels.",
        "b": "Le quantique n’augmente jamais la sécurité d’un algorithme."
      }
    },
    "crypt-q17": {
      "type": "single",
      "correct": "d",
      "explanation": "Le nonce (number used once) n’est pas secret et est transmis avec le message ; ce qui compte, c’est qu’il ne soit jamais réutilisé avec la même clé. On le génère par un compteur ou de façon aléatoire en limitant le nombre de messages par clé.",
      "whyWrong": {
        "b": "Le nonce n’est pas un secret.",
        "a": "Il n’a aucun rapport avec une signature.",
        "c": "Il identifie un message, il ne limite rien."
      }
    },
    "crypt-q18": {
      "type": "single",
      "correct": "a",
      "explanation": "L’étiquette prouve que le texte chiffré et les données associées n’ont pas été altérés. Les bibliothèques AEAD la vérifient avant de rendre le texte : en cas d’échec, on rejette le message sans le traiter.",
      "whyWrong": {
        "c": "La vérification n’accélère rien.",
        "d": "Elle ne révèle aucune clé.",
        "b": "Elle n’a aucun rapport avec la compression."
      }
    },
    "crypt-q19": {
      "type": "truefalse",
      "correct": false,
      "explanation": "CBC assure la confidentialité, pas l’intégrité : un attaquant peut altérer le texte chiffré, avec des effets prévisibles sur le texte clair, ou exploiter un oracle de remplissage. L’intégrité exige un MAC ou, mieux, un mode authentifié (AEAD)."
    },
    "crypt-q20": {
      "type": "single",
      "correct": "b",
      "explanation": "Chaque partie envoie une valeur publique ; à partir de la sienne et de celle de l’autre, elle calcule le même secret, sans qu’il ait jamais circulé. Les clés étant éphémères, un enregistrement du trafic ne suffit pas à retrouver ce secret plus tard.",
      "whyWrong": {
        "a": "C’est l’échange RSA statique, sans confidentialité persistante.",
        "c": "C’est le rôle de la signature, une autre opération.",
        "d": "La révocation est vérifiée par CRL ou OCSP."
      }
    },
    "crypt-q21": {
      "type": "short",
      "accepted": [
        "X25519",
        "x25519"
      ],
      "explanation": "X25519 est un échange de clés de Diffie-Hellman sur la courbe 25519 : rapide, simple à implémenter de façon sûre et sans paramètres à choisir. Ed25519 est la signature associée."
    },
    "crypt-q22": {
      "type": "truefalse",
      "correct": true,
      "explanation": "En ECDSA, chaque signature utilise une valeur aléatoire secrète ; si elle est réutilisée ou prévisible, un calcul algébrique sur les deux signatures révèle la clé privée (c’est ce qui est arrivé à plusieurs produits). Ed25519 dérive cette valeur de façon déterministe pour écarter ce risque."
    },
    "crypt-q23": {
      "type": "single",
      "correct": "a",
      "explanation": "Un certificat DV est délivré après la preuve du contrôle du domaine (fichier ou enregistrement DNS) : il garantit la confidentialité du lien et l’appartenance du nom, pas la légitimité du site. Un site d’hameçonnage peut en avoir un.",
      "whyWrong": {
        "b": "C’est un niveau de validation d’organisation (OV, EV), pas DV.",
        "c": "Un certificat n’atteste aucune conformité réglementaire.",
        "d": "Il ne dit rien de la sécurité du serveur."
      }
    },
    "crypt-q24": {
      "type": "single",
      "correct": "c",
      "explanation": "Épingler un certificat ou une clé dans une application fige la confiance : un renouvellement non prévu, une révocation ou un changement d’autorité rendent l’application inutilisable tant qu’elle n’est pas mise à jour. On épingle une clé de secours, ou on s’appuie sur Certificate Transparency.",
      "whyWrong": {
        "d": "Le pinning ajoute une vérification, il ne supprime pas celle de la chaîne.",
        "a": "Il ne concerne pas le chiffrement symétrique.",
        "b": "Il n’impose pas de certificats auto-signés."
      }
    },
    "crypt-q25": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Aucune autorité ne l’a signé : le client n’a aucune raison de lui faire confiance. On le déploie dans le magasin de confiance des clients concernés, ou on vérifie son empreinte hors bande. L’accepter sans contrôle, c’est accepter un attaquant qui s’interpose."
    },
    "crypt-q26": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Le client vérifie la chaîne et les signatures, la correspondance du nom avec le SAN, les dates de validité, l’usage autorisé et, selon la politique, l’état de révocation. Le système d’exploitation du serveur n’entre pas en compte.",
      "whyWrong": {
        "d": "Le système d’exploitation du serveur n’est pas une propriété du certificat."
      }
    },
    "crypt-q27": {
      "type": "single",
      "correct": "d",
      "explanation": "Une fois l’en-tête reçu, le navigateur refuse toute connexion en clair vers le site (y compris pour les sous-domaines si demandé) pour la durée annoncée : un attaquant ne peut plus rétrograder la connexion en HTTP. Il se complète par la liste de préchargement des navigateurs.",
      "whyWrong": {
        "c": "HSTS ne chiffre rien lui-même.",
        "b": "La signature des certificats est faite par l’autorité.",
        "a": "Il n’a aucun rapport avec la compression."
      }
    },
    "crypt-q28": {
      "type": "single",
      "correct": "b",
      "explanation": "Avec mTLS, le client présente aussi un certificat que le serveur vérifie : on l’emploie entre services, pour des API sensibles ou des accès distants, afin que seuls des clients identifiés puissent se connecter. La gestion des certificats clients (émission, révocation) doit être automatisée.",
      "whyWrong": {
        "d": "Ce n’est pas une double clé de session.",
        "a": "Ce n’est pas du partage de certificat.",
        "c": "Ce n’est pas une coexistence de versions."
      }
    },
    "crypt-q29": {
      "type": "short",
      "accepted": [
        "s_client",
        "openssl s_client"
      ],
      "explanation": "`openssl s_client -connect hôte:443 -servername hôte -showcerts` ouvre la connexion, affiche la chaîne, la version de TLS négociée et le code de vérification. C’est l’outil de base pour diagnostiquer une erreur de certificat."
    },
    "crypt-q30": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Les données envoyées en 0-RTT peuvent être rejouées par un attaquant : le gain de latence se paie par une absence de protection contre le rejeu. On ne l’autorise que pour des requêtes sans effet de bord (lecture) et jamais pour des opérations qui modifient un état."
    },
    "crypt-q31": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Des protocoles obsolètes, un échange sans confidentialité persistante et une chaîne incomplète créent chacun une faiblesse ou une panne chez certains clients. Le renouvellement automatique, lui, est une bonne pratique qui évite les expirations.",
      "whyWrong": {
        "c": "L’automatisation du renouvellement est recommandée."
      }
    },
    "crypt-q32": {
      "type": "single",
      "correct": "b",
      "explanation": "Le chiffrement de volume protège les données au repos : sans la clé, un disque retiré ou une machine volée est illisible. Une fois le volume déverrouillé, le système lit les fichiers normalement : un programme, une injection ou un administrateur y accèdent comme l’application.",
      "whyWrong": {
        "d": "Le disque est déchiffré de façon transparente en session.",
        "c": "L’application lit les tables comme d’habitude.",
        "a": "Un administrateur voit les données déchiffrées."
      }
    },
    "crypt-q33": {
      "type": "single",
      "correct": "a",
      "explanation": "Chiffré par l’application avant écriture, un champ reste illisible pour l’administrateur de la base, pour une sauvegarde volée ou pour une injection qui lit la table. Le prix : on ne peut plus rechercher ou trier facilement sur ce champ, et la gestion des clés devient une affaire d’application.",
      "whyWrong": {
        "d": "C’est déjà le rôle du chiffrement du disque.",
        "c": "Le chiffrement ne duplique pas les sauvegardes.",
        "b": "Le transit est protégé par TLS, une autre mesure."
      }
    },
    "crypt-q34": {
      "type": "single",
      "correct": "c",
      "explanation": "Chaque donnée est chiffrée par une clé de données, elle-même chiffrée par la clé maîtresse du KMS. Pour changer de clé maîtresse, on rechiffre seulement les clés de données (petites, peu nombreuses), pas des téraoctets de données ; on réduit aussi les appels au KMS.",
      "whyWrong": {
        "a": "La rotation reste nécessaire, et plus simple.",
        "b": "Le double chiffrement par une même clé n’est pas le principe.",
        "d": "Les clés de données sont conservées chiffrées."
      }
    },
    "crypt-q35": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Quiconque obtient la base obtient aussi la clé : le chiffrement n’apporte alors aucune protection. La clé doit être séparée des données, dans un KMS ou un HSM, avec des accès contrôlés et journalisés."
    },
    "crypt-q36": {
      "type": "short",
      "accepted": [
        "HSM",
        "hsm"
      ],
      "explanation": "Un HSM (Hardware Security Module) réalise les opérations de chiffrement et de signature à l’intérieur d’un module résistant aux intrusions. La clé ne sort pas : on lui demande d’agir. Les KMS du cloud reposent sur de tels modules."
    },
    "crypt-q37": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Des clés séparées limitent l’étendue d’une compromission, la rotation réduit la durée d’exposition et le contrôle d’accès permet de détecter un usage anormal. Partager la clé entre test et production expose les données réelles à tout environnement moins protégé.",
      "whyWrong": {
        "b": "Une clé de production dans un environnement de test est exposée à un périmètre de sécurité plus faible."
      }
    },
    "crypt-q38": {
      "type": "open",
      "model": "En transit : TLS 1.2 minimum, de préférence 1.3, HSTS, certificats renouvelés automatiquement, mTLS entre services internes. Au repos : chiffrement du volume pour les serveurs et les sauvegardes (menace de vol de support), et chiffrement des champs les plus sensibles par l’application avec un AEAD (AES-256-GCM) pour qu’ils restent illisibles même pour un administrateur de la base ou une injection ; données associées liant le chiffrement à l’identifiant du dossier. Clés : chiffrement d’enveloppe avec une clé maîtresse dans un KMS ou un HSM, clés de données par jeu de données, séparées par environnement, accès limités et journalisés, rotation planifiée et procédure d’urgence. Sauvegardes : chiffrées avec des clés distinctes, copies isolées, restauration testée y compris la récupération des clés. Vigilance : jamais de clé dans le dépôt, inventaire des algorithmes, agilité pour migrer vers l’échange de clés hybride post-quantique sur les flux de longue durée de confidentialité.",
      "criteria": [
        "Le transit est protégé (TLS moderne, mTLS entre services).",
        "Le chiffrement au repos distingue le volume et les champs sensibles avec un AEAD.",
        "Les clés sont gérées par un KMS ou HSM avec chiffrement d’enveloppe, séparation, rotation et journalisation.",
        "Les sauvegardes et la récupération des clés sont traitées, ainsi qu’une vigilance (secrets hors du code, agilité)."
      ],
      "explanation": "Chaque niveau de chiffrement répond à une menace différente : aucun ne suffit seul, et la gestion des clés détermine la valeur de l’ensemble."
    },
    "crypt-q39": {
      "type": "single",
      "correct": "d",
      "explanation": "Les algorithmes vieillissent (MD5, SHA-1, RSA bientôt) : un système agile les identifie par des paramètres, les isole derrière une bibliothèque et en tient l’inventaire, de sorte qu’une migration (par exemple vers le post-quantique) est une opération planifiée plutôt qu’une réécriture.",
      "whyWrong": {
        "b": "Il ne s’agit pas de performance.",
        "a": "Il ne s’agit pas de chiffrer plusieurs fois.",
        "c": "La rotation de clés est une autre pratique."
      }
    },
    "crypt-q40": {
      "type": "short",
      "accepted": [
        "ML-DSA",
        "MLDSA",
        "ML DSA",
        "Dilithium",
        "CRYSTALS-Dilithium"
      ],
      "explanation": "FIPS 204 normalise ML-DSA (issu de CRYSTALS-Dilithium) pour les signatures ; FIPS 205 normalise SLH-DSA, fondé sur des fonctions de hachage. Les signatures post-quantiques suivent l’échange de clés dans la migration, car elles ne sont pas exposées rétroactivement."
    }
  },
};
