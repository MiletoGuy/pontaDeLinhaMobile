const express = require('express')
const { pool } = require('../postgresql');
const router = express.Router()

router.post('/', async (req, res) => {
    const login = req.body.login
    const senha = req.body.senha

    if (!login || !senha) {
        return res.json({ auth: false, message: 'Login e senha são obrigatórios' });
    }

    try {
        const { rows } = await pool.query('SELECT * FROM usuarios WHERE login = $1 AND senha = $2', [login, senha]);
        if (!rows[0]){
            res.json({auth: false})
        }
        else {
            res.json({auth: true, userId: rows[0].id})
        }
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao efetuar login' });
    }
});

  module.exports = router