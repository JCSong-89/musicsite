import http from 'http';

import App from './loader/app';
import db from './loader/dbconnet';
import {PORT} from './config/index';

const serverHandler = () => {
  console.log('서버 가동 ON PORT: ', PORT);
};

http.createServer(App.getApp()).listen(PORT, async () => {
  await db.sequelize.authenticate();
  await db.sequelize.sync(true);
  serverHandler();
});