const express = require("express");
const app = express();
const indexRouter = require("./routes/indexRouter");
const newRouter = require("./routes/newRouter");
app.use("/new", newRouter);
app.use("/", indexRouter);

const PORT = 3000;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
});
