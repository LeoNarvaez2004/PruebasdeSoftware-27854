// Simulación de una base de datos en memoria
let users = [];

/**
 * Devuelve todos los usuarios almacenados
 */
function getAllUsers(req, res) {
  res.json(users);
}

/**
 * Devuelve un usuario por su ID
 */
function getUserById(req, res) {
  const { id } = req.params;
  const user = users.find((u) => u.id === Number.parseInt(id, 10));

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  res.json(user);
}

/**
 * Crea un nuevo usuario si se proveen name y email válidos
 */
function createUser(req, res) {
  const { name, email } = req.body;

  // Validación básica de entrada
  if (!name || !email) {
    return res.status(400).json({ message: 'Name and email are required' });
  }

  // Creamos un objeto usuario
  const newUser = {
    id: Date.now(), // ID simulado
    name,
    email
  };

  // Lo añadimos al arreglo de usuarios
  users.push(newUser);

  // Respondemos con el usuario creado
  res.status(201).json(newUser);
}
module.exports = { getAllUsers, getUserById, createUser };