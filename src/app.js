
const express = require('express');
const Todos = require('./model/todo.models');
const db = require ('./utils/database');
const todoRoutes = require('./routes/todo.routes'); 



Todos 
const PORT = 7000;

db.authenticate()
  .then( () => {
    console.log ('conexión a base de datos ok');
  })
  .catch(
    (error) => {
        console.log(error)
    }
  )  
  

  db.sync()//esto verifica lo que hay en node y verifica lo que hay en la base de datos
  .then(() => {
    console.log("base de datos sincronizada");
  })
  
  .catch((error) =>{
    console.log(error);
  });

  const app = express()
  app.use(express.json());

app.use(todoRoutes);

app.listen(7000, () => {
  console.log(`se escucha en el puerto 7000`)

})