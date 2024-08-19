const { v4: generateId } = require('uuid');

const { NotFoundError } = require('../util/errors');
const { readData, writeData } = require('./util_samplej');

// async function getAll() {
//   const storedData = await readData();
//   if (!storedData.samplejs) {
//     throw new NotFoundError('Could not find any events.');
//   }
//   return storedData.samplejs;
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
  if (!storedData.samplejs || storedData.samplejs.length === 0) {
    throw new NotFoundError('Could not find any events.');
  }

  const samplej = storedData.samplejs.find((ev) => ev.id === id);
  if (!samplej) {
    throw new NotFoundError('Could not find event for id ' + id);
  }

  return samplej;
}

async function add(data) {
  const storedData = await readData();
  storedData.samplejs.unshift({ ...data, id: generateId() });
  await writeData(storedData);
}

async function replace(id, data) {
  const storedData = await readData();
  if (!storedData.samplejs || storedData.samplejs.length === 0) {
    throw new NotFoundError('Could not find any events.');
  }

  const index = storedData.samplejs.findIndex((ev) => ev.id === id);
  if (index < 0) {
    throw new NotFoundError('Could not find event for id ' + id);
  }

  storedData.samplejs[index] = { ...data, id };

  await writeData(storedData);
}

async function remove(id) {
  const storedData = await readData();
  const updatedData = storedData.samplejs.filter((ev) => ev.id !== id);
  await writeData({ ...storedData, samplejs: updatedData });
}

exports.getAll = getAll;
exports.get = get;
exports.add = add;
exports.replace = replace;
exports.remove = remove;
