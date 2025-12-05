// controllers/studentController.js
const Student = require('../models/Student');

// Create one
exports.createStudent = async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json(student);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Insert many
exports.insertMany = async (req, res) => {
  try {
    const docs = await Student.insertMany(req.body); // expects array
    res.status(201).json(docs);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all (with optional query filters)
exports.getAll = async (req, res) => {
  try {
    const students = await Student.find(req.query); // simple: pass query params directly
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get by id
exports.getById = async (req, res) => {
  try {
    const s = await Student.findById(req.params.id);
    if (!s) return res.status(404).json({ msg: 'Not found' });
    res.json(s);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update one
exports.updateOne = async (req, res) => {
  try {
    const updated = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update many (by filter)
exports.updateMany = async (req, res) => {
  try {
    // req.body should have { filter: {...}, update: {...} }
    const { filter, update } = req.body;
    const result = await Student.updateMany(filter, update);
    res.json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete one
exports.deleteOne = async (req, res) => {
  try {
    const del = await Student.findByIdAndDelete(req.params.id);
    res.json({ deleted: del });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete many (careful)
exports.deleteMany = async (req, res) => {
  try {
    const result = await Student.deleteMany(req.body.filter || {}); // pass filter in body
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
