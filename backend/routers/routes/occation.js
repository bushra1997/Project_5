const express = require("express");
const { CreateNewOccation,DeleteFromOccasions} = require("./../controllers/occation");

const occationRouter = express.Router();

occationRouter.post("/", CreateNewOccation);
occationRouter.delete("/delete", DeleteFromOccasions);

module.exports = occationRouter ;
