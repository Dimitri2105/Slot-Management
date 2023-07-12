const Sequelize = require('sequelize')

const sequelize = require('../database/database')

const Slot = sequelize.define('slot' , {
    id : {
        type : Sequelize.INTEGER,
        autoIncrement : true,
        allowNull : false,
        primaryKey  : true
    },
    dateInput : {
        type : Sequelize.STRING,
        allowNull : false,
    },
    startTimeInput : {
        type : Sequelize.STRING,
        allowNull : false,
    },
    endTimeInput : {
        type : Sequelize.STRING,
        allowNull : false,
    },

})

module.exports = Slot