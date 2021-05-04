import router from 'router';
import handler from './handler/index.js';

const appRouter = router();

appRouter.use('/', handler);

export default appRouter;
