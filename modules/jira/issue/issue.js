async function formatIssue(rowIssue) {
  const issue = {};
  issue.type = {};
  issue.type.id = rowIssue.fields.issuetype.id;
  issue.type.name = rowIssue.fields.issuetype.name;
  issue.created = rowIssue.fields.created;
  issue.priority = {};
  issue.priority.id = rowIssue.fields.priority.id;
  issue.priority.name = rowIssue.fields.priority.name;
  issue.status = {};
  issue.status.id = rowIssue.fields.status.id;
  issue.status.name = rowIssue.fields.status.name;
  issue.status.statusCategory = {};
  issue.status.statusCategory.id = rowIssue.fields.status.statusCategory.id;
  issue.status.statusCategory.name = rowIssue.fields.status.statusCategory.name;
  issue.summary = rowIssue.fields.summary;
  issue.description = rowIssue.fields.description;
  issue.id = rowIssue.id;
  issue.assignee = null;
  issue.creator = null;

  if (rowIssue.fields.assignee) {
    // eslint-disable-next-line max-len
    issue.assignee = await global.db.models.User.findOne({ jiraId: rowIssue.fields.assignee.accountId });

    if (rowIssue.fields.assignee.accountId === rowIssue.fields.creator.accountId) {
      issue.creator = issue.assignee;
    }
  }

  if (rowIssue.fields.creator && !issue.creator) {
    // eslint-disable-next-line max-len
    issue.creator = await global.db.models.User.findOne({ jiraId: rowIssue.fields.creator.accountId });
  }

  return issue;
}

export default {
  formatIssue,
};
