const express = require("express");
const jwt = require("jsonwebtoken");
const getDataRouter = express.Router();
const model = require('../model/registeration.js')
// const { createUser } = require("../controller/loginRouter.js");

getDataRouter.get("/", checkUserAccessTokenKey, async(req, res) => {
  await res.status(200).json({
    data: req.user,
  });
});

async function checkUserAccessTokenKey(req, res, next) {
    try {
      const accessToken = req.headers.accesstoken;
      console.log(accessToken)
        jwt.verify(accessToken, process.env.ACCESS_TOKEN_KEY, async(err, user) => {
            if (user) {
                const userData = await model.findOne({ email: user.email });
                req.user = userData;
                next();

            }else{
              res.status(400).json({err:'error'})
            }
        });
    } catch (error) {
    }
}
module.exports = getDataRouter;
