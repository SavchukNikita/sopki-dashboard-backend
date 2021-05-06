import passport from 'passport';
import handler from './handler.js';

passport.use('local', handler);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

export default passport;
