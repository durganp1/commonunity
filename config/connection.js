<<<<<<< HEAD
=======


>>>>>>> 7a45528e54e1b53ccdc3c6b8657ffb66d3160626
const Sequelize = require('sequelize');

require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
<<<<<<< HEAD
  } else {
    sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    });
  }
  
  module.exports = sequelize;
=======
} else {
    sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    });
}

module.exports = sequelize;
>>>>>>> 7a45528e54e1b53ccdc3c6b8657ffb66d3160626
