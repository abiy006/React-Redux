const { v4: generateId } = require('uuid');

const { NotFoundError } = require('../util/errors');
const { readData, writeData } = require('./util_sampleh');

// async function getAll() {
//   const storedData = await readData();
//   if (!storedData.samplehs) {
//     throw new NotFoundError('Could not find any events.');
//   }
//   return storedData.samplehs;
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
  if (!storedData.samplehs || storedData.samplehs.length === 0) {
    throw new NotFoundError('Could not find any events.');
  }

  const sampleh = storedData.samplehs.find((ev) => ev.id === id);
  if (!sampleh) {
    throw new NotFoundError('Could not find event for id ' + id);
  }

  return sampleh;
}

async function add(data) {
  const storedData = await readData();
  storedData.samplehs.unshift({ ...data, id: generateId() });
  await writeData(storedData);
}

async function replace(id, data) {
  const storedData = await readData();
  if (!storedData.samplehs || storedData.samplehs.length === 0) {
    throw new NotFoundError('Could not find any events.');
  }

  const index = storedData.samplehs.findIndex((ev) => ev.id === id);
  if (index < 0) {
    throw new NotFoundError('Could not find event for id ' + id);
  }

  storedData.samplehs[index] = { ...data, id };

  await writeData(storedData);
}

async function remove(id) {
  const storedData = await readData();
  const updatedData = storedData.samplehs.filter((ev) => ev.id !== id);
  await writeData({ ...storedData, samplehs: updatedData });
}

exports.getAll = getAll;
exports.get = get;
exports.add = add;
exports.replace = replace;
exports.remove = remove;
