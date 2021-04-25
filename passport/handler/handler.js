import passportLocal from 'passport-local';

const LocalStrategy = passportLocal.Strategy;

const config = {
  usernameField: 'username',
  passwordField: 'password',
};

const handler = new LocalStrategy(config, (username, password, done) => {
  const findObj = {
    username: username.trim(),
  };

  global.db.model.User.findOne(findObj, (err, user) => {
    if (err) {
      done(err);
      return null;
    }

    if (!user) {
      done(null, false, { message: 'Incorrect username' });
      return null;
    }

    if (user.password !== password.trim()) {
      done(null, false, { message: 'Incorrect password' });
      return null;
    }

    return done(null, user);
  });
});

export default handler;
