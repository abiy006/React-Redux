const { v4: generateId } = require('uuid');

const { NotFoundError } = require('../util/errors');
const { readData, writeData } = require('./util_sampleg');

// async function getAll() {
//   const storedData = await readData();
//   if (!storedData.samplegs) {
//     throw new NotFoundError('Could not find any events.');
//   }
//   return storedData.samplegs;
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
  if (!storedData.samplegs || storedData.samplegs.length === 0) {
    throw new NotFoundError('Could not find any events.');
  }

  const sampleg = storedData.samplegs.find((ev) => ev.id === id);
  if (!sampleg) {
    throw new NotFoundError('Could not find event for id ' + id);
  }

  return sampleg;
}

async function add(data) {
  const storedData = await readData();
  storedData.samplegs.unshift({ ...data, id: generateId() });
  await writeData(storedData);
}

async function replace(id, data) {
  const storedData = await readData();
  if (!storedData.samplegs || storedData.samplegs.length === 0) {
    throw new NotFoundError('Could not find any events.');
  }

  const index = storedData.samplegs.findIndex((ev) => ev.id === id);
  if (index < 0) {
    throw new NotFoundError('Could not find event for id ' + id);
  }

  storedData.samplegs[index] = { ...data, id };

  await writeData(storedData);
}

async function remove(id) {
  const storedData = await readData();
  const updatedData = storedData.samplegs.filter((ev) => ev.id !== id);
  await writeData({ ...storedData, samplegs: updatedData });
}

exports.getAll = getAll;
exports.get = get;
exports.add = add;
exports.replace = replace;
exports.remove = remove;
