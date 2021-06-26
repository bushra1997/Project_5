const express = require("express");
const userRouter = express.Router();
const { CreateNewUser } = require("../controllers/user");
userRouter.post("/", CreateNewUser);
module.exports = userRouter;
