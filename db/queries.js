const agregarUsuario = 'INSERT INTO usuarios (nombre, balance) VALUES ($1, $2)';
const obtenerUsuarios = 'SELECT * FROM usuarios';
const actualizarUsuario = 'UPDATE usuarios SET nombre = $1, balance = $2 WHERE id = $3';
const eliminarUsuario = 'DELETE FROM usuarios WHERE id = $1';
const emisorQuery = 'SELECT balance FROM usuarios WHERE id = $1';
const actualizarEmisorQuery = 'UPDATE usuarios SET balance = balance - $1 WHERE id = $2';
const actualizarReceptorQuery = 'UPDATE usuarios SET balance = balance + $1 WHERE id = $2';
const transferenciaQuery = 'INSERT INTO transferencias (emisor, receptor, monto, fecha) VALUES ($1, $2, $3, NOW())';
const obtenerTransferencias = 'SELECT * FROM transferencias ORDER BY fecha DESC';

export default {
    agregarUsuario,
    obtenerUsuarios,
    actualizarUsuario,
    eliminarUsuario,
    emisorQuery,
    actualizarEmisorQuery,
    actualizarReceptorQuery,
    transferenciaQuery,
    obtenerTransferencias
};
