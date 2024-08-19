const { v4: generateId } = require('uuid');

const { NotFoundError } = require('../util/errors');
const { readData, writeData } = require('./util_samplef');

// async function getAll() {
//   const storedData = await readData();
//   if (!storedData.samplefs) {
//     throw new NotFoundError('Could not find any events.');
//   }
//   return storedData.samplefs;
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
  if (!storedData.samplefs || storedData.samplefs.length === 0) {
    throw new NotFoundError('Could not find any events.');
  }

  const samplef = storedData.samplefs.find((ev) => ev.id === id);
  if (!samplef) {
    throw new NotFoundError('Could not find event for id ' + id);
  }

  return samplef;
}

async function add(data) {
  const storedData = await readData();
  storedData.samplefs.unshift({ ...data, id: generateId() });
  await writeData(storedData);
}

async function replace(id, data) {
  const storedData = await readData();
  if (!storedData.samplefs || storedData.samplefs.length === 0) {
    throw new NotFoundError('Could not find any events.');
  }

  const index = storedData.samplefs.findIndex((ev) => ev.id === id);
  if (index < 0) {
    throw new NotFoundError('Could not find event for id ' + id);
  }

  storedData.samplefs[index] = { ...data, id };

  await writeData(storedData);
}

async function remove(id) {
  const storedData = await readData();
  const updatedData = storedData.samplefs.filter((ev) => ev.id !== id);
  await writeData({ ...storedData, samplefs: updatedData });
}

exports.getAll = getAll;
exports.get = get;
exports.add = add;
exports.replace = replace;
exports.remove = remove;
