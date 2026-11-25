// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "l-devsecops-pipeline",
  questions: {
    "dso-q1": {
      "type": "single",
      "correct": "a",
      "explanation": "La SCA (Software Composition Analysis) inventorie les composants tiers, y compris transitifs, et les rapproche des bases de vulnérabilités. Le SAST analyse votre propre code.",
      "whyWrong": {
        "b": "Le SAST analyse le code que vous écrivez.",
        "c": "Le DAST teste l’application en fonctionnement.",
        "d": "Un pare-feu applicatif filtre le trafic, il n’analyse pas les dépendances."
      }
    },
    "dso-q2": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Le DAST envoie des requêtes à l’application déployée (en préproduction) et observe ses réponses ; le SAST lit le code source. Ils sont complémentaires : chacun voit des défauts que l’autre ignore."
    },
    "dso-q3": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Secrets, IaC et SAST s’exécutent sur le code, avant toute mise en production : c’est le « shift left ».",
      "whyWrong": {
        "b": "La supervision de production détecte après le déploiement ; elle reste indispensable mais n’est pas préventive."
      }
    },
    "dso-q13": {
      "type": "single",
      "correct": "b",
      "explanation": "La correction se fait dans le code (source de vérité), revue et redéployée. Une correction manuelle serait écrasée au prochain déploiement et créerait une dérive.",
      "whyWrong": {
        "d": "Un mot de passe ne justifie pas d’exposer SSH à tout Internet.",
        "c": "Cela crée une dérive par rapport au code.",
        "a": "On supprimerait la détection au lieu de corriger."
      }
    },
    "dso-q15": {
      "type": "open",
      "model": "1) Détection de secrets (hook local + CI), bloquante dès le départ : peu de faux positifs, impact majeur. 2) SCA avec blocage limité aux vulnérabilités critiques ou exploitées, informative sinon. 3) Analyse de l’IaC, informative puis bloquante sur une liste courte de règles (stockage public, ports d’administration ouverts). 4) SAST, informatif au début, puis bloquant sur les règles à haute confiance (injections). 5) Analyse des images de conteneurs. 6) DAST en préproduction, informatif. En parallèle : durcissement du pipeline (permissions, OIDC, épinglage) et indicateurs (délai de correction, nombre d’exceptions, couverture des dépôts).",
      "criteria": [
        "La détection de secrets arrive en premier et en mode bloquant.",
        "Le passage progressif de l’informatif au bloquant est expliqué.",
        "Au moins quatre contrôles sont ordonnés de façon justifiée.",
        "Des indicateurs de suivi sont proposés."
      ],
      "explanation": "L’adoption progressive évite le rejet des équipes ; un contrôle désactivé faute de réglage n’apporte aucune sécurité."
    },
    "dso-q16": {
      "type": "single",
      "correct": "c",
      "explanation": "Un secret supprimé d’un fichier reste dans l’historique Git. Les outils comme gitleaks parcourent tous les commits.",
      "whyWrong": {
        "d": "Un secret supprimé reste dans l’historique.",
        "b": "Les secrets se trouvent dans de nombreux fichiers.",
        "a": "Les forges ne masquent pas l’historique."
      }
    },
    "dso-q31": {
      "type": "single",
      "correct": "d",
      "explanation": "Plus un défaut est détecté tôt (poste, revue, CI), moins il coûte à corriger. Les contrôles automatiques de sécurité se placent donc au plus près du code.",
      "whyWrong": {
        "c": "Ce n’est pas le sens.",
        "b": "Au contraire, on ajoute des contrôles.",
        "a": "C’est l’inverse."
      }
    },
    "dso-q32": {
      "type": "single",
      "correct": "b",
      "explanation": "Un SBOM produit à chaque build reflète exactement ce qui est livré. Il permet de répondre en minutes à « sommes-nous concernés par cette vulnérabilité ? ».",
      "whyWrong": {
        "c": "Il serait obsolète.",
        "d": "Il faut l’avoir avant l’incident.",
        "a": "On perdrait la visibilité sur les composants."
      }
    },
    "dso-q33": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Un secret supprimé d’un fichier reste présent dans les commits antérieurs et peut être récupéré. L’analyse de tout l’historique est nécessaire."
    },
    "dso-q4": {
      "type": "short",
      "accepted": [
        "sbom",
        "software bill of materials"
      ],
      "explanation": "Le SBOM (Software Bill of Materials), aux formats SPDX ou CycloneDX, liste les composants et leurs versions. Il est de plus en plus exigé, notamment dans le cadre du Cyber Resilience Act européen."
    },
    "dso-q5": {
      "type": "single",
      "correct": "a",
      "explanation": "La confusion de dépendances exploite des gestionnaires qui préfèrent la version publique (souvent plus récente) au paquet interne du même nom. Contre-mesures : espaces de noms réservés et configuration explicite du registre.",
      "whyWrong": {
        "d": "Le typosquatting repose sur un nom proche (fautes de frappe), pas identique à un paquet interne.",
        "b": "Une injection SQL vise une base de données.",
        "c": "L’hameçonnage vise des personnes."
      }
    },
    "dso-q6": {
      "type": "truefalse",
      "correct": false,
      "explanation": "C’est l’inverse : `npm ci` installe exactement les versions et empreintes du verrou. Une nouvelle version n’entre que lorsqu’on met délibérément le verrou à jour, ce qui laisse le temps d’une revue."
    },
    "dso-q7": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Revue, versions figées et registre maîtrisé limitent l’introduction de code non vérifié.",
      "whyWrong": {
        "a": "Accepter automatiquement les mises à jour majeures fait entrer sans revue du code potentiellement compromis."
      }
    },
    "dso-q8": {
      "type": "short",
      "accepted": [
        "slsa"
      ],
      "explanation": "SLSA, porté par l’OpenSSF, gradue les exigences de provenance et d’intégrité du build : traçabilité de la source, build isolé, provenance signée et vérifiable."
    },
    "dso-q34": {
      "type": "single",
      "correct": "d",
      "explanation": "Vous n’en déclarez pas la plupart : elles sont apportées par vos dépendances directes. La SCA doit les inventorier, car une vulnérabilité s’y cache souvent.",
      "whyWrong": {
        "c": "Ce n’est pas la définition.",
        "a": "Ce n’est pas la définition.",
        "b": "Ce n’est pas la définition."
      }
    },
    "dso-q35": {
      "type": "single",
      "correct": "c",
      "explanation": "Le fichier de verrouillage contient les empreintes : un paquet substitué ou modifié sur le registre est refusé à l’installation.",
      "whyWrong": {
        "a": "Ce n’est pas le but.",
        "b": "Ce n’est pas le but.",
        "d": "Ce n’est pas le but."
      }
    },
    "dso-q14": {
      "type": "open",
      "model": "Risques : `pull_request_target` s’exécute dans le contexte du dépôt cible avec ses secrets, mais le checkout du `head.sha` récupère le code de la demande de fusion, potentiellement malveillant ; `npm install` exécute alors les scripts d’installation de ce code avec la clé AWS en environnement et un jeton `write-all`. Scénario : un inconnu ouvre une demande de fusion modifiant package.json avec un script postinstall qui exfiltre AWS_SECRET_ACCESS_KEY et le jeton, puis pousse du code sur main. De plus l’action `@main` peut changer à tout moment. Correction : utiliser `pull_request` (sans secrets pour les contributions externes), `permissions: contents: read`, actions épinglées par empreinte, `npm ci`, aucune clé AWS (fédération OIDC dans un job de déploiement séparé, sur main uniquement, environnement protégé).",
      "criteria": [
        "Le danger de `pull_request_target` combiné au checkout du code de la contribution est identifié.",
        "L’exécution de scripts d’installation avec des secrets est expliquée.",
        "Les permissions excessives et l’action non épinglée sont relevées.",
        "Une correction complète (pull_request, permissions, épinglage, OIDC) est proposée."
      ],
      "explanation": "Cette combinaison a permis plusieurs compromissions réelles de projets libres : c’est un des risques majeurs listés par l’OWASP pour les pipelines CI/CD."
    },
    "dso-q37": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Les compromissions de comptes de mainteneurs et de composants populaires existent. La popularité ne remplace ni le verrouillage des versions ni la revue des mises à jour."
    },
    "dso-q9": {
      "type": "single",
      "correct": "a",
      "explanation": "Une étiquette Git est mobile : si le dépôt de l’action est compromis, l’étiquette peut pointer vers du code malveillant qui s’exécutera avec les secrets de votre pipeline. Une empreinte de commit est immuable.",
      "whyWrong": {
        "c": "Ce n’est pas une question de vitesse.",
        "d": "Les étiquettes sont autorisées.",
        "b": "La taille du dépôt n’est pas concernée."
      }
    },
    "dso-q10": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Dès qu’il est poussé, le secret existe dans l’historique du dépôt distant, dans les clones et caches, et peut avoir été collecté par des robots qui surveillent les dépôts en quelques secondes. Un nouveau commit ne le retire pas de l’historique : il faut le révoquer, le remplacer, puis nettoyer l’historique si nécessaire."
    },
    "dso-q11": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Moindre privilège, absence de secrets statiques et approbation pour la production réduisent l’impact d’une compromission du pipeline.",
      "whyWrong": {
        "a": "`write-all` donne au jeton le droit de modifier le dépôt, les versions et les paquets : un code malveillant du pipeline pourrait tout réécrire."
      }
    },
    "dso-q12": {
      "type": "short",
      "accepted": [
        "npm ci"
      ],
      "explanation": "`npm ci` installe exactement le contenu du verrou, échoue en cas d’incohérence avec package.json et vérifie les empreintes d’intégrité."
    },
    "dso-q36": {
      "type": "single",
      "correct": "d",
      "explanation": "Les secrets de production ne sont disponibles que pour les jobs rattachés à cet environnement, après approbation et depuis des branches autorisées.",
      "whyWrong": {
        "a": "Ce n’est pas son but.",
        "c": "Il ne touche pas aux journaux.",
        "b": "Il ne rend rien public."
      }
    },
    "dso-q38": {
      "type": "single",
      "correct": "b",
      "explanation": "`pull_request` s’exécute avec des droits réduits et sans secrets pour les contributions externes. `pull_request_target` s’exécute avec les secrets du dépôt cible : dangereux s’il récupère le code de la contribution.",
      "whyWrong": {
        "a": "La vitesse n’est pas la raison.",
        "c": "Il en donne moins.",
        "d": "Il n’en supprime aucun."
      }
    },
    "dso-q39": {
      "type": "single",
      "correct": "c",
      "explanation": "Le masquage ne protège que l’affichage. Un script peut encoder ou envoyer le secret ailleurs : la réponse est de limiter les secrets disponibles et leur durée de vie.",
      "whyWrong": {
        "d": "Ils ne le sont pas par défaut.",
        "a": "Le masquage n’agit pas sur le dépôt.",
        "b": "Ils restent utilisables."
      }
    },
    "dso-q40": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Un runner détruit après chaque job ne conserve rien ; des jetons limités et la revue réduisent ce qu’un attaquant peut faire. Des secrets durables augmentent l’impact.",
      "whyWrong": {
        "d": "Un secret de longue durée reste exploitable après la compromission."
      }
    },
    "dso-q17": {
      "type": "single",
      "correct": "c",
      "explanation": "Le CVSS décrit la gravité intrinsèque (impact, complexité). Il ne dit pas si la faille est exploitée ni si elle est exposée chez vous.",
      "whyWrong": {
        "b": "C’est un autre indicateur (par exemple EPSS).",
        "a": "Il ne chiffre pas le coût.",
        "d": "Il ne dépend pas de votre parc."
      }
    },
    "dso-q18": {
      "type": "single",
      "correct": "b",
      "explanation": "Une faille moyenne activement exploitée sur un service exposé passe avant une faille critique non exploitable chez vous. On combine gravité, exploitation connue, exposition et criticité de l’actif.",
      "whyWrong": {
        "d": "Il est utile mais incomplet.",
        "a": "Il est public.",
        "c": "Il peut être révisé."
      }
    },
    "dso-q19": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Une exploitation observée dans la nature transforme un risque théorique en menace réelle. Ces catalogues servent de critère de priorité et de délai de correction."
    },
    "dso-q20": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Exploitation, exposition et criticité mesurent le risque réel. L’ancienneté du paquet n’est pas un critère à elle seule.",
      "whyWrong": {
        "c": "Un paquet ancien n’est pas forcément vulnérable ni exposé."
      }
    },
    "dso-q21": {
      "type": "short",
      "accepted": [
        "kev",
        "cisa kev",
        "known exploited vulnerabilities",
        "le kev"
      ],
      "explanation": "Le KEV (Known Exploited Vulnerabilities) liste les failles exploitées activement, avec une date limite de correction pour les administrations américaines. Il est utilisé comme critère de priorité par de nombreuses organisations."
    },
    "dso-q22": {
      "type": "single",
      "correct": "d",
      "explanation": "Une exception sans propriétaire ni échéance devient une dette invisible. Elle est datée, justifiée, compensée par une mesure et revue.",
      "whyWrong": {
        "b": "Un accord oral ne laisse aucune trace.",
        "c": "On perd la traçabilité.",
        "a": "Elle doit expirer."
      }
    },
    "dso-q23": {
      "type": "single",
      "correct": "a",
      "explanation": "Un composant vulnérable n’est pas toujours atteignable. Un VEX précise « affecté », « non affecté » ou « corrigé », ce qui évite des alertes inutiles et des corrections inutiles.",
      "whyWrong": {
        "d": "Ce n’est pas un chiffrement.",
        "b": "Elle complète la SCA, sans la remplacer.",
        "c": "Elle ne publie pas le code."
      }
    },
    "dso-q24": {
      "type": "single",
      "correct": "b",
      "explanation": "Un secret exposé doit être considéré comme compromis : on le révoque, on en émet un nouveau, puis on examine son usage.",
      "whyWrong": {
        "a": "Le secret a pu être copié.",
        "d": "L’attente laisse le secret exploitable.",
        "c": "Le masquer ne l’invalide pas."
      }
    },
    "dso-q25": {
      "type": "single",
      "correct": "a",
      "explanation": "Le SBOM de chaque application répond en minutes à « sommes-nous concernés ? ». On peut alors cibler le retrait ou la mise à jour.",
      "whyWrong": {
        "c": "Il ne supprime rien.",
        "d": "Il ne met rien à jour.",
        "b": "L’enquête reste nécessaire."
      }
    },
    "dso-q26": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Le runner compromis peut encore injecter du code ou voler des secrets. On reconstruit sur un environnement sain, depuis un état connu, puis on vérifie les artefacts."
    },
    "dso-q27": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "On coupe l’accès, on mesure l’étendue (quels artefacts ont été construits) et on rebâtit depuis un état sain. Effacer les journaux détruit les preuves.",
      "whyWrong": {
        "c": "Les journaux servent à reconstituer l’incident."
      }
    },
    "dso-q28": {
      "type": "single",
      "correct": "c",
      "explanation": "En cas d’incident, ils permettent d’identifier les artefacts potentiellement touchés, leur source et leur chaîne de construction.",
      "whyWrong": {
        "d": "Ce n’est pas le but.",
        "b": "Ils ne suppriment rien.",
        "a": "Sans effet sur la vitesse."
      }
    },
    "dso-q29": {
      "type": "short",
      "accepted": [
        "éphémère",
        "ephemere",
        "ephemeral",
        "jetable",
        "runner éphémère",
        "un runner éphémère"
      ],
      "explanation": "Un runner éphémère ne conserve ni cache ni secret d’un job à l’autre : une compromission ne persiste pas et ne contamine pas les builds suivants."
    },
    "dso-q30": {
      "type": "single",
      "correct": "d",
      "explanation": "Les clients ont besoin des versions concernées, d’indicateurs vérifiables (empreintes) et des mesures à prendre, ainsi que d’un artefact corrigé et signé.",
      "whyWrong": {
        "a": "Cela les exposerait.",
        "b": "Insuffisant.",
        "c": "Sans explication, ils ne peuvent pas agir."
      }
    }
  },
};
