// const { Router } = require('express');
import { Router } from 'express';
// const controller = require('../controllers/usuario'); 
import inicio from '../controllers/comun.js';
import  usuario  from '../controllers/usuario.js'
import transferencia from '../controllers/transferencia.js';


const router = Router();

router.get('/', inicio.inicio);
router.post('/usuario', usuario.agregarUsuario);
router.get('/usuarios', usuario.obtenerUsuarios);
router.put('/usuario', usuario.actualizarUsuario);
router.delete('/usuario', usuario.eliminarUsuario);
router.post('/transferencia', transferencia.realizarTransferencia);
router.get('/transferencias', transferencia.obtenerTransferencias);

export default router;