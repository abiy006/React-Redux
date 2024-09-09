const { v4: generateId } = require('uuid');

const { NotFoundError } = require('../util/errors');
const { readData, writeData } = require('./util_sample');

// async function getAll() {
//   const storedData = await readData();
//   if (!storedData.samples) {
//     throw new NotFoundError('Could not find any events.');
//   }
//   return storedData.samples;
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
  if (!storedData.samples || storedData.samples.length === 0) {
    throw new NotFoundError('Could not find any events.');
  }

  const sample = storedData.samples.find((ev) => ev.id === id);
  if (!sample) {
    throw new NotFoundError('Could not find event for id ' + id);
  }

  return sample;
}

async function add(data) {
  const storedData = await readData();
  storedData.samples.unshift({ ...data, id: generateId() });
  await writeData(storedData);
}

async function replace(id, data) {
  const storedData = await readData();
  if (!storedData.samples || storedData.samples.length === 0) {
    throw new NotFoundError('Could not find any events.');
  }

  const index = storedData.samples.findIndex((ev) => ev.id === id);
  if (index < 0) {
    throw new NotFoundError('Could not find event for id ' + id);
  }

  storedData.samples[index] = { ...data, id };

  await writeData(storedData);
}

async function remove(id) {
  const storedData = await readData();
  const updatedData = storedData.samples.filter((ev) => ev.id !== id);
  await writeData({ ...storedData, samples: updatedData });
}

exports.getAll = getAll;
exports.get = get;
exports.add = add;
exports.replace = replace;
exports.remove = remove;
