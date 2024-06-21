const { v4: generateId } = require('uuid');

const { NotFoundError } = require('../util/errors');
const { readData, writeData } = require('./util_gcrud');

async function getAll() {
  const storedData = await readData();
  if (!storedData.gcruds) {
    throw new NotFoundError('Could not find any events.');
  }
  return storedData.gcruds;
}

async function get(id) {
  const storedData = await readData();
  if (!storedData.gcruds || storedData.gcruds.length === 0) {
    throw new NotFoundError('Could not find any events.');
  }

  const gcrud = storedData.gcruds.find((ev) => ev.id === id);
  if (!gcrud) {
    throw new NotFoundError('Could not find event for id ' + id);
  }

  return gcrud;
}

async function add(data) {
  const storedData = await readData();
  storedData.gcruds.unshift({ ...data, id: generateId() });
  await writeData(storedData);
}

async function replace(id, data) {
  const storedData = await readData();
  if (!storedData.gcruds || storedData.gcruds.length === 0) {
    throw new NotFoundError('Could not find any events.');
  }

  const index = storedData.gcruds.findIndex((ev) => ev.id === id);
  if (index < 0) {
    throw new NotFoundError('Could not find event for id ' + id);
  }

  storedData.gcruds[index] = { ...data, id };

  await writeData(storedData);
}

async function remove(id) {
  const storedData = await readData();
  const updatedData = storedData.gcruds.filter((ev) => ev.id !== id);
  await writeData({ ...storedData, gcruds: updatedData });
}

exports.getAll = getAll;
exports.get = get;
exports.add = add;
exports.replace = replace;
exports.remove = remove;
