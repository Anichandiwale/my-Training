const express = require('express');
const router = express.Router();

const userController= require("../controllers/userController")
const authentMiddleware = require("../controllers/auth")


router.post("/users", userController.createUser )

router.post("/login", userController.loginUser)

router.get("/users/:userId",authentMiddleware.VerifyAuth, userController.getUserData)

router.put("/users/:userId",authentMiddleware.VerifyAuth, userController.updateUser)

router.delete("/users/:userId",authentMiddleware.VerifyAuth, userController.deleteUser)

module.exports = router;