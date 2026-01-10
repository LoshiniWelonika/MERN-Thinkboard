import express from "express";
import noteRoutes from './routes/notesRoutes.js';

const app = express();

app.use("/api/notes", noteRoutes);

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});