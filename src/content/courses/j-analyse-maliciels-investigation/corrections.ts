// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "j-analyse-maliciels-investigation",
  questions: {
    "ami-q1": {
      "type": "single",
      "correct": "a",
      "explanation": "Dans un cadre défensif, on analyse un échantillon pour comprendre son impact, détecter sa présence et contenir l’incident. Créer, armer ou diffuser un maliciel sort du cadre et est illégal.",
      "whyWrong": {
        "c": "Réutiliser un maliciel sort du cadre défensif.",
        "d": "Diffuser un maliciel est illégal, même pour tester.",
        "b": "La vente est contraire à la loi et à l’éthique."
      }
    },
    "ami-q2": {
      "type": "truefalse",
      "correct": true,
      "explanation": "L’échantillon est une preuve : on travaille sur une copie, on calcule son empreinte et on préserve l’original, afin de garantir l’intégrité et la reproductibilité de l’analyse."
    },
    "ami-q3": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "L’analyse éclaire l’impact, l’étendue de la compromission et les moyens de contenir la propagation.",
      "whyWrong": {
        "d": "Distracteur sans rapport."
      }
    },
    "ami-q31": {
      "type": "single",
      "correct": "d",
      "explanation": "Le triage (empreinte, type, chaînes, réputation) permet souvent de conclure ou de produire des indicateurs sans exécuter le fichier. On réserve l’analyse approfondie aux cas qui le justifient.",
      "whyWrong": {
        "b": "Le triage évite justement d’exécuter inutilement.",
        "c": "L’échantillon est une preuve à conserver.",
        "a": "Prévenir l’attaquant serait contre-productif."
      }
    },
    "ami-q32": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Comme toute preuve, il est collecté de façon documentée, sa copie est vérifiée par empreinte et les accès sont consignés. Cela garantit la valeur probante des conclusions."
    },
    "ami-q4": {
      "type": "single",
      "correct": "b",
      "explanation": "Une VM isolée empêche la contamination du réseau, et les instantanés permettent de revenir à un état propre après chaque test, condition d’une analyse répétable et sûre.",
      "whyWrong": {
        "d": "L’isolement n’accélère pas l’exécution.",
        "a": "Les maliciels fonctionnent aussi sur des machines physiques.",
        "c": "La machine d’analyse est dédiée, pas partagée."
      }
    },
    "ami-q5": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Certains maliciels détectent l’environnement d’analyse (VM, bac à sable) et restent inertes pour tromper l’analyste. L’absence de comportement observé ne prouve rien ; on recoupe analyse statique et dynamique."
    },
    "ami-q6": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Réseau isolé, absence de données réelles et échantillon conservé chiffré et non exécuté par accident sont les précautions de base.",
      "whyWrong": {
        "a": "Connecter la machine d’analyse au réseau de production est exactement ce qu’il faut éviter."
      }
    },
    "ami-q33": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Archive chiffrée, extension neutralisée et machine dédiée limitent le risque d’exécution accidentelle. Un double-clic exécute le fichier : c’est précisément ce qu’il faut éviter.",
      "whyWrong": {
        "c": "Le double-clic peut exécuter l’échantillon sur la machine."
      }
    },
    "ami-q34": {
      "type": "single",
      "correct": "c",
      "explanation": "Chaque exécution modifie la machine. Restaurer l’instantané rend les essais comparables et évite qu’un résidu fausse l’observation suivante ou persiste.",
      "whyWrong": {
        "b": "Ce n’est pas une question de vitesse.",
        "a": "L’échantillon se conserve en archive, pas dans l’instantané.",
        "d": "On restaure la machine, on ne la supprime pas."
      }
    },
    "ami-q7": {
      "type": "single",
      "correct": "d",
      "explanation": "L’analyse statique examine le fichier sans l’exécuter : empreinte, type réel, chaînes, imports, signes d’obfuscation. C’est l’étape la plus sûre et souvent suffisante pour le triage.",
      "whyWrong": {
        "c": "C’est l’analyse dynamique.",
        "a": "Laisser contacter un serveur relève de l’exécution.",
        "b": "Recompiler n’est pas une analyse défensive."
      }
    },
    "ami-q8": {
      "type": "single",
      "correct": "b",
      "explanation": "Interroger par l’empreinte évite de téléverser un fichier qui peut contenir des données sensibles, et ne signale pas à l’attaquant que son échantillon a été repéré (certains surveillent les services publics).",
      "whyWrong": {
        "a": "Le coût n’est pas la raison.",
        "c": "Le calcul d’une empreinte est rapide.",
        "d": "Au contraire, la différence est importante."
      }
    },
    "ami-q9": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Une double extension où le type réel est un exécutable est une technique de déguisement classique : c’est un signal fort au triage."
    },
    "ami-q10": {
      "type": "short",
      "accepted": [
        "empaquetage",
        "empaqueté",
        "packing",
        "packer",
        "packé"
      ],
      "explanation": "L’empaquetage (packing) compresse ou chiffre le contenu de l’exécutable pour cacher son vrai code et gêner l’analyse statique ; il faut souvent le défaire (en environnement isolé) pour analyser."
    },
    "ami-q35": {
      "type": "single",
      "correct": "c",
      "explanation": "Les chaînes lisibles contiennent souvent des adresses, des noms de fichiers, des clés ou des messages, utiles comme indicateurs. Un exécutable empaqueté en montre peu, ce qui est lui-même un signe.",
      "whyWrong": {
        "b": "Aucun mot de passe d’administrateur ne figure dans un échantillon.",
        "d": "Les chaînes décrivent le fichier, pas l’analyste.",
        "a": "La date de naissance de l’auteur n’apparaît pas dans les chaînes d’un exécutable."
      }
    },
    "ami-q36": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Imports, sections et entropie, métadonnées orientent l’analyse : capacités probables, présence d’empaquetage, origine. Aucun secret de l’attaquant n’est à attendre en clair.",
      "whyWrong": {
        "c": "Rien n’indique qu’un tel élément soit présent ou exploitable."
      }
    },
    "ami-q37": {
      "type": "short",
      "accepted": [
        "entropie",
        "entropy",
        "l’entropie"
      ],
      "explanation": "Une entropie élevée suggère un contenu compressé ou chiffré, donc un exécutable empaqueté. C’est un indice parmi d’autres, à recouper avec les imports et les chaînes."
    },
    "ami-q11": {
      "type": "single",
      "correct": "a",
      "explanation": "L’analyse dynamique produit des indicateurs de compromission (fichiers déposés, persistance, domaines contactés) qui servent à détecter et à contenir, pas à réutiliser le maliciel.",
      "whyWrong": {
        "d": "Reproduire le maliciel sort du cadre défensif.",
        "c": "Accéder au serveur d’un attaquant est illégal.",
        "b": "L’objectif est au contraire de produire des indicateurs."
      }
    },
    "ami-q12": {
      "type": "truefalse",
      "correct": false,
      "explanation": "On coupe ou on simule le réseau : laisser l’échantillon joindre son serveur de commande peut prévenir l’attaquant ou déclencher une étape supplémentaire. On restaure l’instantané propre après chaque exécution."
    },
    "ami-q13": {
      "type": "short",
      "accepted": [
        "ioc",
        "iocs",
        "les ioc"
      ],
      "explanation": "Un IOC (indicateur de compromission) est un élément observable — empreinte, domaine, adresse, clé de registre, chemin — qui permet de repérer une compromission dans le parc."
    },
    "ami-q14": {
      "type": "single",
      "correct": "b",
      "explanation": "On rattache les comportements observés aux techniques MITRE ATT&CK, ce qui aide à cartographier la couverture de détection et à repérer les techniques non couvertes.",
      "whyWrong": {
        "a": "Le RGPD est un règlement sur les données personnelles.",
        "d": "ISO 9001 concerne la qualité des organisations.",
        "c": "DHCP attribue des adresses IP."
      }
    },
    "ami-q15": {
      "type": "open",
      "model": "On transforme les constats en éléments actionnables : rassembler les IOC (empreintes, domaines, adresses, chemins, clés de persistance) et les transmettre au SOC pour recherche dans le parc et blocage ; écrire une règle YARA à partir de chaînes ou de structures caractéristiques pour retrouver les variantes sur les serveurs de fichiers et via l’EDR ; rattacher les comportements à MITRE ATT&CK pour repérer les détections manquantes et créer les règles correspondantes dans le SIEM ; documenter l’analyse (empreinte, comportement, IOC, techniques, remédiation) ; enfin vérifier que les détections créées fonctionnent et que la remédiation a été appliquée. On partage les indicateurs défensifs selon le marquage TLP, sans diffuser l’échantillon armé.",
      "criteria": [
        "La production et la diffusion d’IOC au SOC sont décrites.",
        "Une règle YARA ou une règle de détection est mentionnée.",
        "Le rattachement à ATT&CK ou la vérification des détections est évoqué."
      ],
      "explanation": "Le livrable d’une analyse défensive est une capacité de détection durable, pas seulement une compréhension du maliciel."
    },
    "ami-q16": {
      "type": "open",
      "model": "Risques : exécuter la pièce jointe sur un poste de travail connecté peut contaminer la machine puis le réseau de l’entreprise (propagation, chiffrement, vol d’identifiants), détruire des preuves et alerter l’attaquant. Bonne démarche : ne rien exécuter ; traiter la pièce jointe comme une preuve (copie, empreinte) ; commencer par une analyse statique (type réel, empreinte comparée à la réputation par hachage, chaînes) sur une copie neutralisée ; si une analyse dynamique est nécessaire, la mener dans une machine virtuelle isolée et jetable, réseau coupé, avec instantanés, et sans données réelles ; produire des IOC et prévenir le SOC. En résumé, l’analyse se fait dans un environnement dédié, jamais sur un poste de production.",
      "criteria": [
        "Les risques de contamination et de propagation sont expliqués.",
        "La priorité à l’analyse statique sans exécution est indiquée.",
        "L’environnement isolé et jetable est décrit comme la bonne pratique."
      ],
      "explanation": "« Aller vite » sur un poste de production est précisément le scénario qui transforme un fichier suspect en incident généralisé."
    },
    "ami-q38": {
      "type": "single",
      "correct": "d",
      "explanation": "On enregistre les fichiers créés ou modifiés, la persistance installée (registre, tâches, services) et les communications réseau, pour en tirer des indicateurs.",
      "whyWrong": {
        "c": "La couleur de l’écran n’est pas un comportement de l’échantillon.",
        "b": "La météo n’a aucun lien avec l’exécution de l’échantillon.",
        "a": "Sans rapport avec le comportement du maliciel."
      }
    },
    "ami-q39": {
      "type": "single",
      "correct": "a",
      "explanation": "Un résolveur et des services factices dans le réseau isolé permettent d’enregistrer les noms demandés et les connexions tentées, sans prévenir l’attaquant ni exposer l’entreprise.",
      "whyWrong": {
        "d": "Cela préviendrait l’attaquant.",
        "b": "Cela exposerait l’entreprise.",
        "c": "Sans observation, aucun indicateur n’est produit."
      }
    },
    "ami-q40": {
      "type": "single",
      "correct": "c",
      "explanation": "Certains échantillons temporisent ou détectent l’environnement. On prolonge l’observation, on recoupe avec l’analyse statique et on ne conclut pas sur l’absence de comportement.",
      "whyWrong": {
        "d": "L’absence de comportement ne prouve rien.",
        "a": "Rien n’indique une corruption.",
        "b": "L’analyse statique reste indispensable."
      }
    },
    "ami-q17": {
      "type": "single",
      "correct": "c",
      "explanation": "Une macro est un petit programme intégré au document. Légitime pour automatiser des tâches, elle est aussi un vecteur classique de maliciels si l’utilisateur l’active sans précaution.",
      "whyWrong": {
        "d": "Une image n’exécute rien.",
        "b": "Une police est un style d’affichage.",
        "a": "Un mot de passe protège l’ouverture, pas l’exécution."
      }
    },
    "ami-q18": {
      "type": "single",
      "correct": "a",
      "explanation": "On ne l’ouvre pas sur un poste ordinaire. En environnement isolé, on extrait et lit les macros sans les exécuter, on note les URL et les commandes, puis on prévient le SOC.",
      "whyWrong": {
        "b": "Activer les macros exécute le code.",
        "c": "Partager le fichier propage le risque.",
        "d": "Le signaler permet de rechercher d’autres victimes."
      }
    },
    "ami-q19": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Un PDF peut contenir des liens malveillants, des scripts ou exploiter une vulnérabilité du lecteur. Tout format de document doit être traité avec prudence et analysé en environnement isolé."
    },
    "ami-q20": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Les adresses, chemins et commandes forment des indicateurs directement utilisables par le SOC. La mise en forme du texte n’a pas de valeur de détection.",
      "whyWrong": {
        "d": "La couleur de la police n’est pas un indicateur."
      }
    },
    "ami-q21": {
      "type": "single",
      "correct": "b",
      "explanation": "Une commande encodée (Base64) se décode simplement pour lire ce qu’elle fait : on la décode dans un environnement isolé, sans l’exécuter, et on en extrait les adresses et actions.",
      "whyWrong": {
        "c": "Exécuter c’est prendre le risque de l’infection.",
        "d": "Ignorer la commande fait perdre l’essentiel.",
        "a": "Cela divulgue des informations."
      }
    },
    "ami-q22": {
      "type": "short",
      "accepted": [
        "base64",
        "base 64",
        "le base64"
      ],
      "explanation": "Base64 transforme des octets en texte ; il est réversible et ne protège rien. Il sert à contourner de simples filtres ; le décoder en environnement isolé révèle la commande."
    },
    "ami-q23": {
      "type": "single",
      "correct": "d",
      "explanation": "Bloquer par politique les macros des documents d’origine externe supprime le vecteur pour la grande majorité des utilisateurs. La vigilance individuelle ne suffit pas.",
      "whyWrong": {
        "a": "S’en remettre à la prudence de chacun est insuffisant.",
        "b": "Désactiver la protection augmente le risque.",
        "c": "Imprimer ne règle pas le risque de l’ouverture."
      }
    },
    "ami-q24": {
      "type": "single",
      "correct": "b",
      "explanation": "Le rapport décrit l’échantillon (empreinte), son comportement, les indicateurs, les techniques ATT&CK, la confiance et les recommandations. Il ne republie pas le code armé.",
      "whyWrong": {
        "a": "Publier le code armé sort du cadre défensif.",
        "d": "Les identifiants n’ont pas leur place dans un rapport.",
        "c": "Le rapport établit des faits, pas un jugement moral."
      }
    },
    "ami-q25": {
      "type": "single",
      "correct": "a",
      "explanation": "On partage des indicateurs (empreintes, domaines) et des règles, qui aident les défenseurs. L’échantillon, s’il est partagé, l’est de façon protégée et dans un cadre de confiance.",
      "whyWrong": {
        "b": "Un exécutable armé exposé en clair est un risque.",
        "d": "Les données personnelles doivent être protégées.",
        "c": "Les identifiants sont des secrets."
      }
    },
    "ami-q26": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Le droit encadre la détention et la diffusion d’outils malveillants : un motif légitime, un cadre de mission et des mesures de protection sont indispensables. En cas de doute, on consulte le service juridique."
    },
    "ami-q27": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Un cadre écrit, un stockage protégé et la traçabilité réduisent le risque de fuite et d’usage détourné. Publier des échantillons armés serait une diffusion.",
      "whyWrong": {
        "c": "La publication d’échantillons armés est une diffusion, contraire au cadre défensif."
      }
    },
    "ami-q28": {
      "type": "single",
      "correct": "d",
      "explanation": "Une conclusion appuyée par plusieurs analyses concordantes n’a pas le même poids qu’une hypothèse fondée sur un seul indice. Le niveau de confiance guide les décisions.",
      "whyWrong": {
        "a": "Cela précise la conclusion.",
        "c": "Il rend les limites visibles.",
        "b": "La longueur n’est pas le but."
      }
    },
    "ami-q29": {
      "type": "short",
      "accepted": [
        "tlp",
        "le tlp",
        "traffic light protocol"
      ],
      "explanation": "Le TLP (Traffic Light Protocol) précise avec qui une information peut être partagée. Respecter le marquage conditionne la confiance des partenaires."
    },
    "ami-q30": {
      "type": "single",
      "correct": "c",
      "explanation": "Une adresse peut être réattribuée ou partagée : on indique sa date, son contexte et sa confiance, et on évite les blocages excessifs. La qualité des IOC compte plus que leur quantité.",
      "whyWrong": {
        "d": "Un blocage large risque d’interrompre des services légitimes.",
        "b": "Rien ne permet de l’affirmer.",
        "a": "Supprimer tout n’est pas proportionné."
      }
    }
  },
};
