import all from './all/all.js';
import byUser from './byUser/byUser.js';

const receive = (req, res) => {
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
