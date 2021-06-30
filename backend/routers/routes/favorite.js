const express = require("express");
const favoriteRouter = express.Router();
const {
  CreateNewFavorate,
  DeleteFavorate,
  allFavorite,
} = require("../controllers/favorite");
favoriteRouter.get("/favorite",allFavorite);
favoriteRouter.post("/favorite", CreateNewFavorate);
favoriteRouter.delete("/favorite/:id", DeleteFavorate);
module.exports = favoriteRouter;
