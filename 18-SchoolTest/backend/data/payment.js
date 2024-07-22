const { v4: generateId } = require('uuid');

const { NotFoundError } = require('../util/errors');
const { readData, writeData } = require('./util_payment');

// async function getAll() {
//   const storedData = await readData();
//   if (!storedData.payments) {
//     throw new NotFoundError('Could not find any events.');
//   }
//   return storedData.payments;
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
  if (!storedData.payments || storedData.payments.length === 0) {
    throw new NotFoundError('Could not find any events.');
  }

  const payment = storedData.payments.find((ev) => ev.id === id);
  if (!payment) {
    throw new NotFoundError('Could not find event for id ' + id);
  }

  return payment;
}

async function add(data) {
  const storedData = await readData();
  storedData.payments.unshift({ ...data, id: generateId() });
  await writeData(storedData);
}

async function replace(id, data) {
  const storedData = await readData();
  if (!storedData.payments || storedData.payments.length === 0) {
    throw new NotFoundError('Could not find any events.');
  }

  const index = storedData.payments.findIndex((ev) => ev.id === id);
  if (index < 0) {
    throw new NotFoundError('Could not find event for id ' + id);
  }

  storedData.payments[index] = { ...data, id };

  await writeData(storedData);
}

async function remove(id) {
  const storedData = await readData();
  const updatedData = storedData.payments.filter((ev) => ev.id !== id);
  await writeData({ ...storedData, payments: updatedData });
}

exports.getAll = getAll;
exports.get = get;
exports.add = add;
exports.replace = replace;
exports.remove = remove;
