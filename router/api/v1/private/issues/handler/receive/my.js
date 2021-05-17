const my = async (req, res) => {
  const { email } = req.user;

  if (!email) {
    res.send(global.listStatus.notSuccess());
    return null;
  }

  let jiraRes = null;
  let rawIssues = [];
  const issues = [];

  try {
    jiraRes = await global.jira.getUsersIssues(req.user.email, false);
  } catch (error) {
    res.send(global.listStatus.notSuccess());
    return null;
  }

  if (jiraRes.issues) rawIssues = jiraRes.issues;

  for (let i = 0; i < rawIssues.length; i += 1) {
    const { fields } = rawIssues[i];
    const issue = {};

    issue.type = fields.issuetype.name;
    issue.priority = fields.priority.name;
    issue.updated = fields.updated;
    issue.status = fields.status;
    issue.description = fields.description;
    issue.summary = fields.summary;

    if (fields.assignee) {
      // eslint-disable-next-line no-await-in-loop
      issue.assignee = req.user;

      if (fields.assignee.accountId === fields.creator.accountId) issue.creator = issue.assignee;
    }

    if (fields.creator && !issue.creator) {
      // eslint-disable-next-line no-await-in-loop
      issue.creator = await global.db.models.User.findOne({ jiraId: fields.creator.accountId });
    }

    issues.push(issue);
  }

  res.send(issues);
  return null;
};

export default my;
