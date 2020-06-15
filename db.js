const Sequelize = require('sequelize');
const ProductoModel = require('./models/producto');
const UserModel = require('./models/user');

const sequelize = new Sequelize('notwcLgzNA', 'notwcLgzNA', 'skdH8X2g7X', {
    host: 'remotemysql.com',
    dialect: 'mysql'

});

const Producto = ProductoModel(sequelize, Sequelize);

const User = UserModel(sequelize, Sequelize);

sequelize.sync({ force: false })
    .then(() => {
        console.log('tablas sincronizadas')
    })
module.exports = { Producto, User }