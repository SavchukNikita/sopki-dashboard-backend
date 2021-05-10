import receive from './receive/receive.js';

const handler = (req, res, next) => {
  const { body } = req;

  if (body.method === 'receive') {
    receive(req, res);
    return null;
  }

  res.send(global.listStatus.invalidMethod());
  return null;
};

export default handler;
