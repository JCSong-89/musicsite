import Sequelize from 'sequelize';

import {DB_DATABASE, DB_HOST, DB_PASSWORD, DB_USERNAME} from '../config/index';
import User from '../models/User';
import Music from '../models/Music';

const db = {};
const sequelize = new Sequelize(
  DB_DATABASE,
  DB_USERNAME,
  DB_PASSWORD,
  {
    host: DB_HOST,
    username: 'root',
    password: DB_PASSWORD,
    database: DB_DATABASE,
    dialect: 'mysql',
    port: 3306,
    //ssl: 'Amazon RDS',
    logging: console.log,
    timezone: '+09:00', // 한국 시간 셋팅
  },
);

db.User = User(sequelize, Sequelize);
db.Music = Music(sequelize, Sequelize);

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;