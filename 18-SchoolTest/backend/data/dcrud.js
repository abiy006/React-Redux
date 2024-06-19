const { v4: generateId } = require('uuid');

const { NotFoundError } = require('../util/errors');
const { readData, writeData } = require('./util_dcrud');

async function getAll() {
  const storedData = await readData();
  if (!storedData.dcruds) {
    throw new NotFoundError('Could not find any events.');
  }
  return storedData.dcruds;
}

async function get(id) {
  const storedData = await readData();
  if (!storedData.dcruds || storedData.dcruds.length === 0) {
    throw new NotFoundError('Could not find any events.');
  }

  const dcrud = storedData.dcruds.find((ev) => ev.id === id);
  if (!dcrud) {
    throw new NotFoundError('Could not find event for id ' + id);
  }

  return dcrud;
}

async function add(data) {
  const storedData = await readData();
  storedData.dcruds.unshift({ ...data, id: generateId() });
  await writeData(storedData);
}

async function replace(id, data) {
  const storedData = await readData();
  if (!storedData.dcruds || storedData.dcruds.length === 0) {
    throw new NotFoundError('Could not find any events.');
  }

  const index = storedData.dcruds.findIndex((ev) => ev.id === id);
  if (index < 0) {
    throw new NotFoundError('Could not find event for id ' + id);
  }

  storedData.dcruds[index] = { ...data, id };

  await writeData(storedData);
}

async function remove(id) {
  const storedData = await readData();
  const updatedData = storedData.dcruds.filter((ev) => ev.id !== id);
  await writeData({ ...storedData, dcruds: updatedData });
}

exports.getAll = getAll;
exports.get = get;
exports.add = add;
exports.replace = replace;
exports.remove = remove;
