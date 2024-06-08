const fs = require('node:fs/promises');

async function readData() {
  const data = await fs.readFile('x_crud_routes.json', 'utf8');
  return JSON.parse(data);
}

async function writeData(data) {
  await fs.writeFile('x_crud_routes.json', JSON.stringify(data));
}

exports.readData = readData;
exports.writeData = writeData;