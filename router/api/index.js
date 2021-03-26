import router from 'router';

const appRouter = router();

appRouter.use('/', (req, res) => {
  res.send('PIZDA');
});

export default appRouter;
