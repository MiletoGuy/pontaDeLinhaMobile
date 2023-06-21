const express = require('express')
const { pool } = require('../postgresql');
const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM usuarios');
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar usuários' });
    }
});

router.post('/', async (req, res) => {
    try {
      const { nome_completo, cpf, nivel_acesso, login, senha } = req.body;
      const query = 'INSERT INTO usuarios (nome_completo, cpf, nivel_acesso, login, senha) VALUES ($1, $2, $3, $4, $5)';
      const values = [nome_completo, cpf, nivel_acesso, login, senha];
      await pool.query(query, values);
      res.status(201).json({success: true, message: 'Usuário registrado com sucesso' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao registrar usuário' });
    }
  });
  

  module.exports = router