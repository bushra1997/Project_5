const express = require("express");
const {CreateNewFavorate} =require("../controllers/favorite");
const favoriteRouter = express.Router();

favoriteRouter.post("/",CreateNewFavorate);

module.exports = favoriteRouter;