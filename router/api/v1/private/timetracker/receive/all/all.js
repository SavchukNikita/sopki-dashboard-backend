import day from './today.js';
import byDay from './byDay.js';
import range from './range.js';

const all = (req, res) => {
  const { body } = req;

  if (body.submethod === 'today') {
    day(req, res);
    return null;
  }

  if (body.submethod === 'byDay') {
    byDay(req, res);
    return null;
  }

  if (body.submethod === 'range') {
    range(req, res);
    return null;
  }

  res.send(global.listStatus.invalidSubmethod());
  return null;
};

export default all;
