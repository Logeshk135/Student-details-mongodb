import express from "express";
import connectDB from "./db.js";
import studentRoutes from "./routes/students.js";

const app = express();
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use("/students", studentRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
