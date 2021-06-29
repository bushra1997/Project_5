const express = require("express");
const placeRouter = express.Router();
const { CreateNewPlace,getAllPlaces,updatePlaceById,deletePlaceById,getPlaceById } = require("./../controllers/place");
placeRouter.post("/places", CreateNewPlace);
placeRouter.get("/places", getAllPlaces);
placeRouter.put("/places/:id",updatePlaceById);
placeRouter.delete("/places/:id",deletePlaceById);
placeRouter.get("/places/:id",getPlaceById);
module.exports = placeRouter;
