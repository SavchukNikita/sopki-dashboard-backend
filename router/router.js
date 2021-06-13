import router from 'router';
import api from './api/api.js';

const appRouter = router();

appRouter.use('/api', (req, res) => {
  res.header('Access-Control-Allow-Credentials', 'true');
});

export default appRouter;
