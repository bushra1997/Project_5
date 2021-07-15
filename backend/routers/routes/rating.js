const express = require("express");
const { createNewRating, averageRating } = require("../controllers/rating");
const ratingRouter = express.Router();
ratingRouter.post("/", createNewRating);
ratingRouter.get("/:place_id", averageRating);
module.exports = ratingRouter;
