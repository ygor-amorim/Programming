// Desenvolva uma função que recebe dois números inteiros não negativos
// (maiores ou iguais a zero) e realize a multiplicação deles.
// Porém, não utilize o operador de mutiplicação.

// Exemplo:
// multiplicar(5, 5) // retornará 25
// multiplicar(0, 7) // retornará 0

function multiplicar(a, b) {
  if (a === 0 || b === 0) {
    return 0;
  }
  let multiplicacao = null;
  for (;a > 0; a--) {
    multiplicacao += b;
  }
  return multiplicacao;
}

console.log(multiplicar(5, 5)); // retornará 25
console.log(multiplicar(0, 7)); // retornará 0
console.log(multiplicar(1, 3)); // retornará 3
console.log(multiplicar(4, 8)); // retornará 32
console.log(multiplicar(7, 7)); // retornará 49
console.log(multiplicar(2, 6)); // retornará 12
