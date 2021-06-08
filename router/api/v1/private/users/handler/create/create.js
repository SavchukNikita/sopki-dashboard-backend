import validator from './validator.js';

const create = (req, res) => {
  const { body } = req;

  if (!validator(req, res)) return null;

  const email = `${body.username.trim()}@sopki.team`;

  global.db.models.User.findOne({ username: body.username }, async (err, user) => {
    if (err) {
      console.log(err);
      res.send(global.listStatus.notSuccess());
      return null;
    }

    if (user) {
      res.send(global.listStatus.alreadyExist());
      return null;
    }

    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    today = `${dd}.${mm}.${yyyy}`;

    const newUser = global.db.models.User({
      _id: global.db.mongoose.Types.ObjectId(),
      firstname: body.firstname,
      lastname: body.lastname,
      username: body.username,
      email,
      create_at: today,
      role: body.role ? body.role : 'developer',
    });

    newUser.setPassword(body.password);

    let jiraRes = null;

    try {
      jiraRes = await global.jira.createUser({
        emailAddress: newUser.email,
        displayName: `${newUser.firstname} ${newUser.lastname}`,
        password: body.password,
      });
    } catch (error) {
      console.log(error);
      res.send(global.listStatus.notSuccess());
      return null;
    }

    if (jiraRes) newUser.jiraId = jiraRes.accountId;

    newUser.save((error) => {
      if (error) {
        console.log(error);
        res.send(global.listStatus.notSuccess());
        return null;
      }

      res.send(global.listStatus.success(newUser));
    });
  });
};

export default create;
