const express = require('express');

const { getAll, get, add, replace, remove } = require('../data/exam1_name');
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
    const exam1_names = await getAll();
    res.json({ exam1_names: exam1_names });
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const exam1_name = await get(req.params.id);
    res.json({ exam1_name: exam1_name });
  } catch (error) {
    next(error);
  }
});

router.use(checkAuth);

router.post('/', async (req, res, next) => {
  console.log(req.token);
  const data = req.body;

  let errors = {};

  if (!isValidText(data.stud_name)) {
    errors.stud_name = 'Invalid stud_name.';
  }

  if (!isValidText(data.description)) {
    errors.description = 'Invalid description.';
  }

  if (!isValidDate(data.date)) {
    errors.date = 'Invalid date.';
  }

  if (!isValidImageUrl(data.image)) {
    errors.image = 'Invalid image.';
  }

  if (Object.keys(errors).length > 0) {
    return res.status(422).json({
      message: 'Adding the event failed due to validation errors.',
      errors,
    });
  }

  try {
    await add(data);
    res.status(201).json({ message: 'Event saved.', exam1_name: data });
  } catch (error) {
    next(error);
  }
});

router.patch('/:id', async (req, res, next) => {
  const data = req.body;

  let errors = {};

  // if (!isValidText(data.stud_name)) {
  //   errors.stud_name = 'Invalid stud_name.';
  // }

  // if (!isValidText(data.description)) {
  //   errors.description = 'Invalid description.';
  // }

  // if (!isValidDate(data.date)) {
  //   errors.date = 'Invalid date.';
  // }

  // if (!isValidImageUrl(data.image)) {
  //   errors.image = 'Invalid image.';
  // }

  if (Object.keys(errors).length > 0) {
    return res.status(422).json({
      message: 'Updating the event failed due to validation errors.',
      errors,
    });
  }

  try {
    await replace(req.params.id, data);
    res.json({ message: 'Event updated.', exam1_name: data });
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