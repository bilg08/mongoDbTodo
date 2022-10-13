const express = require("express");
const bcrypt = require('bcrypt');
const jtw = require("jsonwebtoken");
//init express
const app = express();

const model = require("../model/registeration.js");
//json
app.use(express.json());
exports.checkAndLoginUser = async (req, res, next) => {
    const queriedData = await model.findOne({ email: req.body.email });
    try {
        if (await bcrypt.compare(req.body.password, queriedData.password)) {
            const accessToken = jtw.sign(
              req.body,
              process.env.ACCESS_TOKEN_KEY
            );
            res.status(200).json({
                success: true,
                accessToken:accessToken
            })
        } else {
           res.status(400).json({
             success: false,
           }); 
        }
    } catch (error) {
        
    }
    
};

