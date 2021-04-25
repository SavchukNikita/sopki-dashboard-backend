import dotenv from 'dotenv';
import express from 'express';
// import JiraApi from 'jira-client';
import cookieParser from 'cookie-parser';
import expressSession from 'express-session';
import multer from 'multer';
import router from './router/index.js';
import database from './mongoDB/index.js';
import passport from './passport/index.js';
import listStatus from './listStatus/index.js';

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
  saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(router);

global.db = database;
global.passport = passport;
global.listStatus = listStatus;

app.listen(port, (error) => {
  if (error) return console.log(`Error: ${error}`);

  console.log(`Server listening on port ${port}`);

  /* const user = new db.UserModel({
    _id: db.mongoose.Schema.Types.ObjectId(),
    firstname: 'Nikita',
    lastname: 'Savchuk',
  });

  console.log(user);
  user.save((err) => {
    if (err) throw err;

    console.log('Mongo: add success');
  }); */

  /* const jira = new JiraApi({
    protocol: 'https',
    host: 'sopki.atlassian.net',
    username: 'savchuk@sopki.team',
    password: 'w1z7pvUE5e4p2FRLOFxj6E3C',
    apiVersion: '2',
    strictSSL: true,
  }); */
});
