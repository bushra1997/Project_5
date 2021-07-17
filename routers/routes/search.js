const express = require("express");
const { createSearch } = require("../controllers/search");
const searchRouter = express.Router();
searchRouter.get("/:name", createSearch);
module.exports = searchRouter;
