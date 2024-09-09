const { v4: generateId } = require('uuid');

const { NotFoundError } = require('../util/errors');
const { readData, writeData } = require('./util_wcrud');

// async function getAll() {
//   const storedData = await readData();
//   if (!storedData.wcruds) {
//     throw new NotFoundError('Could not find any events.');
//   }
//   return storedData.wcruds;
// }

async function getAll() {
  const storedData = await readData();
  if (!storedData) {
    throw new NotFoundError('Could not find any events.');
  }
  return storedData;
}

async function get(id) {
  const storedData = await readData();
  if (!storedData.wcruds || storedData.wcruds.length === 0) {
    throw new NotFoundError('Could not find any events.');
  }

  const wcrud = storedData.wcruds.find((ev) => ev.id === id);
  // const wcrud = storedData.wcruds.find((ev) => ev.number === number);
  if (!wcrud) {
    throw new NotFoundError('Could not find event for id ' + id);
  }

  return wcrud;
}

async function add(data) {
  const storedData = await readData();
  storedData.wcruds.unshift({ ...data, id: generateId() });
  await writeData(storedData);
}

async function replace(id, data) {
  const storedData = await readData();
  if (!storedData.wcruds || storedData.wcruds.length === 0) {
    throw new NotFoundError('Could not find any events.');
  }

  const index = storedData.wcruds.findIndex((ev) => ev.id === id);
  if (index < 0) {
    throw new NotFoundError('Could not find event for id ' + id);
  }

  // storedData.wcruds[index] = { ...data, id };
  storedData.students[index] = { ...data, id };

  await writeData(storedData);
}

async function remove(id) {
  const storedData = await readData();
  const updatedData = storedData.wcruds.filter((ev) => ev.id !== id);
  await writeData({ ...storedData, wcruds: updatedData });
}

exports.getAll = getAll;
exports.get = get;
exports.add = add;
exports.replace = replace;
exports.remove = remove;
