import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";

import userRoute from "./routes/user.route.js";
import messageRoute from "./routes/message.route.js";
import { app, server } from "./SocketIO/server.js";

dotenv.config();

// middleware
const corsOptions = {
    origin: "https://chatwebapp-chi.vercel.app", // Your Vercel frontend URL
    credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 3001; // Use Vercel's port or fallback to 3001
const URI = process.env.MONGODB_URI;

mongoose.connect(URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch(error => console.error("MongoDB connection error:", error));

// routes
app.use("/api/user", userRoute);
app.use("/api/message", messageRoute);

// Start the server
server.listen(PORT, () => {
    console.log(`Server is Running on port ${PORT}`);
});
