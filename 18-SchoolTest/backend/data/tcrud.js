const { v4: generateId } = require('uuid');

const { NotFoundError } = require('../util/errors');
const { readData, writeData } = require('./util_tcrud');

// async function getAll() {
//   const storedData = await readData();
//   if (!storedData.tcruds) {
//     throw new NotFoundError('Could not find any events.');
//   }
//   return storedData.tcruds;
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
  if (!storedData.tcruds || storedData.tcruds.length === 0) {
    throw new NotFoundError('Could not find any events.');
  }

  const tcrud = storedData.tcruds.find((ev) => ev.id === id);
  if (!tcrud) {
    throw new NotFoundError('Could not find event for id ' + id);
  }

  return tcrud;
}

async function add(data) {
  const storedData = await readData();
  storedData.tcruds.unshift({ ...data, id: generateId() });
  await writeData(storedData);
}

async function replace(id, data) {
  const storedData = await readData();
  if (!storedData.tcruds || storedData.tcruds.length === 0) {
    throw new NotFoundError('Could not find any events.');
  }

  const index = storedData.tcruds.findIndex((ev) => ev.id === id);
  if (index < 0) {
    throw new NotFoundError('Could not find event for id ' + id);
  }

  storedData.tcruds[index] = { ...data, id };

  await writeData(storedData);
}

async function remove(id) {
  const storedData = await readData();
  const updatedData = storedData.tcruds.filter((ev) => ev.id !== id);
  await writeData({ ...storedData, tcruds: updatedData });
}

exports.getAll = getAll;
exports.get = get;
exports.add = add;
exports.replace = replace;
exports.remove = remove;
