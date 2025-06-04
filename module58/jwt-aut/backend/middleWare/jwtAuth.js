const JWT = require('jsonwebtoken');

const jwtAuth = (req, res, next) => {
     // verify token
     // inject user info in req

     const token = (req.cookies && req.cookies.token) ||  null ;

     // if token is not present, return error
     if(!token) {
          return res.status(400).json({
               success: false,
               message: "Not authorized"
          });
     };

     // if token is present, verify it
     try {
          const payload = JWT.verify(token, process.env.SECRET);
          // if token is valid, inject user info in req
          req.user = {
               id: payload.id,
               email: payload.email
          };
          next();
     } catch (error) {
          return res.status(400).json({
               success: false,
               message: `"Invalid token" ${error.message}`
          });          
     };
};

module.exports = jwtAuth;