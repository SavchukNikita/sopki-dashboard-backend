import router from 'router';
import users from './users/users.js';

const appRouter = router();

appRouter.use('/users', users);

export default appRouter;
