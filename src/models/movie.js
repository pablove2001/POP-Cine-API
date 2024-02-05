const mongoose = require("mongoose");

const movieSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  rentals: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Movies", movieSchema);
