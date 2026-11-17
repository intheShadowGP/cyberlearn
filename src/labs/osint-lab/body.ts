import type { LabBody } from '../../content/types';

export const body: LabBody = {
  labId: 'osint-lab',
  hints: [
    'Partez des noms et du **format d’adresses e-mail** : ils révèlent la convention de nommage des comptes de l’organisation.',
    'Les **métadonnées** de documents publics, les sous-domaines et les dépôts de code exposent souvent technologies, chemins et secrets oubliés.',
    'Pour chaque information trouvée, demandez-vous ce qu’un attaquant en ferait — et quelle mesure réduirait cette exposition.',
  ],
  questions: [
    { id: 'osint-q1', type: 'short', difficulty: 1, skills: ['h-recon'], prompt: 'Selon ce format, quelle serait l’adresse électronique probable de Paul Roche ?', placeholder: 'adresse' },
    { id: 'osint-q2', type: 'single', difficulty: 2, skills: ['h-recon', 'h-vuln'], prompt: 'Quelle information est la plus critique et doit être signalée immédiatement au client ?', options: [{ id: 'a', text: 'Le nom de la directrice générale' }, { id: 'b', text: 'Le mot de passe du compte svc_deploy publié dans un dépôt de code public' }, { id: 'c', text: 'L’adresse du contact presse' }, { id: 'd', text: 'Le nombre de salariés' }] },
    { id: 'osint-q3', type: 'multi', difficulty: 2, skills: ['h-recon'], prompt: 'Quels sous-domaines méritent une attention particulière lors de la phase active (si autorisée) ?', options: [{ id: 'a', text: 'vpn.transports-velin.example (équipement dont la version est connue)' }, { id: 'b', text: 'reflex-test.transports-velin.example (environnement de test exposé)' }, { id: 'c', text: 'grafana.transports-velin.example (tableau de bord d’administration)' }, { id: 'd', text: 'www.transports-velin.example uniquement' }] },
    { id: 'osint-q4', type: 'truefalse', difficulty: 1, skills: ['h-cadre', 'h-recon'], prompt: 'Consulter le journal de transparence des certificats envoie du trafic vers les serveurs de la cible.' },
    { id: 'osint-q5', type: 'open', difficulty: 3, skills: ['h-report', 'h-recon'], prompt: 'Proposez cinq mesures pour réduire l’exposition de Transports Vélin révélée par cette reconnaissance.' },
  ],
};
