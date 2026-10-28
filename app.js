// app.js
const express = require('express');
const produtoRotas = require('./produtoRotas');
const conectar = require('./db');

const app = express();
const porta = 3000;

app.use(express.json());
app.use(express.static('public'));
app.use(produtoRotas);


app.get('/api', (req, res) => {
 res.send('API de Produtos com Express e MySQL');
});

conectar()
    .then(() => {
     app.listen(porta, () => {
      console.log(`Servidor rodando em http://localhost:${porta}`);
     });
    })
    .catch((erro) => {
     console.error('Erro ao conectar ao MongoDB: ', erro)
    });

