const { v4: generateId } = require('uuid');

const { NotFoundError } = require('../util/errors');
const { readData, writeData } = require('./util_student_detail');

// async function getAll() {
//   const storedData = await readData();
//   if (!storedData.student_details) {
//     throw new NotFoundError('Could not find any events.');
//   }
//   return storedData.student_details;
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
  if (!storedData.student_details || storedData.student_details.length === 0) {
    throw new NotFoundError('Could not find any events.');
  }

  const student_detail = storedData.student_details.find((ev) => ev.id === id);
  if (!student_detail) {
    throw new NotFoundError('Could not find event for id ' + id);
  }

  return student_detail;
}

async function add(data) {
  const storedData = await readData();
  storedData.student_details.unshift({ ...data, id: generateId() });
  await writeData(storedData);
}

async function replace(id, data) {
  const storedData = await readData();
  if (!storedData.student_details || storedData.student_details.length === 0) {
    throw new NotFoundError('Could not find any events.');
  }

  const index = storedData.student_details.findIndex((ev) => ev.id === id);
  if (index < 0) {
    throw new NotFoundError('Could not find event for id ' + id);
  }

  storedData.student_details[index] = { ...data, id };

  await writeData(storedData);
}

async function remove(id) {
  const storedData = await readData();
  const updatedData = storedData.student_details.filter((ev) => ev.id !== id);
  await writeData({ ...storedData, student_details: updatedData });
}

exports.getAll = getAll;
exports.get = get;
exports.add = add;
exports.replace = replace;
exports.remove = remove;
