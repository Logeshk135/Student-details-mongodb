// routes/students.js
const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/studentController');

// CRUD
router.post('/', ctrl.createStudent);           // create one
router.post('/many', ctrl.insertMany);          // insert many
router.get('/', ctrl.getAll);                   // get all (supports simple query params)
router.get('/:id', ctrl.getById);               // get by id
router.patch('/:id', ctrl.updateOne);           // update one
router.patch('/', ctrl.updateMany);             // update many (body: {filter, update})
router.delete('/:id', ctrl.deleteOne);          // delete one
router.delete('/', ctrl.deleteMany);            // delete many (body: {filter})

router.post("/", async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.json(student);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


module.exports = router;
