// primeira forma

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}
console.log();
console.log();
console.log();


// segunda forma - foreach
console.log("For each exemplo 1")
const notas = [7, 8, 3, 5, 10, 9, 8, 8];

for (let nota of notas) {
  console.log(nota);

}



// imprimindo as notas umas ao lado da outra 
console.log("");
console.log("For each exemplo 2");
let valores = '';
for (nota of notas) {
  valores += nota + ' '
}

console.log(valores);

// imprimindo os indices

console.log("For each exemplo 3 - indices");
for (let indice in notas) {
  console.log(indice)
}