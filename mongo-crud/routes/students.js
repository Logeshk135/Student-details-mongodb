import express from "express";                   
import * as ctrl from "../controllers/studentController.js";

const router = express.Router();

// CRUD routes
router.post("/", ctrl.createStudent);
router.post("/many", ctrl.insertMany);
router.get("/", ctrl.getAll);
router.get("/:id", ctrl.getById);
router.patch("/:id", ctrl.updateOne);
router.patch("/", ctrl.updateMany);
router.delete("/:id", ctrl.deleteOne);
router.delete("/", ctrl.deleteMany);


export default router; // <-- default export
