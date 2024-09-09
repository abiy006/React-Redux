const { v4: generateId } = require('uuid');

const { NotFoundError } = require('../util/errors');
const { readData, writeData } = require('./util_student');

// async function getAll() {
//   const storedData = await readData();
//   if (!storedData.students) {
//     throw new NotFoundError('Could not find any events.');
//   }
//   return storedData.students;
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
  if (!storedData.students || storedData.students.length === 0) {
    throw new NotFoundError('Could not find any events.');
  }

  const student = storedData.students.find((ev) => ev.id === id);
  // const student = storedData.students.find((ev) => ev.number === number);
  if (!student) {
    throw new NotFoundError('Could not find event for id ' + id);
  }

  return student;
}

async function add(data) {
  const storedData = await readData();
  storedData.students.unshift({ ...data, id: generateId() });
  await writeData(storedData);
}

async function replace(id, data) {
  const storedData = await readData();
  if (!storedData.students || storedData.students.length === 0) {
    throw new NotFoundError('Could not find any events.');
  }

  const index = storedData.students.findIndex((ev) => ev.id === id);
  if (index < 0) {
    throw new NotFoundError('Could not find event for id ' + id);
  }

  storedData.students[index] = { ...data, id };

  await writeData(storedData);
}

async function remove(id) {
  const storedData = await readData();
  const updatedData = storedData.students.filter((ev) => ev.id !== id);
  await writeData({ ...storedData, students: updatedData });
}

exports.getAll = getAll;
exports.get = get;
exports.add = add;
exports.replace = replace;
exports.remove = remove;
