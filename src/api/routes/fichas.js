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
  
  router.put('/:id', async (req, res) => {
    const { id } = req.params; // Pega o ID da ficha a ser atualizada
    const { nome_completo, cpf } = req.body;

    try {
        const query = 'UPDATE ficha SET nome_completo = $1, cpf = $2 WHERE id = $3';
        const values = [nome_completo, cpf, id];
        await pool.query(query, values);

        res.json({ success: true, message: 'Ficha atualizada com sucesso' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao atualizar ficha' });
    }
});


  module.exports = router