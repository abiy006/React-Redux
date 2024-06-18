const { v4: generateId } = require('uuid');

const { NotFoundError } = require('../util/errors');
const { readData, writeData } = require('./util_ccrud');

async function getAll() {
  const storedData = await readData();
  if (!storedData.ccruds) {
    throw new NotFoundError('Could not find any events.');
  }
  return storedData.ccruds;
}

async function get(id) {
  const storedData = await readData();
  if (!storedData.ccruds || storedData.ccruds.length === 0) {
    throw new NotFoundError('Could not find any events.');
  }

  const ccrud = storedData.ccruds.find((ev) => ev.id === id);
  if (!ccrud) {
    throw new NotFoundError('Could not find event for id ' + id);
  }

  return ccrud;
}

async function add(data) {
  const storedData = await readData();
  storedData.ccruds.unshift({ ...data, id: generateId() });
  await writeData(storedData);
}

async function replace(id, data) {
  const storedData = await readData();
  if (!storedData.ccruds || storedData.ccruds.length === 0) {
    throw new NotFoundError('Could not find any events.');
  }

  const index = storedData.ccruds.findIndex((ev) => ev.id === id);
  if (index < 0) {
    throw new NotFoundError('Could not find event for id ' + id);
  }

  storedData.ccruds[index] = { ...data, id };

  await writeData(storedData);
}

async function remove(id) {
  const storedData = await readData();
  const updatedData = storedData.ccruds.filter((ev) => ev.id !== id);
  await writeData({ ...storedData, ccruds: updatedData });
}

exports.getAll = getAll;
exports.get = get;
exports.add = add;
exports.replace = replace;
exports.remove = remove;
