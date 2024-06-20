const { v4: generateId } = require('uuid');

const { NotFoundError } = require('../util/errors');
const { readData, writeData } = require('./util_fcrud');

async function getAll() {
  const storedData = await readData();
  if (!storedData.fcruds) {
    throw new NotFoundError('Could not find any events.');
  }
  return storedData.fcruds;
}

async function get(id) {
  const storedData = await readData();
  if (!storedData.fcruds || storedData.fcruds.length === 0) {
    throw new NotFoundError('Could not find any events.');
  }

  const fcrud = storedData.fcruds.find((ev) => ev.id === id);
  if (!fcrud) {
    throw new NotFoundError('Could not find event for id ' + id);
  }

  return fcrud;
}

async function add(data) {
  const storedData = await readData();
  storedData.fcruds.unshift({ ...data, id: generateId() });
  await writeData(storedData);
}

async function replace(id, data) {
  const storedData = await readData();
  if (!storedData.fcruds || storedData.fcruds.length === 0) {
    throw new NotFoundError('Could not find any events.');
  }

  const index = storedData.fcruds.findIndex((ev) => ev.id === id);
  if (index < 0) {
    throw new NotFoundError('Could not find event for id ' + id);
  }

  storedData.fcruds[index] = { ...data, id };

  await writeData(storedData);
}

async function remove(id) {
  const storedData = await readData();
  const updatedData = storedData.fcruds.filter((ev) => ev.id !== id);
  await writeData({ ...storedData, fcruds: updatedData });
}

exports.getAll = getAll;
exports.get = get;
exports.add = add;
exports.replace = replace;
exports.remove = remove;
