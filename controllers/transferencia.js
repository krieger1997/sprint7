// const pool = require('../db/db');
import pool from '../db/db.js';
// const queries = require('../db/queries');
import queries from '../db/queries.js';


const realizarTransferencia = async (req, res) => {
    const client = await pool.connect();
    try {
        await client.query('BEGIN');

        const { emisor, receptor, monto } = req.body;

        // Verificar que el emisor tiene suficiente balance para la transferencia
        const emisorResult = await client.query(queries.emisorQuery, [emisor]);
        const emisorBalance = emisorResult.rows[0].balance;
        if (emisorBalance < monto) {
            throw new Error('Saldo insuficiente para realizar la transferencia');
        }

        // Restar el monto del emisor y sumarlo al receptor
        await client.query(queries.actualizarEmisorQuery, [monto, emisor]);
        await client.query(queries.actualizarReceptorQuery, [monto, receptor]);

        // Registrar la transferencia
        await client.query(queries.transferenciaQuery, [emisor, receptor, monto]);

        await client.query('COMMIT');

        res.json({ message: 'Transferencia realizada exitosamente' });
    } catch (error) {
        await client.query('ROLLBACK');
        console.error('Error al realizar la transferencia:', error);
        res.status(500).json({ error: error.message });
    } finally {
        client.release();
    }
};

// Ruta para obtener todas las transferencias
const obtenerTransferencias = async (req, res) => {
    try {
        const { rows } = await pool.query(queries.obtenerTransferencias);
        res.json(rows);
    } catch (error) {
        console.error('Error al obtener transferencias:', error);
        res.status(500).json({ error: 'Algo salió mal al obtener las transferencias' });
    }
};


export default {
    realizarTransferencia,
    obtenerTransferencias,
};  