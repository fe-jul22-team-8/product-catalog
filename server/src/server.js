/* eslint-disable no-console */
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
    res.send('Express App with typescript');
});

app.listen(port, () => {
    console.log(`⚡️ Server is running at http://localhost:${port}`);
});
