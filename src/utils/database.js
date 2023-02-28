const {Sequelize} = require ('sequelize'); // importamos Sequelize
const db = new Sequelize ({                // crear instancia
    database: 'todos',
    port: 5432,                            // nombre del puerto de sql
    host: 'localhost',
    username: 'postgres',
    password: 'rut',
    dialect: 'postgres'
});
module.exports = db; 
