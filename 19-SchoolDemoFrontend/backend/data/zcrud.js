const { v4: generateId } = require('uuid');

const { NotFoundError } = require('../util/errors');
const { readData, writeData } = require('./util_zcrud');

async function getAll() {
  const storedData = await readData();
  if (!storedData.zcruds) {
    throw new NotFoundError('Could not find any events.');
  }
  return storedData.zcruds;
}

async function get(id) {
  const storedData = await readData();
  if (!storedData.zcruds || storedData.zcruds.length === 0) {
    throw new NotFoundError('Could not find any events.');
  }

  const zcrud = storedData.zcruds.find((ev) => ev.id === id);
  if (!zcrud) {
    throw new NotFoundError('Could not find event for id ' + id);
  }

  return zcrud;
}

async function add(data) {
  const storedData = await readData();
  storedData.zcruds.unshift({ ...data, id: generateId() });
  await writeData(storedData);
}

async function replace(id, data) {
  const storedData = await readData();
  if (!storedData.zcruds || storedData.zcruds.length === 0) {
    throw new NotFoundError('Could not find any events.');
  }

  const index = storedData.zcruds.findIndex((ev) => ev.id === id);
  if (index < 0) {
    throw new NotFoundError('Could not find event for id ' + id);
  }

  storedData.zcruds[index] = { ...data, id };

  await writeData(storedData);
}

async function remove(id) {
  const storedData = await readData();
  const updatedData = storedData.zcruds.filter((ev) => ev.id !== id);
  await writeData({ ...storedData, zcruds: updatedData });
}

exports.getAll = getAll;
exports.get = get;
exports.add = add;
exports.replace = replace;
exports.remove = remove;
