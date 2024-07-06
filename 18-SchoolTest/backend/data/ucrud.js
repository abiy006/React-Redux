const { v4: generateId } = require('uuid');

const { NotFoundError } = require('../util/errors');
const { readData, writeData } = require('./util_ucrud');

// async function getAll() {
//   const storedData = await readData();
//   if (!storedData.ucruds) {
//     throw new NotFoundError('Could not find any events.');
//   }
//   return storedData.ucruds;
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
  if (!storedData.ucruds || storedData.ucruds.length === 0) {
    throw new NotFoundError('Could not find any events.');
  }

  const ucrud = storedData.ucruds.find((ev) => ev.id === id);
  if (!ucrud) {
    throw new NotFoundError('Could not find event for id ' + id);
  }

  return ucrud;
}

async function add(data) {
  const storedData = await readData();
  storedData.ucruds.unshift({ ...data, id: generateId() });
  await writeData(storedData);
}

async function replace(id, data) {
  const storedData = await readData();
  if (!storedData.ucruds || storedData.ucruds.length === 0) {
    throw new NotFoundError('Could not find any events.');
  }

  const index = storedData.ucruds.findIndex((ev) => ev.id === id);
  if (index < 0) {
    throw new NotFoundError('Could not find event for id ' + id);
  }

  storedData.ucruds[index] = { ...data, id };

  await writeData(storedData);
}

async function remove(id) {
  const storedData = await readData();
  const updatedData = storedData.ucruds.filter((ev) => ev.id !== id);
  await writeData({ ...storedData, ucruds: updatedData });
}

exports.getAll = getAll;
exports.get = get;
exports.add = add;
exports.replace = replace;
exports.remove = remove;
