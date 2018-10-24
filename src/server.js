/* jshint esversion: 6 */
import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import movieRouter from "./routes/movie";
import userRouter from "./routes/user";

import config from "../config";

mongoose.Promise = global.Promise;

mongoose
  .connect(
    config.mongo,
    { useNewUrlParser: true }
  )
  .then(success => console.log("Connection to Database is successfull"))
  .catch(error => console.log("Connection to Database is failed"));

mongoose.Promise = global.Promise;

const app = express();

app.use(cors());

app.use("/movie", movieRouter);
app.use("/user", userRouter);

// port
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
