const express = require("express");
const userRouter = express.Router();
const bodyParser = require("body-parser");
const { check, validationResult } = require("express-validator");
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const { CreateNewUser,AddUserImage,GetUserImage } = require("../controllers/user");
userRouter.post(
  "/",
  urlencodedParser,
  [
    check("email", "wrongEmail").exists().isEmail().normalizeEmail(),
    check("password", "weakPassword")
      .exists()
      .isLength({ min: 8, max: 15 }),
  ],
  CreateNewUser
);
userRouter.post("/image",AddUserImage);
userRouter.post("/pics",GetUserImage);
module.exports = userRouter;
