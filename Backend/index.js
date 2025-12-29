const express = require("express");
const app = express();
const connectDB = require("./db/db");
const UserRoute = require("./routes/user.route");

connectDB();

app.get("/", function (req, res) {
  res.send("Hello");
});

app.use("/user", UserRoute);

app.listen(3000, function () {
  console.log("Server is running");
});
