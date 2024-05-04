const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('ecodb', 'root', '',{
    host: "localhost",
    dialect:  "mysql"
})

try{
    sequelize.authenticate()
    console.log("conectado")
} catch (err){
    console.log( `erro: ${err}`)
}

module.exports = sequelize