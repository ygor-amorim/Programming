const produto = {
  nome: 'iPad',
  preco: 5600,
  desconto: 0.77,
  precoComDesconto() {
    return this.preco * (1 - this.desconto);
  },
};

console.log(produto.precoComDesconto());
