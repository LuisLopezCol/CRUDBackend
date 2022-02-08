const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema([
  {
    id: {
      type: Number,
      // required: true,
    },
    thumbnail: {
      type: String,
      // required: true,
    },
    title: {
      type: String,
      // required: true,
    },
    short_description: {
      type: String,
      // required: true,
    },
    game_url: {
      type: String,
      // required: true,
    },
    genre: {
      type: String,
      // required: true,
    },
    platform: {
      type: String,
      // required: true,
    },
    publisher: {
      type: String,
      // required: true,
    },
    developer: {
      type: String,
      // required: true,
    },
    release_date: {
      type: String,
      // required: true,
    },
    freetogame_profile_url: {
      type: String,
      required: false,
    },
    stock: {
      type: Number,
      // required: true,
    },
    price: {
      type: Number,
      // required: true,
    },
    createDate: {
      type: Date,
      default: Date.now(),
    },
  },
]);

module.exports = mongoose.model("Product", ProductSchema);
