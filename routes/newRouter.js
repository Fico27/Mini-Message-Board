const { Router } = require("express");
const newRouter = Router();

newRouter.get("/", (req, res) =>
  res.send("New messages will be made here and added to index...")
);

module.exports = newRouter;
