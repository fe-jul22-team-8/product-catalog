import dotenv from 'dotenv';
import * as server from './createServer.js';

dotenv.config();

const app = server.createServer();
const port = process.env.PORT;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`⚡️ Server is running at http://localhost:${port}`);
});
