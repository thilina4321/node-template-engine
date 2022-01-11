const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('node-ejs', 'root', 'rootroot', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize