const { v4: generateId } = require('uuid');

const { NotFoundError } = require('../util/errors');
const { readData, writeData } = require('./util_homework');

// async function getAll() {
//   const storedData = await readData();
//   if (!storedData.homeworks) {
//     throw new NotFoundError('Could not find any events.');
//   }
//   return storedData.homeworks;
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
  if (!storedData.homeworks || storedData.homeworks.length === 0) {
    throw new NotFoundError('Could not find any events.');
  }

  const homework = storedData.homeworks.find((ev) => ev.id === id);
  if (!homework) {
    throw new NotFoundError('Could not find event for id ' + id);
  }

  return homework;
}

async function add(data) {
  const storedData = await readData();
  storedData.homeworks.unshift({ ...data, id: generateId() });
  await writeData(storedData);
}

async function replace(id, data) {
  const storedData = await readData();
  if (!storedData.homeworks || storedData.homeworks.length === 0) {
    throw new NotFoundError('Could not find any events.');
  }

  const index = storedData.homeworks.findIndex((ev) => ev.id === id);
  if (index < 0) {
    throw new NotFoundError('Could not find event for id ' + id);
  }

  storedData.homeworks[index] = { ...data, id };

  await writeData(storedData);
}

async function remove(id) {
  const storedData = await readData();
  const updatedData = storedData.homeworks.filter((ev) => ev.id !== id);
  await writeData({ ...storedData, homeworks: updatedData });
}

exports.getAll = getAll;
exports.get = get;
exports.add = add;
exports.replace = replace;
exports.remove = remove;
