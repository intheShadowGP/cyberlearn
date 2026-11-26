// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "l-conteneurs-kubernetes",
  questions: {
    "k8s-q1": {
      "type": "single",
      "correct": "a",
      "explanation": "Les conteneurs d’un hôte partagent son noyau : une vulnérabilité du noyau ou une configuration permissive peut donc mener à l’hôte. Une machine virtuelle a son propre noyau, isolé par l’hyperviseur.",
      "whyWrong": {
        "b": "C’est la machine virtuelle qui a son propre noyau.",
        "c": "Une machine virtuelle a bien un système d’exploitation.",
        "d": "La différence est fondamentale."
      }
    },
    "k8s-q2": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Namespaces (vue du système), cgroups (ressources) et seccomp (appels système) sont des briques de l’isolation, complétées par les capacités et AppArmor/SELinux.",
      "whyWrong": {
        "c": "Le BIOS/UEFI intervient au démarrage de la machine, pas dans l’isolation des conteneurs."
      }
    },
    "k8s-q3": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Avec le socket, le conteneur pilote le moteur Docker : il peut lancer un conteneur privilégié qui monte la racine de l’hôte et y exécuter des commandes en root."
    },
    "k8s-q4": {
      "type": "short",
      "accepted": [
        "privileged",
        "privileged: true",
        "privileged true"
      ],
      "explanation": "`privileged: true` accorde toutes les capacités et l’accès aux périphériques de l’hôte ; l’évasion devient triviale. Il n’est justifié que pour de rares agents système, isolés sur des nœuds dédiés."
    },
    "k8s-q13": {
      "type": "single",
      "correct": "c",
      "explanation": "Un pod créé dans l’espace de noms peut monter n’importe quel Secret de cet espace et s’exécuter avec n’importe lequel de ses comptes de service : les droits sont indirectement obtenus.",
      "whyWrong": {
        "a": "Le risque n’est pas la consommation de ressources.",
        "d": "C’est un droit sensible.",
        "b": "Créer un pod ne supprime pas de journaux."
      }
    },
    "k8s-q14": {
      "type": "open",
      "model": "Risques : `privileged` (toutes capacités, accès aux périphériques), socket Docker monté (contrôle du moteur), `hostNetwork` (écoute et usurpation sur le réseau du nœud, accès aux services locaux du nœud), image `latest` (contenu non maîtrisé). Évasion : depuis le conteneur compromis, `docker run --privileged -v /:/hote …` via le socket donne un shell root sur le nœud, puis accès aux identifiants du kubelet et aux autres pods. Version durcie : supprimer le montage du socket (utiliser l’API Kubernetes ou un agent dédié), `privileged: false`, `capabilities.drop: ALL`, `allowPrivilegeEscalation: false`, `runAsNonRoot`, `readOnlyRootFilesystem`, pas de `hostNetwork`, image épinglée par empreinte ; si l’agent exige vraiment ces accès, l’isoler sur des nœuds dédiés et le traiter comme un composant d’infrastructure de confiance.",
      "criteria": [
        "Les quatre problèmes sont identifiés.",
        "Le chemin d’évasion via le socket Docker est décrit.",
        "Une configuration durcie précise est proposée.",
        "Le cas d’un agent légitimement privilégié est traité (isolement)."
      ],
      "explanation": "Les agents de supervision et de CI sont souvent déployés avec ces options : ce sont des cibles prioritaires lors d’un audit de cluster."
    },
    "k8s-q31": {
      "type": "single",
      "correct": "b",
      "explanation": "Le conteneur peut lire et écrire dans les fichiers de l’hôte, y compris les clés, les journaux et les fichiers système. C’est équivalent à un accès root sur le nœud.",
      "whyWrong": {
        "a": "Le risque n’est pas la performance.",
        "d": "Il ne supprime pas d’images.",
        "c": "Il ne désactive pas les cgroups."
      }
    },
    "k8s-q32": {
      "type": "single",
      "correct": "d",
      "explanation": "Le conteneur partage le noyau : on ajoute des machines virtuelles légères, des bacs à sable (gVisor, Kata Containers) ou des nœuds dédiés.",
      "whyWrong": {
        "b": "L’isolation d’un conteneur seul est limitée.",
        "a": "Cela affaiblirait l’isolation.",
        "c": "Cela donnerait le contrôle de l’hôte."
      }
    },
    "k8s-q33": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Un conteneur est un processus de l’hôte au noyau partagé : l’isolation est plus fine et moins forte. Une machine virtuelle a son propre noyau et un hyperviseur."
    },
    "k8s-q5": {
      "type": "single",
      "correct": "a",
      "explanation": "Chaque instruction crée une couche immuable. Le `rm` ajoute une couche qui masque le fichier, mais la couche du `COPY` le contient toujours et peut être extraite.",
      "whyWrong": {
        "d": "La suppression n’efface pas la couche précédente.",
        "c": "Une image privée peut être récupérée par quiconque y a accès.",
        "b": "Les couches ne sont pas chiffrées."
      }
    },
    "k8s-q6": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Moins de composants, moins de privilèges et une analyse systématique réduisent la surface d’attaque et l’impact.",
      "whyWrong": {
        "c": "`latest` est mobile : on ne sait pas ce qui est déployé et une image compromise peut entrer sans revue."
      }
    },
    "k8s-q7": {
      "type": "truefalse",
      "correct": true,
      "explanation": "L’empreinte identifie un contenu exact ; une étiquette peut être réassignée. L’épinglage par empreinte assure la reproductibilité et protège contre la substitution."
    },
    "k8s-q8": {
      "type": "short",
      "accepted": [
        "docker history",
        "docker image history"
      ],
      "explanation": "`docker history` liste les couches et les commandes qui les ont créées ; des outils comme dive permettent d’explorer leur contenu, y compris les fichiers supprimés ensuite."
    },
    "k8s-q16": {
      "type": "single",
      "correct": "b",
      "explanation": "`allowPrivilegeEscalation: false` positionne l’attribut no_new_privs : un binaire setuid ne peut plus élever les privilèges du processus.",
      "whyWrong": {
        "d": "`hostPID` partage les processus de l’hôte.",
        "c": "`privileged` accorde tous les privilèges.",
        "a": "`replicas` définit le nombre de copies."
      }
    },
    "k8s-q34": {
      "type": "single",
      "correct": "c",
      "explanation": "L’étape de construction contient compilateurs et sources ; l’image finale ne reprend que le résultat. Elle est plus petite et expose moins de composants.",
      "whyWrong": {
        "a": "Ce n’est pas l’objectif.",
        "b": "Une image a toujours des couches.",
        "d": "La visibilité est indépendante."
      }
    },
    "k8s-q35": {
      "type": "single",
      "correct": "d",
      "explanation": "Moins de paquets signifie moins de vulnérabilités, et l’absence de shell complique le travail d’un attaquant qui prend pied dans le conteneur.",
      "whyWrong": {
        "b": "C’est l’inverse.",
        "c": "Un conteneur utilise toujours le noyau de l’hôte.",
        "a": "L’analyse reste possible."
      }
    },
    "k8s-q36": {
      "type": "single",
      "correct": "c",
      "explanation": "Les secrets de build (`--mount=type=secret`) sont montés temporairement et n’entrent dans aucune couche. Les autres méthodes les laissent lisibles.",
      "whyWrong": {
        "b": "La couche du COPY conserve le fichier.",
        "d": "Les variables d’une image sont lisibles.",
        "a": "Le Dockerfile fait partie de l’image et du dépôt."
      }
    },
    "k8s-q9": {
      "type": "single",
      "correct": "b",
      "explanation": "Le modèle réseau de Kubernetes autorise par défaut toutes les communications entre pods, tous espaces de noms confondus. Les NetworkPolicy (appliquées par le plugin réseau) restreignent ces flux.",
      "whyWrong": {
        "c": "C’est l’inverse.",
        "d": "La communication n’est pas limitée au nœud.",
        "a": "Elle n’est pas limitée à l’espace de noms."
      }
    },
    "k8s-q10": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Base64 est un encodage. Sans configuration du chiffrement au repos d’etcd, les Secrets y sont stockés lisibles ; tout accès à etcd ou à une sauvegarde les expose."
    },
    "k8s-q11": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Lire les Secrets expose des identifiants ; créer des pods permet de monter Secrets et comptes de service ; bind/escalate permettent de s’attribuer des droits supérieurs.",
      "whyWrong": {
        "b": "Lire des ConfigMaps d’un espace de démonstration est un droit limité, sauf si des secrets y ont été placés par erreur."
      }
    },
    "k8s-q12": {
      "type": "short",
      "accepted": [
        "restricted"
      ],
      "explanation": "Les Pod Security Standards définissent trois profils : privileged, baseline et restricted. « restricted » impose notamment l’exécution non root, la suppression des capacités et seccomp."
    },
    "k8s-q15": {
      "type": "open",
      "model": "1) Politique de refus par défaut : podSelector {} avec policyTypes [Ingress, Egress] et aucune règle. 2) Politique sur api : ingress depuis les pods `app: front` sur TCP 8080. 3) Politique sur db : ingress depuis `app: api` sur TCP 5432. 4) Egress : front vers api:8080, api vers db:5432, et autoriser la résolution DNS (UDP/TCP 53 vers kube-dns) pour les pods qui en ont besoin. Tout le reste (front → db, accès Internet, autres espaces de noms) reste interdit.",
      "criteria": [
        "Une politique de refus par défaut (ingress et egress) est posée.",
        "Les deux flux autorisés sont décrits avec sélecteurs et ports.",
        "Le besoin de DNS en egress est pris en compte."
      ],
      "explanation": "Oublier le DNS est l’erreur la plus fréquente lors de la mise en place d’un refus par défaut en sortie : les applications ne résolvent plus aucun nom."
    },
    "k8s-q37": {
      "type": "single",
      "correct": "d",
      "explanation": "Il vérifie à la création les contraintes (non root, pas de privilèges, capacités supprimées) selon les profils privileged, baseline ou restricted, et refuse ou avertit.",
      "whyWrong": {
        "a": "Ce n’est pas son rôle.",
        "c": "Ce n’est pas son rôle.",
        "b": "Ce n’est pas son rôle."
      }
    },
    "k8s-q38": {
      "type": "single",
      "correct": "a",
      "explanation": "La résolution de noms passe par le service DNS du cluster. L’oublier est l’erreur la plus fréquente lors de la mise en place d’un refus par défaut.",
      "whyWrong": {
        "d": "Ce serait ouvrir toute la sortie.",
        "c": "Sans rapport avec DNS.",
        "b": "Dangereux et sans rapport."
      }
    },
    "k8s-q39": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Un jeton monté et volé donne accès à l’API avec les droits du compte de service. S’il n’est pas utile, on désactive son montage automatique."
    },
    "k8s-q40": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Chiffrement, RBAC et coffre externe réduisent l’exposition. Base64 n’est qu’un encodage, sans protection.",
      "whyWrong": {
        "d": "Base64 se décode en une commande."
      }
    },
    "k8s-q17": {
      "type": "single",
      "correct": "b",
      "explanation": "Il enregistre les requêtes à l’API (identité, verbe, ressource, heure, résultat). Il doit être activé et exporté vers un stockage externe pour servir en investigation.",
      "whyWrong": {
        "d": "Il ne contient pas de code.",
        "c": "Il ne stocke pas de mots de passe.",
        "a": "Sans rapport."
      }
    },
    "k8s-q18": {
      "type": "single",
      "correct": "c",
      "explanation": "Un shell ouvert dans un pod de production, hors procédure, est un signal classique de prise de contrôle ou de curiosité malveillante. Il se journalise et se corrèle.",
      "whyWrong": {
        "d": "Événement normal.",
        "b": "Événement normal.",
        "a": "Événement normal."
      }
    },
    "k8s-q19": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Les pods privilégiés doivent rester exceptionnels et isolés. Une création inattendue peut indiquer un abus de droits ou une tentative d’évasion."
    },
    "k8s-q20": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Ces actions correspondent à des tactiques d’évasion, de vol d’identifiants et d’exécution. La mise à l’échelle normale est une activité attendue.",
      "whyWrong": {
        "d": "C’est une opération courante de l’exploitation."
      }
    },
    "k8s-q21": {
      "type": "short",
      "accepted": [
        "falco",
        "falco security"
      ],
      "explanation": "Falco observe les appels système et déclenche des alertes sur des règles (shell dans un conteneur, lecture de fichiers sensibles, connexions inattendues)."
    },
    "k8s-q22": {
      "type": "single",
      "correct": "a",
      "explanation": "Isoler arrête la propagation tout en gardant le pod pour l’enquête (journaux, système de fichiers, mémoire). Supprimer efface des preuves et peut relancer le même pod compromis.",
      "whyWrong": {
        "d": "Cela détruit des preuves.",
        "c": "Cela perturbe tout et détruit les preuves.",
        "b": "L’attaque continuerait."
      }
    },
    "k8s-q23": {
      "type": "single",
      "correct": "d",
      "explanation": "Cordonner marque le nœud non planifiable : aucun nouveau pod n’y est placé, ce qui limite l’exposition pendant l’investigation, sans interrompre les pods existants.",
      "whyWrong": {
        "a": "Cordonner ne supprime rien.",
        "b": "Cela ne chiffre rien.",
        "c": "Cela ne l’expose pas."
      }
    },
    "k8s-q24": {
      "type": "single",
      "correct": "a",
      "explanation": "Un registre contrôlé limite les sources d’images, permet l’analyse et la signature, et évite qu’un pod tire une image arbitraire d’Internet.",
      "whyWrong": {
        "c": "Ce serait l’inverse.",
        "d": "L’analyse y est facilitée.",
        "b": "Il conserve les versions."
      }
    },
    "k8s-q25": {
      "type": "single",
      "correct": "d",
      "explanation": "Une signature prouve que l’image vient d’un pipeline autorisé et n’a pas été modifiée. L’admission peut refuser toute image non signée.",
      "whyWrong": {
        "c": "Une signature n’est pas un chiffrement.",
        "b": "Elle ne change pas la taille.",
        "a": "Elle ne change pas la vitesse."
      }
    },
    "k8s-q26": {
      "type": "truefalse",
      "correct": false,
      "explanation": "De nouvelles vulnérabilités sont publiées chaque jour. On reconstruit régulièrement les images et on analyse le registre et le cluster en continu."
    },
    "k8s-q27": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Les contrôleurs d’admission appliquent des règles de sécurité avant que l’objet soit créé. Ils ne servent pas à désactiver le contrôle d’accès.",
      "whyWrong": {
        "d": "Une politique d’admission renforce le contrôle, elle ne désactive pas le RBAC."
      }
    },
    "k8s-q28": {
      "type": "single",
      "correct": "b",
      "explanation": "Il valide (ou modifie) une requête à l’API avant qu’elle ne soit enregistrée : un pod non conforme est refusé.",
      "whyWrong": {
        "c": "Ce n’est pas son rôle.",
        "a": "Il ne chiffre pas.",
        "d": "Il complète le RBAC."
      }
    },
    "k8s-q29": {
      "type": "short",
      "accepted": [
        "trivy",
        "grype",
        "clair",
        "anchore"
      ],
      "explanation": "Trivy et Grype analysent les images et leurs dépendances. Ils se lancent en CI et sur le registre pour repérer les vulnérabilités connues."
    },
    "k8s-q30": {
      "type": "single",
      "correct": "c",
      "explanation": "Elle liste les paquets et leurs versions. En cas de nouvelle vulnérabilité, on repère rapidement les images concernées.",
      "whyWrong": {
        "d": "Elle ne chiffre pas.",
        "a": "Sans effet sur la vitesse.",
        "b": "Elle n’en supprime pas."
      }
    },
    "k8s-q41": {
      "type": "single",
      "correct": "b",
      "explanation": "`latest` pointe vers l’image publiée en dernier : deux déploiements successifs peuvent exécuter des versions différentes. On épingle une version précise, voire le condensat de l’image.",
      "whyWrong": {
        "a": "La vitesse de démarrage n’est pas en cause.",
        "c": "Le registre ne l’interdit pas : c’est une mauvaise pratique.",
        "d": "L’étiquette n’a aucun lien avec l’utilisateur du processus."
      }
    },
    "k8s-q42": {
      "type": "single",
      "correct": "a",
      "explanation": "Ce paramètre empêche un processus de gagner des privilèges, par exemple via un binaire SUID. Il ne règle ni le réseau, ni le système de fichiers, ni l’utilisateur de l’image.",
      "whyWrong": {
        "b": "Le réseau est géré par des politiques réseau.",
        "d": "C’est le rôle de `readOnlyRootFilesystem`.",
        "c": "C’est le rôle de `runAsNonRoot` et de l’instruction `USER`."
      }
    },
    "k8s-q43": {
      "type": "short",
      "accepted": [
        "runAsNonRoot",
        "runasnonroot"
      ],
      "explanation": "`runAsNonRoot: true` fait échouer le démarrage d’un conteneur dont l’utilisateur est root."
    }
  },
};
