const mongoose = require("mongoose");

const MaintenanceSchema = mongoose.Schema([
  {
    name: {
      type: String,
      // required: true,
    },
    lastname: {
      type: String,
      // required: true,
    },
    idnumber: {
      type: Number,
      // required: true,
    },
    address: {
      type: String,
      // required: true,
    },
    email: {
      type: String,
      // required: true,
    },
    createDate: {
      type: Date,
      default: Date.now(),
    },
  },
]);

module.exports = mongoose.model("Maintenance", MaintenanceSchema);
