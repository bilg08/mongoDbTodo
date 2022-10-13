const express = require("express");
const signUp = express.Router();
const {createUser} = require('../controller/signUp.js')

signUp.post("/", createUser);

module.exports = signUp;
