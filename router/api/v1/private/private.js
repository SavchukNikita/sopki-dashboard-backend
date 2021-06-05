import router from 'router';
import users from './users/users.js';
import issues from './issues/issues.js';
import timetracker from './timetracker/timetracker.js';

const appRouter = router();

appRouter.use('/users', users);
appRouter.use('/issues', issues);
appRouter.use('/timetracker', timetracker);

export default appRouter;
