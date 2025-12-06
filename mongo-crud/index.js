import express from "express";
import cors from "cors";
import studentRoutes from "./routes/students.js";
import { connectDB } from "./db.js"; // import connection function

const app = express();

app.use(express.json());

app.use(cors({
  origin: process.env.APPLICATION_FRONTEND_URL.trim() // must match exactly
}));

app.use("/api/students", studentRoutes);

// connect DB then start server
connectDB().then(() => {
  app.listen(process.env.PORT || 5000, () => {
    console.log(`Server running on port ${process.env.PORT || 5000}`);
  });
});
