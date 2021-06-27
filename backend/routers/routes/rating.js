const express = require("express");
const { createNewRating } = require("../controllers/rating");

const ratingRouter = express.Router();

ratingRouter.post("/", createNewRating);

module.exports = ratingRouter;
