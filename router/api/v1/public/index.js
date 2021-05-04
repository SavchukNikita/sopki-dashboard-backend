import router from 'router';
import signin from './signin/index.js';

const appRouter = router();

appRouter.use('/signin', signin);

export default appRouter;