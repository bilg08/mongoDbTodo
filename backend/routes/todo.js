const express = require("express");
const jwt = require('jsonwebtoken')
const todoRouter = express.Router();
const model = require("../model/registeration.js");


todoRouter.post("/addTodo", checkUserAccessTokenKey, async(req, res) => {
  const { todo } = req.body;
  const { todos, email } = req.user;
  try {
    await model.find({ email }).updateOne({ todos: [...todos, todo] });
    res.status(200).json({
      status:true
    })
  } catch (error) {
    
  }

})
.delete("/deleteTodo/:id", checkUserAccessTokenKey, async(req, res) => {
  const { id } = req.params;
  const {todos} = req.user;
   
  try {
   await model.find( req.user ).updateOne({todos:todos.filter((todoItem,index) => {
    return index!=id
   })});
   res.status(200).json({
      status:true
    })
  } catch (error) {
    
  }

});


async function checkUserAccessTokenKey(req, res, next) {
  try {
    const { accesstoken } = req.headers;
    jwt.verify(accesstoken, process.env.ACCESS_TOKEN_KEY, async (err, user) => {
      if (user) {
        const userData = await model.findOne({ email: user.email });
        req.user = userData;
        next();
      } 
    });
  } catch (error) {}
}  

module.exports = todoRouter;
