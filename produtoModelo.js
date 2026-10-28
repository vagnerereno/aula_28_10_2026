const Produto = require('./produtoSchema');

async function listarProdutos() {
    return await Produto.find();
}

async function buscarProdutosPorId(id){
    return await Produto.findById(id);
}

async function criarProduto(dados) {
    const produto = new Produto(dados);
    return await produto.save();
}

module.exports = {
    listarProdutos,
    buscarProdutosPorId,
    criarProduto
};