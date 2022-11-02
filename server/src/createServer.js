// import express, { Express } from 'express';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import * as phoneRouter from './router/phones.js';
dotenv.config();
export function createServer() {
    // const app: Express = express();
    const app = express();
    app.use(cors());
    phoneRouter.showPhones(app);
    return app;
}
