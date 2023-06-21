const express = require('express');

const app = express();
app.use(express.json());

const rotaUsuarios = require('./routes/usuarios')
const rotaFichas = require('./routes/fichas')
const rotaLogin = require('./routes/login')

app.use('/usuarios', rotaUsuarios)
app.use('/fichas', rotaFichas)
app.use('/login', rotaLogin)

app.listen(3000, () => {
  console.log('API iniciada na porta 3000');
});
