import all from './all.js';
import my from './my.js';

const receive = (req, res) => {
  const { body } = req;

  if (body.submethod === 'all') {
    all(req, res);
    return null;
  }

  if (body.submethod === 'my') {
    my(req, res);
    return null;
  }

  res.send(global.listStatus.invalidSubmethod());
  return null;
};

export default receive;
