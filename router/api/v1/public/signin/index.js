const handler = (req, res, next) => {
  global.passport.authenticate('local', (err, user, info) => {
    console.log(`Err: ${err}`);
    console.log(`User: ${user}`);
    console.log(`Info: ${JSON.stringify(info)}`);

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
  const user = global.db.model.User({
    _id: global.db.mongoose.Types.ObjectId(),
    firstname: 'Nikita',
    lastname: 'Savchuk',
    username: 'user',
    password: '123',
  });

  user.save((err) => {
    if (err) throw err;

    res.send('Mongo: add success');
    console.log('Mongo: add success');
  });
}; */

export default handler;
