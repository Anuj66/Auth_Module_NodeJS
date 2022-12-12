const express = require('express');
const UserController = require('../controller/user');
const authenticate = require('../middleware/authenticate');
const { validate } = require('../middleware/validate');
const { createUser, login, getUserById, updateUser } = require('../validations/user');

const router = new express.Router();

router.post('/createUser', validate(createUser), UserController.createUser);
router.post('/login', validate(login), UserController.login);
router.get(
  '/getUserById/:id',
  authenticate,
  validate(getUserById),
  UserController.getUserById,
);
router.get('/getAllUsers', authenticate, UserController.getAllUsers);
router.put(
  '/updateUser/:id',
  authenticate,
  validate(updateUser),
  UserController.updateUser,
);

module.exports = router;
