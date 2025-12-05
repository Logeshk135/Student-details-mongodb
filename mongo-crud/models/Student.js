const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  course: String,
  status: {
    type: String,
    default: "pending"
  }
});

module.exports = mongoose.model("Student", StudentSchema);
