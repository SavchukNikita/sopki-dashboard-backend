import router from 'router';
import signin from './signin/signin.js';

const appRouter = router();

appRouter.post('/signin', signin);

export default appRouter;
