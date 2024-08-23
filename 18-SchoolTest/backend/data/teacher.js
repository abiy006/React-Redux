const { v4: generateId } = require('uuid');

const { NotFoundError } = require('../util/errors');
const { readData, writeData } = require('./util_teacher');

// async function getAll() {
//   const storedData = await readData();
//   if (!storedData.teachers) {
//     throw new NotFoundError('Could not find any events.');
//   }
//   return storedData.teachers;
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
  if (!storedData.teachers || storedData.teachers.length === 0) {
    throw new NotFoundError('Could not find any events.');
  }

  const teacher = storedData.teachers.find((ev) => ev.id === id);
  if (!teacher) {
    throw new NotFoundError('Could not find event for id ' + id);
  }

  return teacher;
}

async function add(data) {
  const storedData = await readData();
  storedData.teachers.unshift({ ...data, id: generateId() });
  await writeData(storedData);
}

async function replace(id, data) {
  const storedData = await readData();
  if (!storedData.teachers || storedData.teachers.length === 0) {
    throw new NotFoundError('Could not find any events.');
  }

  const index = storedData.teachers.findIndex((ev) => ev.id === id);
  if (index < 0) {
    throw new NotFoundError('Could not find event for id ' + id);
  }

  storedData.teachers[index] = { ...data, id };

  await writeData(storedData);
}

async function remove(id) {
  const storedData = await readData();
  const updatedData = storedData.teachers.filter((ev) => ev.id !== id);
  await writeData({ ...storedData, teachers: updatedData });
}

exports.getAll = getAll;
exports.get = get;
exports.add = add;
exports.replace = replace;
exports.remove = remove;
