/* Os operadores relacionais são:
Maior que (>), Maior ou igual (>=), Menor que (<),
Menor ou igual (<=), Igual (==) e Diferente (!=)

Estes operadores tem como resultado sempre verdadeiro ou falso.

*/

// Valores literais

console.log(7 > 6);
console.log(7 >= 7);
console.log(3 < 2);
console.log(3 <= 5);
console.log(6 == 6);
console.log(6 != 7);
console.log()

// Valores com variável

let a = 5
let b = 7

console.log(a > b);
console.log(a >= b);
console.log(a < b);
console.log(a <= b);
console.log(a == b);
console.log(a != b);
console.log()


// Comparação entre tipos diferentes e tipos iguais

a = 1
b = "1"

console.log(a == b);
console.log(a === b); // a é estritamente igual a b?

console.log(a != b);
console.log(a !== b); // a é estritamente diferente de b? 

