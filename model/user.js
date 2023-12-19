const Sequelize = require('sequelize')
const sequelize = require('../util/database')
const User = sequelize.define('User',{
    id: {
        type:Sequelize.INTEGER,
        allowNull:false,
        autoIncrement: true,
        primaryKey: true
    },
    name : {
        type:Sequelize.STRING,
    },
    email : {
        type : Sequelize.STRING,
        allowNull : false 
    },
    phone : {
        type : Sequelize.INTEGER,
        allowNull : false
    }
})

module.exports = User;