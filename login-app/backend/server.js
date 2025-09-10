// backend/server.js
const express = require('express');
const fs = require('fs');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
const PORT = 3001;
const USERS_FILE = 'users.json';
const SECRET = process.env.JWT_SECRET || 'clave_secreta';

app.use(cors());
app.use(bodyParser.json());

// Leer usuarios desde archivo
function getUsers() {
  if (!fs.existsSync(USERS_FILE)) return [];
  return JSON.parse(fs.readFileSync(USERS_FILE));
}

// Guardar usuario
function saveUser(user) {
  const users = getUsers();
  users.push(user);
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
}

// Registro
app.post('/register', (req, res) => {
  const { email, password } = req.body;
  const users = getUsers();

  if (users.find(u => u.email === email)) {
    return res.status(400).json({ message: 'Usuario ya registrado' });
  }

  saveUser({ email, password });
  res.json({ message: 'Registro exitoso' });
});

// Login
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const users = getUsers();
  const user = users.find(u => u.email === email && u.password === password);

  if (!user) return res.status(401).json({ message: 'Credenciales inválidas' });

  const token = jwt.sign({ email }, SECRET, { expiresIn: '1h' });
  res.json({ message: 'Login exitoso', token });
});

// Verificar token
app.get('/profile', (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: 'Token requerido' });

  try {
    const decoded = jwt.verify(token, SECRET);
    res.json({ message: 'Acceso permitido', user: decoded.email });
  } catch (err) {
    res.status(401).json({ message: 'Token inválido' });
  }
});

app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));
