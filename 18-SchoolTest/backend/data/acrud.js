const { v4: generateId } = require('uuid');

const { NotFoundError } = require('../util/errors');
const { readData, writeData } = require('./util_acrud');

async function getAll() {
  const storedData = await readData();
  if (!storedData.acruds) {
    throw new NotFoundError('Could not find any events.');
  }
  return storedData.acruds;
}

async function get(id) {
  const storedData = await readData();
  if (!storedData.acruds || storedData.acruds.length === 0) {
    throw new NotFoundError('Could not find any events.');
  }

  const acrud = storedData.acruds.find((ev) => ev.id === id);
  if (!acrud) {
    throw new NotFoundError('Could not find event for id ' + id);
  }

  return acrud;
}

async function add(data) {
  const storedData = await readData();
  storedData.acruds.unshift({ ...data, id: generateId() });
  await writeData(storedData);
}

async function replace(id, data) {
  const storedData = await readData();
  if (!storedData.acruds || storedData.acruds.length === 0) {
    throw new NotFoundError('Could not find any events.');
  }

  const index = storedData.acruds.findIndex((ev) => ev.id === id);
  if (index < 0) {
    throw new NotFoundError('Could not find event for id ' + id);
  }

  storedData.acruds[index] = { ...data, id };

  await writeData(storedData);
}

async function remove(id) {
  const storedData = await readData();
  const updatedData = storedData.acruds.filter((ev) => ev.id !== id);
  await writeData({ ...storedData, acruds: updatedData });
}

exports.getAll = getAll;
exports.get = get;
exports.add = add;
exports.replace = replace;
exports.remove = remove;
