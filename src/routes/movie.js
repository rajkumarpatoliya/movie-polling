/* jshint esversion: 6 */
import express from "express";
const movieRouter = express.Router();

movieRouter

  .get("/movie", (req, res) => {
    res.json();
  })
  .get("/movie/:id", (req, res) => {
    res.json();
  });
export default movieRouter;
