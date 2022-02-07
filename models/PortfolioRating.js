const mongoose = require("mongoose");

const RatingPortfolioSchema = mongoose.Schema([
  {
    name: {
      type: String,
      // required: true,
    },
    rating: {
      type: Number,
      // required: true,
    },
    votes: {
      type: Number,
      // required: true,
    },
    createDate: {
      type: Date,
      default: Date.now(),
    },
  },
]);

module.exports = mongoose.model("RatingPortfolio", RatingPortfolioSchema);
