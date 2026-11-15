import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'q-securite-llm',
  practice: {
    'audit-agent': {
      blocks: [
        { t: 'p', text: '**Scénario** : un ticket contient des instructions déguisées demandant un remboursement et l’envoi de données d’autres clients.' },
        { t: 'p', text: '**Impact** : pertes financières (500 € par ticket, automatisable), fuite de données personnelles (RGPD), atteinte à la réputation.' },
        { t: 'list', items: ['Validation humaine des remboursements.', 'Accès CRM limité au client authentifié du ticket, imposé par l’outil.', 'Envoi de courriels limité à l’adresse du client, gabarits pour les contenus.', 'Journalisation des appels d’outils, alertes sur les volumes et montants anormaux.', 'Tests d’intrusion spécifiques avec des tickets piégés avant mise en production.'] },
      ],
    },
    'rag-droits': {
      blocks: [
        { t: 'p', text: '**Cause** : l’index a été construit avec un compte qui lit tout le partage, et la recherche ne filtre pas selon les droits de l’utilisateur.' },
        { t: 'p', text: 'Une consigne dans le prompt ne suffit pas : le document est déjà dans le contexte, et le modèle peut le restituer sous une autre forme ou après reformulation de la question.' },
        { t: 'p', text: '**Correction** : conserver les listes de contrôle d’accès des documents dans l’index et filtrer les résultats avec l’identité de l’utilisateur au moment de la recherche ; exclure de l’index les zones les plus sensibles (RH, juridique) tant que ce filtrage n’est pas validé.' },
      ],
    },
  },
};
