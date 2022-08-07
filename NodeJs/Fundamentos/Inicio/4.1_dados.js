// Respectivamente: String, Numero Inteiro/Literal, Float

console.log("Caneta")
console.log(10)
console.log(6.4)
console.log(1.09)


// Definindo variável para armazenar informação
// Obs: forma bem rudimentar de criar variável em Js

var nomeProduto = "Caneta BIC";
var quantidade = 10;
var preco = 6.4;
var imposto = 1.23;
var precoFinal = preco * imposto;
let categoria = "Papelaria";

console.log(nomeProduto);
console.log(quantidade);
console.log(preco);
console.log(imposto);
console.log(precoFinal);

// Forma mais moderna de criar variáveis

let nomeUsuário = "ygwr";

console.log(nomeUsuário)

// Concatenaçao de Strings


console.log("Produto: " + nomeProduto
    + ", Categoria: " + categoria
    + ", Preço: " + preco
    + ", Imposto: " + imposto
    + ", Preço Final: " + precoFinal
    )
