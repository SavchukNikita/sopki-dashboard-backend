const deleteFun = async (req, res) => {
  const body = { req };

  if (!body.issueId) {
    res.send(global.listStatus.notExist());
  }

  let jiraRes = null;

  try {
    jiraRes = global.jira.deleteIssue(body.issueId);
  } catch (error) {
    res.send(global.listStatus.notSuccess());
    return null;
  }
};

export default deleteFun;
