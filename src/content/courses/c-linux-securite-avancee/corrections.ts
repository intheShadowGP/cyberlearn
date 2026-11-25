// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "c-linux-securite-avancee",
  questions: {
    "lsec-q1": {
      "type": "single",
      "correct": "d",
      "explanation": "Le durcissement réduit la surface d’attaque du noyau (informations, modules, interfaces) et rend l’exploitation plus difficile. Il complète les mises à jour sans les remplacer.",
      "whyWrong": {
        "c": "Désactiver des protections fait l’inverse : on cherche à en ajouter.",
        "a": "On ne réécrit pas le noyau : on règle celui de la distribution et on le tient à jour.",
        "b": "Le compte root reste nécessaire pour administrer ; on limite ce qu’il peut faire au noyau avec le lockdown."
      }
    },
    "lsec-q2": {
      "type": "single",
      "correct": "b",
      "explanation": "`kernel.kptr_restrict = 2` cache les pointeurs du noyau : sans ces adresses, écrire un exploit fiable est plus difficile.",
      "whyWrong": {
        "d": "`randomize_va_space` active l’ASLR des programmes, pas le masquage des adresses du noyau.",
        "c": "`kernel.printk` règle le niveau des messages envoyés à la console.",
        "a": "`kernel.panic` fixe le délai avant redémarrage après une panique du noyau."
      }
    },
    "lsec-q3": {
      "type": "short",
      "accepted": [
        "sysctl --system",
        "sudo sysctl --system"
      ],
      "explanation": "`sysctl --system` relit `/etc/sysctl.d/*.conf` et les autres emplacements standard. On relit ensuite la valeur avec `sysctl <paramètre>` pour vérifier qu’elle est bien active."
    },
    "lsec-q4": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Une fois positionné à 1, ce paramètre ne peut plus être remis à 0 sans redémarrer. Il convient à un serveur figé dont on connaît tous les modules, car il bloque aussi un chargement légitime."
    },
    "lsec-q5": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "`nosuid` ignore les bits SUID, `nodev` interdit les fichiers de périphériques, `noexec` interdit l’exécution directe de binaires. Ensemble, elles empêchent d’exploiter un binaire déposé dans `/tmp`.",
      "whyWrong": {
        "a": "`relatime` ne concerne que la mise à jour des dates d’accès : c’est un réglage de performance, pas de sécurité."
      }
    },
    "lsec-q6": {
      "type": "single",
      "correct": "c",
      "explanation": "Avec la valeur 1, un processus ne peut tracer que ses propres descendants : un processus compromis ne peut plus lire la mémoire d’un voisin (par exemple un agent SSH). Les capacités adaptées permettent encore le débogage administratif.",
      "whyWrong": {
        "a": "Seule la valeur 3 désactive complètement `ptrace` ; la valeur 1 restreint l’usage.",
        "b": "C’est la valeur 0, qui n’impose aucune restriction.",
        "d": "Le paramètre ne concerne pas les programmes SUID."
      }
    },
    "lsec-q7": {
      "type": "open",
      "model": "Réglages : masquer les informations (`kernel.kptr_restrict=2`, `kernel.dmesg_restrict=1`), limiter `ptrace` (`kernel.yama.ptrace_scope=1`), interdire eBPF aux non-privilégiés (`kernel.unprivileged_bpf_disabled=1`), protections de liens (`fs.protected_symlinks`, `fs.protected_hardlinks`), pas de vidage des SUID (`fs.suid_dumpable=0`), `rp_filter` ; options de montage `nosuid,nodev,noexec` sur `/tmp`, `/var/tmp`, `/dev/shm` ; blocage des modules inutiles. Risques : un réglage peut casser un outil de diagnostic (`gdb`, `strace -p`), un installateur ou du matériel ; `modules_disabled` empêche tout chargement légitime. Déploiement : fichier unique dans `/etc/sysctl.d/`, test sur préproduction identique, déploiement par lots avec surveillance, retour arrière prévu. Et surtout : suivre les mises à jour du noyau, car le durcissement ne remplace pas les correctifs.",
      "criteria": [
        "Plusieurs réglages précis sont cités (sysctl et options de montage).",
        "Un risque d’effet de bord est relevé.",
        "Un déploiement progressif avec test et retour arrière est décrit.",
        "La mise à jour du noyau est rappelée comme mesure prioritaire."
      ],
      "explanation": "Un référentiel de durcissement est un compromis entre sécurité et exploitabilité : il se teste et se déploie comme un changement de production."
    },
    "lsec-q8": {
      "type": "single",
      "correct": "a",
      "explanation": "`getcap -r` parcourt récursivement l’arborescence et affiche les fichiers qui portent une capacité (`cap_setuid`, `cap_net_bind_service`…). C’est une étape de tout audit d’élévation locale.",
      "whyWrong": {
        "c": "`capsh --print` décrit les capacités du processus courant, pas celles des fichiers.",
        "d": "`setcap -r` retire des capacités : c’est une modification, pas une consultation.",
        "b": "`getfacl` affiche les ACL, pas les capacités de fichier."
      }
    },
    "lsec-q9": {
      "type": "single",
      "correct": "c",
      "explanation": "`cap_setuid` permet d’appeler `setuid(0)`. Posée sur un interpréteur, elle équivaut à un SUID root : un script de quelques lignes donne un shell root.",
      "whyWrong": {
        "a": "L’ouverture de ports privilégiés dépend de `cap_net_bind_service`.",
        "d": "La capacité n’agit pas sur la journalisation.",
        "b": "Elle n’agit pas sur les droits d’exécution, qui restent ceux des permissions."
      }
    },
    "lsec-q10": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Le moteur de conteneurs tourne en root et permet à ses utilisateurs de monter n’importe quel répertoire de l’hôte, racine comprise, dans un conteneur. Appartenir au groupe revient donc à posséder root. Les modes sans privilèges (Docker rootless, Podman) réduisent ce risque."
    },
    "lsec-q11": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Les exploits publics visent des failles déjà corrigées : la mise à jour est la première parade. Moins de binaires SUID et moins d’espaces de noms utilisateur non privilégiés réduisent la surface exploitable.",
      "whyWrong": {
        "a": "Renommer un binaire ne le rend pas moins exploitable : un attaquant l’identifie par ses propriétés, pas par son nom."
      }
    },
    "lsec-q12": {
      "type": "short",
      "accepted": [
        "setcap -r /usr/bin/python3.11",
        "sudo setcap -r /usr/bin/python3.11"
      ],
      "explanation": "`setcap -r <fichier>` supprime toutes les capacités du fichier. Avant de corriger, on cherche qui a posé la capacité et quand : c’est un indice de compromission."
    },
    "lsec-q13": {
      "type": "single",
      "correct": "b",
      "explanation": "`-C uid!=euid -F euid=0` sélectionne les exécutions où le programme s’exécute en root alors que l’appelant ne l’est pas : SUID root, `sudo`, `su`. Les binaires légitimes y apparaissent aussi ; l’intérêt est de repérer un nouveau binaire ou un nouvel utilisateur.",
      "whyWrong": {
        "a": "Les connexions SSH sont journalisées par `sshd`, pas par cette règle sur `execve`.",
        "d": "Surveiller un fichier demande une règle `-w`, comme `-w /etc/passwd -p wa`.",
        "c": "Les appels `bpf()` se tracent avec `-S bpf`."
      }
    },
    "lsec-q14": {
      "type": "open",
      "model": "Cartographie en lecture seule : binaires SUID/SGID (`find / -xdev -perm -4000`), capacités de fichier (`getcap -r /`), règles sudo (`sudo -l`), appartenance aux groupes puissants (`docker`, `disk`, `lxd`), chemins modifiables exécutés par root (scripts cron, unités systemd, bibliothèques), version du noyau et paquets à mettre à jour ; un audit comme Lynis aide. Fermeture : retirer les capacités et SUID inutiles, corriger les permissions des chemins exécutés en root, retirer les comptes des groupes équivalents à root, mettre à jour, confiner le service (systemd, SELinux ou AppArmor). Surveillance : règles auditd sur les chemins sensibles et sur les exécutions où `uid` diffère de `euid`, alertes SIEM sur nouvelle capacité ou nouveau SUID. Avant de corriger, chercher des traces d’exploitation déjà réussie.",
      "criteria": [
        "Plusieurs vecteurs sont inventoriés (SUID, capacités, sudo, groupes, chemins modifiables, noyau).",
        "Des corrections ciblées sont proposées pour les vecteurs trouvés.",
        "Une surveillance (auditd, SIEM) des chemins restants est prévue.",
        "La recherche de traces d’exploitation avant correction est mentionnée."
      ],
      "explanation": "On ne ferme jamais tous les chemins : on supprime ceux qui sont inutiles et on surveille les autres, en gardant à l’esprit que la compromission a peut-être déjà réussi."
    },
    "lsec-q15": {
      "type": "single",
      "correct": "a",
      "explanation": "AIDE construit une base d’empreintes et d’attributs de fichiers (`aide --init`) puis la compare à l’état courant (`aide --check`). Il signale tout fichier modifié, ajouté ou supprimé.",
      "whyWrong": {
        "b": "C’est le rôle d’un outil d’audit de mots de passe, pas d’un contrôle d’intégrité.",
        "d": "Comparer des pare-feu relève de la gestion de configuration.",
        "c": "Comparer des versions de noyau relève de la gestion des vulnérabilités."
      }
    },
    "lsec-q16": {
      "type": "single",
      "correct": "d",
      "explanation": "Un attaquant root qui peut réécrire la base fait passer ses modifications pour la normale. La référence doit donc être hors de sa portée : support en lecture seule, serveur distinct, envoi signé.",
      "whyWrong": {
        "b": "Une base modifiable par tous est modifiable par l’attaquant.",
        "a": "L’attaquant devenu root lit le répertoire de root.",
        "c": "Reconstruire la base depuis l’état courant y intègre les modifications de l’attaquant."
      }
    },
    "lsec-q17": {
      "type": "short",
      "accepted": [
        "debsums -c",
        "sudo debsums -c",
        "debsums --changed"
      ],
      "explanation": "`debsums -c` compare les fichiers installés aux empreintes de leurs paquets et n’affiche que ceux qui diffèrent. Sur RPM, l’équivalent est `rpm -Va`. Les fichiers de configuration modifiés légitimement apparaissent aussi."
    },
    "lsec-q18": {
      "type": "truefalse",
      "correct": false,
      "explanation": "IMA a deux rôles : la **mesure** (enregistrer l’empreinte de chaque fichier ouvert ou exécuté, éventuellement dans un registre du TPM) et l’**évaluation**, qui peut refuser l’exécution d’un fichier sans signature valide, selon la politique."
    },
    "lsec-q19": {
      "type": "single",
      "correct": "d",
      "explanation": "`dm-verity` calcule un arbre de hachage du volume ; toute lecture d’un bloc modifié échoue. Il convient aux volumes figés (système d’un appareil, image immuable) et sert de base à des chaînes de démarrage vérifié.",
      "whyWrong": {
        "b": "AIDE compare des fichiers à une base d’empreintes, après coup ; il ne vérifie pas chaque lecture de bloc.",
        "a": "`debsums` compare les fichiers aux empreintes des paquets, à la demande.",
        "c": "`fs.protected_regular` restreint la création de fichiers dans des répertoires partagés."
      }
    },
    "lsec-q20": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Sans Secure Boot et lockdown, root peut contourner la vérification (par exemple en rechargeant un autre noyau). Des clés de signature hors de la machine évitent qu’un attaquant ne signe son propre module.",
      "whyWrong": {
        "c": "Accepter les modules non signés annule la protection : n’importe quel module malveillant se charge."
      }
    },
    "lsec-q21": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Une alerte inexpliquée peut être le signe d’une modification malveillante : on enquête d’abord. La référence ne se met à jour qu’après un changement validé (mise à jour, configuration approuvée), jamais pour faire taire une alerte."
    },
    "lsec-q22": {
      "type": "single",
      "correct": "a",
      "explanation": "Une signature atteste l’origine (la clé du publieur) et l’intégrité (aucune modification depuis la signature). Elle ne dit rien de la qualité du contenu : un paquet signé peut contenir une faille ou une porte dérobée.",
      "whyWrong": {
        "c": "Un paquet signé peut contenir des vulnérabilités.",
        "d": "La signature n’implique aucune relecture du code.",
        "b": "La confiance dans un mainteneur peut changer : c’est l’enseignement de l’affaire xz."
      }
    },
    "lsec-q23": {
      "type": "single",
      "correct": "b",
      "explanation": "`Signed-By` indique la clé qui doit avoir signé ce dépôt : une clé compromise ne donne pas la main sur les autres dépôts. L’ancienne approche (`apt-key`, confiance globale) est abandonnée.",
      "whyWrong": {
        "a": "`trusted=yes` désactive la vérification de signature : à proscrire.",
        "d": "Une priorité d’épinglage règle quel dépôt l’emporte, pas quelle clé est de confiance.",
        "c": "`Check-Valid-Until` contrôle la date d’expiration des métadonnées, pas la clé."
      }
    },
    "lsec-q24": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Avec une confiance globale, la clé d’un dépôt tiers pourrait signer n’importe quel paquet accepté par la machine. Rattachée à son dépôt, elle ne vaut que pour lui, et l’épinglage empêche en plus qu’il remplace un paquet du système."
    },
    "lsec-q25": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "L’empreinte de la clé vérifiée par un second canal évite d’installer la clé d’un imposteur ; l’épinglage borne l’influence du dépôt ; le test évite de découvrir un problème en production.",
      "whyWrong": {
        "d": "`trusted=yes` désactive la vérification de signature : l’installation est alors sans garantie d’origine."
      }
    },
    "lsec-q26": {
      "type": "single",
      "correct": "c",
      "explanation": "Le code malveillant a été introduit par un compte devenu co-mainteneur, et son code d’activation était dans les archives de publication. Il a été repéré par un comportement anormal (connexions SSH lentes) : surveiller le comportement compte autant que vérifier les signatures.",
      "whyWrong": {
        "b": "Une signature prouve l’origine, pas l’absence de porte dérobée en amont.",
        "d": "Le risque dépend des versions et des dépendances, pas du modèle de publication.",
        "a": "Le choix de la cible était lié à sa présence dans la chaîne de `sshd`, pas à sa fonction."
      }
    },
    "lsec-q27": {
      "type": "short",
      "accepted": [
        "SBOM",
        "sbom"
      ],
      "explanation": "Une SBOM (Software Bill of Materials) liste les composants et leurs versions. Croisée avec les bases de vulnérabilités, elle permet de savoir en quelques minutes si une faille publiée touche le parc."
    },
    "lsec-q28": {
      "type": "open",
      "model": "Risques : l’état installé varie d’un jour à l’autre (versions non reproductibles), un dépôt public compromis ou une version malveillante publiée atteint immédiatement tout le parc, la disponibilité dépend d’Internet. Alternative : un **miroir interne** alimenté par des **instantanés datés** que l’on valide (tests, analyse des vulnérabilités) avant de les promouvoir ; les machines installent uniquement depuis l’instantané approuvé ; clés rattachées à chaque dépôt (`Signed-By`) et épinglage ; **SBOM** à jour pour savoir qui est touché lors d’une alerte ; mises à jour de sécurité par vagues, avec retour à l’instantané précédent possible. Cela ne supprime pas la confiance envers l’amont, mais laisse le temps de détecter un problème avant déploiement général.",
      "criteria": [
        "Les risques de l’installation directe depuis Internet sont cités (non reproductible, propagation, dépendance).",
        "Un miroir interne ou des instantanés datés validés sont proposés.",
        "Les clés par dépôt, l’épinglage ou la SBOM sont mentionnés.",
        "Un déploiement par vagues ou un retour arrière est prévu."
      ],
      "explanation": "Un miroir à instantanés transforme une confiance immédiate en confiance différée : on gagne le temps d’observer, de tester et de revenir en arrière."
    },
    "lsec-q29": {
      "type": "single",
      "correct": "c",
      "explanation": "Avant d’exécuter un programme eBPF dans le noyau, le vérificateur analyse son code (boucles bornées, accès mémoire sûrs) et le refuse s’il pourrait planter ou compromettre le noyau.",
      "whyWrong": {
        "d": "Le vérificateur n’intervient pas sur les données observées.",
        "b": "La signature des programmes n’est pas son rôle.",
        "a": "Un programme eBPF observe des événements ; il ne remplace aucun journal."
      }
    },
    "lsec-q30": {
      "type": "single",
      "correct": "d",
      "explanation": "Falco observe les appels système et événements du noyau (par eBPF ou un pilote) et applique des règles de détection de comportement, par exemple un shell lancé par `nginx`.",
      "whyWrong": {
        "c": "AIDE vérifie l’intégrité des fichiers, il n’observe pas les processus à l’exécution.",
        "a": "`debsums` compare des fichiers aux empreintes des paquets.",
        "b": "`logrotate` fait tourner les fichiers de journaux."
      }
    },
    "lsec-q31": {
      "type": "short",
      "accepted": [
        "bpftool prog list",
        "sudo bpftool prog list",
        "bpftool prog show",
        "sudo bpftool prog show",
        "bpftool prog"
      ],
      "explanation": "`bpftool prog list` (ou `show`) affiche les programmes chargés, leur type et leurs cartes. Un programme inconnu, surtout de type `kprobe` ou `tracepoint`, est un indice à examiner."
    },
    "lsec-q32": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Le vérificateur garantit la sûreté d’exécution (le programme ne plantera pas le noyau), pas l’intention. Un attaquant disposant des privilèges nécessaires peut charger un programme eBPF qui masque des activités, et un bogue du vérificateur est lui-même une faille du noyau."
    },
    "lsec-q33": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "eBPF est un outil à double usage : il donne de la visibilité, mais un attaquant privilégié peut aussi charger des programmes. Les règles de détection exigent de connaître le comportement normal pour éviter le bruit.",
      "whyWrong": {
        "d": "Un programme eBPF s’exécute en mémoire, vérifié ; il ne modifie pas le noyau stocké sur disque."
      }
    },
    "lsec-q34": {
      "type": "single",
      "correct": "b",
      "explanation": "`-S bpf` surveille l’appel système `bpf()`, par lequel tout programme eBPF est chargé. La clé `ebpf` permet de retrouver les événements avec `ausearch -k ebpf`.",
      "whyWrong": {
        "d": "`-S execve` trace les exécutions de programmes, pas les appels `bpf()`.",
        "a": "Il n’existe pas de fichier de configuration `bpf.conf` à surveiller : le chargement passe par un appel système.",
        "c": "`never` exclut l’événement de l’audit : c’est l’inverse de l’objectif."
      }
    },
    "lsec-q35": {
      "type": "single",
      "correct": "a",
      "explanation": "La mémoire et l’état des processus disparaissent à l’arrêt ; on les collecte en premier. Le disque et les journaux distants durent bien plus longtemps. C’est l’ordre de volatilité.",
      "whyWrong": {
        "d": "Collecter le disque d’abord laisse s’évaporer la mémoire, qui contient souvent l’essentiel.",
        "b": "L’ordre alphabétique n’a aucun lien avec la fragilité des preuves.",
        "c": "Un redémarrage détruit la mémoire et les processus en cours."
      }
    },
    "lsec-q36": {
      "type": "single",
      "correct": "a",
      "explanation": "`lsof +L1` liste les fichiers ouverts dont le nombre de liens est inférieur à 1, c’est-à-dire supprimés du disque. Un binaire malveillant supprimé après lancement apparaît ainsi, et peut être copié depuis `/proc/<pid>/exe`.",
      "whyWrong": {
        "b": "Un fichier supprimé n’apparaît plus dans les listes de répertoires.",
        "d": "Ces commandes mesurent l’occupation des disques, pas les fichiers ouverts.",
        "c": "Cette commande liste les ports TCP en écoute, pas les fichiers supprimés."
      }
    },
    "lsec-q37": {
      "type": "truefalse",
      "correct": true,
      "explanation": "La mémoire vive (processus, connexions, clés en mémoire, code injecté) disparaît à l’arrêt. On isole la machine du réseau, on collecte l’état volatile, puis seulement on l’éteint."
    },
    "lsec-q38": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Un rootkit falsifie rarement toutes les sources à la fois : la vue croisée repère les incohérences. Le scan réseau fait depuis une autre machine échappe à la falsification locale.",
      "whyWrong": {
        "d": "Un rootkit renvoie le même résultat falsifié à chaque exécution : relancer l’outil ne montre rien."
      }
    },
    "lsec-q39": {
      "type": "single",
      "correct": "b",
      "explanation": "Avec root, l’attaquant a pu modifier n’importe quoi, y compris les outils de vérification. On ne peut plus se fier au système : on reconstruit à partir d’une image saine, on restaure des données vérifiées et on renouvelle tous les secrets.",
      "whyWrong": {
        "d": "Le fichier trouvé n’est probablement qu’une des persistances laissées.",
        "a": "Réinstaller le noyau seul laisse intacts les binaires, la configuration et les clés.",
        "c": "Un mot de passe changé n’élimine ni les clés SSH ajoutées ni les portes dérobées."
      }
    },
    "lsec-q40": {
      "type": "open",
      "model": "Isoler le serveur du réseau sans l’éteindre (règle de pare-feu ou débranchement logique), en prévenant les responsables métier. Utiliser des outils de confiance depuis un support externe, écrire les résultats hors de la machine, noter l’heure. Collecter dans l’ordre de volatilité : date, processus (`ps`), connexions (`ss`), fichiers supprimés encore ouverts (`lsof +L1`), modules (`lsmod`), copie de `/proc/<pid>/exe`, acquisition de mémoire si possible ; puis fichiers temporaires, image du disque avec empreintes, journaux locaux et distants. Croiser les vues (`ps`/`/proc`, `ss`/scan externe, `lsmod`/`/sys/module`) pour déceler un rootkit. Reconstituer la chronologie (dates, auditd, journaux) et inventorier les persistances. Si l’attaquant a eu root : reconstruire à partir d’une image saine, restaurer uniquement des données vérifiées, renouveler tous les secrets, corriger la faille d’entrée et renforcer la surveillance.",
      "criteria": [
        "L’isolement sans extinction et l’usage d’outils de confiance sont mentionnés.",
        "L’ordre de volatilité est respecté avec des commandes ou artefacts précis.",
        "Une vue croisée ou une recherche de rootkit est prévue.",
        "La décision de reconstruire après une compromission root et le renouvellement des secrets sont justifiés."
      ],
      "explanation": "Une intervention réussie préserve les preuves, établit l’étendue de l’intrusion et se termine par une décision argumentée, pas par un réflexe de nettoyage."
    }
  },
};
