const Sequelize = require('sequelize')

const sequelize = new Sequelize ('node-slot' , 'root' , 'Tarathakur@21',{
    dialect : 'mysql',
    host : 'localhost'
})

module.exports = sequelize