import router from 'router';
import v1 from './v1/index.js';

const appRouter = router();

appRouter.use('/v1', v1);

export default appRouter;
