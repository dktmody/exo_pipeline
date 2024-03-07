const express = require("express");
const app = express();
const port = 5999;

app.get("/", (req, res) => {
  res.send("Hello World!, vous êtes chez mody");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
