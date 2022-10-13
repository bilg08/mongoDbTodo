const express = require("express");
const { addTodo } = require("../controller/addTodo");
const jwt = require('jsonwebtoken')
// const { checkAndLoginUser } = require("../controller/login");
const todoRouter = express.Router();
const model = require("../model/registeration.js");
const { updateOne } = require("../model/registeration.js");
// const { createUser } = require("../controller/loginRouter.js");

todoRouter.post("/addTodo", checkUserAccessTokenKey, async(req, res) => {
  const { todo } = req.body;
  const { todos, email } = req.user;
  console.log(todos,todo)
  try {
    await model.find({ email }).updateOne({ todos: [...todos, todo] })
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
