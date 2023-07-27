import pool from '../db/db.js';
import queries from '../db/queries.js';




// Ruta para agregar un nuevo usuario
const agregarUsuario = async (req, res) => {
  try {
    const { nombre, balance } = req.body;
    if(!nombre || !balance) throw new Error("Error con valores");
    await pool.query(queries.agregarUsuario, [nombre, balance]);
    res.status(201).json({ message: 'Usuario agregado exitosamente' });
  } catch (error) {
    console.error('Error al agregar un nuevo usuario:', error);
    res.status(500).json({ error: 'Algo salió mal al agregar el usuario' });
  }
};

// Ruta para obtener todos los usuarios
const obtenerUsuarios = async (req, res) => {
  try {
    const { rows } = await pool.query(queries.obtenerUsuarios);
    res.json(rows);
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    res.status(500).json({ error: 'Algo salió mal al obtener los usuarios' });
  }
};

// Ruta para actualizar un usuario
const actualizarUsuario = async (req, res) => {
  try {
    const { id, nombre, balance } = req.body;
    await pool.query(queries.actualizarUsuario, [nombre, balance, id]);
    res.json({ message: 'Usuario actualizado exitosamente' });
  } catch (error) {
    console.error('Error al actualizar el usuario:', error);
    res.status(500).json({ error: 'Algo salió mal al actualizar el usuario' });
  }
};

// Ruta para eliminar un usuario
const eliminarUsuario = async (req, res) => {
  try {
    const { id } = req.body;
    await pool.query(queries.eliminarUsuario, [id]);
    res.json({ message: 'Usuario eliminado exitosamente' });
  } catch (error) {
    console.error('Error al eliminar el usuario:', error);
    res.status(500).json({ error: 'Algo salió mal al eliminar el usuario' });
  }
};


export default {
  agregarUsuario,
  obtenerUsuarios,
  actualizarUsuario,
  eliminarUsuario,

};  