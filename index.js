const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();

dotenv.config();

//connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.log("Error connecting to the database: " + err);
  });

//Import routes
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
//middleware
app.use(express.json());

//Route middleware
app.use("/api/user", authRoute);
app.use("/api/posts", postRoute);

app.listen(3000, () => {
  console.log(`listening on port: 3000`);
});
