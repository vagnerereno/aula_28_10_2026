// public/script.js
const formProduto = document.getElementById('form-produto');
const listaProdutos = document.getElementById('lista-produtos');
const btnListar = document.getElementById('btn-listar');
const btnBuscar = document.getElementById('btn-buscar');
const resultadoBusca = document.getElementById('resultado-busca');


async function listarProdutos() {
 const resposta = await fetch('/produtos');
 const produtos = await resposta.json();


 listaProdutos.innerHTML = '';


 if (produtos.length === 0) {
  listaProdutos.innerHTML = '<p>Nenhum produto cadastrado.</p>';
  return;
 }


 produtos.forEach((produto) => {
  const div = document.createElement('div');
  div.classList.add('produto');


  div.innerHTML = `
   <strong>${produto.nome}</strong><br>
   Preço: R$ ${Number(produto.preco).toFixed(2)}<br>
   Descrição: ${produto.descricao || 'Sem descrição'}<br>
   ID: ${produto.id}
  `;


  listaProdutos.appendChild(div);
 });
}


async function cadastrarProduto(evento) {
 evento.preventDefault();


 const produto = {
  nome: document.getElementById('nome').value,
  preco: document.getElementById('preco').value,
  descricao: document.getElementById('descricao').value
 };


 const resposta = await fetch('/produtos', {
  method: 'POST',
  headers: {
   'Content-Type': 'application/json'
  },
  body: JSON.stringify(produto)
 });


 const novoProduto = await resposta.json();


 alert(`Produto cadastrado com id ${novoProduto.id}`);
 formProduto.reset();
 listarProdutos();
}


async function buscarProdutoPorId() {
 const id = document.getElementById('busca-id').value;


 if (!id) {
  resultadoBusca.innerHTML = '<p class="mensagem">Digite um id para buscar.</p>';
  return;
 }


 const resposta = await fetch(`/produtos/${id}`);


 if (resposta.status === 404) {
  resultadoBusca.innerHTML = '<p class="mensagem">Produto não encontrado.</p>';
  return;
 }


 const produto = await resposta.json();


 resultadoBusca.innerHTML = `
  <div class="mensagem">
   <strong>${produto.nome}</strong><br>
   Preço: R$ ${Number(produto.preco).toFixed(2)}<br>
   Descrição: ${produto.descricao || 'Sem descrição'}<br>
   ID: ${produto.id}
  </div>
 `;
}


formProduto.addEventListener('submit', cadastrarProduto);
btnListar.addEventListener('click', listarProdutos);
btnBuscar.addEventListener('click', buscarProdutoPorId);


listarProdutos();