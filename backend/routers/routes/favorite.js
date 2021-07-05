const express = require("express");
const favoriteRouter = express.Router();
const {
  CreateNewFavorate,
  DeleteFavorate,
  allFavorite,
  checkFavorite,
} = require("../controllers/favorite");
favoriteRouter.post("/check", checkFavorite);
favoriteRouter.get("/favorite/:id", allFavorite);
favoriteRouter.post("/favorite", CreateNewFavorate);
favoriteRouter.delete("/favorite/:id", DeleteFavorate);
module.exports = favoriteRouter;
