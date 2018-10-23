import mongoose from "mongoose";

const user = new mongoose.Schema({
  id: String,
  first_name: String,
  last_name: String,
  age: Number,
  email: String,
  password: String
});

<<<<<<< HEAD
module.exports = mangoose.model("User", user);
=======
module.exports = mongoose.model("User", user);
>>>>>>> 73662e71593b1e1af1ac6e6ace2c8aaa10a7e881
