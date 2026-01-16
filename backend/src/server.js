import express from "express";
import cors from "cors";
import dotenv from 'dotenv';

import { connectDB } from "./config/db.js";
import noteRoutes from './routes/notesRoutes.js';
import rateLimiter from "./controllers/middleware/rateLimiter.js";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

//middleware
app.use(cors({
    origin:"http://localhost:5173",
}));

app.use(express.json()); //This middleware is used to parse JSON bodies of incoming requests
app.use(rateLimiter);


//custom middleware to log request details
app.use((req,res,next) => {
    console.log("Req method:", req.method, "Req URL:", req.url);
    next();
})

app.use("/api/notes", noteRoutes);

connectDB().then(() => {
    app.listen(5000, () => {
        console.log('Server is running on port', PORT);
    });
})




