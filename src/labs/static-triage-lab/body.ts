import type { LabBody } from '../../content/types';

export const body: LabBody = {
  labId: 'static-triage-lab',
  hints: [
    'Les chaînes lisibles révèlent souvent des adresses, des chemins de dépôt et des clés de registre : filtrez par type.',
    'Une entropie proche de 8 signale des données compressées ou chiffrées. Comparez les sections entre elles.',
    'Un import isolé ne prouve rien ; c’est la **combinaison** d’appels (allouer, écrire, démarrer dans un autre processus) qui décrit un comportement.',
  ],
  questions: [
    { id: 'stlab-q1', type: 'short', difficulty: 1, skills: ['k-static'], prompt: 'Quel nom de domaine l’échantillon contient-il comme adresse de contact ?', placeholder: 'domaine' },
    { id: 'stlab-q2', type: 'single', difficulty: 2, skills: ['k-static'], prompt: 'Quelle section a une entropie très élevée, et que suggère-t-elle ?', options: [{ id: 'a', text: 'La section .rsrc : contenu compressé ou chiffré à déballer' }, { id: 'b', text: 'La section .data : variables initialisées sans particularité' }, { id: 'c', text: 'La section .text : code lisible en clair sans protection' }, { id: 'd', text: 'La section .rdata : table d’imports volontairement modifiée' }] },
    { id: 'stlab-q3', type: 'multi', difficulty: 3, skills: ['k-static'], prompt: 'Quels imports, pris ensemble, évoquent l’injection de code dans un autre processus ?', options: [{ id: 'a', text: 'VirtualAllocEx' }, { id: 'b', text: 'WriteProcessMemory' }, { id: 'c', text: 'CreateRemoteThread' }, { id: 'd', text: 'GetSystemTime' }] },
    { id: 'stlab-q4', type: 'single', difficulty: 2, skills: ['k-persistance'], prompt: 'Quel élément évoque un mécanisme de persistance ?', options: [{ id: 'a', text: 'La chaîne « This program cannot be run in DOS mode »' }, { id: 'b', text: 'L’import de la fonction GetSystemTime' }, { id: 'c', text: 'La clé de registre Run associée à la valeur SvcUpdate' }, { id: 'd', text: 'La date de compilation de l’échantillon' }] },
    { id: 'stlab-q5', type: 'truefalse', difficulty: 2, skills: ['k-yara'], prompt: 'Si aucune règle YARA connue ne se déclenche sur l’échantillon, on peut le considérer comme sain.' },
    { id: 'stlab-q6', type: 'single', difficulty: 2, skills: ['k-rapport'], prompt: 'Quelle est la suite la plus appropriée du triage ?', options: [{ id: 'a', text: 'Lancer le fichier sur le poste du salarié pour voir ce qu’il fait' }, { id: 'b', text: 'Passer à une analyse dynamique isolée, sans réseau de production, avec instantané de la machine' }, { id: 'c', text: 'Supprimer le fichier sans noter son empreinte ni en garder de copie' }, { id: 'd', text: 'Diffuser les indicateurs aux partenaires sans les vérifier' }] },
  ],
};
