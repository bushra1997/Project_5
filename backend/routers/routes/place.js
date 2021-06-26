const express = require("express");
const placeRouter = express.Router();
const { CreateNewPlace } = require("./../controllers/place");
placeRouter.post("/", CreateNewPlace);
module.exports = placeRouter;
