const { v4: generateId } = require('uuid');

const { NotFoundError } = require('../util/errors');
const { readData, writeData } = require('./util_exam');

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
  if (!storedData.exams || storedData.exams.length === 0) {
    throw new NotFoundError('Could not find any events.');
  }

  const exam = storedData.exams.find((ev) => ev.id === id);
  if (!exam) {
    throw new NotFoundError('Could not find event for id ' + id);
  }

  return exam;
}

async function add(data) {
  const storedData = await readData();
  storedData.exams.unshift({ ...data, id: generateId() });
  await writeData(storedData);
}

async function replace(id, data) {
  const storedData = await readData();
  if (!storedData.exams || storedData.exams.length === 0) {
    throw new NotFoundError('Could not find any events.');
  }

  const index = storedData.exams.findIndex((ev) => ev.id === id);
  if (index < 0) {
    throw new NotFoundError('Could not find event for id ' + id);
  }

  storedData.exams[index] = { ...data, id };

  await writeData(storedData);
}

async function remove(id) {
  const storedData = await readData();
  const updatedData = storedData.exams.filter((ev) => ev.id !== id);
  await writeData({ ...storedData, exams: updatedData });
}

exports.getAll = getAll;
exports.get = get;
exports.add = add;
exports.replace = replace;
exports.remove = remove;
