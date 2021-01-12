const Sequelize = require('sequelize');

const sequelize = new Sequelize('socialnetwork','root', '', {
    host: '127.0.0.1',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
   storage: 'path/to/database.sqlite', // Chỉ dùng khi MS là SQLite
});

module.exports = sequelize;
global.sequelize = sequelize;

