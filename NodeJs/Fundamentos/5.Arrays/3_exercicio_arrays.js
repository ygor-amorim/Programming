const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for(let numero of numeros.reverse()) {
// numero === 1 ? null: console.log(numero-1)
// }

console.log('Imprimir o array numeros de tras pra frente a partir do 9 de 2 em 2');
let valores = '';
for (let indice = numeros.length - 2; indice >= 0; indice -= 2) {
  valores += `${numeros[indice]} `;
}
console.log(valores);
