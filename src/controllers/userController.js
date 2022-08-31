const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {

  try {
    let data = req.body;
    let savedData = await userModel.create(data);

    res.staus(200).send({ msg: savedData });
  }
  catch (error) {
    res.status(500).send({ error: error.message })
  }
};


const loginUser = async function (req, res) {
  try {
    let userName = req.body.emailId;
    let password = req.body.password;

    let user = await userModel.findOne({ emailId: userName, password: password });


    if (!user)
      return res.status(401).send({
        status: false,
        error: "username or the password is not correct",
      });

    let token = jwt.sign(
      {
        userId: user._id.toString(),
        batch: "thorium",
        organisation: "FUnctionUp",
      },
      "functionup-thorium"
    );
    res.setHeader("x-auth-token", token);
    res.status(201).send({ status: true, data: token })
  }
  catch (error) {
    res.status(500).send({ msg: "Not authenticated", error: error.message })
  }
};



const getUserData = async function (req, res) {
  try {
    let userId = req.params.userId;
    let userDetails = await userModel.findById(userId);
    if (!userDetails)
      return res.status(401).send({ status: false, msg: "No such user exists" });

    res.status(201).send({ status: true, data: userDetails })
  }
  catch (error) {
    res.status(500).send({ error: error.message })
  }
};



const updateUser = async function (req, res) {
  try {
    let userId = req.params.userId;
    let user = await userModel.findById(userId);
    //Return an error if no user with the given id exists in the db
    if (!user) {
      return res.status(401).send("No such user exists");
    }
    let userData = req.body;
    let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
    res.status(201).send({ status: true, data: updatedUser })
  }
  catch (error) {
    res.status(500).send({ error: error.message })
  }
};

const deleted = async function (req, res) {
  try {
    let userId = req.params.userId
    let deletedUser = await userModel.findOneAndUpdate({ _id: userId }, { isDeleted: true }, { new: true })
    if (!deletedUser)
      return res.status(401).send({ status: false, msg: "No such user exists" });
    res.send({ status: true, msg: deletedUser })


    return res.send({ status: false, msg: "No such user exists" })
  }

  catch (err) {
    res.status(500).send({ error: err.message })

  }
};
// const postMessage = async function (req, res) {
//   let updatedPosts = req.body.posts
// updatedPosts.push(message)
//   let updatedUser = await userModel.findOneAndUpdate({ _id: user._id }, { posts: updatedPosts }, { new: true })


//   return res.send({ status: true, data: updatedUser })
// }



module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
//module.exports.postMessage = postMessage
module.exports.deleted = deleted