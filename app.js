const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();
const port = 3000;

let items = ["Buy Food", "Cook Food", "Eat Food"];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  let today = new Date();

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  let day = today.toLocaleDateString("en-US", options);

  // creating a response by rendering a file called list,
  // which has to exist inside a views folder and has to have the extension .ejs.
  // And then into that list file we're passing in a single variable that has the name of kindOfDay,
  // and the value that we're giving it is the value of our variable, day.

  res.render("list", { kindOfDay: day, newListItems: items });
});

// post request for value of newItem form
app.post("/", function (req, res) {
  let item = req.body.newItem;

  items.push(item);

  res.redirect("/");
});

app.listen(port, function () {
  console.log(`Server started on port ${port}`);
});
