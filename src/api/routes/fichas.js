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

router.post('/', async (req, res) => {
    try {
      const { nome_completo, cpf } = req.body;
      const query = 'INSERT INTO ficha (nome_completo, cpf) VALUES ($1, $2)';
      const values = [nome_completo, cpf];
      await pool.query(query, values);
      res.status(201).json({success: true, message: 'Ficha registrada com sucesso' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao registrar ficha' });
    }
  });
  

  module.exports = router