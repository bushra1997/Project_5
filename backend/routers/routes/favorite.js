const express = require("express");
const favoriteRouter = express.Router();
const {
  CreateNewFavorate,
  DeleteFavorate,
} = require("../controllers/favorite");
favoriteRouter.post("/", CreateNewFavorate);
favoriteRouter.delete("/", DeleteFavorate);
module.exports = favoriteRouter;
