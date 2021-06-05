import day from './day.js';

const all = (req, res) => {
  const { body } = req;

  if (body.submethod === 'day') {
    day(req, res);
    return null;
  }

  res.send(global.listStatus.invalidSubmethod());
  return null;
};

export default all;
