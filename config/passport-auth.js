const passport = require("passport");  
const passportJWT = require("passport-jwt");  
const config = require("./jwt.js");  
const ExtractJwt = passportJWT.ExtractJwt;  
const Strategy = passportJWT.Strategy;  
const params = {  
  secretOrKey: config.jwtSecret,
  jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("jwt")
};
         
module.exports = function() {  
  passport.use(new Strategy(params, ((payload, done) => {
    const user = users[payload.id] || null;
    if (user) {
      return done(null, {
        id: user.id
      });
    } else {
      return done(new Error("User not found"), null);
    }
  })));
  return {
    initialize: function() {
    return passport.initialize();
  },
    authenticate: function() {
      return passport.authenticate("jwt", cfg.jwtSession);
    }
  };
};
