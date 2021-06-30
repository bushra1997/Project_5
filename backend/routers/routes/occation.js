const express = require("express");
const { CreateNewOccation} = require("./../controllers/occation");

const occationRouter = express.Router();

occationRouter.post("/", CreateNewOccation);

module.exports = occationRouter ;
