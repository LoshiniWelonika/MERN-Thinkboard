import express from "express";

const app = express();

app.get('/api/notes', (req, res) => {
    res.send('Here are your notes');
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});