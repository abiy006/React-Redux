const { v4: generateId } = require('uuid');

const { NotFoundError } = require('../util/errors');
const { readData, writeData } = require('./util_ecrud');

async function getAll() {
  const storedData = await readData();
  if (!storedData.ecruds) {
    throw new NotFoundError('Could not find any events.');
  }
  return storedData.ecruds;
}

async function get(id) {
  const storedData = await readData();
  if (!storedData.ecruds || storedData.ecruds.length === 0) {
    throw new NotFoundError('Could not find any events.');
  }

  const ecrud = storedData.ecruds.find((ev) => ev.id === id);
  if (!ecrud) {
    throw new NotFoundError('Could not find event for id ' + id);
  }

  return ecrud;
}

async function add(data) {
  const storedData = await readData();
  storedData.ecruds.unshift({ ...data, id: generateId() });
  await writeData(storedData);
}

async function replace(id, data) {
  const storedData = await readData();
  if (!storedData.ecruds || storedData.ecruds.length === 0) {
    throw new NotFoundError('Could not find any events.');
  }

  const index = storedData.ecruds.findIndex((ev) => ev.id === id);
  if (index < 0) {
    throw new NotFoundError('Could not find event for id ' + id);
  }

  storedData.ecruds[index] = { ...data, id };

  await writeData(storedData);
}

async function remove(id) {
  const storedData = await readData();
  const updatedData = storedData.ecruds.filter((ev) => ev.id !== id);
  await writeData({ ...storedData, ecruds: updatedData });
}

exports.getAll = getAll;
exports.get = get;
exports.add = add;
exports.replace = replace;
exports.remove = remove;
