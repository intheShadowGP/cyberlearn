// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "p-fuzzing-recherche",
  questions: {
    "fz-q1": {
      "type": "single",
      "correct": "c",
      "explanation": "Le retour de couverture transforme une recherche aveugle en exploration guidée : chaque entrée qui ouvre un nouveau chemin devient un point de départ pour d’autres mutations.",
      "whyWrong": {
        "b": "Le fuzzing exécute le programme.",
        "a": "Aucune preuve formelle n’est requise.",
        "d": "Il s’applique à tout programme qui lit des données."
      }
    },
    "fz-q2": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Un débordement de quelques octets ou un use-after-free peut corrompre silencieusement la mémoire sans plantage. ASan rend ces erreurs immédiatement visibles et précises."
    },
    "fz-q3": {
      "type": "short",
      "accepted": [
        "llvmfuzzertestoneinput",
        "llvmfuzzertestoneinput()"
      ],
      "explanation": "libFuzzer appelle LLVMFuzzerTestOneInput(const uint8_t *data, size_t size) pour chaque entrée générée ; la fonction doit renvoyer 0."
    },
    "fz-q4": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Vitesse (des milliers d’exécutions par seconde), déterminisme (reproductibilité des plantages) et ciblage de la frontière de confiance font l’efficacité d’un harnais.",
      "whyWrong": {
        "d": "Un état global accumulé rend les plantages non reproductibles et fausse la couverture."
      }
    },
    "fz-q5": {
      "type": "single",
      "correct": "b",
      "explanation": "Un dictionnaire de jetons (en-têtes, mots-clés, constantes magiques) permet au fuzzer de franchir rapidement les comparaisons qui protègent les parties profondes de l’analyseur.",
      "whyWrong": {
        "d": "Ce n’est pas son rôle.",
        "c": "Ce n’est pas son rôle.",
        "a": "C’est l’inverse de l’objectif."
      }
    },
    "fz-q6": {
      "type": "single",
      "correct": "d",
      "explanation": "Une écriture après libération permet souvent de corrompre des structures contrôlées par l’attaquant : potentiellement exécution de code. Un déréférencement nul est généralement un déni de service.",
      "whyWrong": {
        "b": "Généralement un simple déni de service.",
        "a": "Peu de conséquences en sécurité.",
        "c": "Aucune conséquence en sécurité."
      }
    },
    "fz-q7": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Reproduire, regrouper et minimiser permettent de passer de milliers d’entrées à une liste courte de défauts compris.",
      "whyWrong": {
        "a": "Publier des entrées de plantage avant correction revient à publier des preuves de concept d’exploitation."
      }
    },
    "fz-q8": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Le fuzzing ne prouve pas l’absence de défaut : des chemins peuvent rester inexplorés (couverture incomplète) ou ne pas déclencher d’erreur détectable. Il faut mesurer la couverture et compléter par d’autres méthodes."
    },
    "fz-q9": {
      "type": "short",
      "accepted": [
        "heap-buffer-overflow",
        "heap buffer overflow"
      ],
      "explanation": "ASan signale un heap-buffer-overflow : l’accès se situe juste après la fin d’une zone allouée sur le tas. En écriture, c’est un défaut à forte gravité potentielle."
    },
    "fz-q10": {
      "type": "single",
      "correct": "a",
      "explanation": "Chaque branche dépendant d’une entrée double potentiellement le nombre de chemins : les boucles et les gros programmes deviennent intraitables. D’où les approches hybrides qui n’utilisent le solveur que pour franchir des conditions précises.",
      "whyWrong": {
        "c": "Sans rapport avec la méthode.",
        "b": "Sans rapport avec la méthode.",
        "d": "Sans rapport avec la méthode."
      }
    },
    "fz-q11": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Une preuve est relative à une spécification et à un modèle (du matériel, du compilateur, de l’environnement). Une spécification incomplète ou une hypothèse fausse laisse place à des vulnérabilités."
    },
    "fz-q12": {
      "type": "short",
      "accepted": [
        "tamarin",
        "proverif",
        "tamarin prover",
        "cryptoverif"
      ],
      "explanation": "Tamarin et ProVerif ont été utilisés pour analyser TLS 1.3 pendant sa conception, ce qui a permis de corriger des faiblesses avant publication."
    },
    "fz-q13": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Canal officiel, délai de correction et preuve minimale sont les piliers de la divulgation coordonnée.",
      "whyWrong": {
        "d": "Vendre une vulnérabilité sans en informer l’éditeur expose les utilisateurs et, selon les cas, engage la responsabilité pénale du vendeur."
      }
    },
    "fz-q14": {
      "type": "open",
      "model": "int LLVMFuzzerTestOneInput(const uint8_t *data, size_t size) { struct image img; memset(&img, 0, sizeof img); if (img_decode(data, size, &img) == 0) { img_free(&img); } return 0; } — On cible img_decode car elle reçoit directement les octets non fiables ; img_load ajoute un accès disque (lent, non déterministe, création de fichiers temporaires) sans intérêt pour la recherche de défauts de décodage. Corpus initial : petites images valides de chaque variante du format (avec et sans palette, compression RLE…) ; dictionnaire : signatures et noms de blocs du format.",
      "criteria": [
        "Le harnais appelle img_decode avec le tampon fourni et libère l’image.",
        "L’exclusion d’img_load est justifiée par la vitesse et le déterminisme.",
        "Un corpus initial et un dictionnaire pertinents sont proposés."
      ],
      "explanation": "Libérer l’image dans le harnais exerce aussi le code de libération, souvent à l’origine des use-after-free et double free."
    },
    "fz-q15": {
      "type": "open",
      "model": "Regroupement probable : 3 défauts (un par signature et fonction), à confirmer par déduplication sur la pile complète. Priorité : 1) use-after-free en écriture dans img_free (20 entrées) : potentiellement exploitable pour exécuter du code ; 2) lecture hors limites dans rle_decode (180) : fuite d’information, parfois combinable ; 3) SEGV adresse nulle dans img_get_palette (2 100) : déni de service probable, très fréquent mais peu grave. Démarche pour le premier : minimiser une entrée, analyser la durée de vie de l’objet (où il est libéré, où il est réutilisé), écrire un correctif et un test de non-régression, vérifier les versions affectées. Communication : rapport à l’éditeur via son canal sécurité avec entrées minimisées, traces ASan, versions concernées, évaluation de gravité, proposition de correctif, et délai de divulgation convenu (par exemple 90 jours).",
      "criteria": [
        "Les plantages sont regroupés par défaut et non traités un par un.",
        "La priorisation suit la gravité (UAF en écriture > lecture OOB > pointeur nul), pas le nombre d’occurrences.",
        "La démarche d’analyse inclut minimisation et compréhension de la cause.",
        "La communication suit une divulgation coordonnée."
      ],
      "explanation": "Le nombre d’occurrences d’un plantage reflète la facilité à le déclencher, pas sa gravité."
    },
    "fz-q16": {
      "type": "single",
      "correct": "d",
      "explanation": "Le fichier security.txt (RFC 9116), placé dans /.well-known/, indique les contacts et la politique de divulgation d’un site.",
      "whyWrong": {
        "c": "Il guide les robots d’indexation.",
        "a": "Il présente l’équipe du site.",
        "b": "Il liste les pages du site."
      }
    },
    "fz-q17": {
      "type": "single",
      "correct": "c",
      "explanation": "Une campagne sans plantage ne prouve que l’absence des défauts effectivement instrumentés et atteints par le corpus. ASan couvre les erreurs mémoire spatiales et temporelles, pas les bugs de logique ni les lectures non initialisées, et la couverture peut rester incomplète.",
      "whyWrong": {
        "b": "Seule une vérification formelle prouve l’absence d’une classe de défauts.",
        "a": "Un débordement non atteint par le corpus reste possible.",
        "d": "ASan augmente la visibilité des corruptions : il faut le conserver."
      }
    },
    "fz-q18": {
      "type": "single",
      "correct": "a",
      "explanation": "Une campagne unique trouve les défauts du moment. Chaque changement peut en réintroduire : le fuzzing continu les détecte à mesure qu’ils apparaissent.",
      "whyWrong": {
        "c": "Il complète la revue, il ne la remplace pas.",
        "b": "Il complète les tests.",
        "d": "Au contraire, il oblige à corriger."
      }
    },
    "fz-q19": {
      "type": "single",
      "correct": "b",
      "explanation": "Rejouer à chaque changement les entrées déjà utiles et les anciens plantages corrigés garantit qu’un défaut corrigé ne revient pas, pour un coût de quelques secondes.",
      "whyWrong": {
        "c": "Il inclut aussi les entrées déjà corrigées.",
        "a": "Sans rapport avec le corpus.",
        "d": "Il ne s’agit pas du code source."
      }
    },
    "fz-q20": {
      "type": "single",
      "correct": "a",
      "explanation": "Un plantage doit être trié automatiquement puis corrigé dans un délai lié à sa gravité. L’entrée devient ensuite un test de non-régression.",
      "whyWrong": {
        "c": "Cela masquerait un défaut réel.",
        "d": "La publication doit suivre la correction.",
        "b": "L’attente laisse le défaut en place."
      }
    },
    "fz-q21": {
      "type": "truefalse",
      "correct": true,
      "explanation": "L’entrée est la preuve minimale du défaut : la rejouer à chaque changement vérifie en quelques secondes que le défaut n’est pas revenu."
    },
    "fz-q22": {
      "type": "single",
      "correct": "c",
      "explanation": "La minimisation garde un petit ensemble d’entrées qui donne la même couverture : les campagnes démarrent plus vite et dépensent leur temps à explorer.",
      "whyWrong": {
        "d": "Les plantages sont conservés ailleurs.",
        "a": "Les mutations sont indispensables.",
        "b": "Le chiffrement n’est pas l’objectif."
      }
    },
    "fz-q23": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Rejeu, suivi de couverture et signalements triés rendent le fuzzing durable. Désactiver les sanitizers masquerait une partie des défauts mémoire.",
      "whyWrong": {
        "a": "On perdrait la détection des erreurs mémoire silencieuses."
      }
    },
    "fz-q24": {
      "type": "short",
      "accepted": [
        "oss-fuzz",
        "ossfuzz",
        "clusterfuzz"
      ],
      "explanation": "OSS-Fuzz, construit sur ClusterFuzz, exécute en continu les harnais des projets libres et signale les plantages aux mainteneurs."
    },
    "fz-q25": {
      "type": "single",
      "correct": "d",
      "explanation": "Le rapport de couverture montre les blocs atteints et ceux qui ne le sont pas : il guide l’écriture de nouveaux harnais et l’enrichissement du corpus.",
      "whyWrong": {
        "a": "Il ne dit rien des zones non atteintes.",
        "c": "Il ne mesure pas l’exploration.",
        "b": "Sans rapport avec l’exploration."
      }
    },
    "fz-q26": {
      "type": "single",
      "correct": "b",
      "explanation": "Une mutation aveugle brise souvent la syntaxe : l’analyseur rejette l’entrée tout de suite et la logique profonde n’est jamais atteinte.",
      "whyWrong": {
        "a": "Ce n’est pas une limite du format.",
        "d": "Ils sont analysés par les programmes.",
        "c": "Sans rapport avec la détection."
      }
    },
    "fz-q27": {
      "type": "single",
      "correct": "b",
      "explanation": "La même entrée est fournie à plusieurs implémentations d’une spécification : toute divergence est signalée, même sans plantage.",
      "whyWrong": {
        "c": "Ce n’est pas la définition.",
        "a": "Ce n’est pas la définition.",
        "d": "Ce n’est pas la définition."
      }
    },
    "fz-q28": {
      "type": "single",
      "correct": "c",
      "explanation": "Il met en évidence des validations trop permissives et des ambiguïtés d’interprétation qui ne provoquent aucun plantage, mais qu’un attaquant peut exploiter.",
      "whyWrong": {
        "a": "Ce n’est pas son domaine.",
        "b": "Ce n’est pas son domaine.",
        "d": "Le fuzzing classique suffit pour ceux-là."
      }
    },
    "fz-q29": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Une divergence peut refléter un choix permis par la spécification ou une ambiguïté. Elle doit être analysée avant d’être signalée comme défaut."
    },
    "fz-q30": {
      "type": "single",
      "correct": "a",
      "explanation": "Réinitialiser ou restaurer le service avant chaque séquence garantit qu’une séquence qui plante pourra être rejouée avec le même résultat.",
      "whyWrong": {
        "c": "L’état accumulé rend les plantages non reproductibles.",
        "d": "L’ordre est essentiel pour un protocole à état.",
        "b": "Il faut au contraire tracer les échanges."
      }
    },
    "fz-q31": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Mutation structurée, dictionnaire et harnais par couche permettent d’atteindre les parties profondes. Un corpus vide prive le fuzzer de point de départ.",
      "whyWrong": {
        "c": "Le fuzzer manquerait de point de départ."
      }
    },
    "fz-q32": {
      "type": "short",
      "accepted": [
        "mutation structurée",
        "mutation structuree",
        "structure-aware",
        "structure aware"
      ],
      "explanation": "La mutation structurée conserve la validité syntaxique des entrées, qui atteignent plus vite les couches profondes au lieu d’être rejetées."
    },
    "fz-q33": {
      "type": "single",
      "correct": "d",
      "explanation": "libprotobuf-mutator s’intègre à libFuzzer et produit des messages Protocol Buffers valides et mutés à partir de leur définition.",
      "whyWrong": {
        "a": "Outil d’analyse de trafic.",
        "c": "Outil de suivi d’appels système.",
        "b": "Outil de capture de paquets."
      }
    },
    "fz-q34": {
      "type": "single",
      "correct": "c",
      "explanation": "Les approches hybrides laissent le fuzzing explorer vite et ne sollicitent le solveur que pour franchir des conditions précises : on limite l’explosion des chemins.",
      "whyWrong": {
        "d": "Ne mélange pas deux méthodes.",
        "b": "Sans rapport avec l’analyse.",
        "a": "Sans rapport avec l’analyse."
      }
    },
    "fz-q35": {
      "type": "truefalse",
      "correct": true,
      "explanation": "L’exécution symbolique collecte les contraintes du chemin ; le solveur SMT en déduit une entrée satisfaisante lorsque c’est possible."
    },
    "fz-q36": {
      "type": "single",
      "correct": "a",
      "explanation": "Un délai d’environ 90 jours est courant : il laisse à l’éditeur le temps de corriger tout en limitant le temps d’exposition des utilisateurs.",
      "whyWrong": {
        "d": "Trop court pour corriger.",
        "b": "Trop long, les utilisateurs restent exposés.",
        "c": "Cela exposerait les utilisateurs."
      }
    },
    "fz-q37": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Un accès non autorisé à un système est une infraction. Seuls les programmes autorisés, le code testé en local et les missions contractuelles offrent un cadre légal."
    },
    "fz-q38": {
      "type": "single",
      "correct": "b",
      "explanation": "ASan et UBSan insèrent des contrôles qui signalent immédiatement les accès mémoire invalides et les comportements indéfinis.",
      "whyWrong": {
        "d": "Sans rapport.",
        "a": "Sans rapport.",
        "c": "Sans rapport."
      }
    },
    "fz-q39": {
      "type": "single",
      "correct": "d",
      "explanation": "Un état global fait dépendre le résultat des exécutions précédentes : une entrée sauvegardée ne reproduirait plus le plantage.",
      "whyWrong": {
        "c": "Le compilateur l’accepte.",
        "b": "La couverture reste mesurée.",
        "a": "Le programme lit toujours l’entrée."
      }
    },
    "fz-q40": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Entrée minimisée, trace et versions permettent à l’éditeur de reproduire et de corriger. Publier un code d’exploitation avant la correction expose les utilisateurs.",
      "whyWrong": {
        "a": "Cela expose les utilisateurs avant la correction."
      }
    }
  },
};
