const fs = require('node:fs/promises');

async function readData() {
  const data = await fs.readFile('exams_names.json', 'utf8');
  return JSON.parse(data);
}

async function writeData(data) {
  await fs.writeFile('exams_names.json', JSON.stringify(data));
}

exports.readData = readData;
exports.writeData = writeData;
