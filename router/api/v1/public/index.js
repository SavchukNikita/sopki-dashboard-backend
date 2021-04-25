import router from 'router';
import signin from './signin/index.js';

const appRouter = router();

appRouter.post('/signin', signin);

export default appRouter;
