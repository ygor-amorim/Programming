const a = 10;
const b = 28;
operacao = '2'; // + - * / %

let resultado;

if (operacao === '+') {
  resultado = a + b;
} else if (operacao === '-') {
  resultado = a - b;
} else if (operacao === '*') {
  resultado = a * b;
} else if (operacao === '/') {
  resultado = a / b;
} else if (operacao === '%') {
  resultado = a % b;
} else {
  resultado = undefined;
}

console.log(a, operacao, b, '=', resultado);

if (resultado === undefined) {
  console.log('Operação inválida!');
}
