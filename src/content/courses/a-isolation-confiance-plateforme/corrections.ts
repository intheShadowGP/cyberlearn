// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "a-isolation-confiance-plateforme",
  questions: {
    "tcb-q1": {
      "type": "single",
      "correct": "b",
      "explanation": "La TCB regroupe le matériel, le micrologiciel et les logiciels auxquels on doit faire confiance pour que la politique de sécurité soit respectée. Ce qui n’en fait pas partie ne peut pas, en théorie, la violer.",
      "whyWrong": {
        "a": "La TCB inclut aussi les composants d’autres fournisseurs : l’origine ne la définit pas.",
        "d": "Les utilisateurs ne sont pas des composants de la TCB, même s’ils administrent.",
        "c": "Les sauvegardes hors site relèvent de la continuité, pas de la TCB."
      }
    },
    "tcb-q2": {
      "type": "single",
      "correct": "a",
      "explanation": "Chaque ligne de code de la TCB peut contenir une faille qui l’invalide. Une TCB réduite se relit, se teste et, dans les cas extrêmes, se prouve : c’est le principe du micro-noyau et des architectures minimales.",
      "whyWrong": {
        "d": "La taille de la TCB n’a pas de lien garanti avec la vitesse de démarrage.",
        "b": "Aucun système n’est exempt de vulnérabilités : une petite TCB en a moins, pas zéro.",
        "c": "Les mises à jour restent nécessaires, quelle que soit la taille de la TCB."
      }
    },
    "tcb-q3": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Un moniteur de référence doit être toujours invoqué, protégé contre toute altération et assez simple pour être vérifié. Un mécanisme contournable ou désactivable n’apporte aucune garantie.",
      "whyWrong": {
        "a": "Un mécanisme désactivable par n’importe qui ne protège rien.",
        "e": "Le fonctionnement hors ligne n’a aucun rapport avec les propriétés d’un moniteur de référence."
      }
    },
    "tcb-q4": {
      "type": "truefalse",
      "correct": false,
      "explanation": "L’isolation du conteneur repose sur le noyau : une faille du noyau annule les garanties. Le noyau, comme le moteur de conteneurs et le matériel, appartient donc à la TCB de l’application."
    },
    "tcb-q5": {
      "type": "single",
      "correct": "c",
      "explanation": "Dans un micro-noyau, les pilotes, les systèmes de fichiers et les piles réseau sont des services isolés en espace utilisateur. Une faille dans un pilote ne donne pas automatiquement le contrôle de tout le système.",
      "whyWrong": {
        "a": "C’est l’idée opposée : celle d’un noyau monolithique.",
        "d": "Un micro-noyau partage la mémoire avec les services par messages contrôlés, pas par un processeur dédié.",
        "b": "Un hyperviseur isole des machines virtuelles ; il ne remplace pas le noyau d’un système."
      }
    },
    "tcb-q6": {
      "type": "short",
      "accepted": [
        "sel4"
      ],
      "explanation": "seL4 est un micro-noyau d’une dizaine de milliers de lignes de code dont une preuve formelle établit la conformité à sa spécification. Il illustre l’idée d’une TCB assez petite pour être vérifiée."
    },
    "tcb-q7": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Chaque fonction ajoutée est du code de confiance supplémentaire. C’est pourquoi on garde les composants critiques minimaux et on rejette les fonctionnalités annexes vers des composants hors TCB."
    },
    "tcb-q8": {
      "type": "open",
      "model": "Le noyau partagé fait partie de la TCB du service de signature : une faille du noyau exploitée depuis un conteneur tiers donne accès aux clés. La TCB devient énorme (noyau, moteur de conteneurs, tous les conteneurs voisins en tant que surface d’attaque). Alternative : isoler le service de signature sur son propre hôte ou sa propre VM, voire dans un module matériel de sécurité (HSM) ou un environnement d’exécution de confiance, avec une interface minimale (demande de signature), des accès journalisés et aucune exposition aux charges de tiers.",
      "criteria": [
        "Identifie le noyau partagé comme élément de la TCB.",
        "Conclut que la compromission d’un conteneur tiers menace les clés.",
        "Propose une isolation plus forte ou un matériel dédié (VM, HSM, TEE)."
      ],
      "explanation": "On place les actifs les plus sensibles dans la plus petite TCB possible, séparée de ce qui exécute du code moins fiable."
    },
    "tcb-q9": {
      "type": "single",
      "correct": "d",
      "explanation": "Dans les permissions Unix classiques (DAC), le propriétaire d’un fichier décide qui y accède. En MAC (SELinux, AppArmor), une politique définie par l’administrateur de sécurité s’applique même au propriétaire.",
      "whyWrong": {
        "b": "C’est l’inverse : le DAC laisse le propriétaire décider.",
        "a": "Les deux modèles concernent les droits d’accès, pas les réseaux ni les disques.",
        "c": "Ni le DAC ni le MAC ne chiffrent ou ne compressent les données."
      }
    },
    "tcb-q10": {
      "type": "single",
      "correct": "a",
      "explanation": "SELinux associe des types aux processus et aux objets et applique une politique centrale. AppArmor suit une approche voisine par profils. NTFS est un système de fichiers, DHCP et LDAP des protocoles.",
      "whyWrong": {
        "b": "NTFS est un système de fichiers ; ses ACL relèvent du contrôle discrétionnaire.",
        "d": "DHCP distribue des adresses IP, il ne contrôle pas les accès.",
        "c": "LDAP est un annuaire : il stocke des identités, il n’impose pas de politique obligatoire."
      }
    },
    "tcb-q11": {
      "type": "single",
      "correct": "c",
      "explanation": "Bell-LaPadula protège la confidentialité des informations classifiées : un sujet ne lit pas au-dessus de son niveau et n’écrit pas vers un niveau inférieur, ce qui empêche les fuites. Biba en est le dual pour l’intégrité.",
      "whyWrong": {
        "b": "Cette formule décrit Biba, qui protège l’intégrité.",
        "a": "La redondance relève de la disponibilité, pas de Bell-LaPadula.",
        "d": "La signature numérique assure l’authenticité, un autre objectif."
      }
    },
    "tcb-q12": {
      "type": "single",
      "correct": "b",
      "explanation": "Biba empêche qu’une donnée de confiance soit corrompue par une source moins fiable : pas de lecture vers le bas, pas d’écriture vers le haut. C’est le dual de Bell-LaPadula.",
      "whyWrong": {
        "a": "La confidentialité est l’objectif de Bell-LaPadula, pas de Biba.",
        "d": "La disponibilité n’est pas traitée par Biba.",
        "c": "La non-répudiation relève de la signature et de la preuve, pas de Biba."
      }
    },
    "tcb-q13": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Le contrôle d’accès par rôles simplifie l’administration : on modifie un rôle plutôt que chaque utilisateur. Il facilite la séparation des tâches, à condition de maîtriser le nombre et l’étendue des rôles."
    },
    "tcb-q14": {
      "type": "single",
      "correct": "d",
      "explanation": "Dans un modèle à capacités, qui détient la référence peut s’en servir, et on ne peut pas en fabriquer. Cela évite le problème du « député confus » et applique naturellement le moindre privilège.",
      "whyWrong": {
        "a": "Un nom d’utilisateur identifie une personne ; une capacité repose sur la référence détenue.",
        "c": "L’adresse IP de l’appelant ne fonde pas l’autorisation dans ce modèle.",
        "b": "L’appartenance à un groupe caractérise un contrôle d’accès par listes, pas les capacités."
      }
    },
    "tcb-q15": {
      "type": "multi",
      "correct": [
        "a",
        "d"
      ],
      "explanation": "Le MAC repose sur une politique centrale et des étiquettes ou types. Il se distingue du DAC, où le propriétaire accorde librement les droits.",
      "whyWrong": {
        "b": "C’est la caractéristique du contrôle discrétionnaire.",
        "c": "Un MAC refuse par défaut ce que la politique n’autorise pas."
      }
    },
    "tcb-q16": {
      "type": "single",
      "correct": "d",
      "explanation": "Le contexte SELinux se compose d’un utilisateur, d’un rôle, d’un type (`httpd_sys_content_t`) et d’un niveau. C’est le type qui détermine ce que le processus du serveur web, étiqueté `httpd_t`, a le droit de lire.",
      "whyWrong": {
        "a": "`ls -Z` affiche le contexte de sécurité, pas un chiffrement.",
        "c": "system_u est une identité SELinux, pas le propriétaire au sens Unix (ici root).",
        "b": "`ls -Z` n’indique pas l’accès en lecture seule : il affiche le contexte SELinux."
      }
    },
    "tcb-q17": {
      "type": "single",
      "correct": "a",
      "explanation": "La confiance se construit par couches : chaque étape vérifie la suivante. La première (racine de confiance) ne peut être vérifiée par personne : elle doit être protégée physiquement et rester minimale, par exemple une mémoire non modifiable du processeur.",
      "whyWrong": {
        "c": "Le compte principal d’un système est un compte privilégié, pas une racine de confiance matérielle.",
        "b": "Le dossier racine est une notion de système de fichiers, sans lien avec la confiance.",
        "d": "Un certificat de site s’appuie sur une autorité, mais n’est pas la racine de confiance de la plateforme."
      }
    },
    "tcb-q18": {
      "type": "single",
      "correct": "b",
      "explanation": "Secure Boot vérifie des signatures et refuse l’exécution de ce qui n’est pas autorisé. Le démarrage mesuré enregistre des empreintes dans le TPM, qui permettent ensuite à un tiers (attestation) ou au système de décider si l’état est acceptable.",
      "whyWrong": {
        "a": "C’est l’inverse des deux fonctions.",
        "d": "Aucun des deux ne concerne le réseau ni le stockage en tant que tels.",
        "c": "Ils sont complémentaires : l’un bloque, l’autre mesure."
      }
    },
    "tcb-q19": {
      "type": "single",
      "correct": "c",
      "explanation": "Les PCR du TPM contiennent des empreintes cumulées des composants démarrés. On ne peut pas les écrire librement : on ne peut que les « étendre » en y ajoutant une nouvelle mesure.",
      "whyWrong": {
        "d": "Le registre Windows est un composant logiciel modifiable, pas un support de mesures de confiance.",
        "a": "Un fichier de mots de passe est modifiable ; les PCR ne le sont qu’en « étendant ».",
        "b": "Le cache du processeur est volatil et sans lien avec le TPM."
      }
    },
    "tcb-q20": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Une PCR n’accepte que l’opération « étendre » : nouvelle valeur = hachage de l’ancienne concaténée à la nouvelle mesure. Ainsi, un logiciel ne peut ni effacer ni falsifier l’historique de ce qui a démarré."
    },
    "tcb-q21": {
      "type": "single",
      "correct": "b",
      "explanation": "Le TPM signe les mesures (citation, ou « quote ») avec une clé d’attestation. Le vérifieur compare les valeurs aux valeurs attendues et décide d’accorder ou non des secrets ou l’accès au réseau.",
      "whyWrong": {
        "d": "Le chiffrement des échanges relève de TLS, pas de l’attestation.",
        "c": "L’empreinte digitale relève de l’authentification biométrique.",
        "a": "La mise à jour du micrologiciel est une autre opération."
      }
    },
    "tcb-q22": {
      "type": "single",
      "correct": "d",
      "explanation": "Un composant signé mais vulnérable reste accepté tant que sa signature n’est pas révoquée. La parade est la révocation (liste dbx, mises à jour), complétée par le démarrage mesuré. Un exemple connu est BlackLotus (2023).",
      "whyWrong": {
        "a": "Désactiver l’antivirus n’empêche pas le bootkit ; cela réduit la protection.",
        "b": "Autoriser tout support amovible élargit la surface d’attaque.",
        "c": "Retirer le mot de passe du micrologiciel supprime une protection."
      }
    },
    "tcb-q23": {
      "type": "short",
      "accepted": [
        "tee"
      ],
      "explanation": "Un TEE (Trusted Execution Environment) isole du code et des données du reste du système, système d’exploitation compris. Il réduit la TCB aux composants du TEE, mais n’est pas immunisé contre les canaux auxiliaires."
    },
    "tcb-q24": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "L’informatique confidentielle chiffre la mémoire et permet d’attester l’environnement : l’hébergeur n’a plus à être de confiance. Elle ne corrige pas les failles de l’application elle-même.",
      "whyWrong": {
        "c": "Une faille dans le code protégé reste exploitable de l’intérieur.",
        "e": "Le trafic réseau relève d’autres protections (chiffrement des échanges, segmentation)."
      }
    },
    "tcb-q25": {
      "type": "single",
      "correct": "a",
      "explanation": "Sans IOMMU, un périphérique PCIe ou Thunderbolt peut lire et écrire toute la mémoire par DMA, en contournant le noyau. L’IOMMU restreint, comme une MMU pour les périphériques, les zones mémoire accessibles à chacun.",
      "whyWrong": {
        "c": "Le hameçonnage se traite par la sensibilisation et le filtrage du courrier.",
        "d": "Les injections SQL se traitent dans le code applicatif.",
        "b": "L’usurpation ARP se traite sur le réseau local, pas par l’IOMMU."
      }
    },
    "tcb-q26": {
      "type": "single",
      "correct": "c",
      "explanation": "SMEP (Supervisor Mode Execution Prevention) interdit au noyau d’exécuter une page marquée « utilisateur ». Elle bloque l’exploitation classique où une faille du noyau redirige l’exécution vers du code placé par l’attaquant dans son propre processus. SMAP fait de même pour les accès aux données.",
      "whyWrong": {
        "d": "SMEP n’effectue pas de chiffrement ; le chiffrement mémoire relève d’autres technologies.",
        "b": "SMEP ne bloque pas les appels système, qui restent possibles.",
        "a": "SMEP n’a aucun lien avec le débit réseau."
      }
    },
    "tcb-q27": {
      "type": "single",
      "correct": "a",
      "explanation": "Le processeur exécute par anticipation des instructions qui seront annulées, mais leurs effets sur les caches subsistent et se mesurent. Les correctifs combinent micrologiciel, système et logiciel, souvent avec un coût de performance.",
      "whyWrong": {
        "c": "Spectre ne vise pas un protocole réseau mais le fonctionnement du processeur.",
        "d": "Les mots de passe de routeurs relèvent de la configuration, pas de Spectre.",
        "b": "Le chiffrement sans fil n’est pas en cause : Spectre agit sur le processeur."
      }
    },
    "tcb-q28": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Les canaux auxiliaires ne passent pas par les interfaces logicielles : ils mesurent des effets physiques partagés. En cloud, la parade passe par la réservation de cœurs ou de machines, les correctifs et la limitation de la précision des horloges."
    },
    "tcb-q29": {
      "type": "single",
      "correct": "b",
      "explanation": "Les navigateurs modernes confinent chaque site dans un processus au droit restreint (bac à sable). Une faille du moteur compromet ce processus, pas le navigateur entier, à moins d’être enchaînée à une évasion du bac à sable.",
      "whyWrong": {
        "a": "Un processus partagé étend l’impact d’une faille à tous les onglets.",
        "d": "Charger tous les sites dans la même page supprime l’isolation entre eux.",
        "c": "Exécuter le moteur dans le noyau donnerait à une faille un accès maximal."
      }
    },
    "tcb-q30": {
      "type": "multi",
      "correct": [
        "a",
        "b"
      ],
      "explanation": "Ne pas partager le matériel sensible et appliquer les correctifs réduisent la surface des canaux auxiliaires. Réutiliser un secret ou supprimer la journalisation aggrave la situation.",
      "whyWrong": {
        "d": "Un secret commun compromis ouvre tous les environnements.",
        "c": "Sans journalisation, une attaque passe inaperçue."
      }
    },
    "tcb-q31": {
      "type": "short",
      "accepted": [
        "landlock"
      ],
      "explanation": "Landlock permet à une application de s’enfermer elle-même, sans droits root, dans une portion du système de fichiers (et, plus récemment, du réseau). C’est une brique de bac à sable intégrée par l’application."
    },
    "tcb-q32": {
      "type": "open",
      "model": "Conteneur : protège les autres charges d’une application compromise tant que le noyau n’est pas compromis ; il ne protège pas contre une faille du noyau ni contre l’hôte. Machine virtuelle : protège l’hôte et les autres VM d’un système invité compromis (frontière = hyperviseur) ; elle ne protège pas la VM d’un hôte ou d’un administrateur compromis. Enclave ou VM confidentielle : protège la charge même contre un hôte, un hyperviseur ou un administrateur compromis (mémoire chiffrée, attestation) ; elle ne corrige pas les failles de l’application elle-même et reste exposée aux canaux auxiliaires. Le choix dépend donc de ce que l’on suppose hostile.",
      "criteria": [
        "Distingue la protection contre une application compromise et contre un hôte compromis.",
        "Place le noyau ou l’hyperviseur comme frontière de chaque modèle.",
        "Mentionne une limite de l’enclave (failles applicatives ou canaux auxiliaires)."
      ],
      "explanation": "Une isolation se juge à la menace qu’elle arrête : ce que l’on suppose compromis détermine la frontière à choisir."
    },
    "tcb-q33": {
      "type": "single",
      "correct": "d",
      "explanation": "Réduire les droits de chaque composant limite l’impact d’une compromission. C’est l’un des huit principes de conception de Saltzer et Schroeder (1975).",
      "whyWrong": {
        "a": "Donner tous les droits partout est l’inverse du moindre privilège.",
        "b": "Des droits définitifs s’accumulent ; le principe demande de les revoir.",
        "c": "L’ancienneté n’est pas un critère de besoin."
      }
    },
    "tcb-q34": {
      "type": "single",
      "correct": "c",
      "explanation": "Un contrôle qui peut être évité, ou dont la décision est mise en cache sans précaution, est contournable. Le moniteur de référence doit intervenir à chaque accès, y compris après un changement de droits.",
      "whyWrong": {
        "a": "Une vérification unique par session laisse des accès non contrôlés ensuite.",
        "b": "Les accès locaux doivent être vérifiés autant que les accès distants.",
        "d": "Un contrôle laissé au choix de l’utilisateur peut être évité."
      }
    },
    "tcb-q35": {
      "type": "single",
      "correct": "d",
      "explanation": "Une liste d’autorisations (liste blanche) échoue en sécurité : si l’on oublie une règle, l’accès reste refusé. Une liste d’interdictions échoue en ouvrant l’accès.",
      "whyWrong": {
        "a": "Tout autoriser par défaut est l’opposé du principe.",
        "b": "Le filtrage des seuls administrateurs ne protège pas les autres comptes.",
        "c": "Consigner sans bloquer ne refuse aucun accès."
      }
    },
    "tcb-q36": {
      "type": "truefalse",
      "correct": false,
      "explanation": "C’est l’inverse : la sécurité ne doit reposer que sur le secret des clés, pas sur celui du mécanisme (principe de Kerckhoffs). Un système public et analysé par beaucoup est plus fiable qu’un système obscur."
    },
    "tcb-q37": {
      "type": "single",
      "correct": "c",
      "explanation": "Le modèle de menace précise les actifs, les attaquants supposés, leurs capacités et les frontières de confiance. Il oriente les choix d’architecture : on ne défend pas de la même façon contre un utilisateur curieux et contre un administrateur d’hébergeur.",
      "whyWrong": {
        "d": "La liste des employés relève du contrôle d’accès physique, pas du modèle de menace.",
        "a": "Le coût d’acquisition est une question budgétaire, pas une analyse de menaces.",
        "b": "Le plan de reprise traite l’après-sinistre, pas l’identification des menaces."
      }
    },
    "tcb-q38": {
      "type": "multi",
      "correct": [
        "a",
        "d"
      ],
      "explanation": "Plus de frontières signifient plus de coût (mémoire, latence) et plus de composants à configurer et superviser. Aucune isolation ne dispense de la surveillance ni ne supprime les vulnérabilités.",
      "whyWrong": {
        "b": "Aucune isolation ne rend un système invulnérable.",
        "c": "La surveillance reste nécessaire pour détecter ce qui franchit les frontières."
      }
    },
    "tcb-q39": {
      "type": "single",
      "correct": "b",
      "explanation": "Les clients ne se font pas confiance : la frontière doit être forte (VM), le réseau segmenté, les secrets protégés et la plateforme attestable. La combinaison réduit l’impact d’une compromission isolée.",
      "whyWrong": {
        "c": "Un conteneur partagé et un compte de service unique rendent les clients solidaires en cas de compromission.",
        "a": "Un serveur unique sans segmentation étend un incident à tous les clients.",
        "d": "Un poste de travail partagé n’offre pas l’isolation attendue d’une plateforme multilocataire."
      }
    },
    "tcb-q40": {
      "type": "open",
      "model": "Menace : un client hostile veut sortir de son environnement, lire les autres clients ou voler les clés. Isolation : une micro-VM par client (noyau dédié), réseau segmenté sans accès au plan d’administration, ressources plafonnées, cœurs dédiés pour limiter les canaux auxiliaires. Clés : conservées dans un HSM ou un service de signature sur un hôte séparé, interface minimale, accès journalisés, jamais présentes dans les VM des clients. Chaîne de confiance : démarrage vérifié (Secure Boot avec révocation) et mesuré, attestation avant l’admission d’un hôte, mises à jour signées. TCB : hyperviseur réduit, service de clés minimal et matériel ; tout le reste (code des clients, orchestration non critique) est supposé hostile. Supervision : journaux d’hyperviseur, détection des évasions, rotation et révocation des clés.",
      "criteria": [
        "Délimite une TCB réduite et sépare les clés du code des clients.",
        "Choisit des frontières d’isolation adaptées (VM ou micro-VM, segmentation).",
        "Décrit une chaîne de confiance (démarrage vérifié, mesure ou attestation)."
      ],
      "explanation": "Une bonne architecture part de la menace, minimise ce à quoi l’on fait confiance et ajoute des frontières successives."
    }
  },
};
