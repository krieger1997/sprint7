// const { Router } = require('express');
import { Router } from 'express';
import inicio from '../controllers/comun.js';
import  usuario  from '../controllers/usuario.js'
import transferencia from '../controllers/transferencia.js';


const router = Router();

router.get('/', inicio.inicio);
router.post('/usuario', usuario.agregarUsuario);
router.get('/usuarios', usuario.obtenerUsuarios);
router.put('/usuario/:id', usuario.actualizarUsuario);
router.delete('/usuario/:id', usuario.eliminarUsuario);
router.post('/transferencia', transferencia.realizarTransferencia);
router.get('/transferencias', transferencia.obtenerTransferencias);

export default router;