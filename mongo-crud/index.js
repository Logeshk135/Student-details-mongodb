import express from "express";
import studentRoutes from "./routes/students.js";
import connectDB from "./db.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());

connectDB();

app.get("/", (req,res)=>{
  res.send("API running ✔️");
});

app.use("/api/students", studentRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=> console.log(`Server running at ${PORT}`));
