const express = require('express');
const userRouter = express.Router();
const passport = require('passport');
const passportConfig = require('../passport');
const JWT = require('jsonwebtoken');
const User = require('./models/User');

const signToken = userID => {
    return JWT.sign({
        iss : "ETHANsaysyes",
        sub : userID
    },"ETHANsaysyes",{expiresIn : "1h"});
}

userRouter.post('/login',passport.authenticate('local',{session : false}),(req,res) => {
    if(req.isAuthenticated()){
        const { _id,username } = req.user;
        const token = signToken(_id);
        res.cookie('access_token',token,{httpOnly: true, sameSite:true});
        res.status(200).json({isAuthenticated : true,user : {username}});
    }
});

module.exports = userRouter;