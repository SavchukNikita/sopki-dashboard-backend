import validator from 'validator';

const validate = (req, res) => {
  const { body } = req;

  if (!body.firstname || validator.isEmpty(`${body.firstname}`)) {
    res.send(global.listStatus.invalidFirstname());
    return false;
  }

  if (!body.lastname || validator.isEmpty(`${body.lastname}`)) {
    res.send(global.listStatus.invalidLastname());
    return false;
  }

  if (!body.username || validator.isEmpty(`${body.username}`)) {
    res.send(global.listStatus.invalidUsername());
    return false;
  }

  const email = `${body.username.trim()}@sopki.team`;

  if (!validator.isEmail(email)) {
    res.send(global.listStatus.invalidUsername());
    return false;
  }

  if (!body.password || body.password.length < 7) {
    res.send(global.listStatus.invalidPassword());
    return false;
  }

  return true;
};

export default validate;
