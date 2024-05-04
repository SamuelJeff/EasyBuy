const {DataTypes} = require('sequelize')

const db = require('../db/conn')

const User = require('./User')

const Product = db.define('Product', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true,
    },
})

Product.belongsTo(User)
User.hasMany(Product)

module.exports = Product