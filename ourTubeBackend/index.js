import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/users.js";
import videoRoutes from "./routes/videos.js";
import commentRoutes from "./routes/comments.js";
import authRoutes from "./routes/auth.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to Database");
  } catch (err) {
    throw err;
  }
};

// CORS configuration
const corsOptions = {
  // origin: "http://localhost:5173",
  origin: "https://our-tube-frontend.vercel.app",
  credentials: true,
};
app.use(cors(corsOptions));

// Cookie parser middleware
app.use(cookieParser());

// Body parser middleware
app.use(express.json());

// nodejs lai  file access garna dey vaneko hae yo code lay (browser ma/ frontend ma access garna payo uploads/ vitra ko file)
app.use(express.static("./uploads/"))

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/videos", videoRoutes);
app.use("/api/comments", commentRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong!";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  connect();
  console.log(`Server is running on port ${PORT}`);
});
