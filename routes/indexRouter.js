const { Router } = require("express");
const indexRouter = Router();

indexRouter.get("/", (req, res) =>
  res.send("This is the index with all current messages!")
);

module.exports = indexRouter;
