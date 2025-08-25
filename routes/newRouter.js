//newRouter.js

const { Router } = require("express");
const newRouter = Router();
const messages = require("./indexRouter");

newRouter.get("/", (req, res) => res.render("form.ejs"));

module.exports = newRouter;
