// const { request, response } = require("express");
const express = require("express");
const app = express();
const port = 9000;
const path = require("path");
import bodyParser from "body-parser";
import { ButtonClick } from "./controller";
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));
app.get("/", (request, response) => {
  // const { year, month, day } = request.body;
  // const result = calculate(year, month, day);
  // const arr = func(result);
  // response.send({ result: arr });
});
app.post("/formData", (request, response) => {
  //ButtonClick function year, month, day 3 iig damjuulsan //
  ButtonClick(request.body.year, request.body.month, request.body.day);
  //response.render("formData", { qs: request.query });
});

app.listen(port, () => console.log("server running"));
