const mongoose = require("mongoose");

const MessageSchema = mongoose.Schema([
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

module.exports = mongoose.model("Message", MessageSchema);
