const { v4: generateId } = require('uuid');

const { NotFoundError } = require('../util/errors');
const { readData, writeData } = require('./util_exam1_name');

// async function getAll() {
//   const storedData = await readData();
//   if (!storedData.exams) {
//     throw new NotFoundError('Could not find any events.');
//   }
//   return storedData.exams;
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
  if (!storedData.exam1_names || storedData.exam1_names.length === 0) {
    throw new NotFoundError('Could not find any events.');
  }

  const exam1_name = storedData.exam1_names.find((ev) => ev.id === id);
  if (!exam1_name) {
    throw new NotFoundError('Could not find event for id ' + id);
  }

  return exam1_name;
}

async function add(data) {
  const storedData = await readData();
  storedData.exam1_names.unshift({ ...data, id: generateId() });
  await writeData(storedData);
}

async function replace(id, data) {
  const storedData = await readData();
  if (!storedData.exam1_names || storedData.exam1_names.length === 0) {
    throw new NotFoundError('Could not find any events.');
  }

  const index = storedData.exam1_names.findIndex((ev) => ev.id === id);
  if (index < 0) {
    throw new NotFoundError('Could not find event for id ' + id);
  }

  storedData.exam1_names[index] = { ...data, id };

  await writeData(storedData);
}

async function remove(id) {
  const storedData = await readData();
  const updatedData = storedData.exam1_names.filter((ev) => ev.id !== id);
  await writeData({ ...storedData, exam1_names: updatedData });
}

exports.getAll = getAll;
exports.get = get;
exports.add = add;
exports.replace = replace;
exports.remove = remove;
