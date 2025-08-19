const { Router } = require("express");
const newRouter = Router();
const messages = require("./indexRouter");

newRouter.get("/", (req, res) => res.render("form.ejs"));
newRouter.post("/", (req, res) => {
  const newMessage = {
    text: req.body.message,
    user: req.body.user,
    added: new Date(),
  };
  messages.push(newMessage);
  res.redirect("/");
});
module.exports = newRouter;

//FIX HOW MESSAGE DATA IS UPDATED
