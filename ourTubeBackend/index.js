import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"
import userRoutes from "./routes/users.js"
import videoRoutes from "./routes/videos.js"
import commentRoutes from "./routes/comments.js"
import authRoutes from "./routes/auth.js"
import cookieParser from "cookie-parser";
import cors from "cors"

const app  = express()
dotenv.config()

const connect = async() =>{
    try {
        await mongoose.connect(process.env.MONGO)
        console.log("Connected to Database")  
    } catch{ ((err)=>{
        throw err;
    }) }
};

//For CORS

const corsOptions = {
    origin: "http://localhost:5173",
    credentials: true
  };
  
  app.use(cors(corsOptions));


app.use(cookieParser())
app.use(express.json())

app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/videos", videoRoutes)
app.use("/api/comments", commentRoutes)



// MIDDLEWARE FOR ERROR HANDLING
app.use((err, req, res, next)=>{
    const status = err.status || 500;
    const message = err.message || "Something went wrong!";
    return res.status(status).json({
        success: false,
        status,
        message,
    })
})

app.listen(3000,()=>{
    connect()
    console.log("Connected to Server");
})