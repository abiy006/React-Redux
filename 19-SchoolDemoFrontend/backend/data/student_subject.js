const { v4: generateId } = require('uuid');

const { NotFoundError } = require('../util/errors');
const { readData, writeData } = require('./util_student_subject');

// async function getAll() {
//   const storedData = await readData();
//   if (!storedData.student_subjects) {
//     throw new NotFoundError('Could not find any events.');
//   }
//   return storedData.student_subjects;
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
  if (!storedData.student_subjects || storedData.student_subjects.length === 0) {
    throw new NotFoundError('Could not find any events.');
  }

  const student_subject = storedData.student_subjects.find((ev) => ev.id === id);
  // const student_subject = storedData.student_subjects.find((ev) => ev.number === number);
  if (!student_subject) {
    throw new NotFoundError('Could not find event for id ' + id);
  }

  return student_subject;
}

async function add(data) {
  const storedData = await readData();
  storedData.student_subjects.unshift({ ...data, id: generateId() });
  await writeData(storedData);
}

async function replace(id, data) {
  const storedData = await readData();
  if (!storedData.student_subjects || storedData.student_subjects.length === 0) {
    throw new NotFoundError('Could not find any events.');
  }

  const index = storedData.student_subjects.findIndex((ev) => ev.id === id);
  if (index < 0) {
    throw new NotFoundError('Could not find event for id ' + id);
  }

  storedData.student_subjects[index] = { ...data, id };

  await writeData(storedData);
}

async function remove(id) {
  const storedData = await readData();
  const updatedData = storedData.student_subjects.filter((ev) => ev.id !== id);
  await writeData({ ...storedData, student_subjects: updatedData });
}

exports.getAll = getAll;
exports.get = get;
exports.add = add;
exports.replace = replace;
exports.remove = remove;
