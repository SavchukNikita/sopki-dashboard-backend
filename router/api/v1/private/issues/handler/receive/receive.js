import all from './all.js';

const receive = (req, res) => {
  const { body } = req;

  if (body.submethod === 'all') {
    all(req, res);
    return null;
  }

  res.send(global.listStatus.invalidSubmethod());
  return null;
};

export default receive;
