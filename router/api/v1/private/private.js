import router from 'router';
import users from './users/users.js';
import issues from './issues/issues.js';

const appRouter = router();

appRouter.use('/users', users);
appRouter.use('/issues', issues);

export default appRouter;
