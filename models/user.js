/* jshint esversion: 6 */
import mongoose from "mongoose";

const user = new mongoose.Schema({
  id: String,
  first_name: String,
  last_name: String,
  age: Number,
  email: String,
  password: String
});

module.exports = mangoose.model("User", user);
