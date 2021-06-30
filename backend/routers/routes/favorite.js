const express = require("express");
const favoriteRouter = express.Router();
const {
  CreateNewFavorate,
  DeleteFavorate,
} = require("../controllers/favorite");
favoriteRouter.post("/favorite", CreateNewFavorate);
favoriteRouter.delete("/favorite/:id", DeleteFavorate);
module.exports = favoriteRouter;
