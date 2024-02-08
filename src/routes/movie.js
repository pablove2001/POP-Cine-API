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

module.exports = router;
