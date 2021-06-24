const express = require("express");
const {createNewSlider} = require("../controllers/slider")

const sliderRouter = express.Router();

sliderRouter.post("/",createNewSlider);

module.exports = sliderRouter;
