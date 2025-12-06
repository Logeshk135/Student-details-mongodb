import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import studentRoutes from "./routes/students.js";
import cors from "cors";
const app = express();
app.use(express.json());


app.use(cors({
  origin: process.env.APPLICATION_FRONTEND_URL || "*"
}));



// Routes
app.use("/students", studentRoutes);

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
dotenv.config();

mongoose.connect(process.env.MONGO_URI) // no options needed in Mongoose 7+
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
