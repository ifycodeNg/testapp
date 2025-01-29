/* eslint-disable no-console */
const Sequelize = require('sequelize');
const config = require('../config/secret');
const userModel = require('./model/users');

const sequelize = new Sequelize(
  'users',
  config.dbUser,
  config.dbPassword,
  {
    host: 'localhost',
    dialect: 'sqlite',

    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
);

sequelize
  .authenticate()
  .then(() => {})
  .catch((err) => {
    if (err) {
      throw err;
    }
  });

const User = userModel(sequelize, Sequelize);

sequelize.sync({ force: false }).then(() => {
  // console.clear();
  // console.log('Database & tables created Successfully!');
});

module.exports = {
  User,
  sequelize,

};
