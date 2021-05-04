import router from 'router';
import handler from './handler/index.js';

const appRouter = router();

appRouter.post('/', handler);

export default appRouter;
