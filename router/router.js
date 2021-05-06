import router from 'router';
import api from './api/api.js';

const appRouter = router();

appRouter.use('/api', api);

export default appRouter;
