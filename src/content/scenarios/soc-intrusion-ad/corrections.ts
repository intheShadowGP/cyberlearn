import type { ScenarioCorrections } from '../../scenarios';

export const corrections: ScenarioCorrections = {
  scenarioId: 'soc-intrusion-ad',
  questions: {
    'sc-ad-q1': {
      type: 'short',
      accepted: ['PC-COMPTA-07', 'pc-compta-07', 'PC COMPTA 07', 'compta-07', 'pccompta07'],
      explanation:
        "La source 1 associe explicitement `10.0.8.44` au poste **PC-COMPTA-07**. Faire ce rapprochement est la première corrélation : toutes les lignes `10.0.8.44` de la source 2 proviennent donc de ce poste.",
      refs: ['Source 1 (synthèse EDR) recoupée avec la source 2'],
    },
    'sc-ad-q2': {
      type: 'short',
      accepted: ['svc_backup', 'svc backup', 'svcbackup'],
      explanation:
        "C'est **svc_backup** (et non m.petit) qui ouvre une session à 09:41 depuis `10.0.8.44` puis effectue l'ajout `4728` à 09:43. L'attaquant pivote d'un compte à l'autre : repérer *qui* agit, pas seulement *quoi*, est au cœur de la corrélation.",
      refs: ['Source 2, événements 4624 (09:41) et 4728 (09:43)'],
    },
    'sc-ad-q3': {
      type: 'single',
      correct: 'a',
      explanation:
        "Des demandes de tickets de service (`4769`) en masse et en **RC4-HMAC** (`0x17`), chiffrement faible, sont la signature du **Kerberoasting** : l'attaquant récupère des tickets pour casser hors ligne le mot de passe des comptes de service. Forcer AES et surveiller les pics de 4769 en RC4 sont des contre-mesures.",
      whyWrong: {
        b: "Le pass-the-hash réutilise une empreinte NTLM ; il ne génère pas une rafale de 4769 en RC4.",
        c: "L'empoisonnement DNS ne touche pas les tickets Kerberos.",
        d: 'La synchronisation entre contrôleurs n’émet pas de demandes de tickets de service pour des SPN applicatifs.',
      },
      refs: ['MITRE ATT&CK T1558.003 (Kerberoasting), tactique Credential Access'],
    },
    'sc-ad-q4': {
      type: 'truefalse',
      correct: true,
      explanation:
        "Ajouter un compte contrôlé à un groupe privilégié comme « Admins du domaine » octroie les droits les plus élevés et permet de **revenir** même après une première remédiation : c'est à la fois une élévation de privilèges et un mécanisme de persistance. Ce groupe doit être étroitement surveillé.",
      refs: ['MITRE ATT&CK T1098.007 (Account Manipulation: Additional Local or Domain Groups), tactiques Persistence et Privilege Escalation'],
    },
    'sc-ad-q5': {
      type: 'single',
      correct: 'a',
      explanation:
        "Une balise (beaconing) se reconnaît à la **régularité** des contacts (ici toutes les 5 minutes) et à leur **taille quasi constante** : c'est le rythme d'un canal de commande, pas un trafic humain. Le nom de domaine, la méthode POST ou le faible volume ne suffisent pas, isolément, à conclure.",
      whyWrong: {
        b: "Un nom de domaine en destination est banal ; ce n'est pas en soi un indicateur de balise.",
        c: 'La méthode POST est courante pour du trafic légitime.',
        d: 'Un faible volume n’indique rien en soi ; c’est la régularité qui est caractéristique.',
      },
      refs: ['Source 3 (journal mandataire) : périodicité et taille des requêtes'],
    },
    'sc-ad-q6': {
      type: 'multi',
      correct: ['a', 'b', 'c'],
      explanation:
        "Le confinement proportionné combine : isoler le poste source, couper les accès de l'attaquant (désactiver les comptes qu'il utilise et retirer m.petit du groupe sensible) et bloquer la destination sortante suspecte. Ces actions stoppent l'attaque tout en préservant les systèmes et les preuves.",
      whyWrong: {
        d: "Éteindre DC01 détruit la mémoire vive (preuves volatiles) et interrompt un service critique pour tout le domaine : c'est disproportionné et contre-productif.",
      },
      refs: ['NIST SP 800-61r2, phase « Confinement, éradication, rétablissement »'],
    },
    'sc-ad-q7': {
      type: 'single',
      correct: 'a',
      explanation:
        "On **isole** le poste (couper le réseau, pas l'alimentation) puis on capture la mémoire vive et le disque avant toute remédiation. Éteindre la machine fait perdre les artefacts volatils ; réinstaller ou supprimer des fichiers détruit les preuves nécessaires à l'investigation.",
      whyWrong: {
        b: "Éteindre fait perdre la mémoire vive, souvent décisive (processus, clés, connexions).",
        c: 'Réinstaller efface les preuves avant de comprendre l’étendue de la compromission.',
        d: 'Supprimer des fichiers détruit des preuves et ne garantit pas l’éradication.',
      },
      refs: ['NIST SP 800-61r2 ; ordre de volatilité (RFC 3227)'],
    },
  },
  debrief: [
    {
      t: 'p',
      text: "**Reconstitution.** Le compte `m.petit` est compromis par essais de mots de passe sur NTLM (08:01–08:02, source 2), puis utilisé pour du Kerberoasting en RC4 (08:14). À 09:41, `svc_backup` ouvre une session depuis le même poste `10.0.8.44` (PC-COMPTA-07) et, à 09:43, ajoute `m.petit` aux « Admins du domaine » (élévation + persistance). En parallèle, PC-COMPTA-07 émet un trafic sortant régulier vers une destination suspecte (source 3) : balise / exfiltration.",
    },
    {
      t: 'list',
      ordered: true,
      items: [
        '**Accès initial** : essais de mots de passe NTLM (T1110, Credential Access) aboutissant à un compte de domaine valide (T1078.002).',
        '**Accès aux identifiants** : Kerberoasting en RC4 (T1558.003).',
        '**Persistance / élévation** : ajout à un groupe privilégié (T1098.007).',
        '**Commande et exfiltration** : balises régulières vers une destination externe.',
      ],
    },
    {
      t: 'callout',
      kind: 'key',
      text: "La valeur de la démarche n'est pas de reconnaître un seul événement, mais de **lire et corréler** trois sources — qui agit, depuis quel poste, vers quelle destination — puis d'agir de façon **proportionnée** : couper les accès et isoler sans détruire les preuves ni interrompre inutilement un service critique.",
    },
    {
      t: 'p',
      text: "**Durcissement en prévention** : imposer AES et surveiller les pics de `4769` en RC4, alerter sur les modifications des groupes d'administration (`4728`), verrouiller les comptes après essais répétés, et cloisonner l'administration (postes et comptes dédiés).",
    },
  ],
};
