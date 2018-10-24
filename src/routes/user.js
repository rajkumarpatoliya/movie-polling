/* jshint esversion: 6 */
import express from "express";
const userRouter = express.Router();

userRouter
  .get("/user", (req, res) => {
    res.json();
  })
  .get("/user/:id", (req, res) => {
    res.json();
  });

export default userRouter;
