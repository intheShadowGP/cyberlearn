// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "a-fichiers-programmes-ligne-commande",
  questions: {
    "fpc-q1": {
      "type": "single",
      "correct": "b",
      "explanation": "Le nom est rangé dans un répertoire, les métadonnées décrivent le fichier (taille, propriétaire, droits, dates) et le contenu est réparti en blocs sur le support.",
      "whyWrong": {
        "d": "L’adresse IP relève du réseau, pas du système de fichiers.",
        "c": "Le processeur et la mémoire sont des composants matériels, pas des attributs de fichier."
      }
    },
    "fpc-q2": {
      "type": "single",
      "correct": "a",
      "explanation": "Un chemin absolu (`/etc/hosts`, `C:\\Windows`) désigne le même fichier quel que soit l’endroit d’où on le lit, car il part de la racine. Un chemin relatif dépend du répertoire courant."
    },
    "fpc-q3": {
      "type": "truefalse",
      "correct": false,
      "explanation": "L’extension n’est qu’une indication fournie par le nom. On peut renommer un fichier sans changer son contenu : c’est pourquoi on vérifie le type réel, par exemple grâce aux premiers octets du fichier."
    },
    "fpc-q4": {
      "type": "short",
      "accepted": [
        "chemin relatif",
        "relatif"
      ],
      "explanation": "Un chemin relatif s’interprète à partir du répertoire courant : `..` remonte d’un niveau. Les failles de traversée de répertoires exploitent cette mécanique."
    },
    "fpc-q5": {
      "type": "single",
      "correct": "d",
      "explanation": "Les séquences `../` remontent dans l’arborescence : c’est une traversée de répertoires. Le programme doit normaliser le chemin résultant et vérifier qu’il reste dans le dossier autorisé.",
      "whyWrong": {
        "b": "Ce nom descend dans un sous-dossier, il ne remonte pas."
      }
    },
    "fpc-q6": {
      "type": "single",
      "correct": "c",
      "explanation": "Ouvrir un lien symbolique revient à ouvrir sa cible. Un lien mal contrôlé peut rediriger un programme privilégié vers un fichier sensible, d’où l’attention portée à leur traitement."
    },
    "fpc-q7": {
      "type": "multi",
      "correct": [
        "c",
        "d",
        "e"
      ],
      "explanation": "Les métadonnées décrivent le fichier sans en être le contenu : propriétaire, droits, dates, taille. Le texte et les octets de l’image constituent le contenu.",
      "whyWrong": {
        "b": "Le texte du document est son contenu, pas une métadonnée.",
        "a": "Les octets de l’image sont le contenu du fichier."
      }
    },
    "fpc-q8": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Le nom est stocké dans le répertoire, le contenu dans les blocs du fichier : changer l’un ne touche pas l’autre. C’est pour cela qu’une extension trompeuse ne change pas la nature d’un fichier."
    },
    "fpc-q9": {
      "type": "open",
      "model": "Le nom se termine par .exe : c’est un programme exécutable déguisé en document, l’icône et le début du nom sont trompeurs. Il ne faut pas l’ouvrir. On le signale à l’équipe de sécurité, on vérifie son type réel (premiers octets, par exemple « MZ » pour un exécutable Windows), on calcule son empreinte pour la comparer à des bases de réputation, et on ne l’exécute que dans un bac à sable isolé. On peut aussi activer l’affichage des extensions pour éviter ce piège.",
      "criteria": [
        "Identifie le fichier comme un exécutable déguisé.",
        "Recommande de ne pas l’ouvrir et de le signaler.",
        "Propose une vérification du type réel ou de l’empreinte."
      ],
      "explanation": "Le nom ne dit rien du contenu : on contrôle le type réel et on manipule les fichiers suspects dans un environnement isolé."
    },
    "fpc-q10": {
      "type": "single",
      "correct": "d",
      "explanation": "Le code source est du texte écrit par le développeur. Il est ensuite compilé ou interprété pour être exécuté. Le fichier binaire est le produit de la compilation, pas la source.",
      "whyWrong": {
        "c": "C’est l’exécutable obtenu après compilation, pas le code source."
      }
    },
    "fpc-q11": {
      "type": "single",
      "correct": "a",
      "explanation": "Un compilateur produit un exécutable une fois pour toutes ; un interpréteur lit le code source et l’exécute au fur et à mesure. Certains langages combinent les deux (bytecode et machine virtuelle)."
    },
    "fpc-q12": {
      "type": "single",
      "correct": "c",
      "explanation": "C, C++, Go et Rust sont compilés en code machine. Python, Ruby et PHP sont habituellement interprétés (avec des étapes de compilation interne en bytecode pour certains)."
    },
    "fpc-q13": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "e"
      ],
      "explanation": "Les dépendances sont livrées avec le logiciel : leurs failles deviennent les siennes. L’inventaire et la mise à jour sont donc indispensables, quel que soit le langage.",
      "whyWrong": {
        "d": "Elles font bien partie du logiciel livré et de sa surface d’attaque.",
        "a": "Tous les langages ont des dépendances (npm, pip, Maven, crates…)."
      }
    },
    "fpc-q14": {
      "type": "single",
      "correct": "b",
      "explanation": "Java et C# compilent en un format intermédiaire (bytecode) que la machine virtuelle exécute. Cela rend le programme portable d’un système à l’autre."
    },
    "fpc-q15": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Une bibliothèque vulnérable expose l’application qui l’utilise, même si le code de l’éditeur est irréprochable. C’est pourquoi on tient l’inventaire des dépendances et qu’on les met à jour."
    },
    "fpc-q16": {
      "type": "single",
      "correct": "b",
      "explanation": "L’empreinte change dès qu’un octet change. En la recalculant après téléchargement et en la comparant à celle de l’éditeur (obtenue par un canal de confiance), on détecte une altération."
    },
    "fpc-q17": {
      "type": "short",
      "accepted": [
        "dépendances",
        "dependances",
        "dépendance",
        "dependance"
      ],
      "explanation": "Les dépendances sont gérées par des outils (npm, pip, Maven…) qui permettent de les inventorier. Leur inventaire est la base de l’analyse de composition logicielle."
    },
    "fpc-q18": {
      "type": "single",
      "correct": "a",
      "explanation": "En compromettant un maillon que beaucoup d’autres logiciels utilisent, l’attaquant atteint tous leurs utilisateurs. Elle se combat par l’inventaire, l’épinglage des versions et la vérification des sources."
    },
    "fpc-q19": {
      "type": "single",
      "correct": "d",
      "explanation": "Le client (navigateur, application) envoie des requêtes ; le serveur les traite et répond. Les contrôles essentiels se font donc côté serveur."
    },
    "fpc-q20": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Le code qui s’exécute chez l’utilisateur peut être modifié, désactivé ou contourné en envoyant directement la requête. Seuls les contrôles faits côté serveur sont fiables."
    },
    "fpc-q21": {
      "type": "short",
      "accepted": [
        "frontière de confiance",
        "frontiere de confiance"
      ],
      "explanation": "Les données qui franchissent une frontière de confiance doivent être validées par le côté que l’on maîtrise. C’est un principe de toute la sécurité applicative."
    },
    "fpc-q22": {
      "type": "single",
      "correct": "c",
      "explanation": "Chaque couche ne parle qu’à sa voisine : la présentation parle à la logique métier, qui parle à l’accès aux données. Le navigateur ne doit jamais accéder directement à la base."
    },
    "fpc-q23": {
      "type": "single",
      "correct": "c",
      "explanation": "Le serveur ne doit jamais utiliser une valeur sensible fournie par le client : il la relit dans sa propre base. La vérification côté navigateur ne protège pas."
    },
    "fpc-q24": {
      "type": "single",
      "correct": "b",
      "explanation": "Une API (interface de programmation) expose des fonctions, souvent par le réseau. Chaque point d’accès exposé est une porte d’entrée qu’il faut authentifier, valider et surveiller."
    },
    "fpc-q25": {
      "type": "multi",
      "correct": [
        "c",
        "d",
        "e"
      ],
      "explanation": "La surface d’attaque regroupe les points d’interaction possibles : formulaires, API, ports, comptes. Un élément purement esthétique ou sans lien avec le système n’en fait pas partie.",
      "whyWrong": {
        "b": "Un fond d’écran n’offre aucun point d’interaction avec l’application.",
        "a": "Un choix de couleur n’ouvre aucun accès à l’application."
      }
    },
    "fpc-q26": {
      "type": "open",
      "model": "Le client (navigateur, application mobile) tourne sur une machine que l’utilisateur contrôle : son code, ses requêtes et les valeurs envoyées peuvent être modifiés. Un attaquant peut aussi envoyer des requêtes sans passer par l’interface. Les contrôles qui comptent (authentification, autorisations, validation, calcul du prix) doivent donc être faits côté serveur. Exemple : un panier dont le prix est renvoyé par le navigateur ; si le serveur ne le recalcule pas, l’attaquant paie 1 € au lieu de 100 €.",
      "criteria": [
        "Explique que le client est sous le contrôle de l’utilisateur.",
        "Place les contrôles essentiels côté serveur.",
        "Donne un exemple concret cohérent."
      ],
      "explanation": "La frontière de confiance passe entre le client et le serveur : tout ce qui la franchit se vérifie."
    },
    "fpc-q27": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Chaque appel entre services est un point d’échange à authentifier et à chiffrer. L’architecture en services apporte de la souplesse mais agrandit la surface d’attaque."
    },
    "fpc-q28": {
      "type": "single",
      "correct": "a",
      "explanation": "Une boucle (`pour`, `tant que`) répète un bloc d’instructions, par exemple pour traiter chaque ligne d’un fichier ou chaque élément d’une liste."
    },
    "fpc-q29": {
      "type": "multi",
      "correct": [
        "a",
        "d",
        "e"
      ],
      "explanation": "Listes, dictionnaires et variables organisent les données. La boucle répète des instructions et la condition choisit d’en exécuter ou non : ce ne sont pas des mécanismes de chiffrement.",
      "whyWrong": {
        "b": "Une boucle répète des instructions, elle ne chiffre rien.",
        "c": "La condition choisit si un bloc s’exécute, c’est la boucle qui répète."
      }
    },
    "fpc-q30": {
      "type": "single",
      "correct": "d",
      "explanation": "Le prix dépasse 100 : r = 10. Le client est adhérent : r = 15. Le résultat est 200 − (200 × 15 / 100) = 200 − 30 = 170.",
      "whyWrong": {
        "a": "180 correspondrait à une remise de 10 % seulement, sans le bonus adhérent.",
        "b": "190 correspondrait à une remise de 5 % seulement.",
        "c": "200 signifierait qu’aucune remise n’est appliquée."
      }
    },
    "fpc-q31": {
      "type": "single",
      "correct": "d",
      "explanation": "Un dictionnaire retrouve une valeur à partir de sa clé (par exemple un nom d’utilisateur associé à ses droits). Une liste est une suite ordonnée accessible par position."
    },
    "fpc-q32": {
      "type": "truefalse",
      "correct": true,
      "explanation": "C’est l’injection de commandes : des caractères comme le point-virgule font enchaîner une seconde commande. On valide la saisie ou on évite de passer par un interpréteur."
    },
    "fpc-q33": {
      "type": "single",
      "correct": "b",
      "explanation": "La saisie est concaténée à une commande : le point-virgule enchaîne une seconde commande qui lit un fichier sensible. Il faut valider la saisie (caractères autorisés) ou éviter l’interpréteur.",
      "whyWrong": {
        "c": "Le débordement de pile relève d’une erreur de gestion mémoire, absente ici."
      }
    },
    "fpc-q34": {
      "type": "short",
      "accepted": [
        "fonction",
        "function"
      ],
      "explanation": "Une fonction regroupe des instructions sous un nom, ce qui évite la répétition et facilite la lecture et les tests."
    },
    "fpc-q35": {
      "type": "open",
      "model": "La donnée non fiable est le paramètre « fichier », fourni par le client. Concaténé au chemin, il permet une traversée de répertoires : avec « ../../etc/passwd », le programme lit un fichier hors du dossier prévu. Correctifs : normaliser le chemin complet et vérifier qu’il reste sous « /var/www/docs/ », n’autoriser qu’une liste de noms ou de caractères connus, et exécuter le programme avec des droits minimaux.",
      "criteria": [
        "Identifie le paramètre « fichier » comme entrée non fiable.",
        "Décrit la traversée de répertoires (../).",
        "Propose une validation ou une normalisation du chemin."
      ],
      "explanation": "Toute valeur venue de l’extérieur doit être validée avant d’être utilisée pour construire un chemin ou une commande."
    },
    "fpc-q36": {
      "type": "single",
      "correct": "c",
      "explanation": "Le shell (Bash, PowerShell) lit les commandes tapées, les interprète et lance les programmes correspondants. Il permet aussi d’écrire des scripts."
    },
    "fpc-q37": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Une commande est explicite et peut être rejouée, documentée et automatisée dans un script, ce qui est précieux en administration et en investigation."
    },
    "fpc-q38": {
      "type": "short",
      "accepted": [
        "shell",
        "interpréteur de commandes",
        "interpreteur de commandes"
      ],
      "explanation": "Bash est le shell habituel de Linux et macOS, PowerShell celui de Windows. Ils sont étudiés en détail dans les modules C et D."
    },
    "fpc-q39": {
      "type": "single",
      "correct": "a",
      "explanation": "`cat` lit le fichier, le tube envoie le texte à `grep` qui ne garde que les lignes contenant « Failed », puis `wc -l` compte les lignes restantes. Aucune ligne n’est modifiée ni supprimée.",
      "whyWrong": {
        "d": "Aucune de ces commandes ne modifie le fichier.",
        "b": "Aucune redirection `>` n’écrit dans un fichier ici."
      }
    },
    "fpc-q40": {
      "type": "multi",
      "correct": [
        "c",
        "d"
      ],
      "explanation": "Une commande se relit, se rejoue et s’intègre à un script. Elle fonctionne aussi à distance (SSH) et n’empêche évidemment pas les erreurs, qui peuvent même être amplifiées par l’automatisation.",
      "whyWrong": {
        "a": "Au contraire, elle est souvent le seul moyen d’agir sur un serveur distant.",
        "b": "Une commande erronée s’exécute telle quelle : la prudence reste nécessaire."
      }
    }
  },
};
