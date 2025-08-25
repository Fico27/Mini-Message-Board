//indexRouter.js

const { Router } = require("express");
const indexRouter = Router();
const messageController = require("../controllers/controller");

indexRouter.get("/message/:id", messageController.getMessage);

indexRouter.get("/", messageController.getIndex);

indexRouter.post("/", messageController.createNewMessagePost);

module.exports = indexRouter;
