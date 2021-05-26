import jiraTypes from '../../../../../../../modules/jira/issue/type.js';

const create = async (req, res) => {
  const { body } = req;

  if (!body.summary) {
    res.send(global.listStatus.invalidSummary());
    return null;
  }

  if (!body.description) {
    res.send(global.listStatus.invalidDescription());
    return null;
  }

  const issuetype = jiraTypes.findType(body.type);

  if (!issuetype) {
    res.send(global.listStatus.invalidType());
    return null;
  }

  const fields = {
    summary: body.summary,
    description: body.description,
    issuetype,
    project: { id: '10002' },
  };

  let jiraRes = null;

  try {
    jiraRes = await global.jira.addNewIssue({ fields });
    console.log(jiraRes);
  } catch (error) {
    console.log(error);
  }

  res.send(global.listStatus.success(fields));
};

export default create;
