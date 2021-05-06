import router from 'router';
import publicRoute from './public/public.js';
import privateRoute from './private/private.js';

const appRouter = router();

const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) return next();

  res.send(global.listStatus.notAuth());
};

appRouter.use('/public', publicRoute);
appRouter.use('/private', isAuthenticated, privateRoute);

export default appRouter;
