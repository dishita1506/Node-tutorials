const express = require("express");
const storeRouter = express.Router();
const { homepageController, getBookingsController, getFavroutieListController, getHomeIndexController, getHomeByIdController, postFavroutieListController, postDeleteFavController } = require("../controller/storeController");

storeRouter.get("/", homepageController);
storeRouter.get("/bookings", getBookingsController);
storeRouter.get("/fav-list", getFavroutieListController);
storeRouter.get("/index", getHomeIndexController);
storeRouter.get("/homes/:homeId", getHomeByIdController)
storeRouter.post("/fav", postFavroutieListController)
storeRouter.post("/delete/fav", postDeleteFavController)
module.exports = { storeRouter };
