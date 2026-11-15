import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: 'l-devsecops-pipeline',
  questions: {
    'dso-q1': { type: 'single', correct: 'b', explanation: 'La SCA (Software Composition Analysis) inventorie les composants tiers, y compris transitifs, et les rapproche des bases de vulnérabilités. Le SAST analyse votre propre code.' },
    'dso-q2': { type: 'truefalse', correct: true, explanation: 'Le DAST envoie des requêtes à l’application déployée (en préproduction) et observe ses réponses ; le SAST lit le code source. Ils sont complémentaires : chacun voit des défauts que l’autre ignore.' },
    'dso-q3': { type: 'multi', correct: ['a', 'b', 'c'], explanation: 'Secrets, IaC et SAST s’exécutent sur le code, avant toute mise en production : c’est le « shift left ».', whyWrong: { d: 'La supervision de production détecte après le déploiement ; elle reste indispensable mais n’est pas préventive.' } },
    'dso-q4': { type: 'short', accepted: ['sbom', 'software bill of materials'], explanation: 'Le SBOM (Software Bill of Materials), aux formats SPDX ou CycloneDX, liste les composants et leurs versions. Il est de plus en plus exigé, notamment dans le cadre du Cyber Resilience Act européen.' },
    'dso-q5': { type: 'single', correct: 'b', explanation: 'La confusion de dépendances exploite des gestionnaires qui préfèrent la version publique (souvent plus récente) au paquet interne du même nom. Contre-mesures : espaces de noms réservés et configuration explicite du registre.', whyWrong: { a: 'Le typosquatting repose sur un nom proche (fautes de frappe), pas identique à un paquet interne.' } },
    'dso-q6': { type: 'truefalse', correct: false, explanation: 'C’est l’inverse : `npm ci` installe exactement les versions et empreintes du verrou. Une nouvelle version n’entre que lorsqu’on met délibérément le verrou à jour, ce qui laisse le temps d’une revue.' },
    'dso-q7': { type: 'multi', correct: ['a', 'b', 'd'], explanation: 'Revue, versions figées et registre maîtrisé limitent l’introduction de code non vérifié.', whyWrong: { c: 'Accepter automatiquement les mises à jour majeures fait entrer sans revue du code potentiellement compromis.' } },
    'dso-q8': { type: 'short', accepted: ['slsa'], explanation: 'SLSA, porté par l’OpenSSF, gradue les exigences de provenance et d’intégrité du build : traçabilité de la source, build isolé, provenance signée et vérifiable.' },
    'dso-q9': { type: 'single', correct: 'b', explanation: 'Une étiquette Git est mobile : si le dépôt de l’action est compromis, l’étiquette peut pointer vers du code malveillant qui s’exécutera avec les secrets de votre pipeline. Une empreinte de commit est immuable.' },
    'dso-q10': { type: 'truefalse', correct: false, explanation: 'Un secret commité est exposé dès qu’il quitte le poste (clones, caches, robots qui surveillent les dépôts publics en quelques secondes). Il faut le révoquer et le remplacer, puis nettoyer l’historique si nécessaire.' },
    'dso-q11': { type: 'multi', correct: ['a', 'b', 'd'], explanation: 'Moindre privilège, absence de secrets statiques et approbation pour la production réduisent l’impact d’une compromission du pipeline.', whyWrong: { c: '`write-all` donne au jeton le droit de modifier le dépôt, les versions et les paquets : un code malveillant du pipeline pourrait tout réécrire.' } },
    'dso-q12': { type: 'short', accepted: ['npm ci'], explanation: '`npm ci` installe exactement le contenu du verrou, échoue en cas d’incohérence avec package.json et vérifie les empreintes d’intégrité.' },
    'dso-q13': { type: 'single', correct: 'b', explanation: 'La correction se fait dans le code (source de vérité), revue et redéployée. Une correction manuelle serait écrasée au prochain déploiement et créerait une dérive.' },
    'dso-q14': {
      type: 'open',
      model: 'Risques : `pull_request_target` s’exécute dans le contexte du dépôt cible avec ses secrets, mais le checkout du `head.sha` récupère le code de la demande de fusion, potentiellement malveillant ; `npm install` exécute alors les scripts d’installation de ce code avec la clé AWS en environnement et un jeton `write-all`. Scénario : un inconnu ouvre une demande de fusion modifiant package.json avec un script postinstall qui exfiltre AWS_SECRET_ACCESS_KEY et le jeton, puis pousse du code sur main. De plus l’action `@main` peut changer à tout moment. Correction : utiliser `pull_request` (sans secrets pour les contributions externes), `permissions: contents: read`, actions épinglées par empreinte, `npm ci`, aucune clé AWS (fédération OIDC dans un job de déploiement séparé, sur main uniquement, environnement protégé).',
      criteria: ['Le danger de `pull_request_target` combiné au checkout du code de la contribution est identifié.', 'L’exécution de scripts d’installation avec des secrets est expliquée.', 'Les permissions excessives et l’action non épinglée sont relevées.', 'Une correction complète (pull_request, permissions, épinglage, OIDC) est proposée.'],
      explanation: 'Cette combinaison a permis plusieurs compromissions réelles de projets libres : c’est un des risques majeurs listés par l’OWASP pour les pipelines CI/CD.',
    },
    'dso-q15': {
      type: 'open',
      model: '1) Détection de secrets (hook local + CI), bloquante dès le départ : peu de faux positifs, impact majeur. 2) SCA avec blocage limité aux vulnérabilités critiques ou exploitées, informative sinon. 3) Analyse de l’IaC, informative puis bloquante sur une liste courte de règles (stockage public, ports d’administration ouverts). 4) SAST, informatif au début, puis bloquant sur les règles à haute confiance (injections). 5) Analyse des images de conteneurs. 6) DAST en préproduction, informatif. En parallèle : durcissement du pipeline (permissions, OIDC, épinglage) et indicateurs (délai de correction, nombre d’exceptions, couverture des dépôts).',
      criteria: ['La détection de secrets arrive en premier et en mode bloquant.', 'Le passage progressif de l’informatif au bloquant est expliqué.', 'Au moins quatre contrôles sont ordonnés de façon justifiée.', 'Des indicateurs de suivi sont proposés.'],
      explanation: 'L’adoption progressive évite le rejet des équipes ; un contrôle désactivé faute de réglage n’apporte aucune sécurité.',
    },
    'dso-q16': { type: 'single', correct: 'b', explanation: 'Un secret supprimé d’un fichier reste dans l’historique Git. Les outils comme gitleaks parcourent tous les commits.' },
  },
};
