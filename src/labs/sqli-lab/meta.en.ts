import type { ActivityMetaText } from '../../content/types';

export const metaText: ActivityMetaText = {
  title: 'SQL injection on a login page (simulation)',
  context:
    'As part of an authorized audit of a fictional library intranet, you test the login page. The application, reproduced locally, displays the SQL query it builds, which lets you understand precisely the effect of each input.',
  objective: 'Understand an SQL injection that bypasses authentication, then check the effectiveness of the parameterized query.',
  steps: [
    'Log in normally with any username and password, then observe the query.',
    'Enter a single apostrophe as the username and observe the error.',
    'Find a username that logs you in as the administrator without knowing the password.',
    'Tick “Fixed version” and replay exactly the same input.',
    'Answer the questions and read the defensive debriefing.',
  ],
};
