const { v4: generateId } = require('uuid');

const { NotFoundError } = require('../util/errors');
const { readData, writeData } = require('./util_vcrud');

// async function getAll() {
//   const storedData = await readData();
//   if (!storedData.vcruds) {
//     throw new NotFoundError('Could not find any events.');
//   }
//   return storedData.vcruds;
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
  if (!storedData.vcruds || storedData.vcruds.length === 0) {
    throw new NotFoundError('Could not find any events.');
  }

  const vcrud = storedData.vcruds.find((ev) => ev.id === id);
  if (!vcrud) {
    throw new NotFoundError('Could not find event for id ' + id);
  }

  return vcrud;
}

async function add(data) {
  const storedData = await readData();
  storedData.vcruds.unshift({ ...data, id: generateId() });
  await writeData(storedData);
}

async function replace(id, data) {
  const storedData = await readData();
  if (!storedData.vcruds || storedData.vcruds.length === 0) {
    throw new NotFoundError('Could not find any events.');
  }

  const index = storedData.vcruds.findIndex((ev) => ev.id === id);
  if (index < 0) {
    throw new NotFoundError('Could not find event for id ' + id);
  }

  storedData.vcruds[index] = { ...data, id };

  await writeData(storedData);
}

async function remove(id) {
  const storedData = await readData();
  const updatedData = storedData.vcruds.filter((ev) => ev.id !== id);
  await writeData({ ...storedData, vcruds: updatedData });
}

exports.getAll = getAll;
exports.get = get;
exports.add = add;
exports.replace = replace;
exports.remove = remove;
