const { Router } = require("express");
const indexRouter = Router();
const messageController = require("../controllers/controller");

const messages = [
  {
    text: "Hey, I'll see you at the party later!",
    user: "Ana",
    added: new Date(),
  },
  {
    text: "OMW to pick you up! Don't forget the beer!",
    user: "Jeff",
    added: new Date(),
  },
  {
    text: "I'm waiting outside. Lets roll!",
    user: "Jeff",
    added: new Date(),
  },
];

indexRouter.get("/message/:id", messageController.getMessage);

indexRouter.get("/", messageController.getIndex);

indexRouter.post("/", messageController.createNewMessagePost);

module.exports = indexRouter;
