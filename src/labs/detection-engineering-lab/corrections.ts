import type { LabCorrections } from '../../content/types';

export const corrections: LabCorrections = {
  labId: 'detection-engineering-lab',
  questions: {
    'det-q1': { type: 'single', correct: 'a', explanation: '« Tout lancement de powershell.exe » attrape les deux PowerShell malveillants mais aussi le script d’inventaire légitime (faux positif), et manque le webshell qui lance cmd.exe (faux négatif). Précision 2/3, rappel 2/3 : insuffisant.' },
    'det-q2': { type: 'multi', correct: ['a', 'b'], explanation: '« Office lance un interpréteur » attrape la macro et la pièce jointe ; « w3wp.exe lance un interpréteur » attrape le webshell. Ensemble : les 3 malveillants, 0 faux positif — précision et rappel de 1.', whyWrong: { c: 'Génère un faux positif (script légitime) et manque le webshell.', d: '« hidden » n’attrape pas le webshell (cmd.exe sans « hidden »).' } },
    'det-q3': { type: 'single', correct: 'a', explanation: 'La précision = vrais positifs / (vrais positifs + faux positifs) : la part des alertes qui sont réellement malveillantes. Le rappel, lui, mesure la part des malveillants détectés.' },
    'det-q4': { type: 'truefalse', correct: true, explanation: 'Tout détecter donne un rappel élevé ; mais si beaucoup d’alertes sont fausses, la précision est mauvaise et les analystes se noient. L’enjeu est d’avoir les deux élevés.' },
    'det-q5': { type: 'single', correct: 'a', explanation: 'Un parent bureautique (Word, Outlook) qui lance un interpréteur est typique d’une macro ou d’une pièce jointe piégée : c’est une technique d’exécution bien connue, que cette condition cible précisément sans toucher aux usages normaux de PowerShell.' },
    'det-q6': {
      type: 'open',
      model: 'Une précision et un rappel parfaits sur un petit échantillon ne garantissent pas le comportement en production, où le volume et la diversité sont bien plus grands : la règle peut générer des faux positifs sur des cas non représentés ici (outils d’administration, logiciels métier qui lancent des interpréteurs) ou manquer des variantes. Pour l’industrialiser : la tester sur un historique réel pour mesurer le taux de faux positifs à l’échelle, documenter les exclusions légitimes, la rattacher à une technique MITRE ATT&CK, définir la réponse associée (playbook), l’exprimer dans un format partageable (Sigma, requête du SIEM), puis la surveiller et la réviser dans le temps car l’environnement évolue.',
      criteria: ['La non-représentativité d’un petit échantillon est expliquée.', 'Le test sur un historique réel et la mesure des faux positifs à l’échelle sont proposés.', 'Au moins une étape d’industrialisation est citée (ATT&CK, Sigma/SIEM, playbook, revue).'],
      explanation: 'L’ingénierie de détection ne s’arrête pas à « ça marche sur l’exemple » : une règle est un produit vivant, testé, documenté et maintenu.',
    },
  },
  debrief: [
    { t: 'list', items: ['**Condition large** (« tout PowerShell ») : rappel et précision médiocres (faux positif légitime, webshell manqué).', '**Conditions ciblées combinées** (« Office → interpréteur » + « w3wp → interpréteur ») : précision 1 et rappel 1 sur l’échantillon.', 'La clé est de décrire le **comportement** (relation parent/enfant) plutôt qu’un simple nom de processus.'] },
    { t: 'callout', kind: 'key', title: 'De la règle à la production', text: 'Tester sur l’historique, mesurer les faux positifs à l’échelle, documenter les exclusions, rattacher à MITRE ATT&CK, exprimer en Sigma ou en requête SIEM, associer un playbook de réponse, puis surveiller et réviser. Une bonne détection vise un rappel élevé sans noyer les analystes sous les faux positifs.' },
    { t: 'callout', kind: 'info', text: 'Cet atelier est une simulation : il évalue des conditions sur une télémétrie fixe pour illustrer l’arbitrage précision/rappel. En conditions réelles, on raisonne sur de très grands volumes et des sources multiples.' },
  ],
};
