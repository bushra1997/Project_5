const express = require("express");
const placeRouter = express.Router();
const { CreateNewPlace,getAllPlaces,updatePlaceById,deletePlaceById,getPlaceById } = require("./../controllers/place");
placeRouter.post("/", CreateNewPlace);
placeRouter.get("/place", getAllPlaces);
placeRouter.put("/places/:id",updatePlaceById);
placeRouter.delete("/places/:id",deletePlaceById);
placeRouter.get("/places/:id",getPlaceById);
module.exports = placeRouter;
