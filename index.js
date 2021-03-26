import dotenv from 'dotenv';
import express from 'express';
import router from './router/index.js';
import BaseYandexApi from './modules/yandex-connect/BaseYandexApi.js';

dotenv.config();
const port = process.env.PORT;
const app = express();

app.use(router);

app.listen(port, (error) => {
  if (error) return console.log(`Error: ${error}`);

  console.log(`Server listening on port ${port}`);

  // eslint-disable-next-line no-use-before-define
  // getYndex();

  const yandex = new BaseYandexApi();
  yandex.post();
});

async function getYndex() {
  const yandex = new BaseYandexApi();
  console.log(yandex.token);
  try {
    const yandexRes = await yandex.get('/v6/users/');
    console.log(yandexRes);
  } catch (error) {
    console.log(error);
  }
}
