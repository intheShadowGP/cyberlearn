import type { LabBody } from '../../content/types';

export const body: LabBody = {
  labId: 'sqli-lab',
  questions: [
    { id: 'sqlab-q1', type: 'single', difficulty: 1, skills: ['f-sqli'], prompt: 'What does the error obtained with a single apostrophe as the username reveal?', options: [{ id: 'a', text: 'That the server is down' }, { id: 'b', text: 'That the input is inserted as is into the SQL query: a strong sign of injection' }, { id: 'c', text: 'That the password is too short' }, { id: 'd', text: 'Nothing in particular' }] },
    { id: 'sqlab-q2', type: 'multi', difficulty: 2, skills: ['f-sqli'], prompt: 'In vulnerable mode, with an empty password, which of these usernames log you in as admin? (Check them in the simulator.)', options: [{ id: 'a', text: "`admin' -- `" }, { id: 'b', text: "`admin'#`" }, { id: 'c', text: '`admin`' }, { id: 'd', text: "`admin' OR '1'='1`" }, { id: 'e', text: '`"admin" -- `' }] },
    { id: 'sqlab-q3', type: 'truefalse', difficulty: 2, skills: ['f-sqli', 'f-inj-cause'], prompt: 'In fixed mode, the same input fails because the value is passed separately and is never interpreted as SQL.' },
    { id: 'sqlab-q4', type: 'multi', difficulty: 2, skills: ['f-sqli', 'f-inj-cause'], prompt: 'What additional weaknesses does this application have?', options: [{ id: 'a', text: 'Passwords are stored and compared in clear text' }, { id: 'b', text: 'Detailed SQL errors are shown to the user' }, { id: 'c', text: 'It uses HTTPS' }, { id: 'd', text: 'Nothing limits the number of login attempts' }] },
    { id: 'sqlab-q5', type: 'single', difficulty: 3, skills: ['f-sqli'], prompt: 'With the username `x\' OR \'1\'=\'1` and the password `x\' OR \'1\'=\'1`, which user are you logged in as?', options: [{ id: 'a', text: 'None' }, { id: 'b', text: 'The first user in the table, admin' }, { id: 'c', text: 'hugo' }, { id: 'd', text: 'A user named x' }] },
  ],
};
