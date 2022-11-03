/* eslint-disable no-console */
import dotenv from 'dotenv';
import * as server from './createServer.js';
import express from 'express';

dotenv.config();

const app = server.createServer();
const port = process.env.PORT || 5050;

app.use(express.static('./src'));

app.listen(port, () => {
  console.log(`⚡️Server is running at http://localhost:${port}`);
});
