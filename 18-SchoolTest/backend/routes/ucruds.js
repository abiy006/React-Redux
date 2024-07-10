const express = require('express');

const { getAll, get, add, replace, remove } = require('../data/ucrud');
const { checkAuth } = require('../util/auth');
const {
  isValidText,
  isValidDate,
  isValidImageUrl,
} = require('../util/validation');

const router = express.Router();

router.get('/', async (req, res, next) => {
  console.log(req.token);
  try {
    const ucruds = await getAll();
    res.json({ ucruds: ucruds });
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const ucrud = await get(req.params.id);
    res.json({ ucrud: ucrud });
  } catch (error) {
    next(error);
  }
});

router.use(checkAuth);

router.post('/', async (req, res, next) => {
  console.log(req.token);
  const data = req.body;

  let errors = {};

  if (!isValidText(data.title)) {
    errors.title = 'post - Invalid title.';
  }

  if (!isValidText(data.description)) {
    errors.description = 'post - Invalid description.';
  }

  if (!isValidDate(data.date)) {
    errors.date = 'post - Invalid date.';
  }

  if (!isValidImageUrl(data.image)) {
    errors.image = 'post - Invalid image.';
  }

  if (Object.keys(errors).length > 0) {
    return res.status(422).json({
      message: 'Adding the event failed due to validation errors.',
      errors,
    });
  }

  try {
    await add(data);
    res.status(201).json({ message: 'Event saved.', ucrud: data });
  } catch (error) {
    next(error);
  }
});

router.patch('/:id', async (req, res, next) => {
  const data = req.body;

  let errors = {};

  // if (!isValidText(data.title)) {
  //   errors.title = 'patch - Invalid title.';
  // }

  // if (!isValidText(data.description)) {
  //   errors.description = 'patch - Invalid description.';
  // }

  // if (!isValidDate(data.date)) {
  //   errors.date = 'patch - Invalid date.';
  // }

  // if (!isValidImageUrl(data.image)) {
  //   errors.image = 'patch - Invalid image.';
  // }

  if (Object.keys(errors).length > 0) {
    return res.status(422).json({
      message: 'Updating the event failed due to validation errors.',
      errors,
    });
  }

  try {
    await replace(req.params.id, data);
    res.json({ message: 'Event updated.', ucrud: data });
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    await remove(req.params.id);
    res.json({ message: 'Event deleted.' });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
