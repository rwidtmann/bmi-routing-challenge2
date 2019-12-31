//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

let weight;
let height;

app.get("/", function(req, res) {
  return res.send("<h1>Hello BMI Server</h1>");
});

app.get("/bmi", function(req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", function(req, res) {
  console.log(req.body);
  weight = req.body.weight;
  height = req.body.height;
  let result = Number(weight) + Number(height);

  res.send("Your BMI Calculation is: " + result);
});

app.listen(process.env.PORT || 3000, function() {
  console.log("Server Started on Port 3000");
});
