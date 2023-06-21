const express = require('express')
const { pool } = require('../postgresql');
const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM ficha');
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar fichas' });
    }
});

  module.exports = router