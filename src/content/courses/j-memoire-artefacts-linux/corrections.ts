// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "j-memoire-artefacts-linux",
  questions: {
    "jfm-q1": {
      "type": "single",
      "correct": "d",
      "explanation": "`psscan` retrouve les structures de processus partout en mémoire, y compris celles de processus terminés ou retirés de la liste chaînée par un rootkit (manipulation directe des objets du noyau). L’heure de fin et les autres artefacts permettent de distinguer les deux cas.",
      "whyWrong": {
        "c": "Une corruption est possible mais rare ; l’écart entre ces deux plugins est un phénomène normal et documenté.",
        "b": "`psscan` lit de vraies structures présentes en mémoire.",
        "a": "Une image mémoire ne décrit que la machine acquise."
      }
    },
    "jfm-q2": {
      "type": "short",
      "accepted": [
        "windows.malfind",
        "malfind"
      ],
      "explanation": "`windows.malfind` repère les régions mémoire exécutables (souvent PAGE_EXECUTE_READWRITE) qui ne correspondent à aucun fichier chargé, et affiche leurs premiers octets pour un premier examen."
    },
    "jfm-q3": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Les compilateurs à la volée (.NET, navigateurs, Java) créent légitimement des zones exécutables sans fichier. On extrait la région, on l’analyse et on recoupe (processus parent, connexions) avant de conclure."
    },
    "jfm-q4": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "La mémoire contient l’état du système à l’instant de l’acquisition : connexions, processus, lignes de commande, code chargé, y compris celui d’un malware qui n’a jamais été écrit sur disque.",
      "whyWrong": {
        "b": "L’historique des fichiers supprimés relève de l’analyse du disque (métadonnées du système de fichiers), pas de la mémoire."
      }
    },
    "jfm-q16": {
      "type": "single",
      "correct": "b",
      "explanation": "Travailler sur une copie vérifiée garantit l’intégrité de la preuve et la reproductibilité : l’original reste intact et un autre expert peut refaire l’analyse et obtenir les mêmes résultats.",
      "whyWrong": {
        "d": "Toucher à l’original met en péril la preuve.",
        "a": "Un redémarrage efface la mémoire et modifie le disque.",
        "c": "Modifier une copie change son empreinte et sa valeur probante."
      }
    },
    "jfm-q31": {
      "type": "single",
      "correct": "c",
      "explanation": "Les structures du noyau changent d’une version à l’autre : sans les symboles correspondants, Volatility ne peut pas les lire. Pour Windows ils sont fournis ; pour un noyau Linux, il faut les générer.",
      "whyWrong": {
        "d": "Les symboles servent à lire, pas à chiffrer.",
        "a": "Ils n’ont pas de rôle de compression.",
        "b": "L’analyse se fait hors ligne sur une image."
      }
    },
    "jfm-q32": {
      "type": "single",
      "correct": "a",
      "explanation": "`windows.cmdline` affiche les arguments de chaque processus. `netscan` liste les connexions, `pstree` l’arborescence. Les lignes de commande révèlent souvent un usage détourné d’un outil légitime.",
      "whyWrong": {
        "b": "`netscan` liste les connexions réseau.",
        "c": "`pstree` affiche l’arborescence des processus.",
        "d": "Ce plugin n’affiche pas les lignes de commande."
      }
    },
    "jfm-q33": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "L’arborescence, la ligne de commande et les connexions situent le processus : qui l’a lancé, avec quoi, vers où il communique. `mmls` est une commande de The Sleuth Kit, pas un plugin Volatility.",
      "whyWrong": {
        "a": "`mmls` appartient à The Sleuth Kit et lit des images disque."
      }
    },
    "jfm-q5": {
      "type": "single",
      "correct": "d",
      "explanation": "`mmls` affiche la table des partitions avec le secteur de départ de chacune ; ce décalage se passe ensuite aux autres commandes avec `-o`.",
      "whyWrong": {
        "c": "`icat` extrait le contenu d’un fichier par son inode.",
        "a": "`mactime` produit une chronologie à partir d’un fichier « body ».",
        "b": "`istat` affiche les métadonnées d’un inode."
      }
    },
    "jfm-q6": {
      "type": "short",
      "accepted": [
        "icat"
      ],
      "explanation": "`icat -o <décalage> image <inode>` écrit le contenu du fichier sur la sortie standard, même si le fichier a été supprimé, tant que ses données sont intactes."
    },
    "jfm-q7": {
      "type": "truefalse",
      "correct": true,
      "explanation": "La suppression marque l’entrée et les blocs comme libres sans effacer les données. Elles restent récupérables jusqu’à leur réutilisation ; sur un SSD, la commande TRIM peut cependant les effacer rapidement."
    },
    "jfm-q8": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Les outils de falsification modifient en général `$STANDARD_INFORMATION` seulement, souvent avec une précision à la seconde : d’où l’incohérence avec `$FILE_NAME` et les fractions à zéro.",
      "whyWrong": {
        "b": "Un fichier modifié après sa création est la situation normale."
      }
    },
    "jfm-q15": {
      "type": "open",
      "model": "Sur ext4, `touch` et les outils équivalents peuvent remettre `mtime` à une date ancienne, mais `ctime` est mis à jour par le noyau à chaque changement de métadonnées et ne peut pas être fixé librement par un utilisateur. Un `ctime` de la nuit de l’incident sur un binaire « daté » de 2021 suggère que le fichier a été modifié ou remplacé cette nuit-là, puis antidaté : c’est un indice fort de falsification (par exemple remplacement d’une bibliothèque par une version piégée). Vérifications : comparer l’empreinte du fichier avec celle du paquet officiel (`debsums` ou `rpm -Va`, ou empreinte du paquet téléchargé), consulter `crtime` (date de création de l’inode), chercher dans la chronologie les autres fichiers modifiés dans la même minute, et analyser le binaire extrait.",
      "criteria": [
        "Le rôle de `ctime`, non modifiable librement, est expliqué.",
        "L’hypothèse d’un remplacement suivi d’un antidatage est formulée.",
        "Une vérification d’intégrité par rapport au paquet officiel est proposée.",
        "Un recoupement par la chronologie ou `crtime` est mentionné."
      ],
      "explanation": "Les écarts entre horodatages sont souvent plus parlants que les horodatages eux-mêmes."
    },
    "jfm-q34": {
      "type": "single",
      "correct": "c",
      "explanation": "`fls -r` liste récursivement les fichiers ; les entrées supprimées sont marquées d’un astérisque. On peut alors en extraire le contenu avec `icat` tant que les données n’ont pas été réutilisées.",
      "whyWrong": {
        "a": "`fls` affiche justement les entrées supprimées.",
        "d": "La sortie est du texte, sans couleur particulière.",
        "b": "`fls` ne renomme rien : il lit l’image."
      }
    },
    "jfm-q35": {
      "type": "truefalse",
      "correct": true,
      "explanation": "`$STANDARD_INFORMATION` se modifie avec des API courantes ; `$FILE_NAME` est mis à jour par le noyau. Comparer les deux révèle un antidatage."
    },
    "jfm-q9": {
      "type": "single",
      "correct": "a",
      "explanation": "Les distributions de la famille Red Hat écrivent les authentifications dans `/var/log/secure` ; Debian et Ubuntu dans `/var/log/auth.log`. Le journal systemd peut aussi les contenir.",
      "whyWrong": {
        "b": "C’est l’emplacement sur Debian et Ubuntu.",
        "c": "C’est un fichier de configuration, pas un journal.",
        "d": "Ce journal décrit les installations de paquets Debian."
      }
    },
    "jfm-q10": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Tâches planifiées, unités systemd et clés SSH autorisées font partie des mécanismes de persistance les plus courants sous Linux.",
      "whyWrong": {
        "b": "`/usr/share/doc/` contient la documentation des paquets ; rien n’y est exécuté automatiquement."
      }
    },
    "jfm-q11": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Rediriger l’historique vers `/dev/null` empêche l’enregistrement des commandes. Ce n’est pas une preuve à elle seule (certains administrateurs le font), mais le `ctime` du lien permet de dater la manipulation et de la rapprocher de l’incident."
    },
    "jfm-q12": {
      "type": "open",
      "model": "1. Point d’entrée : journaux d’authentification (`auth.log` ou `secure`, journal systemd via `journalctl -D`), `wtmp` et `btmp`, journaux des services exposés (serveur web, VPN), pare-feu. On cherche la première connexion ou requête anormale, qui devient le point d’ancrage. 2. Actions : `.bash_history` de chaque compte, journaux auditd, chronologie du système de fichiers (`fls -m` puis `mactime`) autour du point d’ancrage, fichiers déposés dans `/tmp`, `/var/tmp`, `/dev/shm`, binaires modifiés (`debsums`, `rpm -Va`). 3. Persistance : crontabs, unités systemd système et utilisateur, `authorized_keys`, fichiers d’initialisation du shell, `/etc/ld.so.preload`, comptes ajoutés dans `/etc/passwd`. Chaque constat est daté en UTC, recoupé par une deuxième source et consigné avec l’empreinte des fichiers extraits.",
      "criteria": [
        "Une démarche ordonnée (entrée, actions, persistance) est proposée.",
        "Des artefacts précis sont cités pour chaque étape.",
        "La chronologie ou le point d’ancrage est utilisé.",
        "Le recoupement ou la traçabilité des constats est mentionné."
      ],
      "explanation": "Commencer par le point d’entrée donne une borne de temps qui réduit énormément la masse de données à examiner ensuite."
    },
    "jfm-q36": {
      "type": "single",
      "correct": "b",
      "explanation": "`btmp` enregistre les connexions échouées (lisible avec `lastb -f`), `wtmp` l’historique des connexions réussies et déconnexions (`last -f`), `utmp` les sessions en cours.",
      "whyWrong": {
        "d": "`wtmp` enregistre les connexions réussies.",
        "c": "`utmp` décrit les sessions actuellement ouvertes.",
        "a": "`lastlog` conserve la dernière connexion de chaque compte."
      }
    },
    "jfm-q37": {
      "type": "truefalse",
      "correct": false,
      "explanation": "`wtmp` est un fichier binaire : on le lit avec `last -f <fichier>`. Sur une image montée, on précise le fichier de l’image et non celui de la station d’analyse."
    },
    "jfm-q13": {
      "type": "single",
      "correct": "a",
      "explanation": "Un pare-feu en UTC et un serveur en heure de Paris présentent un décalage d’une ou deux heures : sans conversion, la connexion semble postérieure aux actions qu’elle a permises.",
      "whyWrong": {
        "c": "Les outils acceptent les heures locales ; c’est la comparaison qui devient fausse.",
        "d": "La conversion ne change pas la taille du fichier.",
        "b": "L’UTC est un référentiel horaire, pas un chiffrement."
      }
    },
    "jfm-q14": {
      "type": "short",
      "accepted": [
        "mactime",
        "mactime -b"
      ],
      "explanation": "`mactime -b body.txt` trie les entrées par date et indique pour chacune quel horodatage (m, a, c, b) a changé ; `-d` produit un format CSV."
    },
    "jfm-q38": {
      "type": "single",
      "correct": "c",
      "explanation": "Le format « body » est un format intermédiaire : une ligne par entrée avec ses horodatages. `mactime` le transforme en chronologie triée.",
      "whyWrong": {
        "d": "Il décrit les fichiers, il ne les contient pas.",
        "b": "Il ne contient aucun mot de passe.",
        "a": "Les journaux sont des fichiers distincts à intégrer par ailleurs."
      }
    },
    "jfm-q39": {
      "type": "single",
      "correct": "b",
      "explanation": "Le point d’ancrage est un événement attesté par plusieurs sources (par exemple une première connexion réussie depuis l’adresse de l’attaquant) autour duquel on explore avant et après.",
      "whyWrong": {
        "c": "Le dernier fichier modifié n’est pas forcément pertinent.",
        "a": "L’heure de l’outil d’analyse n’a pas de lien avec l’incident.",
        "d": "Un fichier supprimé n’est pas un repère fiable."
      }
    },
    "jfm-q40": {
      "type": "single",
      "correct": "d",
      "explanation": "La dérive se mesure en comparant un événement présent dans une autre source fiable, puis se corrige dans la chronologie (on conserve les valeurs d’origine à côté). On documente la correction.",
      "whyWrong": {
        "b": "Sans correction, l’ordre des événements peut être faux.",
        "a": "Écarter la source fait perdre des informations utiles.",
        "c": "Il faut corriger la source fautive, pas les autres."
      }
    },
    "jfm-q17": {
      "type": "single",
      "correct": "b",
      "explanation": "Le répertoire `/var/lib/docker` contient les images, les couches (overlay2), les volumes et, par défaut, les journaux JSON de chaque conteneur. On l’acquiert pour investiguer.",
      "whyWrong": {
        "d": "Ce répertoire contient de la documentation.",
        "c": "`/etc/passwd` est la liste des comptes locaux.",
        "a": "`/boot` contient le noyau et le chargeur d’amorçage."
      }
    },
    "jfm-q18": {
      "type": "single",
      "correct": "d",
      "explanation": "On préserve ce qui peut disparaître : `docker inspect`, journaux, liste des processus, copie du système de fichiers, éventuellement la mémoire. Ensuite seulement on isole ou arrête.",
      "whyWrong": {
        "a": "La suppression efface couches et journaux du conteneur.",
        "c": "Un redémarrage détruit tous les conteneurs en cours et la mémoire.",
        "b": "Une réinstallation détruit des preuves."
      }
    },
    "jfm-q19": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Avec la configuration par défaut, les journaux sont stockés sur l’hôte dans le répertoire du conteneur et supprimés avec lui. L’envoi vers un collecteur central protège ces traces."
    },
    "jfm-q20": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Les journaux montrent l’activité, `inspect` révèle les montages et privilèges (conteneur privilégié, socket montée) et l’historique des couches indique comment l’image a été construite.",
      "whyWrong": {
        "a": "La couleur du terminal ne porte aucune information d’investigation."
      }
    },
    "jfm-q21": {
      "type": "single",
      "correct": "c",
      "explanation": "Le journal d’audit de l’API enregistre les requêtes (identité, action, ressource, heure). Il doit être activé et exporté vers un stockage externe pour servir de preuve.",
      "whyWrong": {
        "d": "Ce pare-feu ne voit pas les appels à l’API du cluster.",
        "b": "Le fichier `hosts` associe des noms à des adresses.",
        "a": "Il s’agit d’un composant Windows, sans lien avec Kubernetes."
      }
    },
    "jfm-q22": {
      "type": "short",
      "accepted": [
        "snapshot",
        "instantané",
        "un snapshot",
        "capture instantanée",
        "snapshot de volume"
      ],
      "explanation": "Un instantané (snapshot) du volume fige l’état du disque et peut être copié vers un compte d’analyse. On l’associe à la capture de la mémoire si possible, puisque l’instantané ne la contient pas."
    },
    "jfm-q23": {
      "type": "single",
      "correct": "a",
      "explanation": "Isoler (règles de sécurité) arrête la propagation en gardant l’instance ; un instantané préserve le disque. Supprimer détruirait des preuves ; ne rien changer laisse l’attaque continuer.",
      "whyWrong": {
        "b": "La suppression détruit les preuves.",
        "d": "L’attaque pourrait se poursuivre.",
        "c": "Ce n’est pas suffisant pour contenir ni préserver."
      }
    },
    "jfm-q24": {
      "type": "single",
      "correct": "c",
      "explanation": "Ces commandes comparent les fichiers du système aux empreintes des paquets officiels. Un binaire modifié ou remplacé est signalé : indice d’une compromission.",
      "whyWrong": {
        "b": "Elles ne font que vérifier.",
        "a": "Elles ne chiffrent rien.",
        "d": "Elles ne touchent pas aux journaux."
      }
    },
    "jfm-q25": {
      "type": "single",
      "correct": "d",
      "explanation": "Hors cas connus (fichier de configuration, mise à jour non appliquée), un écart signale une modification. On extrait le fichier, on calcule son empreinte et on le compare à la version officielle.",
      "whyWrong": {
        "b": "Une mise à jour légitime change aussi l’empreinte du paquet de référence.",
        "c": "Le paquet officiel est la référence de confiance.",
        "a": "Cela n’a pas de rapport avec la protection."
      }
    },
    "jfm-q26": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Un exécutable SUID permet de s’exécuter avec les droits de son propriétaire. Il est légitime pour quelques binaires système, mais très suspect dans un répertoire temporaire accessible en écriture."
    },
    "jfm-q27": {
      "type": "single",
      "correct": "a",
      "explanation": "Une fois la fenêtre de l’incident connue, on liste les fichiers modifiés, créés ou changés dans cet intervalle. Cela restreint l’analyse et révèle les binaires, scripts et configurations touchés.",
      "whyWrong": {
        "c": "La recherche ne supprime rien.",
        "b": "Elle ne compresse rien.",
        "d": "Elle ne change aucun droit."
      }
    },
    "jfm-q28": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Une bibliothèque forcée dans tous les processus, un module noyau inattendu ou un second compte administrateur sont des mécanismes d’implantation. Un README dans la documentation est banal.",
      "whyWrong": {
        "b": "La documentation d’un paquet est un contenu courant."
      }
    },
    "jfm-q29": {
      "type": "short",
      "accepted": [
        "/etc/ld.so.preload",
        "ld.so.preload",
        "etc/ld.so.preload"
      ],
      "explanation": "`/etc/ld.so.preload` est normalement absent ou vide. Une bibliothèque qui y figure est chargée dans chaque programme dynamique : mécanisme utilisé par certains rootkits pour masquer fichiers et processus."
    },
    "jfm-q30": {
      "type": "single",
      "correct": "b",
      "explanation": "On enregistre les empreintes et attributs de fichiers à un état sain, puis on compare régulièrement. Tout écart (binaire, configuration) est alors visible, ce qui accélère l’enquête.",
      "whyWrong": {
        "c": "Il s’agit de détection, pas de chiffrement.",
        "d": "Aucun effet sur le démarrage.",
        "a": "Elle ne restaure rien."
      }
    }
  },
};
