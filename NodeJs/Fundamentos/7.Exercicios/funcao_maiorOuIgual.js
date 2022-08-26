// Crie uma função que receba dois números e retorne se o primeiro é maior
// ou igual ao segundo.

// Exemplos:
// maiorOuIgual(0, 0) // retornará true
// maiorOuIgual(0, "0") // retornará false
// maiorOuIgual(5, 1) // retornará true

function maiorOuIgual(a, b) {
  if (a === b) {
    return true;
  } if (a > b) {
    return true;
  }
  return false;
}

console.log(maiorOuIgual(0, 0));
console.log(maiorOuIgual(0, '0'));
console.log(maiorOuIgual(5, 1));
