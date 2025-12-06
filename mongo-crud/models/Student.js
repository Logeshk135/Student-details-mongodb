import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  course: String,
  status: { type: String, default: "pending" }
});

export default mongoose.model("Student", studentSchema, "studentdetails");
