import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: 'c-shell-paquets-automatisation',
  questions: {
    'csh-q1': { type: 'single', correct: 'a', explanation: 'Le noyau arbitre l’accès au matériel et aux ressources et applique les droits ; les programmes de l’espace utilisateur passent par des appels système pour lui demander un service. Cette séparation protège le système des erreurs et des abus des programmes.' },
    'csh-q2': { type: 'single', correct: 'a', explanation: 'La famille Debian (Debian, Ubuntu) utilise `apt` au-dessus de `dpkg` et des paquets `.deb`. La famille Red Hat utilise `dnf`/`rpm`.' },
    'csh-q3': { type: 'short', accepted: ['/etc', 'etc', '/etc/'], explanation: 'Par convention (FHS), `/etc` contient la configuration du système. `/var` héberge les données variables (journaux), `/home` les utilisateurs, `/usr` les programmes.' },
    'csh-q4': { type: 'single', correct: 'a', explanation: 'Le tube connecte la sortie standard d’une commande à l’entrée standard de la suivante, ce qui permet de composer des traitements (`ps -ef | grep nginx | wc -l`).' },
    'csh-q5': { type: 'truefalse', correct: true, explanation: 'Sans guillemets, le shell découpe la valeur selon les espaces et développe les caractères génériques. Les guillemets conservent la valeur comme un seul argument.' },
    'csh-q6': { type: 'single', correct: 'a', explanation: '`-e` arrête à la première erreur, `-u` traite comme erreur toute variable non définie, `pipefail` fait échouer un tube si l’un de ses éléments échoue. Le script ne continue plus sur des données fausses.' },
    'csh-q7': { type: 'short', accepted: ['ShellCheck', 'shellcheck'], explanation: 'ShellCheck analyse les scripts shell et signale les erreurs fréquentes (variables non quotées, variables non définies, usages dangereux). On l’intègre à l’éditeur et au pipeline.' },
    'csh-q8': {
      type: 'open',
      model: 'Problèmes : `$1` n’est pas entre guillemets (un argument avec une espace ou un caractère générique casse ou détourne la commande) et n’est pas validé ; `cd /data/$1` peut échouer sans que le script s’arrête, et la suite s’exécute alors dans le mauvais répertoire ; `tar czf ... *` dépend du répertoire courant ; `rm -rf /tmp/travail/*` détruit sans vérification ; `#!/bin/sh` n’est pas forcément Bash. Correction : `#!/usr/bin/env bash` et `set -euo pipefail` ; valider l’argument (`rep="${1:?usage}"`, vérifier que le répertoire existe) ; mettre les variables entre guillemets et utiliser `--` ; ne pas dépendre d’un `cd` implicite (chemins complets) ; vérifier les codes de retour. Permissions : le script et `/data`, `/backups` concernés doivent appartenir à root et n’être modifiables que par lui, puisqu’il tourne en root via cron.',
      criteria: ['Le risque lié à `$1` non quoté et non validé est expliqué.', 'Le danger d’un `cd` qui échoue sans arrêt du script est relevé.', 'Une réécriture sûre (shebang bash, mode strict, quotage, validation) est proposée.', 'Les permissions du script et des répertoires sont mentionnées.'],
      explanation: 'Un script root planifié amplifie toute faiblesse : quotage et validation y sont des mesures de sécurité, pas seulement de robustesse.',
    },
    'csh-q9': { type: 'single', correct: 'a', explanation: 'Le gestionnaire de paquets vérifie la signature des paquets d’un dépôt de confiance avant de les installer. Un `curl | sudo bash` exécute en root un script non vérifié, dont le contenu peut changer à tout moment côté serveur.' },
    'csh-q10': { type: 'truefalse', correct: true, explanation: 'Les vulnérabilités corrigées sont publiques dès la sortie du correctif : plus on tarde, plus la fenêtre d’exploitation est grande. L’automatisation des mises à jour de sécurité réduit ce délai.' },
    'csh-q11': { type: 'multi', correct: ['a', 'b', 'c'], explanation: 'Dépôts officiels signés, ajout des clés par un canal sûr et automatisation des correctifs de sécurité sont les bonnes pratiques.', whyWrong: { d: 'Désactiver les mises à jour laisse des vulnérabilités connues ouvertes : c’est l’inverse d’une bonne pratique.' } },
    'csh-q12': { type: 'multi', correct: ['a', 'b'], explanation: 'cron (historique) et les minuteurs systemd (`.timer`) planifient l’exécution de tâches.', whyWrong: { c: 'apt installe et met à jour des paquets ; il ne planifie pas de tâches.', d: 'grep recherche du texte ; il ne planifie rien.' } },
    'csh-q13': { type: 'truefalse', correct: true, explanation: 'Si un utilisateur peut modifier le script, il peut y insérer ses commandes, qui seront exécutées en root à la prochaine planification : c’est une élévation de privilèges classique.' },
    'csh-q14': { type: 'single', correct: 'a', explanation: '`-P INPUT DROP` fixe la politique par défaut de la chaîne d’entrée à « rejeter » : tout paquet entrant non accepté par une règle explicite est abandonné. On autorise ensuite le strict nécessaire.' },
    'csh-q15': { type: 'short', accepted: ['idempotence', 'idempotent', 'idempotente'], explanation: 'L’idempotence garantit qu’appliquer une automatisation une ou plusieurs fois donne le même état final. Les outils de gestion de configuration la recherchent pour pouvoir réappliquer sans risque.' },
    'csh-q16': {
      type: 'open',
      model: 'Mises à jour : `sudo apt update && sudo apt upgrade` pour partir d’un système à jour. Installation : n’installer que depuis les dépôts officiels signés le serveur web et ses dépendances ; pour un dépôt tiers nécessaire, ajouter sa clé par un canal sûr. Automatisation des correctifs de sécurité : activer `unattended-upgrades` (au moins pour la sécurité). Filtrage local : politique d’entrée en refus par défaut, autoriser la boucle locale, les connexions établies, SSH depuis le réseau d’administration et les ports du service web (80/443). Ajouter éventuellement une tâche planifiée utile (sauvegarde, vérification d’intégrité), avec un script appartenant à root. Puis appliquer le durcissement des permissions et de SSH (cours dédiés).',
      criteria: ['Une mise à jour initiale est proposée.', 'L’installation depuis des sources signées est mentionnée.', 'L’automatisation des mises à jour de sécurité est proposée.', 'Un filtrage local en refus par défaut avec ouverture des ports nécessaires est décrit.'],
      explanation: 'Ces gestes de base réduisent déjà fortement la surface d’attaque avant même la configuration fine du service.',
    },
  },
};
