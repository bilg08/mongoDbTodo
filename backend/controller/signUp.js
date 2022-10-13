const express = require("express");
const bcrypt = require('bcrypt');
//init express
const app = express();
const jtw = require('jsonwebtoken')

const model = require('../model/registeration.js')
//json
app.use(express.json());
exports.createUser = async (req, res, next) => {
  try {
    const salt = await bcrypt.genSalt()
    const hashedPassword = await bcrypt.hash(req.body.password,salt);
    const accessToken = jtw.sign(req.body, process.env.ACCESS_TOKEN_KEY);
    const signUp = await model.create({
      email: req.body.email,
      password:hashedPassword
    });
 console.log({
   success: true,
   accesstoken: accessToken,
 });
    res.status(200).json({
      success: true,
      accesstoken: accessToken,
    });
      
    
  } catch (error) {
    res.status(400).send('this user exist')
  }

};


 

