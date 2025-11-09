const express = require('express');
const { getAllUsers, getUserById, createUser, updateUser, deleteUser } = require('../controllers/user.controller');

const router = express.Router();

// Ruta GET para obtener todos los usuarios
router.get('/', getAllUsers);

// Ruta POST para crear un nuevo usuario
router.post('/', createUser);

// Ruta GET para obtener un usuario por ID
router.get('/:id', getUserById);

module.exports = router;
