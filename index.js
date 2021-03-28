import dotenv from 'dotenv';
import express from 'express';
import https from 'https';
import fs from 'fs';
import router from './router/index.js';
import BaseYandexApi from './modules/yandex-connect/BaseYandexApi.js';

dotenv.config();
const port = process.env.PORT;
const app = express();

const privateKey = fs.readFileSync('./sopki.space.key', 'utf8');
const certificate = fs.readFileSync('./sopki.space.crtca', 'utf8');
const credentials = { key: privateKey, cert: certificate };

app.use(router);

const httpsServer = https.createServer(credentials, app);

httpsServer.listen(port, (error) => {
  if (error) return console.log(`Error: ${error}`);

  console.log(`Server listening on port ${port}`);

  // eslint-disable-next-line no-use-before-define
  getYndex();

  return null;
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
