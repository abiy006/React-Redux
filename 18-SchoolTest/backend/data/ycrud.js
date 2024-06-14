const { v4: generateId } = require('uuid');

const { NotFoundError } = require('../util/errors');
const { readData, writeData } = require('./util_ycrud');

async function getAll() {
  const storedData = await readData();
  if (!storedData.ycruds) {
    throw new NotFoundError('Could not find any events.');
  }
  return storedData.ycruds;
}

async function get(id) {
  const storedData = await readData();
  if (!storedData.ycruds || storedData.ycruds.length === 0) {
    throw new NotFoundError('Could not find any events.');
  }

  const ycrud = storedData.ycruds.find((ev) => ev.id === id);
  if (!ycrud) {
    throw new NotFoundError('Could not find event for id ' + id);
  }

  return ycrud;
}

async function add(data) {
  const storedData = await readData();
  storedData.ycruds.unshift({ ...data, id: generateId() });
  await writeData(storedData);
}

async function replace(id, data) {
  const storedData = await readData();
  if (!storedData.ycruds || storedData.ycruds.length === 0) {
    throw new NotFoundError('Could not find any events.');
  }

  const index = storedData.ycruds.findIndex((ev) => ev.id === id);
  if (index < 0) {
    throw new NotFoundError('Could not find event for id ' + id);
  }

  storedData.ycruds[index] = { ...data, id };

  await writeData(storedData);
}

async function remove(id) {
  const storedData = await readData();
  const updatedData = storedData.ycruds.filter((ev) => ev.id !== id);
  await writeData({ ...storedData, ycruds: updatedData });
}

exports.getAll = getAll;
exports.get = get;
exports.add = add;
exports.replace = replace;
exports.remove = remove;
