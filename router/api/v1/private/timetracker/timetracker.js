import router from 'router';
import update from './update.js';
import receive from './receive/all.js';

const appRouter = router();

appRouter.post('/update', update);
appRouter.use('/receive', receive);

export default appRouter;
