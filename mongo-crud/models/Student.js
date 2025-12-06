import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  course: String,
  status: {
    type: String,
    default: "pending",
  },
});

const Student = mongoose.model("studentdetails", StudentSchema);
export default Student;
