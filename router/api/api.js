import router from 'router';
import v1 from './v1/v1.js';

const appRouter = router();

appRouter.use('/v1', (req, res) => {
  res.header('Access-Control-Allow-Credentials', 'true');

  v1(req, res);
});

export default appRouter;
