import express from 'express';

const app = express();

app.get("/", (req, res) => {
    res.send('taskflow is running...');
});

export default app;