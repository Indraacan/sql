const Sequalize = require ('sequelize')

const sequalize = new Sequalize ('cafe','root','kawasan1?',{
    host : 'localhost',
    dialect : 'mysql',
    pool : {
        max :5,
        min : 5,
        acquire : 30000,
        idle:10000
    }
} )
const Menu = sequalize.define(
    "menu", 
    {
        name : {
            type : Sequalize.STRING,
            allowNull : false,
        },
        price : 
        {
            type : Sequalize.STRING,
            allowNull : false
        },
        description : 
        {
            type : Sequalize.STRING,
            allowNull : false
        },
        image : 
        {
            type : Sequalize.STRING,
            allowNull : false,

        }
    },{freezeTableName : true})

module.exports = Menu;