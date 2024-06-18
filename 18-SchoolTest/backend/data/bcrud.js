const { v4: generateId } = require('uuid');

const { NotFoundError } = require('../util/errors');
const { readData, writeData } = require('./util_bcrud');

async function getAll() {
  const storedData = await readData();
  if (!storedData.bcruds) {
    throw new NotFoundError('Could not find any events.');
  }
  return storedData.bcruds;
}

async function get(id) {
  const storedData = await readData();
  if (!storedData.bcruds || storedData.bcruds.length === 0) {
    throw new NotFoundError('Could not find any events.');
  }

  const bcrud = storedData.bcruds.find((ev) => ev.id === id);
  if (!bcrud) {
    throw new NotFoundError('Could not find event for id ' + id);
  }

  return bcrud;
}

async function add(data) {
  const storedData = await readData();
  storedData.bcruds.unshift({ ...data, id: generateId() });
  await writeData(storedData);
}

async function replace(id, data) {
  const storedData = await readData();
  if (!storedData.bcruds || storedData.bcruds.length === 0) {
    throw new NotFoundError('Could not find any events.');
  }

  const index = storedData.bcruds.findIndex((ev) => ev.id === id);
  if (index < 0) {
    throw new NotFoundError('Could not find event for id ' + id);
  }

  storedData.bcruds[index] = { ...data, id };

  await writeData(storedData);
}

async function remove(id) {
  const storedData = await readData();
  const updatedData = storedData.bcruds.filter((ev) => ev.id !== id);
  await writeData({ ...storedData, bcruds: updatedData });
}

exports.getAll = getAll;
exports.get = get;
exports.add = add;
exports.replace = replace;
exports.remove = remove;
