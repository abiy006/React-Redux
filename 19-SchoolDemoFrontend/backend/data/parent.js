const { v4: generateId } = require('uuid');

const { NotFoundError } = require('../util/errors');
const { readData, writeData } = require('./util_parent');

// async function getAll() {
//   const storedData = await readData();
//   if (!storedData.parents) {
//     throw new NotFoundError('Could not find any events.');
//   }
//   return storedData.parents;
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
  if (!storedData.parents || storedData.parents.length === 0) {
    throw new NotFoundError('Could not find any events.');
  }

  const parent = storedData.parents.find((ev) => ev.id === id);
  if (!parent) {
    throw new NotFoundError('Could not find event for id ' + id);
  }

  return parent;
}

async function add(data) {
  const storedData = await readData();
  storedData.parents.unshift({ ...data, id: generateId() });
  await writeData(storedData);
}

async function replace(id, data) {
  const storedData = await readData();
  if (!storedData.parents || storedData.parents.length === 0) {
    throw new NotFoundError('Could not find any events.');
  }

  const index = storedData.parents.findIndex((ev) => ev.id === id);
  if (index < 0) {
    throw new NotFoundError('Could not find event for id ' + id);
  }

  storedData.parents[index] = { ...data, id };

  await writeData(storedData);
}

async function remove(id) {
  const storedData = await readData();
  const updatedData = storedData.parents.filter((ev) => ev.id !== id);
  await writeData({ ...storedData, parents: updatedData });
}

exports.getAll = getAll;
exports.get = get;
exports.add = add;
exports.replace = replace;
exports.remove = remove;
