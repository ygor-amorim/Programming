// Respectivamente: String, Numero Inteiro/Literal, Float

console.log('Caneta');
console.log(10);
console.log(6.4);
console.log(1.09);

// Definindo variável para armazenar informação
// Obs: forma bem rudimentar de criar variável em Js

const nomeProduto = 'Caneta BIC';
const quantidade = 10;
const preco = 6.4;
const imposto = 1.23;
const precoFinal = preco * imposto;
const categoria = 'Papelaria';

console.log(nomeProduto);
console.log(quantidade);
console.log(preco);
console.log(imposto);
console.log(precoFinal);

// Forma mais moderna de criar variáveis

const nomeUsuário = 'ygwr';

console.log(nomeUsuário);

// Concatenaçao de Strings

console.log(`Produto: ${nomeProduto
}, Categoria: ${categoria
}, Preço: ${preco
}, Imposto: ${imposto
}, Preço Final: ${precoFinal}`);
