const express = require("express");
const movieSchema = require("../models/movie");

const router = express.Router();

// get all movies
router.get("/", (req, res) => {
  console.log("get all movies");
  movieSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// create a movie
// router.post("/", (req, res) => {
//   console.log("post movie");
//   const movie = movieSchema(req.body);
//   movie
//     .save()
//     .then((data) => res.json(data))
//     .catch((error) => res.json({ message: error }));
// });

module.exports = router;
