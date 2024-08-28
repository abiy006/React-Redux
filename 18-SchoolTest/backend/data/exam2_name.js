const { v4: generateId } = require('uuid');

const { NotFoundError } = require('../util/errors');
const { readData, writeData } = require('./util_exam2_name');

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
  if (!storedData.exam2_names || storedData.exam2_names.length === 0) {
    throw new NotFoundError('Could not find any events.');
  }

  const exam2_name = storedData.exam2_names.find((ev) => ev.id === id);
  if (!exam2_name) {
    throw new NotFoundError('Could not find event for id ' + id);
  }

  return exam2_name;
}

async function add(data) {
  const storedData = await readData();
  storedData.exam2_names.unshift({ ...data, id: generateId() });
  await writeData(storedData);
}

async function replace(id, data) {
  const storedData = await readData();
  if (!storedData.exam2_names || storedData.exam2_names.length === 0) {
    throw new NotFoundError('Could not find any events.');
  }

  const index = storedData.exam2_names.findIndex((ev) => ev.id === id);
  if (index < 0) {
    throw new NotFoundError('Could not find event for id ' + id);
  }

  storedData.exam2_names[index] = { ...data, id };

  await writeData(storedData);
}

async function remove(id) {
  const storedData = await readData();
  const updatedData = storedData.exam2_names.filter((ev) => ev.id !== id);
  await writeData({ ...storedData, exam2_names: updatedData });
}

exports.getAll = getAll;
exports.get = get;
exports.add = add;
exports.replace = replace;
exports.remove = remove;
