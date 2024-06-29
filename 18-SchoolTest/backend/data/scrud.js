const { v4: generateId } = require('uuid');

const { NotFoundError } = require('../util/errors');
const { readData, writeData } = require('./util_scrud');

// async function getAll() {
//   const storedData = await readData();
//   if (!storedData.scruds) {
//     throw new NotFoundError('Could not find any events.');
//   }
//   return storedData.scruds;
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
  if (!storedData.scruds || storedData.scruds.length === 0) {
    throw new NotFoundError('Could not find any events.');
  }

  const scrud = storedData.scruds.find((ev) => ev.id === id);
  if (!scrud) {
    throw new NotFoundError('Could not find event for id ' + id);
  }

  return scrud;
}

async function add(data) {
  const storedData = await readData();
  storedData.scruds.unshift({ ...data, id: generateId() });
  await writeData(storedData);
}

async function replace(id, data) {
  const storedData = await readData();
  if (!storedData.scruds || storedData.scruds.length === 0) {
    throw new NotFoundError('Could not find any events.');
  }

  const index = storedData.scruds.findIndex((ev) => ev.id === id);
  if (index < 0) {
    throw new NotFoundError('Could not find event for id ' + id);
  }

  storedData.scruds[index] = { ...data, id };

  await writeData(storedData);
}

async function remove(id) {
  const storedData = await readData();
  const updatedData = storedData.scruds.filter((ev) => ev.id !== id);
  await writeData({ ...storedData, scruds: updatedData });
}

exports.getAll = getAll;
exports.get = get;
exports.add = add;
exports.replace = replace;
exports.remove = remove;
