const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Express has been setup!"));

const PORT = 3000;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
});
