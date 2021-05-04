import router from 'router';
import users from './users/index.js';

const appRouter = router();

appRouter.use('/users', users);

export default appRouter;
