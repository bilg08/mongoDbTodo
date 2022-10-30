const express = require("express");
const { checkAndLoginUser } = require("../controller/login");
const loginRouter = express.Router();
const model = require('../model/registeration.js')
// const { createUser } = require("../controller/loginRouter.js");

loginRouter.post("",checkUserAccessTokenKey, checkAndLoginUser);

function checkUserAccessTokenKey(req,res,next) {
    const authHeader = req.headers;
    next()
}
module.exports = loginRouter;
