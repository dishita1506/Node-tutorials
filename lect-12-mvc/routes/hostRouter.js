const express = require("express");
const hostRouter = express.Router();
const { addHomeGetController, addHomePostController, hostHomeListController, getEditHomeController, postEditHomeController, postDeleteHomeController } = require("../controller/hostController")


hostRouter.get("/add-home", addHomeGetController)

hostRouter.post("/add-home", addHomePostController)
hostRouter.get("/host-home-list", hostHomeListController)
hostRouter.get("/edit-home/:homeId", getEditHomeController)
hostRouter.post("/edit-home", postEditHomeController)
hostRouter.post("/delete-home", postDeleteHomeController);

module.exports = { hostRouter };