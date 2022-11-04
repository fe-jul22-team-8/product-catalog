import express from 'express';
import cors from 'cors';

import { router as phonesRouter } from './router/phones.js';

export function createServer() {
  const app = express();

  app.use(express.static('./src'));

  app.use(cors());
  app.use('/phones', phonesRouter);

  app.get('/', (req, res) => {
    res.send('Hi');
  });

  return app;
}
