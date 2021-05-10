import router from 'router';
import handler from './handler/handler.js';

const appRouter = router();

appRouter.post('/', handler);

export default appRouter;
