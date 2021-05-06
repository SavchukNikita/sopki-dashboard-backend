const handler = (req, res, next) => {
  global.passport.authenticate('local', (err, user, info) => {
    if (err) {
      res.send(global.listStatus.notSuccess());
      return null;
    }

    if (!user) {
      res.send(global.listStatus.notExist());
      return null;
    }

    req.logIn(user, (error) => {
      if (error) {
        throw error;
      }

      res.send(global.listStatus.success(user));
      return null;
    });
  })(req, res, next);
};

/* const handler = (req, res, next) => {
  const user = global.db.models.User({
    _id: global.db.mongoose.Types.ObjectId(),
    firstname: 'Nikita',
    lastname: 'hashCheck',
    username: 'hash',
  });

  user.setPassword('123');

  user.save((err) => {
    if (err) throw err;

    res.send('Mongo: add success');
    console.log('Mongo: add success');
  });
}; */

export default handler;
