const { request, response } = require("express");
const express = require("express");
const app = express();
const port = 9000;
const path = require("path");
const bodyParser = require("body-parser");

let urlencoded = bodyParser.urlencoded({ urlencoded: false });

app.use(bodyParser.json());
app.use(urlencoded);
app.use(express.static(__dirname + "/public"));

app.get("/", (request, response) => {
  response.sendFile(path.join(__dirname + "/src/index.html"));
});
app.post("/formDate", (require, response) => {
  console.log(request.body);
});
app.listen(port, () => console.log("server running"));
