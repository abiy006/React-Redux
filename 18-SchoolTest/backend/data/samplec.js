const { v4: generateId } = require('uuid');

const { NotFoundError } = require('../util/errors');
const { readData, writeData } = require('./util_samplec');

// async function getAll() {
//   const storedData = await readData();
//   if (!storedData.samplecs) {
//     throw new NotFoundError('Could not find any events.');
//   }
//   return storedData.samplecs;
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
  if (!storedData.samplecs || storedData.samplecs.length === 0) {
    throw new NotFoundError('Could not find any events.');
  }

  const samplec = storedData.samplecs.find((ev) => ev.id === id);
  if (!samplec) {
    throw new NotFoundError('Could not find event for id ' + id);
  }

  return samplec;
}

async function add(data) {
  const storedData = await readData();
  storedData.samplecs.unshift({ ...data, id: generateId() });
  await writeData(storedData);
}

async function replace(id, data) {
  const storedData = await readData();
  if (!storedData.samplecs || storedData.samplecs.length === 0) {
    throw new NotFoundError('Could not find any events.');
  }

  const index = storedData.samplecs.findIndex((ev) => ev.id === id);
  if (index < 0) {
    throw new NotFoundError('Could not find event for id ' + id);
  }

  storedData.samplecs[index] = { ...data, id };

  await writeData(storedData);
}

async function remove(id) {
  const storedData = await readData();
  const updatedData = storedData.samplecs.filter((ev) => ev.id !== id);
  await writeData({ ...storedData, samplecs: updatedData });
}

exports.getAll = getAll;
exports.get = get;
exports.add = add;
exports.replace = replace;
exports.remove = remove;
