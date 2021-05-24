import myIssue from '../../../../../../../modules/jira/issue/issue.js';

const all = async (req, res) => {
  const { body } = req;

  let jiraRes = null;

  try {
    jiraRes = await global.jira.getIssuesForBoard('3');
  } catch (error) {
    res.send(global.listStatus.notSuccess());
    return null;
  }

  let rawIssues = [];
  const issues = [];

  if (jiraRes.issues) rawIssues = jiraRes.issues;

  for (let i = 0; i < rawIssues.length; i += 1) {
    // eslint-disable-next-line no-await-in-loop
    const issue = await myIssue.formatIssue(rawIssues[i]);

    issues.push(issue);
  }

  res.send(global.listStatus.success(issues));
  return null;
};

export default all;
