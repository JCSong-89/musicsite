import {PORT} from './config/index';
import http from 'http';
import db from './loader/dbconnet';
import App from './loader/app';

const serverHandler = () => {
  console.log('서버 가동 ON PORT: ', PORT);
};

http.createServer(App.getApp()).listen(PORT, async () => {
  await db.sequelize.authenticate();
  await db.sequelize.sync(true);
  serverHandler();
});