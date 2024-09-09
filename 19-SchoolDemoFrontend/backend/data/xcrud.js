const { v4: generateId } = require('uuid');

const { NotFoundError } = require('../util/errors');
const { readData, writeData } = require('./util_xcrud');

async function getAll() {
  const storedData = await readData();
  if (!storedData.xcruds) {
    throw new NotFoundError('Could not find any events.');
  }
  return storedData.xcruds;
}

async function get(id) {
  const storedData = await readData();
  if (!storedData.xcruds || storedData.xcruds.length === 0) {
    throw new NotFoundError('Could not find any events.');
  }

  const xcrud = storedData.xcruds.find((ev) => ev.id === id);
  if (!xcrud) {
    throw new NotFoundError('Could not find event for id ' + id);
  }

  return xcrud;
}

async function add(data) {
  const storedData = await readData();
  storedData.xcruds.unshift({ ...data, id: generateId() });
  await writeData(storedData);
}

async function replace(id, data) {
  const storedData = await readData();
  if (!storedData.xcruds || storedData.xcruds.length === 0) {
    throw new NotFoundError('Could not find any events.');
  }

  const index = storedData.xcruds.findIndex((ev) => ev.id === id);
  if (index < 0) {
    throw new NotFoundError('Could not find event for id ' + id);
  }

  storedData.xcruds[index] = { ...data, id };

  await writeData(storedData);
}

async function remove(id) {
  const storedData = await readData();
  const updatedData = storedData.xcruds.filter((ev) => ev.id !== id);
  await writeData({ ...storedData, xcruds: updatedData });
}

exports.getAll = getAll;
exports.get = get;
exports.add = add;
exports.replace = replace;
exports.remove = remove;
