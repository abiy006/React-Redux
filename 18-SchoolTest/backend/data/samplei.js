const { v4: generateId } = require('uuid');

const { NotFoundError } = require('../util/errors');
const { readData, writeData } = require('./util_samplei');

// async function getAll() {
//   const storedData = await readData();
//   if (!storedData.sampleis) {
//     throw new NotFoundError('Could not find any events.');
//   }
//   return storedData.sampleis;
// }

async function getAll() {
  const storedData = await readData();
  if (!storedData) {
    throw new NotFoundError('Could not find any events.');
  }
  return storedData;
}

async function get(id) {
  const storedData = await readData();
  if (!storedData.sampleis || storedData.sampleis.length === 0) {
    throw new NotFoundError('Could not find any events.');
  }

  const samplei = storedData.sampleis.find((ev) => ev.id === id);
  if (!samplei) {
    throw new NotFoundError('Could not find event for id ' + id);
  }

  return samplei;
}

async function add(data) {
  const storedData = await readData();
  storedData.sampleis.unshift({ ...data, id: generateId() });
  await writeData(storedData);
}

async function replace(id, data) {
  const storedData = await readData();
  if (!storedData.sampleis || storedData.sampleis.length === 0) {
    throw new NotFoundError('Could not find any events.');
  }

  const index = storedData.sampleis.findIndex((ev) => ev.id === id);
  if (index < 0) {
    throw new NotFoundError('Could not find event for id ' + id);
  }

  storedData.sampleis[index] = { ...data, id };

  await writeData(storedData);
}

async function remove(id) {
  const storedData = await readData();
  const updatedData = storedData.sampleis.filter((ev) => ev.id !== id);
  await writeData({ ...storedData, sampleis: updatedData });
}

exports.getAll = getAll;
exports.get = get;
exports.add = add;
exports.replace = replace;
exports.remove = remove;
