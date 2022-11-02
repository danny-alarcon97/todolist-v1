const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  var today = new Date();
  var currentDay = today.getDay();
  var day = "";

  switch (currentDay) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;

    default:
      console.log("Error: current day is equal to:" + currentDay);
      break;
  }

  // if (currentDay === 0) {
  //   day = "Sunday";
  // } else if (currentDay === 1) {
  //   day = "Monday";
  // } else if (currentDay === 2) {
  //   day = "Tuesday";
  // } else if (currentDay === 3) {
  //   day = "Wednesday";
  // } else if (currentDay === 4) {
  //   day = "Thursday";
  // } else if (currentDay === 5) {
  //   day = "Friday";
  // } else {
  //   day = "Saturday";
  // }

  // creating a response by rendering a file called list,
  // which has to exist inside a views folder and has to have the extension .ejs.
  // And then into that list file we're passing in a single variable that has the name of kindOfDay,
  // and the value that we're giving it is the value of our variable, day.

  res.render("list", { kindOfDay: day });
});

app.listen(port, function () {
  console.log(`Server started on port ${port}`);
});
