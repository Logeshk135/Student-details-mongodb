import express from "express";
import {
  getAll,
  createStudent,
  updateOne,
  deleteOne,
} from "../controllers/studentController.js";

const router = express.Router();

router.get("/", getAll);
router.post("/", createStudent);
router.patch("/:id", updateOne);
router.delete("/:id", deleteOne);

export default router;
