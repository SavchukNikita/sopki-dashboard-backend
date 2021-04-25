import router from 'router';
import publicRoute from './public/index.js';
import privateRoute from './private/index.js';

const appRouter = router();

const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) return next();

  console.log(req.isAuthenticated());

  res.send('notAuth');
};

appRouter.use('/public', publicRoute);
appRouter.use('/private', isAuthenticated, privateRoute);

export default appRouter;
