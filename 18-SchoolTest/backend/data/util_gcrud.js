const fs = require('node:fs/promises');

async function readData() {
  const data = await fs.readFile('gcruds.json', 'utf8');
  return JSON.parse(data);
}

async function writeData(data) {
  await fs.writeFile('gcruds.json', JSON.stringify(data));
}

exports.readData = readData;
exports.writeData = writeData;
