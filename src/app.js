import express from 'express';

const app = express();

app.get("/", (req, res) => {
    res.send('taskflow is running...');
});

app.get("/about", (req, res) => {
    res.json({
        name: "TaskFlow API",
        version: "1.0.0",
        description: "task management REST API"
    });
});

app.get("/health", (req, res) => {
    res.status(200).json({ 
        status: "ok",
        message: "Server is healthy" 
    });
});

export default app;