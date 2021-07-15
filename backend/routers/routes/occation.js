const express = require("express");
const {
  CreateNewOccation,
  DeleteFromOccasions,
  DeleteFromFavorite,
  DeleteFromRating,
} = require("./../controllers/occation");
const occationRouter = express.Router();
occationRouter.post("/", CreateNewOccation);
occationRouter.delete("/delete/ocassions/:place_id", DeleteFromOccasions);
occationRouter.delete("/delete/favorite/:place_id", DeleteFromFavorite);
occationRouter.delete("/delete/rating/:place_id", DeleteFromRating);
module.exports = occationRouter;
