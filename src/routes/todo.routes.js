const {Router} = require('express');
const Todos = require ('../model/todo.models');
const router = Router();

router.get ('/api/v1/todos', async (req,res) =>{

    try {
        const todos = await Todos.findAll({attributes:['id', 'title', 'description', 'status']});
        res.json(todos)
    } catch (error) {
        res.status(400).json(error)

    }

});

router.post ('/api/v1/todos', async (req,res) =>{

    try {
        const newTodo = req.body
        const result = await Todos.create(newTodo);
        res.status(201).send(result);
    } catch (error) {
        res.status(400).json(error)

    }

});

router.put ('/api/v1/todos/:id', async (req,res) =>{

    try {
       const  { id } = req.params
       const data = req.body
       await Todos.update(data,{
        where: {id}
       }) 
       res.status(204).send()
    } catch (error) {
        res.status(400).json(error)

    }

});

router.delete ('/api/v1/todos/:id', async (req,res) =>{

    try {
       const  { id } = req.params
       const result = await Todos.destroy({
        where: {id}
       }) 
       res.status(204).send()
    } catch (error) {
        res.status(400).json(error)

    }

});

module.exports = router
