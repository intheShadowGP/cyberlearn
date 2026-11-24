import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'a-fichiers-programmes-ligne-commande',
  practice: {
    'lire-pseudocode': {
      blocks: [
        { t: 'p', text: 'Non-member, price 80: `price > 100` is false (r stays 0); not a member (no +5). Discount 0%, result = **80**.' },
        { t: 'p', text: 'Member, price 200: `price > 100` is true (r = 10), member (r = 15). Discount 15%, result = 200 − 30 = **170**.' },
        { t: 'p', text: 'The function computes a price after discount: 10% above 100, plus 5% for a member.' },
        { t: 'callout', kind: 'tip', text: 'If `price` came from a user input, it would have to be validated on the server side: check that it is a number, positive, within a reasonable range, before any computation — otherwise a forged value (negative, huge, non-numeric) could distort the result.' },
      ],
    },
    'lire-commande': {
      blocks: [
        { t: 'list', items: ['`cat` reads the authentication log file and sends its content to its output.', '`grep "Failed password"` keeps only the lines containing this expression, that is, the failed logins.', '`wc -l` counts the lines received. The two pipes `|` connect the output of each command to the input of the next.'] },
        { t: 'p', text: 'The result is a number: the total of failed logins recorded in the file. An abnormally high total may reveal a brute-force attack, to be confirmed by looking at the source addresses and the times.' },
        { t: 'callout', kind: 'tip', text: 'On Windows, the idea is the same with PowerShell: for example `Get-Content journal.log | Select-String "Failed" | Measure-Object`, or querying the security event log.' },
      ],
    },
    'classer-notions': {
      blocks: [
        { t: 'list', items: ['Real type of a file: a file named `invoice.pdf.exe` is actually an executable; trusting the name leads to opening it believing it is a document.', 'Dependency: a library reused by the application contains a known vulnerability; the application inherits it until it is updated.', 'Do not trust the client: a check done only in the browser (for example “positive amount”) is bypassed by sending the request directly; the server must check again.'] },
        { t: 'p', text: 'These three examples show that basic notions — file, dependency, trust boundary — are already security levers, well before advanced techniques.' },
      ],
    },
  },
};
