import express from "express";
import noteRoutes from './routes/notesRoutes.js';
import { connectDB } from "./config/db.js";
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

//middleware
app.use(express.json());

app.use("/api/notes", noteRoutes);

app.listen(5000, () => {
    console.log('Server is running on port', PORT);
});


