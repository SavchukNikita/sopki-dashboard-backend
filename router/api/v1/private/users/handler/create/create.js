import validator from './validator.js';

const create = (req, res) => {
  const { body } = req;

  if (!validator(req, res)) return null;

  const email = `${body.username.trim()}@sopki.team`;

  global.db.models.User.findOne({ username: body.username }, async (err, user) => {
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

    try {
      await global.jira.createUser({
        emailAddress: newUser.email,
        displayName: `${newUser.firstname} ${newUser.lastname}`,
        password: body.password,
      });
    } catch (error) {
      res.send(global.listStatus.notSuccess());
      return null;
    }

    newUser.save((error) => {
      if (error) {
        res.send(global.listStatus.notSuccess());
        return null;
      }

      res.send(global.listStatus.success(newUser));
    });
  });
};

export default create;
