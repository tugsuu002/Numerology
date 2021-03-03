const { request, response } = require("express");
const express = require("express");
const app = express();
const port = 9000;
const path = require("path");
const bodyParser = require("body-parser");

//let urlencoded = bodyParser.urlencoded({ extended: false });
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//app.use(urlencoded);
app.use(express.static(__dirname + "/public"));
app.get("/", (request, response) => {
  response.sendFile(path.join(__dirname + "/index.html"));
});

app.post("/formData", (request, response) => {
  //console.log(request.body);
  console.log(request.body);
  //response.render("formData", { qs: request.query });
});
app.listen(port, () => console.log("server running"));
