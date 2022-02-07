const mongoose = require("mongoose");

const MessageCS50Schema = mongoose.Schema([
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

module.exports = mongoose.model("MessageCS50", MessageCS50Schema);
