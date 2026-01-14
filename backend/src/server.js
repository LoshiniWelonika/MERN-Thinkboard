import express from "express";
import noteRoutes from './routes/notesRoutes.js';
import { connectDB } from "./config/db.js";
import dotenv from 'dotenv';
import rateLimiter from "../middleware/rateLimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

//middleware
app.use(express.json()); //This middleware is used to parse JSON bodies of incoming requests
app.use(rateLimiter);

//custom middleware to log request details
app.use((req,res,next) => {
    console.log("Req method:", req.method, "Req URL:", req.url);
    next();
})

app.use("/api/notes", noteRoutes);

app.listen(5000, () => {
    console.log('Server is running on port', PORT);
});


