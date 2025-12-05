// controllers/studentController.js
import Student from "../models/Student.js";

// Create one
export const createStudent = async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json(student);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Insert many
export const insertMany = async (req, res) => {
  try {
    const docs = await Student.insertMany(req.body);
    res.status(201).json(docs);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all
export const getAll = async (req, res) => {
  try {
    const students = await Student.find(req.query);
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get by id
export const getById = async (req, res) => {
  try {
    const s = await Student.findById(req.params.id);
    if (!s) return res.status(404).json({ msg: 'Not found' });
    res.json(s);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update one
export const updateOne = async (req, res) => {
  try {
    const updated = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update many
export const updateMany = async (req, res) => {
  try {
    const { filter, update } = req.body;
    const result = await Student.updateMany(filter, update);
    res.json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete one
export const deleteOne = async (req, res) => {
  try {
    const del = await Student.findByIdAndDelete(req.params.id);
    res.json({ deleted: del });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete many
export const deleteMany = async (req, res) => {
  try {
    const result = await Student.deleteMany(req.body.filter || {});
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
