// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "h-execution-outils-equipes",
  questions: {
    "heo-q1": {
      "type": "single",
      "correct": "c",
      "explanation": "L’exploitation ne se mène que sur un périmètre autorisé par écrit (contrat, règles d’engagement) ou sur des cibles d’entraînement prévues pour cela. Agir ailleurs est illégal et dangereux pour la production.",
      "whyWrong": {
        "b": "Un système accessible n’est pas un système autorisé.",
        "d": "Tester un concurrent est illégal.",
        "a": "Sans autorisation, l’accès est une infraction."
      }
    },
    "heo-q2": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Un test Active Directory cherche les chemins qui mènent d’un compte ordinaire à l’administration du domaine (droits hérités, délégations, comptes de service exposés) ; l’objectif défensif est de les fermer avant qu’un attaquant ne les trouve."
    },
    "heo-q3": {
      "type": "single",
      "correct": "b",
      "explanation": "Un proxy d’interception permet d’observer et de modifier les requêtes pour vérifier que le serveur ne fait pas confiance aux données du client (contrôle d’accès, validation). La leçon défensive : tout contrôle doit être refait côté serveur.",
      "whyWrong": {
        "d": "Un proxy ne chiffre pas un disque.",
        "a": "L’attribution d’adresses est le rôle de DHCP.",
        "c": "Il ne remplace pas le DNS."
      }
    },
    "heo-q4": {
      "type": "single",
      "correct": "a",
      "explanation": "Les requêtes paramétrées séparent le code SQL des données : l’entrée de l’utilisateur ne peut plus être interprétée comme du code, ce qui supprime l’injection (voir module F).",
      "whyWrong": {
        "c": "Le mot de passe n’intervient pas dans l’injection.",
        "d": "Changer de port ne corrige rien.",
        "b": "Désactiver HTTPS dégrade la sécurité."
      }
    },
    "heo-q5": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Burp Suite et ZAP (proxys), Gobuster et FFUF (découverte de contenu), Nikto (configuration web) sont des outils de test web.",
      "whyWrong": {
        "c": "Un tableur de bureautique n’est pas un outil de test d’intrusion."
      }
    },
    "heo-q6": {
      "type": "single",
      "correct": "d",
      "explanation": "Les modules d’un cadriciel comme Metasploit visent des vulnérabilités connues : sur un système à jour, les correctifs correspondants sont appliqués et ces modules ne s’appliquent plus. D’où la priorité de la gestion des correctifs.",
      "whyWrong": {
        "a": "La vitesse du réseau n’est pas concernée.",
        "c": "Les mises à jour ne modifient pas les mots de passe.",
        "b": "Une mise à jour ne désactive pas le chiffrement."
      }
    },
    "heo-q7": {
      "type": "single",
      "correct": "d",
      "explanation": "Limitation du nombre de tentatives, verrouillage temporaire et MFA rendent inefficace un outil qui mise sur de nombreux essais d’authentification.",
      "whyWrong": {
        "c": "La taille d’écran n’a aucun effet.",
        "b": "Supprimer la journalisation supprime la détection.",
        "a": "Ouvrir les ports aggrave l’exposition."
      }
    },
    "heo-q8": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Dans un test autorisé, l’audit de mots de passe mesure la robustesse à partir d’empreintes obtenues légalement pendant la mission, afin d’imposer de meilleures pratiques. Ce n’est pas un vol de comptes."
    },
    "heo-q9": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Hachage lent et salé, politiques robustes et MFA réduisent fortement l’efficacité d’un cassage hors ligne.",
      "whyWrong": {
        "a": "Stocker les mots de passe en clair est l’exact opposé : cela supprime toute protection."
      }
    },
    "heo-q10": {
      "type": "single",
      "correct": "c",
      "explanation": "Un test AD cherche les chemins d’élévation vers l’administration du domaine (droits hérités, délégations, comptes de service exposés). L’objectif défensif est de les identifier pour les fermer avant qu’un attaquant ne les trouve.",
      "whyWrong": {
        "a": "La vitesse du réseau n’est pas l’objet.",
        "b": "La taille des disques n’est pas concernée.",
        "d": "L’interface n’a aucun rapport."
      }
    },
    "heo-q11": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Modèle en tiers, moindre privilège et LAPS pour AD ; WPA2/WPA3-Entreprise, 802.1X et détection des points d’accès pirates pour le Wi-Fi.",
      "whyWrong": {
        "c": "Partager publiquement le mot de passe Wi-Fi de l’entreprise est une faute de sécurité, pas un durcissement."
      }
    },
    "heo-q12": {
      "type": "single",
      "correct": "a",
      "explanation": "Segmentation, moindre privilège, détection par EDR et journalisation limitent ce qu’un accès obtenu permet d’atteindre et accélèrent la détection. Les autres options dégradent la sécurité.",
      "whyWrong": {
        "b": "La luminosité n’a aucun effet.",
        "d": "Désactiver l’antivirus dégrade la sécurité.",
        "c": "Donner les droits d’administration à tous aggrave l’impact."
      }
    },
    "heo-q13": {
      "type": "single",
      "correct": "b",
      "explanation": "La micro-segmentation et le filtrage inter-zones empêchent qu’un accès sur un segment donne accès aux autres : c’est la contre-mesure directe du pivoting.",
      "whyWrong": {
        "a": "Un mot de passe plus long ne cloisonne pas le réseau.",
        "d": "Un écran de veille n’a pas d’effet sur le réseau.",
        "c": "Supprimer les journaux supprime la détection."
      }
    },
    "heo-q14": {
      "type": "single",
      "correct": "b",
      "explanation": "La Red Team simule un adversaire réaliste pour éprouver la détection et la réponse ; la Purple Team fait collaborer rouge et bleu pour rejouer les actions offensives et améliorer directement la détection.",
      "whyWrong": {
        "d": "La Red Team ne se limite pas au Wi-Fi.",
        "a": "La Purple Team ne se limite pas à la reconnaissance.",
        "c": "Les deux démarches sont distinctes."
      }
    },
    "heo-q15": {
      "type": "open",
      "model": "Un test d’intrusion n’a de valeur défensive que par ce qu’il permet de corriger et de détecter. « Être entré » ne fait que démontrer un risque ; l’important est la liste des vulnérabilités à corriger (avec leur gravité) et des détections à ajouter pour repérer les mêmes techniques à l’avenir. La démarche Purple Team sert exactement cela : au lieu d’un rapport remis à la fin, les équipes offensive (rouge) et défensive (bleue) travaillent ensemble, rejouent chaque technique utilisée, vérifient si le SOC la détecte, et créent ou ajustent les règles jusqu’à ce qu’elle soit détectée. Chaque action offensive devient ainsi une amélioration mesurable de la défense, rattachable à un référentiel comme MITRE ATT&CK pour suivre la couverture.",
      "criteria": [
        "La valeur est située dans les correctifs et les détections, pas dans la compromission.",
        "La démarche Purple Team (collaboration rouge/bleu, rejeu) est expliquée.",
        "Le lien avec l’amélioration de la détection est fait."
      ],
      "explanation": "C’est le sens défensif du pentest : il sert à renforcer, pas à prouver qu’on sait entrer."
    },
    "heo-q16": {
      "type": "open",
      "model": "Connaître les outils offensifs est utile pour défendre parce que chaque outil correspond à une faiblesse précise, et donc à une parade précise. Un proxy d’interception rappelle qu’il faut tout revérifier côté serveur ; sqlmap, qu’il faut des requêtes paramétrées ; Hydra, qu’il faut limiter les tentatives et imposer la MFA ; John the Ripper ou Hashcat, qu’il faut un hachage lent et salé et des mots de passe robustes ; Metasploit et Nuclei, qu’il faut appliquer les correctifs et réduire la surface exposée. Savoir ce que ces outils cherchent permet de prioriser les défenses, de comprendre les rapports de test et de vérifier que les corrections tiennent. On n’a pas besoin d’attaquer des systèmes tiers pour cela : la connaissance du mécanisme suffit à concevoir la défense.",
      "criteria": [
        "Le principe « à chaque outil sa défense » est énoncé.",
        "Au moins deux exemples outil → défense sont donnés.",
        "L’usage défensif (prioriser, comprendre les rapports, vérifier les correctifs) est mentionné."
      ],
      "explanation": "Comprendre l’offensive pour mieux défendre est le fil conducteur de tout le module, dans un cadre strictement autorisé."
    },
    "heo-q17": {
      "type": "single",
      "correct": "d",
      "explanation": "Le journal horodaté des actions et des adresses source permet au client et au SOC de séparer ce qui relève du test de ce qui relève d’une attaque simultanée, et protège le testeur en cas de litige.",
      "whyWrong": {
        "a": "Le journal n’a pas pour but de rallonger la mission.",
        "c": "Il alimente le rapport, il ne le remplace pas.",
        "b": "Il documente les traces, il ne les efface pas."
      }
    },
    "heo-q18": {
      "type": "short",
      "accepted": [
        "ZAP",
        "zap",
        "OWASP ZAP"
      ],
      "explanation": "OWASP ZAP (Zed Attack Proxy) est un proxy d’interception et un scanner open source. Burp Suite en est l’équivalent commercial le plus répandu."
    },
    "heo-q19": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Ces outils essaient simplement une liste de chemins et signalent ceux qui répondent. Ils révèlent ce qui est accessible par devinette (sauvegardes, pages d’administration) ; la défense est de ne rien laisser de sensible accessible sans contrôle."
    },
    "heo-q20": {
      "type": "single",
      "correct": "a",
      "explanation": "Une fonction lente multiplie le coût de chaque essai et le sel rend inutiles les tables précalculées : le cassage hors ligne devient beaucoup plus long. Ce n’est ni un chiffrement ni un verrouillage de compte.",
      "whyWrong": {
        "b": "Le hachage n’est pas un chiffrement.",
        "d": "Il n’empêche pas de copier le fichier.",
        "c": "Le verrouillage concerne l’authentification en ligne."
      }
    },
    "heo-q21": {
      "type": "short",
      "accepted": [
        "Hashcat",
        "hashcat"
      ],
      "explanation": "Hashcat exploite les processeurs graphiques pour tester très rapidement des empreintes. C’est pourquoi un hachage rapide (MD5, SHA-1 simple) protège mal les mots de passe."
    },
    "heo-q22": {
      "type": "single",
      "correct": "c",
      "explanation": "802.1X associé à WPA2/WPA3-Entreprise authentifie chaque utilisateur ou appareil (certificat, identifiants), ce qui permet de révoquer un accès individuel. Le filtrage MAC et le masquage du SSID ne sont pas des protections.",
      "whyWrong": {
        "d": "Un mot de passe partagé identifie tout le monde de la même façon.",
        "a": "Les adresses MAC se falsifient.",
        "b": "Un SSID masqué reste découvrable."
      }
    },
    "heo-q23": {
      "type": "single",
      "correct": "d",
      "explanation": "Un compte de service a souvent des privilèges étendus, un mot de passe ancien, parfois faible, et n’est pas surveillé comme un compte humain. On utilise des comptes gérés, des mots de passe longs et la rotation.",
      "whyWrong": {
        "c": "Un compte de service est actif.",
        "b": "Leurs connexions sont journalisées.",
        "a": "Ils n’appartiennent pas aux invités."
      }
    },
    "heo-q24": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Dans le modèle en tiers, un compte qui administre les contrôleurs de domaine ne se connecte jamais sur un poste ordinaire : un vol d’identifiants sur un poste ne mène pas à l’administration du domaine."
    },
    "heo-q25": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "L’authentification individuelle, la détection des bornes pirates et la séparation du réseau invité réduisent le risque. Un mot de passe unique ne permet ni de révoquer un accès ni de savoir qui se connecte.",
      "whyWrong": {
        "d": "Un mot de passe partagé se diffuse sans contrôle et ne permet pas de révocation individuelle."
      }
    },
    "heo-q26": {
      "type": "single",
      "correct": "b",
      "explanation": "La règle se vérifie en rejouant la technique qu’elle doit repérer, dans un cadre autorisé : si l’alerte apparaît, la détection est validée ; sinon, on l’ajuste puis on rejoue.",
      "whyWrong": {
        "d": "Une règle jamais testée n’est pas validée.",
        "a": "Attendre une attaque réelle est trop tard.",
        "c": "Désactiver la règle ne prouve rien."
      }
    },
    "heo-q27": {
      "type": "single",
      "correct": "a",
      "explanation": "ATT&CK donne un langage commun : chaque technique rejouée est rattachée à son identifiant, ce qui permet de cartographier ce qui est détecté et de comparer les exercices dans le temps.",
      "whyWrong": {
        "d": "Il ne remplace pas le journal des actions.",
        "b": "Il ne mesure pas un débit.",
        "c": "Il ne chiffre rien."
      }
    },
    "heo-q28": {
      "type": "short",
      "accepted": [
        "EDR",
        "edr"
      ],
      "explanation": "L’EDR (Endpoint Detection and Response) observe l’activité des postes (processus, fichiers, réseau), détecte les comportements suspects et permet de contenir une machine à distance."
    },
    "heo-q29": {
      "type": "single",
      "correct": "c",
      "explanation": "Un conteneur de stockage (bucket) ouvert au public expose son contenu à n’importe qui. Les trois autres situations sont des pratiques de protection.",
      "whyWrong": {
        "d": "Le chiffrement avec clé du client est une protection.",
        "b": "Une sauvegarde dans une autre région renforce la résilience.",
        "a": "La MFA protège un accès d’administration."
      }
    },
    "heo-q30": {
      "type": "single",
      "correct": "a",
      "explanation": "Dans le cloud, les identités sont le nouveau périmètre : un compte ou une clé exposés avec des droits larges permettent de lire, modifier ou supprimer beaucoup de ressources. Le moindre privilège limite l’impact.",
      "whyWrong": {
        "d": "Les droits n’influent pas sur la vitesse.",
        "c": "Ils ne gênent pas les sauvegardes.",
        "b": "Ils n’affectent pas la force du chiffrement."
      }
    },
    "heo-q31": {
      "type": "truefalse",
      "correct": false,
      "explanation": "L’image contient un système et des bibliothèques qui peuvent avoir des failles connues, exploitables depuis l’intérieur du conteneur. On construit des images minimales, analysées et reconstruites régulièrement."
    },
    "heo-q32": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Autorisation, limitation de débit et authentification sont des protections de base. Renvoyer toutes les propriétés expose des données inutiles (exposition excessive).",
      "whyWrong": {
        "a": "Renvoyer toutes les propriétés est un défaut fréquent des API."
      }
    },
    "heo-q33": {
      "type": "short",
      "accepted": [
        "CSPM",
        "cspm"
      ],
      "explanation": "Le CSPM (Cloud Security Posture Management) repère les écarts de configuration (stockage public, droits excessifs, journalisation absente) et alerte en continu."
    },
    "heo-q34": {
      "type": "single",
      "correct": "d",
      "explanation": "Chaque fournisseur précise ce qui est autorisé et ce qui ne l’est pas (déni de service, services partagés, notification). Ces règles se reprennent dans les RoE, en plus de l’accord du client.",
      "whyWrong": {
        "c": "Le système utilisé n’est pas une condition.",
        "a": "Les licences ne valent pas autorisation.",
        "b": "Un environnement vide n’est pas requis pour être autorisé."
      }
    },
    "heo-q35": {
      "type": "single",
      "correct": "b",
      "explanation": "Si dix techniques sont rejouées et que le SOC en détecte six, le taux est de 60 %. Il mesure la couverture réelle de la détection et oriente les efforts.",
      "whyWrong": {
        "c": "Le volume d’alertes n’est pas un taux de détection.",
        "a": "La durée de l’exercice ne dit rien de la détection.",
        "d": "Le nombre de postes est une taille de périmètre."
      }
    },
    "heo-q36": {
      "type": "single",
      "correct": "c",
      "explanation": "Plus l’alerte suit vite l’action, plus la réponse peut être rapide. Le délai de détection se suit au fil des exercices avec le délai de réponse (alerte → confinement).",
      "whyWrong": {
        "b": "Le nombre de règles est une activité.",
        "d": "Le démarrage des outils n’indique pas la détection.",
        "a": "Le nombre de techniques du référentiel n’est pas un délai."
      }
    },
    "heo-q37": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Rejouer le test d’origine confirme que le correctif est efficace et qu’il n’a pas introduit d’autre défaut. Un constat n’est clos qu’après retest."
    },
    "heo-q38": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Le rapport relie chaque technique à son identifiant, indique ce qui a été détecté et fixe des actions suivies. Les secrets récupérés n’ont pas à y figurer.",
      "whyWrong": {
        "c": "Des mots de passe en clair dans un rapport créent une nouvelle fuite."
      }
    },
    "heo-q39": {
      "type": "truefalse",
      "correct": false,
      "explanation": "L’objectif est de révéler des lacunes puis de les combler : un exercice où tout est détecté du premier coup apprend peu. La réussite se mesure à l’amélioration des indicateurs d’un exercice à l’autre."
    },
    "heo-q40": {
      "type": "open",
      "model": "Objectif : vérifier que le SOC détecte et fait contenir les étapes d’une attaque par rançongiciel dans un environnement autorisé, sans toucher aux vraies données. Déroulement : choisir les techniques du scénario (accès initial par document piégé de test, exécution d’un interpréteur, vol d’identifiants simulé, déplacement latéral vers un serveur de test, tentative de suppression de sauvegardes factices, chiffrement d’un dossier factice), les rattacher à ATT&CK, les rejouer une à une avec l’équipe bleue, noter si l’alerte apparaît et créer ou ajuster la règle sinon. Indicateurs : taux de détection, délais de détection et de réponse, couverture du scénario. Suites : actions correctives avec responsables (règles, durcissement, sauvegardes isolées et immuables, moindre privilège, segmentation), retest sous 30 jours et rapport à la direction montrant l’évolution des indicateurs.",
      "criteria": [
        "Un scénario décomposé en techniques rejouables dans un cadre autorisé est proposé.",
        "Des indicateurs (taux, délais, couverture) sont définis.",
        "Le suivi (actions, responsables, retest, rapport) est décrit."
      ],
      "explanation": "La force d’un exercice Purple Team est de transformer chaque lacune en action mesurable et suivie."
    }
  },
};
