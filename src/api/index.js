const express = require('express');
const { Pool } = require('pg');

// Configurações do banco de dados
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'pontadelinha',
  password: 'admin',
  port: 5432,
});

// Criar uma instância do Express
const app = express();
app.use(express.json());

// Rota para buscar todos os usuários
app.get('/usuarios', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM usuarios');
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar usuários' });
  }
});

// Rota para buscar todos os endereços
app.get('/enderecos', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM endereco');
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar endereços' });
  }
});

// Rota para buscar todas as fichas
app.get('/fichas', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM ficha');
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar fichas' });
  }
});

// Iniciar o servidor
app.listen(3000, () => {
  console.log('API iniciada na porta 3000');
});
