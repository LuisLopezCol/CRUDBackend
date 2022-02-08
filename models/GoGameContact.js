const mongoose = require("mongoose");

const ContactSchema = mongoose.Schema([
  {
    name: {
      type: String,
      // required: true,
    },
    email: {
      type: String,
      // required: true,
    },
    message: {
      type: String,
      // required: true,
    },
    idsale: {
      type: String,
      // required: true,
    },
    createDate: {
      type: Date,
      default: Date.now(),
    },
  },
]);

module.exports = mongoose.model("Contact", ContactSchema);
