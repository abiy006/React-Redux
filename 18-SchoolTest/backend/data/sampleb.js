const { v4: generateId } = require('uuid');

const { NotFoundError } = require('../util/errors');
const { readData, writeData } = require('./util_sampleb');

// async function getAll() {
//   const storedData = await readData();
//   if (!storedData.samplebs) {
//     throw new NotFoundError('Could not find any events.');
//   }
//   return storedData.samplebs;
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
  if (!storedData.samplebs || storedData.samplebs.length === 0) {
    throw new NotFoundError('Could not find any events.');
  }

  const sampleb = storedData.samplebs.find((ev) => ev.id === id);
  if (!sampleb) {
    throw new NotFoundError('Could not find event for id ' + id);
  }

  return sampleb;
}

async function add(data) {
  const storedData = await readData();
  storedData.samplebs.unshift({ ...data, id: generateId() });
  await writeData(storedData);
}

async function replace(id, data) {
  const storedData = await readData();
  if (!storedData.samplebs || storedData.samplebs.length === 0) {
    throw new NotFoundError('Could not find any events.');
  }

  const index = storedData.samplebs.findIndex((ev) => ev.id === id);
  if (index < 0) {
    throw new NotFoundError('Could not find event for id ' + id);
  }

  storedData.samplebs[index] = { ...data, id };

  await writeData(storedData);
}

async function remove(id) {
  const storedData = await readData();
  const updatedData = storedData.samplebs.filter((ev) => ev.id !== id);
  await writeData({ ...storedData, samplebs: updatedData });
}

exports.getAll = getAll;
exports.get = get;
exports.add = add;
exports.replace = replace;
exports.remove = remove;
