import all from './all/all.js';
import byUser from './byUser/byUser.js';

const receive = (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');

  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  res.header('Access-Control-Allow-Headers', 'Origin,Content-Type,X-Requested-With,Accept,Authorization');
  const { body } = req;

  if (body.method === 'all') {
    all(req, res);
    return null;
  }

  if (body.method === 'byUser') {
    byUser(req, res);
    return null;
  }

  res.send(global.listStatus.invalidMethod());
  return null;
};

export default receive;
