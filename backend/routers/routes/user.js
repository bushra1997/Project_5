const express = require("express");
const userRouter = express.Router();
const bodyParser = require("body-parser");
const { check, validationResult } = require("express-validator");
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const { CreateNewUser } = require("../controllers/user");
userRouter.post(
  "/",
  urlencodedParser,
  [
    check("email", "Email is not valid").exists().isEmail().normalizeEmail(),
    check("password", "Please enter a strong Password")
      .exists()
      .isLength({ min: 8, max: 15 }),
  ],
  CreateNewUser
);
module.exports = userRouter;
