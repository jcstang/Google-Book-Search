const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");

const Book = require("./models/Book");

// Send every request to the React app
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

mongoose.connect("mongodb://localhost/googlebooks", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

//Define API routes here
app.get("/mongoose", function (request, response) {
  Book.find({})
  .then(function (data) {
    response.json(data);
  })
});

// Define any API routes before this runs
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
