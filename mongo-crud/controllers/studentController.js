import Student from "../models/Student.js";

// Get all students
export const getAll = async (req, res) => {
  try {
    const students = await Student.find(req.query);
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a student
export const createStudent = async (req, res) => {
  console.log("POST body:", req.body); // <--- see what frontend is sending
  try {
    const student = await Student.create(req.body);
    res.status(201).json(student);
  } catch (err) {
    console.error(err.message);
    res.status(400).json({ error: err.message });
  }
};


// Update one student
export const updateOne = async (req, res) => {
  try {
    const updated = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteOne = async (req, res) => {
  console.log("Delete ID:", req.params.id);
  try {
    const deleted = await Student.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Student not found" });
    res.json({ deleted });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};


export default { getAll, createStudent, updateOne, deleteOne };
