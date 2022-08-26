// Metodos do Array

const numeros = [1, 2, 3, 4, 5];

// push - adicionando um elemento novo no final do array
numeros.push(6);

// join - juntar todos os elementos do array em uma string separadas pelo elemento usado
console.log(numeros.join(' - '));

// concat - criar um novo array adicionando elementos concatenados

const numeros2 = numeros.concat(7, 8, 9);
console.log(numeros2);

// includes - diz se um numero esta incluso dentro de um array, retorna True ou False

console.log(numeros.includes(6)); // Esperado: True
console.log(numeros.includes(10)); // Esperado: False

// indexOf - recebe como parametro um numero e procura no array o indice do primeiro
//           elemento que corresponde ao numero, para procurar um segundo numero igual
//           que esteja mais adiante, é preciso colocar um segundo parametro indicando

console.log(numeros.indexOf(3));
