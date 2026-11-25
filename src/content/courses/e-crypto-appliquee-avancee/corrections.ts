// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "e-crypto-appliquee-avancee",
  questions: {
    "cea-q1": {
      "type": "single",
      "correct": "b",
      "explanation": "Le niveau de sécurité mesure l’effort de la meilleure attaque connue : n bits correspondent à environ 2ⁿ opérations. Il ne se confond ni avec la taille de la clé ni avec celle des blocs.",
      "whyWrong": {
        "a": "La sécurité se mesure en bits d’effort, pas en caractères.",
        "c": "Le niveau de sécurité est un exposant, pas une durée en secondes.",
        "d": "La taille de bloc est une autre caractéristique."
      }
    },
    "cea-q2": {
      "type": "truefalse",
      "correct": true,
      "explanation": "À cause du paradoxe des anniversaires, trouver une collision sur une empreinte de n bits demande environ 2^(n/2) calculs : 2¹²⁸ pour SHA-256. La résistance à la recherche d’une préimage reste proche de 256 bits."
    },
    "cea-q3": {
      "type": "single",
      "correct": "d",
      "explanation": "La durée de confidentialité (30 ans) dépasse la durée de sécurité probable de RSA face à un ordinateur quantique : le trafic capturé aujourd’hui sera déchiffrable demain. C’est le risque « enregistrer maintenant, déchiffrer plus tard ».",
      "whyWrong": {
        "b": "La modification en transit relève de l’intégrité, et n’est pas l’enjeu du long terme.",
        "c": "La saturation du réseau est une attaque de disponibilité.",
        "a": "Le risque interne est réel mais sans lien avec le choix de l’échange de clés."
      }
    },
    "cea-q4": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Le risque est présent si x + y > z : durée de confidentialité (x) plus durée de migration (y) supérieures au délai avant un ordinateur quantique opérationnel (z). Le temps de calcul courant n’intervient pas.",
      "whyWrong": {
        "d": "La vitesse de chiffrement n’entre pas dans l’inégalité de Mosca."
      }
    },
    "cea-q5": {
      "type": "short",
      "accepted": [
        "paradoxe des anniversaires",
        "attaque des anniversaires",
        "anniversaire",
        "birthday attack",
        "birthday"
      ],
      "explanation": "Le paradoxe (ou attaque) des anniversaires explique qu’il suffit d’environ 2^(n/2) empreintes pour que deux d’entre elles coïncident, d’où une sécurité de n/2 bits contre les collisions."
    },
    "cea-q6": {
      "type": "single",
      "correct": "a",
      "explanation": "RSA 3 072 bits correspond à environ 128 bits de sécurité, comme une courbe de 256 bits ou AES-128. RSA 2 048 bits n’offre qu’environ 112 bits ; une courbe de 160 bits ou une clé AES de 64 bits sont bien en dessous.",
      "whyWrong": {
        "d": "RSA 2 048 bits correspond à environ 112 bits.",
        "c": "Une courbe de 160 bits offre environ 80 bits.",
        "b": "AES 64 bits offre au plus 64 bits, très insuffisant."
      }
    },
    "cea-q7": {
      "type": "truefalse",
      "correct": false,
      "explanation": "La confidentialité et l’intégrité sont deux propriétés distinctes. Un chiffrement sans authentification peut être altéré, voire servir d’oracle à un attaquant actif. Il faut un chiffrement authentifié (AEAD) pour obtenir les deux."
    },
    "cea-q8": {
      "type": "single",
      "correct": "c",
      "explanation": "L’en-tête est fourni par l’attaquant : le choix de l’algorithme et de la clé doit venir de la configuration du serveur. Toute liste blanche côté serveur supprime les cas « none » et la confusion HS/RS.",
      "whyWrong": {
        "d": "C’est précisément la faiblesse exploitée.",
        "b": "Un identifiant dans la charge n’a aucun rapport avec l’algorithme.",
        "a": "Chiffrer l’en-tête avec une clé du client n’a pas de sens et n’empêche pas la confusion."
      }
    },
    "cea-q9": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Dans la confusion HS/RS, la clé publique, connue de tous, est utilisée comme secret HMAC : le serveur, croyant vérifier un HMAC, accepte la signature forgée. Une clé de vérification liée à un seul algorithme évite l’attaque."
    },
    "cea-q10": {
      "type": "single",
      "correct": "b",
      "explanation": "Les clés de session éphémères sont détruites après usage : même si la clé privée du serveur fuit plus tard, les sessions passées ne peuvent pas être déchiffrées.",
      "whyWrong": {
        "c": "La durée du certificat n’a pas d’effet sur le passé des sessions.",
        "a": "Protéger la clé privée est utile mais n’assure pas la persistance.",
        "d": "Une clé partagée à l’avance et réutilisée est l’opposé de l’éphémère."
      }
    },
    "cea-q11": {
      "type": "multi",
      "correct": [
        "b",
        "c"
      ],
      "explanation": "Le 0-RTT réduit la latence mais les données initiales peuvent être rejouées et ne profitent pas de la confidentialité persistante complète. On le réserve à des requêtes idempotentes.",
      "whyWrong": {
        "d": "Le protocole n’assure pas la protection contre le rejeu des données 0-RTT : c’est à l’application de la gérer.",
        "a": "Elles sont chiffrées avec une clé dérivée d’un secret précédent, sans confidentialité persistante complète."
      }
    },
    "cea-q12": {
      "type": "short",
      "accepted": [
        "Signal",
        "Signal Protocol",
        "protocole Signal"
      ],
      "explanation": "Le protocole Signal combine un accord de clés initial et un double ratchet : les clés changent à chaque message, ce qui donne la confidentialité persistante et un rétablissement après compromission."
    },
    "cea-q13": {
      "type": "single",
      "correct": "d",
      "explanation": "WireGuard repose sur le cadre Noise : chaque pair possède une paire de clés Curve25519 et connaît la clé publique de ses correspondants. Il n’y a ni autorité de certification ni négociation de suites.",
      "whyWrong": {
        "a": "WireGuard n’utilise pas de certificats X.509.",
        "b": "Il n’y a pas de mot de passe partagé à saisir.",
        "c": "Une adresse IP peut être usurpée et n’authentifie rien."
      }
    },
    "cea-q14": {
      "type": "truefalse",
      "correct": false,
      "explanation": "La clé HMAC est partagée : le destinataire peut produire exactement le même code que l’émetteur. Seule une signature asymétrique, dont la clé privée est unique, prouve qui a signé."
    },
    "cea-q15": {
      "type": "single",
      "correct": "c",
      "explanation": "L’attaque exploite la différence entre « remplissage invalide » et « MAC invalide ». Un AEAD authentifie le texte chiffré avant toute interprétation et ne renvoie qu’une erreur unique.",
      "whyWrong": {
        "b": "Détailler les erreurs aggrave l’oracle.",
        "d": "La longueur de la clé n’a pas d’effet sur cet oracle.",
        "a": "La compression n’a aucun effet sur l’oracle, et peut créer d’autres fuites."
      }
    },
    "cea-q16": {
      "type": "single",
      "correct": "a",
      "explanation": "Une comparaison qui s’arrête au premier octet différent fuit, par sa durée, la longueur du préfixe correct. En répétant les mesures, l’attaquant devine l’étiquette octet par octet. On utilise une comparaison en temps constant.",
      "whyWrong": {
        "b": "La taille des chaînes n’est pas en cause.",
        "d": "Un MAC est de taille fixe pour un algorithme donné.",
        "c": "Une comparaison ne modifie pas les valeurs comparées."
      }
    },
    "cea-q17": {
      "type": "short",
      "accepted": [
        "Bleichenbacher",
        "attaque de Bleichenbacher",
        "Bleichenbacher attack"
      ],
      "explanation": "Daniel Bleichenbacher a montré en 1998 qu’un serveur indiquant si un remplissage PKCS#1 v1.5 est valide permet de déchiffrer. ROBOT (2017) a montré que des serveurs restaient vulnérables."
    },
    "cea-q18": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Deux signatures partageant le nonce permettent de résoudre un système d’équations qui révèle la clé privée (cas célèbre : la console PlayStation 3). On évite le risque avec des nonces déterministes (RFC 6979) ou EdDSA."
    },
    "cea-q19": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Les bibliothèques à défauts sûrs, les vecteurs de test visant les cas limites et la relecture spécialisée réduisent les erreurs. Écrire soi-même une primitive en produit de nouvelles.",
      "whyWrong": {
        "a": "Une primitive écrite en interne est rarement testée comme une bibliothèque largement éprouvée."
      }
    },
    "cea-q20": {
      "type": "single",
      "correct": "c",
      "explanation": "Si un secret et un contenu choisi par l’attaquant sont compressés ensemble, la taille du résultat est plus petite quand la supposition est correcte. La longueur chiffrée révèle alors le secret par essais successifs.",
      "whyWrong": {
        "a": "La compression ne supprime pas le nonce.",
        "b": "La compression n’agit pas sur la clé.",
        "d": "On peut très bien authentifier des données compressées."
      }
    },
    "cea-q21": {
      "type": "single",
      "correct": "a",
      "explanation": "Une clé doit être imprévisible : seul un générateur cryptographique, alimenté en entropie par le système, convient. Les fonctions pour simulations et l’horloge sont prévisibles.",
      "whyWrong": {
        "b": "Horloge et PID sont devinables.",
        "d": "Les générateurs statistiques ne sont pas imprévisibles.",
        "c": "Un mot de passe humain a trop peu d’entropie pour une clé."
      }
    },
    "cea-q22": {
      "type": "single",
      "correct": "b",
      "explanation": "Les données sont chiffrées par des DEK, elles-mêmes chiffrées par une KEK puis par la racine : tourner la racine ne demande que de rechiffrer les clés. On isole aussi l’impact d’une fuite à un jeu de données.",
      "whyWrong": {
        "c": "La racine est justement protégée par un KMS ou un HSM.",
        "d": "La séparation des rôles reste nécessaire.",
        "a": "Une clé unique pour tous est l’inverse de l’objectif."
      }
    },
    "cea-q23": {
      "type": "short",
      "accepted": [
        "3",
        "trois"
      ],
      "explanation": "Avec un seuil de 3 sur 5, trois parts quelconques suffisent à reconstituer le secret ; deux parts ne donnent aucune information."
    },
    "cea-q24": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Le schéma de Shamir offre une sécurité parfaite : avec moins que le seuil de parts, toutes les valeurs du secret restent également probables. Deux parts ne révèlent rien."
    },
    "cea-q25": {
      "type": "single",
      "correct": "d",
      "explanation": "Effacer la clé (et toutes ses copies) rend les données chiffrées illisibles, y compris dans les sauvegardes. Cela facilite l’effacement à la demande et le retrait de supports, à condition d’avoir une clé par périmètre.",
      "whyWrong": {
        "a": "C’est de l’agilité cryptographique, pas du crypto-shredding.",
        "b": "La fragmentation est un autre mécanisme.",
        "c": "Le chiffrement multiple est un empilement, sans lien avec la destruction."
      }
    },
    "cea-q26": {
      "type": "multi",
      "correct": [
        "c",
        "d"
      ],
      "explanation": "Un HSM garde la clé sans l’exporter et trace les usages. Il ne dispense pas de la rotation, ni ne protège contre une application compromise qui, ayant le droit de demander des signatures, en abuse.",
      "whyWrong": {
        "a": "La rotation reste nécessaire.",
        "b": "Une application légitime mais compromise garde le droit d’utiliser la clé."
      }
    },
    "cea-q27": {
      "type": "single",
      "correct": "c",
      "explanation": "La clé racine engage toute la confiance : elle est générée dans un HSM hors ligne, selon un script préparé, devant des témoins, avec double contrôle, sauvegarde en parts et journal signé.",
      "whyWrong": {
        "b": "Une personne seule, un poste ordinaire : point de défaillance unique.",
        "d": "Une machine partagée expose la clé à d’autres services.",
        "a": "Une clé racine ne doit jamais voyager par courriel."
      }
    },
    "cea-q28": {
      "type": "open",
      "model": "Je propose un chiffrement d’enveloppe : une clé racine dans un HSM ou un KMS, qui protège des clés de chiffrement de clés par domaine, qui protègent à leur tour une clé de données propre à chaque client. Les clés de données sont stockées chiffrées à côté des données et déchiffrées à la demande par l’application via le KMS. Pour la suppression à la demande, on détruit la clé de données du client, y compris dans les sauvegardes : ses données deviennent illisibles (crypto-shredding). La rotation de la racine ne demande que de rechiffrer les clés, pas les données. J’ajoute séparation des rôles, journalisation et alertes sur les usages anormaux.",
      "criteria": [
        "Une hiérarchie à plusieurs niveaux est proposée (racine, KEK, DEK) avec une clé de données par client.",
        "La destruction de la clé du client est présentée comme moyen de rendre les données inutilisables.",
        "La rotation, la séparation des rôles ou la journalisation sont mentionnées."
      ],
      "explanation": "Une clé par périmètre de suppression est ce qui rend l’effacement ciblé possible ; la hiérarchie permet la rotation sans rechiffrer les données."
    },
    "cea-q29": {
      "type": "single",
      "correct": "b",
      "explanation": "L’agilité vise à isoler les choix d’algorithmes pour pouvoir les changer vite. Elle ne signifie pas tout négocier : une négociation libre ouvre aux attaques par repli ; on propose peu de suites, sûres.",
      "whyWrong": {
        "a": "Une négociation sans limite est un risque, pas l’agilité.",
        "d": "Renouveler des clés est un autre mécanisme (ratchet).",
        "c": "Empiler les algorithmes n’est pas ce que désigne le terme."
      }
    },
    "cea-q30": {
      "type": "short",
      "accepted": [
        "FIPS 203",
        "203",
        "FIPS203"
      ],
      "explanation": "FIPS 203 spécifie ML-KEM (issu de CRYSTALS-Kyber) ; FIPS 204 spécifie la signature ML-DSA et FIPS 205 la signature à base de hachage SLH-DSA."
    },
    "cea-q31": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Grover offre un gain quadratique : une recherche exhaustive sur 2²⁵⁶ clés devient environ 2¹²⁸ opérations quantiques. Pour les clés symétriques, doubler la taille de clé suffit : AES-256 reste recommandé."
    },
    "cea-q32": {
      "type": "single",
      "correct": "d",
      "explanation": "L’hybride combine les secrets des deux mécanismes : un défaut du nouvel algorithme, jeune, ou un ordinateur quantique contre X25519 ne suffit pas à lui seul à casser la session. Il ajoute du coût et ne remplace pas l’authentification.",
      "whyWrong": {
        "b": "L’hybride ajoute un calcul et des messages plus gros.",
        "a": "L’authentification du serveur reste nécessaire.",
        "c": "Il s’appuie au contraire sur l’algorithme post-quantique."
      }
    },
    "cea-q33": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Shor résout efficacement la factorisation et le logarithme discret : RSA, Diffie-Hellman et les courbes elliptiques tombent. AES-256 n’est concerné que par Grover, avec un gain limité.",
      "whyWrong": {
        "b": "AES-256 n’est pas cassé par Shor ; Grover ne le ramène qu’à environ 128 bits."
      }
    },
    "cea-q34": {
      "type": "single",
      "correct": "a",
      "explanation": "On ne migre pas ce qu’on ne connaît pas : l’inventaire (une nomenclature cryptographique) permet de prioriser selon la durée de sensibilité, d’identifier les dépendances et de planifier les tests.",
      "whyWrong": {
        "c": "Sans inventaire, un remplacement massif est aveugle et risque de casser des dépendances.",
        "d": "Attendre fait courir le risque d’enregistrement déjà actif.",
        "b": "Désactiver un chiffrement est une régression de sécurité."
      }
    },
    "cea-q35": {
      "type": "single",
      "correct": "c",
      "explanation": "Dans un schéma homomorphe, une opération sur les textes chiffrés correspond à une opération sur les clairs : un serveur peut calculer sans voir. Les schémas totalement homomorphes sont encore lents.",
      "whyWrong": {
        "a": "C’est le chiffrement multidestinataire, une autre fonction.",
        "b": "Aucun schéma sûr ne donne un chiffré indépendant de la clé.",
        "d": "Le chiffrement homomorphe n’est pas un casseur de clé."
      }
    },
    "cea-q36": {
      "type": "single",
      "correct": "b",
      "explanation": "Le prouveur convainc le vérificateur (par exemple qu’il est majeur ou qu’il connaît un secret) sans rien révéler d’autre. La preuve est correcte, complète et sans divulgation.",
      "whyWrong": {
        "d": "Une preuve doit au contraire être vérifiable.",
        "c": "Le but n’est pas de rendre le message illisible.",
        "a": "Il ne s’agit pas de stockage de mots de passe."
      }
    },
    "cea-q37": {
      "type": "short",
      "accepted": [
        "MPC",
        "SMPC",
        "calcul multipartite",
        "calcul multipartite sécurisé"
      ],
      "explanation": "Le calcul multipartite sécurisé (MPC) permet à des organisations de calculer une statistique commune sans partager leurs données."
    },
    "cea-q38": {
      "type": "single",
      "correct": "d",
      "explanation": "Faire comparer et trier des valeurs chiffrées révèle leur ordre ; avec quelques connaissances sur la distribution, on retrouve beaucoup d’informations. C’est un compromis fuite/fonctionnalité qui doit être évalué avec prudence.",
      "whyWrong": {
        "b": "Le déchiffrement fonctionne normalement.",
        "a": "La taille de clé n’est pas le problème.",
        "c": "Le problème n’est pas la plage des valeurs."
      }
    },
    "cea-q39": {
      "type": "open",
      "model": "Je refuse tant que le prestataire ne remplit pas des critères de base. La sécurité doit reposer sur le secret de la clé et non sur celui de l’algorithme (principe de Kerckhoffs) : un algorithme confidentiel n’a pas été examiné par la communauté, ses failles restent cachées. J’exige un algorithme public, avec une analyse de sécurité indépendante ou une preuve, des implémentations éprouvées et testées (vecteurs de test, audit), un modèle de menace explicite et la possibilité de remplacer l’algorithme (agilité). À défaut, j’utilise un standard reconnu (AES-GCM, ChaCha20-Poly1305, X25519) via une bibliothèque de haut niveau.",
      "criteria": [
        "Le principe de Kerckhoffs ou le risque d’un algorithme non public est invoqué.",
        "Des critères concrets sont cités (analyse indépendante, implémentation éprouvée, modèle de menace).",
        "Une alternative reposant sur des standards reconnus est proposée."
      ],
      "explanation": "Ne pas inventer sa cryptographie est la règle de base : l’absence d’examen public est un signal d’alerte, quelle que soit la promesse commerciale."
    },
    "cea-q40": {
      "type": "open",
      "model": "J’applique le raisonnement de Mosca à chaque élément : si la durée de confidentialité plus la durée de migration dépasse le délai estimé avant un ordinateur quantique opérationnel, le risque est présent. Les dossiers à 30 ans sont prioritaires : leur trafic est enregistrable dès maintenant, d’où un échange de clés hybride (par exemple X25519 avec ML-KEM). Les jetons de 15 minutes ne sont pas concernés. La signature de firmware sur 15 ans est le point délicat : il faut prévoir une signature post-quantique ou hybride et un moyen de changer la clé de vérification dans les appareils. Je commence par un inventaire des algorithmes, bibliothèques, certificats et clés, et je teste les effets sur la taille des messages et les performances.",
      "criteria": [
        "Le raisonnement de Mosca (durée de confidentialité, durée de migration, délai quantique) est appliqué.",
        "Les éléments sont priorisés : dossiers longue durée en tête, jetons courts non concernés, firmware avec prévoyance de changement de clé.",
        "L’inventaire et l’approche hybride sont mentionnés."
      ],
      "explanation": "Prioriser selon la durée de sensibilité et la difficulté de mise à jour évite de dépenser de l’énergie sur ce qui n’est pas menacé et d’oublier l’appareil impossible à changer."
    }
  },
};
