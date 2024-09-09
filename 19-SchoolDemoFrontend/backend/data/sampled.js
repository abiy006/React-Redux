const { v4: generateId } = require('uuid');

const { NotFoundError } = require('../util/errors');
const { readData, writeData } = require('./util_sampled');

// async function getAll() {
//   const storedData = await readData();
//   if (!storedData.sampleds) {
//     throw new NotFoundError('Could not find any events.');
//   }
//   return storedData.sampleds;
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
  if (!storedData.sampleds || storedData.sampleds.length === 0) {
    throw new NotFoundError('Could not find any events.');
  }

  const sampled = storedData.sampleds.find((ev) => ev.id === id);
  if (!sampled) {
    throw new NotFoundError('Could not find event for id ' + id);
  }

  return sampled;
}

async function add(data) {
  const storedData = await readData();
  storedData.sampleds.unshift({ ...data, id: generateId() });
  await writeData(storedData);
}

async function replace(id, data) {
  const storedData = await readData();
  if (!storedData.sampleds || storedData.sampleds.length === 0) {
    throw new NotFoundError('Could not find any events.');
  }

  const index = storedData.sampleds.findIndex((ev) => ev.id === id);
  if (index < 0) {
    throw new NotFoundError('Could not find event for id ' + id);
  }

  storedData.sampleds[index] = { ...data, id };

  await writeData(storedData);
}

async function remove(id) {
  const storedData = await readData();
  const updatedData = storedData.sampleds.filter((ev) => ev.id !== id);
  await writeData({ ...storedData, sampleds: updatedData });
}

exports.getAll = getAll;
exports.get = get;
exports.add = add;
exports.replace = replace;
exports.remove = remove;
