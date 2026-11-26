// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "a-virtualisation-conteneurs",
  questions: {
    "virt-q1": {
      "type": "single",
      "correct": "a",
      "explanation": "L’hyperviseur répartit le matériel (processeur, mémoire, disque, réseau) entre plusieurs machines virtuelles et les isole les unes des autres.",
      "whyWrong": {
        "d": "Un pare-feu filtre le trafic ; il ne crée pas de machines virtuelles.",
        "c": "Un antivirus analyse des fichiers ; ce n’est pas un hyperviseur.",
        "b": "Attribuer des adresses IP est le rôle d’un serveur DHCP."
      }
    },
    "virt-q2": {
      "type": "single",
      "correct": "b",
      "explanation": "Un hyperviseur de type 1 (ESXi, Hyper-V, Xen) tourne « à même le métal » ; un type 2 (VirtualBox, VMware Workstation) est un logiciel installé sur un système d’exploitation hôte, qui s’ajoute à la surface d’attaque.",
      "whyWrong": {
        "a": "Les deux types hébergent des systèmes variés ; la différence tient au niveau d’installation.",
        "c": "Aucun des deux types n’est installé dans le navigateur.",
        "d": "Les deux types isolent les machines virtuelles."
      }
    },
    "virt-q3": {
      "type": "single",
      "correct": "c",
      "explanation": "VirtualBox s’installe comme une application au-dessus d’un système hôte. ESXi et Xen s’exécutent directement sur le matériel, et KVM transforme le noyau Linux en hyperviseur.",
      "whyWrong": {
        "a": "ESXi s’exécute directement sur le matériel : c’est un type 1.",
        "d": "Xen s’exécute directement sur le matériel : c’est un type 1.",
        "b": "KVM transforme le noyau Linux en hyperviseur ; il est classé en type 1."
      }
    },
    "virt-q4": {
      "type": "truefalse",
      "correct": true,
      "explanation": "C’est la différence essentielle avec un conteneur : la VM embarque un système complet, noyau compris, et ne partage avec l’hôte que le matériel présenté par l’hyperviseur."
    },
    "virt-q5": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "La virtualisation permet d’isoler, de jeter et de restaurer des environnements. Elle ne rend pas un système invulnérable, et le système invité doit être mis à jour comme un système physique.",
      "whyWrong": {
        "e": "Une VM reste attaquable : elle a un système, des services et des failles comme une machine physique.",
        "a": "Le système invité reçoit les mêmes correctifs qu’un système physique."
      }
    },
    "virt-q6": {
      "type": "single",
      "correct": "d",
      "explanation": "L’évasion de VM (VM escape) franchit la frontière de l’hyperviseur. Elle est rare mais grave, car elle donne accès à l’hôte et aux autres machines virtuelles. Elle se combat par les correctifs, la réduction des périphériques virtuels exposés et la segmentation.",
      "whyWrong": {
        "a": "Le hameçonnage trompe un utilisateur ; il ne franchit pas l’hyperviseur.",
        "b": "Un dépassement de quota n’est pas une attaque d’évasion.",
        "c": "L’usurpation ARP vise le réseau local."
      }
    },
    "virt-q7": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Un instantané peut inclure l’état de la mémoire vive de l’invité : clés, mots de passe, jetons. Il doit être protégé et supprimé comme n’importe quelle sauvegarde sensible."
    },
    "virt-q8": {
      "type": "single",
      "correct": "b",
      "explanation": "Qui administre l’hyperviseur peut arrêter, copier ou lire les disques de toutes les VM. L’accès doit être réservé à un réseau d’administration dédié, avec authentification forte et journalisation.",
      "whyWrong": {
        "d": "La console d’un hyperviseur ne stocke pas les mots de passe des utilisateurs du réseau.",
        "c": "Elle n’est pas exposée par défaut ; il faut au contraire éviter de l’exposer.",
        "a": "Elle dispose d’une authentification : c’est précisément ce qu’il faut durcir."
      }
    },
    "virt-q9": {
      "type": "short",
      "accepted": [
        "vt-x",
        "vtx",
        "intel vt-x"
      ],
      "explanation": "Intel VT-x (et AMD-V chez AMD) permettent au processeur d’exécuter le code invité directement, avec un contrôle de l’hyperviseur. Sans elle, la virtualisation serait bien plus lente ; elle doit parfois être activée dans le firmware."
    },
    "virt-q10": {
      "type": "single",
      "correct": "c",
      "explanation": "Un conteneur est un ou plusieurs processus isolés par des fonctions du noyau (namespaces, cgroups). Il ne contient pas de noyau : il utilise celui de l’hôte.",
      "whyWrong": {
        "a": "Une machine virtuelle a son propre noyau ; un conteneur partage celui de l’hôte.",
        "d": "Un conteneur n’est pas un fichier compressé de documents.",
        "b": "Un conteneur est logiciel, pas un composant matériel."
      }
    },
    "virt-q11": {
      "type": "single",
      "correct": "a",
      "explanation": "Le noyau partagé rend les conteneurs légers et rapides à démarrer, mais une faille du noyau les concerne tous. Une VM isole mieux, au prix de ressources plus importantes.",
      "whyWrong": {
        "c": "C’est l’inverse : le conteneur partage le noyau, la VM embarque le sien.",
        "d": "Un conteneur ne nécessite pas d’hyperviseur.",
        "b": "Une VM peut exécuter un système différent de celui de l’hôte."
      }
    },
    "virt-q12": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Comme tous les conteneurs partagent le noyau de l’hôte, une élévation de privilèges noyau échappe à l’isolation et atteint l’ensemble de la machine."
    },
    "virt-q13": {
      "type": "single",
      "correct": "d",
      "explanation": "Les groupes de contrôle (cgroups) mesurent et plafonnent les ressources. Ils protègent contre l’épuisement des ressources par un conteneur, volontaire (déni de service) ou accidentel.",
      "whyWrong": {
        "b": "Les namespaces isolent la vue des ressources, ils ne les plafonnent pas.",
        "a": "Secure Boot protège le démarrage ; il ne limite pas les ressources d’un conteneur.",
        "c": "Les capabilities découpent les privilèges ; elles ne limitent pas le processeur ou la mémoire."
      }
    },
    "virt-q14": {
      "type": "single",
      "correct": "d",
      "explanation": "Un namespace donne au processus une vue privée d’une catégorie de ressources (PID, réseau, montages, utilisateurs…). Dans son namespace de PID, le premier processus du conteneur est le PID 1.",
      "whyWrong": {
        "b": "Les cgroups limitent la consommation de ressources ; ils n’en donnent pas une vue privée.",
        "c": "Le TPM est une puce de sécurité sans lien avec l’isolation des conteneurs.",
        "a": "Les journaux d’audit enregistrent des événements ; ils n’isolent rien."
      }
    },
    "virt-q15": {
      "type": "multi",
      "correct": [
        "a",
        "c"
      ],
      "explanation": "Les conteneurs sont légers, car ils partagent le noyau. En contrepartie, leur isolation est moins forte que celle d’une VM et ils ne disposent pas d’un noyau distinct.",
      "whyWrong": {
        "d": "L’isolation d’un conteneur est en général plus faible, pas plus forte.",
        "b": "Les conteneurs partagent le noyau de l’hôte."
      }
    },
    "virt-q16": {
      "type": "open",
      "model": "Un conteneur partage le noyau de l’hôte : l’isolation repose sur des fonctions du noyau (namespaces, cgroups, capabilities, seccomp). Une faille du noyau ou une mauvaise configuration (mode privilégié, socket du démon monté, utilisateur root) permet de sortir du conteneur. Une VM dispose de son propre noyau et la frontière est l’hyperviseur, plus petite et mieux définie. Pour du code non fiable ou plusieurs clients, on préfère des VM ou des micro-VM ; pour des applications maîtrisées, les conteneurs durcis suffisent souvent.",
      "criteria": [
        "Explique le noyau partagé comme limite principale.",
        "Cite au moins une mauvaise configuration qui permet l’évasion.",
        "Propose un choix adapté selon le niveau de confiance."
      ],
      "explanation": "L’isolation est une question de degré : le bon choix dépend de la confiance accordée au code exécuté."
    },
    "virt-q17": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Un conteneur embarque les fichiers et bibliothèques nécessaires à l’application, mais pas de noyau : il utilise celui de l’hôte."
    },
    "virt-q18": {
      "type": "single",
      "correct": "a",
      "explanation": "Le mode privilégié supprime l’essentiel des protections : capabilities complètes, accès aux périphériques, filtres levés. Un code malveillant y sort facilement du conteneur. Il est à réserver à des cas très rares et maîtrisés.",
      "whyWrong": {
        "b": "`--privileged` ne chiffre pas les échanges avec le registre.",
        "d": "Limiter le processeur et la mémoire relève des options de ressources, pas de `--privileged`.",
        "c": "`--privileged` ne coupe pas le réseau."
      }
    },
    "virt-q19": {
      "type": "single",
      "correct": "b",
      "explanation": "Qui parle au démon peut lancer un conteneur privilégié montant la racine de l’hôte. Monter le socket équivaut donc à donner les droits root de la machine à tout code qui s’exécute dans le conteneur.",
      "whyWrong": {
        "c": "Le socket donne bien plus qu’un accès en lecture.",
        "d": "Il ne sert pas à accélérer le réseau.",
        "a": "Il ne sert pas à ouvrir un tunnel vers le registre."
      }
    },
    "virt-q20": {
      "type": "single",
      "correct": "c",
      "explanation": "Plutôt que « tout ou rien », les capabilities (par exemple lier un port inférieur à 1024, configurer le réseau) s’attribuent séparément. On retire celles dont l’application n’a pas besoin (`--cap-drop ALL`, puis ajout au cas par cas).",
      "whyWrong": {
        "a": "Les certificats de signature d’images sont une autre notion.",
        "b": "Les quotas de disque se gèrent à part.",
        "d": "Les profils de pare-feu filtrent des ports, pas des pouvoirs."
      }
    },
    "virt-q21": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "e"
      ],
      "explanation": "Moins de droits, un système de fichiers en lecture seule et un utilisateur non root limitent l’impact d’une compromission. Le mode privilégié et le montage de la racine de l’hôte font l’inverse.",
      "whyWrong": {
        "b": "Le mode privilégié lève les protections du conteneur.",
        "d": "Monter la racine de l’hôte donne accès à tous ses fichiers."
      }
    },
    "virt-q22": {
      "type": "single",
      "correct": "c",
      "explanation": "Un profil seccomp interdit certains appels système au noyau, ce qui réduit sa surface d’attaque exposée au conteneur. AppArmor, lui, restreint l’accès aux fichiers, au réseau et aux capabilities.",
      "whyWrong": {
        "b": "AppArmor est un contrôle d’accès obligatoire : il restreint les accès aux ressources, pas la liste des appels système.",
        "d": "Les cgroups limitent les ressources, pas les appels système.",
        "a": "DNSSEC authentifie des réponses DNS."
      }
    },
    "virt-q23": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Si l’attaquant prend le contrôle du processus, il hérite de ses droits : un utilisateur sans privilèges ne peut ni installer d’outils, ni modifier le système, ni exploiter facilement une faille d’élévation de privilèges."
    },
    "virt-q24": {
      "type": "short",
      "accepted": [
        "mac"
      ],
      "explanation": "Le contrôle d’accès obligatoire (MAC, Mandatory Access Control) applique une politique centrale que ni l’utilisateur ni le processus ne peuvent modifier, même s’ils sont propriétaires de la ressource."
    },
    "virt-q25": {
      "type": "single",
      "correct": "d",
      "explanation": "En mode rootless (Podman, Docker rootless), même un attaquant qui sort du conteneur n’obtient que les droits d’un utilisateur ordinaire. Certaines fonctions (ports bas, certains réseaux) sont limitées.",
      "whyWrong": {
        "b": "Le mode rootless ne retire pas l’accès aux fichiers de l’image.",
        "a": "Il ne s’occupe ni du chiffrement ni de la signature des images.",
        "c": "Le noyau de l’hôte n’est jamais remplacé par celui du conteneur."
      }
    },
    "virt-q26": {
      "type": "single",
      "correct": "a",
      "explanation": "Une image regroupe l’application et ses dépendances dans des couches empilées, en lecture seule. Chaque conteneur ajoute une couche inscriptible qui disparaît avec lui.",
      "whyWrong": {
        "c": "Une image n’est pas une capture d’écran.",
        "d": "Une image ne configure pas le pare-feu de l’hôte.",
        "b": "Une image n’est pas un disque virtuel de machine complète."
      }
    },
    "virt-q27": {
      "type": "single",
      "correct": "b",
      "explanation": "Un tag est une étiquette mutable : son propriétaire peut le déplacer vers une autre image. Pour un déploiement reproductible et vérifiable, on référence l’image par son digest.",
      "whyWrong": {
        "d": "Un tag fonctionne hors ligne si l’image est déjà présente ; le défaut est ailleurs.",
        "c": "Un tag n’impose pas de droits administrateur au registre.",
        "a": "Un tag ne supprime rien dans les couches."
      }
    },
    "virt-q28": {
      "type": "single",
      "correct": "c",
      "explanation": "Le digest est l’empreinte du contenu de l’image : si un seul octet change, il change. Il garantit que l’on déploie exactement l’image que l’on a analysée.",
      "whyWrong": {
        "b": "Le nom de l’auteur ne fait pas partie du digest.",
        "d": "La date de publication n’est pas ce que le digest désigne.",
        "a": "L’adresse du registre n’est pas le digest."
      }
    },
    "virt-q29": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Les couches sont empilées : le fichier reste présent dans la couche où il a été ajouté et peut être extrait. Il faut ne jamais l’inclure, ou utiliser des secrets de construction qui ne sont pas conservés."
    },
    "virt-q30": {
      "type": "single",
      "correct": "d",
      "explanation": "Une image est distribuée, copiée et analysée : tout ce qu’elle contient est exposé. Les secrets sont fournis à l’exécution par un mécanisme dédié, avec des droits minimaux.",
      "whyWrong": {
        "b": "Un gestionnaire de secrets est une bonne pratique.",
        "a": "Un volume protégé en lecture seule est une bonne pratique.",
        "c": "L’injection à l’exécution par l’orchestrateur est une bonne pratique."
      }
    },
    "virt-q31": {
      "type": "short",
      "accepted": [
        "sbom"
      ],
      "explanation": "La SBOM (Software Bill of Materials), aux formats SPDX ou CycloneDX, permet de retrouver rapidement les images concernées quand une vulnérabilité est annoncée sur une bibliothèque."
    },
    "virt-q32": {
      "type": "multi",
      "correct": [
        "b",
        "d",
        "e"
      ],
      "explanation": "Une base minimale réduit la surface d’attaque, l’analyse détecte les composants vulnérables et le digest fige le contenu. Une image d’origine inconnue ou jamais reconstruite accumule les risques.",
      "whyWrong": {
        "c": "Une image d’origine inconnue peut contenir un code malveillant.",
        "a": "Sans reconstruction régulière, les correctifs de la base ne sont pas appliqués."
      }
    },
    "virt-q33": {
      "type": "open",
      "model": "Construction : partir d’une image de base minimale et officielle, épingler les versions, ne pas copier de secrets, ne pas laisser d’outils inutiles, utiliser un utilisateur non root, produire une SBOM, analyser l’image avec un scanner et la signer. Déploiement : référencer l’image par son digest, fournir les secrets à l’exécution, retirer les capabilities inutiles, système de fichiers en lecture seule, limites de ressources, ne publier que les ports nécessaires. Reconstruction régulière pour appliquer les correctifs.",
      "criteria": [
        "Évoque une base minimale et l’absence de secrets dans l’image.",
        "Évoque l’analyse des vulnérabilités ou la signature.",
        "Évoque au moins deux mesures d’exécution (non root, capabilities, lecture seule)."
      ],
      "explanation": "La sécurité d’un conteneur se construit dès l’image, puis se complète à l’exécution."
    },
    "virt-q34": {
      "type": "single",
      "correct": "b",
      "explanation": "Un orchestrateur décide où lancer les conteneurs, les redémarre, les met à l’échelle et gère leur réseau. Il ajoute sa propre surface d’attaque (API, droits, secrets) étudiée dans le module L.",
      "whyWrong": {
        "d": "Fabriquer les images relève de la construction, pas de l’orchestration.",
        "a": "Le chiffrement des disques est une fonction du système, pas de l’orchestrateur.",
        "c": "Un orchestrateur s’appuie sur le noyau Linux ; il ne le remplace pas."
      }
    },
    "virt-q35": {
      "type": "single",
      "correct": "a",
      "explanation": "Publier un port ouvre le service sur l’interface du serveur. Sans pare-feu ou liaison explicite à `127.0.0.1`, il devient accessible depuis le réseau. On ne publie que ce qui est nécessaire.",
      "whyWrong": {
        "d": "Un port publié est joignable depuis l’extérieur de l’hôte.",
        "c": "Publier un port ne touche pas au système de fichiers.",
        "b": "Publier un port ne touche pas au registre."
      }
    },
    "virt-q36": {
      "type": "single",
      "correct": "d",
      "explanation": "Pour du code non fiable et multi-locataire, la frontière doit être la plus forte possible : VM ou micro-VM (Firecracker, Kata Containers), ou un noyau intercepté comme gVisor.",
      "whyWrong": {
        "b": "Un conteneur partagé n’offre pas une frontière assez forte pour du code non fiable.",
        "c": "Des threads dans un même processus ne s’isolent pas entre eux.",
        "a": "Un compte commun supprime toute séparation entre clients."
      }
    },
    "virt-q37": {
      "type": "single",
      "correct": "c",
      "explanation": "Une VM jetable, sans accès aux données et au réseau de production, restaurée après l’analyse (instantané), limite les dégâts. Certains malwares détectent la virtualisation : l’environnement doit rester discret.",
      "whyWrong": {
        "d": "Un poste connecté au réseau expose l’entreprise au malware.",
        "b": "Un conteneur privilégié sur un serveur de production met la production en danger.",
        "a": "Un dossier partagé propagerait l’échantillon à d’autres machines."
      }
    },
    "virt-q38": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Si un attaquant sort du conteneur, il arrive dans la VM et non sur l’hôte physique. C’est le principe des clouds publics : plusieurs frontières successives plutôt qu’une seule."
    },
    "virt-q39": {
      "type": "multi",
      "correct": [
        "a",
        "d"
      ],
      "explanation": "La segmentation limite les déplacements latéraux et l’exposition minimale réduit la surface d’attaque. Tout publier ou tout relier sans filtrage fait le contraire.",
      "whyWrong": {
        "c": "Cela multiplie les services exposés.",
        "b": "Un conteneur compromis atteindrait alors tous les autres."
      }
    },
    "virt-q40": {
      "type": "open",
      "model": "C’est à refuser : le mode privilégié supprime l’isolation et le socket du démon permet de lancer n’importe quel conteneur, y compris un conteneur montant la racine de l’hôte. Une compromission de l’application donne donc les droits root sur la machine et sur tous les autres conteneurs. Alternatives : identifier les besoins réels (un périphérique, une capability précise) et n’accorder que cela ; utiliser un orchestrateur ou un outil de déploiement externe au conteneur ; construire les images dans un service dédié ; exécuter en utilisateur non root, système de fichiers en lecture seule, profil seccomp et contrôle d’accès obligatoire.",
      "criteria": [
        "Explique que --privileged supprime l’isolation.",
        "Explique que le socket du démon équivaut à un accès root sur l’hôte.",
        "Propose des droits ciblés ou une alternative de déploiement."
      ],
      "explanation": "On accorde le droit précis dont l’application a besoin, jamais « tous les droits » par commodité."
    }
  },
};
