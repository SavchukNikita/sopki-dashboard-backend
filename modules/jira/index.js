import JiraApi from 'jira-client';

const jira = new JiraApi({
  protocol: 'https',
  host: 'sopki.atlassian.net',
  username: 'projects@sopki.team',
  password: 'eTr98XE9QW4htiN9Hf8hF72A',
  apiVersion: '2',
  strictSSL: true,
});

export default jira;
