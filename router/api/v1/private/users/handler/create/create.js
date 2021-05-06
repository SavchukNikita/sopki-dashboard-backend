import validator from 'validator';

const handler = (req, res) => {
  const { body } = req;

  if (!body.firstname || validator.isEmpty(`${body.firstname}`)) {
    res.send(global.listStatus.invalidFirstname());
    return null;
  }

  if (!body.lastname || validator.isEmpty(`${body.lastname}`)) {
    res.send(global.listStatus.invalidLastname());
    return null;
  }

  if (!body.username || validator.isEmpty(`${body.username}`)) {
    res.send(global.listStatus.invalidUsername());
    return null;
  }

  const email = `${body.username.trim()}@sopki.team`;

  if (!validator.isEmail(email)) {
    res.send(global.listStatus.invalidUsername());
    return null;
  }

  if (!body.password || body.password.length < 7) {
    res.send(global.listStatus.invalidPassword());
    return null;
  }

  global.db.models.User.findOne({ username: body.username }, (err, user) => {
    if (err) {
      res.send(global.listStatus.notSuccess());
      return null;
    }

    if (user) {
      res.send(global.listStatus.alreadyExist());
      return null;
    }

    const newUser = global.db.models.User({
      _id: global.db.mongoose.Types.ObjectId(),
      firstname: body.firstname,
      lastname: body.lastname,
      username: body.username,
      email,
    });

    newUser.setPassword(body.password);

    newUser.save((error) => {
      if (error) {
        res.send(global.listStatus.notSuccess());
        return null;
      }

      res.send(global.listStatus.success(newUser));
    });
  });
};

export default handler;
