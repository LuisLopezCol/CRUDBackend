const mongoose = require("mongoose");

const SaleSchema = mongoose.Schema({
  totalitems: {
    type: String,
    required: false,
  },
  totalsale: {
    type: Number,
    required: false,
  },
  costumerinfo: {
    type: Object,
    required: false,
  },
  products: {
    type: Object,
    required: false,
  },
  createDate: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Sale", SaleSchema);
