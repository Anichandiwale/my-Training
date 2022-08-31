const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const authorise = function(req, res, next) {
    let token = req.headers["x-Auth-token"]||req.headers["x-auth-token"];  
    
    
      //If no token is present in the request header return error. This means the user is not logged in.
      if (!token) return res.status(403).send({ status: false, msg: "token must be present" });
    
      //try & catch is used for error handling
      try{
        let decoded = jwt.verify(token,'functionup-thorium')
      }
    
    catch(error){
     
        return res.status(401).send({msg:error.message})
      }
      try{
        let decoded =  jwt.verify(token,'functionup-thorium')
        let userToModify = req.params.userId
        let userLoggedIn= decoded.userId
        if(userToModify!=userLoggedIn){
          return res.status(401).send({msg: " sorry! you are not a authorized person"})
        }else{userId}
      }
    
    
      catch (error){}
    
      next()
    }

module.exports.authorise=authorise