/* jshint esversion: 6 */
import express from "express";
import User from "../models/user";
const router = express.Router();

router.post("/new", (req, res) => {
  const user = new User({
    id: req.body.id,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    age: req.body.age,
    email: req.body.email,
    password: req.body.password
  });
  user.save((err, success) => {
    if (err) {
      res.json(err);
    }
    res.json(success);
  });
});

module.exports = router;
