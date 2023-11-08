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

router.get('/:id', async (req, res) => {
    const userId = req.params.id; // Obtém o ID do parâmetro da rota
    try {
        const { rows } = await pool.query('SELECT * FROM usuarios WHERE id = $1', [userId]);
        if (rows.length === 0) {
            res.status(404).json({ message: 'Usuário não encontrado' });
        } else {
            res.json(rows[0]); // Retorna o primeiro usuário encontrado
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar usuário' });
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