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

userRouter.get('/logout',passport.authenticate('jwt',{session : false}),(req,res) => {
    res.clearCookie('access_token');
    res.json({user:{username : ""}, success : true});
});

userRouter.get('/admin',passport.authenticate('jwt',{session : false}),(req,res) => {
    if(req.user){
        res.status(200).json({message : {msgBody : 'Admin authorized :)', msgError : false}});
    }
    else
        res.status(403).json({message : {msgBody : "Unauthorized user :(", msgError : true}});
});

userRouter.get('/authenticated',passport.authenticate('jwt',{session : false}),(req,res) => {
    const {username} = req.user;
    res.status(200).json({isAuthenticated : true, user : {username}});
});


module.exports = userRouter;