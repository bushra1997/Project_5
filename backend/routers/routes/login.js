const express = require("express");
const { login } = require("../../../../MERAKI_Academy_Project_4/backend/routers/controllers/login");

const loginRouter = express.Router();

loginRouter.post("/", login);

module.exports = loginRouter;