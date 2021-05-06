import dotenv from 'dotenv';
import express from 'express';
import cookieParser from 'cookie-parser';
import expressSession from 'express-session';
import multer from 'multer';
import router from './router/router.js';
import database from './mongoDB/index.js';
import passport from './passport/index.js';
import listStatus from './listStatus/index.js';
import jira from './modules/jira/index.js';

dotenv.config();
const port = process.env.PORT;
const app = express();
database.connect();

app.use(cookieParser());
app.use(express.urlencoded());
app.use(express.json());
app.use(multer().array());
app.use(expressSession({
  secret: 'sopkiKeySct',
  resave: true,
  rolling: true,
  saveUninitialized: false,
  cookie: {
    maxAge: 60 * 60 * 1000,
    httpOnly: false,
  },
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(router);

global.db = database;
global.passport = passport;
global.listStatus = listStatus;
global.jira = jira;

app.listen(port, (error) => {
  if (error) return console.log(`Error: ${error}`);

  console.log(`Server listening on port ${port}`);
});
