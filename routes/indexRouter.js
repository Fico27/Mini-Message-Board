const { Router } = require("express");
const indexRouter = Router();

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

indexRouter.get("/message/:id", (req, res) => {
  const messageId = parseInt(req.params.id);
  res.render("message.ejs", {
    title: "Message Details",
    message: messages[messageId],
  });
});

indexRouter.get("/", (req, res) =>
  res.render("index.ejs", { title: "Mini Messageboard", messages: messages })
);

indexRouter.post("/", (req, res) => {
  const newMessage = {
    text: req.body.message,
    user: req.body.user,
    added: new Date(),
  };
  messages.push(newMessage);
  res.redirect("/");
});

module.exports = indexRouter;
