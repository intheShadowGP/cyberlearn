import type { LabBody } from '../../content/types';

export const body: LabBody = {
  labId: 'detection-engineering-lab',
  questions: [
    { id: 'det-q1', type: 'single', difficulty: 3, skills: ['i-hunt-anomalies'], prompt: 'Vous activez la seule condition « tout lancement de powershell.exe ». Que constatez-vous ?', options: [{ id: 'a', text: 'Un faux positif (le script d’inventaire légitime) et un malveillant manqué (le webshell), donc précision et rappel imparfaits' }, { id: 'b', text: 'Une détection parfaite' }, { id: 'c', text: 'Aucune alerte' }, { id: 'd', text: 'Uniquement des faux positifs' }] },
    { id: 'det-q2', type: 'multi', difficulty: 3, skills: ['i-hunt-method'], prompt: 'Quelle combinaison de conditions atteint un rappel de 1 et une précision de 1 sur cette télémétrie ?', options: [{ id: 'a', text: '« Un processus Office lance un interpréteur »' }, { id: 'b', text: '« Un service web (w3wp.exe) lance un interpréteur »' }, { id: 'c', text: '« Tout lancement de powershell.exe »' }, { id: 'd', text: '« Ligne de commande contenant hidden »' }] },
    { id: 'det-q3', type: 'single', difficulty: 3, skills: ['i-hunt-method'], prompt: 'Que mesure la précision d’une règle de détection ?', options: [{ id: 'a', text: 'La part des alertes levées qui sont réellement malveillantes' }, { id: 'b', text: 'La part des activités malveillantes qui sont détectées' }, { id: 'c', text: 'Le nombre total d’événements' }, { id: 'd', text: 'La vitesse de la règle' }] },
    { id: 'det-q4', type: 'truefalse', difficulty: 3, skills: ['i-hunt-anomalies'], prompt: 'Une règle qui détecte toutes les attaques mais génère beaucoup de faux positifs a un bon rappel mais une mauvaise précision.' },
    { id: 'det-q5', type: 'single', difficulty: 3, skills: ['i-attack'], prompt: 'La condition « parent Office + interpréteur » cible une technique d’exécution. À quel comportement d’attaque correspond-elle le mieux ?', options: [{ id: 'a', text: 'Une macro ou une pièce jointe qui lance un interpréteur depuis une application bureautique' }, { id: 'b', text: 'Un balayage de ports réseau' }, { id: 'c', text: 'Un déni de service' }, { id: 'd', text: 'Le chiffrement d’un disque' }] },
    { id: 'det-q6', type: 'open', difficulty: 3, skills: ['i-hunt-method', 'i-hunt-anomalies'], prompt: 'Vous avez obtenu une règle à précision 1 et rappel 1 sur cet échantillon. Pourquoi ne faut-il pas la considérer comme terminée, et comment l’industrialiser correctement ?' },
  ],
};
