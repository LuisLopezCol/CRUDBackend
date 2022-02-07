const mongoose = require("mongoose");

const MessagePortfolioSchema = mongoose.Schema([
  {
    name: {
      type: String,
      // required: true,
    },
    message: {
      type: String,
      // required: true,
    },
    createDate: {
      type: Date,
      default: Date.now(),
    },
  },
]);

module.exports = mongoose.model("MessagePortfolio", MessagePortfolioSchema);
