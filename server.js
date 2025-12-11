const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

var server = app.listen(port, () => {
  console.log(`Application exemple à l'écoute sur le port ${port}!`);
  
});

var handler = function() {
  server.close();
};