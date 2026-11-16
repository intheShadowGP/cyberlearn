import type { LabCorrections } from '../../content/types';

export const corrections: LabCorrections = {
  labId: 'risk-matrix-lab',
  questions: {
    'rm-q1': { type: 'single', correct: 'a', explanation: 'Un risque s’estime par la combinaison de sa vraisemblance (probabilité du scénario) et de sa gravité (impact). Le nombre de vulnérabilités ou le budget ne sont pas des mesures du risque.' },
    'rm-q2': { type: 'single', correct: 'a', explanation: 'Le rançongiciel a la vraisemblance et l’impact les plus élevés (score 16) : c’est le premier à traiter. La priorisation suit le score (vraisemblance × impact), pas l’ordre d’apparition.' },
    'rm-q3': { type: 'multi', correct: ['a', 'b', 'c', 'd'], explanation: 'Les quatre options de traitement sont réduire, transférer, éviter et accepter. « Accepter » est une décision formelle et documentée, pas une absence de décision.', whyWrong: { e: 'Ignorer un risque sans décision n’est pas une option de traitement : c’est précisément ce qu’il faut éviter.' } },
    'rm-q4': { type: 'truefalse', correct: false, explanation: 'Un risque élevé appelle une mesure (réduire, transférer ou éviter). L’accepter sans rien faire au motif que l’activité est rentable n’est pas défendable : l’acceptation ne se justifie que pour un risque faible, ou après réduction à un niveau résiduel tolérable.' },
    'rm-q5': { type: 'single', correct: 'a', explanation: 'Le risque résiduel est accepté par la direction (propriétaire du risque), qui porte la responsabilité — pas par l’équipe technique ni par le prestataire. L’assurance transfère une partie de l’impact financier, pas la responsabilité.' },
    'rm-q6': {
      type: 'open',
      model: 'Les deux risques prioritaires sont le rançongiciel (score 16) et la passerelle VPN exposée (score 12). Rançongiciel — option : réduire ; mesures : sauvegardes hors ligne/immuables et testées, MFA, filtrage de la messagerie et sensibilisation, détection (EDR), plan de reprise ; responsable : DSI/RSSI ; risque résiduel : une attaque réussie malgré tout, dont l’impact est limité par des sauvegardes restaurables. VPN — option : réduire ; mesures : correctifs prioritaires, MFA, restriction d’exposition (filtrage par source, bastion), surveillance ; responsable : équipe réseau ; risque résiduel : une vulnérabilité inconnue (jour zéro), atténuée par la restriction d’accès et la supervision. Les deux plans doivent être validés et le risque résiduel accepté par la direction.',
      criteria: ['Les deux risques prioritaires sont correctement identifiés (score le plus élevé).', 'Une option de traitement et des mesures concrètes sont proposées pour chacun.', 'Un responsable est désigné et le risque résiduel est explicité.', 'L’acceptation du résiduel par la direction est mentionnée.'],
      explanation: 'Un plan de traitement ne se limite pas à « réduire » : il précise les mesures, le responsable, l’échéance implicite et ce qui subsiste après traitement.',
    },
  },
  debrief: [
    { t: 'list', items: ['Le **niveau** se lit par vraisemblance × gravité ; la **priorité** suit ce score.', 'Les **options** : réduire (le plus courant), transférer, éviter, accepter — jamais « ignorer ».', 'Le **risque résiduel** subsiste après traitement et doit être **accepté par la direction**.'] },
    { t: 'callout', kind: 'key', title: 'Du risque au plan', text: 'Inventorier les actifs et les scénarios, estimer (vraisemblance × gravité), prioriser, choisir un traitement par risque avec un responsable et une échéance, puis faire accepter le risque résiduel au bon niveau. On réexamine périodiquement.' },
    { t: 'callout', kind: 'info', text: 'Cet atelier est une simulation pédagogique : le score vraisemblance × gravité est une aide à la lecture, pas une méthode normative. Les méthodes réelles (EBIOS Risk Manager, ISO 27005) sont plus riches.' },
  ],
};
