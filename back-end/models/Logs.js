const mongoose = require("mongoose");

const logSchema = new mongoose.Schema({
  access_time: String,
  access_date: String,
  employee_name: String,
  algo_status: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Log", logSchema);
