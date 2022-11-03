import dotenv from 'dotenv';
import * as server from './createServer.js';
import express from 'express';

dotenv.config();

const app = server.createServer();
const port = process.env.PORT || 3000;

app.use(express.static('./src'));

app.get('/', (req, res) => {
  res.send('Hi');
});

app.listen(port, () => {
  console.log(`⚡️ Server is running at http://localhost:${port}`);
});
