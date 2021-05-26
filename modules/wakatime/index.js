import axios from 'axios';

const params = new URLSearchParams();
params.append('client_id', 'gru8oOqUh1qoBvBciZYv69v9');
params.append('client_secret', 'sec_KC5molcj94fakXhi1A7ksET8sisIcEpYZetTP8bYDSPfzSTnvqdnZyLjAfFGMoUI5ksnlEpodYuGnXtg');
params.append('grant_type', 'authorization_code');
params.append('response_type', 'code');

const config = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
};

axios.post('https://wakatime.com/oauth/authorize', params, config)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
