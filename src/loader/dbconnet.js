import Sequelize from 'sequelize';

import {DB_ENV} from '../config/index';
import User from '../models/User';
import Music from '../models/Music';

const db = {};
const sequelize = new Sequelize(
  DB_ENV.DB_NAME,
  DB_ENV.DB_USER,
  DB_ENV.DB_PASSWORD,
  {
    host: DB_ENV.DB_HOST,
    username: 'root',
    password: DB_ENV.DB_PASSWORD,
    database: DB_ENV.DB_NAME,
    dialect: 'mysql',
    port: DB_ENV.DB_PORT,
    ssl: 'Amazon RDS',
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