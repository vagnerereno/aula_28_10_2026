const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Produto = require('./produtoModelo');

router.get('/produtos', async(req, res) => {
    const produtos = await Produto.listarProdutos();
    res.json(produtos);
});

router.get('/produtos/:id', async(req, res) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).json({mensagem: 'ID inválido'});
    }

    const produto = await Produto.buscarProdutosPorId(req.params.id);

    if (!produto) {
        return res.status(404).json({mensagem: 'Produto não encontrado'});
    }

    res.json(produto);
});

router.post('/produtos', async(req,res) => {
    const novoProduto = await Produto.criarProduto(req.body);
    res.status(201).json(novoProduto);
});

module.exports = router;