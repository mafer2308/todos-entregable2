const {DataTypes} = require('sequelize');
const db = require ('../utils/database');
const Todos = db.define('todos',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
      },
      title:{
       type:DataTypes.STRING,
       allowNull:false,
      },
      description:{
        type:DataTypes.TEXT,
        allowNull:false,
      },
      status:{
        type:DataTypes.STRING(40),
        allowNull:false
      }
});

module.exports = Todos;
    