//newRouter.js

const { Router } = require("express");
const newRouter = Router();

newRouter.get("/", (req, res) => res.render("form.ejs"));

module.exports = newRouter;
