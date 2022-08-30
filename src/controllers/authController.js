// const jwt = require("jsonwebtoken");
// const userModel = require("../models/userModel");


// const createUser = async function (abcd, xyz) {

//     let data = req.body;
//     let saveData = await userModel.create(data)

//     res.send({msg: saveData})

// };

// const loginUser = async function (req, res) {
//     let userName = req.body.emailId;
//     let password = req.body.password;
  
//     let user = await userModel.findOne({ emailId: userName, password: password });
//     if (!user)
//       return res.send({
//         status: false,
//         msg: "username or the password is not correct",
//       });

//       let token = jwt.sign(
//         {
//           userId: user._id.toString(),
//           batch: "thorium",
//           organisation: "FUnctionUp",
//         },
//         "functionup-thorium"
//       );
//       res.setHeader("x-auth-token", token);
//       res.send({ status: true, data: token });
//     };

//     const getUserData = async function(req, res)
// {
//   let usersId = req.param.userId
//   let matchUsers = await userModel.findById(usersId)
//   if(!matchUsers) return res.send({status:false, msg:"person not exist"})
//   else{
//     return res.send({status : true, data:matchUsers})
//   }
// };

// const updatedUser = async function(req, res){
//   let UserId = req.param.userId;

//   let user = await userModel.findById(UserId)

//   if(!user) 
//   return res.send ({status :false, msg:"person not exist"})
//   let save = req.body;
//   let updateSave = await userModel.findOneAndUpdate({_id:UserId},save, {new:true})
//   if(!updateSave) 
//   return res.send({status:false, msg:"person not exist"})

//   else{
//     return res.send({status:true, data:updateSave})
//   }
// }


// module.exports.createUser=createUser
// module.exports.loginUser=loginUser
// module.exports.getUserData=getUserData
// module.exports.updatedUser=updatedUser
