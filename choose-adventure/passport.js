const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const User = require('./routes/models/User');

const cookieExtractor = req => {
    let token = null;
    if(req && req.cookies){
        token = req.cookies["access_token"];
    }
    return token;
}

//  AUTHORIZATION TO PROTECT ADMIN DASHBOARD
passport.use(new JwtStrategy({
    jwtFromRequest : cookieExtractor,
    secretOrKey : "ETHANsaysyes"
},(payload,done) => {
    User.findById({_id : payload.sub},(err,user) => {
        if(err){
            console.log(err)
            return done(err,false);
        }
        if(user)
            return done(null,user);
        else
            return done(null,false);
    });
}));

//  AUTHENTICATED LOCAL STRATEGY USING USERNAME & PASSWORD
passport.use(new LocalStrategy((username,password,done) => {
    User.findOne({username}, (err, user) => {
        // SOMETHING WENT WRONG WITH DATABASE
        if(err){
            console.log(err);
            return done(err);
        }
        // IF NO USER EXISTS
        if(!user)
            return done(null, false);
        // CHECKS IF PASSWORD IS CORRECT
        user.comparePassword(password,done);
    });
}));