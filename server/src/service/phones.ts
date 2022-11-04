import * as fs from 'fs';
import path from 'path';

const filePath = path.resolve('src', 'api', 'phones.json');
const phones = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

export function getAll() {
  return phones;
}

export function getById(phoneId:string) {
  const foundPhone = phones.find(
    (phone: { id: string }) => phone.id === phoneId,
  );

  return foundPhone || null;
}
