import * as fs from 'fs';
import path from 'path';

const filePath = path.resolve('api', 'phones.json');

function read() {
  const data = fs.readFileSync(filePath, 'utf-8');

  return JSON.parse(data);
}

export function getAll() {
  return read();
}
