import express from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";

import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";
import chatRoutes from "./routes/chat.route.js";
import { connectDB } from "./lib/db.js";

const app = express();
const PORT = process.env.PORT || 5001;

const __dirname = path.resolve();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.NODE_ENV === "production" 
      ? [process.env.FRONTEND_URL, "https://streamify-frontend.onrender.com"]
      : ["http://localhost:5173", "http://localhost:5001"],
    credentials: true, // Allow frontend to send cookies
  })
);

// Health check endpoint
app.get("/", (req, res) => {
  res.status(200).json({ 
    message: "Streamify Backend API is running!",
    status: "healthy",
    timestamp: new Date().toISOString()
  });
});

app.get("/api/health", (req, res) => {
  res.status(200).json({ 
    status: "healthy",
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/chat", chatRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
